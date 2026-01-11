import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlanRibbon } from "@/components/PlanRibbon";
import { 
  ClipboardCheck,
  Users,
  Shield,
  MessageSquare,
  MapPin,
  FileText,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  Lock,
  Eye,
  Zap
} from "lucide-react";

export default function TeamManagement() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkServicePro Team Management & Operations Control",
    "applicationCategory": "Field service management software",
    "offers": {
      "@type": "Offer",
      "description": "Start free. Unlimited users on paid plans. No per-tech seat fees."
    }
  };

  return (
    <>
      <Helmet>
        <title>Team Management & Operations Control | Assign, Track, and Hold Techs Accountable</title>
        <meta 
          name="description" 
          content="Assign work, set expectations, track task completion, and control permissions without babysitting. Dispatch board, messaging, wage tracking, and job history — all in one system." 
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
              Team Management & Operations Control
            </span>
            
            <h1 className="text-white font-semibold text-3xl sm:text-4xl leading-tight mb-4">
              Your team is accountable — without you standing over them.
            </h1>
            
            <p className="text-white/80 text-sm leading-relaxed sm:text-base mb-4">
              Assign work. Give instructions. See what got done. Track performance and profitability by tech. All with clear roles and permissions so the wrong people can't touch the wrong things.
            </p>

            {/* Value row */}
            <div className="flex flex-col gap-2 mt-4 text-[13px] text-white/80 sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Assign work in seconds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>See what was actually done</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#0B5FFF] flex-shrink-0" aria-hidden="true" />
                <span>Protect sensitive data with permissions</span>
              </div>
            </div>

            {/* Badge row */}
            <div className="flex flex-wrap gap-2 text-[11px] mt-4">
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Unlimited users on paid plans
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Manager / tech roles
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Task assignments
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Audit trail
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
                data-testid="button-see-team-workflow-hero"
              >
                <Link to="/features/team-management">See Team Workflow</Link>
              </Button>
            </div>
            <p className="text-[11px] text-white/60 mt-2">
              Unlimited users on paid plans. No per-tech seat fees.
            </p>
          </div>

          {/* Right column - crew status mock */}
          <div className="relative bg-white/5 border border-white/10 rounded-xl shadow-inner p-4 min-h-[260px] flex flex-col justify-between">
            <div>
              <p className="text-white text-sm font-semibold mb-4">
                Today's Crew Status
              </p>
              
              {/* Simulated crew status rows */}
              <div className="space-y-2">
                <div className="bg-white/10 rounded-md h-4 w-3/4"></div>
                <div className="bg-white/10 rounded-md h-4 w-full"></div>
                <div className="bg-white/10 rounded-md h-4 w-5/6"></div>
                <div className="bg-white/10 rounded-md h-4 w-2/3 mt-4"></div>
              </div>
            </div>
            
            <p className="text-[11px] text-white/60 mt-4">
              Open jobs • overdue tasks • who's free • who's behind
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: ASSIGN & HOLD ACCOUNTABLE */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Spotlight Card */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Starter+" testId="ribbon-assignments-accountability" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Assignments & Accountability
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Tell them exactly what to do today.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Managers assign tasks. Techs get clear instructions. You can see what's done, what's late, and who's holding things up — without calling.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <ClipboardCheck className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Task management system
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px] ml-2">Starter+</span>
                  </div>
                  <div className="text-[13px] text-slate-500 leading-snug">Every task is tied to a job, a property, or a customer — not lost in a group chat.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Users className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Manager-to-employee task assignments
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px] ml-2">Starter+</span>
                  </div>
                  <div className="text-[13px] text-slate-500 leading-snug">Send 'Do this today' instructions and track if it's actually done.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <MessageSquare className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Internal employee messaging
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px] ml-2">Starter+</span>
                  </div>
                  <div className="text-[13px] text-slate-500 leading-snug">Your crew can ask each other questions without blowing up your phone.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-team-workflow"
              >
                <Link to="/features/team-management">See Team Workflow</Link>
              </Button>
              <Link
                to="/signup"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-assignments"
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
                <div className="text-slate-900 text-base font-semibold mb-1">Less babysitting.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You don't have to call every tech to make sure they're doing the thing you told them to do.
                </p>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="flex gap-3 items-start">
              <Target className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">Nothing 'falls through the cracks.'</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Overdue tasks are visible on the dashboard, not a surprise at 7PM.
                </p>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="flex gap-3 items-start">
              <ClipboardCheck className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-slate-900 text-base font-semibold mb-1">People know what 'done' means.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tasks can include notes, photos, or checklists so there's no guessing.
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

      {/* SECTION 3: DISPATCH & FIELD EXECUTION */}
      <section className="bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - text content */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Everyone knows where to be and what to do.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              The dispatch board shows who's booked, who's free, and what's next. Techs see the work order on their phone with address, steps, photos to take, and signature capture. No 'text me the address.'
            </p>

            {/* Bullets */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-2 items-start">
                <MapPin className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Dispatch board for technicians
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px] ml-2">Starter+</span>
                  </div>
                  <div className="text-[13px] text-slate-500 leading-snug">Live view of today's jobs and who's assigned.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <FileText className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Project tracking with multiple work orders
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px] ml-2">Premium</span>
                  </div>
                  <div className="text-[13px] text-slate-500 leading-snug">Bigger jobs broken into clear steps and visits.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <CheckCircle className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">
                    Field work orders with photos & signatures
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-medium rounded-full px-1.5 py-[1px] ml-2">Free → Essential+</span>
                  </div>
                  <div className="text-[13px] text-slate-500 leading-snug">Proof of work lives in the system, not on someone's phone.</div>
                </div>
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
                to="/features/work-orders-mobile"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-work-orders-mobile-dispatch"
              >
                See Work Orders & Mobile →
              </Link>
            </div>
          </div>

          {/* Right column - Spotlight Card "Field Execution" */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Starter+ / Premium" testId="ribbon-field-execution" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Field Execution
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Fewer 'what next?' phone calls.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Tech opens the job on their phone, sees instructions, takes required photos, gets signature. You see status update automatically.
            </p>

            {/* Placeholder mock */}
            <div className="bg-slate-100 rounded-lg h-32 w-full mt-4 flex items-center justify-center text-[11px] text-slate-500">
              Job Ticket / Steps / Photos / Signature Collected
            </div>

            {/* CTA inside card */}
            <div className="mt-4 flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold text-sm shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-work-orders-mobile-card"
              >
                <Link to="/features/work-orders-mobile">See Work Orders & Mobile</Link>
              </Button>
              <Link
                to="/pricing"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-compare-plans-field"
              >
                Compare Plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PERFORMANCE & CONTROL */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Spotlight Card "Control & Visibility" */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Premium / Platinum" testId="ribbon-control-visibility" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Control & Visibility
            </span>
            
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              See who's profitable — and protect what matters.
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              You'll know which techs are making money, who's generating callbacks, and who's ignoring process. You can also lock down access so nobody edits pricing, deletes evidence, or touches things they shouldn't.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-start">
                <BarChart3 className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Payroll & wage tracking</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Tie labor cost and time-on-site to each tech.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Lock className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Advanced role-based permissions</div>
                  <div className="text-[13px] text-slate-500 leading-snug">Managers manage. Techs can't change pricing or delete notes.</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-start">
                <Eye className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-slate-700 text-sm font-medium">Audit logs, SLAs, escalations</div>
                  <div className="text-[13px] text-slate-500 leading-snug">See who touched what, enforce deadlines, and escalate priority tickets.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-profit-reporting"
              >
                <Link to="/features/job-costing-reporting">See Profit Reporting</Link>
              </Button>
              <Link
                to="/pricing"
                className="text-[#0B5FFF] text-sm font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-compare-plans-control"
              >
                Compare Plans →
              </Link>
            </div>
          </div>

          {/* Right column - Dark trust block */}
          <div className="bg-slate-900 text-white rounded-xl p-5 ring-1 ring-slate-800 flex flex-col justify-between">
            <div>
              <h2 className="text-white font-semibold text-lg mb-4">
                You stop being the bottleneck.
              </h2>
              
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Your leads stop calling you for every detail. Your techs stop calling you for what to do next. And you stop giving everyone admin access just so they can function.
              </p>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-start-free-bottleneck"
              >
                <Link to="/signup">Start Free</Link>
              </Button>
              <Link
                to="/pricing"
                className="text-[#0B5FFF] text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-view-pricing-bottleneck"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA BAND */}
      <section className="bg-[#0E2A47] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-white font-semibold text-2xl sm:text-3xl mb-3">
            Give your team clarity. Keep your control.
          </h2>
          
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-3 mb-6">
            Assign work, set expectations, collect proof, track performance, and lock down what matters. Unlimited users on paid plans. No per-tech seat fees.
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
