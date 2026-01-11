import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import InfiniteVerticalLoop from "./animation/InfiniteVerticalLoop";
import { leftImages, rightImages, uniqueLabels } from "@/data/heroImages";
import InfiniteHorizontalMarquee from "./animation/InfiniteHorizontalMarquee";
import { customerLogos, customerNames } from "@/data/customerLogos";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="
        relative overflow-hidden
        px-4 sm:px-6 lg:px-8
        pt-28 sm:pt-32 lg:pt-40
        pb-16 sm:pb-20 lg:pb-24
      "
    >
      {/* ROUTE GLOW (decorative, respects reduced motion) */}
      <RouteGlow />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(260px,400px)] gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN — Hero copy and CTAs */}
          <div className="max-w-xl">
          <p className="text-xs uppercase tracking-wide text-slate-300 mb-3">
            Best field service management software for contractors
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Do more jobs. Get paid faster.
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-slate-300">
            Scheduling, estimates, invoices, and payments in one place. Built for field teams.
            Unlimited users with simple, job-based pricing.
          </p>

          <ul className="mt-6 space-y-2 text-base text-slate-200">
            <li>• Schedule and assign jobs in minutes.</li>
            <li>• Send estimates and get quick approval.</li>
            <li>• Create invoices and collect payments the same day.</li>
            <li>• Reduce missed appointments with automatic reminders.</li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-[#2D6BFF] hover:bg-[#255AE0] text-white"
                data-testid="button-hero-start-free"
              >
                Start your trial
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-500 text-white hover:bg-white/10"
                data-testid="button-hero-pricing"
              >
                View pricing
              </Button>
            </Link>
          </div>

          <p className="mt-3 text-sm text-slate-300">
            Trusted by over 1,200 contracting teams • Rated 4.8 out of 5 by customers
          </p>
          <p className="mt-1 text-xs text-slate-400">Live in under 5 minutes.</p>
          </div>

          {/* RIGHT COLUMN — Image Marquee (constrained width, aligned to grid) */}
          <div
            className="justify-self-end w-full lg:max-w-[360px] xl:max-w-[400px] overflow-hidden"
            data-role="hero-marquee"
          >
            <div className="mx-auto flex justify-center gap-4 sm:gap-6 max-h-[520px] overflow-hidden">
              <div className="hidden sm:block">
                <InfiniteVerticalLoop items={leftImages} reverse={false} speedSeconds={45} />
              </div>
              <div>
                <InfiniteVerticalLoop items={rightImages} reverse={true} speedSeconds={45} />
              </div>
            </div>

            {/* SR-only list of industries for AT */}
            <ul className="sr-only" aria-label="Industries represented in hero gallery">
              {uniqueLabels.map((label, i) => (
                <li key={i}>{label}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CUSTOMER LOGO MARQUEE — New row at bottom of hero */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 z-10">
          <div className="py-8">
            <InfiniteHorizontalMarquee
              items={customerLogos}
              className="[mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] min-h-[72px]"
              speedSeconds={42}
            />
          </div>

          <ul className="sr-only" aria-label="Companies that trust LinkServicePro">
            {customerNames.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Decorative route path with soft glow. */
function RouteGlow() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const svg = document.querySelector('[data-route-glow]');
      if (svg) {
        const path = svg.querySelector('path');
        if (path) {
          (path as SVGPathElement).style.animation = 'none';
        }
      }
    }
  }, []);

  return (
    <svg
      aria-hidden="true"
      data-route-glow
      className="absolute inset-0 w-[120%] h-[120%] -left-10 -top-10 opacity-30"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="soft-glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M -50 650 C 200 520, 420 720, 620 600 S 980 320, 1250 420"
        fill="none"
        stroke="#2D6BFF"
        strokeOpacity="0.35"
        strokeWidth="2"
        filter="url(#soft-glow)"
      />
    </svg>
  );
}
