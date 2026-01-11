import { FEATURE_META } from "@/data/features";
import clsx from "clsx";
import { Link } from "react-router-dom";

const PLAN_STYLES: Record<string, string> = {
  Free: "bg-slate-100 text-slate-700",
  Starter: "bg-blue-100 text-blue-700",
  Essential: "bg-emerald-100 text-emerald-700",
  Premium: "bg-violet-100 text-violet-700",
  Platinum: "bg-amber-100 text-amber-800",
};

export default function IndustryFeatureGrid() {
  return (
    <section aria-label="Every feature you need">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold">Every feature you need</h2>
          <p className="text-slate-600 mt-1">Start free, upgrade as you grow</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURE_META.map(({ key, label, slug, minPlan, blurb, Icon }) => (
            <article
              key={key}
              data-testid={`card-feature-${key}`}
              className={clsx(
                "relative rounded-2xl border border-slate-200 bg-white shadow-sm",
                "transition duration-150 ease-out hover:shadow-md hover:-translate-y-0.5",
                "motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm"
              )}
            >
              <span
                className={clsx(
                  "absolute top-3 right-3 inline-flex items-center justify-center",
                  "px-2 py-0.5 rounded-full text-xs font-medium",
                  PLAN_STYLES[minPlan]
                )}
                data-testid={`badge-plan-${key}`}
              >
                {minPlan}
              </span>

              <div className="p-4 sm:p-5 h-full">
                <Link
                  to={`/features/${slug}`}
                  aria-label={`Open ${label}`}
                  className="inline-flex items-center text-slate-400 hover:text-[#0B5FFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 rounded-md transition-colors"
                  data-testid={`link-icon-${key}`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                </Link>

                <h3 className="mt-3 text-[15px] sm:text-base font-medium text-slate-900 leading-snug line-clamp-1">
                  <Link
                    to={`/features/${slug}`}
                    className="hover:underline underline-offset-2 transition-all"
                    aria-label={`Learn more about ${label}`}
                    data-testid={`link-title-${key}`}
                  >
                    {label}
                  </Link>
                </h3>

                {blurb ? (
                  <p className="mt-1 text-sm text-slate-600 line-clamp-2">{blurb}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
