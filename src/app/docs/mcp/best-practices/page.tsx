import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MCP Best Practices | LogicStamp Context Documentation',
  description: 'Best practices for using LogicStamp Context MCP server effectively.',
}

export default function MCPBestPracticesPage() {
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
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Best Practices
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                MCP Best Practices
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Learn how to use LogicStamp Context MCP tools effectively and efficiently.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Core Workflow Practices */}
          <AnimatedSection direction="up" delay={100}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Core Workflow Practices
              </h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Always start with refresh_snapshot</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don't assume context files exist. Always call <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded font-mono text-xs">logicstamp_refresh_snapshot</code> first to generate fresh context files and get a snapshotId.
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Read context_main.json first</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Understand project structure before diving into bundles. Use <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded font-mono text-xs">logicstamp_read_bundle</code> with <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded font-mono text-xs">bundlePath: "context_main.json"</code> to get the overview.
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Prefer bundles over raw code</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use bundles for structure, raw code for implementation details. LogicStamp bundles are pre-parsed, structured summaries optimized for AI consumption.
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Use list_bundles before read_bundle</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Discover what's available first. Use <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded font-mono text-xs">folderPrefix</code> to filter bundles by directory path.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Token Optimization */}
          <AnimatedSection direction="up" delay={200}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Token Optimization
              </h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Check token estimates</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Be aware of context size, especially for large projects. Token estimates are provided in snapshot summaries and bundle listings.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Use <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">logicstamp_compare_modes</code> to see exact token costs for different modes before committing.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Use appropriate mode</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Choose the right code inclusion mode for your use case:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li><code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">header</code> (default) - Recommended for most AI interactions (~70% savings)</li>
                    <li><code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">none</code> - Maximum compression for CI/CD (~79% savings)</li>
                    <li><code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">full</code> - Only when you need complete source code</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Style metadata adds overhead</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Only use <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">includeStyle: true</code> when you need visual/design information. Style metadata adds ~15-20% token overhead.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Snapshot Management */}
          <AnimatedSection direction="up" delay={300}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Snapshot Management
              </h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Save snapshotId</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    After calling <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded font-mono text-xs">logicstamp_refresh_snapshot</code>, save the returned <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded font-mono text-xs">snapshotId</code>. You'll need it for subsequent tool calls.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Snapshots expire after TTL</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Snapshots are stored in memory and expire after a TTL period. If you get "Snapshot not found" errors, call <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded font-mono text-xs">logicstamp_refresh_snapshot</code> again to create a new snapshot.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Refresh after code changes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    If you've made code changes, call <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded font-mono text-xs">logicstamp_refresh_snapshot</code> again to regenerate context files, or use <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded font-mono text-xs">forceRegenerate: true</code> in <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded font-mono text-xs">logicstamp_compare_snapshot</code>.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Change Verification */}
          <AnimatedSection direction="up" delay={400}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Change Verification
              </h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Always verify changes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    After making edits, use <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded font-mono text-xs">logicstamp_compare_snapshot</code> to verify what changed:
                  </p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Verify',
                        code: 'logicstamp_compare_snapshot({ forceRegenerate: true })',
                        copyText: 'logicstamp_compare_snapshot({ forceRegenerate: true })'
                      }
                    ]}
                  />
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Review change details</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Check the <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded font-mono text-xs">details</code> field in comparison results to understand what changed: props added/removed, functions changed, imports modified, etc.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Check token deltas</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Monitor token count changes. Positive deltas mean more tokens (added code/components), negative means fewer (removed code/components).
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Understanding Missing Dependencies */}
          <AnimatedSection direction="up" delay={500}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Understanding Missing Dependencies
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Bundles include a <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">meta.missing[]</code> field with unresolved dependencies:
                </p>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expected (safe to ignore):</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">"external package"</code> - Third-party npm modules (React, lodash, etc.)</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Actionable:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li><code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded font-mono text-xs">"file not found"</code> - Broken imports, need fixing</li>
                    <li><code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded font-mono text-xs">"outside scan path"</code> - Consider expanding scan directory</li>
                    <li><code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded font-mono text-xs">"max depth exceeded"</code> - Increase depth if needed</li>
                    <li><code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded font-mono text-xs">"circular dependency"</code> - Review import structure</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Token Efficiency */}
          <AnimatedSection direction="up" delay={600}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Token Efficiency Notes
              </h2>
              
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 border-l-4 border-indigo-500 rounded-r-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  LogicStamp bundles are <strong>intentionally compressed</strong>. Missing micro-details is normal and expected.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                  <li><code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded font-mono text-xs">header</code> mode: ~70% savings vs raw source</li>
                  <li><code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded font-mono text-xs">none</code> mode: ~79% savings vs full context</li>
                  <li>Style metadata adds ~15-20% overhead</li>
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Use <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded font-mono text-xs">logicstamp_compare_modes</code> to see exact token costs for your project.
                </p>
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
                      Explore More Guides
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                      Learn about profiles, style metadata, comparison workflows, and troubleshooting.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                      <Link
                        href="/docs/mcp/profiles"
                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                      >
                        Profiles Guide
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <Link
                        href="/docs/mcp/style-metadata"
                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                      >
                        Style Metadata
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

