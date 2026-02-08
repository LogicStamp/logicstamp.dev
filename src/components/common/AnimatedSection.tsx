'use client'

import { useEffect, useRef, useState } from 'react'
import { useDisableAnimations } from '@/components/docs/DocsLayout'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number // total animation duration in ms
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 300,
}: AnimatedSectionProps) {
  const disableAnimations = useDisableAnimations()
  const [isVisible, setIsVisible] = useState(disableAnimations) // Start visible if animations disabled
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // For docs pages: simple fade-in on mount (no scroll-triggered animations)
    if (disableAnimations) {
      if (typeof window === 'undefined') {
        setIsVisible(true)
        return
      }
      
      // Simple fade-in on mount for docs pages
      if (prefersReducedMotion) {
        setIsVisible(true)
      } else {
        // Small delay for staggered effect, but much faster than scroll-triggered
        const mountDelay = Math.min(delay, 50) // Max 50ms delay for docs
        const timeoutId = window.setTimeout(() => {
          setIsVisible(true)
        }, mountDelay)
        
        return () => window.clearTimeout(timeoutId)
      }
      return
    }

    // For non-docs pages: scroll-triggered animations
    if (typeof window === 'undefined') return

    const effectiveDelay = prefersReducedMotion ? 0 : Math.min(delay, 120)
    let timeoutId: number | undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (prefersReducedMotion) {
            // Show immediately for users who prefer reduced motion
            setIsVisible(true)
            observer.unobserve(entry.target)
          } else {
            timeoutId = window.setTimeout(() => {
              setIsVisible(true)
              observer.unobserve(entry.target)
            }, effectiveDelay)
          }
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -7.5% 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [delay, direction, duration, prefersReducedMotion, disableAnimations])

  const getOffsetTransform = () => {
    if (prefersReducedMotion) return 'none'
    // For docs pages: no transform, just fade-in
    if (disableAnimations) return 'none'
    
    switch (direction) {
      case 'up':
        return 'translateY(20px)'
      case 'down':
        return 'translateY(-20px)'
      case 'left':
        return 'translateX(20px)'
      case 'right':
        return 'translateX(-20px)'
      default:
        return 'translateY(20px)'
    }
  }

  // For docs pages: faster fade-in (200ms), for others: use provided duration
  const animationDuration = prefersReducedMotion 
    ? 0 
    : disableAnimations 
      ? 200 // Faster fade-in for docs
      : duration

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getOffsetTransform(),
        transition: (disableAnimations || prefersReducedMotion)
          ? 'opacity 0ms'
          : `opacity ${animationDuration}ms ease-out, transform ${animationDuration}ms ease-out`,
      }}
    >
      {children}
    </div>
  )
}














