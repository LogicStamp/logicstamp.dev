# LogicStamp Context MCP Server

Model Context Protocol (MCP) server for [LogicStamp Context](https://github.com/LogicStamp/logicstamp-context) - enabling AI assistants to safely analyze and understand React/TypeScript codebases.

## Overview

This MCP server provides AI assistants with structured access to your codebase through LogicStamp Context's analysis engine. It acts as a thin wrapper around the `stamp` CLI, offering:

- **Snapshot-based analysis** - Capture codebase state before making edits
- **Component contracts** - Extract props, state, hooks, and dependencies
- **Style metadata** - Extract Tailwind classes, SCSS modules, framer-motion animations, color palettes, layout patterns
- **Dependency graphs** - Understand component relationships
- **Drift detection** - Verify changes after modifications
- **Token optimization** - Control context size with configurable code inclusion modes

## Features

### 4 Core Tools

1. **`logicstamp_refresh_snapshot`** - Analyze project and create snapshot
2. **`logicstamp_list_bundles`** - List available component bundles
3. **`logicstamp_read_bundle`** - Read full component contract + graph
4. **`logicstamp_compare_snapshot`** - Detect changes after edits

### Key Benefits

- **Context-Aware Edits** - AI reads actual component contracts before modifying
- **Self-Verification** - AI verifies its own changes via drift detection
- **Token-Efficient** - Only load bundles relevant to the task
- **Safe by Default** - Changes must pass drift check before approval

## Prerequisites

1. **Node.js** 18.0.0 or higher
2. **LogicStamp Context CLI** - The `stamp` command must be installed and available in PATH
   ```bash
   npm install -g logicstamp-context
   ```

## Installation

### For Claude Code Users

LogicStamp MCP server works with [Claude Code](https://claude.com/claude-code) - Anthropic's official CLI for Claude.

#### Option 1: Global Installation (Recommended)

Install globally to use LogicStamp in **all your projects**:

```bash
# Install the package (when published)
npm install -g logicstamp-context-mcp

# Add to Claude Code - available everywhere
claude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-context-mcp
```

**What this does:**
- Adds LogicStamp to your global Claude Code configuration (`~/.claude.json`)
- Makes the 4 LogicStamp tools available in every project
- Server auto-starts when Claude Code needs it (no manual startup required)

#### Option 2: Per-Project Installation (For Teams)

Install per-project to share configuration with your team via git:

```bash
# Install the package
npm install -g logicstamp-context-mcp

# In your project directory
cd /path/to/your/project
claude mcp add --scope project --transport stdio logicstamp -- npx logicstamp-context-mcp
```

**What this does:**
- Creates `.mcp.json` in your project root
- Can be committed to git for team collaboration
- Team members get the same MCP configuration

**Example `.mcp.json`:**
```json
{
  "mcpServers": {
    "logicstamp": {
      "type": "stdio",
      "command": "npx",
      "args": ["logicstamp-context-mcp"]
    }
  }
}
```

#### Option 3: Local Development

For contributors or if you're developing the MCP server locally:

```bash
# Clone and build
git clone https://github.com/your-org/logicstamp-context-mcp.git
cd logicstamp-context-mcp
npm install
npm run build

# For Claude Code: Copy the example config and customize it
cp .claude.json.example .claude.json
# Then edit .claude.json with your actual paths

# Or add via CLI (replace with your actual path)
claude mcp add --scope user --transport stdio logicstamp -- node /absolute/path/to/logicstamp-context-mcp/dist/index.js
```

On Windows:
```bash
claude mcp add --scope user --transport stdio logicstamp -- node C:\Users\YourName\path\to\logicstamp-context-mcp\dist\index.js
```

**Note:** `.claude.json` is gitignored to protect user-specific paths. Use `.claude.json.example` as a template.

### For Claude Desktop Users

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "logicstamp": {
      "command": "npx",
      "args": ["logicstamp-context-mcp"]
    }
  }
}
```

### For Other MCP Clients

For any MCP-compatible client:

```bash
npx logicstamp-context-mcp
```

The server communicates via stdio and will automatically connect to the client.

## Verifying Installation

After installation, verify the server is configured:

```bash
claude mcp list
```

You should see:
```
Checking MCP server health...

logicstamp: npx logicstamp-context-mcp - ✓ Connected
```

## Quick Start with Claude Code

Once installed, start Claude Code in any React/TypeScript project:

```bash
cd /path/to/your/react-project
claude
```

Ask Claude to analyze your codebase:
```
You: "Use LogicStamp to analyze the components in src/components"

Claude: [Automatically uses logicstamp_refresh_snapshot and logicstamp_list_bundles]
```

The 4 LogicStamp tools will be available:
- `logicstamp_refresh_snapshot` - Analyze project structure
- `logicstamp_list_bundles` - List available components
- `logicstamp_read_bundle` - Read component contracts
- `logicstamp_compare_snapshot` - Detect changes after edits

## Usage Examples

### Example: Analyzing with Style Metadata

To analyze components with style information (Tailwind classes, animations, color palettes):

```
1. USER: "Analyze my components with style information"

2. AI → MCP: logicstamp_refresh_snapshot({ includeStyle: true })
   Response: { snapshotId: "snap_123", includeStyle: true, ... }

3. AI → MCP: logicstamp_list_bundles(snapshotId)
   Response: [{ bundlePath: "src/components/context.json", ... }]

4. AI → MCP: logicstamp_read_bundle(snapshotId, bundlePath)
   Response: { 
     bundle: { 
       graph: { 
         nodes: [{ 
           contract: { 
             style: {
               styleSources: { tailwind: {...}, scssModule: "...", motion: {...} },
               layout: { type: "flex", breakpoints: ["md", "lg"] },
               visual: { colors: ["bg-blue-500", "text-white"], spacing: [...] },
               animation: { library: "framer-motion", type: "fade-in" }
             }
           }
         }]
       }
     }
   }

5. AI: Provides analysis including:
   - Component structure (props, state, hooks)
   - Visual design (colors, spacing, typography)
   - Layout patterns (flex vs grid, responsive breakpoints)
   - Animation usage
```

### Example Workflow: Safe Code Modification

```
1. USER: "Add a --force flag to the clean command"

2. AI → MCP: logicstamp_refresh_snapshot()
   Response: { snapshotId: "snap_123", summary: {...}, folders: [...] }

3. AI → MCP: logicstamp_list_bundles(snapshotId, folderPrefix: "src/cli/commands")
   Response: [{ bundle_clean, ... }]

4. AI → MCP: logicstamp_read_bundle(snapshotId, bundlePath: "src/cli/commands/context.json", rootComponent: "clean")
   Response: { bundle: { contract, graph } }

5. AI: Understand current implementation
   - cleanCommand signature
   - Existing flags and options
   - File structure

6. AI → IDE: Edit src/cli/commands/clean.ts
   - Add --force flag handling

7. AI → MCP: logicstamp_compare_snapshot()
   Response: {
     status: "diff",
     folderDiffs: [{ path: "src/cli/commands", changes: [...] }]
   }

8. AI → USER: "Here's what changed:
   - Modified: src/cli/commands/clean.ts
   - Added function: handleForceFlag
   - Semantic hash changed (expected)
   - Token delta: +45

   This matches the expected changes. Apply? (yes/no)"
```

## Tool Reference

### 1. logicstamp_refresh_snapshot

Create a snapshot of the current codebase state.

**Input:**
```json
{
  "profile": "llm-chat",      // optional: llm-chat | llm-safe | ci-strict
  "mode": "header",            // optional: none | header | full
  "includeStyle": false,       // optional: include style metadata (Tailwind, SCSS, animations, etc.)
  "projectPath": "/abs/path"   // optional: defaults to cwd
}
```

**Output:**
```json
{
  "snapshotId": "snap_1764033034172",
  "projectPath": "/path/to/project",
  "profile": "llm-chat",
  "mode": "header",
  "includeStyle": false,
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
  "folders": [...]
}
```

### 2. logicstamp_list_bundles

List available bundles for selective loading.

**Input:**
```json
{
  "snapshotId": "snap_1764033034172",
  "folderPrefix": "src/components"  // optional
}
```

**Output:**
```json
{
  "snapshotId": "snap_1764033034172",
  "totalBundles": 5,
  "bundles": [
    {
      "id": "bundle_Button",
      "rootComponent": "Button",
      "filePath": "src/components/Button.tsx",
      "folder": "src/components",
      "bundlePath": "src/components/context.json",
      "position": "1/5",
      "bundleHash": "uifb:6e122a4e538c640f09501037",
      "approxTokens": 549
    }
  ]
}
```

### 3. logicstamp_read_bundle

Read full component contract and dependency graph.

**Input:**
```json
{
  "snapshotId": "snap_1764033034172",
  "bundlePath": "src/components/context.json",
  "rootComponent": "Button"  // optional
}
```

**Note:** If `includeStyle: true` was used in `refresh_snapshot`, the bundle contracts will include a `style` field with:
- `styleSources` - Tailwind classes (categorized), SCSS modules, framer-motion usage
- `layout` - Layout patterns (flex/grid), responsive breakpoints
- `visual` - Color palettes, spacing patterns, typography
- `animation` - Animation libraries and types

**Output:**
```json
{
  "snapshotId": "snap_1764033034172",
  "bundlePath": "src/components/context.json",
  "rootComponent": "Button",
  "bundle": {
    "type": "LogicStampBundle",
    "entryId": "...",
    "graph": {
      "nodes": [
        {
          "entryId": "...",
          "contract": {
            "type": "UIFContract",
            "kind": "react:component",
            "description": "Interactive button component",
            "logicSignature": {
              "props": {
                "onClick": { "type": "() => void" },
                "variant": { "type": "primary | secondary" }
              },
              "emits": {},
              "state": {}
            },
            "version": {
              "hooks": ["useState"],
              "components": [],
              "functions": ["handleClick"]
            }
          }
        }
      ],
      "edges": []
    }
  }
}
```

### 4. logicstamp_compare_snapshot

Detect changes after edits.

**Input:**
```json
{
  "profile": "llm-chat",      // optional
  "mode": "header",            // optional
  "includeStyle": false,       // optional: include style metadata in comparison
  "projectPath": "/abs/path",  // optional
  "baseline": "disk"           // optional: disk | snapshot | git:<ref>
}
```

**Output:**
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
      "path": "src/components",
      "status": "changed",
      "changes": [
        {
          "rootComponent": "Button",
          "type": "uif_contract_changed",
          "semanticHashBefore": "uif:637c3858",
          "semanticHashAfter": "uif:7f8d9e0a",
          "tokenDelta": 40,
          "details": {
            "modifiedFields": ["version.functions"],
            "addedFunctions": ["handleKeyDown"]
          }
        }
      ]
    }
  ]
}
```

**Change Types:**
The `changes` array can contain objects with different `type` values:
- `uif_contract_changed` - Component contract changed (props, functions, imports, etc.)
- `hash_changed` - Bundle hash changed but semantic hash unchanged
- `bundle_added` - New component bundle added
- `bundle_removed` - Component bundle removed
- `props_signature_changed` - Props signature changed (reserved for future use)

**Status Values:**
- `pass` - No changes detected
- `diff` - Changes detected
- `error` - Comparison failed (check `error` field for details)

## Development

### Build

```bash
npm install
npm run build
```

### Run Locally

```bash
npm start
```

### Watch Mode

```bash
npm run dev
```

## Project Structure

```
logicstamp-context-mcp/
├── src/
│   ├── index.ts              # Entry point
│   ├── types/
│   │   └── schemas.ts        # TypeScript schemas
│   └── mcp/
│       ├── server.ts         # MCP server implementation
│       ├── state.ts          # Snapshot state management
│       └── tools/
│           ├── refresh-snapshot.ts
│           ├── list-bundles.ts
│           ├── read-bundle.ts
│           └── compare-snapshot.ts
├── dist/                     # Compiled output
├── package.json
├── tsconfig.json
└── README.md
```

## Requirements for LogicStamp CLI

This MCP server requires:
- **`stamp context` command** - Must be installed and available in PATH
- The CLI generates `context_main.json` files (already JSON format)
- The MCP reads these JSON files directly - no special JSON output flags needed

**Note:** The MCP does not require `--json` or `--json-summary` flags. It reads the JSON files that `stamp context` generates directly from disk.

## Troubleshooting

### MCP Server Not Found

**Problem:** Claude Code says "LogicStamp tools not available"

**Solution:**
```bash
# Check if server is configured
claude mcp list

# If not listed, add it
claude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-context-mcp

# Restart Claude Code or start a new conversation
```

### Server Connection Failed

**Problem:** `claude mcp list` shows `logicstamp: ✗ Failed to connect`

**Solutions:**

1. **Check if the package is installed:**
   ```bash
   npm list -g logicstamp-context-mcp
   # or verify npx can find it
   npx logicstamp-context-mcp --help
   ```

2. **For local development, verify the path is correct:**
   ```bash
   # Check file exists
   ls /absolute/path/to/dist/index.js

   # On Windows
   dir C:\path\to\dist\index.js
   ```

3. **Check build output:**
   ```bash
   cd /path/to/logicstamp-context-mcp
   npm run build
   # Should compile without errors
   ```

4. **Try manual test:**
   ```bash
   node dist/index.js
   # Should wait for stdin (MCP server is ready)
   # Press Ctrl+C to exit
   ```

### "Snapshot not found" Error

**Problem:** Tools return "Snapshot ID not found"

**Solution:**
Always call `logicstamp_refresh_snapshot` first:
```
You: "Create a snapshot of this project"
Claude: [Runs logicstamp_refresh_snapshot]
You: "Now list the components in src/"
Claude: [Uses the snapshot ID from previous call]
```

### "stamp: command not found"

**Problem:** MCP server can't find the `stamp` CLI

**Solution:** Install LogicStamp Context CLI globally:
```bash
npm install -g logicstamp-context
# Verify installation
stamp --version
```

### Removing/Reconfiguring the Server

To remove or change the configuration:

```bash
# Remove from user scope
claude mcp remove logicstamp

# Remove from project scope
cd /path/to/project
claude mcp remove logicstamp

# Check current configuration
claude mcp get logicstamp
```

### Switching Between Scopes

If you have LogicStamp configured in multiple scopes:

- **User scope** (global) takes precedence
- **Project scope** (`.mcp.json`) overrides user scope in that project
- **Local scope** (per-project in `~/.claude.json`) overrides both

To see which scope is active:
```bash
claude mcp get logicstamp
```

### Token Estimates

Control context size with mode parameter:

- `none` mode: Contracts only (~79% token savings)
- `header` mode: Contracts + JSDoc headers (~65% savings)
- `full` mode: Complete source code (no savings)

**Example:**
```
You: "Create a snapshot with mode=none to save tokens"
Claude: [Calls logicstamp_refresh_snapshot with mode: "none"]

You: "Analyze components with style information"
Claude: [Calls logicstamp_refresh_snapshot with includeStyle: true]
```

### Debug Mode

To see detailed MCP communication:

```bash
# Run Claude Code with MCP debug mode
claude --mcp-debug

# Or enable debug logging
export ANTHROPIC_LOG=debug
claude
```

## Architecture

### Design Principles

1. **Thin Wrapper** - Shells out to existing `stamp` CLI
2. **Stateful Snapshots** - Tracks context before/after edits
3. **Read-Only** - Server never writes to project files
4. **Token-Efficient** - Selective bundle loading

### Security

- Path validation ensures `projectPath` is within allowed directories
- Bundle size limits prevent OOM
- Token budgets cap total tokens per request
- Snapshot TTL auto-expires old snapshots

## License

MIT

## Contributing

Contributions welcome! Please open an issue or PR.

## Links

- [LogicStamp Context](https://github.com/LogicStamp/logicstamp-context)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [MCP SDK](https://github.com/modelcontextprotocol/sdk)
