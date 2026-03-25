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

// AST-style node component tuned for neutral light/dark canvases
function ASTNode({
  x, y, label, type, delay = 0, inView
}: {
  x: number; y: number; label: string; type: 'component' | 'props' | 'state' | 'fn' | 'type'; delay?: number; inView: boolean
}) {
  const colors = {
    component: 'stroke-violet-500/40 fill-violet-500/5 dark:stroke-violet-400/35 dark:fill-violet-400/8',
    props: 'stroke-blue-500/40 fill-blue-500/5 dark:stroke-blue-400/35 dark:fill-blue-400/8',
    state: 'stroke-cyan-500/40 fill-cyan-500/5 dark:stroke-cyan-400/35 dark:fill-cyan-400/8',
    fn: 'stroke-pink-500/40 fill-pink-500/5 dark:stroke-pink-400/35 dark:fill-pink-400/8',
    type: 'stroke-purple-500/40 fill-purple-500/5 dark:stroke-purple-400/35 dark:fill-purple-400/8',
  }
  const textColors = {
    component: 'fill-violet-700/60 dark:fill-violet-300/60',
    props: 'fill-blue-700/60 dark:fill-blue-300/60',
    state: 'fill-cyan-700/60 dark:fill-cyan-300/60',
    fn: 'fill-pink-700/60 dark:fill-pink-300/60',
    type: 'fill-purple-700/60 dark:fill-purple-300/60',
  }

  return (
    <g
      className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <rect
        x={x - 32}
        y={y - 12}
        width={64}
        height={24}
        rx={4}
        className={`${colors[type]} stroke-[1.5]`}
      />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        className={`text-[10px] font-mono ${textColors[type]}`}
      >
        {label}
      </text>
    </g>
  )
}

// Connection edge between nodes with light/dark theme support
function ASTEdge({
  x1, y1, x2, y2, delay = 0, inView
}: {
  x1: number; y1: number; x2: number; y2: number; delay?: number; inView: boolean
}) {
  const midY = (y1 + y2) / 2
  const path = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`

  return (
    <path
      d={path}
      fill="none"
      className={`stroke-slate-600/45 dark:stroke-slate-300/35 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
      strokeWidth={1.75}
      strokeDasharray="3 3"
      style={{ transitionDelay: `${delay}ms` }}
    />
  )
}

export default function GetStarted() {
  const { ref: contentRef, inView: contentInView } = useInView(0.1)

  return (
    <section
      id="get-started"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#0b0d10] dark:via-[#111418] dark:to-[#0b0d10] overflow-hidden"
    >
      {/* AST/Dependency Graph Background - constrained to content width */}
      <div className="absolute inset-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="relative w-full max-w-[1320px]">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(148 163 184) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(148 163 184) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Left side AST tree - positioned at left edge of content container */}
          <svg
            className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-[480px] -translate-x-16 hidden xl:block"
            viewBox="0 0 320 384"
          >
            <ASTEdge x1={200} y1={60} x2={140} y2={140} delay={200} inView={contentInView} />
            <ASTEdge x1={200} y1={60} x2={280} y2={140} delay={300} inView={contentInView} />
            <ASTEdge x1={140} y1={164} x2={100} y2={220} delay={400} inView={contentInView} />
            <ASTEdge x1={140} y1={164} x2={180} y2={220} delay={500} inView={contentInView} />
            <ASTEdge x1={280} y1={164} x2={260} y2={220} delay={400} inView={contentInView} />
            <ASTEdge x1={100} y1={244} x2={100} y2={300} delay={600} inView={contentInView} />

            <ASTNode x={200} y={48} label="Module" type="component" delay={100} inView={contentInView} />
            <ASTNode x={140} y={152} label="Component" type="component" delay={200} inView={contentInView} />
            <ASTNode x={280} y={152} label="Type" type="type" delay={300} inView={contentInView} />
            <ASTNode x={100} y={232} label="Props" type="props" delay={400} inView={contentInView} />
            <ASTNode x={180} y={232} label="State" type="state" delay={500} inView={contentInView} />
            <ASTNode x={260} y={232} label="Interface" type="type" delay={400} inView={contentInView} />
            <ASTNode x={100} y={312} label="Handler" type="fn" delay={600} inView={contentInView} />
          </svg>

          {/* Right side AST tree - positioned at right edge of content container */}
          <svg
            className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-[480px] translate-x-16 hidden xl:block"
            viewBox="0 0 320 384"
          >
            <ASTEdge x1={120} y1={80} x2={60} y2={160} delay={300} inView={contentInView} />
            <ASTEdge x1={120} y1={80} x2={180} y2={160} delay={400} inView={contentInView} />
            <ASTEdge x1={60} y1={184} x2={34} y2={250} delay={500} inView={contentInView} />
            <ASTEdge x1={60} y1={184} x2={106} y2={250} delay={600} inView={contentInView} />
            <ASTEdge x1={180} y1={184} x2={200} y2={250} delay={500} inView={contentInView} />

            <ASTNode x={120} y={68} label="Context" type="component" delay={200} inView={contentInView} />
            <ASTNode x={60} y={172} label="Function" type="fn" delay={400} inView={contentInView} />
            <ASTNode x={180} y={172} label="Hooks" type="state" delay={500} inView={contentInView} />
            <ASTNode x={34} y={262} label="Params" type="props" delay={600} inView={contentInView} />
            <ASTNode x={106} y={262} label="Return" type="type" delay={700} inView={contentInView} />
            <ASTNode x={200} y={262} label="Effect" type="fn" delay={600} inView={contentInView} />
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
    </section>
  )
}














