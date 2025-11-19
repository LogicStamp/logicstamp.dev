'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type Heading = {
  id: string
  text: string
  level: number
}

export default function DocsTOC() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const pathname = usePathname()

  // Extract headings from the main content
  useEffect(() => {
    const mainContent = document.querySelector('main')
    if (!mainContent) return

    const headingElements = mainContent.querySelectorAll('h2, h3, h4')
    const extractedHeadings: Heading[] = []

    headingElements.forEach((heading) => {
      const text = heading.textContent || ''
      const level = parseInt(heading.tagName.charAt(1))
      
      // Generate ID if not present
      let id = heading.id
      if (!id) {
        id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim()
        heading.id = id
      }

      extractedHeadings.push({ id, text, level })
    })

    setHeadings(extractedHeadings)
  }, [pathname])

  // Track active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return

    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, observerOptions)

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [headings])

  const getIssueUrl = () => {
    const GITHUB_REPO = 'https://github.com/LogicStamp/logicstamp.dev'
    return `${GITHUB_REPO}/issues/new`
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (headings.length === 0) return null

  return (
    <aside className="hidden xl:block w-64 shrink-0 sticky top-24 self-start">
      <div className="flex flex-col max-h-[calc(100vh-8rem)]">
        <div className="flex-shrink-0 mb-3">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
            On this page
          </h2>
        </div>
        <nav className="flex-1 min-h-0 overflow-y-auto space-y-1 sidebar-scrollable pr-2">
          {headings.map((heading) => {
            const isActive = activeId === heading.id
            const indentClass =
              heading.level === 3
                ? 'pl-4'
                : heading.level === 4
                  ? 'pl-6'
                  : 'pl-0'

            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block text-sm py-1.5 transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                } ${indentClass}`}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(heading.id)
                  if (element) {
                    const offset = 100 // Account for sticky header
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                {heading.text}
              </a>
            )
          })}
        </nav>

        <div className="flex-shrink-0 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3 mt-4">
          <a
            href={getIssueUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Found an issue? Open GitHub issue
          </a>
          <button
            onClick={scrollToTop}
            className="block text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
          >
            Back to top
          </button>
        </div>
      </div>
    </aside>
  )
}

