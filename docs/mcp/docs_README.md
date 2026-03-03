# LogicStamp MCP Documentation

Welcome to the LogicStamp MCP documentation. This directory contains comprehensive guides for using and integrating LogicStamp Context with various MCP clients.

## Quick Start

- **[Quick Start Guide](quickstart.md)** - Get up and running in minutes

## Integration Guides

Platform-specific installation and configuration:

- **[Claude CLI Integration](integrations/claude-cli.md)** - For Claude Code users
- **[Claude Desktop Integration](integrations/claude-desktop.md)** - For Claude Desktop users
- **[Cursor Integration](integrations/cursor.md)** - For Cursor IDE users

## Core Documentation

- **[MCP Integration Guide](mcp_integration.md)** - Architecture, design principles, and implementation details
- **[Tool Description](tool_description.md)** - Complete reference for LogicStamp Context capabilities
- **[CLI Commands Reference](cli_commands.md)** - CLI command reference

## Canonical Documentation

**Redundant Sources (Primary + Fallback):** Full LogicStamp Context documentation is maintained in:
- **Primary:** [logicstamp.dev/docs/logicstamp-context/context](https://logicstamp.dev/docs/logicstamp-context/context) - Landing page with complete docs (best UX)
- **Fallback:** [CLI Repository](https://github.com/LogicStamp/logicstamp-context) - GitHub docs (always available, versioned)

**This MCP repo contains:**
- MCP-specific integration guides and setup instructions
- A frozen LLM-focused doc bundle (`logicstamp-for-llms.md`) for offline use via `logicstamp_read_logicstamp_docs`

**Why this structure?**
- Prevents doc drift - docs are maintained in CLI repo, synced to landing page
- Redundancy - if landing page is down, GitHub docs serve as fallback
- MCP README stays thin with links to canonical docs
- LLM tool ships with embedded snapshot for offline use

> **⚠️ Important: Authoritative Source for MCP Users**
> 
> When using LogicStamp MCP tools, **always trust `logicstamp_read_logicstamp_docs` output** over repo documentation files. The MCP tool reads from the installed package and reflects actual capabilities. Repo files may be outdated or out of sync with published versions.

## Development

For technical implementation details, see [MCP Integration Guide](mcp_integration.md) and [Contributing Guide](../CONTRIBUTING.md).

## Documentation Structure

```
docs/
├── README.md                    # This file - navigation index
├── quickstart.md                # Quick start guide
├── mcp_integration.md           # MCP architecture & design
├── tool_description.md          # LogicStamp Context reference
├── cli_commands.md              # Thin CLI commands summary (links to canonical docs)
├── logicstamp-for-llms.md       # LLM-focused doc bundle (embedded snapshot)
├── startup-ritual.md            # Recommended startup message for AI
└── integrations/                # Platform-specific guides
    ├── claude-cli.md
    ├── claude-desktop.md
    └── cursor.md
```

**Note:** Full CLI documentation lives at [logicstamp.dev/docs/logicstamp-context/context](https://logicstamp.dev/docs/logicstamp-context/context) and in the [CLI repository](https://github.com/LogicStamp/logicstamp-context). This MCP repo only contains MCP-specific docs and an embedded LLM doc snapshot.

## Finding What You Need

- **New to LogicStamp?** → Start with [Quick Start](quickstart.md)
- **Setting up an MCP client?** → Check [Integration Guides](integrations/)
- **Understanding the architecture?** → Read [MCP Integration Guide](mcp_integration.md)
- **Using LogicStamp with AI?** → See [LogicStamp for LLMs](logicstamp-for-llms.md) (embedded snapshot) or [Full Docs](https://logicstamp.dev/docs/logicstamp-context/context)
- **Looking for CLI commands?** → See [Canonical CLI Docs](https://logicstamp.dev/docs/logicstamp-context/context)
- **Contributing to the project?** → Review [Contributing Guide](../CONTRIBUTING.md) and [MCP Integration Guide](mcp_integration.md)

