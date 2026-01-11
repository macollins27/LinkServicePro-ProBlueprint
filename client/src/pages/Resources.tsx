import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Wrench, Users, Newspaper, BookOpen, Video, LifeBuoy, Check, Route as RouteIcon, CreditCard, Repeat, Calendar } from "lucide-react";

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources for Field Service Businesses | LinkServicePro</title>
        <meta
          name="description"
          content="Free guides, templates, webinars, and training for HVAC, plumbing, electrical, cleaning, and service contractors. Learn how to schedule faster, quote with confidence, and get paid sooner."
        />
      </Helmet>

      <div className="flex flex-col w-full">
        {/* SECTION 1: HERO */}
        <section className="bg-slate-50 py-12 px-4 border-b border-slate-200">
          <div className="max-w-5xl mx-auto flex flex-col gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Resources for field service businesses
              </h1>
              <p className="text-slate-600 text-[15px] leading-relaxed mt-2 max-w-2xl">
                Learn how to schedule smarter, quote faster, get paid sooner, and scale without chaos.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="bg-[#0B5FFF] text-white text-[14px] font-semibold rounded-md px-4 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-signup-hero"
              >
                Get Started Free
              </Link>

              <Link
                to="/contact"
                className="text-slate-700 text-[14px] font-semibold rounded-md px-4 py-2 ring-1 ring-slate-300 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-contact-hero"
              >
                Talk to Sales
              </Link>
            </div>

            <div className="text-[12px] text-slate-500 flex flex-col sm:flex-row sm:items-center gap-1 leading-snug">
              <div className="flex items-center gap-1">
                <Wrench className="w-4 h-4 text-[#0B5FFF]" />
                <span>Built for HVAC, Plumbing, Electrical, Cleaning & more</span>
              </div>
              <div className="hidden sm:inline-block text-slate-400">•</div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-[#0B5FFF]" />
                <span>Unlimited users on paid plans</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: QUICK-ACCESS CARDS */}
        <section className="bg-white py-10 px-4 border-b border-slate-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              What do you need today?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* BLOG */}
              <Link
                to="/resources/blog"
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:ring-2 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none transition"
                data-testid="link-resources-blog"
              >
                <div className="flex items-start gap-3">
                  <Newspaper className="w-5 h-5 text-[#0B5FFF] flex-shrink-0" />
                  <div>
                    <div className="text-[14px] font-semibold text-slate-900">Blog & Updates</div>
                    <div className="text-[13px] text-slate-600 leading-snug mt-1">
                      Industry tips, product updates, and real talk from the field.
                    </div>
                    <div className="text-[12px] font-semibold text-[#0B5FFF] mt-2">Explore →</div>
                  </div>
                </div>
              </Link>

              {/* GUIDES */}
              <Link
                to="/resources/guides"
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:ring-2 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none transition"
                data-testid="link-resources-guides"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#0B5FFF] flex-shrink-0" />
                  <div>
                    <div className="text-[14px] font-semibold text-slate-900">Free Guides & Playbooks</div>
                    <div className="text-[13px] text-slate-600 leading-snug mt-1">
                      Step-by-step checklists for dispatch, pricing, and scaling.
                    </div>
                    <div className="text-[12px] font-semibold text-[#0B5FFF] mt-2">Explore →</div>
                  </div>
                </div>
              </Link>

              {/* WEBINARS */}
              <Link
                to="/resources/webinars"
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:ring-2 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none transition"
                data-testid="link-resources-webinars"
              >
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-[#0B5FFF] flex-shrink-0" />
                  <div>
                    <div className="text-[14px] font-semibold text-slate-900">Webinars & Training</div>
                    <div className="text-[13px] text-slate-600 leading-snug mt-1">
                      Live and on-demand sessions for owners and ops managers.
                    </div>
                    <div className="text-[12px] font-semibold text-[#0B5FFF] mt-2">Explore →</div>
                  </div>
                </div>
              </Link>

              {/* HELP */}
              <Link
                to="/help"
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:ring-2 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none transition"
                data-testid="link-resources-help"
              >
                <div className="flex items-start gap-3">
                  <LifeBuoy className="w-5 h-5 text-[#0B5FFF] flex-shrink-0" />
                  <div>
                    <div className="text-[14px] font-semibold text-slate-900">Help Center</div>
                    <div className="text-[13px] text-slate-600 leading-snug mt-1">
                      How to use LinkServicePro in your business, day one.
                    </div>
                    <div className="text-[12px] font-semibold text-[#0B5FFF] mt-2">Explore →</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURED GUIDE PROMO */}
        <section className="bg-slate-50 py-12 px-4 border-b border-slate-200">
          <div className="max-w-5xl mx-auto rounded-xl bg-white ring-1 ring-slate-200 p-6 shadow-sm flex flex-col lg:flex-row gap-6">
            {/* LEFT TEXT */}
            <div className="flex-1">
              <div className="text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-300 rounded-full px-2 py-[3px] inline-block mb-3">
                Owner Playbook
              </div>
              <div className="text-lg font-semibold text-slate-900 leading-snug">
                How to stop losing money on unscheduled gaps
              </div>
              <ul className="mt-3 text-[14px] text-slate-700 space-y-1">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B5FFF] mt-[2px] flex-shrink-0" />
                  <span>Fill your calendar without underpricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B5FFF] mt-[2px] flex-shrink-0" />
                  <span>Stop unpaid drive time from killing margin</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B5FFF] mt-[2px] flex-shrink-0" />
                  <span>Turn emergency calls into subscriptions</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 mt-5 items-center">
                <Link
                  to="/resources/guides/owner-gap-playbook"
                  className="bg-[#0B5FFF] text-white text-[14px] font-semibold rounded-md px-4 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                  data-testid="button-guide-playbook"
                >
                  Get the guide
                </Link>
                <div className="text-[12px] text-slate-500 leading-snug">
                  Free. No credit card.
                </div>
              </div>
            </div>

            {/* RIGHT THUMB */}
            <div className="flex-1">
              <div
                aria-hidden="true"
                className="w-full h-[180px] rounded-md bg-slate-100 ring-1 ring-slate-300 flex items-center justify-center text-slate-400 text-[12px]"
                title="Guide cover placeholder"
              >
                GUIDE PREVIEW
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: MOST REQUESTED TOPICS */}
        <section className="bg-white py-12 px-4 border-b border-slate-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold text-slate-900">
              Most requested topics
            </h2>
            <p className="text-slate-600 text-[14px] leading-relaxed mt-1 max-w-2xl">
              Dispatch problems, slow approvals, unpaid time — we've seen it all.
              Start solving the expensive stuff first.
            </p>

            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* COLUMN: Scheduling & Dispatch */}
              <div>
                <div className="text-[13px] font-semibold text-slate-900 flex items-center gap-2 mb-3">
                  <RouteIcon className="w-4 h-4 text-[#0B5FFF]" />
                  <span>Scheduling & Dispatch</span>
                </div>
                <ul className="space-y-2 text-[14px] text-slate-700">
                  <li>
                    <Link
                      to="/resources/guides/dispatch-scale"
                      className="hover:text-slate-900 hover:underline flex items-start gap-1 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                      data-testid="link-topic-dispatch-scale"
                    >
                      <span>How to build a dispatch board that scales past 5 techs</span>
                      <span className="text-[#0B5FFF] flex-shrink-0">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources/guides/route-basics"
                      className="hover:text-slate-900 hover:underline flex items-start gap-1 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                      data-testid="link-topic-route-basics"
                    >
                      <span>Route optimization basics for same-day jobs</span>
                      <span className="text-[#0B5FFF] flex-shrink-0">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources/webinars/live-dispatch-qna"
                      className="hover:text-slate-900 hover:underline flex items-start gap-1 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                      data-testid="link-topic-dispatch-qna"
                    >
                      <span>Reducing angry "where's my tech?" calls</span>
                      <span className="text-[#0B5FFF] flex-shrink-0">→</span>
                    </Link>
                  </li>
                </ul>
                <div className="text-[12px] font-semibold text-[#0B5FFF] mt-3">
                  <Link
                    to="/resources/guides"
                    className="hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                    data-testid="link-topic-guides-more"
                  >
                    See more →
                  </Link>
                </div>
              </div>

              {/* COLUMN: Quotes & Payment */}
              <div>
                <div className="text-[13px] font-semibold text-slate-900 flex items-center gap-2 mb-3">
                  <CreditCard className="w-4 h-4 text-[#0B5FFF]" />
                  <span>Quotes & Payment</span>
                </div>
                <ul className="space-y-2 text-[14px] text-slate-700">
                  <li>
                    <Link
                      to="/resources/guides/esign-approvals"
                      className="hover:text-slate-900 hover:underline flex items-start gap-1 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                      data-testid="link-topic-esign"
                    >
                      <span>Faster approvals with e-sign estimates</span>
                      <span className="text-[#0B5FFF] flex-shrink-0">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources/guides/deposits"
                      className="hover:text-slate-900 hover:underline flex items-start gap-1 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                      data-testid="link-topic-deposits"
                    >
                      <span>Taking deposits and partial payments without drama</span>
                      <span className="text-[#0B5FFF] flex-shrink-0">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources/blog/same-day-pay"
                      className="hover:text-slate-900 hover:underline flex items-start gap-1 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                      data-testid="link-topic-sameday"
                    >
                      <span>Invoices that get paid same-day</span>
                      <span className="text-[#0B5FFF] flex-shrink-0">→</span>
                    </Link>
                  </li>
                </ul>
                <div className="text-[12px] font-semibold text-[#0B5FFF] mt-3">
                  <Link
                    to="/resources/webinars"
                    className="hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                    data-testid="link-topic-webinars-more"
                  >
                    See more →
                  </Link>
                </div>
              </div>

              {/* COLUMN: Recurring Revenue */}
              <div>
                <div className="text-[13px] font-semibold text-slate-900 flex items-center gap-2 mb-3">
                  <Repeat className="w-4 h-4 text-[#0B5FFF]" />
                  <span>Recurring Revenue</span>
                </div>
                <ul className="space-y-2 text-[14px] text-slate-700">
                  <li>
                    <Link
                      to="/resources/guides/maintenance-plans"
                      className="hover:text-slate-900 hover:underline flex items-start gap-1 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                      data-testid="link-topic-maintenance"
                    >
                      <span>Maintenance plans people actually renew</span>
                      <span className="text-[#0B5FFF] flex-shrink-0">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources/webinars/recurring-revenue"
                      className="hover:text-slate-900 hover:underline flex items-start gap-1 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                      data-testid="link-topic-recurring"
                    >
                      <span>How to turn one-time jobs into monthly contracts</span>
                      <span className="text-[#0B5FFF] flex-shrink-0">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources/blog/job-profit-tracking"
                      className="hover:text-slate-900 hover:underline flex items-start gap-1 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                      data-testid="link-topic-profit"
                    >
                      <span>Tracking profitability per crew without spreadsheets</span>
                      <span className="text-[#0B5FFF] flex-shrink-0">→</span>
                    </Link>
                  </li>
                </ul>
                <div className="text-[12px] font-semibold text-[#0B5FFF] mt-3">
                  <Link
                    to="/resources/blog"
                    className="hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                    data-testid="link-topic-blog-more"
                  >
                    See more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: DARK CALLOUT CTA */}
        <section className="bg-[#0E2A47] py-12 px-4 border-b border-slate-800">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-[11px] font-semibold text-white/80 bg-white/10 border border-white/20 rounded-full px-2 py-[3px] inline-block mb-4">
              Built for the field
            </div>
            <h2 className="text-xl font-semibold text-white leading-snug">
              Stop duct-taping 4 apps to run your day.
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mt-2 max-w-2xl mx-auto">
              One place to schedule jobs, track work, collect payment, and message customers — with unlimited users on paid plans.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Link
                to="/signup"
                className="bg-[#0B5FFF] text-white text-[14px] font-semibold rounded-md px-4 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-signup-cta"
              >
                Get Started Free
              </Link>
              <Link
                to="/contact"
                className="text-white/80 text-[14px] font-semibold rounded-md px-4 py-2 ring-1 ring-white/30 hover:text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-contact-cta"
              >
                Talk to Sales
              </Link>
            </div>

            <div className="text-[12px] text-white/60 mt-4 flex items-center justify-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Works with Google Calendar and Apple Calendar.</span>
            </div>
          </div>
        </section>

        {/* SECTION 6: SEO FOOTER BLOCK */}
        <section className="bg-slate-50 py-10 px-4">
          <div className="max-w-5xl mx-auto text-[13px] text-slate-600 leading-relaxed space-y-4">
            <div>
              <h3 className="text-[14px] font-semibold text-slate-900 mb-2">What you'll learn here</h3>
              <p>
                LinkServicePro's resource library covers everything from scheduling software for contractors to field service management best practices. Our guides, webinars, and training materials help HVAC, plumbing, electrical, and cleaning businesses implement better systems for dispatch, quoting, invoicing, and customer management. Whether you're looking to improve route optimization, reduce no-shows, or implement recurring maintenance plans, you'll find practical advice written by people who understand service businesses.
              </p>
            </div>

            <div>
              <h3 className="text-[14px] font-semibold text-slate-900 mb-2">Who this is for</h3>
              <p>
                These resources are designed for field service business owners, operations managers, and office staff who handle scheduling, dispatch, estimates, invoices, and customer communications. If you're managing techs in the field, coordinating multiple jobs per day, or trying to scale past the "owner does everything" phase, this library will help you build systems that actually work without adding complexity or per-seat software costs.
              </p>
            </div>

            <div>
              <h3 className="text-[14px] font-semibold text-slate-900 mb-2">Why this matters</h3>
              <p>
                Most scheduling software and field service management platforms charge per user, making it expensive to add office staff or new techs. LinkServicePro offers unlimited users on paid plans, so you can grow your team without worrying about seat fees cutting into margin. Our resources show you how to leverage that model to build a real operational system — calendar sync, e-signatures, same-day payments, recurring service contracts, and job costing — without duct-taping multiple apps together.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
