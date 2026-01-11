import * as React from "react";
import "./../styles/why-switch-white.css";

type State = "yes" | "partial" | "no";
type Side = { state: State; oneLine: string; details?: string[] };

type Feature = {
  key: string;
  title: string;
  lsp: Side;
  other_fsm: Side;
  sheets: Side;
  icon?: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    key: "project",
    title: "Project Management (multi–work orders)",
    lsp:   { state: "yes",     oneLine: "One project → many work orders, estimates, invoices—all linked.",
             details: ["Schedule multiple tickets under one project.", "Roll-up billing or per-ticket invoicing."] },
    other_fsm: { state: "partial", oneLine: "Tickets exist; true project roll-ups vary by product/plan.",
             details: ["Projects spread across modules; linkage is inconsistent.", "Roll-ups often manual."] },
    sheets: { state: "partial", oneLine: "Tabs approximate projects; no automatic linkage.",
             details: ["Copy/paste between tabs.", "No project timeline."] }
  },
  {
    key: "labor",
    title: "Employee Labor & Payroll",
    lsp:   { state: "yes",     oneLine: "Wages & rules tied to time; project totals and payroll export.",
             details: ["Track hours per project with overtime rules.", "Export or sync to payroll."] },
    other_fsm: { state: "partial", oneLine: "Time capture common; wage rules/payroll export vary by tier.",
             details: ["Often requires add-ons.", "Totals rarely roll up cleanly at project."] },
    sheets: { state: "partial", oneLine: "Formulas possible; error-prone and manual.",
             details: ["No pay rules engine.", "No audit trail."] }
  },
  {
    key: "gps",
    title: "GPS-Verified Timesheets",
    lsp:   { state: "yes",     oneLine: "Geo-verified in/out; hours summed at the project.",
             details: ["Location checks at clock events.", "Reduces time fraud; improves job costing."] },
    other_fsm: { state: "partial", oneLine: "GPS exists, but project-level roll-ups vary.",
             details: ["Geo attached to the person, not the project.", "Summaries require exports."] },
    sheets: { state: "no", oneLine: "No GPS verification.",
             details: ["Manual entry only.", "No location context."] }
  },
  {
    key: "assets",
    title: "Asset Tracking & Inspection Integrations",
    lsp:   { state: "yes",     oneLine: "Property Organizer + Link Inspect Pro tied to jobs/projects.",
             details: ["Asset files, photos, and inspections live on the timeline.", "Reports attached to work orders."] },
    other_fsm: { state: "partial", oneLine: "Integrations limited or gated; linkage inconsistent.",
             details: ["Assets exist, inspection flows vary.", "Cross-module context gets lost."] },
    sheets: { state: "no", oneLine: "No structured assets or inspections.",
             details: ["Files live in drives/email.", "No audit trail."] }
  }
];

const CONTEXTS = [
  { key: "other_fsm", label: "Other FSM" },
  { key: "sheets", label: "Spreadsheets" }
] as const;

function StateIcon({ s }: { s: State }) {
  if (s === "yes")   return <span className="wsw-yes" aria-hidden>✓</span>;
  if (s === "no")    return <span className="wsw-no" aria-hidden>✕</span>;
  return <span className="wsw-partial" aria-hidden>–</span>;
}

export default function WhySwitchWhite() {
  const [ctx, setCtx] = React.useState<(typeof CONTEXTS)[number]>(CONTEXTS[0]);

  const winsLsp   = FEATURES.filter(f => f.lsp.state === "yes").length;
  const winsOther = FEATURES.filter(f => (f as any)[ctx.key].state === "yes").length;

  return (
    <section className="wsw-section">
      <div className="container mx-auto px-4 py-12">
        <p className="uppercase tracking-wide text-[12px] text-[color:var(--wsw-muted)] font-semibold mb-2">
          SEE IT IN ONE TABLE
        </p>
        <h2 className="text-[28px] md:text-[34px] font-black leading-tight mb-2">
          Why Teams <span className="wsw-mark">Switch</span>
        </h2>
        <p className="text-[15px] text-[color:var(--wsw-muted)] mb-6 max-w-3xl">
          Projects with real dollars, hours, assets, and conversations—kept in one place so work flows and cash lands sooner.
        </p>

        <div className="wsw-tabs mb-3" role="tablist" aria-label="Compare context">
          {CONTEXTS.map(c => (
            <button key={c.key}
              role="tab"
              aria-selected={ctx.key === c.key}
              className="wsw-tab"
              onClick={() => setCtx(c)}
              data-testid={`tab-${c.key}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="wsw-score mb-4">
          <span className="lsp">LinkServicePro: {winsLsp}/4</span> wins vs. {ctx.label}: <span className="ctx">{winsOther}/4</span>
        </div>

        <div className="wsw-grid">
          {FEATURES.map(f => {
            const side = (f as any)[ctx.key] as Side;
            return (
              <article key={f.key} className="wsw-card" data-testid={`card-${f.key}`}>
                <h3>
                  <span className="wsw-mark">{f.title}</span>
                </h3>

                <div className="wsw-row mt-3">
                  <StateIcon s={f.lsp.state} />
                  <div>
                    <div className="wsw-role">LinkServicePro</div>
                    <div className="wsw-oneline">{f.lsp.oneLine}</div>
                  </div>
                </div>

                <div className="wsw-row">
                  <StateIcon s={side.state} />
                  <div>
                    <div className="wsw-role">{ctx.label}</div>
                    <div className="wsw-oneline">{side.oneLine}</div>
                  </div>
                </div>

                <details className="wsw-disclose">
                  <summary className="wsw-toggle" data-testid={`toggle-details-${f.key}`}>Show details</summary>
                  <ul className="wsw-list">
                    {f.lsp.details?.map((d, i) => <li key={`l-${i}`}>{d}</li>)}
                  </ul>
                  <ul className="wsw-list">
                    {side.details?.map((d, i) => <li key={`c-${i}`}>{d}</li>)}
                  </ul>
                </details>
              </article>
            );
          })}
        </div>

        <div className="wsw-cta">
          <span className="wsw-chip">Unlimited users on paid plans</span>
          <span className="wsw-chip">Job-based pricing</span>
          <span className="text-[color:var(--wsw-muted)]">
            Grow crews without per-seat math; pricing aligns to work, not headcount.
          </span>
        </div>

        <div className="mt-5 flex gap-12 flex-wrap items-center justify-center">
          <a className="inline-flex items-center justify-center px-5 py-3 font-bold rounded-lg text-white"
             style={{ background: "var(--wsw-accent)" }} href="/signup" data-testid="button-signup">Get Started Free</a>
          <a className="inline-flex items-center justify-center px-5 py-3 font-bold rounded-lg border"
             style={{ borderColor: "var(--wsw-border)", color: "var(--wsw-text)" }} href="/contact" data-testid="button-contact">Talk to an expert</a>
        </div>

        <p className="mt-3 text-[12px] text-[color:var(--wsw-muted)] text-center">
          Generic comparisons reflect common patterns; availability varies by vendor/version.
        </p>
      </div>
    </section>
  );
}
