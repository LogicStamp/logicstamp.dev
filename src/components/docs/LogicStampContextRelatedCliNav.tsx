import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import { docsMarkdownComponents } from '@/lib/docs/markdown-components'
import { logicStampContextRelatedCliNavExcept } from '@/lib/docs/logicstamp-context-cli-nav'

/** Titles match hand-written Related Commands (`text-sm font-mono`, no pill). */
const mdInline: Partial<Components> = {
  ...docsMarkdownComponents,
  p: ({ children }) => <span className="text-inherit">{children}</span>,
  code: (props) => (
    <code className="text-sm font-mono text-gray-900 dark:text-white" {...props} />
  ),
}

function MdInline({ text }: { text: string }) {
  return <ReactMarkdown components={mdInline as Components}>{text}</ReactMarkdown>
}

type Props = {
  /** Path of the current doc page; excluded from the grid */
  currentHref: string
  heading?: string
}

export default function LogicStampContextRelatedCliNav({
  currentHref,
  heading = 'Related Commands',
}: Props) {
  const items = logicStampContextRelatedCliNavExcept(currentHref)

  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        {heading}
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-green-500 dark:md:hover:border-green-500 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              <MdInline text={item.titleMd} />
              <span> →</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
