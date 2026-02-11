import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import DocsLayout from '@/components/docs/DocsLayout'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'

export const metadata: Metadata = {
  title: 'CLI Getting Started | LogicStamp Context',
  description: 'Install LogicStamp Context CLI and get up and running in minutes.',
}

export default function QuickStartPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              CLI Getting Started
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
              Install LogicStamp Context CLI and generate AI-ready context for your TypeScript projects.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Quick start</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Global install</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">CLI Tool</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Prerequisites */}
        <AnimatedSection direction="up" delay={100}>
          <div className="mb-12">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
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
                  { icon: "🟢", title: "Node.js >= 18.18.0", desc: "Latest LTS recommended" },
                  { icon: "⚛️", title: "TypeScript", desc: "Your project codebase" },
                  { icon: "💻", title: "Terminal", desc: "Basic CLI knowledge" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Installation */}
        <AnimatedSection direction="up" delay={200}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Install LogicStamp Context</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
              Install the CLI globally to use the <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">stamp</code> command from anywhere on your system.
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
                },
                {
                  label: 'Verify',
                  code: 'stamp --version',
                  copyText: 'stamp --version'
                }
              ]}
            />
          </div>
        </AnimatedSection>

        {/* Initialize (Optional) */}
        <AnimatedSection direction="up" delay={300}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Initialize Your Project
              <span className="ml-2 text-sm font-normal px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">Optional</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
              Set up <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">.gitignore</code> patterns and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">LLM_CONTEXT.md</code>. If you skip this step, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">stamp context</code> uses safe defaults (CI-friendly, never prompts).
            </p>
            
            <div className="bg-amber-50/50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4 mb-4 rounded-r-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-amber-900 dark:text-amber-200">🔒 Security:</span> By default, <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">stamp init</code> runs a security scan to detect secrets in your JS/TS/JSON files. Use <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">stamp ignore &lt;file&gt;</code> to exclude files with detected secrets.
              </p>
            </div>

            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Initialize',
                  code: 'cd your-react-project\nstamp init',
                  copyText: 'cd your-react-project\nstamp init'
                },
                {
                  label: 'CI-Friendly (No Prompts)',
                  code: 'cd your-react-project\nstamp init --yes',
                  copyText: 'cd your-react-project\nstamp init --yes'
                },
                {
                  label: 'Skip Security Scan',
                  code: 'cd your-react-project\nstamp init --no-secure',
                  copyText: 'cd your-react-project\nstamp init --no-secure'
                },
                {
                  label: 'Skip & Use Defaults',
                  code: 'cd your-react-project\nstamp context',
                  copyText: 'cd your-react-project\nstamp context'
                }
              ]}
            />
          </div>
        </AnimatedSection>

        {/* Generate Context */}
        <AnimatedSection direction="up" delay={400}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Generate AI Context</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
              Run the context generator to analyze your codebase and create structured bundles optimized for AI assistants.
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Generate',
                  code: 'stamp context',
                  copyText: 'stamp context'
                },
                {
                  label: 'With Style',
                  code: 'stamp context style',
                  copyText: 'stamp context style'
                },
                {
                  label: 'Preview First',
                  code: 'stamp context --dry-run --stats',
                  copyText: 'stamp context --dry-run --stats'
                }
              ]}
            />
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
              <strong>With Style</strong> extracts Tailwind CSS classes, SCSS modules, Material UI themes, styled-components, and framer-motion animations.
            </p>
          </div>
        </AnimatedSection>

        {/* What You Get */}
        <AnimatedSection direction="up" delay={500}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">What You Get</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
              LogicStamp generates structured context files in your project:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">context_main.json</code> in your project root with an overview</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">context.json</code> files in each folder with component contracts</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              These files describe your components' props, hooks, dependencies, and relationships—optimized for AI consumption.
            </p>
          </div>
        </AnimatedSection>

        {/* Next Steps */}
        <AnimatedSection direction="up" delay={600}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Next Steps</h2>
            
            <div className="space-y-6">
              {/* Watch Mode */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Keep Context Fresh (Watch Mode)
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  Automatically regenerate context as you code:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Watch',
                      code: 'stamp context --watch',
                      copyText: 'stamp context --watch'
                    },
                    {
                      label: 'Watch with Style',
                      code: 'stamp context style --watch',
                      copyText: 'stamp context style --watch'
                    }
                  ]}
                />
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                  <Link href="/docs/logicstamp-context/watch-mode" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Learn more about watch mode →
                  </Link>
                </p>
              </div>

              {/* Advanced Options */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Advanced Options
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  Customize output and optimize token usage:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Compare Modes',
                      code: 'stamp context --compare-modes',
                      copyText: 'stamp context --compare-modes'
                    },
                    {
                      label: 'Minimal Context',
                      code: 'stamp context --include-code none',
                      copyText: 'stamp context --include-code none'
                    },
                    {
                      label: 'Custom Output',
                      code: 'stamp context --output ./ai-context',
                      copyText: 'stamp context --output ./ai-context'
                    }
                  ]}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Learn More */}
        <AnimatedSection direction="up" delay={700}>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Learn More</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/logicstamp-context/commands"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">CLI Commands →</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete command reference</p>
              </Link>
              <Link
                href="/docs/getting-started"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Main Getting Started →</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Quick start guide</p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <ReadyToGetStartedCard
          variant="green"
          description="Explore the complete command reference or learn about advanced features."
          primaryAction={{
            href: '/docs/logicstamp-context/commands',
            label: 'Command Reference',
          }}
          secondaryAction={{
            href: '/docs/guides',
            label: 'Guides & Playbooks',
          }}
          delay={700}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
