import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlanRibbon } from "@/components/PlanRibbon";
import { 
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  Target,
  FileText,
  Package,
  Shield,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Wrench
} from "lucide-react";

export default function JobCostingReporting() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkServicePro Job Costing & Reporting",
    "applicationCategory": "Field service management software",
    "offers": {
      "@type": "Offer",
      "description": "Start free. Unlimited users on paid plans. No per-tech seat fees."
    }
  };

  return (
    <>
      <Helmet>
        <title>Job Costing & Profit Reporting | See Profit Per Job, Per Tech, Per Day</title>
        <meta 
          name="description" 
          content="Know exactly what each job actually made after labor, drive time, and materials. Track wage cost, parts cost, purchase orders, and vendor status. Stop guessing which work is worth it." 
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - text */}
          <div>
            <span className="inline-block text-[11px] font-semibold text-white bg-white/10 border border-white/20 rounded-full px-2 py-[3px] mb-4">
              Job Costing & Reporting
            </span>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              See profit per job, per tech, per day.
            </h1>
            
            <p className="text-white/80 text-sm leading-relaxed sm:text-base mb-4">
              Stop guessing. Track labor cost, material cost, drive time, and price. Know which work is actually worth doing — and which you should stop offering.
            </p>

            {/* Value row */}
            <div className="flex flex-col gap-2 mt-4 text-[13px] text-white/80 sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Who made money today?</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Which tech is actually profitable?</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Which service should you drop?</span>
              </div>
            </div>

            {/* Badge row */}
            <div className="flex flex-wrap gap-2 text-[11px] mt-4">
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Job costing
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Wage tracking
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Material tracking
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Profit dashboard
              </span>
            </div>

            {/* CTA row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mt-6">
              <Button
                asChild
                size="lg"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-start-free-hero"
              >
                <Link to="/signup">Start Free</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-profit-dashboard-hero"
              >
                <Link to="/features/job-costing-reporting">See Profit Dashboard</Link>
              </Button>
            </div>
            <p className="text-[11px] text-white/60 mt-2">
              Unlimited users on paid plans. No per-tech seat fees.
            </p>
          </div>

          {/* Right column - margin report mock */}
          <div className="relative bg-white/5 border border-white/10 rounded-xl shadow-inner p-4 min-h-[260px] flex flex-col justify-between">
            <div>
              <p className="text-white text-sm font-semibold mb-4">
                Today's Margin Report
              </p>
              
              {/* Simulated report rows */}
              <div className="space-y-2">
                <div className="bg-white/10 rounded-md h-4 w-3/4"></div>
                <div className="bg-white/10 rounded-md h-4 w-full"></div>
                <div className="bg-white/10 rounded-md h-4 w-5/6"></div>
                <div className="bg-[#0B5FFF]/30 rounded-md h-5 w-2/3 mt-4 flex items-center px-2">
                  <span className="text-white text-[10px] font-semibold">Job 4821: 37% margin</span>
                </div>
              </div>
            </div>
            
            <p className="text-[11px] text-white/60 mt-4">
              Job margin • Tech margin • Daily total • Red flags
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUE JOB COSTING */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Spotlight Card */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Premium" testId="ribbon-job-costing" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Job Costing
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Know if you actually made money on that job.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              We tie revenue to labor, parts, and drive time so you can see true margin per job. You'll know which work is worth repeating — and which work is quietly killing your business.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <BarChart3 className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Job costing & profitability reports</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Real margin on every visit and every invoice.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Clock className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Drive time and labor impact</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Route inefficiency shows up in the profit, not just on a map.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <TrendingUp className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">See margin trends over time</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Watch how pricing, parts cost, or fuel costs hit you month-to-month.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-profit-dashboard"
              >
                <Link to="/features/job-costing-reporting">See Profit Dashboard</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-costing"
              >
                Start Free →
              </Link>
            </div>
          </div>

          {/* Right column - Outcome Rows */}
          <div className="space-y-6">
            {/* Outcome 1 */}
            <div className="flex gap-3 items-start">
              <Target className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Stop underbidding.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  If a service line is always low-margin, raise the rate or stop offering it.
                </p>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="flex gap-3 items-start">
              <Users className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Pay your top techs what they're worth.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You'll see who quietly saves you money and who quietly burns it.
                </p>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="flex gap-3 items-start">
              <DollarSign className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Fix pricing before busy season.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Don't find out in December that you underpriced all summer.
                </p>
              </div>
            </div>

            {/* Cross-link */}
            <Link
              to="/features/invoicing-payments"
              className="inline-block text-[#0B5FFF] text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1 mt-4"
              data-testid="link-invoicing-payments"
            >
              See Invoicing & Payments →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: PAYROLL / LABOR / MATERIALS VISIBILITY */}
      <section className="bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - text content */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Every dollar accounted for.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Tie wage cost, materials, and time-on-site directly to each job so you can prove where the money went.
            </p>

            {/* Bullets */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-2 items-start">
                <DollarSign className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Payroll & wage tracking
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px] ml-2">Premium</span>
                  </div>
                  <div className="text-[13px] text-slate-500 leading-snug">See actual labor cost per job, per tech, per day.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Package className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Expense & materials tracking
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px] ml-2">Essential+</span>
                  </div>
                  <div className="text-[13px] text-slate-500 leading-snug">Log parts, markups, and materials so margin is real, not theory.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Users className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Capacity planning
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px] ml-2">Essential+</span>
                  </div>
                  <div className="text-[13px] text-slate-500 leading-snug">Understand who's overbooked, who's underbooked, and how it affects your profit per route.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-cost-breakdown"
              >
                <Link to="/features/job-costing-reporting">See Cost Breakdown</Link>
              </Button>
              <Link
                to="/features/scheduling-dispatch"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-scheduling-dispatch"
              >
                View Scheduling & Dispatch →
              </Link>
            </div>
          </div>

          {/* Right column - Spotlight Card "Cost Breakdown" */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Essential+ / Premium" testId="ribbon-cost-breakdown" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Cost Breakdown
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Where did the money go?
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              See labor, parts, travel, and overhead against the price you charged. You'll know why a 'busy week' didn't feel like a profitable week.
            </p>

            {/* Placeholder mock */}
            <div className="bg-slate-100 rounded-lg h-32 w-full mt-4 flex items-center justify-center text-[11px] text-slate-500">
              Labor $ • Materials $ • Travel Time $ • Margin %
            </div>

            {/* CTA inside card */}
            <div className="mt-4 flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold text-sm shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-cost-breakdown-card"
              >
                <Link to="/features/job-costing-reporting">See Cost Breakdown</Link>
              </Button>
              <Link
                to="/pricing"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-compare-plans-cost"
              >
                Compare Plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PURCHASING & VENDOR CONTROL */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Spotlight Card "Vendors & Purchasing" */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Premium" testId="ribbon-vendors-purchasing" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Vendors & Purchasing
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              No more 'we're out of parts' surprises.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Track purchase orders, vendor status, and insurance compliance in one place. You'll know what's on order, who you're waiting on, and whether they're even allowed on your job.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <FileText className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Purchase orders & vendor management</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Shield className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Vendor insurance status tracking</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Package className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Property-tied document history</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-vendor-controls"
              >
                <Link to="/features/vendor-management">See Vendor Controls</Link>
              </Button>
              <Link
                to="/pricing"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-compare-plans-vendor"
              >
                Compare Plans →
              </Link>
            </div>
          </div>

          {/* Right column - Dark trust block */}
          <div className="bg-slate-900 text-white rounded-xl p-5 ring-1 ring-slate-800 flex flex-col justify-between">
            <div>
              <h2 className="text-white font-semibold text-lg sm:text-xl mb-4">
                Catch problems before they blow up.
              </h2>
              
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                If a certain vendor keeps delaying installs, or keeps showing up uninsured, that's money and risk. Now you'll see the pattern — and fix it before it costs you another client.
              </p>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-team-management"
              >
                <Link to="/features/team-management">See Team Management</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-vendor"
              >
                Start Free →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA BAND */}
      <section className="bg-[#0E2A47] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-white font-semibold text-2xl sm:text-3xl mb-3">
            Run the jobs that pay. Drop the ones that don't.
          </h2>
          
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-3 mb-6">
            See margin per job, per tech, per route. Track labor, parts, and vendor performance. Stop doing work that quietly loses money. Unlimited users on paid plans. No per-tech seat fees.
          </p>

          {/* CTA row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 mt-6">
            <Button
              asChild
              size="lg"
              className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-start-free-final"
            >
              <Link to="/signup">Start Free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-view-pricing-final"
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
