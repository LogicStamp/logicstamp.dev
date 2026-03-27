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
  title: '`stamp context style` Command | LogicStamp Context Documentation',
  description:
    'Generate context bundles with style metadata: Tailwind, SCSS, layout patterns, and visual design signals for AI assistants.',
}

const MD_PATH = 'cli/style.md'
const CURRENT_DOC_PATH = MD_PATH
const GITHUB_URL = 'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/style.md'

const PAGE_DESCRIPTION =
  'Extract visual and layout metadata alongside component contracts so assistants can reason about your design system.'

async function getContent() {
  try {
    const result = await getDocWithFallback('context', MD_PATH)
    return { body: stripMarkdownLeadingH1(result.content), error: null as string | null }
  } catch (error) {
    console.error('Error fetching style doc:', error)
    const msg = error instanceof Error ? error.message : 'Unknown'
    const fallback = `# stamp context style\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${msg}`
    return { body: stripMarkdownLeadingH1(fallback), error: msg }
  }
}

export default async function StyleCommandPage() {
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
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50/30 to-fuchsia-50/20 dark:from-violet-950/20 dark:via-purple-950/10 dark:to-fuchsia-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/40 text-violet-700 dark:text-violet-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-violet-200/50 dark:border-violet-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zM4 2a2 2 0 012-2h2.707A2 2 0 018.707 2H15a1 1 0 011 1v4.586a2 2 0 01-.586 1.414L10.5 11.09l-4.293-4.293A1 1 0 015.09 6H4V2z"
                    clipRule="evenodd"
                  />
                </svg>
                Style Metadata
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  stamp context style
                </code>{' '}
                Command
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
          <LogicStampContextRelatedCliNav currentHref="/docs/cli/style" />
        </AnimatedSection>

        <ReadyToGetStartedCard
          variant="green"
          description="See UI framework notes or return to the main context command docs."
          primaryAction={{
            href: '/docs/ui-frameworks',
            label: 'UI Frameworks',
          }}
          secondaryAction={{
            href: '/docs/cli/context',
            label: 'Context Command',
          }}
          delay={650}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
