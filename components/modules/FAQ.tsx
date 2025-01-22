// components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white" id="3">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Häufig gestellte Fragen
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50/50 transition-colors">
                Wie schnell sind Sie vor Ort?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">
                In der Regel sind wir innerhalb von 15-30 Minuten bei Ihnen vor Ort - 
                auch nachts und an Wochenenden.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50/50 transition-colors">
                Welche Zahlungsmöglichkeiten bieten Sie an?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">
                Sie können bar, mit EC-Karte oder Kreditkarte bezahlen. Für Bestandskunden 
                bieten wir auch Zahlung per Rechnung an.
              </AccordionContent>
            </AccordionItem>

            {/* Add more FAQ items with the same styling */}
          </Accordion>
        </div>
      </div>
    </section>
  )
}