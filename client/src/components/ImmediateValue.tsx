import { useEffect, useMemo, useState } from "react";
import immediateValueImage from "@assets/generated_images/Service_owner_by_branded_van_4f4c9b4b.png";

export default function ImmediateValue() {
  const [techs, setTechs] = useState(3);
  const [hours, setHours] = useState(10);
  const monthlySavings = useMemo(() => techs * hours * 35, [techs, hours]);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-14 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(1200px 300px at 50% -100px, rgba(11,95,255,.18), transparent)",
        }}
      />
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="heading-immediate-value">
            Results you can feel in 30 days.
          </h2>
          <p className="text-slate-700">Save time, win more jobs, and get paid sooner - without changing how you work in the field.</p>
        </header>

        <div className="mb-6 lg:mb-8">
          <img 
            src={immediateValueImage} 
            alt="Confident field service business owner standing by branded service van" 
            className="w-full h-48 sm:h-64 lg:h-80 object-cover ring-1 ring-slate-200"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <article className="bg-white ring-1 ring-slate-200 elev-2 p-6 sm:p-8">
            <ul className="space-y-3">
              <WinRow
                color="#0B5FFF"
                title="Save 6–10 hrs/week"
                body="Drag-and-drop schedule + automated reminders."
              />
              <WinRow
                color="#00C2A8"
                title="+22% quote win rate"
                body="E-sign quotes that convert to work orders in one tap."
              />
              <WinRow
                color="#F59E0B"
                title="–3 days to paid"
                body="Deposits, partials, and batch invoicing with sync."
              />
            </ul>
          </article>

          <article className="bg-white ring-1 ring-slate-200 elev-2 p-6 sm:p-8">
            <h3 className="text-lg font-extrabold text-slate-900">Your month, quantified</h3>
            <p className="text-slate-700 text-sm">Estimate time savings from scheduling + invoicing.</p>

            <div className="mt-4 space-y-4">
              <Control
                label="Technicians"
                value={techs}
                setValue={setTechs}
                min={1}
                max={20}
                reduced={reduced}
                testId="technicians"
              />
              <Control
                label="Hrs saved / tech / month"
                value={hours}
                setValue={setHours}
                min={4}
                max={40}
                reduced={reduced}
                testId="hours-saved"
              />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <Stat label="Estimated savings" value={`$${monthlySavings.toLocaleString()}/mo`} />
              <Stat label="Annualized" value={`$${(monthlySavings * 12).toLocaleString()}/yr`} />
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Uses $35/hr blended rate. Adjust in app for your team.
            </p>
          </article>

          <aside className="bg-white ring-1 ring-slate-200 elev-2 p-6 sm:p-8">
            <div className="text-amber-500" aria-hidden="true">★★★★★</div>
            <blockquote className="mt-2 text-slate-800">
              "Scheduling is under 5 minutes now and invoices go out same day.
              Customers love the portal."
            </blockquote>
            <div className="mt-3 text-sm">
              <span className="font-semibold text-slate-900">Maya Lopez</span> ·
              BrightPath Cleaning
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <Badge kpi="4.8★" label="App Store" />
              <Badge kpi="4.6★" label="Google" />
              <Badge kpi="SOC2" label="Security" />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Logo />
              <Logo />
              <Logo />
            </div>
          </aside>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="#pricing"
            className="px-4 py-2 font-extrabold bg-slate-900 text-white rounded-none hover-elevate active-elevate-2"
            data-testid="link-get-started"
          >
            Get started free
          </a>
          <a
            href="/features"
            className="inline-flex items-center font-semibold link-underline text-[#0B5FFF]"
            data-testid="link-see-features"
          >
            See all features →
          </a>
        </div>
      </div>
    </section>
  );
}

interface WinRowProps {
  color: string;
  title: string;
  body: string;
}

function WinRow({ color, title, body }: WinRowProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="h-4 w-4" style={{ background: color }} aria-hidden="true" />
      <div>
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="text-slate-700 text-sm">{body}</div>
      </div>
    </li>
  );
}

interface ControlProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  reduced: boolean;
  testId: string;
}

function Control({ label, value, setValue, min, max, reduced, testId }: ControlProps) {
  return (
    <label className="block">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-700">{label}</span>
        <span className="font-semibold text-slate-900" data-testid={`value-${testId}`}>{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value, 10))}
        className="w-full accent-[#0B5FFF] mt-2"
        style={reduced ? { transition: "none" } : {}}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={label}
        data-testid={`slider-${testId}`}
      />
      <div className="flex justify-between text-xs text-slate-500">
        <span>{min}</span><span>{max}</span>
      </div>
    </label>
  );
}

interface StatProps {
  label: string;
  value: string;
}

function Stat({ label, value }: StatProps) {
  return (
    <div className="border border-slate-200 px-3 py-2">
      <div className="text-slate-500 text-xs">{label}</div>
      <div className="font-extrabold text-slate-900" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>{value}</div>
    </div>
  );
}

interface BadgeProps {
  kpi: string;
  label: string;
}

function Badge({ kpi, label }: BadgeProps) {
  return (
    <div className="border border-slate-200 px-3 py-2">
      <div className="text-slate-900 font-extrabold">{kpi}</div>
      <div className="text-slate-500 text-xs">{label}</div>
    </div>
  );
}

function Logo() {
  return <div className="h-6 w-16 bg-slate-200" aria-hidden="true" />;
}
