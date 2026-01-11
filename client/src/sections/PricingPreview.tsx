import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { PLANS } from "@/data/plans";
import { Badge } from "@/components/ui/badge";

export default function PricingPreview() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const getDisplayPrice = (basePrice: number) => {
    if (billingCycle === "annual") {
      const annualPrice = basePrice * 12 * 0.8; // 20% discount
      const monthlyEquivalent = annualPrice / 12;
      return monthlyEquivalent;
    }
    return basePrice;
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
            Transparent, job-based pricing
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Pay for what you use. Unlimited users on all paid plans.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-white ring-1 ring-slate-200 p-1 shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#0B5FFF] text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
              data-testid="toggle-monthly"
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2.5 font-semibold transition-all flex items-center gap-2 ${
                billingCycle === "annual"
                  ? "bg-[#0B5FFF] text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
              data-testid="toggle-annual"
            >
              Annual
              <Badge className="bg-green-600 text-white border-0 text-xs font-bold">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PLANS.map((plan, index) => {
            const isEssential = plan.id === "essential";
            const displayPrice = getDisplayPrice(plan.price);
            
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 flex flex-col ${
                  isEssential
                    ? "ring-2 ring-[#0B5FFF] shadow-xl shadow-blue-100 relative transform lg:scale-105"
                    : "ring-1 ring-slate-200 shadow-sm"
                }`}
                data-testid={`pricing-plan-${plan.id}`}
              >
                {isEssential && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0B5FFF] text-white border-0 text-xs font-bold px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-3">
                    <span className="text-4xl font-extrabold text-slate-900">
                      ${Math.round(displayPrice)}
                    </span>
                    <span className="text-slate-600">/mo</span>
                  </div>
                  
                  <div className="text-sm text-slate-600 space-y-1">
                    <div>
                      {plan.jobsCap === Infinity 
                        ? "Unlimited jobs/month" 
                        : `${plan.jobsCap} jobs/month`}
                    </div>
                    <div className="font-medium text-slate-900">{plan.users}</div>
                    {plan.overage > 0 && (
                      <div className="text-xs text-slate-500">
                        Overage: ${plan.overage}/job
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check 
                          className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                            isEssential ? "text-[#0B5FFF]" : "text-green-600"
                          }`}
                          aria-hidden="true" 
                        />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Link
                    to={plan.id === "platinum" ? "/contact" : "/signup"}
                    className={`block w-full text-center px-4 py-3 font-bold transition-all ${
                      isEssential
                        ? "bg-[#0B5FFF] text-white hover:bg-[#0952CC] shadow-md"
                        : plan.id === "free"
                        ? "bg-slate-900 text-white hover:bg-slate-800"
                        : "bg-[#0B5FFF] text-white hover:bg-[#0952CC]"
                    }`}
                    data-testid={`button-plan-cta-${plan.id}`}
                    data-analytics={`pricing_plan_cta_click:${plan.id}`}
                  >
                    {plan.cta}
                  </Link>
                  
                  {plan.id !== "free" && (
                    <Link
                      to="/contact"
                      className="block w-full text-center px-4 py-2.5 border-2 border-slate-300 text-slate-700 font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all"
                      data-testid={`button-plan-sales-${plan.id}`}
                    >
                      Talk to sales
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 max-w-3xl mx-auto" data-testid="pricing-footer-info">
          <p className="text-sm text-slate-600">
            All paid plans include unlimited users • SMS and payment processing billed at pass-through rates
          </p>
          {billingCycle === "annual" && (
            <p className="text-sm font-semibold text-[#0B5FFF] mt-2">
              Annual billing saves 20% on base subscription fees
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
