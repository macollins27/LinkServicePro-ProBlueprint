import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqImage from "@assets/generated_images/Dispatcher_coordinating_field_operations_0f4e768b.png";

const faqs = [
  {
    id: "recurring-jobs",
    question: "Can I schedule recurring jobs?",
    answer:
      "Yes. Set up weekly, monthly, or custom schedules and crews get notified.",
  },
  {
    id: "payments",
    question: "How do payments work?",
    answer:
      "Accept cards, ACH, and cash. Funds deposit to your bank in 2 business days.",
  },
  {
    id: "integrations",
    question: "What integrations are available?",
    answer:
      "QuickBooks, Xero, and several property platforms. More added monthly.",
  },
  {
    id: "onboarding",
    question: "How long does onboarding take?",
    answer:
      "Most teams are running in under a week with guided setup and live support.",
  },
  {
    id: "support",
    question: "What support do you offer?",
    answer:
      "Phone, email, and chat included. Plus guides and videos.",
  },
];

export default function FAQ() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50" id="faq">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="text-faq-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-700">Short answers to help you decide fast.</p>
        </header>

        <div className="mb-6 lg:mb-8">
          <img 
            src={faqImage} 
            alt="Professional dispatcher coordinating field operations with scheduling board" 
            className="w-full h-48 sm:h-64 lg:h-80 object-cover ring-1 ring-slate-200"
          />
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={`item-${index}`}
              id={faq.id}
              className="bg-white ring-1 ring-slate-200 elev-2 px-5 border-0"
              data-testid={`accordion-item-${index}`}
            >
              <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
