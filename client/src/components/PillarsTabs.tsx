import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CalendarDays, ClipboardCheck, FileSignature, CreditCard } from "lucide-react";
import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

export default function PillarsTabs() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 bg-white">
      <header className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Four Ways to Grow</h2>
        <p className="text-slate-700">Scheduling, work orders, estimates, and invoicing—built for crews in the field.</p>
      </header>

      <Tabs defaultValue="scheduling" className="max-w-6xl">
        {/* TabsList sits ABOVE panels and has higher z-index */}
        <TabsList
          role="tablist"
          aria-label="Product areas"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-transparent p-0 relative z-10"
        >
          <TabCard value="scheduling" label="Scheduling" sub="Drag. Drop. Done.">
            <CalendarDays className="h-12 w-12 text-[#0B5FFF]" strokeWidth={2.25} aria-hidden="true" />
          </TabCard>
          <TabCard value="workorders" label="Work Orders" sub="Jobs with checklists">
            <ClipboardCheck className="h-12 w-12 text-[#0B5FFF]" strokeWidth={2.25} aria-hidden="true" />
          </TabCard>
          <TabCard value="estimates" label="Estimates + E-Sign" sub="Approve in one tap">
            <FileSignature className="h-12 w-12 text-[#0B5FFF]" strokeWidth={2.25} aria-hidden="true" />
          </TabCard>
          <TabCard value="invoicing" label="Invoicing + Payments" sub="Get paid faster">
            <CreditCard className="h-12 w-12 text-[#0B5FFF]" strokeWidth={2.25} aria-hidden="true" />
          </TabCard>
        </TabsList>

        {/* Panels below, no overlap */}
        <div className="mt-6 relative z-0">
          <TwoCardPanel value="scheduling"
            title="Scheduling"
            bullets={[
              "Drag to assign; conflicts auto-checked.",
              "Live map and routes cut drive time.",
              "Recurring jobs handled on autopilot.",
              "Instant ETA texts to customers."
            ]}
            links={[
              { href: "/features/drag-and-drop-scheduling", text: "Drag-and-Drop Scheduling" },
              { href: "/features/dispatch-board", text: "Dispatch Board" },
              { href: "/features/route-optimization", text: "Route Optimization" },
              { href: "/features/automated-reminders", text: "Automated Reminders" },
            ]}
            outcome="Stop double-booking and shave miles every day."
            chips={["No double-booking", "Crew balance", "iOS & Android", "2-way SMS"]}
          />
          <TwoCardPanel value="workorders"
            title="Work Orders"
            bullets={[
              "Details, photos, and checklists in one place.",
              "Track time, parts, and signatures on site.",
              "Multi-work-order projects stay organized.",
              "Works offline; syncs when online."
            ]}
            links={[
              { href: "/features/work-orders", text: "Work Orders" },
              { href: "/features/project-tracking", text: "Projects" },
              { href: "/features/customer-portal", text: "Customer Portal" },
              { href: "/features/two-way-messaging", text: "2-Way Messaging" },
            ]}
            outcome="Clean handoffs and more first-time fixes."
            chips={["Checklists", "Photos", "Parts", "Roles"]}
          />
          <TwoCardPanel value="estimates"
            title="Estimates + E-Sign"
            bullets={[
              "Send professional quotes from phone or desktop.",
              "E-sign approvals convert to work orders.",
              "Price books and options increase ticket size.",
              "Automatic follow-ups until you get a yes."
            ]}
            links={[
              { href: "/features/quote-builder", text: "Quote Builder" },
              { href: "/features/esign", text: "E-Sign" },
              { href: "/features/2-way-messaging", text: "2-Way Messaging" },
              { href: "/features/review-requests", text: "Review Requests" },
            ]}
            outcome="Win rate rises and sales cycle shrinks."
            chips={["Templates", "Options", "E-sign", "Reminders"]}
          />
          <TwoCardPanel value="invoicing"
            title="Invoicing + Payments"
            bullets={[
              "Invoice in the field; take deposits and partials.",
              "Batch invoices before crews clock out.",
              "Cards and ACH accepted with receipts.",
              "Sync to QuickBooks or Xero cleanly."
            ]}
            links={[
              { href: "/features/invoicing", text: "Invoicing" },
              { href: "/features/payments", text: "Payments" },
              { href: "/features/accounting-sync", text: "QuickBooks/Xero Sync" },
              { href: "/features/job-costing", text: "Job Costing" },
            ]}
            outcome="Days-to-paid drop; cash flow steadies."
            chips={["Batch billing", "Deposits", "ACH/Cards", "AR reminders"]}
          />
        </div>

        <div className="mt-6">
          <ButtonsRow>
            <StartFreeButton context="light" />
            <ViewPricingButton context="light" />
          </ButtonsRow>
        </div>
      </Tabs>
    </section>
  );
}

/* --- helper components --- */

function TabCard({
  value, label, sub, children,
}: { value: string; label: string; sub: string; children: React.ReactNode }) {
  return (
    <TabsTrigger
      value={value}
      className="group rounded-none ring-1 ring-slate-200 bg-white p-4 elev-2 text-left
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2
                 data-[state=active]:ring-2 data-[state=active]:ring-[#0B5FFF] data-[state=active]:shadow"
    >
      <div className="mb-2 flex justify-center">{children}</div>
      <div className="text-sm font-extrabold text-slate-900">{label}</div>
      <div className="text-xs text-slate-600">{sub}</div>
    </TabsTrigger>
  );
}

function TwoCardPanel({
  value, title, bullets, links, outcome, chips,
}: {
  value: string;
  title: string;
  bullets: string[];
  links: { href: string; text: string }[];
  outcome: string;
  chips: string[];
}) {
  return (
    <TabsContent value={value} className="mt-0">
      <section className="grid gap-4 lg:grid-cols-2">
        <article className="ring-1 ring-slate-200 bg-white elev-2 p-5">
          <h3 className="text-xl font-extrabold text-slate-900 mb-2">{title}</h3>
          <ul className="grid gap-2 list-disc pl-5 text-slate-800">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </article>
        <aside className="ring-1 ring-slate-200 bg-white elev-2 p-5 grid gap-3 content-start">
          <h4 className="font-semibold text-slate-900">Key features</h4>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[#0B5FFF] font-semibold">
            {links.map((l) => (
              <Link key={l.href} to={l.href} className="link-underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2">
                {l.text}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-slate-600">Outcome: {outcome}</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-800">
            {chips.map((c, i) => (
              <div key={i} className="px-2 py-1 ring-1 ring-slate-200">{c}</div>
            ))}
          </div>
        </aside>
      </section>
    </TabsContent>
  );
}
