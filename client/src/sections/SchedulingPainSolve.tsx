import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, TrendingDown, DollarSign } from "lucide-react";

interface SchedulingPainSolveProps {
  showBlueprintBg?: boolean;
}

export default function SchedulingPainSolve({ showBlueprintBg = false }: SchedulingPainSolveProps) {
  const navigate = useNavigate();

  const handleCTAClick = (placement: string) => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', { placement });
    }
  };

  const pains = [
    "Last-minute cancel at 2:00",
    "Tech stuck in traffic",
    "Double-booked crew",
    "\"Can you come earlier?\"",
    "Overlapping routes",
    "Rain delay"
  ];

  const solves = [
    { action: "Drag to tomorrow 9:00.", outcome: "Customer auto-texted. Slot backfills from waitlist." },
    { action: "Reassign with one drag.", outcome: "Route recalcs. ETA shared." },
    { action: "Drop to first open slot.", outcome: "Clash cleared. No double-booking." },
    { action: "Pull job forward.", outcome: "Parts check runs. New window sent." },
    { action: "Merge nearby jobs.", outcome: "Drive time drops." },
    { action: "Bulk move exterior jobs.", outcome: "Batch notifications go out." }
  ];

  const roiCards = [
    { icon: Clock, text: "Save 2 hrs/tech/week" },
    { icon: TrendingDown, text: "Fewer no-shows" },
    { icon: DollarSign, text: "Faster cash cycle" }
  ];

  return (
    <section 
      className={`px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${showBlueprintBg ? 'bg-blueprint' : 'bg-white'}`}
      data-testid="section-pain-solve"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">
            Kill scheduling chaos
          </h2>
          <p className="text-lg text-slate-600">
            Common field problems paired with the exact fix. Drag, drop, done.
          </p>
        </div>

        {/* Pain → Solve grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {/* Pain column */}
          <div 
            className="bg-white ring-1 ring-slate-200 shadow-sm p-6"
            data-testid="pain-column"
          >
            <h3 className="font-extrabold text-red-700 text-lg mb-4">Pain</h3>
            <ul 
              className="space-y-3"
              aria-label="Common scheduling problems in field service"
            >
              {pains.map((pain, idx) => (
                <li 
                  key={idx} 
                  className="text-slate-700 pl-4 border-l-2 border-red-300"
                  data-testid={`pain-${idx}`}
                >
                  {pain}
                </li>
              ))}
            </ul>
          </div>

          {/* Solve column */}
          <div 
            className="bg-white ring-1 ring-slate-200 shadow-sm p-6"
            data-testid="solve-column"
          >
            <h3 className="font-extrabold text-green-700 text-lg mb-4">Solve</h3>
            <ul 
              className="space-y-3"
              aria-label="Solutions provided by drag-and-drop scheduling"
            >
              {solves.map((solve, idx) => (
                <li 
                  key={idx} 
                  className="text-slate-700 pl-4 border-l-2 border-green-300"
                  data-testid={`solve-${idx}`}
                >
                  <strong>{solve.action}</strong> {solve.outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ROI + CTA row */}
        <div className="space-y-6">
          {/* ROI cards */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-4">
            {roiCards.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white ring-1 ring-slate-200 shadow-sm p-4 flex items-center gap-3"
                data-testid={`roi-card-${idx}`}
              >
                <card.icon className="w-5 h-5 text-[#0B5FFF] flex-shrink-0" />
                <span className="font-semibold text-slate-900 text-sm">
                  {card.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                handleCTAClick('mid-section');
                navigate('/signup');
              }}
              className="inline-flex justify-center px-5 py-3 bg-[#0B5FFF] text-white font-extrabold rounded-none shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF]"
              data-testid="mid-cta-start"
            >
              Start Free
            </button>
            <button
              type="button"
              onClick={() => {
                handleCTAClick('mid-section');
                navigate('/pricing');
              }}
              className="inline-flex justify-center px-5 py-3 bg-transparent text-slate-900 font-extrabold rounded-none ring-2 ring-slate-300 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              data-testid="link-view-pricing"
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
