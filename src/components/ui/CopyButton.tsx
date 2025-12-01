'use client'

import { useState } from 'react'

interface CopyButtonProps {
  text: string
  className?: string
}

export default function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)

  const handleCopy = async () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      setError(true)
      setTimeout(() => setError(false), 2000)
      return
    }

    try {
      setError(false)
      
      // Prefer modern async clipboard API when available & in a secure context
      if (typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
      } else {
        // Fallback for mobile / non-secure contexts (e.g. http, some mobile browsers)
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-9999px'
        textArea.style.top = '0'
        textArea.setAttribute('readonly', 'true')
        document.body.appendChild(textArea)
        textArea.select()
        
        // Check if execCommand is available
        const successful = document.execCommand('copy')
        document.body.removeChild(textArea)
        
        if (!successful) {
          throw new Error('execCommand copy failed')
        }
      }

      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  const getButtonState = () => {
    if (error) return 'error'
    if (copied) return 'copied'
    return 'default'
  }

  const buttonState = getButtonState()

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`p-2 rounded-md transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
        buttonState === 'copied'
          ? 'bg-green-500 dark:bg-green-600 text-white'
          : buttonState === 'error'
          ? 'bg-red-500 dark:bg-red-600 text-white'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
      } ${className}`}
      title={
        buttonState === 'copied'
          ? 'Copied!'
          : buttonState === 'error'
          ? 'Failed to copy'
          : 'Copy to clipboard'
      }
      aria-label={
        buttonState === 'copied'
          ? 'Copied to clipboard'
          : buttonState === 'error'
          ? 'Failed to copy to clipboard'
          : 'Copy to clipboard'
      }
      aria-live="polite"
    >
      {buttonState === 'copied' ? (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : buttonState === 'error' ? (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      )}
    </button>
  )
}















