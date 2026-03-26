import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { UI_FRAMEWORK_DOCS, type UIFrameworkSlug } from '@/lib/docs/ui-framework-pages'

export const metadata: Metadata = {
  title: 'UI Frameworks | LogicStamp Context Documentation',
  description:
    'Learn how LogicStamp Context extracts style metadata from Tailwind CSS, Material UI, ShadCN/UI, Radix UI, Ant Design, Chakra UI, styled-components, CSS/SCSS, and Framer Motion.',
}

const UI_FRAMEWORK_ORDER: UIFrameworkSlug[] = [
  'tailwind',
  'material-ui',
  'shadcn',
  'radix',
  'antd',
  'chakra',
  'styled-components',
  'css-scss',
  'framer-motion',
]

const uiFrameworkPages = UI_FRAMEWORK_ORDER.map((slug) => ({
  title: UI_FRAMEWORK_DOCS[slug].title,
  href: `/docs/ui-frameworks/${slug}` as const,
  description: UI_FRAMEWORK_DOCS[slug].description,
}))

export default function UIFrameworksIndexPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              UI frameworks
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
              Style metadata for Tailwind, component libraries, CSS, and motion. Source docs live in{' '}
              <a
                href="https://github.com/LogicStamp/logicstamp-context/tree/main/docs/ui-frameworks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                logicstamp-context/docs/ui-frameworks
              </a>
              .
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <div className="relative mb-8 sm:mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Quick Start</h2>
              </div>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                Enable style in generated context with the <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded font-mono text-xs">style</code> command or{' '}
                <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded font-mono text-xs">stamp context --include-style</code>, then pick your UI stack below.
              </p>

              <Link
                href="/docs/cli/style"
                className="group relative flex items-start gap-4 p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/10 rounded-xl border border-indigo-200 dark:border-indigo-800 md:hover:shadow-lg transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">`style` command</h3>
                    <svg
                      className="w-5 h-5 text-indigo-600 dark:text-indigo-400 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Generate bundles that include layout, tokens, and utility-class metadata alongside component contracts.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={150}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Style extraction guides</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Per-framework notes on what LogicStamp captures and how it appears in context.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {uiFrameworkPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{page.title}</h3>
                    <svg
                      className="w-5 h-5 text-gray-400 md:group-hover:text-blue-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related documentation</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              MCP, core frameworks, and the rest of the CLI.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/mcp/style-metadata"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">MCP style metadata</h3>
                  <svg
                    className="w-5 h-5 text-gray-400 md:group-hover:text-blue-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Using style-aware bundles with the LogicStamp MCP server.
                </p>
              </Link>

              <Link
                href="/docs/frameworks"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Frameworks</h3>
                  <svg
                    className="w-5 h-5 text-gray-400 md:group-hover:text-blue-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  React, Next.js, Vue, Express, NestJS, and TypeScript app structure.
                </p>
              </Link>

              <Link
                href="/docs/cli"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CLI documentation hub</h3>
                  <svg
                    className="w-5 h-5 text-gray-400 md:group-hover:text-blue-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All commands, including <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">context</code>, watch mode, and compare.
                </p>
              </Link>

              <Link
                href="/docs/guides"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Guides</h3>
                  <svg
                    className="w-5 h-5 text-gray-400 md:group-hover:text-blue-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Usage, LLM context format, monorepos, and best practices.
                </p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <ReadyToGetStartedCard
          variant="purple"
          description="Turn on style metadata and feed richer UI context to your LLM or MCP workflow."
          primaryAction={{
            href: '/docs/cli/style',
            label: '`style` command',
          }}
          secondaryAction={{
            href: '/docs/mcp/style-metadata',
            label: 'MCP style metadata',
          }}
          delay={250}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
