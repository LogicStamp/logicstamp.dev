# Claude CLI Integration

LogicStamp MCP server works with [Claude Code](https://claude.com/claude-code) - Anthropic's official CLI for Claude.

## Quick Troubleshooting Checklist

Before diving into setup, check these common issues:

- ✅ **Node.js installed?** Run `node --version` (needs 18.0.0+)
- ✅ **Claude CLI installed?** Run `claude --version`
- ✅ **Package installed?** Run `npm list -g logicstamp-mcp`
- ✅ **LogicStamp CLI installed?** Run `stamp --version` (needs `npm install -g logicstamp-context`)
- ✅ **MCP server listed?** Run `claude mcp list` - should show `logicstamp: ✓ Connected`
- ✅ **Config file exists?** Check `~/.claude.json` (macOS/Linux) or `%USERPROFILE%\.claude.json` (Windows)
- ✅ **JSON valid?** Validate your config file syntax
- ✅ **In project directory?** MCP tools need a valid project context

If all checks pass but it's still not working, see the [Troubleshooting](#troubleshooting) section below.

## Finding MCP Settings in Claude CLI

Claude CLI provides command-line tools to manage MCP servers:

1. **List All MCP Servers:**
   ```bash
   claude mcp list
   ```
   - Shows all configured MCP servers
   - Status indicator: `✓ Connected` (working) or `✗ Failed` (error)
   - Example output:
     ```
     logicstamp: npx logicstamp-mcp - ✓ Connected
     ```

2. **Check Specific Server:**
   ```bash
   claude mcp get logicstamp
   ```
   - Shows configuration for the LogicStamp server
   - Displays scope (user/project) and command details

3. **Verify Connection:**
   ```bash
   claude mcp list
   ```
   - Look for `logicstamp` in the output
   - Status should be `✓ Connected`
   - If you see `✗ Failed`, check the [Troubleshooting](#troubleshooting) section

**Quick Test:** Run `claude mcp list` - if you see `logicstamp: ✓ Connected`, you're all set!

## Installation

### Step 1: Install the MCP Server Package

```bash
npm install -g logicstamp-mcp
```

### Step 2: Choose Your Setup

Choose one of the following setup options based on your needs:

## Option 1: Global Installation (Recommended)

Install globally to use LogicStamp in **all your projects**.

**Important:** This setup is done **once** (globally). After configuring the MCP server globally, it will be available in every project. You don't need to set it up again for each project. However, when you actually analyze a project, you'll call `logicstamp_refresh_snapshot` for that specific project - the analysis itself is per-project, but the MCP server setup is global.

### Manual Configuration

**On macOS/Linux:**
```bash
nano ~/.claude.json
```

**On Windows:**
```bash
notepad %USERPROFILE%\.claude.json
```

Add the following configuration:

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

### Using CLI Command (Alternative)

```bash
claude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-mcp
```

This automatically adds LogicStamp to `~/.claude.json` and makes it available in all your projects.

**What this does:**
- Adds LogicStamp to your global Claude Code configuration (`~/.claude.json`)
- Makes the 6 LogicStamp tools available in every project
- Server auto-starts when Claude Code needs it (no manual startup required)

## Option 2: Per-Project Installation (For Teams)

Install per-project to share configuration with your team via git.

### Step 1: Install Package Globally

```bash
npm install -g logicstamp-mcp
```

### Step 2: Configure Project

**Option A: Manual Configuration**

Create `.mcp.json` in your project root directory:

```bash
cd /path/to/your/project
```

Create `.mcp.json` with this content:

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

**Option B: Use CLI Command**

```bash
cd /path/to/your/project
claude mcp add --scope project --transport stdio logicstamp -- npx logicstamp-mcp
```

This automatically creates `.mcp.json` in your project root.

**What this does:**
- Creates `.mcp.json` in your project root
- Can be committed to git for team collaboration
- Team members get the same MCP configuration

## Option 3: Local Development

For contributors or if you're developing the MCP server locally:

### Step 1: Build from Source

```bash
# Clone and build
git clone https://github.com/LogicStamp/logicstamp-mcp.git
cd logicstamp-mcp
npm install
npm run build
```

### Step 2: Configure with Absolute Paths

**On macOS/Linux:**
```bash
claude mcp add --scope user --transport stdio logicstamp -- node /absolute/path/to/logicstamp-mcp/dist/index.js
```

**On Windows:**
```bash
claude mcp add --scope user --transport stdio logicstamp -- node C:\Users\YourName\path\to\logicstamp-mcp\dist\index.js
```

Or edit `~/.claude.json` manually:

```json
{
  "mcpServers": {
    "logicstamp": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/logicstamp-mcp/dist/index.js"]
    }
  }
}
```

**Global Install vs Local Development:**

| Approach | Configuration | Use Case |
|----------|---------------|----------|
| **Global Install** (Recommended) | `"command": "npx", "args": ["logicstamp-mcp"]` | Production use, team sharing |
| **Local Development** | `"command": "node", "args": ["/absolute/path/to/dist/index.js"]` | Contributing, testing before publish |

**Why prefer global install?**
- ✅ **Simpler** - No absolute paths needed, `npx` resolves automatically
- ✅ **Portable** - Works on any machine with `npm install -g logicstamp-mcp`
- ✅ **Auto-updates** - `npm update -g` updates without config changes
- ✅ **Team-friendly** - Same config works for everyone
- ✅ **Cleaner** - No need to specify `dist/index.js` path

**When to use local development:**
- You're contributing to the MCP server codebase
- Testing changes before publishing
- The package isn't published yet
- You need a specific local build version

**Note:** `.claude.json` is gitignored to protect user-specific paths. Use `.claude.json.example` as a template.

## Verification

After installation, verify the server is configured:

1. **Check MCP Server Status** - Run the command from [Finding MCP Settings in Claude CLI](#finding-mcp-settings-in-claude-cli) above:
   ```bash
   claude mcp list
   ```

2. **Verify Connection** - You should see:
   ```
   Checking MCP server health...

   logicstamp: npx logicstamp-mcp - ✓ Connected
   ```

3. **Test in Project** - Navigate to a React/TypeScript project and start Claude:
   ```bash
   cd /path/to/your/react-project
   claude
   ```

4. **Test LogicStamp** - Ask Claude to analyze your project:
   ```
   Can you analyze my React project using LogicStamp?
   ```

**Quick Check:** If `claude mcp list` shows `logicstamp: ✓ Connected`, you're all set! If you see `✗ Failed`, check the [Troubleshooting](#troubleshooting) section below.

## Usage

Start Claude Code in any React/TypeScript project:

```bash
cd /path/to/your/react-project
claude
```

Ask Claude to analyze your codebase:
```
You: "Use LogicStamp to analyze the components in src/components"

Claude: [Automatically uses logicstamp_refresh_snapshot and logicstamp_list_bundles]
```

The 6 LogicStamp tools will be available:
- `logicstamp_refresh_snapshot` - Analyze project structure
- `logicstamp_list_bundles` - List available components
- `logicstamp_read_bundle` - Read component contracts
- `logicstamp_compare_snapshot` - Detect changes after edits
- `logicstamp_compare_modes` - Generate token cost comparison across modes
- `logicstamp_read_logicstamp_docs` - Read LogicStamp documentation

## Troubleshooting

### MCP Server Not Found

**Problem:** Claude Code says "LogicStamp tools not available"

**Solution:**
```bash
# Check if server is configured
claude mcp list

# If not listed, add it
claude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-mcp

# Restart Claude Code or start a new conversation
```

### Server Connection Failed

**Problem:** `claude mcp list` shows `logicstamp: ✗ Failed to connect`

**Solutions:**

1. **Check if the package is installed:**
   ```bash
   npm list -g logicstamp-mcp
   # or verify npx can find it
   npx logicstamp-mcp --help
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

### Debug Mode

To see detailed MCP communication:

```bash
# Run Claude Code with MCP debug mode
claude --mcp-debug

# Or enable debug logging
export ANTHROPIC_LOG=debug
claude
```

## Configuration Reference

| Scope | Config File Location | Notes |
|-------|---------------------|-------|
| **User (Global)** | `~/.claude.json` (home directory) | Available in all projects |
| **Project** | `.mcp.json` (project root) | Can be committed to git |
| **Local** | `~/.claude.json` (with project-specific config) | Overrides both |

**Important:** `.claude.json` goes in your **home directory** for global setup, not project root.

