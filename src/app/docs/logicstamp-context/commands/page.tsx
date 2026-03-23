import { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import DocsMarkdown from '@/components/docs/DocsMarkdown'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { getDocWithFallback, parseCliCommandsDoc, resolveMdDocHref, type CommandsTableRow } from '@/lib/docs'
import { docsMarkdownComponents } from '@/lib/docs/markdown-components'

const MD_PATH = 'cli/commands.md'
const CURRENT_DOC_PATH = MD_PATH
const GITHUB_URL =
  'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/commands.md'

const mdInline: Partial<Components> = {
  ...docsMarkdownComponents,
  p: ({ children }) => <span className="text-inherit">{children}</span>,
}

function MdInline({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      <ReactMarkdown components={mdInline as Components}>{text}</ReactMarkdown>
    </span>
  )
}

function rowHighlightClass(command: string): string {
  const c = command.replace(/`/g, '').toLowerCase()
  if (c.includes('stamp ignore')) {
    return 'bg-blue-50/30 dark:bg-blue-950/20'
  }
  if (c.includes('stamp security scan')) {
    return 'bg-red-50/30 dark:bg-red-950/20'
  }
  if (c.includes('stamp context style')) {
    return 'bg-pink-50/30 dark:bg-pink-950/20'
  }
  if (
    c.includes('stamp context') &&
    !c.includes('style') &&
    !c.includes('validate') &&
    !c.includes('compare') &&
    !c.includes('clean')
  ) {
    return 'bg-blue-50/30 dark:bg-blue-950/20'
  }
  return ''
}

const INTERACTION_CARDS = [
  {
    border: 'border-indigo-200 dark:border-indigo-800',
    bg: 'from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/10',
    icon: 'text-indigo-600 dark:text-indigo-400',
    path: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    border: 'border-purple-200 dark:border-purple-800',
    bg: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10',
    icon: 'text-purple-600 dark:text-purple-400',
    path: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    border: 'border-red-200 dark:border-red-800',
    bg: 'from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10',
    icon: 'text-red-600 dark:text-red-400',
    path: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    border: 'border-green-200 dark:border-green-800',
    bg: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10',
    icon: 'text-green-600 dark:text-green-400',
    path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    border: 'border-pink-200 dark:border-pink-800',
    bg: 'from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/10',
    icon: 'text-pink-600 dark:text-pink-400',
    path: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  },
  {
    border: 'border-purple-200 dark:border-purple-800',
    bg: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10',
    icon: 'text-purple-600 dark:text-purple-400',
    path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    border: 'border-amber-200 dark:border-amber-800',
    bg: 'from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10',
    icon: 'text-amber-600 dark:text-amber-400',
    path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    border: 'border-rose-200 dark:border-rose-800',
    bg: 'from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/10',
    icon: 'text-rose-600 dark:text-rose-400',
    path: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
  },
] as const

type SeeAlsoVisual = {
  border: string
  bg: string
  hoverBorder: string
  icon: string
  path: string
}

const SEE_ALSO_BY_HREF: Partial<Record<string, SeeAlsoVisual>> = {
  '/docs/logicstamp-context/context': {
    border: 'border-blue-200 dark:border-blue-800',
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    hoverBorder: 'hover:border-blue-300 dark:hover:border-blue-700',
    icon: 'text-blue-600 dark:text-blue-400',
    path: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  '/docs/logicstamp-context/watch-mode': {
    border: 'border-cyan-200 dark:border-cyan-800',
    bg: 'bg-cyan-50 dark:bg-cyan-950/20',
    hoverBorder: 'hover:border-cyan-300 dark:hover:border-cyan-700',
    icon: 'text-cyan-600 dark:text-cyan-400',
    path: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  },
  '/docs/logicstamp-context/style': {
    border: 'border-pink-200 dark:border-pink-800',
    bg: 'bg-pink-50 dark:bg-pink-950/20',
    hoverBorder: 'hover:border-pink-300 dark:hover:border-pink-700',
    icon: 'text-pink-600 dark:text-pink-400',
    path: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  },
  '/docs/logicstamp-context/compare-modes': {
    border: 'border-violet-200 dark:border-violet-800',
    bg: 'bg-violet-50 dark:bg-violet-950/20',
    hoverBorder: 'hover:border-violet-300 dark:hover:border-violet-700',
    icon: 'text-violet-600 dark:text-violet-400',
    path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  '/docs/logicstamp-context/compare': {
    border: 'border-amber-200 dark:border-amber-800',
    bg: 'bg-amber-50 dark:bg-amber-950/20',
    hoverBorder: 'hover:border-amber-300 dark:hover:border-amber-700',
    icon: 'text-amber-600 dark:text-amber-400',
    path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  '/docs/logicstamp-context/init': {
    border: 'border-green-200 dark:border-green-800',
    bg: 'bg-green-50 dark:bg-green-950/20',
    hoverBorder: 'hover:border-green-300 dark:hover:border-green-700',
    icon: 'text-green-600 dark:text-green-400',
    path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  '/docs/guides/usage': {
    border: 'border-teal-200 dark:border-teal-800',
    bg: 'bg-teal-50 dark:bg-teal-950/20',
    hoverBorder: 'hover:border-teal-300 dark:hover:border-teal-700',
    icon: 'text-teal-600 dark:text-teal-400',
    path: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  '/docs/logicstamp-context/validate': {
    border: 'border-purple-200 dark:border-purple-800',
    bg: 'bg-purple-50 dark:bg-purple-950/20',
    hoverBorder: 'hover:border-purple-300 dark:hover:border-purple-700',
    icon: 'text-purple-600 dark:text-purple-400',
    path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  '/docs/logicstamp-context/security-scan': {
    border: 'border-red-200 dark:border-red-800',
    bg: 'bg-red-50 dark:bg-red-950/20',
    hoverBorder: 'hover:border-red-300 dark:hover:border-red-700',
    icon: 'text-red-600 dark:text-red-400',
    path: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
}

const SEE_ALSO_FALLBACK: SeeAlsoVisual = {
  border: 'border-gray-200 dark:border-gray-800',
  bg: 'bg-gray-50 dark:bg-gray-950/20',
  hoverBorder: 'hover:border-gray-300 dark:hover:border-gray-700',
  icon: 'text-gray-600 dark:text-gray-400',
  path: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
}

function seeAlsoVisual(href: string): SeeAlsoVisual {
  return SEE_ALSO_BY_HREF[href] ?? SEE_ALSO_FALLBACK
}

function CommandTableRow({ row }: { row: CommandsTableRow }) {
  const hi = rowHighlightClass(row.command)
  const cmdCodeTone = hi.includes('blue')
    ? '[&_code]:bg-blue-100 dark:[&_code]:bg-blue-900/40 [&_code]:text-blue-900 dark:[&_code]:text-blue-100'
    : hi.includes('red')
      ? '[&_code]:bg-red-100 dark:[&_code]:bg-red-900/40 [&_code]:text-red-900 dark:[&_code]:text-red-100'
      : hi.includes('pink')
        ? '[&_code]:bg-pink-100 dark:[&_code]:bg-pink-900/40 [&_code]:text-pink-900 dark:[&_code]:text-pink-100'
        : '[&_code]:bg-gray-100 dark:[&_code]:bg-gray-800 [&_code]:text-gray-900 dark:[&_code]:text-gray-100'

  return (
    <tr className={`hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors ${hi}`}>
      <td className="px-2 sm:px-6 py-4 align-top whitespace-nowrap">
        <MdInline
          text={row.command}
          className={`text-xs sm:text-sm font-mono rounded ${cmdCodeTone} [&_code]:px-2 [&_code]:py-1 [&_code]:rounded`}
        />
      </td>
      <td className="px-2 sm:px-6 py-4 align-top text-sm text-gray-600 dark:text-gray-400">
        <MdInline text={row.summary} />
      </td>
      <td className="px-2 sm:px-6 py-4 align-top text-sm text-gray-600 dark:text-gray-400">
        <MdInline text={row.whenToUse} />
      </td>
      <td className="px-2 sm:px-6 py-4 align-top text-sm text-gray-600 dark:text-gray-400">
        <MdInline text={row.keyOptions} />
      </td>
    </tr>
  )
}

export const metadata: Metadata = {
  title: 'LogicStamp Context Commands | Documentation',
  description:
    'Overview of the LogicStamp Context stamp CLI commands, global options, and how they interact.',
}

async function loadParsed() {
  try {
    const { content } = await getDocWithFallback('context', MD_PATH)
    return { parsed: parseCliCommandsDoc(content), raw: content, error: null as string | null }
  } catch (error) {
    console.error('Error fetching commands doc:', error)
    const msg = error instanceof Error ? error.message : 'Unknown'
    const fallback = `# Commands\n\nUnable to load documentation from GitHub. [Open source on GitHub](${GITHUB_URL}).\n\nError: ${msg}`
    return {
      parsed: parseCliCommandsDoc(fallback),
      raw: fallback,
      error: msg,
    }
  }
}

export default async function LogicStampCommandsPage() {
  const { parsed, error } = await loadParsed()
  const quickRef = parsed.quickReferenceBash || '# (Quick reference unavailable)'

  return (
    <>
      <DocsLayout>
        {error ? (
          <AnimatedSection direction="up" delay={0}>
            <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
              Could not load the latest commands doc from GitHub ({error}). Showing fallback content.{' '}
              <a
                href={GITHUB_URL}
                className="font-medium text-amber-950 underline dark:text-amber-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              .
            </div>
          </AnimatedSection>
        ) : null}

        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              Commands
            </h1>
            {parsed.introMarkdown ? (
              <DocsMarkdown
                className="prose prose-lg dark:prose-invert max-w-3xl prose-p:text-base prose-p:sm:text-lg prose-p:md:text-xl prose-p:lg:text-2xl prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed prose-p:mb-0 max-w-3xl"
                source="context"
                currentDocPath={CURRENT_DOC_PATH}
              >
                {parsed.introMarkdown}
              </DocsMarkdown>
            ) : (
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
                LogicStamp Context ships as a single CLI entry point,{' '}
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">stamp</code>
                , with{' '}
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                  context
                </code>{' '}
                subcommands.
              </p>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Global Options
                </h2>
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                These options are available at the top level (before any subcommand):
              </p>

              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Option
                      </th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Alias
                      </th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">
                          --version
                        </code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">
                          -v
                        </code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        Show version number and exit
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">
                          --quiet
                        </code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">
                          -q
                        </code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        Suppress non-error output
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">
                          --help
                        </code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">
                          -h
                        </code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        Show help message and exit
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 sm:mt-6 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <h4 className="text-sm sm:text-base font-semibold text-indigo-900 dark:text-indigo-200 mb-2 sm:mb-3">
                  Examples:
                </h4>
                <div className="space-y-2 font-mono text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp --version</code>
                    <span className="text-gray-600 dark:text-gray-400"># Shows: fox mascot + version</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp -v</code>
                    <span className="text-gray-600 dark:text-gray-400"># Same as --version</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp context --quiet</code>
                    <span className="text-gray-600 dark:text-gray-400"># Suppress non-error output</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp context -q</code>
                    <span className="text-gray-600 dark:text-gray-400"># Same as --quiet</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp --help</code>
                    <span className="text-gray-600 dark:text-gray-400"># Shows main help</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp -h</code>
                    <span className="text-gray-600 dark:text-gray-400"># Same as --help</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Available Commands
                </h2>
              </div>

              {parsed.tableRows.length > 0 ? (
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Command
                        </th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Summary
                        </th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          When to use
                        </th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Key options
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      {parsed.tableRows.map((row, i) => (
                        <CommandTableRow key={i} row={row} />
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  No command table found in the source doc. See{' '}
                  <a
                    href={GITHUB_URL}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    commands.md on GitHub
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Command Interactions
            </h2>
            <div className="space-y-4">
              {parsed.interactionBullets.length > 0
                ? parsed.interactionBullets.map((bullet, i) => {
                    const card = INTERACTION_CARDS[i % INTERACTION_CARDS.length]
                    return (
                      <div
                        key={i}
                        className={`flex items-start gap-3 p-4 bg-gradient-to-br ${card.bg} rounded-xl border ${card.border}`}
                      >
                        <svg
                          className={`w-5 h-5 ${card.icon} mt-0.5 flex-shrink-0`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.path} />
                        </svg>
                        <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 min-w-0 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono [&_strong]:text-gray-900 [&_strong]:dark:text-white">
                          <ReactMarkdown components={mdInline as Components}>{bullet}</ReactMarkdown>
                        </div>
                      </div>
                    )
                  })
                : null}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={300}>
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Quick Reference
            </h2>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Quick Reference',
                  code: quickRef,
                  copyText: quickRef,
                },
              ]}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={400}>
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              See Also
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
              For detailed documentation on specific features and commands:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {parsed.seeAlso.map((item, i) => {
                const url = resolveMdDocHref('context', CURRENT_DOC_PATH, item.href)
                if (!url) return null
                const v = seeAlsoVisual(url)
                return (
                  <Link
                    key={`${url}-${i}`}
                    href={url}
                    className={`group p-4 ${v.bg} rounded-xl border ${v.border} ${v.hoverBorder} transition-all`}
                  >
                    <div className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 ${v.icon} mt-0.5 flex-shrink-0`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={v.path} />
                      </svg>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:opacity-90 transition-opacity">
                          <span className="inline [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono">
                            <ReactMarkdown components={mdInline as Components}>{item.description}</ReactMarkdown>
                          </span>
                          <span className="text-blue-600 dark:text-blue-400"> →</span>
                        </h3>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </AnimatedSection>

        <ReadyToGetStartedCard
          variant="green"
          description="Initialize your project and generate your first context bundle."
          primaryAction={{
            href: '/docs/logicstamp-context/init',
            label: 'Initialize Project',
          }}
          secondaryAction={{
            href: '/docs/getting-started',
            label: 'Getting Started Guide',
          }}
          delay={650}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
