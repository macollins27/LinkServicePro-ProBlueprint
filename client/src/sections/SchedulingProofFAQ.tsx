import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

export default function SchedulingProofFAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does setup take?",
      answer: "Most teams import in under a day."
    },
    {
      question: "Can I reschedule from my phone?",
      answer: "Yes. iOS and Android supported."
    },
    {
      question: "Will crews get alerts?",
      answer: "Yes. Techs and customers receive SMS/email."
    },
    {
      question: "What if I double-book?",
      answer: "You'll see a conflict flag before saving."
    },
    {
      question: "Does it handle recurring jobs?",
      answer: "Yes. Daily, weekly, monthly patterns."
    },
    {
      question: "Does it work offline?",
      answer: "The mobile app queues updates and syncs later."
    }
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <section 
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white"
        data-testid="section-proof-faq"
      >
        <div className="max-w-7xl mx-auto">
          {/* Testimonial */}
          <div className="mb-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
                In the field
              </h2>
              <div className="bg-slate-50 ring-1 ring-slate-200 p-6 sm:p-8 shadow-sm">
                <blockquote className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                  "We reshuffle routes in minutes and cut callbacks."
                </blockquote>
                <p className="text-slate-700 font-medium">
                  — Mike R., Owner, HVAC
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              FAQ
            </h2>
            <div 
              className="space-y-3 mb-8"
              role="region"
              aria-label="Frequently asked questions about drag-and-drop scheduling"
            >
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white ring-1 ring-slate-200 shadow-sm"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-expanded={expandedFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                    data-testid={`button-faq-${idx}`}
                  >
                    <span className="font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 transition-transform motion-reduce:transition-none flex-shrink-0 ${
                        expandedFaq === idx ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {expandedFaq === idx && (
                    <div 
                      id={`faq-answer-${idx}`} 
                      className="px-6 pb-4 text-slate-700"
                      role="region"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <ButtonsRow className="justify-center">
              <StartFreeButton context="light" />
              <ViewPricingButton context="light" />
            </ButtonsRow>
          </div>
        </div>
      </section>
    </>
  );
}
