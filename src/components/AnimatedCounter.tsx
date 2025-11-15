import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  className?: string
  startOnMount?: boolean
  triggerOnVisible?: boolean
  trigger?: boolean
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
  className = '',
  startOnMount = true,
  triggerOnVisible = false,
  trigger = false
}: AnimatedCounterProps) {
  const { count } = useAnimatedCounter({
    end,
    duration,
    delay,
    startOnMount: triggerOnVisible ? false : startOnMount,
    trigger: triggerOnVisible ? trigger : false
  })

  // Format the number with commas for better readability
  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <span className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}
