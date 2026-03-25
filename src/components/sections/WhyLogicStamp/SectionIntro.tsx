'use client'

import type { RefObject } from 'react'

type SectionIntroProps = {
  titleRef: RefObject<HTMLDivElement>
  titleInView: boolean
}

export default function SectionIntro({ titleRef, titleInView }: SectionIntroProps) {
  return (
    <div
      ref={titleRef}
      className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
        titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
        Structured context
      </h2>
      <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 dark:text-gray-300">
      Generated from your TypeScript codebase. LogicStamp turns your project into structured JSON: contracts, dependencies, and optional style metadata - so tools can use real context instead of copy-paste.
      </p>
      <p className="mt-4 flex items-center justify-center">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 whitespace-nowrap">
          Backend: New & Experimental
        </span>
      </p>
    </div>
  )
}
