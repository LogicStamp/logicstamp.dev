/**
 * Shared brand gradient styles.
 * Keep text and glow layers aligned for consistent branding.
 */
// const BRAND_GRADIENT_STOPS = 'from-violet-300 via-violet-500 to-indigo-600' // Alt
const BRAND_GRADIENT_STOPS = 'from-violet-400 via-violet-500 to-purple-600'

export const brandGradientTextClasses =
  `bg-gradient-to-r ${BRAND_GRADIENT_STOPS} bg-clip-text text-transparent dark:saturate-110 dark:brightness-110`

export const brandGradientGlowClasses =
  `absolute inset-0 bg-gradient-to-r ${BRAND_GRADIENT_STOPS} blur-xl -z-10 opacity-20 animate-pulse`

export const brandGradientBackgroundClasses =
  `bg-gradient-to-r ${BRAND_GRADIENT_STOPS}`
