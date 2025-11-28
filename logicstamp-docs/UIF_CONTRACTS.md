# UIF Contracts

UIF (Unified Interface Format) contracts are machine-readable descriptions of your React/TypeScript components that capture their structure, behavior, and API. LogicStamp extracts these contracts from your codebase to enable semantic change detection, AI context generation, and contract verification.

## What is a UIF Contract?

A UIF contract is a structured representation of a component that includes:

- **Structural footprint** – Variables, hooks, components, and functions used
- **Logic signature** – Props, events, and state that define the component's API
- **Style metadata** – Visual and layout information (when `--include-style` is used)
- **Semantic hash** – Unique identifier based on the component's logic (not implementation details)
- **File hash** – Content-based hash for change detection

Contracts are extracted automatically from your TypeScript/React files and embedded in LogicStamp bundles.

## Contract Structure

Each UIF contract follows the `UIFContract` schema (version `0.3`):

```json
{
  "type": "UIFContract",
  "schemaVersion": "0.3",
  "kind": "react:component",
  "description": "Component description from JSDoc",
  "version": {
    "variables": ["count", "isOpen"],
    "hooks": ["useState", "useEffect"],
    "components": ["Button", "Card"],
    "functions": ["handleClick", "validate"]
  },
  "logicSignature": {
    "props": {
      "onClick": {
        "type": "function",
        "signature": "() => void"
      },
      "label": {
        "type": "string",
        "optional": false
      }
    },
    "events": {
      "onSubmit": {
        "type": "function",
        "signature": "(data: FormData) => void"
      }
    },
    "state": {
      "isLoading": {
        "type": "boolean"
      }
    }
  },
  "style": {
    "styleSources": {
      "tailwind": {
        "categories": {
          "layout": ["flex", "flex-col", "items-center"],
          "spacing": ["py-4", "px-6", "gap-2"],
          "colors": ["bg-blue-500", "text-white"],
          "typography": ["text-lg", "font-semibold"]
        },
        "breakpoints": ["md", "lg"],
        "classCount": 8
      }
    },
    "layout": {
      "type": "flex",
      "hasHeroPattern": false
    },
    "visual": {
      "colors": ["bg-blue-500", "text-white"],
      "spacing": ["py-4", "px-6"],
      "radius": "md"
    }
  },
  "semanticHash": "uif:1a27d0944bbaaf561ee05a01",
  "fileHash": "uif:1f0fa0e2c8958d7fc1696036"
}
```

## Contract Fields

### `type`
Always `"UIFContract"` to identify the contract type.

### `schemaVersion`
Schema version string (currently `"0.3"`). Used for compatibility checking and validation.

### `kind`
Component type identifier:
- `"react:component"` – React functional component
- `"react:hook"` – Custom React hook
- `"typescript:module"` – TypeScript module/utility

### `description`
Human-readable description extracted from JSDoc comments or inferred from the component name.

### `version`
Structural composition of the component:

| Field | Type | Description |
|-------|------|-------------|
| `variables` | `string[]` | Named variables declared in the component |
| `hooks` | `string[]` | React hooks used (useState, useEffect, etc.) |
| `components` | `string[]` | Child components imported and used |
| `functions` | `string[]` | Named functions defined in the component |

**Note:** This captures the structural footprint, not implementation details. Adding a new hook or function changes the version.

### `logicSignature`
The public API contract of the component:

#### `props`
Object mapping prop names to their type information:
- `type` – TypeScript type (e.g., `"string"`, `"number"`, `"function"`)
- `signature` – Function signature for function props (e.g., `"() => void"`)
- `optional` – Boolean indicating if the prop is optional

#### `events`
Object mapping event names to their signatures. For React components, these are typically callback props that represent events.

#### `state`
Object mapping state variable names to their types. Represents the component's internal state structure.

### `style` (Optional)
Visual and layout metadata extracted when using `stamp context style` or `stamp context --include-style`. This field is only included when style information is detected.

The `style` object contains:

- **`styleSources`** – Identifies styling approaches used:
  - `tailwind` – Tailwind CSS utility classes categorized by type (layout, spacing, colors, typography, borders, effects) with breakpoint information
  - `scssModule` / `cssModule` – Path to imported SCSS/CSS module file
  - `scssDetails` / `cssDetails` – Parsed details from style files (selectors, properties, SCSS features)
  - `inlineStyles` – Boolean indicating `style={{...}}` usage
  - `styledComponents` – Styled-components/Emotion usage with component names and theme information
  - `motion` – Framer Motion usage with components, variants, and feature flags

- **`layout`** – Structural layout information:
  - `type` – Layout type: "flex", "grid", "relative", or "absolute"
  - `cols` – Grid column pattern (e.g., "grid-cols-2 md:grid-cols-3")
  - `hasHeroPattern` – Boolean indicating hero section pattern
  - `hasFeatureCards` – Boolean indicating feature card grid pattern
  - `sections` – Array of identified page sections

- **`visual`** – Visual design patterns:
  - `colors` – Array of color utility classes (sorted, limited to top 10)
  - `spacing` – Array of spacing utility classes (sorted, limited to top 10)
  - `radius` – Most common border radius pattern
  - `typography` – Array of typography classes (sorted, limited to top 10)

- **`animation`** – Animation and motion information:
  - `library` – Animation library: "framer-motion" or "css"
  - `type` – Animation type (e.g., "fade-in", "slide")
  - `trigger` – Trigger type (e.g., "inView", "hover", "click")

- **`pageLayout`** – Page-level layout information:
  - `pageRole` – Page role (e.g., "landing", "dashboard")
  - `sections` – Array of page sections
  - `ctaCount` – Number of call-to-action elements

**Note:** Style metadata is only included when style information is detected. Components without style usage will not have a `style` field.

See [STYLE.md](./cli/STYLE.md) for comprehensive documentation on style metadata extraction.

### `semanticHash`
Unique hash based on the component's logic and contract. Changes when:
- Props are added/removed/renamed
- Events change
- State structure changes
- Structural footprint changes (hooks, components, functions)

Does **not** change for:
- Comments
- Whitespace/formatting
- Implementation details that don't affect the contract

See [HASHES.md](./HASHES.md) for detailed information about semantic hashes.

### `fileHash`
Content-based hash of the raw file. Changes for any file modification. Used to validate that a stored contract still matches the actual file.

See [HASHES.md](./HASHES.md) for detailed information about file hashes.

## @uif Header Blocks

LogicStamp can extract contracts from JSDoc `@uif` header blocks in your source files. This allows you to provide explicit contract information or override automatic extraction.

### Basic Format

```typescript
/**
 * @uif Contract
 * @description Button component for user interactions
 * @kind react:component
 */
export function Button({ onClick, label }: ButtonProps) {
  // ...
}
```

### Including Contract Headers in Context

When generating context with `--include-code header`, LogicStamp includes the `@uif` header block in the bundle:

```json
{
  "entryId": "src/components/Button.tsx",
  "contract": {
    "type": "UIFContract",
    "schemaVersion": "0.3",
    "kind": "react:component",
    "description": "Button component for user interactions",
    // ... rest of contract
  },
  "codeHeader": "/**\n * @uif Contract\n * @description Button component for user interactions\n * @kind react:component\n */"
}
```

**Use cases:**
- Provide explicit contract documentation
- Override automatic contract extraction
- Include contract metadata in AI context without full source

## Contract Extraction

LogicStamp automatically extracts contracts from TypeScript/React files by:

1. **Parsing the AST** – Analyzes the abstract syntax tree to understand structure
2. **Extracting types** – Reads TypeScript type information for props, state, and events
3. **Identifying dependencies** – Detects hooks, components, and functions used
4. **Computing hashes** – Generates semantic and file hashes

### Automatic Detection

Contracts are extracted automatically for:
- React functional components (`.tsx` files)
- Custom React hooks (files with `use` prefix)
- TypeScript modules (`.ts` files)

### Manual Override

Use `@uif` header blocks to provide explicit contract information or override automatic extraction.

## What Changes a Contract?

### Changes `semanticHash` (meaningful changes)

- Adding/removing/renaming props
- Changing prop types
- Adding/removing events
- Changing state structure
- Adding/removing hooks
- Adding/removing child components
- Adding/removing named functions

### Does Not Change `semanticHash` (cosmetic changes)

- Comments
- Whitespace/formatting
- Implementation details inside functions
- Variable names (unless they're part of the public API)
- Internal logic refactors that don't affect props/events/state

### Always Changes `fileHash`

- Any file content modification
- Including cosmetic changes

## Contract Verification

Use `stamp context validate` to verify that contracts in your context files match the expected schema:

```bash
# Validate all context files
stamp context validate

# Validate a specific file
stamp context validate src/components/context.json
```

The validator checks:
- Contract structure matches `UIFContract` schema
- Schema version is `0.3`
- Required fields are present
- Hash formats are correct

## Contract Comparison

Use `stamp context compare` to detect contract changes across your project:

```bash
# Compare all context files
stamp context compare

# Compare two specific files
stamp context compare old.json new.json
```

The compare command detects:
- **Changed contracts** – Components with modified semantic hashes
- **Added contracts** – New components
- **Removed contracts** – Deleted components

## Integration with Bundles

Contracts are embedded within LogicStamp bundles:

```json
{
  "type": "LogicStampBundle",
  "schemaVersion": "0.1",
  "entryId": "src/components/Button.tsx",
  "graph": {
    "nodes": [
      {
        "entryId": "src/components/Button.tsx",
        "contract": {
          "type": "UIFContract",
          "schemaVersion": "0.3",
          // ... contract data
        }
      }
    ],
    "edges": []
  }
}
```

Each node in a bundle's dependency graph contains a contract for that component.

## Best Practices

1. **Keep contracts stable** – Avoid unnecessary changes to props, events, or state structure
2. **Use semantic hashes** – Rely on `semanticHash` to detect meaningful changes, not `fileHash`
3. **Document with @uif** – Use `@uif` header blocks for explicit contract documentation
4. **Validate regularly** – Run `stamp context validate` to catch schema drift
5. **Compare before commits** – Use `stamp context compare` to review contract changes

## See Also

- [HASHES.md](./HASHES.md) – Detailed information about semantic and file hashes
- [SCHEMA.md](./SCHEMA.md) – Complete schema reference for all LogicStamp types
- [USAGE.md](./USAGE.md) – How to generate and use context files with contracts
- [VALIDATE.md](./VALIDATE.md) – Contract validation guide

