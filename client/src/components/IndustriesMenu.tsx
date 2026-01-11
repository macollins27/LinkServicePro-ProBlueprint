import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Wind, Droplet, Zap, Sparkles, ArrowRight, Route, Smartphone, Bell, Shield, Check } from "lucide-react";

interface IndustriesMenuProps {
  onClose: () => void;
}

export default function IndustriesMenu({ onClose }: IndustriesMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      ref={menuRef}
      id="industries-menu"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-slate-900 shadow-[0_24px_64px_rgba(0,0,0,0.4)] ring-1 ring-slate-200 rounded-2xl p-6 w-[min(800px,calc(100vw-280px))] max-h-[calc(100vh-120px)] overflow-y-auto grid md:grid-cols-2 gap-6 z-50"
      role="dialog"
      data-testid="megamenu-industries"
    >
      {/* Left Column - Industry Links */}
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-3">
          Who we're built for
        </h3>

        {/* Popular Industries Grid (2x2) */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <Link
            to="/industries/hvac"
            onClick={handleLinkClick}
            className="rounded-lg p-3 mega-menu-item-pill focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
            data-testid="link-industry-hvac"
          >
            <div className="text-[14px] font-semibold text-slate-900 flex items-center gap-2 mb-1">
              <Wind className="w-5 h-5 text-[#0B5FFF] flex-shrink-0" />
              HVAC
            </div>
            <div className="text-[12px] text-slate-500 leading-snug">
              Seasonal demand, maintenance plans, emergency calls.
            </div>
          </Link>

          <Link
            to="/industries/plumbing"
            onClick={handleLinkClick}
            className="rounded-lg p-3 mega-menu-item-pill focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
            data-testid="link-industry-plumbing"
          >
            <div className="text-[14px] font-semibold text-slate-900 flex items-center gap-2 mb-1">
              <Droplet className="w-5 h-5 text-[#0B5FFF] flex-shrink-0" />
              Plumbing
            </div>
            <div className="text-[12px] text-slate-500 leading-snug">
              Urgent dispatch, after-hours jobs, invoices on the spot.
            </div>
          </Link>

          <Link
            to="/industries/electrical"
            onClick={handleLinkClick}
            className="rounded-lg p-3 mega-menu-item-pill focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
            data-testid="link-industry-electrical"
          >
            <div className="text-[14px] font-semibold text-slate-900 flex items-center gap-2 mb-1">
              <Zap className="w-5 h-5 text-[#0B5FFF] flex-shrink-0" />
              Electrical
            </div>
            <div className="text-[12px] text-slate-500 leading-snug">
              Safety + documentation every visit.
            </div>
          </Link>

          <Link
            to="/industries/cleaning"
            onClick={handleLinkClick}
            className="rounded-lg p-3 mega-menu-item-pill focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
            data-testid="link-industry-cleaning"
          >
            <div className="text-[14px] font-semibold text-slate-900 flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-[#0B5FFF] flex-shrink-0" />
              Cleaning
            </div>
            <div className="text-[12px] text-slate-500 leading-snug">
              Recurring contracts, team scheduling, shift accountability.
            </div>
          </Link>
        </div>

        {/* More Industries List */}
        <div className="mt-4 border-t border-slate-200 pt-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-2">
            More industries we support
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <Link
              to="/industries/landscaping"
              onClick={handleLinkClick}
              className="text-[12px] text-slate-600 leading-snug hover:text-slate-900 hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              data-testid="link-industry-landscaping"
            >
              Landscaping & Lawn Care
            </Link>
            <Link
              to="/industries/roofing"
              onClick={handleLinkClick}
              className="text-[12px] text-slate-600 leading-snug hover:text-slate-900 hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              data-testid="link-industry-roofing"
            >
              Roofing
            </Link>
            <Link
              to="/industries/garage-door"
              onClick={handleLinkClick}
              className="text-[12px] text-slate-600 leading-snug hover:text-slate-900 hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              data-testid="link-industry-garage"
            >
              Garage Door
            </Link>
            <Link
              to="/industries/pest"
              onClick={handleLinkClick}
              className="text-[12px] text-slate-600 leading-snug hover:text-slate-900 hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              data-testid="link-industry-pest"
            >
              Pest Control
            </Link>
            <Link
              to="/industries/restoration"
              onClick={handleLinkClick}
              className="text-[12px] text-slate-600 leading-snug hover:text-slate-900 hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              data-testid="link-industry-restoration"
            >
              Restoration & Remediation
            </Link>
            <Link
              to="/industries/pressure-washing"
              onClick={handleLinkClick}
              className="text-[12px] text-slate-600 leading-snug hover:text-slate-900 hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              data-testid="link-industry-pressure"
            >
              Pressure Washing
            </Link>
            <Link
              to="/industries/handyman"
              onClick={handleLinkClick}
              className="text-[12px] text-slate-600 leading-snug hover:text-slate-900 hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              data-testid="link-industry-handyman"
            >
              Property Maintenance / Handyman
            </Link>
            <Link
              to="/industries/pool-spa"
              onClick={handleLinkClick}
              className="text-[12px] text-slate-600 leading-snug hover:text-slate-900 hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              data-testid="link-industry-pool"
            >
              Pool & Spa Service
            </Link>
          </div>

          {/* See All Link */}
          <Link
            to="/industries"
            onClick={handleLinkClick}
            className="text-[12px] font-semibold text-[#0B5FFF] hover:underline flex items-center gap-1 mt-4 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
            data-testid="link-industries-all"
          >
            See all industries
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Right Column - Promo Tile */}
      <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col justify-between ring-1 ring-slate-800 shadow-inner min-h-[220px]">
        <div>
          <div className="text-[11px] font-semibold text-white/80 bg-white/10 border border-white/20 rounded-full px-2 py-[3px] inline-block mb-3">
            Built for the field
          </div>
          <div className="text-white font-semibold text-base leading-snug">
            "Where's my tech?" stops being your job.
          </div>
          <div className="text-white/70 text-[12px] leading-snug mt-2">
            Live dispatch board, route planning, and job status — even if you're running 5 calls at once.
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="bg-white/5 rounded-md px-2 py-2">
              <div className="flex items-center gap-1 text-[11px]">
                <Route className="w-3.5 h-3.5 text-white/90" />
                <span className="text-white/90">Optimized routes</span>
              </div>
              <div className="text-[11px] text-white/60">Save drive time</div>
            </div>
            <div className="bg-white/5 rounded-md px-2 py-2">
              <div className="flex items-center gap-1 text-[11px]">
                <Smartphone className="w-3.5 h-3.5 text-white/90" />
                <span className="text-white/90">Mobile-first</span>
              </div>
              <div className="text-[11px] text-white/60">Tech-ready UI</div>
            </div>
            <div className="bg-white/5 rounded-md px-2 py-2">
              <div className="flex items-center gap-1 text-[11px]">
                <Bell className="w-3.5 h-3.5 text-white/90" />
                <span className="text-white/90">Reminders</span>
              </div>
              <div className="text-[11px] text-white/60">Reduce no-shows</div>
            </div>
            <div className="bg-white/5 rounded-md px-2 py-2">
              <div className="flex items-center gap-1 text-[11px]">
                <Shield className="w-3.5 h-3.5 text-white/90" />
                <span className="text-white/90">Permissions</span>
              </div>
              <div className="text-[11px] text-white/60">Role-based access</div>
            </div>
          </div>

          {/* Mini-checklist */}
          <ul className="mt-3 space-y-1">
            <li className="flex items-start gap-2 text-[12px]">
              <Check className="w-3.5 h-3.5 text-white/80 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Trade-specific workflows</span>
            </li>
            <li className="flex items-start gap-2 text-[12px]">
              <Check className="w-3.5 h-3.5 text-white/80 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Recurring contracts & visits</span>
            </li>
            <li className="flex items-start gap-2 text-[12px]">
              <Check className="w-3.5 h-3.5 text-white/80 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Quotes → jobs → invoices</span>
            </li>
          </ul>

          {/* Preview thumbnail */}
          <div className="mt-3">
            <div
              aria-hidden="true"
              className="w-full h-[90px] rounded-md bg-white/10 ring-1 ring-white/15"
              title="Workflow preview"
            />
          </div>
        </div>

        {/* CTA Stack */}
        <div className="mt-3 flex flex-col gap-2">
          <Link
            to="/features/scheduling-dispatch"
            onClick={handleLinkClick}
            className="bg-[#0B5FFF] text-white text-[12px] font-semibold rounded-md px-3 py-2 text-center shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
            data-testid="link-industries-scheduling"
          >
            See Scheduling & Dispatch
          </Link>
          <Link
            to="/pricing"
            onClick={handleLinkClick}
            className="text-white/80 text-[12px] font-semibold text-center hover:text-white hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
            data-testid="link-industries-pricing"
          >
            View Pricing →
          </Link>
        </div>
      </div>
    </div>
  );
}
