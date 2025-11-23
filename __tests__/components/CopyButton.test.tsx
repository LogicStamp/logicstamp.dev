import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import CopyButton from '@/components/ui/CopyButton'

describe('CopyButton', () => {
  it('renders the copy button', () => {
    render(<CopyButton text="test text" />)

    const button = screen.getByRole('button', { name: /copy to clipboard/i })
    expect(button).toBeInTheDocument()
  })

  it('shows success state after copying', async () => {
    const user = userEvent.setup()
    render(<CopyButton text="test text" />)

    const button = screen.getByRole('button')
    await user.click(button)

    await waitFor(() => {
      expect(button).toHaveAttribute('aria-label', 'Copied to clipboard')
      expect(button).toHaveClass('bg-green-500')
    })
  })

  it('applies custom className', () => {
    render(<CopyButton text="test" className="custom-class" />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('has correct aria-label and accessibility attributes', () => {
    render(<CopyButton text="test text" />)

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Copy to clipboard')
    expect(button).toHaveAttribute('aria-live', 'polite')
    expect(button).toHaveAttribute('title', 'Copy to clipboard')
  })
})

