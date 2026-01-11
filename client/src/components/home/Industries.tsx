import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { industriesHome } from "../../data/industriesHome";
import { testimonials } from "../../data/testimonials";
import TestimonialsRail from "./TestimonialsRail";

export default function Industries() {
  const [activeSlug, setActiveSlug] = useState(industriesHome[0].slug);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const idleTimeoutRef = useRef<NodeJS.Timeout>();
  
  const activeIndustry = industriesHome.find((ind) => ind.slug === activeSlug) || industriesHome[0];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Update scroll button states
  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  // Handle scroll
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    const newScrollLeft = direction === "left" 
      ? scrollContainerRef.current.scrollLeft - scrollAmount
      : scrollContainerRef.current.scrollLeft + scrollAmount;
    
    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth"
    });
    
    resetIdleTimer();
  };

  // Reset idle timer
  const resetIdleTimer = () => {
    setIsUserInteracting(true);
    
    if (idleTimeoutRef.current) {
      clearTimeout(idleTimeoutRef.current);
    }
    
    idleTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 6000);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let targetIndex = index;
    
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      targetIndex = Math.max(0, index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      targetIndex = Math.min(industriesHome.length - 1, index + 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      targetIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      targetIndex = industriesHome.length - 1;
    }
    
    if (targetIndex !== index) {
      const targetSlug = industriesHome[targetIndex].slug;
      setActiveSlug(targetSlug);
      
      const targetButton = document.getElementById(`tab-industry-${targetSlug}`);
      if (targetButton) {
        (targetButton as HTMLButtonElement).focus();
      }
      
      resetIdleTimer();
    }
  };

  // Setup scroll listener and idle auto-scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Update scroll buttons after layout is complete
    const timer = setTimeout(() => {
      updateScrollButtons();
    }, 100);

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);

    return () => {
      clearTimeout(timer);
      container.removeEventListener("scroll", updateScrollButtons);
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
    };
  }, []);

  // Optional idle auto-scroll (desktop only, respects reduced-motion)
  useEffect(() => {
    // Only run on desktop viewports (1024px and up)
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop || prefersReducedMotion || !scrollContainerRef.current) return;
    if (isUserInteracting || canScrollRight === false) return;

    const scrollInterval = setInterval(() => {
      const stillDesktop = window.innerWidth >= 1024;
      if (stillDesktop && !isUserInteracting && canScrollRight && scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: 1,
          behavior: "auto"
        });
      }
    }, 50);

    return () => clearInterval(scrollInterval);
  }, [isUserInteracting, canScrollRight, prefersReducedMotion]);

  return (
    <section className="relative py-14 sm:py-16 lg:py-24 bg-[#0A1326] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pills/Tabs with Arrow Controls */}
        <div className="relative mb-10 flex items-center gap-2 max-w-full">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll industries left"
            aria-disabled={!canScrollLeft}
            className={`
              flex-shrink-0 z-10 h-9
              flex items-center justify-center px-2 rounded-lg
              bg-[#0A1326]/90 backdrop-blur-sm border border-white/20
              transition-opacity
              ${canScrollLeft ? "opacity-100 hover:bg-[#0B5FFF] hover:border-[#0B5FFF]" : "opacity-0 pointer-events-none"}
            `}
            data-testid="button-scroll-left"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Scrollable Tab Container */}
          <div
            ref={scrollContainerRef}
            className="flex flex-nowrap gap-2 overflow-x-scroll w-full max-w-[720px] scrollbar-hide"
            role="tablist"
            aria-label="Industry selector"
            onMouseEnter={resetIdleTimer}
            onTouchStart={resetIdleTimer}
          >
            {industriesHome.map((industry, index) => (
              <button
                key={industry.slug}
                id={`tab-industry-${industry.slug}`}
                type="button"
                role="tab"
                aria-selected={activeSlug === industry.slug}
                aria-controls={`industry-panel-${industry.slug}`}
                onClick={() => {
                  setActiveSlug(industry.slug);
                  resetIdleTimer();
                }}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-lg border font-medium text-sm transition whitespace-nowrap
                  ${
                    activeSlug === industry.slug
                      ? "border-[#0B5FFF] bg-[#0B5FFF]/10 text-white shadow-[inset_0_1px_2px_rgba(11,95,255,0.2)]"
                      : "border-white/20 text-white/70 hover:border-[#0B5FFF] hover:text-white hover:shadow-[inset_0_1px_2px_rgba(11,95,255,0.1)]"
                  }
                `}
                data-testid={`tab-industry-${industry.slug}`}
              >
                {industry.name}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll industries right"
            aria-disabled={!canScrollRight}
            className={`
              flex-shrink-0 z-10 h-9
              flex items-center justify-center px-2 rounded-lg
              bg-[#0A1326]/90 backdrop-blur-sm border border-white/20
              transition-opacity
              ${canScrollRight ? "opacity-100 hover:bg-[#0B5FFF] hover:border-[#0B5FFF]" : "opacity-0 pointer-events-none"}
            `}
            data-testid="button-scroll-right"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          {/* LEFT: Industry info + Customer Voices */}
          <div className="lg:col-span-7 space-y-8">
            <div
              id={`industry-panel-${activeIndustry.slug}`}
              role="tabpanel"
              aria-labelledby={`tab-industry-${activeIndustry.slug}`}
            >
              {/* Section Heading */}
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Industries We Serve
              </h2>

              {/* Industry Name */}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {activeIndustry.name}
              </h3>

              {/* Blurb */}
              <p className="text-lg text-white/80 mb-6">
                {activeIndustry.blurb}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-8">
                {activeIndustry.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Primary CTA */}
              <Link
                to={activeIndustry.ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B5FFF] hover:bg-[#0952CC] text-white font-medium transition"
                data-testid={`link-industry-${activeIndustry.slug}`}
              >
                {activeIndustry.ctaText} →
              </Link>
            </div>

            {/* Customer Voices Mini-Block */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0B5FFF] mb-2">
                Customer Voices
              </p>
              <p className="text-white/80 mb-4">
                Contractors using LinkServicePro report 6–10 hours saved weekly, same-day invoicing, and 95%+ schedule accuracy across all service types.
              </p>
              <Link
                to="/resources/customer-stories"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition"
                data-testid="link-customer-stories"
              >
                Read customer stories →
              </Link>
            </div>

            {/* Mobile: Image + testimonials below content */}
            <div className="mt-8 lg:hidden space-y-6">
              <img
                key={activeIndustry.slug}
                src={activeIndustry.image.src}
                alt={activeIndustry.image.alt}
                className="w-full aspect-[16/9] object-cover rounded-xl"
                loading="lazy"
                decoding="async"
              />
              {testimonials.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60 mb-4">
                    What customers say
                  </h4>
                  <TestimonialsRail items={testimonials} speedSeconds={40} />
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Image + Testimonials Rail (desktop only) */}
          <div className="hidden lg:block lg:col-span-5 space-y-6">
            <img
              key={activeIndustry.slug}
              src={activeIndustry.image.src}
              alt={activeIndustry.image.alt}
              className="w-full aspect-[16/9] object-cover rounded-xl"
              loading="lazy"
              decoding="async"
              data-testid={`img-industry-${activeIndustry.slug}`}
            />
            {testimonials.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60 mb-4">
                  What customers say
                </h4>
                <TestimonialsRail items={testimonials} speedSeconds={40} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
