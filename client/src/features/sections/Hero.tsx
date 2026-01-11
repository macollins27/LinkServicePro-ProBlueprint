import { Helmet } from "react-helmet-async";
import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

interface HeroProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  outcomes: string[];
  seo: {
    title: string;
    description: string;
    canonical?: string;
  };
  schemaFeatureList?: string[];
  slug: string;
}

export default function Hero({
  title,
  subtitle,
  heroImage,
  outcomes,
  seo,
  schemaFeatureList,
  slug
}: HeroProps) {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {seo.canonical && <link rel="canonical" href={seo.canonical} />}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        {seo.canonical && <meta property="og:url" content={seo.canonical} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        
        {schemaFeatureList && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": `LinkServicePro ${title}`,
              "applicationCategory": "BusinessApplication",
              "description": seo.description,
              "featureList": schemaFeatureList,
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31"
              }
            })}
          </script>
        )}
      </Helmet>

      <section 
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden"
        data-testid="feature-hero"
      >
        {/* Blueprint grid background */}
        <div className="absolute inset-0 bg-blueprint opacity-10" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                {title}
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 mb-6">
                {subtitle}
              </p>

              {/* Outcomes */}
              <ul className="space-y-3 mb-8">
                {outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg 
                      className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-lg text-slate-100">{outcome}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <ButtonsRow>
                <StartFreeButton context="dark" dataTestId="hero-start-free" />
                <ViewPricingButton context="dark" dataTestId="hero-view-pricing" />
              </ButtonsRow>
            </div>

            {/* Right: Hero Image (optional) */}
            {heroImage && (
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm ring-1 ring-white/20 p-4">
                  <img
                    src={heroImage}
                    alt={`${title} interface`}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
