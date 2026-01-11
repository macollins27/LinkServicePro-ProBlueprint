import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IndustryLandingPage } from "@/data/industryLandingPages";
import { industryImages } from "@/data/industryImages";
import featuresData from "@/data/features.json";

interface IndustryLandingTemplateProps {
  industry: IndustryLandingPage;
}

export default function IndustryLandingTemplate({ industry }: IndustryLandingTemplateProps) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const heroImage = industryImages[industry.slug];

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setEmail("");
      setCompany("");
    }, 3000);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `LinkServicePro for ${industry.name}`,
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": industry.subtitle
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://linkservicepro.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": "https://linkservicepro.com/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": industry.name,
        "item": `https://linkservicepro.com/industries/${industry.slug}`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{industry.seoTitle}</title>
        <meta name="description" content={industry.seoDescription} />
        <meta property="og:title" content={industry.seoTitle} />
        <meta property="og:description" content={industry.seoDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={industry.seoTitle} />
        <meta name="twitter:description" content={industry.seoDescription} />
        <link rel="canonical" href={`https://linkservicepro.com/industries/${industry.slug}`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main className="min-h-screen">
        {/* Breadcrumbs */}
        <nav className="px-4 sm:px-6 lg:px-8 py-4 max-w-6xl mx-auto text-sm">
          <ol className="flex items-center gap-2 text-slate-600">
            <li><Link to="/" className="hover:text-[#0B5FFF]">Home</Link></li>
            <li>/</li>
            <li><Link to="/industries" className="hover:text-[#0B5FFF]">Industries</Link></li>
            <li>/</li>
            <li className="text-slate-900 font-semibold">{industry.name}</li>
          </ol>
        </nav>

        {/* Section 1: Hero */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4" data-testid={`heading-${industry.slug}`}>
                  {industry.name} Software
                </h1>
                <p className="text-lg sm:text-xl text-slate-700 mb-6">{industry.subtitle}</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {industry.kpis.map((kpi, index) => (
                    <div key={index} className="bg-white border border-slate-200 p-4">
                      <div className="text-2xl font-extrabold text-[#0B5FFF]" data-testid={`kpi-value-${index}`}>{kpi.value}</div>
                      <div className="text-sm text-slate-600 mt-1">{kpi.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#demo"
                    className="px-6 py-3 font-extrabold bg-slate-900 text-white rounded-none hover-elevate active-elevate-2"
                    data-testid="button-start-free"
                  >
                    Start Free
                  </a>
                  <a
                    href="#pricing"
                    className="px-6 py-3 font-extrabold border-2 border-slate-900 text-slate-900 rounded-none hover-elevate active-elevate-2"
                    data-testid="button-view-pricing"
                  >
                    View Pricing
                  </a>
                </div>
              </div>

              <div>
                <img
                  src={heroImage}
                  alt={industry.imageAlt}
                  className="w-full h-auto ring-1 ring-slate-200"
                  data-testid="hero-image"
                />
                <p className="text-sm text-slate-500 mt-2 italic">{industry.imageCaption}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What it does */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              What it does for {industry.name}
            </h2>
            <p className="text-slate-700 mb-6">Three ways LinkServicePro changes the game.</p>

            <ul className="space-y-4">
              {industry.whatItDoes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="h-6 w-6 bg-[#0B5FFF] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-slate-800">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Jobs you can run */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Jobs you can run
            </h2>
            <p className="text-slate-700 mb-6">Common job types for {industry.name.toLowerCase()} businesses.</p>

            <div className="flex flex-wrap gap-3">
              {industry.jobs.map((job, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white border border-slate-300 text-slate-900 font-semibold"
                  data-testid={`job-chip-${index}`}
                >
                  {job}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Why teams switch (Pain → Solve) */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div
            className="absolute inset-0 -z-10 opacity-20 blur-lg"
            style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 text-center">
              Why teams switch
            </h2>
            <p className="text-slate-700 mb-8 text-center">Old way vs. new way.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-red-200 p-6 sm:p-8">
                <h3 className="text-xl font-extrabold text-red-900 mb-4">Pain</h3>
                <ul className="space-y-3">
                  {industry.pains.map((pain, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 flex-shrink-0 mt-1">✗</span>
                      <span className="text-slate-800">{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border-2 border-green-200 p-6 sm:p-8">
                <h3 className="text-xl font-extrabold text-green-900 mb-4">Solve</h3>
                <ul className="space-y-3">
                  {industry.solves.map((solve, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 flex-shrink-0 mt-1">✓</span>
                      <span className="text-slate-800">{solve}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: How it works (3 steps) */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              How it works for {industry.name}
            </h2>
            <p className="text-slate-700 mb-8">Three steps to better operations.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industry.howItWorks.map((step) => (
                <div key={step.step} className="bg-white border border-slate-200 p-6">
                  <div className="text-4xl font-extrabold text-[#0B5FFF] mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: In the field (Testimonial) */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
              In the field
            </h2>

            <div className="bg-white border border-slate-200 p-8">
              <div className="text-amber-500 text-2xl mb-4" aria-hidden="true">★★★★★</div>
              <blockquote className="text-lg text-slate-800 mb-4 italic">
                "{industry.testimonial.quote}"
              </blockquote>
              <div className="text-slate-900">
                <span className="font-semibold">{industry.testimonial.name}</span>
                <span className="text-slate-600"> · {industry.testimonial.role}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Features used most */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Features {industry.name} uses most
            </h2>
            <p className="text-slate-700 mb-8">The tools that move the needle.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.featuresUsedMost.map((featureSlug) => {
                const feature = featuresData.find((f: { slug: string }) => f.slug === featureSlug);
                if (!feature) return null;
                
                return (
                  <Link
                    key={feature.slug}
                    to={`/features/${feature.slug}`}
                    className="block bg-white border border-slate-200 p-6 hover-elevate"
                    data-testid={`feature-card-${feature.slug}`}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.name}</h3>
                    <p className="text-slate-700 text-sm mb-3">{feature.hook}</p>
                    <span className="text-[#0B5FFF] font-semibold text-sm">Learn more →</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 8: Integrations */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Integrations
            </h2>
            <p className="text-slate-700 mb-6">Works with the tools you already use.</p>

            <div className="flex flex-wrap gap-3">
              {industry.integrations.map((integration, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white border border-slate-300 text-slate-900 font-semibold"
                  data-testid={`integration-chip-${index}`}
                >
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Mini demo + lead capture */}
        <section id="demo" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div
                  className="w-full h-64 sm:h-80 bg-slate-200 flex items-center justify-center relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 blur-md opacity-60"
                    style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
                  />
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-2">▶</div>
                    <p className="text-slate-900 font-bold">See it in 60 seconds</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-6 sm:p-8">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  See it with your jobs
                </h3>
                <p className="text-slate-700 mb-4">Get a personalized walkthrough for your business.</p>

                {formSubmitted ? (
                  <div className="text-green-700 font-semibold py-4" data-testid="form-success">
                    Thanks! We'll be in touch soon.
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF]"
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF]"
                        data-testid="input-company"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 font-extrabold bg-slate-900 text-white rounded-none hover-elevate active-elevate-2"
                      data-testid="button-submit-demo"
                    >
                      Get Demo
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: FAQ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              FAQ for {industry.name}
            </h2>
            <p className="text-slate-700 mb-8">Common questions, straight answers.</p>

            <Accordion type="single" collapsible className="space-y-3">
              {industry.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-slate-200 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-4">
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

        {/* Section 11: Bottom CTA band */}
        <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-900">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to try it?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Free forever for your first two users. Add more as you grow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#demo"
                className="px-8 py-4 font-extrabold bg-white text-slate-900 rounded-none hover-elevate active-elevate-2"
                data-testid="button-get-started-cta"
              >
                Get Started Free
              </a>
              <a
                href="/features"
                className="px-8 py-4 font-extrabold border-2 border-white text-white rounded-none hover-elevate active-elevate-2"
                data-testid="button-see-all-features-cta"
              >
                See All Features
              </a>
            </div>
          </div>
        </section>

        {/* Section 12: Sticky bottom CTA */}
        {showStickyCTA && (
          <div
            className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 px-4 py-3 z-50"
            data-testid="sticky-cta"
          >
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
              <div className="text-white font-semibold">
                Start managing your {industry.name.toLowerCase()} business better
              </div>
              <div className="flex gap-3">
                <a
                  href="#demo"
                  className="px-6 py-2 font-extrabold bg-white text-slate-900 rounded-none hover-elevate active-elevate-2 text-sm"
                  data-testid="button-sticky-start-free"
                >
                  Start Free
                </a>
                <a
                  href="/features"
                  className="px-6 py-2 font-extrabold border border-white text-white rounded-none hover-elevate active-elevate-2 text-sm"
                  data-testid="button-sticky-features"
                >
                  Features
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
