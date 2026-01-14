import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import ReactMarkdown from 'react-markdown'

export const metadata: Metadata = {
  title: 'Code of Conduct | LogicStamp',
  description: 'Code of Conduct for LogicStamp - Our commitment to fostering an open, welcoming, diverse, inclusive, and healthy community.',
}

// Force dynamic rendering to ensure Code of Conduct updates are reflected immediately
export const dynamic = 'force-dynamic'
export const revalidate = 0

// GitHub raw content URL for the Code of Conduct
const CODE_OF_CONDUCT_URL = 'https://raw.githubusercontent.com/LogicStamp/logicstamp.dev/main/CODE_OF_CONDUCT.md'

// Read the Code of Conduct markdown file
async function getCodeOfConductContent(): Promise<string> {
  // Try fetching from GitHub first (works in serverless/production)
  try {
    const response = await fetch(CODE_OF_CONDUCT_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        'Accept': 'text/markdown',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch Code of Conduct: ${response.statusText}`)
    }

    return await response.text()
  } catch (fetchError) {
    // If GitHub fetch fails, fallback to local file (works in development)
    try {
      const fs = await import('fs/promises')
      const path = await import('path')
      const filePath = path.join(process.cwd(), 'CODE_OF_CONDUCT.md')
      const content = await fs.readFile(filePath, 'utf-8')
      return content
    } catch (localError) {
      // If both fail, show error message
      console.error('Error fetching Code of Conduct from GitHub:', fetchError)
      console.error('Error reading Code of Conduct file:', localError)
      return `# Code of Conduct\n\nUnable to load Code of Conduct. Please check the [Code of Conduct](https://github.com/LogicStamp/logicstamp.dev/blob/main/CODE_OF_CONDUCT.md) on GitHub.\n\nError: ${fetchError instanceof Error ? fetchError.message : 'Unknown error'}`
    }
  }
}

export default async function CodeOfConductPage() {
  const cocContent = await getCodeOfConductContent()

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 mt-8 md:mt-12">
        <AnimatedSection direction="up" delay={0}>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Code of Conduct
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Our commitment to fostering an open, welcoming, diverse, inclusive, and healthy community
            </p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300">
              <ReactMarkdown
                components={{
                  h2: (props) => (
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 pt-8 first:border-t-0 first:pt-0" {...props} />
                  ),
                  h3: (props) => (
                    <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white" {...props} />
                  ),
                  p: (props) => (
                    <p className="text-gray-700 dark:text-gray-300 mb-4 break-words" {...props} />
                  ),
                  a: (props: any) => (
                    <a className="text-blue-600 dark:text-blue-400 hover:underline break-words" target="_blank" rel="noopener noreferrer" {...props} />
                  ),
                  ol: (props) => (
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-4" {...props} />
                  ),
                  ul: (props) => (
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300" {...props} />
                  ),
                  li: (props) => (
                    <li className="text-gray-700 dark:text-gray-300" {...props} />
                  ),
                  strong: (props) => (
                    <strong className="font-semibold text-gray-900 dark:text-white" {...props} />
                  ),
                }}
              >
                {cocContent}
              </ReactMarkdown>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </main>
  )
}
