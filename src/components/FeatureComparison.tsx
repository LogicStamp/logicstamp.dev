'use client'
import React, { useState } from 'react'
import AnimatedSection from './AnimatedSection'

const features = [
  {
    category: 'Core Features',
    items: [
      {
        name: 'Core linting functionality',
        community: true,
        validation: true,
        solo: true,
        team: true,
        enterprise: true,
      },
      {
        name: 'Design token validation',
        community: 'Basic (5 rules)',
        validation: 'Advanced (15+ rules)',
        solo: 'Advanced (25+ rules)',
        team: 'Full (25+ rules)',
        enterprise: 'Full (25+ rules)',
      },
      {
        name: 'Auto-fix capabilities',
        community: 'Basic violations',
        validation: 'All violations',
        solo: 'All violations',
        team: 'All violations',
        enterprise: 'All violations + ML',
      },
      {
        name: 'VS Code extension',
        community: true,
        validation: true,
        solo: true,
        team: true,
        enterprise: true,
      },
      {
        name: 'Browser extension',
        community: false,
        validation: false,
        solo: true,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Usage & Limits',
    items: [
      {
        name: 'AI generations per month',
        community: '50',
        validation: 'None',
        solo: '1,000',
        team: '10,000',
        enterprise: 'Unlimited',
      },
      {
        name: 'Validation checks per month',
        community: '1,000',
        validation: 'Unlimited',
        solo: 'Unlimited',
        team: 'Unlimited',
        enterprise: 'Unlimited',
      },
      {
        name: 'Number of projects',
        community: '1',
        validation: '5',
        solo: 'Unlimited (personal)',
        team: 'Unlimited',
        enterprise: 'Unlimited',
      },
      {
        name: 'Custom rules',
        community: 'None',
        validation: 'Up to 5',
        solo: 'Unlimited',
        team: 'Unlimited',
        enterprise: 'Unlimited',
      },
      {
        name: 'Team members',
        community: '1',
        validation: '1',
        solo: '1',
        team: 'Up to 5',
        enterprise: 'Unlimited',
      },
    ],
  },
  {
    category: 'Collaboration',
    items: [
      {
        name: 'Team collaboration',
        community: false,
        validation: false,
        solo: false,
        team: true,
        enterprise: true,
      },
      {
        name: 'Shared configurations',
        community: false,
        validation: false,
        solo: false,
        team: true,
        enterprise: true,
      },
      {
        name: 'Code review integration',
        community: false,
        validation: false,
        solo: false,
        team: true,
        enterprise: true,
      },
      {
        name: 'Approval workflows',
        community: false,
        validation: false,
        solo: false,
        team: 'Basic',
        enterprise: 'Advanced',
      },
    ],
  },
  {
    category: 'Analytics & Reporting',
    items: [
      {
        name: 'Basic analytics',
        community: false,
        validation: 'Personal stats',
        solo: 'Personal stats',
        team: 'Team analytics',
        enterprise: 'Advanced analytics',
      },
      {
        name: 'Compliance reports',
        community: false,
        validation: false,
        solo: false,
        team: true,
        enterprise: true,
      },
      {
        name: 'Custom dashboards',
        community: false,
        validation: false,
        solo: false,
        team: false,
        enterprise: true,
      },
      {
        name: 'Export data',
        community: false,
        validation: false,
        solo: false,
        team: 'CSV/JSON',
        enterprise: 'All formats',
      },
    ],
  },
  {
    category: 'Integrations',
    items: [
      {
        name: 'CI/CD integration',
        community: false,
        validation: true,
        solo: true,
        team: true,
        enterprise: true,
      },
      {
        name: 'GitHub Actions',
        community: false,
        validation: true,
        solo: true,
        team: true,
        enterprise: true,
      },
      {
        name: 'GitLab CI',
        community: false,
        validation: true,
        solo: true,
        team: true,
        enterprise: true,
      },
      {
        name: 'Design tool sync',
        community: false,
        validation: false,
        solo: false,
        team: 'Figma',
        enterprise: 'All tools',
      },
    ],
  },
  {
    category: 'Customization',
    items: [
      {
        name: 'Custom rules',
        community: false,
        validation: 'Up to 5',
        solo: 'Unlimited',
        team: 'Unlimited',
        enterprise: 'Full customization',
      },
      {
        name: 'Framework presets',
        community: 'Basic',
        validation: 'Standard',
        solo: 'Standard',
        team: 'All frameworks',
        enterprise: 'All + custom',
      },
      {
        name: 'White-label options',
        community: false,
        validation: false,
        solo: false,
        team: false,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Support & Security',
    items: [
      {
        name: 'Community support',
        community: true,
        validation: true,
        solo: true,
        team: true,
        enterprise: true,
      },
      {
        name: 'Email support',
        community: false,
        validation: true,
        solo: true,
        team: 'Priority',
        enterprise: 'Dedicated',
      },
      {
        name: 'SSO integration',
        community: false,
        validation: false,
        solo: false,
        team: false,
        enterprise: true,
      },
      {
        name: 'On-premise deployment',
        community: false,
        validation: false,
        solo: false,
        team: false,
        enterprise: true,
      },
      {
        name: 'SLA guarantees',
        community: false,
        validation: false,
        solo: false,
        team: false,
        enterprise: true,
      },
    ],
  },
]

export default function FeatureComparison() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleComparison = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              {isExpanded ? 'Compare all features' : 'Not sure which plan is for you?'}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {isExpanded ? 'See exactly what\'s included in each plan' : 'Compare all features and find the perfect plan for your needs'}
            </p>
            <div className="mt-8">
              <button
                onClick={toggleComparison}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover-lift ${
                  isExpanded
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300'
                    : 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg'
                }`}
              >
                {isExpanded ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    Hide comparison
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    See full comparison
                  </>
                )}
              </button>
            </div>
          </div>
        </AnimatedSection>

        {isExpanded && (
          <AnimatedSection direction="up" delay={200}>
            <div className="mt-16 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-white dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Features
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                        Community
                        <div className="text-xs font-normal text-gray-500 dark:text-gray-400">Free</div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                        Validation
                        <div className="text-xs font-normal text-gray-500 dark:text-gray-400">$9/month</div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600 dark:text-primary-400">
                        Solo
                        <div className="text-xs font-normal text-gray-500 dark:text-gray-400">$19/month</div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                        Team
                        <div className="text-xs font-normal text-gray-500 dark:text-gray-400">$49/month</div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                        Enterprise
                        <div className="text-xs font-normal text-gray-500 dark:text-gray-400">Custom</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                    {features.map((category, categoryIndex) => (
                      <React.Fragment key={category.category}>
                        <tr className="bg-gray-50 dark:bg-gray-700">
                          <td
                            colSpan={6}
                            className="px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white"
                          >
                            {category.category}
                          </td>
                        </tr>
                        {category.items.map((feature, featureIndex) => (
                          <tr key={feature.name} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                              {feature.name}
                            </td>
                            <td className="px-6 py-4 text-center text-sm">
                              {typeof feature.community === 'boolean' ? (
                                feature.community ? (
                                  <span className="text-green-600 dark:text-green-400">✓</span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )
                              ) : (
                                <span className="text-gray-600 dark:text-gray-300">{feature.community}</span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-center text-sm">
                              {typeof feature.validation === 'boolean' ? (
                                feature.validation ? (
                                  <span className="text-green-600 dark:text-green-400">✓</span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )
                              ) : (
                                <span className="text-gray-600 dark:text-gray-300">{feature.validation}</span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-center text-sm">
                              {typeof feature.solo === 'boolean' ? (
                                feature.solo ? (
                                  <span className="text-green-600 dark:text-green-400">✓</span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )
                              ) : (
                                <span className="text-gray-600 dark:text-gray-300">{feature.solo}</span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-center text-sm">
                              {typeof feature.team === 'boolean' ? (
                                feature.team ? (
                                  <span className="text-green-600 dark:text-green-400">✓</span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )
                              ) : (
                                <span className="text-gray-600 dark:text-gray-300">{feature.team}</span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-center text-sm">
                              {typeof feature.enterprise === 'boolean' ? (
                                feature.enterprise ? (
                                  <span className="text-green-600 dark:text-green-400">✓</span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )
                              ) : (
                                <span className="text-gray-600 dark:text-gray-300">{feature.enterprise}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        )}

        {isExpanded && (
          <AnimatedSection direction="up" delay={400}>
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                All plans include MIT license for the open source components.
                Need a custom plan? <a href="mailto:sales@logicstamp.dev" className="text-primary-600 hover:text-primary-500">Contact us</a>
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
