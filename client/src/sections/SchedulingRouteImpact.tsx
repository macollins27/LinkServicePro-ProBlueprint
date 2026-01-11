import { useState, useEffect, useRef } from "react";
import { TrendingDown, Clock, Users } from "lucide-react";
import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

interface Scenario {
  id: number;
  label: string;
  driveTime: string;
  onTimeWindow: string;
  crewLoad: string;
  changeLog: string[];
  etaDelta: string;
  pathLength: number;
  statusMessage: string;
}

const scenarios: Scenario[] = [
  {
    id: 0,
    label: "Reassign job to Tech 2",
    driveTime: "Drive time −12 min",
    onTimeWindow: "On-time window +8%",
    crewLoad: "Crew load balanced",
    changeLog: [
      "Moved Leak Repair to Tech 2",
      "ETA text sent to customer",
      "Route resequenced A→B→C"
    ],
    etaDelta: "ETA 2:10 PM → 1:58 PM (−12m)",
    pathLength: 220,
    statusMessage: "Scenario applied: Reassign job to Tech 2. Drive time −12 min."
  },
  {
    id: 1,
    label: "Pull 3 PM to 11:30 AM",
    driveTime: "Drive time −8 min",
    onTimeWindow: "On-time window +12%",
    crewLoad: "Crew load balanced",
    changeLog: [
      "Moved 3 PM job to 11:30 AM",
      "Customer notified of new window",
      "Morning route optimized"
    ],
    etaDelta: "ETA 3:00 PM → 11:30 AM (−3.5h)",
    pathLength: 180,
    statusMessage: "Scenario applied: Pull 3 PM to 11:30 AM. Drive time −8 min."
  },
  {
    id: 2,
    label: "Cluster nearby stops",
    driveTime: "Drive time −18 min",
    onTimeWindow: "On-time window +15%",
    crewLoad: "Crew load balanced",
    changeLog: [
      "Grouped 3 stops in West district",
      "Batch ETAs sent",
      "Eliminated backtrack"
    ],
    etaDelta: "ETA 4:30 PM → 4:12 PM (−18m)",
    pathLength: 160,
    statusMessage: "Scenario applied: Cluster nearby stops. Drive time −18 min."
  }
];

export default function SchedulingRouteImpact() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = scenarios[activeScenario];

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleScenarioChange = (scenarioId: number) => {
    setActiveScenario(scenarioId);
    const newScenario = scenarios[scenarioId];
    setStatusMessage(newScenario.statusMessage);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Clear status message after it's announced
    timeoutRef.current = setTimeout(() => setStatusMessage(""), 3000);

    if (window.gtag) {
      window.gtag('event', 'demo_interaction', { 
        type: 'scenario_change',
        scenario: newScenario.label 
      });
    }
  };

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50"
      data-testid="section-route-impact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">
            Route smart. Not hard.
          </h2>
          <p className="text-lg text-slate-600">
            See drive time, ETAs, and crew load adjust the moment you drag.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT: Map + Scenario Tabs */}
          <div className="space-y-4">
            {/* Scenario Tabs */}
            <div 
              role="tablist" 
              aria-label="Route optimization scenarios"
              className="flex flex-col xs:flex-row gap-2"
              data-testid="scenario-tabs"
            >
              {scenarios.map((s, idx) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={activeScenario === s.id}
                  aria-controls={`scenario-panel-${s.id}`}
                  tabIndex={activeScenario === s.id ? 0 : -1}
                  onClick={() => handleScenarioChange(s.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight') {
                      e.preventDefault();
                      const nextIdx = (idx + 1) % scenarios.length;
                      handleScenarioChange(scenarios[nextIdx].id);
                      const nextButton = e.currentTarget.parentElement?.children[nextIdx] as HTMLButtonElement | undefined;
                      nextButton?.focus();
                    } else if (e.key === 'ArrowLeft') {
                      e.preventDefault();
                      const prevIdx = (idx - 1 + scenarios.length) % scenarios.length;
                      handleScenarioChange(scenarios[prevIdx].id);
                      const prevButton = e.currentTarget.parentElement?.children[prevIdx] as HTMLButtonElement | undefined;
                      prevButton?.focus();
                    }
                  }}
                  className={[
                    "px-4 py-2 text-sm font-semibold transition-all",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2",
                    activeScenario === s.id
                      ? "bg-[#0B5FFF] text-white shadow"
                      : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
                  ].join(" ")}
                  data-testid={`scenario-tab-${idx}`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Map SVG */}
            <div 
              className="bg-white ring-1 ring-slate-200 shadow-sm p-4 sm:p-6"
              role="img"
              aria-label="Route illustration updating with scheduling changes"
            >
              <svg
                viewBox="0 0 300 300"
                className="w-full h-auto"
                data-testid="map-svg"
                aria-hidden="true"
              >
                {/* Background grid pattern */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
                  </pattern>
                  
                  {/* Reduced motion handling */}
                  <style>
                    {`
                      @media (prefers-reduced-motion: no-preference) {
                        .route-path {
                          transition: stroke-dasharray 0.5s ease-in-out;
                        }
                        .eta-badge {
                          transition: opacity 0.3s ease-in-out;
                        }
                      }
                    `}
                  </style>
                </defs>

                {/* Grid background */}
                <rect width="300" height="300" fill="url(#grid)" />

                {/* Simplified street blocks */}
                <rect x="20" y="40" width="120" height="80" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                <rect x="160" y="40" width="120" height="80" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                <rect x="20" y="180" width="120" height="80" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                <rect x="160" y="180" width="120" height="80" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />

                {/* Route polyline */}
                <polyline
                  points="40,60 80,80 120,100 180,120 220,160 240,200 260,240"
                  fill="none"
                  stroke="#0B5FFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="route-path"
                  style={{
                    strokeDasharray: scenario.pathLength,
                    strokeDashoffset: 0
                  }}
                />

                {/* Tech pins */}
                {/* T1 */}
                <g transform="translate(40, 60)">
                  <rect x="-8" y="-16" width="16" height="16" fill="#0E2A47" stroke="#0B5FFF" strokeWidth="2" />
                  <text x="0" y="-4" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">T1</text>
                  <text x="0" y="6" fontSize="8" fill="#0E2A47" fontWeight="bold" textAnchor="middle">75%</text>
                </g>

                {/* T2 */}
                <g transform="translate(180, 120)">
                  <rect x="-8" y="-16" width="16" height="16" fill="#0E2A47" stroke="#0B5FFF" strokeWidth="2" />
                  <text x="0" y="-4" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">T2</text>
                  <text x="0" y="6" fontSize="8" fill="#0E2A47" fontWeight="bold" textAnchor="middle">82%</text>
                </g>

                {/* T3 */}
                <g transform="translate(260, 240)">
                  <rect x="-8" y="-16" width="16" height="16" fill="#0E2A47" stroke="#0B5FFF" strokeWidth="2" />
                  <text x="0" y="-4" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">T3</text>
                  <text x="0" y="6" fontSize="8" fill="#0E2A47" fontWeight="bold" textAnchor="middle">68%</text>
                </g>

                {/* Stop markers */}
                <circle cx="80" cy="80" r="6" fill="#0FB36F" stroke="white" strokeWidth="2" />
                <text x="80" y="84" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle">1</text>

                <circle cx="120" cy="100" r="6" fill="#0FB36F" stroke="white" strokeWidth="2" />
                <text x="120" y="104" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle">2</text>

                <circle cx="220" cy="160" r="6" fill="#0FB36F" stroke="white" strokeWidth="2" />
                <text x="220" y="164" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle">3</text>

                <circle cx="240" cy="200" r="6" fill="#0FB36F" stroke="white" strokeWidth="2" />
                <text x="240" y="204" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle">4</text>

                {/* ETA Badge */}
                <g transform="translate(200, 260)" className="eta-badge">
                  <rect x="-60" y="-12" width="120" height="20" fill="white" stroke="#0B5FFF" strokeWidth="1.5" rx="0" />
                  <text x="0" y="2" fontSize="9" fill="#0B5FFF" fontWeight="bold" textAnchor="middle">
                    {scenario.etaDelta}
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* RIGHT: Impact Cards + Change Log + CTAs */}
          <div className="space-y-6">
            {/* Impact Cards */}
            <div className="grid grid-cols-1 gap-3">
              <div 
                className="bg-white ring-1 ring-slate-200 shadow-sm p-4 flex items-center gap-3"
                data-testid="impact-drive"
              >
                <Clock className="w-5 h-5 text-[#0B5FFF] flex-shrink-0" />
                <span className="font-semibold text-slate-900 text-sm">
                  {scenario.driveTime}
                </span>
              </div>

              <div 
                className="bg-white ring-1 ring-slate-200 shadow-sm p-4 flex items-center gap-3"
                data-testid="impact-ontime"
              >
                <TrendingDown className="w-5 h-5 text-[#0FB36F] flex-shrink-0" />
                <span className="font-semibold text-slate-900 text-sm">
                  {scenario.onTimeWindow}
                </span>
              </div>

              <div 
                className="bg-white ring-1 ring-slate-200 shadow-sm p-4 flex items-center gap-3"
                data-testid="impact-crew"
              >
                <Users className="w-5 h-5 text-[#0E2A47] flex-shrink-0" />
                <span className="font-semibold text-slate-900 text-sm">
                  {scenario.crewLoad}
                </span>
              </div>
            </div>

            {/* Change Log */}
            <div className="bg-white ring-1 ring-slate-200 shadow-sm p-4">
              <h3 className="text-xs font-extrabold text-slate-500 uppercase mb-3">
                What Changed
              </h3>
              <ul className="space-y-2">
                {scenario.changeLog.map((change, idx) => (
                  <li 
                    key={idx}
                    className="text-sm text-slate-700 pl-4 border-l-2 border-[#0B5FFF]"
                  >
                    {change}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div>
              <ButtonsRow className="justify-center sm:justify-start">
                <StartFreeButton context="light" dataTestId="cta-start-free" />
                <ViewPricingButton context="light" dataTestId="cta-view-pricing" />
              </ButtonsRow>
            </div>
          </div>
        </div>
      </div>

      {/* Aria-live status region */}
      <div
        id="impact-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {statusMessage}
      </div>
    </section>
  );
}
