import { useEffect, useState } from "react";
import type { Testimonial } from "../../data/testimonials";

interface TestimonialsRailProps {
  items: Testimonial[];
  reverse?: boolean;
  speedSeconds?: number;
}

export default function TestimonialsRail({
  items,
  reverse = false,
  speedSeconds = 40,
}: TestimonialsRailProps) {
  const [prefersReduce, setPrefersReduce] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduce(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduce(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Need at least a few items to make the loop seamless
  if (items.length === 0) {
    return null;
  }

  // Duplicate track for continuous loop
  const track = [...items, ...items];

  if (prefersReduce) {
    // Static list for reduced motion users
    return (
      <div className="space-y-3">
        {items.map((testimonial, i) => (
          <TestimonialCard key={i} testimonial={testimonial} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Animated rail */}
      <div
        className="relative h-[400px] overflow-hidden mask-vertical"
        aria-hidden="true"
      >
        <div
          className="flex flex-col gap-3"
          style={{
            animation: `${reverse ? "marqueeDown" : "marqueeUp"} ${speedSeconds}s linear infinite`,
          }}
        >
          {track.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* SR-only list */}
      <ul className="sr-only">
        {items.map((testimonial, i) => (
          <li key={i}>
            {testimonial.name}, {testimonial.role}: "{testimonial.quote}"
          </li>
        ))}
      </ul>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <p className="text-sm text-white/90 line-clamp-2 mb-3">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3">
        {testimonial.avatar && (
          <img
            src={testimonial.avatar}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            loading="lazy"
          />
        )}
        <div>
          <div className="text-sm font-semibold text-white">
            {testimonial.name}
          </div>
          <div className="text-xs text-white/60">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
