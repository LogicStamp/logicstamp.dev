'use client'

import { useTheme } from '@/contexts/ThemeContext'

type ThemePreference = 'light' | 'dark' | 'system'

const options: Array<{ id: ThemePreference; label: string }> = [
  { id: 'light', label: 'Light' },
  { id: 'system', label: 'System' },
  { id: 'dark', label: 'Dark' },
]

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme, isDarkMode, isLoaded } = useTheme()

  // While loading, reserve space to avoid layout shift
  if (!isLoaded) {
    return (
      <div
        className={`inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100/70 dark:bg-gray-800/70 ${
          compact ? 'px-1.5 py-0.5' : 'px-1.5 py-1'
        }`}
      >
        <div className={`${compact ? 'w-7 h-7' : 'w-8 h-8'} rounded-full`} />
        <div className={`${compact ? 'w-7 h-7' : 'w-8 h-8'} rounded-full ml-1`} />
        <div className={`${compact ? 'w-7 h-7' : 'w-8 h-8'} rounded-full ml-1`} />
      </div>
    )
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 shadow-sm ${
        compact ? 'px-1.5 py-0.5' : 'px-1.5 py-1'
      }`}
      role="radiogroup"
      aria-label="Color theme"
    >
      {options.map((option) => {
        const selected = theme === option.id

        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => setTheme(option.id)}
            className={`relative flex items-center justify-center rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-transparent ${
              compact ? 'w-8 h-8 text-xs' : 'w-9 h-9 text-sm'
            } ${
              selected
                ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <span className="sr-only">{option.label} theme</span>
            {option.id === 'light' && (
              <svg
                className={compact ? 'h-4 w-4' : 'h-4.5 w-4.5'}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v-2M17.247 6.753l1.414-1.414M19.5 12h2M17.247 17.247l1.414 1.414M12 19.5v2M6.753 17.247l-1.414 1.414M4.5 12h-2M6.753 6.753 5.339 5.339"
                />
                <circle cx="12" cy="12" r="4.25" />
              </svg>
            )}
            {option.id === 'system' && (
              <svg
                className={compact ? 'h-4 w-4' : 'h-4.5 w-4.5'}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect
                  x="3.5"
                  y="5"
                  width="17"
                  height="12"
                  rx="2.2"
                  ry="2.2"
                />
                <path d="M9 18.5h6" />
              </svg>
            )}
            {option.id === 'dark' && (
              <svg
                className={compact ? 'h-4 w-4' : 'h-4.5 w-4.5'}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 0111.21 3a7.5 7.5 0 000 15A9 9 0 0121 12.79z"
                />
              </svg>
            )}
          </button>
        )
      })}
    </div>
  )
}
















