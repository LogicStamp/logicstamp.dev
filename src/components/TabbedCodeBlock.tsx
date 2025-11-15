'use client'

import { useState, useRef, useEffect } from 'react'
import CopyButton from './CopyButton'

interface Tab {
  label: string
  code: string
  copyText: string
}

interface TabbedCodeBlockProps {
  tabs: Tab[]
}

export default function TabbedCodeBlock({ tabs }: TabbedCodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.children[activeTab] as HTMLElement
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
      }
    }
  }, [activeTab])

  // Touch handlers for swipe navigation
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1)
    }
    if (isRightSwipe && activeTab > 0) {
      setActiveTab(activeTab - 1)
    }
  }

  return (
    <div className="mb-6">
      {/* Tab buttons - scrollable on mobile */}
      <div
        ref={scrollContainerRef}
        className="flex gap-0 mb-0 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:overflow-visible"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium transition-colors flex-shrink-0 snap-center lg:snap-none ${
              activeTab === index
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-t border-l border-r border-gray-200 dark:border-gray-700 rounded-t-lg'
                : 'bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 border-b border-gray-200 dark:border-gray-700 rounded-t-lg'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Code block */}
      <div className="relative bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 border-t-0 p-5 rounded-b-lg font-mono text-sm overflow-x-auto">
        <CopyButton text={tabs[activeTab].copyText} />
        <code className="text-gray-900 dark:text-gray-100 whitespace-pre-wrap break-words">
          {tabs[activeTab].code}
        </code>
      </div>
    </div>
  )
}

