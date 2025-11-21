import { Metadata } from 'next'
import Demo from '../../components/Demo'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Try LogicStamp Context | Interactive Demo',
  description: 'Try LogicStamp Context with our interactive demo. Paste your React/TypeScript code and see how it transforms into an AI-optimized context bundle.',
}

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <AnimatedSection direction="up" delay={0}>
        <Demo />
      </AnimatedSection>
      <Footer />
    </main>
  )
}

