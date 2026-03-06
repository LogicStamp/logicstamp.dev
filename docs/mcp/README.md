<div align="center">

  <a href="https://logicstamp.dev">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="assets/logicstamp-woodmark-dark.png">
      <source media="(prefers-color-scheme: light)" srcset="assets/logicstamp-woodmark-light.png">
      <img src="assets/logicstamp-woodmark-light.png" alt="LogicStamp" width="400" height="auto">
    </picture>
  </a>

  <br/>

  <a href="https://github.com/LogicStamp">
    <img src="./assets/logicstamp-fox.svg" alt="LogicStamp Fox Mascot" width="100" style="min-width: 80px;">
  </a>

  [![Version](https://img.shields.io/npm/v/logicstamp-mcp?color=8b5cf6&label=version)](https://www.npmjs.com/package/logicstamp-mcp)
  ![Beta](https://img.shields.io/badge/status-beta-orange.svg)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  ![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen.svg)
  [![CI](https://github.com/LogicStamp/logicstamp-mcp/workflows/CI/badge.svg)](https://github.com/LogicStamp/logicstamp-mcp/actions)

  <br/>

**Model Context Protocol (MCP) server for [LogicStamp Context](https://github.com/LogicStamp/logicstamp-context), the Context Compiler for TypeScript - exposing deterministic architectural contracts to AI agents via secure, structured context delivery.**

</div>

---

![LogicStamp MCP Workflow](./assets/logicstamp-workflow.gif)
*Example workflow: `stamp context --strict-watch` generates context bundles that MCP-powered assistants use to explain component architecture (ThemeContext shown here).*

---

<details>
<summary><strong>📑 Table of Contents</strong></summary>

- [Overview](#overview)
- [Features](#-features)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Usage Example](#usage-example)
- [Tool Reference](#tool-reference)
- [Startup Ritual](#startup-ritual)
- [Documentation](#documentation)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Architecture](#architecture)
- [Requirements](#requirements)
- [Need Help?](#need-help)
- [License](#license)
</details>

## Overview

This MCP server provides AI assistants with structured access to your codebase through LogicStamp Context's analysis engine. It acts as a thin wrapper around the `stamp` CLI, offering:

- **Snapshot-based analysis** - Capture codebase state before making edits
- **Component contracts** - Extract props, state, hooks, and dependencies
- **Style metadata** - Extract Tailwind classes, SCSS modules, framer-motion animations, color palettes, layout patterns
- **Dependency graphs** - Understand component relationships
- **Drift detection** - Verify changes after modifications
- **Token optimization** - Control context size with configurable code inclusion modes

## ⚡ Features

### 7 Tools

1. **`logicstamp_refresh_snapshot`** - Analyze project and create snapshot
2. **`logicstamp_list_bundles`** - List available component bundles
3. **`logicstamp_read_bundle`** - Read full component contract + graph
4. **`logicstamp_compare_snapshot`** - Detect changes after edits
5. **`logicstamp_compare_modes`** - Generate token cost comparison across all modes
6. **`logicstamp_read_logicstamp_docs`** - Read LogicStamp documentation
7. **`logicstamp_watch_status`** - Check if watch mode is active (for incremental rebuilds)

### Key Benefits

- **Context-Aware Edits** - AI reads actual component contracts before modifying
- **Self-Verification** - AI verifies its own changes via drift detection
- **Token-Efficient** - Only load bundles relevant to the task
- **Safe by Default** - Changes must pass drift check before approval
- **Watch Mode Aware** - Detects when `stamp context --watch` is running and skips regeneration (context is already fresh)

## Prerequisites

1. **Node.js** >= 20
2. **LogicStamp Context CLI** - The `stamp` command must be installed and available in PATH
   ```bash
   npm install -g logicstamp-context
   ```

## Quick Start

**Setup is done once** - After configuring the MCP server, it will be available in all your projects. The MCP client automatically starts the server when needed - you don't need to start it manually.

1. **Install prerequisites** (if not already installed):
   ```bash
   npm install -g logicstamp-context  # Required: LogicStamp CLI
   npm install -g logicstamp-mcp       # MCP server
   ```

2. **Configure your MCP client** (one-time setup) - Create a config file for your platform:

   **For Cursor:** Create `~/.cursor/mcp.json` (macOS/Linux) or `%USERPROFILE%\.cursor\mcp.json` (Windows)
   
   **For Claude CLI:** Create `~/.claude.json` (macOS/Linux) or `%USERPROFILE%\.claude.json` (Windows)
   
   **For Claude Desktop:** Create `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows)

   Add this configuration:
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
   
   **Note:** Some clients may require `"type": "stdio"` - if the above doesn't work, add it to the config. See [integration guides](docs/integrations/) for platform-specific details:
   - [Claude CLI Integration](docs/integrations/claude-cli.md) - For Claude Code users
   - [Claude Desktop Integration](docs/integrations/claude-desktop.md) - For Claude Desktop users
   - [Cursor Integration](docs/integrations/cursor.md) - For Cursor IDE users

3. **Restart your MCP client** (Cursor/Claude Desktop) or verify with `claude mcp list` (Claude CLI)

4. **Start using LogicStamp:**
   ```bash
   cd /path/to/your/react-project
   claude  # or open Cursor
   ```
   
   Ask your AI assistant: "Can you analyze my React project using LogicStamp?"

For detailed setup instructions, see the [Quick Start Guide](docs/quickstart.md).

## Usage Example

```
You: "Analyze the Button component in my project"

AI:
1. Uses logicstamp_refresh_snapshot to create snapshot
2. Uses logicstamp_list_bundles to find Button component
3. Uses logicstamp_read_bundle to read Button's contract
4. Provides detailed analysis of Button's props, state, hooks, etc.
```

For more examples and workflows, see [Usage Examples](docs/mcp_integration.md#llm-workflow) in the MCP Integration Guide.

## Tool Reference

The MCP server provides 7 tools. For complete API documentation with input/output examples, see the [MCP Integration Guide](docs/mcp_integration.md#mcp-tools-mvp).

<details>
<summary><strong>📋 Quick Reference</strong></summary>

**logicstamp_refresh_snapshot** - Create a snapshot of the current codebase state (STEP 1)
- Parameters: `profile` (optional), `mode` (optional), `includeStyle` (optional), `depth` (optional), `projectPath` (required), `cleanCache` (optional), `skipIfWatchActive` (optional)
- Returns: `snapshotId`, `summary`, `folders`, `watchMode` (if active)
- **Always call this first** when analyzing a new repo
- **Note:** `projectPath` is REQUIRED - must be an absolute path to the project root. Omitting this parameter can cause the server to hang.
- **Watch Mode Optimization:** Set `skipIfWatchActive: true` to skip regeneration when watch mode is running. When watch mode (`stamp context --watch`) is active, context is already being kept fresh - no need to regenerate
- **Depth Parameter:** By default, dependency graphs include nested components (depth=2). To include only direct dependencies, explicitly set `depth: 1`. The default depth=2 ensures nested components are included in dependency graphs.
- Cache is automatically cleaned if corruption is detected

**logicstamp_list_bundles** - List available bundles for selective loading (STEP 2)
- Parameters: `snapshotId` (required), `folderPrefix` (optional)
- Returns: `bundles` array with metadata
- **Call this after refresh_snapshot** to discover available bundles

**logicstamp_read_bundle** - Read full component contract and dependency graph (STEP 3)
- Parameters: `snapshotId` (required), `bundlePath` (required), `rootComponent` (optional)
- Returns: Complete bundle with contracts and dependency graph
- **This is where the valuable data is** - prefer bundles over raw source files

**logicstamp_compare_snapshot** - Detect changes after edits
- Parameters: 
  - `profile` (optional): Analysis profile (default: `llm-chat`)
  - `mode` (optional): Code inclusion mode (default: `header`)
  - `includeStyle` (optional): Include style metadata in comparison. Only takes effect when `forceRegenerate` is `true` (default: `false`)
  - `depth` (optional): Dependency traversal depth. Only used when `forceRegenerate` is `true`. **IMPORTANT**: By default, dependency graphs include nested components (depth=2). To include only direct dependencies, set `depth: 1`. The default depth=2 ensures nested components are included in dependency graphs.
  - `forceRegenerate` (optional): Force regeneration of context before comparing. When `false`, reads existing `context_main.json` from disk (fast). When `true`, runs `stamp context` to regenerate (default: `false`)
  - `projectPath` (optional): Project path (defaults to current directory)
  - `baseline` (optional): Comparison baseline: `disk` (default), `snapshot`, or custom path
  - `cleanCache` (optional): Force cache cleanup (default: `false`, auto-detects corruption)
- Returns: Comparison result with change details
- **Note**: By default (`forceRegenerate: false`), reads from disk for fast comparison. Set `forceRegenerate: true` to ensure fresh context or when `context_main.json` is missing.

**logicstamp_compare_modes** - Generate token cost comparison across all modes
- Parameters: `projectPath` (optional), `cleanCache` (optional)
- Returns: Token counts for all modes (none/header/header+style/full), savings percentages, file statistics
- **Use this** to understand token costs before generating context or when user asks about token budgets/optimization

**logicstamp_read_logicstamp_docs** - Read LogicStamp documentation
- Parameters: None
- Returns: Complete LogicStamp documentation bundle
- **Use this when confused** - explains LogicStamp, workflow, and best practices

**logicstamp_watch_status** - Check if watch mode is active
- Parameters: `projectPath` (required), `includeRecentLogs` (optional), `logLimit` (optional)
- Returns: `watchModeActive`, `status` (if active), `recentLogs` (if requested), `message`
- **Use this** to check if `stamp context --watch` is running before calling refresh_snapshot
- **When watch mode is active:** Context is being kept fresh automatically via incremental rebuilds - you can skip regeneration and just read existing bundles

</details>

## Startup Ritual

When starting work with a new project, use the [Startup Ritual](docs/startup-ritual.md) to guide the AI through the recommended workflow. This ensures the AI:
1. Calls `logicstamp_refresh_snapshot` first
2. Uses bundles instead of raw source files when possible
3. Follows the recommended LogicStamp workflow

## Documentation

### MCP-Specific Docs (This Repo)

- **[Quick Start Guide](docs/quickstart.md)** - Get up and running in minutes
- **[Startup Ritual](docs/startup-ritual.md)** - Recommended message to paste when starting with a new project
- **[MCP Integration Guide](docs/mcp_integration.md)** - Complete API reference and architecture
- **[Integration Guides](docs/integrations/)** - Platform-specific setup (Claude CLI, Claude Desktop, Cursor)

### Canonical LogicStamp Docs (Redundant Sources)

**Full CLI & Context Documentation:**
- **Primary:** [logicstamp.dev/docs/logicstamp-context/context](https://logicstamp.dev/docs/logicstamp-context/context) - Complete documentation (landing page, best UX)
- **Fallback:** [CLI Repository Docs](https://github.com/LogicStamp/logicstamp-context) - GitHub docs (always available, versioned)

**Key Topics** (both primary and fallback links):

| Topic | Primary (Landing Page) | Fallback (GitHub) |
|-------|----------------------|-------------------|
| **Usage Guide** | [logicstamp.dev/docs/logicstamp-context/usage](https://logicstamp.dev/docs/logicstamp-context/usage) | [GitHub](https://github.com/LogicStamp/logicstamp-context/blob/main/docs/usage.md) |
| **UIF Contracts** | [logicstamp.dev/docs/logicstamp-context/uif-contracts](https://logicstamp.dev/docs/logicstamp-context/uif-contracts) | [GitHub](https://github.com/LogicStamp/logicstamp-context/blob/main/docs/uif_contracts.md) |
| **Schema Reference** | [logicstamp.dev/docs/logicstamp-context/schema](https://logicstamp.dev/docs/logicstamp-context/schema) | [GitHub](https://github.com/LogicStamp/logicstamp-context/blob/main/docs/schema.md) |
| **CLI Commands** | [logicstamp.dev/docs/logicstamp-context/context](https://logicstamp.dev/docs/logicstamp-context/context) | [GitHub](https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/context.md) |
| **Compare Modes** | [logicstamp.dev/docs/logicstamp-context/compare-modes](https://logicstamp.dev/docs/logicstamp-context/compare-modes) | [GitHub](https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/compare-modes.md) |
| **Limitations** | [logicstamp.dev/docs/complete-reference/known-limitations](https://logicstamp.dev/docs/complete-reference/known-limitations) | [GitHub](https://github.com/LogicStamp/logicstamp-context/blob/main/docs/limitations.md) |

**Note:** 
- Docs are maintained in the CLI repo and synced to the landing page
- If the landing page is unavailable, use the GitHub links as fallback
- The `logicstamp_read_logicstamp_docs` tool returns an embedded LLM-focused doc snapshot (`docs/logicstamp-for-llms.md`) for offline use

## Troubleshooting

### Common Issues

**"stamp: command not found"**
- Install LogicStamp Context CLI: `npm install -g logicstamp-context`

**Server doesn't show up**
- Verify installation: `npm list -g logicstamp-mcp`
- Test server manually: `npx logicstamp-mcp` (should wait for stdin, press Ctrl+C to exit)
- Check configuration in your MCP client (see integration guides)
- Restart your MCP client completely

**"Snapshot not found"**
- Always call `logicstamp_refresh_snapshot` first before using other tools

For detailed troubleshooting, see:
- [Troubleshooting in Quick Start Guide](docs/quickstart.md#troubleshooting)
- Platform-specific troubleshooting in [integration guides](docs/integrations/)
- [MCP Integration Guide](docs/mcp_integration.md) for architecture details

## Development

### Build

```bash
npm install
npm run build
```

### Run the Server

**Important:** You don't need to start the MCP server manually. Once configured, your MCP client (Cursor, Claude Desktop, etc.) automatically starts the server when needed. The commands below are only for testing/debugging.

**For testing/debugging only:**

**After building from source:**
```bash
npm start
# or directly
node dist/index.js
```

**After global installation:**
```bash
npx logicstamp-mcp
```

**Note:** The server runs via stdio (standard input/output) and waits for MCP protocol messages. When configured with an MCP client (Claude CLI, Cursor, etc.), the client automatically starts the server - you don't need to run it manually. The commands above are useful for:
- Testing the server during development
- Debugging connection issues
- Verifying the server starts correctly

When running manually, the server will wait for stdin input. Press `Ctrl+C` to exit.

### Watch Mode

```bash
npm run dev
```

For development details, see [MCP Integration Guide](docs/mcp_integration.md).

## Architecture

The MCP server follows these design principles:

1. **Thin Wrapper** - Shells out to existing `stamp` CLI
2. **Stateful Snapshots** - Tracks context before/after edits
3. **Read-Only** - Server never writes to project files
4. **Token-Efficient** - Selective bundle loading

For detailed architecture documentation, see [MCP Integration Guide](docs/mcp_integration.md#architecture).

## Requirements

The LogicStamp MCP server requires:

- Node.js >= 20
- TypeScript codebase (React, Next.js, Vue (TS/TSX), Express, or NestJS)
- **`stamp context` command** - Must be installed and available in PATH:
  - The CLI generates `context_main.json` files
  - The MCP server reads these JSON files directly (no special flags required)

## Need Help?

- **Issues** - [github.com/LogicStamp/logicstamp-mcp/issues](https://github.com/LogicStamp/logicstamp-mcp/issues)
- **Roadmap** - [logicstamp.dev/roadmap](https://logicstamp.dev/roadmap)

## License

[MIT](LICENSE)

---

<details>
<summary>Branding & Attribution</summary>

The LogicStamp Fox mascot and related brand assets are © 2025 Amit Levi. These assets may not be used for third-party branding without permission.
</details>

<details>
<summary>Contributing</summary>

Issues and PRs welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

This project follows a [Code of Conduct](CODE_OF_CONDUCT.md).
</details>

**Links:** [Website](https://logicstamp.dev) · [GitHub](https://github.com/LogicStamp/logicstamp-mcp) · [CLI](https://github.com/LogicStamp/logicstamp-context) · [Changelog](https://github.com/LogicStamp/logicstamp-mcp/blob/main/CHANGELOG.md)
