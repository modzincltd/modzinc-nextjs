import TechCarousel from './components/TechCarousel'
import ClientLogos from './components/ClientLogos'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import ContactSection from './components/ContactSection'
import { getFeaturedClients } from '@/lib/queries'

export default async function HomePage() {
  const clients = await getFeaturedClients()

  return (
    <main className="min-h-screen bg-white text-gray-800 overflow-hidden">
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <TechCarousel />
      <PortfolioSection clients={clients} />
      <ClientLogos />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  )
}
