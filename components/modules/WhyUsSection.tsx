// components/WhyUsSection.tsx
import Link from 'next/link'
import { Car, Wallet, CreditCard } from 'lucide-react'
import Image from 'next/image'

export default function WhyUsSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <Image 
          src="/images/e10.jpg"
          alt="Elektriker Werkzeuge"
          fill
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>
      
      <div className="relative container mx-auto px-4 text-white">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 shadow-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            DARUM SIND WIR ALS ELEKTRO FIRMA
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            IHR RICHTIGER ANSPRECHPARTNER
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <Car className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-4">Blitzschnelle Anfahrt</h4>
            <p>
              Unsere Elektriker sind in ca. 15 - 30 Minuten. 
              Auch an Wochenenden und Nachts.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <Wallet className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-4">Transparente Kosten + Festpreise</h4>
            <p>
              Bereits am Telefon geben wir eine erste Kostenschätzung. 
              Zusätzlicher Aufwand vor Ort, wird immer zuerst mit Ihnen besprochen.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <CreditCard className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-4">Bar- & Kartenzahlung</h4>
            <p>
              Sie können Bar, mit EC oder sogar Kreditkarte bezahlen. 
              Bestandskunden bieten wir zusätzlich Rechnung über Überweisung an.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="tel:0157-926-430-00"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            0157-926-430-00
            <span className="block text-sm">Bürozeiten Tägl. 8-21Uhr</span>
          </Link>
        </div>
      </div>
    </section>
  )
}