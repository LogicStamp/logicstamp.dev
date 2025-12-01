'use client'

import React, { useState, type ReactNode } from 'react'

interface ExpandableSectionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  icon?: ReactNode
}

export default function ExpandableSection({
  title,
  children,
  defaultOpen = false,
  icon,
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="relative mb-8 sm:mb-12 lg:mb-16">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
      <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-3 mb-4 sm:mb-6 focus:outline-none group"
          aria-expanded={isOpen}
          aria-label={isOpen ? `Collapse ${title}` : `Expand ${title}`}
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {icon && (
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                {icon}
              </div>
            )}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h2>
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 text-lg font-normal transition-colors hover:border-gray-400 dark:hover:border-gray-500 flex-shrink-0">
            {isOpen ? '−' : '+'}
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={isOpen ? 'block' : 'hidden'}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

