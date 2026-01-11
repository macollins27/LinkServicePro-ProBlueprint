import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export default function SignupSuccess() {
  return (
    <>
      <Helmet>
        <title>Welcome | LinkServicePro</title>
      </Helmet>
      <div className="min-h-screen grid place-items-center bg-slate-50 px-4">
        <div className="max-w-md w-full rounded-xl bg-white p-8 shadow ring-1 ring-slate-200 text-center" data-testid="success-card">
          <Check className="w-16 h-16 text-[#0FB36F] mx-auto mb-4" aria-hidden="true" />
          <h1 className="text-2xl font-semibold text-slate-900">You're all set!</h1>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Check your email to verify your account. Next, we'll guide you to connect your calendar and create your first job.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-[#0B5FFF] px-5 py-2.5 text-white text-sm font-semibold hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
            data-testid="link-homepage"
          >
            Go to homepage
          </Link>
          <p className="mt-4 text-xs text-slate-500">
            Didn't receive an email?{" "}
            <button className="underline hover:text-slate-700" data-testid="button-resend">
              Resend verification
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
