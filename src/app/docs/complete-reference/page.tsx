import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import DocsLayout from '@/components/docs/DocsLayout'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'

export const metadata: Metadata = {
  title: 'Complete Reference | LogicStamp Context Documentation',
  description: 'Complete documentation for LogicStamp Context CLI including all commands, options, features, and examples. Supports React, Vue 3, and TypeScript projects.',
}

export default function CompleteReferencePage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              Complete Reference
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
              Comprehensive documentation for LogicStamp Context CLI - all commands, options, features, examples, and troubleshooting guides. Supports React, Vue 3, and TypeScript projects.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">8 Commands</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">20+ Options</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">3 Profiles</span>
                </div>
            </div>
          </div>
        </AnimatedSection>

        {/* MCP Integration Section */}
        <AnimatedSection direction="up" delay={50}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  MCP Server Integration (Beta v0.2.1)
                </h2>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                LogicStamp Context now includes a <strong className="text-gray-900 dark:text-white">Model Context Protocol (MCP) server</strong> that enables AI assistants like Claude Desktop and Claude Code to analyze your codebase directly. The MCP server wraps the CLI and provides 4 core tools for snapshot-based analysis, component contracts, style metadata, and drift detection.
              </p>
              
              <div className="bg-indigo-50 dark:bg-indigo-950/20 border-l-4 border-indigo-500 p-3 sm:p-4 rounded-r-lg mb-4 sm:mb-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-indigo-900 dark:text-indigo-200">💡 Key Benefits:</span> Install once, use everywhere. No manual file sharing—AI assistants can read component contracts, analyze style metadata, and verify changes automatically. Perfect for iterative development workflows.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/docs/mcp"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  MCP Server Documentation
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* What's New Section */}
        <AnimatedSection direction="up" delay={100}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  What's New
                </h2>
              </div>
              
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed space-y-3">
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.7.2</strong> added git baseline comparison with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">--baseline git:&lt;ref&gt;</code> for CI/CD workflows, full contract comparison (state, variables, API signatures, prop/emit type changes), hash-only filtering, and git-ignored file filtering for deterministic comparisons.
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.7.1</strong> enhanced strict watch mode with session-level statistics, automatic watch enablement with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">--strict-watch</code>, normalized path display, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">--verbose</code> flag for detailed output, and improved watch mode file organization.
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.7.0</strong> changed style mode default to <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">lean</code> (breaking change), added security awareness warnings, improved watch mode style caching, and enhanced file lock consistency on Windows.
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.6.0</strong> added runtime schema validation (AJV-enforced), fail-closed contract loading, path traversal protection, and security updates. Node.js &gt;= 20 now required.
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.5.5</strong> improved strict watch mode with state-based diffing (like git diff), watch mode cleanup reliability on Windows/Cursor, and atomic writes.
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.5.4</strong> added graceful shutdown with centralized cleanup registry, improved debug logging, and reduced duplicated error handling.
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.5.3</strong> fixed JSON schema validation, race conditions, memory leaks, Windows path bugs, and improved performance (O(n²) → O(n) dependency collection).
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.5.2</strong> fixed JSON Schema completeness issues and documentation gaps.
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.5.1</strong> completed CSS-in-JS library support with Chakra UI and Ant Design, bringing coverage to all major CSS-in-JS libraries.
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.5.0</strong> introduced strict watch mode, schema improvements (BREAKING changes), and performance optimizations.
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.4.x</strong> added watch mode with incremental rebuilds (v0.4.1) and backend framework support for Express.js and NestJS (v0.4.0).
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">v0.3.x</strong> releases included Next.js App Router features, dynamic Tailwind parsing, Vue.js support, and security improvements.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: "🔀",
                    title: "Git Baseline Comparison (v0.7.2)",
                    desc: "Compare against any git ref (branch, tag, commit) with --baseline git:<ref>. Uses git worktree for clean isolation, enables CI/CD validation without committing context files. Includes hash-only filtering and git-ignored file filtering for deterministic comparisons.",
                    color: "blue"
                  },
                  {
                    icon: "📊",
                    title: "Full Contract Comparison (v0.7.2)",
                    desc: "Compare command now detects state, variables, API signatures, and prop/emit type changes. Comprehensive drift detection across all contract fields, matching watch mode capabilities for consistent behavior.",
                    color: "purple"
                  },
                  {
                    icon: "👀",
                    title: "Strict Watch Enhancements (v0.7.1)",
                    desc: "Session-level statistics for errors, warnings, and resolved violations. --strict-watch automatically enables watch mode. Enhanced summaries with contextual emoji and proper pluralization. Normalized path display across all commands.",
                    color: "green"
                  },
                  {
                    icon: "🔍",
                    title: "Verbose Output Flag (v0.7.1)",
                    desc: "New --verbose flag for detailed per-file bundle output. Default CLI output prioritizes summary messages, with detailed file output moved to verbose mode. Improved watch mode file organization.",
                    color: "indigo"
                  },
                  {
                    icon: "⚡",
                    title: "Lean Style Mode Default (v0.7.0)",
                    desc: "Breaking change: stamp context style now defaults to --style-mode lean for smaller, faster bundles. Use --style-mode full for complete metadata. Watch mode reuses cached style metadata, reducing redundant extraction.",
                    color: "orange"
                  },
                  {
                    icon: "🛡️",
                    title: "Security & Reliability (v0.7.0)",
                    desc: "stamp context warns when no security report is found. Style extraction failures in watch mode log errors when LOGICSTAMP_DEBUG=1. Improved file lock consistency on Windows with delay after stale lock removal.",
                    color: "yellow"
                  },
                  {
                    icon: "🔒",
                    title: "Runtime Schema Validation (v0.6.0)",
                    desc: "AJV-enforced schema validation during contract loading. Invalid, malformed, or outdated contracts are rejected with capped, structured error reporting (max 20 errors). Fail-closed loading ensures contracts are rejected if schema fails to load.",
                    color: "red"
                  },
                  {
                    icon: "🛡️",
                    title: "Security Hardening (v0.6.0)",
                    desc: "Path traversal protection with strict project-root boundaries. File lock race condition fix prevents concurrent lock acquisition. Dependency security updates: glob@13.0.6 (patched minimatch ReDoS), ts-morph@27.0.2 with TypeScript 5.x support. Node.js >= 20 now required.",
                    color: "orange"
                  },
                  {
                    icon: "🔄",
                    title: "State-Based Strict Watch (v0.5.5)",
                    desc: "Strict watch mode now compares current state vs the original baseline (like git diff), not cumulative history. Violations reflect current drift only and are automatically cleared when changes are reverted. Third-party packages removed from violations.",
                    color: "blue"
                  },
                  {
                    icon: "🧹",
                    title: "Watch Mode Reliability (v0.5.5)",
                    desc: "Improved Windows/Cursor reliability with signal handlers at startup, absolute path resolution, synchronous cleanup on exit, and stale status file removal. Atomic writes prevent crash corruption. TOCTOU race condition fixed with file locking.",
                    color: "green"
                  },
                  {
                    icon: "⚡",
                    title: "Performance & Bug Fixes (v0.5.3)",
                    desc: "O(n²) to O(n) dependency collection, eliminated redundant file reads via caching. Fixed JSON schema validation, race conditions, memory leaks, and Windows path separator bugs. Type safety improvements across 10+ files.",
                    color: "purple"
                  },
                  {
                    icon: "🛡️",
                    title: "Strict Watch Mode (v0.5.0)",
                    desc: "Track breaking changes and violations during watch mode with --strict-watch. Automatically detects breaking changes (removed props, events, state, functions; changed prop types; missing dependencies). Real-time violation reporting with cumulative tracking, structured JSON reports, and CI-friendly exit codes.",
                    color: "red"
                  },
                  {
                    icon: "⚠️",
                    title: "BREAKING: Schema Field Renames (v0.5.0)",
                    desc: "Renamed fields for clarity: MissingDependency.version → packageVersion, UIFContract.version → composition, UIFContract.logicSignature → interface. These BREAKING changes improve clarity and avoid confusion. Migration required for code parsing context bundles.",
                    color: "orange"
                  },
                  {
                    icon: "⚡",
                    title: "Performance Optimizations (v0.5.0)",
                    desc: "O(1) dependency collection lookups replacing O(n) linear searches with Map-based index lookup. O(1) missing dependency tracking with Set-based lookup. Significantly improves performance for large projects during context generation.",
                    color: "blue"
                  },
                  {
                    icon: "🐛",
                    title: "Watch Mode Fixes (v0.5.0)",
                    desc: "Fixed race condition in watch mode using Promise-based locking to ensure only one regeneration runs at a time. Fixed silent error swallowing in compare handler. Improved error handling and cleanup.",
                    color: "yellow"
                  },
                  {
                    icon: "👀",
                    title: "Watch Mode (v0.4.1)",
                    desc: "Monitor codebase for file changes and automatically regenerate context bundles. Incremental rebuilds only regenerate affected bundles. Change detection shows what changed (props, hooks, state, events). Debounces rapid changes (500ms). Watches style files when using --include-style. Debug mode shows hash information. Status file for tooling integration.",
                    color: "green"
                  },
                  {
                    icon: "🔧",
                    title: "Framework Detection Fix (v0.4.1)",
                    desc: "Fixed framework detection priority order: Backend > Vue > React > TypeScript module. Backend frameworks (Express/NestJS) are now correctly detected before Vue/React patterns, fixing issue where files with mixed patterns could be incorrectly classified.",
                    color: "indigo"
                  },
                  {
                    icon: "🖥️",
                    title: "Backend Framework Support (v0.4.0)",
                    desc: "Comprehensive support for Node.js backend frameworks (Express.js, NestJS). Extracts API routes, HTTP methods, route parameters, request/response types, and framework-specific metadata. Introduces node:api contract kind and extensible language:type pattern. Enhanced API signature extraction with multi-route aggregation and actual type extraction.",
                    color: "orange"
                  },
                  {
                    icon: "🔍",
                    title: "Hash Calculation Fix (v0.4.0)",
                    desc: "Fixed hash calculation for backend files. Semantic and signature hashes now include backend metadata (routes, framework, controller, language-specific data) and apiSignature field. Backend route changes now properly trigger hash updates for accurate change detection.",
                    color: "teal"
                  },
                  {
                    icon: "⚛️",
                    title: "Advanced Next.js App Router (v0.3.10)",
                    desc: "Enhanced Next.js metadata extraction with route roles, segment paths, and metadata exports. Automatically detects route roles (page, layout, loading, error, not-found, template, default, route). Extracts segment paths from file structure and parses both static (export const metadata) and dynamic (generateMetadata) metadata exports.",
                    color: "purple"
                  },
                  {
                    icon: "🎨",
                    title: "Dynamic Tailwind Parsing Phase 1 (v0.3.9)",
                    desc: "Enhanced Tailwind CSS extractor to resolve dynamic class expressions within template literals. Resolves const/let variables, object properties, and conditional expressions (ternary, logical operators). Handles ~70-80% of common dynamic class patterns. Added support for additional variants (focus-visible, group/peer, ARIA, arbitrary selectors, container queries).",
                    color: "teal"
                  },
                  {
                    icon: "📦",
                    title: "Enhanced Third-Party Info (v0.3.8)",
                    desc: "Missing dependencies now include package names and versions for third-party packages. Package name extraction handles scoped packages and subpath imports. Version lookup reads from package.json with caching for efficiency.",
                    color: "indigo"
                  },
                  {
                    icon: "✅",
                    title: "Emit Detection Accuracy (v0.3.7)",
                    desc: "Fixed issue where internal event handlers were incorrectly listed as component emits. Now only includes handlers that are part of the component's public API (props). Uses prop type signatures when available for accurate event signatures.",
                    color: "green"
                  },
                  {
                    icon: "🔗",
                    title: "Hook Parameter Detection (v0.3.6)",
                    desc: "Comprehensive support for extracting function signatures from custom React hooks, including parameter types, default values, and optional parameters. Works even when Props interfaces exist in the same file. Default depth changed from 1 to 2 for better nested component signature extraction.",
                    color: "blue"
                  },
                  {
                    icon: "💅",
                    title: "Styled JSX Support (v0.3.5)",
                    desc: "Full CSS extraction from <style jsx> blocks with selector and property parsing using css-tree AST. Detects global attribute and handles complex selectors. Enhanced inline style extraction now extracts both property names and literal values from style={{ ... }} objects.",
                    color: "pink"
                  },
                  {
                    icon: "⚡",
                    title: "Vue.js Support (v0.3.4)",
                    desc: "Comprehensive Vue 3 Composition API support: vue:component and vue:composable detection, reactive state extraction (ref, reactive, computed), props/emits from defineProps/defineEmits, lifecycle hooks, and composables. Works with .ts/.tsx files (JSX/TSX components). Note: .vue SFC files not yet supported.",
                    color: "green"
                  },
                  {
                    icon: "📦",
                    title: "TOON Output Format (v0.3.3)",
                    desc: "New --format toon option generates compact, AI-optimized TOON format bundles. Alternative to JSON/pretty/NDJSON formats. Creates context.toon files alongside context.json files.",
                    color: "purple"
                  },
                  {
                    icon: "🔧",
                    title: "Hook Classification (v0.3.1)",
                    desc: "Custom React hooks are now correctly classified as react:hook instead of react:component. Detection logic checks if main export is a function starting with 'use' and has no JSX elements",
                    color: "blue"
                  },
                  {
                    icon: "🔒",
                    title: "Security Scanning (v0.3.0)",
                    desc: "Security scan now runs by default during stamp init. Automatic secret sanitization in generated context files. New stamp ignore command for managing file exclusions",
                    color: "red"
                  },
                  {
                    icon: "🚀",
                    title: "Enhanced Initialization (v0.3.0)",
                    desc: "Security scan runs by default during stamp init. Use --no-secure to skip. --yes flag for non-interactive setup",
                    color: "orange"
                  },
                  {
                    icon: "🚫",
                    title: "File Exclusion (v0.3.0)",
                    desc: "New stamp ignore command for managing .stampignore file. .stampignore is now independent of security scanning",
                    color: "red"
                  },
                  {
                    icon: "📁",
                    title: "Relative Paths (v0.3.2)",
                    desc: "Context files now use relative paths instead of absolute paths, improving portability across different machines and environments",
                    color: "indigo"
                  },
                  {
                    icon: "🎨",
                    title: "AST-Based CSS Parsing (v0.3.2)",
                    desc: "Migrated CSS/SCSS parsing from regex to AST-based parsing using css-tree for more robust and accurate extraction of selectors, properties, and SCSS features",
                    color: "teal"
                  },
                  {
                    icon: "🎨",
                    title: "Style Metadata Extraction",
                    desc: "New stamp context style command extracts Tailwind, SCSS, Material UI, ShadCN/UI, Radix UI, animations, and layout patterns",
                    color: "purple"
                  },
                  {
                    icon: "🎭",
                    title: "Material UI Support",
                    desc: "Detects Material UI components, packages, and styling features (theme, sx prop, styled components, makeStyles)",
                    color: "indigo"
                  },
                  {
                    icon: "📊",
                    title: "Four-Mode Token Comparison",
                    desc: "--compare-modes shows none, header, header+style, and full modes with accurate token counts",
                    color: "blue"
                  },
                  {
                    icon: "📁",
                    title: "Multi-File Output Structure",
                    desc: "Generates multiple context.json files (one per folder) plus context_main.json index",
                    color: "green"
                  },
                  {
                    icon: "🔍",
                    title: "Multi-File Context Drift Detection",
                    desc: "Compare command supports multi-file mode with --approve and --clean-orphaned flags",
                    color: "yellow"
                  },
                  {
                    icon: "⚛️",
                    title: "Next.js App Router Support",
                    desc: "Detects 'use client' and 'use server' directives, identifies App Router files",
                    color: "orange"
                  },
                  {
                    icon: "🛡️",
                    title: "Optional Tokenizers",
                    desc: "Automatic installation of @dqbd/tiktoken and @anthropic-ai/tokenizer for accurate token counts",
                    color: "gray"
                  }
                ].map((item, idx) => {
                  const getColorClasses = (color: string) => {
                    switch (color) {
                      case 'blue':
                        return {
                          container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                          title: 'text-blue-900 dark:text-blue-100',
                          desc: 'text-blue-800 dark:text-blue-200'
                        };
                      case 'green':
                        return {
                          container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
                          title: 'text-green-900 dark:text-green-100',
                          desc: 'text-green-800 dark:text-green-200'
                        };
                      case 'purple':
                        return {
                          container: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
                          title: 'text-purple-900 dark:text-purple-100',
                          desc: 'text-purple-800 dark:text-purple-200'
                        };
                      case 'yellow':
                        return {
                          container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
                          title: 'text-yellow-900 dark:text-yellow-100',
                          desc: 'text-yellow-800 dark:text-yellow-200'
                        };
                    case 'gray':
                      return {
                        container: 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700',
                        title: 'text-gray-900 dark:text-gray-100',
                        desc: 'text-gray-900 dark:text-white'
                      };
                    case 'indigo':
                      return {
                        container: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800',
                        title: 'text-indigo-900 dark:text-indigo-100',
                        desc: 'text-indigo-800 dark:text-indigo-200'
                      };
                    case 'red':
                      return {
                        container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
                        title: 'text-red-900 dark:text-red-100',
                        desc: 'text-red-800 dark:text-red-200'
                      };
                    case 'orange':
                      return {
                        container: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
                        title: 'text-orange-900 dark:text-orange-100',
                        desc: 'text-orange-800 dark:text-orange-200'
                      };
                    case 'teal':
                      return {
                        container: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800',
                        title: 'text-teal-900 dark:text-teal-100',
                        desc: 'text-teal-800 dark:text-teal-200'
                      };
                    default:
                        return {
                          container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                          title: 'text-blue-900 dark:text-blue-100',
                          desc: 'text-blue-800 dark:text-blue-200'
                        };
                    }
                  };
                  
                  const colors = getColorClasses(item.color);
                  
                  return (
                    <div key={idx} className={`p-4 sm:p-6 ${colors.container} rounded-xl hover:shadow-md transition-shadow`}>
                      <div className="flex items-baseline gap-3">
                        <span className="text-2xl sm:text-3xl flex-shrink-0 leading-none -mt-0.5">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-lg font-semibold ${colors.title} mb-2`}>
                            {item.title}
                          </h3>
                          <p className={`text-sm sm:text-base ${colors.desc} leading-relaxed`}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Commands Overview */}
        <AnimatedSection direction="up" delay={200}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Commands
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  command: "stamp init [path]",
                  description: "Initialize LogicStamp in your project by setting up .gitignore patterns and generating LLM_CONTEXT.md. Use --secure to automatically scan for secrets in JS/TS/JSON files",
                  optional: true,
                  color: "blue"
                },
                {
                  command: "stamp security scan [path]",
                  description: "Scan JS/TS/JSON files for secrets (API keys, passwords, tokens) and optionally add detected files to .stampignore. Runs 100% locally",
                  optional: false,
                  color: "red"
                },
                {
                  command: "stamp context [path]",
                  description: "Scans a directory and generates multiple context.json files plus context_main.json index",
                  optional: false,
                  color: "purple"
                },
                {
                  command: "stamp context style [path]",
                  description: "Generates context with style metadata (Tailwind, SCSS, animations, layout). Equivalent to --include-style",
                  optional: false,
                  color: "pink"
                },
                {
                  command: "stamp context validate [file]",
                  description: "Checks context files for schema and structural issues before sharing or committing",
                  optional: false,
                  color: "green"
                },
                {
                  command: "stamp context compare [oldFile] [newFile]",
                  description: "Compares context files to detect drift across your project. Supports multi-file and single-file modes",
                  optional: false,
                  color: "orange"
                },
                {
                  command: "stamp context clean [path]",
                  description: "Removes all generated context artifacts. Safe by default (dry run)",
                  optional: false,
                  color: "red"
                }
              ].map((cmd, idx) => {
                const getGradientClasses = (color: string) => {
                  switch (color) {
                    case 'blue':
                      return 'from-blue-500 to-blue-600';
                    case 'purple':
                      return 'from-purple-500 to-purple-600';
                    case 'green':
                      return 'from-green-500 to-emerald-600';
                    case 'orange':
                      return 'from-orange-500 to-red-600';
                    case 'red':
                      return 'from-red-500 to-pink-600';
                    case 'pink':
                      return 'from-pink-500 to-rose-600';
                    default:
                      return 'from-blue-500 to-blue-600';
                  }
                };
                
                const getDelayClass = (index: number) => {
                  switch (index) {
                    case 0: return 'animate-[fadeInSlide_0.5s_ease-out_0.2s_forwards]';
                    case 1: return 'animate-[fadeInSlide_0.5s_ease-out_0.25s_forwards]';
                    case 2: return 'animate-[fadeInSlide_0.5s_ease-out_0.3s_forwards]';
                    case 3: return 'animate-[fadeInSlide_0.5s_ease-out_0.35s_forwards]';
                    case 4: return 'animate-[fadeInSlide_0.5s_ease-out_0.4s_forwards]';
                    case 5: return 'animate-[fadeInSlide_0.5s_ease-out_0.45s_forwards]';
                    case 6: return 'animate-[fadeInSlide_0.5s_ease-out_0.5s_forwards]';
                    default: return 'animate-[fadeInSlide_0.5s_ease-out_0.2s_forwards]';
                  }
                };
                
                return (
                  <div key={idx} className="relative">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                      <div className={`flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] ${getDelayClass(idx)}`}>
                        <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${getGradientClasses(cmd.color)} text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg`}>
                          {idx + 1}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="relative">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 dark:opacity-10" />
                          <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-2 sm:gap-3 mb-2">
                              <code className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg font-mono text-sm sm:text-base">
                                {cmd.command}
                              </code>
                              {cmd.optional && (
                                <span className="text-xs sm:text-sm font-normal px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">
                                  Optional
                                </span>
                              )}
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                              {cmd.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Options Table */}
        <AnimatedSection direction="up" delay={300}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Options (context command)
            </h2>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Option</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Alias</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Default</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {[
                      { option: "--depth <n>", alias: "-d", desc: "Dependency traversal depth. Default depth=2 includes nested components (e.g., App → Hero → Button). Depth=1 only includes direct dependencies.", default: "2" },
                      { option: "--include-code <mode>", alias: "-c", desc: "Code inclusion: none, header, or full", default: "header" },
                      { option: "--format <format>", alias: "-f", desc: "Output format: json, pretty, ndjson, or toon", default: "json" },
                      { option: "--out <file>", alias: "-o", desc: "Output directory or file path", default: "context.json" },
                      { option: "--max-nodes <n>", alias: "-m", desc: "Maximum nodes per bundle", default: "100" },
                      { option: "--profile <profile>", alias: "-", desc: "Profile preset (see Profiles section)", default: "llm-chat" },
                      { option: "--strict", alias: "-s", desc: "Fail on missing dependencies", default: "false" },
                      { option: "--dry-run", alias: "-", desc: "Skip writing output; show summary only", default: "false" },
                      { option: "--stats", alias: "-", desc: "Emit single-line JSON stats (ideal for CI). When combined with --compare-modes, writes context_compare_modes.json for MCP integration.", default: "false" },
                      { option: "--compare-modes", alias: "-", desc: "Show detailed token comparison across all modes (none/header/header+style/full)", default: "false" },
                      { option: "--include-style", alias: "-", desc: "Extract style metadata (Tailwind, SCSS, animations, layout)", default: "false" },
                      { option: "--skip-gitignore", alias: "-", desc: "Skip .gitignore setup (never prompt or modify)", default: "false" },
                      { option: "--quiet", alias: "-q", desc: "Suppress verbose output (show only errors)", default: "false" },
                      { option: "--verbose", alias: "-", desc: "Show detailed bundle output (checkmarks for each file written). By default, only shows summary messages.", default: "false" },
                      { option: "--watch", alias: "-w", desc: "Watch for file changes and regenerate automatically", default: "false" },
                      { option: "--strict-watch", alias: "-", desc: "Enable strict watch mode - automatically enables watch mode and tracks breaking changes and violations during development. Exits with code 1 if errors detected.", default: "false" },
                      { option: "--help", alias: "-h", desc: "Show help message", default: "-" }
                    ].map((opt, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}>
                        <td className="px-3 sm:px-4 py-2 sm:py-3">
                          <code className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-mono">{opt.option}</code>
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3">
                          <code className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-mono">{opt.alias}</code>
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">{opt.desc}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3">
                          <code className="text-xs sm:text-sm text-gray-900 dark:text-gray-100 font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">{opt.default}</code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Profiles Section */}
        <AnimatedSection direction="up" delay={400}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Profiles
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Profiles are preset configurations optimized for different use cases:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  name: "llm-chat",
                  label: "Default",
                  desc: "Balanced mode for AI chat interfaces",
                  color: "blue",
                  settings: [
                    "Depth: 2",
                    "Code: headers only",
                    "Max nodes: 100"
                  ]
                },
                {
                  name: "llm-safe",
                  desc: "Conservative mode for token-limited contexts",
                  color: "green",
                  settings: [
                    "Depth: 2",
                    "Code: headers only",
                    "Max nodes: 30"
                  ]
                },
                {
                  name: "ci-strict",
                  desc: "Strict validation mode (contracts only, strict deps)",
                  color: "yellow",
                  settings: [
                    "Code: none",
                    "Strict dependencies enabled",
                    "Metadata-only mode"
                  ]
                }
              ].map((profile, idx) => {
                const getProfileClasses = (color: string) => {
                  switch (color) {
                    case 'blue':
                      return {
                        gradient: 'from-blue-600 to-indigo-600',
                        container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                        title: 'text-blue-900 dark:text-blue-100',
                        text: 'text-blue-800 dark:text-blue-200',
                        badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200'
                      };
                    case 'green':
                      return {
                        gradient: 'from-green-600 to-emerald-600',
                        container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
                        title: 'text-green-900 dark:text-green-100',
                        text: 'text-green-800 dark:text-green-200',
                        badge: 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200'
                      };
                    case 'yellow':
                      return {
                        gradient: 'from-yellow-600 to-orange-600',
                        container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
                        title: 'text-yellow-900 dark:text-yellow-100',
                        text: 'text-yellow-800 dark:text-yellow-200',
                        badge: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200'
                      };
                    default:
                      return {
                        gradient: 'from-blue-600 to-indigo-600',
                        container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                        title: 'text-blue-900 dark:text-blue-100',
                        text: 'text-blue-800 dark:text-blue-200',
                        badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200'
                      };
                  }
                };
                
                const classes = getProfileClasses(profile.color);
                
                return (
                  <div key={idx} className="relative">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${classes.gradient} rounded-xl blur opacity-20 dark:opacity-10`} />
                    <div className={`relative ${classes.container} rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow`}>
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <h3 className={`text-lg sm:text-xl font-semibold ${classes.title}`}>
                          {profile.name}
                        </h3>
                        {profile.label && (
                          <span className={`text-xs px-2 py-0.5 ${classes.badge} rounded-full`}>
                            {profile.label}
                          </span>
                        )}
                      </div>
                      <p className={`text-sm sm:text-base ${classes.text} mb-3 sm:mb-4`}>
                        {profile.desc}
                      </p>
                      <ul className={`space-y-1.5 sm:space-y-2 text-xs sm:text-sm ${classes.text} ml-4`}>
                        {profile.settings.map((setting, sIdx) => (
                          <li key={sIdx}>• {setting}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Style Metadata Section */}
        <AnimatedSection direction="up" delay={450}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Style Metadata Extraction
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">stamp context style</code> command (or <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">--include-style</code> flag) extracts visual and layout information from your components, making context bundles design-aware for AI assistants. Supports Tailwind CSS, SCSS/CSS modules, Material UI, ShadCN/UI, Radix UI, inline styles, styled-components, and framer-motion.
            </p>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  What Gets Extracted
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      title: "Style Sources",
                      items: [
                        "Tailwind CSS classes (layout, spacing, colors, typography)",
                        "SCSS/CSS modules (selectors, properties, features)",
                        "Material UI components and styling (theme, sx prop, styled components, makeStyles)",
                        "ShadCN/UI and Radix UI component patterns",
                        "Inline styles and styled-components",
                        "framer-motion animations and gestures"
                      ]
                    },
                    {
                      title: "Layout Patterns",
                      items: [
                        "Flex and grid layouts",
                        "Hero sections and feature cards",
                        "Responsive breakpoints (sm, md, lg, xl)",
                        "Grid column configurations"
                      ]
                    },
                    {
                      title: "Visual Metadata",
                      items: [
                        "Color palettes (bg-*, text-*, border-*)",
                        "Spacing patterns (padding, margin, gap)",
                        "Border radius and typography classes",
                        "Effects (shadows, opacity, filters)"
                      ]
                    },
                    {
                      title: "Animation Metadata",
                      items: [
                        "Animation library (framer-motion or CSS)",
                        "Animation types (fade-in, slide, etc.)",
                        "Trigger types (inView, hover, click)",
                        "Viewport-triggered animations"
                      ]
                    }
                  ].map((category, idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                        {category.title}
                      </h4>
                      <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <span className="text-pink-500 dark:text-pink-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Usage Examples
                  </h4>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Style Command',
                        code: `# Generate context with style metadata
stamp context style

# Equivalent using flag
stamp context --include-style

# With specific options
stamp context style --profile llm-safe
stamp context style --include-code header`,
                        copyText: `# Generate context with style metadata
stamp context style

# Equivalent using flag
stamp context --include-style

# With specific options
stamp context style --profile llm-safe
stamp context style --include-code header`
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Token Comparison Modes Section */}
        <AnimatedSection direction="up" delay={475}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Token Comparison Modes
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">--compare-modes</code> to see detailed token cost analysis across all available modes:
            </p>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {[
                    {
                      mode: "none",
                      desc: "Contracts only (props, state, hooks, dependencies) with no source code",
                      bestFor: "CI/CD validation, dependency analysis, maximum compression",
                      tokenCost: "10-20% of raw source"
                    },
                    {
                      mode: "header",
                      desc: "Contracts plus JSDoc headers and function signatures",
                      bestFor: "General AI chat workflows, code review, component interfaces",
                      tokenCost: "20-30% of raw source"
                    },
                    {
                      mode: "header+style",
                      desc: "Header mode plus extracted style metadata (Tailwind, SCSS, animations)",
                      bestFor: "UI/UX discussions, design system maintenance, visual consistency",
                      tokenCost: "40-60% of raw source"
                    },
                    {
                      mode: "full",
                      desc: "Everything including complete source code",
                      bestFor: "Deep implementation reviews, complex refactoring, debugging",
                      tokenCost: "80-100% of raw source"
                    }
                  ].map((mode, idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded text-sm font-semibold">
                          {mode.mode}
                        </code>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {mode.tokenCost}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {mode.desc}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        <strong>Best for:</strong> {mode.bestFor}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Example Output
                  </h4>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Compare Modes Output',
                        code: `📊 Mode Comparison

   Comparison:
     Mode         | Tokens GPT-4o | Tokens Claude | Savings vs Raw Source
     -------------|---------------|---------------|------------------------
     Raw source   |        22,000 |        19,556 | 0%
     Header       |        12,228 |        10,867 | 44%
     Header+style  |        13,895 |        12,351 | 37%

   Mode breakdown:
     Mode         | Tokens GPT-4o | Tokens Claude | Savings vs Full Context
     -------------|---------------|---------------|--------------------------
     none         |         8,337 |         7,411 | 79%
     header       |        12,228 |        10,867 | 70%
     header+style |        13,895 |        12,351 | 30%
     full         |        39,141 |        34,792 | 0%`,
                        copyText: `📊 Mode Comparison

   Comparison:
     Mode         | Tokens GPT-4o | Tokens Claude | Savings vs Raw Source
     -------------|---------------|---------------|------------------------
     Raw source   |        22,000 |        19,556 | 0%
     Header       |        12,228 |        10,867 | 44%
     Header+style  |        13,895 |        12,351 | 37%

   Mode breakdown:
     Mode         | Tokens GPT-4o | Tokens Claude | Savings vs Full Context
     -------------|---------------|---------------|--------------------------
     none         |         8,337 |         7,411 | 79%
     header       |        12,228 |        10,867 | 70%
     header+style |        13,895 |        12,351 | 30%
     full         |        39,141 |        34,792 | 0%`
                      }
                    ]}
                  />
                </div>

                <div className="mt-6 sm:mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Optional Tokenizers for Accurate Counts
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                    LogicStamp Context includes <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs">@dqbd/tiktoken</code> (GPT-4) and <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs">@anthropic-ai/tokenizer</code> (Claude) as optional dependencies. npm automatically attempts to install them when you install <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs">logicstamp-context</code>. If installation succeeds, you get model-accurate token counts. If installation fails or is skipped (normal for optional dependencies), the tool gracefully falls back to character-based estimation (typically within 10-15% accuracy).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Output Format Section */}
        <AnimatedSection direction="up" delay={500}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Output Format
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              LogicStamp Context generates a <strong className="text-gray-900 dark:text-white">folder-organized, multi-file output structure</strong>:
            </p>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  File Organization
                </h3>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'File Structure (JSON format)',
                      code: `output/
├── context_main.json          # Main index with folder metadata
├── context.json               # Root folder bundles (if any)
├── src/
│   └── context.json          # Bundles from src/ folder
├── src/components/
│   └── context.json          # Bundles from src/components/
└── src/utils/
    └── context.json          # Bundles from src/utils/`,
                      copyText: `output/
├── context_main.json          # Main index with folder metadata
├── context.json               # Root folder bundles (if any)
├── src/
│   └── context.json          # Bundles from src/ folder
├── src/components/
│   └── context.json          # Bundles from src/components/
└── src/utils/
    └── context.json          # Bundles from src/utils/`
                    },
                    {
                      label: 'File Structure (TOON format)',
                      code: `output/
├── context_main.json          # Main index with folder metadata
├── context.toon               # Root folder bundles in TOON format (if any)
├── src/
│   └── context.toon          # Bundles from src/ folder
├── src/components/
│   └── context.toon          # Bundles from src/components/
└── src/utils/
    └── context.toon          # Bundles from src/utils/`,
                      copyText: `output/
├── context_main.json          # Main index with folder metadata
├── context.toon               # Root folder bundles in TOON format (if any)
├── src/
│   └── context.toon          # Bundles from src/ folder
├── src/components/
│   └── context.toon          # Bundles from src/components/
└── src/utils/
    └── context.toon          # Bundles from src/utils/`
                    }
                  ]}
                />

                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      Main Index (context_main.json)
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                      Provides a complete directory index with folder metadata and project summary:
                    </p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Main Index Example',
                          code: `{
  "type": "LogicStampIndex",
  "schemaVersion": "0.2",
  "projectRoot": ".",
  "createdAt": "2025-01-15T10:30:00.000Z",
  "summary": {
    "totalComponents": 42,
    "totalBundles": 15,
    "totalFolders": 5,
    "totalTokenEstimate": 13895
  },
  "folders": [
    {
      "path": "src/components",
      "contextFile": "src/components/context.json",
      "bundles": 3,
      "components": ["Button.tsx", "Card.tsx"],
      "isRoot": false,
      "tokenEstimate": 5234
    }
  ]
}`,
                          copyText: `{
  "type": "LogicStampIndex",
  "schemaVersion": "0.2",
  "projectRoot": ".",
  "createdAt": "2025-01-15T10:30:00.000Z",
  "summary": {
    "totalComponents": 42,
    "totalBundles": 15,
    "totalFolders": 5,
    "totalTokenEstimate": 13895
  },
  "folders": [
    {
      "path": "src/components",
      "contextFile": "src/components/context.json",
      "bundles": 3,
      "components": ["Button.tsx", "Card.tsx"],
      "isRoot": false,
      "tokenEstimate": 5234
    }
  ]
}`
                        }
                      ]}
                    />
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      Folder Context Files
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                      Each folder's context.json contains an array of bundles (one bundle per root component/entry point):
                    </p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Folder Context Example',
                          code: `[
  {
    "$schema": "https://logicstamp.dev/schemas/context/v0.1.json",
    "position": "1/5",
    "type": "LogicStampBundle",
    "schemaVersion": "0.1",
    "entryId": "src/components/Button.tsx",
    "depth": 1,
    "createdAt": "2025-01-15T10:30:00.000Z",
    "bundleHash": "uifb:abc123...",
    "graph": {
      "nodes": [
        {
          "entryId": "src/components/Button.tsx",
          "contract": {
            "type": "UIFContract",
            "kind": "react:component",
            "description": "Button - Interactive component",
            "composition": {
              "variables": ["variant", "size"],
              "hooks": ["useState"],
              "components": [],
              "functions": ["handleClick"]
            },
            "interface": {
              "props": {
                "onClick": { "type": "function", "signature": "() => void" },
                "variant": { "type": "literal-union", "literals": ["primary", "secondary"] }
              }
            }
          }
        }
      ],
      "edges": []
    },
    "meta": {
      "missing": [],
      "source": "logicstamp-context@0.7.1"
    }
  }
]`,
                          copyText: `[
  {
    "$schema": "https://logicstamp.dev/schemas/context/v0.1.json",
    "position": "1/5",
    "type": "LogicStampBundle",
    "schemaVersion": "0.1",
    "entryId": "src/components/Button.tsx",
    "depth": 1,
    "createdAt": "2025-01-15T10:30:00.000Z",
    "bundleHash": "uifb:abc123...",
    "graph": {
      "nodes": [
        {
          "entryId": "src/components/Button.tsx",
          "contract": {
            "type": "UIFContract",
            "kind": "react:component",
            "description": "Button - Interactive component",
            "composition": {
              "variables": ["variant", "size"],
              "hooks": ["useState"],
              "components": [],
              "functions": ["handleClick"]
            },
            "interface": {
              "props": {
                "onClick": { "type": "function", "signature": "() => void" },
                "variant": { "type": "literal-union", "literals": ["primary", "secondary"] }
              }
            }
          }
        }
      ],
      "edges": []
    },
    "meta": {
      "missing": [],
      "source": "logicstamp-context@0.7.1"
    }
  }
]`
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Examples Section */}
        <AnimatedSection direction="up" delay={550}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Examples
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  title: "Project Initialization",
                  desc: "Set up LogicStamp in your project with optional security scanning",
                  code: `# Basic initialization (security scan runs by default)
stamp init

# Initialize without prompts (CI-friendly, security scan still runs)
stamp init --yes

# Initialize without security scan
stamp init --no-secure

# Initialize a specific directory
stamp init ./my-project

# Initialize without security scan for a specific directory
stamp init ./my-project --no-secure`
                },
                {
                  title: "Security Scanning",
                  desc: "Scan for secrets and sensitive data before committing",
                  code: `# Scan current directory for secrets
stamp security scan

# Scan specific directory
stamp security scan ./src

# Review report and exclude files with secrets
stamp ignore src/secrets.ts

# Save report to custom file
stamp security scan --out security-report.json

# Quiet mode (suppress verbose output)
stamp security scan --quiet`
                },
                {
                  title: "Basic Usage",
                  desc: "Generate context for entire project",
                  code: `# Generate context for entire project
stamp context

# CLI output shows scanning, analysis, and validation steps`
                },
                {
                  title: "Focused Analysis",
                  desc: "Analyze only specific directories",
                  code: `# Analyze only the src directory
stamp context ./src

# Analyze with custom output file
stamp context --out my-context.json`
                },
                {
                  title: "Deep Traversal",
                  desc: "Include more dependency levels. Recommended: depth=2 for React projects to include nested components in dependency graphs.",
                  code: `# Recommended: depth=2 for React projects (includes nested components)
stamp context --depth 2

# Include 3 levels of dependencies
stamp context --depth 3

# Include full source code
stamp context --include-code full`
                },
                {
                  title: "Token Cost Analysis",
                  desc: "Get token estimates for different modes",
                  code: `# Get JSON stats for CI
stamp context --stats

# Compare all modes (none/header/header+style/full)
stamp context --compare-modes

# See token costs for specific mode
stamp context --include-code none
stamp context --include-code header
stamp context --include-code full

# Include style metadata
stamp context --include-style`
                },
                {
                  title: "Style Metadata Extraction",
                  desc: "Generate design-aware context with visual and layout information",
                  code: `# Generate context with style metadata
stamp context style

# Equivalent using flag
stamp context --include-style

# Style with specific options
stamp context style --profile llm-safe
stamp context style --include-code header`
                },
                {
                  title: "CI/CD Validation",
                  desc: "Use in continuous integration pipelines",
                  code: `# Use llm-safe profile for smaller output
stamp context --profile llm-safe

# Strict mode: fail if any dependencies missing
stamp context --strict

# Generate stats for CI monitoring
stamp context --stats > stats.json

# Validate generated context
stamp context validate context_main.json

# Check for drift across all folders
stamp context compare --stats

# Compare token costs across modes
stamp context --compare-modes`
                }
              ].map((example, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 dark:opacity-10" />
                  <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {example.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      {example.desc}
                    </p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: example.title,
                          code: example.code,
                          copyText: example.code
                        }
                      ]}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Troubleshooting Section */}
        <AnimatedSection direction="up" delay={600}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Troubleshooting
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Handling Missing Dependencies",
                  icon: "🔍",
                  color: "blue",
                  items: [
                    {
                      type: "External Packages",
                      desc: "This is normal. LogicStamp only analyzes your source code, not node_modules.",
                      solution: "External packages are intentionally excluded."
                    },
                    {
                      type: "File Not Found",
                      desc: "Referenced file doesn't exist (deleted or moved).",
                      solution: "Check if the file was deleted or moved, update the import path, or use --strict in CI."
                    },
                    {
                      type: "Outside Scan Path",
                      desc: "File exists but outside the specified scan directory.",
                      solution: "Expand your scan path: stamp context ../ or scan from project root."
                    },
                    {
                      type: "Max Depth Exceeded",
                      desc: "Dependency beyond --depth limit.",
                      solution: "Increase depth: stamp context --depth 2 or --depth 3. Note: Higher depth = more tokens."
                    }
                  ]
                },
                {
                  title: "Common Questions",
                  icon: "❓",
                  color: "yellow",
                  items: [
                    {
                      type: "How do I scan only a specific folder?",
                      desc: "By default, LogicStamp respects .gitignore and skips node_modules/, .next/, dist/, and other build directories.",
                      solution: "Scan a directory directly: stamp context ./src"
                    },
                    {
                      type: "How do I exclude additional folders?",
                      desc: "LogicStamp uses .gitignore as the source of truth for what to skip.",
                      solution: "Add folders to .gitignore or pass a direct path (e.g. stamp context ./src) to restrict the scan."
                    },
                    {
                      type: "Why don't I see context for some components?",
                      desc: "LogicStamp analyzes .ts and .tsx files that export React components, Vue components/composables, or functions. For Vue projects, works with JSX/TSX components and extracted composables. Note: .vue SFC files are not currently supported.",
                      solution: "Ensure your file has a named or default export that defines the component or function you care about. For Vue projects, extract logic to .ts/.tsx files or use JSX/TSX syntax."
                    },
                    {
                      type: "How do I get the best results in AI chat?",
                      desc: "AI assistants work best when you give them a single, structured view of your project.",
                      solution:
                        "When prompting an AI assistant, explicitly tell it to use the per-folder context.json files and the root context_main.json to understand your project structure."
                    }
                  ]
                }
              ].map((section, idx) => {
                const getTroubleshootingClasses = (color: string) => {
                  switch (color) {
                    case 'blue':
                      return {
                        gradient: 'from-blue-600 to-indigo-600',
                        container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                        title: 'text-blue-900 dark:text-blue-100',
                        itemTitle: 'text-blue-900 dark:text-blue-100'
                      };
                    case 'yellow':
                      return {
                        gradient: 'from-yellow-600 to-orange-600',
                        container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
                        title: 'text-yellow-900 dark:text-yellow-100',
                        itemTitle: 'text-yellow-900 dark:text-yellow-100'
                      };
                    default:
                      return {
                        gradient: 'from-blue-600 to-indigo-600',
                        container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                        title: 'text-blue-900 dark:text-blue-100',
                        itemTitle: 'text-blue-900 dark:text-blue-100'
                      };
                  }
                };
                
                const classes = getTroubleshootingClasses(section.color);
                
                return (
                  <div key={idx} className="relative">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${classes.gradient} rounded-2xl blur opacity-20 dark:opacity-10`} />
                    <div className={`relative ${classes.container} rounded-2xl p-4 sm:p-6 shadow-xl`}>
                      <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <span className="text-2xl sm:text-3xl">{section.icon}</span>
                        <h3 className={`text-lg sm:text-xl font-semibold ${classes.title}`}>
                          {section.title}
                        </h3>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        {section.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="bg-white dark:bg-gray-900 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
                            <h4 className={`text-sm sm:text-base font-semibold ${classes.itemTitle} mb-1 sm:mb-2`}>
                              {item.type}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {item.desc}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                              <strong>Solution:</strong> {item.solution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Next Steps */}
        <ReadyToGetStartedCard
          description="Explore the complete CLI documentation or review additional guides."
        />
      </DocsLayout>
      <Footer />
    </>
  )
}














