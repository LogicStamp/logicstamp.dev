'use client'

import { useInViewOnce } from './useInViewOnce'
import { useTerminalDemo } from './useTerminalDemo'

export default function ProblemSolutionFlow() {
  const { ref: problemRef, inView: problemInView } = useInViewOnce(0.1)
  const { ref: solutionRef, inView: solutionInView } = useInViewOnce(0.1)
  const { terminalText, showCursor, commandExecuted, showOutput } = useTerminalDemo(solutionInView)

  return (
    <>
    <div className="mt-16 sm:mt-24 lg:mt-28 mx-auto max-w-6xl space-y-10">
      <div
        ref={problemRef}
        className={`transition-all duration-1000 ${
          problemInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="group relative rounded-2xl bg-theme-primary-opacity-80 backdrop-blur-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-red-200/50 dark:border-red-900/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/30 dark:from-red-900/20 dark:to-red-800/10 opacity-60" />

          <div className="relative z-10">
            <div className="mb-6 grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-4 sm:gap-y-2 sm:items-start">
              <div className="row-start-1 col-start-1 inline-flex shrink-0 items-center justify-center self-start w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/50">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="row-start-1 col-start-2 min-w-0 self-start text-2xl font-bold text-gray-900 dark:text-white">
                Manual context in chat
              </h3>
              <p className="row-start-2 col-span-2 min-w-0 text-gray-600 dark:text-gray-300 sm:col-span-1 sm:col-start-2">
                Pasting large files and re-explaining how pieces connect for every task
              </p>
            </div>

            <div
              className={`mb-6 rounded-lg bg-gray-900 p-4 font-mono text-sm shadow-inner transition-all duration-700 delay-300 ${
                problemInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-500 text-xs ml-2">editor</span>
              </div>
              <div className="text-gray-300 text-xs space-y-1">
                <div className="opacity-60">// Copying entire file...</div>
                <div className="opacity-40">import React from &apos;react&apos;</div>
                <div className="opacity-40">import {'{'} Icon {'}'} from './Icon'</div>
                <div className="opacity-40">import {'{'} useTheme {'}'} from './ThemeProvider'</div>
                <div className="opacity-40">// ... 200+ more lines of boilerplate</div>
                <div className="text-red-400 mt-2">⚠ Missing: API client dependency</div>
              </div>
            </div>

            <div
              className={`p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 transition-all duration-700 delay-500 ${
                problemInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
            >
              <p className="text-sm font-medium text-red-900 dark:text-red-300">
                It is easy to omit dependents, repeat how the repo fits together, and spend tokens on boilerplate the model may not need for a given task.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-center transition-all duration-700 ${
          solutionInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
      >
        <div className="p-3 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30">
          <svg
            className="w-8 h-8 text-emerald-600 dark:text-emerald-400 flow-arrow-vertical"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div
        ref={solutionRef}
        className={`transition-all duration-1000 ${
          solutionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative rounded-2xl bg-theme-primary-opacity-80 backdrop-blur-xl p-8 shadow-sm transition-all duration-500 border border-emerald-200/50 dark:border-emerald-900/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-green-100/30 dark:from-emerald-900/20 dark:to-green-800/10 opacity-60" />

          <div className="relative z-10">
            <div className="mb-6 grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-4 sm:gap-y-2 sm:items-start">
              <div className="row-start-1 col-start-1 inline-flex shrink-0 items-center justify-center self-start w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-600/10">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="row-start-1 col-start-2 min-w-0 self-start text-2xl font-bold text-gray-900 dark:text-white">
                Generated context artifacts
              </h3>
              <p className="row-start-2 col-span-2 min-w-0 text-gray-600 dark:text-gray-300 sm:col-span-1 sm:col-start-2">
                Run the CLI once (or in watch mode). Typical mid-sized repos finish in seconds. exact time depends on size, mode, and hardware.
              </p>
            </div>

            <div
              className={`mb-6 rounded-lg bg-gray-900 p-4 font-mono text-sm shadow-inner transition-all duration-700 delay-300 min-h-[140px] ${
                solutionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-500 text-xs ml-2">terminal</span>
              </div>
              <div className="text-green-400 min-h-[20px]">
                {terminalText}
                {!commandExecuted && showCursor && <span className="animate-blink">_</span>}
              </div>
              <div
                className={`mt-2 text-gray-300 text-xs space-y-1 transition-opacity duration-300 ${
                  showOutput ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="opacity-80">✓ Scanning 42 components...</div>
                <div className="opacity-80">✓ Building dependency graphs...</div>
                <div className="opacity-80">✓ Compiling context bundles...</div>
                <div className="text-green-400">✓ Complete! Context ready in ~9s</div>
              </div>
            </div>

            <div
              className={`p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 transition-all duration-700 delay-500 ${
                solutionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            >
              <p className="text-sm font-medium text-emerald-900 dark:text-emerald-300">
                <code className="text-xs font-mono bg-emerald-200 dark:bg-emerald-900/50 px-1.5 py-0.5 rounded">$ stamp context</code> emits bundle files with dependency metadata. Header-oriented modes typically use fewer tokens than pasting raw source. savings depend on your project and configuration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <style jsx>{`
        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
        @keyframes flowDown {
          0%,
          100% {
            transform: translateY(-8px);
            opacity: 0.7;
          }
          50% {
            transform: translateY(8px);
            opacity: 1;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .flow-arrow-vertical {
          animation: flowDown 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
