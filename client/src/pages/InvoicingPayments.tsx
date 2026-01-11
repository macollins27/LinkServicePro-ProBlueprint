import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlanRibbon } from "@/components/PlanRibbon";
import { 
  CreditCard,
  DollarSign,
  FileText,
  Send,
  BarChart,
  TrendingUp,
  Zap,
  User,
  Star,
  CheckCircle,
  Receipt,
  Clock,
  ShoppingCart
} from "lucide-react";

export default function InvoicingPayments() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkServicePro Invoicing & Payments",
    "applicationCategory": "Field service management software",
    "offers": {
      "@type": "Offer",
      "description": "Start free. Unlimited users on paid plans. No per-tech seat fees."
    }
  };

  return (
    <>
      <Helmet>
        <title>Field Service Invoicing & Payments | Get Paid On-Site or Same Day</title>
        <meta 
          name="description" 
          content="Send invoices from the job site, collect card payments in the field, batch bill every open job, and see what you actually made. Unlimited users on paid plans. No per-tech seat fees." 
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
              Invoicing & Payments
            </span>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Invoice on the spot. Get paid in hours, not days.
            </h1>
            
            <p className="text-white/80 text-sm leading-relaxed sm:text-base mb-4">
              Send invoices from the job site or in bulk. Take card payment right there. Track what you actually made — after labor and materials — without chasing anybody.
            </p>

            {/* Value row */}
            <div className="flex flex-col gap-2 mt-4 text-[13px] text-white/80 sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Batch every unpaid job at once</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Tap to collect card on-site</span>
              </div>
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Partial deposits and progress billing</span>
              </div>
            </div>

            {/* Badge row */}
            <div className="flex flex-wrap gap-2 text-[11px] mt-4">
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Batch invoicing
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Card payments in the field
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Deposits & partials
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
                data-testid="button-see-billing-flow-hero"
              >
                <Link to="/features/invoicing-payments">See Billing Flow</Link>
              </Button>
            </div>
            <p className="text-[11px] text-white/60 mt-2">
              No credit card to start. Works with Google Calendar and Apple Calendar for scheduled work.
            </p>
          </div>

          {/* Right column - invoice mock */}
          <div className="relative bg-white/5 border border-white/10 rounded-xl shadow-inner p-4 min-h-[260px] flex flex-col justify-between">
            <div>
              <p className="text-white text-sm font-semibold mb-4">
                Invoice #7421 — 'Drain line jetting'
              </p>
              
              {/* Simulated invoice line items */}
              <div className="space-y-2">
                <div className="bg-white/10 rounded-md h-4 w-3/4"></div>
                <div className="bg-white/10 rounded-md h-3 w-full"></div>
                <div className="bg-white/10 rounded-md h-3 w-5/6"></div>
                <div className="bg-white/10 rounded-md h-4 w-2/3 mt-4"></div>
                <div className="bg-white/10 rounded-md h-5 w-1/2 mt-3"></div>
              </div>
            </div>
            
            <p className="text-[11px] text-white/60 mt-4">
              Amount due • Pay link • Signature / proof attached
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: GET PAID FAST */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Spotlight Card */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Free → Premium" testId="ribbon-get-paid-fast" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Get Paid Fast
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Send an invoice and take payment before you leave the driveway.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Your tech finishes the job, shows the invoice, and collects payment right there. If the job's not paid on-site, you can batch-send everything outstanding at the end of the day.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <CreditCard className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Payment in the field</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Swipe or tap card. Get money now instead of 'we'll mail a check.'</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Send className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Batch invoicing</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Send every unpaid job in one click instead of doing 18 separate emails.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <DollarSign className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Deposits & partials</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Take a down payment on larger jobs, then bill progress.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-billing-flow"
              >
                <Link to="/features/invoicing-payments">See Billing Flow</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-billing"
              >
                Start Free →
              </Link>
            </div>
          </div>

          {/* Right column - Outcome Rows */}
          <div className="space-y-6">
            {/* Outcome 1 */}
            <div className="flex gap-3 items-start">
              <Clock className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Less chasing.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  If they don't pay on-site, they instantly get a 'Pay Now' link.
                </p>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="flex gap-3 items-start">
              <FileText className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Less confusion.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Invoice shows exactly what was done with photos attached.
                </p>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="flex gap-3 items-start">
              <CheckCircle className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Less admin.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You're not rebuilding invoices in another system at 9PM.
                </p>
              </div>
            </div>

            {/* Cross-link */}
            <Link
              to="/features/estimates-quotes"
              className="inline-block text-[#0B5FFF] text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1 mt-4"
              data-testid="link-estimates-quotes"
            >
              See Estimates & Quotes →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: CUSTOMER PORTAL & LESS CHASING */}
      <section className="bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - text content */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Your customer always knows what they owe.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              No more 'Can you resend that invoice?' texts. They get a clean portal with their quotes, invoices, payments, and history — and a pay button.
            </p>

            {/* Bullets */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-2 items-start">
                <User className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Customer portal
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Starter+</span>
                  </div>
                  <div className="text-[13px] text-slate-600">They can view past work, download invoices, and pay outstanding balance.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Zap className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Automatic 'Your invoice is ready' messages
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Starter+ / Essential+ for SMS</span>
                  </div>
                  <div className="text-[13px] text-slate-600">No manual chasing. The system does the annoying part.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Star className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Review requests & reputation
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Essential+</span>
                  </div>
                  <div className="text-[13px] text-slate-600">We nudge happy customers to leave public reviews so you keep winning work.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-show-portal"
              >
                <Link to="/features/customer-portal">Show Me the Portal</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-portal"
              >
                Start Free →
              </Link>
            </div>
          </div>

          {/* Right column - Spotlight Card "Customer Portal" */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Starter+" testId="ribbon-customer-portal" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Customer Portal
            </span>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              They pay without calling you.
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Your customer clicks the link, sees what they owe, taps pay. You're out of the collections business.
            </p>

            {/* Placeholder mock */}
            <div className="bg-slate-100 rounded-lg h-32 w-full mt-4 flex items-center justify-center text-[11px] text-slate-500">
              Customer Portal / Invoice / Pay Now
            </div>

            {/* CTA inside card */}
            <div className="mt-4 flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold text-sm shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-billing-flow-portal"
              >
                <Link to="/features/invoicing-payments">See Billing Flow</Link>
              </Button>
              <Link
                to="/pricing"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-compare-plans-portal"
              >
                Compare Plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: KNOW YOUR PROFIT */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Spotlight Card "Profit & Cost Tracking" (DARK) */}
          <div className="relative bg-slate-800 ring-1 ring-slate-700 rounded-xl shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm text-white overflow-visible">
            <PlanRibbon plan="Premium" testId="ribbon-profit-tracking" />
            
            <span className="inline-block text-[11px] font-semibold text-white bg-white/10 border border-white/20 rounded-full px-2 py-[3px] mb-3">
              Profit & Cost Tracking
            </span>
            
            <h2 className="text-xl font-semibold text-white mb-3">
              See profit per job, per tech, per day.
            </h2>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Stop guessing if the job made money. Track labor cost, materials cost, and actual margin. Know which work is worth taking — and which you should stop doing.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <BarChart className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-white text-sm font-medium">Job costing & profitability reports</div>
                  <div className="text-[13px] text-white/60 leading-snug">See margin on every single visit.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <TrendingUp className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-white text-sm font-medium">Payroll & wage tracking</div>
                  <div className="text-[13px] text-white/60 leading-snug">Tie labor cost to each job so you know who's productive.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Receipt className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-white text-sm font-medium">Expense & materials tracking</div>
                  <div className="text-[13px] text-white/60 leading-snug">Track parts, markups, and what you actually spent.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <button
                className="border border-white/30 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-profit-dashboard"
              >
                See Profit Dashboard
              </button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-profit"
              >
                Start Free →
              </Link>
            </div>
          </div>

          {/* Right column - text content */}
          <div>
            <h2 className="text-white font-semibold text-lg sm:text-xl mb-4">
              Stop doing work that isn't worth it.
            </h2>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              You'll see which jobs are killing your profit — long drive time, underpriced labor, parts that ate your margin — so you can fix it or stop offering it.
            </p>

            {/* Short list */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-center">
                <ShoppingCart className="text-[#0B5FFF] w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/80 text-sm">Purchase orders & vendor management</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle className="text-[#0B5FFF] w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/80 text-sm">Vendor insurance status tracking</span>
              </div>
              <div className="flex gap-2 items-center">
                <FileText className="text-[#0B5FFF] w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/80 text-sm">Full history tied to the property address</span>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-job-costing"
              >
                <Link to="/features/job-costing-reporting">See Job Costing & Reporting</Link>
              </Button>
              <Link
                to="/features/scheduling-dispatch"
                className="text-[#0B5FFF] text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-scheduling-dispatch"
              >
                View Scheduling & Dispatch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA BAND */}
      <section className="bg-[#0E2A47] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-white font-semibold text-2xl sm:text-3xl mb-3">
            Get paid without chasing.
          </h2>
          
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-3 mb-6">
            Batch invoices. Take card in the field. Show customers a portal instead of blowing up their phone. Unlimited users on paid plans. No per-tech seat fees.
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
