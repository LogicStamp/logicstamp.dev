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
      data-testid="wordmark"
      className={className}
      height={height}
      viewBox="-5 0 305 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMinYMid meet"
    >
      {/* Light theme */}
      <text
        className="block dark:hidden"
        x="-2"
        y="28"
        fill="#111827"
        fontFamily="'Geist Sans','Geist',-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto',sans-serif"
        fontSize="36"
        fontWeight="800"
        letterSpacing="0.5"
        textRendering="optimizeLegibility"
        dominantBaseline="alphabetic"
      >
        LogicStamp
      </text>

      {/* Dark theme */}
      <text
        className="hidden dark:block"
        x="-2"
        y="28"
        fill="#ffffff"
        fontFamily="'Geist Sans','Geist',-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto',sans-serif"
        fontSize="36"
        fontWeight="800"
        letterSpacing="0.5"
        textRendering="optimizeLegibility"
        dominantBaseline="alphabetic"
      >
        LogicStamp
      </text>
    </svg>
  )
}














