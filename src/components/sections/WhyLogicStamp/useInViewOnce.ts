'use client'

import { useState, useEffect, useRef, type RefObject } from 'react'

export function useInViewOnce(threshold = 0.1): {
  ref: RefObject<HTMLDivElement>
  inView: boolean
} {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref: ref as RefObject<HTMLDivElement>, inView }
}
