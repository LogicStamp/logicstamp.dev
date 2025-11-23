import { ReactElement } from 'react'
import {
  render as rtlRender,
  RenderOptions,
  screen,
  waitFor,
  within,
  queryByText,
  getByText,
  queryByRole,
  getByRole,
  queryByLabelText,
  getByLabelText,
  queryByPlaceholderText,
  getByPlaceholderText,
  queryByTestId,
  getByTestId,
} from '@testing-library/react'
import { ThemeProvider } from '@/contexts/ThemeContext'

/**
 * Custom render function that includes providers
 */
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: AllTheProviders, ...options })

// Re-export everything from @testing-library/react
export * from '@testing-library/react'
// Explicitly export commonly used items for better TypeScript support
export {
  screen,
  waitFor,
  within,
  queryByText,
  getByText,
  queryByRole,
  getByRole,
  queryByLabelText,
  getByLabelText,
  queryByPlaceholderText,
  getByPlaceholderText,
  queryByTestId,
  getByTestId,
}
export { customRender as render }

/**
 * Wait for a specified amount of time
 */
export const wait = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))

/**
 * Mock IntersectionObserver to trigger callbacks
 */
export class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  options?: IntersectionObserverInit

  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    this.callback = callback
    this.options = options
  }

  observe() {
    // Immediately trigger the callback as if element is in view
    this.callback(
      [
        {
          isIntersecting: true,
          intersectionRatio: 1,
          boundingClientRect: {} as DOMRectReadOnly,
          intersectionRect: {} as DOMRectReadOnly,
          rootBounds: {} as DOMRectReadOnly,
          target: {} as Element,
          time: Date.now(),
        },
      ],
      this as any
    )
  }

  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

/**
 * Setup IntersectionObserver mock
 */
export const setupIntersectionObserverMock = () => {
  global.IntersectionObserver = MockIntersectionObserver as any
}

