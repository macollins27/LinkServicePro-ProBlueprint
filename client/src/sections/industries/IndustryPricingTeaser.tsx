import { useState } from "react";
import { planForJobs, PLANS } from "@/data/plans";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface IndustryPricingTeaserProps {
  typicalJobs: number[];
  slug: string;
}

export default function IndustryPricingTeaser({ typicalJobs, slug }: IndustryPricingTeaserProps) {
  const [selectedJobs, setSelectedJobs] = useState(typicalJobs[2] || 150);
  const recommendedPlan = planForJobs(selectedJobs);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Find your plan
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            How many jobs do you run per month?
          </p>
        </div>

        {/* Job Volume Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {typicalJobs.map((jobCount) => (
              <button
                key={jobCount}
                onClick={() => setSelectedJobs(jobCount)}
                data-testid={`button-jobs-${jobCount}`}
                className={`px-4 py-2 rounded-lg font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 ${
                  selectedJobs === jobCount
                    ? "bg-[#0B5FFF] text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-300 hover:border-slate-400"
                }`}
              >
                {jobCount}
              </button>
            ))}
          </div>
        </div>

        {/* Recommended Plan Card */}
        <div className="rounded-2xl border-2 border-[#0B5FFF] bg-white p-6 sm:p-8 shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  {recommendedPlan.name}
                </h3>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-[#0B5FFF] text-xs font-semibold">
                  Recommended
                </span>
              </div>
              <p className="mt-2 text-slate-600">{recommendedPlan.users}</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-slate-900">
                  ${recommendedPlan.price}
                </span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Up to {recommendedPlan.jobsCap === Infinity ? "unlimited" : recommendedPlan.jobsCap} jobs/month
                {recommendedPlan.overage > 0 && ` • $${recommendedPlan.overage} per additional job`}
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button
                size="lg"
                variant="default"
                data-testid="button-start-free-pricing"
                data-analytics={`industry_pricing_teaser_start_free:${slug}`}
                className="bg-[#0B5FFF] hover:bg-[#0A54E6]"
              >
                {recommendedPlan.cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                data-testid="button-see-full-pricing"
                data-analytics={`industry_pricing_teaser_see_pricing:${slug}`}
              >
                See full pricing
              </Button>
            </div>
          </div>

          {/* Top Features */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <ul className="grid gap-3 sm:grid-cols-2">
              {recommendedPlan.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          No credit card required • Free 14-day trial • Cancel anytime
        </p>
      </div>
    </section>
  );
}
