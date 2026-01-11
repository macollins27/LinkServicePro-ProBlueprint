interface StickyBarProps {
  label?: string;
  href?: string;
}

export default function StickyBar({ label = "Start free", href = "/signup" }: StickyBarProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
      <span className="text-sm sm:text-base font-semibold text-slate-900">
        Ready to try it?
      </span>
      <div className="flex gap-2 flex-shrink-0">
        <a
          href="/pricing"
          className="px-3 sm:px-4 py-2 border border-slate-900 font-extrabold text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF]"
          data-testid="link-sticky-pricing"
        >
          View Pricing
        </a>
        <a
          href={href}
          className="px-3 sm:px-4 py-2 bg-slate-900 text-white font-extrabold text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF]"
          data-testid="link-sticky-cta"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
