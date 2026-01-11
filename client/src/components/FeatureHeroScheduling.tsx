import { useNavigate } from "react-router-dom";

export default function FeatureHeroScheduling() {
  const navigate = useNavigate();

  const handleCTAClick = (placement: string, destination: string) => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', { placement });
    }
    navigate(destination);
  };

  const kpis = [
    {
      value: "12s",
      label: "Create → assigned",
      help: "Median time to add a job and assign a crew.",
      tone: "info",
    },
    {
      value: "−41%",
      label: "Missed appointments",
      help: "Fewer no-shows with automatic ETAs and reminders.",
      tone: "success",
    },
    {
      value: "100%",
      label: "Customers auto-notified",
      help: "Every schedule change sends an SMS/email automatically.",
      tone: "ok",
    },
  ];

  return (
    <section 
      className="relative overflow-hidden" 
      aria-labelledby="sched-hero-title"
      style={{
        background: "radial-gradient(90% 70% at 15% 10%, rgba(11,95,255,.25) 0%, transparent 60%), linear-gradient(180deg,#0F2033 0%, #0B1626 100%)"
      }}
    >

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr,1fr] items-center gap-8 lg:gap-12">
          {/* LEFT: copy + KPIs + CTAs */}
          <div className="text-white">
            <h1 id="sched-hero-title" className="text-4xl sm:text-5xl font-extrabold leading-tight" data-testid="heading-hero">
              Drag-and-drop Scheduling
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-slate-200" data-testid="text-hero-subtitle">
              Add a job, pick a crew, send an ETA. All in seconds.
            </p>

            {/* "What you do in 30 seconds" bullets */}
            <ul className="mt-5 space-y-2 text-slate-200" data-testid="list-hero-bullets">
              <li data-testid="bullet-type-job">• Type the job and window</li>
              <li data-testid="bullet-drag-assign">• Drag to assign a crew or truck</li>
              <li data-testid="bullet-customer-text">• Customer gets an instant text with the ETA</li>
            </ul>

            {/* KPIs */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {kpis.map((k) => (
                <li
                  key={k.label}
                  className="bg-white/10 backdrop-blur ring-1 ring-white/15 elev-2 px-4 py-3 sm:px-5 sm:py-4 rounded-none"
                  aria-label={`${k.label}: ${k.value}. ${k.help}`}
                  title={k.help}
                  data-testid={`kpi-${k.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div
                    className={[
                      "text-2xl sm:text-3xl font-extrabold",
                      k.tone === "success"
                        ? "text-emerald-300"
                        : k.tone === "info"
                        ? "text-sky-300"
                        : "text-slate-200",
                    ].join(" ")}
                  >
                    {k.value}
                  </div>
                  <div className="text-slate-300 text-sm">{k.label}</div>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleCTAClick('hero', '/signup')}
                className="inline-flex justify-center px-5 py-3 bg-[#0B5FFF] text-white font-extrabold rounded-none shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-slate-900"
                data-testid="button-hero-start-free"
              >
                Start Free
              </button>
              <button
                onClick={() => handleCTAClick('hero', '/pricing')}
                className="inline-flex justify-center px-5 py-3 bg-transparent text-white font-extrabold rounded-none ring-2 ring-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white link-underline"
                data-testid="button-hero-view-pricing"
              >
                View Pricing
              </button>
            </div>

            {/* trust note */}
            <p className="mt-3 text-xs text-slate-400" data-testid="text-trust-note">
              No contracts. iOS & Android apps included.
            </p>
          </div>

          {/* RIGHT: documentary photo + caption (no paper) */}
          <figure className="relative bg-white ring-1 ring-slate-200 elev-2 p-2 md:p-3">
            <img
              src="/images/feature-scheduling-hero.jpg"
              alt="Tech updates today's job on a phone beside the condenser; crew heads-up is sent automatically."
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
              data-testid="img-hero-tech"
            />
            <figcaption className="mt-1 text-xs text-slate-600" data-testid="text-hero-caption">
              Real work. Real-time updates—no paperwork.
            </figcaption>

            {/* decorative halo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 opacity-30 blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(11,95,255,.25), transparent)",
              }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
