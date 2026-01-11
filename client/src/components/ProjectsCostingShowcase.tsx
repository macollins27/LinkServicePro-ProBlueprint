export default function ProjectsCostingShowcase() {
  const margin = 42; // %
  const costs = { labor: 8240, materials: 3680, overhead: 1120, revenue: 24000 };
  const files = [
    { name: "Permit-4832.pdf", meta: "Signed • 1.2MB" },
    { name: "Contract-v2.pdf", meta: "Counter-signed • 890KB" },
    { name: "Roof-After.jpg", meta: "Photo • 2.1MB" },
  ];
  const visits = [
    { when: "Mon • 9:00a", label: "Demo crew", status: "Done", color: "#00C2A8" },
    { when: "Tue • 1:00p", label: "Inspection", status: "Done", color: "#00C2A8" },
    { when: "Thu • 8:00a", label: "Install", status: "Scheduled", color: "#0B5FFF" },
    { when: "Fri • 3:00p", label: "Walkthrough", status: "Planned", color: "#64748B" },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 spot-bg overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="heading-projects-costing">Projects & Job Costing</h2>
          <p className="text-slate-700">Track multi-visit projects with documents and see profitability in real time.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT STACK */}
          <div className="space-y-6">
            <ProfitSnapshot margin={margin} costs={costs} />
            <CostBreakdown costs={costs} />
          </div>

          {/* RIGHT STACK */}
          <div className="space-y-6">
            <ProjectFiles files={files} />
            <VisitsTimeline visits={visits} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfitSnapshot({ margin, costs }: { margin: number; costs: { labor: number; materials: number; overhead: number; revenue: number } }) {
  return (
    <article className="bg-white ring-1 ring-slate-200 elev-2 p-6 md:p-8" data-testid="card-profit-snapshot">
      <header className="flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Profit Snapshot</h3>
        <a href="/features#profit" className="font-semibold link-underline text-[#0B5FFF]" data-testid="link-job-costing">See job costing →</a>
      </header>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <Gauge value={margin} color="#16A34A" />
        <ul className="text-sm text-slate-800 space-y-2" data-testid="list-profit-details">
          <li className="flex justify-between"><span>Revenue</span><strong>${format(costs.revenue)}</strong></li>
          <li className="flex justify-between"><span>Labor</span><strong>${format(costs.labor)}</strong></li>
          <li className="flex justify-between"><span>Materials</span><strong>${format(costs.materials)}</strong></li>
          <li className="flex justify-between"><span>Overhead</span><strong>${format(costs.overhead)}</strong></li>
          <li className="pt-2 border-t border-slate-200 flex justify-between">
            <span>Gross Margin</span><strong className="text-emerald-600">{margin}%</strong>
          </li>
        </ul>
      </div>
    </article>
  );
}

function Gauge({ value, color }: { value: number; color: string }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const dash = c - (value / 100) * c;
  return (
    <div className="grid place-items-center" data-testid="gauge-margin">
      <svg width="160" height="160" viewBox="0 0 160 160" role="img" aria-label={`Gross margin ${value}%`}>
        <circle cx="80" cy="80" r={r} fill="none" stroke="#E5E7EB" strokeWidth="12" />
        <circle
          cx="80" cy="80" r={r} fill="none"
          stroke={color} strokeWidth="12" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={dash}
          className="gauge-anim"
          transform="rotate(-90 80 80)"
        />
        <text x="80" y="80" textAnchor="middle" dominantBaseline="middle" className="fill-emerald-700" style={{fontWeight:800,fontSize:"28px"}}>
          {value}%
        </text>
        <text x="80" y="104" textAnchor="middle" className="fill-slate-500" style={{fontSize:"11px"}}>Gross margin</text>
      </svg>
    </div>
  );
}

function CostBreakdown({ costs }: { costs: { labor: number; materials: number; overhead: number; revenue: number } }) {
  const net = costs.revenue - costs.labor - costs.materials - costs.overhead;
  const bars = [
    { k: "Revenue", v: costs.revenue, color: "#0B5FFF" },
    { k: "Labor", v: -costs.labor, color: "#111827" },
    { k: "Materials", v: -costs.materials, color: "#64748B" },
    { k: "Overhead", v: -costs.overhead, color: "#94A3B8" },
    { k: "Net", v: net, color: "#16A34A" },
  ];
  return (
    <article className="bg-white ring-1 ring-slate-200 elev-2 p-6 md:p-8" data-testid="card-cost-breakdown">
      <h3 className="text-xl font-extrabold text-slate-900">Cost Breakdown</h3>
      <p className="text-slate-700 text-sm">See where the dollars go—fix under-priced work before it repeats.</p>

      <div className="mt-4">
        <Waterfall bars={bars} />
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs">
        <Chip k="Labor" v={`$${format(costs.labor)}`} />
        <Chip k="Materials" v={`$${format(costs.materials)}`} />
        <Chip k="Overhead" v={`$${format(costs.overhead)}`} />
      </div>
    </article>
  );
}

function Waterfall({ bars }: { bars: Array<{ k: string; v: number; color: string }> }) {
  const W = 520;
  const H = 113;      // compact canvas
  const baseY = 80;   // baseline
  const gap = 14;
  const padX = 16;

  const maxAbs = Math.max(1, ...bars.map(b => Math.abs(b.v)));
  const maxBarH = 68;
  const scale = maxBarH / maxAbs;
  const barW = Math.floor((W - padX * 2 - gap * (bars.length - 1)) / bars.length);

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="113"
        role="img"
        aria-label="Cost breakdown"
        className="block"
      >
        <line x1={padX} y1={baseY} x2={W - padX} y2={baseY} stroke="#E5E7EB" strokeWidth="2" />

        {bars.map((b, i) => {
          const h = Math.max(4, Math.round(Math.abs(b.v) * scale));
          const x = padX + i * (barW + gap);
          const y = baseY - h;
          return (
            <g key={i}>
              <rect x={x} y={y} width={barW} height={h} rx="2" fill={b.color} />
              <text
                x={x + barW / 2}
                y={baseY + 15}          // 3px gap + 12px text height = labels below baseline
                textAnchor="middle"
                className="fill-slate-700"
                style={{ fontSize: 12 }}
              >
                {b.k}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function ProjectFiles({ files }: { files: Array<{ name: string; meta: string }> }) {
  return (
    <article className="bg-white ring-1 ring-slate-200 elev-2 p-6 md:p-8" data-testid="card-project-files">
      <header className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="text-xl font-extrabold text-slate-900">Project Files</h3>
        <button className="px-3 py-1.5 text-xs font-extrabold text-white rounded-none bg-slate-900" data-testid="button-add-file">Add file</button>
      </header>
      <ul className="mt-4 divide-y divide-slate-200">
        {files.map((f,i)=>(
          <li key={i} className="py-3 flex items-center justify-between text-sm" data-testid={`file-item-${i}`}>
            <div className="flex items-center gap-3">
              <span className="h-6 w-6 bg-[#0B5FFF]" aria-hidden="true" />
              <div>
                <div className="font-semibold text-slate-900">{f.name}</div>
                <div className="text-slate-500 text-xs">{f.meta}</div>
              </div>
            </div>
            <a href="#" className="font-semibold link-underline text-[#0B5FFF]" data-testid={`link-view-file-${i}`}>View</a>
          </li>
        ))}
      </ul>
    </article>
  );
}

function VisitsTimeline({ visits }: { visits: Array<{ when: string; label: string; status: string; color: string }> }) {
  return (
    <article className="bg-white ring-1 ring-slate-200 elev-2 p-6 md:p-8" data-testid="card-visits-timeline">
      <h3 className="text-xl font-extrabold text-slate-900">Visits Timeline</h3>
      <ul className="mt-4 space-y-3">
        {visits.map((v,i)=>(
          <li key={i} className="flex items-center justify-between text-sm" data-testid={`visit-item-${i}`}>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2" style={{background:v.color}} aria-hidden="true" />
              <div className="text-slate-800">{v.when} — {v.label}</div>
            </div>
            <span className="px-2 py-0.5 text-xs border border-slate-300">{v.status}</span>
          </li>
        ))}
      </ul>
      <a href="/features#projects" className="mt-4 inline-flex items-center font-semibold link-underline text-[#0B5FFF]" data-testid="link-project-tools">
        See project tools →
      </a>
    </article>
  );
}

function Chip({ k, v }: { k: string; v: string }) {
  return (
    <div className="border border-slate-300 bg-white px-3 py-2">
      <div className="text-slate-500">{k}</div>
      <div className="font-semibold text-slate-800">{v}</div>
    </div>
  );
}

function format(n: number){ return n.toLocaleString(); }
