import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FEATURE_META } from "@/data/features";
import { FEATURES_DETAILS } from "@/data/features-details";
import { featureLandingPages, getLandingPageData } from "@/data/featureLandingPages";
import FeatureLandingTemplate from "@/components/FeatureLandingTemplate";
import NotFound from "./not-found";

import FeatureHero from "@/sections/features/FeatureHero";
import FeatureVerticalAngles from "@/sections/features/FeatureVerticalAngles";
import FeatureHowItWorks from "@/sections/features/FeatureHowItWorks";
import FeatureCapabilities from "@/sections/features/FeatureCapabilities";
import FeaturePlanAvailability from "@/sections/features/FeaturePlanAvailability";
import FeatureCalendarsBand from "@/sections/features/FeatureCalendarsBand";
import FeatureTestimonial from "@/sections/features/FeatureTestimonial";
import FeatureFAQ from "@/sections/features/FeatureFAQ";
import FeatureFinalCTA from "@/sections/features/FeatureFinalCTA";

export default function DynamicFeatureLanding() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <NotFound />;
  }

  // Check if this slug exists in featureLandingPages first
  const landingPageData = getLandingPageData(slug);
  if (landingPageData) {
    return <FeatureLandingTemplate data={landingPageData} />;
  }

  // Fall back to 9-section template system
  const meta = FEATURE_META.find(f => f.slug === slug);
  if (!meta) {
    return <NotFound />;
  }

  // Get feature details (with fallback to basic meta if detail not found)
  const detail = FEATURES_DETAILS[slug];
  if (!detail) {
    // Fallback to basic rendering if detail not found
    return <NotFound />;
  }

  // JSON-LD Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://linkservicepro.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Features",
        "item": "https://linkservicepro.com/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": detail.heroHeadline,
        "item": `https://linkservicepro.com/features/${slug}`
      }
    ]
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": detail.heroHeadline,
    "applicationCategory": detail.seoTitle,
    "offers": {
      "@type": "Offer",
      "name": detail.minPlanLabel,
      "price": detail.minPlanLabel === "Free" ? "0" : "Contact for pricing"
    },
    "description": detail.heroSubhead
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": detail.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{detail.seoTitle}</title>
        <meta name="description" content={detail.heroSubhead} />
        <link rel="canonical" href={`https://linkservicepro.com/features/${slug}`} />
        
        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(softwareAppSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main>
        {/* (A) Hero */}
        <FeatureHero
          headline={detail.heroHeadline}
          subhead={detail.heroSubhead}
          heroStats={detail.heroStats}
          minPlanLabel={detail.minPlanLabel}
          slug={slug}
          Icon={meta.Icon}
        />

        {/* (B) Vertical Angles - HVAC/Plumbing/Electrical */}
        <FeatureVerticalAngles verticalAngles={detail.verticalAngles} />

        {/* (C) How It Works */}
        <FeatureHowItWorks steps={detail.steps} />

        {/* (D) Capabilities */}
        <FeatureCapabilities capabilities={detail.capabilities} />

        {/* (E) Plan Availability */}
        <FeaturePlanAvailability
          minPlanLabel={detail.minPlanLabel}
          planNotes={detail.planNotes}
        />

        {/* (F) Calendars Band */}
        <FeatureCalendarsBand />

        {/* (G) Testimonial (optional) */}
        {detail.quote && <FeatureTestimonial quote={detail.quote} />}

        {/* (H) FAQ */}
        <FeatureFAQ faq={detail.faq} />

        {/* (I) Final CTA */}
        <FeatureFinalCTA />
      </main>
    </>
  );
}
