import React from "react";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { QUICK_START_COPY } from "@/data/quickStartData";

export default function QuickStart() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [hasTrackedView, setHasTrackedView] = React.useState(false);
  const [showSticky, setShowSticky] = React.useState(false);
  const [stickyDismissed, setStickyDismissed] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);
  const formId = React.useId();
  const stickyFormId = React.useId();
  const errorId = `${formId}-error`;
  const successId = `${formId}-success`;
  const stickyErrorId = `${stickyFormId}-error`;
  const stickySuccessId = `${stickyFormId}-success`;
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const triggerRef = React.useRef<HTMLElement | null>(null);

  // Sticky form state (separate from main form)
  const [stickyEmail, setStickyEmail] = React.useState("");
  const [stickyStatus, setStickyStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [stickyErrorMessage, setStickyErrorMessage] = React.useState("");

  // Check if sticky was dismissed this session
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = sessionStorage.getItem("quickStartStickyDismissed");
      if (dismissed === "true") {
        setStickyDismissed(true);
      }
    }
  }, []);

  // Track view event when 35% of section is in viewport
  React.useEffect(() => {
    if (hasTrackedView || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            if (typeof window !== "undefined" && (window as any).gtag && !hasTrackedView) {
              (window as any).gtag("event", "view", {
                event_category: "quick_start"
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

  // Show sticky after scrolling past 50% of section
  React.useEffect(() => {
    if (!QUICK_START_COPY.sticky.enabled || stickyDismissed || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const scrolledPast = entry.boundingClientRect.top < 0 && 
                               Math.abs(entry.boundingClientRect.top) > entry.boundingClientRect.height * QUICK_START_COPY.sticky.scrollThreshold;
          
          if (scrolledPast && !showSticky) {
            triggerRef.current = entry.target as HTMLElement;
            setShowSticky(true);
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "sticky_show", {
                event_category: "quick_start"
              });
            }
          }
        });
      },
      { threshold: [0] }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [stickyDismissed, showSticky]);

  // Handle ESC key for sticky dialog
  React.useEffect(() => {
    if (!showSticky) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleStickyDismiss();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showSticky]);

  const handleSubmit = async (e: React.FormEvent, isSticky = false) => {
    e.preventDefault();
    
    const currentEmail = isSticky ? stickyEmail : email;
    const setCurrentStatus = isSticky ? setStickyStatus : setStatus;
    const setCurrentError = isSticky ? setStickyErrorMessage : setErrorMessage;
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!currentEmail || !emailRegex.test(currentEmail)) {
      setCurrentStatus("error");
      setCurrentError("Please enter a valid email address");
      return;
    }

    setCurrentStatus("submitting");
    setCurrentError("");

    try {
      const response = await fetch(QUICK_START_COPY.form.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: currentEmail,
          source: QUICK_START_COPY.form.source
        })
      });

      if (response.ok) {
        setCurrentStatus("success");
        if (isSticky) {
          setStickyEmail("");
        } else {
          setEmail("");
        }
        
        // Analytics
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", isSticky ? "sticky_submit" : "submit", {
            event_category: "quick_start",
            email_domain: currentEmail.split("@")[1] || "",
            source: QUICK_START_COPY.form.source
          });
        }
      } else {
        setCurrentStatus("error");
        setCurrentError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setCurrentStatus("error");
      setCurrentError("Something went wrong. Please try again.");
    }
  };

  const handleContactClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "contact_click", {
        event_category: "quick_start"
      });
    }
  };

  const handleStickyDismiss = () => {
    setShowSticky(false);
    setStickyDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("quickStartStickyDismissed", "true");
      (window as any).gtag?.("event", "sticky_dismiss", {
        event_category: "quick_start"
      });
    }
    // Return focus to trigger element
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  return (
    <>
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
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
              {QUICK_START_COPY.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {QUICK_START_COPY.title}
            </h2>
            <p className="text-base sm:text-lg text-white/80">
              {QUICK_START_COPY.support}
            </p>
          </div>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {QUICK_START_COPY.trustBadges.map((badge, index) => (
              <div 
                key={index}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/90"
              >
                <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* Email Form */}
          <div className="max-w-xl mx-auto">
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
              <div>
                <label htmlFor={formId} className="sr-only">
                  {QUICK_START_COPY.form.placeholder}
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
                    placeholder={QUICK_START_COPY.form.placeholder}
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
                    data-testid="input-email-quick-start"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-r-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0A1326] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap min-h-[44px]"
                    data-testid="button-submit-quick-start"
                  >
                    {status === "submitting" ? "Submitting..." : QUICK_START_COPY.form.button}
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

            {/* Legal + Contact Link */}
            <div className="mt-4 text-center space-y-2">
              <p className="text-xs text-white/50">
                {QUICK_START_COPY.legal}
              </p>
              <Link
                to={QUICK_START_COPY.contactLink.href}
                onClick={handleContactClick}
                className="text-sm font-medium text-blue-400 hover:text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0A1326] rounded min-h-[44px] inline-flex items-center"
                data-testid="link-contact-quick-start"
              >
                {QUICK_START_COPY.contactLink.text} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Sheet (Mobile) */}
      {showSticky && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          style={{
            animation: "fadeIn 0.2s ease-out"
          }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleStickyDismiss}
            aria-hidden="true"
          />
          
          {/* Bottom Sheet */}
          <div
            role="dialog"
            aria-labelledby="sticky-title"
            aria-modal="true"
            className="absolute bottom-0 left-0 right-0 bg-[#0A1326] border-t border-white/10 rounded-t-2xl p-6 shadow-2xl"
            style={{
              animation: "slideUp 0.3s ease-out"
            }}
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={handleStickyDismiss}
              className="absolute top-4 right-4 p-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Close"
              data-testid="button-close-sticky"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 id="sticky-title" className="text-xl font-bold text-white mb-4">
              {QUICK_START_COPY.sticky.title}
            </h3>

            <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-4">
              <div>
                <label htmlFor={stickyFormId} className="sr-only">
                  {QUICK_START_COPY.form.placeholder}
                </label>
                <div className="flex">
                  <input
                    id={stickyFormId}
                    type="email"
                    value={stickyEmail}
                    onChange={(e) => {
                      setStickyEmail(e.target.value);
                      if (stickyStatus === "error") {
                        setStickyStatus("idle");
                        setStickyErrorMessage("");
                      }
                    }}
                    placeholder={QUICK_START_COPY.form.placeholder}
                    autoComplete="email"
                    aria-describedby={stickyStatus === "error" ? stickyErrorId : stickyStatus === "success" ? stickySuccessId : undefined}
                    aria-invalid={stickyStatus === "error"}
                    disabled={stickyStatus === "submitting"}
                    className={`
                      flex-1 min-w-0 rounded-l-md border px-4 py-3 text-sm bg-white text-gray-900
                      placeholder:text-gray-500
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      disabled:opacity-50 disabled:cursor-not-allowed
                      ${stickyStatus === "error"
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white/20"
                      }
                    `}
                    data-testid="input-email-sticky"
                  />
                  <button
                    type="submit"
                    disabled={stickyStatus === "submitting"}
                    className="rounded-r-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap min-h-[44px]"
                    data-testid="button-submit-sticky"
                  >
                    {stickyStatus === "submitting" ? "Submitting..." : QUICK_START_COPY.form.button}
                  </button>
                </div>
                
                {stickyStatus === "error" && (
                  <p id={stickyErrorId} role="alert" className="mt-2 text-sm text-red-400">
                    {stickyErrorMessage}
                  </p>
                )}
                
                {stickyStatus === "success" && (
                  <p id={stickySuccessId} role="status" aria-live="polite" className="mt-2 text-sm text-emerald-400">
                    You're in—check your email to get started.
                  </p>
                )}
              </div>
            </form>

            <p className="mt-3 text-xs text-white/50 text-center">
              {QUICK_START_COPY.legal}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] {
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
