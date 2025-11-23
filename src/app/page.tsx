import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/Features'
// import Stats from '@/components/Stats'
import WhyLogicStamp from '@/components/sections/WhyLogicStamp'
import Integrations from '@/components/sections/Integrations'
// import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/sections/FAQ'
import GetStarted from '@/components/sections/GetStarted'
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
      <GetStarted />
      <Footer />
    </main>
  )
}
