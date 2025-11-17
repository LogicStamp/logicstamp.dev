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

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default to system so server/client match; we resolve real preference after mount
  const [theme, setThemeState] = useState<ThemePreference>('system')
  const [systemPrefersDark, setSystemPrefersDark] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load theme preference and system preference after mount
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (event: MediaQueryListEvent) => {
        setSystemPrefersDark(event.matches)
      }

      setSystemPrefersDark(mediaQuery.matches)

      const cookieMatch = document.cookie.match(/(?:^|; )theme=([^;]+)/)
      const cookieTheme = (cookieMatch ? decodeURIComponent(cookieMatch[1]) : null) as ThemePreference | null
      
      let storageTheme: ThemePreference | null = null
      try {
        storageTheme = (localStorage.getItem('theme') as ThemePreference | null) || null
      } catch (e) {
        // localStorage may not be available (e.g., in private browsing)
        console.warn('localStorage not available:', e)
      }
      
      const initialTheme = cookieTheme || storageTheme || 'system'

      setThemeState(initialTheme)

      mediaQuery.addEventListener('change', handleChange)
      setIsLoaded(true)

      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    } catch (error) {
      console.error('Theme initialization failed:', error)
      setIsLoaded(true) // Still mark as loaded to prevent infinite loading state
    }
  }, [])

  // Apply the effective theme to the document & persist preference
  useEffect(() => {
    if (!isLoaded || typeof document === 'undefined') return

    try {
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

      const effectiveDark = theme === 'dark' || (theme === 'system' && systemPrefersDark)

      if (effectiveDark) {
        document.documentElement.classList.add('dark')
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.setAttribute('data-theme', 'light')
      }
    } catch (error) {
      console.error('Failed to apply theme:', error)
    }
  }, [theme, systemPrefersDark, isLoaded])

  const setTheme = (newTheme: ThemePreference) => {
    setThemeState(newTheme)
  }

  const toggleDarkMode = () => {
    // Simple toggle between explicit light and dark
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
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
