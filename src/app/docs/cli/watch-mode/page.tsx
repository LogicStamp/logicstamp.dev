import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import DocsMarkdown from '@/components/docs/DocsMarkdown'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import LogicStampContextRelatedCliNav from '@/components/docs/LogicStampContextRelatedCliNav'
import { getDocWithFallback, stripMarkdownLeadingH1 } from '@/lib/docs'
import { docsBodyTypographyClass } from '@/lib/docs/markdown-styles'

export const metadata: Metadata = {
  title: 'Watch Mode | LogicStamp Context Documentation',
  description:
    'Automatically regenerate context bundles when files change. Incremental rebuilds for fast development feedback.',
}

const MD_PATH = 'cli/watch.md'
const CURRENT_DOC_PATH = MD_PATH
const GITHUB_URL = 'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/watch.md'

const PAGE_DESCRIPTION =
  'Monitor the codebase for changes and rebuild affected context bundles incrementally—ideal for tight edit-compile loops.'

async function getContent() {
  try {
    const result = await getDocWithFallback('context', MD_PATH)
    return { body: stripMarkdownLeadingH1(result.content), error: null as string | null }
  } catch (error) {
    console.error('Error fetching watch doc:', error)
    const msg = error instanceof Error ? error.message : 'Unknown'
    const fallback = `# Watch Mode\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${msg}`
    return { body: stripMarkdownLeadingH1(fallback), error: msg }
  }
}

export default async function WatchModePage() {
  const { body, error } = await getContent()

  return (
    <>
      <DocsLayout>
        {error ? (
          <AnimatedSection direction="up" delay={0}>
            <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
              Could not load the latest doc from GitHub ({error}). Showing fallback content.{' '}
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
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-cyan-50/30 to-teal-50/20 dark:from-sky-950/20 dark:via-cyan-950/10 dark:to-teal-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-sky-100 to-cyan-100 dark:from-sky-900/40 dark:to-cyan-900/40 text-sky-700 dark:text-sky-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-sky-200/50 dark:border-sky-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Mode
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-600 dark:from-sky-400 dark:to-cyan-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  stamp context --watch
                </code>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                {PAGE_DESCRIPTION}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <DocsMarkdown
            source="context"
            currentDocPath={CURRENT_DOC_PATH}
            className={docsBodyTypographyClass}
          >
            {body}
          </DocsMarkdown>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <LogicStampContextRelatedCliNav currentHref="/docs/cli/watch-mode" />
        </AnimatedSection>

        <ReadyToGetStartedCard
          variant="green"
          description="Pair watch mode with style metadata or browse all CLI commands."
          primaryAction={{
            href: '/docs/cli/style',
            label: 'Style Command',
          }}
          secondaryAction={{
            href: '/docs/cli/commands',
            label: 'All Commands',
          }}
          delay={650}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
