import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'Complete Reference | LogicStamp Context Documentation',
  description: 'Complete documentation for LogicStamp Context CLI including all commands, options, features, and examples.',
}

export default function CompleteReferencePage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              Complete Reference
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive documentation for LogicStamp Context CLI - all commands, options, features, and examples.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-code:text-gray-900 dark:prose-code:text-gray-100 text-gray-800 dark:text-gray-100">
          
          {/* What's New */}
          <AnimatedSection direction="up" delay={100}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">What's New in v0.1.0</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">🎉 Token Cost Optimization</h3>
                <ul className="text-blue-800 dark:text-blue-200 space-y-2 text-base">
                  <li>• Automatic token estimates for GPT-4o-mini and Claude</li>
                  <li>• Mode comparison showing savings (none/header/full)</li>
                  <li>• <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 px-1.5 py-0.5 rounded text-sm">--compare-modes</code> flag for detailed token analysis</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">🔍 Context Drift Detection</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-2 text-base">
                  <li>• New <code className="bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 px-1.5 py-0.5 rounded text-sm">compare</code> command for tracking changes</li>
                  <li>• Detects added/removed/changed components</li>
                  <li>• CI-friendly exit codes and token delta stats</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">⚛️ Next.js App Router Support</h3>
                <ul className="text-purple-800 dark:text-purple-200 space-y-2 text-base">
                  <li>• Detects <code className="bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 px-1.5 py-0.5 rounded text-sm">'use client'</code> and <code className="bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 px-1.5 py-0.5 rounded text-sm">'use server'</code> directives</li>
                  <li>• Identifies files in Next.js App Router (<code className="bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 px-1.5 py-0.5 rounded text-sm">/app</code> directory)</li>
                  <li>• Adds metadata to contracts for framework-aware analysis</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">✅ Enhanced Component Detection</h3>
                <ul className="text-yellow-800 dark:text-yellow-200 space-y-2 text-base">
                  <li>• Fixed React component detection for HTML-only JSX</li>
                  <li>• Improved dependency resolution (relative paths prioritized)</li>
                  <li>• Better handling of cross-directory component references</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">🛡️ CI/CD Improvements</h3>
                <ul className="text-gray-800 dark:text-gray-200 space-y-2 text-base">
                  <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">--strict-missing</code> flag for dependency validation</li>
                  <li>• Enhanced <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">--stats</code> output with mode estimates</li>
                  <li>• JSON output optimized for CI parsing</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* What does it generate */}
          <AnimatedSection direction="up" delay={200}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">What Does It Generate?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              LogicStamp Context analyzes your React components and outputs a structured JSON file containing:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• <strong>Component structure</strong>: variables, hooks, components, functions</li>
              <li>• <strong>Logic signatures</strong>: props, events, state types</li>
              <li>• <strong>Dependency graph</strong>: how components relate to each other</li>
              <li>• <strong>Code snippets</strong>: headers or full source (configurable)</li>
              <li>• <strong>Semantic hashes</strong>: for tracking changes</li>
              <li>• <strong>Next.js metadata</strong>: App Router directives and file location (when applicable)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-base leading-relaxed">
              This output is designed to be easily understood by AI assistants, helping them provide better suggestions and understand your codebase architecture.
            </p>
          </AnimatedSection>

          {/* Next.js Support */}
          <AnimatedSection direction="up" delay={300}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Next.js App Router Support</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              LogicStamp Context automatically detects and annotates Next.js App Router components:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Detected Features</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">'use client'</code> directive - Marks Client Components</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">'use server'</code> directive - Marks Server Actions</li>
              <li>• <strong>App Router location</strong> - Identifies files in <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">/app</code> directory</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Example Contract Output</h3>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Next.js Contract',
                  code: `{
  "type": "UIFContract",
  "kind": "react:component",
  "entryId": "app/dashboard/page.tsx",
  "nextjs": {
    "directive": "client",
    "isInAppDir": true
  }
}`,
                  copyText: `{
  "type": "UIFContract",
  "kind": "react:component",
  "entryId": "app/dashboard/page.tsx",
  "nextjs": {
    "directive": "client",
    "isInAppDir": true
  }
}`
                }
              ]}
            />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Benefits for AI Analysis</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• <strong>Framework-aware suggestions</strong> - AI knows which APIs are available (client vs server)</li>
              <li>• <strong>Better refactoring</strong> - AI understands boundaries between client/server code</li>
              <li>• <strong>Accurate recommendations</strong> - AI won't suggest client-only hooks in Server Components</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Supported Scenarios</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>✅ Client Components with <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">'use client'</code></li>
              <li>✅ Server Actions with <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">'use server'</code></li>
              <li>✅ Server Components in <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">/app</code> directory (no directive)</li>
              <li>✅ Regular components outside <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">/app</code> (no metadata)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-relaxed">
              <strong>Note:</strong> The <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">nextjs</code> field is only added when relevant, keeping contracts clean for non-Next.js projects.
            </p>
          </AnimatedSection>

          {/* Commands */}
          <AnimatedSection direction="up" delay={400}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Commands</h2>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Command Syntax',
                  code: `stamp context [path] [options]
stamp context compare <old.json> <new.json> [options]
stamp context validate [file]`,
                  copyText: `stamp context [path] [options]
stamp context compare <old.json> <new.json> [options]
stamp context validate [file]`
                }
              ]}
            />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">stamp context [path]</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Scans a directory and writes an AI-ready context file containing a collection of bundles (one bundle per entry point). Shows token estimates and mode comparison in output. Automatically validates the generated context before writing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">stamp context compare</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Compares two context files and reports drift. Detects added/removed components, changed imports, hooks, exports, and semantic hashes. Exits with code 1 if drift is detected (CI-friendly).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">stamp context validate [file]</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Checks an existing context file for schema and structural issues before sharing it with an AI or committing it to a repo. When no file is specified it looks for <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">context.json</code> in the current directory.
            </p>
          </AnimatedSection>

          {/* Options */}
          <AnimatedSection direction="up" delay={500}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Options (context command)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left font-semibold">Option</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left font-semibold">Alias</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left font-semibold">Description</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left font-semibold">Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--depth &lt;n&gt;</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>-d</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Dependency traversal depth</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>1</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--include-code &lt;mode&gt;</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>-c</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Code inclusion: <code>none</code>, <code>header</code>, or <code>full</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>header</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--format &lt;format&gt;</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>-f</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Output format: <code>json</code>, <code>pretty</code>, or <code>ndjson</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>json</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--out &lt;file&gt;</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>-o</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Output file</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>context.json</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--max-nodes &lt;n&gt;</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>-m</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Maximum nodes per bundle</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>100</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--profile &lt;profile&gt;</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Profile preset (see Profiles section)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>llm-chat</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--strict</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>-s</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fail on missing dependencies</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>false</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--strict-missing</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Exit with error code 1 if any missing dependencies found (CI-friendly)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>false</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--predict-behavior</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Include experimental behavior predictions in contracts</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>false</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--dry-run</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Skip writing output; show on-screen summary only</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>false</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--stats</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Emit single-line JSON stats with token estimates (intended for CI)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>false</code></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--compare-modes</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Show detailed token comparison table across modes (none/header/full)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>false</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>--help</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>-h</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Show help message</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Profiles */}
          <AnimatedSection direction="up" delay={600}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Profiles</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Profiles are preset configurations optimized for different use cases:
            </p>

            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">llm-chat (default)</h3>
                <p className="text-blue-800 dark:text-blue-200 mb-3 text-base">Balanced mode for AI chat interfaces</p>
                <ul className="text-blue-800 dark:text-blue-200 space-y-1 text-sm ml-4">
                  <li>• Depth: 1</li>
                  <li>• Code: headers only</li>
                  <li>• Max nodes: 100</li>
                  <li>• Behavioral predictions: disabled by default (enable with <code className="bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 px-1.5 py-0.5 rounded text-xs">--predict-behavior</code>)</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">llm-safe</h3>
                <p className="text-green-800 dark:text-green-200 mb-3 text-base">Conservative mode for token-limited contexts</p>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm ml-4">
                  <li>• Depth: 1</li>
                  <li>• Code: headers only</li>
                  <li>• Max nodes: 30</li>
                  <li>• Behavioral predictions: disabled by default (enable with <code className="bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 px-1.5 py-0.5 rounded text-xs">--predict-behavior</code>)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">ci-strict</h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-3 text-base">Strict validation mode for CI/CD</p>
                <ul className="text-yellow-800 dark:text-yellow-200 space-y-1 text-sm ml-4">
                  <li>• Code: none</li>
                  <li>• Strict dependencies enabled</li>
                  <li>• Behavioral predictions: not applicable (metadata-only mode)</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Behavioral Predictions */}
          <AnimatedSection direction="up" delay={700}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Behavioral Predictions</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              The <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">--predict-behavior</code> flag enables experimental behavioral analysis that adds predicted component behaviors to the contract output. These predictions include:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• Form validation patterns</li>
              <li>• Side effect management (useEffect)</li>
              <li>• Data fetching/mutation patterns</li>
              <li>• Memoization usage</li>
              <li>• Context consumption</li>
              <li>• Ref usage for DOM access</li>
              <li>• Loading/error state handling</li>
            </ul>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
                <strong>Note:</strong> Behavioral predictions are <strong>disabled by default</strong> in all profiles to minimize token usage. Enable them explicitly when you need richer semantic information about component behavior.
              </p>
            </div>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Enable Predictions',
                  code: `# Enable predictions with the default profile
stamp context --predict-behavior

# Enable predictions with a specific profile
stamp context --profile llm-safe --predict-behavior`,
                  copyText: `# Enable predictions with the default profile
stamp context --predict-behavior

# Enable predictions with a specific profile
stamp context --profile llm-safe --predict-behavior`
                }
              ]}
            />
          </AnimatedSection>

          {/* Token Optimization */}
          <AnimatedSection direction="up" delay={800}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Token Optimization</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              LogicStamp Context includes built-in token cost analysis and optimization features:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Automatic Token Estimates</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Every context generation shows token costs for both GPT-4o-mini and Claude:
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Token Output',
                  code: `📏 Token Estimates (header mode):
   GPT-4o-mini: 13,895 | Full code: ~39,141 (~65% savings)
   Claude:      12,351 | Full code: ~34,792 (~65% savings)

📊 Mode Comparison:
   none:       ~8,337 tokens
   header:     ~13,895 tokens
   full:       ~39,141 tokens`,
                  copyText: `📏 Token Estimates (header mode):
   GPT-4o-mini: 13,895 | Full code: ~39,141 (~65% savings)
   Claude:      12,351 | Full code: ~34,792 (~65% savings)

📊 Mode Comparison:
   none:       ~8,337 tokens
   header:     ~13,895 tokens
   full:       ~39,141 tokens`
                }
              ]}
            />
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-base leading-relaxed">
              This helps you:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• <strong>Understand costs</strong> at a glance</li>
              <li>• <strong>Choose the right mode</strong> for your budget</li>
              <li>• <strong>See savings</strong> compared to including full source code</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Mode Comparison Table</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Use <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">--compare-modes</code> for a detailed comparison:
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Compare Modes',
                  code: 'stamp context --compare-modes',
                  copyText: 'stamp context --compare-modes'
                }
              ]}
            />
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-base leading-relaxed">
              <strong>When to use each mode:</strong>
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">none</code> - API documentation, CI validation (no code snippets)</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">header</code> - AI chat, code review (JSDoc headers + contracts)</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">full</code> - Deep analysis, debugging (complete source code)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Stats for CI/CD</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Use <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">--stats</code> to get machine-readable token data:
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Get Stats',
                  code: 'stamp context --stats',
                  copyText: 'stamp context --stats'
                }
              ]}
            />
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-base leading-relaxed">
              Output JSON includes:
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Stats JSON',
                  code: `{
  "tokensGPT4": 13895,
  "tokensClaude": 12351,
  "modeEstimates": {
    "none": {"gpt4": 8337, "claude": 7411},
    "header": {"gpt4": 13895, "claude": 12351},
    "full": {"gpt4": 39141, "claude": 34792}
  },
  "savingsGPT4": "65",
  "savingsClaude": "65"
}`,
                  copyText: `{
  "tokensGPT4": 13895,
  "tokensClaude": 12351,
  "modeEstimates": {
    "none": {"gpt4": 8337, "claude": 7411},
    "header": {"gpt4": 13895, "claude": 12351},
    "full": {"gpt4": 39141, "claude": 34792}
  },
  "savingsGPT4": "65",
  "savingsClaude": "65"
}`
                }
              ]}
            />
          </AnimatedSection>

          {/* Context Drift Detection */}
          <AnimatedSection direction="up" delay={900}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Context Drift Detection</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              The <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">compare</code> command helps you track changes between context versions:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Basic Comparison</h3>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Compare Files',
                  code: 'stamp context compare old.json new.json',
                  copyText: 'stamp context compare old.json new.json'
                }
              ]}
            />
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-base leading-relaxed">
              Output shows:
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Output Example',
                  code: `✅ PASS

# or if changes detected:

⚠️  DRIFT

Added components: 2
  + src/components/NewButton.tsx
  + src/utils/helpers.ts

Removed components: 1
  - src/components/OldButton.tsx

Changed components: 3
  ~ src/components/Card.tsx
    Δ imports, hooks
  ~ src/App.tsx
    Δ hash`,
                  copyText: `✅ PASS

# or if changes detected:

⚠️  DRIFT

Added components: 2
  + src/components/NewButton.tsx
  + src/utils/helpers.ts

Removed components: 1
  - src/components/OldButton.tsx

Changed components: 3
  ~ src/components/Card.tsx
    Δ imports, hooks
  ~ src/App.tsx
    Δ hash`
                }
              ]}
            />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">With Token Stats</h3>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Compare with Stats',
                  code: 'stamp context compare old.json new.json --stats',
                  copyText: 'stamp context compare old.json new.json --stats'
                }
              ]}
            />
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-base leading-relaxed">
              Shows token cost changes:
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Token Stats Output',
                  code: `Token Stats:
  Old: 8,484 (GPT-4o-mini) | 7,542 (Claude)
  New: 9,125 (GPT-4o-mini) | 8,111 (Claude)
  Δ +641 (+7.56%)`,
                  copyText: `Token Stats:
  Old: 8,484 (GPT-4o-mini) | 7,542 (Claude)
  New: 9,125 (GPT-4o-mini) | 8,111 (Claude)
  Δ +641 (+7.56%)`
                }
              ]}
            />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Exit Codes</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">0</code> - No drift (PASS)</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">1</code> - Drift detected or error</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-base leading-relaxed">
              Perfect for CI/CD validation:
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'CI Example',
                  code: `# In your CI pipeline
stamp context compare base.json pr.json || echo "Context drift detected!"`,
                  copyText: `# In your CI pipeline
stamp context compare base.json pr.json || echo "Context drift detected!"`
                }
              ]}
            />
          </AnimatedSection>

          {/* Examples */}
          <AnimatedSection direction="up" delay={1000}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Examples</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Basic Usage</h3>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Generate Context',
                  code: `# Generate context for entire project
stamp context

# CLI output shows scanning, analysis, and validation steps`,
                  copyText: `# Generate context for entire project
stamp context

# CLI output shows scanning, analysis, and validation steps`
                }
              ]}
            />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Focused Analysis</h3>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Analyze Directory',
                  code: `# Analyze only the src directory
stamp context ./src

# Analyze with custom output file
stamp context --out my-context.json`,
                  copyText: `# Analyze only the src directory
stamp context ./src

# Analyze with custom output file
stamp context --out my-context.json`
                }
              ]}
            />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Deep Traversal</h3>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Deep Analysis',
                  code: `# Include 2 levels of dependencies
stamp context --depth 2

# Include full source code
stamp context --include-code full`,
                  copyText: `# Include 2 levels of dependencies
stamp context --depth 2

# Include full source code
stamp context --include-code full`
                }
              ]}
            />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Token Cost Analysis</h3>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Token Analysis',
                  code: `# Show detailed mode comparison
stamp context --compare-modes

# Get JSON stats for CI
stamp context --stats

# See token costs for specific mode
stamp context --include-code none
stamp context --include-code full`,
                  copyText: `# Show detailed mode comparison
stamp context --compare-modes

# Get JSON stats for CI
stamp context --stats

# See token costs for specific mode
stamp context --include-code none
stamp context --include-code full`
                }
              ]}
            />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">CI/CD Validation</h3>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'CI Examples',
                  code: `# Use llm-safe profile for smaller output
stamp context --profile llm-safe --out safe-context.json

# Strict mode: fail if any dependencies missing
stamp context --strict-missing

# Generate stats for CI monitoring
stamp context --stats > stats.json

# Validate generated context
stamp context validate context.json`,
                  copyText: `# Use llm-safe profile for smaller output
stamp context --profile llm-safe --out safe-context.json

# Strict mode: fail if any dependencies missing
stamp context --strict-missing

# Generate stats for CI monitoring
stamp context --stats > stats.json

# Validate generated context
stamp context validate context.json`
                }
              ]}
            />
          </AnimatedSection>

          {/* Output Format */}
          <AnimatedSection direction="up" delay={1100}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Output Format</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              The generated <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">context.json</code> contains an array of bundles (one bundle per entry point).
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              <strong>📋 Full Schema Reference:</strong> See the schema file for the complete JSON Schema definition.
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Example Output',
                  code: `[
  {
    "$schema": "https://logicstamp.dev/schemas/context/v0.1.json",
    "position": "1/5",
    "type": "LogicStampBundle",
    "schemaVersion": "0.1",
    "entryId": "src/components/Button.tsx",
    "depth": 1,
    "createdAt": "2025-01-15T10:30:00.000Z",
    "bundleHash": "uifb:abc123...",
    "graph": {
      "nodes": [
        {
          "entryId": "src/components/Button.tsx",
          "contract": {
            "type": "UIFContract",
            "schemaVersion": "0.3",
            "kind": "react:component",
            "description": "Button - Interactive component",
            "version": {
              "variables": ["variant", "size"],
              "hooks": ["useState"],
              "components": [],
              "functions": ["handleClick"]
            },
            "logicSignature": {
              "props": {
                "onClick": { "type": "function", "signature": "() => void" },
                "variant": { "type": "literal-union", "literals": ["primary", "secondary"] }
              },
              "events": {},
              "state": {}
            },
            "nextjs": {
              "directive": "client",
              "isInAppDir": true
            }
          }
        }
      ],
      "edges": []
    },
    "meta": {
      "missing": [],
      "source": "logicstamp-context@0.1.0"
    }
  }
]`,
                  copyText: `[
  {
    "$schema": "https://logicstamp.dev/schemas/context/v0.1.json",
    "position": "1/5",
    "type": "LogicStampBundle",
    "schemaVersion": "0.1",
    "entryId": "src/components/Button.tsx",
    "depth": 1,
    "createdAt": "2025-01-15T10:30:00.000Z",
    "bundleHash": "uifb:abc123...",
    "graph": {
      "nodes": [
        {
          "entryId": "src/components/Button.tsx",
          "contract": {
            "type": "UIFContract",
            "schemaVersion": "0.3",
            "kind": "react:component",
            "description": "Button - Interactive component",
            "version": {
              "variables": ["variant", "size"],
              "hooks": ["useState"],
              "components": [],
              "functions": ["handleClick"]
            },
            "logicSignature": {
              "props": {
                "onClick": { "type": "function", "signature": "() => void" },
                "variant": { "type": "literal-union", "literals": ["primary", "secondary"] }
              },
              "events": {},
              "state": {}
            },
            "nextjs": {
              "directive": "client",
              "isInAppDir": true
            }
          }
        }
      ],
      "edges": []
    },
    "meta": {
      "missing": [],
      "source": "logicstamp-context@0.1.0"
    }
  }
]`
                }
              ]}
            />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Understanding the Meta Field</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              The <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">meta</code> section provides metadata about bundle generation and dependency resolution:
            </p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-3">missing Array</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Tracks dependencies that couldn't be resolved during analysis. An empty array <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">[]</code> means all dependencies were successfully found.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              When dependencies are missing, each entry contains:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">name</code> - The import specifier that couldn't be resolved</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">reason</code> - Why it couldn't be found (e.g., "file not found", "external package")</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">referencedBy</code> - The component that tried to import it</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mt-4 text-base leading-relaxed">
              <strong>Common reasons for missing dependencies:</strong>
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">file not found</code> - Referenced file doesn't exist (deleted or moved)</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">external package</code> - Third-party npm package (intentionally excluded)</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">outside scan path</code> - File exists but outside the specified scan directory</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">circular dependency</code> - Circular import detected and skipped</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">max depth exceeded</code> - Dependency beyond <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">--depth</code> limit</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-3">source Field</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Identifies the generator and version (e.g., <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">"logicstamp-context@0.1.0"</code>). Useful for:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• Debugging context generation issues</li>
              <li>• Ensuring compatibility with consuming tools</li>
              <li>• Tracking which version generated historical contexts</li>
            </ul>
          </AnimatedSection>

          {/* Use Cases */}
          <AnimatedSection direction="up" delay={1200}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Use Cases</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">AI-Assisted Development</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Share context with Claude or ChatGPT to get:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• Architecture suggestions</li>
              <li>• Refactoring recommendations</li>
              <li>• Bug fixes based on full component understanding</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Documentation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Generate up-to-date component documentation automatically:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• API contracts</li>
              <li>• Dependency trees</li>
              <li>• Component relationships</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Code Review</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              Quickly understand component structure and dependencies:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• Identify circular dependencies</li>
              <li>• Find unused components</li>
              <li>• Track component complexity</li>
            </ul>
          </AnimatedSection>

          {/* Troubleshooting */}
          <AnimatedSection direction="up" delay={1300}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Troubleshooting</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Handling Missing Dependencies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
              If your generated context shows missing dependencies in the <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">meta.missing</code> array:
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h4 className="text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">1. External Packages (Expected)</h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">This is normal. LogicStamp only analyzes your source code, not node_modules. External packages are intentionally excluded.</p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h4 className="text-base font-semibold text-yellow-900 dark:text-yellow-100 mb-2">2. File Not Found (Action Required)</h4>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-2"><strong>Solutions:</strong></p>
                <ul className="text-yellow-800 dark:text-yellow-200 text-sm ml-4 space-y-1">
                  <li>• Check if the file was deleted or moved</li>
                  <li>• Update the import path in the referencing component</li>
                  <li>• Use <code className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-900 dark:text-yellow-100 px-1.5 py-0.5 rounded text-xs">--strict-missing</code> in CI to catch these issues early</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h4 className="text-base font-semibold text-green-900 dark:text-green-100 mb-2">3. Outside Scan Path</h4>
                <p className="text-green-800 dark:text-green-200 text-sm mb-2"><strong>Solutions:</strong></p>
                <ul className="text-green-800 dark:text-green-200 text-sm ml-4 space-y-1">
                  <li>• Expand your scan path: <code className="bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 px-1.5 py-0.5 rounded text-xs">stamp context ../</code> (parent directory)</li>
                  <li>• Or scan from project root: <code className="bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 px-1.5 py-0.5 rounded text-xs">stamp context .</code> (from root)</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h4 className="text-base font-semibold text-purple-900 dark:text-purple-100 mb-2">4. Max Depth Exceeded</h4>
                <p className="text-purple-800 dark:text-purple-200 text-sm mb-2"><strong>Solutions:</strong></p>
                <ul className="text-purple-800 dark:text-purple-200 text-sm ml-4 space-y-1">
                  <li>• Increase depth: <code className="bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 px-1.5 py-0.5 rounded text-xs">stamp context --depth 2</code> or <code className="bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 px-1.5 py-0.5 rounded text-xs">--depth 3</code></li>
                  <li>• Note: Higher depth = more tokens consumed</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h4 className="text-base font-semibold text-red-900 dark:text-red-100 mb-2">5. Circular Dependencies</h4>
                <p className="text-red-800 dark:text-red-200 text-sm mb-2"><strong>Solutions:</strong></p>
                <ul className="text-red-800 dark:text-red-200 text-sm ml-4 space-y-1">
                  <li>• Refactor to break the circular import</li>
                  <li>• Extract shared logic to a separate module</li>
                  <li>• This is a code smell that should be addressed</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Common Issues</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-base leading-relaxed">
                  <strong>Q: Why is my context.json huge?</strong>
                </p>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm ml-4">
                  <li>• Use <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-xs">--include-code none</code> to exclude all source code (smallest)</li>
                  <li>• Use <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-xs">--include-code header</code> (default) for balanced output</li>
                  <li>• Use <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-xs">--profile llm-safe</code> for token-constrained scenarios</li>
                  <li>• Check <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-xs">--compare-modes</code> to see token savings</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-base leading-relaxed">
                  <strong>Q: Validation failed - what went wrong?</strong>
                </p>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm ml-4">
                  <li>• Check for schema mismatches (outdated schema version)</li>
                  <li>• Verify JSON is well-formed (no trailing commas, proper escaping)</li>
                  <li>• Ensure all required fields are present</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-base leading-relaxed">
                  <strong>Q: How do I ignore certain directories?</strong>
                </p>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm ml-4">
                  <li>• LogicStamp respects <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-xs">.gitignore</code> automatically</li>
                  <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-xs">node_modules/</code> and common build directories are excluded by default</li>
                  <li>• Scan specific directories: <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-xs">stamp context ./src</code></li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* How it Works */}
          <AnimatedSection direction="up" delay={1400}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">How It Works</h2>
            <ol className="text-gray-700 dark:text-gray-300 space-y-3 text-base ml-4 list-decimal">
              <li><strong>Scan</strong>: Finds all <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">.ts</code> and <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">.tsx</code> files in your project</li>
              <li><strong>Analyze</strong>: Parses React components using TypeScript AST</li>
              <li><strong>Extract</strong>: Builds component contracts with structure and signatures</li>
              <li><strong>Graph</strong>: Creates dependency graph showing relationships</li>
              <li><strong>Bundle</strong>: Packages context bundles optimized for AI consumption</li>
            </ol>
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-base leading-relaxed">
              All in one command, no pre-compilation needed!
            </p>
          </AnimatedSection>

          {/* Requirements */}
          <AnimatedSection direction="up" delay={1500}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Requirements</h2>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base ml-4">
              <li>• Node.js &gt;= 18.0.0</li>
              <li>• TypeScript/React codebase</li>
            </ul>
          </AnimatedSection>

          {/* Back to Overview */}
          <AnimatedSection direction="up" delay={1600}>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/docs/what-is-logicstamp"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Overview
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}

