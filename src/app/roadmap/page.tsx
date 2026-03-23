import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import BetaSignup from '@/components/BetaSignup'
import ReadTheDocsButton from '@/components/ui/ReadTheDocsButton'
import DocsMarkdown from '@/components/docs/DocsMarkdown'
import { fetchRoadmap } from '@/lib/docs'

export default async function BetaPage() {
  let roadmapContent: string
  try {
    const result = await fetchRoadmap('context')
    roadmapContent = result.content
  } catch (error) {
    console.error('Error fetching roadmap:', error)
    roadmapContent = `# Roadmap\n\nUnable to load roadmap. Please check the [source on GitHub](https://github.com/LogicStamp/logicstamp-context/blob/main/ROADMAP.md).`
  }
  return (
    <main className="min-h-screen">
      {/* Hero + Signup Section - Combined */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-32 sm:pt-32 sm:pb-40">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/3 to-purple-500/3 dark:from-indigo-500/2 dark:to-purple-500/2 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center">
              {/* Fox Mascot */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 animate-bounce bg-transparent">
                  <Image
                    src="/mascot/logicstamp-fox.svg"
                    alt="LogicStamp Fox Mascot"
                    width={96}
                    height={96}
                    priority
                    className="w-full h-full drop-shadow-2xl bg-transparent"
                  />
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full mb-8 sm:mb-10 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Early Access
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-8 sm:mb-10 tracking-tight leading-[1.1]">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Help Us Build This
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl -z-10 opacity-20 animate-pulse"></span>
                </span>
              </h1>
            </div>
          </AnimatedSection>

          {/* Integrated Signup Form */}
          <AnimatedSection direction="up" delay={100}>
            <div id="beta-signup" className="max-w-5xl mx-auto mt-12 sm:mt-16">
              <BetaSignup />

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mt-10 sm:mt-12 font-medium text-center">
                LogicStamp is live, and we're looking for early users to help us improve
              </p>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-8 sm:mt-10 text-center">
                LogicStamp is currently built and maintained primarily by{' '}
                <a
                  href="https://github.com/AmiteK23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Amit Levi
                </a>
                , with early contributions from the community. I'd love more collaborators - your feedback and ideas directly shape what we build next.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative py-20 sm:py-28 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                🗺️ Roadmap
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Here's what we're building next. Your feedback will help us prioritize what matters most.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-5xl mx-auto rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <DocsMarkdown
                source="context"
                currentDocPath="ROADMAP.md"
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300"
              >
                {roadmapContent}
              </DocsMarkdown>
            </div>
          </AnimatedSection>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              This roadmap is actively maintained. This is a solo project, so priorities will shift based on what I learn from early users.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              For the complete roadmap with detailed implementation plans, see{' '}
              <a href="https://github.com/LogicStamp/logicstamp-context/blob/main/ROADMAP.md" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                Context ROADMAP.md
              </a>
              {' '}and{' '}
              <a href="https://github.com/LogicStamp/logicstamp-mcp/blob/main/ROADMAP.md" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                MCP ROADMAP.md
              </a>
              . For known limitations with code evidence, see{' '}
              <a href="/docs/complete-reference/known-limitations" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                Known Limitations
              </a>
              .
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 font-medium">
              Looking for contributors! If you're interested in helping build LogicStamp, check out the{' '}
              <a href="https://github.com/LogicStamp/logicstamp-context/blob/main/CONTRIBUTING.md" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                contributing guide
              </a>
              {' '}or reach out directly.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mt-4 font-medium">
              Repositories:{' '}
              <a href="https://github.com/LogicStamp/logicstamp-context" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                CLI
              </a>
              {' • '}
              <a href="https://github.com/LogicStamp/logicstamp-mcp" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                MCP Server
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Beta Candidates */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Who Should Join?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We're looking for developers who use AI assistants and want to help us make this better
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <AnimatedSection direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Developers Using AI Assistants
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you're already using Cursor, Copilot, or Claude regularly, you probably know the pain of managing context. Help us make it better.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={150}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Teams with React/TypeScript Codebases
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      LogicStamp works best with React and TypeScript right now. If that's your stack, we'd love to see how it works for your team.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-emerald-200 dark:border-emerald-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Open Source Maintainers
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you maintain an open source project, we think LogicStamp could help contributors understand your codebase faster. We'd love to test this theory.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={250}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-pink-200 dark:border-pink-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      People Who Like Trying New Tools
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you enjoy being an early adopter and don't mind the occasional rough edge, we'd love your feedback. We're responsive and actually listen.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-indigo-200 dark:border-indigo-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Contributors Welcome
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      This is a solo project, and I'm actively looking for contributors! Whether it's bug fixes, new features, or documentation improvements, your contributions are welcome. Check out the{' '}
                      <a href="https://github.com/LogicStamp/logicstamp-context/blob/main/CONTRIBUTING.md" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                        contributing guide
                      </a>
                      {' '}to get started.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={350}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Developers with Large Codebases
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you're working on a large codebase where context management is a real challenge, LogicStamp could help. We're especially interested in feedback from projects with complex architectures or many components.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Want to Help Us Build This?
              </h2>
              <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're just getting started. Your feedback will help us figure out what to build next.
              </p>
              <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center mb-8 flex-wrap">
                <a
                  href="#beta-signup"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-white text-white dark:text-gray-900 shadow-lg hover:shadow-xl ring-1 ring-gray-700 dark:ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all duration-200 whitespace-nowrap px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold"
                >
                  Get Involved
                </a>
                <ReadTheDocsButton href="/docs" size="sm" className="px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-base lg:text-lg" />
                <a
                  href="https://github.com/LogicStamp/logicstamp-context/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 dark:bg-white/10 text-white shadow-lg hover:shadow-xl ring-1 ring-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 whitespace-nowrap px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold backdrop-blur-sm mt-4 sm:mt-0"
                >
                  Contribute
                </a>
              </div>
              <p className="text-blue-100 text-sm">
                Open source CLI • Free to use • Built with your feedback • Looking for contributors
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}














