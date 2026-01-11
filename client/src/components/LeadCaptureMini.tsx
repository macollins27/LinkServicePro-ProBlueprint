import { useState, FormEvent } from "react";

interface LeadCaptureMiniProps {
  context: string;
}

export default function LeadCaptureMini({ context }: LeadCaptureMiniProps) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [msg, setMsg] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMsg("Enter a valid email.");
      return;
    }
    setMsg("Thanks — we'll reach out within one business day.");
    setEmail("");
    setCompany("");
    window.dispatchEvent(
      new CustomEvent("lead_capture", {
        detail: { context, email, company },
      })
    );
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white ring-1 ring-slate-200 p-4 sm:p-5 elev-2 grid gap-2"
      aria-label="Request a demo"
      data-testid="form-lead-capture"
    >
      <div className="font-extrabold text-slate-900">See it with your jobs</div>
      <input
        aria-label="Work email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="border border-slate-300 px-3 py-2"
        data-testid="input-email"
        type="email"
      />
      <input
        aria-label="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        className="border border-slate-300 px-3 py-2"
        data-testid="input-company"
      />
      <button
        className="px-4 py-2 bg-slate-900 text-white font-extrabold"
        data-testid="button-request-demo"
      >
        Book a demo
      </button>
      {msg && (
        <p className="text-sm text-slate-700" data-testid="text-message">
          {msg}
        </p>
      )}
    </form>
  );
}
