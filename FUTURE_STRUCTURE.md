# Component Folder Structure - Future Plan

## Proposed Complete Structure

```
components/
├── ui/                    # ✅ Already exists - reusable UI primitives
│   ├── CopyButton.tsx
│   ├── GetStartedButton.tsx
│   ├── ReadTheDocsButton.tsx
│   ├── ScrollToTopButton.tsx
│   ├── StarGitHubButton.tsx
│   └── ThemeToggle.tsx
│
├── layout/                # 🆕 Layout components (used across pages)
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ScrollToTop.tsx
│
├── sections/              # 🆕 Page sections (homepage, landing sections)
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── FAQ.tsx
│   ├── Testimonials.tsx
│   ├── Stats.tsx
│   ├── Integrations.tsx
│   ├── WhyLogicStamp.tsx
│   ├── CommunityCTA.tsx
│   └── CTA.tsx
│
├── docs/                  # 🆕 Documentation-specific components
│   ├── DocsLayout.tsx
│   ├── DocsSidebar.tsx
│   ├── DocsTOC.tsx
│   └── TabbedCodeBlock.tsx
│
├── branding/              # 🆕 Brand assets
│   ├── LogicStampLogo.tsx
│   └── LogicStampWordmark.tsx
│
├── features/              # 🆕 Feature-specific components
│   ├── Demo.tsx
│   └── HeroVisualization/
│       ├── ContextJsonPreview.tsx
│       ├── DependencyGraph.tsx
│       └── index.tsx
│
└── common/                # 🆕 Shared utility components
    ├── AnimatedCounter.tsx
    ├── AnimatedSection.tsx
    ├── GitHubStats.tsx
    └── FeatureComparison.tsx
```

## Rationale

- **`ui/`** - Reusable UI primitives (buttons, toggles, etc.)
- **`layout/`** - Site-wide layout components (Header, Footer)
- **`sections/`** - Homepage/landing page sections
- **`docs/`** - Documentation-specific components
- **`branding/`** - Logo and wordmark components
- **`features/`** - Feature-specific components (Demo, HeroVisualization)
- **`common/`** - Shared utility components (AnimatedSection, AnimatedCounter)

## Current Implementation Status

✅ **Implemented**: `sections/` folder with homepage sections
- Hero.tsx
- FAQ.tsx
- CTA.tsx
- Stats.tsx
- Features.tsx
- WhyLogicStamp.tsx
- CommunityCTA.tsx
- Integrations.tsx

⏳ **Future**: Remaining folders to be implemented incrementally

