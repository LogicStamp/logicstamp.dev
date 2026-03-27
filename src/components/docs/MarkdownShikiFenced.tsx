'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { getTabbedCodeHighlighter } from '@/lib/docs/tabbed-code-shiki'
import type { BundledLanguage } from 'shiki/bundle/web'
import { useEffect, useState } from 'react'
import CopyButton from '@/components/ui/CopyButton'

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
      <div className="relative my-4">
        <CopyButton text={code} className="absolute top-2 right-2 lg:right-6 z-10" />
        <div
          className="docs-markdown-shiki min-w-0 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-4 [&_pre.shiki]:!bg-transparent [&_pre.shiki]:m-0 [&_pre.shiki]:p-0 [&_pre.shiki]:text-[0.8125rem] [&_pre.shiki]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    )
  }

  return (
    <div className="relative my-4">
      <CopyButton text={code} className="absolute top-2 right-2 lg:right-6 z-10" />
      <code className="block min-w-0 p-4 max-lg:pb-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {code}
      </code>
    </div>
  )
}
