# Security Audit Report

## Current Status

As of the latest `npm audit`, there are **10 vulnerabilities** (7 moderate, 3 high) in the dependency tree. These are being left as-is for the initial production release.

## Vulnerabilities Breakdown

### 1. esbuild Vulnerability (Moderate Severity)
- **CVE**: [GHSA-67mh-4wv8-2f99](https://github.com/advisories/GHSA-67mh-4wv8-2f99)
- **Affected Version**: esbuild <=0.24.2
- **Current Installed**: esbuild@0.21.5 (via vitest dependencies)
- **Description**: esbuild enables any website to send any requests to the development server and read the response
- **Impact**: Development-only vulnerability affecting the local dev server
- **Source**: 
  - `vitest@2.1.9` → `vite@5.4.21` → `esbuild@0.21.5`
  - `vite-node@2.1.9` → `vite@5.4.21` → `esbuild@0.21.5`

### 2. glob Vulnerability (High Severity)
- **CVE**: [GHSA-5j98-mcp5-4vw2](https://github.com/advisories/GHSA-5j98-mcp5-4vw2)
- **Affected Version**: glob 10.2.0 - 10.4.5
- **Current Installed**: glob@10.3.10
- **Description**: glob CLI: Command injection via -c/--cmd executes matches with shell:true
- **Impact**: Development-only vulnerability affecting ESLint tooling
- **Source**: 
  - `eslint-config-next@14.2.33` → `@next/eslint-plugin-next@14.2.33` → `glob@10.3.10`

## Why These Appeared Now

These vulnerabilities were introduced when testing dependencies were added to the project:

- `vitest@2.1.9` and related packages (`@vitest/ui`, `@vitest/coverage-v8`)
- These packages depend on older versions of `vite` (5.4.21) which bundle vulnerable `esbuild` versions
- The main project uses `vite@6.4.1` with a safe `esbuild@0.25.12`, but vitest's nested dependencies override this

## Why We're Leaving Them As-Is

1. **Development-Only Dependencies**: All affected packages are in `devDependencies`:
   - `vitest`, `@vitest/ui`, `@vitest/coverage-v8` (testing tools)
   - `eslint-config-next` (linting tool)
   - These are **not included in production builds**

2. **Production Safety**: 
   - The vulnerabilities affect development tooling only
   - No production code or runtime dependencies are affected
   - The production build process is not impacted

3. **Breaking Changes Required**:
   - Fixing esbuild requires upgrading `vitest` from `2.1.9` → `4.0.13` (major version bump)
   - Fixing glob requires upgrading `eslint-config-next` from `14.2.33` → `16.0.3`, which requires Next.js 16.x
   - Both would require significant testing and potential code changes

4. **Timeline**: Project is going to production soon, and these dev-only vulnerabilities don't warrant delaying the release

## Future Remediation

### Short-term (Post-Launch)
1. **Update vitest ecosystem**:
   ```bash
   npm install --save-dev vitest@^4.0.0 @vitest/ui@^4.0.0 @vitest/coverage-v8@^4.0.0
   ```
   - Test all test suites after upgrade
   - Review vitest 4.x migration guide for breaking changes

2. **Update Next.js and ESLint config** (when ready for Next.js 16):
   ```bash
   npm install next@^16.0.0 eslint-config-next@^16.0.0
   ```
   - Review Next.js 16 migration guide
   - Test all pages and API routes

### Long-term
- Set up automated dependency updates (e.g., Dependabot)
- Regular security audits: `npm audit` before each release
- Consider using `npm audit fix` (without `--force`) for non-breaking updates

## Verification

To check current vulnerabilities:
```bash
npm audit
```

To see detailed dependency tree:
```bash
npm list esbuild glob vite vitest eslint-config-next
```

## Notes

- These vulnerabilities are **not exploitable in production**
- They only affect local development environments
- The risk is minimal since they require local access to the development server
- Regular monitoring and updates post-launch will address these issues

---

**Last Updated**: Initial documentation  
**Status**: Acknowledged, deferred to post-launch remediation

