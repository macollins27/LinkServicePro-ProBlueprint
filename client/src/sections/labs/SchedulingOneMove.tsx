import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Clock, MessageSquare } from "lucide-react";
import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

export default function SchedulingOneMove(): JSX.Element {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handlePlay = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If reduced motion, complete immediately
    if (prefersReducedMotion) {
      setIsComplete(true);
      setStatusMessage("Rescheduled • ETA +6 min • Customer text sent");
      setIsAnimating(false);
    } else {
      // Allow animation to complete (600ms CSS transition)
      timeoutRef.current = setTimeout(() => {
        setIsComplete(true);
        setStatusMessage("Rescheduled • ETA +6 min • Customer text sent");
        setIsAnimating(false);
      }, 600);
    }

    // Analytics
    if (window.gtag) {
      window.gtag('event', 'demo_interaction', { 
        type: 'one_move_play'
      });
    }
  };

  const handleReset = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setIsAnimating(false);
    setIsComplete(false);
    setStatusMessage("");
  };

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white"
      data-testid="section-one-move"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            One drag. Everything updates.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Move a job and we handle the rest—conflicts, ETAs, and customer messages.
          </p>
        </div>

        {/* Demo Container */}
        <div
          role="region"
          aria-label="Scheduling demo — drag job earlier"
          data-analytics="one-move-demo"
          className="bg-slate-50 p-6 sm:p-8 ring-1 ring-slate-200 mb-8 sm:mb-12"
        >
          {/* Timeline */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="flex items-start justify-between gap-4 relative">
              {/* Timeline slots */}
              <TimeSlot time="11:30" isTarget={isComplete} />
              <TimeSlot time="12:30" />
              <TimeSlot time="2:30" isSource={!isComplete} />
              
              {/* Job card - animates from 2:30 to 11:30 */}
              <div
                className={`
                  absolute top-0 transition-all duration-500 ease-out
                  ${isAnimating || isComplete ? 'left-0' : 'right-0'}
                  motion-reduce:transition-none
                `}
                style={{ width: 'calc((100% - 2rem) / 3)' }}
                data-testid="job-card"
              >
                <div className="bg-white ring-1 ring-slate-300 p-3 rounded-none shadow-sm">
                  <div className="font-bold text-slate-900 mb-1">
                    {isComplete ? '11:30' : '2:30'}
                  </div>
                  <div className="text-sm text-slate-600 mb-2">Leak repair</div>
                  
                  {/* Badge - changes from red to green after animation completes */}
                  {!isComplete ? (
                    <span
                      data-testid="badge-conflict"
                      className="inline-flex items-center px-2 py-1 text-xs font-medium bg-red-50 text-red-700 ring-1 ring-red-200 rounded-none"
                    >
                      Overlap: 2:15–2:45
                    </span>
                  ) : (
                    <span
                      data-testid="badge-cleared"
                      className="inline-flex items-center px-2 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 rounded-none"
                    >
                      Conflict cleared
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Status line - shows after animation completes */}
            {isComplete && (
              <div
                data-testid="status-line"
                className="mt-6 pt-4 border-t border-slate-200 text-center text-sm text-slate-600"
              >
                Rescheduled • ETA +6 min • Customer text sent
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            {!isComplete ? (
              <button
                onClick={handlePlay}
                disabled={isAnimating}
                data-testid="demo-play"
                className="
                  px-6 py-3 rounded-none font-medium
                  bg-[#0B5FFF] text-white
                  hover:opacity-95 transition-opacity
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-white
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                Play demo
              </button>
            ) : (
              <button
                onClick={handleReset}
                disabled={isAnimating}
                className="
                  text-sm text-[#0B5FFF] underline
                  hover:opacity-80 transition-opacity
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-white
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Outcome Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <OutcomeTile
            icon={<CheckCircle2 className="w-6 h-6" />}
            label="Stops double-booking"
          />
          <OutcomeTile
            icon={<Clock className="w-6 h-6" />}
            label="Reschedule in seconds"
          />
          <OutcomeTile
            icon={<MessageSquare className="w-6 h-6" />}
            label="Instant auto-texts"
          />
        </div>

        {/* CTAs */}
        <ButtonsRow>
          <StartFreeButton context="light" />
          <ViewPricingButton context="light" />
        </ButtonsRow>

        {/* Screen reader announcements */}
        <div
          id="one-move-status"
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

interface TimeSlotProps {
  time: string;
  isSource?: boolean;
  isTarget?: boolean;
}

function TimeSlot({ time, isSource = false, isTarget = false }: TimeSlotProps): JSX.Element {
  return (
    <div className="flex-1 text-center">
      <div 
        className={`
          text-sm font-medium mb-2
          ${(isSource || isTarget) ? 'text-[#0B5FFF]' : 'text-slate-500'}
        `}
      >
        {time}
      </div>
      {/* Placeholder for card positioning */}
      <div className="h-24" />
    </div>
  );
}

interface OutcomeTileProps {
  icon: React.ReactNode;
  label: string;
}

function OutcomeTile({ icon, label }: OutcomeTileProps): JSX.Element {
  return (
    <div className="bg-white ring-1 ring-slate-200 p-6 rounded-none shadow-sm">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center bg-slate-50 ring-1 ring-slate-200 rounded-none text-[#0B5FFF]">
          {icon}
        </div>
        <div className="font-medium text-slate-900">
          {label}
        </div>
      </div>
    </div>
  );
}
