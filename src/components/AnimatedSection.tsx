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
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const effectiveDelay = Math.min(delay, 120)
    let timeoutId: number | undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = window.setTimeout(() => {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }, effectiveDelay)
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
  }, [delay, direction, duration])

  const getOffsetTransform = () => {
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

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getOffsetTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  )
}
