import Hero from '@/components/Hero'
import HowItWorks from '@/components/Features'
// import Stats from '@/components/Stats'
import WhyLogicStamp from '@/components/WhyLogicStamp'
import Integrations from '@/components/Integrations'
// import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <Stats /> */}
      <WhyLogicStamp />
      <HowItWorks />
      <Integrations />
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
