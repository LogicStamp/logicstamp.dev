'use client'

import Link from 'next/link'
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

export default function DocsSidebar() {
  const pathname = usePathname()

  return (
    <nav className="text-sm">
      {sections.map((section) => (
        <div key={section.title} className="mb-6">
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
                    className={`block rounded-md px-2 py-1.5 transition-colors ${
                      active
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-200 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.title}
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


