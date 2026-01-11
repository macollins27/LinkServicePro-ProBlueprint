import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, ClipboardCheck, Users, FileSignature, CreditCard, RefreshCw, BarChart, ArrowRight, Timer, CheckCircle2, DollarSign, TrendingUp, Check } from "lucide-react";

interface MegaMenuProps {
  onClose: () => void;
}

export default function MegaMenu({ onClose }: MegaMenuProps) {
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
      id="features-menu"
      className="absolute top-full left-0 mt-2 bg-white text-slate-900 shadow-[0_24px_64px_rgba(0,0,0,0.4)] ring-1 ring-slate-200 rounded-2xl p-6 w-[min(800px,calc(100vw-280px))] max-h-[calc(100vh-120px)] overflow-y-auto grid md:grid-cols-2 gap-6 z-50"
      role="dialog"
      data-testid="megamenu-features"
    >
      {/* Left Column - Feature Links */}
      <div className="space-y-6">
        {/* Section 1: Scheduling & Field Work */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-3">
            Scheduling & Field Work
          </h3>
          <div className="space-y-1">
            <Link
              to="/features/scheduling-dispatch"
              onClick={handleLinkClick}
              className="flex items-start gap-3 p-2 rounded-lg mega-menu-item-pill focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="link-mega-scheduling"
            >
              <Calendar className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[14px] font-semibold text-slate-900">
                  Scheduling & Dispatch
                </div>
                <div className="text-[12px] text-slate-500 leading-snug max-w-[240px]">
                  Drag-and-drop scheduling, live dispatch board, route planning.
                </div>
              </div>
            </Link>

            <Link
              to="/features/work-orders-mobile"
              onClick={handleLinkClick}
              className="flex items-start gap-3 p-2 rounded-lg mega-menu-item-pill focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="link-mega-work-orders"
            >
              <ClipboardCheck className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[14px] font-semibold text-slate-900">
                  Work Orders & Mobile
                </div>
                <div className="text-[12px] text-slate-500 leading-snug max-w-[240px]">
                  Every job step on the tech's phone, with photos and signatures.
                </div>
              </div>
            </Link>

            <Link
              to="/features/team-management"
              onClick={handleLinkClick}
              className="flex items-start gap-3 p-2 rounded-lg mega-menu-item-pill focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="link-mega-team"
            >
              <Users className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[14px] font-semibold text-slate-900">
                  Team Management & Operations Control
                </div>
                <div className="text-[12px] text-slate-500 leading-snug max-w-[240px]">
                  Assign tasks, track completion, control permissions.
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Section 2: Quotes, Invoices & Payments */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-3">
            Quotes, Invoices & Payments
          </h3>
          <div className="space-y-1">
            <Link
              to="/features/estimates-quotes"
              onClick={handleLinkClick}
              className="flex items-start gap-3 p-2 rounded-lg mega-menu-item-pill focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="link-mega-estimates"
            >
              <FileSignature className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[14px] font-semibold text-slate-900">
                  Estimates & Quotes
                </div>
                <div className="text-[12px] text-slate-500 leading-snug max-w-[240px]">
                  On-site estimates with e-sign, no paper, no chasing.
                </div>
              </div>
            </Link>

            <Link
              to="/features/invoicing-payments"
              onClick={handleLinkClick}
              className="flex items-start gap-3 p-2 rounded-lg mega-menu-item-pill focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="link-mega-invoicing"
            >
              <CreditCard className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[14px] font-semibold text-slate-900">
                  Invoicing & Payments
                </div>
                <div className="text-[12px] text-slate-500 leading-snug max-w-[240px]">
                  Invoice instantly, take deposits, collect card payments in the field.
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Section 3: Recurring Work & Profit */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-3">
            Recurring Work & Profit
          </h3>
          <div className="space-y-1">
            <Link
              to="/features/maintenance-plans"
              onClick={handleLinkClick}
              className="flex items-start gap-3 p-2 rounded-lg mega-menu-item-pill focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="link-mega-maintenance"
            >
              <RefreshCw className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[14px] font-semibold text-slate-900">
                  Maintenance Plans & Recurring Jobs
                </div>
                <div className="text-[12px] text-slate-500 leading-snug max-w-[240px]">
                  Lock in repeat revenue with automated service schedules.
                </div>
              </div>
            </Link>

            <Link
              to="/features/job-costing-reporting"
              onClick={handleLinkClick}
              className="flex items-start gap-3 p-2 rounded-lg mega-menu-item-pill focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="link-mega-costing"
            >
              <BarChart className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[14px] font-semibold text-slate-900">
                  Job Costing & Reporting
                </div>
                <div className="text-[12px] text-slate-500 leading-snug max-w-[240px]">
                  Track profitability by job, crew, or tech in plain English.
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* View All Link */}
        <Link
          to="/features"
          onClick={handleLinkClick}
          className="text-[12px] font-semibold text-[#0B5FFF] hover:underline flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
          data-testid="link-mega-all-features"
        >
          View all features
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Right Column - Promo Tile */}
      <div className="bg-[#0E2A47] text-white rounded-xl p-4 flex flex-col justify-between ring-1 ring-slate-800 shadow-inner min-h-[220px]">
        <div>
          <div className="text-[11px] font-semibold text-white/80 bg-white/10 border border-white/20 rounded-full px-2 py-[3px] inline-block mb-3">
            Unlimited users
          </div>
          <div className="text-white font-semibold text-base leading-snug">
            Stop paying per tech.
          </div>
          <div className="text-white/70 text-[12px] leading-snug mt-2">
            Pick a job cap, not a seat cap. Add as many users as you want on paid plans.
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="bg-white/5 rounded-md px-2 py-2">
              <div className="flex items-center gap-1 text-[11px]">
                <Timer className="w-3.5 h-3.5 text-white/90" />
                <span className="text-white/90">Faster dispatch</span>
              </div>
              <div className="text-[11px] text-white/60" data-metric="stat-dispatch">35%*</div>
            </div>
            <div className="bg-white/5 rounded-md px-2 py-2">
              <div className="flex items-center gap-1 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-white/90" />
                <span className="text-white/90">Quicker approvals</span>
              </div>
              <div className="text-[11px] text-white/60" data-metric="stat-approvals">2×*</div>
            </div>
            <div className="bg-white/5 rounded-md px-2 py-2">
              <div className="flex items-center gap-1 text-[11px]">
                <DollarSign className="w-3.5 h-3.5 text-white/90" />
                <span className="text-white/90">Time-to-pay</span>
              </div>
              <div className="text-[11px] text-white/60" data-metric="stat-pay">&lt;24h*</div>
            </div>
            <div className="bg-white/5 rounded-md px-2 py-2">
              <div className="flex items-center gap-1 text-[11px]">
                <TrendingUp className="w-3.5 h-3.5 text-white/90" />
                <span className="text-white/90">Seat-free</span>
              </div>
              <div className="text-[11px] text-white/60">Unlimited users</div>
            </div>
          </div>

          {/* Mini-checklist */}
          <ul className="mt-3 space-y-1">
            <li className="flex items-start gap-2 text-[12px]">
              <Check className="w-3.5 h-3.5 text-white/80 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Calendar sync (Google & Apple)</span>
            </li>
            <li className="flex items-start gap-2 text-[12px]">
              <Check className="w-3.5 h-3.5 text-white/80 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">E-sign estimates & invoices</span>
            </li>
            <li className="flex items-start gap-2 text-[12px]">
              <Check className="w-3.5 h-3.5 text-white/80 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Customer portal for payments</span>
            </li>
          </ul>

          {/* Preview thumbnail */}
          <div className="mt-3">
            <div
              aria-hidden="true"
              className="w-full h-[90px] rounded-md bg-white/10 ring-1 ring-white/15"
              title="Product preview"
            />
          </div>
        </div>

        {/* CTA Stack */}
        <div className="mt-3 flex flex-col gap-2">
          <Link
            to="/pricing"
            onClick={handleLinkClick}
            className="bg-[#0B5FFF] text-white text-[12px] font-semibold rounded-md px-3 py-2 text-center shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
            data-testid="link-mega-pricing"
          >
            View Pricing
          </Link>
          <Link
            to="/compare"
            onClick={handleLinkClick}
            className="text-white/80 text-[12px] font-semibold text-center hover:text-white hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
            data-testid="link-mega-compare"
          >
            Compare vs seat-based →
          </Link>
        </div>
      </div>
    </div>
  );
}
