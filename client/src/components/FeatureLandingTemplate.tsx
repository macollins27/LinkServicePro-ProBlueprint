import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronDown, Check } from "lucide-react";
import type { FeatureLandingPage } from "@/data/featureLandingPages";
import { featureLandingPages } from "@/data/featureLandingPages";
import StartFreeButton from "@/components/StartFreeButton";

interface FeatureLandingTemplateProps {
  data: FeatureLandingPage;
  customHero?: React.ReactNode;
  postHeroContent?: React.ReactNode;
}

export default function FeatureLandingTemplate({ data, customHero, postHeroContent }: FeatureLandingTemplateProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Helper to get related feature data
  const getRelatedFeatureData = (slug: string) => {
    return featureLandingPages.find(f => f.slug === slug);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadEmail && leadCompany) {
      if (window.gtag) {
        window.gtag('event', 'lead_capture', {
          feature: data.slug,
          source: 'demo-form'
        });
      }
      setLeadSubmitted(true);
    }
  };

  const handleCTAClick = (placement: string) => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', { placement });
    }
  };

  // Import the single hero image
  const heroImageSrc = `/images/features/${data.hero.image}`;

  return (
    <>
      <Helmet>
        <title>{data.name} • Field Service Software</title>
        <meta name="description" content={data.subtitle} />
        <link rel="canonical" href={`https://linkservicepro.com/features/${data.slug}`} />
        <meta property="og:title" content={`${data.name} • Field Service Software`} />
        <meta property="og:description" content={data.subtitle} />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": data.name,
            "applicationCategory": "BusinessApplication",
            "description": data.subtitle,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": data.faqs.map(faq => ({
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

      <nav className="bg-white border-b border-slate-200 px-6 py-3 text-sm">
        <div className="max-w-7xl mx-auto">
          <Link to="/features" className="text-[#0B5FFF] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF]" data-testid="link-back-features">
            ← All Features
          </Link>
          <span className="text-slate-400 mx-2">/</span>
          <span className="text-slate-900">{data.name}</span>
        </div>
      </nav>

      <main className="bg-white">
        {/* 1. Hero band with single authentic image */}
        {customHero ? (
          customHero
        ) : (
          <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" data-testid="heading-hero">
                  {data.name}
                </h1>
                <p className="text-xl text-slate-200 mb-8">
                  {data.subtitle}
                </p>

                {/* KPIs */}
                {data.kpis.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {data.kpis.map((kpi, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur p-4 elev-2" data-testid={`kpi-${idx}`}>
                        <div className="text-3xl font-extrabold text-green-400">{kpi.value}</div>
                        <div className="text-sm text-slate-300">{kpi.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <StartFreeButton
                    size="lg"
                    variant="solid"
                    className="px-6 py-3 font-extrabold"
                  >
                    Start Free
                  </StartFreeButton>
                  <Link
                    to="/pricing"
                    onClick={() => handleCTAClick('hero')}
                    className="px-6 py-3 border-2 border-white text-white font-extrabold hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                    data-testid="button-hero-pricing"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>

              {/* Single hero image */}
              <div className="order-1 lg:order-2 relative">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={heroImageSrc}
                    alt={data.hero.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    width="1600"
                    height="900"
                  />
                </div>
                {data.hero.caption && (
                  <p className="text-xs text-slate-300 mt-2 italic">{data.hero.caption}</p>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Post-hero content (optional) */}
        {postHeroContent}

        {/* 2. What it does */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What it does</h2>
              <p className="text-slate-700 mt-2">Real-time {data.name.toLowerCase()} that keeps everyone in sync.</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="max-w-3xl">
                <ul className="space-y-4">
                  {data.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="text-slate-700">{bullet}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why teams switch (Pain → Solve) with blurred backdrop reuse */}
        <section 
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative"
          style={{
            backgroundImage: `url(${heroImageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why teams switch</h2>
              <p className="text-slate-700 mt-2">From chaos to clarity in one move.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pain */}
              <div className="bg-white ring-1 ring-slate-200 p-6 elev-2">
                <h3 className="font-extrabold text-red-700 text-lg mb-3">Pain</h3>
                <ul className="list-disc pl-5 text-slate-700 space-y-2">
                  {data.pain.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Solve */}
              <div className="bg-white ring-1 ring-slate-200 p-6 elev-2">
                <h3 className="font-extrabold text-green-700 text-lg mb-3">Solve</h3>
                <ul className="list-disc pl-5 text-slate-700 space-y-2">
                  {data.solve.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How it works */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How it works</h2>
              <p className="text-slate-700 mt-2">Three steps to better {data.name.toLowerCase()}.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.steps.map((step, idx) => (
                <div key={idx} className="bg-white ring-1 ring-slate-200 p-6 elev-2">
                  <div className="text-sm font-extrabold text-[#0B5FFF] mb-2">Step {idx + 1}</div>
                  <h3 className="font-extrabold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. In the field (testimonial) */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">In the field</h2>
              <p className="text-slate-700 mt-2">Real results from real contractors.</p>
            </div>

            <div className="bg-white ring-1 ring-slate-200 p-6 sm:p-8 elev-2">
              <blockquote className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                "{data.testimonial.quote}"
              </blockquote>
              <p className="text-slate-700 font-medium">— {data.testimonial.attribution}</p>
            </div>
          </div>
        </section>

        {/* 6. Works with (integrations) */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Works with</h2>
              <p className="text-slate-700 mt-2">Integrates with the tools you already use.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {data.integrations.map((integration) => (
                <div
                  key={integration}
                  className="bg-white ring-1 ring-slate-200 px-4 py-2 font-semibold text-slate-900 elev-2"
                  data-testid={`chip-integration-${integration.toLowerCase().replace(/\//g, '-').replace(/\s/g, '-')}`}
                >
                  {integration}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Mini demo + lead capture */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">See it with your jobs</h2>
              <p className="text-slate-700 mt-2">Book a personalized demo in 60 seconds.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Demo preview with hero image */}
              <div>
                <div className="bg-white ring-1 ring-slate-200 p-6 elev-2">
                  <div className="aspect-[16/9] w-full mb-4">
                    <img
                      src={heroImageSrc}
                      alt="Demo preview"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="1600"
                      height="900"
                    />
                  </div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">See it in 60 seconds</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    {data.bullets.slice(0, 3).map((bullet, idx) => (
                      <li key={idx}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Lead form */}
              <div>
                <div className="bg-slate-50 ring-1 ring-slate-200 p-6 elev-2">
                  {!leadSubmitted ? (
                    <form onSubmit={handleLeadSubmit}>
                      <div className="mb-4">
                        <label htmlFor="lead-email" className="block text-sm font-semibold text-slate-900 mb-2">
                          Email
                        </label>
                        <input
                          id="lead-email"
                          type="email"
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          required
                          className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:border-transparent"
                          data-testid="input-lead-email"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="lead-company" className="block text-sm font-semibold text-slate-900 mb-2">
                          Company
                        </label>
                        <input
                          id="lead-company"
                          type="text"
                          value={leadCompany}
                          onChange={(e) => setLeadCompany(e.target.value)}
                          required
                          className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:border-transparent"
                          data-testid="input-lead-company"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-[#0B5FFF] text-white font-extrabold hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF]"
                        data-testid="button-book-demo"
                      >
                        Book a demo
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <Check className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <p className="text-slate-900 font-semibold">Thanks — we'll reach out within one business day.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Related features - reusing hero image as 1:1 thumbnail */}
        {data.related.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Related features</h2>
                <p className="text-slate-700 mt-2">Complete your workflow.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.related.map((relatedSlug, idx) => {
                  const relatedData = getRelatedFeatureData(relatedSlug);
                  const relatedImageSrc = relatedData ? `/images/features/${relatedData.hero.image}` : '';
                  const relatedName = relatedSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                  
                  return (
                    <Link
                      key={relatedSlug}
                      to={`/features/${relatedSlug}`}
                      className="bg-white ring-1 ring-slate-200 overflow-hidden elev-2 hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF]"
                      data-testid={`card-related-${idx}`}
                    >
                      {relatedImageSrc && (
                        <div className="aspect-square w-full">
                          <img 
                            src={relatedImageSrc} 
                            alt={relatedData?.hero.alt || relatedName}
                            className="w-full h-full object-cover object-center" 
                            loading="lazy" 
                            width="400" 
                            height="400" 
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="font-extrabold text-slate-900">{relatedName}</h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 9. FAQ (accordion) */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">FAQ</h2>
              <p className="text-slate-700 mt-2">Common questions answered.</p>
            </div>

            <div className="space-y-3">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white ring-1 ring-slate-200 elev-2">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF]"
                    aria-expanded={expandedFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                    data-testid={`button-faq-${idx}`}
                  >
                    <span className="font-semibold text-slate-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 transition-transform ${
                        expandedFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === idx && (
                    <div id={`faq-answer-${idx}`} className="px-6 pb-4 text-slate-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Bottom CTA band */}
        <section className="bg-gradient-to-br from-[#0B5FFF] to-blue-600 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Ready to try it?</h2>
            <p className="text-xl text-blue-100 mb-8">Simple pricing. No contracts.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/pricing"
                onClick={() => handleCTAClick('bottom')}
                className="px-6 py-3 border-2 border-white text-white font-extrabold hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                data-testid="button-bottom-pricing"
              >
                View Pricing
              </Link>
              <a
                href="/signup"
                onClick={() => handleCTAClick('bottom')}
                className="px-6 py-3 bg-white text-[#0B5FFF] font-extrabold hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                data-testid="button-bottom-signup"
              >
                Start Free
              </a>
            </div>
          </div>
        </section>

        {/* 11. Sticky bottom CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-3 shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="font-extrabold text-slate-900">{data.name}</div>
              <div className="text-sm text-slate-700">Free forever. No credit card.</div>
            </div>
            <a
              href="/signup"
              onClick={() => handleCTAClick('sticky')}
              className="px-6 py-3 bg-[#0B5FFF] text-white font-extrabold hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF]"
              data-testid="button-sticky-start-free"
            >
              Start Free
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
