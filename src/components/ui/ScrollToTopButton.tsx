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

  useEffect(() => {
    // Set CSS custom property for bottom offset
    // Detect iOS Safari which properly handles safe-area-inset-bottom
    const isIOSSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && 
                        !(window as any).MSStream &&
                        !navigator.userAgent.includes('CriOS') &&
                        !navigator.userAgent.includes('FxiOS')
    
    if (isIOSSafari) {
      // On iOS Safari, use only safe-area-inset-bottom
      document.documentElement.style.setProperty('--scroll-top-bottom', 'env(safe-area-inset-bottom + 0.1rem')
    } else {
      // On desktop/Android, use 1.5rem
      document.documentElement.style.setProperty('--scroll-top-bottom', '1.5rem')
    }
  }, [])

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
      className={`fixed right-6 z-50 p-3 rounded-xl bg-theme-primary-opacity-80 border border-gray-200/20 dark:border-white/10 shadow-lg shadow-black/15 backdrop-blur-md transition-all duration-200 focus:outline-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        bottom: 'var(--scroll-top-bottom, 1.5rem)',
      }}
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














