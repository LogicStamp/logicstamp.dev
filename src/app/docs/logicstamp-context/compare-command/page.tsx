import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

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

          {/* Three Modes of Operation Section */}
          <AnimatedSection direction="up" delay={350}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Three Modes of Operation
              </h2>
              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-3 text-base sm:text-lg flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                    Auto-Mode (Recommended) - Multi-File
                  </h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Auto-Mode',
                        code: 'stamp context compare',
                        copyText: 'stamp context compare'
                      }
                    ]}
                  />
                  <p className="text-sm text-blue-800 dark:text-blue-300 mt-3 mb-2">
                    <strong>What happens:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800 dark:text-blue-300 ml-2">
                    <li>Checks if <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">context_main.json</code> exists (errors if not found)</li>
                    <li>Generates fresh context files based on your current code (all folders)</li>
                    <li>Compares <strong>all context files</strong> using the indices</li>
                    <li>Shows a <strong>three-tier output</strong>: folder-level summary → component-level summary → detailed per-folder component changes</li>
                    <li>Prompts you to update if drift detected (in terminal)</li>
                    <li>Exits with error if drift detected (in CI)</li>
                  </ol>
                  <p className="text-sm text-blue-800 dark:text-blue-300 mt-3">
                    This is perfect for local development – just run it after making changes!
                  </p>
                </div>
                <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-3 text-base sm:text-lg flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                    Manual Mode - Single File
                  </h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Manual Single File',
                        code: 'stamp context compare old.json new.json',
                        copyText: 'stamp context compare old.json new.json'
                      }
                    ]}
                  />
                  <p className="text-sm text-purple-800 dark:text-purple-300 mt-3 mb-2">
                    <strong>What happens:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-purple-800 dark:text-purple-300 ml-2">
                    <li>Compares two specific context files (folder <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">context.json</code> files)</li>
                    <li>Shows component-level differences</li>
                    <li><strong>Prompts to update old.json</strong> with new.json (in terminal)</li>
                    <li><strong>Exits with error</strong> if drift detected (in CI)</li>
                  </ol>
                  <p className="text-sm text-purple-800 dark:text-purple-300 mt-3">
                    Use this when you want to compare specific snapshots or versions.
                  </p>
                </div>
                <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-3 text-base sm:text-lg flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                    Manual Mode - Multi-File
                  </h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Manual Multi-File',
                        code: 'stamp context compare old/context_main.json new/context_main.json',
                        copyText: 'stamp context compare old/context_main.json new/context_main.json'
                      }
                    ]}
                  />
                  <p className="text-sm text-green-800 dark:text-green-300 mt-3 mb-2">
                    <strong>What happens:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-green-800 dark:text-green-300 ml-2">
                    <li>Auto-detects that you're comparing <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">context_main.json</code> files</li>
                    <li>Loads both indices and compares <strong>all referenced context files</strong></li>
                    <li>Shows three-tier output (folder summary + component summary + details)</li>
                    <li><strong>Prompts to update all files</strong> if drift detected (in terminal)</li>
                    <li><strong>Exits with error</strong> if drift detected (in CI)</li>
                  </ol>
                  <p className="text-sm text-green-800 dark:text-green-300 mt-3">
                    Use this when comparing different branches, commits, or environments.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Output Format Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Output Format
              </h2>
              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-3 text-base sm:text-lg">
                    Multi-File PASS (No Drift)
                  </h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'PASS Output',
                        code: `✅  PASS

📁 Folder Summary:
   Total folders: 14
   ✓  Unchanged folders: 14

📂 Folder Details:

   ✅ PASS: src/cli/context.json
      Path: src/cli

   ✅ PASS: src/core/context.json
      Path: src/core
   ...`,
                        copyText: `✅  PASS

📁 Folder Summary:
   Total folders: 14
   ✓  Unchanged folders: 14

📂 Folder Details:

   ✅ PASS: src/cli/context.json
      Path: src/cli

   ✅ PASS: src/core/context.json
      Path: src/core
   ...`
                      }
                    ]}
                  />
                  <p className="text-sm text-green-800 dark:text-green-300 mt-3">
                    Exit code: <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">0</code>
                  </p>
                </div>
                <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-3 text-base sm:text-lg">
                    Multi-File DRIFT Detected
                  </h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'DRIFT Output',
                        code: `⚠️  DRIFT

📁 Folder Summary:
   Total folders: 15
   ➕ Added folders: 1
   🗑️  Orphaned folders: 1
   ~  Changed folders: 2
   ✓  Unchanged folders: 11

📦 Component Summary:
   + Added: 5
   - Removed: 2
   ~ Changed: 3

📂 Folder Details:

   ➕ ADDED FILE: src/new-feature/context.json
      Path: src/new-feature

   🗑️  ORPHANED FILE: src/old-feature/context.json
      Path: src/old-feature

   ⚠️  DRIFT: src/components/context.json
      Path: src/components
      + Added components (2):
        + NewButton.tsx
        + Modal.tsx
      - Removed components (1):
        - OldButton.tsx
      ~ Changed components (2):
        ~ Card.tsx
          Δ imports
            - ./old-dependency
            + ./new-dependency
          Δ hooks
            + useState
            + useEffect
        ~ Button.tsx
          Δ hash
            old: uif:abc123456789012345678901
            new: uif:def456789012345678901234
      Token Δ: +641 (GPT-4) | +569 (Claude)

   ✅ PASS: src/utils/context.json
      Path: src/utils

🗑️  Orphaned Files on Disk:
   (These files exist on disk but are not in the new index)

   🗑️  src/deprecated/context.json`,
                        copyText: `⚠️  DRIFT

📁 Folder Summary:
   Total folders: 15
   ➕ Added folders: 1
   🗑️  Orphaned folders: 1
   ~  Changed folders: 2
   ✓  Unchanged folders: 11

📦 Component Summary:
   + Added: 5
   - Removed: 2
   ~ Changed: 3

📂 Folder Details:

   ➕ ADDED FILE: src/new-feature/context.json
      Path: src/new-feature

   🗑️  ORPHANED FILE: src/old-feature/context.json
      Path: src/old-feature

   ⚠️  DRIFT: src/components/context.json
      Path: src/components
      + Added components (2):
        + NewButton.tsx
        + Modal.tsx
      - Removed components (1):
        - OldButton.tsx
      ~ Changed components (2):
        ~ Card.tsx
          Δ imports
            - ./old-dependency
            + ./new-dependency
          Δ hooks
            + useState
            + useEffect
        ~ Button.tsx
          Δ hash
            old: uif:abc123456789012345678901
            new: uif:def456789012345678901234
      Token Δ: +641 (GPT-4) | +569 (Claude)

   ✅ PASS: src/utils/context.json
      Path: src/utils

🗑️  Orphaned Files on Disk:
   (These files exist on disk but are not in the new index)

   🗑️  src/deprecated/context.json`
                      }
                    ]}
                  />
                  <p className="text-sm text-amber-800 dark:text-amber-300 mt-3 mb-2">
                    Exit code: <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">1</code>
                  </p>
                  <div className="mt-3 p-3 bg-amber-50/50 dark:bg-amber-950/20 rounded-lg">
                    <p className="text-xs text-amber-800 dark:text-amber-300 mb-2">
                      <strong>Folder Status Indicators:</strong>
                    </p>
                    <ul className="text-xs text-amber-800 dark:text-amber-300 space-y-1 ml-4 list-disc">
                      <li><strong>➕ ADDED FILE</strong> – New folder with context file</li>
                      <li><strong>🗑️ ORPHANED FILE</strong> – Folder removed (context file still exists)</li>
                      <li><strong>⚠️ DRIFT</strong> – Folder has component changes</li>
                      <li><strong>✅ PASS</strong> – Folder unchanged</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Orphaned File Cleanup Section */}
          <AnimatedSection direction="up" delay={450}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Orphaned File Cleanup
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                When folders are removed from your project, their context files may still exist on disk. Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">--clean-orphaned</code> to automatically delete them:
              </p>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Clean Orphaned',
                    code: 'stamp context compare --approve --clean-orphaned',
                    copyText: 'stamp context compare --approve --clean-orphaned'
                  }
                ]}
              />
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4 mb-2 leading-relaxed">
                <strong>What happens:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-4 mb-4">
                <li>Detects orphaned files (exist on disk but not in new index)</li>
                <li>With <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--approve</code>: Automatically deletes them</li>
                <li>Without <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--approve</code>: Only reports them</li>
              </ol>
            </div>
          </AnimatedSection>

          {/* Token Statistics & Exit Codes Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Token Statistics
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                Add <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">--stats</code> to see per-folder token cost impact:
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
                  <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                    <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Code</th>
                          <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Meaning</th>
                          <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Use Case</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                            <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs sm:text-sm font-mono">0</code>
                          </td>
                          <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">PASS – No drift detected</td>
                          <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">CI validation passed</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                            <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs sm:text-sm font-mono">0</code>
                          </td>
                          <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">DRIFT approved and updated</td>
                          <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">User approved changes or <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--approve</code> used</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                            <code className="px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs sm:text-sm font-mono">1</code>
                          </td>
                          <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">DRIFT – Changes detected but not approved</td>
                          <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">CI validation failed</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                            <code className="px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs sm:text-sm font-mono">1</code>
                          </td>
                          <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">DRIFT – User declined update</td>
                          <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Local dev declined changes</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                            <code className="px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs sm:text-sm font-mono">1</code>
                          </td>
                          <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Error (file not found, invalid JSON, generation failed)</td>
                          <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Fatal error occurred</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong className="text-gray-900 dark:text-white">Key Points:</strong>
                    </p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 ml-4 list-disc space-y-1">
                      <li>Exit 0 = Success (no drift OR drift was approved/updated)</li>
                      <li>Exit 1 = Failure (drift not approved OR error)</li>
                      <li>This matches Jest snapshot behavior exactly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Delta Types Explained Section */}
          <AnimatedSection direction="up" delay={550}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Delta Types Explained
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-3 text-base sm:text-lg">
                    What is compared
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300 ml-4 list-disc">
                    <li><strong>Hash changes</strong> – component structure or logic changed</li>
                    <li><strong>Import changes</strong> – import dependencies added/removed or order changed</li>
                    <li><strong>Hook changes</strong> – React hooks usage changed</li>
                    <li><strong>Function changes</strong> – functions declared in the module added/removed</li>
                    <li><strong>Component changes</strong> – referenced React components changed</li>
                    <li><strong>Prop changes</strong> – component API surface changed</li>
                    <li><strong>Event/emit changes</strong> – event/callback interface changed</li>
                    <li><strong>Export changes</strong> – export type changed (e.g., from <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">export default</code> to <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">export const</code>)</li>
                  </ul>
                </div>
                <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-3 text-base sm:text-lg">
                    What is NOT compared
                  </h3>
                  <div className="p-4 bg-amber-50/50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      <strong>Styles</strong> – CSS classes, Tailwind utilities, inline styles, and other styling-related metadata are intentionally excluded. Compare Mode focuses strictly on structural and logical contract changes, not visual/presentation differences.
                    </p>
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
















