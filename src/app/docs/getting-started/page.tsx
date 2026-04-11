import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import DocsLayout from '@/components/docs/DocsLayout'
import CopyButton from '@/components/ui/CopyButton'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { docsBodyTextClass, docsMutedTextClass } from '@/lib/docs/text-styles'

export const metadata: Metadata = {
  title: 'Getting Started | LogicStamp Context',
  description: 'Get started with LogicStamp Context in 30 seconds. Compile AI-ready context from your TypeScript codebase.',
}

export default function GettingStartedPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero - Lead with the simplest path */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              Getting Started
            </h1>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl ${docsBodyTextClass} mb-8 max-w-3xl leading-relaxed`}>
              Compile your TypeScript codebase into deterministic architectural contracts for AI workflows.
            </p>
          </div>
        </AnimatedSection>

        {/* Prerequisites */}
        <AnimatedSection direction="up" delay={100}>
          <div className="mb-12">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-theme-primary">
              <div className="flex items-baseline gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Prerequisites
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: "🟢", title: "Node.js >= 20", desc: "Latest LTS recommended" },
                  { icon: "⚛️", title: "TypeScript", desc: "Your project codebase" },
                  { icon: "💻", title: "Terminal", desc: "Basic CLI knowledge" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</p>
                      <p className="text-xs text-gray-700 dark:text-gray-300 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Try it now - ONE command */}
        <AnimatedSection direction="up" delay={200}>
          <div className="mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6">
              <p className={`text-sm ${docsBodyTextClass} mb-3`}>Try it now (no install required):</p>
              <div className="relative">
                <CopyButton text="npx -y logicstamp-context@latest context" className="absolute top-2 right-2" />
                <code className="block text-gray-900 dark:text-gray-100 font-mono text-sm p-4 bg-theme-primary border border-gray-200 dark:border-gray-700 rounded-lg">
                  npx -y logicstamp-context@latest context
                </code>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300 mt-3">
                Scans <code className="px-1 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-gray-900 dark:text-gray-100">.ts</code> /{' '}
                <code className="px-1 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-gray-900 dark:text-gray-100">.tsx</code> only, writes per-folder{' '}
                <code className="px-1 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-gray-900 dark:text-gray-100">context.json</code> and root{' '}
                <code className="px-1 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-gray-900 dark:text-gray-100">context_main.json</code>.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* What happened? */}
        <AnimatedSection direction="up" delay={300}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">What happened?</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              LogicStamp compiled your TypeScript files into structured context bundles:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">context.json</code> files in each folder with component contracts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">context_main.json</code> in your project root with an overview</span>
              </li>
            </ul>
              <p className={`text-sm ${docsMutedTextClass}`}>
              These files describe your components' props, hooks, dependencies, and relationships—optimized for AI consumption.
            </p>
          </div>
        </AnimatedSection>

        {/* Next Steps - Progressive Disclosure */}
        <AnimatedSection direction="up" delay={400}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Next Steps</h2>
            
            <div className="space-y-6">
              {/* Option 1: Install for regular use */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  1. Install for regular use
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  Install globally to use the <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">stamp</code> command:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'npm',
                      code: 'npm install -g logicstamp-context',
                      copyText: 'npm install -g logicstamp-context'
                    },
                    {
                      label: 'yarn',
                      code: 'yarn global add logicstamp-context',
                      copyText: 'yarn global add logicstamp-context'
                    },
                    {
                      label: 'pnpm',
                      code: 'pnpm add -g logicstamp-context',
                      copyText: 'pnpm add -g logicstamp-context'
                    }
                  ]}
                />
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-4 mb-3">
                  Initialize your project (recommended):
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Initialize',
                      code: 'stamp init',
                      copyText: 'stamp init'
                    },
                    {
                      label: 'CI-Friendly',
                      code: 'stamp init --yes',
                      copyText: 'stamp init --yes'
                    }
                  ]}
                />
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 mb-3">
                  Adds <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">.gitignore</code> entries for{' '}
                  <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">context.json</code>,{' '}
                  <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">context_*.json</code>,{' '}
                  <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">context.toon</code>,{' '}
                  <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">*.uif.json</code>,{' '}
                  <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">.logicstamp/</code>, and{' '}
                  <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">stamp_security_report.json</code>; runs a security scan; writes{' '}
                  <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">LLM_CONTEXT.md</code> and{' '}
                  <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">.logicstamp/config.json</code>. You can skip init and run{' '}
                  <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">stamp context</code> with safe defaults.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-4 mb-3">
                  Then compile context:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Basic',
                      code: 'stamp context',
                      copyText: 'stamp context'
                    },
                    {
                      label: 'With Style',
                      code: 'stamp context style',
                      copyText: 'stamp context style'
                    }
                  ]}
                />
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                  <strong>With Style</strong> extracts Tailwind CSS classes, SCSS modules, Material UI themes, styled-components, and framer-motion animations.
                </p>
              </div>

              {/* Option 2: Use with AI assistants */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  2. Use with AI assistants (MCP)
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  Install the MCP server to give Claude Desktop, Claude Code, or Cursor direct access to your codebase:
                </p>
                <div className="relative mb-4">
                  <CopyButton text="npm install -g logicstamp-mcp" className="absolute top-2 right-2" />
                  <code className="block text-gray-900 dark:text-gray-100 font-mono text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    npm install -g logicstamp-mcp
                  </code>
                </div>
                <p className={`text-sm ${docsMutedTextClass}`}>
                  <Link href="/docs/mcp/getting-started" className="text-blue-600 dark:text-blue-400 hover:underline">
                    See MCP setup guide →
                  </Link>
                </p>
              </div>

              {/* Option 3: Watch mode */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  3. Keep context fresh (Watch Mode)
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  Automatically regenerate context as you code:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Basic Watch',
                      code: 'stamp context --watch',
                      copyText: 'stamp context --watch'
                    },
                    {
                      label: 'Watch with Style',
                      code: 'stamp context style --watch',
                      copyText: 'stamp context style --watch'
                    },
                    {
                      label: 'Strict Watch',
                      code: 'stamp context --strict-watch',
                      copyText: 'stamp context --strict-watch'
                    }
                  ]}
                />
                <p className={`text-sm ${docsMutedTextClass} mt-4`}>
                  <strong>Strict Watch</strong> detects breaking changes (removed props/events) and tracks violations during refactors.{' '}
                  <Link href="/docs/cli/watch-mode" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Learn more about watch mode →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Learn More */}
        <AnimatedSection direction="up" delay={500}>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Learn More</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/what-is-logicstamp"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">What is LogicStamp? →</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Understand the problem it solves</p>
              </Link>
              <Link
                href="/docs/cli/getting-started"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-green-500 dark:md:hover:border-green-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">CLI Guide →</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Complete CLI documentation</p>
              </Link>
              <Link
                href="/docs/mcp/getting-started"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-purple-500 dark:md:hover:border-purple-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">MCP Guide →</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">MCP server setup and configuration</p>
              </Link>
              <Link
                href="/docs/guides/best-practices"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Best Practices →</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Tips for using LogicStamp effectively</p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <ReadyToGetStartedCard
          description="Explore the complete CLI documentation or learn more about what LogicStamp does."
          primaryAction={{
            href: '/docs/cli/getting-started',
            label: 'CLI Documentation',
          }}
          secondaryAction={{
            href: '/docs/what-is-logicstamp',
            label: 'What is LogicStamp?',
          }}
          delay={600}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
