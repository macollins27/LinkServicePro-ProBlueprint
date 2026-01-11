import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ClipboardCheck, FileSignature, CreditCard, LucideIcon } from "lucide-react";
import { ButtonsRow, StartFreeButton, ViewPricingButton } from "@/components/Buttons";

interface StepItem {
  key: "estimates" | "scheduling" | "workorders" | "invoicing";
  number: number;
  icon: LucideIcon;
  title: string;
  outcome: string;
  bullets: string[];
  links: { href: string; text: string }[];
  chips: string[];
  media: {
    img: string;
    video: string;
  };
}

const STEPS: StepItem[] = [
  {
    key: "estimates",
    number: 1,
    icon: FileSignature,
    title: "Estimates + E-Sign",
    outcome: "Win rate rises and sales cycle shrinks.",
    bullets: [
      "Send professional quotes from phone or desktop.",
      "E-sign approvals convert to work orders.",
      "Automated follow-ups until yes."
    ],
    links: [
      { href: "/features/quote-builder", text: "Quote Builder" },
      { href: "/features/esign", text: "E-Sign" },
      { href: "/features/2-way-messaging", text: "2-Way Messaging" }
    ],
    chips: ["Templates", "Options", "E-sign", "Reminders"],
    media: {
      img: "/img/previews/estimates.jpg",
      video: "/video/estimates.webm"
    }
  },
  {
    key: "scheduling",
    number: 2,
    icon: CalendarDays,
    title: "Scheduling",
    outcome: "Stop double-booking and shave miles every day.",
    bullets: [
      "Drag to assign; conflicts auto-checked.",
      "Live map and routes cut drive time.",
      "Instant ETA texts to customers."
    ],
    links: [
      { href: "/features/drag-and-drop-scheduling", text: "Drag-and-Drop Scheduling" },
      { href: "/features/dispatch-board", text: "Dispatch Board + Map" },
      { href: "/features/route-optimization", text: "Route Optimization" }
    ],
    chips: ["No double-booking", "Crew balance", "iOS & Android", "2-way SMS"],
    media: {
      img: "/img/previews/scheduling.jpg",
      video: "/video/scheduling.webm"
    }
  },
  {
    key: "workorders",
    number: 3,
    icon: ClipboardCheck,
    title: "Work Orders",
    outcome: "Clean handoffs and more first-time fixes.",
    bullets: [
      "Details, photos, checklists in one place.",
      "Track time, parts, signatures on site.",
      "Works offline; syncs when online."
    ],
    links: [
      { href: "/features/work-orders", text: "Work Orders" },
      { href: "/features/project-tracking", text: "Projects" },
      { href: "/features/customer-portal", text: "Customer Portal" }
    ],
    chips: ["Checklists", "Photos", "Parts", "Roles"],
    media: {
      img: "/img/previews/workorders.jpg",
      video: "/video/workorders.webm"
    }
  },
  {
    key: "invoicing",
    number: 4,
    icon: CreditCard,
    title: "Invoicing + Payments",
    outcome: "Days-to-paid drop; cash flow steadies.",
    bullets: [
      "Invoice in the field; deposits and partials.",
      "Batch billing before crews clock out.",
      "Cards and ACH with receipts."
    ],
    links: [
      { href: "/features/invoicing", text: "Invoicing" },
      { href: "/features/payments", text: "Payments" },
      { href: "/features/accounting-sync", text: "QuickBooks/Xero Sync" }
    ],
    chips: ["Batch billing", "Deposits", "ACH/Cards", "AR reminders"],
    media: {
      img: "/img/previews/invoicing.jpg",
      video: "/video/invoicing.webm"
    }
  }
];

function MediaPane({ step }: { step: StepItem }) {
  const [mediaType, setMediaType] = useState<"video" | "image" | "placeholder">("placeholder");
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    // Reset media type when step changes
    setMediaType("placeholder");

    // Try video first if motion is allowed
    if (!prefersReducedMotion) {
      const video = document.createElement("video");
      video.src = step.media.video;
      video.onloadedmetadata = () => setMediaType("video");
      video.onerror = () => tryImage();
    } else {
      tryImage();
    }

    function tryImage() {
      const img = new Image();
      img.src = step.media.img;
      img.onload = () => setMediaType("image");
      img.onerror = () => setMediaType("placeholder");
    }
  }, [step.key, prefersReducedMotion, step.media.video, step.media.img]);

  useEffect(() => {
    // Auto-play video when it becomes active
    if (mediaType === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback to image if video play fails
        setMediaType("image");
      });
    }
  }, [mediaType]);

  return (
    <div className="aspect-video bg-slate-100">
      {mediaType === "video" && (
        <video
          ref={videoRef}
          src={step.media.video}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          autoPlay
        />
      )}
      {mediaType === "image" && (
        <img
          src={step.media.img}
          alt={`${step.title} preview`}
          className="w-full h-full object-cover"
        />
      )}
      {mediaType === "placeholder" && (
        <div className="w-full h-full grid place-items-center text-slate-400 text-sm">
          Preview
        </div>
      )}
    </div>
  );
}

export default function ContractorWorkflowRail() {
  const [active, setActive] = useState<"estimates" | "scheduling" | "workorders" | "invoicing">("estimates");
  const activeStep = STEPS.find(s => s.key === active)!;
  const ActiveIcon = activeStep.icon;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const currentIdx = STEPS.findIndex(s => s.key === active);
      const nextIdx = (currentIdx + 1) % STEPS.length;
      setActive(STEPS[nextIdx].key);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const currentIdx = STEPS.findIndex(s => s.key === active);
      const prevIdx = (currentIdx - 1 + STEPS.length) % STEPS.length;
      setActive(STEPS[prevIdx].key);
    }
  };

  return (
    <section aria-labelledby="rail-h2" className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h2 id="rail-h2" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            From quote to paid—one clean rail
          </h2>
          <p className="text-slate-700">
            Estimates, scheduling, work orders, and invoicing—step by step for crews in the field.
          </p>
        </header>

        {/* GRID: numbered stepper left, evidence pane right */}
        <div className="grid gap-4 lg:grid-cols-[380px_1fr] items-start">
          {/* LEFT: Numbered stepper */}
          <aside className="lg:sticky lg:top-20">
            <ol role="listbox" aria-label="Workflow steps" className="space-y-2">
              {STEPS.map((step) => {
                const isActive = active === step.key;
                return (
                  <li key={step.key}>
                    <button
                      role="option"
                      aria-selected={isActive}
                      onClick={() => setActive(step.key)}
                      onKeyDown={handleKeyDown}
                      data-active={isActive}
                      className={`w-full text-left grid grid-cols-[28px_1fr] gap-3 p-4 ring-1 ring-slate-200 bg-white elev-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 ${
                        isActive ? "border-l-4 border-[#0B5FFF] bg-slate-50" : ""
                      }`}
                      data-testid={`step-${step.key}`}
                    >
                      {/* Number badge */}
                      <div className="w-6 h-6 rounded-full bg-[#0B5FFF] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <step.icon className="h-5 w-5 text-[#0B5FFF]" strokeWidth={2.25} aria-hidden="true" />
                          <div className="font-extrabold text-slate-900">{step.title}</div>
                        </div>
                        <ul className="mt-2 space-y-1 text-xs text-slate-700">
                          {step.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#0B5FFF] mt-0.5">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </aside>

          {/* RIGHT: Evidence pane */}
          <article className="ring-1 ring-slate-200 bg-white elev-2">
            {/* Header */}
            <header className="p-5 bg-slate-50 grid grid-cols-[48px_1fr] gap-3 items-center">
              <ActiveIcon className="h-12 w-12 text-[#0B5FFF]" strokeWidth={2.25} aria-hidden="true" />
              <div>
                <h3 className="text-xl font-extrabold text-slate-900" aria-live="polite" data-testid="evidence-title">
                  {activeStep.title}
                </h3>
                <p className="text-sm text-slate-600">{activeStep.outcome}</p>
              </div>
            </header>

            {/* Media area */}
            <div className="p-0">
              <MediaPane step={activeStep} />
            </div>

            {/* Links and chips */}
            <div className="p-5">
              <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[#0B5FFF] font-semibold">
                {activeStep.links.map(l => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                    data-testid={`link-${l.text.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {l.text}
                  </Link>
                ))}
              </nav>

              {/* Spec chips grid */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-slate-800">
                {activeStep.chips.map((c, i) => (
                  <div key={i} className="px-2 py-1 ring-1 ring-slate-200 bg-white" data-testid={`chip-${c.toLowerCase().replace(/\s+/g, "-")}`}>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* CTAs */}
        <div className="mt-6">
          <ButtonsRow>
            <StartFreeButton context="light" />
            <ViewPricingButton context="light" />
          </ButtonsRow>
        </div>
      </div>
    </section>
  );
}
