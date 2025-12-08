import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import { Code } from 'lucide-react'

export const metadata: Metadata = {
  title: '`context style` Command | LogicStamp Context Documentation',
  description: 'Generate AI-ready context bundles with style metadata included. Extract visual and layout information from React components.',
}

export default function StyleCommandPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-indigo-50/30 to-blue-50/20 dark:from-violet-950/20 dark:via-indigo-950/10 dark:to-blue-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-900/40 dark:to-indigo-900/40 text-violet-700 dark:text-violet-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-violet-200/50 dark:border-violet-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Style Generation Command
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">stamp context style</code> Command
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Generate AI-ready context bundles with style metadata included. Extract visual and layout information from your React components, making context bundles design-aware for AI assistants.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Syntax Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Syntax
              </h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Syntax',
                    code: 'stamp context style [path] [options]',
                    copyText: 'stamp context style [path] [options]'
                  }
                ]}
              />
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">[path]</strong> (optional) – Directory to scan. Defaults to the current working directory. Paths can be relative (for example, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">./src</code>) or absolute.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  <strong className="text-gray-900 dark:text-white">Note:</strong> The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context style</code> command is equivalent to <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context --include-style</code>. Both syntaxes produce identical output.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  <strong className="text-gray-900 dark:text-white">File Exclusion:</strong> The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context style</code> command respects <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.stampignore</code>, just like <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context</code>. <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.stampignore</code> is completely optional and independent of security scanning.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Overview Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Overview
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  While <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-violet-600 dark:text-violet-400 rounded-md font-mono text-xs sm:text-sm">stamp context</code> focuses on component logic and structure, <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-violet-600 dark:text-violet-400 rounded-md font-mono text-xs sm:text-sm">stamp context style</code> adds visual and layout understanding. This enables AI assistants to:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 ml-4 list-disc">
                  <li>Understand the visual design of components</li>
                  <li>Suggest visually consistent components</li>
                  <li>Analyze layout patterns (flex, grid, responsive breakpoints)</li>
                  <li>Track color palettes and spacing patterns</li>
                  <li>Identify animation and motion usage</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* What It Extracts Section */}
          <AnimatedSection direction="up" delay={250}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                What It Extracts
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                The style command analyzes components and extracts four categories of metadata:
              </p>

              {/* Style Sources */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Style Sources</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  Identifies which styling approaches are used in each component:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-violet-50 dark:bg-violet-950/20 rounded-xl border border-violet-200 dark:border-violet-800">
                    <h4 className="font-semibold text-violet-900 dark:text-violet-200 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 0c-7.343 0-11.647 3.657-13.125 10.973 2.625-3.5 5.67-4.817 9.135-3.952 1.986.466 3.405 1.625 4.977 2.97 2.707 2.375 5.845 5.123 12.178 5.123 7.343 0 11.647-3.657 13.125-10.973-2.625 3.5-5.67 4.817-9.135 3.952-1.986-.466-3.405-1.625-4.977-2.97C32.752 2.375 29.614-.373 27 0zm-13.125 16.5c-7.343 0-11.647 3.657-13.125 10.973 2.625-3.5 5.67-4.817 9.135-3.952 1.986.466 3.405 1.625 4.977 2.97 2.707 2.375 5.845 5.123 12.178 5.123 7.343 0 11.647-3.657 13.125-10.973-2.625 3.5-5.67 4.817-9.135 3.952-1.986-.466-3.405-1.625-4.977-2.97-2.707-2.375-5.845-5.123-12.178-5.123z" fill="#06B6D4"/>
                      </svg>
                      Tailwind CSS
                    </h4>
                    <ul className="text-sm text-violet-800 dark:text-violet-300 space-y-1 ml-4 list-disc">
                      <li>Layout (flex, grid, block, container)</li>
                      <li>Spacing (padding, margin, gap utilities)</li>
                      <li>Sizing (width, height, min/max constraints)</li>
                      <li>Typography (text size, font weight, line height)</li>
                      <li>Colors (background, text, border colors)</li>
                      <li>Borders (border styles, radius)</li>
                      <li>Effects (shadows, opacity, filters)</li>
                      <li>Transitions and animations</li>
                      <li>Responsive breakpoints (sm, md, lg, xl, 2xl)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" fill="#CF649A"/>
                      </svg>
                      SCSS/CSS Modules
                    </h4>
                    <ul className="text-sm text-indigo-800 dark:text-indigo-300 space-y-1 ml-4 list-disc">
                      <li>CSS selectors used</li>
                      <li>CSS properties defined</li>
                      <li>SCSS features (variables, nesting, mixins)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-fuchsia-50 dark:bg-fuchsia-950/20 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800">
                    <h4 className="font-semibold text-fuchsia-900 dark:text-fuchsia-200 mb-2 flex items-center gap-2">
                      <Code className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />
                      Inline Styles
                    </h4>
                    <p className="text-sm text-fuchsia-800 dark:text-fuchsia-300">
                      Detects <code className="px-1 py-0.5 bg-fuchsia-100 dark:bg-fuchsia-900/40 rounded text-xs font-mono">style=&#123;&#123;...&#125;&#125;</code> usage
                    </p>
                  </div>
                  <div className="p-4 bg-violet-50 dark:bg-violet-950/20 rounded-xl border border-violet-200 dark:border-violet-800">
                    <h4 className="font-semibold text-violet-900 dark:text-violet-200 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.41 21l.35-3.507 1.933.518 2.81-9.035L5.41 21zM16.976 0l-1.942.495L4.76 21l1.942-.495L16.976 0zM13.613 8.496l-1.933-.518-3.582 11.508 1.933.518 3.582-11.508z" fill="#DB7093"/>
                      </svg>
                      styled-components/Emotion
                    </h4>
                    <ul className="text-sm text-violet-800 dark:text-violet-300 space-y-1 ml-4 list-disc">
                      <li>Styled component declarations</li>
                      <li>Theme usage</li>
                      <li>CSS prop usage</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800 sm:col-span-2">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="#0055FF"/>
                        <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" fill="#0055FF"/>
                      </svg>
                      framer-motion
                    </h4>
                    <ul className="text-sm text-indigo-800 dark:text-indigo-300 space-y-1 ml-4 list-disc">
                      <li>Motion components (motion.div, motion.button, etc.)</li>
                      <li>Animation variants</li>
                      <li>Gesture handlers</li>
                      <li>Layout animations</li>
                      <li>Viewport-triggered animations</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800 sm:col-span-2">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465v6.928l6 3.465v-6.928l-6-3.465V3.402L0 2.475zm21 0v10.39l3 1.733V7.67l-6-3.465v6.928l-6 3.465v-6.928L21 3.402V2.475z" fill="#007FFF"/>
                      </svg>
                      Material UI
                    </h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1 ml-4 list-disc">
                      <li>Material UI components used (Button, TextField, Card, etc.)</li>
                      <li>Material UI packages imported (@mui/material, @material-ui/core, etc.)</li>
                      <li>Theme usage (useTheme, ThemeProvider, createTheme)</li>
                      <li>sx prop usage for styling</li>
                      <li>styled from @mui/material/styles</li>
                      <li>makeStyles (legacy styling)</li>
                      <li>System props on Box/Stack components</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800 sm:col-span-2">
                    <h4 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      ShadCN/UI
                    </h4>
                    <ul className="text-sm text-emerald-800 dark:text-emerald-300 space-y-1 ml-4 list-disc">
                      <li>ShadCN component names and patterns</li>
                      <li>Component structure (compound components)</li>
                      <li>Variant system usage</li>
                      <li>Tailwind classes used with ShadCN components</li>
                      <li>Form components with React Hook Form</li>
                      <li>Theme support patterns</li>
                      <li>Custom component modifications</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-xl border border-teal-200 dark:border-teal-800 sm:col-span-2">
                    <h4 className="font-semibold text-teal-900 dark:text-teal-200 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#14B8A6" strokeWidth="2" fill="none"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="#14B8A6"/>
                      </svg>
                      Radix UI
                    </h4>
                    <ul className="text-sm text-teal-800 dark:text-teal-300 space-y-1 ml-4 list-disc">
                      <li>Radix UI primitives (@radix-ui/* packages)</li>
                      <li>Component patterns (Dialog, DropdownMenu, Popover, etc.)</li>
                      <li>Accessibility features</li>
                      <li>Compound component patterns</li>
                      <li>Controlled/uncontrolled state patterns</li>
                      <li>Custom styling applied to Radix primitives</li>
                      <li>Tailwind integration with Radix</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic text-center">
                    All trademarks and logos are the property of their respective owners. LogicStamp is an independent open-source project and is not affiliated with or endorsed by the listed frameworks.
                  </p>
                </div>
              </div>

              {/* Layout Metadata */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Layout Metadata</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  Extracts structural layout information:
                </p>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-2 ml-4 list-disc">
                    <li><strong>Layout Type</strong> – Identifies flex or grid layouts</li>
                    <li><strong>Grid Patterns</strong> – Extracts column configurations (e.g., "grid-cols-2 md:grid-cols-3")</li>
                    <li><strong>Hero Patterns</strong> – Detects hero sections (large text + CTA buttons)</li>
                    <li><strong>Feature Cards</strong> – Identifies grid layouts with card-like elements</li>
                    <li><strong>Responsive Breakpoints</strong> – Lists all breakpoints used (sm, md, lg, etc.)</li>
                  </ul>
                </div>
              </div>

              {/* Visual Metadata */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Visual Metadata</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  Captures visual design patterns:
                </p>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <ul className="text-sm text-emerald-800 dark:text-emerald-300 space-y-2 ml-4 list-disc">
                    <li><strong>Color Palette</strong> – Extracts color classes (bg-*, text-*, border-*)</li>
                    <li><strong>Spacing Patterns</strong> – Identifies padding and margin utilities used</li>
                    <li><strong>Border Radius</strong> – Detects rounded corner patterns</li>
                    <li><strong>Typography</strong> – Extracts text size and font weight classes</li>
                  </ul>
                </div>
              </div>

              {/* Animation Metadata */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Animation Metadata</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  Identifies animation and motion usage:
                </p>
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
                  <ul className="text-sm text-amber-800 dark:text-amber-300 space-y-2 ml-4 list-disc">
                    <li><strong>Animation Library</strong> – framer-motion or CSS</li>
                    <li><strong>Animation Type</strong> – fade-in, slide, etc.</li>
                    <li><strong>Trigger Type</strong> – inView, hover, click, etc.</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Options Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Options
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  All options from <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">stamp context</code> are supported. The style command accepts the same flags:
                </p>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Option</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Alias</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--depth &lt;n&gt;</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">-d</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">1</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dependency traversal depth (<code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">0</code> = entry only, <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">1</code> = direct deps, etc.).</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-green-50/30 dark:bg-green-950/20">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs sm:text-sm font-mono">--include-code &lt;mode&gt;</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">-c</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs font-mono">header</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Include <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">none</code>, <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">header</code>, or <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">full</code> source snippets.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--format &lt;fmt&gt;</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">-f</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">json</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Output format: <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">json</code>, <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">pretty</code>, or <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">ndjson</code>.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--out &lt;file&gt;</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">-o</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">context.json</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Output directory or file path.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--max-nodes &lt;n&gt;</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">-m</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">100</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Maximum graph nodes per bundle.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--profile &lt;name&gt;</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-400">—</span>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">llm-chat</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Preset configuration (<code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">llm-chat</code>, <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">llm-safe</code>, <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">ci-strict</code>).</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--strict</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">-s</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Fail when dependencies are missing.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--dry-run</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-400">—</span>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Skip writing the output; display summary only.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--stats</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-400">—</span>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Emit single-line JSON stats (ideal for CI).</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--skip-gitignore</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-400">—</span>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Skip <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.gitignore</code> setup (never prompt or modify).</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--quiet</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">-q</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Suppress verbose output (show only errors).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Example Workflows Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Example Workflows
              </h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Examples',
                    code: `# Generate context with style metadata for entire project
stamp context style

# Scan specific directory with style metadata
stamp context style ./src

# Use with conservative profile
stamp context style --profile llm-safe

# Include full source code with style metadata
stamp context style --include-code full

# Custom output directory
stamp context style --out ./output

# Equivalent syntax using flag
stamp context --include-style`,
                    copyText: `# Generate context with style metadata for entire project
stamp context style

# Scan specific directory with style metadata
stamp context style ./src

# Use with conservative profile
stamp context style --profile llm-safe

# Include full source code with style metadata
stamp context style --include-code full

# Custom output directory
stamp context style --out ./output

# Equivalent syntax using flag
stamp context --include-style`
                  }
                ]}
              />
            </div>
          </AnimatedSection>

          {/* Output Format Section */}
          <AnimatedSection direction="up" delay={450}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Output Format
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Style metadata is included in the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-violet-600 dark:text-violet-400 rounded-md font-mono text-xs sm:text-sm">style</code> field of each component's contract within the context bundle. The structure follows this schema:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'JSON Schema',
                      code: `{
  "type": "UIFContract",
  "kind": "react:component",
  "entryId": "src/components/HeroSection.tsx",
  "style": {
    "styleSources": {
      "tailwind": {
        "categories": {
          "layout": ["flex", "flex-col", "items-center"],
          "spacing": ["py-16", "px-8", "gap-4"],
          "colors": ["bg-black", "text-white", "bg-purple-500"],
          "typography": ["text-4xl", "font-semibold", "leading-tight"],
          "borders": ["rounded-xl", "border-2"],
          "effects": ["shadow-lg", "opacity-90"]
        },
        "breakpoints": ["md", "lg"],
        "classCount": 15
      },
      "scssModule": "./HeroSection.module.scss",
      "scssDetails": {
        "selectors": [".hero", ".title", ".cta"],
        "properties": ["background", "padding", "margin"],
        "features": {
          "variables": true,
          "nesting": true
        }
      },
      "motion": {
        "components": ["div"],
        "variants": ["fadeIn", "slideUp"],
        "features": {
          "gestures": true,
          "viewportAnimations": true
        }
      },
      "materialUI": {
        "components": ["Button", "TextField", "Card"],
        "packages": ["@mui/material", "@mui/icons-material"],
        "features": {
          "usesTheme": true,
          "usesSxProp": true,
          "usesSystemProps": true
        }
      },
      "shadcn": {
        "components": ["Button", "Card", "Dialog"],
        "variants": {
          "Button": ["default", "destructive", "outline"],
          "Card": ["custom-variant"]
        },
        "features": {
          "usesForms": true,
          "usesTheme": true
        }
      },
      "radix": {
        "packages": ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
        "components": ["Dialog", "DialogTrigger", "DialogContent", "DropdownMenu"],
        "features": {
          "accessibility": true,
          "compoundComponents": true
        }
      }
    },
    "layout": {
      "type": "flex",
      "hasHeroPattern": true,
      "hasFeatureCards": false
    },
    "visual": {
      "colors": ["bg-black", "text-white", "bg-purple-500"],
      "spacing": ["py-16", "px-8", "gap-4"],
      "radius": "xl",
      "typography": ["text-4xl", "font-semibold", "leading-tight"]
    },
    "animation": {
      "library": "framer-motion",
      "type": "fade-in",
      "trigger": "inView"
    }
  }
}`,
                      copyText: `{
  "type": "UIFContract",
  "kind": "react:component",
  "entryId": "src/components/HeroSection.tsx",
  "style": {
    "styleSources": {
      "tailwind": {
        "categories": {
          "layout": ["flex", "flex-col", "items-center"],
          "spacing": ["py-16", "px-8", "gap-4"],
          "colors": ["bg-black", "text-white", "bg-purple-500"],
          "typography": ["text-4xl", "font-semibold", "leading-tight"],
          "borders": ["rounded-xl", "border-2"],
          "effects": ["shadow-lg", "opacity-90"]
        },
        "breakpoints": ["md", "lg"],
        "classCount": 15
      },
      "scssModule": "./HeroSection.module.scss",
      "scssDetails": {
        "selectors": [".hero", ".title", ".cta"],
        "properties": ["background", "padding", "margin"],
        "features": {
          "variables": true,
          "nesting": true
        }
      },
      "motion": {
        "components": ["div"],
        "variants": ["fadeIn", "slideUp"],
        "features": {
          "gestures": true,
          "viewportAnimations": true
        }
      },
      "materialUI": {
        "components": ["Button", "TextField", "Card"],
        "packages": ["@mui/material", "@mui/icons-material"],
        "features": {
          "usesTheme": true,
          "usesSxProp": true,
          "usesSystemProps": true
        }
      },
      "shadcn": {
        "components": ["Button", "Card", "Dialog"],
        "variants": {
          "Button": ["default", "destructive", "outline"],
          "Card": ["custom-variant"]
        },
        "features": {
          "usesForms": true,
          "usesTheme": true
        }
      },
      "radix": {
        "packages": ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
        "components": ["Dialog", "DialogTrigger", "DialogContent", "DropdownMenu"],
        "features": {
          "accessibility": true,
          "compoundComponents": true
        }
      }
    },
    "layout": {
      "type": "flex",
      "hasHeroPattern": true,
      "hasFeatureCards": false
    },
    "visual": {
      "colors": ["bg-black", "text-white", "bg-purple-500"],
      "spacing": ["py-16", "px-8", "gap-4"],
      "radius": "xl",
      "typography": ["text-4xl", "font-semibold", "leading-tight"]
    },
    "animation": {
      "library": "framer-motion",
      "type": "fade-in",
      "trigger": "inView"
    }
  }
}`
                    }
                  ]}
                />
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">styleSources</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Object containing detected styling approaches:
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc space-y-1">
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">tailwind</code> – Object with categorized classes, breakpoints, and class count</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">scssModule</code> / <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">cssModule</code> – Path to module file (if imported)</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">scssDetails</code> / <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">cssDetails</code> – Parsed details from style files</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">inlineStyles</code> – Boolean indicating inline style usage</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">styledComponents</code> – Object with component names and theme usage</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">motion</code> – Object with framer-motion components and features</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">materialUI</code> – Object with Material UI components, packages, and styling features</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">shadcn</code> – Object with ShadCN/UI components, variants, and features</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">radix</code> – Object with Radix UI packages, components, and accessibility features</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">layout</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Layout structure information:
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc space-y-1">
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">type</code> – "flex" or "grid"</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">cols</code> – Grid column pattern (e.g., "grid-cols-2 md:grid-cols-3")</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">hasHeroPattern</code> – Boolean indicating hero section pattern</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">hasFeatureCards</code> – Boolean indicating feature card grid pattern</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">visual</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Visual design patterns:
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc space-y-1">
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">colors</code> – Array of color utility classes (sorted, limited to top 10)</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">spacing</code> – Array of spacing utility classes (sorted, limited to top 10)</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">radius</code> – Most common border radius pattern</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">typography</code> – Array of typography classes (sorted, limited to top 10)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">animation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Animation and motion information:
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc space-y-1">
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">library</code> – "framer-motion" or "css"</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">type</code> – Animation type (e.g., "fade-in")</li>
                      <li><code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">trigger</code> – Trigger type (e.g., "inView", "hover")</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-violet-50/50 dark:bg-violet-950/20 border-l-4 border-violet-500 rounded-r-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Note:</strong> Style metadata is only included when style information is detected. Components without style usage will not have a <code className="px-1.5 py-0.5 bg-violet-100 dark:bg-violet-900/40 rounded text-xs font-mono">style</code> field.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Use Cases Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Use Cases
              </h2>
              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/20 dark:to-indigo-950/10 rounded-xl border border-violet-200 dark:border-violet-800">
                  <h3 className="font-semibold text-violet-900 dark:text-violet-200 mb-3 text-base sm:text-lg">Design System Analysis</h3>
                  <p className="text-sm text-violet-800 dark:text-violet-300 mb-3">
                    Understand visual patterns across your codebase:
                  </p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Example',
                        code: 'stamp context style --out design-analysis.json',
                        copyText: 'stamp context style --out design-analysis.json'
                      }
                    ]}
                  />
                  <p className="text-sm text-violet-800 dark:text-violet-300 mt-3">
                    Then analyze the output to track color palette usage, identify spacing pattern consistency, find components using similar layout patterns, and detect animation usage patterns.
                  </p>
                </div>
                <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-3 text-base sm:text-lg">AI-Assisted Design</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-300 mb-3">
                    Enable AI assistants to suggest visually consistent components:
                  </p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Example',
                        code: `# Generate style-aware context
stamp context style

# Share with AI assistant
# AI can now suggest components that match your design system`,
                        copyText: `# Generate style-aware context
stamp context style

# Share with AI assistant
# AI can now suggest components that match your design system`
                      }
                    ]}
                  />
                </div>
                <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/10 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <h3 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-3 text-base sm:text-lg">Layout Understanding</h3>
                  <p className="text-sm text-emerald-800 dark:text-emerald-300 mb-3">
                    Help AI understand component structure:
                  </p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Example',
                        code: 'stamp context style --include-code header',
                        copyText: 'stamp context style --include-code header'
                      }
                    ]}
                  />
                  <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-3">
                    AI assistants can now understand flex vs grid layouts, recognize responsive breakpoint usage, identify hero sections and feature card grids, and suggest layout improvements.
                  </p>
                </div>
                <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-3 text-base sm:text-lg">Animation Detection</h3>
                  <p className="text-sm text-amber-800 dark:text-amber-300 mb-3">
                    Identify components with motion:
                  </p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Example',
                        code: 'stamp context style',
                        copyText: 'stamp context style'
                      }
                    ]}
                  />
                  <p className="text-sm text-amber-800 dark:text-amber-300 mt-3">
                    The output helps you find all components using framer-motion, track animation patterns across the codebase, identify viewport-triggered animations, and understand gesture handler usage.
                  </p>
                </div>
                <div className="p-5 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/10 rounded-xl border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-3 text-base sm:text-lg">Style Consistency</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mb-3">
                    Track design system adherence:
                  </p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Example',
                        code: 'stamp context style --stats',
                        copyText: 'stamp context style --stats'
                      }
                    ]}
                  />
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-3">
                    Use the output to verify color palette consistency, check spacing pattern usage, ensure typography scale adherence, and monitor border radius patterns.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Integration Section */}
          <AnimatedSection direction="up" delay={550}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Integration with Other Commands
              </h2>
              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-3 text-base sm:text-lg">Validation</h3>
                  <p className="text-sm text-green-800 dark:text-green-300 mb-3">
                    Style metadata is validated along with the rest of the context:
                  </p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Example',
                        code: `stamp context style
stamp context validate`,
                        copyText: `stamp context style
stamp context validate`
                      }
                    ]}
                  />
                </div>
                <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-3 text-base sm:text-lg">Comparison</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-300 mb-3">
                    Style metadata is included in drift detection:
                  </p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Example',
                        code: `stamp context style --out old/
# ... make changes ...
stamp context style --out new/
stamp context compare old/context_main.json new/context_main.json`,
                        copyText: `stamp context style --out old/
# ... make changes ...
stamp context style --out new/
stamp context compare old/context_main.json new/context_main.json`
                      }
                    ]}
                  />
                  <p className="text-sm text-blue-800 dark:text-blue-300 mt-3">
                    The compare command will detect changes in style sources (added/removed Tailwind classes, etc.), layout patterns, visual metadata, and animation configurations.
                  </p>
                </div>
                <div className="p-5 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/20 dark:to-indigo-950/10 rounded-xl border border-violet-200 dark:border-violet-800">
                  <h3 className="font-semibold text-violet-900 dark:text-violet-200 mb-3 text-base sm:text-lg">Token Impact</h3>
                  <p className="text-sm text-violet-800 dark:text-violet-300 mb-3">
                    Style metadata adds a small token overhead to context bundles. Use <code className="px-1.5 py-0.5 bg-violet-100 dark:bg-violet-900/40 rounded text-xs font-mono">stamp context --compare-modes</code> to see the token impact across different modes.
                  </p>
                  <p className="text-sm text-violet-800 dark:text-violet-300 mb-3">
                    The <code className="px-1.5 py-0.5 bg-violet-100 dark:bg-violet-900/40 rounded text-xs font-mono">--compare-modes</code> flag automatically regenerates contracts with and without style metadata to provide accurate token counts. This shows you:
                  </p>
                  <ul className="text-sm text-violet-800 dark:text-violet-300 ml-4 list-disc space-y-1 mb-3">
                    <li><strong>Exact token overhead</strong> of including style metadata (header vs header+style)</li>
                    <li><strong>Comparison across all modes</strong> – none, header, header+style, and full</li>
                    <li><strong>Savings percentages</strong> compared to both raw source and full context</li>
                  </ul>
                  <p className="text-sm text-violet-800 dark:text-violet-300">
                    See <a href="/docs/logicstamp-context/compare-modes" className="text-violet-600 dark:text-violet-400 hover:underline">COMPARE-MODES.md</a> for a comprehensive guide to token cost analysis and mode comparison.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Tips Section */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Tips
                  </h2>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 ml-4 list-disc">
                  <li><strong className="text-gray-900 dark:text-white">Start with default</strong> – The default <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">header</code> code mode works well for most use cases</li>
                  <li><strong className="text-gray-900 dark:text-white">Use profiles</strong> – Combine with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--profile llm-safe</code> for token-constrained scenarios</li>
                  <li><strong className="text-gray-900 dark:text-white">Incremental updates</strong> – Style metadata is included in folder-based context files, enabling incremental regeneration</li>
                  <li><strong className="text-gray-900 dark:text-white">CI integration</strong> – Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--stats</code> to track style metadata size in CI pipelines</li>
                  <li><strong className="text-gray-900 dark:text-white">Design reviews</strong> – Generate style context before design system reviews to understand current patterns</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Limitations Section */}
          <AnimatedSection direction="up" delay={650}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Limitations
                  </h2>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 ml-4 list-disc">
                  <li><strong className="text-gray-900 dark:text-white">Dynamic classes</strong> – Classes generated dynamically (e.g., <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">className=&#123;clsx(...)&#125;</code>) may not be fully detected</li>
                  <li><strong className="text-gray-900 dark:text-white">CSS-in-JS</strong> – Only styled-components, emotion, and Material UI styled are detected; other CSS-in-JS libraries may not be recognized</li>
                  <li><strong className="text-gray-900 dark:text-white">External stylesheets</strong> – Global CSS files are not analyzed; only module imports are parsed</li>
                  <li><strong className="text-gray-900 dark:text-white">Runtime styles</strong> – Styles applied via JavaScript at runtime are not detected</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Examples Section */}
          <AnimatedSection direction="up" delay={700}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Examples
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Basic Usage</h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Output',
                        code: `$ stamp context style

🔍 Scanning /path/to/project...
⚙️  Analyzing components...
🎨 Extracting style metadata...
🔗 Building dependency graph...
📦 Generating context...
✅ Context generated with style metadata

📊 Summary:
   Total components: 15
   Components with style: 12
   Style sources detected:
     - Tailwind: 10 components
     - SCSS modules: 3 components
     - framer-motion: 2 components
     - Material UI: 5 components
     - ShadCN/UI: 4 components
     - Radix UI: 3 components`,
                        copyText: `$ stamp context style

🔍 Scanning /path/to/project...
⚙️  Analyzing components...
🎨 Extracting style metadata...
🔗 Building dependency graph...
📦 Generating context...
✅ Context generated with style metadata

📊 Summary:
   Total components: 15
   Components with style: 12
   Style sources detected:
     - Tailwind: 10 components
     - SCSS modules: 3 components
     - framer-motion: 2 components
     - Material UI: 5 components
     - ShadCN/UI: 4 components
     - Radix UI: 3 components`
                      }
                    ]}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">With Custom Options</h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Example',
                        code: `$ stamp context style ./src --profile llm-safe --out ./style-context

🔍 Scanning ./src...
⚙️  Analyzing components...
🎨 Extracting style metadata...
...
✅ Context generated with style metadata`,
                        copyText: `$ stamp context style ./src --profile llm-safe --out ./style-context

🔍 Scanning ./src...
⚙️  Analyzing components...
🎨 Extracting style metadata...
...
✅ Context generated with style metadata`
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Related Commands Section */}
          <AnimatedSection direction="up" delay={750}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Related Commands
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="/docs/logicstamp-context/context" className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
                    <code className="text-sm font-mono">stamp context</code>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Generate context without style metadata
                  </p>
                </a>
                <a href="/docs/logicstamp-context/validate" className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
                    <code className="text-sm font-mono">stamp context validate</code>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Validate generated context files
                  </p>
                </a>
                <a href="/docs/logicstamp-context/compare-command" className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
                    <code className="text-sm font-mono">stamp context compare</code>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Compare context files including style changes
                  </p>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}















