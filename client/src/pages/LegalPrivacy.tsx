import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LegalPrivacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | LinkServicePro</title>
        <meta
          name="description"
          content="Privacy practices for LinkServicePro. Data collection, usage, security, retention, and your rights under GDPR/CCPA."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "LinkServicePro Privacy Policy",
              "url": "https://linkservicepro.com/legal/privacy"
            }
          `}
        </script>
      </Helmet>

      <main className="bg-white text-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header Block */}
        <div className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-2 py-[3px] mb-4">
          Privacy Policy
        </div>

        <h1 className="text-3xl font-semibold text-slate-900 leading-tight">
          Privacy Policy
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mt-2">
          We take privacy seriously. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights.
        </p>

        <p className="text-[12px] text-slate-500 mt-4">
          Last Updated: October 30, 2025 • Company: LinkServicePro • 2280 Union Blvd, Bay Shore, NY 11706 • info@bimscorp.com
        </p>

        <p className="text-slate-600 text-sm leading-relaxed mt-6">
          Using LinkServicePro means you agree to this Privacy Policy.
        </p>

        {/* Section 1 */}
        <section className="mt-10" data-testid="section-privacy-what-covers">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            1. What This Covers
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            This Policy covers:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>Our website(s), including linkservicepro.com and related marketing pages.</li>
            <li>Our web and mobile applications (the "Service").</li>
            <li>Our communications with you (email, SMS, in-app messaging).</li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            This Policy does not cover content you send directly to your own customers outside the Service.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-10" data-testid="section-privacy-info-collect">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            2. Information We Collect
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We may collect:
          </p>

          <div className="mt-4">
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Account & business info
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              Name, email, phone number, company name, company address, service category/industry, number of jobs, crew size.
            </p>
          </div>

          <div className="mt-4">
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Usage & activity
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              Logins, pages viewed, buttons clicked, features used, device info, browser type, approximate location. This is typical SaaS telemetry for improving performance.
            </p>
          </div>

          <div className="mt-4">
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Operational data you enter
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              Customer names, addresses, phone numbers, work orders, photos taken on site, job notes, invoices, quotes, signatures, recurring service schedules, task assignments, GPS/dispatch data.
            </p>
          </div>

          <div className="mt-4">
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Billing & payment data
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              Billing contact, subscription plan, transactions, last4 of card, and related Stripe/processor info. We do not store full card numbers; payment processors handle that under their PCI requirements.
            </p>
          </div>

          <div className="mt-4">
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Communications
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              Messages sent via the Service (for example, "tech on the way" text, job reminders, internal crew chat). We store and transmit these so you and your team have a record.
            </p>
          </div>

          <div className="mt-4">
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Cookies and tracking tech
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              We use cookies / similar tech for login sessions, analytics, fraud/security monitoring, and remembering preferences. Many SaaS privacy policies describe cookies because cookies are considered "online identifiers" under laws like GDPR.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-10" data-testid="section-privacy-how-use">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            3. How We Use Information
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We process your data to:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>Provide and maintain the Service.</li>
            <li>Schedule jobs, assign work, dispatch technicians.</li>
            <li>Send automated appointment reminders, "tech en route" alerts, invoices, review requests, and other customer-facing communications on your behalf.</li>
            <li>Process payments and calculate plan usage, overage, and taxes.</li>
            <li>Show dashboards, job costing reports, maintenance plan schedules, task completion status, payroll/wage tracking, and profitability.</li>
            <li>Improve, troubleshoot, and secure the platform.</li>
            <li>Communicate with you about updates, service notices, and support.</li>
          </ul>

          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            We do both:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li><strong>Service/operational messages</strong> (required): system alerts, invoices, task assignments. You cannot opt out of these without leaving the platform.</li>
            <li><strong>Marketing messages</strong> (optional): product tips, new features, promotions. You can opt out.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mt-10" data-testid="section-privacy-legal-bases">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            4. Legal Bases (GDPR-style)
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            If GDPR or similar laws apply to you or your customer:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>We process data to perform the contract (deliver the Service).</li>
            <li>We process certain data for our legitimate interests (fraud prevention, product improvement).</li>
            <li>We process certain data to comply with law (tax records, invoices).</li>
            <li>We rely on consent where required (marketing emails/SMS, certain cookies).</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mt-10" data-testid="section-privacy-sharing">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            5. How We Share Information
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We may share data with:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li><strong>Service providers / subprocessors</strong> who help us run LinkServicePro (hosting, analytics, payment processing, SMS delivery). These providers are under contractual obligations to protect data.</li>
            <li><strong>Authorities / legal requests</strong> if required by law, subpoena, court order, or to protect rights, safety, fraud, or security.</li>
            <li><strong>Business transfers</strong> if we merge, acquire, sell assets, or undergo financing; your data may be part of the transferred assets.</li>
          </ul>

          <p className="text-slate-600 text-sm leading-relaxed mt-4 font-semibold">
            We do not sell your personal information for money.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-2">
            We do not share your customers' job history, addresses, or invoices with other LinkServicePro customers.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-2">
            We may compile de-identified, aggregated stats (for example, "average arrival window in HVAC is 42 minutes") and use or publish those, but they will not identify you or your customers.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mt-10" data-testid="section-privacy-retention">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            6. Data Retention
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We store data as long as:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>Your account is active,</li>
            <li>We need it to provide the Service,</li>
            <li>We are required by law to keep it (e.g. tax records, invoices).</li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            After account closure, we may retain limited records (billing, invoices, audit logs) for legal/accounting reasons.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            You can request deletion of specific personal data that's not legally required to keep. We will honor within a reasonable time unless retention is required (for example, for fraud prevention or legal defense).
          </p>
        </section>

        {/* Section 7 */}
        <section className="mt-10" data-testid="section-privacy-security">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            7. Security
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We use reasonable administrative, technical, and physical safeguards designed to protect personal data. That includes access controls, encrypted transport (HTTPS/TLS), and separation of production systems.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            No system is perfectly secure. You are responsible for:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>Keeping login credentials secret,</li>
            <li>Limiting internal access to trusted staff,</li>
            <li>Using role/permission controls we provide.</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mt-10" data-testid="section-privacy-rights">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            8. Your Rights
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Depending on where you live (for example, EU/EEA under GDPR, certain U.S. states with privacy laws like CCPA equivalents):
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>You may request access to the personal data we hold about you.</li>
            <li>You may request correction/update if it's inaccurate.</li>
            <li>You may request deletion/erasure of certain data.</li>
            <li>You may object to certain processing or request we limit it.</li>
            <li>You may request a copy of your data in a portable format.</li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            To exercise these rights, email{" "}
            <a href="mailto:info@bimscorp.com" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded" data-testid="link-privacy-email">
              info@bimscorp.com
            </a>{" "}
            with the subject "Privacy Request." We may need to verify your identity (to prevent unauthorized access to another user's account).
          </p>
        </section>

        {/* Section 9 */}
        <section className="mt-10" data-testid="section-privacy-children">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            9. Children
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our Service is not directed to children under 13, and we do not knowingly collect personal data from children under 13. If you believe a child under 13 has provided us personal data, contact{" "}
            <a href="mailto:info@bimscorp.com" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded">
              info@bimscorp.com
            </a>{" "}
            and we will delete it where required by law.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mt-10" data-testid="section-privacy-international">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            10. International Transfers
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We are U.S.-based. If you access the Service from outside the U.S., you understand that your information may be transferred to, stored in, and processed in the United States.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mt-10" data-testid="section-privacy-changes">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            11. Changes to This Privacy Policy
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We may update this Privacy Policy from time to time. If we make material changes, we'll notify you (for example, in-app notice or email). Continued use after the effective date means you accept the updated Policy.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mt-10" data-testid="section-privacy-contact">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            12. Contact Us
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            For privacy questions, data requests, or complaints:
          </p>
          <ul className="list-none pl-0 text-slate-600 text-sm leading-relaxed space-y-2 mt-3">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@bimscorp.com" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded" data-testid="link-privacy-contact-email">
                info@bimscorp.com
              </a>
            </li>
            <li><strong>Mail:</strong> Privacy, LinkServicePro, 2280 Union Blvd, Bay Shore, NY 11706</li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+16312063700" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded">
                (631) 206-3700
              </a>
            </li>
          </ul>
        </section>

        {/* CTA Band */}
        <div className="bg-[#0E2A47] text-white rounded-xl mt-16 p-6 sm:p-8 text-center ring-1 ring-slate-800" data-testid="section-privacy-cta">
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
              data-testid="button-privacy-start-free"
            >
              <Link to="/signup">Start Free</Link>
            </Button>

            <Link
              to="/pricing"
              className="border border-white/30 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none text-center inline-flex items-center justify-center min-h-10"
              data-testid="link-privacy-pricing"
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
              data-testid="link-privacy-tos"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/legal/privacy"
              className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              aria-label="Read our Privacy Policy"
              data-testid="link-privacy-privacy-footer"
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
