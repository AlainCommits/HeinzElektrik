// components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-16 bg-gray-50" id="3">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Häufig gestellte Fragen
        </h2>
        
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Wie schnell sind Sie vor Ort?
            </AccordionTrigger>
            <AccordionContent>
              In der Regel sind wir innerhalb von 15-30 Minuten bei Ihnen vor Ort - 
              auch nachts und an Wochenenden.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Welche Zahlungsmöglichkeiten bieten Sie an?
            </AccordionTrigger>
            <AccordionContent>
              Sie können bar, mit EC-Karte oder Kreditkarte bezahlen. Für Bestandskunden 
              bieten wir auch Zahlung per Rechnung an.
            </AccordionContent>
          </AccordionItem>

          {/* Weitere FAQ-Items hier */}
        </Accordion>
      </div>
    </section>
  )
}