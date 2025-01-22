// components/TopBar.tsx
export default function TopBar() {
  return (
    <div className="hidden md:block bg-[#1a237e] text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-8">
            <a href="tel:0157-926-430-00" className="flex items-center hover:text-yellow-400 transition-colors">
              <span>📞 0157-926-430-00</span>
            </a>
            <a href="mailto:karsten@elektro-heinrich.de" className="flex items-center hover:text-yellow-400 transition-colors">
              <span>✉️ karsten@elektro-heinrich.de</span>
            </a>
          </div>
          <div className="text-base">
            <span>Bürozeiten Tägl. 8-21Uhr | Notdienst 24Std.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
