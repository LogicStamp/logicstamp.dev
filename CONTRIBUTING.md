# Contributing to LogicStamp

Thank you for your interest in contributing to LogicStamp! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/logicstamp.dev.git
   cd logicstamp.dev
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/original-owner/logicstamp.dev.git
   ```
4. **Create a branch** from `develop`:
   ```bash
   git checkout develop
   git pull upstream develop
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Branching Strategy

We follow a Git Flow-inspired branching strategy. See [BRANCHING_STRATEGY.md](./BRANCHING_STRATEGY.md) for details.

- **Feature branches**: `feature/description` - for new features
- **Bugfix branches**: `bugfix/description` - for bug fixes
- **Hotfix branches**: `hotfix/description` - for critical production fixes

### Making Changes

1. Make your changes in your feature branch
2. **Write clear commit messages** following [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `style:` for formatting
   - `refactor:` for code refactoring
   - `test:` for tests
   - `chore:` for maintenance

3. **Keep commits focused**: Each commit should represent a logical change
4. **Test your changes**: Ensure all tests pass and the app runs correctly

### Submitting Changes

1. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**:
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your branch and target `develop` (not `main`)
   - Fill out the PR template

3. **PR Requirements**:
   - Clear description of changes
   - Reference related issues (e.g., "Fixes #123")
   - Ensure CI checks pass
   - Request review from maintainers

4. **Respond to feedback**: Be open to suggestions and make requested changes

## Development Setup

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Building

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Avoid `any` types - use proper types or `unknown`
- Follow existing code style and patterns

### React/Next.js

- Use functional components with hooks
- Follow Next.js 14 App Router conventions
- Use TypeScript for component props

### Styling

- Use Tailwind CSS for styling
- Follow existing design patterns
- Ensure responsive design

### Code Style

- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small
- Follow existing code formatting

## Pull Request Process

1. **Update your branch**: Rebase or merge from `develop` before submitting
2. **Write a good PR description**:
   - What changes were made
   - Why the changes were needed
   - How to test the changes
   - Screenshots (if UI changes)

3. **Ensure quality**:
   - Code follows project standards
   - Tests pass (if applicable)
   - No console errors or warnings
   - Documentation updated (if needed)

4. **Be patient**: Maintainers will review your PR as soon as possible

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment (OS, Node version, browser)
- Screenshots (if applicable)

### Feature Requests

For feature requests:

- Clear description of the feature
- Use case and motivation
- Proposed solution (if any)
- Alternatives considered

## Questions?

- Open an issue for questions
- Check existing issues and discussions
- Review documentation in the `logicstamp-docs` folder

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md (if created)
- Release notes
- Project documentation

Thank you for contributing to LogicStamp! 🎉

