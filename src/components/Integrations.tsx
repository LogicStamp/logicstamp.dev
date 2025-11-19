import AnimatedSection from './AnimatedSection'

// Framework logos as SVG components
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <path d="M12 1a11 11 0 0 0-11 11c0 1.5.3 2.9.8 4.2l.1.3c.5 1.2 1.2 2.3 2.1 3.2l.2.2c.9.9 2 1.6 3.2 2.1l.3.1c1.3.5 2.7.8 4.2.8s2.9-.3 4.2-.8l.3-.1c1.2-.5 2.3-1.2 3.2-2.1l.2-.2c.9-.9 1.6-2 2.1-3.2l.1-.3c.5-1.3.8-2.7.8-4.2s-.3-2.9-.8-4.2l-.1-.3c-.5-1.2-1.2-2.3-2.1-3.2l-.2-.2c-.9-.9-2-1.6-3.2-2.1l-.3-.1C14.9 1.3 13.5 1 12 1z" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
    <path d="M12 1c-1.5 0-2.9.3-4.2.8l-.3.1c-1.2.5-2.3 1.2-3.2 2.1l-.2.2c-.9.9-1.6 2-2.1 3.2l-.1.3C1.3 9.1 1 10.5 1 12s.3 2.9.8 4.2l.1.3c.5 1.2 1.2 2.3 2.1 3.2l.2.2c.9.9 2 1.6 3.2 2.1l.3.1c1.3.5 2.7.8 4.2.8s2.9-.3 4.2-.8l.3-.1c1.2-.5 2.3-1.2 3.2-2.1l.2-.2c.9-.9 1.6-2 2.1-3.2l.1-.3c.5-1.3.8-2.7.8-4.2s-.3-2.9-.8-4.2l-.1-.3c-.5-1.2-1.2-2.3-2.1-3.2l-.2-.2c-.9-.9-2-1.6-3.2-2.1l-.3-.1C14.9 1.3 13.5 1 12 1z" fill="none" stroke="#61DAFB" strokeWidth="1" opacity="0.3" />
  </svg>
)

const NextIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M11.572 0c-.176 0-.31.0004-.358.002A11.383 11.383 0 0 0 .002 11.572c-.0016.048-.002.182-.002.358s.0004.31.002.358A11.383 11.383 0 0 0 11.572 23.93c.048.0016.182.002.358.002s.31-.0004.358-.002A11.383 11.383 0 0 0 23.93 12.288c.0016-.048.002-.182.002-.358s-.0004-.31-.002-.358A11.383 11.383 0 0 0 12.288.002C12.24.0004 12.106 0 11.93 0zm5.568 5.424h1.328v13.152H17.14zm-4.192 9.136a.32.32 0 0 1-.32-.32v-7.488a.32.32 0 0 1 .32-.32h1.792a.32.32 0 0 1 .32.32v7.488a.32.32 0 0 1-.32.32zm-1.024-9.136h1.024v1.024h-1.024zm0 2.048h1.024v1.024h-1.024zm0 2.048h1.024v1.024h-1.024zm0 2.048h1.024v1.024h-1.024zm0 2.048h1.024v1.024h-1.024z" fill="#000" className="dark:fill-white" />
  </svg>
)

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 7.29 7.29 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 5.684 5.684 0 0 1 1.77-.272zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="#fff" />
  </svg>
)

const VueIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" fill="#4FC08D" />
  </svg>
)

const SvelteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M17.46 0c-.288 0-.577.07-.832.207L8.51 4.416 3.372 1.983C3.136 1.857 2.883 1.79 2.624 1.79c-.288 0-.577.07-.832.207-.54.29-.878.85-.878 1.466v14.07c0 .617.338 1.177.878 1.466.255.137.544.207.832.207.259 0 .512-.067.748-.193l5.138-2.433 8.118 4.21c.255.137.544.207.832.207.288 0 .577-.07.832-.207.54-.29.878-.85.878-1.466V1.657c0-.617-.338-1.177-.878-1.466C18.037.054 17.748-.015 17.46 0zm-.05 2.143l-7.287 3.58-4.523 2.14v10.273l4.523 2.342 7.287-3.453V2.143z" fill="#FF3E00" />
  </svg>
)

const CLIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <rect width="24" height="24" rx="2" fill="#000" className="dark:fill-gray-800" />
    <rect x="4" y="5" width="16" height="14" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-200 dark:text-gray-700" />
    <path d="M7 9l2 2-2 2m3-2h5" stroke="#00FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="8" cy="16" r="1" fill="#00FF00" />
    <circle cx="11" cy="16" r="1" fill="#FFAA00" />
    <circle cx="14" cy="16" r="1" fill="#FF0000" />
  </svg>
)

const integrations = [
  {
    name: 'React',
    description: 'Analyze React components with hooks, props, and JSX structure',
    icon: ReactIcon,
    color: 'from-blue-400 to-cyan-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    features: ['Props signature extraction', 'Hook dependency analysis', 'Component structure contracts'],
  },
  {
    name: 'Next.js',
    description: 'Full support for Next.js with App Router and Server Components',
    icon: NextIcon,
    color: 'from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100',
    bgColor: 'bg-gray-50 dark:bg-gray-900/20',
    borderColor: 'border-gray-200 dark:border-gray-800',
    features: ['App Router context bundles', 'Server/Client component detection', 'Route dependency graphs'],
  },
  {
    name: 'TypeScript',
    description: 'Deep TypeScript analysis for types, interfaces, and generics',
    icon: TypeScriptIcon,
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    features: ['Type signature extraction', 'Interface documentation', 'Generic parameter tracking'],
  },
  {
    name: 'Vue',
    description: 'Vue 3 support with Composition API and SFC analysis',
    icon: VueIcon,
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800',
    features: ['SFC structure analysis', 'Composition API tracking', 'Template dependencies'],
    comingSoon: true,
  },
  {
    name: 'Svelte',
    description: 'Svelte component analysis with reactive statements',
    icon: SvelteIcon,
    color: 'from-orange-400 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'border-orange-200 dark:border-orange-800',
    features: ['Reactive variable tracking', 'Store dependency graphs', 'Component prop analysis'],
    comingSoon: true,
  },
  {
    name: 'Full CLI',
    description: 'Complete LogicStamp CLI with verification and watch mode',
    icon: CLIIcon,
    color: 'from-purple-400 to-indigo-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
    features: ['Contract verification', 'Watch mode for changes', 'Full contract management'],
    comingSoon: true,
  },
]

// Tool icons as SVG components
const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a1.266 1.266 0 0 0-1.52.017L.327 7.261A1.247 1.247 0 0 0 .326 8.74L3.899 12 .326 15.26a1.247 1.247 0 0 0 .001 1.479L1.4 17.94a1.266 1.266 0 0 0 1.52.017l4.12-3.128 9.46 8.63a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.94a1.5 1.5 0 0 0-.85-1.353z" fill="#007ACC" />
  </svg>
)

const CursorIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#000" className="dark:fill-white" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#000" className="dark:fill-white" />
  </svg>
)

const GitLabIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M23.6 9.5l-1.1-3.4c-.1-.3-.4-.5-.7-.5h-.1c-.3 0-.6.2-.7.5l-1.1 3.4H4.1L3 5.6c-.1-.3-.4-.5-.7-.5h-.1c-.3 0-.6.2-.7.5L.4 9.5c-.1.3 0 .6.2.8l11.2 7.9c.2.1.4.1.6 0l11.2-7.9c.2-.2.3-.5.2-.8z" fill="#FC6D26" />
  </svg>
)

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M24 22.525H0l12-21.05 12 21.05z" fill="#000" className="dark:fill-white" />
  </svg>
)

const NetlifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M6.5 0h11l5.5 9.5-11 14.5H6.5l-5.5-9.5L6.5 0z" fill="#00C7B7" />
  </svg>
)

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.186.186v1.887c0 .102.083.185.186.185zm-5.425 0h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186H8.558a.186.186 0 0 0-.186.186v1.887c0 .102.083.185.186.185zm-5.425 0h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186H3.133a.186.186 0 0 0-.186.186v1.887c0 .102.083.185.186.185zm10.85-2.956h2.119a.186.186 0 0 0 .186-.186V6.006a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.186.186v1.93c0 .102.083.185.186.185zm-5.425 0h2.119a.186.186 0 0 0 .186-.186V6.006a.186.186 0 0 0-.186-.186H8.558a.186.186 0 0 0-.186.186v1.93c0 .102.083.185.186.185zm-5.425 0h2.119a.186.186 0 0 0 .186-.186V6.006a.186.186 0 0 0-.186-.186H3.133a.186.186 0 0 0-.186.186v1.93c0 .102.083.185.186.185zm5.425-2.956h2.119a.186.186 0 0 0 .186-.186V3.05a.186.186 0 0 0-.186-.186H8.558a.186.186 0 0 0-.186.186v1.93c0 .102.083.185.186.185zm-5.425 0h2.119a.186.186 0 0 0 .186-.186V3.05a.186.186 0 0 0-.186-.186H3.133a.186.186 0 0 0-.186.186v1.93c0 .102.083.185.186.185zm15.275 5.912h1.43a.186.186 0 0 0 .186-.186V9.006a.186.186 0 0 0-.186-.186h-1.43a.186.186 0 0 0-.186.186v1.887c0 .102.083.185.186.185zm0-2.956h1.43a.186.186 0 0 0 .186-.186V6.006a.186.186 0 0 0-.186-.186h-1.43a.186.186 0 0 0-.186.186v1.93c0 .102.083.185.186.185zm0-2.956h1.43a.186.186 0 0 0 .186-.186V3.05a.186.186 0 0 0-.186-.186h-1.43a.186.186 0 0 0-.186.186v1.93c0 .102.083.185.186.185z" fill="#2496ED" />
  </svg>
)

const PnpmIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="#F69220" />
    <path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" fill="#F69220" />
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

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 sm:py-28 bg-gradient-bg-accent">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Works with your{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                favorite tools
              </span>
            </h2>
            <p className="mt-6 text-xl lg:text-2xl leading-8 text-gray-600 dark:text-gray-300">
              Seamlessly integrate with your existing development workflow and boost productivity
            </p>
          </div>
        </AnimatedSection>

        {/* Frameworks */}
        <div className="mx-auto mt-12 max-w-[1400px]">
          <AnimatedSection direction="up" delay={200}>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl mb-4">
                Supported Frameworks
              </h3>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                AI-ready context generation for modern frontend frameworks and TypeScript codebases
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon
              return (
                <AnimatedSection 
                  key={integration.name} 
                  direction="up" 
                  delay={400 + index * 100}
                >
                  <div className={`group relative overflow-visible rounded-3xl border-2 ${integration.borderColor} bg-gradient-bg-card p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50`}>
                    {/* Coming Soon Badge - Rubber Band Wrapping Corner */}
                    {integration.comingSoon && (
                      <div className="absolute top-0 right-0 z-20 overflow-visible">
                        {/* Diagonal rubber band badge */}
                        <div 
                          className="absolute z-30 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white font-bold text-[10px] sm:text-xs shadow-xl border-[1.5px] border-white/40 rounded"
                          style={{
                            top: '16px',
                            right: '-4px',
                            transform: 'rotate(12deg)',
                            transformOrigin: 'top right'
                          }}
                        >
                          <span className="relative z-10 whitespace-nowrap">Coming Soon</span>
                          {/* Rubber band texture overlay */}
                          <div className="absolute inset-0 opacity-30 rounded" style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.15) 4px, rgba(255,255,255,0.15) 8px)'
                          }}></div>
                          {/* Edge highlights */}
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/50 rounded-t"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/50 rounded-b"></div>
                        </div>
                        {/* Shadow effect for depth */}
                        <div 
                          className="absolute bg-black/20 blur-md -z-10 rounded"
                          style={{
                            top: '18px',
                            right: '-2px',
                            width: '80px',
                            height: '22px',
                            transform: 'rotate(12deg)',
                            transformOrigin: 'top right'
                          }}
                        ></div>
                      </div>
                    )}
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${integration.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon container with gradient background */}
                    <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${integration.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <IconComponent />
                    </div>
                    
                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {integration.name}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed lg:text-lg">
                      {integration.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {integration.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-x-3 text-sm lg:text-base text-gray-500 dark:text-gray-400">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                            <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Decorative element */}
                    <div className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${integration.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>

        {/* Tools */}
        <div className="mx-auto mt-24 max-w-[1400px]">
          <AnimatedSection direction="up" delay={200}>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl mb-4">
                Development Tools
              </h3>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Works with your existing development tools and CI/CD pipelines
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <AnimatedSection 
                  key={tool.name} 
                  direction="up" 
                  delay={400 + index * 50}
                >
                  <div className="group flex flex-col items-center gap-y-4 p-6 rounded-2xl bg-gradient-bg-card/50 backdrop-blur-sm border border-secondary-200/50 dark:border-secondary-400/50 hover:bg-gradient-bg-card hover:border-secondary-300 dark:hover:border-secondary-500 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300">
                    <div className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors duration-300 ${tool.color}`}>
                      <IconComponent />
                    </div>
                    <span className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white text-center group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
