'use client'

import { useState, FormEvent } from 'react'

export default function BetaSignup() {
  // Beta signup form state
  const [betaEmail, setBetaEmail] = useState('')
  const [isSubmittingBeta, setIsSubmittingBeta] = useState(false)
  const [betaSuccessMessage, setBetaSuccessMessage] = useState<string | null>(null)
  const [betaErrorMessage, setBetaErrorMessage] = useState<string | null>(null)

  const handleBetaSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!betaEmail.trim()) {
      setBetaErrorMessage('Please enter an email address.')
      setBetaSuccessMessage(null)
      return
    }

    setIsSubmittingBeta(true)
    setBetaErrorMessage(null)
    setBetaSuccessMessage(null)

    try {
      const response = await fetch('/api/beta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: betaEmail }),
      })

      const data: { success?: boolean; message?: string; error?: string } = await response.json().catch(
        () => ({})
      )

      if (response.ok && data.success) {
        const baseMessage = data.message === 'Already signed up'
          ? 'You are already on the beta list.'
          : 'You are in! We\'ll be in touch soon.'

        setBetaSuccessMessage(`✔ ${baseMessage}`)
        setBetaErrorMessage(null)
        setBetaEmail('')
      } else {
        const userFriendlyError =
          data.error === 'Invalid email'
            ? 'Please enter a valid email address.'
            : data.error || 'We could not sign you up right now. Please try again in a moment.'

        setBetaErrorMessage(userFriendlyError)
        setBetaSuccessMessage(null)
      }
    } catch (error) {
      setBetaErrorMessage('We could not sign you up right now. Please check your connection and try again.')
      setBetaSuccessMessage(null)
    } finally {
      setIsSubmittingBeta(false)
    }
  }

  return (
    <div className="text-center">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Get Early Access
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
          We'll send you updates as we add features and improve LogicStamp
        </p>
      </div>

      <form className="max-w-2xl mx-auto" onSubmit={handleBetaSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            value={betaEmail}
            onChange={(e) => setBetaEmail(e.target.value)}
            className="flex-1 px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus-visible:outline-none focus:border-gray-300 dark:focus:border-gray-700 text-lg"
            required
            disabled={isSubmittingBeta}
          />
          <button
            type="submit"
            disabled={isSubmittingBeta}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold shadow-xl disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap text-lg"
          >
            {isSubmittingBeta ? 'Signing up...' : 'Join Beta'}
          </button>
        </div>
        {betaSuccessMessage && (
          <p className="text-base text-green-600 dark:text-green-400 mt-4 text-center font-medium">
            {betaSuccessMessage}
          </p>
        )}
        {betaErrorMessage && (
          <p className="text-base text-red-600 dark:text-red-400 mt-4 text-center font-medium">
            {betaErrorMessage}
          </p>
        )}
      </form>
    </div>
  )
}















