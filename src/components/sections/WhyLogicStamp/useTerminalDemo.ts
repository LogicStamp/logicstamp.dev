'use client'

import { useState, useEffect } from 'react'

export function useTerminalDemo(solutionInView: boolean) {
  const [terminalText, setTerminalText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [commandExecuted, setCommandExecuted] = useState(false)
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    if (!solutionInView || commandExecuted) return

    const command = '$ stamp context'
    let index = 0
    const typeInterval = setInterval(() => {
      if (index <= command.length) {
        setTerminalText(command.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
        setCommandExecuted(true)
        setTimeout(() => setShowOutput(true), 300)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [solutionInView, commandExecuted])

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((p) => !p), 500)
    return () => clearInterval(interval)
  }, [])

  return { terminalText, showCursor, commandExecuted, showOutput }
}
