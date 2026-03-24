'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { getTabbedCodeHighlighter } from '@/lib/docs/tabbed-code-shiki'
import type { BundledLanguage } from 'shiki/bundle/web'
import { useEffect, useState } from 'react'

type Props = {
  code: string
  lang: BundledLanguage
}

export default function MarkdownShikiFenced({ code, lang }: Props) {
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
        try {
          const highlighter = await getTabbedCodeHighlighter()
          const out = highlighter.codeToHtml(code, { lang: 'bash', theme })
          if (!cancelled) setHtml(out)
        } catch {
          if (!cancelled) setHtml(null)
        }
      }
    })()
    return () => {
      cancelled = true
    }
  }, [code, lang, theme])

  if (html) {
    return (
      <div
        className="docs-markdown-shiki my-4 min-w-0 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-4 [&_pre.shiki]:!bg-transparent [&_pre.shiki]:m-0 [&_pre.shiki]:p-0 [&_pre.shiki]:text-[0.8125rem] [&_pre.shiki]:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return (
    <code className="block min-w-0 p-4 max-lg:pb-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-mono overflow-x-auto my-4 whitespace-pre-wrap">
      {code}
    </code>
  )
}
