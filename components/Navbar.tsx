//Users/alonondanse/elektriker-notdienst/components/Navbar.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Karsten Heinrich Logo"
              width={150}
              height={45}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Start
            </Link>
            <Link href="#1" className="text-gray-800 hover:text-blue-600">
              Über uns
            </Link>
            <Link href="#2" className="text-gray-800 hover:text-blue-600">
              Service
            </Link>
            <Link href="#3" className="text-gray-800 hover:text-blue-600">
              FAQ
            </Link>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/support.png" 
                alt="Support" 
                width={40} 
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm">Persönliche Beratung</p>
                <Link 
                  href="tel:0157-926-430-00" 
                  className="text-blue-600 font-bold"
                >
                  0157-926-430-00
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-3 bg-white shadow-lg">
          <Link 
            href="/" 
            className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md"
            onClick={toggleMenu}
          >
            Start
          </Link>
          <Link 
            href="#1" 
            className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md"
            onClick={toggleMenu}
          >
            Über uns
          </Link>
          <Link 
            href="#2" 
            className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md"
            onClick={toggleMenu}
          >
            Service
          </Link>
          <Link 
            href="#3" 
            className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md"
            onClick={toggleMenu}
          >
            FAQ
          </Link>
          
          {/* Mobile Contact Info */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            <Link
              href="tel:0157-926-430-00"
              className="block px-3 py-2 text-blue-600 font-bold hover:bg-blue-50 rounded-md"
              onClick={toggleMenu}
            >
              📞 0157-926-430-00
            </Link>
            <div className="px-3 py-2 text-sm text-gray-600">
              Bürozeiten Tägl. 8-21Uhr
              

              Notdienst 24Std.
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}