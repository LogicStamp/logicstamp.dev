# Test Suite

This directory contains the test suite for the LogicStamp landing page.

## Structure

```
__tests__/
├── setup.ts              # Test setup and global mocks
├── utils/
│   └── test-utils.tsx    # Custom render utilities and helpers
├── pages/
│   └── home.test.tsx     # Landing page tests
└── components/
    ├── CopyButton.test.tsx
    ├── FAQ.test.tsx
    ├── Footer.test.tsx
    └── CTA.test.tsx
```

## Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Test Utilities

### Custom Render

The `test-utils.tsx` file provides a custom `render` function that includes all necessary providers (ThemeProvider, etc.):

```tsx
import { render, screen } from '../utils/test-utils'
```

### Mock IntersectionObserver

Use `setupIntersectionObserverMock()` to mock IntersectionObserver for components that use scroll-based animations:

```tsx
import { setupIntersectionObserverMock } from '../utils/test-utils'

beforeEach(() => {
  setupIntersectionObserverMock()
})
```

## Writing New Tests

1. Place component tests in `__tests__/components/`
2. Place page tests in `__tests__/pages/`
3. Use the custom `render` from `test-utils.tsx`
4. Mock child components when testing parent components
5. Test user interactions with `@testing-library/user-event`

## Coverage Goals

- **Critical paths**: 100% coverage (user interactions, form submissions)
- **Components**: 80%+ coverage
- **Pages**: Smoke tests for structure and rendering

