'use client'

import type { RefObject } from 'react'
import { whyLogicStampBenefits } from './benefits'

type BenefitsGridProps = {
  benefitsRef: RefObject<HTMLDivElement>
  benefitsInView: boolean
}

export default function BenefitsGrid({ benefitsRef, benefitsInView }: BenefitsGridProps) {
  return (
    <div className="mt-20 sm:mt-28 lg:mt-32">
      <div
        ref={benefitsRef}
        className={`text-center mb-10 sm:mb-14 transition-all duration-1000 ${
          benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
          What you get
        </h3>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Static analysis outputs you can regenerate and diff - not one-off prompts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {whyLogicStampBenefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className={`group relative transition-all duration-700 ${
              benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 100 + 200}ms` }}
          >
            <div className="relative h-full rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${benefit.iconBg}`}
                  >
                    <div className="text-gray-700 dark:text-gray-300">{benefit.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold sm:text-lg text-gray-900 dark:text-white">{benefit.title}</h4>
                        {benefit.statBreakdown && (
                          <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mt-2.5 sm:mt-3 leading-relaxed sm:leading-relaxed">
                            <div className="hidden sm:block">{benefit.statBreakdown}</div>
                            <div className="block sm:hidden space-y-1">
                              <div>Header mode: ~70%</div>
                              <div>Header+style: ~30%</div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-lg sm:text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                          {benefit.stat}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{benefit.statLabel}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
