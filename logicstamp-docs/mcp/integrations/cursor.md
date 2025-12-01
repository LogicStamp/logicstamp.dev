# Cursor Integration

LogicStamp MCP server works with [Cursor](https://cursor.sh/) - the AI-powered code editor. Cursor supports both global and project-specific MCP configurations.

## Installation

### Step 1: Install the MCP Server Package

```bash
npm install -g logicstamp-context-mcp
```

### Step 2: Choose Your Setup

Choose one of the following setup options based on your needs:

## Option 1: Global Installation (Recommended)

Install globally to use LogicStamp in **all your projects**.

### Manual Configuration

**On macOS/Linux:**
```bash
mkdir -p ~/.cursor
nano ~/.cursor/mcp.json
```

**On Windows:**
```bash
mkdir %USERPROFILE%\.cursor
notepad %USERPROFILE%\.cursor\mcp.json
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

**What this does:**
- Adds LogicStamp to your global Cursor MCP configuration
- Makes the 4 LogicStamp tools available in every project you open in Cursor
- Server auto-starts when Cursor needs it (no manual startup required)

### Local Development Setup

If you're developing the MCP server locally or testing before publishing, use absolute paths:

**On macOS/Linux:**
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

**On Windows:**
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

| Approach | Command | Path | Use Case |
|----------|---------|------|----------|
| **Global Install** (Recommended) | `npx` | Package name only | Production use, team sharing |
| **Local Development** | `node` | Absolute path to `dist/index.js` | Contributing, testing before publish |

**Benefits of Global Install:**
- ✅ **Simpler configuration** - No absolute paths needed
- ✅ **Portable** - Works on any machine with the package installed
- ✅ **Auto-updates** - `npm update -g` updates the package
- ✅ **Team-friendly** - Same config works for everyone
- ✅ **Cleaner** - No need to specify `dist/index.js` path

**When to Use Local Development:**
- You're contributing to the MCP server codebase
- Testing changes before publishing
- The package isn't published yet
- You need a specific local build version

## Option 2: Per-Project Installation (For Teams)

Install per-project to share configuration with your team via git.

### Step 1: Install Package Globally

```bash
npm install -g logicstamp-context-mcp
```

### Step 2: Configure Project

In your project directory, create the `.cursor` folder and `mcp.json` file:

```bash
cd /path/to/your/project
mkdir -p .cursor
```

Create `.cursor/mcp.json` with this content:

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

**What this does:**
- Creates project-specific MCP configuration
- Can be committed to git for team collaboration
- Team members get the same MCP configuration when they open the project
- Project config takes precedence over global config for this project

**Note:** The `.cursor` folder is typically gitignored by default, but you can commit `.cursor/mcp.json` if you want team-wide configuration.

## Verification

After configuring, verify the server is working:

1. **Restart Cursor** - Close and reopen Cursor for changes to take effect
2. **Check MCP Status** - Open Cursor settings (Cmd/Ctrl + ,) and navigate to "Features" → "Model Context Protocol"
3. **Test in Chat** - Open Cursor's AI chat (Cmd/Ctrl + L) and ask:
   ```
   Can you analyze my project using LogicStamp?
   ```

The AI should be able to use the 4 LogicStamp tools:
- `logicstamp_refresh_snapshot` - Analyze project structure
- `logicstamp_list_bundles` - List available components
- `logicstamp_read_bundle` - Read component contracts
- `logicstamp_compare_snapshot` - Detect changes after edits

## Usage

1. Open your project in Cursor
2. Open Cursor's AI chat (Cmd/Ctrl + L)
3. Ask the AI to analyze your project:
   ```
   Can you analyze my React project using LogicStamp?
   ```

The AI will automatically use the LogicStamp tools to analyze your codebase.

## Troubleshooting

### MCP server not appearing in Cursor

**Solutions:**

1. **Verify config file location:**
   - Global: `~/.cursor/mcp.json` (macOS/Linux) or `%USERPROFILE%\.cursor\mcp.json` (Windows)
   - Project: `.cursor/mcp.json` in project root
   - Ensure the `.cursor` directory exists

2. **Check JSON syntax:**
   ```bash
   # Validate JSON (macOS/Linux)
   cat ~/.cursor/mcp.json | python -m json.tool
   
   # On Windows, use an online JSON validator
   ```

3. **Verify package installation:**
   ```bash
   npm list -g logicstamp-context-mcp
   # or test npx
   npx logicstamp-context-mcp --help
   ```

4. **Check Cursor logs:**
   - Open Cursor
   - Go to Help → Toggle Developer Tools
   - Check Console for MCP-related errors

5. **Restart Cursor completely:**
   - Quit Cursor (not just close window)
   - Reopen Cursor
   - Open your project

### "Command not found" in Cursor

1. **Verify Node.js is in PATH:**
   ```bash
   which node  # macOS/Linux
   where node  # Windows
   ```

2. **Check npx works:**
   ```bash
   npx --version
   npx logicstamp-context-mcp --help
   ```

3. **For local builds, use absolute paths:**
   - Windows paths must use forward slashes or escaped backslashes
   - Example: `C:/Users/Name/path/to/dist/index.js` or `C:\\Users\\Name\\path\\to\\dist\\index.js`

### Tools not working in Cursor chat

1. **Check MCP server status:**
   - Settings → Features → Model Context Protocol
   - Look for LogicStamp in the list
   - Status should show "Connected" or "Running"

2. **Try explicit tool invocation:**
   ```
   Use LogicStamp to create a snapshot: logicstamp_refresh_snapshot
   ```

3. **Check for errors in Developer Console:**
   - Help → Toggle Developer Tools
   - Console tab
   - Look for MCP-related errors

4. **Verify project path:**
   - Ensure you're in a project directory (has package.json or similar)
   - MCP server needs a valid project context

### "stamp: command not found"

The LogicStamp Context CLI is not installed:

```bash
npm install -g logicstamp-context
# Verify installation
stamp --version
```

### Server connection fails

1. **Check Node.js version:**
   ```bash
   node --version  # Should be 18.0.0 or higher
   ```

2. **Test MCP server manually:**
   ```bash
   npx logicstamp-context-mcp
   # Should wait for stdin (server is ready)
   # Press Ctrl+C to exit
   ```

3. **For local builds, verify path:**
   ```bash
   # Check file exists
   ls /absolute/path/to/dist/index.js
   
   # On Windows
   dir C:\path\to\dist\index.js
   ```

### Project config not working

- Ensure `.cursor/mcp.json` exists in project root (not in a subdirectory)
- Check that JSON is valid
- Verify project config takes precedence: Project config overrides global config
- Try restarting Cursor after creating project config

### "Snapshot not found" Error

**Problem:** Tools return "Snapshot ID not found"

**Solution:**
Always call `logicstamp_refresh_snapshot` first:
```
You: "Create a snapshot of this project"
AI: [Runs logicstamp_refresh_snapshot]
You: "Now list the components in src/"
AI: [Uses the snapshot ID from previous call]
```

## Debug Mode

To see detailed MCP communication:

1. Open Developer Tools: Help → Toggle Developer Tools
2. Check Console tab for MCP server logs
3. Look for connection errors or startup messages
4. MCP servers should appear in the console when Cursor starts

## Configuration Reference

| Scope | Config File Location | Notes |
|-------|---------------------|-------|
| **Global** | `~/.cursor/mcp.json` (macOS/Linux)<br>`%USERPROFILE%\.cursor\mcp.json` (Windows) | Available in all projects |
| **Project** | `.cursor/mcp.json` (project root) | Can be committed to git, overrides global |

**Important:** Project config (`.cursor/mcp.json`) takes precedence over global config.

