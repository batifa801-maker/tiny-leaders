import Navigation from '@/components/Navigation'
import BrandIntro from '@/components/sections/BrandIntro'
import About from '@/components/sections/About'
import Programs from '@/components/sections/Programs'
import FlexibleChildcare from '@/components/sections/FlexibleChildcare'
import ElementaryPreparation from '@/components/sections/ElementaryPreparation'
import TherapyServices from '@/components/sections/TherapyServices'
import SafeTransportation from '@/components/sections/SafeTransportation'
import DailyActivities from '@/components/sections/DailyActivities'
import CreativeStudios from '@/components/sections/CreativeStudios'
import Celebrations from '@/components/sections/Celebrations'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import LaunchInvitation from '@/components/LaunchInvitation'

export default function Home() {
  return (
    <div className="relative isolate flex min-h-screen flex-col">
      <LaunchInvitation />
      <Navigation />
      <main className="relative z-10 flex-1">
        <BrandIntro />
        <About />
        <Programs />
        <FlexibleChildcare />
        <ElementaryPreparation />
        <TherapyServices />
        <SafeTransportation />
        <DailyActivities />
        <CreativeStudios />
        <Celebrations />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}
