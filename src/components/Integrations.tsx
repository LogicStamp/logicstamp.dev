'use client'

import { useEffect, useRef, useState } from 'react'
import AnimatedSection from './AnimatedSection'

// Framework logos as SVG components
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" className="animate-spin-slow" style={{ transformOrigin: 'center' }} />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" className="animate-spin-slow" style={{ transformOrigin: 'center', transform: 'rotate(60deg)' }} />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" className="animate-spin-slow" style={{ transformOrigin: 'center', transform: 'rotate(-60deg)' }} />
  </svg>
)

const NextIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path d="M11.572 0c-.176 0-.31.0004-.358.002A11.383 11.383 0 0 0 .002 11.572c-.0016.048-.002.182-.002.358s.0004.31.002.358A11.383 11.383 0 0 0 11.572 23.93c.048.0016.182.002.358.002s.31-.0004.358-.002A11.383 11.383 0 0 0 23.93 12.288c.0016-.048.002-.182.002-.358s-.0004-.31-.002-.358A11.383 11.383 0 0 0 12.288.002C12.24.0004 12.106 0 11.93 0h-.358z" fill="#000" className="dark:fill-white" />
    <path d="M8 8h8v8L8 8z" fill="#fff" className="dark:fill-black" />
  </svg>
)

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M14.5 16.3c.6 0 1.1-.1 1.4-.3.4-.2.7-.4.9-.7v1.4c-.3.3-.6.5-1.1.6-.4.1-.9.2-1.4.2-.6 0-1.1-.1-1.6-.3-.5-.2-.9-.5-1.2-.9-.3-.4-.6-.9-.7-1.4-.2-.5-.3-1.1-.3-1.7 0-.6.1-1.2.3-1.7.2-.5.4-1 .8-1.4.3-.4.7-.7 1.2-.9.5-.2 1-.3 1.6-.3.5 0 1 .1 1.4.2.4.1.8.3 1.1.6V11c-.3-.3-.6-.5-.9-.7-.4-.2-.8-.3-1.4-.3-.4 0-.7.1-1 .2-.3.1-.5.3-.7.5-.2.2-.3.5-.4.8-.1.3-.1.6-.1.9 0 .3 0 .6.1.9.1.3.2.5.4.8.2.2.4.4.7.5.3.1.6.2 1 .2zm-4-1.8v4.7h-1.5v-4.7H6.8v-1.2h5.9v1.2h-2.2z" fill="#fff" />
  </svg>
)

const VueIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" fill="#4FC08D" />
    <path d="M0,1.61H4.43L12,14.08,19.57,1.61H24L12,22.39Z" fill="#35495E" />
  </svg>
)

const SvelteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path d="M20.35 6.65C18.67 2.91 14.78 1.17 11.04 2.85L6.09 5.13C4.85 5.72 3.89 6.79 3.41 8.09C2.93 9.39 2.96 10.82 3.5 12.1C3.13 12.63 2.85 13.23 2.69 13.86C2.37 15.29 2.65 16.8 3.46 18.01C5.14 21.75 9.03 23.49 12.77 21.81L17.72 19.53C18.96 18.94 19.92 17.87 20.4 16.57C20.88 15.27 20.85 13.84 20.31 12.56C20.68 12.03 20.96 11.43 21.12 10.8C21.44 9.37 21.16 7.86 20.35 6.65Z" fill="#FF3E00" />
    <path d="M12.51 10.81C13.34 10.42 14.32 10.73 14.76 11.5C15.2 12.27 14.97 13.25 14.14 13.64L11.67 14.93C10.84 15.32 9.86 15.01 9.42 14.24C8.98 13.47 9.21 12.49 10.04 12.1L12.51 10.81Z" fill="#fff" />
  </svg>
)

const CLIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <rect width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-gray-200" />
    <path d="M7 9l2 2-2 2m3 0h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="text-emerald-500" />
    <circle cx="7" cy="6" r="0.5" fill="currentColor" className="text-red-500" />
    <circle cx="10" cy="6" r="0.5" fill="currentColor" className="text-yellow-500" />
    <circle cx="13" cy="6" r="0.5" fill="currentColor" className="text-green-500" />
  </svg>
)

const integrations = [
  {
    name: 'React',
    description: 'Analyze React components with hooks, props, and JSX structure',
    icon: ReactIcon,
    gradient: 'from-cyan-500/20 via-blue-500/20 to-blue-600/20',
    borderGradient: 'from-cyan-400 via-blue-500 to-blue-600',
    iconBg: 'from-cyan-500/10 to-blue-600/10',
    features: ['Props signature extraction', 'Hook dependency analysis', 'Component structure contracts'],
  },
  {
    name: 'Next.js',
    description: 'Full support for Next.js with App Router and Server Components',
    icon: NextIcon,
    gradient: 'from-gray-600/20 via-gray-700/20 to-gray-800/20 dark:from-gray-400/20 dark:via-gray-300/20 dark:to-gray-200/20',
    borderGradient: 'from-gray-600 via-gray-700 to-gray-800 dark:from-gray-400 dark:via-gray-300 dark:to-gray-200',
    iconBg: 'from-gray-600/10 to-gray-800/10 dark:from-gray-400/10 dark:to-gray-200/10',
    features: ['App Router context bundles', 'Server/Client component detection', 'Route dependency graphs'],
  },
  {
    name: 'TypeScript',
    description: 'Deep TypeScript analysis for types, interfaces, and generics',
    icon: TypeScriptIcon,
    gradient: 'from-blue-500/20 via-blue-600/20 to-blue-700/20',
    borderGradient: 'from-blue-500 via-blue-600 to-blue-700',
    iconBg: 'from-blue-500/10 to-blue-700/10',
    features: ['Type signature extraction', 'Interface documentation', 'Generic parameter tracking'],
  },
  {
    name: 'Vue',
    description: 'Vue 3 support with Composition API and SFC analysis',
    icon: VueIcon,
    gradient: 'from-emerald-500/20 via-green-500/20 to-teal-600/20',
    borderGradient: 'from-emerald-500 via-green-500 to-teal-600',
    iconBg: 'from-emerald-500/10 to-teal-600/10',
    features: ['SFC structure analysis', 'Composition API tracking', 'Template dependencies'],
    comingSoon: true,
  },
  {
    name: 'Svelte',
    description: 'Svelte component analysis with reactive statements',
    icon: SvelteIcon,
    gradient: 'from-orange-500/20 via-red-500/20 to-red-600/20',
    borderGradient: 'from-orange-500 via-red-500 to-red-600',
    iconBg: 'from-orange-500/10 to-red-600/10',
    features: ['Reactive variable tracking', 'Store dependency graphs', 'Component prop analysis'],
    comingSoon: true,
  },
  {
    name: 'Full CLI',
    description: 'Complete LogicStamp CLI with verification and watch mode',
    icon: CLIIcon,
    gradient: 'from-purple-500/20 via-indigo-500/20 to-violet-600/20',
    borderGradient: 'from-purple-500 via-indigo-500 to-violet-600',
    iconBg: 'from-purple-500/10 to-violet-600/10',
    features: ['Contract verification', 'Watch mode for changes', 'Full contract management'],
    comingSoon: true,
  },
]

// Tool icons
const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a1.266 1.266 0 0 0-1.52.017L.327 7.261A1.247 1.247 0 0 0 .326 8.74L3.899 12 .326 15.26a1.247 1.247 0 0 0 .001 1.479L1.4 17.94a1.266 1.266 0 0 0 1.52.017l4.12-3.128 9.46 8.63a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.94a1.5 1.5 0 0 0-.85-1.353z" fill="#007ACC" />
  </svg>
)

const CursorIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M10.07 2.82L3.14 19.02c-.45 1.05.35 1.85 1.33 1.33l16.2-6.93c1.05-.45 1.05-1.17 0-1.62l-16.2-6.93c-.98-.52-1.78.28-1.33 1.33l6.93 6.93 6.93-6.93z" fill="currentColor" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor" />
  </svg>
)

const GitLabIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M23.6 9.5l-1.1-3.4c-.1-.3-.4-.5-.7-.5h-.1c-.3 0-.6.2-.7.5l-1.1 3.4H4.1L3 5.6c-.1-.3-.4-.5-.7-.5h-.1c-.3 0-.6.2-.7.5L.4 9.5c-.1.3 0 .6.2.8l11.2 7.9c.2.1.4.1.6 0l11.2-7.9c.2-.2.3-.5.2-.8z" fill="#FC6D26" />
  </svg>
)

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
  </svg>
)

const NetlifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013 2.58a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-8.428v-.009zm-15.004-.736L4.787 9.563a1.044 1.044 0 0 1-.829.725L2.256 14.54l5.09 1.078a1.044 1.044 0 0 1 .635-.588l.199-.953z" fill="#00C7B7" />
  </svg>
)

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .103.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .103.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .103.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" fill="#2496ED" />
  </svg>
)

const PnpmIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.5V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.5v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.5v-7.5zm8.25 0V24H24v-7.5z" fill="#F69220" />
  </svg>
)

const tools = [
  { name: 'VS Code', icon: VSCodeIcon, color: 'text-blue-600 dark:text-blue-400' },
  { name: 'Cursor', icon: CursorIcon, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'GitHub Actions', icon: GitHubIcon, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'GitLab CI', icon: GitLabIcon, color: 'text-orange-600 dark:text-orange-400' },
  { name: 'Vercel', icon: VercelIcon, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'Netlify', icon: NetlifyIcon, color: 'text-teal-600 dark:text-teal-400' },
  { name: 'Docker', icon: DockerIcon, color: 'text-blue-600 dark:text-blue-400' },
  { name: 'pnpm', icon: PnpmIcon, color: 'text-orange-600 dark:text-orange-400' },
]

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

export default function Integrations() {
  const { ref: titleRef, inView: titleInView } = useInView(0.1)
  const { ref: frameworksRef, inView: frameworksInView } = useInView(0.1)
  const { ref: toolsRef, inView: toolsInView } = useInView(0.1)

  return (
    <section id="integrations" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-gray-900/50">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={titleRef}
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Works
            </span>{' '}
            with your favorite tools
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 dark:text-gray-300">
            Seamlessly integrate with your existing development workflow and boost productivity
          </p>
        </div>

        {/* Frameworks Section */}
        <div className="mt-20">
          <div 
            ref={frameworksRef}
            className={`text-center mb-12 transition-all duration-1000 delay-300 ${
              frameworksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl mb-3">
              Supported Frameworks
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              AI-ready context generation for modern frontend frameworks and TypeScript codebases
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon
              return (
                <div
                  key={integration.name}
                  className={`group relative transition-all duration-700 ${
                    frameworksInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="relative h-full rounded-2xl p-8 shadow-sm transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                    
                    {/* Coming Soon Badge */}
                    {integration.comingSoon && (
                      <div className="absolute top-6 right-6 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 backdrop-blur-sm">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${integration.iconBg}`}>
                        <IconComponent />
                      </div>
                      
                      <h4 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                        {integration.name}
                      </h4>
                      
                      <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                        {integration.description}
                      </p>
                      
                      <ul className="mt-6 space-y-2.5">
                        {integration.features.map((feature, featureIndex) => (
                          <li 
                            key={feature} 
                            className="flex items-start gap-x-3 text-sm text-gray-600 dark:text-gray-400"
                            style={{ 
                              transitionDelay: `${featureIndex * 50}ms`,
                              opacity: frameworksInView ? 1 : 0,
                              transform: frameworksInView ? 'translateX(0)' : 'translateX(-10px)'
                            }}
                          >
                            <svg className="h-5 w-5 flex-shrink-0 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-24">
          <div 
            ref={toolsRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              toolsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl mb-3">
              Development Tools
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Works with your existing development tools and CI/CD pipelines
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <div
                  key={tool.name}
                  className={`group relative transition-all duration-700 ${
                    toolsInView 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <div className="relative flex flex-col items-center gap-3 p-5 sm:p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
                    <div className={`${tool.color} opacity-80`}>
                      <IconComponent />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes border-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}