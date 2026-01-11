import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Check, Route as RouteIcon, CreditCard, Repeat, ChevronDown } from "lucide-react";
import DownloadModal from "@/components/DownloadModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Guides() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState({ title: "", slug: "" });

  const openModalForGuide = (title: string, slug: string) => {
    setSelectedGuide({ title, slug });
    setModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Free Guides & Playbooks | LinkServicePro</title>
        <meta
          name="description"
          content="Field-tested playbooks for HVAC, plumbing, electrical, cleaning, and more. Learn dispatch, routing, payments, maintenance plans, and scaling without chaos."
        />
      </Helmet>

      <div className="flex flex-col w-full">

        {/* 1. HERO SECTION */}
        <section className="bg-slate-50 py-12 px-4 border-b border-slate-200">
          <div className="max-w-5xl mx-auto flex flex-col gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Free Guides &amp; Playbooks
              </h1>
              <p className="text-slate-600 text-[15px] leading-relaxed mt-2 max-w-2xl">
                Field-tested playbooks for HVAC, plumbing, electrical, cleaning,
                and more. Learn how to dispatch faster, lock in approvals, and
                get paid the same day.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/signup"
                className="bg-[#0B5FFF] text-white text-[14px] font-semibold rounded-md px-4 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-signup"
              >
                Get Started Free
              </a>

              <a
                href="/contact"
                className="text-slate-700 text-[14px] font-semibold rounded-md px-4 py-2 ring-1 ring-slate-300 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-contact"
              >
                Talk to Sales
              </a>
            </div>

            <div className="text-[12px] text-slate-500 flex flex-col sm:flex-row sm:items-center gap-1 leading-snug">
              <div className="flex items-center gap-1">
                <span className="text-[#0B5FFF] font-semibold">No fluff.</span>
                <span>Built for real service businesses.</span>
              </div>
              <div className="hidden sm:inline-block text-slate-400">•</div>
              <div className="flex items-center gap-1">
                <span className="text-[#0B5FFF] font-semibold">Free to download.</span>
                <span>No consultants.</span>
              </div>
            </div>

            {/* TRUST STRIP */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="text-[12px] text-slate-500 mb-2">
                Used by HVAC, plumbing, electrical, and home services teams running real crews every day.
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="bg-slate-100 text-slate-600 text-[11px] px-2 py-[2px] rounded">
                  HVAC 24/7 Response
                </div>
                <div className="bg-slate-100 text-slate-600 text-[11px] px-2 py-[2px] rounded">
                  RapidRooter Plumbing
                </div>
                <div className="bg-slate-100 text-slate-600 text-[11px] px-2 py-[2px] rounded">
                  CleanPro Janitorial
                </div>
                <div className="bg-slate-100 text-slate-600 text-[11px] px-2 py-[2px] rounded">
                  Spark Electric Services
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. FEATURED PLAYBOOK */}
        <section className="bg-white py-12 px-4 border-b border-slate-200">
          <div className="max-w-5xl mx-auto rounded-xl bg-white ring-1 ring-slate-200 p-6 shadow-sm flex flex-col lg:flex-row gap-6">
            {/* LEFT */}
            <div className="flex-1">
              <div className="text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-300 rounded-full px-2 py-[3px] inline-block mb-3">
                Owner Playbook
              </div>
              <div className="text-lg font-semibold text-slate-900 leading-snug">
                Stop losing money on unscheduled gaps
              </div>
              <ul className="mt-3 text-[14px] text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B5FFF] mt-[2px]" />
                  <span>Fill your day without undercutting price</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B5FFF] mt-[2px]" />
                  <span>Kill unpaid drive time and chaos routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0B5FFF] mt-[2px]" />
                  <span>Turn emergencies into recurring revenue</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 mt-5">
                <button
                  onClick={() => openModalForGuide("Stop losing money on unscheduled gaps", "owner-gap-playbook")}
                  className="bg-[#0B5FFF] text-white text-[14px] font-semibold rounded-md px-4 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                  data-testid="button-featured-guide"
                >
                  Get the guide
                </button>
                <div className="text-[12px] text-slate-500 leading-snug self-center">
                  Free. No credit card.
                </div>
              </div>
            </div>

            {/* RIGHT PREVIEW THUMB */}
            <div className="flex-1">
              <div
                aria-hidden="true"
                className="w-full h-[180px] rounded-md bg-slate-100 ring-1 ring-slate-300 flex items-center justify-center text-slate-400 text-[12px]"
                title="Guide preview placeholder"
              >
                GUIDE PREVIEW
              </div>
            </div>
          </div>
        </section>

        {/* 3. BROWSE BY PROBLEM */}
        <section className="bg-slate-50 py-12 px-4 border-b border-slate-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold text-slate-900">
              Browse by problem
            </h2>
            <p className="text-slate-600 text-[14px] leading-relaxed mt-1 max-w-2xl">
              Pick the pain that's costing you real money right now.
              Fix dispatch chaos, slow approvals, or weak recurring revenue.
            </p>

            <div className="grid gap-6 mt-8 lg:grid-cols-3">
              {/* Scheduling & Dispatch */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:ring-2 hover:ring-[#0B5FFF] focus-within:ring-2 focus-within:ring-[#0B5FFF] transition">
                <div className="flex items-start gap-2 mb-3">
                  <RouteIcon className="w-4 h-4 text-[#0B5FFF]" />
                  <div>
                    <div className="text-[14px] font-semibold text-slate-900">
                      Scheduling &amp; Dispatch
                    </div>
                    <div className="text-[12px] text-slate-600">
                      (No chaos at 4pm)
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => openModalForGuide("Dispatch board that scales past 5 techs", "dispatch-scale")}
                      className="hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded text-left w-full"
                      data-testid="link-guide-dispatch-scale"
                    >
                      <div className="text-[14px] text-slate-700">
                        How to build a dispatch board that scales past 5 techs
                      </div>
                      <div className="text-[12px] text-[#0B5FFF] mt-1">
                        → Download setup guide
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openModalForGuide("Route optimization basics for same-day jobs", "route-basics")}
                      className="hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded text-left w-full"
                      data-testid="link-guide-route-basics"
                    >
                      <div className="text-[14px] text-slate-700">
                        Route optimization basics for same-day jobs
                      </div>
                      <div className="text-[12px] text-[#0B5FFF] mt-1">
                        → Get the checklist
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openModalForGuide("Reducing angry 'where's my tech?' calls", "reduce-calls")}
                      className="hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded text-left w-full"
                      data-testid="link-guide-reduce-calls"
                    >
                      <div className="text-[14px] text-slate-700">
                        Reducing angry "where's my tech?" calls
                      </div>
                      <div className="text-[12px] text-[#0B5FFF] mt-1">
                        → See messaging script
                      </div>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Quotes & Payment */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:ring-2 hover:ring-[#0B5FFF] focus-within:ring-2 focus-within:ring-[#0B5FFF] transition">
                <div className="flex items-start gap-2 mb-3">
                  <CreditCard className="w-4 h-4 text-[#0B5FFF]" />
                  <div>
                    <div className="text-[14px] font-semibold text-slate-900">
                      Quotes &amp; Payment
                    </div>
                    <div className="text-[12px] text-slate-600">
                      (Get 'yes' and get paid)
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => openModalForGuide("Faster approvals with e-sign estimates", "esign-approvals")}
                      className="hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded text-left w-full"
                      data-testid="link-guide-esign"
                    >
                      <div className="text-[14px] text-slate-700">
                        Faster approvals with e-sign estimates
                      </div>
                      <div className="text-[12px] text-[#0B5FFF] mt-1">
                        → Download setup guide
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openModalForGuide("Taking deposits & partial payments", "deposits")}
                      className="hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded text-left w-full"
                      data-testid="link-guide-deposits"
                    >
                      <div className="text-[14px] text-slate-700">
                        Taking deposits &amp; partial payments
                      </div>
                      <div className="text-[12px] text-[#0B5FFF] mt-1">
                        → Get the script
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openModalForGuide("Invoices that get paid same-day", "same-day-pay")}
                      className="hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded text-left w-full"
                      data-testid="link-guide-same-day-pay"
                    >
                      <div className="text-[14px] text-slate-700">
                        Invoices that get paid same-day
                      </div>
                      <div className="text-[12px] text-[#0B5FFF] mt-1">
                        → Download template
                      </div>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Recurring Revenue */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:ring-2 hover:ring-[#0B5FFF] focus-within:ring-2 focus-within:ring-[#0B5FFF] transition">
                <div className="flex items-start gap-2 mb-3">
                  <Repeat className="w-4 h-4 text-[#0B5FFF]" />
                  <div>
                    <div className="text-[14px] font-semibold text-slate-900">
                      Recurring Revenue
                    </div>
                    <div className="text-[12px] text-slate-600">
                      (Stop starting from zero every month)
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => openModalForGuide("Maintenance plans people renew", "maintenance-plans")}
                      className="hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded text-left w-full"
                      data-testid="link-guide-maintenance"
                    >
                      <div className="text-[14px] text-slate-700">
                        Maintenance plans people renew
                      </div>
                      <div className="text-[12px] text-[#0B5FFF] mt-1">
                        → Download framework
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openModalForGuide("Turn one-time calls into monthly contracts", "recurring-contracts")}
                      className="hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded text-left w-full"
                      data-testid="link-guide-recurring-contracts"
                    >
                      <div className="text-[14px] text-slate-700">
                        Turn one-time calls into monthly contracts
                      </div>
                      <div className="text-[12px] text-[#0B5FFF] mt-1">
                        → Get the playbook
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openModalForGuide("Track profitability without spreadsheets", "profitability")}
                      className="hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded text-left w-full"
                      data-testid="link-guide-profitability"
                    >
                      <div className="text-[14px] text-slate-700">
                        Track profitability without spreadsheets
                      </div>
                      <div className="text-[12px] text-[#0B5FFF] mt-1">
                        → See the template
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. POPULAR DOWNLOADS */}
        <section className="bg-white py-12 px-4 border-b border-slate-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold text-slate-900">
              Popular downloads
            </h2>
            <p className="text-slate-600 text-[14px] leading-relaxed mt-1 max-w-2xl">
              Fast wins you can drop into your business this week.
            </p>

            <div className="mt-8 divide-y divide-slate-200 border-t border-b border-slate-200 bg-white rounded-lg overflow-hidden">
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4">
                <div>
                  <div className="text-[14px] font-semibold text-slate-900">
                    Dispatch board blueprint
                  </div>
                  <div className="text-[13px] text-slate-600 leading-snug">
                    Your first 5 techs without chaos.
                  </div>
                </div>
                <button
                  onClick={() => openModalForGuide("Dispatch board blueprint", "dispatch-scale")}
                  className="bg-[#0B5FFF] text-white text-[13px] font-semibold rounded-md px-3 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none text-center whitespace-nowrap"
                  data-testid="button-download-dispatch"
                >
                  View Guide →
                </button>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4">
                <div>
                  <div className="text-[14px] font-semibold text-slate-900">
                    Same-day payment script
                  </div>
                  <div className="text-[13px] text-slate-600 leading-snug">
                    Ask for payment without sounding awkward.
                  </div>
                </div>
                <button
                  onClick={() => openModalForGuide("Same-day payment script", "deposits")}
                  className="bg-[#0B5FFF] text-white text-[13px] font-semibold rounded-md px-3 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none text-center whitespace-nowrap"
                  data-testid="button-download-payment"
                >
                  View Guide →
                </button>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4">
                <div>
                  <div className="text-[14px] font-semibold text-slate-900">
                    Recurring revenue starter kit
                  </div>
                  <div className="text-[13px] text-slate-600 leading-snug">
                    Turn emergency calls into maintenance plans.
                  </div>
                </div>
                <button
                  onClick={() => openModalForGuide("Recurring revenue starter kit", "maintenance-plans")}
                  className="bg-[#0B5FFF] text-white text-[13px] font-semibold rounded-md px-3 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none text-center whitespace-nowrap"
                  data-testid="button-download-recurring"
                >
                  View Guide →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DARK CTA */}
        <section className="bg-[#0E2A47] text-white py-12 px-4 border-b border-slate-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-semibold text-white">
              Need hands-on help?
            </h2>
            <p className="text-white/80 text-[14px] leading-relaxed mt-2 max-w-xl mx-auto">
              Works with Google Calendar and Apple Calendar. Unlimited users on paid plans.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a
                href="/signup"
                className="bg-[#0B5FFF] text-white text-[14px] font-semibold rounded-md px-4 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-cta-signup"
              >
                Get Started Free
              </a>

              <a
                href="/contact"
                className="text-white/80 text-[14px] font-semibold rounded-md px-4 py-2 ring-1 ring-white/30 hover:text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                data-testid="button-cta-sales"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </section>

        {/* 5.5 MICRO-FAQ */}
        <section className="bg-slate-50 py-12 px-4 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">
              Quick answers for service business owners
            </h2>

            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="faq-1" className="border border-slate-200 rounded-lg bg-white px-4" data-testid="accordion-faq-free">
                <AccordionTrigger className="text-[14px] font-medium text-slate-900 hover:no-underline py-4">
                  Is this actually free?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-slate-700 leading-relaxed pb-4">
                  Yes. No credit card. These are real playbooks we built for HVAC, plumbing, electrical, cleaning, and other field service teams. You can use them immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border border-slate-200 rounded-lg bg-white px-4" data-testid="accordion-faq-who">
                <AccordionTrigger className="text-[14px] font-medium text-slate-900 hover:no-underline py-4">
                  Who are these guides for?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-slate-700 leading-relaxed pb-4">
                  Owners, dispatchers, ops managers, and office admins who are tired of running their day out of text messages, spreadsheets, and "call me when you get there."
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border border-slate-200 rounded-lg bg-white px-4" data-testid="accordion-faq-paid">
                <AccordionTrigger className="text-[14px] font-medium text-slate-900 hover:no-underline py-4">
                  Will this help me get paid faster?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-slate-700 leading-relaxed pb-4">
                  Yes. We include same-day invoice templates, card-on-file language, and how to present deposits without sounding desperate.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 6. SEO FOOTER TEXT */}
        <section className="bg-white py-10 px-4 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-slate-600 text-[14px] leading-relaxed space-y-4">
            <p>
              Every field service playbook on LinkServicePro is built for HVAC companies, plumbing contractors, electrical service businesses, cleaning operations, and property maintenance pros who need real help — not generic advice. Whether you're searching for an HVAC business guide that shows you how to fill your schedule without undercutting price, a plumbing dispatch guide that scales past your first five technicians, or a recurring maintenance plan template that people actually renew, these playbooks deliver tactical clarity you can implement this week. No fluff. No consultants telling you to "work smarter, not harder." Just step-by-step field service blueprints that solve the pain you're feeling right now.
            </p>
            <p>
              From same-day payment scripts that help you ask for money without feeling awkward, to route optimization basics that cut unpaid drive time in half, to job costing frameworks that track profitability per crew without spreadsheet chaos — these guides are your fastest path to running a tighter operation. If you're tired of losing money on dispatch chaos, weak recurring revenue, or slow approvals, start with the problem that's costing you the most. Then grab the free guide and fix it today.
            </p>
          </div>
        </section>

      </div>

      <DownloadModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        guideTitle={selectedGuide.title}
        guideSlug={selectedGuide.slug}
      />
    </>
  );
}
