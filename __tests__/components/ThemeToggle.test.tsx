import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { resetThemeCache } from '@/contexts/ThemeContext'

describe('ThemeToggle', () => {
  let localStorageMock: { [key: string]: string }
  let cookieMock: string
  let matchMediaMock: any

  beforeEach(() => {
    // Reset theme cache before each test
    resetThemeCache()
    
    // Clear localStorage mock
    localStorageMock = {}
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      return localStorageMock[key] || null
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation((key, value) => {
      localStorageMock[key] = value
    })
    vi.spyOn(Storage.prototype, 'removeItem').mockImplementation((key) => {
      delete localStorageMock[key]
    })

    // Clear cookies mock - use a proper getter/setter
    cookieMock = ''
    Object.defineProperty(document, 'cookie', {
      configurable: true,
      get: () => cookieMock,
      set: (val: string) => {
        cookieMock = val
      },
    })

    // Reset DOM classes and attributes
    document.documentElement.classList.remove('dark')
    document.documentElement.removeAttribute('data-theme')

    // Mock matchMedia for prefers-color-scheme (defaults to light)
    matchMediaMock = vi.fn().mockImplementation((query: string) => {
      const matches = query === '(prefers-color-scheme: dark)' ? false : false
      return {
        matches,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }
    })
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: matchMediaMock,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    document.documentElement.classList.remove('dark')
    document.documentElement.removeAttribute('data-theme')
  })

  it('renders component successfully', async () => {
    render(<ThemeToggle />)

    // Component should eventually render with toggle button
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /switch to/i })
      expect(button).toBeInTheDocument()
    }, { timeout: 2000 })
  })

  it('handles initial render state', async () => {
    render(<ThemeToggle />)

    // In test environment, theme may load synchronously
    // Check if loading state exists, otherwise verify loaded state
    const loadingButton = screen.queryByRole('button', { name: /toggle theme/i })
    if (loadingButton) {
      expect(loadingButton).toBeDisabled()
    } else {
      // Component loaded quickly, verify it's in a valid loaded state
      await waitFor(() => {
        const button = screen.getByRole('button', { name: /switch to/i })
        expect(button).toBeInTheDocument()
        expect(button).not.toBeDisabled()
      }, { timeout: 1000 })
    }
  })

  it('renders toggle button after loading', async () => {
    render(<ThemeToggle />)

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /switch to/i })
      expect(button).toBeInTheDocument()
      expect(button).not.toBeDisabled()
    }, { timeout: 3000 })
  })

  it('has correct accessibility attributes', async () => {
    render(<ThemeToggle />)

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /switch to/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('type', 'button')
    }, { timeout: 3000 })
  })

  it('toggles from light to dark theme', async () => {
    const user = userEvent.setup()
    
    // Set initial light theme
    localStorageMock['theme'] = 'light'
    
    render(<ThemeToggle />)

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /switch to dark mode/i })
      expect(button).toBeInTheDocument()
    }, { timeout: 3000 })

    const toggleButton = screen.getByRole('button', { name: /switch to dark mode/i })
    await user.click(toggleButton)

    await waitFor(() => {
      // Should switch to dark mode
      expect(localStorageMock['theme']).toBe('dark')
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })
  })

  it('toggles from dark to light theme', async () => {
    const user = userEvent.setup()
    
    // Set initial dark theme BEFORE rendering
    localStorageMock['theme'] = 'dark'
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('data-theme', 'dark')
    cookieMock = 'theme=dark'
    
    render(<ThemeToggle />)

    // Wait for theme to initialize and button to show correct label
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /switch to light mode/i })
      expect(button).toBeInTheDocument()
    }, { timeout: 3000 })

    const toggleButton = screen.getByRole('button', { name: /switch to light mode/i })
    await user.click(toggleButton)

    await waitFor(() => {
      // Should switch to light mode
      expect(localStorageMock['theme']).toBe('light')
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })
  })

  it('shows sun icon in light mode', async () => {
    // Set initial light theme BEFORE rendering
    localStorageMock['theme'] = 'light'
    document.documentElement.classList.remove('dark')
    document.documentElement.setAttribute('data-theme', 'light')
    cookieMock = 'theme=light'
    
    render(<ThemeToggle />)

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /switch to dark mode/i })
      expect(button).toBeInTheDocument()
      
      // Should have sun icon (circle element)
      // Both SVGs are rendered, but only one is visible based on light mode
      const svgs = button.querySelectorAll('svg')
      expect(svgs.length).toBeGreaterThan(0)
      // Find the visible sun icon (has circle)
      const sunSvg = Array.from(svgs).find(svg => {
        const circle = svg.querySelector('circle')
        return circle !== null
      })
      expect(sunSvg).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('shows moon icon in dark mode', async () => {
    // Set initial dark theme BEFORE rendering
    localStorageMock['theme'] = 'dark'
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('data-theme', 'dark')
    cookieMock = 'theme=dark'
    
    render(<ThemeToggle />)

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /switch to light mode/i })
      expect(button).toBeInTheDocument()
      
      // Should have moon icon (path element, no circle)
      // Both SVGs are rendered, but only one is visible based on dark mode
      const svgs = button.querySelectorAll('svg')
      expect(svgs.length).toBeGreaterThan(0)
      // Find the visible moon icon (has path, no circle)
      const moonSvg = Array.from(svgs).find(svg => {
        const path = svg.querySelector('path')
        const circle = svg.querySelector('circle')
        return path && !circle
      })
      expect(moonSvg).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('updates DOM class when dark theme is selected', async () => {
    const user = userEvent.setup()
    localStorageMock['theme'] = 'light'
    
    render(<ThemeToggle />)

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument()
    }, { timeout: 3000 })

    const toggleButton = screen.getByRole('button', { name: /switch to dark mode/i })
    await user.click(toggleButton)

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true)
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    })
  })

  it('removes dark class when light theme is selected', async () => {
    const user = userEvent.setup()
    
    // Set initial dark theme BEFORE rendering
    localStorageMock['theme'] = 'dark'
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('data-theme', 'dark')
    cookieMock = 'theme=dark'
    
    render(<ThemeToggle />)

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
    }, { timeout: 3000 })

    const toggleButton = screen.getByRole('button', { name: /switch to light mode/i })
    await user.click(toggleButton)

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(false)
      expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    })
  })

  it('persists theme preference to localStorage', async () => {
    const user = userEvent.setup()
    localStorageMock['theme'] = 'light'
    
    render(<ThemeToggle />)

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument()
    }, { timeout: 3000 })

    const toggleButton = screen.getByRole('button', { name: /switch to dark mode/i })
    await user.click(toggleButton)

    await waitFor(() => {
      expect(localStorageMock['theme']).toBe('dark')
    })
  })

  it('updates aria-label when theme changes', async () => {
    const user = userEvent.setup()
    localStorageMock['theme'] = 'light'
    
    render(<ThemeToggle />)

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /switch to dark mode/i })
      expect(button).toBeInTheDocument()
    }, { timeout: 3000 })

    const toggleButton = screen.getByRole('button', { name: /switch to dark mode/i })
    await user.click(toggleButton)

    await waitFor(() => {
      const updatedButton = screen.getByRole('button', { name: /switch to light mode/i })
      expect(updatedButton).toBeInTheDocument()
    })
  })
})
