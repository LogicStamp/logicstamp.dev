import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MCP Profiles Guide | LogicStamp Context Documentation',
  description: 'Understanding LogicStamp Context profiles: llm-chat, llm-safe, and ci-strict.',
}

export default function MCPProfilesPage() {
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
                Profiles Guide
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                MCP Profiles Guide
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Preset configurations optimized for different use cases: llm-chat, llm-safe, and ci-strict.
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
                  What are Profiles?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Profiles are preset configurations that optimize LogicStamp Context for different use cases. Each profile sets specific parameters like dependency depth, code inclusion mode, and maximum nodes per bundle.
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Use the <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">profile</code> parameter in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_refresh_snapshot</code> to select a profile.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* llm-chat Profile */}
          <AnimatedSection direction="up" delay={200}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                llm-chat (Default)
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                Balanced mode optimized for AI chat interfaces. This is the default profile and recommended for most use cases.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 border-l-4 border-indigo-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Configuration</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li><strong>Depth:</strong> 1 (analyzes direct dependencies)</li>
                    <li><strong>Mode:</strong> header (contracts + JSDoc headers)</li>
                    <li><strong>Max nodes:</strong> 100 per bundle</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Best For</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li>General AI chat workflows</li>
                    <li>Code review and refactoring</li>
                    <li>Understanding component interfaces</li>
                    <li>Most common use cases</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Usage:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Call',
                        code: 'logicstamp_refresh_snapshot({ profile: "llm-chat" })',
                        copyText: 'logicstamp_refresh_snapshot({ profile: "llm-chat" })'
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* llm-safe Profile */}
          <AnimatedSection direction="up" delay={300}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                llm-safe
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                Conservative mode optimized for token-limited contexts. Use this when you need to minimize token usage.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 border-l-4 border-indigo-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Configuration</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li><strong>Depth:</strong> 1 (analyzes direct dependencies)</li>
                    <li><strong>Mode:</strong> header (contracts + JSDoc headers)</li>
                    <li><strong>Max nodes:</strong> 30 per bundle (reduced from 100)</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Best For</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li>Token-limited AI contexts</li>
                    <li>Large codebases where token count matters</li>
                    <li>When you need maximum token efficiency</li>
                    <li>Cost-sensitive workflows</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Usage:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Call',
                        code: 'logicstamp_refresh_snapshot({ profile: "llm-safe" })',
                        copyText: 'logicstamp_refresh_snapshot({ profile: "llm-safe" })'
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ci-strict Profile */}
          <AnimatedSection direction="up" delay={400}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                ci-strict
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                Strict validation mode optimized for CI/CD pipelines. Focuses on contract validation and dependency checking.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 border-l-4 border-indigo-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Configuration</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li><strong>Depth:</strong> 1 (analyzes direct dependencies)</li>
                    <li><strong>Mode:</strong> none (contracts only, no source code)</li>
                    <li><strong>Max nodes:</strong> 100 per bundle</li>
                    <li><strong>Strict validation:</strong> Enabled (fails on missing dependencies)</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Best For</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li>CI/CD pipelines</li>
                    <li>Contract validation</li>
                    <li>Dependency checking</li>
                    <li>Automated testing</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Usage:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Call',
                        code: 'logicstamp_refresh_snapshot({ profile: "ci-strict" })',
                        copyText: 'logicstamp_refresh_snapshot({ profile: "ci-strict" })'
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Comparison Table */}
          <AnimatedSection direction="up" delay={500}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Profile Comparison
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Profile</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Depth</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Mode</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Max Nodes</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-4">
                        <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">llm-chat</code>
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">1</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">header</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">100</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">General AI workflows (default)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-4">
                        <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">llm-safe</code>
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">1</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">header</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">30</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Token-limited contexts</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">ci-strict</code>
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">1</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">none</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">100</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">CI/CD validation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* Choosing a Profile */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Choosing a Profile
                </h2>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-400 ml-4">
                  <li><strong>Start with llm-chat</strong> - This is the default and works well for most use cases</li>
                  <li><strong>Use llm-safe</strong> - When you're hitting token limits or need maximum efficiency</li>
                  <li><strong>Use ci-strict</strong> - For CI/CD pipelines where you need strict validation</li>
                  <li><strong>You can override</strong> - Profile settings can be overridden with explicit parameters</li>
                </ul>
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
                      Learn More
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                      Explore style metadata, comparison workflows, and best practices.
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

