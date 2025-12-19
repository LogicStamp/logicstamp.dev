# logicstamp_refresh_snapshot

> **STEP 1** of the LogicStamp MCP workflow. Run this first to create a snapshot of your codebase.

## Overview

`logicstamp_refresh_snapshot` runs LogicStamp Context analysis on a project and creates a snapshot. This command executes `stamp context` under the hood and generates context bundles for all components in your codebase. 

**Important:** This command only returns a high-level summary (component counts, token estimates, folder structure). It does NOT contain component details, props, dependencies, or style metadata. You must use `logicstamp_list_bundles` and `logicstamp_read_bundle` to access that detailed information.

## When to Use

- **Before making edits** - Create a baseline snapshot to compare against later
- **Initial codebase analysis** - First step when analyzing a new project
- **After major changes** - Refresh the snapshot when you've made significant code changes
- **Style analysis** - Set `includeStyle: true` when you need visual/design information

## Parameters

### `profile` (optional)
- **Type:** `'llm-chat' | 'llm-safe' | 'ci-strict'`
- **Default:** `'llm-chat'`
- **Description:** Analysis profile that controls how components are analyzed
  - `llm-chat` - Balanced analysis for AI chat assistants (default)
  - `llm-safe` - More conservative analysis, suitable for production
  - `ci-strict` - Strict validation mode for CI/CD pipelines

### `mode` (optional)
- **Type:** `'header' | 'full' | 'none'`
- **Default:** `'header'`
- **Description:** Code inclusion mode
  - `none` - Contracts only (smallest, ~79% token savings)
  - `header` - Contracts with JSDoc headers (balanced, ~65% token savings)
  - `full` - Complete source code (largest, no savings)

### `includeStyle` (optional)
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Include style metadata in context bundles. When `true`, extracts:
  - **Tailwind CSS classes** - Categorized by layout, spacing, colors, typography, borders, effects
  - **SCSS/CSS Modules** - Module imports, selectors, properties, SCSS features
  - **framer-motion** - Motion components, animation variants, gesture handlers
  - **Color palettes** - Extracted color classes
  - **Spacing patterns** - Padding and margin utilities
  - **Layout metadata** - Flex/grid patterns, responsive breakpoints
  - **Animation metadata** - Animation types and triggers

  Style data appears in the `style` field of component contracts when you read bundles with `logicstamp_read_bundle`. The summary from `refresh_snapshot` does NOT show style info - you must read bundles to see it.

  **Use `includeStyle: true` for:**
  - Design system analysis
  - Visual consistency checks
  - When the user asks about styling, colors, spacing, animations, or visual design

### `projectPath` (required)
- **Type:** `string`
- **Description:** **CRITICAL: Absolute path to project root. REQUIRED - must always be provided.** When `stamp init` has been run, MCP clients may omit this parameter, causing hangs. This parameter is REQUIRED for the tool to work correctly. The server will resolve relative paths to absolute paths automatically.

### `cleanCache` (optional)
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Manually force cleanup of `.logicstamp` cache directory. Cache is automatically cleaned if corruption or path mismatches are detected. Only set to `true` if you're experiencing cache-related issues.

## Output

Returns a `RefreshSnapshotOutput` object with:

### `snapshotId`
- **Type:** `string`
- **Description:** Unique identifier for this snapshot (e.g., `"snap_1764033034172_0"`). Use this ID in subsequent commands.

### `projectPath`
- **Type:** `string`
- **Description:** Absolute path to the analyzed project

### `profile`
- **Type:** `string`
- **Description:** The analysis profile used

### `mode`
- **Type:** `string`
- **Description:** The code inclusion mode used

### `includeStyle`
- **Type:** `boolean`
- **Description:** Whether style metadata was included

### `summary`
High-level statistics about the codebase:

- `totalComponents` - Total number of components analyzed
- `totalBundles` - Total number of bundles generated
- `totalFolders` - Total number of folders with context files
- `totalTokenEstimate` - Overall token count estimate
- `tokenEstimates` - Per-model token estimates:
  - `gpt4oMini` - GPT-4o-mini token count
  - `gpt4oMiniFullCode` - GPT-4o-mini token count with full code
  - `claude` - Claude token count
  - `claudeFullCode` - Claude token count with full code
- `missingDependencies` - Array of missing dependency paths

### `folders`
Array of folder metadata objects, each containing:
- `path` - Relative path from project root
- `bundles` - Number of bundles in this folder
- `components` - Array of component file names
- `tokenEstimate` - Estimated token count for this folder
- `isRoot` - Whether this is an application entry point
- `rootLabel` - Human-readable label (e.g., "Next.js App", "Project Root")

## Example Usage

### Basic Usage

```json
{
  "name": "logicstamp_refresh_snapshot",
  "arguments": {
    "projectPath": "/absolute/path/to/project"
  }
}
```

This creates a snapshot with default settings (`profile: 'llm-chat'`, `mode: 'header'`, `includeStyle: false`). **Note:** `projectPath` is required.

### With Custom Profile

```json
{
  "name": "logicstamp_refresh_snapshot",
  "arguments": {
    "projectPath": "/absolute/path/to/project",
    "profile": "llm-safe"
  }
}
```

### With Style Metadata

```json
{
  "name": "logicstamp_refresh_snapshot",
  "arguments": {
    "projectPath": "/absolute/path/to/project",
    "includeStyle": true
  }
}
```

### Full Code Mode

```json
{
  "name": "logicstamp_refresh_snapshot",
  "arguments": {
    "projectPath": "/absolute/path/to/project",
    "mode": "full"
  }
}
```

### Complete Example

```json
{
  "name": "logicstamp_refresh_snapshot",
  "arguments": {
    "profile": "llm-safe",
    "mode": "header",
    "includeStyle": true,
    "projectPath": "/absolute/path/to/project"
  }
}
```

## Example Output

```json
{
  "snapshotId": "snap_1764033034172_0",
  "projectPath": "/path/to/project",
  "profile": "llm-chat",
  "mode": "header",
  "includeStyle": false,
  "summary": {
    "totalComponents": 45,
    "totalBundles": 45,
    "totalFolders": 8,
    "totalTokenEstimate": 125000,
    "tokenEstimates": {
      "gpt4oMini": 125000,
      "gpt4oMiniFullCode": 450000,
      "claude": 120000,
      "claudeFullCode": 420000
    },
    "missingDependencies": []
  },
  "folders": [
    {
      "path": "src/components",
      "bundles": 20,
      "components": ["Button.tsx", "Card.tsx", "Modal.tsx"],
      "tokenEstimate": 50000,
      "isRoot": false
    },
    {
      "path": "src/pages",
      "bundles": 5,
      "components": ["index.tsx", "about.tsx"],
      "tokenEstimate": 30000,
      "isRoot": true,
      "rootLabel": "Next.js App"
    }
  ]
}
```

## Workflow

This is **STEP 1** of the LogicStamp MCP workflow:

1. **Call `logicstamp_refresh_snapshot`** - Creates snapshot and returns summary
2. **Call `logicstamp_list_bundles`** - Lists available bundles using the `snapshotId`
3. **Call `logicstamp_read_bundle`** - Read specific bundles to get detailed component information

## Important Notes

- **Summary Only:** The output does NOT contain component details, props, dependencies, or style metadata. You must use `logicstamp_list_bundles` and `logicstamp_read_bundle` to access that data.
- **Style Metadata:** If `includeStyle: true`, style data will be available in bundles when you read them with `logicstamp_read_bundle`, but NOT in the summary.
- **Non-Interactive:** The command uses `--skip-gitignore` and `--quiet` flags to ensure non-interactive operation.
- **Snapshot Storage:** The snapshot is stored in the MCP server's state and can be referenced by `snapshotId` in subsequent commands.

## Related Commands

- [`logicstamp_list_bundles`](./list-bundles.md) - List bundles in a snapshot (STEP 2)
- [`logicstamp_read_bundle`](./read-bundle.md) - Read detailed bundle information (STEP 3)
- [`logicstamp_compare_snapshot`](./compare-snapshot.md) - Compare snapshots to detect changes

## Error Handling

If the command fails, it will throw an error with a descriptive message. Common errors:

- **Project path not found** - The specified `projectPath` doesn't exist
- **No components found** - The project doesn't contain any analyzable components
- **Permission errors** - Insufficient permissions to read project files
- **Invalid project structure** - The project structure is incompatible with LogicStamp
- **Cache corruption** - If you encounter cache-related errors, the cache is automatically cleaned. Use `cleanCache: true` to force cleanup if needed

## See Also

- [MCP Integration Guide](../mcp_integration.md) - Complete MCP server documentation
- [Tool Description](../tool_description.md) - LogicStamp Context capabilities
- [Quick Start](../quickstart.md) - Getting started guide

