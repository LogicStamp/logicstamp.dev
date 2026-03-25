'use client'

type SummaryPanelProps = {
  benefitsInView: boolean
}

export default function SummaryPanel({ benefitsInView }: SummaryPanelProps) {
  return (
    <div
      className={`mt-16 sm:mt-20 transition-all duration-1000 delay-600 ${
        benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="relative max-w-5xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-10 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          <div className="relative flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-shrink-0 p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-600 to-emerald-500">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-base lg:text-xl text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-white">Same inputs, comparable bundles.</strong>{' '}
                LogicStamp is designed so repeated runs produce consistent artifacts from your tree: MCP can query them live, or you can commit or diff the generated JSON like any other build output.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
