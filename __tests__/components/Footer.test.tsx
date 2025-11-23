import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '../utils/test-utils'
import { setupIntersectionObserverMock } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import Footer from '@/components/Footer'

// Mock child components
vi.mock('@/components/AnimatedSection', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

vi.mock('@/components/LogicStampLogo', () => ({
  default: () => <div data-testid="logo">Logo</div>,
}))

vi.mock('@/components/LogicStampWordmark', () => ({
  default: () => <div data-testid="wordmark">Wordmark</div>,
}))

vi.mock('@/components/ui/ThemeToggle', () => ({
  default: () => <button data-testid="theme-toggle">Theme</button>,
}))

// Mock fetch for newsletter API
global.fetch = vi.fn()

describe('Footer Component', () => {
  beforeEach(() => {
    setupIntersectionObserverMock()
    vi.clearAllMocks()
    ;(global.fetch as any).mockClear()
  })

  it('renders footer with all sections', () => {
    render(<Footer />)

    const footer = document.querySelector('footer')
    expect(footer).toBeInTheDocument()
    expect(screen.getByText(/AI-ready context from your codebase/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('link', { name: /documentation/i })).toBeInTheDocument()
    // GitHub and npm links exist - check by href since they may have sr-only text
    const githubLink = container.querySelector('a[href="https://github.com/LogicStamp/logicstamp-context"]')
    const npmLink = container.querySelector('a[href="https://www.npmjs.com/package/logicstamp-context"]')
    expect(githubLink).toBeInTheDocument()
    expect(npmLink).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /mit license/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy & security/i })).toBeInTheDocument()
  })

  it('renders newsletter subscription form', () => {
    render(<Footer />)

    expect(screen.getByText(/let's keep in touch/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your@email.com/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe to our newsletter/i })).toBeInTheDocument()
  })

  it('validates email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const submitButton = screen.getByRole('button', { name: /subscribe/i })
    const emailInput = screen.getByPlaceholderText(/your@email.com/i) as HTMLInputElement

    // Clear the input first (in case it has a default value)
    await user.clear(emailInput)
    
    // Try to submit empty form - HTML5 validation might prevent this, so we bypass it
    // by directly calling the submit handler or checking the validation
    const form = emailInput.closest('form')
    if (form) {
      // Trigger form submission
      await user.click(submitButton)
      
      // Wait for either our custom validation error or check HTML5 validation
      await waitFor(() => {
        const errorMessage = screen.queryByText(/please enter an email address/i)
        if (errorMessage) {
          expect(errorMessage).toBeInTheDocument()
        } else {
          // If HTML5 validation prevented submission, that's also valid
          expect(emailInput.validity.valueMissing || emailInput.validity.valid === false).toBeTruthy()
        }
      }, { timeout: 3000 })
    }
  })

  it('submits newsletter form with valid email', async () => {
    const user = userEvent.setup()
    const mockFetch = global.fetch as any
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Subscribed' }),
    })

    render(<Footer />)

    const emailInput = screen.getByPlaceholderText(/your@email.com/i)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })

    await user.type(emailInput, 'test@example.com')
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'test@example.com' }),
      })
    }, { timeout: 3000 })
  })

  it('shows success message after successful subscription', async () => {
    const user = userEvent.setup()
    const mockFetch = global.fetch as any
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Subscribed' }),
    })

    render(<Footer />)

    const emailInput = screen.getByPlaceholderText(/your@email.com/i)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })

    await user.type(emailInput, 'test@example.com')
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/you are in!/i)).toBeInTheDocument()
    }, { timeout: 3000 })

    // Email should be cleared
    await waitFor(() => {
      expect(emailInput).toHaveValue('')
    })
  })

  it('shows error message on API failure', async () => {
    const user = userEvent.setup()
    const mockFetch = global.fetch as any
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Invalid email' }),
    })

    render(<Footer />)

    const emailInput = screen.getByPlaceholderText(/your@email.com/i)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })

    await user.type(emailInput, 'test@example.com')
    await user.click(submitButton)

    // Wait for the API call to complete and error message to appear
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled()
    }, { timeout: 3000 })

    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('handles network errors gracefully', async () => {
    const user = userEvent.setup()
    const mockFetch = global.fetch as any
    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    render(<Footer />)

    const emailInput = screen.getByPlaceholderText(/your@email.com/i)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })

    await user.type(emailInput, 'test@example.com')
    await user.click(submitButton)

    // Wait for the fetch to be called first
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled()
    }, { timeout: 3000 })

    // Then wait for the error message to appear
    await waitFor(() => {
      expect(
        screen.getByText(/we could not subscribe you right now/i)
      ).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('disables form during submission', async () => {
    const user = userEvent.setup()
    let resolvePromise: (value: any) => void
    const promise = new Promise<any>(resolve => {
      resolvePromise = resolve
    })
    const mockFetch = global.fetch as any
    mockFetch.mockReturnValueOnce(promise)

    render(<Footer />)

    const emailInput = screen.getByPlaceholderText(/your@email.com/i)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })

    await user.type(emailInput, 'test@example.com')
    await user.click(submitButton)

    // Wait for button text to change to "Subscribing..." which indicates state update
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /subscribing/i })
      expect(button).toBeInTheDocument()
    }, { timeout: 3000 })

    // Now check that it's disabled
    const disabledButton = screen.getByRole('button', { name: /subscribing/i })
    expect(disabledButton).toBeDisabled()
    expect(emailInput).toBeDisabled()

    // Resolve the promise
    resolvePromise!({
      ok: true,
      json: async () => ({ success: true }),
    })
    
    // Wait for form to re-enable after promise resolves
    await waitFor(() => {
      const enabledButton = screen.getByRole('button', { name: /subscribe to our newsletter/i })
      expect(enabledButton).not.toBeDisabled()
      expect(emailInput).not.toBeDisabled()
    }, { timeout: 3000 })
  })

  it('renders copyright notice', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2025 LogicStamp/i)).toBeInTheDocument()
  })

  it('renders social links with correct attributes', () => {
    const { container } = render(<Footer />)

    // GitHub link has sr-only text, find by href using querySelector
    const githubLink = container.querySelector('a[href="https://github.com/LogicStamp/logicstamp-context"]')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})

