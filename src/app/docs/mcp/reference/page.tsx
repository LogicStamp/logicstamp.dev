import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MCP Reference | LogicStamp Context Documentation',
  description: 'Complete reference documentation for LogicStamp Context MCP server tools and API.',
}

export default function MCPReferencePage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 dark:from-indigo-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                API Reference
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                MCP Reference
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Complete API documentation for all LogicStamp Context MCP server tools, parameters, and responses.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Overview */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Overview
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  The LogicStamp Context MCP server provides 6 core tools for analyzing React/TypeScript codebases:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-400 ml-4">
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_refresh_snapshot</code> - Analyze project and create snapshot</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_list_bundles</code> - List available component bundles</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_read_bundle</code> - Read full component contract + graph</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_compare_snapshot</code> - Detect changes after edits</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_compare_modes</code> - Generate token cost comparison across all modes</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_read_logicstamp_docs</code> - Read LogicStamp documentation (use when confused)</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Tool 1 */}
          <AnimatedSection direction="up" delay={200}>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                1. logicstamp_refresh_snapshot
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                Create a snapshot of the current codebase state. This is typically the first tool you call before using other tools.
              </p>
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Input Parameters:</p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Input',
                      code: `{
  "profile": "llm-chat",      // optional: llm-chat | llm-safe | ci-strict
  "mode": "header",            // optional: none | header | full
  "includeStyle": false,       // optional: include style metadata
  "depth": 2,                  // optional: dependency depth (default: 2)
  "projectPath": "/abs/path",  // REQUIRED: absolute path to project root
  "cleanCache": false          // optional: force cache cleanup (default: false)
}`,
                      copyText: JSON.stringify({ profile: "llm-chat", mode: "header", includeStyle: false, depth: 2, projectPath: "/abs/path", cleanCache: false }, null, 2)
                    }
                  ]}
                />
              </div>
              <div className="mb-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-3 sm:p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Note on Depth Parameter:</strong> The default depth=2 includes nested components (e.g., App → Hero → Button), ensuring you see the full component tree with contracts and styles. Depth=1 only includes direct component dependencies (e.g., App → Hero). For React projects with component hierarchies, the default depth=2 is recommended.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response:</p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Output',
                      code: `{
  "snapshotId": "snap_1764033034172",
  "projectPath": "/path/to/project",
  "profile": "llm-chat",
  "mode": "header",
  "includeStyle": false,
  "summary": {
    "totalComponents": 32,
    "totalBundles": 30,
    "totalFolders": 14,
    "totalTokenEstimate": 19127,
    "tokenEstimates": {
      "gpt4oMini": 13895,
      "gpt4oMiniFullCode": 39141,
      "claude": 12351,
      "claudeFullCode": 34792
    },
    "missingDependencies": []
  },
  "folders": [...]
}`,
                      copyText: JSON.stringify({ snapshotId: "snap_1764033034172", projectPath: "/path/to/project", profile: "llm-chat", mode: "header", includeStyle: false, summary: { totalComponents: 32, totalBundles: 30, totalFolders: 14, totalTokenEstimate: 19127, tokenEstimates: { gpt4oMini: 13895, gpt4oMiniFullCode: 39141, claude: 12351, claudeFullCode: 34792 }, missingDependencies: [] }, folders: [] }, null, 2)
                    }
                  ]}
                />
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 sm:p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Note:</strong> Save the <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">snapshotId</code> - you'll need it for subsequent tool calls. Snapshots are stored in memory and expire after a TTL period.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Tool 2 */}
          <AnimatedSection direction="up" delay={300}>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                2. logicstamp_list_bundles
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                List available bundles for selective loading. Use this to discover which components are available before reading specific bundles.
              </p>
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Input Parameters:</p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Input',
                      code: `{
  "snapshotId": "snap_1764033034172",
  "folderPrefix": "src/components"  // optional: filter by folder path
}`,
                      copyText: JSON.stringify({ snapshotId: "snap_1764033034172", folderPrefix: "src/components" }, null, 2)
                    }
                  ]}
                />
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response:</p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Output',
                      code: `{
  "snapshotId": "snap_1764033034172",
  "totalBundles": 5,
  "bundles": [
    {
      "id": "bundle_Button",
      "rootComponent": "Button",
      "filePath": "src/components/Button.tsx",
      "folder": "src/components",
      "bundlePath": "src/components/context.json",
      "position": "1/5",
      "bundleHash": "uifb:6e122a4e538c640f09501037",
      "approxTokens": 549
    }
  ]
}`,
                      copyText: JSON.stringify({ snapshotId: "snap_1764033034172", totalBundles: 5, bundles: [{ id: "bundle_Button", rootComponent: "Button", filePath: "src/components/Button.tsx", folder: "src/components", bundlePath: "src/components/context.json", position: "1/5", bundleHash: "uifb:6e122a4e538c640f09501037", approxTokens: 549 }] }, null, 2)
                    }
                  ]}
                />
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 sm:p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Tip:</strong> Use <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">folderPrefix</code> to filter bundles by directory path. Use <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">bundlePath</code> from the response in <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">logicstamp_read_bundle</code>.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Tool 3 */}
          <AnimatedSection direction="up" delay={400}>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                3. logicstamp_read_bundle
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                Read full component contract and dependency graph. This returns the complete UIF contract with props, state, hooks, dependencies, and optionally style metadata.
              </p>
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Input Parameters:</p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Input',
                      code: `{
  "snapshotId": "snap_1764033034172",
  "bundlePath": "src/components/context.json",
  "rootComponent": "Button"  // optional: filter to specific component
}`,
                      copyText: JSON.stringify({ snapshotId: "snap_1764033034172", bundlePath: "src/components/context.json", rootComponent: "Button" }, null, 2)
                    }
                  ]}
                />
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <strong>Note:</strong> If <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">includeStyle: true</code> was used in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">refresh_snapshot</code>, the bundle contracts will include a <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">style</code> field with Tailwind classes, SCSS modules, framer-motion usage, layout patterns, visual metadata, and animation information.
                </p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response:</p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Output',
                      code: `{
  "snapshotId": "snap_1764033034172",
  "bundlePath": "src/components/context.json",
  "rootComponent": "Button",
  "bundle": {
    "type": "LogicStampBundle",
    "entryId": "...",
    "graph": {
      "nodes": [
        {
          "entryId": "...",
          "contract": {
            "type": "UIFContract",
            "kind": "react:component",
            "description": "Interactive button component",
            "logicSignature": {
              "props": {
                "onClick": { "type": "() => void" },
                "variant": { "type": "primary | secondary" }
              },
              "emits": {},
              "state": {}
            },
            "version": {
              "hooks": ["useState"],
              "components": [],
              "functions": ["handleClick"]
            }
          }
        }
      ],
      "edges": []
    }
  }
}`,
                      copyText: JSON.stringify({ snapshotId: "snap_1764033034172", bundlePath: "src/components/context.json", rootComponent: "Button", bundle: { type: "LogicStampBundle", entryId: "...", graph: { nodes: [{ entryId: "...", contract: { type: "UIFContract", kind: "react:component", description: "Interactive button component", logicSignature: { props: { onClick: { type: "() => void" }, variant: { type: "primary | secondary" } }, emits: {}, state: {} }, version: { hooks: ["useState"], components: [], functions: ["handleClick"] } } }], edges: [] } } }, null, 2)
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Tool 4 */}
          <AnimatedSection direction="up" delay={500}>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                4. logicstamp_compare_snapshot
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                Detect changes after edits. Use this to verify modifications and detect drift. Compares current codebase state against a baseline (disk, snapshot, or git ref).
              </p>
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Input Parameters:</p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Input',
                      code: `{
  "profile": "llm-chat",      // optional: analysis profile (default: llm-chat)
  "mode": "header",            // optional: code inclusion mode (default: header)
  "includeStyle": false,       // optional: include style metadata (only when forceRegenerate: true)
  "depth": 2,                  // optional: dependency depth (default: 2, only when forceRegenerate: true)
  "forceRegenerate": false,    // optional: regenerate context before comparing (default: false)
  "projectPath": "/abs/path",  // optional: defaults to current working directory
  "baseline": "disk"           // optional: disk | snapshot | git:<ref> (default: disk)
}`,
                      copyText: JSON.stringify({ profile: "llm-chat", mode: "header", includeStyle: false, depth: 2, forceRegenerate: false, projectPath: "/abs/path", baseline: "disk" }, null, 2)
                    }
                  ]}
                />
              </div>
              <div className="mb-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 sm:p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Performance Notes:</strong> By default (<code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">forceRegenerate: false</code>), this tool reads existing JSON files from disk (fast, no CLI calls). When <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">forceRegenerate: true</code>, it runs <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">stamp context</code> to regenerate context before comparing. If <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">context_main.json</code> is missing and <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">forceRegenerate: false</code>, the tool will fail with a clear error message.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response:</p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Output',
                      code: `{
  "baseline": "disk",
  "status": "diff",
  "summary": {
    "totalFolders": 14,
    "unchangedFolders": 12,
    "changedFolders": 2,
    "addedFolders": 0,
    "removedFolders": 0,
    "tokenDelta": {
      "gpt4oMini": 320,
      "claude": 270
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
          "semanticHashBefore": "uif:637c3858",
          "semanticHashAfter": "uif:7f8d9e0a",
          "tokenDelta": 40,
          "details": {
            "modifiedFields": ["version.functions"],
            "addedFunctions": ["handleKeyDown"]
          }
        }
      ]
    }
  ]
}`,
                      copyText: JSON.stringify({ baseline: "disk", status: "diff", summary: { totalFolders: 14, unchangedFolders: 12, changedFolders: 2, addedFolders: 0, removedFolders: 0, tokenDelta: { gpt4oMini: 320, claude: 270 } }, folderDiffs: [{ path: "src/components", status: "changed", changes: [{ rootComponent: "Button", type: "uif_contract_changed", semanticHashBefore: "uif:637c3858", semanticHashAfter: "uif:7f8d9e0a", tokenDelta: 40, details: { modifiedFields: ["version.functions"], addedFunctions: ["handleKeyDown"] } }] }] }, null, 2)
                    }
                  ]}
                />
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Change Types:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">changes</code> array can contain objects with different <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">type</code> values:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">uif_contract_changed</code> - Component contract changed (props, functions, imports, etc.)</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">hash_changed</code> - Bundle hash changed but semantic hash unchanged</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">bundle_added</code> - New component bundle added</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">bundle_removed</code> - Component bundle removed</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">props_signature_changed</code> - Props signature changed (reserved for future use)</li>
                </ul>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-2">Status Values:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">pass</code> - No changes detected</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">diff</code> - Changes detected</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">error</code> - Comparison failed (check <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">error</code> field for details)</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Parameters Reference */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Parameters Reference
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">profile</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Preset configuration optimized for different use cases:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                      <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">llm-chat</code> (default) - Balanced mode for AI chat interfaces</li>
                      <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">llm-safe</code> - Conservative mode for token-limited contexts</li>
                      <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">ci-strict</code> - Strict validation mode for CI/CD</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">mode</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Code inclusion mode:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                      <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">none</code> - Contracts only, no source code (maximum compression)</li>
                      <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">header</code> (default) - Contracts plus JSDoc headers and function signatures</li>
                      <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">full</code> - Complete source code included</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">includeStyle</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">When <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">true</code>, extracts style metadata including:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 mb-2">
                      <li>Tailwind CSS classes</li>
                      <li>SCSS/CSS modules</li>
                      <li>framer-motion animations</li>
                      <li>Color palettes and spacing patterns</li>
                      <li>Layout patterns (flex/grid, responsive breakpoints)</li>
                    </ul>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Note:</strong> For <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">compare_snapshot</code>, this only takes effect when <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">forceRegenerate: true</code>. If <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">forceRegenerate: false</code>, compares whatever style metadata exists on disk (may be incomplete).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">depth</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Dependency traversal depth. Default depth=2 includes nested components (e.g., App → Hero → Button), ensuring you see the full component tree with contracts and styles. Depth=1 only includes direct dependencies (e.g., App → Hero). Only used when <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">forceRegenerate: true</code> in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">compare_snapshot</code>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">projectPath</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <strong className="text-red-600 dark:text-red-400">REQUIRED</strong> for <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">refresh_snapshot</code> - Absolute path to project root. When <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">stamp init</code> has been run, MCP clients may omit this parameter, causing hangs. This parameter is REQUIRED for the tool to work correctly. The server will resolve relative paths to absolute paths automatically. For <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">compare_snapshot</code>, defaults to current working directory.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">forceRegenerate</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      For <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">compare_snapshot</code> only. When <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">true</code>, runs <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">stamp context</code> to regenerate context before comparing. When <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">false</code> (default), reads existing <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">context_main.json</code> from disk (fast path, assumes context is fresh). If <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">context_main.json</code> is missing and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">forceRegenerate: false</code>, fails with a clear error message.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">baseline</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Comparison baseline for <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_compare_snapshot</code>:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                      <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">disk</code> (default) - Compare against context files on disk</li>
                      <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">snapshot</code> - Compare against a previous snapshot ID</li>
                      <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">git:&lt;ref&gt;</code> - Compare against a git commit (e.g., <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">git:main</code>)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Next Steps */}
          <AnimatedSection direction="up" delay={700}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-violet-50 to-fuchsia-50 dark:from-indigo-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative bg-white dark:bg-gray-900 border-2 border-indigo-200 dark:border-indigo-800 rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      Ready to Use the MCP Tools?
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                      Check out the installation guide to get started, or explore the overview page for usage examples and workflows.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                      <Link
                        href="/docs/mcp/getting-started"
                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                      >
                        Installation Guide
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <Link
                        href="/docs/mcp"
                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                      >
                        MCP Overview
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}

