import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'

export const metadata: Metadata = {
  title: '`stamp context validate` Command | LogicStamp Context Documentation',
  description: 'Verify that a generated LogicStamp context file matches the expected schema and structure.',
}

export default function ValidateCommandPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50/30 to-rose-50/20 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-rose-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Validation Command
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">stamp context validate</code> Command
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Verify that generated LogicStamp context files match the expected schema and structure. Supports both multi-file validation (all folders) and single-file validation.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Syntax Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Syntax
              </h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Syntax',
                    code: 'stamp context validate [file]',
                    copyText: 'stamp context validate [file]'
                  }
                ]}
              />
              <div className="mt-4 space-y-3">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong className="text-gray-900 dark:text-white">[file]</strong> – Optional path to a context file created by the <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context</code> command.
                  </p>
                  <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li><strong className="text-gray-900 dark:text-white">With no arguments:</strong> Automatically validates all context files using <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context_main.json</code> (multi-file mode). Falls back to <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context.json</code> if <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context_main.json</code> doesn't exist.</li>
                    <li><strong className="text-gray-900 dark:text-white">With a file argument:</strong> Validates that specific file (single-file mode). Can be a folder context file or the main index file.</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* What it checks Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                What it checks
              </h2>
              
              {/* Multi-File Mode */}
              <div className="mb-6">
                <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800 mb-4">
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-3 text-base sm:text-lg flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                    Multi-File Mode (default with no arguments)
                  </h3>
                  <p className="text-sm text-green-800 dark:text-green-300 mb-3">
                    When <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">context_main.json</code> exists, validates <strong>all</strong> context files in your project:
                  </p>
                  <ul className="space-y-2 text-sm text-green-800 dark:text-green-300 ml-8 list-disc">
                    <li>Reads <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">context_main.json</code> to discover all folder context files</li>
                    <li>Validates each folder's <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">context.json</code> file</li>
                    <li>Reports comprehensive summary across all folders:
                      <ul className="ml-4 mt-1 space-y-1 list-disc">
                        <li>Total valid/invalid folders</li>
                        <li>Total errors and warnings across all files</li>
                        <li>Total nodes and edges across all files</li>
                      </ul>
                    </li>
                    <li>Shows detailed validation results for each folder</li>
                    <li>Exit code reflects overall validation status (fails if any folder is invalid)</li>
                  </ul>
                </div>
              </div>

              {/* Single-File Mode */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-3 text-base sm:text-lg">
                    2. Single-File Mode: Folder Context Files
                  </h3>
                  <p className="text-xs text-purple-700 dark:text-purple-400 mb-2">For Folder Context Files (<code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">context.json</code>)</p>
                  <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-300 ml-4 list-disc">
                    <li>File exists and parses as JSON.</li>
                    <li>Top-level value is an array of <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">LogicStampBundle</code> objects.</li>
                    <li>Each bundle has the required fields (<code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">type</code>, <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">schemaVersion</code>, <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">entryId</code>, <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">graph</code>, <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">meta</code>, etc.).</li>
                    <li>Contracts stored within nodes are <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">UIFContract</code> with schema version <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">0.3</code>.</li>
                    <li>Warns when bundle hashes or schema versions diverge from expected values.</li>
                  </ul>
                </div>
                <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-3 text-base sm:text-lg">
                    2. Single-File Mode: Main Index File
                  </h3>
                  <p className="text-xs text-blue-700 dark:text-blue-400 mb-2">For Main Index File (<code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">context_main.json</code>)</p>
                  <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300 ml-4 list-disc">
                    <li>File exists and parses as JSON.</li>
                    <li>Structure matches <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">LogicStampIndex</code> schema.</li>
                    <li>Contains required fields: <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">type</code>, <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">schemaVersion</code>, <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">projectRoot</code>, <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">summary</code>, <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">folders</code>, <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">meta</code>.</li>
                    <li>Each folder entry has valid structure with <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">path</code>, <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">contextFile</code>, <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">bundles</code>, <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">components</code>, etc.</li>
                    <li>Warns when schema versions diverge from expected values.</li>
                  </ul>
                  <div className="mt-3 p-2 bg-amber-50 dark:bg-amber-950/20 rounded border border-amber-200 dark:border-amber-800">
                    <p className="text-xs text-amber-800 dark:text-amber-300">
                      <strong>Note:</strong> Validating only <code className="px-1 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">context_main.json</code> (single-file mode) does not validate the folder context files themselves. Use multi-file mode (no arguments) to validate all files.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Exit Codes Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Exit Codes
                  </h2>
                </div>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Code</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-green-50/30 dark:bg-green-950/20">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs sm:text-sm font-mono">0</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">All files are structurally valid (warnings may be present).</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-red-50/30 dark:bg-red-950/20">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs sm:text-sm font-mono">1</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Validation failed (schema errors, unreadable file, invalid JSON, or any folder is invalid in multi-file mode).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Examples Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Examples
              </h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">Multi-File Mode (validates all context files)</h3>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Multi-File Mode',
                      code: `# Validate all context files using context_main.json
stamp context validate`,
                      copyText: `# Validate all context files using context_main.json
stamp context validate`
                    }
                  ]}
                />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">Single-File Mode (validates a specific file)</h3>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Single-File Mode',
                      code: `# Validate a specific folder's context file
stamp context validate src/components/context.json

# Validate the main index file only (doesn't validate folder files)
stamp context validate context_main.json

# Validate custom named bundle
stamp context validate artifacts/review-context.json`,
                      copyText: `# Validate a specific folder's context file
stamp context validate src/components/context.json

# Validate the main index file only (doesn't validate folder files)
stamp context validate context_main.json

# Validate custom named bundle
stamp context validate artifacts/review-context.json`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* CI/CD Usage Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    CI/CD Usage
                  </h2>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Pair with the <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context</code> command to block merges when context files become invalid.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Use multi-file mode (no arguments) to validate <strong>all</strong> context files in one command.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Combine with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">npm run</code> scripts or Git hooks for automated checks.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Use the exit code to fail pipelines and prompt regeneration of context files.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Multi-file mode ensures comprehensive validation across the entire project.</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Example CI validation (recommended):</h4>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'CI Example (Recommended)',
                        code: `# Validate all context files in one command (recommended)
stamp context validate

# This automatically validates:
# - context_main.json structure
# - All folder context.json files referenced in the index
# - Reports comprehensive summary across all files
# - Fails if ANY file is invalid`,
                        copyText: `# Validate all context files in one command (recommended)
stamp context validate`
                      }
                    ]}
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Legacy single-file approach (not recommended):</h4>
                  <code className="block text-xs text-gray-700 dark:text-gray-300 p-2 bg-gray-100 dark:bg-gray-800 rounded font-mono">
                    # Manual validation of individual files (old approach)<br/>
                    stamp context validate context_main.json &amp;&amp; \<br/>
                    &nbsp;&nbsp;stamp context validate context.json &amp;&amp; \<br/>
                    &nbsp;&nbsp;stamp context validate src/components/context.json
                  </code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    The multi-file mode is preferred because it automatically discovers all context files from the index, validates everything in one command, provides a comprehensive summary, and detects if any folder context files are missing or corrupted.
                  </p>
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


