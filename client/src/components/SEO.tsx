import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

export default function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "/og-image.png",
  jsonLd
}: SEOProps) {
  const fullTitle = `${title} | LinkServicePro`;
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://linkservicepro.com";
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : typeof window !== "undefined" ? window.location.href : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="LinkServicePro" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
        </script>
      )}
    </Helmet>
  );
}

// Common JSON-LD schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LinkServicePro",
  "description": "Field service management software for contractors and service businesses",
  "url": "https://linkservicepro.com",
  "logo": "https://linkservicepro.com/logo.png",
  "sameAs": [
    "https://twitter.com/linkservicepro",
    "https://facebook.com/linkservicepro",
    "https://linkedin.com/company/linkservicepro"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "Customer Service",
    "email": "support@linkservicepro.com",
    "availableLanguage": "English"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LinkServicePro",
  "url": "https://linkservicepro.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://linkservicepro.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LinkServicePro",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "29",
    "highPrice": "249",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "29",
      "priceCurrency": "USD",
      "billingDuration": "P1M"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "ratingCount": "487",
    "bestRating": "5",
    "worstRating": "1"
  },
  "description": "Field service management software for contractors. Schedule crews, dispatch jobs, send quotes, collect payments, and grow your business."
};
