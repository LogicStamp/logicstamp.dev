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
4. **Create a branch** from `main`:
   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Branching Strategy

This repository uses a **simple feature → `main` branching model** for both:

- **LogicStamp Bundle** (npm package)
- **LogicStamp Site** (`logicstamp.dev`)

There is **no `develop` branch**. All changes go through short‑lived feature branches into `main`.

#### LogicStamp Bundle (npm package)

**Branches:**

- **`main`** – always **release‑ready**
- **`feature/*`, `fix/*`, `docs/*`** – short‑lived branches for work

**Typical flow:**

1. **Create a feature branch from `main`:**

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/short-description
   ```

2. **Do the work, commit, and push:**

   ```bash
   git add .
   git commit -m "feat: short description"
   git push origin feature/short-description
   ```

3. **Open a Pull Request targeting `main`.**
4. After review and passing checks, **merge into `main`** and delete the branch.

**Releasing to npm:**

When you want to publish a new version:

```bash
# From main, with a clean working tree
git checkout main
git pull origin main

# Bump version (pick one)
npm version patch   # or: minor / major

# Push commit + tag
git push --follow-tags

# Publish to npm
npm publish
```

`main` always reflects what is currently released (or ready to be released), and Git tags map to npm versions.

#### LogicStamp Site (`logicstamp.dev`)

The site uses the same **feature → `main`** model, but "releases" are deployments.

**Branches:**

- **`main`** – deployed to **production** via Vercel
- **`feature/*`** – new sections, design tweaks, docs changes

**Typical flow:**

1. **Create a feature branch from `main`:**

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/update-landing-copy
   ```

2. Make changes, commit, and push the branch.
3. **Open a PR targeting `main`.**
4. Vercel creates a **preview deployment** for the PR.
5. If the preview looks good and checks pass, **merge into `main`**.
6. `main` deploys automatically to production.

No `develop` branch is needed; PR previews act as the staging environment.

#### Branch Protection & Conventions

**`main` branch protection (recommended):**

- Require **pull request reviews** (at least 1 approval)
- Require **status checks** (lint, tests, build, etc.) to pass
- Require branches to be **up to date** before merging
- Disallow **force pushes** and **deletions**

**Branch naming:**

- `feature/add-x`
- `fix/bug-y`
- `docs/update-z`

**Commit messages:**

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new feature
- `fix:` bug fix
- `docs:` docs-only changes
- `style:` formatting-only changes
- `refactor:` internal refactors
- `test:` tests
- `chore:` tooling / maintenance
- `perf:` performance improvements
- `ci:` CI/CD changes

**Best Practices:**

1. **Keep branches short‑lived** – merge within days, not weeks.
2. **One change per branch** – avoid mixing unrelated work.
3. **Sync with `main` regularly** – `git pull --rebase origin main` on feature branches.
4. **Always use PRs** – even for maintainers.
5. **Use preview deploys** (site) to validate UX and docs before merging.
6. **Tag bundle releases** on `main` so they map cleanly to npm versions.

This lightweight strategy keeps both repos simple while still being safe and review‑friendly.

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
   - Select your branch and target **`main`**
   - Fill out the PR template

3. **PR Requirements**:
   - Clear description of changes
   - Reference related issues (e.g., "Fixes #123")
   - Ensure CI checks pass
   - Request review from maintainers

4. **Respond to feedback**: Be open to suggestions and make requested changes

## Development Setup

### Prerequisites

- Node.js >= 18.18.0
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

1. **Update your branch**: Rebase or merge from `main` before submitting
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
- Review documentation in the `docs` folder

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md (if created)
- Release notes
- Project documentation

Thank you for contributing to LogicStamp! 🎉

