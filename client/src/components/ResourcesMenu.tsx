import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Newspaper, BookOpen, Video, LifeBuoy, ClipboardList, Phone } from "lucide-react";

interface ResourcesMenuProps {
  onClose: () => void;
}

export default function ResourcesMenu({ onClose }: ResourcesMenuProps) {
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
    <div className="relative">
      <div
        ref={menuRef}
        id="resources-menu"
        className="absolute left-1/2 -translate-x-1/2 z-50 mt-2 w-screen max-w-4xl rounded-xl bg-white shadow-xl ring-1 ring-slate-200 p-4"
        role="dialog"
        data-testid="megamenu-resources"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          {/* LEFT CONTENT BLOCKS */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Column A: LEARN THE BUSINESS */}
            <div className="flex flex-col gap-2">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                LEARN THE BUSINESS
              </div>

              <Link
                to="/resources/blog"
                onClick={handleLinkClick}
                aria-label="Blog & Updates - Field-tested tactics, product updates, honest advice"
                className="group flex items-start gap-3 rounded-lg p-3 hover:bg-slate-50 hover:shadow-sm hover:ring-1 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none"
                data-testid="link-resources-blog"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0B5FFF]/10 text-[#0B5FFF] ring-1 ring-[#0B5FFF]/20 flex-shrink-0">
                  <Newspaper className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[14px] font-semibold text-slate-900 leading-tight">
                    Blog & Updates
                  </div>
                  <div className="text-[12px] text-slate-600 leading-snug">
                    Field-tested tactics, product updates, honest advice.
                  </div>
                </div>
              </Link>

              <Link
                to="/resources/guides"
                onClick={handleLinkClick}
                aria-label="Free Guides & Playbooks - Dispatch, pricing, recurring revenue, same-day payment"
                className="group flex items-start gap-3 rounded-lg p-3 hover:bg-slate-50 hover:shadow-sm hover:ring-1 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none"
                data-testid="link-resources-guides"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0B5FFF]/10 text-[#0B5FFF] ring-1 ring-[#0B5FFF]/20 flex-shrink-0">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[14px] font-semibold text-slate-900 leading-tight">
                    Free Guides & Playbooks
                  </div>
                  <div className="text-[12px] text-slate-600 leading-snug">
                    Dispatch, pricing, recurring revenue, same-day payment.
                  </div>
                </div>
              </Link>

              <Link
                to="/resources/webinars"
                onClick={handleLinkClick}
                aria-label="Webinars & Training - Live / on-demand sessions for owners and ops"
                className="group flex items-start gap-3 rounded-lg p-3 hover:bg-slate-50 hover:shadow-sm hover:ring-1 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none"
                data-testid="link-resources-webinars"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0B5FFF]/10 text-[#0B5FFF] ring-1 ring-[#0B5FFF]/20 flex-shrink-0">
                  <Video className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[14px] font-semibold text-slate-900 leading-tight">
                    Webinars & Training
                  </div>
                  <div className="text-[12px] text-slate-600 leading-snug">
                    Live / on-demand sessions for owners and ops.
                  </div>
                </div>
              </Link>
            </div>

            {/* Column B: GET HELP */}
            <div className="flex flex-col gap-2">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                GET HELP
              </div>

              <Link
                to="/help"
                onClick={handleLinkClick}
                aria-label="Help Center - Step-by-step answers for scheduling, dispatch, invoices, and more"
                className="group flex items-start gap-3 rounded-lg p-3 hover:bg-slate-50 hover:shadow-sm hover:ring-1 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none"
                data-testid="link-resources-help-center"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0B5FFF]/10 text-[#0B5FFF] ring-1 ring-[#0B5FFF]/20 flex-shrink-0">
                  <LifeBuoy className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[14px] font-semibold text-slate-900 leading-tight">
                    Help Center
                  </div>
                  <div className="text-[12px] text-slate-600 leading-snug">
                    Step-by-step answers for scheduling, dispatch, invoices, and more.
                  </div>
                </div>
              </Link>

              <Link
                to="/help"
                onClick={handleLinkClick}
                aria-label="Popular Articles - Scheduling jobs, taking deposits, sending e-sign estimates"
                className="group flex items-start gap-3 rounded-lg p-3 hover:bg-slate-50 hover:shadow-sm hover:ring-1 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none"
                data-testid="link-resources-popular-articles"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0B5FFF]/10 text-[#0B5FFF] ring-1 ring-[#0B5FFF]/20 flex-shrink-0">
                  <ClipboardList className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[14px] font-semibold text-slate-900 leading-tight">
                    Popular Articles
                  </div>
                  <div className="text-[12px] text-slate-600 leading-snug">
                    Scheduling jobs, taking deposits, sending e-sign estimates.
                  </div>
                </div>
              </Link>

              <Link
                to="/help"
                onClick={handleLinkClick}
                aria-label="Contact Support - Email or call 631-206-3700 Mon–Fri 9a–5p ET"
                className="group flex items-start gap-3 rounded-lg p-3 hover:bg-slate-50 hover:shadow-sm hover:ring-1 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none"
                data-testid="link-resources-contact-support"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0B5FFF]/10 text-[#0B5FFF] ring-1 ring-[#0B5FFF]/20 flex-shrink-0">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[14px] font-semibold text-slate-900 leading-tight">
                    Contact Support
                  </div>
                  <div className="text-[12px] text-slate-600 leading-snug">
                    Email or call 631-206-3700 Mon–Fri 9a–5p ET.
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT CTA CARD */}
          <div className="flex flex-col justify-between rounded-xl bg-[#0E2A47] text-white ring-1 ring-slate-800 shadow-inner p-4">
            <div className="flex flex-col gap-2">
              <div className="inline-block rounded-full bg-white/10 border border-white/20 text-white/80 text-[11px] font-semibold px-2 py-[2px] w-fit">
                Built for the field
              </div>

              <div className="text-[15px] font-semibold text-white leading-snug">
                Stop duct-taping 4 apps
              </div>

              <div className="text-[12px] leading-snug text-white/70">
                Live dispatch board, route planning, quotes with e-sign, and same-day payment — all in one hub.
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to="/signup"
                onClick={handleLinkClick}
                aria-label="Get Started Free"
                className="bg-[#0B5FFF] text-white text-[13px] font-semibold rounded-md px-3 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-offset-[#0E2A47]"
                data-testid="button-resources-signup"
              >
                Get Started Free
              </Link>

              <Link
                to="/contact"
                onClick={handleLinkClick}
                aria-label="Talk to Sales"
                className="text-white/80 text-[13px] font-semibold rounded-md px-3 py-2 ring-1 ring-white/30 hover:text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-offset-[#0E2A47]"
                data-testid="button-resources-sales"
              >
                Talk to Sales
              </Link>
            </div>

            <div className="mt-3 text-[11px] text-white/60 leading-snug">
              Works with Google Calendar and Apple Calendar. Unlimited users on paid plans.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
