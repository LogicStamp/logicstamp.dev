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
  title: '`stamp security scan` Command | LogicStamp Context Documentation',
  description:
    'Scan your project for secrets and sensitive data locally before they are committed. Integrated with stamp init.',
}

const MD_PATH = 'cli/security-scan.md'
const CURRENT_DOC_PATH = MD_PATH
const GITHUB_URL =
  'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/security-scan.md'

const PAGE_DESCRIPTION =
  'Run a local-only security scan for API keys, tokens, and common secret patterns—nothing leaves your machine.'

async function getContent() {
  try {
    const result = await getDocWithFallback('context', MD_PATH)
    return { body: stripMarkdownLeadingH1(result.content), error: null as string | null }
  } catch (error) {
    console.error('Error fetching security-scan doc:', error)
    const msg = error instanceof Error ? error.message : 'Unknown'
    const fallback = `# Security Scan\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${msg}`
    return { body: stripMarkdownLeadingH1(fallback), error: msg }
  }
}

export default async function SecurityScanPage() {
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
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-red-50/30 to-orange-50/20 dark:from-rose-950/20 dark:via-red-950/10 dark:to-orange-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-rose-100 to-red-100 dark:from-rose-900/40 dark:to-red-900/40 text-rose-800 dark:text-rose-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-rose-200/50 dark:border-rose-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Security Scan
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 dark:from-rose-400 dark:to-red-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  stamp security scan
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
          <LogicStampContextRelatedCliNav currentHref="/docs/cli/security-scan" />
        </AnimatedSection>

        <ReadyToGetStartedCard
          variant="green"
          description="Initialize a project with security checks, or browse all CLI commands."
          primaryAction={{
            href: '/docs/cli/init',
            label: 'stamp init',
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
