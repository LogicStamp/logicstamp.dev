import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import Link from 'next/link'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'

export const metadata: Metadata = {
  title: 'MCP Style Metadata Guide | LogicStamp Context Documentation',
  description: 'Using style metadata in LogicStamp Context MCP: Tailwind classes, SCSS modules, animations, and visual design patterns.',
}

export default function MCPStyleMetadataPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 dark:from-indigo-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                Style Metadata
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Style Metadata Guide
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Extract and analyze visual design information: Tailwind classes, SCSS modules, animations, color palettes, and layout patterns.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Overview */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What is Style Metadata?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Style metadata extracts visual and design information from your components, including Tailwind CSS classes, SCSS modules, framer-motion animations, color palettes, spacing patterns, and layout information.
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Enable style metadata by setting <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">includeStyle: true</code> in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_refresh_snapshot</code>.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Enabling Style Metadata */}
          <AnimatedSection direction="up" delay={200}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Enabling Style Metadata
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                To include style metadata in your bundles, set <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">includeStyle: true</code> when creating a snapshot:
              </p>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Enable Style',
                    code: 'logicstamp_refresh_snapshot({ includeStyle: true })',
                    copyText: 'logicstamp_refresh_snapshot({ includeStyle: true })'
                  }
                ]}
              />
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                <strong>Note:</strong> Style metadata adds ~15-20% token overhead. Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_compare_modes</code> to see the exact cost impact.
              </p>
            </div>
          </AnimatedSection>

          {/* Style Sources */}
          <AnimatedSection direction="up" delay={300}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Style Sources
              </h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tailwind CSS</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Classes are categorized by type:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li><strong>Layout:</strong> flex, grid, container, etc.</li>
                    <li><strong>Spacing:</strong> padding, margin utilities</li>
                    <li><strong>Colors:</strong> bg-*, text-*, border-* classes</li>
                    <li><strong>Typography:</strong> text size, font weight</li>
                    <li><strong>Borders:</strong> border styles, radius</li>
                    <li><strong>Effects:</strong> shadows, opacity, etc.</li>
                  </ul>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    Also includes responsive breakpoints used (sm, md, lg, xl, etc.)
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">SCSS/CSS Modules</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Detects and analyzes SCSS modules:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li>Module imports</li>
                    <li>Selectors and properties</li>
                    <li>SCSS features (variables, nesting, mixins)</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">framer-motion</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Detects animation usage:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li>Motion components used</li>
                    <li>Animation variants</li>
                    <li>Gesture handlers</li>
                    <li>Viewport animations</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Layout Metadata */}
          <AnimatedSection direction="up" delay={400}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Layout Metadata
              </h2>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Layout information includes:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                  <li><strong>Layout Type:</strong> flex or grid</li>
                  <li><strong>Grid Patterns:</strong> Column configurations (e.g., "grid-cols-2 md:grid-cols-3")</li>
                  <li><strong>Hero Patterns:</strong> Detects hero sections (large text + CTA buttons)</li>
                  <li><strong>Feature Cards:</strong> Identifies grid layouts with card-like elements</li>
                  <li><strong>Responsive Breakpoints:</strong> Lists all breakpoints used (sm, md, lg, etc.)</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Visual Metadata */}
          <AnimatedSection direction="up" delay={500}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Visual Metadata
              </h2>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Visual design information extracted:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                  <li><strong>Color Palette:</strong> Extracts color classes (bg-*, text-*, border-*)</li>
                  <li><strong>Spacing Patterns:</strong> Identifies padding and margin utilities used</li>
                  <li><strong>Border Radius:</strong> Detects rounded corner patterns</li>
                  <li><strong>Typography:</strong> Extracts text size and font weight classes</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Animation Metadata */}
          <AnimatedSection direction="up" delay={600}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Animation Metadata
              </h2>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Animation information includes:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                  <li><strong>Animation Library:</strong> framer-motion or CSS</li>
                  <li><strong>Animation Type:</strong> fade-in, slide, etc.</li>
                  <li><strong>Trigger Type:</strong> inView, hover, click, etc.</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* When to Use */}
          <AnimatedSection direction="up" delay={700}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                When to Use Style Metadata
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Use style metadata when:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li>User asks about styling, colors, spacing, animations</li>
                    <li>Analyzing design systems or visual consistency</li>
                    <li>Generating UI components that need to match existing styles</li>
                    <li>Understanding layout patterns</li>
                    <li>UI/UX discussions with AI</li>
                    <li>Frontend code generation</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">⚠ Skip style metadata when:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li>Working on backend logic or API code</li>
                    <li>Token budget is limited</li>
                    <li>Only need component structure and behavior</li>
                    <li>Analyzing non-visual components</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Example */}
          <AnimatedSection direction="up" delay={800}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Example Usage
              </h2>
              
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">USER:</p>
                  <p className="text-sm text-gray-900 dark:text-gray-100">"Analyze my components with style information"</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI → MCP:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Call',
                        code: 'logicstamp_refresh_snapshot({ includeStyle: true })',
                        copyText: 'logicstamp_refresh_snapshot({ includeStyle: true })'
                      }
                    ]}
                  />
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI → MCP:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Read bundle',
                        code: 'logicstamp_read_bundle({ snapshotId: "snap_123", bundlePath: "src/components/context.json" })',
                        copyText: 'logicstamp_read_bundle({ snapshotId: "snap_123", bundlePath: "src/components/context.json" })'
                      }
                    ]}
                  />
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Provides analysis including component structure (props, state, hooks), visual design (colors, spacing, typography), layout patterns (flex vs grid, responsive breakpoints), and animation usage.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Next Steps */}
          <ReadyToGetStartedCard
            variant="purple"
            title="Learn More"
            description="Explore comparison workflows, best practices, and troubleshooting guides."
            primaryAction={{
              href: '/docs/cli/compare-modes',
              label: 'Compare Modes',
            }}
            secondaryAction={{
              href: '/docs/mcp/reference',
              label: 'MCP Reference',
            }}
            showGitHubLink={false}
            delay={900}
          />
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}

