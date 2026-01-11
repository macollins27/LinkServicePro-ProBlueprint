import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlanRibbon } from "@/components/PlanRibbon";
import { 
  Check, 
  ClipboardCheck, 
  Camera, 
  FileText,
  MapPin,
  MessageSquare,
  ShieldCheck,
  RefreshCw,
  ListChecks,
  CreditCard,
  Package,
  Shield,
  AlertCircle
} from "lucide-react";

export default function WorkOrdersMobile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkServicePro Work Orders & Mobile App",
    "applicationCategory": "Field service management software",
    "offers": {
      "@type": "Offer",
      "description": "Start free. Unlimited users on paid plans. No per-tech seat fees."
    }
  };

  return (
    <>
      <Helmet>
        <title>Mobile Work Orders App | Photos, Checklists, Signatures, Recurring Visits</title>
        <meta 
          name="description" 
          content="Your crew opens the job, sees where to go, what to do, what to document, and gets the signature. No clipboards. No 'text me the address.' Unlimited users on paid plans. No per-tech seat fees." 
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
              Work Orders & Mobile App
            </span>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything techs need for the job — on their phone.
            </h1>
            
            <p className="text-white/80 text-sm leading-relaxed sm:text-base mb-4">
              Your crew opens the job, sees where to go, what to do, what to document, and gets the signature. No clipboards. No 'text me the address.'
            </p>

            {/* 3-value row */}
            <div className="flex flex-col gap-2 mt-4 text-[13px] text-white/80 sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Address, notes, and photos in one place.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Customer signs right on the device.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Recurring visits auto-generate.</span>
              </div>
            </div>

            {/* Badge row */}
            <div className="flex flex-wrap gap-2 text-[11px] mt-4">
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Offline-friendly job details
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Photo + signature capture
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Unlimited users on paid plans
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                No per-tech seat fees
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
                data-testid="button-see-field-workflow-hero"
              >
                <Link to="/features/work-orders">See Field Workflow</Link>
              </Button>
            </div>
            <p className="text-[11px] text-white/60 mt-2">
              No credit card to start. Works with Google Calendar and Apple Calendar.
            </p>
          </div>

          {/* Right column - phone/job ticket mock */}
          <div className="relative bg-white/5 border border-white/10 rounded-xl shadow-inner p-4 min-h-[260px] flex flex-col justify-between">
            <div>
              <p className="text-white text-sm font-semibold mb-4">
                Work Order #4821 — 'Leak in kitchen sink'
              </p>
              
              {/* Simulated job details bars */}
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
              Address • Photos • Required steps • Signature collected
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: FIELD EXECUTION CARD */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Spotlight Card */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Free → Essential+" testId="ribbon-work-orders" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Work Orders in the Field
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Open job. Do work. Capture proof.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Everything they need is already in the job ticket: address, notes, parts, required steps, and what to photograph. They finish, grab a signature, and you're covered.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <ClipboardCheck className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Work order management</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Every job has location, scope, notes, and parts to bring.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Camera className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Photo + signature capture</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Before/after photos and on-site signoff protect you when clients argue.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <FileText className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Document storage per project</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Attach PDFs, instructions, manuals, compliance docs — all in one place.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-field-workflow"
              >
                <Link to="/features/work-orders">See Field Workflow</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-field"
              >
                Start Free →
              </Link>
            </div>
          </div>

          {/* Right column - Outcome Rows */}
          <div className="space-y-6">
            {/* Outcome 1 */}
            <div className="flex gap-3 items-start">
              <MapPin className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">No more 'text me the address.'</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The address and notes are already in the job ticket on their phone.
                </p>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="flex gap-3 items-start">
              <MessageSquare className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Stop getting called for next steps.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Checklist steps tell them exactly what to do and what proof to collect.
                </p>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="flex gap-3 items-start">
              <ShieldCheck className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Less liability on you.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You have timestamped photos and signatures to prove what was done.
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

      {/* SECTION 3: MAINTENANCE & RECURRING VISITS */}
      <section className="bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - text content */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Recurring work that doesn't slip through the cracks.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Service agreements, seasonal checkups, membership plans — they generate automatically. You don't have to remember who's due.
            </p>

            {/* Bullets */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-2 items-start">
                <RefreshCw className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Recurring jobs and maintenance plans
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Essential+</span>
                  </div>
                  <div className="text-[13px] text-slate-600">Never forget contract visits.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <ListChecks className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Auto-generate checklists
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Essential+</span>
                  </div>
                  <div className="text-[13px] text-slate-600">Techs see the exact steps for each visit.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <CreditCard className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Subscription and recurring billing
                    <span className="ml-2 bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px]">Premium</span>
                  </div>
                  <div className="text-[13px] text-slate-600">Bill monthly or per visit without chasing payment.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-maintenance"
              >
                <Link to="/features/recurring-maintenance">See Maintenance Plans</Link>
              </Button>
              <Link
                to="/pricing"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-compare-plans-maintenance"
              >
                Compare Plans →
              </Link>
            </div>
          </div>

          {/* Right column - Spotlight Card "Maintenance Plans" */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Essential+" testId="ribbon-maintenance-plans" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Maintenance Plans
            </span>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Lock in recurring revenue.
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Your recurring service visits and billing run on rails. Stop trying to manage 60 renewal dates in your head.
            </p>

            {/* Placeholder mock */}
            <div className="bg-slate-100 rounded-lg h-32 w-full mt-4 flex items-center justify-center text-[11px] text-slate-500">
              Plan Schedule / Next Visits / Billing Status
            </div>

            {/* CTA inside card */}
            <div className="mt-4">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold text-sm shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-start-free-maintenance-card"
              >
                <Link to="/signup">Start Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ASSET / WARRANTY HISTORY */}
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
              Track each unit, its service history, its warranty status, and who owned it. When a customer says 'you touched this last time,' you'll know the truth.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <Package className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-slate-700 text-sm font-medium">Asset inspection & tracking</div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Shield className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-slate-700 text-sm font-medium">Warranty tracking</div>
              </div>
              
              <div className="flex gap-2 items-start">
                <AlertCircle className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-slate-700 text-sm font-medium">Ownership transfer history tied to property address</div>
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

          {/* Right column - Dark Trust Block */}
          <div className="bg-slate-900 text-white rounded-xl p-5 ring-1 ring-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Stop doing free 'warranty' work that isn't yours.
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Now you can prove what was installed, by who, and when. That ends arguments, unpaid callbacks, and blame-shifting.
              </p>
            </div>

            {/* CTA row */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-profit-tracking"
              >
                <Link to="/features/job-costing-reporting">See Profit Tracking</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-asset"
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
            Your crew can start using this today.
          </h2>
          
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-3 mb-6">
            Unlimited users on paid plans. No per-tech seat fees. Works with Google Calendar and Apple Calendar. Start free and see it on your own phone.
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
