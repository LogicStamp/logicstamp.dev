import AnimatedSection from './AnimatedSection'

export default function CTA() {
  return (
    <section id="get-started" className="py-24 sm:py-32 bg-gradient-theme-cta">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
              Ready to supercharge your AI workflow?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg lg:text-xl leading-8 text-primary-100">
              Generate AI-ready context from your codebase in seconds. Fast, deterministic, zero-config.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.npmjs.com/package/logicstamp-context"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white px-6 py-3 text-sm lg:text-base font-semibold text-secondary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover-lift"
              >
                Install Now
              </a>
              <a
                href="docs"
                rel="noopener noreferrer"
                className="text-sm lg:text-base font-semibold leading-6 text-white hover:text-secondary-200 transition-colors"
              >
                View Documentation <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-12">
              <blockquote className="text-lg lg:text-xl italic text-primary-100 max-w-2xl mx-auto">
                "Stop pasting code. Start sharing structured context bundles that AI actually understands.
                LogicStamp Context transforms your codebase into machine-readable documentation
                with built-in token optimization."
              </blockquote>
              <cite className="mt-4 block text-sm lg:text-base text-primary-200">
                — LogicStamp Team
              </cite>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
