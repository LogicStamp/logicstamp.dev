'use client'

import { useEffect, useRef, useState } from 'react'
import AnimatedSection from '../common/AnimatedSection'
import GetStartedButton from '../ui/GetStartedButton'
import ReadTheDocsButton from '../ui/ReadTheDocsButton'
import { ctaInvertedPrimaryClasses } from '../ui/ctaInvertedPrimaryClasses'

// Framework logos as SVG components
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" className="animate-spin-slow" style={{ transformOrigin: 'center' }} />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" className="animate-spin-slow" style={{ transformOrigin: 'center', transform: 'rotate(60deg)' }} />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" className="animate-spin-slow" style={{ transformOrigin: 'center', transform: 'rotate(-60deg)' }} />
  </svg>
)

const NextIcon = () => (
  <svg viewBox="0 0 180 180" className="w-10 h-10 nextjs-icon">
    <defs>
      <linearGradient id="nextjs-gradient-b" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="nextjs-gradient-b-dark" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#000" />
        <stop offset="1" stopColor="#000" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="nextjs-gradient-c" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="nextjs-gradient-c-dark" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="#000" />
        <stop offset="1" stopColor="#000" stopOpacity="0" />
      </linearGradient>
      <style>{`
        .nextjs-icon path:nth-of-type(1) {
          fill: url(#nextjs-gradient-b);
        }
        .nextjs-icon path:nth-of-type(2) {
          fill: url(#nextjs-gradient-c);
        }
        .dark .nextjs-icon path:nth-of-type(1) {
          fill: url(#nextjs-gradient-b-dark);
        }
        .dark .nextjs-icon path:nth-of-type(2) {
          fill: url(#nextjs-gradient-c-dark);
        }
      `}</style>
    </defs>
    <circle cx="90" cy="90" r="90" fill="currentColor" className="text-black dark:text-white" />
    <path d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90 90 0 0 0 9.509-7.325" />
    <path d="M115 54h12v72h-12z" />
  </svg>
)

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 4.643 4.643 0 0 1-1.512-.493v-2.63a5.28 5.28 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.63 5.684 5.684 0 0 1 1.77-.272zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="#fff" />
  </svg>
)

const VueIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" fill="#4FC08D" />
    <path d="M0,1.61H4.43L12,14.08,19.57,1.61H24L12,22.39Z" fill="#35495E" />
  </svg>
)

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <text x="12" y="16" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#000">JS</text>
  </svg>
)

const WatchModeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-600 dark:text-purple-400" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-purple-600 dark:text-purple-400" />
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-purple-600 dark:text-purple-400" />
    <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-600/30 dark:text-purple-400/30" />
  </svg>
)

const MCPIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    {/* MCP - Model Context Protocol icon representing connectivity */}
    <circle cx="6" cy="6" r="2" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
    <circle cx="18" cy="6" r="2" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
    <circle cx="6" cy="18" r="2" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
    <circle cx="18" cy="18" r="2" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" className="text-purple-600 dark:text-purple-400" />
    <path d="M6 6L12 12M18 6L12 12M6 18L12 12M18 18L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gray-400 dark:text-gray-500" />
  </svg>
)

const CLIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <rect width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-gray-200" />
    <path d="M7 9l2 2-2 2m3 0h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="text-emerald-500" />
    <circle cx="7" cy="6" r="0.5" fill="currentColor" className="text-red-500" />
    <circle cx="10" cy="6" r="0.5" fill="currentColor" className="text-yellow-500" />
    <circle cx="13" cy="6" r="0.5" fill="currentColor" className="text-green-500" />
  </svg>
)

const ExpressIcon = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10">
    <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" fill="currentColor" className="text-gray-900 dark:text-white" />
  </svg>
)

const NestJSIcon = () => (
  <svg viewBox="0 0 16.933 16.933" className="w-10 h-10">
    <path d="M9.97.033c-.122 0-.236.026-.34.06.223.15.345.345.407.568.004.03.013.052.017.083s.01.052.01.08c.018.385-.1.433-.184.66-.127.293-.092.608.06.86a.52.52 0 0 0 .052.096c-.166-1.106.757-1.273.927-1.618.013-.302-.236-.503-.433-.643-.188-.114-.36-.15-.516-.15zm1.39.25c-.018.1-.004.074-.01.127l-.01.114-.03.105c-.01.035-.022.07-.035.105l-.048.1c-.013.018-.022.035-.035.052l-.026.04-.066.087c-.026.026-.048.057-.08.08s-.052.052-.083.074c-.092.07-.197.122-.293.188-.03.022-.06.04-.087.066a.64.64 0 0 0-.083.07c-.03.026-.052.052-.08.083s-.048.057-.066.087l-.06.092-.048.1-.035.1-.03.11c-.004.018-.004.04-.01.057s-.004.035-.01.052l-.004.11c0 .026 0 .052.004.08 0 .035.004.07.013.11s.013.07.022.105l.035.105c.01.022.022.044.03.06l-1.006-.39-.507-.13-.276-.066a8.12 8.12 0 0 0-.796-.118c-.01 0-.013-.004-.022-.004l-.783-.04-.573.022c-.267.018-.534.052-.8.096l-.197.035-.394.087-.197.052-.188.083-.144.066c-.01.004-.018.004-.022.01l-.122.06c-.013.004-.022.01-.03.013l-.136.07c-.03.013-.06.03-.087.044-.013.01-.03.017-.04.022l-.114.066a1.1 1.1 0 0 0-.105.066l-.087.06-.096.07-.074.06c-.01.004-.018.013-.026.018l-.066.057c-.004.01-.013.013-.018.018l-.08.074-.087.083-.074.08c-.01.01-.022.018-.03.026a1.23 1.23 0 0 1-.074.079c-.004.01-.013.013-.018.022l-.1.105-.236.227c-.08.07-.162.136-.245.192l-.262.166c-.087.048-.18.092-.276.13a3.15 3.15 0 0 1-.284.105c-.184.04-.372.114-.534.127-.035 0-.074.01-.11.013l-.11.026-.105.04a1.12 1.12 0 0 0-.105.048c-.03.022-.066.04-.096.06s-.06.048-.087.074-.06.052-.087.08l-.074.087c-.022.035-.048.066-.066.1a.77.77 0 0 0-.061.101l-.048.114-.04.114-.022.105c-.013.052-.013.105-.018.13S0 5.635 0 5.666a.25.25 0 0 0 .004.057c.004.03.01.057.018.083l.03.08c.013.03.03.057.048.083l.057.08.074.07a.64.64 0 0 0 .083.07c.105.092.13.122.267.192.022.013.044.022.07.035.013.013.013.017.018.026.004.035.013.07.022.105a.59.59 0 0 0 .035.105l.035.08c.004.01.01.018.013.022l.052.096.066.092.074.083c.026.026.052.048.083.074l.087.066c.03.022.06.04.096.057a.71.71 0 0 0 .101.048c.026.013.057.022.087.03s.057.018.074.022c-.013.236-.018.46.018.538.04.087.232-.18.424-.485-.026.302-.044.656 0 .76s.31-.232.538-.608c3.1-.717 5.93 1.426 6.227 4.452-.057-.472-.638-.735-.905-.67-.13.324-.354.74-.713.997.03-.29.017-.586-.044-.875a2.83 2.83 0 0 1-.542 1.102c-.415.03-.83-.17-1.05-.472-.018-.013-.022-.04-.035-.057l-.035-.092c-.013-.03-.022-.06-.026-.092s-.004-.06-.004-.096v-.066c.004-.03.013-.06.022-.092l.03-.092c.018-.03.03-.06.052-.092.074-.2.074-.38-.06-.48-.026-.018-.052-.03-.083-.044-.018-.004-.04-.013-.057-.018l-.035-.013-.092-.022a.33.33 0 0 0-.092-.013.71.71 0 0 0-.096-.009c-.022 0-.044.004-.066.004a.34.34 0 0 0-.096.013l-.092.017-.092.03-.087.04-.083.044c-1.02.665-.41 2.22.284 2.672-.262.048-.53.105-.603.162.18.122.376.22.582.302l.708.2c.363.08.73.105 1.102.083a4.16 4.16 0 0 0 3.813-3.551l.026.114.04.245.018.118.01.13.01.144v.07c0 .022.004.048.004.07s-.004.052-.004.08v.06c0 .03-.004.057-.004.087 0 .017 0 .035-.004.057l-.004.096c-.004.013-.004.026-.004.04l-.013.1c0 .013 0 .026-.004.04l-.017.127v.01l-.026.122-.026.13-.035.136-.035.136-.044.14-.096.254-.052.127-.06.122c-.004.013-.01.022-.013.03-.293.586-.713 1.09-1.238 1.482-.035.022-.07.048-.105.074-.01.01-.022.013-.03.022l-.096.066.013.026h.004l.184-.026h.004l.34-.06c.03-.004.066-.013.096-.022l.06-.013.092-.017.08-.022c.437-.105.86-.25 1.268-.42-.695.95-1.627 1.714-2.716 2.217.503-.035 1.006-.118 1.49-.258 1.762-.52 3.245-1.705 4.133-3.302a6.98 6.98 0 0 1-1.176 2.812c.424-.28.813-.603 1.168-.97a6.93 6.93 0 0 0 1.841-3.717c.15.69.192 1.404.127 2.108 3.157-4.404.262-8.97-.95-10.172-.004-.01-.01-.013-.01-.022-.01.052-.013.105-.017.157-.013.1-.026.197-.044.293s-.048.192-.074.29-.066.188-.105.28-.083.18-.13.267a2.98 2.98 0 0 1-.157.249c-.057.083-.118.162-.18.236a3.27 3.27 0 0 1-.206.219c-.044.04-.083.074-.127.11l-.1.087a2.44 2.44 0 0 1-.245.171 3.03 3.03 0 0 1-.258.149c-.092.044-.184.083-.276.122a3.08 3.08 0 0 1-.284.092c-.096.026-.197.048-.293.066s-.2.026-.297.035c-.07.004-.14.01-.2.01-.1 0-.2-.01-.297-.018s-.2-.022-.298-.044a2.21 2.21 0 0 1-.293-.074h-.004c.096-.01.192-.018.29-.035s.197-.04.293-.066.192-.057.284-.092.188-.08.276-.122a3.06 3.06 0 0 0 .262-.144c.083-.057.166-.114.245-.175a2.39 2.39 0 0 0 .223-.197c.074-.066.14-.14.206-.214s.127-.157.184-.236c.01-.013.018-.03.026-.044l.127-.2c.048-.087.092-.175.13-.267s.074-.184.105-.28.052-.188.074-.284.035-.197.044-.293.017-.2.017-.297c0-.07-.004-.14-.01-.2-.01-.1-.022-.197-.035-.293a3.2 3.2 0 0 0-.066-.293c-.03-.092-.06-.188-.096-.28s-.08-.184-.122-.27-.096-.175-.15-.258-.114-.162-.175-.24l-.2-.223a2.73 2.73 0 0 0-.114-.109 8.05 8.05 0 0 0-.608-.429c-.03-.017-.057-.03-.087-.044-.144-.092-.28-.14-.415-.184z" fill="#ea2845" fillRule="evenodd" />
  </svg>
)

const BackendFrameworksIcon = () => (
  <div className="flex items-center gap-3">
    <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-700/10 to-gray-900/10 dark:from-gray-500/10 dark:to-gray-700/10 w-16 h-16">
      <ExpressIcon />
    </div>
    <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500/10 to-red-700/10 w-16 h-16">
      <NestJSIcon />
    </div>
  </div>
)

const UIFrameworksIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <rect x="2" y="2" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-600 dark:text-purple-400" />
    <rect x="14" y="2" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-600 dark:text-blue-400" />
    <rect x="2" y="14" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-600 dark:text-green-400" />
    <rect x="14" y="14" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-600 dark:text-orange-400" />
    <circle cx="6" cy="6" r="1.5" fill="currentColor" className="text-purple-600 dark:text-purple-400" />
    <circle cx="18" cy="6" r="1.5" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
    <circle cx="6" cy="18" r="1.5" fill="currentColor" className="text-green-600 dark:text-green-400" />
    <circle cx="18" cy="18" r="1.5" fill="currentColor" className="text-orange-600 dark:text-orange-400" />
  </svg>
)

const integrations = [
  // Row 1: Core frameworks
  {
    name: 'React',
    description: 'Compile React components into contracts with hooks, props, and JSX structure',
    icon: ReactIcon,
    gradient: 'from-cyan-500/20 via-blue-500/20 to-blue-600/20',
    borderGradient: 'from-cyan-400 via-blue-500 to-blue-600',
    iconBg: 'from-cyan-500/10 to-blue-600/10',
    features: ['Props signature extraction', 'Hook dependency analysis', 'Component structure contracts'],
  },
  {
    name: 'Next.js',
    description: 'Full support for Next.js with App Router and Server Components',
    icon: NextIcon,
    gradient: 'from-gray-600/20 via-gray-700/20 to-gray-800/20 dark:from-gray-400/20 dark:via-gray-300/20 dark:to-gray-200/20',
    borderGradient: 'from-gray-600 via-gray-700 to-gray-800 dark:from-gray-400 dark:via-gray-300 dark:to-gray-200',
    iconBg: 'from-gray-600/10 to-gray-800/10 dark:from-gray-400/10 dark:to-gray-200/10',
    features: ['App Router context bundles', 'Server/Client component detection', 'Route dependency graphs'],
  },
  {
    name: 'TypeScript',
    description: 'Deep TypeScript compilation for types, interfaces, and generics',
    icon: TypeScriptIcon,
    gradient: 'from-blue-500/20 via-blue-600/20 to-blue-700/20',
    borderGradient: 'from-blue-500 via-blue-600 to-blue-700',
    iconBg: 'from-blue-500/10 to-blue-700/10',
    features: ['Type signature extraction', 'Interface documentation', 'Generic parameter tracking'],
  },
  // Row 2: Watch Mode, Backend Frameworks, UI Frameworks
  {
    name: 'Watch Mode',
    description: 'Auto-regenerate context on file changes with incremental rebuilds and change detection',
    icon: WatchModeIcon,
    gradient: 'from-purple-500/20 via-indigo-500/20 to-violet-600/20',
    borderGradient: 'from-purple-500 via-indigo-500 to-violet-600',
    iconBg: 'from-purple-500/10 to-violet-600/10',
    features: ['Incremental rebuilds', 'Change detection (props, hooks, state)', 'Debounced regeneration'],
    isNew: true,
  },
  {
    name: 'Express.js & NestJS',
    description: 'Compile backend routes, API handlers, controllers, and extract API signatures from Node.js code',
    icon: BackendFrameworksIcon,
    gradient: 'from-gray-700/20 via-gray-800/20 to-gray-900/20 dark:from-gray-500/20 dark:via-gray-600/20 dark:to-gray-700/20',
    borderGradient: 'from-gray-700 via-gray-800 to-gray-900 dark:from-gray-500 dark:via-gray-600 dark:to-gray-700',
    iconBg: 'from-gray-700/10 to-gray-900/10 dark:from-gray-500/10 dark:to-gray-700/10',
    features: ['Route & controller extraction', 'API signature detection', 'Decorator & middleware analysis'],
    isNew: true,
  },
  // Row 3: UI Frameworks
  {
    name: 'UI Frameworks',
    description: 'Support for Tailwind CSS, Material UI, ShadCN/UI, Radix UI, Styled Components, and Framer Motion',
    icon: UIFrameworksIcon,
    gradient: 'from-purple-500/20 via-indigo-500/20 to-pink-600/20',
    borderGradient: 'from-purple-500 via-indigo-500 to-pink-600',
    iconBg: 'from-purple-500/10 to-pink-600/10',
    features: ['Style metadata extraction', 'Component library detection', 'Design system analysis'],
  },
  // Upcoming
  {
    name: 'JavaScript & JSX',
    description: 'Support for JavaScript and JSX files in addition to TypeScript',
    icon: JavaScriptIcon,
    gradient: 'from-yellow-500/20 via-amber-500/20 to-orange-600/20',
    borderGradient: 'from-yellow-500 via-amber-500 to-orange-600',
    iconBg: 'from-yellow-500/10 to-orange-600/10',
    features: ['JavaScript file analysis', 'JSX component detection', 'JSDoc type inference'],
    comingSoon: true,
  },
  {
    name: 'Vue Single File Components',
    description: 'Vue 3 Composition API support for TypeScript/TSX files available now. Single File Component (.vue) support coming soon',
    icon: VueIcon,
    gradient: 'from-blue-500/20 via-purple-500/20 to-indigo-600/20',
    borderGradient: 'from-blue-500 via-purple-500 to-indigo-600',
    iconBg: 'from-blue-500/10 to-indigo-600/10',
    features: ['Composition API tracking (TS/TSX)', 'Props and emits extraction', '.vue SFC support planned'],
    comingSoon: true,
  },
  {
    name: 'MCP Enhancements',
    description: 'Advanced MCP server features for better AI assistant integration and workflow automation',
    icon: MCPIcon,
    gradient: 'from-indigo-500/20 via-violet-500/20 to-purple-600/20',
    borderGradient: 'from-indigo-500 via-violet-500 to-purple-600',
    iconBg: 'from-indigo-500/10 to-purple-600/10',
    features: ['Semantic component search', 'Git baseline comparisons', 'Streaming for large bundles'],
    comingSoon: true,
  },
]

// Tool icons
const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a1.266 1.266 0 0 0-1.52.017L.327 7.261A1.247 1.247 0 0 0 .326 8.74L3.899 12 .326 15.26a1.247 1.247 0 0 0 .001 1.479L1.4 17.94a1.266 1.266 0 0 0 1.52.017l4.12-3.128 9.46 8.63a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.94a1.5 1.5 0 0 0-.85-1.353z" fill="#007ACC" />
  </svg>
)

const CursorIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M10.07 2.82L3.14 19.02c-.45 1.05.35 1.85 1.33 1.33l16.2-6.93c1.05-.45 1.05-1.17 0-1.62l-16.2-6.93c-.98-.52-1.78.28-1.33 1.33l6.93 6.93 6.93-6.93z" fill="currentColor" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor" />
  </svg>
)

const GitLabIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M23.6 9.5l-1.1-3.4c-.1-.3-.4-.5-.7-.5h-.1c-.3 0-.6.2-.7.5l-1.1 3.4H4.1L3 5.6c-.1-.3-.4-.5-.7-.5h-.1c-.3 0-.6.2-.7.5L.4 9.5c-.1.3 0 .6.2.8l11.2 7.9c.2.1.4.1.6 0l11.2-7.9c.2-.2.3-.5.2-.8z" fill="#FC6D26" />
  </svg>
)

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
  </svg>
)

const NetlifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013 2.58a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-8.428v-.009zm-15.004-.736L4.787 9.563a1.044 1.044 0 0 1-.829.725L2.256 14.54l5.09 1.078a1.044 1.044 0 0 1 .635-.588l.199-.953z" fill="#00C7B7" />
  </svg>
)

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .103.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .103.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .103.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" fill="#2496ED" />
  </svg>
)

const PnpmIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.5V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.5v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.5v-7.5zm8.25 0V24H24v-7.5z" fill="#F69220" />
  </svg>
)

const tools = [
  { name: 'VS Code', icon: VSCodeIcon, color: 'text-blue-600 dark:text-blue-400' },
  { name: 'Cursor', icon: CursorIcon, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'GitHub Actions', icon: GitHubIcon, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'GitLab CI', icon: GitLabIcon, color: 'text-orange-600 dark:text-orange-400' },
  { name: 'Vercel', icon: VercelIcon, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'Netlify', icon: NetlifyIcon, color: 'text-teal-600 dark:text-teal-400' },
  { name: 'Docker', icon: DockerIcon, color: 'text-blue-600 dark:text-blue-400' },
  { name: 'pnpm', icon: PnpmIcon, color: 'text-orange-600 dark:text-orange-400' },
]

// Custom hook for intersection observer
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export default function Integrations() {
  const { ref: titleRef, inView: titleInView } = useInView(0.1)
  const { ref: mcpRef, inView: mcpInView } = useInView(0.1)
  const { ref: frameworksRef, inView: frameworksInView } = useInView(0.1)
  const { ref: toolsRef, inView: toolsInView } = useInView(0.1)

  return (
    <section id="integrations" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-gray-900/50">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={titleRef}
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Works with your favorite tools
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 dark:text-gray-300">
            Seamlessly integrate with your existing development workflow and boost productivity
          </p>
        </div>

        {/* MCP Section */}
        <div className="mt-20">
          <div 
            ref={mcpRef}
            className={`transition-all duration-1000 delay-200 ${
              mcpInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative max-w-5xl mx-auto">
              <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50 bg-transparent overflow-hidden">
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-600/10 w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                      <div className="scale-110">
                        <MCPIcon />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                          Model Context Protocol
                        </h3>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold w-fit ${ctaInvertedPrimaryClasses}`}>
                          Featured
                        </span>
                      </div>
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        Use LogicStamp Context as an MCP server for AI assistants like Claude Desktop. Get real-time codebase analysis, component contracts, and structured context bundles directly in your AI workflow.
                      </p>
                      <ul className="space-y-2.5 mb-6">
                        {['Watch mode integration', 'Context bundle access', 'Real-time codebase queries'].map((feature, index) => (
                          <li 
                            key={feature} 
                            className="flex items-start gap-x-3 text-sm sm:text-base text-gray-600 dark:text-gray-400"
                            style={{ 
                              transitionDelay: `${index * 50}ms`,
                              opacity: mcpInView ? 1 : 0,
                              transform: mcpInView ? 'translateX(0)' : 'translateX(-10px)'
                            }}
                          >
                            <svg className="h-5 w-5 flex-shrink-0 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-nowrap gap-2 sm:gap-3">
                        <GetStartedButton
                          href="/docs/mcp/getting-started"
                          variant="inverted"
                          size="md"
                          className="text-xs sm:text-sm md:text-base"
                        >
                          Get Started
                        </GetStartedButton>
                        <ReadTheDocsButton
                          href="/docs/mcp"
                          variant="secondary"
                          size="md"
                          className="text-xs sm:text-sm md:text-base"
                        >
                          Learn More About MCP
                        </ReadTheDocsButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frameworks Section */}
        <div className="mt-20">
          <div 
            ref={frameworksRef}
            className={`text-center mb-12 transition-all duration-1000 delay-300 ${
              frameworksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl mb-3">
              Supported Frameworks
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              AI-ready context compilation for modern frontend frameworks and TypeScript codebases.
            </p>
            <div className="mt-4 max-w-2xl mx-auto rounded-xl border border-gray-200/70 px-4 py-3 text-left text-sm text-gray-900 dark:border-gray-700/70 dark:text-gray-100 flex gap-3 bg-transparent dark:bg-transparent">
              <div className="mt-0.5 flex-shrink-0">
                <svg
                  className="h-4 w-4 text-blue-500 dark:text-blue-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 2a6 6 0 00-3.74 10.64c.24.19.38.48.38.79V14a1 1 0 001 1h4a1 1 0 001-1v-.57c0-.31.14-.6.38-.79A6 6 0 0010 2z" />
                  <path d="M8 16a2 2 0 002 2 2 2 0 002-2H8z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold leading-snug">
                  TypeScript-first by design
                </p>
                <p className="mt-1 leading-snug text-blue-900/80 dark:text-blue-100/80">
                  LogicStamp Context currently analyzes <code>.ts</code> and <code>.tsx</code> files only. JavaScript{' '}
                  <code>.js</code> and <code>.jsx</code> files are not analyzed yet, so components written in JS won&apos;t
                  appear in context bundles.
                </p>
              </div>
            </div>
          </div>
          
          {/* First 6 integrations */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {integrations.slice(0, 6).map((integration, index) => {
              const IconComponent = integration.icon
              return (
                <div
                  key={integration.name}
                  className={`group relative transition-all duration-700 ${
                    frameworksInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="relative h-full rounded-2xl transition-all duration-500 overflow-hidden p-8 shadow-sm border border-gray-200/50 dark:border-gray-700/50">

                    {/* Coming Soon Badge */}
                    {integration.comingSoon && (
                      <div className="absolute top-6 right-6 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    
                    {/* New Badge */}
                    {integration.isNew && (
                      <div className="absolute top-6 right-6 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-white border border-emerald-400/30 backdrop-blur-sm">
                          New
                        </span>
                      </div>
                    )}
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      {integration.name === 'Express.js & NestJS' ? (
                        <IconComponent />
                      ) : (
                        <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${integration.iconBg} w-16 h-16`}>
                          <IconComponent />
                        </div>
                      )}

                      <h4 className="mt-6 font-semibold text-gray-900 dark:text-white text-xl">
                        {integration.name}
                      </h4>

                      <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        {integration.description}
                      </p>
                      
                      <ul className="mt-6 space-y-2.5">
                        {integration.features.map((feature, featureIndex) => (
                          <li 
                            key={feature} 
                            className="flex items-start gap-x-3 text-sm text-gray-600 dark:text-gray-400"
                            style={{ 
                              transitionDelay: `${featureIndex * 50}ms`,
                              opacity: frameworksInView ? 1 : 0,
                              transform: frameworksInView ? 'translateX(0)' : 'translateX(-10px)'
                            }}
                          >
                            <svg className="h-5 w-5 flex-shrink-0 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Upcoming Section */}
          <div className="mt-20">
            <div 
              className={`text-center mb-12 transition-all duration-1000 delay-300 ${
                frameworksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl mb-3">
                Upcoming
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
                Features and frameworks coming soon
              </p>
              <a
                href="/roadmap"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                See roadmap
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Last 3 integrations */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {integrations.slice(6).map((integration, index) => {
                const IconComponent = integration.icon
                return (
                  <div
                    key={integration.name}
                    className={`group relative transition-all duration-700 ${
                      frameworksInView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className="relative h-full rounded-2xl transition-all duration-500 overflow-hidden p-8 shadow-sm border border-gray-200/50 dark:border-gray-700/50">

                      {/* Coming Soon Badge */}
                      {integration.comingSoon && (
                        <div className="absolute top-6 right-6 z-10">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                            Coming Soon
                          </span>
                        </div>
                      )}
                      
                      {/* New Badge */}
                      {integration.isNew && (
                        <div className="absolute top-6 right-6 z-10">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-white border border-emerald-400/30 backdrop-blur-sm">
                            New
                          </span>
                        </div>
                      )}
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${integration.iconBg} w-16 h-16`}>
                          <IconComponent />
                        </div>

                        <h4 className="mt-6 font-semibold text-gray-900 dark:text-white text-xl">
                          {integration.name}
                        </h4>

                        <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                          {integration.description}
                        </p>
                        
                        <ul className="mt-6 space-y-2.5">
                          {integration.features.map((feature, featureIndex) => (
                            <li 
                              key={feature} 
                              className="flex items-start gap-x-3 text-sm text-gray-600 dark:text-gray-400"
                              style={{ 
                                transitionDelay: `${featureIndex * 50}ms`,
                                opacity: frameworksInView ? 1 : 0,
                                transform: frameworksInView ? 'translateX(0)' : 'translateX(-10px)'
                              }}
                            >
                              <svg className="h-5 w-5 flex-shrink-0 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-24">
          <div 
            ref={toolsRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              toolsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl mb-3">
              Development Tools
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Works with your existing development tools and CI/CD pipelines
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <div
                  key={tool.name}
                  className={`group relative transition-all duration-700 ${
                    toolsInView 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <div className="relative flex flex-col items-center gap-3 p-5 sm:p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
                    <div className={`${tool.color} opacity-80`}>
                      <IconComponent />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Disclaimer - applies to all frameworks and tools */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 italic text-center">
            All trademarks and logos are the property of their respective owners. LogicStamp is an independent open-source project and is not affiliated with or endorsed by the listed frameworks or tools.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes border-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}













