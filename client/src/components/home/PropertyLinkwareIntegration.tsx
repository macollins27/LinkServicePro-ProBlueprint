import React from "react";
import { Link } from "react-router-dom";
import { Check, FileText, Building2 } from "lucide-react";
import { LINKWARE_COPY } from "@/data/linkwareSectionData";

export default function PropertyLinkwareIntegration() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [hasTrackedView, setHasTrackedView] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);
  const formId = React.useId();
  const errorId = `${formId}-error`;
  const successId = `${formId}-success`;

  // Track view event when 35% of section is in viewport
  React.useEffect(() => {
    if (hasTrackedView || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            if (typeof window !== "undefined" && (window as any).gtag && !hasTrackedView) {
              (window as any).gtag("event", "view", {
                event_category: "linkware"
              });
              setHasTrackedView(true);
            }
          }
        });
      },
      { threshold: [0.35] }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasTrackedView]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(LINKWARE_COPY.form.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: LINKWARE_COPY.form.source
        })
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        
        // Analytics: lead submit
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "lead_submit", {
            event_category: "linkware",
            email_domain: email.split("@")[1] || "",
            source: LINKWARE_COPY.form.source
          });
        }
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const handleLearnMoreClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "learn_more_click", {
        event_category: "linkware"
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 bg-[#0A1326] relative overflow-hidden"
    >
      {/* Blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255 255 255) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Desktop: 12-col grid | Mobile: single column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8">
          {/* Left Column: Header + Two Stacks (7-8 cols) */}
          <div className="lg:col-span-7">
            {/* Header */}
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
              {LINKWARE_COPY.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {LINKWARE_COPY.title}
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-8">
              {LINKWARE_COPY.support}
            </p>

            {/* Two Micro-Benefit Stacks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {LINKWARE_COPY.stacks.map((stack, index) => (
                <div key={stack.key}>
                  <div className="flex items-center gap-2 mb-3">
                    {index === 0 ? (
                      <FileText className="h-5 w-5 text-blue-400" aria-hidden="true" />
                    ) : (
                      <Building2 className="h-5 w-5 text-blue-400" aria-hidden="true" />
                    )}
                    <h3 className="text-sm font-semibold text-white">
                      {stack.heading}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-white/70">
                    {stack.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Compact Visual Card (4-5 cols, desktop only) */}
          <div className="hidden lg:flex lg:col-span-5 items-start justify-center pt-8">
            <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="h-10 w-10 rounded bg-blue-400/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">Job Timeline</p>
                    <p className="text-xs text-white/60">All activity in one place</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300 border border-emerald-400/20">
                      Report.pdf attached
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-400/10 px-2.5 py-1 text-xs font-medium text-blue-300 border border-blue-400/20">
                      Property asset files (3)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-purple-400/10 px-2.5 py-1 text-xs font-medium text-purple-300 border border-purple-400/20">
                      Photos synced (12)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Form (Full Width Below Grid, Centered) */}
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor={formId} className="sr-only">
                {LINKWARE_COPY.form.placeholder}
              </label>
              <div className="flex">
                <input
                  id={formId}
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") {
                      setStatus("idle");
                      setErrorMessage("");
                    }
                  }}
                  placeholder={LINKWARE_COPY.form.placeholder}
                  autoComplete="email"
                  aria-describedby={status === "error" ? errorId : status === "success" ? successId : undefined}
                  aria-invalid={status === "error"}
                  disabled={status === "submitting"}
                  className={`
                    flex-1 min-w-0 rounded-l-md border px-4 py-3 text-sm bg-white text-gray-900
                    placeholder:text-gray-500
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${status === "error"
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/20"
                    }
                  `}
                  data-testid="input-email-linkware"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-r-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0A1326] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap min-h-[44px]"
                  data-testid="button-submit-linkware"
                >
                  {status === "submitting" ? "Submitting..." : LINKWARE_COPY.form.button}
                </button>
              </div>
              
              {status === "error" && (
                <p id={errorId} role="alert" className="mt-2 text-sm text-red-400">
                  {errorMessage}
                </p>
              )}
              
              {status === "success" && (
                <p id={successId} role="status" aria-live="polite" className="mt-2 text-sm text-emerald-400">
                  You're in—check your email to get started.
                </p>
              )}
            </div>
          </form>

          {/* Learn More Link + Legal */}
          <div className="mt-4 text-center">
            <Link
              to={LINKWARE_COPY.learnMoreHref}
              onClick={handleLearnMoreClick}
              className="text-sm font-medium text-blue-400 hover:text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0A1326] rounded min-h-[44px] inline-flex items-center"
              data-testid="link-learn-more-linkware"
            >
              Learn more about Property Linkware →
            </Link>
            <p className="mt-2 text-xs text-white/50">
              {LINKWARE_COPY.legal}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
