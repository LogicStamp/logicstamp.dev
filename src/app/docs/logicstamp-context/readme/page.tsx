import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'LogicStamp Context README | Documentation',
  description: 'Overview of LogicStamp Context, what it generates, and core concepts.',
}

export default function LogicStampReadmePage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Overview
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                LogicStamp Context Overview
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-4 sm:mb-6">
                LogicStamp Context is a lightweight CLI that scans your React/TypeScript codebase and generates
                AI-ready context bundles optimized for tools like Claude, ChatGPT, and other LLMs.
              </p>
              
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
                <p className="text-sm sm:text-base text-amber-800 dark:text-amber-300">
                  <span className="font-semibold text-amber-900 dark:text-amber-200">TypeScript-first:</span> the analyzer currently targets{' '}
                  <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">.ts</code> and <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">.tsx</code> files only. JavaScript <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">.js</code> and <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">.jsx</code>{' '}
                  files are not analyzed yet, so mixed or JS-only projects will only see TypeScript components in{' '}
                  <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">context.json</code>.
                </p>
                <p className="text-sm sm:text-base text-amber-800 dark:text-amber-300 mt-2">
                  <span className="font-semibold text-amber-900 dark:text-amber-200">Vue 3 support:</span> Works with <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">.ts</code>/<code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">.tsx</code> files only, not <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">.vue</code> SFC files.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* What does it generate Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    What does it generate?
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  The CLI analyzes your components and emits a <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">context.json</code> file containing one or more
                  bundles. Each bundle includes contracts, dependency graphs, and optional code headers so AI tools
                  can understand the structure and behavior of your UI without seeing the entire codebase.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { title: 'Component structure', desc: 'Variables, hooks, components, and functions' },
                    { title: 'Logic signatures', desc: 'Props, events, and state types' },
                    { title: 'Dependency graph', desc: 'How components depend on each other' },
                    { title: 'Token-aware modes', desc: 'Control how much code is included per bundle' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-semibold text-blue-900 dark:text-blue-200 text-sm sm:text-base mb-1">{item.title}</p>
                        <p className="text-sm text-blue-800 dark:text-blue-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Installation Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Installation
                  </h2>
                </div>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Installation',
                      code: 'npm install -g logicstamp-context',
                      copyText: 'npm install -g logicstamp-context'
                    }
                  ]}
                />
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 leading-relaxed">
                  After installation, the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 rounded-md font-mono text-xs sm:text-sm">stamp</code> command is available globally and can be run from any
                  React/TypeScript project.
                </p>
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                  <p className="text-sm sm:text-base text-green-800 dark:text-green-300">
                    <strong className="text-green-900 dark:text-green-200">Note:</strong> &quot;Global CLI&quot; means installing globally via <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">npm install -g</code> makes the <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">stamp</code> command available from any directory, not just within a specific project folder.
                  </p>
                  <ul className="text-sm sm:text-base text-green-800 dark:text-green-300 mt-2 ml-4 list-disc">
                    <li><strong>Local install:</strong> <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">npm install logicstamp-context</code> → only available in that project</li>
                    <li><strong>Global install:</strong> <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">npm install -g logicstamp-context</code> → available everywhere via <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">stamp</code> command</li>
                  </ul>
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <p className="text-sm sm:text-base text-blue-800 dark:text-blue-300">
                    <strong className="text-blue-900 dark:text-blue-200">Requirements:</strong> Node.js &gt;= 18.18.0 (<strong>Node 20+ recommended</strong>), TypeScript codebase (React, Next.js or Vue)
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Core Commands Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Core Commands
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  The CLI exposes several primary commands:
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { command: 'stamp init [path]', desc: 'Initialize LogicStamp in your project by setting up .gitignore patterns and LLM_CONTEXT.md.' },
                    { command: 'stamp context [path]', desc: 'Generate AI-ready context from your project (multi-file mode: one context.json per folder plus context_main.json index).' },
                    { command: 'stamp context compare', desc: 'Detect context drift across all context files (multi-file mode) or between two specific files.' },
                    { command: 'stamp context validate', desc: 'Validate all context files (multi-file mode) or a specific generated context file against the schema.' },
                    { command: 'stamp context clean', desc: 'Remove all generated context artifacts from your project.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <code className="block px-2 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 rounded-md font-mono text-xs sm:text-sm mb-2">
                          {item.command}
                        </code>
                        <p className="text-sm sm:text-base text-purple-800 dark:text-purple-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 leading-relaxed">
                  Each of these commands is documented in more detail in the dedicated pages inside the{' '}
                  <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">LogicStamp Context CLI</code> docs section.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Recent Updates Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Recent Updates
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2 text-base sm:text-lg">
                      v0.3.5
                    </h3>
                    <ul className="space-y-2 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                      <li><strong>Inline style extraction fixed</strong> – Inline style objects now extract both property names and literal values (strings, numbers, booleans, null, template literals)</li>
                      <li><strong>Styled JSX CSS extraction fixed</strong> – Full CSS content from <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">&lt;style jsx&gt;</code> blocks is now extracted, parsed using css-tree AST, with selector and property detection</li>
                      <li><strong>Beta release note</strong> – This is a beta release. We&apos;re actively improving the tool based on user feedback. If you encounter any issues or have suggestions, please open an issue on GitHub</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 text-base sm:text-lg">
                      v0.3.4
                    </h3>
                    <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300 ml-4 list-disc">
                      <li><strong>TOON output format support</strong> – Added new <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">--format toon</code> option to generate context bundles in TOON format, expanding output options beyond JSON, pretty, and NDJSON</li>
                      <li><strong>Improved Node.js 18 compatibility</strong> – Adjusted <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">glob</code> to a Node 18–compatible version while retaining the latest security fixes</li>
                      <li><strong>Updated Node.js requirement</strong> – Clarified minimum supported Node.js version to <strong>{" "}&gt;= 18.18.0</strong> (Node 20+ recommended)</li>
                      <li><strong>Dev dependency updates</strong> – Updated development dependencies to the latest patch versions</li>
                      <li><strong>Documentation improvements</strong> – Improved README clarity and formatting consistency, and clarified what is detected vs extracted across framework documentation</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2 text-base sm:text-lg">
                      v0.3.2
                    </h3>
                    <ul className="space-y-2 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                      <li><strong>Security update</strong> - Updated <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">glob</code> dependency to 11.1.0+ to address CVE-2025-64756</li>
                      <li><strong>Improved portability</strong> - Context files now use relative paths instead of absolute paths, improving portability across different machines and environments</li>
                      <li><strong>CSS/SCSS parsing now uses AST parser</strong> - Migrated from regex-based extraction to AST-based parsing using <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">css-tree</code> for more robust and accurate parsing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2 text-base sm:text-lg">
                      v0.3.1
                    </h3>
                    <ul className="space-y-2 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                      <li><strong>Hook classification accuracy</strong> - Custom React hooks are now correctly classified as <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">react:hook</code> instead of <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">react:component</code></li>
                      <li><strong>Added <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">react:hook</code> to ContractKind type</strong> - The <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">ContractKind</code> type now includes <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">'react:hook'</code> as a valid kind</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 text-base sm:text-lg">
                      v0.3.0 Security Release
                    </h3>
                    <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-300 ml-4 list-disc">
                      <li><strong>Security scan now runs by default</strong> - <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">stamp init</code> automatically scans for secrets to protect sensitive data</li>
                      <li><strong>Automatic secret sanitization</strong> - Detected secrets are automatically replaced with <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">"PRIVATE_DATA"</code> in generated context files</li>
                      <li><strong>Improved default security posture</strong> - Better protection out of the box for new projects</li>
                      <li>Removed <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">--secure</code> flag (security scanning is now default; use <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">--no-secure</code> to skip)</li>
                      <li><strong>Important:</strong> Credentials can only be included in bundles when using <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">--include-code full</code> mode. Other modes (<code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">none</code>, <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">header</code>, <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">header+style</code>) only include metadata, not implementation code.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Token Optimization Section */}
          <AnimatedSection direction="up" delay={450}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Token Optimization
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  LogicStamp Context helps you understand and control token usage by estimating token counts for
                  different inclusion modes (<code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 rounded-md font-mono text-xs sm:text-sm">none</code>, <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 rounded-md font-mono text-xs sm:text-sm">header</code>, <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 rounded-md font-mono text-xs sm:text-sm">full</code>) and
                  providing comparison tables. This makes it easier to choose the right balance between context
                  richness and cost.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Learn More Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Learn More
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  For full details including schema reference, advanced options, and examples, see the{' '}
                  <a
                    href="https://github.com/LogicStamp/logicstamp-context"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold underline"
                  >
                    LogicStamp Context GitHub repository
                  </a>.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
















