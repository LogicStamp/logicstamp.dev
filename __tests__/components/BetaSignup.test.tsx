import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import { fireEvent } from '@testing-library/react'
import BetaSignup from '@/components/BetaSignup'

// Mock fetch globally
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('BetaSignup Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockFetch.mockClear()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the beta signup form', () => {
    render(<BetaSignup />)

    expect(screen.getByRole('heading', { name: /get early access/i })).toBeInTheDocument()
    expect(screen.getByText(/we'll send you updates/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /join beta/i })).toBeInTheDocument()
  })

  it('updates email input value', async () => {
    const user = userEvent.setup()
    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox')
    await user.type(emailInput, 'test@example.com')

    expect(emailInput).toHaveValue('test@example.com')
  })

  it('shows validation error when submitting empty email', async () => {
    render(<BetaSignup />)

    const form = screen.getByRole('button', { name: /join beta/i }).closest('form')
    expect(form).toBeInTheDocument()
    
    // Submit form directly to bypass HTML5 validation
    fireEvent.submit(form!)

    await waitFor(() => {
      expect(screen.getByText(/please enter an email address/i)).toBeInTheDocument()
    })
  })

  it('shows validation error when submitting whitespace-only email', async () => {
    const user = userEvent.setup()
    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox')
    await user.type(emailInput, '   ')
    
    const form = screen.getByRole('button', { name: /join beta/i }).closest('form')
    fireEvent.submit(form!)

    await waitFor(() => {
      expect(screen.getByText(/please enter an email address/i)).toBeInTheDocument()
    })
  })

  it('disables form fields during submission', async () => {
    const user = userEvent.setup()
    mockFetch.mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({
        ok: true,
        json: async () => ({ success: true, message: 'Success' })
      }), 100))
    )

    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox')
    const submitButton = screen.getByRole('button', { name: /join beta/i })

    await user.type(emailInput, 'test@example.com')
    await user.click(submitButton)

    // Button should show loading state
    expect(screen.getByRole('button', { name: /signing up/i })).toBeInTheDocument()
    expect(emailInput).toBeDisabled()
    expect(submitButton).toBeDisabled()
  })

  it('submits form with valid email and shows success message', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Success' })
    })

    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox')
    const submitButton = screen.getByRole('button', { name: /join beta/i })

    await user.type(emailInput, 'test@example.com')
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/✔ you are in! we'll be in touch soon/i)).toBeInTheDocument()
    })

    expect(mockFetch).toHaveBeenCalledWith('/api/beta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'test@example.com' }),
    })
  })

  it('clears email input on successful submission', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Success' })
    })

    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox')
    const submitButton = screen.getByRole('button', { name: /join beta/i })

    await user.type(emailInput, 'test@example.com')
    await user.click(submitButton)

    await waitFor(() => {
      expect(emailInput).toHaveValue('')
    })
  })

  it('shows "already signed up" message when user is already on beta list', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Already signed up' })
    })

    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox')
    const submitButton = screen.getByRole('button', { name: /join beta/i })

    await user.type(emailInput, 'existing@example.com')
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/✔ you are already on the beta list/i)).toBeInTheDocument()
    })
  })

  it('shows error message for invalid email from API', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Invalid email' })
    })

    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox') as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: /join beta/i })
    
    // Use valid email format to bypass HTML5 validation, but API will return invalid error
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    const form = submitButton.closest('form')
    fireEvent.submit(form!)

    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument()
    })
  })

  it('shows generic error message for API errors', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Server error' })
    })

    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox') as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: /join beta/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    const form = submitButton.closest('form')
    fireEvent.submit(form!)

    await waitFor(() => {
      expect(screen.getByText(/server error/i)).toBeInTheDocument()
    })
  })

  it('shows generic error message when API response has no error field', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({})
    })

    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox') as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: /join beta/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    const form = submitButton.closest('form')
    fireEvent.submit(form!)

    await waitFor(() => {
      expect(screen.getByText(/we could not sign you up right now. please try again in a moment/i)).toBeInTheDocument()
    })
  })

  it('handles network errors gracefully', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox') as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: /join beta/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    const form = submitButton.closest('form')
    fireEvent.submit(form!)

    await waitFor(() => {
      expect(screen.getByText(/we could not sign you up right now. please check your connection and try again/i)).toBeInTheDocument()
    })
  })

  it('handles invalid JSON response gracefully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => {
        throw new Error('Invalid JSON')
      }
    })

    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox') as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: /join beta/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    const form = submitButton.closest('form')
    fireEvent.submit(form!)

    await waitFor(() => {
      expect(screen.getByText(/we could not sign you up right now/i)).toBeInTheDocument()
    })
  })

  it('clears previous error message on new submission', async () => {
    // First submission fails
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Server error' })
    })

    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox') as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: /join beta/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    let form = submitButton.closest('form')
    fireEvent.submit(form!)

    await waitFor(() => {
      expect(screen.getByText(/server error/i)).toBeInTheDocument()
    })

    // Second submission succeeds
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Success' })
    })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.submit(form!)

    await waitFor(() => {
      expect(screen.queryByText(/server error/i)).not.toBeInTheDocument()
      expect(screen.getByText(/✔ you are in! we'll be in touch soon/i)).toBeInTheDocument()
    })
  })

  it('re-enables form fields after failed submission', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Server error' })
    })

    render(<BetaSignup />)

    const emailInput = screen.getByRole('textbox') as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: /join beta/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    const form = submitButton.closest('form')
    fireEvent.submit(form!)

    await waitFor(() => {
      expect(emailInput).not.toBeDisabled()
      expect(submitButton).not.toBeDisabled()
      expect(screen.getByRole('button', { name: /join beta/i })).toBeInTheDocument()
    })
  })
})
