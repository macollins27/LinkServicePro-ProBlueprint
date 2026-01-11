import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

interface ProofFAQProps {
  testimonial?: {
    quote: string;
    by: string;
    chips?: string[];
  };
  faq?: { q: string; a: string }[];
}

export default function ProofFAQ({ testimonial, faq }: ProofFAQProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  if (!testimonial && (!faq || faq.length === 0)) {
    return null;
  }

  return (
    <>
      {faq && faq.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faq.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a
                }
              }))
            })}
          </script>
        </Helmet>
      )}

      <section 
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white"
        data-testid="proof-faq"
      >
        <div className="max-w-7xl mx-auto">
          {/* Testimonial */}
          {testimonial && (
            <div className="mb-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
                  In the field
                </h2>
                <div className="bg-slate-50 ring-1 ring-slate-200 p-6 sm:p-8 shadow-sm">
                  <blockquote className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-slate-700 font-medium mb-4">
                    — {testimonial.by}
                  </p>
                  {testimonial.chips && testimonial.chips.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {testimonial.chips.map((chip, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 bg-white ring-1 ring-slate-200 text-sm font-semibold text-slate-700"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* FAQ */}
          {faq && faq.length > 0 && (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                FAQ
              </h2>
              <div 
                className="space-y-3 mb-8"
                role="region"
                aria-label="Frequently asked questions"
              >
                {faq.map((item, idx) => (
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
                        {item.q}
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
                        {item.a}
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
          )}
        </div>
      </section>
    </>
  );
}
