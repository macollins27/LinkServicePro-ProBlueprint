import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getIndustryDetail } from "@/data/industries-details";
import { INDUSTRIES_CAROUSEL } from "@/data/industries-carousel";
import IndustryHero from "@/sections/industries/IndustryHero";
import IndustryOutcomes from "@/sections/industries/IndustryOutcomes";
import IndustryWorkflowTabs from "@/sections/industries/IndustryWorkflowTabs";
import IndustryPainSolution from "@/sections/industries/IndustryPainSolution";
import IndustryFeatureGrid from "@/sections/industries/IndustryFeatureGrid";
import IndustryCalendarsBand from "@/sections/industries/IndustryCalendarsBand";
import IndustryPricingTeaser from "@/sections/industries/IndustryPricingTeaser";
import IndustryTestimonial from "@/sections/industries/IndustryTestimonial";
import IndustryFAQ from "@/sections/industries/IndustryFAQ";
import IndustryResources from "@/sections/industries/IndustryResources";
import IndustryFinalCTA from "@/sections/industries/IndustryFinalCTA";
import NotFound from "./not-found";

// Default data for industries without detailed records
const DEFAULT_PAINS = [
  { pain: "Manual scheduling wastes time", fix: "Drag-and-drop calendar with crew assignments" },
  { pain: "Quotes get lost in email", fix: "Digital estimates with e-signature and auto-reminders" },
  { pain: "Customers forget appointments", fix: "Automated SMS and email notifications" },
  { pain: "Getting paid takes too long", fix: "Online payments with instant deposits" },
];

const DEFAULT_FAQ = [
  { q: "Do I need separate accounts for each technician?", a: "No. All paid plans include unlimited users with role-based access." },
  { q: "Can I sync with Google/Apple Calendar?", a: "Yes. Two-way calendar sync keeps crews aligned without extra steps." },
  { q: "How do estimates become invoices?", a: "Convert with one tap, collect deposits, and accept partial payments online." },
  { q: "Can I set up recurring service contracts?", a: "Yes. Essential and above support recurring jobs with automated scheduling." },
  { q: "Do customers get a portal?", a: "Yes. Customers can view quotes, invoices, and pay online anytime." },
];

const DEFAULT_TYPICAL_JOBS = [25, 75, 150, 350, 600];

export default function IndustryDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";

  // Get basic industry info from carousel
  const basicIndustry = INDUSTRIES_CAROUSEL.find((ind) => ind.slug === slug);
  
  if (!basicIndustry) {
    return <NotFound />;
  }

  // Get detailed industry info or use defaults
  const detailIndustry = getIndustryDetail(slug);
  
  const industryName = detailIndustry?.name || basicIndustry.name;
  const heroSubhead = detailIndustry?.hero.subhead || 
    `Schedule jobs, dispatch crews, send estimates with e-sign, and get paid faster.`;
  const pains = detailIndustry?.pains || DEFAULT_PAINS;
  const faqs = detailIndustry?.faq || DEFAULT_FAQ;
  const testimonial = detailIndustry?.testimonial;
  const typicalJobs = detailIndustry?.typicalJobs || DEFAULT_TYPICAL_JOBS;

  // SEO metadata
  const pageTitle = `${industryName} Field Service Software | LinkServicePro`;
  const pageDescription = `${industryName} software to schedule, dispatch, and get paid. ${heroSubhead.substring(0, 120)}`;

  // JSON-LD Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://linkservicepro.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": "https://linkservicepro.com/industries",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": industryName,
        "item": `https://linkservicepro.com/industries/${slug}`,
      },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkServicePro",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "247",
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://linkservicepro.com/industries/${slug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* 1. Hero */}
        <IndustryHero 
          name={industryName} 
          subhead={heroSubhead} 
          slug={slug}
        />

        {/* 2. Outcomes */}
        <IndustryOutcomes />

        {/* 3. Workflow Tabs */}
        <IndustryWorkflowTabs slug={slug} />

        {/* 4. Pain → Solution */}
        <IndustryPainSolution pains={pains} />

        {/* 5. Feature Grid */}
        <IndustryFeatureGrid />

        {/* 6. Calendars Band */}
        <IndustryCalendarsBand />

        {/* 7. Pricing Teaser */}
        <IndustryPricingTeaser 
          typicalJobs={typicalJobs} 
          slug={slug}
        />

        {/* 8. Testimonial (conditional) */}
        <IndustryTestimonial testimonial={testimonial} />

        {/* 9. FAQ */}
        <IndustryFAQ faqs={faqs} industryName={industryName} />

        {/* 10. Resources */}
        <IndustryResources />

        {/* 11. Final CTA */}
        <IndustryFinalCTA slug={slug} />
      </div>
    </>
  );
}
