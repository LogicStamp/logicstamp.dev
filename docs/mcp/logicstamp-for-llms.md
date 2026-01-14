# LogicStamp: How You Should Use It (For LLMs)

**This document explains LogicStamp from an LLM's perspective. Read this first if you're unsure how LogicStamp works or how to use these tools effectively.**

## What is LogicStamp?

LogicStamp Context is a CLI tool + MCP server that statically analyzes TypeScript codebases and produces **structured, AI-ready context bundles**. Instead of reading raw `.ts/.tsx` files, LogicStamp generates JSON bundles that capture:

- **Component contracts** - Props, state, hooks, events (the component API)
- **Dependency graphs** - What components use what (relationships)
- **Style metadata** - Tailwind classes, SCSS modules, animations, layout patterns (optional)
- **Token estimates** - Cost-aware context generation

### Framework Support

- **React** - Full support (components, hooks, props, styles)
- **Next.js** - Partial support (App / Pages Router analysis)
- **Vue 3** - Partial support (Composition API, `<script setup>`) - *Note: Works with `.ts`/`.tsx` files only, not `.vue` SFC files*
- **UI frameworks** - Material UI, ShadCN/UI, Radix UI, Tailwind CSS, Styled Components, SCSS/CSS Modules

### Key Features

- **AI-ready bundles** - Predictable, structured, deterministic
- **React/Next.js/Vue/TypeScript awareness** - Props, hooks/composables, state, dependencies
- **Style metadata** - Tailwind, SCSS, MUI, shadcn
- **Next.js App Router detection** - Client/server, layout/page analysis
- **Vue 3 Composition API** - ref, reactive, computed, composables
- **Dependency graph** - Imports, cycles, missing dependencies
- **Per-folder bundles** - Organized by your project structure
- **CI validation** - Drift detection, schema validation
- **Security-first** - Automatic secret detection and sanitization
- **Fast, zero-config** - Works out of the box (no config files needed)

## Why LogicStamp? Structured Data vs Raw Source

**You should prefer reading LogicStamp bundles over raw source files.**

Instead of parsing raw source code line-by-line, LogicStamp provides **pre-processed, categorized information** that's immediately actionable:

- **Semantic density** - Information is grouped by meaning (layout, colors, spacing) rather than scattered in code
- **Pre-processed relationships** - Dependency graphs are explicit (`graph.edges`) rather than requiring inference
- **Contract-based APIs** - Component interfaces (`logicSignature.props`) are explicit, no need to read implementation
- **Categorized metadata** - Style patterns, dependencies, and structure are organized for direct querying

**Example:** To answer "What design patterns does the Hero component use?":
- **Raw source**: Read 200+ lines, parse className strings, identify patterns manually
- **Structured**: Read `style.layout.hasHeroPattern: true`, `style.visual.colors: [...]` - answer in seconds

This transforms code analysis from "parse and infer" to "read and reason"—making AI assistants faster and more accurate.

### Key Concept: Bundles Over Raw Code

LogicStamp bundles are **pre-parsed, structured summaries** optimized for AI consumption. They contain:
- Component APIs (props with types, state structure, hooks used)
- Dependency relationships (what imports what)
- Behavioral patterns (hooks, side effects)
- Optional style information (visual/design metadata)

**When to use bundles:**
- Understanding component structure and APIs
- Analyzing dependencies and relationships
- Getting an overview of the codebase architecture
- Understanding component behavior without implementation details
- Answering questions about design patterns, styling, or architecture

**When to read raw code:**
- You need exact implementation details
- Edge cases not clear from summaries
- Debugging specific logic issues
- The bundle doesn't contain enough detail for your task

## The LogicStamp Workflow

**Always follow this workflow when working with a new project:**

1. **Start with `logicstamp_refresh_snapshot`**
   - This scans the project and generates all context files
   - Creates `context_main.json` (the main index) and `context/*.context.json` files (per-folder bundles)
   - Returns a `snapshotId` you'll use for subsequent calls
   - **Default:** The default depth=2 includes nested components (e.g., App → Hero → Button), ensuring you see the full component tree with contracts and styles for all nested components. This is recommended for most React/TypeScript projects with component hierarchies.
   - **Example:** `{ "projectPath": "..." }` - Uses default depth=2. Set `depth: 1` if you only need direct dependencies (e.g., App → Hero but not Hero → Button).

2. **Discover bundles with `logicstamp_list_bundles`**
   - Lists all available bundles with their locations
   - Shows component names, file paths, bundle paths, token estimates
   - Use `folderPrefix` to filter by directory if needed

3. **Read bundles with `logicstamp_read_bundle`**
   - This is where the valuable data is
   - Pass the `bundlePath` from `list_bundles` output
   - Returns complete component contracts with dependency graphs

4. **Only then read raw files** (if needed)
   - Use bundles first to understand structure
   - Drop to raw `.ts/.tsx` files only when bundles don't have enough detail

## Understanding the Output Structure

### `context_main.json` - The Main Index

This is your **entry point** to understand the whole project. It contains:

- **Summary statistics**: Total components, bundles, folders, token estimates
- **Folder entries**: Each folder with components gets an entry showing:
  - `path` - Folder path
  - `contextFile` - Path to this folder's `context.json` file
  - `bundles` - Number of bundles in this folder
  - `components` - List of component file names
  - `tokenEstimate` - Token count for this folder

**How to use it:**
- Start here to understand project scope
- Use `folders` array to discover which bundles to read next
- Follow `contextFile` paths to read specific folder bundles

### `context.json` Files - Per-Folder Bundles

Each folder containing components gets its own `context.json` file. These files contain an **array of bundles** (one bundle per root component).

Each bundle (`LogicStampBundle`) contains:

- **`entryId`** - Path to the root component
- **`graph.nodes[]`** - Array of all components in this bundle (each with a `contract`)
- **`graph.edges[]`** - Array of dependency tuples `[source, target]` showing relationships
- **`meta.missing[]`** - Unresolved dependencies (external packages, missing files, etc.)

Each node's `contract` (`UIFContract`) contains:

- **`kind`** - Component type (`react:component`, `ts:module`, etc.)
- **`description`** - Component description
- **`version`** - Structural composition (variables, hooks, components, functions, imports)
- **`logicSignature.props`** - Complete prop signatures with types, optional flags, descriptions
- **`logicSignature.emits`** - Event/callback signatures
- **`logicSignature.state`** - useState variables with types
- **`exports`** - Default/named exports
- **`semanticHash`** - Logic-based hash (changes when contract changes)
- **`fileHash`** - Content-based hash (changes when file changes)
- **`style`** (optional) - Style metadata if `includeStyle=true` was used

## Code Inclusion Modes

LogicStamp supports different levels of detail:

- **`none`** - Contracts only (~79% token savings vs full)
  - No source code, just component APIs
  - Use for: Architecture analysis, dependency graphs

- **`header`** - Contracts + JSDoc headers (~65% savings, **recommended default**)
  - Includes `@uif` header blocks and function signatures
  - Use for: Most AI interactions, code reviews, understanding interfaces

- **`header+style`** - Header + style metadata (~52% savings)
  - Adds Tailwind classes, SCSS modules, animations, layout patterns
  - Use for: UI/UX discussions, design system analysis, visual consistency

- **`full`** - Complete source code (no savings)
  - Includes entire source files
  - Use for: Deep implementation reviews, complex refactoring

**Default:** `header` mode is recommended for most use cases.

## Style Metadata

When `includeStyle=true` (or using `stamp context style`), bundles include visual/design information:

- **`styleSources`** - Tailwind classes (categorized), SCSS/CSS modules, framer-motion, Material UI
- **`layout`** - Layout type (flex/grid), column patterns, hero/feature card patterns
- **`visual`** - Color palettes, spacing patterns, border radius, typography
- **`animation`** - Animation library, type, triggers

**Use style metadata when:**
- User asks about styling, colors, spacing, animations
- Analyzing design systems or visual consistency
- Generating UI components that need to match existing styles
- Understanding layout patterns

**Note:** Style metadata adds token overhead. Use `logicstamp_compare_modes` to see the cost impact.

## Profiles

LogicStamp offers preset configurations:

- **`llm-chat`** (default) - Balanced mode for AI chat
  - Depth: 2, header mode, max 100 nodes

- **`llm-safe`** - Conservative mode for token-limited contexts
  - Depth: 2, header mode, max 30 nodes

- **`ci-strict`** - Strict validation mode for CI/CD
  - Contracts only (no code), strict dependency checks

## Dependency Depth Parameter

The `depth` parameter controls how many levels deep the dependency graph goes:
- **`depth=2`** (default): Includes nested components (components used by components)
  - Example: App uses Hero, Hero uses Button → Both Hero and Button are in the graph with their contracts
  - Recommended for most React projects as it ensures you see the full component tree, not just direct imports
- **`depth=1`**: Only includes direct dependencies (components directly imported/used)
  - Example: App uses Hero → Only Hero is in the graph, not Hero's dependencies
  - Use this if you specifically only need direct dependencies
- **`depth=3+`**: Includes deeper nesting levels (rarely needed)

**Default behavior:** The default depth=2 is recommended for most React projects because:
- Most React projects have component hierarchies (components that use other components)
- Depth=2 ensures you see the full component tree with contracts, styles, and dependencies for nested components
- You can always regenerate with depth=1 later if you only need direct dependencies

**When depth=1 might be sufficient:**
- You only need to see direct component imports
- You're analyzing simple component relationships
- Token usage is a concern and you want to minimize bundle size

**Example:**
```typescript
// Default: Uses depth=2 (recommended for React projects)
refresh_snapshot({ projectPath: "...", profile: "llm-chat" })

// Only use depth=1 if you specifically only need direct dependencies
refresh_snapshot({ projectPath: "...", depth: 1 })
```

## Common Patterns

### Understanding a Component

```typescript
// Workflow:
1. refresh_snapshot() → get snapshotId
2. list_bundles(snapshotId) → find component bundle
3. read_bundle(snapshotId, bundlePath) → get contract + graph
4. Analyze contract.props, contract.logicSignature, contract.graph
```

### Finding Dependencies

```typescript
// Each bundle contains:
bundle.graph.nodes[] // All components in this bundle
bundle.graph.edges[] // Dependency relationships [source, target]

// To find what a component uses:
- Look at bundle.graph.nodes for the component's contract
- Check contract.version.imports[] for imports
- Follow bundle.graph.edges to see dependency chain

// IMPORTANT: By default (depth=2), bundles include nested components.
// If you only need direct dependencies, regenerate with depth=1:
refresh_snapshot({ projectPath: "...", depth: 1 })
```

### Understanding Missing Dependencies

```typescript
// bundle.meta.missing[] contains unresolved dependencies:
{
  name: "import specifier",
  reason: "external package" | "file not found" | "outside scan path" | "max depth exceeded" | "circular dependency",
  referencedBy: "component that imports it"
}

// Expected (safe to ignore):
- "external package" - Third-party npm modules (React, lodash, etc.)

// Actionable:
- "file not found" - Broken imports, need fixing
- "outside scan path" - Consider expanding scan directory
- "max depth exceeded" - Increase depth if needed (explicitly set `depth: 2` or higher in `refresh_snapshot`)
```

## Token Efficiency

LogicStamp bundles are **intentionally compressed**. Missing micro-details is normal and expected.

**Token savings (varies by technology):**
- **`header` mode**: Typically ~70% fewer tokens than raw source (varies by project structure)
- **`none` mode**: ~79% savings vs full context
- **Style metadata** (`--include-style`): Token savings differ by framework:
  - **CSS / SCSS / CSS Modules / styled-components**: Typically ~40-70% fewer tokens than raw styles
  - **Tailwind CSS**: Typically ~4-10% fewer tokens (utility classes are already compact)
  - *Observed during beta testing; actual results vary by project structure and usage*

> **Note:** Token savings are a side effect — the primary gain is deterministic, inspectable context.

**Use `logicstamp_compare_modes`** to see exact token costs for your project across all modes (none/header/header+style/full).

## Security

**Automatic Secret Protection**

LogicStamp Context automatically protects sensitive data in generated context files:

- **Security scanning** - Detects secrets (API keys, passwords, tokens) during context generation
- **Automatic sanitization** - Detected secrets are replaced with `"PRIVATE_DATA"` in generated context files (source files are never modified)
- **Safe by default** - Only metadata is included in default modes; credentials only appear in `--include-code full` mode

> **⚠️ Seeing `"PRIVATE_DATA"` in your context files?** This means secrets were detected in your codebase. Review security reports and remove hard-coded secrets from source code. Use environment variables or secret management tools instead.

**Best practice:** Always review generated context files before sharing. Never commit secrets to version control.

## Best Practices

1. **Always start with `refresh_snapshot`** - Don't assume context files exist
2. **Read `context_main.json` first** - Understand project structure before diving into bundles
3. **Prefer bundles over raw code** - Use bundles for structure, raw code for implementation details
4. **Use `list_bundles` before `read_bundle`** - Discover what's available first
5. **Check token estimates** - Be aware of context size, especially for large projects
6. **Use appropriate mode** - `header` for most cases, `full` only when needed
7. **Understand missing dependencies** - External packages are normal, "file not found" needs fixing
8. **Explicitly set `depth: 2` when needed** - If nested components are missing from bundles, regenerate with `depth: 2`. The LLM does NOT automatically detect this need.
9. **Be aware of security** - If you see `"PRIVATE_DATA"` in bundles, secrets were detected and sanitized
10. **Use `compare_modes` for optimization** - Understand token costs before generating large context files

## When You're Confused

If you're unsure how LogicStamp works or how to use these tools:

1. **Read this document** (`logicstamp-for-llms.md`)
2. **Call `logicstamp_read_logicstamp_docs`** - Returns this guide + CLI documentation
3. **Start with `refresh_snapshot`** - Generate fresh context files
4. **Read `context_main.json`** - Use `read_bundle` with `bundlePath: "context_main.json"`

## Key Takeaways

- **LogicStamp bundles are structured summaries** - Pre-parsed, AI-ready, token-efficient
- **Prefer bundles over raw code** - Use bundles for structure, raw code for implementation
- **Workflow: refresh → list → read → (raw code if needed)**
- **Bundles contain contracts, graphs, and relationships** - Everything you need to understand architecture
- **Missing micro-details is normal** - Bundles are compressed by design
- **Use appropriate mode** - `header` for most cases, `full` only when needed

## Related Documentation

**Canonical Documentation (Redundant Sources):**

For full documentation, see: https://logicstamp.dev/docs

- **Full Docs**: 
  - Primary: https://logicstamp.dev/docs/logicstamp-context/context
  - Fallback: https://github.com/LogicStamp/logicstamp-context
- **Usage Guide**: 
  - Primary: https://logicstamp.dev/docs/logicstamp-context/usage
  - Fallback: https://github.com/LogicStamp/logicstamp-context/blob/main/docs/usage.md
- **CLI Commands**: 
  - Primary: https://logicstamp.dev/docs/logicstamp-context/context
  - Fallback: https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/context.md
- **UIF Contracts**: 
  - Primary: https://logicstamp.dev/docs/logicstamp-context/uif-contracts
  - Fallback: https://github.com/LogicStamp/logicstamp-context/blob/main/docs/uif_contracts.md
- **Schema Reference**: 
  - Primary: https://logicstamp.dev/docs/logicstamp-context/schema
  - Fallback: https://github.com/LogicStamp/logicstamp-context/blob/main/docs/schema.md
- **Token Optimization**: 
  - Primary: https://logicstamp.dev/docs/logicstamp-context/usage#token-cost-comparison
  - Fallback: https://github.com/LogicStamp/logicstamp-context/blob/main/docs/usage.md#token-cost-comparison
- **Mode Comparison**: 
  - Primary: https://logicstamp.dev/docs/logicstamp-context/compare-modes
  - Fallback: https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/compare-modes.md
- **CI Integration**: 
  - Primary: https://logicstamp.dev/docs/logicstamp-context/usage#cicd-integration
  - Fallback: https://github.com/LogicStamp/logicstamp-context/blob/main/docs/usage.md#cicd-integration
- **Known Limitations**: 
  - Primary: https://logicstamp.dev/docs/logicstamp-context/limitations
  - Fallback: https://github.com/LogicStamp/logicstamp-context/blob/main/docs/limitations.md
- **Security Documentation**: 
  - Fallback: https://github.com/LogicStamp/logicstamp-context/blob/main/SECURITY.md

