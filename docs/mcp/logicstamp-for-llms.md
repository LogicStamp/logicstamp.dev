# LogicStamp: How You Should Use It (For LLMs)

**This document explains LogicStamp from an LLM's perspective. Read this first if you're unsure how LogicStamp works or how to use these tools effectively.**

> **⚠️ Important: Authoritative Source**
> 
> **When using LogicStamp MCP tools, trust `logicstamp_read_logicstamp_docs` output over this file.**
> 
> - **MCP Tool (`logicstamp_read_logicstamp_docs`)**: Reads from the installed package and is the authoritative source for current capabilities
> - **This Repo File**: May be outdated or out of sync with the published package
> 
> The MCP tool embeds this documentation in the published package (v0.1.6+), ensuring it matches the tool's actual capabilities. If you notice discrepancies between this file and the MCP tool output, the MCP tool is correct.
> 
> **Best Practice**: Always use `logicstamp_read_logicstamp_docs` when you need accurate, up-to-date documentation about LogicStamp capabilities.

## What is LogicStamp?

LogicStamp Context is a CLI tool + MCP server that statically analyzes TypeScript codebases and produces **structured, AI-ready context bundles**. Instead of reading raw `.ts/.tsx` files, LogicStamp generates JSON bundles that capture:

- **Component contracts** - Props, state, hooks, events (the component API)
- **Dependency graphs** - What components use what (relationships)
- **Style metadata** - Tailwind classes, SCSS modules, animations, layout patterns (optional)
- **Token estimates** - Cost-aware context generation

### Framework Support

- **React** - Full support (components, hooks, props, styles)
- **Next.js** - Full support (App Router with route roles, segment paths, metadata exports)
- **Vue 3** - Partial support (Composition API, `<script setup>`) - *Note: Works with `.ts`/`.tsx` files only, not `.vue` SFC files*
- **Backend frameworks** - Full support (Express.js, NestJS) (v0.4.0)
  - Express.js: Route extraction (`app.get()`, `router.post()`, etc.)
  - NestJS: Controller extraction (`@Controller`, `@Get`, `@Post`, etc.)
  - HTTP methods, route paths, API signatures, framework metadata
- **UI frameworks** - Material UI, ShadCN/UI, Radix UI, Tailwind CSS, Styled Components, SCSS/CSS Modules

### Key Features

- **AI-ready bundles** - Predictable, structured, deterministic
- **React/Next.js/Vue/TypeScript awareness** - Props, hooks/composables, state, dependencies
- **Backend framework support** - Express.js and NestJS routes, controllers, API signatures
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

## Watch Mode Awareness

**Best Practice:** LogicStamp supports incremental watch mode (`stamp context --watch`) which automatically regenerates context bundles when files change. **We recommend starting watch mode when beginning a coding session** - it dramatically improves MCP response times and keeps context fresh automatically.

The MCP server detects when watch mode is active and can skip expensive regeneration.

### How Watch Mode Works

1. **Watch mode runs in background** - User starts `stamp context --watch` in their terminal
2. **Incremental rebuilds** - Only affected bundles are regenerated when files change (not entire project)
3. **Context stays fresh** - Context files are always up-to-date
4. **Faster MCP responses** - AI can skip regeneration and read fresh context instantly

### Using Watch Mode with MCP

**Check if watch mode is active:**
```typescript
// Use logicstamp_watch_status to check
watch_status({ projectPath: "..." })
// Returns: { watchModeActive: true/false, status: {...}, message: "..." }
```

**Skip regeneration when watch mode is active:**
```typescript
// Set skipIfWatchActive=true to avoid redundant regeneration
refresh_snapshot({ projectPath: "...", skipIfWatchActive: true })
// If watch mode is active: Skips regeneration, reads existing context (fast)
// If watch mode is NOT active: Normal regeneration (slow)
```

**See Also:**
- [Watch Status Command Documentation](./commands/watch-status.md) - Complete command reference
- [Refresh Snapshot Command Documentation](./commands/refresh-snapshot.md) - Includes `skipIfWatchActive` parameter

**Benefits:**
- **Faster** - Skip expensive regeneration when context is already fresh
- **Efficient** - Watch mode only rebuilds affected bundles, not entire project
- **Smart** - MCP detects watch mode automatically and guides you

### ⚠️ Important: Do Not Use `sleep()` with Watch Mode

**Why `sleep()` is unnecessary:**

Watch mode automatically regenerates bundles in the background when files change. The MCP tools handle this correctly without any waiting:

1. **Watch mode updates bundles automatically** - When a file changes, LogicStamp regenerates the bundle in the background. No waiting needed.
2. **Bundles are already fresh** - If watch mode is active, bundles are already up-to-date when you read them. Just read directly.
3. **Internal retry logic** - The MCP tools (`list_bundles`, `read_bundle`) have built-in retry logic with exponential backoff to handle race conditions during file writes. This is handled internally - you don't need to wait.
4. **Check timestamps if needed** - If you need to verify when a bundle was updated, check the `createdAt` timestamp in the bundle metadata. Don't use `sleep()`.

**❌ Avoid this pattern:**
```typescript
// Incorrect: Using sleep to wait for watch mode regeneration
sleep(3000)  // Unnecessary delay
read_bundle({ projectPath: "...", bundlePath: "..." })
```

**✅ Correct approach:**
```typescript
// CORRECT: Just read directly - bundles are already fresh if watch mode is active
read_bundle({ projectPath: "...", bundlePath: "..." })

// If you need to verify updates, check timestamps in the bundle response
// The bundle includes metadata about when it was created/updated
```

**How it works:**
- When watch mode is active, LogicStamp monitors file changes and regenerates bundles automatically
- The MCP tools detect watch mode and read bundles directly (no snapshot needed)
- Internal retry logic handles any race conditions during file writes (200-500ms delays built-in)
- Bundles are immediately available - no external waiting required

**Architecture explanation:**
- Watch mode runs `stamp context --watch` in the background, monitoring file system changes
- When files change, LogicStamp incrementally rebuilds only affected bundles
- The rebuild happens asynchronously - bundles are written to disk when ready
- MCP tools use `readFileWithRetry()` which includes small delays (200-500ms) and exponential backoff for edge cases
- This retry logic is internal to the MCP server - AI assistants should not add external `sleep()` calls

**Key takeaway:** Watch mode keeps bundles fresh automatically. When watch mode is active, skip `refresh_snapshot` and read bundles directly - they're already fresh. Do not use `sleep()` to wait for regeneration.

## The LogicStamp Workflow

**Always follow this workflow when working with a new project:**

1. **Start with `logicstamp_refresh_snapshot`** (or check watch mode first)
   - Use `skipIfWatchActive: true` if watch mode might be running (skips regeneration if context is already fresh)
   - This scans the project and generates all context files
   - Creates `context_main.json` (the main index) and `context/*.context.json` files (per-folder bundles)
   - Returns a `snapshotId` you'll use for subsequent calls
   - **Default:** The default depth=2 includes nested components (e.g., App → Hero → Button), ensuring you see the full component tree with contracts and styles for all nested components. This is recommended for most TypeScript projects with component hierarchies.
   - **Example:** `{ "projectPath": "...", "skipIfWatchActive": true }` - Uses default depth=2, skips regeneration if watch mode is active. Set `depth: 1` if you only need direct dependencies (e.g., App → Hero but not Hero → Button).

2. **Discover bundles with `logicstamp_list_bundles`**
   - Lists all ROOT bundles with their locations
   - Shows component names, file paths, bundle paths, token estimates
   - ⚠️ **IMPORTANT**: Only lists ROOT components (components with their own bundles)
   - Dependencies are NOT listed here - they appear in `bundle.graph.nodes[]` of the root that imports them
   - Use `folderPrefix` to filter by directory if needed

3. **Read bundles with `logicstamp_read_bundle`**
   - This is where the valuable data is
   - Pass the `bundlePath` from `list_bundles` output
   - Returns complete component contracts with dependency graphs
   - **Finding dependencies**: If a component isn't in `list_bundles`, it's a dependency. Read bundles that might import it and check `bundle.graph.nodes[]` for the dependency contract

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

- **`ci-strict`** - Strict validation mode
  - Contracts only (no code), strict dependency checks, fails on missing dependencies
  - Useful for validation workflows (note: git baseline comparison for CI/CD is not yet implemented)

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

### ⚠️ Finding Components: Root vs Dependencies (CRITICAL CONCEPT)

**LogicStamp organizes components into two categories:**

- **Root components** - Components that have their own bundles (listed in `logicstamp_list_bundles` output and in `context_main.json` under each folder's `components` array). These are entry points that other components import.
- **Dependencies** - Components that are imported by root components. They appear in the importing component's bundle as nodes in `bundle.graph.nodes[]`, **NOT** as separate root bundles and **NOT** listed in `list_bundles`.

**🔍 Workflow for finding a component:**

1. **First, call `logicstamp_list_bundles`** - Check if the component is listed. If found, it's a root component with its own bundle.
2. **If NOT found in `list_bundles`** - The component is a dependency. To find it:
   - **Option A**: Read bundles that might import it (check `bundle.graph.nodes[]` for the dependency contract)
   - **Option B**: Search source code to find which root component imports it, then read that root's bundle
   - **Option C**: Check bundles in the same folder (dependencies are typically in the same folder as their importing component)
3. **Read the importing root's bundle** - The dependency's contract will be in `bundle.graph.nodes[]` of that bundle (not as the root node).

**📝 Example:**

```
Looking for CopyButton component:
1. Call logicstamp_list_bundles → CopyButton NOT in the list
2. CopyButton is a dependency, not a root
3. Find which root imports it: TabbedInstallation imports CopyButton
4. Read TabbedInstallation's bundle: read_bundle(bundlePath, rootComponent: "TabbedInstallation")
5. Check bundle.graph.nodes[] → CopyButton contract is there as a dependency node
```

**Why this matters:**

- **Root components** = Have their own bundles, listed in `list_bundles` (e.g., `Features.tsx`, `Stats.tsx`, `TabbedInstallation.tsx`)
- **Dependencies** = Included in importing root component's bundle graph (e.g., `CopyButton.tsx` appears in `TabbedInstallation.tsx` bundle's `graph.nodes[]`)
- This structure matches how developers think: pages/features are entry points, their dependencies are included automatically

**🚨 Common mistake:** Looking for a component as a root when it's actually a dependency. Always check `logicstamp_list_bundles` first - if it's not there, it's a dependency and you need to find which root imports it.

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

1. **Use `skipIfWatchActive: true`** - When calling `refresh_snapshot`, use this to skip regeneration if watch mode is keeping context fresh
2. **Always start with `refresh_snapshot`** - Don't assume context files exist (but skip regeneration if watch mode is active)
3. **Read `context_main.json` first** - Understand project structure before diving into bundles
4. **Prefer bundles over raw code** - Use bundles for structure, raw code for implementation details
5. **Use `list_bundles` before `read_bundle`** - Discover what's available first
6. **Check token estimates** - Be aware of context size, especially for large projects
7. **Use appropriate mode** - `header` for most cases, `full` only when needed
8. **Understand missing dependencies** - External packages are normal, "file not found" needs fixing
9. **Explicitly set `depth: 2` when needed** - If nested components are missing from bundles, regenerate with `depth: 2`. The LLM does NOT automatically detect this need.
10. **Be aware of security** - If you see `"PRIVATE_DATA"` in bundles, secrets were detected and sanitized
11. **Use `compare_modes` for optimization** - Understand token costs before generating large context files

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

