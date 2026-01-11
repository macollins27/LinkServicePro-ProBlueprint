import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlanRibbon } from "@/components/PlanRibbon";
import { 
  Check,
  Pen,
  CheckCircle,
  CalendarCheck,
  FileText,
  Edit3,
  DollarSign,
  Calculator,
  MessageSquare,
  Target,
  Zap,
  ArrowRight,
  TrendingUp,
  FileCheck
} from "lucide-react";

export default function EstimatesQuotes() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkServicePro Estimates & Quotes",
    "applicationCategory": "Field service management software",
    "offers": {
      "@type": "Offer",
      "description": "Start free. Unlimited users on paid plans. No per-tech seat fees."
    }
  };

  return (
    <>
      <Helmet>
        <title>Field Service Estimating Software | Digital Quotes with E-Signatures</title>
        <meta 
          name="description" 
          content="Send clean professional estimates, get signatures on the spot, and instantly convert approvals into scheduled jobs. Automated follow-ups, lead tracking, and zero chasing. Unlimited users on paid plans." 
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
              Estimates & Quotes
            </span>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Send a quote. Get it signed. Book the job.
            </h1>
            
            <p className="text-white/80 text-sm leading-relaxed sm:text-base mb-4">
              Stop chasing people for approval. Send a clean, professional estimate. They sign on their phone. The job drops right onto your schedule.
            </p>

            {/* 3-value row */}
            <div className="flex flex-col gap-2 mt-4 text-[13px] text-white/80 sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="flex items-center gap-1.5">
                <Pen className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Professional estimate PDF in minutes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Customer signs with their finger</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarCheck className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Approved work goes straight on the calendar</span>
              </div>
            </div>

            {/* Badge row */}
            <div className="flex flex-wrap gap-2 text-[11px] mt-4">
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Digital signatures
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Automated follow-ups
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Lead tracking pipeline
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
                data-testid="button-see-quote-flow-hero"
              >
                <Link to="/features/estimates-quotes">See Quote Flow</Link>
              </Button>
            </div>
            <p className="text-[11px] text-white/60 mt-2">
              No credit card to start. Works with Google Calendar and Apple Calendar once approved.
            </p>
          </div>

          {/* Right column - estimate preview mock */}
          <div className="relative bg-white/5 border border-white/10 rounded-xl shadow-inner p-4 min-h-[260px] flex flex-col justify-between">
            <div>
              <p className="text-white text-sm font-semibold mb-4">
                Estimate #A192 — 'Replace leaking water heater'
              </p>
              
              {/* Simulated estimate line items */}
              <div className="space-y-2">
                <div className="bg-white/10 rounded-md h-4 w-3/4"></div>
                <div className="bg-white/10 rounded-md h-3 w-full"></div>
                <div className="bg-white/10 rounded-md h-3 w-5/6"></div>
                <div className="bg-white/10 rounded-md h-3 w-full"></div>
                <div className="bg-white/10 rounded-md h-4 w-2/3 mt-4"></div>
                <div className="bg-white/10 rounded-md h-3 w-4/5"></div>
              </div>
            </div>
            
            <p className="text-[11px] text-white/60 mt-4">
              Line items • Total • Signature box • Approve now
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: FAST, PROFESSIONAL ESTIMATES */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Spotlight Card */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Free / Starter" testId="ribbon-professional-estimates" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Professional Estimates
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Look legit, even if you're a two-person crew.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Build clean estimates in minutes. Add line items, labor, materials. Send it. The homeowner sees a clear total — not a text message with a number.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <FileText className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Quote creation & tracking</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Every quote you send is logged. No forgotten jobs.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Edit3 className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Digital signatures</div>
                  <div className="text-[13px] text-slate-500 leading-snug">They sign with a finger. You stop begging for approval.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <DollarSign className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Deposits & partial payments</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Collect money up front on bigger jobs.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-generate-first-quote"
              >
                <Link to="/signup">Generate My First Quote</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-estimates"
              >
                Start Free →
              </Link>
            </div>
          </div>

          {/* Right column - Outcome Rows */}
          <div className="space-y-6">
            {/* Outcome 1 */}
            <div className="flex gap-3 items-start">
              <Calculator className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">No more spreadsheet math.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Enter materials and labor once. We total it for you.
                </p>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="flex gap-3 items-start">
              <MessageSquare className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">No more sloppy texts.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your quotes look like a real company, not a favor.
                </p>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="flex gap-3 items-start">
              <Target className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Price with confidence.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your quotes can include profit targets, so you stop underbidding.
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

      {/* SECTION 3: FOLLOW-UP & PIPELINE */}
      <section className="bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - text content */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Stop losing work just because you forgot to follow up.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Lead comes in. You send a quote. We watch it. We remind them. We remind you. You close more without babysitting.
            </p>

            {/* Bullets */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-2 items-start">
                <TrendingUp className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Lead management & pipeline
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Starter+</span>
                  </div>
                  <div className="text-[13px] text-slate-600">See every open job opportunity in one place.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Zap className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Automated follow-ups
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Starter+ / Essential+ for SMS</span>
                  </div>
                  <div className="text-[13px] text-slate-600">Quote sent? We nudge them automatically by email/SMS so you don't have to.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <FileCheck className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    See who went cold
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Starter+</span>
                  </div>
                  <div className="text-[13px] text-slate-600">Know which jobs stalled so you can circle back — before a competitor does.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-pipeline-view"
              >
                <Link to="/features/lead-management">See Pipeline View</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-pipeline"
              >
                Start Free →
              </Link>
            </div>
          </div>

          {/* Right column - Spotlight Card "Pipeline & Follow-up" */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Starter+" testId="ribbon-pipeline-followup" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Pipeline & Follow-up
            </span>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              You don't have time to babysit leads.
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Every open quote is tracked. We auto-ping interested customers. You focus on booked work, not chasing maybes.
            </p>

            {/* Placeholder mock */}
            <div className="bg-slate-100 rounded-lg h-32 w-full mt-4 flex items-center justify-center text-[11px] text-slate-500">
              Pipeline / Hot / Waiting Signature / Won / Lost
            </div>

            {/* CTA inside card */}
            <div className="mt-4 flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold text-sm shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-quote-flow"
              >
                <Link to="/features/estimates-quotes">See Quote Flow</Link>
              </Button>
              <Link
                to="/pricing"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-compare-plans-pipeline"
              >
                Compare Plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONVERT TO SCHEDULED JOB */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Spotlight Card "From Yes → On the Calendar" */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Free → Starter" testId="ribbon-convert-to-job" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Quote → Scheduled Job
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              When they say yes, you're already booked.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Approved work instantly becomes a scheduled job. No retyping. No 'when are you free?' text thread. You just drag it to a tech.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <ArrowRight className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-slate-700 text-sm font-medium">Push approved estimate straight into dispatch</div>
              </div>
              
              <div className="flex gap-2 items-start">
                <ArrowRight className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-slate-700 text-sm font-medium">Tie that job to work orders, materials, and invoicing</div>
              </div>
              
              <div className="flex gap-2 items-start">
                <ArrowRight className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-slate-700 text-sm font-medium">See status from estimate → scheduled → completed → paid</div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-scheduling-dispatch"
              >
                <Link to="/features/scheduling-dispatch">See Scheduling & Dispatch</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-convert"
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
                <div className="text-slate-900 text-base font-semibold mb-1">No double entry.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You don't have to rebuild the job in another system.
                </p>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="flex gap-3 items-start">
              <FileText className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">No lost details.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  All notes, photos, and customer info carry forward.
                </p>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="flex gap-3 items-start">
              <MessageSquare className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Less back-and-forth.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Customer already approved scope and price. You just show up.
                </p>
              </div>
            </div>

            {/* Cross-link */}
            <Link
              to="/features/work-orders-mobile"
              className="inline-block text-[#0B5FFF] text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1 mt-4"
              data-testid="link-work-orders-mobile"
            >
              See Work Orders & Mobile →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA BAND */}
      <section className="bg-[#0E2A47] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-white font-semibold text-2xl sm:text-3xl mb-3">
            Start winning jobs faster.
          </h2>
          
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-3 mb-6">
            Send professional quotes. Get signatures instantly. Auto-follow up. Push approved work straight onto the schedule. Unlimited users on paid plans. No per-tech seat fees.
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
