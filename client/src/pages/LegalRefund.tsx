import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LegalRefund() {
  return (
    <>
      <Helmet>
        <title>Refund Policy | LinkServicePro</title>
        <meta
          name="description"
          content="LinkServicePro refund policy. Monthly/annual billing, overage charges, SLA credits, and how to request billing review."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "LinkServicePro Refund Policy",
              "url": "https://linkservicepro.com/legal/refund"
            }
          `}
        </script>
      </Helmet>

      <main className="bg-white text-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header Block */}
        <div className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-4">
          Refund Policy
        </div>

        <h1 className="text-3xl font-semibold text-slate-900 leading-tight">
          Refund Policy
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mt-2">
          This Refund Policy applies to all LinkServicePro subscriptions, add-ons, overages, and usage-based fees.
        </p>

        <p className="text-[12px] text-slate-500 mt-4">
          Last Updated: October 30, 2025
        </p>

        {/* Section 1 */}
        <section className="mt-10" data-testid="section-refund-free">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            1. Free Plan
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            The Free plan costs $0/month, limited to 1 user and a capped number of jobs. You can stop using it at any time.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-10" data-testid="section-refund-monthly">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            2. Monthly Subscriptions
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Monthly subscriptions are billed in advance and are <strong>non-refundable</strong> once the billing period begins.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            If you cancel during the month, you keep access through the end of the paid billing period, and the subscription will not renew next month. We do not pro-rate or partially refund unused time in the current month.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            This is standard for SaaS billed monthly in advance.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-10" data-testid="section-refund-annual">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            3. Annual Subscriptions
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Annual subscriptions are billed up front at a discounted rate (20% off monthly equivalent). Annual fees are <strong>non-refundable</strong> once charged, except as described under "Service Credits / SLA Exception" below.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            If you downgrade or cancel mid-term, you will retain access at the downgraded level (or lose features of higher tiers) for the remainder of the paid annual term. The downgrade will apply for the next renewal.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            We do not offer partial refunds for unused months of an annual plan because the discount assumes a one-year commitment.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mt-10" data-testid="section-refund-overage">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            4. Add-ons, Overage, Usage-Based Fees
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Overage charges (extra jobs beyond your plan cap), outbound SMS fees, card processing pass-through, and similar usage-based charges are <strong>non-refundable</strong> once incurred.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            These reflect real usage, carrier/processor costs, and taxes that are already paid out or accrued on your behalf.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mt-10" data-testid="section-refund-taxes">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            5. Taxes and Regulatory Fees
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Any required taxes, surcharges, regulatory fees, or VAT-style charges (for example, a 4% line item if applicable) are passed through and are <strong>non-refundable</strong>, unless we collected them in error.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mt-10" data-testid="section-refund-sla">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            6. SLA Exception (Paid Plans)
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            If you are on a paid plan (Starter or higher) and we fail to meet our SLA uptime target for a given calendar month, you may request a service credit as described in the{" "}
            <Link to="/legal/sla" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded" data-testid="link-refund-sla">
              SLA
            </Link>
            . Credits apply to future invoices only and are not cash refunds. This SLA credit is your exclusive remedy for downtime, availability, or support delays.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mt-10" data-testid="section-refund-chargebacks">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            7. Chargebacks / Disputes
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            You agree to contact us first at{" "}
            <a href="mailto:info@bimscorp.com" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded" data-testid="link-refund-email">
              info@bimscorp.com
            </a>{" "}
            to resolve any billing concern. If you dispute a charge with your bank or card issuer without giving us a reasonable opportunity to address it, we may suspend or terminate access to the account linked to that payment method.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mt-10" data-testid="section-refund-review">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            8. How to Request Review
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            If you believe you qualify for a credit or there was a billing error:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>
              Email{" "}
              <a href="mailto:info@bimscorp.com" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded">
                info@bimscorp.com
              </a>
            </li>
            <li>Subject line: "Billing Review Request"</li>
            <li>Include company name, plan, invoice ID, and explanation.</li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            We'll investigate in good faith. If we determine a correction is appropriate, we'll apply a credit to the next invoice or issue an adjusted invoice.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mt-10" data-testid="section-refund-changes">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            9. Changes
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We may update this Refund Policy from time to time (for example, if plan structures, tax rules, or SLA terms change). We will post the updated policy with a new "Last Updated" date. Continued use after an update means you accept the revised Refund Policy.
          </p>
        </section>

        {/* CTA Band */}
        <div className="bg-[#0E2A47] text-white rounded-xl mt-16 p-6 sm:p-8 text-center ring-1 ring-slate-800" data-testid="section-refund-cta">
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
              data-testid="button-refund-start-free"
            >
              <Link to="/signup">Start Free</Link>
            </Button>

            <Link
              to="/pricing"
              className="border border-white/30 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none text-center inline-flex items-center justify-center min-h-10"
              data-testid="link-refund-pricing"
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
              data-testid="link-refund-tos"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/legal/privacy"
              className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              aria-label="Read our Privacy Policy"
              data-testid="link-refund-privacy"
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
