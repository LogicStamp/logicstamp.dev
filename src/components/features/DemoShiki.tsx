'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { getTabbedCodeHighlighter } from '@/lib/docs/tabbed-code-shiki'
import type { BundledLanguage } from 'shiki/bundle/web'
import { useCallback, useEffect, useRef, useState } from 'react'

export function inferDemoLang(fileName: string): BundledLanguage {
  const lower = fileName.toLowerCase()
  if (lower.endsWith('.tsx')) return 'tsx'
  if (lower.endsWith('.jsx')) return 'jsx'
  if (lower.endsWith('.ts')) return 'typescript'
  if (lower.endsWith('.js')) return 'javascript'
  return 'tsx'
}

const shikiPreReset =
  '[&_pre.shiki]:!m-0 [&_pre.shiki]:!bg-transparent [&_pre.shiki]:!p-0 [&_pre.shiki]:overflow-visible [&_pre.shiki]:font-mono'

type StaticProps = {
  code: string
  lang: BundledLanguage
  className?: string
  fallbackClassName?: string
}

/** Read-only Shiki (e.g. formatted JSON in the demo output card). */
export function DemoShikiStatic({
  code,
  lang,
  className = '',
  fallbackClassName = '',
}: StaticProps) {
  const { isDarkMode } = useTheme()
  const theme = isDarkMode ? 'one-dark-pro' : 'github-light'
  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const highlighter = await getTabbedCodeHighlighter()
        const out = highlighter.codeToHtml(code, { lang, theme })
        if (!cancelled) setHtml(out)
      } catch {
        if (!cancelled) setHtml(null)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [code, lang, theme])

  if (html) {
    return (
      <div
        className={`demo-shiki-static min-w-0 max-w-full ${shikiPreReset} ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return (
    <pre
      className={`font-mono whitespace-pre-wrap break-all text-gray-800 dark:text-gray-100 ${fallbackClassName}`}
    >
      {code}
    </pre>
  )
}

type EditorProps = {
  value: string
  onChange: (value: string) => void
  lang: BundledLanguage
  placeholder?: string
  disabled?: boolean
}

/** Highlight mirror: no scrollbars — scroll position is synced from the textarea only. */
const HIGHLIGHT_LAYER =
  'pointer-events-none absolute inset-0 h-full w-full overflow-hidden p-6 font-mono text-sm leading-6 [tab-size:2]'

/** Single scroll container for both axes (avoids stacked scrollbars from two overflow:auto layers). */
const TEXTAREA_LAYER =
  'absolute inset-0 z-[1] h-full w-full min-h-0 min-w-0 resize-none overflow-auto overscroll-contain border-0 bg-transparent p-6 font-mono text-sm leading-6 whitespace-pre [tab-size:2] [-webkit-overflow-scrolling:touch] text-transparent caret-zinc-900 focus:outline-none focus:ring-0 dark:caret-zinc-100 selection:bg-sky-500/25 dark:selection:bg-sky-400/30 placeholder:text-gray-400 dark:placeholder:text-gray-500'

/** Editable textarea with Shiki highlight layer (synced scroll). */
export function DemoShikiEditor({
  value,
  onChange,
  lang,
  placeholder,
  disabled,
}: EditorProps) {
  const { isDarkMode } = useTheme()
  const theme = isDarkMode ? 'one-dark-pro' : 'github-light'
  const [html, setHtml] = useState<string | null>(null)
  const highlightRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    let cancelled = false
    const source = value.length === 0 ? '\n' : value
    ;(async () => {
      try {
        const highlighter = await getTabbedCodeHighlighter()
        const out = highlighter.codeToHtml(source, { lang, theme })
        if (!cancelled) setHtml(out)
      } catch {
        if (!cancelled) setHtml(null)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [value, lang, theme])

  const onScroll = useCallback(() => {
    const ta = textareaRef.current
    const hi = highlightRef.current
    if (!ta || !hi) return
    hi.scrollTop = ta.scrollTop
    hi.scrollLeft = ta.scrollLeft
  }, [])

  return (
    <div className="relative h-[min(400px,_70vh)] min-h-[240px] w-full min-w-0 lg:h-[min(350px,_65vh)]">
      <div
        ref={highlightRef}
        className={`${HIGHLIGHT_LAYER} bg-gray-50 dark:bg-gray-900`}
        aria-hidden
      >
        {html ? (
          <div
            className={`min-h-full min-w-max ${shikiPreReset} [&_pre.shiki]:!overflow-hidden [&_pre.shiki]:text-sm [&_pre.shiki]:leading-6`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <pre className="invisible whitespace-pre font-mono text-sm leading-6">{value || '\n'}</pre>
        )}
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onScroll={onScroll}
        disabled={disabled}
        placeholder={placeholder}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        className={TEXTAREA_LAYER}
      />
    </div>
  )
}
