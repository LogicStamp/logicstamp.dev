/**
 * Shared ReactMarkdown components for LogicStamp docs.
 * Uses react-markdown v10–compatible inline/block detection (no `inline` prop).
 * Regular, minimal styling.
 */

import Link from 'next/link'
import type { Components } from 'react-markdown'
import MarkdownShikiFenced from '@/components/docs/MarkdownShikiFenced'
import { resolveMarkdownFenceLang } from '@/lib/docs/markdown-fence-lang'

export const docsMarkdownComponents: Components = {
  h2: (props) => (
    <h2
      className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white" {...props} />
  ),
  h4: (props) => (
    <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-white" {...props} />
  ),
  // Fenced blocks are `<pre><code class="language-…">`; unwrap `pre` so Shiki’s own `<pre>` is not nested.
  pre: ({ children }) => <>{children}</>,
  code: (props) => {
    const { className, children, ...rest } = props
    const text = String(children).replace(/\n$/, '')
    // react-markdown v10 removed `inline` prop - detect block via language-* class or newlines
    const isBlock = Boolean(className?.includes('language-')) || text.includes('\n')
    if (!isBlock) {
      return (
        <code
          className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-sm font-mono"
          {...rest}
        >
          {children}
        </code>
      )
    }
    const lang = resolveMarkdownFenceLang(className, text)
    return <MarkdownShikiFenced code={text} lang={lang} />
  },
  a: ({ href, children, ...rest }) => {
    const url = href ?? ''
    const isInternal = url.startsWith('/') && !url.startsWith('//')
    const className = 'text-blue-600 dark:text-blue-400 hover:underline'
    if (isInternal) {
      return (
        <Link className={className} href={url}>
          {children}
        </Link>
      )
    }
    return (
      <a
        className={className}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    )
  },
  ul: (props) => (
    <ul className="list-disc list-outside space-y-2 my-4 ml-6" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-outside space-y-2 my-4 ml-6" {...props} />
  ),
  table: (props) => (
    <div className="my-0 w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full min-w-[640px] border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
  ),
  tbody: (props) => (
    <tbody className="bg-white dark:bg-gray-900" {...props} />
  ),
  tr: (props) => (
    <tr className="border-t border-gray-200 dark:border-gray-700" {...props} />
  ),
  th: (props) => (
    <th
      className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300"
      {...props}
    />
  ),
  td: (props) => (
    <td className="px-4 py-2 align-top text-gray-700 dark:text-gray-300" {...props} />
  ),
  li: (props) => (
    <li className="text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
  ),
  hr: (props) => (
    <hr className="my-8 border-gray-200 dark:border-gray-700" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 my-4 text-gray-700 dark:text-gray-300 italic"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
  ),
  strong: (props) => (
    <strong className="font-bold text-gray-900 dark:text-white" {...props} />
  ),
}
