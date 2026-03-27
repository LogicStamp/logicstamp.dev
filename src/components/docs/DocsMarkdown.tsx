import ReactMarkdown from 'react-markdown'
import { docsMarkdownComponents } from '@/lib/docs/markdown-components'
import { remarkRewriteDocLinks } from '@/lib/docs/rewrite-doc-links'
import type { DocSource } from '@/lib/docs'
import remarkGfm from 'remark-gfm'

interface DocsMarkdownProps {
  children: string
  className?: string
  /** When rendering GitHub-imported docs, pass these to rewrite internal .md links to website URLs */
  source?: DocSource
  currentDocPath?: string
}

export default function DocsMarkdown({
  children,
  className,
  source,
  currentDocPath,
}: DocsMarkdownProps) {
  const remarkPlugins: any[] = [remarkGfm]
  if (source != null && currentDocPath != null) {
    remarkPlugins.push([remarkRewriteDocLinks, { source, currentDocPath }])
  }

  const proseClasses =
    className ??
    'prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-900 dark:prose-p:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:text-gray-900 dark:prose-ul:text-white prose-li:text-gray-900 dark:prose-li:text-white text-gray-900 dark:text-white'

  return (
    <div
      className={`min-w-0 max-w-full break-words [&_a]:break-all [&_table]:my-0 [&_table]:!my-0 [&_thead_th]:py-2 [&_tbody_td]:py-2 ${proseClasses}`}
    >
      <ReactMarkdown
        remarkPlugins={remarkPlugins as any}
        components={docsMarkdownComponents}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
