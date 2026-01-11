import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm({
  light = false,
  compact = false,
}: { light?: boolean; compact?: boolean }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [allowSms, setAllowSms] = useState(false);

  const label = light ? "text-slate-800" : "text-white";
  const sub = light ? "text-slate-500" : "text-white/70";

  function strength(p: string) {
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  }
  const s = strength(pw);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Plug into backend; send analytics event "signup_attempt"
    navigate("/signup/success");
  }

  return (
    <form onSubmit={onSubmit} className={`mt-6 flex flex-col gap-3 ${compact ? "" : "pb-2"}`} data-testid="form-signup">
      <div className="flex flex-col gap-1">
        <label className={`${label} text-[13px] font-medium`} htmlFor="su-email">
          Work Email
        </label>
        <input
          id="su-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-[14px] text-slate-900 placeholder-slate-400 shadow-sm focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:outline-none"
          placeholder="you@company.com"
          data-testid="input-email"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className={`${label} text-[13px] font-medium`} htmlFor="su-pw">
          Password
        </label>
        <input
          id="su-pw"
          type="password"
          required
          minLength={8}
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-[14px] text-slate-900 placeholder-slate-400 shadow-sm focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:outline-none"
          placeholder="Create a password"
          data-testid="input-password"
        />
        <div className="h-1 rounded bg-slate-200 overflow-hidden">
          <div
            className={`h-full transition-all ${
              s <= 1 ? "bg-red-500 w-1/4" : s === 2 ? "bg-yellow-500 w-2/4" : s === 3 ? "bg-green-500 w-3/4" : "bg-green-600 w-full"
            }`}
            data-testid="password-strength-meter"
          />
        </div>
        <p className={`${sub} text-[11px]`}>Use 8+ characters with letters, numbers, and a symbol.</p>
      </div>

      {!compact && (
        <>
          <div className="flex flex-col gap-1">
            <label className={`${label} text-[13px] font-medium`} htmlFor="su-company">
              Company <span className={sub}>(optional)</span>
            </label>
            <input
              id="su-company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-[14px] text-slate-900 placeholder-slate-400 shadow-sm focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:outline-none"
              placeholder="Ex: SwiftFlow Plumbing"
              data-testid="input-company"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className={`${label} text-[13px] font-medium`} htmlFor="su-phone">
              Phone <span className={sub}>(optional)</span>
            </label>
            <input
              id="su-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-[14px] text-slate-900 placeholder-slate-400 shadow-sm focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:outline-none"
              placeholder="(555) 555-1234"
              data-testid="input-phone"
            />
          </div>
        </>
      )}

      {!compact && (
        <label className="mt-1 inline-flex items-start gap-2 text-xs text-slate-600">
          <input
            type="checkbox"
            className="mt-0.5"
            checked={allowSms}
            onChange={(e) => setAllowSms(e.target.checked)}
            data-testid="checkbox-sms-consent"
          />
          Receive SMS updates about scheduling changes. Msg/data rates may apply. You can opt out anytime.
        </label>
      )}

      <button
        type="submit"
        className="mt-1 w-full rounded-md bg-[#0B5FFF] px-3 py-2 text-[14px] font-semibold text-white shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        data-testid="button-start-trial"
      >
        Start Free Trial
      </button>

      {!compact && (
        <>
          <div className="relative my-1 flex items-center justify-center">
            <div className="h-px w-full bg-slate-200" />
            <div className="absolute bg-transparent text-slate-500 text-[11px] px-2">or</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              className="rounded-md bg-white border border-slate-300 px-3 py-2 text-[13px] font-semibold text-slate-700 hover:bg-slate-50"
              data-testid="button-google-signup"
            >
              Continue with Google
            </button>
            <button
              type="button"
              className="rounded-md bg-white border border-slate-300 px-3 py-2 text-[13px] font-semibold text-slate-700 hover:bg-slate-50"
              data-testid="button-apple-signup"
            >
              Continue with Apple
            </button>
          </div>

          <p className="text-[11px] text-slate-500">
            By clicking "Start Free Trial" you agree to our{" "}
            <a className="underline" href="/legal/terms">Terms</a> and{" "}
            <a className="underline" href="/legal/privacy">Privacy Policy</a>.
          </p>
        </>
      )}
    </form>
  );
}
