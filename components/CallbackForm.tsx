// components/CallbackForm.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

interface CallbackFormProps {
  cityName?: string
}

export default function CallbackForm({ cityName = '' }: CallbackFormProps) {
  const [formData, setFormData] = useState({
    address: '',
    name: '',
    phone: '',
    consent: false
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Formular-Verarbeitung hier
    console.log(formData)
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
        RÜCKRUF-SERVICE
      </h2>
      <p className="text-center mb-6">Wir rufen Sie gerne zurück:</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="address" className="block mb-2 text-sm md:text-base">
            Ihre Straße, PLZ, Ort bitte:
          </label>
          <input
            type="text"
            id="address"
            className="w-full px-3 py-2 border rounded text-sm md:text-base"
            value={formData.address}
            onChange={(e) => setFormData(prev => ({...prev, address: e.target.value}))}
            placeholder={cityName ? `Adresse in ${cityName}` : 'Ihre Adresse'}
            required
          />
        </div>

        <div>
          <label htmlFor="name" className="block mb-2 text-sm md:text-base">
            Ihr Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded text-sm md:text-base"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 text-sm md:text-base">
            Ihre Telefonnummer
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-3 py-2 border rounded text-sm md:text-base"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
            required
          />
        </div>

        <div className="text-xs md:text-sm">
          <label className="flex items-start gap-2">
            <input 
              type="checkbox" 
              className="mt-1"
              checked={formData.consent}
              onChange={(e) => setFormData(prev => ({...prev, consent: e.target.checked}))}
              required
            />
            <span>
              Ich bin damit einverstanden, dass meine Daten gemäß der{" "}
              <Link href="/datenschutz" className="text-blue-600 underline">
                Datenschutzerklärung
              </Link>{" "}
              zur Kontaktaufnahme gespeichert werden.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-bold text-base md:text-lg hover:bg-blue-700 transition-colors"
        >
          Rückruf anfordern
        </button>
      </form>
    </div>
  )
}