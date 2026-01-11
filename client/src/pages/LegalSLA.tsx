import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LegalSLA() {
  return (
    <>
      <Helmet>
        <title>Service Level Agreement (SLA) | LinkServicePro</title>
        <meta
          name="description"
          content="LinkServicePro SLA. Uptime commitments, support response targets, exclusions, service credits, and maintenance windows."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "LinkServicePro Service Level Agreement",
              "url": "https://linkservicepro.com/legal/sla"
            }
          `}
        </script>
      </Helmet>

      <main className="bg-white text-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header Block */}
        <div className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-4">
          Service Level Agreement
        </div>

        <h1 className="text-3xl font-semibold text-slate-900 leading-tight">
          Service Level Agreement (SLA)
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mt-2">
          This Service Level Agreement ("SLA") is part of the Terms of Service. It defines uptime targets, support response expectations, and what credits (if any) apply.
        </p>

        <p className="text-[12px] text-slate-500 mt-4">
          Last Updated: October 30, 2025
        </p>

        {/* Section 1 */}
        <section className="mt-10" data-testid="section-sla-definitions">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            1. Definitions
          </h2>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2">
            <li>
              <strong>"Service"</strong> means the LinkServicePro hosted platform.
            </li>
            <li>
              <strong>"Downtime"</strong> means a period where the production Service is unavailable to all customers due to an issue within our control (not including scheduled maintenance, internet provider failures between you and our edge, force majeure, or your own configuration/firewall/VPN failures).
            </li>
            <li>
              <strong>"Monthly Uptime %"</strong> = (Total minutes in calendar month – Downtime minutes) ÷ (Total minutes in calendar month) × 100.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mt-10" data-testid="section-sla-uptime">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            2. Uptime Commitment
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We target a Monthly Uptime % of <strong>99.5% or higher</strong>.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            This means we aim for no more than ~3.6 hours of unplanned outage in a 30-day month. This is a standard small-business SaaS uptime target and usually acceptable for field service operations software.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-10" data-testid="section-sla-exclusions">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            3. Exclusions
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Downtime does NOT include:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>Scheduled maintenance (see Section 4),</li>
            <li>Network or device issues on your side,</li>
            <li>Third-party service failures we do not control (e.g. carrier SMS outages, card processor outages, Google/Apple calendar outages),</li>
            <li>Force majeure events (power grid failures, large-scale internet outages, natural disasters, strikes, acts of government, war, etc.).</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mt-10" data-testid="section-sla-maintenance">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            4. Scheduled Maintenance
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We may perform routine maintenance, upgrades, security patches, and database work during low-traffic windows. We will make reasonable efforts to notify you in advance if maintenance is expected to significantly impact availability.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mt-10" data-testid="section-sla-support">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            5. Support & Response Targets
          </h2>
          
          <div className="mt-4">
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Standard support hours:
            </p>
            <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-2">
              <li>Monday–Friday, 9am–6pm Eastern Time (U.S.), excluding major U.S. holidays.</li>
            </ul>
          </div>

          <div className="mt-4">
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Contact methods:
            </p>
            <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-2">
              <li>
                Email:{" "}
                <a href="mailto:info@bimscorp.com" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded" data-testid="link-sla-email">
                  info@bimscorp.com
                </a>
              </li>
              <li>In-app support form (coming soon)</li>
            </ul>
          </div>

          <div className="mt-4">
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Target initial response times (not guaranteed):
            </p>
            <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-2">
              <li>Service Unavailable / Critical Outage: 2 business hours</li>
              <li>Major Function Broken (scheduling, dispatch, invoicing not working for many users): 4 business hours</li>
              <li>Standard Issue / "How do I…?": 1 business day</li>
            </ul>
            <p className="text-slate-600 text-sm leading-relaxed mt-3">
              These are targets, not guarantees.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mt-10" data-testid="section-sla-credits">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            6. Service Credits
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            If Monthly Uptime % for your paid plan (Starter and above) drops below 99.5%, you may request a service credit.
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li><strong>Credit amount:</strong> 5% of that month's subscription fee (excluding overages, taxes, pass-through fees) for each full 1% below 99.5%, capped at 20% total credit for that month.</li>
            <li>Credits do not apply to Free plan accounts.</li>
            <li>Credits are applied to future invoices; they are not cash refunds.</li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            To receive a credit, you must email{" "}
            <a href="mailto:info@bimscorp.com" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded">
              info@bimscorp.com
            </a>{" "}
            within 15 days after the month ends, include "SLA Credit Request" in the subject, and provide timestamps of the outage you observed.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3 font-semibold">
            Credits are your sole and exclusive remedy for SLA-related availability issues.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mt-10" data-testid="section-sla-changes">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            7. Changes
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We may update this SLA to reflect new infrastructure, support hours, or availability targets. We will post updated terms in-app or on our site. Continued use after an update means you accept the revised SLA.
          </p>
        </section>

        {/* CTA Band */}
        <div className="bg-[#0E2A47] text-white rounded-xl mt-16 p-6 sm:p-8 text-center ring-1 ring-slate-800" data-testid="section-sla-cta">
          <h2 className="text-white font-semibold text-2xl sm:text-3xl">
            Ready to start?
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-3">
            Seat-free pricing. Unlimited users on paid plans. No per-tech seat fees.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              className="bg-[#0B5FFF] text-white font-semibold rounded-md px-4 py-2 text-sm shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
              data-testid="button-sla-start-free"
            >
              <Link to="/signup">Start Free</Link>
            </Button>

            <Link
              to="/pricing"
              className="border border-white/30 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none text-center inline-flex items-center justify-center min-h-10"
              data-testid="link-sla-pricing"
            >
              View Pricing
            </Link>
          </div>

          <p className="text-[11px] text-white/60 leading-snug mt-4">
            By starting, you agree to our{" "}
            <Link
              to="/legal/terms"
              className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              aria-label="Read our Terms of Service"
              data-testid="link-sla-tos"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/legal/privacy"
              className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              aria-label="Read our Privacy Policy"
              data-testid="link-sla-privacy"
            >
              Privacy Policy
            </Link>
            , and you consent to receive onboarding and service-related messages (SMS/email). Standard rates may apply.
          </p>
        </div>
      </main>
    </>
  );
}
