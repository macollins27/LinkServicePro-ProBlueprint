import { useMemo, useRef, useState, useEffect } from "react";
import industriesImage from "@assets/generated_images/Diverse_field_service_professionals_together_c0983126.png";

const GROUPS = [
  { id: "build",  title: "Building & Trades",   color: "#111827" },
  { id: "clean",  title: "Cleaning & Surfaces", color: "#0B5FFF" },
  { id: "grounds",title: "Grounds & Seasonal",  color: "#00C2A8" },
];

const INDUSTRIES: Record<string, Array<{ name: string; hook: string; href: string }>> = {
  clean: [
    { name: "Cleaning",           hook: "Route clusters save 30% fuel",              href: "/industries/cleaning" },
    { name: "Janitorial Cleaning",hook: "Recurring schedules set once",              href: "/industries/janitorial-cleaning" },
    { name: "Pressure Washing",   hook: "Before/after photos in portal",            href: "/industries/pressure-washing" },
    { name: "Window Cleaning",    hook: "Multi-story job tracking",                  href: "/industries/window-cleaning" },
  ],
  grounds: [
    { name: "Lawn Care",          hook: "Seasonal reminders automated",              href: "/industries/lawn-care" },
    { name: "Tree Care",          hook: "Crew safety checklists built-in",          href: "/industries/tree-care" },
    { name: "Landscaping",        hook: "Material tracking per project",             href: "/industries/landscaping" },
    { name: "Snow Removal",       hook: "Emergency dispatch in seconds",             href: "/industries/snow-removal" },
  ],
  build: [
    { name: "General Contracting",hook: "Permits and docs in one place",             href: "/industries/general-contracting" },
    { name: "Handyman",           hook: "Flexible pricing, quick quotes",            href: "/industries/handyman" },
    { name: "Plumbing",           hook: "Parts inventory sync",                      href: "/industries/plumbing" },
    { name: "HVAC",               hook: "Service agreements tracked",                href: "/industries/hvac" },
    { name: "Electrical",         hook: "Code compliance forms",                     href: "/industries/electrical" },
    { name: "Painting",           hook: "Job costing per room",                      href: "/industries/painting" },
    { name: "Roofing",            hook: "Insurance docs organized",                  href: "/industries/roofing" },
  ],
};

export default function IndustriesShowcase() {
  const [group, setGroup] = useState("build");
  const railRef = useRef<HTMLElement>(null);
  const idx = useMemo(() => GROUPS.findIndex(g => g.id === group), [group]);

  // Arrow-key nav
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (!["ArrowLeft","ArrowRight","Home","End"].includes(e.key)) return;
      e.preventDefault();
      const n = GROUPS.length;
      let i = idx;
      if (e.key === "ArrowRight") i = (i + 1) % n;
      if (e.key === "ArrowLeft")  i = (i - 1 + n) % n;
      if (e.key === "Home")       i = 0;
      if (e.key === "End")        i = n - 1;
      setGroup(GROUPS[i].id);
      el.querySelectorAll<HTMLButtonElement>('[role="tab"]')[i]?.focus();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [idx]);

  const items = INDUSTRIES[group];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 spot-bg overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="heading-industries">Built for Your Trade</h2>
          <p className="text-slate-700">Field service teams across 15+ industries trust LinkServicePro.</p>
        </header>

        <div className="mb-6 lg:mb-8">
          <img 
            src={industriesImage} 
            alt="Diverse field service professionals from various trades" 
            className="w-full h-48 sm:h-64 lg:h-80 object-cover ring-1 ring-slate-200"
          />
        </div>

        {/* Segmented filter — mobile-first, no horizontal scroll */}
        <nav
          ref={railRef}
          role="tablist"
          aria-label="Industry groups"
          className="seg-rail border border-slate-200 bg-white overflow-hidden"
          data-testid="tablist-industry-groups"
        >
          <div className="grid grid-cols-3 divide-x divide-slate-200">
            {GROUPS.map((g) => {
              const selected = g.id === group;
              return (
                <button
                  key={g.id}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${g.id}`}
                  id={`tab-${g.id}`}
                  onClick={() => setGroup(g.id)}
                  className={[
                    // mobile-first sizing
                    "px-2 py-2 sm:px-6 sm:py-3",
                    "text-sm sm:text-base font-semibold tracking-tight",
                    // wrap instead of overflow
                    "whitespace-normal break-words leading-tight text-center",
                    "min-h-[48px] sm:min-h-[56px]",
                    // focus + color
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF]",
                    selected ? "text-slate-900" : "text-slate-600 hover:text-slate-900",
                  ].join(" ")}
                  style={selected ? { background: "linear-gradient(180deg,#fff,#F8FAFC)" } : {}}
                  data-testid={`tab-${g.id}`}
                >
                  {g.title}
                  {/* per-button indicator */}
                  <span
                    aria-hidden="true"
                    className="block h-0.5 mt-2"
                    style={{ background: selected ? g.color : "transparent" }}
                  />
                </button>
              );
            })}
          </div>
        </nav>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`panel-${group}`}
          aria-labelledby={`tab-${group}`}
          className="mt-6 sm:mt-8"
          data-testid={`panel-${group}`}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {items.map((it) => (
              <li key={it.name} className="group bg-white ring-1 ring-slate-200 elev-2 p-5 sm:p-6 relative" data-testid={`card-industry-${it.name.toLowerCase().replace(/\s+/g, '-')}`}>
                {/* color spine */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1"
                  style={{ background: GROUPS.find(g => g.id === group)?.color }}
                />
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6"
                        style={{ background: GROUPS.find(g => g.id === group)?.color }}
                        aria-hidden="true" />
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-slate-900">{it.name}</div>
                    <div className="text-slate-700 text-sm">{it.hook}</div>
                  </div>
                </div>

                {/* chips */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-xs border border-slate-300 text-slate-800">Templates</span>
                  <span className="px-2.5 py-1 text-xs border border-slate-300 text-slate-800">Checklists</span>
                  <span className="px-2.5 py-1 text-xs border border-slate-300 text-slate-800">Job costing</span>
                </div>

                <a href={it.href} className="mt-4 inline-flex items-center font-semibold link-underline text-[#0B5FFF]" data-testid={`link-industry-${it.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  See workflows →
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA for all industries */}
        <div className="mt-8 text-center">
          <a href="/industries" className="inline-block px-6 py-3 text-sm font-semibold text-slate-900 border-2 border-slate-900 hover-elevate active-elevate-2" data-testid="link-all-industries">Browse all industries</a>
        </div>
      </div>
    </section>
  );
}
