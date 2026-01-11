import { ArrowRight } from "lucide-react";

const INDUSTRY_GROUPS = [
  {
    title: "Cleaning & Surfaces",
    slug: "cleaning",
    items: [
      { name: "Cleaning", slug: "cleaning", benefit: "Route clusters save 30% fuel" },
      { name: "Janitorial Cleaning", slug: "janitorial-cleaning", benefit: "Recurring schedules set once" },
      { name: "Pressure Washing", slug: "pressure-washing", benefit: "Before/after photos in portal" },
      { name: "Window Cleaning", slug: "window-cleaning", benefit: "Multi-story job tracking" },
    ],
  },
  {
    title: "Grounds & Seasonal",
    slug: "grounds",
    items: [
      { name: "Lawn Care", slug: "lawn-care", benefit: "Seasonal reminders automated" },
      { name: "Tree Care", slug: "tree-care", benefit: "Crew safety checklists built-in" },
      { name: "Landscaping", slug: "landscaping", benefit: "Material tracking per project" },
      { name: "Snow Removal", slug: "snow-removal", benefit: "Emergency dispatch in seconds" },
    ],
  },
  {
    title: "Building & Trades",
    slug: "trades",
    items: [
      { name: "General Contracting", slug: "general-contracting", benefit: "Permits and docs in one place" },
      { name: "Handyman", slug: "handyman", benefit: "Flexible pricing, quick quotes" },
      { name: "Plumbing", slug: "plumbing", benefit: "Parts inventory sync" },
      { name: "HVAC", slug: "hvac", benefit: "Service agreements tracked" },
      { name: "Electrical", slug: "electrical", benefit: "Code compliance forms" },
      { name: "Painting", slug: "painting", benefit: "Job costing per room" },
      { name: "Roofing", slug: "roofing", benefit: "Insurance docs organized" },
    ],
  },
];

export default function IndustriesGrid() {
  const handleIndustryClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    console.log(`Industry clicked: ${slug}`);
  };

  const handleGroupClick = (e: React.MouseEvent, groupSlug: string) => {
    e.preventDefault();
    console.log(`Industry group clicked: ${groupSlug}`);
  };

  const cleaningSurfaces = INDUSTRY_GROUPS[0];
  const groundsSeasonal = INDUSTRY_GROUPS[1];
  const buildingTrades = INDUSTRY_GROUPS[2];
  
  // Split Building & Trades into two columns (4 + 3)
  const buildingTradesCol1 = buildingTrades.items.slice(0, 4);
  const buildingTradesCol2 = buildingTrades.items.slice(4);

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-industries-heading">
            Built for Your Trade
          </h2>
          <p className="text-lg text-foreground/80">
            Field service teams across 15+ industries trust LinkServicePro.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Column 1: Cleaning & Surfaces */}
          <div className="space-y-6">
            <a
              href={`#industries/${cleaningSurfaces.slug}`}
              onClick={(e) => handleGroupClick(e, cleaningSurfaces.slug)}
              className="block text-xl font-bold text-foreground text-center link-underline focus-outline"
              data-testid={`link-industry-group-${cleaningSurfaces.slug}`}
            >
              {cleaningSurfaces.title}
            </a>
            <div className="space-y-4">
              {cleaningSurfaces.items.map((industry) => (
                <div
                  key={industry.slug}
                  className="card-notch bg-card border border-card-border p-6 space-y-3 hover-elevate"
                  data-testid={`card-industry-${industry.slug}`}
                >
                  <h3 className="text-lg font-bold text-foreground" data-testid={`text-industry-name-${industry.slug}`}>
                    {industry.name}
                  </h3>
                  <p className="text-sm text-foreground/70" data-testid={`text-industry-benefit-${industry.slug}`}>
                    {industry.benefit}
                  </p>
                  <a
                    href={`#industries/${industry.slug}`}
                    onClick={(e) => handleIndustryClick(e, industry.slug)}
                    className="inline-flex items-center gap-2 text-sm text-primary font-medium link-underline focus-outline"
                    data-testid={`link-industry-details-${industry.slug}`}
                  >
                    See workflows <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Grounds & Seasonal */}
          <div className="space-y-6">
            <a
              href={`#industries/${groundsSeasonal.slug}`}
              onClick={(e) => handleGroupClick(e, groundsSeasonal.slug)}
              className="block text-xl font-bold text-foreground text-center link-underline focus-outline"
              data-testid={`link-industry-group-${groundsSeasonal.slug}`}
            >
              {groundsSeasonal.title}
            </a>
            <div className="space-y-4">
              {groundsSeasonal.items.map((industry) => (
                <div
                  key={industry.slug}
                  className="card-notch bg-card border border-card-border p-6 space-y-3 hover-elevate"
                  data-testid={`card-industry-${industry.slug}`}
                >
                  <h3 className="text-lg font-bold text-foreground" data-testid={`text-industry-name-${industry.slug}`}>
                    {industry.name}
                  </h3>
                  <p className="text-sm text-foreground/70" data-testid={`text-industry-benefit-${industry.slug}`}>
                    {industry.benefit}
                  </p>
                  <a
                    href={`#industries/${industry.slug}`}
                    onClick={(e) => handleIndustryClick(e, industry.slug)}
                    className="inline-flex items-center gap-2 text-sm text-primary font-medium link-underline focus-outline"
                    data-testid={`link-industry-details-${industry.slug}`}
                  >
                    See workflows <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Columns 3 & 4: Building & Trades */}
          <div className="lg:col-span-2 space-y-6">
            {/* Centered title spanning both columns */}
            <a
              href={`#industries/${buildingTrades.slug}`}
              onClick={(e) => handleGroupClick(e, buildingTrades.slug)}
              className="block text-xl font-bold text-foreground text-center link-underline focus-outline"
              data-testid={`link-industry-group-${buildingTrades.slug}`}
            >
              {buildingTrades.title}
            </a>

            {/* Two-column grid for Building & Trades cards */}
            <div className="grid grid-cols-2 gap-8">
              {/* Column 3: First 4 cards */}
              <div className="space-y-4">
                {buildingTradesCol1.map((industry) => (
                  <div
                    key={industry.slug}
                    className="card-notch bg-card border border-card-border p-6 space-y-3 hover-elevate"
                    data-testid={`card-industry-${industry.slug}`}
                  >
                    <h3 className="text-lg font-bold text-foreground" data-testid={`text-industry-name-${industry.slug}`}>
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-industry-benefit-${industry.slug}`}>
                      {industry.benefit}
                    </p>
                    <a
                      href={`#industries/${industry.slug}`}
                      onClick={(e) => handleIndustryClick(e, industry.slug)}
                      className="inline-flex items-center gap-2 text-sm text-primary font-medium link-underline focus-outline"
                      data-testid={`link-industry-details-${industry.slug}`}
                    >
                      See how it works <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Column 4: Remaining 3 cards */}
              <div className="space-y-4">
                {buildingTradesCol2.map((industry) => (
                  <div
                    key={industry.slug}
                    className="card-notch bg-card border border-card-border p-6 space-y-3 hover-elevate"
                    data-testid={`card-industry-${industry.slug}`}
                  >
                    <h3 className="text-lg font-bold text-foreground" data-testid={`text-industry-name-${industry.slug}`}>
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-industry-benefit-${industry.slug}`}>
                      {industry.benefit}
                    </p>
                    <a
                      href={`#industries/${industry.slug}`}
                      onClick={(e) => handleIndustryClick(e, industry.slug)}
                      className="inline-flex items-center gap-2 text-sm text-primary font-medium link-underline focus-outline"
                      data-testid={`link-industry-details-${industry.slug}`}
                    >
                      See how it works <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
