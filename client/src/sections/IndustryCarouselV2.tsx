import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { INDUSTRIES_CAROUSEL } from "@/data/industries-carousel";
import * as Icons from "lucide-react";

// Helper to safely get icon component
function getIcon(iconName: string) {
  const IconComponent = (Icons as any)[iconName];
  return IconComponent || Icons.Wrench;
}

export default function IndustryCarouselV2() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardsPerView, setCardsPerView] = useState(2.2);
  const [currentGroup, setCurrentGroup] = useState(0);

  // Update cards per view based on breakpoint
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280) setCardsPerView(8);
      else if (width >= 1024) setCardsPerView(6);
      else if (width >= 768) setCardsPerView(4.2);
      else if (width >= 640) setCardsPerView(3.2);
      else setCardsPerView(2.2);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Clone items for infinite loop
  const cloneCount = Math.ceil(cardsPerView);
  const clonedHead = INDUSTRIES_CAROUSEL.slice(0, cloneCount);
  const clonedTail = INDUSTRIES_CAROUSEL.slice(-cloneCount);
  const allItems = [...clonedTail, ...INDUSTRIES_CAROUSEL, ...clonedHead];

  // Initialize scroll position to first real item
  useEffect(() => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.scrollWidth / allItems.length;
      trackRef.current.scrollLeft = cardWidth * cloneCount;
    }
  }, [allItems.length, cloneCount]);

  // Handle infinite scroll loop
  const handleScroll = () => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const cardWidth = track.scrollWidth / allItems.length;
    const scrollPos = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;

    // If scrolled into tail clones, jump to real items
    if (scrollPos < cardWidth * cloneCount * 0.5) {
      track.scrollLeft = scrollPos + cardWidth * INDUSTRIES_CAROUSEL.length;
    }
    // If scrolled into head clones, jump to real items
    else if (scrollPos > maxScroll - cardWidth * cloneCount * 0.5) {
      track.scrollLeft = scrollPos - cardWidth * INDUSTRIES_CAROUSEL.length;
    }

    // Update current group for pagination dots
    const groupIndex = Math.round((scrollPos - cardWidth * cloneCount) / track.clientWidth);
    setCurrentGroup(Math.max(0, Math.min(groupIndex, Math.ceil(INDUSTRIES_CAROUSEL.length / cardsPerView) - 1)));
  };

  // Scroll by one full viewport group
  const scroll = (direction: "prev" | "next") => {
    if (!trackRef.current) return;
    const groupWidth = trackRef.current.clientWidth;
    trackRef.current.scrollBy({
      left: direction === "prev" ? -groupWidth : groupWidth,
      behavior: "smooth",
    });
  };

  // Jump to specific group
  const goToGroup = (index: number) => {
    if (!trackRef.current) return;
    const groupWidth = trackRef.current.clientWidth;
    const cardWidth = trackRef.current.scrollWidth / allItems.length;
    trackRef.current.scrollTo({
      left: cardWidth * cloneCount + groupWidth * index,
      behavior: "smooth",
    });
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroll("prev");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scroll("next");
    }
  };

  const totalGroups = Math.ceil(INDUSTRIES_CAROUSEL.length / cardsPerView);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Built for Your Trade
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Workflows tailored to your industry
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Prev Button (md+ only) */}
        <button
          onClick={() => scroll("prev")}
          aria-label="Previous industries"
          aria-controls="industry-track"
          data-testid="button-carousel-prev"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur ring-1 ring-slate-200 shadow hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Track */}
        <div
          id="industry-track"
          ref={trackRef}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Industries"
          className="relative -mx-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth focus:outline-none"
        >
          <ul className="flex gap-3 sm:gap-4 items-stretch">
            {allItems.map((industry, index) => {
              const IconComponent = getIcon(industry.icon);
              const isClone = index < cloneCount || index >= allItems.length - cloneCount;
              
              return (
                <li
                  key={`${industry.slug}-${index}`}
                  className="snap-start min-w-[calc(100%/2.2)] sm:min-w-[calc(100%/3.2)] md:min-w-[calc(100%/4.2)] lg:min-w-[calc(100%/6)] xl:min-w-[calc(100%/8)]"
                >
                  <Link
                    to={`/industries/${industry.slug}`}
                    aria-label={`View ${industry.name} workflows`}
                    data-testid={`card-industry-${industry.slug}`}
                    className="group relative block h-40 sm:h-44 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.015] focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2"
                  >
                    {/* Gradient ring on hover/focus */}
                    <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#0B5FFF] via-[#0FB36F] to-[#0B5FFF] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />
                    
                    {/* Card content */}
                    <div className="relative h-full bg-white rounded-[14px] p-3 sm:p-4 flex flex-col items-center justify-center text-center gap-2">
                      {/* Icon */}
                      <div className="text-[#0B5FFF] text-3xl sm:text-4xl">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-[clamp(0.9rem,2vw,1rem)] font-medium leading-tight line-clamp-1 text-foreground">
                        {industry.name}
                      </h3>
                      
                      {/* Subline */}
                      <p className="text-slate-500 text-xs line-clamp-1">
                        {industry.benefit || "Estimate → Schedule → Invoice"}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Next Button (md+ only) */}
        <button
          onClick={() => scroll("next")}
          aria-label="Next industries"
          aria-controls="industry-track"
          data-testid="button-carousel-next"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur ring-1 ring-slate-200 shadow hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots (mobile only) */}
      <div className="md:hidden flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToGroup(index)}
            aria-label={`Go to group ${index + 1}`}
            aria-current={currentGroup === index ? "true" : "false"}
            data-testid={`dot-pagination-${index}`}
            className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2 ${
              currentGroup === index
                ? "bg-[#0B5FFF] w-6"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
