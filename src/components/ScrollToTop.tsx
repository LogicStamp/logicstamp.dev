'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Immediately scroll to top to prevent scroll position restoration issues
    // This is especially important on mobile where browsers may restore scroll position
    window.scrollTo(0, 0)
    
    // Also use requestAnimationFrame as a backup to ensure it happens after any browser restoration
    const rafId = requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      
      // Double-check after a short delay to catch any late scroll restoration
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 0)
    })

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [pathname])

  return null
}

