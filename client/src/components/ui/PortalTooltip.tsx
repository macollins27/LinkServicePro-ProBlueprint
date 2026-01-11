import * as React from "react";
import { createPortal } from "react-dom";

type Props = {
  anchorRef: React.RefObject<HTMLElement>;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  prefer?: "top" | "bottom";
};

export default function PortalTooltip({ anchorRef, open, onClose, children, prefer = "top" }: Props) {
  const [pos, setPos] = React.useState<{top:number,left:number,transform?:string}>({ top: 0, left: 0 });
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const portalRoot = React.useMemo(() => {
    let el = document.getElementById("portal-tooltips-root");
    if (!el) {
      el = document.createElement("div");
      el.id = "portal-tooltips-root";
      document.body.appendChild(el);
    }
    return el;
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const anchor = anchorRef.current;
    if (!anchor) return;
    
    // Small delay to ensure tooltip is in DOM before positioning
    const positionTooltip = () => {
      const rect = anchor.getBoundingClientRect();
      const margin = 8;
      const tooltipWidth = 280;
      const tooltipHeight = tooltipRef.current?.offsetHeight || 60; // estimate if not available
      const topPref = prefer === "top";
      const top = topPref 
        ? rect.top + window.scrollY - tooltipHeight - margin 
        : rect.bottom + window.scrollY + margin;
      let left = rect.left + window.scrollX + rect.width / 2 - tooltipWidth / 2;
      left = Math.max(window.scrollX + 8, Math.min(left, window.scrollX + window.innerWidth - tooltipWidth - 8));
      setPos({ top, left });
    };
    
    // Position immediately and after a small delay to ensure accuracy
    positionTooltip();
    const timeoutId = setTimeout(positionTooltip, 10);
    
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    const onScroll = () => onClose();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [open, anchorRef, prefer, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      ref={tooltipRef}
      role="tooltip"
      className="pointer-events-auto z-[9999] fixed"
      style={{ top: pos.top, left: pos.left, width: 280 }}
    >
      <div className="rounded-md border border-white/10 bg-slate-900/95 text-slate-100 shadow-xl backdrop-blur px-3 py-2 text-sm leading-snug">
        {children}
      </div>
    </div>,
    portalRoot
  );
}
