import { useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ChevronRight as Arrow } from "lucide-react";
import { motion } from "framer-motion";
import { INDUSTRIES_CAROUSEL } from "@/data/industries-carousel";
import * as Icons from "lucide-react";

// Helper to safely get icon component
function getIcon(iconName: string) {
  const IconComponent = (Icons as any)[iconName];
  return IconComponent || Icons.Wrench;
}

export default function IndustryCarouselPro() {
  const [filter, setFilter] = useState("");
  const [showChevron, setShowChevron] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Filter industries
  const filteredIndustries = useMemo(() => {
    if (!filter.trim()) return INDUSTRIES_CAROUSEL;
    const searchTerm = filter.toLowerCase();
    return INDUSTRIES_CAROUSEL.filter((industry) =>
      industry.name.toLowerCase().includes(searchTerm)
    );
  }, [filter]);

  // Scroll functions
  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const scrollAmount = trackRef.current.offsetWidth * 0.8;
    trackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroll("left");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scroll("right");
    }
  };

  return (
    <section
      role="region"
      aria-label="Industry selection"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Built for Your Trade
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Workflows tailored to your industry
        </p>
      </div>

      {/* Filter Input */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Filter trades..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:border-transparent transition-shadow"
          data-testid="input-filter-trades"
          aria-label="Filter trades by name"
        />
      </div>

      {/* No results message */}
      {filteredIndustries.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground" data-testid="text-no-results">
            No trades found
          </p>
        </div>
      )}

      {/* Carousel Container - Mobile/Tablet/Desktop (hide at xl+) */}
      {filteredIndustries.length > 0 && (
        <div className="block xl:hidden relative">
          {/* Prev/Next Buttons (md+ only) */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous industries"
            aria-controls="industry-track"
            className="max-md:hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg hover:bg-white hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next industries"
            aria-controls="industry-track"
            className="max-md:hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg hover:bg-white hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={trackRef}
            id="industry-track"
            role="region"
            aria-roledescription="carousel"
            aria-label="Industries"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="flex gap-4 overflow-x-scroll snap-x snap-mandatory -mx-4 px-4 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2 rounded-lg"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {filteredIndustries.map((industry, index) => {
              const IconComponent = getIcon(industry.icon);
              return (
                <IndustryCard
                  key={industry.slug}
                  industry={industry}
                  IconComponent={IconComponent}
                  index={index}
                  showChevron={showChevron === industry.slug}
                  onMouseEnter={() => setShowChevron(industry.slug)}
                  onMouseLeave={() => setShowChevron(null)}
                  onFocus={() => setShowChevron(industry.slug)}
                  onBlur={() => setShowChevron(null)}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Desktop Grid (xl+ only, 1280px+) */}
      {filteredIndustries.length > 0 && (
        <div className="hidden xl:grid grid-cols-6 gap-5">
          {filteredIndustries.map((industry, index) => {
            const IconComponent = getIcon(industry.icon);
            return (
              <IndustryCard
                key={industry.slug}
                industry={industry}
                IconComponent={IconComponent}
                index={index}
                showChevron={showChevron === industry.slug}
                onMouseEnter={() => setShowChevron(industry.slug)}
                onMouseLeave={() => setShowChevron(null)}
                onFocus={() => setShowChevron(industry.slug)}
                onBlur={() => setShowChevron(null)}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

// Industry Card Component
interface IndustryCardProps {
  industry: typeof INDUSTRIES_CAROUSEL[0];
  IconComponent: any;
  index: number;
  showChevron: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
}

function IndustryCard({
  industry,
  IconComponent,
  index,
  showChevron,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}: IndustryCardProps) {
  return (
    <motion.div
      className="snap-start flex-shrink-0 min-w-[200px] sm:min-w-[220px] xl:min-w-0"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Gradient Border Wrapper */}
      <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden group">
        {/* Gradient ring */}
        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#0B5FFF] via-[#0FB36F] to-[#0B5FFF] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />

        {/* Inner Card */}
        <Link
          to={`/industries/${industry.slug}`}
          className="absolute inset-[2px] bg-white rounded-[14px] h-full p-4 sm:p-5 flex flex-col items-start justify-between transition-shadow group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2"
          aria-label={`View ${industry.name} workflows`}
          title={industry.name}
          data-testid={`card-industry-${industry.slug}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {/* Icon */}
          <div className="text-3xl sm:text-4xl text-[#0B5FFF]">
            <IconComponent className="w-9 h-9 sm:w-10 sm:h-10" aria-hidden="true" />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-end w-full">
            <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
              {industry.name}
            </h3>
            {industry.benefit && (
              <p className="mt-1 text-xs text-muted-foreground">
                {industry.benefit}
              </p>
            )}

            {/* Chevron on hover/focus */}
            {showChevron && (
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="mt-2 flex items-center gap-1 text-xs text-[#0B5FFF] font-medium"
              >
                <span>View workflow</span>
                <Arrow className="w-3 h-3" />
              </motion.div>
            )}
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

