# logicstamp_list_bundles

> **STEP 2** of the LogicStamp MCP workflow. Call this after `logicstamp_refresh_snapshot` to see what components are available.

## Overview

`logicstamp_list_bundles` lists all available component bundles in a snapshot. This command must be called **after** `logicstamp_refresh_snapshot` to discover what components are available in your codebase.

The command returns bundle descriptors with component names, file paths, bundle paths (for use in `logicstamp_read_bundle`), and token estimates. You can filter bundles by directory using the `folderPrefix` parameter.

**Important:** You MUST call this before reading bundles - it tells you which `bundlePath` values to use in `logicstamp_read_bundle`.

## When to Use

- **After creating a snapshot** - Discover what components are available
- **Exploring a codebase** - See all components organized by folder
- **Filtering by directory** - Use `folderPrefix` to focus on specific parts of the codebase
- **Token budgeting** - Check token estimates before loading bundles

## Parameters

### `snapshotId` (required)
- **Type:** `string`
- **Description:** The snapshot ID returned from `logicstamp_refresh_snapshot`. This identifies which snapshot to list bundles from.

### `folderPrefix` (optional)
- **Type:** `string`
- **Description:** Filter bundles by folder path. Only bundles from folders whose path starts with this prefix will be returned.
  
  **Examples:**
  - `"src/components"` - Only bundles from `src/components` and subdirectories
  - `"src/pages"` - Only bundles from `src/pages` and subdirectories
  - `"src/utils"` - Only bundles from `src/utils` and subdirectories

## Output

Returns a `ListBundlesOutput` object with:

### `snapshotId`
- **Type:** `string`
- **Description:** The snapshot ID that was queried

### `totalBundles`
- **Type:** `number`
- **Description:** Total number of bundles found (after filtering by `folderPrefix` if provided)

### `bundles`
- **Type:** `BundleDescriptor[]`
- **Description:** Array of bundle descriptors, each containing:

  - `id` - Unique bundle identifier (e.g., `"bundle_Button"`)
  - `rootComponent` - Component name extracted from the file (e.g., `"Button"`)
  - `filePath` - Relative file path from project root (e.g., `"src/components/Button.tsx"`)
  - `folder` - Folder path containing this bundle (e.g., `"src/components"`)
  - `bundlePath` - **Use this in `logicstamp_read_bundle`** - Relative path to `context.json` file (e.g., `"src/components/context.json"`)
  - `position` - Position in the bundle file (e.g., `"1/5"` means first of five bundles)
  - `bundleHash` - Hash identifier for this bundle
  - `approxTokens` - Approximate token count for this bundle

## Example Usage

### List All Bundles

```json
{
  "name": "logicstamp_list_bundles",
  "arguments": {
    "snapshotId": "snap_1764033034172_0"
  }
}
```

### Filter by Folder Prefix

```json
{
  "name": "logicstamp_list_bundles",
  "arguments": {
    "snapshotId": "snap_1764033034172_0",
    "folderPrefix": "src/components"
  }
}
```

This will only return bundles from `src/components` and its subdirectories.

## Example Output

```json
{
  "snapshotId": "snap_1764033034172_0",
  "totalBundles": 45,
  "bundles": [
    {
      "id": "bundle_Button",
      "rootComponent": "Button",
      "filePath": "src/components/Button.tsx",
      "folder": "src/components",
      "bundlePath": "src/components/context.json",
      "position": "1/20",
      "bundleHash": "abc123def456",
      "approxTokens": 2500
    },
    {
      "id": "bundle_Card",
      "rootComponent": "Card",
      "filePath": "src/components/Card.tsx",
      "folder": "src/components",
      "bundlePath": "src/components/context.json",
      "position": "2/20",
      "bundleHash": "def456ghi789",
      "approxTokens": 3200
    },
    {
      "id": "bundle_HomePage",
      "rootComponent": "HomePage",
      "filePath": "src/pages/index.tsx",
      "folder": "src/pages",
      "bundlePath": "src/pages/context.json",
      "position": "1/5",
      "bundleHash": "ghi789jkl012",
      "approxTokens": 8500
    }
  ]
}
```

## Workflow

This is **STEP 2** of the LogicStamp MCP workflow:

1. ✅ **Call `logicstamp_refresh_snapshot`** - Creates snapshot (STEP 1)
2. ✅ **Call `logicstamp_list_bundles`** - Lists available bundles (STEP 2 - you are here)
3. **Call `logicstamp_read_bundle`** - Read specific bundles using `bundlePath` from this output (STEP 3)

## Using the Output

The `bundlePath` field from each bundle descriptor is what you'll use in `logicstamp_read_bundle`:

```json
{
  "name": "logicstamp_read_bundle",
  "arguments": {
    "snapshotId": "snap_1764033034172_0",
    "bundlePath": "src/components/context.json",
    "rootComponent": "Button"
  }
}
```

## Filtering Strategies

### By Component Type
Use `folderPrefix` to filter by component type:
- `"src/components"` - UI components
- `"src/pages"` - Page components
- `"src/utils"` - Utility modules
- `"src/hooks"` - Custom hooks

### By Feature Area
Filter by feature directories:
- `"src/features/auth"` - Authentication features
- `"src/features/dashboard"` - Dashboard features
- `"src/features/profile"` - User profile features

### By Layer
Filter by architectural layer:
- `"src/components"` - Presentation layer
- `"src/services"` - Service layer
- `"src/api"` - API layer

## Important Notes

- **Must call after refresh_snapshot:** This command requires a valid `snapshotId` from `logicstamp_refresh_snapshot`.
- **bundlePath is required:** The `bundlePath` field from the output is what you use in `logicstamp_read_bundle`.
- **Multiple bundles per file:** A single `context.json` file can contain multiple bundles. Use `rootComponent` to specify which one you want.
- **Token estimates:** The `approxTokens` field provides a rough estimate. Actual token counts may vary.

## Related Commands

- [`logicstamp_refresh_snapshot`](./refresh-snapshot.md) - Create snapshot (STEP 1)
- [`logicstamp_read_bundle`](./read-bundle.md) - Read detailed bundle information (STEP 3)
- [`logicstamp_compare_snapshot`](./compare-snapshot.md) - Compare snapshots to detect changes

## Error Handling

If the command fails, it will throw an error with a descriptive message. Common errors:

- **Snapshot not found** - The `snapshotId` doesn't exist. Make sure you've called `logicstamp_refresh_snapshot` first.
- **Invalid snapshot ID** - The `snapshotId` format is incorrect
- **Context files missing** - The snapshot's context files are missing or corrupted

## See Also

- [MCP Integration Guide](../mcp_integration.md) - Complete MCP server documentation
- [Tool Description](../tool_description.md) - LogicStamp Context capabilities
- [Quick Start](../quickstart.md) - Getting started guide

