// app/page.tsx (Root Page)
import AboutSection from "@/components/modules/AboutSection"
import ContactSection from "@/components/modules/ContactSection"
import WhyUsSection from "@/components/modules/WhyUsSection"
import ReferenceSection from "@/components/modules/ReferenceSection"
import InstallationSection from "@/components/modules/InstallationSection"
import Hero from "@/components/Hero"
import ServicesSection from "@/components/modules/ServiceSection"
import { Metadata } from "next"
import FAQ from '../components/modules/FAQ';

export const metadata: Metadata = {
  title: "Elektriker Notdienst 24/7 | Schnell & Zuverlässig",
  description: "24h Elektriker Notdienst. ✓ Festpreise ✓ Qualifizierte Mitarbeiter ✓ In 15 Min vor Ort ➤ Jetzt anrufen!"
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <WhyUsSection />
      <ReferenceSection />
      <InstallationSection />
      <FAQ />
    </main>
  )
}