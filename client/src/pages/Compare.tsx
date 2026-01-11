import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export default function Compare() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkServicePro",
    "description": "Unlimited users on paid plans, recurring maintenance billing, profit visibility per job, without per-seat pricing.",
    "applicationCategory": "Field service management software",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5"
    }
  };

  const comparisonFeatures = [
    {
      feature: "Pricing model",
      linkServicePro: "Unlimited users on paid plans. You only pay based on jobs/month.",
      legacy: "Per-seat pricing ($200–$300+/tech/mo).",
      starter: "Cheap at first. Gets expensive fast when you bolt on extras."
    },
    {
      feature: "Scheduling & Dispatch",
      linkServicePro: "Drag-and-drop, route planning, live board.",
      legacy: "Yes, but bloated and permission-heavy.",
      starter: "Basic calendar. Manual reassignment."
    },
    {
      feature: "Quotes & Invoicing",
      linkServicePro: "Digital quotes with e-sign, convert to job, invoice in the field, take card payment on-site.",
      legacy: "Yes, but wrapped in 20 menus.",
      starter: "Manual quote → manual invoice. No smooth handoff."
    },
    {
      feature: "Recurring Maintenance / Auto-Billing",
      linkServicePro: "Built-in maintenance plans. Jobs auto-create. Customer auto-billed.",
      legacy: "Usually add-on module, expensive.",
      starter: "Mostly missing or manual."
    },
    {
      feature: "Team Accountability",
      linkServicePro: "Task assignments, internal messaging, manager/tech roles, proof-of-work photos, audit trail.",
      legacy: "Yes, if you pay for advanced tiers and spend weeks configuring roles.",
      starter: "Group chat and hope for the best."
    },
    {
      feature: "Profit Visibility",
      linkServicePro: "Profit per job, per tech, per day. Labor, materials, travel costs tracked.",
      legacy: "Yes, but locked behind enterprise reporting and 'call your rep' pricing.",
      starter: "No real costing. You're blind."
    },
    {
      feature: "Vendor / Asset / Warranty Tracking",
      linkServicePro: "Track assets, warranty status, vendor insurance, property history.",
      legacy: "Available, often with paid implementation.",
      starter: "No."
    },
    {
      feature: "Time to Run",
      linkServicePro: "You're live in a day. Start free. No credit card.",
      legacy: "Weeks of onboarding calls.",
      starter: "Fast, but you hit a ceiling as soon as you scale."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compare Field Service Software | Why Contractors Choose LinkServicePro</title>
        <meta 
          name="description" 
          content="LinkServicePro vs legacy field service software. Unlimited users, honest pricing, and real control of jobs, team, invoices, and profit — without $300+ seat fees or bloated enterprise overhead." 
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* SECTION 1: HERO / POSITIONING */}
      <section className="bg-[#0E2A47] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <span className="inline-block text-[11px] font-semibold text-white/80 bg-white/10 border border-white/20 rounded-full px-2 py-[3px] mb-4">
            Compare field service software
          </span>
          
          <h1 className="text-white font-semibold text-3xl sm:text-4xl leading-tight mb-4">
            The #1 field service management platform for growing contractors.
          </h1>
          
          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            Legacy platforms lock you into $200–$300 per tech per month and endless configuration. Lightweight 'starter apps' fall apart once you hire your third employee. LinkServicePro gives you unlimited users on paid plans, recurring revenue tools, real job costing, and team accountability — without the enterprise pain.
          </p>

          {/* Value row */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left sm:text-center text-[13px] text-white/80">
            <div>Unlimited users on paid plans</div>
            <div>Recurring maintenance + auto-billing</div>
            <div>Profit per job, per tech, per day</div>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-compare-start-free-hero"
            >
              <Link to="/signup">Start Free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-compare-view-pricing-hero"
            >
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
          
          <p className="text-[11px] text-white/60 mt-3">
            No per-tech seat fees. Ever.
          </p>
        </div>
      </section>

      {/* SECTION 2: WHY PEOPLE LEAVE OTHER SOFTWARE */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Per-seat pricing */}
          <div className="bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-5">
            <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] inline-block mb-3">
              Per-seat pricing
            </span>
            <h2 className="text-slate-900 text-lg font-semibold mb-2">
              You're punished for hiring.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Legacy enterprise systems bill you a full user license for every helper, apprentice, and dispatcher. You end up paying hundreds per month just so someone can see the schedule.
            </p>
          </div>

          {/* Card 2: Too complex */}
          <div className="bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-5">
            <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] inline-block mb-3">
              Too complex
            </span>
            <h2 className="text-slate-900 text-lg font-semibold mb-2">
              You spend more time feeding the system than running jobs.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Some 'all-in-one' platforms bury you under configuration, sub-menus, permissions trees, and mandatory onboarding fees. You basically need an admin just to dispatch.
            </p>
          </div>

          {/* Card 3: Too basic */}
          <div className="bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-5">
            <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] inline-block mb-3">
              Too basic
            </span>
            <h2 className="text-slate-900 text-lg font-semibold mb-2">
              Starter apps collapse as soon as you add a second crew.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lightweight tools are fine until you want recurring maintenance plans, project work with multiple visits, task assignments, or profit-per-tech reporting. Then you outgrow them overnight.
            </p>
          </div>
        </div>

        {/* CTA row for mobile conversion */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
            data-testid="button-compare-see-pricing"
          >
            <Link to="/pricing">See Pricing</Link>
          </Button>
          <Link
            to="/signup"
            className="text-[#0B5FFF] text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
            data-testid="link-compare-start-free"
          >
            Start Free →
          </Link>
        </div>
      </section>

      {/* SECTION 3: SIDE-BY-SIDE VALUE GRID */}
      <section className="bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Intro text */}
          <h2 className="text-2xl font-semibold text-slate-900 text-center max-w-2xl mx-auto mb-3">
            Everything you actually need to run a service company — in one platform.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Scheduling. Dispatch. Estimates with e-sign. Invoicing and card payments. Recurring maintenance and auto-billing. Team accountability. Job costing. Without paying for 12 different tools or $300/seat 'enterprise' licenses.
          </p>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto mb-8">
            <div className="grid grid-cols-4 gap-x-4 text-sm">
              {/* Header row */}
              <div className="font-bold text-slate-700 pb-3 border-b border-slate-300">Feature</div>
              <div className="font-bold text-slate-900 pb-3 border-b border-slate-300">LinkServicePro</div>
              <div className="font-bold text-slate-600 pb-3 border-b border-slate-300">Legacy Enterprise Platforms</div>
              <div className="font-bold text-slate-600 pb-3 border-b border-slate-300">Starter Apps</div>

              {/* Feature rows */}
              {comparisonFeatures.map((item, idx) => (
                <div key={idx} className="contents">
                  <div className="py-4 border-b border-slate-200 font-semibold text-slate-700">{item.feature}</div>
                  <div className="py-4 border-b border-slate-200 text-slate-900">{item.linkServicePro}</div>
                  <div className="py-4 border-b border-slate-200 text-slate-600">{item.legacy}</div>
                  <div className="py-4 border-b border-slate-200 text-slate-600">{item.starter}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4 mb-8">
            {comparisonFeatures.map((item, idx) => (
              <div key={idx} className="bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-4">
                <h3 className="font-semibold text-slate-900 mb-3">{item.feature}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">LinkServicePro:</div>
                    <div className="text-slate-600">{item.linkServicePro}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-600 mb-1">Legacy Enterprise:</div>
                    <div className="text-slate-600">{item.legacy}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-600 mb-1">Starter Apps:</div>
                    <div className="text-slate-600">{item.starter}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-compare-start-free-grid"
            >
              <Link to="/signup">Start Free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-compare-view-pricing-grid"
            >
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
          <p className="text-[11px] text-slate-500 mt-2 text-center">
            No per-tech seat fees. No forced onboarding contract.
          </p>
        </div>
      </section>

      {/* SECTION 4: SOCIAL-PROOF STYLE PROMISES */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tile 1 */}
          <div className="bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-5 flex flex-col">
            <h2 className="text-slate-900 font-semibold text-base mb-2">
              Unlimited users on paid plans
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Put every tech, helper, dispatcher, estimator, and office admin in the system without being punished for growing.
            </p>
          </div>

          {/* Tile 2 */}
          <div className="bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-5 flex flex-col">
            <h2 className="text-slate-900 font-semibold text-base mb-2">
              Recurring revenue built in
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Maintenance plans, recurring jobs, subscription billing, customer reminders — not duct-taped with 4 other apps.
            </p>
          </div>

          {/* Tile 3 */}
          <div className="bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-5 flex flex-col">
            <h2 className="text-slate-900 font-semibold text-base mb-2">
              See profit, not guesses
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Job costing, labor cost, materials, route time, vendor performance. You'll know exactly which work is worth doing.
            </p>
          </div>
        </div>

        {/* CTA row */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
            data-testid="button-compare-start-free-promises"
          >
            <Link to="/signup">Start Free</Link>
          </Button>
          <Link
            to="/contact"
            className="text-[#0B5FFF] text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
            data-testid="link-compare-talk-to-sales"
          >
            Talk to Sales →
          </Link>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA BAND */}
      <section className="bg-[#0E2A47] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-white font-semibold text-2xl sm:text-3xl mb-3">
            Ready to run like a real operation?
          </h2>
          
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-3 mb-6">
            Unlimited users on paid plans. Real job costing. Maintenance revenue. Team accountability. No per-tech seat fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-compare-start-free-final"
            >
              <Link to="/signup">Start Free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-compare-view-pricing-final"
            >
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
          
          <p className="text-[11px] text-white/60 mt-2">
            By starting, you agree to receive onboarding and service-related messages. Standard rates apply for SMS usage.
          </p>
        </div>
      </section>
    </>
  );
}
