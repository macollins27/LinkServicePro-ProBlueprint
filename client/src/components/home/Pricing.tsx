import { useState, useRef, useEffect, FormEvent } from "react";
import { Check, ArrowRight } from "lucide-react";
import { PRICING_COPY, PRICING_PRESETS, PRICING_TIERS } from "@/data/pricingData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PresetKey = typeof PRICING_PRESETS[number]["key"];
type TierKey = typeof PRICING_TIERS[number]["key"];

export function Pricing() {
  const [selectedPreset, setSelectedPreset] = useState<PresetKey>("small");
  const [selectedPlan, setSelectedPlan] = useState<TierKey | null>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const emailInputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedView = useRef(false);

  // Analytics: View tracking
  useEffect(() => {
    if (!sectionRef.current || hasTrackedView.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            if (typeof window.gtag === "function") {
              window.gtag("event", "pricing.view", {
                event_category: "engagement",
                event_label: "Pricing Section"
              });
            }
            hasTrackedView.current = true;
          }
        });
      },
      { threshold: [0.35] }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle preset change
  const handlePresetChange = (preset: PresetKey) => {
    setSelectedPreset(preset);
    
    if (typeof window.gtag === "function") {
      window.gtag("event", "pricing.preset_change", {
        event_category: "engagement",
        event_label: "Preset Change",
        preset
      });
    }
  };

  // Handle keyboard navigation for radio pills
  const handlePresetKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let newIndex = currentIndex;
    
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      newIndex = currentIndex > 0 ? currentIndex - 1 : PRICING_PRESETS.length - 1;
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      newIndex = currentIndex < PRICING_PRESETS.length - 1 ? currentIndex + 1 : 0;
    } else if (e.key === "Home") {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      newIndex = PRICING_PRESETS.length - 1;
    }

    if (newIndex !== currentIndex) {
      handlePresetChange(PRICING_PRESETS[newIndex].key);
      // Focus the new pill
      const pills = document.querySelectorAll('[role="radio"]');
      (pills[newIndex] as HTMLElement)?.focus();
    }
  };

  // Handle plan selection
  const handleSelectPlan = (tierKey: TierKey) => {
    setSelectedPlan(tierKey);
    emailInputRef.current?.focus();
    emailInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

    if (typeof window.gtag === "function") {
      window.gtag("event", "pricing.select_plan_click", {
        event_category: "engagement",
        event_label: "Plan Selection",
        plan: tierKey
      });
    }
  };

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(PRICING_COPY.form.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: PRICING_COPY.form.source,
          selected_volume: selectedPreset,
          selected_plan: selectedPlan
        })
      });

      if (!response.ok) throw new Error("Submission failed");

      setSuccess(true);
      setEmail("");
      setSelectedPlan(null);

      if (typeof window.gtag === "function") {
        const emailDomain = email.split("@")[1];
        window.gtag("event", "pricing.submit", {
          event_category: "conversion",
          event_label: "Pricing Form Submit",
          email_domain: emailDomain,
          source: PRICING_COPY.form.source,
          selected_plan: selectedPlan,
          selected_volume: selectedPreset
        });
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle contact link click
  const handleContactClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "pricing.contact_click", {
        event_category: "engagement",
        event_label: "Contact Link Click"
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-[#0A1326] overflow-hidden"
      aria-labelledby="pricing-title"
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
          color: "white"
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">
            {PRICING_COPY.eyebrow}
          </p>
          <h2
            id="pricing-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {PRICING_COPY.title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl">
            {PRICING_COPY.support}
          </p>
        </div>

        {/* Job Volume Presets - Radio Pills */}
        <div
          role="radiogroup"
          aria-label="Job volume presets"
          className="flex flex-wrap gap-3 mb-10"
        >
          {PRICING_PRESETS.map((preset, index) => (
            <button
              key={preset.key}
              role="radio"
              aria-checked={selectedPreset === preset.key}
              tabIndex={selectedPreset === preset.key ? 0 : -1}
              onClick={() => handlePresetChange(preset.key)}
              onKeyDown={(e) => handlePresetKeyDown(e, index)}
              data-testid={`radio-preset-${preset.key}`}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all
                min-h-[44px] flex items-center gap-2
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0A1326]
                ${
                  selectedPreset === preset.key
                    ? "bg-white text-[#0A1326]"
                    : "bg-white/10 text-white hover-elevate active-elevate-2"
                }
              `}
            >
              <span className="font-semibold">{preset.label}</span>
              <span className="text-xs opacity-70">{preset.range}</span>
            </button>
          ))}
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {PRICING_TIERS.map((tier) => {
            const currentPreset = PRICING_PRESETS.find(p => p.key === selectedPreset);
            
            return (
              <Card
                key={tier.key}
                className="bg-white/5 border-white/10 flex flex-col"
                data-testid={`card-tier-${tier.key}`}
              >
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl text-white">
                      {tier.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary border-primary/30 shrink-0"
                    >
                      Unlimited users
                    </Badge>
                  </div>
                  <p className="text-sm text-white/60">
                    Best for {currentPreset?.range}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col gap-6">
                  {/* Feature bullets */}
                  <ul className="space-y-3 flex-1">
                    {tier.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Select Plan Button */}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleSelectPlan(tier.key)}
                    data-testid={`button-select-${tier.key}`}
                    className="w-full border-white/20 text-white hover:bg-white/10"
                  >
                    Select plan
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pricing Facts Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 text-sm text-white/50">
          {PRICING_COPY.facts.map((fact, idx) => (
            <span key={idx} className="flex items-center gap-2">
              {idx > 0 && <span className="hidden sm:inline" aria-hidden="true">•</span>}
              {fact}
            </span>
          ))}
        </div>

        {/* Email Lead Form */}
        <div className="max-w-xl mx-auto mb-8">
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Attached Email Control */}
            <div className="flex flex-col sm:flex-row gap-0 bg-white rounded-lg overflow-hidden shadow-lg">
              <label htmlFor="pricing-email" className="sr-only">
                Email address
              </label>
              <input
                ref={emailInputRef}
                id="pricing-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setSuccess(false);
                }}
                placeholder={PRICING_COPY.form.placeholder}
                autoComplete="email"
                disabled={isSubmitting}
                data-testid="input-email-pricing"
                aria-describedby={error ? "pricing-email-error" : success ? "pricing-email-success" : undefined}
                className="flex-1 px-4 py-3 text-base bg-transparent border-0 focus:outline-none focus:ring-0 disabled:opacity-50 min-h-[44px]"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                data-testid="button-submit-pricing"
                className="min-h-[44px] rounded-none sm:rounded-r-lg"
              >
                {PRICING_COPY.form.button}
              </Button>
            </div>

            {/* Error Message */}
            {error && (
              <p
                id="pricing-email-error"
                role="alert"
                aria-live="polite"
                className="text-sm text-red-400"
              >
                {error}
              </p>
            )}

            {/* Success Message */}
            {success && (
              <p
                id="pricing-email-success"
                role="status"
                aria-live="polite"
                className="text-sm text-green-400"
              >
                {PRICING_COPY.form.success}
              </p>
            )}

            {/* Legal text and contact link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
              <p>{PRICING_COPY.form.legal}</p>
              <a
                href={PRICING_COPY.form.contactLink.href}
                onClick={handleContactClick}
                data-testid="link-contact-pricing"
                className="text-white/70 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white inline-flex items-center gap-1 min-h-[44px] items-center"
              >
                {PRICING_COPY.form.contactLink.text}
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </form>
        </div>

        {/* FAQ Teaser */}
        <div className="text-center">
          <a
            href={PRICING_COPY.faqTeaser.href}
            data-testid="link-faq"
            className="text-sm text-white/60 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white inline-flex items-center gap-1 min-h-[44px] items-center"
          >
            {PRICING_COPY.faqTeaser.text}
          </a>
        </div>
      </div>
    </section>
  );
}
