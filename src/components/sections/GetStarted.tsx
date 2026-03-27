'use client'

import { useRef, useState, useEffect } from 'react'
import ReadTheDocsButton from '../ui/ReadTheDocsButton'
import { ctaInvertedPrimaryClasses } from '../ui/ctaInvertedPrimaryClasses'

// Custom hook for intersection observer
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

// Node box geometry (viewBox coordinates; graph is widened for side spread)
const NODE_HALF_W = 48
const NODE_HALF_H = 16

// AST nodes: slate/sky/indigo family to match GetStarted canvas (slate grid + sky-50 band)
function ASTNode({
  x, y, label, type, delay = 0, inView
}: {
  x: number; y: number; label: string; type: 'component' | 'props' | 'state' | 'fn' | 'type'; delay?: number; inView: boolean
}) {
  const colors = {
    component:
      'stroke-indigo-500/52 fill-indigo-500/[0.07] dark:stroke-indigo-400/48 dark:fill-indigo-400/[0.11]',
    props:
      'stroke-sky-600/50 fill-sky-500/[0.09] dark:stroke-sky-400/45 dark:fill-sky-400/[0.09]',
    state:
      'stroke-cyan-600/48 fill-cyan-500/[0.08] dark:stroke-cyan-400/42 dark:fill-cyan-400/[0.09]',
    fn:
      'stroke-blue-600/48 fill-blue-500/[0.08] dark:stroke-blue-400/42 dark:fill-blue-400/[0.09]',
    type:
      'stroke-violet-600/46 fill-violet-500/[0.07] dark:stroke-violet-400/40 dark:fill-violet-400/[0.09]',
  }
  // Dark: near-white fills so SVG text never inherits dark `color` from ancestors
  const textColors = {
    component: 'fill-slate-800 dark:fill-slate-50',
    props: 'fill-sky-950 dark:fill-sky-100',
    state: 'fill-cyan-950 dark:fill-cyan-100',
    fn: 'fill-blue-950 dark:fill-blue-100',
    type: 'fill-violet-950 dark:fill-violet-100',
  }

  return (
    <g
      className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <rect
        x={x - NODE_HALF_W}
        y={y - NODE_HALF_H}
        width={NODE_HALF_W * 2}
        height={NODE_HALF_H * 2}
        rx={5}
        className={`${colors[type]} stroke-[1.75]`}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        className={`text-[12px] font-mono ${textColors[type]}`}
      >
        {label}
      </text>
    </g>
  )
}

// Connection edge between nodes with light/dark theme support
function ASTEdge({
  x1, y1, x2, y2, delay = 0, inView, motionEnabled
}: {
  x1: number; y1: number; x2: number; y2: number; delay?: number; inView: boolean; motionEnabled: boolean
}) {
  const midY = (y1 + y2) / 2
  const path = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`
  const animationDuration = `${3.5 + (delay % 3) * 0.4}s`
  const pulseDuration = `${4.2 + (delay % 4) * 0.4}s`
  const pulseDelay = `${(delay % 7) * 0.22}s`

  return (
    <g>
      <path
        d={path}
        fill="none"
        className={`stroke-slate-500/65 dark:stroke-slate-400/60 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
        strokeWidth={2}
        strokeDasharray="3 3"
        style={{
          transitionDelay: `${delay}ms`,
          animation: motionEnabled ? `ast-edge-flow ${animationDuration} linear infinite` : undefined,
        }}
      />
      <path
        d={path}
        fill="none"
        className={`stroke-sky-500/30 dark:stroke-sky-300/25 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
        strokeWidth={2.6}
        strokeDasharray="3 3"
        style={{
          transitionDelay: `${delay}ms`,
          animation: motionEnabled
            ? `ast-edge-flow ${animationDuration} linear infinite, ast-edge-pulse ${pulseDuration} ease-in-out infinite ${pulseDelay}`
            : undefined,
          opacity: 0,
        }}
      />
    </g>
  )
}

export default function GetStarted() {
  const { ref: contentRef, inView: contentInView } = useInView(0.1)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  const motionEnabled = contentInView && !prefersReducedMotion

  return (
    <section
      id="get-started"
      className="relative w-full py-24 sm:py-32 bg-gradient-to-b from-slate-100 via-white to-sky-50/70 dark:from-[#0b0d10] dark:via-[#111418] dark:to-[#0b0d10] overflow-hidden"
    >
      {/* Full-bleed grid; AST art aligned to content column */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.09] dark:hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(100 116 139) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(100 116 139) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block opacity-[0.085]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(148 163 184) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(148 163 184) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="relative mx-auto h-full w-full max-w-[1320px]">
          {/* Left side AST tree - positioned at left edge of content container */}
          <svg
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[31rem] max-w-[40vw] h-[min(37rem,56vh)] -translate-x-[14%] min-[1400px]:-translate-x-[20%] 2xl:w-[35rem] 2xl:max-w-[45vw] 2xl:h-[min(41rem,60vh)] 2xl:-translate-x-[28%] hidden xl:block"
            viewBox="0 0 440 480"
            aria-hidden
          >
            <ASTEdge x1={220} y1={60} x2={128} y2={148} delay={200} inView={contentInView} motionEnabled={motionEnabled} />
            <ASTEdge x1={220} y1={60} x2={312} y2={148} delay={300} inView={contentInView} motionEnabled={motionEnabled} />
            <ASTEdge x1={128} y1={180} x2={82} y2={250} delay={400} inView={contentInView} motionEnabled={motionEnabled} />
            <ASTEdge x1={128} y1={180} x2={220} y2={250} delay={500} inView={contentInView} motionEnabled={motionEnabled} />
            <ASTEdge x1={312} y1={180} x2={358} y2={250} delay={400} inView={contentInView} motionEnabled={motionEnabled} />
            <ASTEdge x1={82} y1={282} x2={82} y2={362} delay={600} inView={contentInView} motionEnabled={motionEnabled} />

            <ASTNode x={220} y={44} label="Module" type="component" delay={100} inView={contentInView} />
            <ASTNode x={128} y={164} label="Component" type="component" delay={200} inView={contentInView} />
            <ASTNode x={312} y={164} label="Type" type="type" delay={300} inView={contentInView} />
            <ASTNode x={82} y={266} label="Props" type="props" delay={400} inView={contentInView} />
            <ASTNode x={220} y={266} label="State" type="state" delay={500} inView={contentInView} />
            <ASTNode x={358} y={266} label="Interface" type="type" delay={400} inView={contentInView} />
            <ASTNode x={82} y={378} label="Handler" type="fn" delay={600} inView={contentInView} />
          </svg>

          {/* Right side AST tree - positioned at right edge of content container */}
          <svg
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[31rem] max-w-[40vw] h-[min(37rem,56vh)] translate-x-[14%] min-[1400px]:translate-x-[20%] 2xl:w-[35rem] 2xl:max-w-[45vw] 2xl:h-[min(41rem,60vh)] 2xl:translate-x-[28%] hidden xl:block"
            viewBox="0 0 440 480"
            aria-hidden
          >
            <ASTEdge x1={220} y1={74} x2={118} y2={164} delay={300} inView={contentInView} motionEnabled={motionEnabled} />
            <ASTEdge x1={220} y1={74} x2={322} y2={164} delay={400} inView={contentInView} motionEnabled={motionEnabled} />
            <ASTEdge x1={118} y1={196} x2={82} y2={266} delay={500} inView={contentInView} motionEnabled={motionEnabled} />
            <ASTEdge x1={118} y1={196} x2={220} y2={266} delay={600} inView={contentInView} motionEnabled={motionEnabled} />
            <ASTEdge x1={322} y1={196} x2={358} y2={266} delay={500} inView={contentInView} motionEnabled={motionEnabled} />

            <ASTNode x={220} y={58} label="Context" type="component" delay={200} inView={contentInView} />
            <ASTNode x={118} y={180} label="Function" type="fn" delay={400} inView={contentInView} />
            <ASTNode x={322} y={180} label="Hooks" type="state" delay={500} inView={contentInView} />
            <ASTNode x={82} y={282} label="Params" type="props" delay={600} inView={contentInView} />
            <ASTNode x={220} y={282} label="Return" type="type" delay={700} inView={contentInView} />
            <ASTNode x={358} y={282} label="Effect" type="fn" delay={600} inView={contentInView} />
          </svg>

        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 relative z-10">
        <div
          ref={contentRef}
          className={`mx-auto max-w-2xl xl:max-w-3xl 2xl:max-w-4xl text-center transition-all duration-1000 ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Ready to compile your codebase into AI-ready context?
            </h2>
            <p className="mx-auto mt-6 max-w-xl xl:max-w-2xl 2xl:max-w-3xl text-lg lg:text-xl leading-8 text-gray-600 dark:text-gray-300 font-medium">
              Compile AI-ready context from your codebase in seconds.
              <br />
              Fast, deterministic, one-time setup.
            </p>
            <div className="mt-10 flex flex-row items-center justify-center gap-2 sm:gap-4">
              <a
                href="https://www.npmjs.com/package/logicstamp-context"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg ${ctaInvertedPrimaryClasses}`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z"/>
                </svg>
                Install Now
              </a>
              <ReadTheDocsButton href="docs/" />
            </div>
            <div className="mt-12">
              <blockquote className="text-lg lg:text-xl italic text-gray-500 dark:text-gray-400 max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto">
                "Stop pasting code. Start sharing structured context bundles that AI actually understands.
                LogicStamp compiles your codebase into deterministic architectural contracts
                with built-in token optimization."
              </blockquote>
              <cite className="mt-4 block text-base text-gray-500 dark:text-gray-400">
                — LogicStamp
              </cite>
            </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes ast-edge-flow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -24; }
        }
        @keyframes ast-edge-pulse {
          0%, 72%, 100% { opacity: 0; }
          80% { opacity: 0.32; }
          88% { opacity: 0.12; }
        }
      `}</style>
    </section>
  )
}














