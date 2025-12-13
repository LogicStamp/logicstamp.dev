# logicstamp_read_logicstamp_docs

> **Documentation Tool** - Your escape hatch when confused about LogicStamp. Call this first if you're unsure how LogicStamp works or how to use these tools effectively.

## Overview

`logicstamp_read_logicstamp_docs` returns comprehensive LogicStamp documentation designed specifically for LLMs. This tool provides:

- **Embedded LLM-focused guide** - A frozen snapshot of LogicStamp documentation optimized for AI consumption
- **Canonical documentation links** - Links to the full documentation with primary (landing page) and fallback (GitHub) sources
- **Quick reference summary** - Purpose, usage steps, and key concepts

**Important:** This tool reads `docs/logicstamp-for-llms.md` from the MCP package. This is a frozen snapshot for offline use. The full, always-updated documentation lives at [logicstamp.dev/docs/logicstamp-context/context](https://logicstamp.dev/docs/logicstamp-context/context).

## When to Use

- **When confused** - If you're unsure how LogicStamp works or how to use these tools
- **Before starting** - When beginning work with a new project using LogicStamp
- **Understanding bundles** - When you need to understand bundle structure, contract format, or dependency graphs
- **Workflow guidance** - When you want to understand the recommended LogicStamp workflow
- **Escape hatch** - This is your go-to tool when LogicStamp concepts are unclear

## Parameters

**None** - This tool takes no parameters. Simply call it when you need documentation.

## Output

Returns a `ReadLogicStampDocsOutput` object with:

### `type`
- **Type:** `'LogicStampDocs'`
- **Description:** Identifies this as a LogicStamp documentation bundle

### `version`
- **Type:** `'1.0'`
- **Description:** Version of the documentation format

### `docs`
Contains the embedded documentation:

#### `forLLMs`
- **Type:** `string`
- **Description:** Complete markdown content of `docs/logicstamp-for-llms.md`. This is a frozen snapshot optimized for LLM consumption, containing:
  - LogicStamp overview and purpose
  - How LogicStamp works
  - Recommended workflow for AI assistants
  - Bundle structure explanation
  - Contract format details
  - Best practices
  - Common patterns

### `canonicalDocs`
Links to canonical documentation sources with redundancy (primary + fallback):

#### `landingPage`
- **Type:** `string`
- **Description:** Primary documentation landing page: `https://logicstamp.dev/docs/logicstamp-context/context`
- **Best UX** - Optimized landing page with navigation

#### `cliRepo`
- **Type:** `string`
- **Description:** Fallback GitHub repository: `https://github.com/LogicStamp/logicstamp-context`
- **Always available** - Versioned, always accessible

#### `usage`
- **Primary:** `https://logicstamp.dev/docs/logicstamp-context/usage`
- **Fallback:** `https://github.com/LogicStamp/logicstamp-context/blob/main/docs/usage.md`
- **Description:** Usage guide for LogicStamp Context

#### `uifContracts`
- **Primary:** `https://logicstamp.dev/docs/logicstamp-context/uif-contracts`
- **Fallback:** `https://github.com/LogicStamp/logicstamp-context/blob/main/docs/uif_contracts.md`
- **Description:** UIF (User Interface Function) contracts documentation

#### `schema`
- **Primary:** `https://logicstamp.dev/docs/logicstamp-context/schema`
- **Fallback:** `https://github.com/LogicStamp/logicstamp-context/blob/main/docs/schema.md`
- **Description:** Complete schema reference

#### `context`
- **Primary:** `https://logicstamp.dev/docs/logicstamp-context/context`
- **Fallback:** `https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/context.md`
- **Description:** CLI `stamp context` command documentation

#### `compareModes`
- **Primary:** `https://logicstamp.dev/docs/logicstamp-context/compare-modes`
- **Fallback:** `https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/compare-modes.md`
- **Description:** Compare modes guide for token optimization

#### `limitations`
- **Primary:** `https://logicstamp.dev/docs/complete-reference/known-limitations`
- **Fallback:** `https://github.com/LogicStamp/logicstamp-context/blob/main/docs/limitations.md`
- **Description:** Known limitations and edge cases

### `summary`
Quick reference summary:

#### `purpose`
- **Type:** `string`
- **Description:** One-sentence explanation of what LogicStamp is and does

#### `howToUse`
- **Type:** `string[]`
- **Description:** Step-by-step workflow guide:
  1. Call `logicstamp_refresh_snapshot` to generate context files and get a snapshotId
  2. Call `logicstamp_list_bundles` with the snapshotId to discover available bundles
  3. Call `logicstamp_read_bundle` with bundlePath to get component contracts and dependency graphs
  4. Prefer reading bundles over raw source files - bundles contain structured summaries optimized for AI
  5. Only read raw .ts/.tsx files when you need exact implementation details not in bundles

#### `keyConcepts`
- **Type:** `string[]`
- **Description:** Important concepts to understand:
  - Bundles are pre-parsed, structured summaries (not raw code)
  - `context_main.json` is the main index - start here to understand the project
  - Each folder gets a `context.json` file with bundles (one per root component)
  - Bundles contain contracts (props, state, hooks), dependency graphs, and optional style metadata
  - Use header mode (default) for most cases - provides contracts + signatures at ~70% token savings
  - Missing micro-details in bundles is normal - they are intentionally compressed

## Example Usage

### Basic Usage

```json
{
  "name": "logicstamp_read_logicstamp_docs",
  "arguments": {}
}
```

This returns the complete documentation bundle with embedded guide and canonical links.

## Example Output

```json
{
  "type": "LogicStampDocs",
  "version": "1.0",
  "docs": {
    "forLLMs": "# LogicStamp for LLMs\n\nLogicStamp is a CLI tool + MCP server that scans React/TypeScript/Next.js codebases and produces structured, AI-ready summaries (bundles) optimized for LLM consumption...\n\n## How LogicStamp Works\n\n..."
  },
  "canonicalDocs": {
    "landingPage": "https://logicstamp.dev/docs/logicstamp-context/context",
    "cliRepo": "https://github.com/LogicStamp/logicstamp-context",
    "usage": {
      "primary": "https://logicstamp.dev/docs/logicstamp-context/usage",
      "fallback": "https://github.com/LogicStamp/logicstamp-context/blob/main/docs/usage.md"
    },
    "uifContracts": {
      "primary": "https://logicstamp.dev/docs/logicstamp-context/uif-contracts",
      "fallback": "https://github.com/LogicStamp/logicstamp-context/blob/main/docs/uif_contracts.md"
    },
    "schema": {
      "primary": "https://logicstamp.dev/docs/logicstamp-context/schema",
      "fallback": "https://github.com/LogicStamp/logicstamp-context/blob/main/docs/schema.md"
    },
    "context": {
      "primary": "https://logicstamp.dev/docs/logicstamp-context/context",
      "fallback": "https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/context.md"
    },
    "compareModes": {
      "primary": "https://logicstamp.dev/docs/logicstamp-context/compare-modes",
      "fallback": "https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/compare-modes.md"
    },
    "limitations": {
      "primary": "https://logicstamp.dev/docs/complete-reference/known-limitations",
      "fallback": "https://github.com/LogicStamp/logicstamp-context/blob/main/docs/limitations.md"
    }
  },
  "summary": {
    "purpose": "LogicStamp is a CLI tool + MCP server that scans React/TypeScript/Next.js codebases and produces structured, AI-ready summaries (bundles) optimized for LLM consumption.",
    "howToUse": [
      "1. Call logicstamp_refresh_snapshot to generate context files and get a snapshotId",
      "2. Call logicstamp_list_bundles with the snapshotId to discover available bundles",
      "3. Call logicstamp_read_bundle with bundlePath to get component contracts and dependency graphs",
      "4. Prefer reading bundles over raw source files - bundles contain structured summaries optimized for AI",
      "5. Only read raw .ts/.tsx files when you need exact implementation details not in bundles"
    ],
    "keyConcepts": [
      "Bundles are pre-parsed, structured summaries (not raw code)",
      "context_main.json is the main index - start here to understand the project",
      "Each folder gets a context.json file with bundles (one per root component)",
      "Bundles contain contracts (props, state, hooks), dependency graphs, and optional style metadata",
      "Use header mode (default) for most cases - provides contracts + signatures at ~70% token savings",
      "Missing micro-details in bundles is normal - they are intentionally compressed"
    ]
  }
}
```

## Workflow Integration

This tool is **not part of the main workflow** but serves as a **reference and learning tool**:

1. **When starting** - Call this first if you're new to LogicStamp
2. **When confused** - Use this as an escape hatch when concepts are unclear
3. **Reference** - Use the canonical links to access full documentation when needed

The main LogicStamp MCP workflow is:
1. ✅ **Call `logicstamp_refresh_snapshot`** - Creates snapshot (STEP 1)
2. ✅ **Call `logicstamp_list_bundles`** - Lists available bundles (STEP 2)
3. ✅ **Call `logicstamp_read_bundle`** - Read specific bundles (STEP 3)

## Important Notes

- **Frozen snapshot:** The `forLLMs` content is a frozen snapshot embedded in the MCP package. For always-updated docs, use the canonical links.
- **Offline capable:** The embedded `forLLMs` guide works offline - no network required.
- **Redundant links:** Both primary (landing page) and fallback (GitHub) links are provided for reliability.
- **LLM-optimized:** The embedded guide is specifically written and formatted for AI consumption.
- **No parameters:** This tool requires no input - just call it when you need documentation.

## Using the Output

### Read the Embedded Guide
Access the complete guide from `docs.forLLMs` - this contains everything you need to understand LogicStamp.

### Access Canonical Documentation
Use the `canonicalDocs` links when you need:
- Always-updated documentation (use primary landing page)
- Version-specific information (use fallback GitHub links)
- Detailed API references (use schema links)
- CLI command details (use context/compareModes links)

### Quick Reference
Use `summary` for:
- Quick understanding (`purpose`)
- Step-by-step workflow (`howToUse`)
- Key concepts to remember (`keyConcepts`)

## Related Commands

- [`logicstamp_refresh_snapshot`](./refresh-snapshot.md) - Create snapshot (STEP 1)
- [`logicstamp_list_bundles`](./list-bundles.md) - List bundles (STEP 2)
- [`logicstamp_read_bundle`](./read-bundle.md) - Read bundles (STEP 3)
- [`logicstamp_compare_snapshot`](./compare-snapshot.md) - Compare snapshots to detect changes
- [`logicstamp_compare_modes`](./compare-modes.md) - Compare token costs across modes

## Error Handling

If the command fails, it will throw an error with a descriptive message. Common errors:

- **Documentation file not found** - The `docs/logicstamp-for-llms.md` file is missing from the package
- **Package root not found** - Could not locate the logicstamp-mcp package root
- **File read error** - Permission or filesystem error reading the documentation file

**Note:** This tool should rarely fail. If it does, check that:
1. The MCP package is properly installed
2. The `docs/logicstamp-for-llms.md` file exists in the package
3. The file is included in `package.json` `files` array

## See Also

- [MCP Integration Guide](../mcp_integration.md) - Complete MCP server documentation
- [Quick Start](../quickstart.md) - Getting started guide
- [Startup Ritual](../startup-ritual.md) - Recommended message for AI assistants
- [LogicStamp for LLMs](../logicstamp-for-llms.md) - The embedded documentation guide

