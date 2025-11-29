import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'

export const metadata: Metadata = {
  title: '`compare` Command | LogicStamp Context Documentation',
  description: 'Detect drift between context.json files with Jest-style approval workflows and token stats.',
}

export default function CompareCommandPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/30 to-yellow-50/20 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-yellow-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-amber-200/50 dark:border-amber-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Drift Detection Command
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">stamp context compare</code> Command
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Powerful context drift detector that works like Jest snapshots – compare current context against a baseline, approve updates, and track token cost changes.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          <AnimatedSection direction="up" delay={100}>
            <h2>Quick Start</h2>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Quick Start',
                  code: `# Auto-mode: Compare all context files (multi-file mode)
stamp context compare

# Auto-approve updates (like jest -u)
stamp context compare --approve

# Single-file: Compare two specific files
stamp context compare old.json new.json

# Multi-file: Compare two indices
stamp context compare old/context_main.json new/context_main.json

# Show per-folder token statistics
stamp context compare --stats

# Clean up orphaned files automatically
stamp context compare --approve --clean-orphaned`,
                  copyText: `# Auto-mode: Compare all context files (multi-file mode)
stamp context compare

# Auto-approve updates (like jest -u)
stamp context compare --approve

# Single-file: Compare two specific files
stamp context compare old.json new.json

# Multi-file: Compare two indices
stamp context compare old/context_main.json new/context_main.json

# Show per-folder token statistics
stamp context compare --stats

# Clean up orphaned files automatically
stamp context compare --approve --clean-orphaned`
                }
              ]}
            />
          </AnimatedSection>

          {/* Two Comparison Modes Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Two Comparison Modes
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                The compare command supports <strong className="text-gray-900 dark:text-white">two comparison modes</strong>:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-3 text-base sm:text-lg flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                    Multi-File Mode (Auto or Manual with context_main.json)
                  </h3>
                  <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300 ml-2 list-disc">
                    <li>Compares <strong>all context files</strong> across your project</li>
                    <li>Uses <code className="px-1 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">context_main.json</code> as the root index</li>
                    <li>Detects: <strong>ADDED FILE</strong> (new folders), <strong>ORPHANED FILE</strong> (removed folders), <strong>DRIFT</strong> (changed files), and <strong>PASS</strong> (unchanged files)</li>
                    <li>Shows three-tier output: folder-level summary → component-level summary → detailed per-folder changes</li>
                  </ul>
                </div>
                <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-3 text-base sm:text-lg flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                    Single-File Mode
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300 ml-2 list-disc">
                    <li>Compares two specific <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">context.json</code> files</li>
                    <li>Detects added/removed/changed components</li>
                    <li>Shows detailed component-level diffs</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* What It Detects Section */}
          <AnimatedSection direction="up" delay={250}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  What It Detects
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-3 text-base sm:text-lg">In multi-file mode:</h3>
                    <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-300 ml-4 list-disc">
                      <li><strong>ADDED FILE</strong> – New folders with context files</li>
                      <li><strong>ORPHANED FILE</strong> – Folders removed from project (but context files still exist on disk)</li>
                      <li><strong>DRIFT</strong> – Changed files with component-level details</li>
                      <li><strong>PASS</strong> – Unchanged files</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-3 text-base sm:text-lg">In single-file mode:</h3>
                    <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300 ml-4 list-disc">
                      <li>Added components – new components in the new context</li>
                      <li>Removed components – components that existed in the old but not the new context</li>
                      <li>Changed components – components that exist in both but have differences in semantic hash, imports, hooks, exports, or other signature fields</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-50/50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Note:</strong> The compare command does <strong>not</strong> compare styles by design. Style changes (CSS, Tailwind classes, inline styles, etc.) are intentionally excluded from comparison as they represent visual/presentation changes rather than structural or logical changes.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Approval Workflow Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Approval Workflow
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                The compare workflow mirrors Jest snapshots:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-200 text-sm sm:text-base mb-1">Interactive mode (local dev)</p>
                    <p className="text-sm text-green-800 dark:text-green-300">
                      <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">stamp context compare</code> prompts to update all affected context files when drift is detected.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-blue-900 dark:text-blue-200 text-sm sm:text-base mb-1">Auto-approve mode</p>
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp context compare --approve</code> updates all files without prompting (CI-safe, like <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">jest -u</code>).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/10 rounded-xl border border-gray-200 dark:border-gray-800">
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-200 text-sm sm:text-base mb-1">CI mode</p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      Non-TTY environments never prompt and exit with code <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">1</code> when drift is detected.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-amber-50/50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">--clean-orphaned</code> with <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">--approve</code> to automatically delete stale context files from removed folders.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Token Statistics & Exit Codes Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Token Statistics
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                With the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">--stats</code> flag, the command shows per-folder token count statistics and deltas, allowing you to monitor how changes impact LLM context size across your project:
              </p>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'With Stats',
                    code: 'stamp context compare --stats',
                    copyText: 'stamp context compare --stats'
                  }
                ]}
              />
              <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Token stats show the delta for each folder with changes, helping you understand the cost impact of modifications.
              </p>

              <div className="mt-8 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
                <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                    Exit Codes
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50/50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-sm font-mono">0</code>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex-1">PASS – no drift detected, or drift detected and approved/updated.</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50/50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <code className="px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-sm font-mono">1</code>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex-1">DRIFT detected and not approved, or an error occurred (file not found, invalid JSON, generation failure, etc.).</p>
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


