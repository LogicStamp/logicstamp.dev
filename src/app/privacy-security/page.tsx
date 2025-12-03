import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = {
  title: 'Privacy & Security | LogicStamp',
  description: 'Privacy policy and security information for LogicStamp - Learn how we protect your data and handle security vulnerabilities.',
}

export default function PrivacySecurityPage() {
  return (
    <main className="min-h-screen" aria-label="Privacy and Security Policy">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 mt-8 md:mt-12">
        <AnimatedSection direction="up" delay={0}>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Privacy & Security
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Last updated: December 2025
            </p>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              {/* Privacy Policy Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Privacy Policy
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Information We Collect
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  LogicStamp is committed to protecting your privacy. We collect minimal information necessary to provide our services. We only collect this information if you actively choose to subscribe to the newsletter or contact us.
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Email Address:</strong> If you subscribe to our newsletter, we collect your email address to send you updates about LogicStamp.
                  </li>
                  <li>
                    <strong>Subscription Metadata:</strong> We store a timestamp of when you subscribed and an internal ID for managing the list. This is stored securely in our database (Supabase).
                  </li>
                  <li>
                    <strong>Theme Preference:</strong> We store your theme preference (light/dark mode) locally in your browser using localStorage (and, where needed, similar browser storage mechanisms). This information is not transmitted to our servers.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  How We Use Your Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We use the information we collect solely for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>To send you newsletter updates (if you've subscribed)</li>
                  <li>To maintain your theme preference across sessions</li>
                  <li>To improve our website and services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Data Storage and Security
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Email addresses are stored in Supabase with Row-Level Security (RLS) enabled, ensuring only authorized service operations can access subscriber data. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Cookies and Local Storage
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We do not use cookies on this website. We only use localStorage (and, where needed, similar browser storage mechanisms) to store your theme preference locally on your device. This essential local storage is not shared with third parties and can be cleared at any time through your browser settings.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We do not use analytics tools or third-party tracking scripts (such as Google Analytics, Meta Pixel, etc.) on this site.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Third-Party Services
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We use the following third-party services:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Supabase:</strong> Supabase acts as our data processor for subscriber emails. Their security and privacy practices are described in their own privacy policy.
                  </li>
                  <li>
                    <strong>Google Fonts:</strong> We load fonts statically from Google Fonts to improve website performance. When your browser requests these fonts, Google Fonts may receive your device's IP address. Google may collect usage data as described in their privacy policy. The fonts are served as static assets and do not involve cookies or tracking beyond what Google's infrastructure may log.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Data Controller
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  LogicStamp is the data controller for personal information collected through this website. For questions or concerns about data processing, please contact us at{' '}
                  <a
                    href="mailto:logicstamp.dev@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    logicstamp.dev@gmail.com
                  </a>
                  .
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Your Rights
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Unsubscribe from our newsletter at any time</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Every newsletter email contains an unsubscribe link that allows you to opt out immediately. You can also contact us directly to exercise any of these rights at{' '}
                  <a
                    href="mailto:logicstamp.dev@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    logicstamp.dev@gmail.com
                  </a>
                  .
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Data Retention
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We retain your email address for as long as you remain subscribed to our newsletter. If you unsubscribe using the link in our emails or contact us to remove your data, we will delete your email address from our database. Theme preferences stored in your browser remain until you clear them.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Changes to This Privacy Policy
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              {/* Security Policy Section */}
              <section className="mb-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Security Policy
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Reporting a Vulnerability
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Please <strong>do not</strong> report security vulnerabilities through public GitHub issues.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Instead, please report them via email to the maintainers:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:logicstamp.dev@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    logicstamp.dev@gmail.com
                  </a>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We aim to acknowledge your email within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Please include the following information with your report:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>The type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)</li>
                  <li>Full paths of source file(s) related to the manifestation of the issue</li>
                  <li>The location of the affected source code (tag/branch/commit or direct URL)</li>
                  <li>Any special configuration required to reproduce the issue</li>
                  <li>Step-by-step instructions to reproduce the issue</li>
                  <li>Proof-of-concept or exploit code (if possible)</li>
                  <li>Impact of the issue, including how an attacker might exploit the issue</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  This information will help us triage your report more quickly.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  What to Expect
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  After you submit a security report:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Acknowledgement:</strong> We aim to acknowledge your email within 48 hours and provide a more detailed response within 7 days indicating the next steps in handling your report.
                  </li>
                  <li>
                    <strong>Verification:</strong> We'll verify the issue and determine its severity and impact.
                  </li>
                  <li>
                    <strong>Fix Development:</strong> If accepted, we'll develop a fix in a private repository to prevent premature disclosure.
                  </li>
                  <li>
                    <strong>Release:</strong> We'll release a patch version addressing the vulnerability and credit you for the discovery (unless you prefer to remain anonymous).
                  </li>
                </ol>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We appreciate your efforts to responsibly disclose your findings and will make every effort to acknowledge your contributions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We do not currently offer a formal bug bounty program, but we are happy to credit researchers who help us improve LogicStamp.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  Security When Using LogicStamp Context
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  LogicStamp Context reads your local source files, does not execute them, never makes network requests, and only writes output files (such as <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">context.json</code> and <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">context_main.json</code>) into your project directory. For the full CLI security policy, see the{' '}
                  <a
                    href="https://github.com/LogicStamp/logicstamp-context/blob/main/SECURITY.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    LogicStamp Context SECURITY.md on GitHub
                  </a>
                  .
                </p>
              </section>

              {/* Contact Section */}
              <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you have any questions about this Privacy & Security Policy, please contact us at{' '}
                  <a
                    href="mailto:logicstamp.dev@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    logicstamp.dev@gmail.com
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















