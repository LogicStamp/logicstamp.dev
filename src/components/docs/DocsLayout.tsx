'use client'

import { useState, useEffect, useRef, createContext, useContext } from 'react'
import { usePathname } from 'next/navigation'
import DocsSidebar from './DocsSidebar'
import DocsSearchPalette from './DocsSearchPalette'
import DocsTOC from './DocsTOC'
import DocsHeader from './DocsHeader'

// Context to disable animations in docs pages
export const DisableAnimationsContext = createContext(false)
export const useDisableAnimations = () => useContext(DisableAnimationsContext)

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [docsSearchOpen, setDocsSearchOpen] = useState(false)
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
    
    // Scroll to top on route change - use a single, reliable method
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
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
    <DisableAnimationsContext.Provider value={true}>
      <DocsSearchPalette open={docsSearchOpen} onOpenChange={setDocsSearchOpen} />
      <DocsHeader
        sidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
        onOpenSearch={() => setDocsSearchOpen(true)}
        searchOpen={docsSearchOpen}
      />
      <div className="min-h-screen bg-theme-primary pt-[6.5rem] lg:pt-24">
        <div className="max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4 lg:px-6 py-8 lg:py-10 w-full">
        {/* Mobile sidebar toggle button - hidden, now integrated into DocsHeader */}
        <button
          ref={toggleButtonRef}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed z-[100] top-1/2 -translate-y-1/2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 pointer-events-auto opacity-0 pointer-events-none sr-only"
          aria-label={sidebarOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={sidebarOpen}
          aria-controls="mobile-docs-sidebar"
        >
          <svg
            className={`w-8 h-32 text-gray-700 dark:text-gray-300 transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 2 L10 12 L8 22" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-5 xl:gap-8 w-full min-w-0">
          {/* Mobile sidebar - slides in from left */}
          <aside
            ref={sidebarRef}
            id="mobile-docs-sidebar"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-sidebar-title"
            className={`
              lg:hidden fixed left-0 z-30 w-64 bg-theme-primary pt-6 pb-8 px-4 overflow-y-auto
              transition-all duration-300 ease-in-out
              top-[7.16rem]
              ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
            style={{
              bottom: 'calc(0rem + env(safe-area-inset-bottom))',
            }}
          >
            <h2 id="mobile-sidebar-title" className="sr-only">Documentation navigation</h2>
            <DocsSidebar onOpenSearch={() => setDocsSearchOpen(true)} />
          </aside>

          {/* Desktop sidebar - always visible, scrollable with styled scrollbar */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start max-h-[calc(100vh-8rem)]">
            <DocsSidebar onOpenSearch={() => setDocsSearchOpen(true)} />
          </aside>

          {/* Overlay for mobile when sidebar is open */}
          {sidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/20 dark:bg-black/40 z-20"
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />
          )}

          <main className="flex-1 min-w-0 max-w-full overflow-x-hidden xl:pr-6 2xl:pr-0">
            <div className="max-w-3xl lg:max-w-[620px] xl:max-w-[680px] 2xl:max-w-[800px] space-y-12 xl:ml-4 docs-content min-w-0 w-full">{children}</div>
          </main>

          {/* Right TOC - only visible on XL+ screens */}
          <DocsTOC />
        </div>
        </div>
      </div>
    </DisableAnimationsContext.Provider>
  )
}
















