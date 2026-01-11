import { Helmet } from "react-helmet-async";
import { useSearchParams, Link } from "react-router-dom";
import SignupForm from "@/components/auth/SignupForm";
import TrustBullets from "@/components/auth/TrustBullets";
import BenefitList from "@/components/auth/BenefitList";
import PhotoPanel from "@/components/auth/PhotoPanel";
import AppBackdrop from "@/components/auth/AppBackdrop";

export default function Signup() {
  const [searchParams] = useSearchParams();
  const v = (searchParams.get("v") || "photo") as "photo" | "benefits" | "modal";

  return (
    <>
      <Helmet>
        <title>Start Free Trial | LinkServicePro</title>
        <meta
          name="description"
          content="Simple scheduling, dispatch, messaging, and payments. Works with Google Calendar and Apple Calendar. No credit card required."
        />
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-slate-50">
        {/* Slim header */}
        <div className="flex items-center justify-between px-4 py-3 lg:px-8 bg-[#0E2A47] text-white">
          <Link to="/" className="font-semibold tracking-[-0.02em] focus-visible:ring-2 focus-visible:ring-white outline-none rounded px-1" data-testid="link-logo">
            LinkServicePro
          </Link>
          <Link
            to="/"
            className="text-white/80 text-sm hover:text-white focus-visible:ring-2 focus-visible:ring-white outline-none rounded px-1"
            data-testid="link-signin"
          >
            Already have an account? Sign in →
          </Link>
        </div>

        {/* VARIANT: Split-Photo (Jobber-style) */}
        {v === "photo" && (
          <div className="grid lg:grid-cols-2 flex-1" data-testid="variant-photo">
            <div className="bg-gradient-to-b from-[#0E2A47] to-[#133a62] text-white">
              <div className="mx-auto w-full max-w-md px-4 py-8 sm:px-6 lg:px-10">
                <h1 className="text-2xl sm:text-[28px] font-semibold tracking-[-0.02em]">
                  Run your field service business from one hub.
                </h1>
                <p className="mt-2 text-slate-200 text-sm">
                  Simple scheduling, dispatch, messaging, and payments. Works with Google
                  Calendar and Apple Calendar.
                </p>

                <SignupForm />
                <TrustBullets className="mt-4" />
              </div>
            </div>

            <PhotoPanel />
          </div>
        )}

        {/* VARIANT: Benefits-Right (Workiz-style) */}
        {v === "benefits" && (
          <div className="grid lg:grid-cols-2 flex-1" data-testid="variant-benefits">
            <div className="bg-white">
              <div className="mx-auto w-full max-w-md px-4 py-8 sm:px-6 lg:px-10">
                <h1 className="text-slate-900 text-2xl sm:text-[28px] font-semibold tracking-[-0.02em]">
                  Start using LinkServicePro free today
                </h1>
                <p className="mt-2 text-slate-600 text-sm">
                  Schedule jobs, get approvals, and get paid the same day.
                </p>

                <SignupForm light />
                <div className="mt-4">
                  <TrustBullets variant="light" />
                </div>
              </div>
            </div>

            <div className="bg-[#0E2A47] text-white">
              <div className="mx-auto h-full w-full max-w-xl px-6 py-8">
                <BenefitList />
              </div>
            </div>
          </div>
        )}

        {/* VARIANT: Modal-Over-App (Housecall Pro-style) */}
        {v === "modal" && (
          <div className="relative flex-1" data-testid="variant-modal">
            <AppBackdrop />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="w-full max-w-md rounded-xl bg-white shadow-2xl ring-1 ring-slate-200 p-6">
                <h1 className="text-center text-xl font-semibold text-slate-900">
                  Get started with your free trial
                </h1>
                <p className="mt-1 text-center text-sm text-slate-600">
                  Join thousands of pros who run their day in LinkServicePro.
                </p>
                <div className="mt-4">
                  <SignupForm light compact />
                </div>
                <p className="mt-3 text-center text-xs text-slate-500">
                  By signing up you agree to our{" "}
                  <a href="/legal/terms" className="underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="/legal/privacy" className="underline">
                    Privacy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
