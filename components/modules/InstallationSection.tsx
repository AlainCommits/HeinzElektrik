// components/InstallationSection.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function InstallationSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-[400px]">
              <Image
                src="/images/e7.jpg"
                alt="Elektriker bei der Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 space-y-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-4xl font-bold">Elektroinstallationen</h2>
            <p className="text-lg text-gray-700">
              Neue Steckdose, Lampe installieren, Anschluss eines Herdes? 
              Unsere erfahrenen Profis des Elektro-Service helfen Ihnen 
              innerhalb von wenigen Minuten oder zum Wunschtermin.
            </p>
            
            <Link 
              href="/informationen"
              className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <span>⚡</span> Ausführliche Informationen
            </Link>
            
            <Link
              href="/rueckruf"
              className="block w-full sm:w-auto text-center bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              📞 RÜCKRUF ANFRAGEN
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
