# Quick Start Guide

## 1. Prerequisites

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
npm install -g logicstamp-context-mcp
```

### Option B: Install from Source

```bash
cd logicstamp-mcp
npm install
npm run build
```

## 3. Configure Your MCP Client

Choose your MCP client for detailed installation instructions:

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

### With Claude Code

```bash
cd /path/to/your/react-project
claude
```

Then ask Claude to analyze your project:
```
Can you analyze my React project using LogicStamp?
```

### With Claude Desktop

Completely quit and restart Claude Desktop for the changes to take effect, then start a conversation and ask Claude to analyze your project.

### With Cursor

1. Open your project in Cursor
2. Open Cursor's AI chat (Cmd/Ctrl + L)
3. Ask the AI to analyze your project:
   ```
   Can you analyze my React project using LogicStamp?
   ```

The AI will automatically use the LogicStamp tools to analyze your codebase.

## 5. Available Tools

The MCP server provides 4 tools for analyzing codebases. See the [Tool Reference](../README.md#tool-reference) in the main README for complete API documentation.

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
- Verify installation: `npm list -g logicstamp-context-mcp`
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
