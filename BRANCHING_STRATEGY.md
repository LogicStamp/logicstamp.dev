# Branching Strategy

This document outlines the branching strategy for the LogicStamp project to ensure open source compliance and maintainable development workflows.

## Branch Types

### 1. `main` (Production/Stable)
- **Purpose**: Contains production-ready, stable code
- **Protection**: 
  - Direct pushes are restricted
  - Requires pull request reviews
  - Requires passing CI/CD checks
  - No force pushes allowed
- **Merges from**: `develop` (via release branches) or hotfix branches
- **Tags**: All releases are tagged (e.g., `v1.0.0`)

### 2. `develop` (Development/Integration)
- **Purpose**: Integration branch for features
- **Protection**: 
  - Requires pull request reviews
  - Requires passing CI/CD checks
- **Merges from**: Feature branches, bugfix branches
- **Merges to**: Release branches, `main` (via releases)

### 3. Feature Branches (`feature/*`)
- **Naming**: `feature/description` or `feature/issue-number-description`
- **Examples**: 
  - `feature/add-dark-mode`
  - `feature/123-improve-docs`
- **Purpose**: New features or enhancements
- **Branch from**: `develop`
- **Merge to**: `develop` via Pull Request
- **Lifecycle**: Delete after merge

### 4. Bugfix Branches (`bugfix/*`)
- **Naming**: `bugfix/description` or `bugfix/issue-number-description`
- **Examples**: 
  - `bugfix/fix-header-layout`
  - `bugfix/456-memory-leak`
- **Purpose**: Fixes for bugs in `develop`
- **Branch from**: `develop`
- **Merge to**: `develop` via Pull Request
- **Lifecycle**: Delete after merge

### 5. Release Branches (`release/*`)
- **Naming**: `release/v1.0.0` or `release/1.0.0`
- **Purpose**: Prepare new production releases
- **Branch from**: `develop`
- **Merge to**: Both `main` and `develop`
- **Activities**: 
  - Final bug fixes
  - Version bumping
  - Documentation updates
  - Release notes
- **Lifecycle**: Delete after merge to `main`

### 6. Hotfix Branches (`hotfix/*`)
- **Naming**: `hotfix/description` or `hotfix/v1.0.1`
- **Purpose**: Critical fixes for production
- **Branch from**: `main`
- **Merge to**: Both `main` and `develop`
- **Lifecycle**: Delete after merge

## Workflow Examples

### Adding a New Feature

```bash
# 1. Start from develop
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/add-new-component

# 3. Make changes and commit
git add .
git commit -m "feat: add new component"

# 4. Push and create PR
git push origin feature/add-new-component
# Create PR: feature/add-new-component -> develop
```

### Creating a Release

```bash
# 1. Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# 2. Update version, changelog, etc.
# 3. Final testing and bug fixes
git commit -m "chore: prepare release v1.0.0"

# 4. Merge to main
git checkout main
git merge release/v1.0.0
git tag v1.0.0
git push origin main --tags

# 5. Merge back to develop
git checkout develop
git merge release/v1.0.0
git push origin develop

# 6. Delete release branch
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

### Creating a Hotfix

```bash
# 1. Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-security-fix

# 2. Fix the issue
git commit -m "fix: critical security vulnerability"

# 3. Merge to main
git checkout main
git merge hotfix/critical-security-fix
git tag v1.0.1
git push origin main --tags

# 4. Merge to develop
git checkout develop
git merge hotfix/critical-security-fix
git push origin develop

# 5. Delete hotfix branch
git branch -d hotfix/critical-security-fix
git push origin --delete hotfix/critical-security-fix
```

## Branch Protection Rules

### For `main` branch:
- ✅ Require pull request reviews (at least 1 approval)
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Include administrators
- ✅ Restrict force pushes
- ✅ Restrict deletions

### For `develop` branch:
- ✅ Require pull request reviews (at least 1 approval)
- ✅ Require status checks to pass
- ⚠️ Allow force pushes (only for maintainers, use with caution)
- ✅ Restrict deletions

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks
- `perf:` Performance improvements
- `ci:` CI/CD changes

## Initial Setup

To set up this branching strategy:

```bash
# Ensure you're on main
git checkout main

# Create and push develop branch
git checkout -b develop
git push -u origin develop

# Set develop as default branch (optional, do via GitHub UI)
# Settings > Branches > Default branch > develop
```

## Best Practices

1. **Keep branches short-lived**: Merge feature/bugfix branches within days, not weeks
2. **Regularly sync with base**: Rebase or merge from `develop` regularly
3. **Clear branch names**: Use descriptive names that explain the purpose
4. **One feature per branch**: Keep branches focused on a single feature or fix
5. **Clean up**: Delete merged branches to keep the repository clean
6. **Use pull requests**: Always use PRs for code review, even for maintainers
7. **Tag releases**: Always tag releases in `main` for version tracking

