# logicstamp_compare_modes

> Generate comparison data file for MCP (Model Context Protocol) integration. Provides detailed token cost analysis across all available context generation modes.

## Overview

`logicstamp_compare_modes` generates a detailed comparison of token costs across all available context generation modes. This tool calls `stamp context --compare-modes --stats` and reads the generated `context_compare_modes.json` file, providing structured comparison data that helps you make informed decisions about which mode to use for your AI workflows.

The comparison includes:
- Token counts for all modes (none, header, header+style, full)
- Comparison vs raw source (showing token savings)
- Mode breakdown vs full context (showing relative efficiency)
- File statistics (total files, .ts files, .tsx files)

## When to Use

Use `logicstamp_compare_modes` when you need to:

- **Optimize token budgets** - See exact costs for different modes before committing
- **Evaluate style overhead** - Understand the token impact of including style metadata
- **Compare against raw source** - Calculate savings from using LogicStamp vs raw file dumps
- **Plan AI workflows** - Choose the most cost-effective mode for your use case
- **Budget for scale** - Project token costs for larger codebases
- **MCP integration** - Generate structured comparison data for programmatic consumption

## Parameters

### `projectPath` (optional)
- **Type:** `string`
- **Default:** Current working directory (or `PROJECT_PATH` environment variable)
- **Description:** Absolute path to the project root. If not provided, uses the current directory.

### `cleanCache` (optional)
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Manually force cleanup of `.logicstamp` cache directory. Cache is automatically cleaned if corruption or path mismatches are detected. Only set to `true` if you're experiencing cache-related issues.

## Output

Returns a `CompareModesOutput` object containing the parsed JSON data from `context_compare_modes.json`:

### `projectPath`
- **Type:** `string`
- **Description:** Absolute path to the analyzed project

### `tokenEstimation`
- **Type:** `object`
- **Description:** Token estimation method information
  - `method` - String describing which tokenizers are being used (e.g., "GPT-4o (tiktoken) | Claude (tokenizer)")

### `comparisonVsRawSource`
- **Type:** `object`
- **Description:** Token counts compared to raw source files
  - `rawSource` - Baseline showing tokens for all source code without processing
    - `tokensGPT4o` - GPT-4o token count
    - `tokensClaude` - Claude token count
    - `savingsPercent` - Always 0% (baseline)
  - `header` - Contracts plus JSDoc headers (typical 70% savings)
    - `tokensGPT4o` - GPT-4o token count
    - `tokensClaude` - Claude token count
    - `savingsPercent` - Percentage savings vs raw source
  - `headerStyle` - Header mode plus style metadata (typical 38% savings)
    - `tokensGPT4o` - GPT-4o token count
    - `tokensClaude` - Claude token count
    - `savingsPercent` - Percentage savings vs raw source

### `modeBreakdown`
- **Type:** `object`
- **Description:** Token counts for each mode compared to full context
  - `none` - Maximum compression (86% savings vs full)
    - `tokensGPT4o` - GPT-4o token count
    - `tokensClaude` - Claude token count
    - `savingsVsFull` - Percentage savings vs full context
  - `header` - Balanced compression (77% savings vs full, recommended default)
    - `tokensGPT4o` - GPT-4o token count
    - `tokensClaude` - Claude token count
    - `savingsVsFull` - Percentage savings vs full context
  - `headerStyle` - Moderate compression (52% savings vs full)
    - `tokensGPT4o` - GPT-4o token count
    - `tokensClaude` - Claude token count
    - `savingsVsFull` - Percentage savings vs full context
  - `full` - No compression (0% savings, includes complete source)
    - `tokensGPT4o` - GPT-4o token count
    - `tokensClaude` - Claude token count
    - `savingsVsFull` - Always 0% (baseline)

### `stats`
- **Type:** `object`
- **Description:** File statistics
  - `totalFiles` - Total number of files analyzed
  - `totalTS` - Number of TypeScript (.ts) files
  - `totalTSX` - Number of TypeScript React (.tsx) files

## Example Output

```json
{
  "projectPath": "/absolute/path/to/project",
  "tokenEstimation": {
    "method": "GPT-4o (tiktoken) | Claude (tokenizer)"
  },
  "comparisonVsRawSource": {
    "rawSource": {
      "tokensGPT4o": 273006,
      "tokensClaude": 289573,
      "savingsPercent": 0
    },
    "header": {
      "tokensGPT4o": 82917,
      "tokensClaude": 90131,
      "savingsPercent": 70
    },
    "headerStyle": {
      "tokensGPT4o": 170466,
      "tokensClaude": 184864,
      "savingsPercent": 38
    }
  },
  "modeBreakdown": {
    "none": {
      "tokensGPT4o": 49751,
      "tokensClaude": 54079,
      "savingsVsFull": 86
    },
    "header": {
      "tokensGPT4o": 82917,
      "tokensClaude": 90131,
      "savingsVsFull": 77
    },
    "headerStyle": {
      "tokensGPT4o": 170466,
      "tokensClaude": 184864,
      "savingsVsFull": 52
    },
    "full": {
      "tokensGPT4o": 355923,
      "tokensClaude": 379704,
      "savingsVsFull": 0
    }
  },
  "stats": {
    "totalFiles": 150,
    "totalTS": 100,
    "totalTSX": 50
  }
}
```

## Understanding the Numbers

### Savings Percentages

**Savings vs Raw Source:**
- Measures reduction compared to dumping all source files (simple concatenation)
- Higher is better for token efficiency
- Typical range: 70% for header mode, 38% for header+style mode
- Note: "Full" mode exceeds raw source due to contract structure overhead (~30% more)

**Savings vs Full Context:**
- Measures reduction compared to maximum information mode (full contracts + complete source)
- Shows relative efficiency between modes
- Typical range: 77% for header mode, 52% for header+style mode

### Token Counts

**GPT-4o vs Claude:**
- Token counts vary by model-specific tokenization (typically within 5-10% difference)
- Differences depend on the specific content being tokenized
- Both estimates are provided for flexibility

## Mode Selection Guide

### none - Maximum Compression
- **Best for:** CI/CD contract validation, dependency graph analysis, maximum token efficiency
- **Token cost:** Typically 18% of raw source
- **Limitations:** No source code or implementation details, no visual/styling information

### header - Balanced Compression (Recommended Default)
- **Best for:** General AI chat workflows, code review and refactoring, understanding component interfaces
- **Token cost:** Typically 30% of raw source
- **Includes:** Full contracts (props, state, hooks), JSDoc headers and comments, function signatures and types, dependency relationships

### header+style - Visual Context
- **Best for:** UI/UX discussions with AI, design system maintenance, frontend code generation, visual consistency reviews
- **Token cost:** Typically 62% of raw source
- **Includes:** Everything from header mode plus Tailwind/CSS class patterns, SCSS/CSS module analysis, animation metadata, layout patterns, color and spacing patterns

### full - Complete Context
- **Best for:** Deep implementation reviews, complex refactoring tasks, bug investigation requiring source
- **Token cost:** Typically 130% of raw source (includes contract structure overhead)
- **Includes:** Everything from header+style mode plus complete source code for all components

## Error Handling

### Command Execution Failures
- If `stamp context --compare-modes --stats` fails, the tool will throw an error with details about the failure
- Common causes: `stamp` command not found, invalid project path, permission errors

### Missing JSON File
- If `context_compare_modes.json` is not generated or is missing, the tool will throw an error
- Ensure the `stamp` command executed successfully before reading the file

### Invalid JSON
- If the generated JSON file is malformed, the tool will throw a JSON parsing error
- This typically indicates an issue with the `stamp` command execution

## Performance Notes

- `logicstamp_compare_modes` takes longer than normal generation (2-3x)
- Regenerates contracts with/without style for accurate comparison
- Uses in-memory processing, no disk writes (except generating the JSON file)
- Typical execution: 5-15 seconds for medium projects (50-150 files)

## Related Commands

- [`logicstamp_refresh_snapshot`](refresh-snapshot.md) - Generate context files and create snapshot
- [`logicstamp_compare_snapshot`](compare-snapshot.md) - Compare context changes over time
- [`logicstamp_list_bundles`](list-bundles.md) - List available component bundles
- [`logicstamp_read_bundle`](read-bundle.md) - Read component contracts and dependencies

## Tips

- Run `logicstamp_compare_modes` before committing to a generation mode
- Use approximation during development, tokenizers in CI/production
- Consider `header` mode as the default balanced choice
- Add `header+style` only when visual context is needed
- Reserve `full` mode for deep implementation tasks
- Check token costs regularly as your codebase grows

