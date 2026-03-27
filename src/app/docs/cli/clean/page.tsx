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
  title: '`stamp context clean` Command | LogicStamp Context Documentation',
  description:
    'Remove all generated context artifacts from your project. Safe by default (dry run), requires --all --yes to actually delete files.',
}

const MD_PATH = 'cli/clean.md'
const CURRENT_DOC_PATH = MD_PATH
const GITHUB_URL = 'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/cli/clean.md'

async function getContent() {
  try {
    const result = await getDocWithFallback('context', MD_PATH)
    return { body: stripMarkdownLeadingH1(result.content), error: null as string | null }
  } catch (error) {
    console.error('Error fetching clean doc:', error)
    const msg = error instanceof Error ? error.message : 'Unknown'
    const fallback = `# stamp context clean Command\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${msg}`
    return { body: stripMarkdownLeadingH1(fallback), error: msg }
  }
}

export default async function CleanCommandPage() {
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
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50/30 to-red-50/20 dark:from-rose-950/20 dark:via-pink-950/10 dark:to-red-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40 text-rose-700 dark:text-rose-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-rose-200/50 dark:border-rose-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Cleanup Command
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-400 dark:to-pink-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  stamp context clean
                </code>{' '}
                Command
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Remove all generated context artifacts from your project. Safe by default (dry run),
                requires{' '}
                <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-rose-600 dark:text-rose-400 rounded-md font-mono text-xs sm:text-sm">
                  --all --yes
                </code>{' '}
                to actually delete files.
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
          <LogicStampContextRelatedCliNav currentHref="/docs/cli/clean" />
        </AnimatedSection>

        <ReadyToGetStartedCard
          variant="green"
          description="Explore other commands or browse the Reference section for schema and contracts."
          primaryAction={{
            href: '/docs/cli/commands',
            label: 'All Commands',
          }}
          secondaryAction={{
            href: '/docs/cli/context',
            label: 'Generate Context',
          }}
          delay={650}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
