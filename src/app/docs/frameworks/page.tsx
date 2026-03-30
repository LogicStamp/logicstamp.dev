import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { FRAMEWORK_DOCS, type FrameworkSlug } from '@/lib/docs/framework-pages'

export const metadata: Metadata = {
  title: 'Frameworks | LogicStamp Context Documentation',
  description: 'Learn how LogicStamp Context works with TypeScript, React, Next.js, Vue, Express.js, NestJS, and monorepos.',
}

const FRAMEWORK_ORDER: FrameworkSlug[] = ['typescript', 'react', 'nextjs', 'vue', 'express', 'nestjs']

const frameworkPages = [
  ...FRAMEWORK_ORDER.map((slug) => ({
    title: FRAMEWORK_DOCS[slug].title,
    href: `/docs/frameworks/${slug}` as const,
    description: FRAMEWORK_DOCS[slug].description,
  })),
  {
    title: 'Monorepo Support',
    href: '/docs/guides/monorepo',
    description:
      'Work with multi-package repositories where frontend, backend, and shared packages live together.',
  },
]

export default function FrameworksIndexPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              Frameworks
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
              How LogicStamp analyzes TypeScript, React, Next.js, Vue, Express.js, and NestJS. Guides are synced from{' '}
              <a
                href="https://github.com/LogicStamp/logicstamp-context/tree/main/docs/frameworks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                logicstamp-context/docs/frameworks
              </a>
              .
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <div className="relative mb-8 sm:mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-theme-primary border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Quick Start</h2>
              </div>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                New to LogicStamp? Install the CLI and generate your first context bundle, then open the framework guide that matches your stack.
              </p>

              <Link
                href="/docs/getting-started"
                className="group relative flex items-start gap-4 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800 md:hover:shadow-lg transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Getting Started</h3>
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Install the CLI with <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">stamp init</code>, then run{' '}
                    <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">stamp context</code> for your first AI-ready bundle.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={150}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Framework guides</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Deep dives for each supported framework and for monorepo layouts.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {frameworkPages.map((page) => (
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
              Style extraction, CLI commands, and broader guides.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/ui-frameworks"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">UI frameworks</h3>
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
                  Tailwind, MUI, Radix, styled-components, and other UI stacks—style metadata in context.
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
                  Commands, watch mode, compare, validate, and maintenance workflows.
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
                  Usage walkthroughs, LLM context format, and best practices.
                </p>
              </Link>

              <Link
                href="/docs/reference"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Reference</h3>
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
                  Schema, UIF contracts, hashes, stampignore, and limitations.
                </p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <ReadyToGetStartedCard
          description="Initialize your project and generate context tailored to your framework."
          primaryAction={{
            href: '/docs/getting-started',
            label: 'Getting Started',
          }}
          secondaryAction={{
            href: '/docs/cli/context',
            label: '`context` command',
          }}
          delay={250}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
