import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'Changelog | LogicStamp Context Documentation',
  description: 'Notable changes and release notes for the LogicStamp Context CLI.',
}

export default function ChangelogPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              Changelog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              All notable user-facing changes to LogicStamp Context are tracked here. The project follows Semantic
              Versioning and a Keep a Changelog-style format.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 text-gray-800 dark:text-gray-100">
            <AnimatedSection direction="up" delay={100}>
              <h2>0.1.2 – Unified CLI</h2>
              <h3>Breaking Changes</h3>
              <p>
                The CLI has been unified under a single <code>stamp</code> binary for better usability and future
                expansion.
              </p>
              <pre>
                <code>{`# Old commands (deprecated)
logicstamp-context [path]
logicstamp-validate [file]
logicstamp-context compare old new

# New commands
stamp context [path]
stamp context validate [file]
stamp context compare old new`}</code>
              </pre>
              <p>
                Migration is straightforward: replace <code>logicstamp-context</code> with <code>stamp context</code>{' '}
                and <code>logicstamp-validate</code> with <code>stamp context validate</code>.
              </p>

              <h3>Highlights</h3>
              <ul>
                <li>Automatic validation on context generation before writing files.</li>
                <li>Improved help output and a cleaner command structure.</li>
                <li>Single binary prepares the ecosystem for a broader <code>@logicstamp/cli</code> package.</li>
              </ul>
            </AnimatedSection>
          </div>
        </DocsLayout>
      <Footer />
    </>
  )
}


