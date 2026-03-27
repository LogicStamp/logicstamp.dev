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
  title: 'Strict Modes | LogicStamp Context Documentation',
  description:
    'Compare `stamp context compare --strict` and `--strict-watch`: breaking change detection, violations, and workflows.',
}

const MD_PATH = 'cli/strict-modes.md'
const CURRENT_DOC_PATH = MD_PATH
const GITHUB_URL =
  'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/strict-modes.md'

const PAGE_DESCRIPTION =
  'Understand how compare strict mode and strict watch mode differ—and what they flag during context drift checks.'

async function getContent() {
  try {
    const result = await getDocWithFallback('context', MD_PATH)
    return { body: stripMarkdownLeadingH1(result.content), error: null as string | null }
  } catch (error) {
    console.error('Error fetching strict-modes doc:', error)
    const msg = error instanceof Error ? error.message : 'Unknown'
    const fallback = `# Strict Modes\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${msg}`
    return { body: stripMarkdownLeadingH1(fallback), error: msg }
  }
}

export default async function StrictModesPage() {
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
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50/30 to-amber-50/20 dark:from-red-950/20 dark:via-orange-950/10 dark:to-amber-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/40 dark:to-orange-900/40 text-red-800 dark:text-red-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-red-200/50 dark:border-red-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Strict Modes
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  compare --strict
                </code>
                <span className="text-gray-600 dark:text-gray-400 font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
                  {' '}
                  vs{' '}
                </span>
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  --strict-watch
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
          <LogicStampContextRelatedCliNav currentHref="/docs/cli/strict-modes" />
        </AnimatedSection>

        <ReadyToGetStartedCard
          variant="green"
          description="Use compare for drift checks, or read the full compare command reference."
          primaryAction={{
            href: '/docs/cli/compare',
            label: 'Compare Command',
          }}
          secondaryAction={{
            href: '/docs/cli/watch-mode',
            label: 'Watch Mode',
          }}
          delay={650}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
