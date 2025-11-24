'use client'

import { useRef, useState, useEffect } from 'react'
import ReadTheDocsButton from '../ui/ReadTheDocsButton'

// Custom hook for intersection observer
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export default function GetStarted() {
  const { ref: contentRef, inView: contentInView } = useInView(0.1)

  return (
    <section id="get-started" className="relative py-24 sm:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 relative z-10">
        <div 
          ref={contentRef}
          className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to supercharge{' '}
              <span className="relative inline-block">
                <span className="text-white">
                  your AI workflow?
                </span>
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg lg:text-xl leading-8 text-blue-100 font-medium">
              Generate AI-ready context from your codebase in seconds. Fast, deterministic, zero-config.
            </p>
            <div className="mt-10 flex flex-row items-center justify-center gap-2 sm:gap-4">
              <a
                href="https://www.npmjs.com/package/logicstamp-context"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-white text-white dark:text-gray-900 shadow-lg hover:shadow-xl ring-1 ring-gray-700 dark:ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all duration-200 whitespace-nowrap px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z"/>
                </svg>
                Install Now
              </a>
              <ReadTheDocsButton href="docs/" />
            </div>
            <div className="mt-12">
              <blockquote className="text-lg lg:text-xl italic text-blue-100 max-w-2xl mx-auto">
                "Stop pasting code. Start sharing structured context bundles that AI actually understands.
                LogicStamp Context transforms your codebase into machine-readable documentation
                with built-in token optimization."
              </blockquote>
              <cite className="mt-4 block text-base text-blue-100">
                — LogicStamp Team
              </cite>
            </div>
        </div>
      </div>
    </section>
  )
}
