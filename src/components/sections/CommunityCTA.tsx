import { ctaInvertedPrimaryClasses } from '../ui/ctaInvertedPrimaryClasses'

/** Matches ReadTheDocsButton `variant="secondary"` (frosted panel + ring). */
const secondaryCtaClassName =
  'inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold bg-theme-primary-opacity-80 text-gray-900 dark:text-white shadow-lg hover:shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 backdrop-blur-xl backdrop-saturate-150 transition-all duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'

export default function CommunityCTA() {
  return (
    <div className="mt-16 sm:mt-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Join the Movement</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Open Source, Built for Developers
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              LogicStamp is 100% open source and community-driven. Contribute code, report issues, suggest features, or just star the repo to show your support.
            </p>

            <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
              <a
                href="/docs/what-is-logicstamp"
                aria-label="Learn more about LogicStamp"
                className={secondaryCtaClassName}
              >
                Learn More →
              </a>
              <a
                href="https://github.com/LogicStamp/logicstamp-context/issues"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 whitespace-nowrap ${ctaInvertedPrimaryClasses}`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Contribute
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}















