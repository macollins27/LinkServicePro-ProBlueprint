import { useState } from "react";
import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";
import immediateValueImage from "@assets/generated_images/Service_owner_by_branded_van_4f4c9b4b.png";

export default function HomeResults30(): JSX.Element {
  const [technicians, setTechnicians] = useState(3);
  const [jobsPerTechPerWeek, setJobsPerTechPerWeek] = useState(20);
  const [laborRate] = useState(35);

  // Fixed assumption: 10 minutes saved per job
  const minutesPerJob = 10;
  const weeklyMinutes = technicians * jobsPerTechPerWeek * minutesPerJob;
  const monthlyHours = Math.round((weeklyMinutes * 4.33) / 60);
  const monthlySavings = Math.round(monthlyHours * laborRate);

  const handleTechniciansChange = (value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 1 && num <= 200) {
      setTechnicians(num);
    }
  };

  const handleJobsChange = (value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 1 && num <= 100) {
      setJobsPerTechPerWeek(num);
    }
  };

  return (
    <section
      className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14"
      role="region"
      aria-labelledby="home-results-h2"
    >
      {/* Header */}
      <header className="mb-6">
        <h2
          id="home-results-h2"
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2"
        >
          Results you can feel in 30 days.
        </h2>
        <p className="text-lg text-slate-700 whitespace-nowrap">
          Save time, win more jobs, and get paid sooner — without changing how your team works in the field.
        </p>
      </header>

      {/* Image */}
      <figure className="mb-6">
        <img
          src={immediateValueImage}
          alt="Two technicians standing by a service van before heading to jobs."
          className="w-full h-48 sm:h-64 lg:h-80 object-cover"
          loading="eager"
        />
      </figure>

      {/* Three Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-3 items-stretch mb-4">
        {/* LEFT CARD: Quick wins */}
        <article className="rounded-none ring-1 ring-slate-200 shadow elev-2 p-4 sm:p-5 grid grid-rows-[auto_1fr_auto] h-full">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Quick wins</h3>
          <div className="grid grid-cols-1 gap-3" data-testid="quick-wins-grid">
            <div>
              <div className="font-semibold text-slate-900">Save 6–10 hours per week</div>
              <div className="text-slate-700 text-sm">Drag-and-drop scheduling with automated reminders.</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Increase quote win rate by 22%</div>
              <div className="text-slate-700 text-sm">E-sign quotes that convert into work orders.</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Cut time to payment by 3 days</div>
              <div className="text-slate-700 text-sm">Deposits, partials, and batch invoicing with accounting sync.</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Same-day invoices</div>
              <div className="text-slate-700 text-sm">Finish the job and send the bill before you leave.</div>
            </div>
          </div>
          <div></div>
        </article>

        {/* MIDDLE CARD: Savings estimator */}
        <article className="rounded-none ring-1 ring-slate-200 shadow elev-2 p-4 sm:p-5 grid grid-rows-[auto_1fr_auto] h-full">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Savings estimator</h3>
          <div className="space-y-2" data-testid="estimator-inline">
            {/* Inputs - compact inline */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label
                  htmlFor="technicians-input"
                  className="block text-xs font-medium text-slate-700 mb-1"
                >
                  Technicians
                </label>
                <input
                  id="technicians-input"
                  type="number"
                  min="1"
                  max="200"
                  value={technicians}
                  onChange={(e) => handleTechniciansChange(e.target.value)}
                  className="w-full px-2 py-1.5 text-sm border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2 focus:ring-offset-white"
                  aria-invalid={technicians < 1 || technicians > 200}
                />
              </div>

              <div>
                <label
                  htmlFor="jobs-input"
                  className="block text-xs font-medium text-slate-700 mb-1"
                >
                  Jobs / tech / week
                </label>
                <input
                  id="jobs-input"
                  type="number"
                  min="1"
                  max="100"
                  value={jobsPerTechPerWeek}
                  onChange={(e) => handleJobsChange(e.target.value)}
                  className="w-full px-2 py-1.5 text-sm border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2 focus:ring-offset-white"
                  aria-invalid={jobsPerTechPerWeek < 1 || jobsPerTechPerWeek > 100}
                />
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-tight">
              We assume 10 minutes saved per job on average. Adjust technicians or jobs.
            </p>

            {/* Results - compact inline */}
            <div className="space-y-1 pt-2 border-t border-slate-200">
              <p className="text-sm leading-tight">
                <strong className="text-slate-900">Hours saved per month:</strong>{" "}
                <span data-testid="estimator-hours">{monthlyHours} hours</span>
              </p>
              <p className="text-sm leading-tight">
                <strong className="text-slate-900">Estimated monthly savings:</strong>{" "}
                <span className="text-[#0FB36F] font-bold" data-testid="estimator-savings">
                  ${monthlySavings.toLocaleString()} per month
                </span>
              </p>
              <p className="text-xs text-slate-500 leading-tight">
                Uses a blended labor rate of $35 per hour.
              </p>
            </div>

            {/* Status region for screen readers */}
            <div
              id="estimator-status"
              role="status"
              aria-live="polite"
              className="sr-only"
            >
              Updated: {monthlyHours} hours saved, ${monthlySavings.toLocaleString()} per month
            </div>
          </div>
          <div></div>
        </article>

        {/* RIGHT CARD: Proven in the field */}
        <article className="rounded-none ring-1 ring-slate-200 shadow elev-2 p-4 sm:p-5 grid grid-rows-[auto_1fr_auto] h-full">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Proven in the field</h3>
          <div className="space-y-3">
            <blockquote className="text-slate-700 text-sm">
              "Scheduling takes under five minutes and invoices go out the same day. Customers love the portal."
            </blockquote>
            <cite className="text-sm text-slate-900 not-italic">
              — Maya Lopez, Owner, BrightPath Cleaning
            </cite>

            {/* Proof grid 2×2 */}
            <div className="grid grid-cols-2 gap-2 pt-2" data-testid="proof-grid">
              <div className="text-sm">
                <div className="text-amber-500" aria-hidden="true">★★★★★</div>
                <div className="text-slate-900 font-semibold">5.0/5 App Store</div>
              </div>
              <div className="text-sm">
                <div className="text-amber-500" aria-hidden="true">★★★★★</div>
                <div className="text-slate-900 font-semibold">5.0/5 Google</div>
              </div>
              <div className="text-sm">
                <div className="text-slate-900 font-semibold">SOC 2 Security</div>
              </div>
              <div className="text-sm">
                <div className="text-slate-900 font-semibold">QuickBooks / Xero</div>
              </div>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs">
                No long-term contract
              </span>
              <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs">
                iOS & Android
              </span>
            </div>
          </div>
          <div></div>
        </article>
      </div>

      {/* CTA Row */}
      <ButtonsRow className="mt-4">
        <StartFreeButton context="light" dataTestId="cta-start-free" />
        <ViewPricingButton context="light" />
      </ButtonsRow>
    </section>
  );
}
