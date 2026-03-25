/**
 * Shared brand gradient styles.
 * Keep text and glow layers aligned for consistent branding.
 */
// const BRAND_GRADIENT_STOPS = 'from-blue-600 via-violet-600 to-cyan-500'

// Quick presets (swap by changing BRAND_GRADIENT_STOPS above):
// const BRAND_GRADIENT_STOPS = 'from-indigo-600 via-purple-600 to-fuchsia-500' // Premium
//const BRAND_GRADIENT_STOPS = 'from-blue-600 via-indigo-600 to-violet-600' // Enterprise
// const BRAND_GRADIENT_STOPS = 'from-cyan-500 via-blue-600 to-purple-600' // Energetic
// const BRAND_GRADIENT_STOPS = 'from-green-500 via-emerald-600 to-emerald-500'
const BRAND_GRADIENT_STOPS = 'from-blue-500 via-indigo-500 to-purple-500'

export const brandGradientTextClasses =
  `bg-gradient-to-r ${BRAND_GRADIENT_STOPS} bg-clip-text text-transparent dark:saturate-110 dark:brightness-110`

export const brandGradientGlowClasses =
  `absolute inset-0 bg-gradient-to-r ${BRAND_GRADIENT_STOPS} blur-xl -z-10 opacity-20 animate-pulse`

export const brandGradientBackgroundClasses =
  `bg-gradient-to-r ${BRAND_GRADIENT_STOPS}`
