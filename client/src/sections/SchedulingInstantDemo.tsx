import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Clock, MessageSquare, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface TimeSlot {
  id: string;
  time: string;
  job?: {
    title: string;
    hasConflict?: boolean;
  };
}

export default function SchedulingInstantDemo() {
  const navigate = useNavigate();
  
  const initialSlots: TimeSlot[] = [
    { id: "slot-1145", time: "11:45 AM" },
    { id: "slot-1230", time: "12:30 PM", job: { title: "Maintenance" } },
    { id: "slot-230", time: "2:30 PM", job: { title: "Leak repair", hasConflict: true } },
  ];
  
  const [slots, setSlots] = useState<TimeSlot[]>(initialSlots);
  const [draggedJobSlotId, setDraggedJobSlotId] = useState<string | null>(null);
  const [dropTarget, setDropTarget] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const toastTimeoutRef = useRef<number | null>(null);
  
  // Derive hasDropped from slots state: if slot-1145 has a job, we know it was dropped there
  const hasDropped = slots.find(s => s.id === "slot-1145")?.job !== undefined;

  // Cleanup toast timeout on unmount
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current !== null) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const handleReset = () => {
    // Clear any pending toast timeout
    if (toastTimeoutRef.current !== null) {
      clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = null;
    }
    
    setSlots(initialSlots);
    setShowToast(false);
    setDraggedJobSlotId(null);
    setDropTarget(null);
    setStatusMessage("");
  };

  const handleDragStart = (slotId: string) => {
    const slot = slots.find(s => s.id === slotId);
    setDraggedJobSlotId(slotId);
    setStatusMessage(`Picked up ${slot?.job?.title || 'job'}. Use arrow keys to move, Enter to drop, Escape to cancel.`);
    if (window.gtag) {
      window.gtag('event', 'demo_interaction', { type: 'drag_start' });
    }
  };

  const handleDragEnd = (targetSlotId?: string) => {
    const finalTarget = targetSlotId || dropTarget;
    if (finalTarget && draggedJobSlotId && finalTarget !== draggedJobSlotId) {
      const sourceSlot = slots.find(s => s.id === draggedJobSlotId);
      const sourceJob = sourceSlot?.job;
      if (sourceJob) {
        setSlots(prev => {
          const newSlots = prev.map(slot => {
            if (slot.id === draggedJobSlotId) {
              return { ...slot, job: undefined };
            }
            if (slot.id === finalTarget) {
              return { 
                ...slot, 
                job: { 
                  title: sourceJob.title,
                  hasConflict: false 
                } 
              };
            }
            return slot;
          });
          return newSlots;
        });
        setShowToast(true);
        setStatusMessage("Rescheduled • ETA +6 min • Customer text sent");
        
        // Clear any existing timeout before setting a new one
        if (toastTimeoutRef.current !== null) {
          clearTimeout(toastTimeoutRef.current);
        }
        
        toastTimeoutRef.current = window.setTimeout(() => {
          setShowToast(false);
          setStatusMessage("");
          toastTimeoutRef.current = null;
        }, 5000);
        
        if (window.gtag) {
          window.gtag('event', 'demo_interaction', { type: 'successful_drop' });
        }
      }
    }
    setDraggedJobSlotId(null);
    setDropTarget(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, slotId: string) => {
    const currentIndex = slots.findIndex(s => s.id === slotId);
    
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (!draggedJobSlotId) {
        if (slots[currentIndex].job) {
          handleDragStart(slotId);
        }
      } else {
        handleDragEnd(slotId);
      }
    } else if (draggedJobSlotId) {
      if (e.key === 'ArrowDown' && currentIndex < slots.length - 1) {
        e.preventDefault();
        const nextSlot = slots[currentIndex + 1];
        document.getElementById(nextSlot.id)?.focus();
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        const prevSlot = slots[currentIndex - 1];
        document.getElementById(prevSlot.id)?.focus();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setDraggedJobSlotId(null);
        setDropTarget(null);
        setStatusMessage("Drag cancelled");
        setTimeout(() => setStatusMessage(""), 2000);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && company) {
      navigate('/signup');
    }
  };

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50" 
      role="region" 
      aria-label="Scheduling demo"
      data-analytics="demo-drag"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Drag jobs. Fix your day.
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Thumb-drag a job to a new time. We clear conflicts, update route ETAs, and auto-text the customer.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT: Demo */}
          <div className="space-y-4">
            <Card className="bg-blueprint border-2 border-slate-300 p-4 sm:p-6 overflow-hidden">
              {/* Demo instructions */}
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-700">
                  Try it: Drag the 2:30 job to 11:45
                </p>
                <button
                  onClick={handleReset}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                  data-testid="button-reset"
                >
                  <RefreshCw className="w-3 h-3" />
                  Reset demo
                </button>
              </div>

              {/* Timeline slots */}
              <div className="space-y-2" data-testid="demo-timeline">
                {slots.map((slot) => {
                  const isBeingDragged = draggedJobSlotId === slot.id;
                  const isDropTarget = dropTarget === slot.id;
                  const canDrop = !slot.job && draggedJobSlotId && draggedJobSlotId !== slot.id;
                  
                  return (
                    <div
                      key={slot.id}
                      id={slot.id}
                      tabIndex={0}
                      role="button"
                      aria-label={`${slot.time}${slot.job ? `, ${slot.job.title}` : ', available'}${isBeingDragged ? ', picked up - use arrows to move, enter to drop' : ''}`}
                      aria-grabbed={isBeingDragged ? "true" : "false"}
                      data-testid={slot.id}
                      className={[
                        "relative min-h-[72px] p-3 border-2 transition-all",
                        canDrop && "border-blue-400 bg-blue-50",
                        !canDrop && "border-slate-300 bg-white",
                        isDropTarget && "ring-2 ring-blue-500",
                        isBeingDragged && "ring-4 ring-yellow-400 bg-yellow-50",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2",
                      ].join(" ")}
                      onDragOver={(e) => {
                        if (canDrop) {
                          e.preventDefault();
                          setDropTarget(slot.id);
                        }
                      }}
                      onDragLeave={() => setDropTarget(null)}
                      onDrop={(e) => {
                        e.preventDefault();
                        if (canDrop) {
                          handleDragEnd(slot.id);
                        }
                      }}
                      onKeyDown={(e) => handleKeyDown(e, slot.id)}
                      onClick={() => {
                        if (slot.job && !draggedJobSlotId) {
                          handleDragStart(slot.id);
                        } else if (draggedJobSlotId && slot.id !== draggedJobSlotId) {
                          handleDragEnd(slot.id);
                        }
                      }}
                    >
                      {/* Time label */}
                      <div className="text-xs font-bold text-slate-500 mb-1">{slot.time}</div>

                      {/* Job card or hint */}
                      {slot.job ? (
                        <div
                          className={[
                            "bg-white border-2 border-slate-700 p-2 cursor-move select-none",
                            isBeingDragged && "opacity-50",
                            slot.job.hasConflict && "border-red-500",
                          ].join(" ")}
                          draggable
                          onDragStart={() => handleDragStart(slot.id)}
                          onDragEnd={() => handleDragEnd()}
                          data-testid={slot.id === "slot-230" ? "job-card" : undefined}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-semibold text-sm text-slate-900">
                              {slot.job.title}
                            </span>
                            {slot.job.hasConflict && (
                              <span 
                                className="text-xs bg-red-100 text-red-800 px-2 py-0.5 font-bold whitespace-nowrap"
                                data-testid="conflict-badge"
                              >
                                Overlap: 2:15–2:45
                              </span>
                            )}
                          </div>
                        </div>
                      ) : canDrop && slot.id === "slot-1145" ? (
                        <div className="text-xs text-blue-600 font-medium italic">
                          Drop here to move 2:30 → 11:45
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>

              {/* Route badge (shown after drop) */}
              {hasDropped && (
                <div 
                  className="mt-4 inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1.5 text-sm font-bold border border-emerald-300"
                  data-testid="badge-route-time"
                >
                  <CheckCircle className="w-4 h-4" />
                  Route time −12 min
                </div>
              )}
            </Card>

            {/* Outcome chips */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-3">
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium text-slate-900">Stops double-booking</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 text-sm">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-slate-900">Reschedule in seconds</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 text-sm">
                <MessageSquare className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span className="font-medium text-slate-900">Instant auto-texts</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Lead unit */}
          <div>
            <Card className="bg-white border-2 border-slate-300 p-6 sticky top-4">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                See it on your schedule in under 2 minutes
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                    Work email <span className="text-red-600">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="border-2 border-slate-300"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1">
                    Company <span className="text-red-600">*</span>
                  </label>
                  <Input
                    id="company"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Your Company LLC"
                    className="border-2 border-slate-300"
                    data-testid="input-company"
                  />
                </div>

                <div className="space-y-2">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center px-5 py-3 bg-[#0B5FFF] text-white font-extrabold rounded-none shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF]"
                    data-testid="button-start-free"
                  >
                    Start Free
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/pricing')}
                    className="w-full inline-flex justify-center px-5 py-3 bg-transparent text-slate-900 font-extrabold rounded-none ring-2 ring-slate-300 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                    data-testid="button-view-pricing-lead"
                  >
                    View Pricing
                  </button>
                </div>

                <p className="text-xs text-slate-500 text-center">
                  No credit card. 14-day full product.
                </p>
              </form>

              {/* Integration chips */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-600 mb-3">INTEGRATIONS INCLUDED</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-100 px-2 py-1.5 text-xs font-medium text-slate-700 text-center border border-slate-200">
                    QuickBooks
                  </div>
                  <div className="bg-slate-100 px-2 py-1.5 text-xs font-medium text-slate-700 text-center border border-slate-200">
                    Xero
                  </div>
                  <div className="bg-slate-100 px-2 py-1.5 text-xs font-medium text-slate-700 text-center border border-slate-200">
                    iOS/Android
                  </div>
                  <div className="bg-slate-100 px-2 py-1.5 text-xs font-medium text-slate-700 text-center border border-slate-200">
                    SMS/Email
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Aria-live status region (always present, visually hidden when empty) */}
      <div
        id="demo-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {statusMessage}
      </div>

      {/* Toast notification (visual feedback) */}
      {showToast && (
        <div
          className="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3 border-2 border-white shadow-xl max-w-sm z-50 animate-in slide-in-from-bottom-5"
          data-testid="toast"
        >
          <p className="font-semibold text-sm">
            Rescheduled • ETA +6 min • Customer text sent
          </p>
        </div>
      )}
    </section>
  );
}
