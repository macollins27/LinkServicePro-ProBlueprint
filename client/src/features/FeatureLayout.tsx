import { useEffect } from "react";
import { FeatureSpec } from "./spec";
import Hero from "./sections/Hero";
import PainSolve from "./sections/PainSolve";
import HowItWorks3 from "./sections/HowItWorks3";
import ProofFAQ from "./sections/ProofFAQ";
import MiniDemoLead from "./sections/MiniDemoLead";
import IntegrationsStrip from "./sections/IntegrationsStrip";
import RelatedFeatures3 from "./sections/RelatedFeatures3";
import BottomCTABand from "./sections/BottomCTABand";
import StickyBottomCTA from "@/components/StickyBottomCTA";

interface FeatureLayoutProps {
  spec: FeatureSpec;
}

export default function FeatureLayout({ spec }: FeatureLayoutProps) {
  // Fire page view analytics
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', { 
        page_title: spec.title,
        page: spec.slug,
        feature: spec.slug
      });
    }
  }, [spec.slug, spec.title]);

  return (
    <main className="bg-white">
      {/* Hero (always shown) */}
      <Hero
        title={spec.title}
        subtitle={spec.subtitle}
        heroImage={spec.heroImage}
        outcomes={spec.outcomes}
        seo={spec.seo}
        schemaFeatureList={spec.schemaFeatureList}
        slug={spec.slug}
      />

      {/* InstantDemo (optional, custom component) */}
      {spec.showInstantDemo && spec.instantDemoConfig?.component && (
        <spec.instantDemoConfig.component />
      )}

      {/* PainSolve (optional) */}
      {spec.pains && spec.solves && (
        <PainSolve 
          pains={spec.pains} 
          solves={spec.solves}
          heading={spec.painSolveHeading}
          subheading={spec.painSolveSubheading}
        />
      )}

      {/* How It Works 3 Steps (optional) */}
      {spec.steps && spec.steps.length > 0 && (
        <HowItWorks3 
          steps={spec.steps}
          heading={spec.stepsHeading}
          subheading={spec.stepsSubheading}
        />
      )}

      {/* Proof + FAQ (optional) */}
      {(spec.testimonial || spec.faq) && (
        <ProofFAQ testimonial={spec.testimonial} faq={spec.faq} />
      )}

      {/* Mini Demo Lead (optional) */}
      {spec.showInstantDemo !== true && (
        <MiniDemoLead featureName={spec.title} />
      )}

      {/* Integrations Strip (optional) */}
      <IntegrationsStrip integrations={spec.integrations} />

      {/* Related Features (optional) */}
      {spec.related && spec.related.length > 0 && (
        <RelatedFeatures3 features={spec.related} />
      )}

      {/* Bottom CTA Band (always shown) */}
      <BottomCTABand 
        variant="light"
        title={spec.bottomCtaTitle}
        subtitle={spec.bottomCtaSubtitle}
      />

      {/* Sticky Bottom CTA (always shown) */}
      <StickyBottomCTA featureName={spec.title} />
    </main>
  );
}
