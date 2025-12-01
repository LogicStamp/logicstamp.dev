'use client'
import { useEffect, useRef, useState } from 'react'
import AnimatedSection from '../common/AnimatedSection'
import AnimatedCounter from '../common/AnimatedCounter'

const stats = [
  {
    name: 'Components Analyzed',
    value: 10000,
    suffix: '+',
    description: 'React/TypeScript components converted to AI-ready context',
  },
  {
    name: 'Token Savings',
    value: 65,
    suffix: '%',
    description: 'Average token reduction with header mode vs full code',
  },
  {
    name: 'Context Bundles',
    value: 5000,
    suffix: '+',
    description: 'Generated for AI assistants and CI/CD pipelines',
  },
  {
    name: 'Zero Config',
    value: 100,
    suffix: '%',
    description: 'Works instantly with React/TypeScript projects',
  },
]

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (hasTriggered) return

    const currentSectionRef = sectionRef.current
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsVisible(true)
          setHasTriggered(true)
          // Stop observing after first trigger
          if (observerRef.current && currentSectionRef) {
            observerRef.current.unobserve(currentSectionRef)
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (currentSectionRef) {
      observerRef.current.observe(currentSectionRef)
    }

    return () => {
      if (observerRef.current && currentSectionRef) {
        observerRef.current.unobserve(currentSectionRef)
      }
    }
  }, [hasTriggered])

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-stats-section">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stats-primary sm:text-4xl lg:text-6xl">
              Trusted by teams worldwide
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-8 text-stats-secondary">
              Join developers who supercharge their AI workflows with instant codebase context
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto mt-16 max-w-[1320px]">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.name} direction="up" delay={200 + index * 100}>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base lg:text-lg leading-7 text-stats-secondary">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-stats-primary sm:text-5xl lg:text-6xl">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={4000}
                      delay={300 + index * 200}
                      triggerOnVisible={true}
                      trigger={isVisible}
                    />
                  </dd>
                  <dd className="text-sm lg:text-base leading-6 text-stats-muted">{stat.description}</dd>
                </div>
              </AnimatedSection>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}














