import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import ReactMarkdown from 'react-markdown'

export const metadata: Metadata = {
  title: 'Migration to v0.3.2 | LogicStamp Context Documentation',
  description: 'Guide for upgrading LogicStamp Context to v0.3.2, including breaking changes and migration steps.',
}

// Read the migration markdown file
async function getMigrationContent(): Promise<string> {
  try {
    const fs = await import('fs/promises')
    const path = await import('path')
    const filePath = path.join(process.cwd(), 'docs', 'context', 'MIGRATION_0.3.2.md')
    const content = await fs.readFile(filePath, 'utf-8')
    return content
  } catch (error) {
    console.error('Error reading migration file:', error)
    return `# Migration Guide: Upgrading to v0.3.2\n\nUnable to load migration guide. Please check the [migration documentation](https://github.com/LogicStamp/logicstamp-context/blob/main/docs/MIGRATION_0.3.2.md) on GitHub.\n\nError: ${error instanceof Error ? error.message : 'Unknown error'}`
  }
}

export default async function MigrationPage() {
  const migrationContent = await getMigrationContent()

  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/30 to-yellow-50/20 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-yellow-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Version Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 text-orange-700 dark:text-orange-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Migration Guide
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Upgrading to v0.3.2
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                Learn how to upgrade LogicStamp Context to v0.3.2, including breaking changes, migration steps, and optional cleanup tasks.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Breaking changes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Mostly automatic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Improved parsing</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* TL;DR Section */}
        <AnimatedSection direction="up" delay={50}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  TL;DR
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                v0.3.2 improves portability by using relative paths instead of absolute paths. Most users won't need any changes - just regenerate your context files. Only custom tools or scripts that parse <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context_main.json</code> may need updates.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-900 dark:prose-p:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:text-gray-900 dark:prose-ul:text-white prose-li:text-gray-900 dark:prose-li:text-white text-gray-900 dark:text-white">
          <AnimatedSection direction="up" delay={100}>
            <ReactMarkdown
              components={{
                h2: (props: any) => {
                  const isBreaking = props.children?.toString().includes('Breaking')
                  return (
                    <div className="relative mt-12 mb-6">
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur opacity-10 dark:opacity-5" />
                      <h2 className={`relative text-2xl sm:text-3xl font-bold pt-6 pb-3 px-4 rounded-xl border-l-4 ${
                        isBreaking 
                          ? 'border-red-500 bg-red-50/50 dark:bg-red-950/20 text-gray-900 dark:text-white' 
                          : 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 text-gray-900 dark:text-white'
                      }`} {...props} />
                    </div>
                  )
                },
                h3: (props: any) => (
                  <div className="mt-8 mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                      {props.children}
                    </h3>
                  </div>
                ),
                h4: (props: any) => (
                  <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white" {...props} />
                ),
                code: (props: any) => {
                  const { inline, ...rest } = props
                  if (inline) {
                    return (
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-sm font-mono" {...rest} />
                    )
                  }
                  return (
                    <div className="relative my-6">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-10 dark:opacity-5" />
                      <code className="relative block p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-mono overflow-x-auto" {...rest} />
                    </div>
                  )
                },
                a: (props: any) => (
                  <a className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline decoration-2 underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />
                ),
                ul: (props: any) => (
                  <ul className="list-disc list-outside space-y-3 my-6 ml-6 marker:text-blue-500 dark:marker:text-blue-400" {...props} />
                ),
                ol: (props: any) => (
                  <ol className="list-decimal list-outside space-y-3 my-6 ml-6 marker:text-blue-500 dark:marker:text-blue-400 marker:font-semibold" {...props} />
                ),
                li: (props: any) => (
                  <li className="text-gray-700 dark:text-gray-300 leading-relaxed pl-2" {...props} />
                ),
                hr: (props: any) => (
                  <div className="relative my-12">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200 dark:border-gray-700" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-sm">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                ),
                blockquote: (props: any) => (
                  <div className="relative my-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-10 dark:opacity-5" />
                    <blockquote className="relative border-l-4 border-blue-500 pl-6 pr-4 py-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-r-lg italic text-gray-700 dark:text-gray-300" {...props} />
                  </div>
                ),
                p: (props: any) => {
                  const text = props.children?.toString() || ''
                  const isImportant = text.includes('✅') || text.includes('⚠️') || text.includes('🧹')
                  
                  if (isImportant) {
                    const isSuccess = text.includes('✅')
                    const isWarning = text.includes('⚠️')
                    const isInfo = text.includes('🧹')
                    
                    return (
                      <div className={`relative my-6 p-4 rounded-xl border-l-4 ${
                        isSuccess 
                          ? 'bg-green-50/50 dark:bg-green-950/20 border-green-500' 
                          : isWarning
                          ? 'bg-yellow-50/50 dark:bg-yellow-950/20 border-yellow-500'
                          : 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-500'
                      }`}>
                        <p className={`text-sm sm:text-base leading-relaxed ${
                          isSuccess 
                            ? 'text-green-800 dark:text-green-200' 
                            : isWarning
                            ? 'text-yellow-800 dark:text-yellow-200'
                            : 'text-blue-800 dark:text-blue-200'
                        }`} {...props} />
                      </div>
                    )
                  }
                  
                  return (
                    <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
                  )
                },
                strong: (props: any) => (
                  <strong className="font-bold text-gray-900 dark:text-white" {...props} />
                ),
              }}
            >
              {migrationContent}
            </ReactMarkdown>
          </AnimatedSection>

          {/* Style Metadata Migration Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-6 sm:mb-8">
                  <div className="p-3 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 rounded-xl flex-shrink-0 -mt-0.5">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white m-0 mb-2">
                      Style Metadata Migration Details
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      Enhanced CSS/SCSS parsing with AST-based extraction
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      What Changed in Style Extraction
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      v0.3.2 introduces AST-based parsing for CSS and SCSS files, replacing the previous regex-based approach. This provides more accurate and comprehensive style metadata extraction.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur opacity-10 dark:opacity-5" />
                        <div className="relative p-5 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-xl border-2 border-red-200 dark:border-red-800">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <h4 className="font-bold text-red-900 dark:text-red-200 text-base sm:text-lg">Before (v0.3.1)</h4>
                          </div>
                          <ul className="text-sm text-red-800 dark:text-red-300 space-y-2 ml-4 list-disc marker:text-red-500">
                            <li>Regex-based parsing</li>
                            <li>Limited selector extraction</li>
                            <li>Basic property detection</li>
                            <li>Limited SCSS feature support</li>
                          </ul>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-10 dark:opacity-5" />
                        <div className="relative p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-200 dark:border-green-800">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <h4 className="font-bold text-green-900 dark:text-green-200 text-base sm:text-lg">After (v0.3.2)</h4>
                          </div>
                          <ul className="text-sm text-green-800 dark:text-green-300 space-y-2 ml-4 list-disc marker:text-green-500">
                            <li>AST-based parsing (more accurate)</li>
                            <li>Complete selector extraction</li>
                            <li>Full property parsing</li>
                            <li>Full SCSS feature support (variables, nesting, mixins)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Impact on Style Metadata
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-10 dark:opacity-5" />
                        <div className="relative p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <h4 className="font-bold text-blue-900 dark:text-blue-200 text-base sm:text-lg">Improved Accuracy</h4>
                          </div>
                          <p className="text-sm text-blue-800 dark:text-blue-300 mb-3">
                            Style metadata is now more accurate and comprehensive:
                          </p>
                          <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-2 ml-4 list-disc marker:text-blue-500">
                            <li>Better detection of CSS selectors and pseudo-classes</li>
                            <li>More accurate SCSS variable and mixin extraction</li>
                            <li>Improved nesting detection in SCSS files</li>
                            <li>Better handling of complex CSS properties</li>
                          </ul>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-xl blur opacity-10 dark:opacity-5" />
                        <div className="relative p-5 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-xl border-2 border-yellow-200 dark:border-yellow-800">
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <h4 className="font-bold text-yellow-900 dark:text-yellow-200 text-base sm:text-lg">Format Differences</h4>
                          </div>
                          <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-3">
                            When regenerating context files with style metadata, you may notice:
                          </p>
                          <ul className="text-sm text-yellow-800 dark:text-yellow-300 space-y-2 ml-4 list-disc marker:text-yellow-500">
                            <li>More detailed <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">scssDetails</code> structure</li>
                            <li>Additional SCSS features detected (variables, mixins, nesting)</li>
                            <li>More comprehensive selector lists</li>
                            <li>Potentially different property extraction format</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Example: SCSS Metadata Changes
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Before (v0.3.1)',
                          code: `{
  "style": {
    "styleSources": {
      "scssModule": "src/components/Button.module.scss",
      "scssDetails": {
        "selectors": [".button", ".primary"],
        "properties": ["background", "color", "padding"]
      }
    }
  }
}`,
                          copyText: `{
  "style": {
    "styleSources": {
      "scssModule": "src/components/Button.module.scss",
      "scssDetails": {
        "selectors": [".button", ".primary"],
        "properties": ["background", "color", "padding"]
      }
    }
  }
}`
                        },
                        {
                          label: 'After (v0.3.2)',
                          code: `{
  "style": {
    "styleSources": {
      "scssModule": "src/components/Button.module.scss",
      "scssDetails": {
        "selectors": [
          ".button",
          ".button.primary",
          ".button:hover",
          ".button:disabled"
        ],
        "properties": [
          "background-color",
          "color",
          "padding",
          "border-radius",
          "transition"
        ],
        "features": {
          "variables": true,
          "nesting": true,
          "mixins": true
        }
      }
    }
  }
}`,
                          copyText: `{
  "style": {
    "styleSources": {
      "scssModule": "src/components/Button.module.scss",
      "scssDetails": {
        "selectors": [
          ".button",
          ".button.primary",
          ".button:hover",
          ".button:disabled"
        ],
        "properties": [
          "background-color",
          "color",
          "padding",
          "border-radius",
          "transition"
        ],
        "features": {
          "variables": true,
          "nesting": true,
          "mixins": true
        }
      }
    }
  }
}`
                        }
                      ]}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Migration Steps for Style Metadata
                    </h3>
                    <div className="space-y-4">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-10 dark:opacity-5" />
                        <div className="relative flex items-start gap-4 p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-200 dark:border-green-800">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white font-bold flex items-center justify-center text-sm shadow-lg">1</div>
                          <div className="flex-1">
                            <p className="font-bold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                              Regenerate Context Files
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                              Run <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded text-xs sm:text-sm font-mono text-green-900 dark:text-green-100">stamp context style</code> or <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded text-xs sm:text-sm font-mono text-green-900 dark:text-green-100">stamp context --include-style</code> to regenerate style metadata with the new AST-based parser.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-10 dark:opacity-5" />
                        <div className="relative flex items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold flex items-center justify-center text-sm shadow-lg">2</div>
                          <div className="flex-1">
                            <p className="font-bold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                              Review Style Metadata
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                              Check that style metadata is more comprehensive. The new format includes additional SCSS features and more detailed selector/property information.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-10 dark:opacity-5" />
                        <div className="relative flex items-start gap-4 p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold flex items-center justify-center text-sm shadow-lg">3</div>
                          <div className="flex-1">
                            <p className="font-bold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                              Update Tools (If Needed)
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                              If you have custom tools that parse style metadata, they should continue to work but may benefit from the additional information now available (SCSS features, more detailed selectors).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-10 dark:opacity-5" />
                    <div className="relative p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500 rounded-r-xl">
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-sm sm:text-base font-semibold text-green-900 dark:text-green-100 mb-1">
                            Non-Breaking Improvement
                          </p>
                          <p className="text-sm sm:text-base text-green-800 dark:text-green-200 leading-relaxed">
                            This is a non-breaking improvement. Existing style metadata consumers will continue to work, but will now receive more accurate and comprehensive data. The schema structure remains the same—only the accuracy and completeness of the extracted data has improved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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

