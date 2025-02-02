// components/AboutSection.tsx
import Image from 'next/image'
// import { QRCode } from '@/components/QRCode'

export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="1">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <Image
              src="/images/e5.jpg"
              alt="Elektriker bei der Arbeit"
              width={600}
              height={400}
              className="rounded-lg"
              priority
            />
            <p className="text-center mt-4 text-gray-600">
              Ob Elektro Notdienst, geplante Elektroinstallation oder der
              Anschluss von Elektrogeräten – Elektro Heinz hilft!
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 space-y-6 transition-all hover:shadow-xl">
            <h1 className="text-4xl font-bold">Elektro Heinz</h1>
            <h2 className="text-2xl">Ihr Elektriker für alle Fälle.</h2>
            
            <p className="text-gray-700">
              Wir bieten 24-Stunden-Service (auch an Sonn- und Feiertagen) mit fairen Preisen, 
              voller Kostentransparenz und schnellen Terminen. Unsere qualifizierten Elektriker 
              leisten kompetente und saubere Arbeit in allen Elektro-Angelegenheiten sowie 
              Elektriker Bereitschaft. Wir sind ein Team aus geprüften und erfahrenen Elektrikern 
              mit Standorten im gesamten Bundesgebiet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
