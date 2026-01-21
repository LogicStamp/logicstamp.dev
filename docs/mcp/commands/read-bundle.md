# logicstamp_read_bundle

> **STEP 3** of the LogicStamp MCP workflow. Call this to get the actual useful data - component contracts, dependencies, and style metadata.

## Overview

`logicstamp_read_bundle` reads the full component bundle from a snapshot. **This is where the actual useful data is.** Call this **after** `logicstamp_list_bundles` to get detailed component information.

The command returns a complete `UIFContract` with:
- **Props** - Types, optional flags, descriptions
- **State variables** - `useState` hooks and their types
- **Hooks used** - All React hooks in the component
- **Dependency graph** - What components/functions this imports
- **Exports** - Default and named exports
- **Source code** - Optional (based on `mode` from `refresh_snapshot`)
- **Style metadata** - If `includeStyle: true` was used in `refresh_snapshot`

**Important:** This is the ONLY way to see component contracts, dependencies, and style information. The `refresh_snapshot` summary does NOT include this data.

## When to Use

- **After listing bundles** - Get detailed information about specific components
- **Component analysis** - Understand component props, state, and dependencies
- **Dependency exploration** - See what a component imports and uses
- **Style analysis** - Access style metadata when `includeStyle: true` was used
- **Code generation** - Get component contracts for AI-assisted code generation

## Parameters

### `snapshotId` (required)
- **Type:** `string`
- **Description:** The snapshot ID returned from `logicstamp_refresh_snapshot`. This identifies which snapshot to read from.

### `bundlePath` (required)
- **Type:** `string`
- **Description:** Relative path to `context.json` file or `context_main.json`. **Get this value from the `bundlePath` field in `logicstamp_list_bundles` output.**
  
  **Examples:**
  - `"context_main.json"` - Read the main index file (returns LogicStampIndex)
  - `"src/components/context.json"` - Read a bundle file (returns LogicStampBundle)
  - `"src/pages/context.json"` - Read a bundle file
  - `"src/utils/context.json"` - Read a bundle file

### `rootComponent` (optional)
- **Type:** `string`
- **Description:** Specific component name to filter within the bundle file. Use the `rootComponent` value from `list_bundles` output if you want a specific component.
  
  If omitted, returns the first bundle in the file.
  
  **Examples:**
  - `"Button"` - Get the Button component bundle
  - `"Card"` - Get the Card component bundle
  - `"HomePage"` - Get the HomePage component bundle

## Output

Returns a `ReadBundleOutput` object with:

### `snapshotId`
- **Type:** `string`
- **Description:** The snapshot ID that was queried

### `bundlePath`
- **Type:** `string`
- **Description:** The bundle path that was read

### `rootComponent`
- **Type:** `string` (optional)
- **Description:** The root component name if specified (only used for bundle files, not index files)

### `bundle` (optional)
- **Type:** `LogicStampBundle`
- **Description:** The complete bundle object (present when reading bundle files, not when reading `context_main.json`). Contains:

### `index` (optional)
- **Type:** `LogicStampIndex`
- **Description:** The complete index object (present when reading `context_main.json`, not when reading bundle files). Contains:
  - `type`: `"LogicStampIndex"`
  - `schemaVersion`: Schema version string
  - `summary`: Summary statistics (totalComponents, totalBundles, totalFolders, totalTokenEstimate, tokenEstimates, missingDependencies)
  - `folders`: Array of folder metadata with paths, bundle counts, component lists, and token estimates
  - `projectRoot`: Relative project root path
  - `projectRootAbs`: Absolute project root path

**Note:** The output will contain either `bundle` (for bundle files) or `index` (for `context_main.json`), but not both.

#### Bundle Structure

```typescript
{
  $schema?: string;
  position: string;              // e.g., "1/5"
  type: 'LogicStampBundle';
  schemaVersion: string;
  entryId: string;              // Normalized component path
  depth: number;                // Dependency depth
  createdAt: string;            // ISO timestamp
  bundleHash: string;           // Bundle hash identifier
  graph: {
    nodes: GraphNode[];         // Component nodes with contracts
    edges: GraphEdge[];         // Dependency relationships
  };
  meta: {
    missing: string[];          // Missing dependencies
    source: string;             // Source identifier
  };
}
```

#### GraphNode (Component Contract)

Each node contains a `contract` field with the `UIFContract`:

```typescript
{
  type: 'UIFContract';
  schemaVersion: string;
  kind: 'react:component' | 'ts:module' | 'node:cli' | 'node:api';
  entryId: string;
  entryPathAbs: string;         // Absolute file path
  entryPathRel: string;        // Relative POSIX path
  description: string;          // Natural language summary
  version: {
    variables?: string[];       // Variable declarations
    hooks?: string[];           // React hooks used
    components?: string[];      // Components rendered
    functions?: string[];       // Function declarations
    imports?: string[];         // Import statements
  };
  logicSignature: {
    props: Record<string, PropType>;    // Props with types
    emits: Record<string, EventType>;   // Event handlers
    state?: Record<string, string>;     // useState shapes
  };
  exports?: {
    default?: string;           // Default export name
    named?: string[];           // Named exports
  };
  prediction?: string[];        // Behavioral hints
  nextjs?: {
    directive?: 'client' | 'server';
    isInAppDir?: boolean;
  };
  semanticHash: string;        // Content-based hash
  fileHash: string;            // File-based hash
  style?: {                     // Style metadata (if includeStyle: true)
    styleSources: {
      tailwind?: {
        categories: {
          layout: string[];
          spacing: string[];
          colors: string[];
          typography: string[];
          borders: string[];
          effects: string[];
        };
        breakpoints: string[];
        classCount: number;
      };
      scssModule?: string;
      scssDetails?: {
        selectors: string[];
        properties: string[];
        features: {
          variables: boolean;
          nesting: boolean;
        };
      };
      motion?: {
        components: string[];
        variants: string[];
        features: {
          gestures: boolean;
          viewportAnimations: boolean;
        };
      };
    };
    layout: {
      type: "flex" | "grid";
      cols?: string;
      hasHeroPattern?: boolean;
      hasFeatureCards?: boolean;
    };
    visual: {
      colors: string[];
      spacing: string[];
      radius?: string;
      typography: string[];
    };
    animation?: {
      library: "framer-motion" | "css";
      type: string;
      trigger: string;
    };
  };
}
```

#### GraphEdge (Dependencies)

```typescript
{
  from: string;                 // Source component entryId
  to: string;                   // Target component entryId
  type: 'dependency' | 'uses' | 'usedBy';
}
```

## Example Usage

### Read context_main.json (Project Index)

```json
{
  "name": "logicstamp_read_bundle",
  "arguments": {
    "snapshotId": "snap_1764033034172_0",
    "bundlePath": "context_main.json"
  }
}
```

This returns the complete `LogicStampIndex` with project overview, summary statistics, and folder structure.

### Read First Bundle in File

```json
{
  "name": "logicstamp_read_bundle",
  "arguments": {
    "snapshotId": "snap_1764033034172_0",
    "bundlePath": "src/components/context.json"
  }
}
```

This returns the first bundle in `src/components/context.json`.

### Read Specific Component

```json
{
  "name": "logicstamp_read_bundle",
  "arguments": {
    "snapshotId": "snap_1764033034172_0",
    "bundlePath": "src/components/context.json",
    "rootComponent": "Button"
  }
}
```

This returns the Button component bundle specifically.

## Example Output

### Reading context_main.json

```json
{
  "snapshotId": "snap_1764033034172_0",
  "bundlePath": "context_main.json",
  "index": {
    "type": "LogicStampIndex",
    "schemaVersion": "0.2",
    "projectRoot": ".",
    "summary": {
      "totalComponents": 14,
      "totalBundles": 14,
      "totalFolders": 8,
      "totalTokenEstimate": 5869
    },
    "folders": [
      {
        "path": "src/components",
        "contextFile": "src/components/context.json",
        "bundles": 1,
        "components": ["Button"],
        "tokenEstimate": 353
      }
    ]
  }
}
```

### Reading a Bundle File

```json
{
  "snapshotId": "snap_1764033034172_0",
  "bundlePath": "src/components/context.json",
  "rootComponent": "Button",
  "bundle": {
    "position": "1/20",
    "type": "LogicStampBundle",
    "schemaVersion": "0.3",
    "entryId": "src/components/Button.tsx",
    "depth": 1,
    "createdAt": "2024-01-15T10:30:00Z",
    "bundleHash": "abc123def456",
    "graph": {
      "nodes": [
        {
          "entryId": "src/components/Button.tsx",
          "contract": {
            "type": "UIFContract",
            "schemaVersion": "0.3",
            "kind": "react:component",
            "entryId": "src/components/Button.tsx",
            "entryPathAbs": "/absolute/path/src/components/Button.tsx",
            "entryPathRel": "src/components/Button.tsx",
            "description": "Interactive button component with variant support",
            "version": {
              "hooks": ["useState"],
              "components": ["Icon"],
              "imports": ["react", "./Icon"]
            },
            "logicSignature": {
              "props": {
                "variant": {
                  "type": "\"primary\" | \"secondary\" | \"tertiary\"",
                  "optional": true,
                  "description": "Button style variant"
                },
                "onClick": {
                  "type": "(event: MouseEvent) => void",
                  "optional": true,
                  "description": "Click handler"
                },
                "children": {
                  "type": "React.ReactNode",
                  "optional": false
                }
              },
              "emits": {},
              "state": {
                "isPressed": "boolean"
              }
            },
            "exports": {
              "default": "Button"
            },
            "semanticHash": "hash123",
            "fileHash": "file456"
          },
          "codeHeader": "@uif contract...",
          "fullCode": null
        }
      ],
      "edges": [
        {
          "from": "src/components/Button.tsx",
          "to": "src/components/Icon.tsx",
          "type": "dependency"
        }
      ]
    },
    "meta": {
      "missing": [],
      "source": "stamp"
    }
  }
}
```

## Style Metadata Example

When `includeStyle: true` was used in `refresh_snapshot`, the contract includes a `style` field:

```json
{
  "contract": {
    "type": "UIFContract",
    // ... other fields ...
    "style": {
      "styleSources": {
        "tailwind": {
          "categories": {
            "layout": ["flex", "items-center", "justify-center"],
            "spacing": ["px-4", "py-2", "mb-4"],
            "colors": ["bg-blue-500", "text-white", "hover:bg-blue-600"],
            "typography": ["text-lg", "font-semibold"],
            "borders": ["rounded-lg", "border-2"],
            "effects": ["shadow-md", "transition"]
          },
          "breakpoints": ["md", "lg"],
          "classCount": 12
        }
      },
      "layout": {
        "type": "flex",
        "hasHeroPattern": false,
        "hasFeatureCards": false
      },
      "visual": {
        "colors": ["blue-500", "white", "blue-600"],
        "spacing": ["px-4", "py-2", "mb-4"],
        "radius": "lg",
        "typography": ["text-lg", "font-semibold"]
      }
    }
  }
}
```

## Workflow

This is **STEP 3** of the LogicStamp MCP workflow:

1. ✅ **Call `logicstamp_refresh_snapshot`** - Creates snapshot (STEP 1)
2. ✅ **Call `logicstamp_list_bundles`** - Lists available bundles (STEP 2)
3. ✅ **Call `logicstamp_read_bundle`** - Read specific bundles (STEP 3 - you are here)

## Using the Output

### Component Props
Access props from `bundle.graph.nodes[0].contract.logicSignature.props`:

```typescript
{
  variant: {
    type: "\"primary\" | \"secondary\"",
    optional: true,
    description: "Button style variant"
  }
}
```

### Dependencies
See what components this uses from `bundle.graph.edges`:

```typescript
{
  from: "src/components/Button.tsx",
  to: "src/components/Icon.tsx",
  type: "dependency"
}
```

### State Variables
Access state from `bundle.graph.nodes[0].contract.logicSignature.state`:

```typescript
{
  isPressed: "boolean"
}
```

### Style Information
If `includeStyle: true`, access style metadata from `bundle.graph.nodes[0].contract.style`.

## Important Notes

- **Must call after list_bundles:** Use the `bundlePath` from `logicstamp_list_bundles` output.
- **Multiple bundles per file:** A single `context.json` file can contain multiple bundles. Use `rootComponent` to specify which one.
- **Style metadata:** Only available if `includeStyle: true` was used in `refresh_snapshot`.
- **Code inclusion:** The `codeHeader` and `fullCode` fields depend on the `mode` used in `refresh_snapshot`:
  - `none` - No code included
  - `header` - Only `codeHeader` included
  - `full` - Both `codeHeader` and `fullCode` included

## Related Commands

- [`logicstamp_refresh_snapshot`](./refresh-snapshot.md) - Create snapshot (STEP 1)
- [`logicstamp_list_bundles`](./list-bundles.md) - List bundles (STEP 2)
- [`logicstamp_compare_snapshot`](./compare-snapshot.md) - Compare snapshots to detect changes

## Error Handling

If the command fails, it will throw an error with a descriptive message. Common errors:

- **Snapshot not found** - The `snapshotId` doesn't exist
- **Bundle not found** - The `bundlePath` doesn't exist or the `rootComponent` isn't in that file
- **Invalid bundle path** - The `bundlePath` format is incorrect
- **No bundles in file** - The `context.json` file is empty or corrupted

## See Also

- [MCP Integration Guide](../mcp_integration.md) - Complete MCP server documentation
- [Tool Description](../tool_description.md) - LogicStamp Context capabilities
- [Quick Start](../quickstart.md) - Getting started guide

