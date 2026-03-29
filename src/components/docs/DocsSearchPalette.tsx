'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { docsNavSections } from '@/lib/docs/docs-nav'

type FlatItem = {
  sectionTitle: string
  title: string
  href: string
}

function flattenNav(): FlatItem[] {
  return docsNavSections.flatMap((section) =>
    section.items.map((item) => ({
      sectionTitle: section.title,
      title: item.title,
      href: item.href,
    }))
  )
}

function matchesQuery(item: FlatItem, q: string): boolean {
  const trimmed = q.trim().toLowerCase()
  if (!trimmed) return true
  const hay = `${item.sectionTitle} ${item.title.replace(/`/g, '')} ${item.href}`.toLowerCase()
  const tokens = trimmed.split(/\s+/).filter(Boolean)
  return tokens.every((t) => hay.includes(t))
}

const MAX_RESULTS = 40

export default function DocsSearchPalette({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const allItems = useMemo(() => flattenNav(), [])
  const results = useMemo(() => {
    const matched = allItems.filter((item) => matchesQuery(item, query))
    return matched.slice(0, MAX_RESULTS)
  }, [allItems, query])

  const safeIndex =
    results.length === 0 ? 0 : Math.min(activeIndex, results.length - 1)

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (!open) return
    setQuery('')
    setActiveIndex(0)
    const id = requestAnimationFrame(() => inputRef.current?.focus())
    return () => cancelAnimationFrame(id)
  }, [open])

  useEffect(() => {
    if (!open || !listRef.current) return
    const row = listRef.current.querySelector<HTMLElement>(`[data-index="${safeIndex}"]`)
    row?.scrollIntoView({ block: 'nearest' })
  }, [open, safeIndex])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!(e.metaKey || e.ctrlKey) || e.key.toLowerCase() !== 'k') return
      if (open) {
        e.preventDefault()
        onOpenChange(false)
        return
      }
      const t = e.target as HTMLElement | null
      if (t?.closest('[contenteditable="true"]')) return
      const tag = t?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      e.preventDefault()
      onOpenChange(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onOpenChange(false)
        return
      }
      if (results.length === 0) return
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(results.length - 1, i + 1))
        return
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(0, i - 1))
        return
      }
      if (e.key === 'Enter') {
        e.preventDefault()
        const item = results[Math.min(activeIndex, results.length - 1)]
        if (item) {
          onOpenChange(false)
          router.push(item.href)
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, results, activeIndex, onOpenChange, router])

  const goTo = (href: string) => {
    onOpenChange(false)
    router.push(href)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4 sm:px-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-[2px]"
        aria-label="Close search"
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="docs-search-title"
        className="relative w-full max-w-lg rounded-xl border border-theme-primary bg-theme-primary shadow-2xl overflow-hidden"
      >
        <h2 id="docs-search-title" className="sr-only">
          Search documentation
        </h2>
        <div className="flex items-center gap-2 border-b border-theme-primary px-3 py-2.5">
          <Search className="w-4 h-4 shrink-0 text-theme-muted" aria-hidden />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs…"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className="flex-1 min-w-0 bg-transparent text-sm text-theme-primary placeholder:text-theme-muted focus:outline-none"
          />
          <kbd className="hidden sm:inline text-[10px] text-theme-muted font-sans px-1.5 py-0.5 rounded border border-theme-primary bg-theme-secondary">
            Esc
          </kbd>
        </div>
        <div
          ref={listRef}
          className="max-h-[min(50vh,320px)] overflow-y-auto py-1 sidebar-scrollable"
        >
          {results.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-theme-tertiary">
              {query.trim() ? 'No pages match.' : 'Type to filter docs.'}
            </p>
          ) : (
            <ul className="space-y-0.5 px-1 pb-1">
              {results.map((item, index) => {
                const active = index === safeIndex
                return (
                  <li key={`${item.href}-${item.title}`}>
                    <button
                      type="button"
                      data-index={index}
                      onClick={() => goTo(item.href)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`w-full text-left rounded-lg px-2.5 py-2 text-sm transition-colors ${
                        active
                          ? 'bg-blue-50 text-blue-900 dark:bg-blue-900/35 dark:text-blue-100'
                          : 'text-theme-primary hover:bg-theme-secondary'
                      }`}
                    >
                      <span className="block font-medium leading-snug">{item.title}</span>
                      <span className="block text-xs text-theme-tertiary mt-0.5">
                        {item.sectionTitle}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        <p className="px-3 py-2 text-[11px] text-theme-muted border-t border-theme-primary">
          <span className="hidden sm:inline">⌘K / Ctrl+K</span>
          <span className="sm:hidden">Keyboard shortcuts</span>
          {' · '}
          Page titles and sidebar only
        </p>
      </div>
    </div>
  )
}
