# Color Theme System

This directory contains the comprehensive color theme system for the AI Design Guardian landing page.

## Files

- `theme.css` - Main color theme definitions with CSS custom properties
- `README.md` - This documentation file

## Color Palette

### Primary Colors
- **Primary**: Blue-based colors (50-900 scale)
- **Secondary**: Purple-based colors (50-900 scale)

### Semantic Colors
- **Success**: Green-based colors for positive states
- **Warning**: Yellow/Orange-based colors for caution states
- **Error**: Red-based colors for error states
- **Info**: Blue-based colors for informational states

### Neutral Colors
- **Gray**: Complete gray scale (50-900) for text, backgrounds, and borders

## Usage

### CSS Custom Properties
Use CSS custom properties for dynamic theming:

```css
.my-element {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  border-color: var(--color-border-primary);
}
```

### Tailwind Classes
Use the extended Tailwind color classes:

```jsx
<div className="bg-primary-600 text-white">
  <h1 className="text-secondary-500">Title</h1>
</div>
```

### Theme Utility Classes
Use the custom theme utility classes:

```jsx
<section className="bg-theme-secondary text-theme-primary">
  <div className="bg-gradient-theme-primary">Gradient background</div>
</section>
```

## Dark Mode Support

The theme automatically adapts to dark mode using the `[data-theme="dark"]` selector. All colors have appropriate dark mode variants.

## Stats Section

Special classes are provided for the stats section:

- `bg-stats-section` - Grayish gradient background
- `text-stats-primary` - Primary text color for stats
- `text-stats-secondary` - Secondary text color for stats
- `text-stats-muted` - Muted text color for stats

## Best Practices

1. **Use semantic colors** for UI states (success, warning, error)
2. **Use primary/secondary** for brand elements
3. **Use gray scale** for neutral elements
4. **Test both light and dark modes** when implementing new components
5. **Use CSS custom properties** for dynamic theming
6. **Use Tailwind classes** for static styling
