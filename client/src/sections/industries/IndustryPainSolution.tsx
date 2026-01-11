import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";

interface Pain {
  pain: string;
  fix: string;
}

interface IndustryPainSolutionProps {
  pains: Pain[];
}

export default function IndustryPainSolution({ pains }: IndustryPainSolutionProps) {
  return (
    <section aria-label="Common pain points, solved" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold">Common pain points, solved</h2>
          <p className="text-slate-600 mt-1">See how LinkServicePro tackles your biggest challenges</p>
        </div>

        <div
          className={clsx(
            "grid gap-4 sm:gap-5",
            pains.length <= 4 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {pains.map(({ pain, fix }, i) => (
            <article
              key={i}
              data-testid={`card-pain-${i}`}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-150 ease-out hover:shadow-md hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm"
            >
              <div className="p-4 sm:p-5">
                <h3 className="text-[15px] sm:text-base font-medium text-slate-900 leading-snug">
                  {pain}
                </h3>
                <div className="mt-3 mb-2 border-t border-slate-200" />
                <p className="text-sm text-slate-600 inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  {fix}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
