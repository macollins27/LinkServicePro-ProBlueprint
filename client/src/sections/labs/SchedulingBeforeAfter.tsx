import { useState, useEffect, useRef } from "react";
import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

interface Job {
  time: string;
  title: string;
  conflict?: string;
  badge?: string;
  badgeType?: "error" | "success";
}

interface TechLane {
  tech: string;
  jobs: Job[];
}

interface Scenario {
  id: number;
  label: string;
  before: TechLane[];
  after: TechLane[];
  deltaBadges: string[];
  changeLog: string[];
  statusMessage: string;
}

const scenarios: Scenario[] = [
  {
    id: 0,
    label: "Reassign job to Tech 2",
    before: [
      {
        tech: "T1",
        jobs: [
          { time: "9:00", title: "Filter change" },
          { time: "10:30", title: "Thermostat" },
          { time: "2:30", title: "Leak repair", conflict: "Overlap: 2:15–2:45", badgeType: "error" }
        ]
      },
      {
        tech: "T2",
        jobs: [
          { time: "11:45", title: "Open" },
          { time: "12:30", title: "Maintenance" }
        ]
      },
      {
        tech: "T3",
        jobs: [
          { time: "3:30", title: "Tune-up" }
        ]
      }
    ],
    after: [
      {
        tech: "T1",
        jobs: [
          { time: "9:00", title: "Filter change" },
          { time: "10:30", title: "Thermostat" }
        ]
      },
      {
        tech: "T2",
        jobs: [
          { time: "11:30", title: "Leak repair", badge: "Rescheduled to 11:30 AM", badgeType: "success" },
          { time: "11:45", title: "Open" },
          { time: "12:30", title: "Maintenance" }
        ]
      },
      {
        tech: "T3",
        jobs: [
          { time: "3:30", title: "Tune-up" }
        ]
      }
    ],
    deltaBadges: [
      "Conflict cleared",
      "Drive time −12 min",
      "On-time window +8%",
      "Customer text sent"
    ],
    changeLog: [
      "Moved Leak Repair to Tech 2",
      "ETA text sent to customer",
      "Route resequenced A→B→C"
    ],
    statusMessage: "Scenario applied: Reassign job to Tech 2. Conflict cleared. Drive time −12 min."
  },
  {
    id: 1,
    label: "Pull 3 PM to 11:30 AM",
    before: [
      {
        tech: "T1",
        jobs: [
          { time: "9:00", title: "Filter change" },
          { time: "10:30", title: "Thermostat" },
          { time: "2:30", title: "Leak repair", conflict: "Overlap: 2:15–2:45", badgeType: "error" }
        ]
      },
      {
        tech: "T2",
        jobs: [
          { time: "11:45", title: "Open" },
          { time: "12:30", title: "Maintenance" }
        ]
      },
      {
        tech: "T3",
        jobs: [
          { time: "3:30", title: "Tune-up" }
        ]
      }
    ],
    after: [
      {
        tech: "T1",
        jobs: [
          { time: "9:00", title: "Filter change" },
          { time: "10:30", title: "Thermostat" },
          { time: "2:30", title: "Leak repair" }
        ]
      },
      {
        tech: "T2",
        jobs: [
          { time: "11:45", title: "Open" },
          { time: "12:30", title: "Maintenance" }
        ]
      },
      {
        tech: "T3",
        jobs: [
          { time: "11:30", title: "Tune-up", badge: "Rescheduled to 11:30 AM", badgeType: "success" }
        ]
      }
    ],
    deltaBadges: [
      "Conflict cleared",
      "On-time window +8%",
      "Customer text sent"
    ],
    changeLog: [
      "Moved 3 PM job to 11:30 AM",
      "Customer notified of new window",
      "Morning route optimized"
    ],
    statusMessage: "Scenario applied: Pull 3 PM to 11:30 AM. Conflict cleared."
  },
  {
    id: 2,
    label: "Rain delay: move exterior jobs",
    before: [
      {
        tech: "T1",
        jobs: [
          { time: "9:00", title: "Filter change" },
          { time: "10:30", title: "Thermostat" },
          { time: "2:30", title: "Leak repair", conflict: "Overlap: 2:15–2:45", badgeType: "error" }
        ]
      },
      {
        tech: "T2",
        jobs: [
          { time: "11:45", title: "Open" },
          { time: "12:30", title: "Maintenance" }
        ]
      },
      {
        tech: "T3",
        jobs: [
          { time: "3:30", title: "Tune-up" }
        ]
      }
    ],
    after: [
      {
        tech: "T1",
        jobs: [
          { time: "9:00", title: "Filter change" },
          { time: "10:30", title: "Thermostat" }
        ]
      },
      {
        tech: "T2",
        jobs: [
          { time: "11:45", title: "Open" },
          { time: "12:30", title: "Maintenance" }
        ]
      },
      {
        tech: "T3",
        jobs: [
          { time: "3:30", title: "Tune-up", badge: "Moved to tomorrow", badgeType: "success" }
        ]
      }
    ],
    deltaBadges: [
      "Conflict cleared",
      "Customer text sent"
    ],
    changeLog: [
      "Exterior jobs moved to tomorrow",
      "Customer notified of weather delay",
      "Indoor jobs kept on schedule"
    ],
    statusMessage: "Scenario applied: Rain delay: move exterior jobs. Conflict cleared. Customer text sent."
  }
];

export default function SchedulingBeforeAfter(): JSX.Element {
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

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const newIndex = currentIndex > 0 ? currentIndex - 1 : scenarios.length - 1;
      handleScenarioChange(newIndex);
      document.getElementById(`scenario-tab-${newIndex}`)?.focus();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const newIndex = currentIndex < scenarios.length - 1 ? currentIndex + 1 : 0;
      handleScenarioChange(newIndex);
      document.getElementById(`scenario-tab-${newIndex}`)?.focus();
    }
  };

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50"
      data-testid="section-before-after"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            See the schedule settle instantly.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Drag a job. Conflicts clear, ETAs update, and customers get the new window.
          </p>
        </div>

        {/* Scenario Tabs */}
        <div 
          role="tablist" 
          aria-label="Schedule scenarios"
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-testid="scenario-tabs"
        >
          {scenarios.map((s, index) => (
            <button
              key={s.id}
              id={`scenario-tab-${s.id}`}
              role="tab"
              aria-selected={activeScenario === s.id}
              aria-controls={`scenario-panel-${s.id}`}
              tabIndex={activeScenario === s.id ? 0 : -1}
              onClick={() => handleScenarioChange(s.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              data-testid={`scenario-tab-${s.id}`}
              className={`
                px-4 py-2 text-sm font-medium rounded-none transition-colors
                ring-1 ring-slate-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2
                ${activeScenario === s.id 
                  ? 'bg-[#0B5FFF] text-white' 
                  : 'bg-white text-slate-700 hover:bg-slate-50'
                }
              `}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Before/After Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Before Panel */}
          <SchedulePanel 
            title="Before" 
            lanes={scenario.before}
            testId="before-panel"
          />

          {/* After Panel */}
          <div className="space-y-6">
            <SchedulePanel 
              title="After" 
              lanes={scenario.after}
              testId="after-panel"
            />

            {/* Delta Badges */}
            <div 
              className="bg-white ring-1 ring-slate-200 p-4 shadow-sm"
              data-testid="delta-badges"
            >
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Impact</h3>
              <div className="flex flex-wrap gap-2">
                {scenario.deltaBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 rounded-none"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Change Log */}
            <div className="bg-white ring-1 ring-slate-200 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">What changed</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {scenario.changeLog.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#0B5FFF] mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <ButtonsRow>
          <StartFreeButton context="light" />
          <ViewPricingButton context="light" />
        </ButtonsRow>

        {/* Screen reader announcements */}
        <div
          id="ba-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {statusMessage}
        </div>
      </div>
    </section>
  );
}

interface SchedulePanelProps {
  title: "Before" | "After";
  lanes: TechLane[];
  testId: string;
}

function SchedulePanel({ title, lanes, testId }: SchedulePanelProps): JSX.Element {
  return (
    <div
      role="region"
      aria-label={`${title} schedule`}
      className="bg-white ring-1 ring-slate-200 p-4 sm:p-6 shadow-sm"
      data-testid={testId}
    >
      <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
      <div className="space-y-4">
        {lanes.map((lane) => (
          <div key={lane.tech} className="space-y-2">
            {/* Tech header */}
            <div className="inline-flex items-center px-2 py-1 text-xs font-bold bg-slate-100 text-slate-700 ring-1 ring-slate-200 rounded-none">
              {lane.tech}
            </div>
            
            {/* Jobs */}
            <div className="space-y-2 pl-4">
              {lane.jobs.map((job, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-slate-50 ring-1 ring-slate-200 rounded-none text-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">{job.time}</div>
                      <div className="text-slate-600">{job.title}</div>
                    </div>
                  </div>
                  
                  {/* Conflict or success badge */}
                  {job.conflict && (
                    <div className="mt-2 inline-flex items-center px-2 py-1 text-xs font-medium bg-red-50 text-red-700 ring-1 ring-red-200 rounded-none">
                      {job.conflict}
                    </div>
                  )}
                  {job.badge && (
                    <div className="mt-2 inline-flex items-center px-2 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 rounded-none">
                      {job.badge}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
