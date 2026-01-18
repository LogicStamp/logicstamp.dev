import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'UI Frameworks Support | LogicStamp Context Documentation',
  description: 'Learn how LogicStamp Context extracts style metadata from Tailwind CSS, Material UI, ShadCN/UI, Radix UI, Styled Components, CSS/SCSS, and Framer Motion.',
}

export default function UIFrameworksPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50/30 to-indigo-50/20 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-indigo-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                Style Metadata Extraction
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                UI Frameworks Support
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-4 sm:mb-6">
                LogicStamp Context extracts style metadata from popular UI frameworks and styling solutions, including Tailwind CSS, Material UI, ShadCN/UI, Radix UI, Styled Components, CSS/SCSS, and Framer Motion.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Overview Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Overview
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp Context extracts visual and design information from your components when you use the <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--include-style</code> flag or <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context style</code> command. This enables AI assistants to understand your design system, color palettes, spacing patterns, and component styling.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {[
                    { name: 'Tailwind CSS', color: 'from-cyan-500 to-blue-600' },
                    { name: 'Material UI', color: 'from-blue-500 to-indigo-600' },
                    { name: 'ShadCN/UI', color: 'from-gray-600 to-gray-800' },
                    { name: 'Radix UI', color: 'from-purple-500 to-pink-600' },
                    { name: 'Styled Components', color: 'from-pink-500 to-rose-600' },
                    { name: 'CSS/SCSS', color: 'from-indigo-500 to-purple-600' },
                    { name: 'Framer Motion', color: 'from-purple-500 to-indigo-600' },
                  ].map((framework) => (
                    <div
                      key={framework.name}
                      className="p-3 bg-gradient-to-br bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${framework.color} mb-2`} />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{framework.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Usage Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Usage
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Enable style metadata extraction with the style command:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Style Command',
                      code: `# Generate context with style metadata
stamp context style

# Or use the flag
stamp context --include-style

# Style metadata will be included in context bundles
# Extracts: colors, spacing, typography, layout, animations, etc.`,
                      copyText: `# Generate context with style metadata
stamp context style

# Or use the flag
stamp context --include-style

# Style metadata will be included in context bundles
# Extracts: colors, spacing, typography, layout, animations, etc.`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Supported Frameworks - Tailwind */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Tailwind CSS
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp extracts Tailwind CSS utility classes, responsive breakpoints, and design patterns. Classes are categorized by type (layout, spacing, typography, colors, etc.) and variant prefixes are stripped for cleaner organization.
                </p>
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
                  <p className="text-sm text-cyan-800 dark:text-cyan-300 font-semibold mb-2">
                    Extracted categories:
                  </p>
                  <ul className="space-y-1 text-sm text-cyan-800 dark:text-cyan-300 ml-4 list-disc">
                    <li>Layout (flex, grid, container, etc.)</li>
                    <li>Spacing (padding, margin, gap)</li>
                    <li>Typography (font size, weight, line height)</li>
                    <li>Colors (background, text, border)</li>
                    <li>Responsive breakpoints (sm:, md:, lg:, etc.)</li>
                    <li>Pseudo-class variants (hover:, focus:, etc.)</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Material UI */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Material UI (MUI)
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp detects Material UI components, theme usage, and the <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">sx</code> prop for system styling. Component variants, props, and theme values are extracted.
                </p>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-300 font-semibold mb-2">
                    Extracted information:
                  </p>
                  <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300 ml-4 list-disc">
                    <li>MUI component names and imports</li>
                    <li>Component variants and props</li>
                    <li><code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">sx</code> prop styling</li>
                    <li>Theme provider usage</li>
                    <li>Material Design patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ShadCN/UI */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    ShadCN/UI
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp detects ShadCN/UI components from common import paths (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@/components/ui/*</code>), tracks component usage frequency, and extracts Tailwind classes used with ShadCN components.
                </p>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-800 dark:text-gray-300 font-semibold mb-2">
                    Extracted information:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-300 ml-4 list-disc">
                    <li>ShadCN component names and imports</li>
                    <li>Component usage frequency</li>
                    <li>Compound component patterns</li>
                    <li>Tailwind classes used with components</li>
                    <li>Import aliases and mappings</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Radix UI */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Radix UI
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp detects Radix UI primitives and components, extracting component names, props, and styling patterns. Radix UI components are often used with Tailwind CSS or styled-components.
                </p>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-800 dark:text-purple-300 font-semibold mb-2">
                    Extracted information:
                  </p>
                  <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-300 ml-4 list-disc">
                    <li>Radix UI component imports</li>
                    <li>Component props and variants</li>
                    <li>Primitive component usage</li>
                    <li>Accessibility patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Styled Components */}
          <AnimatedSection direction="up" delay={700}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Styled Components & Emotion
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp extracts styled component declarations using AST-based extraction, detecting <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">styled.div</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">styled(Component)</code>, and template literal patterns. Theme usage and CSS prop (Emotion) are also detected.
                </p>
                <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-xl border border-pink-200 dark:border-pink-800">
                  <p className="text-sm text-pink-800 dark:text-pink-300 font-semibold mb-2">
                    Extracted information:
                  </p>
                  <ul className="space-y-1 text-sm text-pink-800 dark:text-pink-300 ml-4 list-disc">
                    <li>Styled component declarations</li>
                    <li>CSS-in-JS patterns</li>
                    <li>Theme provider usage</li>
                    <li>Emotion <code className="px-1 py-0.5 bg-pink-100 dark:bg-pink-900/40 rounded text-xs font-mono">css</code> prop</li>
                    <li>Template literal styles</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CSS/SCSS */}
          <AnimatedSection direction="up" delay={800}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    CSS & SCSS Modules
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp detects CSS Modules and SCSS imports, extracting class names, CSS variables, and styling patterns from your stylesheets.
                </p>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <p className="text-sm text-indigo-800 dark:text-indigo-300 font-semibold mb-2">
                    Extracted information:
                  </p>
                  <ul className="space-y-1 text-sm text-indigo-800 dark:text-indigo-300 ml-4 list-disc">
                    <li>CSS Module class names</li>
                    <li>SCSS variables and mixins</li>
                    <li>CSS custom properties</li>
                    <li>Import patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Framer Motion */}
          <AnimatedSection direction="up" delay={900}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Framer Motion
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp detects Framer Motion animations, variants, and motion components, extracting animation patterns, transition configurations, and gesture handlers.
                </p>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-800 dark:text-purple-300 font-semibold mb-2">
                    Extracted information:
                  </p>
                  <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-300 ml-4 list-disc">
                    <li>Motion component usage</li>
                    <li>Animation variants</li>
                    <li>Transition configurations</li>
                    <li>Gesture handlers</li>
                    <li>Layout animations</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Learn More Section */}
          <AnimatedSection direction="up" delay={1000}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Learn More
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  For detailed information about each UI framework's extraction capabilities, see the individual framework documentation in the <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">docs/context/ui-frameworks/</code> directory.
                </p>
                <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-xl border border-teal-200 dark:border-teal-800">
                  <p className="text-sm text-teal-800 dark:text-teal-300">
                    <strong>Related documentation:</strong> See the{' '}
                    <Link 
                      href="/docs/logicstamp-context/style" 
                      className="text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-100 underline font-medium"
                    >
                      <code className="px-1.5 py-0.5 bg-teal-100 dark:bg-teal-900/40 rounded text-xs font-mono">style</code>
                    </Link>
                    {' '}command documentation for more details on style metadata extraction.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
