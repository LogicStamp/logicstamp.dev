# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

