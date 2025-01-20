// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
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
            {/* <Link href="/preise" className="text-gray-800 hover:text-blue-600">
              Preise
            </Link> */}
            <Link href="#3" className="text-gray-800 hover:text-blue-600">
              FAQ
            </Link>
            {/* <Link href="/blog" className="text-gray-800 hover:text-blue-600">
              Blog
            </Link> */}
          </div>

          {/* Contact Info */}
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
          <button className="md:hidden p-2" aria-label="Menu">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className="block px-3 py-2 text-gray-800 hover:bg-blue-50"
          >
            Start
          </Link>
          <Link 
            href="/uber" 
            className="block px-3 py-2 text-gray-800 hover:bg-blue-50"
          >
            Über
          </Link>
          <Link 
            href="/service" 
            className="block px-3 py-2 text-gray-800 hover:bg-blue-50"
          >
            Service
          </Link>
          <Link 
            href="/preise" 
            className="block px-3 py-2 text-gray-800 hover:bg-blue-50"
          >
            Preise
          </Link>
          <Link 
            href="/faq" 
            className="block px-3 py-2 text-gray-800 hover:bg-blue-50"
          >
            FAQ
          </Link>
          <Link 
            href="/blog" 
            className="block px-3 py-2 text-gray-800 hover:bg-blue-50"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}