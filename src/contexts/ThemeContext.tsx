'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface ThemeContextType {
  darkMode: boolean
  toggleDarkMode: () => void
  isLoaded: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Always start with false to ensure server and client initial render match
  // This prevents hydration errors - we'll update after mount
  const [darkMode, setDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load theme from DOM/localStorage after mount to prevent hydration mismatch
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const currentTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const shouldBeDark = currentTheme === 'dark'
    
    // Check DOM as source of truth (set by script in layout.tsx)
    // The script runs before React, so DOM should already have the correct class
    const domIsDark = document.documentElement.classList.contains('dark')
    
    // Use DOM state (it's the source of truth set by the script)
    setDarkMode(domIsDark)
    setIsLoaded(true)
  }, []) // Only run once on mount

  // Save theme preference to localStorage and apply to document when user toggles
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
      if (darkMode) {
        document.documentElement.classList.add('dark')
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.setAttribute('data-theme', 'light')
      }
    }
  }, [darkMode, isLoaded])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, isLoaded }}>
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
