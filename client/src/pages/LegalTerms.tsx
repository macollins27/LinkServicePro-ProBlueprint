import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LegalTerms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | LinkServicePro</title>
        <meta
          name="description"
          content="Legal terms for using LinkServicePro. Subscription terms, acceptable use, billing, liability limits, and dispute handling."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "LinkServicePro Terms of Service",
              "url": "https://linkservicepro.com/legal/terms"
            }
          `}
        </script>
      </Helmet>

      <main className="bg-white text-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header Block */}
        <div className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-4">
          Terms of Service
        </div>

        <h1 className="text-3xl font-semibold text-slate-900 leading-tight">
          Terms of Service
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mt-2">
          These Terms of Service form a binding agreement between you and LinkServicePro. Please read them carefully.
        </p>

        <p className="text-[12px] text-slate-500 mt-4">
          Last Updated: October 30, 2025 • Company: LinkServicePro • 2280 Union Blvd, Bay Shore, NY 11706 • info@bimscorp.com
        </p>

        {/* Section 1 */}
        <section className="mt-10" data-testid="section-terms-acceptance">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            1. Acceptance of These Terms
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            By creating an account, starting a free trial, or using LinkServicePro (the "Service"), you agree to these Terms of Service (the "Terms"). If you are using the Service on behalf of a company or other legal entity, you represent that you have authority to bind that entity and "you" refers to that entity.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            If you do not agree to these Terms, do not access or use the Service.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-10" data-testid="section-terms-service">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            2. The Service
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            LinkServicePro is a hosted, subscription-based field service management platform. We provide scheduling, dispatch, work orders, customer communication, job costing, recurring service plans, reporting, and related workflow tools. You access the Service via browser or mobile.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            We may update, enhance, or modify features at any time. We may label certain features "beta," "preview," or "coming soon." Those features are provided "as is," may change or end, and are not guaranteed.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-10" data-testid="section-terms-license">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            3. License, Not Sale
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We are licensing you access; we are not selling you the software.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            Subject to these Terms and timely payment, we grant you a limited, non-exclusive, non-transferable, revocable right to access and use the Service for your internal business operations. You may not resell, sublicense, or provide the Service to third parties as a hosted service without our written consent.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            All intellectual property in the Service (software, UI, design systems, branding, documentation, etc.) remains our property or our licensors' property.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mt-10" data-testid="section-terms-account">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            4. Your Account
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            You are responsible for:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>Maintaining accurate account info (company name, billing email, phone).</li>
            <li>Controlling access to your login credentials.</li>
            <li>All actions under your account, including actions by employees, contractors, admins, or anyone you allow in.</li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            If you believe someone has accessed your account without permission, notify us immediately at{" "}
            <a href="mailto:info@bimscorp.com" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded" data-testid="link-terms-email">
              info@bimscorp.com
            </a>.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mt-10" data-testid="section-terms-acceptable-use">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            5. Acceptable Use
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            You agree you will NOT:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>Violate any law while using the Service.</li>
            <li>Harass, threaten, or abuse staff, customers, or other users through in-app messaging.</li>
            <li>Upload malicious code, attempt to probe, scan, or test security or load, or try to bypass technical controls.</li>
            <li>Misrepresent your identity or your services to your own customers using our messaging tools.</li>
            <li>Use the Service to send spam, illegal SMS, or unlawful robocalls.</li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            We may suspend or terminate access if we reasonably believe you are violating these Terms or creating security, legal, or reputational risk.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mt-10" data-testid="section-terms-payment">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            6. Payment, Billing, Taxes
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-semibold">
            6.1 Plan structure
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-2">
            You subscribe to a plan (Free, Starter, Essential, Premium, Platinum) that includes a monthly job cap and features. Paid plans include unlimited users. Overages are billed per job above plan cap. You may also pay pass-through costs for SMS messages and card processing. You agree to pay any applicable taxes (for example, a 4% tax/VAT line item if required).
          </p>

          <p className="text-slate-600 text-sm leading-relaxed mt-4 font-semibold">
            6.2 Billing cycle
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-2">
            Unless otherwise stated:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>Monthly plans bill in advance each month.</li>
            <li>Annual plans bill in advance for 12 months and include an annual discount (20% off the equivalent monthly price).</li>
            <li>Overage charges, add-ons, usage-based fees, and taxes are billed in arrears.</li>
          </ul>

          <p className="text-slate-600 text-sm leading-relaxed mt-4 font-semibold">
            6.3 Payment method
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-2">
            You authorize us (and our payment processor/merchant of record, e.g. Stripe) to automatically charge your card, bank account, or other payment method on file for all fees due. You agree to keep a valid payment method on file.
          </p>

          <p className="text-slate-600 text-sm leading-relaxed mt-4 font-semibold">
            6.4 Late payment
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-2">
            If we cannot collect payment, we may:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>Suspend access until payment is made;</li>
            <li>Charge interest on overdue amounts to the maximum allowed by law;</li>
            <li>Recover fees and costs of collection.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mt-10" data-testid="section-terms-plan-changes">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            7. Plan Changes, Overage, Downgrades
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            You can upgrade your plan at any time. Upgrades take effect immediately, and we bill/charge the prorated difference.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            You can downgrade at the next renewal (monthly or annual). Downgrading may immediately limit or disable certain features (for example, advanced reporting, GPS vehicle tracking limits, advanced role-based permissions, maintenance plan automation).
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            If you exceed your plan's job cap, overage charges automatically apply instead of hard-cutting access. This keeps your operation running but bills you for above-cap usage.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mt-10" data-testid="section-terms-termination">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            8. Term and Termination
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            These Terms start when you first access the Service and continue until terminated.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            You may terminate at the end of your current billing period by following in-app cancellation instructions or contacting{" "}
            <a href="mailto:info@bimscorp.com" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded">
              info@bimscorp.com
            </a>. For annual plans, you are committed through the paid annual term, subject to the Refund Policy.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            We may terminate or suspend your access immediately if:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>You materially breach these Terms and fail to cure.</li>
            <li>You fail to pay undisputed fees.</li>
            <li>We reasonably believe continued access would violate law or create security risk.</li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            After termination, we may (but are not obligated to) provide you with a limited export window to download your data (work orders, invoices, etc.) in a reasonable format.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mt-10" data-testid="section-terms-sla">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            9. Service Availability / SLA
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We aim to provide reliable, production-grade uptime and timely support. Our formal uptime commitments, response targets, and maintenance windows are described in our{" "}
            <Link
              to="/legal/sla"
              className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              data-testid="link-terms-sla"
            >
              Service Level Agreement (SLA)
            </Link>. The SLA is incorporated into these Terms by reference.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mt-10" data-testid="section-terms-privacy">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            10. Privacy and Data Protection
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our{" "}
            <Link
              to="/legal/privacy"
              className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              data-testid="link-terms-privacy"
            >
              Privacy Policy
            </Link>{" "}
            describes:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>What personal data we collect (like contact details, messages, location/GPS data tied to dispatch, payment info),</li>
            <li>How we use it (to provide and improve the Service),</li>
            <li>How long we keep it,</li>
            <li>Your rights (access, correction, deletion where legally required).</li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            By using the Service, you also agree to that Privacy Policy.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mt-10" data-testid="section-terms-confidentiality">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            11. Confidentiality
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Certain information you upload (customer lists, job notes, pricing, photos, task assignments, etc.) is confidential to you. We will not disclose your confidential info except:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>To operate and support the Service,</li>
            <li>To comply with law or valid legal process,</li>
            <li>To enforce these Terms or protect our rights,</li>
            <li>With your consent.</li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            Aggregated, anonymized operational metrics (for example, "average arrival-to-completion time across HVAC companies in Florida") are ours to create and use, provided they cannot reasonably identify you or your customers.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mt-10" data-testid="section-terms-warranties">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            12. Disclaimer of Warranties
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-semibold uppercase">
            EXCEPT FOR EXPRESS OBLIGATIONS IN THE SLA, THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE."
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3 font-semibold uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            We do not guarantee:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>That the Service will be uninterrupted, error-free, or 100% secure,</li>
            <li>That it will meet your specific regulatory obligations,</li>
            <li>That your customers will pay you, leave reviews, or comply with appointments.</li>
          </ul>
        </section>

        {/* Section 13 */}
        <section className="mt-10" data-testid="section-terms-liability">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            13. Limitation of Liability
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-semibold uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li className="uppercase font-semibold">
              WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES (INCLUDING LOST PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION), EVEN IF ADVISED SUCH DAMAGES WERE POSSIBLE.
            </li>
            <li className="uppercase font-semibold">
              OUR TOTAL LIABILITY UNDER THESE TERMS FOR ALL CLAIMS IN THE AGGREGATE WILL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM. If you are on the Free plan, our total liability is capped at $100 USD.
            </li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            Some jurisdictions do not allow certain limitations — in those locations, we limit our liability to the fullest extent allowed by law.
          </p>
        </section>

        {/* Section 14 */}
        <section className="mt-10" data-testid="section-terms-indemnification">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            14. Indemnification
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            You agree to defend, indemnify, and hold us harmless from any claim, loss, liability, and expense (including attorneys' fees) arising out of:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>Your misuse of the Service,</li>
            <li>Your violation of law,</li>
            <li>Your misuse of personal data,</li>
            <li>Your disputes with your customers, employees, subs, vendors, or insurers.</li>
          </ul>
        </section>

        {/* Section 15 */}
        <section className="mt-10" data-testid="section-terms-governing-law">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            15. Governing Law; Disputes
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            These Terms are governed by the laws of the State of New York, excluding conflict-of-law rules.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            Any dispute will be resolved in the state or federal courts located in Suffolk County, New York, and you and we both consent to personal jurisdiction there.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            You agree that you will not bring any class, collective, or representative action against us; disputes must be brought individually.
          </p>
        </section>

        {/* Section 16 */}
        <section className="mt-10" data-testid="section-terms-changes">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            16. Changes to These Terms
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We may update these Terms from time to time. If we make material changes, we will notify you (for example via dashboard notice, email, or in-app message). Continued use after the effective date means you accept the updated Terms.
          </p>
        </section>

        {/* CTA Band */}
        <div className="bg-[#0E2A47] text-white rounded-xl mt-16 p-6 sm:p-8 text-center ring-1 ring-slate-800" data-testid="section-terms-cta">
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
              data-testid="button-terms-start-free"
            >
              <Link to="/signup">Start Free</Link>
            </Button>

            <Link
              to="/pricing"
              className="border border-white/30 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none text-center inline-flex items-center justify-center min-h-10"
              data-testid="link-terms-pricing"
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
              data-testid="link-terms-tos"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/legal/privacy"
              className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              aria-label="Read our Privacy Policy"
              data-testid="link-terms-privacy-footer"
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
