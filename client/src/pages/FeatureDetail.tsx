import { useParams, Navigate, Link } from "react-router-dom";
import featuresData from "@/data/features.json";
import SectionHeader from "@/components/SectionHeader";
import StickyBar from "@/components/StickyBar";
import SEO from "@/components/SEO";
import {
  HeroStats,
  WhatItDoes,
  VisualMock,
  HowItWorks,
  Proof,
  PainSolve,
  WorksWith,
  Related,
  CTA,
} from "@/components/FeatureBlocks";

interface Feature {
  slug: string;
  name: string;
  cluster: string;
  hook: string;
  bullets: string[];
  kpis: { label: string; value: string }[];
  heroSubtitle: string;
  pains?: string[];
  solves?: string[];
  how: { step: string; desc: string }[];
  proof: { quote: string; person: string };
  integrations: string[];
  related: string[];
}

const features = featuresData as Feature[];

export default function FeatureDetail() {
  const { slug } = useParams<{ slug: string }>();
  const feature = features.find((f) => f.slug === slug);

  if (!feature) {
    return <Navigate to="/features" replace />;
  }

  const relatedFeatures = feature.related
    .map((relSlug) => features.find((f) => f.slug === relSlug))
    .filter((f): f is Feature => f !== undefined)
    .map((f) => ({
      slug: f.slug,
      name: f.name,
      hook: f.hook,
    }));

  return (
    <>
      <SEO
        title={`${feature.name} | LinkServicePro`}
        description={`${feature.hook} ${feature.heroSubtitle}`}
      />

      <nav className="bg-white border-b border-slate-200 px-6 py-3 text-sm">
        <div className="max-w-7xl mx-auto">
          <Link to="/features" className="text-[#0B5FFF] font-semibold hover:underline" data-testid="link-back-features">
            ← All Features
          </Link>
          <span className="text-slate-400 mx-2">/</span>
          <span className="text-slate-900">{feature.name}</span>
        </div>
      </nav>

      <main className="bg-white min-h-screen px-6 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title={feature.name}
            subtitle={feature.heroSubtitle}
            as="h1"
          />

          <HeroStats kpis={feature.kpis} />

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <WhatItDoes bullets={feature.bullets} />
            <VisualMock />
          </div>

          <PainSolve pains={feature.pains} solves={feature.solves} />

          <HowItWorks items={feature.how} />

          <Proof quote={feature.proof.quote} person={feature.proof.person} />

          <WorksWith list={feature.integrations} />

          <Related items={relatedFeatures} />

          <CTA />
        </div>
      </main>
      
      <StickyBar href="/signup" label="Start Free" />
    </>
  );
}
