# LogicStamp MCP Startup Ritual

**Copy and paste this message into your chat when starting work with a new project via LogicStamp MCP.**

---

You have access to LogicStamp MCP tools for analyzing React/TypeScript codebases.

**Before reading raw source files, follow this workflow:**

**Best Practice:** Start watch mode (`stamp context --watch`) in a terminal before beginning your coding session. This keeps context files fresh automatically and dramatically speeds up MCP responses.

1. **Check watch mode status** (recommended):
   - Call `logicstamp_watch_status` to see if watch mode is active
   - If watch mode is active, use `skipIfWatchActive: true` in `refresh_snapshot` to avoid redundant regeneration
   - **If watch mode is NOT active:** Consider starting it with `stamp context --watch` for better performance

2. **Call `logicstamp_refresh_snapshot`** on this repo to generate context files and get a snapshotId.
   - **Watch mode optimization:** Use `skipIfWatchActive: true` to skip regeneration when watch mode is keeping context fresh
   - **Default:** The default depth=2 includes nested components (e.g., App uses Hero, Hero uses Button), ensuring components used by your root components are included in dependency graphs.
   - **Example:** `{ "projectPath": "...", "skipIfWatchActive": true }` - Uses default depth=2 and skips regeneration if watch mode is active. You can explicitly set `depth: 1` if you only need direct dependencies.
   - **When to use depth=1:** If you only need direct dependencies (e.g., App → Hero but not Hero → Button), explicitly set `depth: 1`. For most React projects, the default depth=2 is recommended.

2. **Call `logicstamp_list_bundles`** with the snapshotId to see available bundles.

3. **Call `logicstamp_read_bundle`** with `bundlePath: "context_main.json"` to understand the project structure.

4. **Use those bundles** to understand the codebase architecture, component APIs, and relationships. Only open raw `.ts/.tsx` files when you need low-level implementation details that aren't in the bundles.

**If you're unsure what LogicStamp is or how to use these tools:**

- Call `logicstamp_read_logicstamp_docs` first - it returns comprehensive documentation explaining LogicStamp, the recommended workflow, and best practices.

**Key principle:** LogicStamp bundles are pre-parsed, structured summaries optimized for AI consumption. Prefer reading bundles over raw source files when possible. Bundles contain component contracts (props, state, hooks), dependency graphs, and optional style metadata - everything you need to understand structure and behavior without reading implementation details.

---

## Quick Reference

**Workflow:**
```
watch_status (optional) → refresh_snapshot (with skipIfWatchActive: true if watch mode active) → list_bundles → read_bundle("context_main") → read specific bundles as needed → (raw code only if needed)
```

**When to use bundles:**
- Understanding component structure and APIs
- Analyzing dependencies and relationships  
- Getting an overview of the codebase architecture
- Understanding component behavior without implementation details

**When to read raw code:**
- You need exact implementation details
- Edge cases not clear from summaries
- Debugging specific logic issues
- The bundle doesn't contain enough detail for your task

**Default mode:** Use `header` mode (default) - provides contracts + signatures at ~70% token savings vs raw source.

**Depth parameter:** 
- **Default (depth=2):** Includes nested components. If App uses Hero, and Hero uses Button, both Hero and Button will be in the dependency graph with their contracts and styles. This ensures you see the full component tree, not just direct imports.
- **When to use depth=1:** If you only need direct dependencies (e.g., App → Hero but not Hero → Button), explicitly set `depth: 1`. Hero will be listed but Hero's dependencies (like Button) won't be in the graph.
- **Example:** `{ "projectPath": "..." }` - Uses default depth=2. For most React projects, this captures nested component relationships automatically.

