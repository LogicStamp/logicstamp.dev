# Quick Start Guide

## 1. Prerequisites

**Node.js Requirement:** >= 18.18.0 (Node 20+ recommended for best performance and features)

Install the LogicStamp Context CLI (this MCP server is a wrapper around it):

```bash
npm install -g logicstamp-context
```

Verify installation:

```bash
stamp --version
```

## 2. Install the MCP Server

### Option A: Use Published Package (Recommended)

```bash
npm install -g logicstamp-mcp
```

### Option B: Install from Source

```bash
cd logicstamp-mcp
npm install
npm run build
```

**Note:** After building, you can test the server with `npm start` or `npx logicstamp-mcp` (if installed globally). However, when using with an MCP client, the client automatically starts the server - you don't need to run it manually.

## 3. Configure Your MCP Client

**Setup is done once (globally):** After configuring the MCP server globally, it will be available in all your projects. You don't need to set it up again for each project. However, when you analyze a project, you'll call `logicstamp_refresh_snapshot` for that specific project - the analysis itself is per-project, but the MCP server setup is global.

### Quick Configuration

Create a config file for your platform and add this configuration:

**Config file locations:**
- **Cursor:** `~/.cursor/mcp.json` (macOS/Linux) or `%USERPROFILE%\.cursor\mcp.json` (Windows)
- **Claude CLI:** `~/.claude.json` (macOS/Linux) or `%USERPROFILE%\.claude.json` (Windows)
- **Claude Desktop:** `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows)

**Configuration to add:**
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

**Note:** Some MCP clients may require `"type": "stdio"`. If the above doesn't work, add it:
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

### Detailed Platform Instructions

For complete step-by-step instructions, verification steps, and troubleshooting:

- **[Claude CLI Integration](integrations/claude-cli.md)** - For Claude Code users
- **[Claude Desktop Integration](integrations/claude-desktop.md)** - For Claude Desktop users  
- **[Cursor Integration](integrations/cursor.md)** - For Cursor IDE users

Each integration guide includes:
- Step-by-step installation instructions
- Global and project-specific setup options
- Local development configuration
- Verification steps
- Troubleshooting tips

## 4. Start Using LogicStamp

### Startup Ritual (Recommended)

When starting work with a new project, paste this message into your chat to guide the AI:

**See [Startup Ritual Guide](startup-ritual.md) for the complete message.**

This ritual ensures the AI:
1. Calls `logicstamp_refresh_snapshot` first to generate context files
2. Uses `logicstamp_list_bundles` to discover available bundles
3. Reads bundles instead of raw source files when possible
4. Understands the recommended LogicStamp workflow

**If the AI is confused about LogicStamp:**
- Ask it to call `logicstamp_read_logicstamp_docs` - this returns comprehensive documentation explaining how LogicStamp works and how to use it effectively.

### With Claude Code

```bash
cd /path/to/your/react-project
claude
```

Then ask Claude to analyze your project:
```
Can you analyze my React/TypeScript project using LogicStamp?
```

Or paste the [startup ritual](startup-ritual.md) message first.

### With Claude Desktop

Completely quit and restart Claude Desktop for the changes to take effect, then start a conversation and ask Claude to analyze your project (or paste the [startup ritual](startup-ritual.md) message).

### With Cursor

1. Open your project in Cursor
2. Open Cursor's AI chat (Cmd/Ctrl + L)
3. Paste the [startup ritual](startup-ritual.md) message or ask:
   ```
   Can you analyze my React project using LogicStamp?
   ```

The AI will automatically use the LogicStamp tools to analyze your codebase.

## 5. Available Tools

The MCP server provides 6 tools for analyzing codebases:

1. **`logicstamp_refresh_snapshot`** - Generate context files and create snapshot (STEP 1)
2. **`logicstamp_list_bundles`** - List available bundles (STEP 2)
3. **`logicstamp_read_bundle`** - Read component contracts and dependency graphs (STEP 3)
4. **`logicstamp_compare_snapshot`** - Detect changes after edits
5. **`logicstamp_compare_modes`** - Generate token cost comparison across all modes
6. **`logicstamp_read_logicstamp_docs`** - Read LogicStamp documentation (use when confused)

See the [Tool Reference](../README.md#tool-reference) in the main README for complete API documentation.

## Example Conversation

```
You: Analyze the Button component in my project

Claude:
1. [Uses logicstamp_refresh_snapshot to create snapshot]
2. [Uses logicstamp_list_bundles to find Button component]
3. [Uses logicstamp_read_bundle to read Button's contract]
4. [Provides detailed analysis of Button's props, state, hooks, etc.]

You: Analyze components with style information

Claude:
1. [Uses logicstamp_refresh_snapshot with includeStyle: true]
2. [Uses logicstamp_list_bundles to find components]
3. [Uses logicstamp_read_bundle to read component contracts with style metadata]
4. [Provides analysis including Tailwind classes, color palettes, layout patterns, animations]
```

## Troubleshooting

### Common Issues

**"stamp: command not found"**
- Install LogicStamp Context CLI: `npm install -g logicstamp-context`

**Server doesn't show up**
- Verify installation: `npm list -g logicstamp-mcp`
- Check configuration in your MCP client (see integration guides above)
- Restart your MCP client completely

**"Snapshot not found"**
- Always call `logicstamp_refresh_snapshot` first before using other tools

For detailed troubleshooting instructions, see the [Troubleshooting section](../README.md#troubleshooting) in the main README.

## Next Steps

- **[Full Documentation](../README.md)** - Complete API reference with examples
- **[MCP Integration Guide](mcp_integration.md)** - Architecture and design details
- **[Tool Description](tool_description.md)** - LogicStamp Context capabilities reference
- **[Integration Guides](integrations/)** - Platform-specific setup instructions
