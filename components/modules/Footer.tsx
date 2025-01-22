//Users/alonondanse/elektriker-notdienst/components/modules/Footer.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';

export default function Footer() {
  const showImpressum = () => {
    toast('Impressum', {
      description: (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Elektro Heinrich</h3>
            <p>Inhaber: Karsten Heinrich</p>
            <p>Musterstraße 123</p>
            <p>12345 Stadt</p>
          </div>
          <div>
            <p>Tel: 0157-926-430-00</p>
            <p>E-Mail: karsten@elektro-heinrich.de</p>
          </div>
          <div>
            <p>USt-IdNr: DE123456789</p>
            <p>Handwerkskammer: Dresden</p>
          </div>
        </div>
      ),
      duration: 0,
    });
  };

  const showDatenschutz = () => {
    toast('Datenschutzerklärung', {
      description: 'Datenschutzinformationen...',
      duration: 0,
    });
  };

  const showAGB = () => {
    toast('Allgemeine Geschäftsbedingungen', {
      description: 'AGB Informationen...',
      duration: 0,
    });
  };

  return (
    <footer className="border-2  text-gray-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Elektro Heinrich Logo"
              width={150}
              height={45}
              className="mb-4"
            />
            <p className="text-sm">
              Ihr zuverlässiger Partner für alle elektrischen Installationen und Notfälle. 
              24/7 Bereitschaft für Ihre Sicherheit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="#1" className="hover:text-yellow-400 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="#2" className="hover:text-yellow-400 transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="#3" className="hover:text-yellow-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  Elektro-Notdienst
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  Elektroinstallationen
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  Smart Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  Sicherheitstechnik
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Musterstraße 123, 12345 Stadt
              </li>
              <li>
                <Link 
                  href="tel:0157-926-430-00" 
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <span className="mr-2">📞</span>
                  0157-926-430-00
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:karsten@elektro-heinrich.de"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <span className="mr-2">✉️</span>
                  karsten@elektro-heinrich.de
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Elektro Heinrich. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={showImpressum}
                className="hover:text-yellow-400 transition-colors"
              >
                Impressum
              </button>
              <button 
                onClick={showDatenschutz}
                className="hover:text-yellow-400 transition-colors"
              >
                Datenschutz
              </button>
              <button 
                onClick={showAGB}
                className="hover:text-yellow-400 transition-colors"
              >
                AGB
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}