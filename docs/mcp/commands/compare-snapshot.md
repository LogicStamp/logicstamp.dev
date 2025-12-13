# logicstamp_compare_snapshot

> Compare current project state against baseline to detect changes. Use this after editing files to verify what changed.

## Overview

`logicstamp_compare_snapshot` compares the current project state against a baseline to detect changes. Use this command after editing files to verify what changed.

The command returns a structured diff showing:
- **Modified components** - Components with changed contracts
- **Changed contracts** - Props added/removed, functions changed, imports modified
- **Token deltas** - Estimated token count changes
- **Folder changes** - Added, removed, or changed folders
- **Component changes** - Added, removed, or modified components

## When to Use

- **After making edits** - Verify what changed in your codebase
- **CI/CD validation** - Detect contract drift in CI pipelines
- **Code review** - See impact of changes before committing
- **Change tracking** - Monitor component contract changes over time
- **Style changes** - Detect visual/design changes when `includeStyle: true`

## Parameters

### `profile` (optional)
- **Type:** `'llm-chat' | 'llm-safe' | 'ci-strict'`
- **Default:** `'llm-chat'`
- **Description:** Analysis profile for regeneration (only used if `forceRegenerate: true`)

### `mode` (optional)
- **Type:** `'header' | 'full' | 'none'`
- **Default:** `'header'`
- **Description:** Code inclusion mode for regeneration (only used if `forceRegenerate: true`)

### `includeStyle` (optional)
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Include style metadata in comparison. Only takes effect when `forceRegenerate: true`. If `forceRegenerate: false`, compares whatever is on disk (may not have style metadata).

  When `true`, includes style metadata (Tailwind classes, SCSS, layout patterns, colors, spacing, animations) in the comparison.

### `forceRegenerate` (optional)
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Force regeneration of context before comparing.
  
  - **`false` (default)** - Reads existing `context_main.json` from disk (fast, assumes context is fresh)
  - **`true`** - Runs `stamp context` before comparing (slower, ensures fresh context)
  
  **When to use `forceRegenerate: true`:**
  - You've made code changes and want to regenerate context before comparing
  - You want to include style metadata (`includeStyle: true`)
  - You want to ensure the comparison uses the latest code state

### `projectPath` (optional)
- **Type:** `string`
- **Default:** Current working directory (or `PROJECT_PATH` environment variable)
- **Description:** Absolute path to the project root

### `baseline` (optional)
- **Type:** `'disk' | 'snapshot' | string`
- **Default:** `'disk'`
- **Description:** Comparison baseline:
  
  - **`'disk'`** (default) - Compare against the current snapshot's context files on disk
  - **`'snapshot'`** - Compare against the stored snapshot from `logicstamp_refresh_snapshot`
  - **`'git:<ref>'`** - Compare against a git reference (e.g., `'git:main'`) - **Not yet implemented**

### `cleanCache` (optional)
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Manually force cleanup of `.logicstamp` cache directory before regeneration (only used when `forceRegenerate: true`). Cache is automatically cleaned if corruption or path mismatches are detected. Only set to `true` if you're experiencing cache-related issues.

## Output

Returns a `CompareResult` object with:

### `baseline`
- **Type:** `string`
- **Description:** The baseline that was used for comparison

### `status`
- **Type:** `'pass' | 'diff' | 'error'`
- **Description:** Overall comparison status:
  - `'pass'` - No changes detected
  - `'diff'` - Changes detected
  - `'error'` - Comparison failed

### `summary`
High-level statistics:

- `totalFolders` - Total number of folders compared
- `unchangedFolders` - Number of folders with no changes
- `changedFolders` - Number of folders with changes
- `addedFolders` - Number of folders added
- `removedFolders` - Number of folders removed
- `tokenDelta` - Token count changes:
  - `gpt4oMini` - GPT-4o-mini token delta
  - `claude` - Claude token delta

### `folderDiffs`
- **Type:** `FolderDiff[]`
- **Description:** Array of folder-level differences, each containing:

  - `path` - Folder path
  - `status` - `'added' | 'removed' | 'changed' | 'unchanged'`
  - `changes` - Array of component changes (see below)

### `error` (optional)
- **Type:** `string`
- **Description:** Error message if `status === 'error'`

## Component Changes

Each change in `folderDiffs[].changes` is a `ComponentChange` object:

### Change Types

1. **`'uif_contract_changed'`** - Component contract changed
   - `semanticHashBefore` - Previous semantic hash
   - `semanticHashAfter` - New semantic hash
   - `details` - Detailed change information (see below)

2. **`'bundle_added'`** - New component added
   - `rootComponent` - Component name
   - `tokenDelta` - Token count for new component

3. **`'bundle_removed'`** - Component removed
   - `rootComponent` - Component name
   - `semanticHashBefore` - Previous semantic hash
   - `tokenDelta` - Negative token count

4. **`'hash_changed'`** - Bundle hash changed (minor change)
   - `semanticHashBefore` - Previous semantic hash
   - `semanticHashAfter` - New semantic hash
   - `tokenDelta` - Token count change

### Change Details

When `type === 'uif_contract_changed'`, the `details` field contains:

- `modifiedFields` - Array of changed fields (e.g., `['version', 'logicSignature.props']`)
- `addedProps` - Array of props added
- `removedProps` - Array of props removed
- `addedFunctions` - Array of functions added
- `removedFunctions` - Array of functions removed
- `addedImports` - Array of imports added
- `removedImports` - Array of imports removed
- `modifiedExports` - Array of exports modified

## Example Usage

### Compare Against Disk (Fast)

```json
{
  "name": "logicstamp_compare_snapshot",
  "arguments": {
    "baseline": "disk"
  }
}
```

This reads existing `context_main.json` from disk and compares it against the current snapshot. Fast but assumes context is fresh.

### Force Regeneration Before Compare

```json
{
  "name": "logicstamp_compare_snapshot",
  "arguments": {
    "forceRegenerate": true
  }
}
```

This regenerates context before comparing, ensuring fresh comparison.

### Compare with Style Metadata

```json
{
  "name": "logicstamp_compare_snapshot",
  "arguments": {
    "forceRegenerate": true,
    "includeStyle": true
  }
}
```

This regenerates context with style metadata and compares, detecting visual/design changes.

### Compare Against Snapshot

```json
{
  "name": "logicstamp_compare_snapshot",
  "arguments": {
    "baseline": "snapshot"
  }
}
```

This compares against the stored snapshot from `logicstamp_refresh_snapshot`.

### Complete Example

```json
{
  "name": "logicstamp_compare_snapshot",
  "arguments": {
    "profile": "llm-safe",
    "mode": "header",
    "includeStyle": true,
    "forceRegenerate": true,
    "projectPath": "/absolute/path/to/project",
    "baseline": "snapshot"
  }
}
```

## Example Output

### No Changes (Pass)

```json
{
  "baseline": "disk",
  "status": "pass",
  "summary": {
    "totalFolders": 8,
    "unchangedFolders": 8,
    "changedFolders": 0,
    "addedFolders": 0,
    "removedFolders": 0,
    "tokenDelta": {
      "gpt4oMini": 0,
      "claude": 0
    }
  },
  "folderDiffs": []
}
```

### Changes Detected (Diff)

```json
{
  "baseline": "disk",
  "status": "diff",
  "summary": {
    "totalFolders": 8,
    "unchangedFolders": 6,
    "changedFolders": 1,
    "addedFolders": 1,
    "removedFolders": 0,
    "tokenDelta": {
      "gpt4oMini": 2500,
      "claude": 2400
    }
  },
  "folderDiffs": [
    {
      "path": "src/components",
      "status": "changed",
      "changes": [
        {
          "rootComponent": "Button",
          "type": "uif_contract_changed",
          "semanticHashBefore": "hash123",
          "semanticHashAfter": "hash456",
          "details": {
            "modifiedFields": ["logicSignature.props"],
            "addedProps": ["size"],
            "removedProps": []
          }
        }
      ]
    },
    {
      "path": "src/new-feature",
      "status": "added",
      "changes": [
        {
          "rootComponent": "NewComponent",
          "type": "bundle_added",
          "tokenDelta": 1500
        }
      ]
    }
  ]
}
```

### Error Case

```json
{
  "baseline": "disk",
  "status": "error",
  "summary": {
    "totalFolders": 0,
    "unchangedFolders": 0,
    "changedFolders": 0,
    "addedFolders": 0,
    "removedFolders": 0,
    "tokenDelta": {
      "gpt4oMini": 0,
      "claude": 0
    }
  },
  "folderDiffs": [],
  "error": "context_main.json not found in /path/to/project. Run 'stamp context' or 'logicstamp_refresh_snapshot' first to generate context files, or use forceRegenerate: true to regenerate automatically."
}
```

## Workflow

### Typical Workflow

1. **Create baseline snapshot:**
   ```json
   {
     "name": "logicstamp_refresh_snapshot",
     "arguments": {}
   }
   ```

2. **Make code changes** (edit files, add components, etc.)

3. **Compare changes:**
   ```json
   {
     "name": "logicstamp_compare_snapshot",
     "arguments": {
       "forceRegenerate": true
     }
   }
   ```

4. **Review changes** from the comparison output

### CI/CD Workflow

1. **Generate context** in CI pipeline
2. **Compare against baseline:**
   ```json
   {
     "name": "logicstamp_compare_snapshot",
     "arguments": {
       "baseline": "git:main",
       "profile": "ci-strict"
     }
   }
   ```
3. **Fail build** if `status === 'diff'` and changes are not approved

## Understanding Changes

### Contract Changes

When a component's contract changes (`uif_contract_changed`), check the `details` field:

- **Props added/removed** - API changes that may break consumers
- **Functions added/removed** - New or removed functionality
- **Imports added/removed** - Dependency changes
- **Exports modified** - Export structure changes

### Token Deltas

The `tokenDelta` shows how token counts changed:
- **Positive** - More tokens (added code/components)
- **Negative** - Fewer tokens (removed code/components)
- **Zero** - No change in token count

### Folder Status

- **`added`** - New folder with components
- **`removed`** - Folder deleted
- **`changed`** - Folder exists but has component changes
- **`unchanged`** - Folder has no changes

## Important Notes

- **Context files required:** If `context_main.json` is missing and `forceRegenerate: false`, the command will fail with a clear error message. Either run `logicstamp_refresh_snapshot` first, or use `forceRegenerate: true`.
- **Style metadata:** Only included if `includeStyle: true` AND `forceRegenerate: true`. If `forceRegenerate: false`, compares whatever is on disk (may not have style metadata).
- **Snapshot baseline:** Requires a snapshot from `logicstamp_refresh_snapshot` to use `baseline: 'snapshot'`.
- **Git baseline:** `baseline: 'git:<ref>'` is not yet implemented.
- **Performance:** Using `forceRegenerate: false` is faster but assumes context is fresh. Use `forceRegenerate: true` if you've made code changes.

## Related Commands

- [`logicstamp_refresh_snapshot`](./refresh-snapshot.md) - Create snapshot (STEP 1)
- [`logicstamp_list_bundles`](./list-bundles.md) - List bundles (STEP 2)
- [`logicstamp_read_bundle`](./read-bundle.md) - Read bundle details (STEP 3)

## Error Handling

If the command fails, it returns `status: 'error'` with an error message. Common errors:

- **context_main.json not found** - Context files don't exist. Run `logicstamp_refresh_snapshot` first or use `forceRegenerate: true`.
- **Snapshot not found** - No snapshot available when using `baseline: 'snapshot'`. Run `logicstamp_refresh_snapshot` first.
- **Invalid baseline** - The baseline format is incorrect
- **Git baseline not implemented** - `baseline: 'git:<ref>'` is not yet supported

## See Also

- [MCP Integration Guide](../mcp_integration.md) - Complete MCP server documentation
- [Tool Description](../tool_description.md) - LogicStamp Context capabilities
- [Quick Start](../quickstart.md) - Getting started guide

