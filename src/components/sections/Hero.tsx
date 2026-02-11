'use client'

import { useEffect, useRef, useState } from 'react'
import CopyButton from '../ui/CopyButton'
import GitHubStats from '../common/GitHubStats'
import StarGitHubButton from '../ui/StarGitHubButton'
import ReadTheDocsButton from '../ui/ReadTheDocsButton'
import EnhancedVisualization from '../features/HeroVisualization/EnhancedVisualization'
import CommunityCTA from './CommunityCTA'

// Simple hook that shows elements after mount (no IntersectionObserver complexity)
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    // Simple: show after a short delay to allow layout to settle
    const timer = setTimeout(() => {
      setInView(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return { ref, inView }
}


export default function Hero() {
  const [activeTab, setActiveTab] = useState<'cli' | 'mcp'>('cli')
  const [mcpHovered, setMcpHovered] = useState(false)
  const { ref: titleRef, inView: titleInView } = useInView(0.1)
  const { ref: descriptionRef, inView: descriptionInView } = useInView(0.1)
  const { ref: buttonsRef, inView: buttonsInView } = useInView(0.1)
  const { ref: installRef, inView: installInView } = useInView(0.1)
  const { ref: mcpButtonRef, inView: mcpButtonInView } = useInView(0.1)
  const { ref: statsRef, inView: statsInView } = useInView(0.1)
  const { ref: visualizationRef, inView: visualizationInView } = useInView(0.1)
  const { ref: communityRef, inView: communityInView } = useInView(0.1)
  const { ref: workflowGifRef, inView: workflowGifInView } = useInView(0.1)
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-28 pb-20 sm:pt-36 sm:pb-32 min-h-screen">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 lg:px-6 relative z-10">
        {/* Desktop: Split layout with headline left, visualization right */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start lg:min-h-[80vh]">
          {/* Left: Headline and CTA */}
          <div className="flex flex-col justify-start pt-8">
            {/* Title */}
            <div 
              ref={titleRef}
              className={`transition-all duration-1000 ${
                titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white text-left leading-tight">
                <span className="whitespace-nowrap">Turn TypeScript Into</span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    AI-Ready Context
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl -z-10 opacity-20 animate-pulse"></span>
                </span>
              </h1>
            </div>

            {/* Description paragraphs */}
            <div 
              ref={descriptionRef}
              className={`mt-6 transition-all duration-1000 delay-200 ${
                descriptionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-xl xl:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 font-medium text-left">
                Deterministic architectural context from your TypeScript codebase - structured component contracts for AI assistants.{' '}
                <span className="text-secondary-700 dark:text-secondary-300 font-semibold">One-time setup, up to 70% token savings.</span>
              </p>
              <p className="mt-4 text-base xl:text-lg text-gray-500 dark:text-gray-400 text-left">
                Fast • Deterministic • Open Source
              </p>
            </div>

            {/* Quick install snippet */}
            <div 
              ref={installRef}
              className={`mt-8 transition-all duration-1000 delay-300 ${
                installInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex flex-col items-start">
                {/* Tabs */}
                <div className="mb-4 flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 rounded-lg p-1 ring-1 ring-gray-300/50 dark:ring-gray-700/50">
                  <button
                    onClick={() => setActiveTab('cli')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === 'cli'
                        ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    Install the CLI
                  </button>
                  <button
                    onClick={() => setActiveTab('mcp')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === 'mcp'
                        ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    Install the MCP
                  </button>
                </div>
                
                {/* Install command */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative inline-flex items-center gap-3 rounded-xl bg-white dark:bg-gray-900 px-8 py-4 shadow-xl ring-1 ring-gray-300/50 dark:ring-gray-700/50">
                    <span className="text-base font-bold text-purple-600 dark:text-purple-400" aria-label="Command prompt">
                      $
                    </span>
                    <code className="text-base font-mono font-semibold text-gray-900 dark:text-gray-100" aria-label="Installation command">
                      {activeTab === 'cli' ? 'npm install -g logicstamp-context' : 'npm install -g logicstamp-mcp'}
                    </code>
                    <CopyButton 
                      text={activeTab === 'cli' ? 'npm install -g logicstamp-context' : 'npm install -g logicstamp-mcp'} 
                      className="ml-2" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div 
              ref={buttonsRef}
              className={`mt-6 transition-all duration-1000 delay-400 ${
                buttonsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex flex-row items-center gap-4">
                <StarGitHubButton />
                <ReadTheDocsButton href="docs/" />
              </div>
            </div>

            {/* MCP Button */}
            <div 
              ref={mcpButtonRef}
              className={`mt-6 transition-all duration-1000 delay-500 ${
                mcpButtonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex justify-center lg:justify-start relative">
                <div
                  onMouseEnter={() => setMcpHovered(true)}
                  onMouseLeave={() => setMcpHovered(false)}
                  onTouchStart={() => setMcpHovered(false)}
                  className="relative"
                >
                  <a
                    href="/docs/mcp"
                    className="inline-flex items-center gap-2 lg:gap-2.5 rounded-full bg-white/80 dark:bg-gray-900/80 px-5 py-2 lg:px-7 lg:py-3 text-base lg:text-lg font-semibold text-gray-900 dark:text-white shadow-lg lg:hover:shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 lg:hover:ring-purple-500 dark:lg:hover:ring-purple-400 backdrop-blur-xl backdrop-saturate-150 transition-all duration-200 lg:hover:-translate-y-0.5"
                  >
                    <svg className={`h-5 w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400 transition-transform duration-200 ${mcpHovered ? 'lg:rotate-[15deg]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    MCP Server Ready
                  </a>
                  
                  {/* Tooltip - Desktop only */}
                  <div
                    className={`hidden lg:block absolute left-full ml-3 top-0 -mt-4 z-[100] w-80 transition-all duration-300 ease-out ${
                      mcpHovered ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'
                    }`}
                  >
                    <div className="relative">
                      {/* Arrow - pointing left */}
                      <div className="absolute -left-2 top-6 w-4 h-4 bg-white dark:bg-gray-900 border-l border-b border-gray-200 dark:border-gray-700 rotate-45"></div>
                      
                      {/* Tooltip content */}
                      <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-4 backdrop-blur-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-pink-50/50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-pink-950/20 rounded-xl -z-10"></div>
                        
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 p-2 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 rounded-lg">
                            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1.5">
                              LogicStamp MCP Server
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                              Native integration with Claude Desktop, Claude Code, and Cursor. AI assistants can analyze your codebase directly through LogicStamp's MCP server.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Enhanced Visualization */}
          <div 
            ref={visualizationRef}
            className={`transition-all duration-1000 delay-500 ${
              visualizationInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="h-[550px] lg:h-[650px] xl:h-[750px]">
              <EnhancedVisualization inView={visualizationInView} />
            </div>
          </div>
        </div>

        {/* Mobile: Stacked layout */}
        <div className="lg:hidden mx-auto max-w-2xl text-center">
          {/* Title */}
          <div 
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl sm:text-balance leading-tight">
              {/* Mobile: 2 lines */}
              <span className="block sm:hidden">
                <span className="block whitespace-nowrap">Turn TypeScript Into</span>
                <span className="block whitespace-nowrap">
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      AI-Ready Context
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl -z-10 opacity-20 animate-pulse"></span>
                  </span>
                </span>
              </span>
              {/* Desktop: single line */}
              <span className="hidden sm:inline">
                Turn TypeScript Into{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    AI-Ready Context
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl -z-10 opacity-20 animate-pulse"></span>
                </span>
              </span>
            </h1>
          </div>

          {/* Description paragraphs */}
          <div 
            ref={descriptionRef}
            className={`transition-all duration-1000 delay-200 ${
              descriptionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="mt-8 text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 font-medium max-w-4xl mx-auto">
              Deterministic architectural context from your TypeScript codebase - structured component contracts for AI assistants.{' '}
              <span className="text-secondary-700 dark:text-secondary-300 font-semibold">One-time setup, up to 70% token savings.</span>
            </p>
            <p className="mt-4 text-base lg:text-lg text-gray-500 dark:text-gray-400">
              Fast • Deterministic • Open Source
            </p>
          </div>

          {/* Quick install snippet - More prominent */}
          <div 
            ref={installRef}
            className={`transition-all duration-1000 delay-300 ${
              installInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mt-10 sm:mt-12 flex flex-col items-center">
              {/* Tabs */}
              <div className="mb-4 flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 rounded-lg p-1 ring-1 ring-gray-300/50 dark:ring-gray-700/50">
                <button
                  onClick={() => setActiveTab('cli')}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                    activeTab === 'cli'
                      ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  Install the CLI
                </button>
                <button
                  onClick={() => setActiveTab('mcp')}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                    activeTab === 'mcp'
                      ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  Install the MCP
                </button>
              </div>
              
              {/* Install command */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative inline-flex items-center gap-3 rounded-xl bg-white dark:bg-gray-900 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 shadow-xl ring-1 ring-gray-300/50 dark:ring-gray-700/50">
                  <span className="hidden sm:inline text-sm sm:text-base font-bold text-purple-600 dark:text-purple-400" aria-label="Command prompt">
                    $
                  </span>
                  <code className="text-sm sm:text-base lg:text-lg font-mono font-semibold text-gray-900 dark:text-gray-100" aria-label="Installation command">
                    {activeTab === 'cli' ? 'npm install -g logicstamp-context' : 'npm install -g logicstamp-mcp'}
                  </code>
                  <CopyButton 
                    text={activeTab === 'cli' ? 'npm install -g logicstamp-context' : 'npm install -g logicstamp-mcp'} 
                    className="ml-2" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div 
            ref={buttonsRef}
            className={`transition-all duration-1000 delay-400 ${
              buttonsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6">
              <StarGitHubButton />
              <ReadTheDocsButton href="docs/" />
            </div>
          </div>

          {/* MCP Button */}
          <div 
            ref={mcpButtonRef}
            className={`transition-all duration-1000 delay-500 ${
              mcpButtonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mt-10 sm:mt-12 flex items-center justify-center relative">
              <div
                onMouseEnter={() => setMcpHovered(true)}
                onMouseLeave={() => setMcpHovered(false)}
                onTouchStart={() => setMcpHovered(false)}
                className="relative"
              >
                <a
                  href="/docs/mcp"
                  className="inline-flex items-center gap-2 lg:gap-2.5 rounded-full bg-white/80 dark:bg-gray-900/80 px-5 py-2 lg:px-7 lg:py-3 text-base lg:text-lg font-semibold text-gray-900 dark:text-white shadow-lg lg:hover:shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 lg:hover:ring-purple-500 dark:lg:hover:ring-purple-400 backdrop-blur-xl backdrop-saturate-150 transition-all duration-200 lg:hover:-translate-y-0.5"
                >
                  <svg className={`h-5 w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400 transition-transform duration-200 ${mcpHovered ? 'lg:rotate-[15deg]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  MCP Server Ready
                </a>
                
                {/* Tooltip - Desktop only */}
                <div
                  className={`hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-[100] w-80 transition-all duration-300 ease-out ${
                    mcpHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="relative">
                    {/* Arrow - pointing down */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-r border-b border-gray-200 dark:border-gray-700 rotate-45"></div>
                    
                    {/* Tooltip content */}
                    <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-4 backdrop-blur-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-pink-50/50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-pink-950/20 rounded-xl -z-10"></div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 p-2 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 rounded-lg">
                          <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1.5">
                            LogicStamp MCP Server
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Native integration with Claude Desktop, Claude Code, and Cursor. AI assistants can analyze your codebase directly through LogicStamp's MCP server.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Visualization */}
          <div 
            ref={visualizationRef}
            className={`mt-12 transition-all duration-1000 delay-500 ${
              visualizationInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="h-[450px] sm:h-[550px]">
              <EnhancedVisualization inView={visualizationInView} />
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-56 sm:mt-12 sm:hidden">
          <div className="mx-auto max-w-md px-4">
            <a
              href="https://raw.githubusercontent.com/LogicStamp/logicstamp.dev/main/public/logicstamp-workflow.gif"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full rounded-2xl bg-white/60 dark:bg-gray-900/60 border border-gray-200/50 dark:border-white/5 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-4 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent pointer-events-none" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-2">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-bold text-gray-900 dark:text-white truncate">
                    See in Action
                  </h2>
                </div>
                <div className="flex-shrink-0 inline-flex items-center text-gray-900 dark:text-white">
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Workflow Video - Desktop Only */}
        <div 
          ref={workflowGifRef}
          className={`hidden sm:block mt-16 sm:mt-20 transition-all duration-500 delay-300 ${
            workflowGifInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative mx-auto max-w-[1440px] -mx-4 lg:-mx-6 px-4 lg:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">
              LogicStamp in <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Action
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl -z-10 opacity-20 animate-pulse"></span>
              </span>
            </h2>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50 dark:ring-gray-700/50 bg-gray-900">
              <video 
                src="/logicstamp-workflow.mp4" 
                className="w-full h-auto max-h-[1100px] sm:max-h-[1100px] lg:max-h-[1200px] object-contain"
                autoPlay
                loop
                muted
                playsInline
                aria-label="LogicStamp CLI and MCP workflow demonstration"
              />
            </div>
          </div>
        </div>

        {/* GitHub Stats Section */}
        <div 
          ref={statsRef}
          className={`-mt-8 sm:-mt-10 transition-all duration-1000 delay-600 ${
            statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <GitHubStats />
        </div>

        {/* Community & Contribution CTA */}
        <div 
          ref={communityRef}
          className={`transition-all duration-1000 delay-800 ${
            communityInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <CommunityCTA />
        </div>
      </div>
    </section>
  )
}














