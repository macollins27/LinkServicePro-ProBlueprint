import SEO from "@/components/SEO";
import { Check, X } from "lucide-react";

export default function CompareLegacy() {
  const comparisons = [
    {
      feature: "Pricing Model",
      linkservicepro: "Job-based, fair overages",
      legacy: "Per-user, per-month (expensive at scale)"
    },
    {
      feature: "User Limits",
      linkservicepro: "Unlimited users on paid plans",
      legacy: "Pay per user"
    },
    {
      feature: "Setup Time",
      linkservicepro: "Start in minutes",
      legacy: "Weeks of configuration"
    },
    {
      feature: "Mobile Experience",
      linkservicepro: "Native iOS & Android apps",
      legacy: "Mobile web only or outdated apps"
    },
    {
      feature: "Customer Portal",
      linkservicepro: "Included free",
      legacy: "Often paid add-on"
    },
    {
      feature: "Ease of Use",
      linkservicepro: "Fewer clicks, modern UI",
      legacy: "Complex, cluttered interface"
    },
    {
      feature: "Support",
      linkservicepro: "Priority support on all paid plans",
      legacy: "Premium support costs extra"
    },
    {
      feature: "Contract",
      linkservicepro: "No long-term contract",
      legacy: "Often 12-24 month commitment"
    }
  ];

  return (
    <>
      <SEO
        title="Compare to Legacy Tools"
        description="See how LinkServicePro compares to traditional field service management software. Simple pricing, modern interface, no long-term contracts."
        canonical="https://linkservicepro.com/compare/legacy-tools"
      />

      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            LinkServicePro vs. Legacy Tools
          </h1>
          <p className="text-lg text-slate-600 mb-12">
            See why contractors are switching to a simpler, more affordable solution
          </p>

          <div className="bg-white ring-1 ring-slate-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-100 p-4 font-bold text-slate-900 border-b border-slate-200">
              <div>Feature</div>
              <div>LinkServicePro</div>
              <div>Legacy Tools</div>
            </div>

            {comparisons.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 gap-4 items-center ${
                  index % 2 === 0 ? "bg-slate-50" : "bg-white"
                }`}
              >
                <div className="font-semibold text-slate-900">{row.feature}</div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700">{row.linkservicepro}</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-600">{row.legacy}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0B5FFF] text-white font-extrabold hover:bg-[#0952CC] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2"
              data-testid="button-start-free-compare"
            >
              Start Free Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
