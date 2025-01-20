// components/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'
import CallbackForm from '@/components/CallbackForm'

interface HeroProps {
  cityName?: string
}

export default function Hero({ cityName }: HeroProps) {
  const locationText = cityName ? `in ${cityName}` : "in Ihrer Nähe"
  
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/e1.jpg"
          alt="Elektriker Werkzeuge"
          fill
          priority
          className="object-cover"
          quality={85}
          sizes="100vw"
         
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Elektriker-Service und Notdienst {locationText}
              </h1>
              <h2 className="text-xl md:text-2xl mb-8 uppercase tracking-wide">
                ELEKTRO NOTDIENST – INSTALLATIONEN – REPARATUREN
              </h2>
              
              <ul className="space-y-4 text-lg mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">⚡</span>
                  Festpreise ohne Überraschungen
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">⚡</span>
                  Qualifizierte Mitarbeiter und Partner
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">⚡</span>
                  Blitzschnelle Anfahrt: Im Notfall in ca. 15 Min. vor Ort
                </li>
              </ul>

              <Link
                href="tel:0157-926-430-00"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded text-2xl font-bold hover:bg-blue-700 transition-colors"
              >
                📞 0157-926-430-00
              </Link>
            </div>

            <div>
              <CallbackForm cityName={cityName} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-blue-900 py-4">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-lg">
            Haben Sie einen Elektro Notfall{cityName ? ` in ${cityName}` : ''}? 
            Wir sind 24 Std erreichbar: 0157-926-430-00
          </p>
        </div>
      </div>
    </section>
  )
}