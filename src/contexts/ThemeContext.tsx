'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ThemePreference = 'light' | 'dark' | 'system'

interface ThemeContextType {
  /** The current user preference: light, dark, or system */
  theme: ThemePreference
  /** Whether the effective theme is dark (after considering system preference) */
  isDarkMode: boolean
  /** Set a specific theme preference */
  setTheme: (theme: ThemePreference) => void
  /** Convenience toggle between light and dark (kept for backwards compatibility) */
  toggleDarkMode: () => void
  /** True once we’ve read from DOM/localStorage and applied theme */
  isLoaded: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Synchronously read theme from DOM/localStorage (only runs on client)
// The blocking script in layout.tsx already applied the theme to the DOM,
// so we read from both DOM and storage to get the preference
function getInitialTheme(): { theme: ThemePreference; systemPrefersDark: boolean; isLoaded: boolean } {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return { theme: 'system', systemPrefersDark: false, isLoaded: false }
  }

  try {
    // Read preference from storage (cookie takes precedence)
    const cookieMatch = document.cookie.match(/(?:^|; )theme=([^;]+)/)
    const cookieTheme = (cookieMatch ? decodeURIComponent(cookieMatch[1]) : null) as ThemePreference | null
    
    let storageTheme: ThemePreference | null = null
    try {
      storageTheme = (localStorage.getItem('theme') as ThemePreference | null) || null
    } catch (e) {
      // localStorage may not be available
    }
    
    const theme = cookieTheme || storageTheme || 'system'
    const systemPrefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
    
    // The blocking script already applied the theme, so we're loaded immediately
    return { theme, systemPrefersDark, isLoaded: true }
  } catch (e) {
    return { theme: 'system', systemPrefersDark: false, isLoaded: false }
  }
}

// Cache initial theme to avoid multiple calls
let cachedInitialTheme: ReturnType<typeof getInitialTheme> | null = null
function getCachedInitialTheme() {
  if (cachedInitialTheme === null) {
    cachedInitialTheme = getInitialTheme()
  }
  return cachedInitialTheme
}

// Reset cache (useful for testing)
export function resetThemeCache() {
  cachedInitialTheme = null
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize synchronously from DOM/localStorage to prevent flash
  // Cache the result to avoid multiple calls
  const initial = getCachedInitialTheme()
  const [theme, setThemeState] = useState<ThemePreference>(initial.theme)
  const [systemPrefersDark, setSystemPrefersDark] = useState(initial.systemPrefersDark)
  const [isLoaded, setIsLoaded] = useState(initial.isLoaded)

  // Set up media query listener for system preference changes
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (event: MediaQueryListEvent) => {
        setSystemPrefersDark(event.matches)
      }

      // Sync with current system preference (in case it changed)
      setSystemPrefersDark(mediaQuery.matches)

      // Set up listener for future changes
      mediaQuery.addEventListener('change', handleChange)

      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    } catch (error) {
      console.error('Theme initialization failed:', error)
    }
  }, [])

  // Apply the effective theme to the document & persist preference
  useEffect(() => {
    if (typeof document === 'undefined') return

    try {
      const effectiveDark = theme === 'dark' || (theme === 'system' && systemPrefersDark)
      
      // Check if theme is already correctly applied (prevents flash)
      const currentIsDark = document.documentElement.classList.contains('dark')
      const currentDataTheme = document.documentElement.getAttribute('data-theme')
      
      // Only apply if different from current state
      if (effectiveDark !== currentIsDark || (effectiveDark ? 'dark' : 'light') !== currentDataTheme) {
        if (effectiveDark) {
          document.documentElement.classList.add('dark')
          document.documentElement.setAttribute('data-theme', 'dark')
        } else {
          document.documentElement.classList.remove('dark')
          document.documentElement.setAttribute('data-theme', 'light')
        }
      }

      // Try to save to localStorage
      try {
        localStorage.setItem('theme', theme)
      } catch (e) {
        // localStorage may not be available (e.g., in private browsing)
        console.warn('Failed to save theme to localStorage:', e)
      }

      // Try to save to cookie
      try {
        document.cookie = `theme=${encodeURIComponent(theme)}; path=/; max-age=${60 * 60 * 24 * 365}`
      } catch (e) {
        // Cookie writes can fail in some environments; fail silently
        console.warn('Failed to save theme to cookie:', e)
      }
    } catch (error) {
      console.error('Failed to apply theme:', error)
    }
  }, [theme, systemPrefersDark])

  const setTheme = (newTheme: ThemePreference) => {
    setThemeState(newTheme)
  }

  const toggleDarkMode = () => {
    // Toggle based on effective dark mode, not just preference
    const effectiveDark = theme === 'dark' || (theme === 'system' && systemPrefersDark)
    setThemeState(effectiveDark ? 'light' : 'dark')
  }

  const effectiveDark = theme === 'dark' || (theme === 'system' && systemPrefersDark)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkMode: effectiveDark,
        setTheme,
        toggleDarkMode,
        isLoaded,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}














