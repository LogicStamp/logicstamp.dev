# LogicStamp Context - Complete Tool Description

> **See also:** [MCP Integration Guide](mcp_integration.md) for MCP server architecture | [Commands Reference](commands.md) for CLI usage | [Quick Start](quickstart.md) for getting started

## Overview

**LogicStamp Context** is a zero-configuration CLI tool that analyzes React/TypeScript codebases and generates machine-readable context bundles optimized for AI assistants and CI/CD pipelines. It extracts comprehensive component metadata, builds dependency graphs, and produces structured JSON documentation that captures the complete architecture of your application.

> **Note:** This document describes LogicStamp Context CLI capabilities. For MCP server usage, see the [MCP Integration Guide](mcp_integration.md) and [README](../README.md).

## Core Capabilities

### 1. Per-Component "Contract" Generation

For each component in your codebase, LogicStamp Context generates a detailed contract that includes:

#### Component Identity
- **Component name** - Extracted from function/class declarations and file names
- **File path** - Both relative (`entryPathRel`) and absolute (`entryPathAbs`) paths
- **Entry ID** - Normalized identifier used for dependency tracking

#### Component Type Classification
- **Kind detection** - Automatically classifies components as:
  - `react:component` - React functional or class components
  - `ts:module` - TypeScript utility modules
  - `node:cli` - CLI entry points
- **Next.js framework detection**:
  - **Page/Layout identification** - Detects files in Next.js App Router (`/app` directory)
  - **Client component** - Identifies `'use client'` directive
  - **Server component** - Identifies Server Components (in `/app` without `'use client'`)
  - **Server action** - Detects `'use server'` directive

#### Exported Props Signature
- **TypeScript type inference** - Extracts prop types from:
  - Interfaces ending with `Props` (e.g., `ButtonProps`)
  - Type aliases ending with `Props`
  - Inferred from function parameters
- **Rich type descriptors**:
  - Simple types: `string`, `number`, `boolean`
  - Literal unions: `"primary" | "secondary" | "tertiary"`
  - Function types: `(data: FormData) => Promise<void>`
  - Optional properties: Marked with `optional: true`
  - Complex types: Objects, arrays, generics

#### Internal State Analysis
- **useState extraction** - Captures all `useState` hooks with:
  - State variable names
  - Inferred types (from generics or initial values)
  - State shape documentation
- **useReducer detection** - Identifies reducer patterns and state management
- **Context usage** - Detects `useContext` hooks and identifies consumed contexts

#### Export Metadata
- **Default exports** - Identifies default-exported components
- **Named exports** - Lists all named exports from the file
- **Export patterns** - Documents export structure for proper import usage

### 2. Dependency Information

LogicStamp Context builds a comprehensive dependency graph showing how components relate to each other:

#### Internal Dependency Graph
- **Component dependencies** - Lists all React components rendered within each component
- **Dependency resolution** - Resolves relative imports and tracks component relationships
- **Used by / Uses relationships**:
  - `dependencies` - Components this component uses (outgoing edges)
  - `usedBy` - Components that use this component (incoming edges)
- **Dependency depth** - Configurable traversal depth (default: 1, supports deeper analysis)

#### External Package Imports
- **Import tracking** - Captures all import statements:
  - React ecosystem: `react`, `react-dom`, `next/router`, etc.
  - State management: `react-query`, `zustand`, `redux`, etc.
  - Design systems: `@mui/material`, `@chakra-ui/react`, etc.
  - Utility libraries: `lodash`, `date-fns`, etc.
- **External package identification** - Distinguishes between:
  - Internal components (analyzed and included)
  - External packages (documented but not analyzed)
  - Missing dependencies (tracked in `meta.missing`)

#### Dependency Graph Structure
- **Root components** - Entry points not used by other components
- **Leaf components** - Primitive components with no dependencies
- **Circular dependency detection** - Identifies and reports circular import patterns
- **Missing dependency tracking** - Documents unresolved imports with reasons

### 3. Behavioral Hints

LogicStamp Context analyzes component behavior patterns and provides semantic hints:

#### React Hooks Usage
- **State management hooks**: `useState`, `useReducer`
- **Effect hooks**: `useEffect`, `useLayoutEffect`
- **Performance hooks**: `useMemo`, `useCallback`
- **Context hooks**: `useContext`
- **Ref hooks**: `useRef`, `useImperativeHandle`
- **Custom hooks**: Any hook matching `use[A-Z]` pattern

#### Side-Effect Analysis
- **Data fetching** - Detects patterns like:
  - React Query hooks (`useQuery`, `useMutation`)
  - Fetch API usage
  - Async data loading functions
- **Navigation** - Identifies routing patterns:
  - Next.js router usage (`next/router`, `next/navigation`)
  - React Router patterns
  - Route string literals in JSX
- **Event handlers** - Extracts event handler signatures:
  - `onClick`, `onSubmit`, `onChange`, etc.
  - Function signatures for each handler
  - Event propagation patterns

#### Role Tags
Automatically infers component roles based on patterns:
- **Form** - Components with form validation, `onSubmit` handlers
- **Layout** - Components in layout directories or with layout patterns
- **List** - Components rendering arrays or collections
- **API route** - Next.js API route handlers
- **Page** - Next.js page components
- **Presentational** - Pure display components with no state/events
- **Interactive** - Components with state and event handlers
- **Utility** - Helper modules and utility functions

#### Behavioral Predictions (Optional)
When enabled with `--predict-behavior`, adds semantic predictions:
- Form validation logic detection
- Side effect management patterns
- Data fetching/mutation indicators
- Memoization usage hints
- Loading/error state handling
- Performance optimization patterns

### 4. Style Metadata Extraction

When using `stamp context style` or `stamp context --include-style`, LogicStamp Context analyzes and extracts visual and layout information:

#### Style Sources
- **Tailwind CSS** - Categorized classes (layout, spacing, colors, typography, borders, effects)
- **SCSS/CSS Modules** - Module imports, selectors, properties, SCSS features (variables, nesting, mixins)
- **Inline Styles** - Detects `style={{...}}` usage
- **styled-components/Emotion** - Styled component declarations, theme usage
- **framer-motion** - Motion components, animation variants, gesture handlers, viewport animations

#### Layout Metadata
- **Layout Type** - Identifies flex or grid layouts
- **Grid Patterns** - Column configurations (e.g., "grid-cols-2 md:grid-cols-3")
- **Hero Patterns** - Detects hero sections (large text + CTA buttons)
- **Feature Cards** - Identifies grid layouts with card-like elements
- **Responsive Breakpoints** - Lists all breakpoints used (sm, md, lg, etc.)

#### Visual Metadata
- **Color Palette** - Extracts color classes (bg-*, text-*, border-*)
- **Spacing Patterns** - Identifies padding and margin utilities used
- **Border Radius** - Detects rounded corner patterns
- **Typography** - Extracts text size and font weight classes

#### Animation Metadata
- **Animation Library** - framer-motion or CSS
- **Animation Type** - fade-in, slide, etc.
- **Trigger Type** - inView, hover, click, etc.

Style metadata appears in the `style` field of component contracts (`UIFContract`) when style information is detected. Components without style usage will not have a `style` field.

### 5. Lightweight Documentation

LogicStamp Context extracts and preserves existing documentation:

#### JSDoc and Comments
- **JSDoc blocks** - Extracts `@param`, `@returns`, `@example` tags
- **Component comments** - Preserves comments attached to components
- **Prop documentation** - Captures prop descriptions from JSDoc
- **Code headers** - Generates structured `@uif` contract headers with:
  - Component description
  - Version (composition breakdown)
  - Logic signature summary
  - Behavioral predictions
  - Semantic and file hashes

#### Natural Language Summaries
- **Auto-generated descriptions** - Infers component purpose from:
  - File name patterns (e.g., `Button.tsx` → "Interactive button component")
  - Component structure (state, events, props)
  - Framework context (Next.js, React Router)
- **Context-aware labels**:
  - "Form component with validation" for form components
  - "Modal/dialog component" for modal patterns
  - "Navigation component" for nav/menu files
  - "Utility module" for helper files
- **Custom descriptions** - Supports manual description override in contracts

### 5. Root `context_main.json` Index

The main index file provides a high-level overview of the entire codebase:

#### Index Structure
- **Project metadata**:
  - Project root path (relative and absolute)
  - Generation timestamp
  - Tool version information
- **Summary statistics**:
  - Total components analyzed
  - Total bundles generated
  - Total folders with context files
  - Total token estimate (for AI cost planning)

#### Folder Organization
- **Per-folder entries** - One entry per directory containing components:
  - `path` - Relative path from project root
  - `contextFile` - Path to folder's `context.json` file
  - `bundles` - Number of bundles in this folder
  - `components` - List of component files
  - `isRoot` - Whether this is an application entry point
  - `rootLabel` - Human-readable label (e.g., "Next.js App", "Project Root")
  - `tokenEstimate` - Estimated token count for this folder

#### High-Level Dependency Graph
- **Component relationships** - Overview of how folders relate
- **Root identification** - Marks entry point folders
- **Token budgeting** - Per-folder token estimates for selective loading

## Output Structure

### Multi-File Organization

LogicStamp Context generates a folder-organized structure that mirrors your project:

```
project-root/
├── context_main.json          # Main index with folder metadata
├── context.json               # Root folder bundles (if any)
├── src/
│   └── context.json          # Bundles from src/ folder
├── src/components/
│   └── context.json         # Bundles from src/components/
└── src/utils/
    └── context.json          # Bundles from src/utils/
```

### Bundle Format

Each `context.json` file contains an array of bundles. Each bundle represents:
- **Root component** - The entry point component
- **Dependency graph** - All components used by the root (up to configured depth)
- **Complete contracts** - Full UIFContract for each component in the bundle
- **Code snippets** - Optional source code (none/header/full modes)
- **Metadata** - Missing dependencies, generation info

### Contract Schema

Each component contract (`UIFContract`) includes:

```typescript
{
  type: 'UIFContract',
  schemaVersion: '0.3',
  kind: 'react:component' | 'ts:module' | 'node:cli',
  entryId: string,                    // Normalized component path
  entryPathAbs: string,               // Absolute file path
  entryPathRel: string,               // Relative POSIX path
  description: string,                // Natural language summary
  version: {
    variables: string[],              // Variable declarations
    hooks: string[],                  // React hooks used
    components: string[],             // Components rendered
    functions: string[],              // Function declarations
    imports: string[]                 // Import statements
  },
  logicSignature: {
    props: Record<string, PropType>,  // Props with types
    emits: Record<string, EventType>, // Event handlers
    state?: Record<string, string>    // useState shapes
  },
  exports?: ExportMetadata,           // Default/named exports
  prediction?: string[],              // Behavioral hints
  nextjs?: {                          // Next.js metadata
    directive?: 'client' | 'server',
    isInAppDir?: boolean
  },
  semanticHash: string,               // Content-based hash
  fileHash: string,                   // File-based hash
  style?: {                           // Style metadata (when includeStyle: true)
    styleSources: {
      tailwind?: {
        categories: {
          layout: string[],
          spacing: string[],
          colors: string[],
          typography: string[],
          borders: string[],
          effects: string[]
        },
        breakpoints: string[],
        classCount: number
      },
      scssModule?: string,
      scssDetails?: {
        selectors: string[],
        properties: string[],
        features: {
          variables: boolean,
          nesting: boolean
        }
      },
      motion?: {
        components: string[],
        variants: string[],
        features: {
          gestures: boolean,
          viewportAnimations: boolean
        }
      }
    },
    layout: {
      type: "flex" | "grid",
      cols?: string,
      hasHeroPattern?: boolean,
      hasFeatureCards?: boolean
    },
    visual: {
      colors: string[],
      spacing: string[],
      radius?: string,
      typography: string[]
    },
    animation?: {
      library: "framer-motion" | "css",
      type: string,
      trigger: string
    }
  }
}
```

## Key Features

### Zero Configuration
- Works out of the box on any React/TypeScript project
- No build step required - analyzes source files directly
- Automatic component detection and classification

### Token Optimization
- **Three code inclusion modes**:
  - `none` - Contracts only (smallest, ~79% savings)
  - `header` - Contracts + JSDoc headers (balanced, ~65% savings)
  - `full` - Complete source code (largest, no savings)
- **Automatic token estimates** - GPT-4o-mini and Claude token counts
- **Mode comparison** - See token costs across all modes
- **Per-folder token estimates** - Budget-aware context loading

### Deterministic Output
- **Semantic hashing** - Content-based hashes for change detection
- **File hashing** - File-based hashes for integrity checking
- **Reproducible builds** - Same input produces same output

### Framework Awareness
- **Next.js App Router** - Detects pages, layouts, client/server components
- **React patterns** - Recognizes hooks, context, refs
- **TypeScript types** - Full type inference from interfaces and types

### CI/CD Integration
- **Strict validation** - `--strict-missing` flag for dependency checking
- **Drift detection** - Compare context versions to detect changes
- **JSON stats output** - Machine-readable metrics for CI pipelines
- **Exit codes** - CI-friendly success/failure indicators

## Use Cases

### AI-Assisted Development
Share context bundles with AI assistants to get:
- Architecture suggestions based on complete dependency graph
- Refactoring recommendations understanding component relationships
- Bug fixes with full context of component behavior
- Code generation that respects existing patterns

### Documentation Generation
- **API contracts** - Automatic prop/event documentation
- **Dependency trees** - Visualize component relationships
- **Component catalog** - Searchable index of all components
- **Architecture diagrams** - Data for generating visual graphs

### Code Review
- **Impact analysis** - See what components depend on changed code
- **Circular dependency detection** - Identify problematic import patterns
- **Unused component detection** - Find components not used by others
- **Complexity metrics** - Track component dependency counts

### CI/CD Validation
- **Contract verification** - Ensure components match expected contracts
- **Dependency validation** - Catch missing or broken imports
- **Change detection** - Monitor component contract drift
- **Token budgeting** - Track context size for AI workflows

## Technical Implementation

### AST-Based Analysis
- Uses `ts-morph` for robust TypeScript AST parsing
- No pre-compilation required - works directly with source files
- Handles JSX, TypeScript, and modern React patterns

### Dependency Resolution
- Resolves relative imports (`./Component`, `../utils`)
- Tracks component usage across directories
- Handles circular dependencies gracefully
- Reports missing dependencies with reasons

### Multi-File Generation
- Generates per-folder `context.json` files
- Maintains project directory structure
- Creates `context_main.json` index for navigation
- Supports incremental updates per folder

### Performance
- Fast analysis - typically completes in seconds
- Configurable depth limits prevent excessive traversal
- Max nodes per bundle prevents oversized outputs
- Efficient hashing for change detection

## Command-Line Interface

### Primary Command
```bash
stamp context [path] [options]
```

### Key Options
- `--depth <n>` - Dependency traversal depth (default: 1)
- `--include-code <mode>` - Code inclusion: `none|header|full` (default: `header`)
- `--include-style` - Include style metadata (Tailwind, SCSS, animations, etc.) - equivalent to `stamp context style`
- `--profile <profile>` - Preset: `llm-safe|llm-chat|ci-strict`
- `--predict-behavior` - Enable behavioral predictions
- `--strict-missing` - Fail on missing dependencies (CI-friendly)
- `--compare-modes` - Show token cost comparison
- `--stats` - Output JSON stats for CI

### Additional Commands
- `stamp context style` - Generate context with style metadata (equivalent to `stamp context --include-style`)
- `stamp context compare` - Multi-file drift detection
- `stamp context validate` - Schema validation
- `stamp context clean` - Remove generated files
- `stamp init` - Project initialization

## Summary

LogicStamp Context is a comprehensive codebase analysis tool that generates AI-ready documentation by:

1. **Extracting complete component contracts** - Name, path, type, props, state, exports
2. **Building dependency graphs** - Internal components, external packages, used-by relationships
3. **Analyzing behavior patterns** - Hooks, side effects, role tags, predictions
4. **Preserving documentation** - JSDoc, comments, natural language summaries
5. **Organizing output** - Folder-based structure with main index and statistics

The tool produces structured, machine-readable context that enables AI assistants to understand your codebase architecture, component relationships, and behavioral patterns without requiring access to the full source code. This makes it ideal for AI-assisted development, automated documentation, code review, and CI/CD validation workflows.

