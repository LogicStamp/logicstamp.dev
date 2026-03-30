import Link from 'next/link'
import AnimatedSection from '@/components/common/AnimatedSection'

export type CardVariant = 'blue' | 'purple' | 'green'

export interface ReadyToGetStartedCardProps {
  title?: string
  description?: string
  primaryAction?: {
    href: string
    label: string
  }
  secondaryAction?: {
    href: string
    label: string
  }
  showGitHubLink?: boolean
  delay?: number
  variant?: CardVariant
}

const variantStyles = {
  blue: {
    blurBg: 'from-blue-100 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/5',
    border: 'border-blue-200 dark:border-blue-800',
    iconBg: 'from-blue-500 to-indigo-600',
    buttonBg: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
  },
  purple: {
    blurBg: 'from-indigo-100 via-violet-50 to-fuchsia-50 dark:from-indigo-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5',
    border: 'border-indigo-200 dark:border-indigo-800',
    iconBg: 'from-indigo-500 to-violet-600',
    buttonBg: 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600',
  },
  green: {
    blurBg: 'from-green-100 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5',
    border: 'border-green-200 dark:border-green-800',
    iconBg: 'from-green-500 to-emerald-600',
    buttonBg: 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600',
  },
}

export default function ReadyToGetStartedCard({
  title = 'Next Steps',
  description = 'Explore the complete CLI documentation or review additional guides.',
  primaryAction = {
    href: '/docs/getting-started',
    label: 'Installation & Quick Start',
  },
  secondaryAction = {
    href: '/docs/what-is-logicstamp',
    label: 'What is LogicStamp?',
  },
  showGitHubLink = true,
  delay = 650,
  variant = 'blue',
}: ReadyToGetStartedCardProps) {
  const styles = variantStyles[variant]

  return (
    <AnimatedSection direction="up" delay={delay}>
      <div className="relative mt-8 sm:mt-10 lg:mt-12 mb-6 sm:mb-8 lg:mb-10">
        <div className="relative bg-theme-primary border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${styles.iconBg} flex items-center justify-center shadow-md`}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-5">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                <Link
                  href={primaryAction.href}
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 text-sm"
                >
                  {primaryAction.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 text-sm"
                  >
                    {secondaryAction.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
                {showGitHubLink && (
                  <a
                    href="https://github.com/LogicStamp/logicstamp-context"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-gray-600 dark:text-gray-400 font-semibold hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    GitHub Repository
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
