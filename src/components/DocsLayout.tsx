'use client'

import { useState, useEffect } from 'react'
import DocsSidebar from '@/components/DocsSidebar'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show button when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Hide button when scrolling down (but only after scrolling past a threshold)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 py-8 lg:py-10">
        {/* Mobile sidebar toggle button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`lg:hidden fixed top-[3.5rem] z-40 p-1.5 rounded-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 ${
            sidebarOpen ? 'left-[260px]' : 'left-4'
          } ${
            sidebarOpen || isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          aria-label="Toggle navigation"
        >
          <svg
            className={`w-4 h-4 text-gray-700 dark:text-gray-300 transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
          {/* Mobile sidebar - slides in from left */}
          <aside
            className={`
              lg:hidden fixed top-[3.5rem] bottom-0 left-0 z-30 w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 pt-4 pb-8 px-4 overflow-y-auto
              transition-transform duration-300 ease-in-out
              ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <DocsSidebar />
          </aside>

          {/* Desktop sidebar - always visible */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start">
            <DocsSidebar />
          </aside>

          {/* Overlay for mobile when sidebar is open */}
          {sidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/20 dark:bg-black/40 z-20"
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />
          )}

          <main className="flex-1">
            <div className="max-w-3xl space-y-8 lg:ml-4">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}


