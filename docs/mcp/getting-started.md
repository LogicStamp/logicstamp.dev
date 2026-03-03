# MCP Getting Started Guide

This guide will help you set up the LogicStamp MCP Server to give AI assistants (Claude Desktop, Cursor) direct access to your codebase context.

## What is the LogicStamp MCP Server?

The LogicStamp MCP Server exposes LogicStamp Context via the **Model Context Protocol (MCP)**, allowing AI assistants to:

- **Read context bundles** - Access component contracts and dependency graphs
- **Check watch status** - See if context is being auto-regenerated
- **List available bundles** - Discover all context files in your project
- **Compare snapshots** - Detect architectural changes
- **Refresh context** - Regenerate context bundles on demand

**Key benefits:**
- ✅ **Real-time context** - AI assistants always have fresh architectural context
- ✅ **Automatic updates** - Watch mode keeps context synchronized with your code
- ✅ **Structured access** - AI reads contracts, not raw source code
- ✅ **Zero configuration** - Works out of the box once installed

## Prerequisites

Before setting up the MCP server, ensure you have:

1. **LogicStamp CLI installed** - The MCP server uses the CLI under the hood
   ```bash
   npm install -g logicstamp-context
   ```

2. **MCP-compatible AI assistant** - One of:
   - Claude Desktop (Anthropic)
   - Cursor (with MCP support)
   - Other MCP-compatible tools

3. **TypeScript project** - LogicStamp analyzes `.ts` and `.tsx` files

## Installation

### Step 1: Install the MCP Server

Install the LogicStamp MCP Server globally:

```bash
npm install -g logicstamp-mcp
```

Verify installation:

```bash
# Check if the MCP server is available
which logicstamp-mcp
```

### Step 2: Initialize Your Project

Before the MCP server can provide context, initialize LogicStamp in your project:

```bash
cd /path/to/your/project
stamp init
```

This sets up:
- `.gitignore` patterns for generated files
- Security scanning
- Project configuration

📋 **See [CLI Getting Started Guide](../cli/getting-started.md)** for details.

### Step 3: Generate Initial Context

Generate context files for your project:

```bash
stamp context
```

Or start watch mode to keep context fresh automatically:

```bash
stamp context --watch
```

**Recommended:** Use watch mode so context stays synchronized with your code changes.

## Configuration

### Claude Desktop Configuration

Configure Claude Desktop to use the LogicStamp MCP Server:

1. **Open Claude Desktop settings**
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

2. **Add LogicStamp MCP Server**

```json
{
  "mcpServers": {
    "logicstamp": {
      "command": "npx",
      "args": [
        "-y",
        "logicstamp-mcp"
      ],
      "env": {
        "PROJECT_PATH": "/absolute/path/to/your/project"
      }
    }
  }
}
```

**Important:** Replace `/absolute/path/to/your/project` with the absolute path to your project directory. **Note:** Most tools require `projectPath` as a parameter in tool calls, so this environment variable is optional and only used as a fallback.

3. **Restart Claude Desktop**

Restart Claude Desktop for the changes to take effect.

### Cursor Configuration

If Cursor supports MCP servers, configure it similarly:

1. **Open Cursor settings**
   - Look for MCP server configuration in settings

2. **Add LogicStamp MCP Server**

```json
{
  "mcpServers": {
    "logicstamp": {
      "command": "npx",
      "args": ["-y", "logicstamp-mcp"],
      "env": {
        "PROJECT_PATH": "/absolute/path/to/your/project"
      }
    }
  }
}
```

**Note:** Most tools require `projectPath` as a parameter in tool calls, so this environment variable is optional and only used as a fallback.

3. **Restart Cursor**

Restart Cursor for the changes to take effect.

### Environment Variables

The MCP server uses the following environment variables:

- **`PROJECT_PATH`** (optional) - Absolute path to your project root. Used as a fallback when `projectPath` parameter is not provided in tool calls. **Note:** Most tools require `projectPath` as a parameter, so this environment variable is rarely needed. It's primarily used as a fallback in `logicstamp_compare_snapshot` and `logicstamp_compare_modes` when the parameter is omitted.

**Important:** The `stamp` CLI command is expected to be available in your system PATH. The MCP server calls `stamp` directly and relies on your PATH to find it. Ensure `logicstamp-context` is installed globally:
```bash
npm install -g logicstamp-context
```

## Using MCP Tools

Once configured, AI assistants can use LogicStamp MCP tools:

### Available Tools

#### `logicstamp_watch_status`

⚠️ **CALL THIS FIRST** before any other LogicStamp tool! Check if watch mode (`stamp context --watch`) is active:

```typescript
// Returns watch status
{
  "projectPath": "/path/to/project",
  "watchModeActive": true,
  "status": {
    "active": true,
    "projectRoot": "/path/to/project",
    "pid": 12345,
    "startedAt": "2025-01-20T10:30:00.000Z",
    "outputDir": "/path/to/project"
  },
  "recentLogs": [...], // Only if includeRecentLogs: true
  "message": "Watch mode is ACTIVE. Context bundles are being kept fresh automatically..."
}
```

**Workflow:** If `watchModeActive` is `true`, skip `refresh_snapshot` and go directly to `list_bundles` → `read_bundle`. If `false`, call `refresh_snapshot` first.

#### `logicstamp_list_bundles`

List all available context bundles:

```typescript
// Returns catalog of bundles
{
  "projectPath": "/path/to/project",
  "snapshotId": "snap_123", // Optional - only present if using snapshot
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
  ],
  "watchMode": true // Only present if accessed via watch mode
}
```

#### `logicstamp_read_bundle`

Read a specific context bundle or the project index:

```typescript
// Returns bundle with contracts and dependency graph
{
  "projectPath": "/path/to/project",
  "snapshotId": "snap_123", // Optional - only present if using snapshot
  "bundlePath": "src/components/context.json",
  "rootComponent": "Button", // Optional - filters to specific component
  "bundle": {
    "entryId": "src/components/Button.tsx",
    "graph": {
      "nodes": [
        {
          "entryId": "src/components/Button.tsx",
          "contract": {
            "kind": "react:component",
            "description": "Button component",
            "logicSignature": {
              "props": { "label": { "type": "string" } },
              "emits": {},
              "state": {}
            }
          }
        }
      ],
      "edges": []
    }
  },
  "watchMode": true // Only present if accessed via watch mode
}
```

#### `logicstamp_refresh_snapshot`

⚠️ **CALL THIS ONLY IF** watch mode is inactive! Regenerate all context bundles:

```typescript
// Regenerates context and returns snapshot ID
{
  "snapshotId": "xyz789",
  "projectPath": "/path/to/project",
  "profile": "llm-chat",
  "mode": "header",
  "summary": {
    "totalComponents": 42,
    "totalBundles": 15,
    "totalFolders": 10,
    "totalTokenEstimate": 19127
  },
  "folders": [...],
  "watchMode": { "active": false } // Only present if watch mode was active (and skipped)
}
```

**Important:** The default value of `skipIfWatchActive` is `true`, which automatically skips regeneration when watch mode is running. This avoids expensive regeneration when context is already fresh. You only need to set it explicitly if you want to change the default behavior (e.g., set to `false` to force regeneration even when watch mode is active).

#### `logicstamp_compare_snapshot`

Compare current context with a baseline:

```typescript
// Returns structured diff of changes
{
  "baseline": "disk",
  "status": "diff", // "pass" | "diff" | "error"
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
          "semanticHashBefore": "uif:637c3858c9c75001870c8b7b",
          "semanticHashAfter": "uif:7f8d9e0a1b2c3d4e5f6a7b8c",
          "tokenDelta": 40,
          "details": {
            "addedProps": ["disabled"],
            "removedProps": []
          }
        }
      ]
    }
  ]
}
```

#### `logicstamp_compare_modes`

Compare token costs across all context generation modes:

```typescript
// Returns token comparison
{
  "projectPath": "/path/to/project",
  "tokenEstimation": { "method": "GPT-4o (tiktoken) | Claude (tokenizer)" },
  "comparisonVsRawSource": {
    "rawSource": { "tokensGPT4o": 273006, "tokensClaude": 289573 },
    "header": { "tokensGPT4o": 82917, "tokensClaude": 90131, "savingsPercent": 70 }
  },
  "modeBreakdown": {
    "none": { "tokensGPT4o": 49751, "savingsVsFull": 86 },
    "header": { "tokensGPT4o": 82917, "savingsVsFull": 77 },
    "headerStyle": { "tokensGPT4o": 170466, "savingsVsFull": 52 },
    "full": { "tokensGPT4o": 355923, "savingsVsFull": 0 }
  }
}
```

#### `logicstamp_read_logicstamp_docs`

Read LogicStamp documentation to understand how the tool works:

```typescript
// Returns complete documentation bundle
{
  "forLLMs": "# LogicStamp for LLMs\n...",
  "usage": "# Usage Guide\n...",
  "uifContracts": "# UIF Contracts\n...",
  // ... more documentation sections
}
```

**Use this tool** when you're unsure how LogicStamp works or need to understand the recommended workflow.

## Recommended Workflow

### Development Workflow

1. **Start watch mode** (in terminal):
   ```bash
   stamp context --watch
   ```

2. **Use AI assistant** - The MCP server provides fresh context automatically

3. **Code normally** - Watch mode regenerates context on file changes

### Watch Mode Integration

The MCP server works best with watch mode active:

```bash
# Start watch mode
stamp context --watch

# Or with style metadata
stamp context style --watch

# Or with strict watch (breaking change detection)
stamp context --watch --strict-watch
```

**Benefits:**
- ✅ Context is always fresh
- ✅ No manual regeneration needed
- ✅ AI assistants get real-time updates
- ✅ Incremental rebuilds are fast

### Without Watch Mode

If watch mode isn't running, the MCP server can still:
- Read existing context files
- Regenerate context on demand (via `logicstamp_refresh_snapshot`)
- Compare snapshots

However, context may become stale until manually refreshed.

## Troubleshooting

### MCP Server Not Found

**Problem:** AI assistant can't find the MCP server

**Solutions:**
- Verify installation: `npm list -g logicstamp-mcp`
- Use full path in configuration if needed
- Check that `npx` is available in your PATH

### Context Not Available

**Problem:** AI assistant can't read context bundles

**Solutions:**
- Verify project path is absolute and correct
- Ensure context files exist: `ls context_main.json`
- Generate context: `stamp context`
- Check file permissions

### Watch Mode Not Detected

**Problem:** MCP server reports watch mode as inactive

**Solutions:**
- Start watch mode: `stamp context --watch`
- Verify watch status: Check `.logicstamp/context_watch-status.json`
- Ensure watch mode is running in the correct project directory

### Stale Context

**Problem:** AI assistant sees outdated context

**Solutions:**
- Start watch mode: `stamp context --watch`
- Manually refresh: Use `logicstamp_refresh_snapshot` tool
- Regenerate context: `stamp context`

### Project Path Issues

**Problem:** `PROJECT_PATH` environment variable not working, or tools requiring `projectPath` parameter

**Solutions:**
- **Most tools require `projectPath` as a parameter** - Pass it directly in tool calls rather than relying on environment variables
- Use absolute path (not relative) when providing `projectPath` parameter
- Verify path exists: `ls /path/to/project`
- Check path format (use forward slashes on Windows with WSL)
- Ensure path points to project root (where `package.json` or `tsconfig.json` is)
- The `PROJECT_PATH` environment variable is only used as a fallback in `logicstamp_compare_snapshot` and `logicstamp_compare_modes` when the parameter is omitted

## Best Practices

### 1. Use Watch Mode

Always run watch mode during development:

```bash
stamp context --watch
```

This ensures context is always fresh for AI assistants.

### 2. Initialize Projects

Run `stamp init` in each project before using MCP:

```bash
cd /path/to/project
stamp init
stamp context --watch
```

### 3. Monitor Watch Status

Check watch status periodically:

```bash
# Check if watch mode is running
cat .logicstamp/context_watch-status.json
```

### 4. Use Style Metadata When Needed

If your AI assistant needs visual/design context:

```bash
stamp context style --watch
```

This includes Tailwind classes, SCSS selectors, layout patterns, etc.

### 5. Keep CLI Updated

Update both CLI and MCP server:

```bash
npm update -g logicstamp-context logicstamp-mcp
```

## Advanced Usage

### Multiple Projects

To use LogicStamp MCP with multiple projects, you can:

1. **Configure multiple MCP servers** (if your AI assistant supports it)
2. **Switch project paths** by updating `PROJECT_PATH` environment variable (or pass `projectPath` parameter in tool calls)
3. **Use project-specific watch modes** in separate terminals

### Custom CLI Path

If `stamp` command is not in PATH:

```json
{
  "env": {
    "PROJECT_PATH": "/path/to/project"
  }
}
```

**Note:** The `stamp` CLI command must be available in your system PATH. The MCP server calls `stamp` directly and relies on your PATH to find it. If `stamp` is not in PATH, install `logicstamp-context` globally: `npm install -g logicstamp-context`

### Debugging

Enable debug logging:

```json
{
  "env": {
    "PROJECT_PATH": "/path/to/project"
  }
}
```

**Note:** Debug logging is not currently implemented via environment variables. Check MCP server logs or tool responses for error details.

## Integration Examples

### Example: AI Assistant Query

When you ask your AI assistant:

> "What props does the Button component accept?"

The MCP server:
1. Checks watch status (context is fresh)
2. Lists bundles to find Button component
3. Reads the bundle containing Button
4. Returns the component contract with props

### Example: Architecture Changes

When you modify a component:
1. Watch mode detects the change
2. Context regenerates automatically
3. MCP server provides updated context
4. AI assistant sees the changes immediately

## Next Steps

- **[CLI Getting Started Guide](../cli/getting-started.md)** - Understand the underlying CLI
- **[Watch Mode Documentation](../cli/watch.md)** - Learn about watch mode features
- **[Schema Documentation](../schema.md)** - Understand context bundle format
- **[Usage Guide](../usage.md)** - Comprehensive CLI reference

## Quick Reference

```bash
# Install MCP server
npm install -g logicstamp-mcp

# Install CLI (required)
npm install -g logicstamp-context

# Initialize project
cd /path/to/project
stamp init

# Start watch mode
stamp context --watch

# Configure MCP server in Claude Desktop/Cursor
# Add to mcpServers config with PROJECT_PATH environment variable (optional)
```

---

**Ready to use LogicStamp with your AI assistant?** Follow the installation steps above and start coding!
