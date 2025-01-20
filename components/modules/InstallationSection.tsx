// components/InstallationSection.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function InstallationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/images/e7.jpg"
              alt="Elektriker bei der Installation"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Elektroinstallationen</h2>
            <p className="text-lg">
              Neue Steckdose, Lampe installieren, Anschluss eines Herdes? 
              Unsere erfahrenen Profis des Elektro-Service helfen Ihnen 
              innerhalb von wenigen Minuten oder zum Wunschtermin.
            </p>
            
            <Link 
              href="/informationen"
              className="text-blue-600 hover:underline inline-flex items-center gap-2"
            >
              <span>⚡</span> Ausführliche Informationen
            </Link>
            
            <Link
              href="/rueckruf"
              className="block w-full sm:w-auto text-center bg-yellow-400 text-black px-8 py-3 rounded-md font-bold mt-8"
            >
              📞 RÜCKRUF ANFRAGEN
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}