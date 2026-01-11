import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { RESOURCES_DESTINATIONS, RESOURCES_HUB_COPY } from "@/data/resourcesHubData";

export function Resources() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedView = useRef(false);

  // Analytics: View tracking
  useEffect(() => {
    if (!sectionRef.current || hasTrackedView.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            if (typeof window.gtag === "function") {
              window.gtag("event", "resources_hub.view", {
                event_category: "engagement",
                event_label: "Resources Hub Section"
              });
            }
            hasTrackedView.current = true;
          }
        });
      },
      { threshold: [0.35] }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle tile click
  const handleTileClick = (key: string) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "resources_hub.tile_click", {
        event_category: "engagement",
        event_label: "Resource Tile Click",
        key
      });
    }
  };

  // Handle view all click
  const handleViewAllClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "resources_hub.view_all_click", {
        event_category: "engagement",
        event_label: "View All Resources Click"
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-[#0A1326] overflow-hidden"
      aria-labelledby="resources-hub-title"
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
          color: "white"
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">
            {RESOURCES_HUB_COPY.eyebrow}
          </p>
          <h2
            id="resources-hub-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {RESOURCES_HUB_COPY.title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl">
            {RESOURCES_HUB_COPY.support}
          </p>
        </div>

        {/* Resource Tiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {RESOURCES_DESTINATIONS.map((resource) => {
            const Icon = resource.icon;
            return (
              <a
                key={resource.key}
                href={resource.href}
                onClick={() => handleTileClick(resource.key)}
                data-testid={`tile-resource-${resource.key}`}
                className="
                  group
                  bg-white/5 border border-white/10 
                  rounded-xl p-6 
                  flex flex-col gap-4
                  hover-elevate active-elevate-2
                  transition-all
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0A1326]
                  min-h-[120px]
                "
              >
                {/* Icon + Title Row */}
                <div className="flex items-start gap-3">
                  <Icon
                    className="w-6 h-6 text-white/80 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {resource.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed">
                  {resource.blurb}
                </p>

                {/* Inline Link */}
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary mt-auto">
                  <span>{resource.linkText}</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer Row */}
        <div className="flex items-center">
          <a
            href={RESOURCES_HUB_COPY.viewAllLink.href}
            onClick={handleViewAllClick}
            data-testid="link-view-all-resources"
            className="
              text-white/70 hover:text-white 
              transition-colors 
              underline decoration-white/30 hover:decoration-white 
              inline-flex items-center gap-2 
              min-h-[44px] 
              text-base font-medium
            "
          >
            {RESOURCES_HUB_COPY.viewAllLink.text}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
