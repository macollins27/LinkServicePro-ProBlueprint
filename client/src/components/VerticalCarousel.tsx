import { useEffect, useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import plumbingImg from "@assets/generated_images/Plumbing_service_technician_van_e593e2ab.png";
import hvacImg from "@assets/generated_images/HVAC_rooftop_maintenance_crew_8730e67b.png";
import landscapingImg from "@assets/generated_images/Landscaping_crew_at_work_08505499.png";
import electricalImg from "@assets/generated_images/Electrical_panel_installation_work_afbd56f0.png";
import windowCleaningImg from "@assets/generated_images/Window_cleaning_service_crew_48c5903c.png";
import contractorImg from "@assets/generated_images/Contractor_managing_construction_project_dad9770c.png";

interface CarouselItem {
  src: string;
  alt: string;
  caption: string;
}

interface VerticalCarouselProps {
  items?: CarouselItem[];
  height?: number;
  autoplayMs?: number;
  transitionMs?: number;
}

const defaultItems: CarouselItem[] = [
  {
    src: plumbingImg,
    alt: "Plumber onsite",
    caption: "Plumbing • Same-day quote approved",
  },
  {
    src: hvacImg,
    alt: "HVAC tune-up",
    caption: "HVAC • Job completed, invoice sent",
  },
  {
    src: landscapingImg,
    alt: "Landscaping crew",
    caption: "Landscaping • Route optimized, 20min saved",
  },
  {
    src: electricalImg,
    alt: "Electrical upgrade",
    caption: "Electrical • Customer portal updated",
  },
  {
    src: windowCleaningImg,
    alt: "Window cleaning",
    caption: "Cleaning • Recurring job auto-scheduled",
  },
  {
    src: contractorImg,
    alt: "Construction site",
    caption: "Contracting • Multi-visit project tracked",
  },
];

export default function VerticalCarousel({
  items = defaultItems,
  height = 600,
  autoplayMs = 4000,
  transitionMs = 450,
}: VerticalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const total = items.length;
  
  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Handle single item case
  if (total === 0) return null;
  if (total === 1) {
    return (
      <div className="relative overflow-hidden border border-white/20" style={{ height }}>
        <figure className="w-full relative h-full">
          <img
            src={items[0].src}
            alt={items[0].alt || ""}
            className="w-full h-full object-cover block"
          />
          {items[0].caption && (
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-medium">{items[0].caption}</p>
            </figcaption>
          )}
        </figure>
      </div>
    );
  }
  
  // Auto-advance effect
  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return;
    }
    
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, autoplayMs);
    
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, isPaused, prefersReducedMotion, autoplayMs, total]);
  
  // Navigation functions
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  // Handle pause/resume
  const handlePause = () => {
    setIsPaused(true);
  };
  
  const handleResume = () => {
    setIsPaused(false);
  };
  
  return (
    <div
      className="relative overflow-hidden select-none border border-white/20"
      style={{ height }}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onFocus={handlePause}
      onBlur={handleResume}
      data-testid="vertical-carousel"
    >
      {/* Slides Container */}
      <div
        className="relative w-full h-full"
        aria-live="polite"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-all ease-in-out"
            style={{
              transform: `translateY(${(index - currentIndex) * 100}%)`,
              opacity: Math.abs(index - currentIndex) <= 1 ? 1 : 0,
              transitionDuration: `${transitionMs}ms`,
            }}
            data-testid={`carousel-slide-${index}`}
          >
            <figure className="w-full h-full relative">
              <img
                src={item.src}
                alt={item.alt || ""}
                className="w-full h-full object-cover block"
              />
              {item.caption && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-medium" data-testid={`text-caption-${index}`}>
                    {item.caption}
                  </p>
                </figcaption>
              )}
            </figure>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute right-4 top-4 flex flex-col gap-2 z-10">
        <button
          type="button"
          aria-label="Previous slide"
          className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
          onClick={goToPrev}
          data-testid="button-carousel-prev"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
          onClick={goToNext}
          data-testid="button-carousel-next"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
        {items.map((_, index) => {
          const isActive = currentIndex === index;
          return (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={`w-2 border border-white transition-all ${
                isActive ? "bg-white h-8" : "bg-white/40 h-2"
              }`}
              onClick={() => goToSlide(index)}
              data-testid={`button-carousel-dot-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}