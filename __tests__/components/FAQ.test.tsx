import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '../utils/test-utils'
import { setupIntersectionObserverMock } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import FAQ from '@/components/sections/FAQ'

// Mock child components
vi.mock('@/components/ui/GetStartedButton', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} data-testid="get-started-button">
      {children}
    </a>
  ),
}))

vi.mock('@/components/ui/ReadTheDocsButton', () => ({
  default: ({ href }: { href: string }) => (
    <a href={href} data-testid="read-docs-button">Read the Docs</a>
  ),
}))

describe('FAQ Component', () => {
  beforeEach(() => {
    setupIntersectionObserverMock()
    vi.clearAllMocks()
  })

  it('renders the FAQ section', () => {
    render(<FAQ />)

    expect(screen.getByRole('heading', { name: /faqs/i })).toBeInTheDocument()
    expect(screen.getByText(/quick answers to common/i)).toBeInTheDocument()
  })

  it('renders all FAQ items', () => {
    render(<FAQ />)

    const questions = [
      'How does LogicStamp Context work?',
      'Why not just paste code into AI chats?',
      'Is LogicStamp free to use?',
      'What frameworks are supported?',
      'How do I get started?',
      'How do I set up MCP integration?',
      'How does token optimization work?',
      'Why bundles instead of individual component files?',
      'What does `stamp context style` do?',
      'Is watch mode available?',
    ]

    questions.forEach(question => {
      expect(screen.getByText(question)).toBeInTheDocument()
    })
  })

  it('expands FAQ item when clicked', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const firstQuestion = screen.getByText('How does LogicStamp Context work?')
    const button = firstQuestion.closest('button')

    expect(button).toHaveAttribute('aria-expanded', 'false')

    await user.click(button!)

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('collapses FAQ item when clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const firstQuestion = screen.getByText('How does LogicStamp Context work?')
    const button = firstQuestion.closest('button')!

    // Open
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    // Close
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('only one FAQ item is open at a time', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const firstQuestion = screen.getByText('How does LogicStamp Context work?')
    const secondQuestion = screen.getByText('Why not just paste code into AI chats?')

    const firstButton = firstQuestion.closest('button')!
    const secondButton = secondQuestion.closest('button')!

    // Open first
    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    expect(secondButton).toHaveAttribute('aria-expanded', 'false')

    // Open second (should close first)
    await user.click(secondButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
    expect(secondButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('displays FAQ answer when expanded', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const question = screen.getByText('How does LogicStamp Context work?')
    const button = question.closest('button')!

    await user.click(button)

    // Check that answer is visible
    const answer = screen.getByText(/LogicStamp Context scans your React/i)
    expect(answer).toBeInTheDocument()
  })

  it('has proper ARIA attributes for accessibility', () => {
    render(<FAQ />)

    const buttons = screen.getAllByRole('button')
    buttons.forEach((button: HTMLElement) => {
      if (button.textContent?.includes('?')) {
        // FAQ question buttons
        expect(button).toHaveAttribute('aria-expanded')
        expect(button).toHaveAttribute('aria-controls')
        expect(button).toHaveAttribute('id')
      }
    })
  })

  it('renders documentation links', () => {
    render(<FAQ />)

    expect(screen.getByTestId('get-started-button')).toHaveAttribute(
      'href',
      'docs/getting-started'
    )
    expect(screen.getByTestId('read-docs-button')).toHaveAttribute('href', 'docs/')
  })

  it('supports keyboard navigation with arrow keys', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const buttons = screen.getAllByRole('button').filter((btn: HTMLElement) =>
      btn.textContent?.includes('?')
    )

    if (buttons.length > 1) {
      const firstButton = buttons[0]
      const secondButton = buttons[1]

      firstButton.focus()
      expect(document.activeElement).toBe(firstButton)

      await user.keyboard('{ArrowDown}')
      expect(document.activeElement).toBe(secondButton)
    }
  })
})

