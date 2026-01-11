import * as React from "react";
import "../styles/workflow-white.css";

const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="4" width="18" height="17" rx="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="8" y1="2.5" x2="8" y2="6"></line>
    <line x1="16" y1="2.5" x2="16" y2="6"></line>
  </svg>
);
const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
  </svg>
);
const IconCredit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <line x1="2" y1="10" x2="22" y2="10"></line>
  </svg>
);
const IconRepeat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <polyline points="17 1 21 5 17 9"></polyline>
    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
    <polyline points="7 23 3 19 7 15"></polyline>
    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
  </svg>
);

type Card = {
  icon: React.ReactNode;
  title: string;
  lead: string;
  bullets: string[];
  href: string;
  linkText: string;
  chips: string[];
};

const CARDS: Card[] = [
  {
    icon: <IconCalendar />,
    title: "Schedule & Dispatch",
    lead: "Assign jobs in minutes, route crews, and keep the day on track.",
    bullets: [
      "Visual calendar with drag-and-drop job assignment",
      "GPS-optimized routing to reduce drive time",
      "Real-time crew notifications and job updates"
    ],
    href: "/features/scheduling-dispatch",
    linkText: "Explore Scheduling →",
    chips: ["Live map", "Route optimizer", "Drag & drop"]
  },
  {
    icon: <IconDoc />,
    title: "Estimates & Quotes",
    lead: "Create clean, professional estimates and get approvals fast.",
    bullets: [
      "Pre-built templates for common services",
      "Digital signatures and instant customer approval",
      "One-click conversion from quote to scheduled job"
    ],
    href: "/features/estimates-quotes",
    linkText: "Build Better Quotes →",
    chips: ["Templates", "E-sign", "1-click convert"]
  },
  {
    icon: <IconCredit />,
    title: "Invoicing & Payments",
    lead: "Invoice the same day and collect payments without the paper chase.",
    bullets: [
      "Mobile payment processing at the job site",
      "Automated payment reminders and follow-ups",
      "Full payment history and accounting integration"
    ],
    href: "/features/invoicing-payments",
    linkText: "See Invoicing →",
    chips: ["Tap to pay", "Reminders", "AR ledger"]
  },
  {
    icon: <IconRepeat />,
    title: "Maintenance Plans",
    lead: "Turn one-offs into predictable revenue with recurring visits.",
    bullets: [
      "Automated scheduling for recurring service visits",
      "Contract management with renewal reminders",
      "Recurring billing with automatic payment collection"
    ],
    href: "/features/maintenance-plans",
    linkText: "Maintenance Plans →",
    chips: ["Auto-schedule", "Contracts", "Auto-pay"]
  }
];

export default function WorkflowWhite() {
  return (
    <section className="wf-section cozy" aria-labelledby="wf-heading">
      <div className="container mx-auto px-4 py-12">
        <p className="uppercase tracking-wide text-[12px] text-slate-500 font-semibold mb-2">WORKFLOW</p>
        <h2 id="wf-heading" className="text-[28px] md:text-[34px] font-black leading-tight mb-2">
          From first call to cash—one <span className="wf-mark">clean flow</span>
        </h2>
        <p className="text-[15px] text-slate-600 mb-6 max-w-3xl">
          LinkServicePro unifies the everyday steps contractors actually run:
          schedule the job, win the work, get paid, and lock in recurring revenue.
        </p>

        <div className="wf-grid">
          {CARDS.map((c) => (
            <article key={c.title} className="wf-card">
              <div className="wf-title">
                <div className="wf-icon">{c.icon}</div>
                <h3>{c.title}</h3>
              </div>

              <div className="wf-chips" aria-hidden="true">
                {c.chips.map((chip) => (
                  <span key={chip} className="wf-chip">{chip}</span>
                ))}
              </div>

              <p className="wf-lead">{c.lead}</p>
              <ul className="wf-bullets">
                {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <a className="wf-link" href={c.href}>{c.linkText}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
