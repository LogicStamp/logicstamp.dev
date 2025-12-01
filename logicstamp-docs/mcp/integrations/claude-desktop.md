# Claude Desktop Integration

LogicStamp MCP server works with Claude Desktop - Anthropic's desktop application for Claude.

## Installation

### Step 1: Install the MCP Server Package

```bash
npm install -g logicstamp-context-mcp
```

### Step 2: Configure Claude Desktop

Claude Desktop only supports **global configuration** (no project-specific config).

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
      "args": ["logicstamp-context-mcp"]
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
      "args": ["logicstamp-context-mcp"]
    }
  }
}
```

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
      "args": ["/absolute/path/to/logicstamp-context-mcp/dist/index.js"]
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
      "args": ["C:\\Users\\YourName\\path\\to\\logicstamp-context-mcp\\dist\\index.js"]
    }
  }
}
```

**Global Install vs Local Development:**

The recommended approach is to use `npx` with the globally installed package:

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

**Why use global install?**
- ✅ Simpler - No absolute paths needed
- ✅ Portable - Works on any machine
- ✅ Auto-updates - `npm update -g` updates it
- ✅ Team-friendly - Same config for everyone

**When to use local development:**
- Contributing to the codebase
- Testing before publishing
- Package isn't published yet

## Usage

After restarting Claude Desktop:

1. Start a new conversation
2. Ask Claude to analyze your project:
   ```
   Can you analyze my React project using LogicStamp?
   ```

The AI should be able to use the 4 LogicStamp tools:
- `logicstamp_refresh_snapshot` - Analyze project structure
- `logicstamp_list_bundles` - List available components
- `logicstamp_read_bundle` - Read component contracts
- `logicstamp_compare_snapshot` - Detect changes after edits

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
   npm list -g logicstamp-context-mcp
   # or verify npx can find it
   npx logicstamp-context-mcp --help
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

## Configuration Reference

| Platform | Config File Location | Notes |
|----------|---------------------|-------|
| **macOS** | `~/Library/Application Support/Claude/claude_desktop_config.json` | Global only |
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` | Global only |

**Important:** Claude Desktop does not support project-specific configurations. All MCP servers must be configured globally.

