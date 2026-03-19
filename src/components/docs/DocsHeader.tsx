'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

type Heading = {
  id: string
  text: string
  level: number
}

type DocsHeaderProps = {
  sidebarOpen?: boolean
  onSidebarToggle?: () => void
}

export default function DocsHeader({ sidebarOpen, onSidebarToggle }: DocsHeaderProps = {}) {
  const pathname = usePathname()
  const [tocOpen, setTocOpen] = useState(false)
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  
  // Used only to prevent animations on first render for the TOC dropdown
  useEffect(() => {
    setMounted(true)
  }, [])

  // Measure header height
  useEffect(() => {
    if (headerRef.current) {
      const updateHeight = () => {
        if (headerRef.current) {
          setHeaderHeight(headerRef.current.offsetHeight)
        }
      }
      updateHeight()
      window.addEventListener('resize', updateHeight)
      return () => window.removeEventListener('resize', updateHeight)
    }
  }, [])

  // Keep header visible when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      setIsVisible(true)
    }
  }, [sidebarOpen])

  // Show/hide header on scroll (mobile only)
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      // Always show header if TOC is open or sidebar is open
      if (tocOpen || sidebarOpen) {
        setIsVisible(true)
        return
      }

      const currentScrollY = window.scrollY
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Hide header when scrolling down (but only after scrolling past a threshold)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, tocOpen, sidebarOpen])

  // Extract headings from the main content
  useEffect(() => {
    const mainContent = document.querySelector('main')
    if (!mainContent) return

    const headingElements = mainContent.querySelectorAll('h2')
    const extractedHeadings: Heading[] = []
    const idCounts = new Map<string, number>()

    headingElements.forEach((heading) => {
      const text = heading.textContent || ''
      const level = parseInt(heading.tagName.charAt(1))
      
      // Generate ID if not present
      let id = heading.id
      if (!id) {
        id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim()
        
        // Ensure unique IDs by appending index if duplicate
        const count = idCounts.get(id) || 0
        idCounts.set(id, count + 1)
        if (count > 0) {
          id = `${id}-${count}`
        }
        
        heading.id = id
      }

      extractedHeadings.push({ id, text, level })
    })

    setHeadings(extractedHeadings)
  }, [pathname])

  // Track active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return

    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, observerOptions)

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [headings])

  // Only show on docs pages
  if (!pathname.startsWith('/docs')) {
    return null
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 120 // Account for sticky headers
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setTocOpen(false)
    }
  }

  return (
    <>
      <div 
        ref={headerRef} 
        className={`fixed top-[4.75rem] left-0 right-0 z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 lg:px-6">
          <div className="relative overflow-hidden bg-white/60 dark:bg-gray-900/60 rounded-2xl border border-gray-200/50 dark:border-white/5 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent pointer-events-none" />
            <div className="relative flex items-center justify-between gap-2 py-1 px-4">
            {/* Left side: Docs sidebar toggle button */}
            {onSidebarToggle && (
              <button
                onClick={onSidebarToggle}
                className="flex-shrink-0 p-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition-all duration-200 active:scale-95"
                aria-label={sidebarOpen ? 'Close docs navigation' : 'Open docs navigation'}
                aria-expanded={sidebarOpen}
              >
                <div className={`docs-sidebar-icon ${sidebarOpen ? 'open' : ''}`}>
                  <div className="docs-sidebar-panel"></div>
                  <div className="docs-sidebar-lines">
                    <div className="docs-sidebar-line"></div>
                    <div className="docs-sidebar-line"></div>
                    <div className="docs-sidebar-line"></div>
                  </div>
                </div>
              </button>
            )}

            {/* Center: Current section name (clickable to toggle TOC) */}
            {headings.length > 0 && (
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="flex-1 min-w-0 px-2 text-center"
                aria-label={tocOpen ? 'Close table of contents' : 'Open table of contents'}
              >
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate block">
                  {activeId 
                    ? headings.find(h => h.id === activeId)?.text || ''
                    : headings[0]?.text || 'On this page'}
                </span>
              </button>
            )}

            {/* Right side: TOC toggle button */}
            {headings.length > 0 && (
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition-colors"
                aria-label={tocOpen ? 'Close table of contents' : 'Open table of contents'}
                aria-expanded={tocOpen}
              >
                <span className="hidden sm:inline">On this page</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${tocOpen ? 'rotate-180' : ''}`} />
              </button>
            )}
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible TOC dropdown */}
      {headings.length > 0 && (
        <div 
          className={`fixed left-0 right-0 z-30 lg:hidden ${
            mounted && tocOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{ 
            top: headerHeight > 0 ? `calc(5rem + ${headerHeight}px)` : '6.75rem',
            transition: mounted ? 'opacity 50ms ease-out, transform 300ms ease-out' : 'none',
            willChange: mounted ? 'transform' : 'auto'
          }}
        >
          <div className="mx-auto max-w-[1440px] px-4 lg:px-6">
            <div className="relative overflow-hidden bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-gray-200/50 dark:border-white/5 backdrop-blur-xl backdrop-saturate-150 max-h-[50vh] overflow-y-auto">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent pointer-events-none" />
              <nav className="relative px-4 py-3 space-y-1">
              {headings.map((heading, index) => {
                const isActive = activeId === heading.id

                return (
                  <button
                    key={`${heading.id}-${index}`}
                    onClick={() => scrollToHeading(heading.id)}
                    className={`block w-full text-left text-sm py-2 px-2 rounded-lg transition-colors ${
                      isActive
                        ? 'text-white dark:text-gray-100 font-medium bg-gray-900 dark:bg-gray-800'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {heading.text}
                  </button>
                )
              })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
