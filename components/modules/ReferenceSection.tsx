// components/ReferencesSection.tsx
import Image from 'next/image'

const references = [
  { name: 'XOXO Kosmetik', logo: '/images/xoxo.jpg' },
  { name: 'Mathiesen', logo: '/images/mathies.jpg' },
  { name: 'Druckerei', logo: '/images/drucker.jpg' },
  { name: 'Café Kleeblatt', logo: '/images/klee.jpg' },
  { name: 'Tierarzt', logo: '/images/tier.jpg' },
  { name: 'Augenarzt Dr. Schwarz', logo: '/images/auge.jpg' },
]

export default function ReferencesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Referenzen Messebau und Wartung
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {references.map((ref) => (
            <div key={ref.name} className="flex justify-center">
              <Image
                src={ref.logo}
                alt={ref.name}
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}