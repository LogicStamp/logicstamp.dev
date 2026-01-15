<div align="center">

[<img src="public/logicstamp-woodmark-no-bg.png" alt="LogicStamp" width="360">](https://logicstamp.dev)
**The official landing page and documentation site for LogicStamp**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

[Website](https://logicstamp.dev) • [Documentation](./docs/) • [MCP Integration](./docs/mcp/) • [GitHub](https://github.com/LogicStamp) • [Contributing](./CONTRIBUTING.md)

</div>

---

<p align="center">
  <img
    src="https://raw.githubusercontent.com/LogicStamp/logicstamp.dev/main/public/logicstamp-workflow.gif"
    alt="LogicStamp MCP analyzing a real React + Tailwind codebase"
    width="900"
  />
</p>

<p align="center">
  <em>LogicStamp MCP building a structured, Tailwind-aware view of a real React codebase.</em>
</p>

---

## About

This is the official landing page and documentation website for **LogicStamp**, a powerful tool for generating structured context bundles for LLMs. LogicStamp helps developers create efficient, maintainable context files that improve AI-assisted development workflows.

**LogicStamp MCP** enables AI assistants (Claude, Cursor, etc.) to analyze React/TypeScript codebases through the Model Context Protocol, providing structured component contracts, dependency graphs, and style metadata.

The site is built with Next.js 14, TypeScript, and Tailwind CSS, featuring a modern, responsive design with dark mode support.

## Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type-safe development
- **Tailwind CSS** for modern, responsive styling
- **Dark Mode** support with smooth theme transitions
- **Fully Responsive** design for all devices
- **Fast Performance** with optimized builds
- **Comprehensive Testing** with Vitest and React Testing Library
- **Documentation** integrated directly into the site
- **SEO Optimized** for better discoverability

## Quick Start

### Prerequisites

- **Node.js** >= 18.18.0
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/LogicStamp/logicstamp.dev.git
cd logicstamp.dev
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables (if needed):

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Using LogicStamp CLI

Generate context bundles for your project:

```bash
# Generate context bundles
stamp context

# Generate with style metadata
stamp context style
```

**Common commands:**
- `stamp context` - Generate context bundles
- `stamp context style` - Generate with style metadata (Tailwind, SCSS, etc.)

For more information, see the [LogicStamp CLI documentation](./docs/context/cli/).

### Using LogicStamp MCP

LogicStamp MCP enables AI assistants to analyze your codebase through the Model Context Protocol:

- **Claude Desktop** - Integrate LogicStamp with Claude Desktop
- **Cursor IDE** - Use LogicStamp directly in Cursor
- **Claude CLI** - Command-line integration for Claude Code

The MCP server provides structured context bundles optimized for AI consumption, including component contracts, dependency graphs, and optional style metadata.

**Quick Start:**
- See the [MCP Quick Start Guide](./docs/mcp/quickstart.md)
- Check [MCP Integration Guides](./docs/mcp/integrations/) for platform-specific setup
- Read [LogicStamp for LLMs](./docs/mcp/logicstamp-for-llms.md) for AI-focused documentation

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page auto-updates as you edit files. The `src/app` directory is where most of your edits happen.

### Build

Build the application for production:

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Production

Start the production server:

```bash
npm start
```

### Testing

Run the test suite:

```bash
# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage
```

### Type Checking

Verify TypeScript types:

```bash
npm run type-check
```

### Linting

Check code quality:

```bash
npm run lint
```

## Project Structure

```
logicstamp.dev/
├── src/
│   ├── app/                    # Next.js App Router pages and routes
│   │   ├── api/                # API routes
│   │   ├── demo/               # Demo page
│   │   ├── docs/               # Documentation pages
│   │   │   ├── getting-started/
│   │   │   ├── guides/
│   │   │   ├── logicstamp-context/
│   │   │   └── ...
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── sections/           # Page sections (Hero, Features, FAQ, etc.)
│   │   ├── ui/                 # Reusable UI components
│   │   └── ...
│   ├── contexts/               # React contexts (Theme, etc.)
│   ├── hooks/                  # Custom React hooks
│   └── styles/                 # Global styles and themes
├── __tests__/                  # Test files
├── docs/                       # Documentation source files
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vitest.config.mjs           # Vitest test configuration
└── package.json                # Dependencies and scripts
```

## Documentation

Comprehensive documentation is available both on the site and in the repository:

- **[Getting Started Guide](./docs/context/usage.md)** - Quick start with LogicStamp CLI
- **[MCP Integration](./docs/mcp/)** - Model Context Protocol integration guides
- **[CLI Commands](./docs/context/cli/)** - Complete command reference
- **[Schema Documentation](./docs/context/schema.md)** - Context file schema
- **[Best Practices](./src/app/docs/best-practices/page.tsx)** - Development best practices

Visit the [documentation section](./src/app/docs/) on the site for the full documentation experience.

## Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- **Font**: [Geist](https://vercel.com/font)

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details on:

- Code of conduct
- Development workflow
- Branching strategy
- Pull request process
- Code style guidelines

Before contributing, please read:
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
- [ENV_SETUP.md](./ENV_SETUP.md) - Environment setup

## Related Projects

- **[logicstamp-context](https://github.com/LogicStamp/logicstamp-context)** - The LogicStamp CLI tool
- **[logicstamp-mcp](https://github.com/LogicStamp/logicstamp-mcp)** - The MCP Server
- **[logicstamp](https://github.com/LogicStamp/logicstamp)** - Main LogicStamp project

## Security

For security concerns, please review our [Privacy & Security](./PRIVACY_SECURITY.md) documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Branding & Attribution

The LogicStamp Fox mascot and related brand assets are © 2025 Amit Levi.

These assets may not be used for third-party branding, logos, or commercial identity without permission. They are included in this repository for documentation and non-commercial use within the LogicStamp ecosystem only.

## Support

- [Documentation](./docs/)
- [Issue Tracker](https://github.com/LogicStamp/logicstamp-context/issues)
- [Contact](mailto:logicstamp.dev@gmail.com)

## Community

This project follows a [Code of Conduct](https://logicstamp.dev/code-of-conduct). By participating, you agree to uphold it.

---

<div align="center">

[<img src="public/mascot/logicstamp-fox.svg" alt="LogicStamp" width="120">](https://logicstamp.dev)

Open-source developer tooling

[Website](https://logicstamp.dev) • 
[GitHub Org](https://github.com/LogicStamp) • 
[LogicStamp Context (CLI)](https://github.com/LogicStamp/logicstamp-context) • 
[LogicStamp MCP](https://github.com/LogicStamp/logicstamp-mcp)

</div>