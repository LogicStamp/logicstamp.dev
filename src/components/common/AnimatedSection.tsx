'use client'

import { useEffect, useRef, useState } from 'react'

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
  const [isVisible, setIsVisible] = useState(false)
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
  }, [delay, direction, duration, prefersReducedMotion])

  const getOffsetTransform = () => {
    if (prefersReducedMotion) return 'none'
    
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

  const animationDuration = prefersReducedMotion ? 0 : duration

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getOffsetTransform(),
        transition: prefersReducedMotion
          ? 'opacity 0ms'
          : `opacity ${animationDuration}ms ease-out, transform ${animationDuration}ms ease-out`,
      }}
    >
      {children}
    </div>
  )
}














