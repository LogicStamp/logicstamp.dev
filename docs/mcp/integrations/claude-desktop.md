# Claude Desktop Integration

LogicStamp MCP server works with Claude Desktop - Anthropic's desktop application for Claude.

## Quick Troubleshooting Checklist

Before diving into setup, check these common issues:

- ✅ **Node.js installed?** Run `node --version` (needs 18.18.0+)
- ✅ **Package installed?** Run `npm list -g logicstamp-mcp`
- ✅ **LogicStamp CLI installed?** Run `stamp --version` (needs `npm install -g logicstamp-context`)
- ✅ **Config file exists?** Check `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows)
- ✅ **JSON valid?** Validate your config file syntax (no trailing commas)
- ✅ **Claude Desktop restarted?** Fully quit and reopen (not just close window)
- ✅ **Config file location correct?** Must be in the exact path shown above

If all checks pass but it's still not working, see the [Troubleshooting](#troubleshooting) section below.

## Finding MCP Settings in Claude Desktop

Claude Desktop doesn't have a visible MCP settings UI. Instead, MCP servers are configured via the config file:

1. **Locate Config File:**
   - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
   - Open Finder/Explorer and navigate to this path, or use Terminal/PowerShell

2. **Verify Config File:**
   - The file should contain a `mcpServers` object with your LogicStamp configuration
   - If the file doesn't exist, create it with the JSON structure shown below

3. **Check Logs (if issues occur):**
   - **macOS:** `~/Library/Logs/Claude/`
   - **Windows:** Check Event Viewer or Claude logs folder
   - Look for MCP-related errors

**Note:** Unlike Cursor, Claude Desktop doesn't show MCP servers in a settings UI. The only way to verify it's working is to test it in a conversation or check the logs.

## Installation

### Step 1: Install the MCP Server Package

```bash
npm install -g logicstamp-mcp
```

### Step 2: Configure Claude Desktop

Claude Desktop only supports **global configuration** (no project-specific config).

**Important:** This setup is done **once** (globally). After configuring the MCP server globally, it will be available in every project. You don't need to set it up again for each project. However, when you actually analyze a project, you'll call `logicstamp_refresh_snapshot` for that specific project - the analysis itself is per-project, but the MCP server setup is global.

#### On macOS

Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

```bash
nano ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

Add the following configuration:

```json
{
  "mcpServers": {
    "logicstamp": {
      "command": "npx",
      "args": ["logicstamp-mcp"]
    }
  }
}
```

**Note:** Some MCP clients may require a `"type": "stdio"` field. If the above doesn't work, try:
```json
{
  "mcpServers": {
    "logicstamp": {
      "type": "stdio",
      "command": "npx",
      "args": ["logicstamp-mcp"]
    }
  }
}
```

#### On Windows

Edit `%APPDATA%\Claude\claude_desktop_config.json`:

```bash
notepad %APPDATA%\Claude\claude_desktop_config.json
```

Add the following configuration:

```json
{
  "mcpServers": {
    "logicstamp": {
      "command": "npx",
      "args": ["logicstamp-mcp"]
    }
  }
}
```

**Note:** Some MCP clients may require a `"type": "stdio"` field. If the above doesn't work, add `"type": "stdio"` to the configuration.

### Step 3: Restart Claude Desktop

**Important:** Completely quit and restart Claude Desktop for changes to take effect. Just closing the window is not enough - you must quit the application entirely.

## Local Development Setup

If you installed from source (for development or testing), use absolute paths to the built file:

### On macOS/Linux

```json
{
  "mcpServers": {
    "logicstamp": {
      "command": "node",
      "args": ["/absolute/path/to/logicstamp-mcp/dist/index.js"]
    }
  }
}
```

### On Windows

```json
{
  "mcpServers": {
    "logicstamp": {
      "command": "node",
      "args": ["C:\\Users\\YourName\\path\\to\\logicstamp-mcp\\dist\\index.js"]
    }
  }
}
```

**Note:** Some MCP clients may require a `"type": "stdio"` field. If the above doesn't work, add `"type": "stdio"` to the configuration.

**Global Install vs Local Development:**

The recommended approach is to use `npx` with the globally installed package:

```json
{
  "mcpServers": {
    "logicstamp": {
      "command": "npx",
      "args": ["logicstamp-mcp"]
    }
  }
}
```

**Why use global install?**
- ✅ Simpler - No absolute paths needed
- ✅ Portable - Works on any machine
- ✅ Auto-updates - `npm update -g` updates it
- ✅ Team-friendly - Same config for everyone

**When to use local development:**
- Contributing to the codebase
- Testing before publishing
- Package isn't published yet

## Verification

After configuring and restarting Claude Desktop:

1. **Verify Config File** - Check that your config file exists and has valid JSON (see [Finding MCP Settings in Claude Desktop](#finding-mcp-settings-in-claude-desktop) above)
2. **Start a New Conversation** - Open Claude Desktop and start a fresh conversation
3. **Test LogicStamp** - Ask Claude to analyze your project:
   ```
   Can you analyze my React project using LogicStamp?
   ```

The AI should be able to use the 6 LogicStamp tools:
- `logicstamp_refresh_snapshot` - Analyze project structure
- `logicstamp_list_bundles` - List available components
- `logicstamp_read_bundle` - Read component contracts
- `logicstamp_compare_snapshot` - Detect changes after edits
- `logicstamp_compare_modes` - Generate token cost comparison across modes
- `logicstamp_read_logicstamp_docs` - Read LogicStamp documentation

**Note:** Unlike Cursor, Claude Desktop doesn't show MCP servers in a UI. The only way to verify it's working is to test it in a conversation. If Claude can use the LogicStamp tools, it's working! If not, check the [Troubleshooting](#troubleshooting) section below.

## Usage

After verification, you can use LogicStamp in any conversation:

1. Start a new conversation or continue an existing one
2. Ask Claude to analyze your project:
   ```
   Can you analyze my React project using LogicStamp?
   ```

Claude will automatically use the LogicStamp tools to analyze your codebase.

## Troubleshooting

### Server doesn't show up in Claude Desktop

1. **Check the config file path is correct:**
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

2. **Ensure absolute paths are used** (not relative) if using local development

3. **Verify the JSON syntax is valid:**
   - Use an online JSON validator: https://jsonlint.com/
   - Check for trailing commas or syntax errors

4. **Completely quit and restart Claude Desktop:**
   - macOS: Quit from menu or Cmd+Q
   - Windows: Close from system tray or Task Manager
   - Reopen Claude Desktop

5. **Check Claude's logs for errors:**
   - macOS: `~/Library/Logs/Claude/`
   - Windows: Check Event Viewer or Claude logs folder

### "stamp: command not found"

The LogicStamp Context CLI is not installed:

```bash
npm install -g logicstamp-context
# Verify installation
stamp --version
```

### Server Connection Failed

1. **Check if the package is installed:**
   ```bash
   npm list -g logicstamp-mcp
   # or verify npx can find it
   npx logicstamp-mcp --help
   ```

2. **For local builds, verify the path is correct:**
   ```bash
   # Check file exists (macOS/Linux)
   ls /absolute/path/to/dist/index.js
   
   # On Windows
   dir C:\path\to\dist\index.js
   ```

3. **Check build output:**
   ```bash
   cd /path/to/logicstamp-mcp
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

## Configuration Reference

| Platform | Config File Location | Notes |
|----------|---------------------|-------|
| **macOS** | `~/Library/Application Support/Claude/claude_desktop_config.json` | Global only |
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` | Global only |

**Important:** Claude Desktop does not support project-specific configurations. All MCP servers must be configured globally.

