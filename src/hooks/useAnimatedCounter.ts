import { useState, useEffect, useRef } from 'react'

interface UseAnimatedCounterProps {
  end: number
  duration?: number
  startOnMount?: boolean
  delay?: number
  trigger?: boolean
}

export function useAnimatedCounter({ 
  end, 
  duration = 2000, 
  startOnMount = true, 
  delay = 0,
  trigger = false
}: UseAnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>()

  const startAnimation = () => {
    if (isAnimating || hasTriggered) return
    
    setIsAnimating(true)
    setHasTriggered(true)
    setCount(0)
    
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
      }
      
      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOut * end)
      
      setCount(currentCount)
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
        setIsAnimating(false)
        startTimeRef.current = undefined
      }
    }
    
    animationRef.current = requestAnimationFrame(animate)
  }

  const reset = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    setCount(0)
    setIsAnimating(false)
    setHasTriggered(false)
    startTimeRef.current = undefined
  }

  useEffect(() => {
    if (startOnMount) {
      const timer = setTimeout(() => {
        startAnimation()
      }, delay)
      
      return () => clearTimeout(timer)
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [startOnMount, delay])

  // Effect to handle external trigger
  useEffect(() => {
    if (trigger && !isAnimating && !hasTriggered) {
      const timer = setTimeout(() => {
        startAnimation()
      }, delay)
      
      return () => clearTimeout(timer)
    }
  }, [trigger, delay, isAnimating, hasTriggered])

  return {
    count,
    isAnimating,
    startAnimation,
    reset
  }
}
