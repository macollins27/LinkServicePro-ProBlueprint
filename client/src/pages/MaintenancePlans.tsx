import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlanRibbon } from "@/components/PlanRibbon";
import { 
  Calendar,
  ClipboardCheck,
  CreditCard,
  RefreshCw,
  Users,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Shield,
  Package,
  TrendingUp,
  Zap
} from "lucide-react";

export default function MaintenancePlans() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkServicePro Maintenance Plans",
    "applicationCategory": "Field service management software",
    "offers": {
      "@type": "Offer",
      "description": "Start free. Unlimited users on paid plans. No per-tech seat fees."
    }
  };

  return (
    <>
      <Helmet>
        <title>Recurring Service & Maintenance Plans | Auto-Schedule Visits, Auto-Bill Customers</title>
        <meta 
          name="description" 
          content="Never miss a contract visit. Auto-generate recurring jobs, send reminders, and bill like a subscription. Tie checklists, assets, and warranty history so work is done right. Unlimited users on paid plans." 
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="bg-[#0E2A47] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - text */}
          <div>
            <span className="inline-block text-[11px] font-semibold text-white/80 bg-white/10 border border-white/20 rounded-full px-2 py-[3px] mb-4">
              Maintenance Plans
            </span>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Keep recurring maintenance on schedule. Bill it automatically.
            </h1>
            
            <p className="text-white/80 text-sm leading-relaxed sm:text-base mb-4">
              Service agreements, seasonal checkups, memberships — we auto-generate visits, remind customers, and charge on schedule. You get predictable revenue without spreadsheets.
            </p>

            {/* Value row */}
            <div className="flex flex-col gap-2 mt-4 text-[13px] text-white/80 sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Visits generate automatically</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ClipboardCheck className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Techs see required checklists</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Subscription billing runs on time</span>
              </div>
            </div>

            {/* Badge row */}
            <div className="flex flex-wrap gap-2 text-[11px] mt-4">
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Recurring jobs
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Maintenance agreements
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Auto-billing
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Unlimited users on paid plans
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
                data-testid="button-see-maintenance-flow-hero"
              >
                <Link to="/features/maintenance-plans">See Maintenance Flow</Link>
              </Button>
            </div>
            <p className="text-[11px] text-white/60 mt-2">
              No credit card to start.
            </p>
          </div>

          {/* Right column - plan schedule mock */}
          <div className="relative bg-white/5 border border-white/10 rounded-xl shadow-inner p-4 min-h-[260px] flex flex-col justify-between">
            <div>
              <p className="text-white text-sm font-semibold mb-4">
                Plan Schedule
              </p>
              
              {/* Simulated schedule rows */}
              <div className="space-y-2">
                <div className="bg-white/10 rounded-md h-4 w-3/4"></div>
                <div className="bg-white/10 rounded-md h-3 w-full"></div>
                <div className="bg-white/10 rounded-md h-3 w-5/6"></div>
                <div className="bg-white/10 rounded-md h-4 w-2/3 mt-4"></div>
                <div className="bg-white/10 rounded-md h-5 w-1/2 mt-3"></div>
              </div>
            </div>
            
            <p className="text-[11px] text-white/60 mt-4">
              Next visits • Assigned techs • Billing status
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: RECURRING JOBS ON RAILS */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Spotlight Card */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Essential+" testId="ribbon-recurring-jobs" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Recurring Jobs
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Your calendar fills itself.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Set the cadence and rules once. We generate the jobs, assign crews based on capacity, and attach the checklist every time.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <RefreshCw className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Auto-generate recurring visits</div>
                  <div className="text-[13px] text-slate-500 leading-snug">No more 'Who's due this month?' boards.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Users className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Capacity planning</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Don't overload one tech while others are idle.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <ClipboardCheck className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Checklists per visit</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Techs see exactly what to do and what to document.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-recurring-workflow"
              >
                <Link to="/features/maintenance-plans">See Recurring Workflow</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-recurring"
              >
                Start Free →
              </Link>
            </div>
          </div>

          {/* Right column - Outcome Rows */}
          <div className="space-y-6">
            {/* Outcome 1 */}
            <div className="flex gap-3 items-start">
              <CheckCircle className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Nothing slips.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Visits appear on schedule with reminders.
                </p>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="flex gap-3 items-start">
              <ClipboardCheck className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Consistent service.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Same checklist, same quality, every time.
                </p>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="flex gap-3 items-start">
              <Zap className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Less admin.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Stop hand-creating tickets.
                </p>
              </div>
            </div>

            {/* Cross-link */}
            <Link
              to="/features/scheduling-dispatch"
              className="inline-block text-[#0B5FFF] text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1 mt-4"
              data-testid="link-scheduling-dispatch"
            >
              See Scheduling & Dispatch →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: SUBSCRIPTION / RECURRING BILLING */}
      <section className="bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - text content */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Bill like a membership, not like a collection agency.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Monthly, quarterly, or per-visit — charge on time and show a clean customer ledger without chasing money.
            </p>

            {/* Bullets */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-2 items-start">
                <RefreshCw className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Subscription & recurring billing
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Essential+</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <DollarSign className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Deposits & partial payments
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Free → Premium</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <FileText className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Customer portal & payment history
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Starter+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-billing-options"
              >
                <Link to="/features/invoicing-payments">See Billing Options</Link>
              </Button>
              <Link
                to="/features/invoicing-payments"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-invoicing-payments"
              >
                See Invoicing & Payments →
              </Link>
            </div>
          </div>

          {/* Right column - Spotlight Card "Recurring Billing" */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Essential+" testId="ribbon-recurring-billing" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Recurring Billing
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Charge on schedule, every time.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              We bill and remind automatically. Your customer can update card info and view history from the portal.
            </p>

            {/* Placeholder mock */}
            <div className="bg-slate-100 rounded-lg h-32 w-full mt-4 flex items-center justify-center text-[11px] text-slate-500">
              Membership / Next charge / Card on file / Balance
            </div>

            {/* CTA inside card */}
            <div className="mt-4 flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold text-sm shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-billing-options-card"
              >
                <Link to="/features/invoicing-payments">See Billing Options</Link>
              </Button>
              <Link
                to="/pricing"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-compare-plans-billing"
              >
                Compare Plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ASSET + WARRANTY HISTORY */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Spotlight Card "Asset & Warranty History" */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Premium" testId="ribbon-asset-warranty" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Asset & Warranty History
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Prove what was serviced and when.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Track each unit, warranty status, and ownership changes tied to the property. You'll know exactly what you touched — and what you didn't.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <Package className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Asset inspection & tracking</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Shield className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Warranty tracking</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Clock className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Ownership transfer history (property-tied)</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-asset-tracking"
              >
                <Link to="/features/asset-tracking">See Asset Tracking</Link>
              </Button>
              <Link
                to="/pricing"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-compare-plans-asset"
              >
                Compare Plans →
              </Link>
            </div>
          </div>

          {/* Right column - Dark trust block */}
          <div className="bg-slate-900 text-white rounded-xl p-5 ring-1 ring-slate-800">
            <h2 className="text-white font-semibold text-lg sm:text-xl mb-4">
              Stop doing free 'warranty' work that isn't yours.
            </h2>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              With clean history and proof, callbacks get handled fairly. You show facts, not guesses.
            </p>

            {/* CTA block */}
            <div className="flex flex-col gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-profit-tracking"
              >
                <Link to="/features/job-costing-reporting">See Profit Tracking</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-warranty"
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
            Lock in recurring revenue without babysitting.
          </h2>
          
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-3 mb-6">
            Auto-scheduled visits. Auto-billing. Checklists every time. Unlimited users on paid plans. No per-tech seat fees.
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
