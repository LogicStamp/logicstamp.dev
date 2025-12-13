import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MCP Usage Examples & Workflows | LogicStamp Context Documentation',
  description: 'Common workflows and usage examples for LogicStamp Context MCP server.',
}

export default function MCPUsagePage() {
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
                Usage Examples
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                MCP Usage Examples & Workflows
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Common workflows and real-world examples for using LogicStamp Context MCP tools effectively.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Core Workflow */}
          <AnimatedSection direction="up" delay={100}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Core Workflow
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                Always follow this workflow when working with a new project:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-semibold">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Start with refresh_snapshot</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        This scans the project and generates all context files. Creates <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">context_main.json</code> and per-folder <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">context.json</code> files.
                      </p>
                      <TabbedCodeBlock
                        tabs={[
                          {
                            label: 'Call',
                            code: 'logicstamp_refresh_snapshot()',
                            copyText: 'logicstamp_refresh_snapshot()'
                          }
                        ]}
                      />
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                        Returns a <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">snapshotId</code> you'll use for subsequent calls.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-semibold">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Discover bundles with list_bundles</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Lists all available bundles with their locations, component names, file paths, and token estimates.
                      </p>
                      <TabbedCodeBlock
                        tabs={[
                          {
                            label: 'Call',
                            code: 'logicstamp_list_bundles({ snapshotId: "snap_123" })',
                            copyText: 'logicstamp_list_bundles({ snapshotId: "snap_123" })'
                          }
                        ]}
                      />
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                        Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">folderPrefix</code> to filter by directory if needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-semibold">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Read bundles with read_bundle</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        This is where the valuable data is. Pass the <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">bundlePath</code> from <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">list_bundles</code> output.
                      </p>
                      <TabbedCodeBlock
                        tabs={[
                          {
                            label: 'Call',
                            code: 'logicstamp_read_bundle({ snapshotId: "snap_123", bundlePath: "src/components/context.json" })',
                            copyText: 'logicstamp_read_bundle({ snapshotId: "snap_123", bundlePath: "src/components/context.json" })'
                          }
                        ]}
                      />
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                        Returns complete component contracts with dependency graphs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-semibold">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Only then read raw files (if needed)</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Use bundles first to understand structure. Drop to raw <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">.ts/.tsx</code> files only when bundles don't have enough detail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Example 1: Understanding a Component */}
          <AnimatedSection direction="up" delay={200}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Example 1: Understanding a Component
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                When you need to understand how a specific component works:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">USER:</p>
                  <p className="text-sm text-gray-900 dark:text-gray-100">"Analyze the Button component in my project"</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI → MCP:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Step 1: Refresh',
                        code: 'logicstamp_refresh_snapshot()',
                        copyText: 'logicstamp_refresh_snapshot()'
                      }
                    ]}
                  />
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI → MCP:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Step 2: List bundles',
                        code: 'logicstamp_list_bundles({ snapshotId: "snap_123", folderPrefix: "src/components" })',
                        copyText: 'logicstamp_list_bundles({ snapshotId: "snap_123", folderPrefix: "src/components" })'
                      }
                    ]}
                  />
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI → MCP:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Step 3: Read bundle',
                        code: 'logicstamp_read_bundle({ snapshotId: "snap_123", bundlePath: "src/components/context.json", rootComponent: "Button" })',
                        copyText: 'logicstamp_read_bundle({ snapshotId: "snap_123", bundlePath: "src/components/context.json", rootComponent: "Button" })'
                      }
                    ]}
                  />
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Provides detailed analysis of Button's props, state, hooks, dependencies, and behavior patterns.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Example 2: Analyzing with Style Metadata */}
          <AnimatedSection direction="up" delay={300}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Example 2: Analyzing with Style Metadata
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                When you need to understand visual design and styling:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">USER:</p>
                  <p className="text-sm text-gray-900 dark:text-gray-100">"Analyze my components with style information"</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI → MCP:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Call',
                        code: 'logicstamp_refresh_snapshot({ includeStyle: true })',
                        copyText: 'logicstamp_refresh_snapshot({ includeStyle: true })'
                      }
                    ]}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Response includes <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">includeStyle: true</code> flag.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI → MCP:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Read bundles',
                        code: 'logicstamp_read_bundle({ snapshotId: "snap_123", bundlePath: "src/components/context.json" })',
                        copyText: 'logicstamp_read_bundle({ snapshotId: "snap_123", bundlePath: "src/components/context.json" })'
                      }
                    ]}
                  />
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Provides analysis including component structure (props, state, hooks), visual design (colors, spacing, typography), layout patterns (flex vs grid, responsive breakpoints), and animation usage.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Example 3: Safe Code Modification */}
          <AnimatedSection direction="up" delay={400}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Example 3: Safe Code Modification Workflow
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                Complete workflow for safely modifying code with verification:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">1. USER:</p>
                  <p className="text-sm text-gray-900 dark:text-gray-100">"Add a --force flag to the clean command"</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">2-4. AI → MCP:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    AI calls <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_refresh_snapshot()</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_list_bundles()</code>, and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_read_bundle()</code> to understand current implementation.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">5. AI:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Understands current implementation: cleanCommand signature, existing flags and options, file structure.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">6. AI → IDE:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Edits <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">src/cli/commands/clean.ts</code> - Adds --force flag handling.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">7. AI → MCP:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Verify changes',
                        code: 'logicstamp_compare_snapshot({ forceRegenerate: true })',
                        copyText: 'logicstamp_compare_snapshot({ forceRegenerate: true })'
                      }
                    ]}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Response shows: Modified files, added functions, semantic hash changes, token delta.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">8. AI → USER:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Presents summary of changes and asks for approval: "Here's what changed: Modified: src/cli/commands/clean.ts, Added function: handleForceFlag, Semantic hash changed (expected), Token delta: +45. This matches the expected changes. Apply? (yes/no)"
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Key Principles */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Principles
                </h2>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-400 ml-4">
                  <li><strong>Prefer bundles over raw code</strong> - LogicStamp bundles are pre-parsed, structured summaries optimized for AI consumption</li>
                  <li><strong>Always start with refresh_snapshot</strong> - Don't assume context files exist</li>
                  <li><strong>Use list_bundles before read_bundle</strong> - Discover what's available first</li>
                  <li><strong>Check token estimates</strong> - Be aware of context size, especially for large projects</li>
                  <li><strong>Verify changes with compare_snapshot</strong> - Always verify modifications before approval</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Next Steps */}
          <AnimatedSection direction="up" delay={600}>
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
                      Ready to Learn More?
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                      Explore best practices, profiles, style metadata, and comparison guides to get the most out of LogicStamp MCP.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                      <Link
                        href="/docs/mcp/best-practices"
                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                      >
                        Best Practices
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <Link
                        href="/docs/mcp/reference"
                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                      >
                        MCP Reference
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

