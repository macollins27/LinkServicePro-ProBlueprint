import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

type FeatureHeroProps = {
  headline: string;
  subhead: string;
  heroStats: { label: string; sub: string }[];
  minPlanLabel: string;
  slug: string;
  Icon: LucideIcon;
};

export default function FeatureHero({
  headline,
  subhead,
  heroStats,
  minPlanLabel,
  slug,
  Icon
}: FeatureHeroProps) {
  return (
    <section className="relative bg-[#0E2A47] text-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Plan badge */}
            <div className="mb-4">
              <Badge 
                variant={minPlanLabel === "Free" ? "outline" : "secondary"}
                className="text-white border-white/30 bg-white/10"
                data-testid="badge-plan-hero"
              >
                Available on {minPlanLabel}
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight" data-testid="heading-hero">
              {headline}
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed" data-testid="text-subhead-hero">
              {subhead}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="outline" className="text-white border-white/30 bg-white/10" data-testid="badge-google-calendar-hero">
                Google Calendar
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/10" data-testid="badge-apple-calendar-hero">
                Apple Calendar
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/10" data-testid="badge-unlimited-users-hero">
                Unlimited users (paid plans)
              </Badge>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                className="bg-[#0B5FFF] hover:bg-[#0B5FFF]/90 text-white"
                data-testid="button-start-free-hero"
                data-analytics={`feature_start_free_click:${slug}`}
              >
                Start Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
                data-testid="button-see-pricing-hero"
                data-analytics={`feature_view_pricing:${slug}`}
              >
                See Pricing
              </Button>
            </div>
          </div>

          {/* Right: Mockup placeholder */}
          <div className="relative">
            <div 
              className="aspect-[5/3] min-h-[220px] md:min-h-[260px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"
              role="img"
              aria-label={`${headline} mockup preview`}
              data-testid="mockup-hero"
            >
              <div className="text-center">
                <Icon className="w-16 h-16 mx-auto mb-3 text-white/30" />
                <p className="text-white/40 text-sm">Feature preview</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats pills below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-4xl">
          {heroStats.map((stat, idx) => (
            <div 
              key={idx}
              className="rounded-full bg-white/10 border border-white/20 px-6 py-4 text-center motion-reduce:transition-none motion-reduce:hover:transform-none"
              data-testid={`stat-${idx}`}
            >
              <div className="text-xl sm:text-2xl font-bold mb-1">{stat.label}</div>
              <div className="text-sm text-white/70">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
