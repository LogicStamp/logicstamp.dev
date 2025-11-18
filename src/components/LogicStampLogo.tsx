'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface LogicStampLogoProps {
  className?: string
  size?: number
}

export default function LogicStampLogo({
  className = '',
  size = 40,
}: LogicStampLogoProps) {
  const [isSpinning, setIsSpinning] = useState(false)
  const shouldStopRef = useRef(false)
  const isHoveringRef = useRef(false)
  const cubeRef = useRef<SVGGElement>(null)

  const handleMouseEnter = () => {
    isHoveringRef.current = true
    shouldStopRef.current = false
    setIsSpinning(true)
  }

  const handleMouseLeave = () => {
    isHoveringRef.current = false
    // Set shouldStop to true - the animation iteration handler will check
    // if we're hovering again before actually stopping
    shouldStopRef.current = true
  }

  const handleAnimationIteration = useCallback(() => {
    // If we should stop and we're not currently hovering, stop the animation
    if (shouldStopRef.current && !isHoveringRef.current) {
      setIsSpinning(false)
      shouldStopRef.current = false
    } else if (isHoveringRef.current) {
      // If we're hovering again, clear the stop flag to keep spinning
      shouldStopRef.current = false
    }
  }, [])

  useEffect(() => {
    const cube = cubeRef.current
    if (!cube) return

    cube.addEventListener('animationiteration', handleAnimationIteration)
    return () => {
      cube.removeEventListener('animationiteration', handleAnimationIteration)
    }
  }, [handleAnimationIteration])

  return (
    <div
      className={`logicstamp-logo inline-block ${className} ${isSpinning ? 'logo-spinning' : ''}`}
      style={{ width: size, height: size }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className="ls-svg"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* Subtle glow halo around cube */}
          <radialGradient id="ls_halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9A56FF" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#9A56FF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#9A56FF" stopOpacity="0" />
          </radialGradient>

          {/* Enhanced cube face gradients */}
          <linearGradient id="ls_faceTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="ls_faceLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>

          <linearGradient id="ls_faceRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>

          {/* Glow filter for center node */}
          <filter id="ls_glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Subtle glow halo around the cube */}
        <circle 
          cx="32" 
          cy="32" 
          r="28" 
          fill="url(#ls_halo)" 
          className="cube-halo"
        />

        {/* CUBE (spinning group) - main logo element */}
        <g ref={cubeRef} className="ls-cube">
          {/* Top face with enhanced edges */}
          <polygon
            points="32,8 14,18 32,28 50,18"
            fill="url(#ls_faceTop)"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
          />

          {/* Left face */}
          <polygon
            points="14,18 14,40 32,48 32,28"
            fill="url(#ls_faceLeft)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />

          {/* Right face */}
          <polygon
            points="50,18 50,40 32,48 32,28"
            fill="url(#ls_faceRight)"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />

          {/* Enhanced grid on cube faces */}
          <g className="node-connections" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8">
            {/* Vertical grid lines */}
            <line x1="21" y1="20" x2="21" y2="42" />
            <line x1="32" y1="22" x2="32" y2="44" />
            <line x1="43" y1="20" x2="43" y2="42" />

            {/* Horizontal grid lines */}
            <line x1="14" y1="22" x2="50" y2="22" />
            <line x1="14" y1="26" x2="50" y2="26" />
            <line x1="14" y1="30" x2="50" y2="30" />
            <line x1="14" y1="34" x2="50" y2="34" />
            <line x1="14" y1="38" x2="50" y2="38" />
          </g>

          {/* Enhanced core node with glow */}
          <circle
            className="center-node"
            cx="32"
            cy="32"
            r="3.5"
            fill="white"
            fillOpacity={0.98}
            filter="url(#ls_glow)"
          />
        </g>
      </svg>
    </div>
  )
}
