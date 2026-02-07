'use client'

import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { isDarkMode, toggleDarkMode, isLoaded } = useTheme()

  // While loading, reserve space to avoid layout shift
  if (!isLoaded) {
    return (
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 dark:text-gray-300"
        disabled
        aria-label="Toggle theme"
      >
        <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-600" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-transparent active:scale-95"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        // Moon icon
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // Sun icon
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  )
}
















