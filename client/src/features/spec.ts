export type FeatureSpec = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  outcomes: string[];
  showInstantDemo?: boolean;
  instantDemoConfig?: {
    component?: React.ComponentType<any>;
  };
  pains?: string[];
  solves?: string[];
  painSolveHeading?: string;
  painSolveSubheading?: string;
  steps?: { title: string; desc: string }[];
  stepsHeading?: string;
  stepsSubheading?: string;
  testimonial?: { 
    quote: string; 
    by: string; 
    chips?: string[];
  };
  faq?: { q: string; a: string }[];
  integrations?: string[];
  related?: { slug: string; title: string; description: string }[];
  seo: { 
    title: string; 
    description: string; 
    canonical?: string;
  };
  schemaFeatureList?: string[];
  ctas?: { 
    primaryText?: string; 
    secondaryText?: string;
  };
  bottomCtaTitle?: string;
  bottomCtaSubtitle?: string;
};
