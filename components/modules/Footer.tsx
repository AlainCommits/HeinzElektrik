// components/Footer.tsx
'use client'

import Image from 'next/image'
// import Link from 'next/link'
import { toast } from 'sonner'

export default function Footer() {
  const showImpressum = () => {
    toast.message('Impressum', {
      duration: 0,
      position: 'bottom-center',
      className: 'w-full max-w-3xl',
      description: (
        <div className="space-y-4 text-sm p-4">
          <h2 className="font-bold text-lg">Angaben gemäß §5 TMG:</h2>
          <p>Elektriko-Heinz ist ein Vermittlungsservice vertreten durch:</p>
          <p>Karsten Heinz</p>
          <div className="space-y-2">
            <p>Telefon: 0157-926-430-00</p>
            <p>E-Mail: karsten@elektro-heinrich.de</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold">HAFTUNG FÜR LINKS</h3>
            <p>Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold">HINWEIS AUF EU-STREITSCHLICHTUNG</h3>
            <p>Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter https://ec.europa.eu/odr. Ich nehme nicht daran teil.</p>
          </div>

          <div className="space-y-2">
            <p>Unser Vor-Ort-Service wird gewährleistet durch zahlreiche Monteure, sowie Vertrags- und Kooperationspartner in unseren Einsatzgebieten. Vor Ort kann unser Partner kein Ladengeschäft vorweisen, er ist ausschließlichlich mobil unterwegs!</p>
            <p>Damit wir dauerhaft einen verlässlichen 24/7 Service anbieten können, prüfen wir unsere lokalen Kooperationspartner im Vorhinein sorgfältig.</p>
          </div>
        </div>
      ),
    })
  }

  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div>
            <Image
              src="/logo.png"
              alt="Karsten Heinrich Logo"
              width={150}
              height={45}
              className="mb-4"
            />
            <p className="text-sm text-gray-600">
              Ihr regionaler Partner aus der Nähe
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-bold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li><a href="#1">Über Uns</a></li>
              <li><a href="#2">Leistungen</a></li>
              <li><a href="#3">FAQ</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-bold mb-4">Kontakt</h3>
            <p>0157-926-430-00</p>
            <p>karsten@elektro-heinrich.de</p>
            <p>Mon-Fr. 08:00 - 21:00</p>
          </div>

          {/* Handwerk Logo */}
          <div className="flex justify-end">
            <Image
              src="/images/handwerk.jpg"
              alt="Handwerk aus Deutschland"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={showImpressum}
              className="hover:text-blue-600"
            >
              Impressum
            </button>
            <a href="#datenschutz" className="hover:text-blue-600">
              Datenschutzerklärung
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}