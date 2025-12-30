# Cursor Integration

LogicStamp MCP server works with [Cursor](https://cursor.sh/) - the AI-powered code editor. Cursor supports both global and project-specific MCP configurations.

## Quick Troubleshooting Checklist

Before diving into setup, check these common issues:

- ✅ **Node.js installed?** Run `node --version` (needs 18.18.0+)
- ✅ **Package installed?** Run `npm list -g logicstamp-mcp`
- ✅ **LogicStamp CLI installed?** Run `stamp --version` (needs `npm install -g logicstamp-context`)
- ✅ **Config file exists?** Check `~/.cursor/mcp.json` (macOS/Linux) or `%USERPROFILE%\.cursor\mcp.json` (Windows)
- ✅ **JSON valid?** Validate your `mcp.json` syntax
- ✅ **Cursor restarted?** Fully quit and reopen Cursor (not just close window)
- ✅ **MCP visible in settings?** Settings → Features → Model Context Protocol

If all checks pass but it's still not working, see the [Troubleshooting](#troubleshooting) section below.

## Finding MCP Settings in Cursor

To verify LogicStamp is connected:

1. **Open Cursor Settings:**
   - Press `Cmd + ,` (macOS) or `Ctrl + ,` (Windows/Linux)
   - Or: Menu → **Settings** → **Preferences**

2. **Navigate to MCP Settings:**
   - In the settings sidebar, click **Features**
   - Scroll down to **Model Context Protocol** (or search for "MCP")

3. **Verify Connection:**
   - You should see `logicstamp` in the list of MCP servers
   - Status should show "Connected" or "Running"
   - If you see an error, check the [Troubleshooting](#troubleshooting) section

**Visual Path:** `Settings` → `Features` → `Model Context Protocol` → Look for `logicstamp`

## Installation

### Step 1: Install the MCP Server Package

```bash
npm install -g logicstamp-mcp
```

### Step 2: Choose Your Setup

Choose one of the following setup options based on your needs:

## Option 1: Global Installation (Recommended)

Install globally to use LogicStamp in **all your projects**.

**Important:** This setup is done **once** (globally). After configuring the MCP server globally, it will be available in every project you open in Cursor. You don't need to set it up again for each project. However, when you actually analyze a project, you'll call `logicstamp_refresh_snapshot` for that specific project - the analysis itself is per-project, but the MCP server setup is global.

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

**What this does:**
- Adds LogicStamp to your global Cursor MCP configuration
- Makes the 6 LogicStamp tools available in every project you open in Cursor
- Server auto-starts when Cursor needs it (no manual startup required)

### Local Development Setup

If you're developing the MCP server locally or testing before publishing, use absolute paths:

**On macOS/Linux:**
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

**On Windows:**
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
npm install -g logicstamp-mcp
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
      "args": ["logicstamp-mcp"]
    }
  }
}
```

**Note:** Some MCP clients may require a `"type": "stdio"` field. If the above doesn't work, add `"type": "stdio"` to the configuration.

**What this does:**
- Creates project-specific MCP configuration
- Can be committed to git for team collaboration
- Team members get the same MCP configuration when they open the project
- Project config takes precedence over global config for this project

**Note:** The `.cursor` folder is typically gitignored by default, but you can commit `.cursor/mcp.json` if you want team-wide configuration.

## Verification

After configuring, verify the server is working:

1. **Restart Cursor** - Fully quit and reopen Cursor (not just close window) for changes to take effect
2. **Check MCP Status** - Follow the steps in [Finding MCP Settings in Cursor](#finding-mcp-settings-in-cursor) above
   - You should see `logicstamp` listed with status "Connected" or "Running"
3. **Test in Chat** - Open Cursor's AI chat (`Cmd/Ctrl + L`) and ask:
   ```
   Can you analyze my project using LogicStamp?
   ```

The AI should be able to use the 6 LogicStamp tools:
- `logicstamp_refresh_snapshot` - Analyze project structure
- `logicstamp_list_bundles` - List available components
- `logicstamp_read_bundle` - Read component contracts
- `logicstamp_compare_snapshot` - Detect changes after edits
- `logicstamp_compare_modes` - Generate token cost comparison across modes
- `logicstamp_read_logicstamp_docs` - Read LogicStamp documentation

**Quick Check:** If you see `logicstamp` in Settings → Features → Model Context Protocol with a "Connected" status, you're all set! If not, see the [Troubleshooting](#troubleshooting) section below.

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
   npm list -g logicstamp-mcp
   # or test npx
   npx logicstamp-mcp --help
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
   npx logicstamp-mcp --help
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
   node --version  # Should be 18.18.0 or higher
   ```

2. **Test MCP server manually:**
   ```bash
   npx logicstamp-mcp
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

