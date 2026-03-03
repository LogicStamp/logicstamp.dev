# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Rename MCP overview page route from `/docs/mcp` to `/docs/mcp-overview` to prevent navigation conflicts (to do)
  - Fix issue where MCP Overview page is incorrectly highlighted when viewing MCP Getting Started page
  - Update navigation active state logic to use exact path matching for overview pages
  - Update all internal links and references to use the new `/docs/mcp-overview` route
- Create MCP Hub page similar to CLI Hub (to do)
  - Create new `/docs/mcp` hub page as central landing page for all MCP documentation
  - Organize MCP documentation with sections: Getting Started, Core Tools/Features, Guides, Reference
  - Link to all MCP pages: getting-started, reference, usage, best-practices, profiles, style-metadata, changelog
  - Provide consistent navigation structure matching CLI Hub pattern

## [0.2.0] - 2026-03-04

### Changed
- Migrated from Next.js 14 to Next.js 16
  - Upgraded `next` from `^14.2.35` to `^16.1.6`
  - Updated `tsconfig.json` configuration for Next.js 16 compatibility
    - Added `.next/dev/types/**/*.ts` to `include` array
    - Set `jsx` to `react-jsx` (Next.js uses React automatic runtime)
  - Removed deprecated `swcMinify` option from `next.config.js` (enabled by default in Next.js 16+)

### Fixed
- Fixed CSS build error in Next.js 16 migration
  - Moved `@import` statements to the top of `globals.css` before all CSS rules (required by CSS spec and enforced by Turbopack)
  - CSS `@import` rules must now precede all rules aside from `@charset` and `@layer` statements

## [0.1.2] - 2025-12-13

### Security
- Fixed high severity Next.js vulnerability (Denial of Service with Server Components)
  - Upgraded `next` from `^14.2.33` to `^14.2.35`
  - Resolved GHSA-mwv6-3258-q52c and GHSA-5j59-xgg2-r9c4

### Added
- Added comprehensive MCP (Model Context Protocol) server documentation
  - New MCP overview page with installation and configuration guides
  - Integration guides for Claude Desktop, Claude CLI, and Cursor
  - MCP reference documentation with tool descriptions and examples
  - Usage examples and best practices pages
  - Profiles guide for MCP analysis modes
  - Style metadata guide for MCP integration
  - MCP changelog page
- Added MCP navigation section to documentation sidebar
- Added MCP installation option to Hero section (CLI/MCP tabs)
- Added featured MCP integration section to Integrations page
- Added MCP getting started link to 404 page

### Changed
- Updated package name references from `logicstamp-context-mcp` to `logicstamp-mcp` across all documentation
- Updated GitHub links from repository-specific to organization-level URLs
- Updated FAQ to reflect MCP beta availability (v0.1.0)
- Updated "What is LogicStamp" page to include MCP server integration feature
- Enhanced documentation sidebar with MCP section and improved navigation
- Updated docs home page to include MCP getting started section

### Documentation
- Added troubleshooting checklists to all MCP integration guides
- Added "Finding MCP Settings" sections for each integration (Claude Desktop, Claude CLI, Cursor)
- Enhanced integration guides with verification steps and common issues
- Added new MCP documentation pages:
  - `/docs/mcp/getting-started` - Installation and quick start
  - `/docs/mcp/reference` - Complete API reference
  - `/docs/mcp/usage` - Usage examples and workflows
  - `/docs/mcp/best-practices` - Best practices guide
  - `/docs/mcp/profiles` - Analysis profiles guide
  - `/docs/mcp/style-metadata` - Style metadata documentation
  - `/docs/mcp/changelog` - MCP changelog

## [0.1.1] - 2025-12-01

### Security
- Fixed all npm vulnerabilities (10 vulnerabilities resolved)
  - Upgraded `vitest` from `^2.0.0` to `^4.0.0` (resolved esbuild vulnerability)
  - Upgraded `@vitest/coverage-v8` from `^2.0.0` to `^4.0.0`
  - Upgraded `@vitest/ui` from `^2.0.0` to `^4.0.0`
  - Upgraded `eslint` from `^8.57.1` to `^9.0.0`
  - Upgraded `eslint-config-next` from `^14.2.33` to `^16.0.6` (resolved glob vulnerability)

### Changed
- Updated ESLint configuration to support ESLint 9.x flat config format
  - Added Next.js ESLint plugin (`@next/eslint-plugin-next`)
  - Added jsx-a11y plugin for accessibility rules
  - Updated lint script to use `eslint .` directly (Next.js 14 doesn't support ESLint 9.x via `next lint`)

### Fixed
- Moved `logo.svg` from root directory to `public/logo.svg` for proper static asset organization

### Testing
- Verified all tests pass with Vitest 4.x (63 tests passing)
- Confirmed no breaking changes to application logic

## [0.1.0] - 2025-12-01

### Added
- Added ShadCN/UI and Radix UI framework support documentation to the style command page
- Added framework logos/icons (Tailwind CSS, SCSS, styled-components, framer-motion, Material UI, ShadCN/UI, Radix UI) to the style command documentation
- Added trademark disclaimer to style command page and integrations section
- Added `stamp context style` command to CLI Commands section in "What is LogicStamp" page

### Changed
- Updated style command page to include comprehensive framework support information
- Updated integrations section to display framework logos with proper attribution

### Fixed
- Removed hover effects from FAQ section for improved accessibility

### Documentation
- Enhanced style command documentation with detailed framework support information
- Added JSON schema examples for ShadCN/UI and Radix UI in style metadata output
- Updated example outputs to include ShadCN/UI and Radix UI in summary statistics

