'use client'

import SectionIntro from './SectionIntro'
import ProblemSolutionFlow from './ProblemSolutionFlow'
import BenefitsGrid from './BenefitsGrid'
import SummaryPanel from './SummaryPanel'
import { useInViewOnce } from './useInViewOnce'

export default function WhyLogicStamp() {
  const { ref: titleRef, inView: titleInView } = useInViewOnce(0.1)
  const { ref: benefitsRef, inView: benefitsInView } = useInViewOnce(0.1)

  return (
    <section
      id="why-logicstamp"
      className="relative scroll-mt-24 py-20 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] -left-32 sm:-left-24 w-72 h-72 sm:w-80 sm:h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-[18%] -right-32 sm:-right-24 w-72 h-72 sm:w-80 sm:h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
        <SectionIntro titleRef={titleRef} titleInView={titleInView} />
        <ProblemSolutionFlow />
        <BenefitsGrid benefitsRef={benefitsRef} benefitsInView={benefitsInView} />
        <SummaryPanel benefitsInView={benefitsInView} />
      </div>

    </section>
  )
}
