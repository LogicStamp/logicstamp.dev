# MCP Integration Guide for LogicStamp Context

> **See also:** [Implementation Summary](implementation_summary.md) for project status and deployment guide | [Tool Description](tool_description.md) for LogicStamp Context capabilities | [Quick Start](quickstart.md) for setup instructions

## Overview

This document outlines the design and implementation of the **Model Context Protocol (MCP)** integration for LogicStamp Context. The MCP server acts as a thin wrapper around the existing CLI, enabling AI assistants to safely analyze and modify codebases with built-in verification.

## Architecture

### Design Principles

1. **Thin Wrapper**: The MCP server primarily shells out to the existing `stamp` CLI for code analysis. The `compare_snapshot` tool implements comparison logic directly by reading and comparing JSON files (since it operates on already-generated context files rather than re-analyzing source code).
2. **Stateful Snapshots**: Track context snapshots before/after edits for drift detection.
3. **Read-Only Bundle Access**: LLMs can read component contracts and dependency graphs.
4. **Machine-Readable Diffs**: JSON-based comparison results for LLM reasoning.

### Core Components

```typescript
// Internal state management
interface Snapshot {
  id: string;                    // e.g., "snap_1764033034172"
  createdAt: string;             // ISO timestamp
  projectPath: string;           // Absolute path to project
  profile: string;               // "llm-chat" | "llm-safe" | "ci-strict"
  mode: 'header' | 'full' | 'none';
  contextDir: string;            // Where context_main.json + folders live
}

interface MCPServerState {
  currentSnapshot?: Snapshot;    // Last "before edits" snapshot
  lastCompareResult?: CompareResult; // Last diff result
}
```

### Directory Structure

```
logicstamp-context/
├── src/
│   ├── cli/              # Existing CLI commands
│   ├── core/             # AST parsing, bundling
│   ├── mcp/              # New MCP server layer
│   │   ├── server.ts     # MCP server implementation
│   │   ├── tools/        # MCP tool implementations
│   │   │   ├── refresh-snapshot.ts
│   │   │   ├── list-bundles.ts
│   │   │   ├── read-bundle.ts
│   │   │   └── compare-snapshot.ts
│   │   ├── state.ts      # Snapshot state management
│   │   └── schemas.ts    # JSON schemas for responses
│   └── utils/
└── package.json
```

## MCP Tools (MVP)

### Tool 1: `logicstamp_refresh_snapshot`

**Purpose**: Run `stamp context` and create a snapshot before edits.

**Input**:
```json
{
  "profile": "llm-chat",
  "mode": "header",
  "projectPath": "/absolute/path/to/project"
}
```

**Parameters**:
- `profile` (optional): `llm-chat` (default) | `llm-safe` | `ci-strict`
- `mode` (optional): `header` (default) | `full` | `none`
- `projectPath` (optional): Defaults to current working directory

**Behavior**:
1. Execute: `stamp context --profile llm-chat --include-code header --skip-gitignore --quiet`
2. Store snapshot metadata in memory
3. Read and return summary from `context_main.json` (already JSON format)

**Output**:
```json
{
  "snapshotId": "snap_1764033034172",
  "projectPath": "/absolute/path/to/project",
  "profile": "llm-chat",
  "mode": "header",
  "summary": {
    "totalComponents": 32,
    "totalBundles": 30,
    "totalFolders": 14,
    "totalTokenEstimate": 19127,
    "tokenEstimates": {
      "gpt4oMini": 13895,
      "gpt4oMiniFullCode": 39141,
      "claude": 12351,
      "claudeFullCode": 34792
    },
    "missingDependencies": []
  },
  "folders": [
    {
      "path": "src/cli/commands",
      "bundles": 5,
      "components": ["clean.ts", "compare.ts", "context.ts", "init.ts", "validate.ts"],
      "tokenEstimate": 2748
    }
  ]
}
```

---

### Tool 2: `logicstamp_list_bundles`

**Purpose**: List available bundles in a snapshot for selective loading.

**Input**:
```json
{
  "snapshotId": "snap_1764033034172",
  "folderPrefix": "src/components"
}
```

**Parameters**:
- `snapshotId` (required): Snapshot ID from `refresh_snapshot`
- `folderPrefix` (optional): Filter bundles by folder path

**Behavior**:
1. Read `context_main.json` from snapshot
2. Parse folder metadata
3. Return bundle descriptors

**Output**:
```json
{
  "snapshotId": "snap_1764033034172",
  "totalBundles": 5,
  "bundles": [
    {
      "id": "bundle_clean",
      "rootComponent": "clean",
      "filePath": "src/cli/commands/clean.ts",
      "folder": "src/cli/commands",
      "bundlePath": "src/cli/commands/context.json",
      "position": "1/5",
      "bundleHash": "uifb:6e122a4e538c640f09501037",
      "approxTokens": 549
    },
    {
      "id": "bundle_compare",
      "rootComponent": "compare",
      "filePath": "src/cli/commands/compare.ts",
      "folder": "src/cli/commands",
      "bundlePath": "src/cli/commands/context.json",
      "position": "2/5",
      "bundleHash": "uifb:9ccd05f3e48157fccec5fdf7",
      "approxTokens": 656
    }
  ]
}
```

---

### Tool 3: `logicstamp_read_bundle`

**Purpose**: Return the full bundle (contract + graph) for a specific component.

**Input**:
```json
{
  "snapshotId": "snap_1764033034172",
  "bundlePath": "src/cli/commands/context.json",
  "rootComponent": "clean"
}
```

**Parameters**:
- `snapshotId` (required): Snapshot ID
- `bundlePath` (required): Relative path to folder's context.json
- `rootComponent` (optional): Specific component name (if omitted, returns all bundles in file)

**Behavior**:
1. Open `<contextDir>/<bundlePath>`
2. Parse bundle array
3. Find bundle matching `rootComponent` by `entryId`
4. Return full bundle object

**Output**:
```json
{
  "snapshotId": "snap_1764033034172",
  "bundlePath": "src/cli/commands/context.json",
  "rootComponent": "clean",
  "bundle": {
    "$schema": "https://logicstamp.dev/schemas/context/v0.1.json",
    "position": "1/5",
    "type": "LogicStampBundle",
    "schemaVersion": "0.1",
    "entryId": "c:/Users/River/Desktop/logicstamp-context/src/cli/commands/clean.ts",
    "depth": 1,
    "createdAt": "2025-11-25T01:13:14.387Z",
    "bundleHash": "uifb:6e122a4e538c640f09501037",
    "graph": {
      "nodes": [
        {
          "entryId": "c:/Users/River/Desktop/logicstamp-context/src/cli/commands/clean.ts",
          "contract": {
            "type": "UIFContract",
            "schemaVersion": "0.3",
            "kind": "node:cli",
            "description": "clean - CLI entry point",
            "version": {
              "functions": ["cleanCommand", "displayPath", "findContextFiles"],
              "imports": ["../../utils/fsx.js", "glob", "node:fs/promises"]
            },
            "logicSignature": {
              "props": {},
              "emits": {}
            },
            "exports": {
              "named": ["cleanCommand", "displayPath", "findContextFiles"]
            },
            "semanticHash": "uif:637c3858c9c75001870c8b7b"
          },
          "codeHeader": null
        }
      ],
      "edges": []
    },
    "meta": {
      "missing": [],
      "source": "logicstamp-context@0.1.0"
    }
  }
}
```

---

### Tool 4: `logicstamp_compare_snapshot`

**Purpose**: Detect drift after edits by comparing current state to baseline.

**Input**:
```json
{
  "profile": "llm-chat",
  "mode": "header",
  "projectPath": "/absolute/path/to/project",
  "baseline": "disk"
}
```

**Parameters**:
- `profile` (optional): Accepted but not used in comparison (for future CLI integration)
- `mode` (optional): Accepted but not used in comparison (for future CLI integration)
- `projectPath` (optional): Defaults to current working directory. Path where current `context_main.json` exists.
- `baseline` (optional): 
  - `disk` (default): Uses the current snapshot's context directory as baseline
  - `snapshot`: Uses the current snapshot's context directory as baseline (same as `disk`)
  - `git:<ref>`: Not yet implemented (throws error)
  - `<path>`: Custom path to baseline `context_main.json` directory

**Behavior**:
1. Resolve baseline path based on `baseline` parameter:
   - For `disk` or `snapshot`: Uses stored snapshot from `refresh_snapshot`
   - For custom path: Uses provided path
2. Read baseline `context_main.json` from baseline path
3. Read current `context_main.json` from `projectPath`
4. Compare JSON structures directly in TypeScript (does not call CLI):
   - Compare folder structures
   - Compare bundle hashes and semantic hashes
   - Load and compare individual bundles when needed
   - Calculate token deltas from index summaries or component changes
5. Return structured comparison result

**Output**:
```json
{
  "baseline": "disk",
  "status": "pass",
  "summary": {
    "totalFolders": 14,
    "unchangedFolders": 14,
    "changedFolders": 0,
    "addedFolders": 0,
    "removedFolders": 0,
    "tokenDelta": {
      "gpt4oMini": 0,
      "claude": 0
    }
  },
  "folderDiffs": []
}
```

**Output (with changes)**:
```json
{
  "baseline": "disk",
  "status": "diff",
  "summary": {
    "totalFolders": 14,
    "unchangedFolders": 12,
    "changedFolders": 2,
    "addedFolders": 0,
    "removedFolders": 0,
    "tokenDelta": {
      "gpt4oMini": 320,
      "claude": 270
    }
  },
  "folderDiffs": [
    {
      "path": "src/cli/commands",
      "status": "changed",
      "changes": [
        {
          "rootComponent": "clean",
          "type": "uif_contract_changed",
          "semanticHashBefore": "uif:637c3858c9c75001870c8b7b",
          "semanticHashAfter": "uif:7f8d9e0a1b2c3d4e5f6a7b8c",
          "tokenDelta": 40,
          "details": {
            "modifiedFields": ["version.functions"],
            "addedFunctions": ["findLogicStampDir", "findMainContextFile"],
            "removedFunctions": []
          }
        }
      ]
    },
    {
      "path": "src/core",
      "status": "changed",
      "changes": [
        {
          "rootComponent": "astParser",
          "type": "props_signature_changed",
          "details": {
            "addedProps": [],
            "removedProps": [],
            "modifiedExports": ["extractFromFile"]
          }
        }
      ]
    }
  ]
}
```

---

### Tool 5: `logicstamp_get_last_compare_result` (Optional)

**Purpose**: Retrieve cached comparison result without re-running.

**Input**:
```json
{
  "since": "2025-11-25T01:13:14.387Z"
}
```

**Parameters**:
- `since` (optional): ISO timestamp filter

**Output**: Same as `logicstamp_compare_snapshot`

---

## LLM Workflow

### Scenario: Safe Code Modification

```
┌─────────────────────────────────────────────────────────────┐
│ USER: "Add a new --force flag to the clean command"        │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ LLM → MCP: logicstamp_refresh_snapshot()                   │
│ Response: { snapshotId, summary, folders }                 │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ LLM → MCP: logicstamp_list_bundles(                        │
│   snapshotId,                                              │
│   folderPrefix: "src/cli/commands"                         │
│ )                                                          │
│ Response: [{ bundle_clean, ... }]                          │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ LLM → MCP: logicstamp_read_bundle(                         │
│   snapshotId,                                              │
│   bundlePath: "src/cli/commands/context.json",            │
│   rootComponent: "clean"                                   │
│ )                                                          │
│ Response: { bundle: { contract, graph } }                  │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ LLM: Understand current implementation                     │
│ - cleanCommand signature                                   │
│ - Existing flags and options                               │
│ - File structure                                           │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ LLM → IDE: Edit src/cli/commands/clean.ts                 │
│ - Add --force flag handling                                │
│ - Update command logic                                     │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ LLM → MCP: logicstamp_compare_snapshot()                   │
│ Response: {                                                │
│   status: "diff",                                          │
│   folderDiffs: [{ path: "src/cli/commands", ... }]        │
│ }                                                          │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ LLM → USER: "Here's what changed:                          │
│   - Modified: src/cli/commands/clean.ts                   │
│   - Added function: handleForceFlag                        │
│   - Semantic hash changed (expected)                       │
│   - Token delta: +45                                       │
│                                                            │
│ This matches the expected changes. Apply? (yes/no)"        │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
                    ┌─────┴─────┐
                    │           │
                   YES         NO
                    │           │
                    │           ▼
                    │    ┌──────────────┐
                    │    │ Revert edits │
                    │    └──────────────┘
                    │
                    ▼
            ┌────────────────┐
            │ Keep changes   │
            │ Commit/save    │
            └────────────────┘
```

---

## CLI Usage

### Current Status

The MCP server currently uses:
- `stamp context` command (via `refresh_snapshot` tool) - ✅ Required
  - Uses `--profile` and `--include-code` flags
  - Uses `--skip-gitignore` flag to ensure non-interactive operation
  - Uses `--quiet` flag to suppress verbose output (MCP reads JSON files directly)
  - Reads `context_main.json` directly after command completes
- Direct JSON file comparison (via `compare_snapshot` tool) - ✅ Implemented in MCP
  - Does not call CLI - reads and compares JSON files directly

### Available CLI Flags

The `stamp context` command supports:
- `--stats` - Output JSON stats for CI (one-line JSON stats)
- `--profile <profile>` - Analysis profile (llm-safe|llm-chat|ci-strict)
- `--include-code <mode>` - Code inclusion mode (none|header|full)
- `--skip-gitignore` - Skip .gitignore setup (never prompt or modify)
- `--quiet` / `-q` - Suppress verbose output

The `stamp context compare` command supports:
- `--stats` - Show token count statistics
- `--approve` - Auto-update all context files (like jest -u)
- `--clean-orphaned` - Clean up orphaned context files
- `--quiet` / `-q` - Suppress verbose output

### Note on JSON Output

The MCP server does not require special JSON output flags because:
- `refresh_snapshot` reads `context_main.json` directly (already JSON)
- `compare_snapshot` implements comparison logic directly (no CLI call needed)

```json
{
  "baseline": "disk",
  "status": "diff",
  "summary": {...},
  "folderDiffs": [...]
}
```

---

## TypeScript Schemas

### CompareResult
```typescript
interface CompareResult {
  baseline: 'disk' | 'snapshot' | string; // e.g., 'git:main'
  status: 'pass' | 'diff' | 'error';
  summary: {
    totalFolders: number;
    unchangedFolders: number;
    changedFolders: number;
    addedFolders: number;
    removedFolders: number;
    tokenDelta: {
      gpt4oMini: number;
      claude: number;
    };
  };
  folderDiffs: FolderDiff[];
  error?: string; // Only present if status === 'error'
}

interface FolderDiff {
  path: string;
  status: 'added' | 'removed' | 'changed' | 'unchanged';
  changes: ComponentChange[];
}

interface ComponentChange {
  rootComponent: string;
  type:
    | 'uif_contract_changed'
    | 'props_signature_changed'
    | 'bundle_added'
    | 'bundle_removed'
    | 'hash_changed';
  semanticHashBefore?: string;
  semanticHashAfter?: string;
  tokenDelta?: number;
  details?: {
    modifiedFields?: string[];
    addedProps?: string[];
    removedProps?: string[];
    addedFunctions?: string[];
    removedFunctions?: string[];
    addedImports?: string[];
    removedImports?: string[];
    modifiedExports?: string[];
  };
}
```

---

## Benefits

### For AI Assistants
- **Context-Aware Edits**: LLM reads actual component contracts before modifying
- **Self-Verification**: LLM can verify its own changes via drift detection
- **Token-Efficient**: Only load bundles relevant to the task
- **Safe by Default**: Changes must pass drift check before approval

### For Developers
- **Transparent**: See exactly what the LLM analyzed and changed
- **Auditable**: Drift reports show semantic impact, not just diffs
- **Composable**: MCP server uses existing CLI (no duplication)
- **CI-Ready**: Same compare logic works in CI and MCP

---

## Implementation Checklist

### Phase 1: CLI JSON Output (Not Required)
- ✅ MCP reads `context_main.json` directly (already JSON format)
- ✅ MCP implements comparison logic directly (no CLI JSON output needed)
- ✅ Token delta calculation implemented in MCP
- Note: `--stats` flag exists but MCP doesn't use it (reads full JSON files instead)

### Phase 2: MCP Server (Core) ✅
- [x] Create `src/mcp/` directory structure
- [x] Implement `server.ts` with MCP protocol
- [x] Implement `tools/refresh-snapshot.ts` (calls `stamp context` CLI)
- [x] Implement `tools/list-bundles.ts` (reads JSON files)
- [x] Implement `tools/read-bundle.ts` (reads JSON files)
- [x] Implement `tools/compare-snapshot.ts` (compares JSON files directly, no CLI call)
- [x] Implement `state.ts` for snapshot management
- [x] Add TypeScript schemas in `schemas.ts`

### Phase 3: Testing & Documentation
- [ ] Unit tests for each MCP tool
- [ ] Integration tests for full workflow
- [ ] Update README with MCP setup instructions
- [ ] Add examples to `examples/mcp-workflow/`
- [ ] Document MCP server deployment

### Phase 4: Advanced Features (Future)
- [ ] Support `baseline: "git:<ref>"` for git-based comparison
- [ ] Add `logicstamp_search_components` for semantic search
- [ ] Implement incremental snapshot updates
- [ ] Add streaming support for large bundles
- [ ] WebSocket support for real-time drift monitoring

---

## Configuration

### MCP Server Settings (`mcp-config.json`)

```json
{
  "server": {
    "name": "logicstamp-context",
    "version": "0.1.0",
    "defaultProfile": "llm-chat",
    "defaultMode": "header"
  },
  "snapshots": {
    "maxSnapshots": 10,
    "ttlMinutes": 60,
    "autoCleanup": true
  },
  "paths": {
    "cliPath": "stamp",
    "tempDir": ".logicstamp/mcp-snapshots"
  },
  "security": {
    "allowedPaths": ["/path/to/projects"],
    "maxBundleSize": 1048576,
    "maxTokensPerRequest": 100000
  }
}
```

---

## Security Considerations

1. **Path Validation**: Ensure `projectPath` is within allowed directories
2. **Bundle Size Limits**: Prevent OOM by limiting bundle size
3. **Token Budgets**: Cap total tokens per snapshot/request
4. **Snapshot TTL**: Auto-expire old snapshots to prevent disk bloat
5. **Read-Only by Default**: MCP server never writes to project files (LLM uses IDE tools)

---

## Example MCP Client Usage (Claude Desktop)

```json
{
  "mcpServers": {
    "logicstamp": {
      "command": "npx",
      "args": ["logicstamp-context-mcp"],
      "env": {
        "PROJECT_PATH": "/path/to/your/project"
      }
    }
  }
}
```

---

## Appendix: Why This Design?

### Thin Wrapper Principle
- **No Duplication**: Analysis logic stays in CLI (for `refresh_snapshot` which calls `stamp context`)
- **Direct Comparison**: `compare_snapshot` implements comparison by reading JSON files directly (avoids CLI overhead for already-generated data)
- **Single Source of Truth**: CLI generates context files, MCP reads and compares them
- **Easy Maintenance**: Analysis bugs fixed in CLI benefit MCP; comparison logic maintained in MCP for performance
- **Testable**: CLI can be tested independently; MCP comparison logic can be tested with JSON fixtures

### Snapshot-Based Approach
- **Idempotent**: Same snapshot = same results
- **Cacheable**: Reuse snapshots across multiple tool calls
- **Auditable**: Snapshots provide complete history
- **Safe**: Compare before/after without touching disk

### JSON-First Schemas
- **LLM-Friendly**: Structured data is easier to reason about than text
- **Type-Safe**: TypeScript schemas prevent errors
- **Extensible**: Add fields without breaking clients
- **Standard**: JSON Schema for validation

---

**Status**: MCP server is fully implemented. The server reads JSON files directly from disk, so no special CLI JSON output flags are required.
