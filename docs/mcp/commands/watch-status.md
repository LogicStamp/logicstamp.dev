# logicstamp_watch_status

> Check if watch mode (`stamp context --watch`) is active for a project.

## Overview

`logicstamp_watch_status` checks whether watch mode is currently running for a project. Watch mode automatically regenerates context bundles when files change, keeping context fresh without manual regeneration.

This command is useful before calling `logicstamp_refresh_snapshot` to determine whether you should use `skipIfWatchActive: true` to avoid redundant regeneration.

## When to Use

- **Before calling `refresh_snapshot`** - Check if context is already being kept fresh by watch mode
- **Optimizing MCP workflows** - Skip expensive regeneration when watch mode is active
- **Monitoring watch mode** - Verify watch mode is running correctly
- **Debugging** - Check watch mode status and see recent change logs

## Parameters

### `projectPath` (required)
- **Type:** `string`
- **Description:** **CRITICAL: Absolute path to project root. REQUIRED - must always be provided.** The server will resolve relative paths to absolute paths automatically.

### `includeRecentLogs` (optional)
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Include recent watch log entries in the response. When `true`, reads from `.logicstamp/context_watch-mode-logs.json` (only available if watch mode was started with `--log-file` flag).

### `logLimit` (optional)
- **Type:** `number`
- **Default:** `5`
- **Description:** Maximum number of recent log entries to return. Only used when `includeRecentLogs` is `true`.

## Output

Returns a `WatchStatusOutput` object with:

### `projectPath`
- **Type:** `string`
- **Description:** Absolute path to the project root

### `watchModeActive`
- **Type:** `boolean`
- **Description:** Whether watch mode is currently active for this project

### `status`
- **Type:** `WatchStatus | null`
- **Description:** Watch mode status object (only present when `watchModeActive` is `true`), containing:
  - `active` - Always `true` when present
  - `projectRoot` - Absolute path to project root
  - `pid` - Process ID of the watch mode process
  - `startedAt` - ISO timestamp when watch mode started
  - `outputDir` - Directory where context files are written

### `recentLogs`
- **Type:** `WatchLogEntry[] | null`
- **Description:** Array of recent regeneration log entries (only present when `includeRecentLogs` is `true` and logs are available). Each entry contains:
  - `timestamp` - ISO timestamp of the regeneration
  - `changedFiles` - Array of file paths that changed
  - `fileCount` - Number of files that changed
  - `durationMs` - Time taken to regenerate (milliseconds)
  - `summary` - Summary of changes:
    - `modifiedContractsCount` - Number of contracts modified
    - `modifiedBundlesCount` - Number of bundles modified
    - `addedContractsCount` - Number of contracts added
    - `removedContractsCount` - Number of contracts removed
  - `modifiedContracts` - Array of modified contract details (if available)
  - `modifiedBundles` - Array of modified bundle details (if available)

### `message`
- **Type:** `string`
- **Description:** Human-readable message describing the watch mode status

## Example Usage

### Basic Usage

```json
{
  "name": "logicstamp_watch_status",
  "arguments": {
    "projectPath": "/absolute/path/to/project"
  }
}
```

### With Recent Logs

```json
{
  "name": "logicstamp_watch_status",
  "arguments": {
    "projectPath": "/absolute/path/to/project",
    "includeRecentLogs": true,
    "logLimit": 10
  }
}
```

## Example Output

### Watch Mode Active

```json
{
  "projectPath": "/path/to/project",
  "watchModeActive": true,
  "status": {
    "active": true,
    "projectRoot": "/path/to/project",
    "pid": 12345,
    "startedAt": "2025-01-20T10:30:00.000Z",
    "outputDir": "/path/to/project"
  },
  "recentLogs": null,
  "message": "Watch mode is ACTIVE. Context bundles are being kept fresh automatically..."
}
```

### Watch Mode Active with Recent Logs

```json
{
  "projectPath": "/path/to/project",
  "watchModeActive": true,
  "status": {
    "active": true,
    "projectRoot": "/path/to/project",
    "pid": 12345,
    "startedAt": "2025-01-20T10:30:00.000Z",
    "outputDir": "/path/to/project"
  },
  "recentLogs": [
    {
      "timestamp": "2025-01-20T10:35:00.000Z",
      "changedFiles": ["src/components/Button.tsx"],
      "fileCount": 1,
      "durationMs": 150,
      "summary": {
        "modifiedContractsCount": 1,
        "modifiedBundlesCount": 1,
        "addedContractsCount": 0,
        "removedContractsCount": 0
      }
    },
    {
      "timestamp": "2025-01-20T10:34:00.000Z",
      "changedFiles": ["src/components/Card.tsx", "src/components/Modal.tsx"],
      "fileCount": 2,
      "durationMs": 280,
      "summary": {
        "modifiedContractsCount": 2,
        "modifiedBundlesCount": 2,
        "addedContractsCount": 0,
        "removedContractsCount": 0
      }
    }
  ],
  "message": "Watch mode is ACTIVE. Context bundles are being kept fresh automatically..."
}
```

### Watch Mode Inactive

```json
{
  "projectPath": "/path/to/project",
  "watchModeActive": false,
  "status": null,
  "recentLogs": null,
  "message": "Watch mode is NOT active. Use 'stamp context --watch' to start watch mode, or call 'refresh_snapshot' to regenerate context."
}
```

## Workflow Integration

### Recommended Workflow

1. **Check watch status** before calling `refresh_snapshot`:
   ```json
   { "projectPath": "/path/to/project" }
   ```

2. **If watch mode is active**, use `skipIfWatchActive: true`:
   ```json
   {
     "projectPath": "/path/to/project",
     "skipIfWatchActive": true
   }
   ```

3. **If watch mode is NOT active**, perform normal regeneration:
   ```json
   {
     "projectPath": "/path/to/project"
   }
   ```

### Benefits

- **Faster execution** - Skip expensive regeneration when context is already fresh
- **Efficient** - Watch mode only rebuilds affected bundles, not entire project
- **Smart fallback** - Still regenerates if watch mode isn't running

## How It Works

1. **Reads watch status file** - Checks `.logicstamp/context_watch-status.json`
2. **Verifies process** - Confirms the watch mode process (PID) is still running
3. **Optionally reads logs** - If `includeRecentLogs` is `true` and `--log-file` was used, reads from `.logicstamp/context_watch-mode-logs.json`

## Watch Mode Status File

Watch mode writes a status file when it starts (`.logicstamp/context_watch-status.json`):

```json
{
  "active": true,
  "projectRoot": "/path/to/project",
  "pid": 12345,
  "startedAt": "2025-01-20T10:30:00.000Z",
  "outputDir": "/path/to/project"
}
```

This file is automatically deleted when watch mode stops.

## Watch Logs

Watch logs are only available if watch mode was started with the `--log-file` flag:

```bash
stamp context --watch --log-file
```

Logs are written to `.logicstamp/context_watch-mode-logs.json` and contain structured change information for each regeneration.

## Error Handling

If the command fails, it will throw an error with a descriptive message. Common scenarios:

- **Project path not found** - The specified `projectPath` doesn't exist
- **Status file read error** - Unable to read watch status file (may indicate watch mode was never started)
- **Log file read error** - Unable to read watch logs (only if `includeRecentLogs` is `true` and logs don't exist)

## Use Cases

### 1. Optimizing Refresh Snapshot Calls

```json
// Step 1: Check watch status
{ "projectPath": "/path/to/project" }

// Step 2: Use skipIfWatchActive based on result
{ 
  "projectPath": "/path/to/project",
  "skipIfWatchActive": true  // if watchModeActive was true
}
```

### 2. Monitoring Recent Changes

```json
{
  "projectPath": "/path/to/project",
  "includeRecentLogs": true,
  "logLimit": 20
}
```

This shows what files changed recently and how long regenerations took.

### 3. Debugging Watch Mode

```json
{
  "projectPath": "/path/to/project",
  "includeRecentLogs": true
}
```

Check if watch mode is running and see recent activity to verify it's working correctly.

## Related Commands

- [`logicstamp_refresh_snapshot`](./refresh-snapshot.md) - Regenerate context (use `skipIfWatchActive: true` when watch mode is active)
- [`logicstamp_list_bundles`](./list-bundles.md) - List available bundles
- [`logicstamp_read_bundle`](./read-bundle.md) - Read detailed bundle information

## See Also

- [MCP Integration Guide](../mcp_integration.md) - Complete MCP server documentation
- [Watch Mode CLI Documentation](../../context/cli/watch.md) - Complete watch mode documentation
- [Quick Start](../quickstart.md) - Getting started guide
