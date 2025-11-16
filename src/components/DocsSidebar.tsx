'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

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
      { title: 'CLI Hub', href: '/docs/logicstamp-context' },
    ],
  },
  {
    title: 'Getting Started',
    items: [{ title: 'Installation & Quick Start', href: '/docs/getting-started' }],
  },
  {
    title: 'CLI',
    items: [
      { title: 'CLI Commands', href: '/docs/logicstamp-context/commands' },
      { title: '`context` command', href: '/docs/logicstamp-context/context' },
      { title: '`compare` command', href: '/docs/logicstamp-context/compare-command' },
      { title: '`validate` command', href: '/docs/logicstamp-context/validate' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { title: 'Usage Guides', href: '/docs/logicstamp-context/usage' },
      { title: 'LLM Context Format', href: '/docs/logicstamp-context/llm-context' },
    ],
  },
  {
    title: 'Meta',
    items: [{ title: 'Changelog', href: '/docs/logicstamp-context/changelog' }],
  },
]

function isActive(pathname: string, href: string) {
  if (href === '/docs') return pathname === '/docs'
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

  if (href === '/docs/logicstamp-context') {
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

  if (href.includes('/commands') || href.includes('/context') || href.includes('/compare') || href.includes('/validate')) {
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

  // Default subtle dot
  return (
    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
  )
}

export default function DocsSidebar() {
  const pathname = usePathname()

  return (
    <nav className="text-sm space-y-7">
      {sections.map((section) => (
        <div key={section.title}>
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
        </div>
      ))}
    </nav>
  )
}


