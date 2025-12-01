'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // Only show on docs pages
  const isDocsPage = pathname?.startsWith('/docs')

  useEffect(() => {
    if (!isDocsPage) return

    const toggleVisibility = () => {
      setIsVisible(window.scrollY >700)
    }

    toggleVisibility()
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [isDocsPage])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Don't render if not on docs page
  if (!isDocsPage) return null

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/20 dark:border-white/10 shadow-lg shadow-black/15 backdrop-blur-md transition-all duration-200 focus:outline-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      {/* Up arrow icon */}
      <svg
        className="w-4 h-4 text-gray-700 dark:text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  )
}














