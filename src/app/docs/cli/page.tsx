import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'

export const metadata: Metadata = {
  title: 'LogicStamp Context CLI | Documentation',
  description: 'Complete documentation for LogicStamp Context CLI - commands, usage examples, token optimization, drift detection, and schema reference.',
}

export default function LogicStampContextDocsPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              LogicStamp Context CLI
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
              Complete documentation for LogicStamp Context CLI - commands, usage examples, token optimization, drift detection, and schema reference.
            </p>
          </div>
        </AnimatedSection>

        {/* Getting Started Card */}
        <AnimatedSection direction="up" delay={100}>
          <div className="relative mb-8 sm:mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-theme-primary border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Getting Started
                </h2>
              </div>
              
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                Initialize LogicStamp in your project and compile your first context bundle.
              </p>

              <Link
                href="/docs/cli/init"
                className="group relative flex items-start gap-4 p-4 sm:p-6 bg-gradient-to-br from-green-50 to-indigo-50 dark:from-green-950/20 dark:to-indigo-950/10 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      `init` Command
                    </h3>
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Initialize LogicStamp in your project by setting up <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded font-mono text-xs">.gitignore</code> patterns and <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded font-mono text-xs">LLM_CONTEXT.md</code>.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Commands Section */}
        <AnimatedSection direction="up" delay={150}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Core Commands
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Essential commands for compiling and managing AI-ready context bundles.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/cli/context"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    `context` Command
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Compile AI-ready context bundles from your TypeScript codebase. The primary command for context compilation.
                </p>
              </Link>

              <Link
                href="/docs/cli/style"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    `style` Command
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Generate context bundles with style metadata included. Extract visual and layout information from React components.
                </p>
              </Link>

              <Link
                href="/docs/cli/watch-mode"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Watch Mode
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Incremental rebuilds with change detection. Automatically regenerate context when files change.
                </p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Analysis & Validation Section */}
        <AnimatedSection direction="up" delay={200}>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Analysis & Validation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Commands for detecting changes, validating context files, and comparing snapshots.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/cli/compare"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    `compare` Command
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Compare all context files to detect drift across your project. Supports git baseline mode (v0.7.2) for CI/CD validation against git refs. Identify changes in components, props, and dependencies.
                </p>
              </Link>

              <Link
                href="/docs/cli/compare-modes"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Compare Modes
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Understand token cost differences across context generation modes (none, header, header+style, full).
                </p>
              </Link>

              <Link
                href="/docs/cli/validate"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    `validate` Command
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Validate generated context files before sharing or committing. Ensure context integrity and schema compliance.
                </p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Maintenance Section */}
        <AnimatedSection direction="up" delay={250}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Maintenance
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Commands for managing generated files and configuration.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/cli/clean"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    `clean` Command
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Remove all generated context artifacts from your project. Clean up <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">context.json</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">context.toon</code> files.
                </p>
              </Link>

              <Link
                href="/docs/cli/ignore"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Ignore Patterns
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Configure <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">.stampignore</code> patterns to exclude files and directories from context generation.
                </p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Framework Support Section */}
        <AnimatedSection direction="up" delay={300}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Framework Support
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Learn how LogicStamp analyzes and extracts information from different frameworks and libraries.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/frameworks/react"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    React Support
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learn how LogicStamp detects and extracts React components, hooks, props, and state.
                </p>
              </Link>

              <Link
                href="/docs/frameworks/nextjs"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Next.js Support
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Next.js App Router support with route roles, segment paths, and metadata extraction.
                </p>
              </Link>

              <Link
                href="/docs/frameworks/express"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Express.js Support
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Express.js route detection, API signature extraction, and handler analysis.
                </p>
              </Link>

              <Link
                href="/docs/frameworks/nestjs"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    NestJS Support
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  NestJS controller detection, decorator extraction, and API signature analysis.
                </p>
              </Link>

              <Link
                href="/docs/ui-frameworks"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    UI Frameworks Support
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Style metadata extraction for Tailwind CSS, Material UI, ShadCN/UI, Radix UI, Styled Components, CSS/SCSS, and Framer Motion.
                </p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Reference Section */}
        <AnimatedSection direction="up" delay={350}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Reference
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Complete documentation for commands, options, formats, and usage guides.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/cli/commands"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Commands Overview
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  List of all available CLI commands and global options with descriptions.
                </p>
              </Link>

              <Link
                href="/docs/guides/llm-context"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    LLM Context Format
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Schema and structure of the generated context for LLMs. Understand the output format.
                </p>
              </Link>

              <Link
                href="/docs/guides/usage"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Usage Guides
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Practical examples and workflows using LogicStamp Context in real-world scenarios.
                </p>
              </Link>

              <Link
                href="/docs/cli/toon"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    TOON Format
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                  Understand the TOON (TypeScript Object-Oriented Notation) format for context bundles.
                </p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <ReadyToGetStartedCard
          variant="green"
          description="Install LogicStamp Context CLI and generate your first AI-ready context bundle in minutes."
          primaryAction={{
            href: '/docs/cli/getting-started',
            label: 'CLI Getting Started',
          }}
          secondaryAction={{
            href: '/docs/getting-started',
            label: 'Main Getting Started',
          }}
          delay={400}
        />
      </DocsLayout>

      <Footer />
    </>
  )
}
