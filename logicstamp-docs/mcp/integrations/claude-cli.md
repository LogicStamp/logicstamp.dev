# Claude CLI Integration

LogicStamp MCP server works with [Claude Code](https://claude.com/claude-code) - Anthropic's official CLI for Claude.

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
      "args": ["logicstamp-context-mcp"]
    }
  }
}
```

### Using CLI Command (Alternative)

```bash
claude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-context-mcp
```

This automatically adds LogicStamp to `~/.claude.json` and makes it available in all your projects.

**What this does:**
- Adds LogicStamp to your global Claude Code configuration (`~/.claude.json`)
- Makes the 4 LogicStamp tools available in every project
- Server auto-starts when Claude Code needs it (no manual startup required)

## Option 2: Per-Project Installation (For Teams)

Install per-project to share configuration with your team via git.

### Step 1: Install Package Globally

```bash
npm install -g logicstamp-context-mcp
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
      "args": ["logicstamp-context-mcp"]
    }
  }
}
```

**Option B: Use CLI Command**

```bash
cd /path/to/your/project
claude mcp add --scope project --transport stdio logicstamp -- npx logicstamp-context-mcp
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
git clone https://github.com/your-org/logicstamp-context-mcp.git
cd logicstamp-context-mcp
npm install
npm run build
```

### Step 2: Configure with Absolute Paths

**On macOS/Linux:**
```bash
claude mcp add --scope user --transport stdio logicstamp -- node /absolute/path/to/logicstamp-context-mcp/dist/index.js
```

**On Windows:**
```bash
claude mcp add --scope user --transport stdio logicstamp -- node C:\Users\YourName\path\to\logicstamp-context-mcp\dist\index.js
```

Or edit `~/.claude.json` manually:

```json
{
  "mcpServers": {
    "logicstamp": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/logicstamp-context-mcp/dist/index.js"]
    }
  }
}
```

**Global Install vs Local Development:**

| Approach | Configuration | Use Case |
|----------|---------------|----------|
| **Global Install** (Recommended) | `"command": "npx", "args": ["logicstamp-context-mcp"]` | Production use, team sharing |
| **Local Development** | `"command": "node", "args": ["/absolute/path/to/dist/index.js"]` | Contributing, testing before publish |

**Why prefer global install?**
- ✅ **Simpler** - No absolute paths needed, `npx` resolves automatically
- ✅ **Portable** - Works on any machine with `npm install -g logicstamp-context-mcp`
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

```bash
claude mcp list
```

You should see:
```
Checking MCP server health...

logicstamp: npx logicstamp-context-mcp - ✓ Connected
```

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

The 4 LogicStamp tools will be available:
- `logicstamp_refresh_snapshot` - Analyze project structure
- `logicstamp_list_bundles` - List available components
- `logicstamp_read_bundle` - Read component contracts
- `logicstamp_compare_snapshot` - Detect changes after edits

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

