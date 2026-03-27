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
  title: 'TOON Format | LogicStamp Context Documentation',
  description:
    'Use TOON (Token-Oriented Object Notation) as a compact alternative to JSON for LogicStamp context bundles.',
}

const MD_PATH = 'cli/toon.md'
const CURRENT_DOC_PATH = MD_PATH
const GITHUB_URL = 'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/toon.md'

const PAGE_DESCRIPTION =
  'Emit bundle files in TOON for a smaller token footprint while keeping the same logical structure as JSON.'

async function getContent() {
  try {
    const result = await getDocWithFallback('context', MD_PATH)
    return { body: stripMarkdownLeadingH1(result.content), error: null as string | null }
  } catch (error) {
    console.error('Error fetching toon doc:', error)
    const msg = error instanceof Error ? error.message : 'Unknown'
    const fallback = `# TOON Format\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${msg}`
    return { body: stripMarkdownLeadingH1(fallback), error: msg }
  }
}

export default async function ToonFormatPage() {
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
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-fuchsia-50/30 to-pink-50/20 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-fuchsia-100 dark:from-purple-900/40 dark:to-fuchsia-900/40 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                TOON Format
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  stamp context --format toon
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
          <LogicStampContextRelatedCliNav currentHref="/docs/cli/toon" />
        </AnimatedSection>

        <ReadyToGetStartedCard
          variant="green"
          description="Compare output modes for token cost, or open the main context command docs."
          primaryAction={{
            href: '/docs/cli/compare-modes',
            label: 'Compare Modes',
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
