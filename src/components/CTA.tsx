import AnimatedSection from './AnimatedSection'
import ReadTheDocsButton from './ReadTheDocsButton'

export default function CTA() {
  return (
    <section id="get-started" className="relative py-24 sm:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Ready to supercharge{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  your AI workflow?
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl -z-10 opacity-20 animate-pulse"></span>
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg lg:text-xl leading-8 text-gray-600 dark:text-gray-300 font-medium">
              Generate AI-ready context from your codebase in seconds. Fast, deterministic, zero-config.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.npmjs.com/package/logicstamp-context"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-8 py-4 text-base lg:text-lg font-bold text-white shadow-xl hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z"/>
                </svg>
                Install Now
              </a>
              <ReadTheDocsButton href="docs/" />
            </div>
            <div className="mt-12">
              <blockquote className="text-lg lg:text-xl italic text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                "Stop pasting code. Start sharing structured context bundles that AI actually understands.
                LogicStamp Context transforms your codebase into machine-readable documentation
                with built-in token optimization."
              </blockquote>
              <cite className="mt-4 block text-base text-gray-600 dark:text-gray-400">
                — LogicStamp Team
              </cite>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
