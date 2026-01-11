import { Link } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  Snowflake, 
  Wrench, 
  Zap, 
  Hammer, 
  Sparkles, 
  Bug, 
  Plug, 
  DoorOpen, 
  Home,
  type LucideIcon
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function IndustryCarousel() {
  const industries: Array<{ name: string; slug: string; icon: LucideIcon }> = [
    { name: "HVAC", slug: "hvac", icon: Snowflake },
    { name: "Plumbing", slug: "plumbing", icon: Wrench },
    { name: "Electrical", slug: "electrical", icon: Zap },
    { name: "Handyman", slug: "handyman", icon: Hammer },
    { name: "Cleaning", slug: "cleaning", icon: Sparkles },
    { name: "Pest Control", slug: "pest-control", icon: Bug },
    { name: "Appliance Repair", slug: "appliance-repair", icon: Plug },
    { name: "Garage Door", slug: "garage-door", icon: DoorOpen },
    { name: "Roofing", slug: "roofing", icon: Home }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Built for Your Trade
          </h2>
          <p className="text-lg text-slate-600">
            Workflows tailored to your industry
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons - Desktop Only */}
          <button
            onClick={scrollPrev}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 items-center justify-center h-10 w-10 bg-white ring-1 ring-slate-300 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF]"
            aria-label="Previous industries"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 items-center justify-center h-10 w-10 bg-white ring-1 ring-slate-300 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF]"
            aria-label="Next industries"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 touch-pan-y">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Link
                    key={index}
                    to={`/industries/${industry.slug}`}
                    className="flex-none w-[160px] sm:w-[180px] bg-slate-50 ring-1 ring-slate-200 p-6 hover-elevate active-elevate-2 transition-all group"
                    data-testid={`industry-card-${industry.slug}`}
                  >
                    <Icon 
                      className="h-10 w-10 text-[#0B5FFF] mb-3 group-hover:scale-110 transition-transform" 
                      aria-hidden="true"
                    />
                    <h3 className="font-bold text-slate-900">
                      {industry.name}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Swipe to explore • Click to learn more
        </p>
      </div>
    </section>
  );
}
