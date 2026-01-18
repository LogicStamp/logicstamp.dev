'use client'

import React, { useState, useEffect, type ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type DocsNavItem = {
  title: string
  href: string
}

type DocsNavSection = {
  title: string
  items: DocsNavItem[]
}

const sections: DocsNavSection[] = [
  {
    title: 'Overview',
    items: [
      { title: 'Docs Home', href: '/docs' },
      { title: 'What is LogicStamp?', href: '/docs/what-is-logicstamp' },
      { title: 'MCP Overview (Beta)', href: '/docs/mcp' },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      { title: 'CLI - Installation & Quick Start', href: '/docs/getting-started' },
      { title: 'MCP - Installation & Quick Start', href: '/docs/mcp/getting-started' },
    ],
  },
  {
    title: 'Reference',
    items: [
      { title: 'Reference', href: '/docs/reference' },
      { title: 'Complete Reference', href: '/docs/complete-reference' },
      { title: 'Known Limitations', href: '/docs/complete-reference/known-limitations' },
    ],
  },
  {
    title: 'CLI',
    items: [
      { title: 'CLI Hub', href: '/docs/cli' },
      { title: 'CLI Commands', href: '/docs/logicstamp-context/commands' },
      { title: '`security scan` command', href: '/docs/logicstamp-context/security-scan' },
      { title: '`init` command', href: '/docs/logicstamp-context/init' },
      { title: '`context` command', href: '/docs/logicstamp-context/context' },
      { title: '`style` command', href: '/docs/logicstamp-context/style' },
      { title: 'TOON Format', href: '/docs/logicstamp-context/toon' },
      { title: 'Compare Modes', href: '/docs/logicstamp-context/compare-modes' },
      { title: '`compare` command', href: '/docs/logicstamp-context/compare-command' },
      { title: '`validate` command', href: '/docs/logicstamp-context/validate' },
      { title: '`clean` command', href: '/docs/logicstamp-context/clean' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { title: 'TypeScript Support', href: '/docs/logicstamp-context/typescript' },
      { title: 'React Support', href: '/docs/logicstamp-context/react' },
      { title: 'Next.js Support', href: '/docs/logicstamp-context/nextjs' },
      { title: 'Express.js Support', href: '/docs/logicstamp-context/express' },
      { title: 'NestJS Support', href: '/docs/logicstamp-context/nestjs' },
      { title: 'UI Frameworks', href: '/docs/logicstamp-context/ui-frameworks' },
      { title: 'Monorepo Support', href: '/docs/logicstamp-context/monorepo' },
    ],
  },
  {
    title: 'MCP',
    items: [
      { title: 'MCP Reference', href: '/docs/mcp/reference' },
      { title: 'Usage Examples', href: '/docs/mcp/usage' },
      { title: 'Best Practices', href: '/docs/mcp/best-practices' },
      { title: 'Profiles Guide', href: '/docs/mcp/profiles' },
      { title: 'Style Metadata', href: '/docs/mcp/style-metadata' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { title: 'Guides', href: '/docs/guides' },
      { title: 'Usage Guides', href: '/docs/logicstamp-context/usage' },
      { title: 'LLM Context Format', href: '/docs/logicstamp-context/llm-context' },
      { title: 'Best Practices', href: '/docs/best-practices' },
      { title: 'Hashes', href: '/docs/hashes' },
      { title: 'bundleHash (uifb)', href: '/docs/uifb' },
      { title: 'UIF Contracts', href: '/docs/logicstamp-context/uif-contracts' },
      { title: 'Schema', href: '/docs/logicstamp-context/schema' },
    ],
  },
  {
    title: 'Meta',
    items: [
      { title: 'CLI Changelog', href: '/docs/logicstamp-context/changelog' },
      { title: 'MCP Changelog', href: '/docs/mcp/changelog' },
      { title: 'Migration to v0.3.2', href: '/docs/logicstamp-context/migration-0-3-2' },
    ],
  },
]

function isActive(pathname: string, href: string) {
  if (href === '/docs') return pathname === '/docs'
  // Complete Reference should only match exactly, not sub-paths
  if (href === '/docs/complete-reference') return pathname === '/docs/complete-reference'
  // Reference page should match exactly
  if (href === '/docs/reference') return pathname === '/docs/reference'
  return pathname === href || pathname.startsWith(href + '/')
}

function getIcon(href: string): ReactNode {
  if (href === '/docs') {
    // Book / docs icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z" />
      </svg>
    )
  }

  if (href === '/docs/what-is-logicstamp') {
    // Info / question mark icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    )
  }

  if (href === '/docs/reference') {
    // Reference / book icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  }

  if (href === '/docs/complete-reference') {
    // Book / reference icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  }

  if (href.includes('/known-limitations')) {
    // Warning / exclamation icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    )
  }

  if (href === '/docs/cli') {
    // Terminal / CLI icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 7 5 5-5 5" />
        <path d="M12 19h7" />
      </svg>
    )
  }

  if (href.startsWith('/docs/mcp')) {
    // Server / network icon for MCP
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="4" rx="1" />
        <rect x="2" y="7" width="20" height="4" rx="1" />
        <rect x="2" y="11" width="20" height="4" rx="1" />
        <rect x="2" y="15" width="20" height="4" rx="1" />
        <rect x="2" y="19" width="20" height="4" rx="1" />
      </svg>
    )
  }

  if (href.includes('/compare-modes')) {
    // Chart/comparison icon for compare-modes
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    )
  }

  if (href.includes('/security-scan')) {
    // Security / shield icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }

  if (href.includes('/commands') || href.includes('/context') || href.includes('/style') || href.includes('/compare') || href.includes('/validate') || href.includes('/init') || href.includes('/clean')) {
    // Command-style icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    )
  }

  if (href.includes('/usage') || href.includes('/llm-context')) {
    // Guide / flow icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16v4H4z" />
        <path d="M4 12h10v4H4z" />
        <path d="M14 14h6" />
        <path d="M18 10v4" />
      </svg>
    )
  }

  if (href.includes('/uif-contracts')) {
    // Document / contract icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  }

  if (href.includes('/schema')) {
    // Code / schema icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }

  if (href.includes('/changelog')) {
    // History / clock icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    )
  }

  if (href.includes('/migration')) {
    // Migration / upgrade icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
      </svg>
    )
  }

  if (href === '/docs/guides') {
    // Guide / list icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
        <circle cx="9" cy="6" r="1" />
        <circle cx="9" cy="12" r="1" />
        <circle cx="9" cy="18" r="1" />
      </svg>
    )
  }

  if (href === '/docs/best-practices') {
    // Star / award icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }

  if (href === '/docs/hashes') {
    // Hash / pound sign icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <line x1="10" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="14" y2="21" />
      </svg>
    )
  }

  if (href === '/docs/uifb') {
    // Bundle / folder icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7h4l2-3h6l2 3h4v11H3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18" />
      </svg>
    )
  }

  if (href.includes('/nextjs') || href.includes('/nestjs') || href.includes('/react') || href.includes('/express') || href.includes('/typescript') || href.includes('/ui-frameworks') || href.includes('/monorepo')) {
    // Framework / code icon
    return (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
      </svg>
    )
  }

  // Default subtle dot
  return (
    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
  )
}

export default function DocsSidebar() {
  const pathname = usePathname()
  const [isCliOpen, setIsCliOpen] = useState(false)
  const [isGuidesOpen, setIsGuidesOpen] = useState(false)
  const [isReferenceOpen, setIsReferenceOpen] = useState(false)
  const [isFrameworksOpen, setIsFrameworksOpen] = useState(false)
  const [isMcpOpen, setIsMcpOpen] = useState(false)

  // Auto-open CLI section if any CLI item is active
  useEffect(() => {
    const cliSection = sections.find((s) => s.title === 'CLI')
    if (cliSection) {
      const hasActiveCliItem = cliSection.items.some((item) => isActive(pathname, item.href))
      if (hasActiveCliItem) {
        setIsCliOpen(true)
      }
    }
  }, [pathname])

  // Auto-open Guides section if any Guides item is active
  useEffect(() => {
    const guidesSection = sections.find((s) => s.title === 'Guides')
    if (guidesSection) {
      const hasActiveGuidesItem = guidesSection.items.some((item) => isActive(pathname, item.href))
      if (hasActiveGuidesItem) {
        setIsGuidesOpen(true)
      }
    }
  }, [pathname])

  // Auto-open Reference section if any Reference item is active
  useEffect(() => {
    const referenceSection = sections.find((s) => s.title === 'Reference')
    if (referenceSection) {
      const hasActiveReferenceItem = referenceSection.items.some((item) => isActive(pathname, item.href))
      if (hasActiveReferenceItem) {
        setIsReferenceOpen(true)
      }
    }
  }, [pathname])

  // Auto-open Frameworks section if any Frameworks item is active
  useEffect(() => {
    const frameworksSection = sections.find((s) => s.title === 'Frameworks')
    if (frameworksSection) {
      const hasActiveFrameworksItem = frameworksSection.items.some((item) => isActive(pathname, item.href))
      if (hasActiveFrameworksItem) {
        setIsFrameworksOpen(true)
      }
    }
  }, [pathname])

  // Auto-open MCP section if any MCP item is active
  useEffect(() => {
    const mcpSection = sections.find((s) => s.title === 'MCP')
    if (mcpSection) {
      const hasActiveMcpItem = mcpSection.items.some((item) => isActive(pathname, item.href))
      if (hasActiveMcpItem) {
        setIsMcpOpen(true)
      }
    }
  }, [pathname])

  return (
    <nav className="text-sm flex flex-col lg:h-full lg:max-h-[calc(100vh-8rem)]">
      {/* Mascot at the top - fixed, not scrollable */}
      <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700 shrink-0">
        <Link
          href="/docs"
          className="flex items-center justify-center group focus:outline-none"
        >
          <Image
            src="/mascot/logicstamp-fox.svg"
            alt="LogicStamp Fox Mascot"
            width={80}
            height={80}
            priority
            className="w-16 h-16 sm:w-20 sm:h-20 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </Link>
        <p className="mt-3 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
          Meet the Logic{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Fox
          </span>
        </p>
      </div>
      
      {/* Scrollable content starting from Overview */}
      <div className="flex-1 min-h-0 overflow-y-auto lg:pr-2 sidebar-scrollable space-y-7">
        {sections.map((section) => {
          const isCliSection = section.title === 'CLI'
          const isGuidesSection = section.title === 'Guides'
          const isReferenceSection = section.title === 'Reference'
          const isFrameworksSection = section.title === 'Frameworks'
          const isMcpSection = section.title === 'MCP'
          
          return (
            <div key={section.title}>
              {isCliSection ? (
                <>
                  <div className="mb-2 flex items-center gap-2">
                    <button
                      onClick={() => setIsCliOpen(!isCliOpen)}
                      className="flex items-center justify-center w-6 h-6 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 text-sm font-normal transition-colors hover:border-gray-400 dark:hover:border-gray-500 focus:outline-none"
                      aria-expanded={isCliOpen}
                      aria-label={isCliOpen ? 'Collapse CLI section' : 'Expand CLI section'}
                    >
                      {isCliOpen ? '−' : '+'}
                    </button>
                    <button
                      onClick={() => setIsCliOpen(!isCliOpen)}
                      className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer focus:outline-none"
                      aria-label={isCliOpen ? 'Collapse CLI section' : 'Expand CLI section'}
                    >
                      {section.title}
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isCliOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-1">
                      {section.items.map((item) => {
                        const active = isActive(pathname, item.href)
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`block rounded-md border-l-2 px-2 py-1.5 transition-colors ${
                                active
                                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold dark:border-blue-400 dark:bg-blue-900/40 dark:text-blue-200'
                                  : 'border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 hover:text-blue-700 dark:border-transparent dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-blue-200'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <span className="inline-flex items-center justify-center text-gray-400 dark:text-gray-500">
                                  {getIcon(item.href)}
                                </span>
                                <span>{item.title}</span>
                              </span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </>
              ) : isGuidesSection ? (
                <>
                  <div className="mb-2 flex items-center gap-2">
                    <button
                      onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                      className="flex items-center justify-center w-6 h-6 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 text-sm font-normal transition-colors hover:border-gray-400 dark:hover:border-gray-500 focus:outline-none"
                      aria-expanded={isGuidesOpen}
                      aria-label={isGuidesOpen ? 'Collapse Guides section' : 'Expand Guides section'}
                    >
                      {isGuidesOpen ? '−' : '+'}
                    </button>
                    <button
                      onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                      className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer focus:outline-none"
                      aria-label={isGuidesOpen ? 'Collapse Guides section' : 'Expand Guides section'}
                    >
                      {section.title}
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isGuidesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-1">
                      {section.items.map((item) => {
                        const active = isActive(pathname, item.href)
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`block rounded-md border-l-2 px-2 py-1.5 transition-colors ${
                                active
                                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold dark:border-blue-400 dark:bg-blue-900/40 dark:text-blue-200'
                                  : 'border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 hover:text-blue-700 dark:border-transparent dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-blue-200'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <span className="inline-flex items-center justify-center text-gray-400 dark:text-gray-500">
                                  {getIcon(item.href)}
                                </span>
                                <span>{item.title}</span>
                              </span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </>
              ) : isReferenceSection ? (
                <>
                  <div className="mb-2 flex items-center gap-2">
                    <button
                      onClick={() => setIsReferenceOpen(!isReferenceOpen)}
                      className="flex items-center justify-center w-6 h-6 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 text-sm font-normal transition-colors hover:border-gray-400 dark:hover:border-gray-500 focus:outline-none"
                      aria-expanded={isReferenceOpen}
                      aria-label={isReferenceOpen ? 'Collapse Reference section' : 'Expand Reference section'}
                    >
                      {isReferenceOpen ? '−' : '+'}
                    </button>
                    <button
                      onClick={() => setIsReferenceOpen(!isReferenceOpen)}
                      className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer focus:outline-none"
                      aria-label={isReferenceOpen ? 'Collapse Reference section' : 'Expand Reference section'}
                    >
                      {section.title}
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isReferenceOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-1">
                      {section.items.map((item) => {
                        const active = isActive(pathname, item.href)
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`block rounded-md border-l-2 px-2 py-1.5 transition-colors ${
                                active
                                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold dark:border-blue-400 dark:bg-blue-900/40 dark:text-blue-200'
                                  : 'border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 hover:text-blue-700 dark:border-transparent dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-blue-200'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <span className="inline-flex items-center justify-center text-gray-400 dark:text-gray-500">
                                  {getIcon(item.href)}
                                </span>
                                <span>{item.title}</span>
                              </span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </>
              ) : isFrameworksSection ? (
                <>
                  <div className="mb-2 flex items-center gap-2">
                    <button
                      onClick={() => setIsFrameworksOpen(!isFrameworksOpen)}
                      className="flex items-center justify-center w-6 h-6 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 text-sm font-normal transition-colors hover:border-gray-400 dark:hover:border-gray-500 focus:outline-none"
                      aria-expanded={isFrameworksOpen}
                      aria-label={isFrameworksOpen ? 'Collapse Frameworks section' : 'Expand Frameworks section'}
                    >
                      {isFrameworksOpen ? '−' : '+'}
                    </button>
                    <button
                      onClick={() => setIsFrameworksOpen(!isFrameworksOpen)}
                      className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer focus:outline-none"
                      aria-label={isFrameworksOpen ? 'Collapse Frameworks section' : 'Expand Frameworks section'}
                    >
                      {section.title}
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isFrameworksOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-1">
                      {section.items.map((item) => {
                        const active = isActive(pathname, item.href)
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`block rounded-md border-l-2 px-2 py-1.5 transition-colors ${
                                active
                                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold dark:border-blue-400 dark:bg-blue-900/40 dark:text-blue-200'
                                  : 'border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 hover:text-blue-700 dark:border-transparent dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-blue-200'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <span className="inline-flex items-center justify-center text-gray-400 dark:text-gray-500">
                                  {getIcon(item.href)}
                                </span>
                                <span>{item.title}</span>
                              </span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </>
              ) : isMcpSection ? (
                <>
                  <div className="mb-2 flex items-center gap-2">
                    <button
                      onClick={() => setIsMcpOpen(!isMcpOpen)}
                      className="flex items-center justify-center w-6 h-6 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 text-sm font-normal transition-colors hover:border-gray-400 dark:hover:border-gray-500 focus:outline-none"
                      aria-expanded={isMcpOpen}
                      aria-label={isMcpOpen ? 'Collapse MCP section' : 'Expand MCP section'}
                    >
                      {isMcpOpen ? '−' : '+'}
                    </button>
                    <button
                      onClick={() => setIsMcpOpen(!isMcpOpen)}
                      className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer focus:outline-none"
                      aria-label={isMcpOpen ? 'Collapse MCP section' : 'Expand MCP section'}
                    >
                      {section.title}
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isMcpOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-1">
                      {section.items.map((item) => {
                        const active = isActive(pathname, item.href)
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`block rounded-md border-l-2 px-2 py-1.5 transition-colors ${
                                active
                                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold dark:border-blue-400 dark:bg-blue-900/40 dark:text-blue-200'
                                  : 'border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 hover:text-blue-700 dark:border-transparent dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-blue-200'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <span className="inline-flex items-center justify-center text-gray-400 dark:text-gray-500">
                                  {getIcon(item.href)}
                                </span>
                                <span>{item.title}</span>
                              </span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {section.title}
                  </p>
                  <ul className="space-y-1">
                    {section.items.map((item) => {
                      const active = isActive(pathname, item.href)
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block rounded-md border-l-2 px-2 py-1.5 transition-colors ${
                              active
                                ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold dark:border-blue-400 dark:bg-blue-900/40 dark:text-blue-200'
                                : 'border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 hover:text-blue-700 dark:border-transparent dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-blue-200'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="inline-flex items-center justify-center text-gray-400 dark:text-gray-500">
                                {getIcon(item.href)}
                              </span>
                              <span>{item.title}</span>
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
















