import * as React from "react";
import PortalTooltip from "../ui/PortalTooltip";
import { Check, Minus, X, Info } from "lucide-react";
import { Link } from "react-router-dom";

/* ---------- DATA MODEL ---------- */
type ColKey = "project" | "labor" | "gps" | "assets";
type RowKey = "lsp" | "other_fsm" | "sheets";
type CellState = "yes" | "partial" | "no";

const COLUMNS: { key: ColKey; label: string; tooltip: string }[] = [
  { key: "project", label: "Project Management (multi–work orders)", tooltip: "One project → many work orders, estimates, invoices—all linked." },
  { key: "labor", label: "Employee Labor & Payroll", tooltip: "Wages + pay rules tied to time; project totals and payroll export." },
  { key: "gps", label: "GPS-Verified Timesheets", tooltip: "Geo-verified in/out; hours summed at the project." },
  { key: "assets", label: "Asset Tracking & Inspection Integrations", tooltip: "Property Organizer + Link Inspect Pro linked to projects/jobs." },
];

const ROWS: { key: RowKey; label: string; help?: string }[] = [
  { key: "lsp", label: "LinkServicePro" },
  { key: "other_fsm", label: "Other FSM Software (generic)", help: "Common patterns across vendors; availability varies by plan/version." },
  { key: "sheets", label: "Spreadsheets (Excel/Sheets)", help: "Workarounds with tabs/forms; no unified job/project record." },
];

const STATES: Record<RowKey, Record<ColKey, CellState>> = {
  lsp:       { project: "yes",     labor: "yes",     gps: "yes",     assets: "yes" },
  other_fsm: { project: "partial", labor: "partial", gps: "partial", assets: "partial" },
  sheets:    { project: "partial", labor: "partial", gps: "no",      assets: "no" },
};

const SR_LABEL: Record<CellState, string> = {
  yes: "Included",
  partial: "Partial",
  no: "Missing",
};

/* ---------- HELPERS ---------- */
function StateIcon({ state }: { state: CellState }) {
  if (state === "yes") return <Check className="h-5 w-5 text-emerald-400" aria-hidden />;
  if (state === "partial") return <Minus className="h-5 w-5 text-amber-400" aria-hidden />;
  return <X className="h-5 w-5 text-rose-400" aria-hidden />;
}

/* ---------- COMPONENT ---------- */
export default function WhySwitchTable() {
  const tableRef = React.useRef<HTMLDivElement>(null);

  return (
    <section className="relative isolate py-16 sm:py-20 lg:py-24 bg-[#0A1326]">
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(11, 95, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11, 95, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* container must match your global container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest text-white/60 uppercase">See it in one table</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Why Teams Switch</h2>
          <p className="mt-3 text-white/80">
            Projects with real dollars, hours, assets, and conversations—kept in one place so work flows and cash lands sooner.
          </p>
        </header>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
          <LegendItem color="text-emerald-400" label="Included" />
          <LegendItem color="text-amber-400" label="Partial / workaround" tooltip="Partial or requires workarounds. Some steps may be manual or split across tools." />
          <LegendItem color="text-rose-400" label="Missing" />
        </div>

        {/* Scroll container */}
        <div ref={tableRef} className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-white/5">
          <TableInner />
        </div>

        {/* Footnote */}
        <p className="mt-3 text-xs text-white/50">
          Generic rows reflect common patterns; availability varies by vendor/version.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to="/signup" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-slate-900">
            Get Started Free
          </Link>
          <Link to="/contact" className="rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 focus:ring-offset-slate-900">
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- SUB-COMPONENTS ---------- */
function LegendItem({ color, label, tooltip }: { color: string; label: string; tooltip?: string }) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex items-center gap-2">
      <span className={`inline-flex h-4 w-4 items-center justify-center`} aria-hidden>
        <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
      </span>
      <span className="text-white/80">{label}</span>
      {tooltip && (
        <>
          <button
            ref={ref}
            type="button"
            className="ml-1 inline-flex items-center text-white/60 hover:text-white/80 focus:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
            aria-describedby="legend-partial-tip"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
          >
            <Info className="h-4 w-4" />
          </button>
          <PortalTooltip anchorRef={ref} open={open} onClose={() => setOpen(false)}>
            {tooltip}
          </PortalTooltip>
        </>
      )}
    </div>
  );
}

function TableInner() {
  return (
    <table className="min-w-full border-collapse table-fixed">
      <colgroup>
        <col className="w-[28%]" />
        <col className="w-[18%]" />
        <col className="w-[18%]" />
        <col className="w-[18%]" />
        <col className="w-[18%]" />
      </colgroup>
      <thead className="bg-white/5 sticky top-0 z-10">
        <tr>
          {/* First col header */}
          <th scope="col" className="sticky left-0 z-20 bg-white/5 px-4 py-3 text-left text-xs font-semibold tracking-wider text-white/70 w-[28%] min-w-[28%]">
            SOLUTION
          </th>

          {COLUMNS.map((c) => (
            <ThHeader key={c.key} label={c.label} tip={c.tooltip} />
          ))}
        </tr>
      </thead>

      <tbody>
        {ROWS.map((row) => (
          <tr key={row.key} className="border-t border-white/10">
            {/* Row label */}
            <th
              scope="row"
              className="sticky left-0 z-10 bg-slate-900/80 backdrop-blur px-4 py-4 text-left font-medium text-white w-[28%] min-w-[28%]"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="leading-snug">{row.label}</span>
                {row.help && <RowHelp text={row.help} />}
              </div>
            </th>

            {COLUMNS.map((c) => {
              const state = STATES[row.key as RowKey][c.key];
              return (
                <td key={c.key} className="px-4 py-4 text-center align-middle">
                  <span className="inline-flex items-center justify-center">
                    <span className="sr-only">{SR_LABEL[state]}</span>
                    <StateIcon state={state} />
                  </span>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ThHeader({ label, tip }: { label: string; tip: string }) {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  return (
    <th scope="col" className="px-4 py-3 text-left align-bottom">
      <div className="flex items-start gap-1">
        {/* Let the label use full width and wrap to two lines */}
        <span className="block text-xs font-semibold tracking-wider text-white/70 leading-snug line-clamp-2 whitespace-normal">
          {label}
        </span>
        <button
          ref={btnRef}
          type="button"
          className="mt-0.5 inline-flex items-center text-white/60 hover:text-white/80 focus:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
          aria-label={`About ${label}`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        >
          <Info className="h-4 w-4" />
        </button>
        <PortalTooltip anchorRef={btnRef} open={open} onClose={() => setOpen(false)}>
          {tip}
        </PortalTooltip>
      </div>
    </th>
  );
}

function RowHelp({ text }: { text: string }) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        ref={ref}
        type="button"
        className="text-xs text-white/60 hover:text-white/80 focus:text-white/80 underline underline-offset-4"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        What this means
      </button>
      <PortalTooltip anchorRef={ref} open={open} onClose={() => setOpen(false)} prefer="bottom">
        {text}
      </PortalTooltip>
    </>
  );
}
