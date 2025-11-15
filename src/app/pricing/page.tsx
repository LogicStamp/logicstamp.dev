import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-20">
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
