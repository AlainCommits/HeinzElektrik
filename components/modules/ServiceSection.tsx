// components/ServicesSection.tsx
// import Link from 'next/link'
// import { QRCode } from '@/components/QRCode'

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50" id="2">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Unsere Leistungen</h2>
        <p className="text-center mb-12">Für privat und Gewerbe!</p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Auszug */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Auszug</h3>
            <ul className="space-y-2">
              {[
                'Elektroinstallationen',
                'Stromausfall',
                'Kabelbrand',
                'Kurzschluss',
                'Sicherungen',
                'Kabelbruch und vieles weiteres'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-yellow-400">⚡</span>
                  {item}
                </li>
              ))}
            </ul>
            {/* <Link 
              href="/leistungen"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Mehr Info
            </Link> */}
          </div>

          {/* Elektriker Notdienst */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Elektriker Notdienst</h3>
            <p>
              Stromausfall, Kabelbruch, Kurzschluss, Kabelbrand, defekte Sicherung? 
              Notfalldienst Strom und strom Notdienst. Egal, ob am Tag oder in der Nacht, 
              einer unserer qualifizierten Elektriker ist innerhalb von wenigen Minuten 
              bei Ihnen vor Ort.
            </p>
          </div>

          {/* Keine versteckten Kosten */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Keine versteckten Kosten</h3>
            <p>
              Bevor Sie den Auftrag erteilen und sich unsere Elektriker auf den Weg zu 
              Ihrer Adresse machen, erhalten Sie ausführliche Informationen über unsere 
              Preise und die Kosten, die auf Sie zukommen.
            </p>
            {/* <Link 
              href="/preise"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Mehr Info
            </Link> */}
          </div>
        </div>

        <div className="absolute top-4 right-4">
          {/* <QRCode /> */}
        </div>
      </div>
    </section>
  )
}