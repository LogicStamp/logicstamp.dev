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
            <p className="text-lg text-gray-900 dark:text-white">
              All notable user-facing changes to LogicStamp Context are tracked here. The project follows Semantic
              Versioning and a Keep a Changelog-style format.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-900 dark:prose-p:text-white text-gray-900 dark:text-white">
          <AnimatedSection direction="up" delay={100}>
            <p>
              All notable changes to <code>logicstamp-context</code> are documented on this page.
            </p>
            <p>
              The format is based on{' '}
              <a href="https://keepachangelog.com/en/1.0.0/" target="_blank" rel="noreferrer">
                Keep a Changelog
              </a>{' '}
              and adheres to{' '}
              <a href="https://semver.org/spec/v2.0.0.html" target="_blank" rel="noreferrer">
                Semantic Versioning
              </a>
              .
            </p>

            <h2 id="0-1-0">[0.1.0] – 2025-01-25</h2>

            <h3>🎉 Initial Release</h3>
            <p>
              First public release of LogicStamp Context - a fast, zero-config CLI tool that generates AI-friendly context bundles from React/TypeScript codebases.
            </p>

            <h3>Added</h3>

            <h4>Core Functionality</h4>
            <ul>
              <li><strong>AST-based component analysis</strong> - No pre-compilation required, works directly with source files</li>
              <li><strong>Multi-file context generation</strong> - Per-folder <code>context.json</code> files plus root-level <code>context_main.json</code> index</li>
              <li><strong>Deterministic output</strong> - Semantic hashing and bundle hashing for reproducible builds</li>
              <li><strong>Dependency graph traversal</strong> - Configurable depth-based dependency analysis</li>
              <li><strong>Missing dependency tracking</strong> - Diagnostics for unresolved imports with <code>--strict-missing</code> flag</li>
            </ul>

            <h4>CLI Commands</h4>
            <ul>
              <li><code>stamp context</code> - Generate context bundles from React/TypeScript codebase</li>
              <li><code>stamp context compare</code> - Multi-file drift detection comparing all context files</li>
              <li><code>stamp context validate</code> - Schema validation for generated context files</li>
              <li><code>stamp context clean</code> - Remove all generated context artifacts</li>
              <li><code>stamp init</code> - Interactive project initialization with <code>.gitignore</code> setup</li>
            </ul>

            <h4>Configuration & Profiles</h4>
            <ul>
              <li><strong>Three preset profiles</strong>: <code>llm-safe</code>, <code>llm-chat</code> (default), <code>ci-strict</code></li>
              <li><strong>Code inclusion modes</strong>: <code>none</code>, <code>header</code>, <code>full</code> for token optimization</li>
              <li><strong>Output formats</strong>: <code>json</code>, <code>pretty</code>, <code>ndjson</code></li>
              <li><strong>Zero configuration</strong> - Works out of the box on any React/TypeScript project</li>
            </ul>

            <h4>Token Optimization</h4>
            <ul>
              <li><strong>Automatic token estimates</strong> - GPT-4o-mini and Claude token counts</li>
              <li><strong>Mode comparison</strong> - <code>--compare-modes</code> flag for detailed token analysis</li>
              <li><strong>CI-friendly stats</strong> - <code>--stats</code> flag outputs JSON with token estimates</li>
              <li><strong>Savings calculation</strong> - Shows percentage savings compared to full code mode</li>
            </ul>

            <h4>Next.js Support</h4>
            <ul>
              <li><strong>App Router detection</strong> - Identifies files in <code>/app</code> directory</li>
              <li><strong>Directive detection</strong> - <code>'use client'</code> and <code>'use server'</code> directive support</li>
              <li><strong>Framework metadata</strong> - Next.js-specific annotations in contracts</li>
            </ul>

            <h4>Context Comparison</h4>
            <ul>
              <li><strong>Multi-file drift detection</strong> - Compares all context files using <code>context_main.json</code> as index</li>
              <li><strong>Three-tier output</strong> - Folder summary → component summary → detailed changes</li>
              <li><strong>Auto-approve mode</strong> - <code>--approve</code> flag for Jest-style snapshot updates</li>
              <li><strong>Orphaned file cleanup</strong> - <code>--clean-orphaned</code> flag to remove stale context files</li>
              <li><strong>Token delta stats</strong> - Per-folder token count changes with <code>--stats</code></li>
            </ul>

            <h4>Programmatic API</h4>
            <ul>
              <li><strong>Main entry point</strong> - <code>dist/index.js</code> exports all core functions, types, and CLI commands</li>
              <li><strong>TypeScript types</strong> - Full type definitions for all exports</li>
              <li><strong>Core modules</strong> - AST parser, contract builder, manifest generator, pack utilities</li>
            </ul>

            <h4>Developer Experience</h4>
            <ul>
              <li><strong>Interactive initialization</strong> - First-run prompts for <code>.gitignore</code> and <code>LLM_CONTEXT.md</code> setup</li>
              <li><strong>Comprehensive help system</strong> - Detailed help for all commands and options</li>
              <li><strong>Cross-platform support</strong> - Works on Windows, macOS, and Linux</li>
              <li><strong>Fast performance</strong> - ~3–5 seconds for typical 50–150 file projects</li>
              <li><strong>CI/CD integration</strong> - Exit codes and JSON output for automation</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
              <li>Complete README with installation, usage, and examples</li>
              <li>Detailed CLI documentation for all commands</li>
              <li>JSON Schema definition for context files</li>
              <li>Example context outputs and use cases</li>
              <li>Troubleshooting guide for common issues</li>
            </ul>

            <h3>Changed</h3>
            <ul>
              <li>N/A (initial release)</li>
            </ul>

            <h3>Fixed</h3>
            <ul>
              <li>N/A (initial release)</li>
            </ul>

            <h3>Security</h3>
            <ul>
              <li>N/A (initial release)</li>
            </ul>

            <hr />

            <h2 id="unreleased">[Unreleased]</h2>

            <h3>Planned Features</h3>
            <ul>
              <li>Custom profile configuration and overrides</li>
              <li>Incremental bundle caching</li>
              <li>Output size optimization</li>
              <li>Additional output formats</li>
              <li>Integration examples for popular AI assistants</li>
              <li>Vue.js and Svelte support</li>
              <li>Advanced Next.js App Router features (route roles, segment paths, metadata exports)</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
              <li>No incremental caching (planned for future release)</li>
              <li>No custom profiles beyond the three presets (planned for future release)</li>
            </ul>
          </AnimatedSection>
        </div>
        </DocsLayout>
      <Footer />
    </>
  )
}


