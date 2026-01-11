import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

interface FAQ {
  q: string;
  a: string;
}

interface IndustryFAQProps {
  faqs: FAQ[];
  industryName: string;
}

export default function IndustryFAQ({ faqs, industryName }: IndustryFAQProps) {
  // Generate FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section className="py-12 sm:py-16">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Common questions about {industryName} software
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger 
                className="text-left font-semibold text-slate-900 hover:no-underline py-5"
                data-testid={`faq-trigger-${index}`}
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent 
                className="text-slate-700 pb-5"
                data-testid={`faq-answer-${index}`}
              >
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
