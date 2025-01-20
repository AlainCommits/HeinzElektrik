// components/ContactSection.tsx
import Image from 'next/image'
// import { QRCode } from '@/components/QRCode'

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Gewerbeinformation */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Messe Und Gewerbeinformation</h3>
            <div className="relative w-full h-[300px] mb-6">
              {/* <Image
                src="/images/support.png"
                alt="Elektro Heinrich Prospekt"
                fill
                className="object-contain"
              /> */}
            </div>
            <p className="text-gray-600 mb-6">
              Unser erfahrenes Team übernimmt zuverlässig alle elektrischen 
              Installationen für Ihre Messestände und Events. Wir garantieren 
              sichere und maßgeschneiderte Elektriklösungen, die exakt auf Ihre 
              Bedürfnisse abgestimmt sind, unter strenger Einhaltung aller 
              Sicherheitsstandards.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-full hover:bg-blue-700">
              Kostenloses Prospekt per Post (8-Seitig)
            </button>
          </div>

          {/* Kontakt */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Hallo, Ich Freue Mich Auf Ihren Anruf
            </h3>
            <p>
              Unsere Elektrofirma steht Ihnen jederzeit zur Verfügung. 
              Ich freue mich auf Ihren Anruf:
            </p>
            <p className="text-2xl font-bold">0157-926-430-00</p>
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/support.jpg"
                alt="Kundenservice"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          {/* <QRCode /> */}
        </div>
      </div>
    </section>
  )
}