import { useState } from "react";
import ProcessNav from "./ProcessNav";
import paymentImage from "@assets/generated_images/Contractor_greeting_homeowner_at_property_00738028.png";

const STEPS = [
  {
    id: "quote",
    title: "Quote",
    color: "#0B5FFF",
    bullets: [
      "Professional estimates with line items and photos.",
      "E-signature approval built in.",
      "Auto-converts to work orders.",
    ],
    kpis: ["+22% win rate", "Same-day approvals"],
  },
  {
    id: "work",
    title: "Work Order",
    color: "#00C2A8",
    bullets: [
      "Job details and crew assignments.",
      "Built-in safety checklists.",
      "Request deposits or partials.",
    ],
    kpis: ["Fewer callbacks", "Setup in < 60s"],
  },
  {
    id: "paid",
    title: "Get Paid",
    color: "#F59E0B",
    bullets: [
      "Auto-generated invoices from work orders.",
      "Deposits and partials supported.",
      "Days-to-paid goes down.",
    ],
    kpis: ["-3 days to paid", "Batch invoicing"],
  },
];

export default function QuoteToPaymentFlow() {
  const [active, setActive] = useState(STEPS[0].id);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 spot-bg overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">From Quote to Payment</h2>
          <p className="text-slate-700">Turn estimates into work orders and get paid faster.</p>
        </header>

        <div className="mb-6 lg:mb-8">
          <img 
            src={paymentImage} 
            alt="Professional plumber shaking hands with homeowner at front door" 
            className="w-full h-48 sm:h-64 lg:h-80 object-cover object-top ring-1 ring-slate-200"
          />
        </div>

        {/* Stepper */}
        <ProcessNav steps={STEPS} active={active} onChange={setActive} />

        {/* Panels */}
        {STEPS.map((s) => {
          const selected = s.id === active;
          return (
            <div
              key={s.id}
              role="tabpanel"
              id={`panel-${s.id}`}
              aria-labelledby={`tab-${s.id}`}
              hidden={!selected}
              className="mt-6 sm:mt-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
                {/* Left: explanation */}
                <article className="bg-white ring-1 ring-slate-200 elev-2 p-6 md:p-8">
                  <header className="flex items-center gap-3 mb-3">
                    <div className="h-5 w-5" style={{ background: s.color }} aria-hidden="true" />
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{s.title}</h3>
                  </header>
                  <ul className="space-y-2 text-slate-800">
                    {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.kpis.map((k, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs border border-slate-300 text-slate-800" style={{ borderColor: s.color }}>
                        {k}
                      </span>
                    ))}
                  </div>
                  <a href="/features#quotes" className="mt-5 inline-flex items-center font-semibold link-underline text-[#0B5FFF]" data-testid="link-see-how-it-works">
                    See how it works →
                  </a>
                </article>

                {/* Right: mini visual mock */}
                <VisualMock step={s.id} color={s.color} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function VisualMock({ step, color }: { step: string; color: string }) {
  if (step === "quote") return (
    <div className="bg-white ring-1 ring-slate-200 elev-2 p-5">
      <div className="border border-slate-200">
        <header className="px-4 py-2 border-b border-slate-200 flex items-center justify-between">
          <div className="font-semibold text-slate-800">Estimate #1047</div>
          <span className="text-slate-500 text-sm">Customer • 2 items</span>
        </header>
        <div className="px-4 py-3 space-y-2 text-sm">
          <div className="flex justify-between"><span>Leak repair</span><span>$280.00</span></div>
          <div className="flex justify-between"><span>Service call</span><span>$89.00</span></div>
          <div className="flex justify-between pt-2 border-t border-slate-200 font-semibold"><span>Total</span><span>$369.00</span></div>
        </div>
        <div className="px-4 pb-4">
          <svg viewBox="0 0 240 60" className="w-full h-12 scribble" aria-hidden="true">
            <path d="M10 45 C40 15, 60 25, 90 45 S150 55, 230 20" fill="none" stroke={color} strokeWidth="3" />
          </svg>
          <div className="mt-2 flex gap-2">
            <span className="px-3 py-2 text-xs font-semibold text-white bg-slate-800 rounded-none" aria-hidden="true">Decline</span>
            <span className="px-3 py-2 text-xs font-extrabold text-white rounded-none" style={{ background: color }} aria-hidden="true">Approve</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (step === "work") return (
    <div className="bg-white ring-1 ring-slate-200 elev-2 p-5">
      <div className="border border-slate-200">
        <header className="px-4 py-2 border-b border-slate-200 flex items-center justify-between">
          <div className="font-semibold text-slate-800">Work Order • 1047-A</div>
          <span className="inline-flex items-center justify-center h-6 w-6 text-[10px] font-bold text-white" style={{ background: color }}>AL</span>
        </header>
        <div className="px-4 py-3 text-sm space-y-2">
          <Check label="Shut off water supply" />
          <Check label="Replace valve and test" />
          <Check label="Upload before/after photos" />
        </div>
        <div className="px-4 pb-4">
          <span className="px-3 py-2 text-xs font-extrabold text-white rounded-none" style={{ background: color }} aria-hidden="true">Dispatch</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative bg-white ring-1 ring-slate-200 elev-2 p-5">
      <div className="border border-slate-200">
        <header className="px-4 py-2 border-b border-slate-200 flex items-center justify-between">
          <div className="font-semibold text-slate-800">Invoice #1047</div>
          <span className="text-slate-500 text-sm">Due on receipt</span>
        </header>
        <div className="px-4 py-3 space-y-2 text-sm">
          <div className="flex justify-between"><span>Leak repair</span><span>$280.00</span></div>
          <div className="flex justify-between"><span>Service call</span><span>$89.00</span></div>
          <div className="flex justify-between pt-2 border-t border-slate-200 font-semibold"><span>Total</span><span>$369.00</span></div>
        </div>
        <div className="px-4 pb-4 grid grid-cols-3 gap-2 text-xs">
          <Chip k="Deposit" v="$100" />
          <Chip k="Balance" v="$269" />
          <Chip k="Method" v="Card" />
        </div>
      </div>
      <div className="stamp-paid" style={{ borderColor: color, color }}>
        PAID
      </div>
    </div>
  );
}

function Check({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2">
      <span className="h-3.5 w-3.5 border border-slate-400 grid place-items-center">
        <svg width="10" height="10" viewBox="0 0 12 10" aria-hidden="true"><path d="M1 5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
      </span>
      <span className="text-slate-800">{label}</span>
    </label>
  );
}

function Chip({ k, v }: { k: string; v: string }) {
  return (
    <div className="border border-slate-300 bg-white px-3 py-2">
      <div className="text-slate-500">{k}</div>
      <div className="font-semibold">{v}</div>
    </div>
  );
}
