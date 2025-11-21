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

            <h2 id="0-1-0">[0.1.0] – 2025-01-15</h2>
            <h3>Added</h3>
            <ul>
              <li>Initial standalone release of LogicStamp Context.</li>
              <li>Scans React/TypeScript codebases and generates AI-friendly context bundles.</li>
              <li>
                New per-folder <code>context.json</code> and root-level <code>context_main.json</code> structure for
                deterministic project mapping.
              </li>
              <li>AST-based component analysis (no pre-compilation required).</li>
              <li>Three preset profiles: <code>llm-safe</code>, <code>llm-chat</code>, <code>ci-strict</code>.</li>
              <li>
                Code inclusion modes: <code>none</code>, <code>header</code>, <code>full</code>.
              </li>
              <li>
                Output formats: <code>json</code>, <code>pretty</code>, <code>ndjson</code>.
              </li>
              <li>Depth-based dependency traversal.</li>
              <li>Deterministic bundle and semantic hashing.</li>
              <li>Missing dependency tracking with diagnostics.</li>
              <li>Standalone CLI with a comprehensive help system.</li>
              <li>Cross-platform path normalization.</li>
              <li>In-memory contract generation pipeline.</li>
              <li>Zero configuration required.</li>
              <li>Works on any React/TypeScript project.</li>
            </ul>

            <h3>Features</h3>
            <ul>
              <li>Outputs ready for AI tools (Claude, ChatGPT, Cursor, VS Code assistants).</li>
              <li>Fast analysis: ~3–5 seconds for typical 50–150 file projects.</li>
              <li>Designed for reproducibility and CI integration.</li>
            </ul>

            <h3>Documentation</h3>
            <ul>
              <li>Complete README with installation, usage, and examples.</li>
              <li>Detailed USAGE guide covering all CLI flags and profiles.</li>
              <li>
                Example <code>context.json</code> output for quick reference.
              </li>
              <li>MIT License included.</li>
            </ul>

            <h2 id="unreleased">[Unreleased]</h2>
            <h3>Planned</h3>
            <ul>
              <li>Watch mode for continuous generation.</li>
              <li>Custom profile configuration and overrides.</li>
              <li>Bundle caching.</li>
              <li>Output size optimization.</li>
              <li>Additional output formats.</li>
              <li>Integration examples for popular AI assistants.</li>
            </ul>

            <h3>Known Limitations (to be addressed)</h3>
            <ul>
              <li>No watch mode yet.</li>
              <li>No incremental caching.</li>
              <li>No custom profiles beyond the three presets.</li>
            </ul>
          </AnimatedSection>
        </div>
        </DocsLayout>
      <Footer />
    </>
  )
}


