import dispatchImage from "@assets/generated_images/Technician_using_dispatch_mobile_app_3c364156.png";

export default function DispatchCommandCenter() {
  const kpis = [
    { label: "Drive time", value: "−18%" },
    { label: "Jobs/tech/day", value: "+1.3" },
    { label: "On-time", value: "96%" },
  ];
  const queue = [
    { id: 1, time: "9:15 AM", job: "HVAC tune-up", tech: "AL", color: "#0B5FFF" },
    { id: 2, time: "10:40 AM", job: "Roof leak", tech: "SK", color: "#00C2A8" },
    { id: 3, time: "12:30 PM", job: "Plumbing call", tech: "JP", color: "#F59E0B" },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 spot-bg overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="heading-dispatch">
            Scheduling & Dispatch
          </h2>
          <p className="text-slate-700">Route smarter, dispatch faster, stay on time.</p>
        </header>

        <div className="mb-6 lg:mb-8">
          <img 
            src={dispatchImage} 
            alt="Field service technician efficiently using mobile dispatch app" 
            className="w-full h-48 sm:h-64 lg:h-80 object-cover ring-1 ring-slate-200"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* LEFT: copy */}
        <article className="bg-white/98 ring-1 ring-slate-200 elev-2 p-6 md:p-8 max-w-xl">
          <ul className="space-y-2 text-slate-800">
            <li>Drag-and-drop scheduling for crews and vehicles.</li>
            <li>Live GPS with route optimization to cut windshield time.</li>
            <li>Capacity planning and automated reminders to stay on time.</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {kpis.map((k) => (
              <span key={k.label} className="inline-flex items-center px-3 py-1 text-xs border border-slate-300 text-slate-800">
                <strong className="mr-1">{k.value}</strong>{k.label}
              </span>
            ))}
          </div>
          <a href="/features#dispatch" className="mt-6 inline-flex items-center font-semibold link-underline text-[#0B5FFF]">
            See all dispatch features →
          </a>
        </article>

        {/* RIGHT: command center visual */}
        <div className="relative bg-white ring-1 ring-slate-200 elev-2 p-4 md:p-5">
          {/* decorative glow */}
          <div className="absolute -inset-6 -z-10 rounded-none blur-2xl opacity-30"
               style={{background:"radial-gradient(closest-side, rgba(11,95,255,.35), transparent)"}} />

          {/* Map canvas */}
          <div className="relative aspect-[4/3] w-full bg-slate-50 ring-1 ring-slate-200">
            <svg viewBox="0 0 400 300" className="w-full h-full" aria-hidden="true">
              <defs>
                <pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse">
                  <path d="M22 0H0V22" fill="none" stroke="rgba(15,23,42,.06)"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Visible road - grey path underneath */}
              <path d="M40,220 C140,40 260,280 360,120"
                    fill="none" stroke="#CBD5E1" strokeWidth="16" strokeLinecap="round" opacity="0.6"/>
              
              {/* Active route - blue line on top */}
              <path className="dash-route"
                    d="M40,220 C140,40 260,280 360,120"
                    fill="none" stroke="#0B5FFF" strokeWidth="5" strokeLinecap="round"/>
              
              {/* Home icon at route start - much larger */}
              <g transform="translate(40, 220)">
                <path d="M-18,-24 L0,-42 L18,-24 L18,-6 L-18,-6 Z" fill="#0B5FFF" stroke="#fff" strokeWidth="2"/>
                <rect x="-6" y="-12" width="12" height="12" fill="#fff"/>
              </g>
              
              {/* Home icon at route end - much larger */}
              <g transform="translate(360, 120)">
                <path d="M-18,-24 L0,-42 L18,-24 L18,-6 L-18,-6 Z" fill="#0B5FFF" stroke="#fff" strokeWidth="2"/>
                <rect x="-6" y="-12" width="12" height="12" fill="#fff"/>
              </g>
            </svg>

            {/* Live status chips */}
            <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2">
              {[
                { k: "ETA", v: "9:15 AM" },
                { k: "Distance", v: "4.2 mi" },
                { k: "Time", v: "12 min" },
              ].map((c) => (
                <div key={c.k} className="overlay-card">
                  <div className="text-slate-500">{c.k}</div>
                  <div className="font-semibold">{c.v}</div>
                </div>
              ))}
            </div>

            {/* Queue card overlay */}
            <div className="absolute top-3 left-3 w-56 bg-white ring-1 ring-slate-200 elev-2 p-3">
              <div className="text-xs font-semibold text-slate-700 mb-2">Today's Queue</div>
              <ul className="space-y-2">
                {queue.map((q)=>(
                  <li key={q.id} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center h-6 w-6 text-[10px] font-bold text-white"
                            style={{background:q.color}} aria-hidden="true">{q.tech}</span>
                      <span className="text-slate-800">{q.job}</span>
                    </div>
                    <span className="text-slate-500">{q.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="sr-only">Animated route is decorative; details shown in the live status chips.</p>
        </div>
        </div>
      </div>
    </section>
  );
}
