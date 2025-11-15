'use client'
import React, { useState } from 'react'
import AnimatedSection from './AnimatedSection'

const tiers = [
  {
    name: 'Community',
    id: 'community',
    href: 'https://github.com/AmiteK23/logicstamp',
    priceMonthly: 'Free',
    description: 'Professional validation for everyone',
    features: [
      'Unlimited validation checks',
      'Unlimited projects',
      '25+ curated rules',
      'Basic auto-fix',
      'CLI with full validation',
      'VS Code extension (basic)',
      'Pre-commit hooks',
      'Community Discord support',
    ],
    mostPopular: false,
    badge: 'Always Free',
  },
  {
    name: 'Solo',
    id: 'solo',
    href: '#get-started',
    priceMonthly: '$19',
    priceYearly: '$190',
    description: 'For professional developers',
    features: [
      'Everything in Community',
      'MCP server (Claude Desktop/Cursor)',
      'Personal analytics dashboard',
      'Advanced auto-fix (ML-powered)',
      'Browser extension',
      'Priority email support',
      'Full documentation access',
      'Video tutorials',
      'Compliance reports',
    ],
    mostPopular: true,
    badge: 'Most Popular',
  },
  {
    name: 'Team',
    id: 'team',
    href: '#get-started',
    priceMonthly: '$79',
    priceYearly: '$790',
    description: 'Enforce standards across your team',
    features: [
      'Everything in Solo',
      'Up to 5 team members',
      'CI/CD integrations (GitHub, GitLab)',
      'Team analytics dashboard',
      'Shared configurations',
      'Team rule library',
      'Compliance reporting',
      '24hr priority support',
      '1-hour team training session',
    ],
    mostPopular: false,
    badge: '$15.80 per dev/mo',
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    href: 'mailto:sales@logicstamp.dev',
    priceMonthly: 'Custom',
    priceYearly: 'Custom',
    description: 'For large organizations',
    features: [
      'Everything in Team',
      'Unlimited team members',
      'SSO/SAML integration',
      'On-premise deployment',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantees (99.9%)',
      'White-label options',
      'Dedicated training & onboarding',
    ],
    mostPopular: false,
  },
]

const features = [
  {
    category: 'Core Validation',
    items: [
      {
        name: 'Validation checks per month',
        community: 'Unlimited',
        solo: 'Unlimited',
        team: 'Unlimited',
        enterprise: 'Unlimited',
      },
      {
        name: 'Number of projects',
        community: 'Unlimited',
        solo: 'Unlimited',
        team: 'Unlimited',
        enterprise: 'Unlimited',
      },
      {
        name: 'Rules included',
        community: '25+ curated rules',
        solo: '25+ curated rules',
        team: '25+ curated rules',
        enterprise: '25+ curated rules',
      },
      {
        name: 'Auto-fix capabilities',
        community: 'Basic',
        solo: 'Advanced (ML)',
        team: 'Advanced (ML)',
        enterprise: 'Advanced (ML)',
      },
    ],
  },
  {
    category: 'Tools & Integration',
    items: [
      {
        name: 'CLI',
        community: true,
        solo: true,
        team: true,
        enterprise: true,
      },
      {
        name: 'VS Code extension',
        community: 'Basic',
        solo: 'Full',
        team: 'Full',
        enterprise: 'Full',
      },
      {
        name: 'MCP server (Claude/Cursor)',
        community: false,
        solo: true,
        team: true,
        enterprise: true,
      },
      {
        name: 'Browser extension',
        community: false,
        solo: true,
        team: true,
        enterprise: true,
      },
      {
        name: 'CI/CD integrations',
        community: false,
        solo: false,
        team: 'GitHub, GitLab',
        enterprise: 'All + custom',
      },
      {
        name: 'Pre-commit hooks',
        community: true,
        solo: true,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Analytics & Insights',
    items: [
      {
        name: 'Analytics dashboard',
        community: false,
        solo: 'Personal',
        team: 'Team',
        enterprise: 'Enterprise',
      },
      {
        name: 'Compliance reports',
        community: false,
        solo: true,
        team: 'Advanced',
        enterprise: 'Custom',
      },
      {
        name: 'Violation trends',
        community: false,
        solo: true,
        team: true,
        enterprise: true,
      },
      {
        name: 'Team insights',
        community: false,
        solo: false,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Collaboration',
    items: [
      {
        name: 'Team members',
        community: '1',
        solo: '1',
        team: 'Up to 5',
        enterprise: 'Unlimited',
      },
      {
        name: 'Shared configurations',
        community: false,
        solo: false,
        team: true,
        enterprise: true,
      },
      {
        name: 'Team rule library',
        community: false,
        solo: false,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'Support & Documentation',
    items: [
      {
        name: 'Community support',
        community: 'Discord',
        solo: 'Discord',
        team: 'Discord + Slack',
        enterprise: 'Dedicated channel',
      },
      {
        name: 'Email support',
        community: false,
        solo: '48hr response',
        team: '24hr priority',
        enterprise: 'Dedicated manager',
      },
      {
        name: 'Documentation access',
        community: 'Basic',
        solo: 'Full',
        team: 'Full + guides',
        enterprise: 'Full + custom',
      },
      {
        name: 'Video tutorials',
        community: false,
        solo: true,
        team: true,
        enterprise: 'Custom training',
      },
      {
        name: 'SSO/SAML integration',
        community: false,
        solo: false,
        team: false,
        enterprise: true,
      },
      {
        name: 'On-premise deployment',
        community: false,
        solo: false,
        team: false,
        enterprise: true,
      },
      {
        name: 'SLA guarantees',
        community: false,
        solo: false,
        team: false,
        enterprise: '99.9% uptime',
      },
    ],
  },
]

export default function Pricing() {
  const [isComparisonExpanded, setIsComparisonExpanded] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  const toggleComparison = () => {
    if (isComparisonExpanded) {
      // Start exit animation
      setIsAnimatingOut(true)
      // Hide content after animation completes
      setTimeout(() => {
        setIsComparisonExpanded(false)
        setIsAnimatingOut(false)
      }, 300) // Match the animation duration
    } else {
      setIsComparisonExpanded(true)
    }
  }

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-gradient-bg-section">
      <div className="mx-auto max-w-[95rem] px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-6xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-8 text-gray-600 dark:text-gray-300">
              Unlimited validation with 25+ rules for everyone. Upgrade for MCP integration, analytics, and team features.
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4 lg:gap-6">
          {tiers.map((tier, index) => (
            <AnimatedSection 
              key={tier.id} 
              direction="up" 
              delay={200 + index * 150}
            >
              <div
                className={`rounded-2xl border p-8 ring-1 hover-lift transition-all duration-300 ${
                  tier.mostPopular
                    ? 'border-secondary-600 ring-secondary-600 bg-gradient-purple-muted'
                    : 'border-secondary-200/20 dark:border-secondary-400/20 ring-secondary-200/20 dark:ring-secondary-400/20 bg-gradient-bg-card'
                }`}
              >
                {tier.badge && (
                  <p className="text-center">
                    <span className={`inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold ${
                      tier.mostPopular 
                        ? 'bg-gradient-purple-primary text-white' 
                        : tier.id === 'community'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-gradient-purple-muted text-gray-800 dark:text-gray-200'
                    }`}>
                      {tier.badge}
                    </span>
                  </p>
                )}
                <div className="mt-8 flex items-center justify-between">
                  <h3 className={`text-lg lg:text-xl font-semibold leading-8 ${
                    tier.mostPopular ? 'text-secondary-600 dark:text-secondary-400' : 'text-gray-900 dark:text-white'
                  }`}>
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm lg:text-base leading-6 text-gray-600 dark:text-gray-300">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className={`text-4xl lg:text-5xl font-bold tracking-tight ${
                    tier.mostPopular ? 'text-secondary-600 dark:text-secondary-400' : 'text-gray-900 dark:text-white'
                  }`}>
                    {tier.priceMonthly}
                  </span>
                  {tier.priceYearly && (
                    <span className="text-sm lg:text-base font-semibold leading-6 text-gray-600 dark:text-gray-300">
                      /month
                    </span>
                  )}
                </p>
                {tier.priceYearly && (
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mt-1">
                    {tier.priceYearly}/year (save 17%)
                  </p>
                )}
                <a
                  href={tier.href}
                  className={`mt-8 block rounded-md px-3 py-2 text-center text-sm lg:text-base font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.mostPopular
                      ? 'bg-gradient-purple-primary text-white shadow-sm hover:bg-gradient-purple-secondary focus-visible:outline-secondary-600'
                      : 'ring-1 ring-inset ring-secondary-200/20 dark:ring-secondary-400/20 text-gray-900 dark:text-white hover:ring-secondary-300 dark:hover:ring-secondary-500'
                  } transition-colors`}
                >
                  {tier.id === 'community' ? 'View on GitHub' : 
                   tier.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </a>
                <ul className="mt-8 space-y-3 text-sm lg:text-base leading-6 text-gray-600 dark:text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className={`h-6 w-5 flex-none ${
                          tier.mostPopular ? 'text-secondary-600 dark:text-secondary-400' : 'text-gray-400'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Pricing Comparison Section */}
        <AnimatedSection direction="up" delay={800}>
          <div className="mx-auto max-w-2xl text-center mt-16">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              {isComparisonExpanded ? 'Compare all features' : 'Not sure which plan is for you?'}
            </h3>
            <p className="mt-4 text-xl lg:text-2xl leading-8 text-gray-600 dark:text-gray-300">
              {isComparisonExpanded ? 'See exactly what\'s included in each plan' : 'Compare all features and find the perfect plan for your needs'}
            </p>
            <div className="mt-8">
              <button
                onClick={toggleComparison}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base lg:text-lg transition-all duration-200 hover-lift ${
                  isComparisonExpanded
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300'
                    : 'bg-gradient-purple-primary hover:bg-gradient-purple-secondary text-white shadow-lg'
                }`}
              >
                {isComparisonExpanded ? (
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

        {(isComparisonExpanded || isAnimatingOut) && (
          <AnimatedSection direction="up" delay={200}>
            <div className={`mt-16 overflow-hidden transition-all duration-300 ease-in-out ${
              isAnimatingOut ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-white dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm lg:text-base font-semibold text-gray-900 dark:text-white">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-sm lg:text-base font-semibold text-gray-900 dark:text-white">
                      Community
                          <div className="text-xs lg:text-sm font-normal text-gray-500 dark:text-gray-400">Free</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm lg:text-base font-semibold text-secondary-600 dark:text-secondary-400">
                      Solo
                          <div className="text-xs lg:text-sm font-normal text-gray-500 dark:text-gray-400">$19/month</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm lg:text-base font-semibold text-gray-900 dark:text-white">
                      Team
                          <div className="text-xs lg:text-sm font-normal text-gray-500 dark:text-gray-400">$79/month</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm lg:text-base font-semibold text-gray-900 dark:text-white">
                      Enterprise
                          <div className="text-xs lg:text-sm font-normal text-gray-500 dark:text-gray-400">Custom</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                  {features.map((category, categoryIndex) => (
                    <React.Fragment key={category.category}>
                      <tr className="bg-gray-50 dark:bg-gray-700">
                        <td
                          colSpan={5}
                          className="px-6 py-3 text-sm lg:text-base font-semibold text-gray-900 dark:text-white"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((feature, featureIndex) => (
                        <tr key={feature.name} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-6 py-4 text-sm lg:text-base text-gray-900 dark:text-white">
                            {feature.name}
                          </td>
                          <td className="px-6 py-4 text-center text-sm lg:text-base">
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
                          <td className="px-6 py-4 text-center text-sm lg:text-base">
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
                          <td className="px-6 py-4 text-center text-sm lg:text-base">
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
                          <td className="px-6 py-4 text-center text-sm lg:text-base">
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

        {(isComparisonExpanded || isAnimatingOut) && (
          <AnimatedSection direction="up" delay={400}>
            <div className={`mt-12 text-center transition-all duration-300 ease-in-out ${
              isAnimatingOut ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">
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