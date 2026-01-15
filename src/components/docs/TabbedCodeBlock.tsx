'use client'

import React, { useState, useRef, useEffect, useId } from 'react'
import CopyButton from '../ui/CopyButton'

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
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const baseId = useId()

  // Initialize refs array
  useEffect(() => {
    tabButtonRefs.current = tabButtonRefs.current.slice(0, tabs.length)
  }, [tabs.length])

  // Scroll active tab into view on mobile - scroll within container only
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.children[activeTab] as HTMLElement
      if (activeButton && scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const buttonRect = activeButton.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        
        // Calculate scroll position to center the button within the container
        const scrollLeft = container.scrollLeft + (buttonRect.left - containerRect.left) - (containerRect.width / 2) + (buttonRect.width / 2)
        
        // Scroll within the container only, not the page
        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth',
        })
      }
    }
  }, [activeTab])

  // Keyboard navigation for tabs
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        newIndex = index > 0 ? index - 1 : tabs.length - 1
        break
      case 'ArrowRight':
        e.preventDefault()
        newIndex = index < tabs.length - 1 ? index + 1 : 0
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = tabs.length - 1
        break
      default:
        return
    }

    setActiveTab(newIndex)
    // Focus the newly selected tab
    tabButtonRefs.current[newIndex]?.focus()
  }

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
    <div className="mb-6 w-full max-w-full min-w-0 tabbed-code-block-wrapper">
      {/* Tab buttons - scrollable on mobile */}
      <div
        ref={scrollContainerRef}
        role="tablist"
        aria-label="Code examples"
        className="flex gap-0 mb-0 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:snap-none min-w-0 w-full max-w-full"
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
            ref={(el) => { tabButtonRefs.current[index] = el }}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`${baseId}-panel-${index}`}
            id={`${baseId}-tab-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => {
              setActiveTab(index)
              tabButtonRefs.current[index]?.focus()
            }}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`px-4 py-2 text-sm font-medium transition-colors flex-shrink-0 snap-center lg:snap-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
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
      <div
        role="tabpanel"
        id={`${baseId}-panel-${activeTab}`}
        aria-labelledby={`${baseId}-tab-${activeTab}`}
        className="relative bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 border-t-0 p-5 rounded-b-lg font-mono text-sm overflow-x-auto max-w-full"
      >
        <CopyButton text={tabs[activeTab].copyText} className="absolute top-2 right-2 lg:right-6" />
        <code className="text-gray-900 dark:text-gray-100 whitespace-pre-wrap break-words max-w-full block overflow-x-auto">
          {tabs[activeTab].code}
        </code>
      </div>
    </div>
  )
}















