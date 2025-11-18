'use client'

import AnimatedSection from './AnimatedSection'
import CopyButton from './CopyButton'
import GitHubStats from './GitHubStats'
import StarGitHubButton from './StarGitHubButton'
import ReadTheDocsButton from './ReadTheDocsButton'
import HeroVisualization from './HeroVisualization'
import CommunityCTA from './CommunityCTA'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30 pt-28 pb-20 sm:pt-36 sm:pb-32 min-h-screen">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

      <div className="mx-auto max-w-[90rem] px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-2xl lg:max-w-6xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl sm:text-balance leading-tight">
              {/* Mobile: 2 lines */}
              <span className="block sm:hidden">
                <span className="block whitespace-nowrap">Turn Your Codebase</span>
                <span className="block whitespace-nowrap">
                  <span>Into </span>
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      AI Context
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl -z-10 opacity-20 animate-pulse"></span>
                  </span>
                </span>
              </span>
              {/* Desktop: single line */}
              <span className="hidden sm:inline">
                Turn Your Codebase Into{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    AI Context
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl -z-10 opacity-20 animate-pulse"></span>
                </span>
              </span>
            </h1>
            <p className="mt-8 text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 font-medium max-w-4xl mx-auto">
              The tiny CLI that transforms React/TypeScript codebases into{' '}
              <span className="text-secondary-700 dark:text-secondary-300 font-semibold">machine-readable context bundles</span>
              {' '}for AI assistants and CI pipelines.
            </p>
            <p className="mt-4 text-base lg:text-lg text-gray-500 dark:text-gray-400">
              Fast • Deterministic • Zero Config • Open Source
            </p>
            <div className="mt-12 flex flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6">
              <StarGitHubButton />
              <ReadTheDocsButton href="docs/" />
            </div>

            {/* Quick install snippet - More prominent */}
            <div className="mt-10 sm:mt-12 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative inline-flex items-center gap-3 rounded-xl bg-white dark:bg-gray-900 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 shadow-xl ring-1 ring-gray-300/50 dark:ring-gray-700/50">
                  <span className="hidden sm:inline text-sm sm:text-base font-bold text-purple-600 dark:text-purple-400" aria-label="Command prompt">
                    $
                  </span>
                  <code className="text-sm sm:text-base lg:text-lg font-mono font-semibold text-gray-900 dark:text-gray-100" aria-label="Installation command">
                    npm install -g logicstamp-context
                  </code>
                  <CopyButton text="npm install -g logicstamp-context" className="ml-2" />
                </div>
              </div>
            </div>

            {/* Launch Badge */}
            <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-4 py-1.5 text-sm font-semibold text-secondary-700 dark:text-secondary-300 ring-1 ring-inset ring-secondary-500/30 animate-pulse">
                <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Launching Soon
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-blue-purple/10 px-3 py-1 text-xs sm:text-sm font-medium text-secondary-700 dark:text-secondary-300 ring-1 ring-inset ring-secondary-500/20">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                </svg>
                100% Open Source
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-600/20">
                Public Beta
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* GitHub Stats Section */}
        <GitHubStats />

        {/* Dependency Graph Visualization with Context.json Preview */}
        <HeroVisualization />

        {/* Community & Contribution CTA */}
        <CommunityCTA />
      </div>
    </section>
  )
}
