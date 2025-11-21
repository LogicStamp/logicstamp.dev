## Branching Strategy

This repository uses a **simple feature → `main` branching model** for both:

- **LogicStamp Bundle** (npm package)
- **LogicStamp Site** (`logicstamp.dev`)

There is **no `develop` branch**. All changes go through short‑lived feature branches into `main`.

---

## 1. LogicStamp Bundle (npm package)

### Branches

- **`main`** – always **release‑ready**
- **`feature/*`, `fix/*`, `docs/*`** – short‑lived branches for work

### Typical flow

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

### Releasing to npm

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

---

## 2. LogicStamp Site (`logicstamp.dev`)

The site uses the same **feature → `main`** model, but “releases” are deployments.

### Branches

- **`main`** – deployed to **production** via Vercel
- **`feature/*`** – new sections, design tweaks, docs changes

### Typical flow

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

---

## 3. Branch Protection & Conventions

### `main` branch protection (recommended)

- Require **pull request reviews** (at least 1 approval)
- Require **status checks** (lint, tests, build, etc.) to pass
- Require branches to be **up to date** before merging
- Disallow **force pushes** and **deletions**

### Branch naming

- `feature/add-x`
- `fix/bug-y`
- `docs/update-z`

### Commit messages

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

---

## 4. Best Practices

1. **Keep branches short‑lived** – merge within days, not weeks.
2. **One change per branch** – avoid mixing unrelated work.
3. **Sync with `main` regularly** – `git pull --rebase origin main` on feature branches.
4. **Always use PRs** – even for maintainers.
5. **Use preview deploys** (site) to validate UX and docs before merging.
6. **Tag bundle releases** on `main` so they map cleanly to npm versions.

This lightweight strategy keeps both repos simple while still being safe and review‑friendly.


