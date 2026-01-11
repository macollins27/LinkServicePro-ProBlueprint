import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Users,
  Calendar,
  FileText,
  CreditCard,
  MessageSquare,
  CheckCircle,
  DollarSign
} from "lucide-react";

export default function Pricing() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkServicePro",
    "applicationCategory": "Field service management software",
    "offers": [
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free plan - 1 user, 30 jobs/mo"
      },
      {
        "@type": "Offer",
        "price": "29",
        "priceCurrency": "USD",
        "description": "Starter plan - Unlimited users, 50 jobs/mo"
      },
      {
        "@type": "Offer",
        "price": "79",
        "priceCurrency": "USD",
        "description": "Essential plan - Unlimited users, 150 jobs/mo"
      },
      {
        "@type": "Offer",
        "price": "179",
        "priceCurrency": "USD",
        "description": "Premium plan - Unlimited users, 500 jobs/mo"
      },
      {
        "@type": "Offer",
        "price": "399",
        "priceCurrency": "USD",
        "description": "Platinum plan - Unlimited users, unlimited jobs"
      }
    ],
    "description": "Unlimited users on paid plans. Job-based pricing. 20% annual discount available."
  };

  return (
    <>
      <Helmet>
        <title>Pricing | LinkServicePro Field Service Software Plans</title>
        <meta 
          name="description" 
          content="Start free. No per-tech seat fees. Every paid plan includes unlimited users. Transparent job caps, predictable overages, and 20% off annual billing." 
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* SECTION 1: HERO STRIP */}
      <section className="bg-[#0E2A47] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <span className="inline-block text-[11px] font-semibold text-white/80 bg-white/10 border border-white/20 rounded-full px-2 py-[3px] mb-4">
            Pricing
          </span>
          
          <h1 className="text-white font-semibold text-3xl sm:text-4xl leading-tight mb-4">
            Simple pricing. No per-tech seat fees. Ever.
          </h1>
          
          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            Every paid plan includes unlimited users. You only pay for how many jobs you run. Add techs, office staff, estimators, subcontractors — no surprise licenses.
          </p>

          {/* Value row */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left sm:text-center text-[13px] text-white/80">
            <div className="flex items-center gap-1.5 sm:justify-center">
              <DollarSign className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
              <span>20% off annual billing</span>
            </div>
            <div className="flex items-center gap-1.5 sm:justify-center">
              <Users className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
              <span>Unlimited users on paid plans</span>
            </div>
            <div className="flex items-center gap-1.5 sm:justify-center">
              <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
              <span>Transparent job caps + predictable overage</span>
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-pricing-start-free-hero"
            >
              <Link to="/signup">Start Free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-pricing-talk-to-sales-hero"
            >
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
          
          <p className="text-[11px] leading-snug mt-4 text-white/60">
            By starting, you agree to our{" "}
            <Link
              to="/legal/terms"
              className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              aria-label="Read our Terms of Service"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/legal/privacy"
              className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              aria-label="Read our Privacy Policy"
            >
              Privacy Policy
            </Link>
            , and you consent to receive onboarding and service-related messages (SMS/email). Standard rates may apply.
          </p>
        </div>
      </section>

      {/* SECTION 2: PRICING TABLE */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Toggle/Annual savings note */}
          <div className="text-center mb-8">
            <span className="text-sm text-slate-600">Monthly • Annual</span>
            <span className="bg-[#0B5FFF]/10 text-[#0B5FFF] border border-[#0B5FFF]/20 text-[11px] font-semibold rounded-full px-2 py-[3px] ml-2">
              save 20%
            </span>
          </div>

          {/* Pricing cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {/* FREE PLAN */}
            <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-5 flex flex-col">
              <span className="bg-slate-100 text-slate-700 text-[10px] font-semibold rounded-full px-2 py-[2px] inline-block w-fit mb-3">
                Solo
              </span>
              <h2 className="text-slate-900 font-semibold text-2xl mb-1">Free</h2>
              <p className="text-slate-900 font-semibold text-xl mb-1">$0/mo</p>
              <p className="text-[12px] text-slate-500 mb-4">
                1 user • 30 jobs/mo
              </p>
              <hr className="border-slate-200 mb-4" />
              <ul className="space-y-2 mb-6 flex-1 text-[13px] text-slate-600 leading-snug">
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Drag-and-drop scheduling</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Google & Apple Calendar sync</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Quotes + e-sign</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Single invoicing & card payments</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>100 outbound messages/mo (email/SMS mix)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>0.5 GB document storage</span>
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-pricing-start-free-plan"
              >
                <Link to="/signup">Start Free</Link>
              </Button>
              <p className="text-[11px] text-slate-500 mt-2 text-center">
                No credit card required
              </p>
            </div>

            {/* STARTER PLAN */}
            <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-5 flex flex-col">
              <span className="bg-[#0B5FFF]/10 text-[#0B5FFF] text-[10px] font-semibold rounded-full px-2 py-[2px] inline-block w-fit mb-3">
                Small Team
              </span>
              <h2 className="text-slate-900 font-semibold text-2xl mb-1">Starter</h2>
              <p className="text-slate-900 font-semibold text-xl mb-1">$29/mo</p>
              <p className="text-[12px] text-slate-500 mb-1">
                Unlimited users • 50 jobs/mo
              </p>
              <p className="text-[12px] text-slate-500 mb-4">
                $23/mo billed annually (20% off)
              </p>
              <hr className="border-slate-200 mb-4" />
              <ul className="space-y-2 mb-4 flex-1 text-[13px] text-slate-600 leading-snug">
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Dispatch board for technicians</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Multi-user with manager roles</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Task assignments & internal messaging</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Customer portal (quotes, invoices, payment history)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>5 GB storage</span>
                </li>
              </ul>
              <p className="text-[12px] text-slate-500 mt-3 pt-3 border-t border-slate-200">
                $0.60/job over 50
              </p>
              <Button
                asChild
                className="w-full mt-3 bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-pricing-choose-starter"
              >
                <Link to="/signup">Choose Starter</Link>
              </Button>
            </div>

            {/* ESSENTIAL PLAN (Most Popular) */}
            <div className="relative bg-white ring-2 ring-[#0B5FFF] rounded-xl shadow-md p-5 flex flex-col overflow-visible">
              <span className="absolute -top-2 -right-2 z-20 bg-[#0B5FFF] text-white text-[10px] font-semibold rounded-md px-2 py-1 rotate-[8deg]">
                Most Popular
              </span>
              <h2 className="text-slate-900 font-semibold text-2xl mb-1 mt-2">Essential</h2>
              <p className="text-slate-900 font-semibold text-xl mb-1">$79/mo</p>
              <p className="text-[12px] text-slate-500 mb-1">
                Unlimited users • 150 jobs/mo
              </p>
              <p className="text-[12px] text-slate-500 mb-4">
                $63/mo billed annually (20% off)
              </p>
              <hr className="border-slate-200 mb-4" />
              <ul className="space-y-2 mb-4 flex-1 text-[13px] text-slate-600 leading-snug">
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Recurring jobs & maintenance plans</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Automated follow-ups (SMS/email)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Lead pipeline & reputation / review requests</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Capacity planning & route optimization</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Real-time GPS (2 vehicles)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>20 GB storage</span>
                </li>
              </ul>
              <p className="text-[12px] text-slate-500 mt-3 pt-3 border-t border-slate-200">
                $0.45/job over 150
              </p>
              <Button
                asChild
                className="w-full mt-3 bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-pricing-choose-essential"
              >
                <Link to="/signup">Choose Essential</Link>
              </Button>
            </div>

            {/* PREMIUM PLAN (Best Value at Scale) */}
            <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-5 flex flex-col overflow-visible">
              <span className="absolute -top-2 -right-2 z-20 bg-slate-900 text-white text-[10px] font-semibold rounded-md px-2 py-1 rotate-[8deg]">
                Best Value at Scale
              </span>
              <h2 className="text-slate-900 font-semibold text-2xl mb-1 mt-2">Premium</h2>
              <p className="text-slate-900 font-semibold text-xl mb-1">$179/mo</p>
              <p className="text-[12px] text-slate-500 mb-1">
                Unlimited users • 500 jobs/mo
              </p>
              <p className="text-[12px] text-slate-500 mb-4">
                $143/mo billed annually (20% off)
              </p>
              <hr className="border-slate-200 mb-4" />
              <ul className="space-y-2 mb-4 flex-1 text-[13px] text-slate-600 leading-snug">
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Project tracking w/ multiple work orders</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Asset + warranty tracking (property-tied)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Purchase orders & vendor management</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Payroll / wage tracking</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Profitability by tech/team</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Real-time GPS (10 vehicles)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>200 GB storage</span>
                </li>
              </ul>
              <p className="text-[12px] text-slate-500 mt-3 pt-3 border-t border-slate-200">
                $0.30/job over 500
              </p>
              <Button
                asChild
                className="w-full mt-3 bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-pricing-choose-premium"
              >
                <Link to="/signup">Choose Premium</Link>
              </Button>
            </div>

            {/* PLATINUM PLAN */}
            <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-5 flex flex-col">
              <span className="bg-slate-900 text-white text-[10px] font-semibold rounded-full px-2 py-[2px] inline-block w-fit mb-3">
                Full Operation
              </span>
              <h2 className="text-slate-900 font-semibold text-2xl mb-1">Platinum</h2>
              <p className="text-slate-900 font-semibold text-xl mb-1">$399/mo</p>
              <p className="text-[12px] text-slate-500 mb-1">
                Unlimited users • Unlimited jobs
              </p>
              <p className="text-[12px] text-slate-500 mb-4">
                $319/mo billed annually (20% off)
              </p>
              <hr className="border-slate-200 mb-4" />
              <ul className="space-y-2 mb-6 flex-1 text-[13px] text-slate-600 leading-snug">
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Unlimited GPS vehicles</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>AI routing suggestions</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>AI quote assistant</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Advanced role-based permissions & audit logs</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>White-label customer portal & custom domains</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>SLA policies, escalations, priority queues</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Dedicated onboarding & support</span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-pricing-talk-to-sales-platinum"
              >
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>

          {/* Pricing disclaimer */}
          <p className="text-[11px] text-slate-500 text-center max-w-xl mx-auto leading-relaxed">
            All prices USD. Does not include taxes (est. 4%) or Stripe payment processing fees. SMS usage on paid plans is pass-through. Annual billing reflects ~20% discount compared to monthly rate.
          </p>
        </div>
      </section>

      {/* SECTION 3: WHAT'S INCLUDED */}
      <section className="bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Every paid plan includes
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Users className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-900 font-semibold text-base">Unlimited users</div>
                  <p className="text-slate-600 text-sm leading-relaxed">Stop paying per tech. Add the whole team.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Calendar className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-900 font-semibold text-base">Dispatch board & calendar integration</div>
                  <p className="text-slate-600 text-sm leading-relaxed">See who's booked, drag jobs onto available techs.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <FileText className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-900 font-semibold text-base">Digital quotes with e-sign</div>
                  <p className="text-slate-600 text-sm leading-relaxed">Send a price, get approval on their phone.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CreditCard className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-900 font-semibold text-base">Invoicing & card payments</div>
                  <p className="text-slate-600 text-sm leading-relaxed">Collect payment in the field or send a 'Pay Now' link.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <MessageSquare className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-900 font-semibold text-base">Customer messaging & reminders</div>
                  <p className="text-slate-600 text-sm leading-relaxed">Automatic 'We're on the way' texts and job reminders.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Why job caps?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Job volume is how we scale cost. You're not punished for growing your team. Add techs, dispatchers, sales reps — we don't charge per seat.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-pricing-start-free-included"
              >
                <Link to="/signup">Start Free</Link>
              </Button>
              <Link
                to="/features"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-pricing-features"
              >
                See Full Feature List →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ / BILLING CLARITY */}
      <section className="bg-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-6">
            {/* Q1 */}
            <div>
              <h2 className="text-slate-900 font-semibold text-base mb-2">
                Do I pay per user?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                No. Every paid plan includes unlimited users. You can add all your techs, office staff, part-timers, estimators, and subcontractors without getting nickeled and dimed for seats.
              </p>
            </div>

            {/* Q2 */}
            <div>
              <h2 className="text-slate-900 font-semibold text-base mb-2">
                What happens if I go over my job limit?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We don't shut you off. We just bill a predictable overage per job. Starter: $0.60/job, Essential: $0.45/job, Premium: $0.30/job. Platinum has no limit.
              </p>
            </div>

            {/* Q3 */}
            <div>
              <h2 className="text-slate-900 font-semibold text-base mb-2">
                What counts as a job?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Any dispatchable work order you schedule and track in the system.
              </p>
            </div>

            {/* Q4 */}
            <div>
              <h2 className="text-slate-900 font-semibold text-base mb-2">
                How does billing work annually vs monthly?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Annual is about 20% cheaper overall. We just bill you upfront for the year at the discounted monthly equivalent.
              </p>
            </div>

            {/* Q5 */}
            <div>
              <h2 className="text-slate-900 font-semibold text-base mb-2">
                What about taxes and processing fees?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Plans are subject to ~4% tax/VAT where required. Card transactions are processed through Stripe at standard rates, passed through directly.
              </p>
            </div>

            {/* Q6 */}
            <div>
              <h2 className="text-slate-900 font-semibold text-base mb-2">
                Can I export my data?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. You keep ownership of your customer, invoice, and job history data.
              </p>
            </div>
          </div>

          {/* Legal links */}
          <div className="text-[13px] text-slate-500 flex flex-col sm:flex-row gap-3 mt-8 justify-center">
            <Link 
              to="/legal/terms" 
              className="hover:text-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
              data-testid="link-pricing-terms"
            >
              Terms of Service
            </Link>
            <Link 
              to="/legal/privacy" 
              className="hover:text-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
              data-testid="link-pricing-privacy"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/legal/sla" 
              className="hover:text-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
              data-testid="link-pricing-sla"
            >
              Service Level Agreement
            </Link>
            <Link 
              to="/legal/refund" 
              className="hover:text-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
              data-testid="link-pricing-refund"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA BAND */}
      <section className="bg-[#0E2A47] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-white font-semibold text-2xl sm:text-3xl mb-3">
            Stop renting software seats. Start running the whole business.
          </h2>
          
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-3 mb-6">
            Unlimited users on paid plans. Transparent job caps. Real field control. Start free and see how fast you get organized.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-pricing-start-free-final"
            >
              <Link to="/signup">Start Free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-pricing-talk-to-sales-final"
            >
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
          
          <p className="text-[11px] leading-snug mt-4 text-white/60">
            By starting, you agree to our{" "}
            <Link
              to="/legal/terms"
              className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              aria-label="Read our Terms of Service"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/legal/privacy"
              className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              aria-label="Read our Privacy Policy"
            >
              Privacy Policy
            </Link>
            , and you consent to receive onboarding and service-related messages (SMS/email). Standard rates may apply.
          </p>
        </div>
      </section>
    </>
  );
}
