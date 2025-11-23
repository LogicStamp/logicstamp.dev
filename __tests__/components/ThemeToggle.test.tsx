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

    // Component should eventually render with theme options
    // ThemeProvider loads quickly in test environment
    await waitFor(() => {
      const buttons = screen.getAllByRole('radio')
      expect(buttons.length).toBe(3)
    }, { timeout: 2000 })
  })

  it('renders three theme options after loading', async () => {
    render(<ThemeToggle />)

    await waitFor(() => {
      const buttons = screen.getAllByRole('radio')
      expect(buttons).toHaveLength(3)
    }, { timeout: 3000 })
  })

  it('has correct accessibility attributes', async () => {
    render(<ThemeToggle />)

    await waitFor(() => {
      const radiogroup = screen.getByRole('radiogroup', { name: /color theme/i })
      expect(radiogroup).toBeInTheDocument()

      const buttons = screen.getAllByRole('radio')
      expect(buttons).toHaveLength(3)

      // Check that buttons have aria-checked
      buttons.forEach((button) => {
        expect(button).toHaveAttribute('aria-checked')
      })

      // Check for screen reader text
      expect(screen.getByText(/light theme/i)).toBeInTheDocument()
      expect(screen.getByText(/system theme/i)).toBeInTheDocument()
      expect(screen.getByText(/dark theme/i)).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('allows selecting light theme', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)

    await waitFor(() => {
      expect(screen.getAllByRole('radio')).toHaveLength(3)
    }, { timeout: 3000 })

    const lightButton = screen.getByRole('radio', { name: /light theme/i })
    await user.click(lightButton)

    await waitFor(() => {
      expect(lightButton).toHaveAttribute('aria-checked', 'true')
      // Theme should be persisted
      expect(localStorageMock['theme']).toBe('light')
    })
  })

  it('allows selecting dark theme', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)

    await waitFor(() => {
      expect(screen.getAllByRole('radio')).toHaveLength(3)
    }, { timeout: 3000 })

    const darkButton = screen.getByRole('radio', { name: /dark theme/i })
    await user.click(darkButton)

    await waitFor(() => {
      expect(darkButton).toHaveAttribute('aria-checked', 'true')
      expect(localStorageMock['theme']).toBe('dark')
      // DOM should have dark class
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })
  })

  it('allows selecting system theme', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)

    await waitFor(() => {
      expect(screen.getAllByRole('radio')).toHaveLength(3)
    }, { timeout: 3000 })

    const systemButton = screen.getByRole('radio', { name: /system theme/i })
    await user.click(systemButton)

    await waitFor(() => {
      expect(systemButton).toHaveAttribute('aria-checked', 'true')
      expect(localStorageMock['theme']).toBe('system')
    })
  })

  it('updates DOM class when dark theme is selected', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)

    await waitFor(() => {
      expect(screen.getAllByRole('radio')).toHaveLength(3)
    }, { timeout: 3000 })

    const darkButton = screen.getByRole('radio', { name: /dark theme/i })
    await user.click(darkButton)

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
    
    render(<ThemeToggle />)

    await waitFor(() => {
      expect(screen.getAllByRole('radio')).toHaveLength(3)
    }, { timeout: 3000 })

    const lightButton = screen.getByRole('radio', { name: /light theme/i })
    await user.click(lightButton)

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(false)
      expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    })
  })

  it('renders compact variant correctly', async () => {
    render(<ThemeToggle compact />)

    await waitFor(() => {
      const container = screen.getByRole('radiogroup', { name: /color theme/i })
      expect(container).toHaveClass('px-1.5', 'py-0.5')
      
      const buttons = screen.getAllByRole('radio')
      buttons.forEach((button) => {
        expect(button).toHaveClass('w-8', 'h-8', 'text-xs')
      })
    }, { timeout: 3000 })
  })

  it('persists theme preference to localStorage', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)

    await waitFor(() => {
      expect(screen.getAllByRole('radio')).toHaveLength(3)
    }, { timeout: 3000 })

    const darkButton = screen.getByRole('radio', { name: /dark theme/i })
    await user.click(darkButton)

    await waitFor(() => {
      expect(localStorageMock['theme']).toBe('dark')
    })
  })

  it('shows correct selected state visually', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)

    await waitFor(() => {
      expect(screen.getAllByRole('radio')).toHaveLength(3)
    }, { timeout: 3000 })

    const darkButton = screen.getByRole('radio', { name: /dark theme/i })
    await user.click(darkButton)

    await waitFor(() => {
      // Selected button should have different styling
      expect(darkButton).toHaveClass('bg-white', 'dark:bg-gray-900', 'shadow-sm')
      expect(darkButton).toHaveAttribute('aria-checked', 'true')
    })
  })
})

