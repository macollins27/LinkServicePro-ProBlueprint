import { useEffect, useMemo, useRef } from "react";

interface Step {
  id: string;
  title: string;
  color?: string;
}

interface ProcessNavProps {
  steps: Step[];
  active: string;
  onChange: (id: string) => void;
}

export default function ProcessNav({ steps, active, onChange }: ProcessNavProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const activeIndex = useMemo(
    () => steps.findIndex(s => s.id === active),
    [steps, active]
  );

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (!["ArrowLeft","ArrowRight","Home","End"].includes(e.key)) return;
      e.preventDefault();
      let i = activeIndex;
      if (e.key === "ArrowRight") i = (i + 1) % steps.length;
      if (e.key === "ArrowLeft")  i = (i - 1 + steps.length) % steps.length;
      if (e.key === "Home")       i = 0;
      if (e.key === "End")        i = steps.length - 1;
      onChange(steps[i].id);
      // Focus after React re-renders with new tabIndex
      requestAnimationFrame(() => {
        const btns = el.querySelectorAll('[role="tab"]');
        const targetBtn = btns[i] as HTMLButtonElement;
        if (targetBtn && targetBtn.tabIndex === 0) {
          targetBtn.focus();
        }
      });
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [activeIndex, steps, onChange]);

  return (
    <nav
      ref={listRef}
      role="tablist"
      aria-label="Quote to payment steps"
      className="process-rail border border-slate-200 bg-white"
    >
      {/* Mobile: equal-width grid, no connectors */}
      <div className="grid grid-cols-3 md:hidden">
        {steps.map((s, i) => {
          const selected = s.id === active;
          const done = i < activeIndex;
          return (
            <button
              key={s.id}
              role="tab"
              tabIndex={selected ? 0 : -1}
              aria-selected={selected}
              aria-controls={`panel-${s.id}`}
              id={`tab-${s.id}-mobile`}
              onClick={() => onChange(s.id)}
              className={[
                "relative px-3 py-3 text-[13px] font-semibold tracking-tight flex flex-col items-center gap-1",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF]",
                selected ? "text-slate-900" : "text-slate-600 hover:text-slate-900",
              ].join(" ")}
              data-testid={`tab-${s.id}-mobile`}
            >
              <span className={[
                "h-6 w-6 grid place-items-center text-[11px] font-bold",
                done || selected ? "text-white" : "text-slate-700",
              ].join(" ")}
                style={{
                  background: done || selected ? (s.color || "#0B5FFF") : "transparent",
                  border: `2px solid ${s.color || "#0B5FFF"}`
                }}
              >
                {i+1}
              </span>
              <span>{s.title}</span>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ background: selected ? (s.color || "#0B5FFF") : "transparent" }}
              />
            </button>
          );
        })}
      </div>

      {/* Desktop: rail with connectors */}
      <div className="hidden md:flex items-center justify-center px-3 py-2 gap-0">
        {steps.map((s, i) => {
          const selected = s.id === active;
          const done = i < activeIndex;
          const connectorActive = i < activeIndex;
          return (
            <div key={s.id} className="flex items-center">
              <button
                role="tab"
                tabIndex={selected ? 0 : -1}
                aria-selected={selected}
                aria-controls={`panel-${s.id}`}
                id={`tab-${s.id}-desktop`}
                onClick={() => onChange(s.id)}
                className={[
                  "relative px-5 py-3 text-sm font-semibold tracking-tight flex items-center gap-2",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF]",
                  selected ? "text-slate-900" : "text-slate-600 hover:text-slate-900",
                ].join(" ")}
                data-testid={`tab-${s.id}-desktop`}
              >
                <span
                  className="h-7 w-7 grid place-items-center text-[11px] font-extrabold"
                  style={{
                    color: done || selected ? "#fff" : "#0f172a",
                    background: done || selected ? (s.color || "#0B5FFF") : "transparent",
                    border: `2px solid ${s.color || "#0B5FFF"}`
                  }}
                >
                  {i+1}
                </span>
                <span>{s.title}</span>
                {/* Bottom indicator lives inside the button */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 -bottom-[2px] h-0.5"
                  style={{ background: selected ? (s.color || "#0B5FFF") : "transparent" }}
                />
              </button>
              {/* Connector to next step */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mx-2 h-px w-28 md:w-32 lg:w-40"
                  style={{
                    background: connectorActive
                      ? `linear-gradient(90deg, ${s.color || "#0B5FFF"}, ${steps[i+1].color || "#0B5FFF"})`
                      : "rgba(15,23,42,.15)"
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
