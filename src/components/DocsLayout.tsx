'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import DocsSidebar from '@/components/DocsSidebar'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const sidebarRef = useRef<HTMLElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

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

  // Handle Escape key to close sidebar
  useEffect(() => {
    if (typeof document === 'undefined') return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false)
        toggleButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [sidebarOpen])

  // Close sidebar and scroll to top when pathname changes (mobile navigation)
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Close sidebar on mobile when navigating
    setSidebarOpen(false)
    
    // Ensure scroll to top happens immediately on route change
    // This is critical on mobile where browsers may restore scroll position
    window.scrollTo(0, 0)
    
    // Use multiple strategies to ensure scroll happens after any browser restoration
    const rafId = requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 0)
    })
    
    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [pathname])

  // Focus trap for mobile sidebar
  useEffect(() => {
    if (!sidebarOpen || typeof document === 'undefined') return

    const sidebar = sidebarRef.current
    if (!sidebar) return

    const focusableElements = sidebar.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    sidebar.addEventListener('keydown', handleTabKey)
    firstElement?.focus()

    return () => {
      sidebar.removeEventListener('keydown', handleTabKey)
    }
  }, [sidebarOpen])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 py-8 lg:py-10">
        {/* Mobile sidebar toggle button */}
        <button
          ref={toggleButtonRef}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`lg:hidden fixed top-[3.5rem] z-40 p-1.5 rounded-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
            sidebarOpen ? 'left-[260px]' : 'left-4'
          } ${
            sidebarOpen || isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          aria-label={sidebarOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={sidebarOpen}
          aria-controls="mobile-docs-sidebar"
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
            ref={sidebarRef}
            id="mobile-docs-sidebar"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-sidebar-title"
            className={`
              lg:hidden fixed top-[3.5rem] bottom-0 left-0 z-30 w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 pt-4 pb-8 px-4 overflow-y-auto
              transition-transform duration-300 ease-in-out
              ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <h2 id="mobile-sidebar-title" className="sr-only">Documentation navigation</h2>
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


