import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { PlanRibbon } from "@/components/PlanRibbon";
import {
  TrendingUp,
  CheckCircle,
  ClipboardList,
  LayoutDashboard,
  MapPin,
  Navigation,
  Route as RouteIcon,
  Target,
  Calendar,
  Zap,
  Clock
} from "lucide-react";

export default function SchedulingDispatch() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkServicePro Scheduling & Dispatch",
    "applicationCategory": "Field service management software",
    "offers": {
      "@type": "Offer",
      "description": "Start free. Unlimited users on paid plans. No per-tech seat fees."
    }
  };

  return (
    <>
      <Helmet>
        <title>Scheduling & Dispatch Software | Drag-and-Drop, Route Optimization, GPS Tracking</title>
        <meta
          name="description"
          content="Assign jobs in seconds, balance routes, sync to Google and Apple Calendar, and see every tech live on the map. Unlimited users on paid plans. No per-tech seat fees."
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="bg-[#0E2A47] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Text */}
          <div>
            <span className="inline-block text-[11px] font-semibold text-white/80 bg-white/10 border border-white/20 rounded-full px-2 py-[3px] mb-4">
              Scheduling & Dispatch
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Drag-and-drop scheduling and live dispatch — without the chaos.
            </h1>
            
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Assign jobs in seconds, balance workloads, sync every tech's calendar, and cut wasted drive time. Unlimited users on paid plans. No per-tech seat fees.
            </p>

            {/* KPI row */}
            <div className="flex flex-wrap gap-3 mt-4 text-[13px] text-white/80 mb-4">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#0B5FFF]" aria-hidden="true" />
                <span>35% faster scheduling</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#0B5FFF]" aria-hidden="true" />
                <span>2× quicker approvals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#0B5FFF]" aria-hidden="true" />
                <span>&lt;24 hr average time-to-pay</span>
              </div>
            </div>

            {/* Badge row */}
            <div className="flex flex-wrap gap-2 text-[11px] mt-4 mb-8">
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Works with Google Calendar
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                Works with Apple Calendar
              </span>
              <span className="bg-white/10 border border-white/20 text-white font-medium rounded-full px-3 py-[3px]">
                No per-tech seat fees
              </span>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              <Button
                asChild
                size="lg"
                className="bg-[#0B5FFF] text-white font-semibold hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-start-free-hero"
              >
                <Link to="/signup">Start Free</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-view-demo-hero"
              >
                <Link to="/features/dispatch-board-live-map">View Live Dispatch Demo</Link>
              </Button>
            </div>
            <p className="text-[11px] text-white/60 mt-2">
              No credit card to start.
            </p>
          </div>

          {/* Right column - Command Board Preview */}
          <div className="relative bg-white/5 border border-white/10 rounded-xl shadow-inner p-4 min-h-[220px] flex flex-col justify-between">
            <div className="text-sm font-semibold text-white mb-4">
              Today's Dispatch Board
            </div>
            <div className="space-y-2 flex-1">
              <div className="bg-white/10 rounded-md h-4 w-full"></div>
              <div className="bg-white/10 rounded-md h-4 w-5/6"></div>
              <div className="bg-white/10 rounded-md h-4 w-4/6"></div>
              <div className="bg-white/10 rounded-md h-4 w-full"></div>
              <div className="bg-white/10 rounded-md h-4 w-3/4"></div>
            </div>
            <div className="text-[11px] text-white/60 mt-4">
              Live map • Crew availability • Route load per tech
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE COMMAND BOARD */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-10">
            The Command Board
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left column - Spotlight Card */}
            <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
              <PlanRibbon plan="Starter+" testId="ribbon-dispatch-board" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Live Dispatch Board
            </span>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              See every job and every tech in one live board.
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Drag-and-drop jobs to techs. Color-coded job status. Capacity planning so nobody's overloaded. You're never guessing who's free.
            </p>

            {/* Feature bullets */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-2">
                <ClipboardList className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-sm text-slate-700 font-medium">Drag-and-drop scheduling</div>
                  <div className="text-slate-500 text-[13px]">Assign or reassign work in seconds.</div>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <LayoutDashboard className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-sm text-slate-700 font-medium">Dispatch board for technicians</div>
                  <div className="text-slate-500 text-[13px]">See who's on what job, what's next, and who's available.</div>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Target className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-sm text-slate-700 font-medium">Color-coded job status</div>
                  <div className="text-slate-500 text-[13px]">Everyone understands the board without asking you.</div>
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-dispatch-flow"
              >
                <Link to="/features/dispatch-board-live-map">See Dispatch Flow</Link>
              </Button>
              <Link
                to="/signup"
                className="text-sm text-[#0B5FFF] font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-dispatch"
              >
                Start Free →
              </Link>
            </div>
          </div>

          {/* Right column - 3 Key Outcomes */}
          <div className="space-y-6">
            {/* Outcome 1 */}
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="font-bold text-slate-900 mb-1">Stop the radio calls.</div>
                <p className="text-slate-600 text-sm">
                  Everyone already knows where they're going. No more "Where do you want me next?" calls.
                </p>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="font-bold text-slate-900 mb-1">Balance the whole day.</div>
                <p className="text-slate-600 text-sm">
                  You can see who's slammed and who's idle, then drag jobs to rebalance.
                </p>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-[#0B5FFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="font-bold text-slate-900 mb-1">Faster response time.</div>
                <p className="text-slate-600 text-sm">
                  When an urgent job comes in, drop it on the closest tech from the live map.
                </p>
              </div>
            </div>

            {/* Cross-link */}
            <Link
              to="/features/work-orders"
              className="inline-block text-[#0B5FFF] text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1 mt-4"
              data-testid="link-field-view"
            >
              See what techs see in the field →
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* SECTION 3: ROUTE OPTIMIZATION & GPS */}
      <section className="bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-10">
            Stop burning 45 minutes between every job.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left column - Text and CTA */}
            <div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Auto-build efficient routes, keep drive time tight, and prove where your crews actually were.
              </p>

            {/* Bulleted list */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-2">
                <RouteIcon className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-sm text-slate-700 font-medium">Route optimization & capacity planning</div>
                  <div className="text-slate-600 text-[13px]">Stop cramming one tech while two others drive around half-empty.</div>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-sm text-slate-700 font-medium">Dispatch via live map</div>
                  <div className="text-slate-600 text-[13px]">Drop urgent work on the closest tech. Send them with one tap.</div>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Navigation className="text-[#0B5FFF] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-sm text-slate-700 font-medium">Real-time GPS tracking</div>
                  <div className="text-slate-600 text-[13px]">Know where the truck actually is. Deliver accurate ETAs without calling.</div>
                </div>
              </div>
            </div>

            {/* Trust line */}
            <p className="text-[12px] text-slate-500 leading-snug mb-6">
              Unlimited users on paid plans. No per-tech seat fees. You're not playing license police.
            </p>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-see-routing"
              >
                <Link to="/features/route-optimization">See Routing Tools</Link>
              </Button>
              <Link
                to="/signup"
                className="text-sm text-[#0B5FFF] font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
                data-testid="link-start-free-routing"
              >
                Start Free →
              </Link>
            </div>
          </div>

          {/* Right column - Route Preview spotlight card */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-5 overflow-visible">
            <PlanRibbon plan="Essential+" testId="ribbon-route-optimization" />
            
            <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-3">
              Route Optimization & GPS
            </span>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Shorter drive time. Happier customers.
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Build efficient daily routes automatically and get a live view of who's where. Promise real ETAs and actually hit them.
            </p>

            {/* Map placeholder */}
            <div className="bg-slate-100 rounded-lg h-32 w-full mt-4 flex items-center justify-center text-[11px] text-slate-500">
              Live Map / Nearest Tech
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* SECTION 4A: CALENDAR SYNC */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Your techs already live in their phone's calendar. Now you do too.
          </h2>
          
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mb-6">
            Jobs sync to Google Calendar and Apple Calendar automatically. Techs see where to go and when. You stop getting "text me the address."
          </p>

          {/* Mini bullet row as inline chips */}
          <div className="mb-6">
            <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-medium rounded-full border border-slate-200 px-2 py-[3px] mr-2 mb-2">
              Drag-and-drop scheduling (Free)
            </span>
            <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-medium rounded-full border border-slate-200 px-2 py-[3px] mr-2 mb-2">
              Calendar sync (Free)
            </span>
            <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-medium rounded-full border border-slate-200 px-2 py-[3px] mr-2 mb-2">
              Dispatch board (Starter+)
            </span>
            <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-medium rounded-full border border-slate-200 px-2 py-[3px] mr-2 mb-2">
              Route optimization & GPS (Essential+)
            </span>
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#0B5FFF] text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-start-free-calendar"
            >
              <Link to="/signup">Start Free</Link>
            </Button>
            <Link
              to="/pricing"
              className="text-sm text-[#0B5FFF] font-medium hover:underline flex items-center justify-center sm:justify-start focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded px-2 py-1"
              data-testid="link-compare-plans"
            >
              Compare Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4B: FINAL CTA BAND */}
      <section className="bg-[#0E2A47] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-white font-semibold text-2xl sm:text-3xl mb-3">
            Get control of your day in under 10 minutes.
          </h2>
          
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-3 mb-8">
            Start free. No credit card required. Works with Google Calendar and Apple Calendar. Unlimited users on paid plans. No per-tech seat fees.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-2">
            <Button
              asChild
              size="lg"
              className="bg-[#0B5FFF] text-white font-semibold hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
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
            By starting, you agree to receive service updates and onboarding guidance. Standard rates apply for SMS usage.
          </p>
        </div>
      </section>
    </>
  );
}
