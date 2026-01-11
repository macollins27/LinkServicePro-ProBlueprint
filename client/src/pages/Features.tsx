import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PlanRibbon } from "@/components/PlanRibbon";
import {
  Calendar,
  ClipboardList,
  FileSignature,
  CreditCard,
  MessageSquare,
  Users,
  MapPin,
  Navigation,
  Target,
  Bell,
  Phone,
  Repeat,
  CheckCircle,
  TrendingUp,
  Route as RouteIcon,
  Truck,
  UserCog,
  LayoutDashboard,
  DollarSign,
  Boxes
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <>
      <Helmet>
        <title>Field Service Management Features | LinkServicePro</title>
        <meta
          name="description"
          content="Run your field service business from one hub. Schedule jobs, dispatch crews, message customers, take payment, and track profit. Unlimited users on paid plans."
        />
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="bg-[#0E2A47] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Run your field service business from one hub.
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Schedule jobs, dispatch crews, message customers, take payment, and track profit — without group texts, paper work orders, or guessing where your team is.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["Unlimited users on paid plans", "No per-tech seat fees", "Works with Google Calendar & Apple Calendar"].map((badge, i) => (
                  <span
                    key={i}
                    className="bg-white/10 text-white border border-white/20 rounded-full text-xs px-3 py-1 font-medium"
                    data-testid={`badge-${i}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* KPI row */}
              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { stat: "35%", label: "faster scheduling" },
                  { stat: "2×", label: "quicker approvals" },
                  { stat: "<24 hr", label: "average time-to-pay" }
                ].map((kpi, i) => (
                  <div key={i} data-testid={`kpi-${i}`}>
                    <div className="text-2xl font-bold text-white">{kpi.stat}</div>
                    <div className="text-sm text-white/60">{kpi.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#0B5FFF] text-white font-semibold hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                  data-testid="button-start-free-hero"
                >
                  <Link to="/signup">Start Free</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                  data-testid="button-see-pricing-hero"
                >
                  <Link to="/pricing">See Pricing</Link>
                </Button>
              </div>
              <p className="text-[11px] text-white/60">
                No credit card to start. Unlimited users on paid plans.
              </p>
            </div>

            {/* Right column - Dashboard mock */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 min-h-[400px] flex items-center justify-center">
              <div className="text-white/40 text-sm text-center">Calendar View Mock</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: JOB FLOW */}
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              From lead → quote → schedule → paid
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything connected. No retyping. No chasing.
            </p>
          </div>

          {/* 4-step flow */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: FileSignature,
                title: "Book & Quote",
                desc: "Capture leads, send digital estimates, collect signatures in minutes.",
                features: "Lead management • Estimates with e-sign • Automated follow-ups"
              },
              {
                icon: Calendar,
                title: "Schedule & Dispatch",
                desc: "Drag-and-drop jobs onto crews. Syncs to Google / Apple Calendar. No double-booking.",
                features: "Drag-and-drop scheduling • Dispatch board • Route optimization"
              },
              {
                icon: ClipboardList,
                title: "Do the Work",
                desc: "Techs have work orders, photos, notes, warranty history, and recurring visits — on their phone.",
                features: "Mobile field access • Asset tracking • Recurring maintenance plans"
              },
              {
                icon: CreditCard,
                title: "Invoice & Get Paid",
                desc: "Batch invoices, take card in the field, track labor and parts, see profit by job.",
                features: "Batch invoicing • Instant card payment • Job costing & profitability"
              }
            ].map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div key={i} className="relative" data-testid={`stage-${i}`}>
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#0B5FFF]/10 mb-4">
                      <Icon className="w-6 h-6 text-[#0B5FFF]" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{stage.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{stage.desc}</p>
                    <p className="text-xs text-slate-500 font-medium">
                      {stage.features}
                    </p>
                  </div>
                  {/* Connector line on desktop */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-[2px] bg-gradient-to-r from-[#0B5FFF]/30 to-transparent -z-10" />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              This is how your day should run.
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#0B5FFF] text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                data-testid="button-watch-walkthrough"
              >
                <Link to="/demo">Watch 2-min walkthrough</Link>
              </Button>
              <Link
                to="/signup"
                className="text-sm text-[#0B5FFF] font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 rounded px-2 py-1"
                data-testid="link-start-free-flow"
              >
                Or start free →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SCHEDULING & DISPATCH */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Scheduling & Dispatch without the chaos
            </h2>
            <p className="text-lg text-slate-600">
              Balance the day, cut drive time, and stop calling every truck.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Command Center card */}
            <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm overflow-visible">
              <PlanRibbon plan="Essential+" testId="ribbon-command-center" />
              
              <div className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-md mb-3">
                Live Dispatch Board
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                See every job, every tech, in one live board.
              </h3>
              
              <p className="text-slate-600 mb-4">
                Drag-and-drop jobs to techs. View routes on a live map. Capacity planning so no one's overloaded.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: RouteIcon, text: "Route optimization" },
                  { icon: MapPin, text: "Real-time GPS tracking" },
                  { icon: Target, text: "Dispatch from map" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <Icon className="w-4 h-4 text-[#0B5FFF]" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  size="sm"
                  className="bg-[#0B5FFF] text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                  data-testid="button-see-dispatch-flow"
                >
                  <Link to="/features/dispatch-board-live-map">See Dispatch Flow</Link>
                </Button>
                <Link
                  to="/signup"
                  className="text-sm text-[#0B5FFF] font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 rounded px-2 py-1"
                  data-testid="link-start-free-dispatch"
                >
                  Start free →
                </Link>
              </div>
            </div>

            {/* Right: 3 mini callouts */}
            <div className="space-y-6">
              {[
                {
                  icon: Calendar,
                  title: "Drag-and-drop scheduling",
                  plan: "Free",
                  desc: "Drop a job on the right tech. Syncs instantly to Google and Apple Calendar. Zero double-booking.",
                  link: "/features/drag-and-drop-scheduling"
                },
                {
                  icon: RouteIcon,
                  title: "Route optimization & capacity planning",
                  plan: "Essential+",
                  desc: "Stop wasting 30 minutes between every job. Auto-build efficient routes.",
                  link: "/features/route-optimization"
                },
                {
                  icon: MapPin,
                  title: "Live GPS tracking",
                  plan: "Essential+",
                  desc: "Know where crews actually are. Stop 'Where are you?' calls.",
                  link: "/features/real-time-gps"
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4" data-testid={`callout-scheduling-${i}`}>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-[#0B5FFF]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0B5FFF]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <span className={`inline-block rounded-full text-[11px] font-medium px-2 py-[2px] ${
                          item.plan === "Free" 
                            ? "bg-emerald-100 text-emerald-900" 
                            : "bg-blue-100 text-blue-900"
                        }`}>
                          {item.plan}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
              
              <Link
                to="/features"
                className="inline-block text-sm text-[#0B5FFF] font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 rounded px-2 py-1 mt-4"
                data-testid="link-view-all-scheduling"
              >
                View all scheduling & dispatch features →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CUSTOMER & BILLING */}
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Keep customers informed and paying
            </h2>
            <p className="text-lg text-slate-600">
              The system texts them, reminds them, and gives them a way to pay — so you don't have to babysit anything.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Customer communication card */}
            <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm overflow-visible">
              <PlanRibbon plan="Starter" testId="ribbon-messaging" />
              
              <div className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-md mb-3">
                Customer Messaging & Reminders
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Customers get updates automatically.
              </h3>
              
              <ul className="space-y-3 mb-6">
                {[
                  { text: "Automated reminders & ETAs via SMS/email", plan: "Starter" },
                  { text: "Two-way messaging in one thread", plan: "Starter" },
                  { text: "Customer portal for quotes, invoices, work history", plan: "Starter" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
                    <span className="flex-1">
                      {item.text}
                      <span className="inline-block ml-2 rounded-full bg-blue-100 text-blue-900 text-[11px] font-medium px-2 py-[2px] align-middle">
                        {item.plan}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  size="sm"
                  className="bg-[#0B5FFF] text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                  data-testid="button-see-messaging-demo"
                >
                  <Link to="/features/two-way-messaging">See Messaging Demo</Link>
                </Button>
                <Link
                  to="/signup"
                  className="text-sm text-[#0B5FFF] font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 rounded px-2 py-1"
                  data-testid="link-start-free-messaging"
                >
                  Start free →
                </Link>
              </div>
            </div>

            {/* Right: Get paid faster card */}
            <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm overflow-visible">
              <PlanRibbon plan="Free" testId="ribbon-payments" />
              
              <div className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1 rounded-md mb-3">
                Invoicing & Payments
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Get paid in hours, not days.
              </h3>
              
              <ul className="space-y-3 mb-6">
                {[
                  { text: "Batch invoicing for all outstanding jobs", plan: "Premium" },
                  { text: "Take card on-site or send a pay link", plan: "Free" },
                  { text: "Partial deposits and progress billing", plan: "Premium" },
                  { text: "Job costing & profitability reports so you know what you actually made", plan: "Premium" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
                    <span className="flex-1">
                      {item.text}
                      <span className={`inline-block ml-2 rounded-full text-[11px] font-medium px-2 py-[2px] align-middle ${
                        item.plan === "Free" 
                          ? "bg-emerald-100 text-emerald-900" 
                          : "bg-violet-100 text-violet-900"
                      }`}>
                        {item.plan}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  size="sm"
                  className="bg-[#0B5FFF] text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                  data-testid="button-see-billing"
                >
                  <Link to="/features/payments">See How We Bill</Link>
                </Button>
                <Link
                  to="/pricing"
                  className="text-sm text-[#0B5FFF] font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 rounded px-2 py-1"
                  data-testid="link-view-pricing-billing"
                >
                  View Pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FIELD EXECUTION */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Your crew can just open the job and go
            </h2>
            <p className="text-lg text-slate-600">
              No clipboards. No "text me the address." Everything they need is already there.
            </p>
          </div>

          {/* Main field execution card */}
          <div className="relative bg-white ring-1 ring-slate-200 rounded-xl shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm overflow-visible mb-8">
            <PlanRibbon plan="Essential+" testId="ribbon-field-execution" />
            
            <div className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-md mb-3">
              In the Field
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Work orders, photos, checklists, signatures — all on their phone.
            </h3>
            
            <ul className="space-y-2 mb-4">
              {[
                "Document the job with photos, parts, notes",
                "Capture signatures on the spot",
                "Recurring maintenance visits auto-generate",
                "Asset history and warranty info tied to the property"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-sm text-slate-500 mb-6">
              Techs don't have to figure it out. They open the job, do the work, tap Done.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="sm"
                className="bg-[#0B5FFF] text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                data-testid="button-see-field-workflow"
              >
                <Link to="/features/work-orders">See Field Workflow</Link>
              </Button>
              <Link
                to="/signup"
                className="text-sm text-[#0B5FFF] font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 rounded px-2 py-1 flex items-center justify-center"
                data-testid="link-start-free-field"
              >
                Start free →
              </Link>
            </div>
          </div>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Project tracking with multiple work orders", link: "/features/project-tracking" },
              { label: "Manager-to-employee task assignments", link: "/features/work-orders" },
              { label: "Internal employee messaging", link: "/features/two-way-messaging" },
              { label: "Ownership transfer & warranty tracking", link: "/features/work-orders" },
              { label: "Built-in bug tracking", link: "/features/project-tracking" }
            ].map((chip, i) => (
              <Link
                key={i}
                to={chip.link}
                className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium px-3 py-2 rounded-full transition focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                data-testid={`chip-field-${i}`}
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTROL & PROFIT */}
      <section className="bg-slate-900 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              See the whole business, not just today's tickets
            </h2>
            <p className="text-lg text-slate-300">
              Know which jobs are profitable, who's overloaded, and what needs fixing — before it blows up.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Control & Oversight */}
            <div className="relative bg-slate-800 ring-1 ring-slate-700 rounded-xl shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm overflow-visible">
              <PlanRibbon plan="Premium" testId="ribbon-control" />
              
              <div className="inline-block bg-blue-900/30 text-blue-300 text-xs font-medium px-2 py-1 rounded-md mb-3">
                Control & Oversight
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                Managers see everything they need.
              </h3>
              
              <ul className="space-y-3 mb-6 text-slate-300">
                {[
                  { text: "Custom dashboard widgets", plan: "Premium" },
                  { text: "Multi-user roles and permissions", plan: "Starter" },
                  { text: "Audit trail on assets and property history", plan: "Premium" },
                  { text: "Nexus / LinkInspectPro / PropertyOrganizer integrations", plan: "Platinum" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
                    <span className="flex-1">
                      {item.text}
                      <span className="inline-block ml-2 rounded-full bg-violet-900/40 text-violet-300 text-[11px] font-medium px-2 py-[2px] align-middle">
                        {item.plan}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              
              <p className="text-[13px] text-slate-400 mb-6">
                Unlimited users on paid plans. No per-tech seat fees.
              </p>
              
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  size="sm"
                  className="bg-[#0B5FFF] text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                  data-testid="button-see-reporting"
                >
                  <Link to="/features/job-costing">See Reporting & Roles</Link>
                </Button>
                <Link
                  to="/pricing"
                  className="text-sm text-[#0B5FFF] font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 rounded px-2 py-1"
                  data-testid="link-compare-plans-control"
                >
                  Compare plans →
                </Link>
              </div>
            </div>

            {/* Right: Profit & Performance */}
            <div className="relative bg-slate-800 ring-1 ring-slate-700 rounded-xl shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm overflow-visible">
              <PlanRibbon plan="Premium" testId="ribbon-profit" />
              
              <div className="inline-block bg-emerald-900/30 text-emerald-300 text-xs font-medium px-2 py-1 rounded-md mb-3">
                Profit & Performance
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                Stop guessing which work actually makes money.
              </h3>
              
              <ul className="space-y-3 mb-6 text-slate-300">
                {[
                  "Job costing & profitability reports",
                  "Payroll & wage tracking",
                  "Expense and materials tracking",
                  "Purchase orders & vendor insurance status"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#0B5FFF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  size="sm"
                  className="bg-[#0B5FFF] text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                  data-testid="button-see-profitability"
                >
                  <Link to="/features/job-costing">See Profitability Tools</Link>
                </Button>
                <Link
                  to="/signup"
                  className="text-sm text-[#0B5FFF] font-medium hover:underline text-center focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 rounded px-2 py-1"
                  data-testid="link-start-free-profit"
                >
                  Start free →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="bg-[#0E2A47] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Start free. Scale when you're ready.
          </h2>
          <p className="text-lg text-white/70 mb-8">
            No credit card required. Import jobs by CSV. Works with Google Calendar and Apple Calendar.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:border-transparent"
                data-testid="input-email-final"
              />
              <Button
                asChild
                size="lg"
                className="bg-[#0B5FFF] text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                data-testid="button-get-started-final"
              >
                <Link to="/signup">Get Started Free</Link>
              </Button>
            </div>
            <p className="text-[11px] text-white/50">
              By submitting, you agree to receive marketing emails. You can unsubscribe at any time.
            </p>
          </div>
          
          <div className="mt-6">
            <Link
              to="/pricing"
              className="text-sm text-white/80 font-medium hover:underline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded px-2 py-1"
              data-testid="link-view-pricing-final"
            >
              View Pricing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
