import AnimatedSection from './AnimatedSection'
import LogicStampLogo from './LogicStampLogo'
import LogicStampWordmark from './LogicStampWordmark'
import ThemeToggle from './ThemeToggle'

const navigation = {
  product: [
    { name: 'Documentation', href: '/docs' },
    { name: 'GitHub', href: 'https://github.com/LogicStamp/logicstamp-context', external: true },
    { name: 'npm', href: 'https://www.npmjs.com/package/logicstamp-context', external: true },
  ],
  community: [
    { name: 'Twitter', href: 'https://twitter.com/logicstamp', external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/70 dark:border-gray-800/80 bg-white/80 dark:bg-gray-950/60 backdrop-blur">
      {/* Faint gradient accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-200/60 dark:via-secondary-700/60 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection direction="up" delay={0}>
          <div className="flex flex-col gap-8 md:gap-6">
            {/* Top row: logo + nav + controls */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              {/* Logo + Tagline */}
              <div className="min-w-0 pr-4 md:pr-8">
                <a href="/" className="flex items-center gap-0 group">
                  <div className="logicstamp-logo-container">
                    <LogicStampLogo className="logicstamp-logo" size={32} />
                  </div>
                  <LogicStampWordmark className="hidden sm:block" />
                  <LogicStampWordmark height={20} className="block sm:hidden" />
                </a>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  AI-ready context from your codebase. Open-source, zero-config.
                </p>
              </div>

              {/* Product / Community columns */}
              <div className="flex flex-wrap gap-y-4 gap-x-12 lg:gap-x-20 text-sm md:justify-center">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Product
                  </h3>
                  <ul role="list" className="mt-3 space-y-1.5">
                    {navigation.product.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Community
                  </h3>
                  <ul role="list" className="mt-3 space-y-1.5">
                    {navigation.community.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Theme toggle + icons */}
              <div className="flex items-center justify-start gap-4 md:justify-end">
                <ThemeToggle compact />
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/LogicStamp/logicstamp-context"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 hover-lift"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/logicstamp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 hover-lift"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="https://www.npmjs.com/package/logicstamp-context"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 hover-lift"
                  >
                    <span className="sr-only">npm</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col items-start gap-3 border-t border-gray-200/60 dark:border-gray-800/70 pt-5 md:flex-row md:items-center md:justify-between">
              <p className="text-xs md:text-sm leading-5 text-gray-500 dark:text-gray-400">
                &copy; 2025 LogicStamp — MIT Licensed
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
