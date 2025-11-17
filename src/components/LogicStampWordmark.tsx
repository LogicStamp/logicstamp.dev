'use client'

interface LogicStampWordmarkProps {
  className?: string
  height?: number
}

export default function LogicStampWordmark({
  className = '',
  height = 20,
}: LogicStampWordmarkProps) {
  return (
    <svg
      className={className}
      height={height}
      viewBox="-5 0 305 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LogicStamp"
      role="img"
    >
      {/* Light theme text - very dark gray */}
      <text
        className="block dark:hidden"
        x="-2"
        y="28"
        fill="#111213"
        stroke="#111213"
        strokeWidth="1.5"
        fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
        fontSize="32"
        fontWeight="600"
        letterSpacing="0.06em"
      >
        LOGICSTAMP
      </text>

      {/* Dark theme text - very light gray */}
      <text
        className="hidden dark:block"
        x="-2"
        y="28"
        fill="#F4F4F5"
        stroke="#F4F4F5"
        strokeWidth="1.5"
        fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
        fontSize="32"
        fontWeight="600"
        letterSpacing="0.06em"
      >
        LOGICSTAMP
      </text>
    </svg>
  )
}
