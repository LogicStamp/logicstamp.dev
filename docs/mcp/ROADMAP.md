# LogicStamp MCP Roadmap

This document outlines planned enhancements and improvements for the LogicStamp MCP server. Items are organized by priority and value.

## Status Legend

- 🔴 **Not Started** - Feature is planned but not yet implemented
- 🟡 **In Progress** - Feature is currently being developed
- 🟢 **Completed** - Feature is implemented and tested
- ⚠️ **Blocked** - Feature is blocked by dependencies or technical constraints

---

## High-Value Enhancements

These enhancements provide significant value with reasonable implementation effort.

### 1. Semantic Component Search

**Status:** 🔴 Not Started  
**Priority:** High  
**Effort:** Medium-High  
**Impact:** Medium-High

**Description:**  
Add `logicstamp_search_components` tool that enables semantic search across component bundles. Search by component descriptions, prop names, functionality, or other metadata rather than requiring exact file/component names.

**Current State:**  
- Documented in Phase 4 of implementation checklist
- No implementation exists
- Would need to index bundle metadata for efficient search

**Implementation Tasks:**
- [ ] Design search API (query format, filters, ranking)
- [ ] Implement search index building (from existing bundles)
- [ ] Add fuzzy/semantic matching logic
- [ ] Create `src/mcp/tools/search-components.ts`
- [ ] Add tool handler in `src/mcp/server.ts`
- [ ] Implement search ranking/scoring
- [ ] Add filters (by folder, component type, etc.)
- [ ] Add integration tests
- [ ] Update documentation with search examples

**Search Capabilities:**
- Search by component description
- Search by prop names/types
- Search by function/export names
- Search by file paths (fuzzy)
- Filter by folder/component type
- Rank results by relevance

**Benefits:**
- Easier component discovery for AI assistants
- Reduces need to know exact file names
- Enables "find components that do X" queries
- Improves codebase exploration workflows

**Technical Considerations:**
- May need to build search index from bundles
- Consider performance for large codebases
- Could use simple text matching or more advanced semantic search
- Should cache search index for performance

**Related Files:**
- `src/mcp/tools/list-bundles.ts` (related functionality)
- `src/mcp/tools/read-bundle.ts` (bundle structure)

---

### 2. Git Baseline Support

**Status:** 🔴 Not Started  
**Priority:** Medium  
**Effort:** Medium-High  
**Impact:** Medium

**Description:**  
Enable comparison against git commits/branches by supporting `baseline: "git:<ref>"` syntax. This allows AI assistants to compare current code state against any git reference (commit, branch, tag).

**Important Note:**  
Since context files (`context_main.json`, `context.json` files) are **gitignored by default**, this feature cannot simply read context files from git. Instead, it must:
1. Checkout the git reference to a temporary location
2. Run `stamp context` to generate context files for that reference
3. Compare the generated context files
4. Clean up temporary directories

**Current State:**  
- `compare_snapshot` tool accepts `baseline` parameter
- `baseline: "git:<ref>"` currently throws error: "Git baseline not yet implemented"
- Error handling exists in `src/mcp/tools/compare-snapshot.ts` (line 144-145)
- Documented as "future" feature in multiple places

**Implementation Tasks:**
- [ ] Add git dependency check (ensure `git` command is available)
- [ ] Implement git checkout logic to temporarily check out reference to temp directory
- [ ] Run `stamp context` on checked-out code to generate baseline context files
- [ ] Compare current context against git-generated baseline context
- [ ] Clean up temporary directories after comparison
- [ ] Handle edge cases (detached HEAD, uncommitted changes, invalid refs, etc.)
- [ ] Add integration tests with git repository fixtures
- [ ] Update documentation with git baseline examples
- [ ] Add error handling for invalid git references
- [ ] Consider caching generated context files for same git ref (performance optimization)

**Benefits:**
- Enables CI/CD integration (compare PR against main branch)
- Better change tracking across git history
- Supports code review workflows
- Allows comparison against any historical state

**Technical Considerations:**
- **More complex than initially thought**: Must generate context files, not just read them
- Need to handle temporary git checkouts safely (separate temp directory)
- Must preserve current working directory state
- Should validate git references before checking out
- Performance: Generating context for git ref adds significant overhead (full `stamp context` run)
- Consider caching: If same git ref is compared multiple times, cache the generated context
- Disk space: Temporary checkouts and generated context files require disk space

**Related Files:**
- `src/mcp/tools/compare-snapshot.ts` (main implementation)
- `docs/mcp_integration.md` (documentation)
- `docs/commands/compare-snapshot.md` (command docs)

---

## Medium-Value Enhancements

These enhancements provide good value but may require more effort or have lower priority.

### 3. Configuration File Support

**Status:** 🔴 Not Started  
**Priority:** Medium  
**Effort:** Medium  
**Impact:** Medium

**Description:**  
Support `mcp-config.json` configuration file to set default values for profile, mode, paths, and other settings. This reduces parameter repetition and allows project-specific defaults.

**Current State:**  
- Configuration structure documented in `docs/mcp_integration.md` (lines 848-873)
- No implementation exists
- All configuration currently passed via tool parameters

**Implementation Tasks:**
- [ ] Define configuration schema/TypeScript types
- [ ] Implement config file loader (`src/mcp/config.ts`)
- [ ] Add config file discovery (project root, user home, etc.)
- [ ] Merge config defaults with tool parameters
- [ ] Add validation for config values
- [ ] Support environment variable overrides
- [ ] Add example config file to repository
- [ ] Update documentation with config examples
- [ ] Add tests for config loading and merging

**Configuration Options:**
```json
{
  "server": {
    "defaultProfile": "llm-chat",
    "defaultMode": "header",
    "defaultDepth": 2,
    "defaultIncludeStyle": false
  },
  "snapshots": {
    "maxSnapshots": 10,
    "ttlMinutes": 60,
    "autoCleanup": true
  },
  "paths": {
    "cliPath": "stamp",
    "tempDir": ".logicstamp/mcp-snapshots"
  },
  "security": {
    "allowedPaths": [],
    "maxBundleSize": 1048576,
    "maxTokensPerRequest": 100000
  }
}
```

**Benefits:**
- Reduces parameter repetition
- Enables project-specific defaults
- Better developer experience
- Supports team-wide configuration

**Related Files:**
- `docs/mcp_integration.md` (documentation)
- `src/mcp/server.ts` (tool parameter handling)

---

### 4. Enhanced Error Messages

**Status:** 🟢 Completed  
**Priority:** Medium  
**Effort:** Low-Medium  
**Impact:** Medium

**Description:**  
Improve error messages throughout the MCP server to be more actionable and helpful. Provide suggestions, context, and next steps when errors occur.

**Current State:**  
- Basic error handling exists
- Error messages are functional but could be more helpful
- Some errors lack context or suggestions

**Implementation Tasks:**
- [x] Audit all error messages in tool implementations
- [x] Add context to error messages (what was attempted, why it failed)
- [x] Add suggestions for common errors (e.g., "Did you run refresh_snapshot first?")
- [x] Include relevant file paths and line numbers where applicable
- [ ] Add error codes for programmatic handling (future enhancement)
- [ ] Create error message templates/helpers (future enhancement)
- [ ] Update tests to verify error message quality (future enhancement)
- [ ] Document error codes and meanings (future enhancement)

**Example Improvements:**
- ❌ Current: "context_main.json not found"
- ✅ Enhanced: "context_main.json not found in /path/to/project. Run 'logicstamp_refresh_snapshot' first to generate context files, or use 'forceRegenerate: true' to regenerate automatically."

**Benefits:**
- Faster debugging for users
- Better AI assistant error handling
- Reduced support burden
- Improved developer experience

**Related Files:**
- All tool files in `src/mcp/tools/`
- `src/mcp/server.ts` (error handling)

---

### 5. Progress/Status Reporting

**Status:** 🔴 Not Started  
**Priority:** Medium  
**Effort:** Medium-High  
**Impact:** Medium

**Description:**  
Add progress reporting for long-running operations like `refresh_snapshot` and `compare_modes`. Use MCP progress notifications to provide real-time updates.

**Current State:**  
- No progress reporting exists
- Long operations appear to hang from user perspective
- MCP SDK supports progress notifications

**Implementation Tasks:**
- [ ] Research MCP progress notification API
- [ ] Add progress tracking to `refresh_snapshot` (file scanning, analysis stages)
- [ ] Add progress tracking to `compare_modes` (mode generation stages)
- [ ] Implement progress callbacks in CLI execution
- [ ] Add progress notifications to tool handlers
- [ ] Test progress reporting with long-running operations
- [ ] Update documentation with progress reporting details

**Progress Stages:**
- `refresh_snapshot`: Scanning files → Analyzing components → Generating bundles → Writing context files
- `compare_modes`: Generating mode 1 → Generating mode 2 → Comparing → Calculating stats

**Benefits:**
- Better user experience during long operations
- Prevents perception of hanging/freezing
- Enables progress tracking in UI
- Improves transparency

**Technical Considerations:**
- MCP SDK progress notification support
- Need to parse CLI output for progress (if available)
- May need to add progress hooks to CLI calls
- Consider performance impact of progress reporting

**Related Files:**
- `src/mcp/tools/refresh-snapshot.ts`
- `src/mcp/tools/compare-modes.ts`
- `src/mcp/utils/exec-with-timeout.ts`

---

## Nice-to-Have Enhancements

These enhancements are valuable but lower priority or require significant effort.

### 6. Incremental Snapshot Updates

**Status:** 🔴 Not Started  
**Priority:** Low  
**Effort:** High  
**Impact:** Medium-High

**Description:**  
Only regenerate changed files/components instead of full snapshots. Use file modification times and hashes to detect changes and update incrementally.

**Current State:**  
- All snapshots are full regenerations
- No incremental update logic exists
- CLI may support some caching, but MCP doesn't leverage it

**Implementation Tasks:**
- [ ] Add file change detection (mtime, hash comparison)
- [ ] Implement incremental bundle generation
- [ ] Update only changed components in context files
- [ ] Handle dependency changes (when dependency changes, update dependents)
- [ ] Add tests for incremental updates
- [ ] Document incremental update behavior

**Benefits:**
- Faster snapshot generation for large codebases
- Reduced CLI execution time
- Lower resource usage
- Better performance for frequent updates

**Technical Considerations:**
- Complex dependency tracking
- Need to handle edge cases (moved files, renamed components)
- May require changes to CLI
- Testing complexity increases

**Related Files:**
- `src/mcp/tools/refresh-snapshot.ts`
- `src/mcp/state.ts` (snapshot management)

---

### 7. Streaming Support for Large Bundles

**Status:** 🔴 Not Started  
**Priority:** Low  
**Effort:** High  
**Impact:** Medium

**Description:**  
Support streaming/chunked responses for very large bundles to avoid memory issues and enable progressive loading.

**Current State:**
- All bundles loaded into memory at once
- No streaming support exists
- Large codebases may hit memory limits

**Implementation Tasks:**
- [ ] Research MCP streaming/chunking capabilities
- [ ] Implement bundle chunking logic
- [ ] Add streaming response handling
- [ ] Update `read_bundle` tool to support streaming
- [ ] Add tests for large bundle handling
- [ ] Document streaming behavior and limits

**Benefits:**
- Handles very large codebases
- Reduces memory usage
- Enables progressive loading
- Better performance for large bundles

**Technical Considerations:**
- MCP protocol streaming support
- Need to chunk bundles intelligently
- Client-side reassembly logic
- May require protocol changes

**Related Files:**
- `src/mcp/tools/read-bundle.ts`
- `src/mcp/server.ts` (response handling)

---

### 8. Security Enhancements

**Status:** 🔴 Not Started  
**Priority:** Medium  
**Effort:** Medium  
**Impact:** High (Security)

**Description:**  
Implement security features documented in security considerations: path validation, bundle size limits, token budgets, and snapshot TTL enforcement.

**Current State:**
- Security considerations documented in `docs/mcp_integration.md`
- Basic validation exists but may not be comprehensive
- Path validation, size limits, and token budgets may not be fully enforced

**Implementation Tasks:**
- [ ] Implement path validation (prevent path traversal)
- [ ] Add bundle size limits (prevent OOM)
- [ ] Implement token budget tracking and limits
- [ ] Enforce snapshot TTL (auto-cleanup)
- [ ] Add security configuration options
- [ ] Add security tests
- [ ] Document security features and best practices
- [ ] Add security audit logging

**Security Features:**
- Path validation: Ensure `projectPath` is within allowed directories
- Bundle size limits: Reject bundles exceeding max size
- Token budgets: Track and limit tokens per request/snapshot
- Snapshot TTL: Auto-expire old snapshots
- Input sanitization: Validate all user inputs

**Benefits:**
- Prevents path traversal attacks
- Prevents OOM attacks
- Enforces resource limits
- Better security posture
- Production-ready security

**Related Files:**
- `src/mcp/tools/refresh-snapshot.ts` (path validation)
- `src/mcp/tools/read-bundle.ts` (size limits)
- `src/mcp/state.ts` (TTL enforcement)
- `docs/mcp_integration.md` (security considerations)

---

## Implementation Phases

### Phase 1: Quick Wins (Current Focus)
- ✅ Complete core MCP server implementation
- 🟢 Enhanced error messages (#4) - Completed in v0.1.4

### Phase 2: High-Value Features
- 🔴 Semantic component search (#1)
- 🔴 Configuration file support (#3)

### Phase 3: Quality of Life
- 🔴 Progress/status reporting (#5)
- 🔴 Security enhancements (#8)

### Phase 4: Advanced Features
- 🔴 Git baseline support (#2)
- 🔴 Incremental snapshot updates (#6)
- 🔴 Streaming support (#7)

---

## Contributing

If you're interested in implementing any of these features:

1. Check if an issue exists for the feature (create one if not)
2. Comment on the issue to indicate you're working on it
3. Follow the implementation tasks checklist
4. Add tests for your changes
5. Update documentation
6. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

---

## Notes

- This roadmap is a living document and will be updated as priorities change
- Features may be reprioritized based on user feedback and needs
- Some features may depend on upstream CLI changes or MCP protocol updates
- Estimated effort and impact are rough guides and may vary

---

## Features Not Recommended

### `logicstamp_get_last_compare_result` Tool

**Status:** ⚠️ **Not Recommended**  
**Reason:** Hallucination Risk

While the underlying state management functions exist (`getLastCompareResult`, `setLastCompareResult`), exposing this as an MCP tool is **not recommended** due to the risk of hallucinations.

**The Problem:**
- Cached comparison results can become stale if code changes after the comparison
- With watch mode continuously updating context files, cached results may not reflect the current state
- AI assistants could make decisions based on outdated comparison data, leading to hallucinations

**Core Product Value:**
LogicStamp's primary value is **accuracy and preventing hallucinations** through:
- **Self-Verification**: AI verifies its own changes via drift detection
- **Safe by Default**: Changes must pass drift check before approval
- **Always Fresh**: Comparison results reflect the current codebase state

**Recommendation:**
Always use `logicstamp_compare_snapshot` directly. With watch mode keeping context files fresh, comparisons are fast and always accurate. The small performance gain from caching does not justify the hallucination risk.

---

**Last Updated:** 2026-01-14  
**Version:** 0.1.4
