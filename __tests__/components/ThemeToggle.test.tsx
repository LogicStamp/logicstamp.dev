import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import ThemeToggle from '@/components/ui/ThemeToggle'

describe('ThemeToggle', () => {
  let localStorageMock: { [key: string]: string }
  let cookieMock: string

  beforeEach(() => {
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

    // Clear cookies mock
    cookieMock = ''
    Object.defineProperty(document, 'cookie', {
      writable: true,
      configurable: true,
      value: cookieMock,
    })

    // Reset DOM classes
    document.documentElement.classList.remove('dark')
    document.documentElement.removeAttribute('data-theme')

    // Mock matchMedia for prefers-color-scheme
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
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
    
    // Set initial dark theme
    localStorageMock['theme'] = 'dark'
    document.documentElement.classList.add('dark')
    
    render(<ThemeToggle />)

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
    localStorageMock['theme'] = 'light'
    
    render(<ThemeToggle />)

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /switch to dark mode/i })
      expect(button).toBeInTheDocument()
      
      // Should have sun icon (circle element)
      const svg = button.querySelector('svg')
      expect(svg).toBeInTheDocument()
      const circle = svg?.querySelector('circle')
      expect(circle).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('shows moon icon in dark mode', async () => {
    localStorageMock['theme'] = 'dark'
    document.documentElement.classList.add('dark')
    
    render(<ThemeToggle />)

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /switch to light mode/i })
      expect(button).toBeInTheDocument()
      
      // Should have moon icon (path element, no circle)
      const svg = button.querySelector('svg')
      expect(svg).toBeInTheDocument()
      const path = svg?.querySelector('path')
      expect(path).toBeInTheDocument()
      const circle = svg?.querySelector('circle')
      expect(circle).not.toBeInTheDocument()
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
    
    // Set initial dark theme
    localStorageMock['theme'] = 'dark'
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('data-theme', 'dark')
    
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
