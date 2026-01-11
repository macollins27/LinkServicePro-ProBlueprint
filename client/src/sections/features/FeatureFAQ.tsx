import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FeatureFAQProps = {
  faq: { q: string; a: string }[];
};

export default function FeatureFAQ({ faq }: FeatureFAQProps) {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" data-testid="heading-faq">
          Common questions
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm"
                data-testid={`faq-item-${idx}`}
              >
                <AccordionTrigger 
                  className="text-left font-semibold hover:no-underline py-4"
                  data-testid={`faq-question-${idx}`}
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-slate-700 pb-4"
                  data-testid={`faq-answer-${idx}`}
                >
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
