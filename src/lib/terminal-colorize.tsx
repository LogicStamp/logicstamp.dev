import type { ReactNode } from 'react'

/**
 * Inline terminal syntax highlighting — same rules as the "How it works" terminal
 * (green prompt, blue commands, yellow numbers/emojis, cyan paths, etc.).
 */
export function colorizeTerminalText(text: string): ReactNode {
  if (!text) return null

  const lines = text.split('\n')
  return lines.map((line, lineIndex) => {
    const patterns = [
      { regex: /^\$\s+/g, color: 'text-green-400' },
      {
        regex: /\b(stamp|npm|i|install|-g|context|style|compare|validate|init|clean|security|scan|--stats|--compare-modes|--approve|--clean-orphaned|--include-style|--format|--watch|toon|--hard-reset)\b/g,
        color: 'text-blue-400',
      },
      { regex: /\b\d+\b/g, color: 'text-yellow-400' },
      { regex: /(\/[\w/.-]+|https?:\/\/[^\s]+)/g, color: 'text-cyan-400' },
      { regex: /✅/g, color: 'text-green-400' },
      { regex: /✓/g, color: 'text-green-400' },
      { regex: /⚠️/g, color: 'text-orange-400' },
      {
        regex: /[🔍🔨📊📋📦✅📝⏱🔄🎨👀🔒✨📏🎯]/g,
        color: 'text-yellow-400',
      },
      {
        regex: /\b(PASS|FAIL|Completed|found|Analyzed|Scanning|Generating|Validating|Writing|Summary|Comparison|Mode|Tokens|Savings|Estimates|Extracting|Building|detected|Tailwind|Material UI|SCSS|CSS|Animations|Watch|Watching|Incremental|rebuild|TOON|Format|enabled|changed|Updated|Security|secrets|Secret|API Key|Password|Token|Severity|high|medium|low|Report|remediation)\b/gi,
        color: 'text-purple-400',
      },
      { regex: /(~|%|\+|-)\d+/g, color: 'text-orange-400' },
    ]

    const matches: Array<{ start: number; end: number; color: string; text: string }> = []

    patterns.forEach(({ regex, color }) => {
      let match
      regex.lastIndex = 0
      while ((match = regex.exec(line)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          color,
          text: match[0],
        })
      }
    })

    matches.sort((a, b) => a.start - b.start)

    const nonOverlapping: typeof matches = []
    matches.forEach((m) => {
      const overlaps = nonOverlapping.some(
        (existing) => m.start < existing.end && m.end > existing.start
      )
      if (!overlaps) nonOverlapping.push(m)
    })

    const parts: ReactNode[] = []
    let currentIndex = 0
    nonOverlapping.forEach((m) => {
      if (m.start > currentIndex) {
        parts.push(
          <span key={`${lineIndex}-${currentIndex}`} className="text-gray-100">
            {line.substring(currentIndex, m.start)}
          </span>
        )
      }
      parts.push(
        <span key={`${lineIndex}-${m.start}`} className={m.color}>
          {m.text}
        </span>
      )
      currentIndex = m.end
    })

    if (currentIndex < line.length) {
      parts.push(
        <span key={`${lineIndex}-${currentIndex}`} className="text-gray-100">
          {line.substring(currentIndex)}
        </span>
      )
    }

    return (
      <span key={lineIndex}>
        {parts.length > 0 ? parts : <span className="text-gray-100">{line}</span>}
        {lineIndex < lines.length - 1 && '\n'}
      </span>
    )
  })
}
