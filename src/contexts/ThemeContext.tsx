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
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemPrefersDark(event.matches)
    }

    setSystemPrefersDark(mediaQuery.matches)

    const savedTheme = (localStorage.getItem('theme') as ThemePreference | null) || 'system'
    setThemeState(savedTheme)

    mediaQuery.addEventListener('change', handleChange)
    setIsLoaded(true)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Apply the effective theme to the document & persist preference
  useEffect(() => {
    if (!isLoaded) return

    localStorage.setItem('theme', theme)

    const effectiveDark = theme === 'dark' || (theme === 'system' && systemPrefersDark)

    if (effectiveDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
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
