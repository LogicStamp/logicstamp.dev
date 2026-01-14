import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = {
  title: 'Code of Conduct | LogicStamp',
  description: 'Code of Conduct for LogicStamp - Our commitment to fostering an open, welcoming, diverse, inclusive, and healthy community.',
}

export default function CodeOfConductPage() {
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
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {/* Our Pledge Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Our Pledge
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We commit to acting in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
                </p>
              </section>

              {/* Scope Section */}
              <section className="mb-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Scope
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  This Code of Conduct applies to all official community spaces (GitHub issues, pull requests, discussions) and when officially representing the community in public spaces.
                </p>
              </section>

              {/* Enforcement Section */}
              <section className="mb-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Enforcement
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The project maintainer(s) are responsible for enforcing these standards, and additional moderators may be designated as the project grows. They may remove, edit, or reject contributions that violate this Code of Conduct and will communicate moderation decisions when appropriate.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Reporting
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Report violations to{' '}
                  <a
                    href="mailto:logicstamp.dev@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    logicstamp.dev@gmail.com
                  </a>
                  . All complaints will be reviewed promptly and fairly. Reporter privacy will be respected.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Enforcement Guidelines
                </h3>
                <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-4">
                  <li>
                    <strong>Correction</strong> - Inappropriate language or unprofessional behavior
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Private written warning with explanation; public apology may be requested</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Warning</strong> - Single incident or series of violations
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Warning with consequences; no interaction with involved parties for a specified period; violation may lead to ban</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Temporary Ban</strong> - Serious or sustained violations
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Temporary ban from all community interaction; no contact with involved parties; violation may lead to permanent ban</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Permanent Ban</strong> - Pattern of violations, harassment, or aggression toward individuals or groups
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Permanent ban from all community interaction</li>
                    </ul>
                  </li>
                </ol>
              </section>

              {/* Attribution Section */}
              <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Attribution
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 break-words">
                  This Code of Conduct is adapted from the{' '}
                  <a
                    href="https://www.contributor-covenant.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline break-words"
                  >
                    Contributor Covenant
                  </a>
                  , version 2.1, available at{' '}
                  <a
                    href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                  >
                    https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
                  </a>
                  .
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 break-words">
                  Enforcement guidelines were inspired by{' '}
                  <a
                    href="https://github.com/mozilla/diversity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline break-words"
                  >
                    Mozilla's code of conduct enforcement ladder
                  </a>
                  .
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 break-words">
                  For answers to common questions, see{' '}
                  <a
                    href="https://www.contributor-covenant.org/faq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                  >
                    https://www.contributor-covenant.org/faq
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </main>
  )
}
