'use client'
import { useState } from 'react'
import AnimatedSection from '../AnimatedSection'

// Image component with error fallback
function AvatarImage({ src, alt, name }: { src: string; alt: string; name: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const fallbackSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`

  // Use regular img tag for error fallback handling (Next.js Image doesn't support onError)
  return (
    <div className="relative h-10 w-10 flex-shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={hasError ? fallbackSrc : imgSrc}
        alt={alt}
        className="rounded-full bg-gray-50 dark:bg-gray-700 object-cover h-10 w-10"
        loading="lazy"
        onError={() => {
          if (!hasError) {
            setHasError(true)
            setImgSrc(fallbackSrc)
          }
        }}
      />
    </div>
  )
}

const testimonials = [
  {
    body: 'LogicStamp Context has transformed how we share code with AI. Instead of pasting massive files, we generate compact context bundles. Claude understands our codebase instantly.',
    author: {
      name: 'Sarah Chen',
      handle: 'sarahchen',
      imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
  },
  {
    body: 'The token optimization is incredible. We save 66% tokens compared to sharing full code. Our AI costs dropped significantly while getting better results.',
    author: {
      name: 'Marcus Rodriguez',
      handle: 'marcusr',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  },
  {
    body: 'Zero config setup is amazing. Just run stamp context and get AI-ready documentation. No more explaining our codebase structure to ChatGPT manually.',
    author: {
      name: 'Emily Watson',
      handle: 'emilyw',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  },
  {
    body: 'Context drift detection in CI is a game-changer. We catch breaking changes before merging. The compare command works exactly like Jest snapshots.',
    author: {
      name: 'David Kim',
      handle: 'davidk',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  },
  {
    body: 'Dependency graphs show AI exactly how our components relate. No more confusion about import relationships. AI suggestions are way more accurate now.',
    author: {
      name: 'Lisa Park',
      handle: 'lisap',
      imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  },
  {
    body: 'LogicStamp Context revolutionized our AI workflow. Structured context bundles beat raw code sharing every time. Our team productivity skyrocketed.',
    author: {
      name: 'Alex Thompson',
      handle: 'alext',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  },
  {
    body: 'The semantic hashes track changes perfectly. We know exactly what changed between versions. Perfect for monitoring codebase evolution over time.',
    author: {
      name: 'Ariel MI',
      handle: 'arielmi',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  },
  {
    body: 'Just tried LogicStamp Context on our React app. Generated context in 3 seconds. AI immediately understood our entire component architecture. Mind-blowing!',
    author: {
      name: 'Gleb Konon',
      handle: 'glebkonon',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  },
]

export default function Testimonials() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-gradient-bg-section overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-6xl">
              Loved by developers
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-8 text-gray-600 dark:text-gray-300">
              See what developers are saying about LogicStamp Context
            </p>
          </div>
        </AnimatedSection>
        
        {/* Horizontal Marquee Testimonials */}
        <div className="mt-16 space-y-12 testimonials-marquee-wrapper">
          {/* Top Row - Left to Right */}
          <div className="marquee-container-full">
            <div className="marquee marquee-left">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={`top-${testimonial.author.handle}-${index}`} className="marquee-item-full">
                  <div className="flex flex-col justify-between rounded-xl bg-gradient-bg-card p-8 shadow-lg ring-1 ring-secondary-200/20 dark:ring-secondary-400/20 hover:shadow-xl transition-all duration-300 w-[440px] lg:w-[480px] h-[240px] lg:h-[260px]">
                    <blockquote className="text-gray-900 dark:text-white flex-1">
                      <p className="text-base lg:text-lg leading-relaxed line-clamp-2 whitespace-normal">&ldquo;{testimonial.body}&rdquo;</p>
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-x-3">
                      <AvatarImage
                        src={testimonial.author.imageUrl}
                        alt={`${testimonial.author.name} profile picture`}
                        name={testimonial.author.name}
                      />
                      <div>
                        <div className="font-semibold text-base lg:text-lg text-gray-900 dark:text-white">
                          {testimonial.author.name}
                        </div>
                        <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                          @{testimonial.author.handle}
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Right to Left */}
          <div className="marquee-container-full">
            <div className="marquee marquee-right">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={`bottom-${testimonial.author.handle}-${index}`} className="marquee-item-full">
                  <div className="flex flex-col justify-between rounded-xl bg-gradient-bg-card p-8 shadow-lg ring-1 ring-secondary-200/20 dark:ring-secondary-400/20 hover:shadow-xl transition-all duration-300 w-[440px] lg:w-[480px] h-[240px] lg:h-[260px]">
                    <blockquote className="text-gray-900 dark:text-white flex-1">
                      <p className="text-base lg:text-lg leading-relaxed line-clamp-2 whitespace-normal">&ldquo;{testimonial.body}&rdquo;</p>
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-x-3">
                      <AvatarImage
                        src={testimonial.author.imageUrl}
                        alt={`${testimonial.author.name} profile picture`}
                        name={testimonial.author.name}
                      />
                      <div>
                        <div className="font-semibold text-base lg:text-lg text-gray-900 dark:text-white">
                          {testimonial.author.name}
                        </div>
                        <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                          @{testimonial.author.handle}
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
