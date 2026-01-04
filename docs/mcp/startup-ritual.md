# LogicStamp MCP Startup Ritual

**Copy and paste this message into your chat when starting work with a new project via LogicStamp MCP.**

---

You have access to LogicStamp MCP tools for analyzing React/TypeScript codebases.

**Before reading raw source files, follow this workflow:**

1. **Call `logicstamp_refresh_snapshot`** on this repo to generate context files and get a snapshotId.
   - **RECOMMENDED:** For React/TypeScript projects with component hierarchies, start with `depth: 2` to capture nested components (e.g., App uses Hero, Hero uses Button). Default depth=1 only includes direct dependencies and may miss nested components.
   - **Example:** `{ "projectPath": "...", "depth": 2 }` - This ensures components used by your root components are included in dependency graphs.
   - **When to use depth=2:** If your project has components that import/use other components (common in React), use depth=2 from the start. You can always regenerate with depth=1 later if you only need direct dependencies.

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
refresh_snapshot → list_bundles → read_bundle("context_main") → read specific bundles as needed → (raw code only if needed)
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
- **Default (depth=1):** Only includes direct dependencies. If App uses Hero, Hero will be listed but Hero's dependencies (like Button) won't be in the graph.
- **Recommended for React projects (depth=2):** Includes nested components. If App uses Hero, and Hero uses Button, both Hero and Button will be in the dependency graph with their contracts and styles.
- **When to use depth=2:** Start with depth=2 for React projects with component hierarchies. This ensures you see the full component tree, not just direct imports.
- **Example:** `{ "projectPath": "...", "depth": 2 }` - Use this for most React projects to capture nested component relationships.

