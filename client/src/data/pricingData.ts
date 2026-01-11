export const PRICING_COPY = {
  eyebrow: "Pricing",
  title: "Job-based pricing, unlimited users",
  support: "Add as many people as you need—pricing scales with the work, not headcount.",
  facts: ["Unlimited users on paid plans", "Cancel anytime", "No credit card required to start"],
  form: {
    placeholder: "Enter your email",
    button: "Get Started Free →",
    endpoint: "/api/lead",
    source: "home_pricing",
    success: "You're in—check your email to get started.",
    legal: "By continuing you agree to our Terms and acknowledge our Privacy Policy.",
    contactLink: {
      text: "Talk to an expert",
      href: "/contact"
    }
  },
  faqTeaser: {
    text: "Questions on billing or migrations? See our Pricing FAQ →",
    href: "/pricing/faq"
  }
};

export const PRICING_PRESETS = [
  { key: "small", label: "Small Team", range: "~0–50 jobs / month" },
  { key: "growth", label: "Growing Ops", range: "~51–200 jobs / month" },
  { key: "multi", label: "Multi-Crew", range: "200+ jobs / month" }
] as const;

export const PRICING_TIERS = [
  {
    key: "starter",
    name: "Starter",
    bullets: [
      "Projects & work orders",
      "Quotes & invoices",
      "Mobile field app",
      "Basic reporting",
      "Email support"
    ]
  },
  {
    key: "growth",
    name: "Growth",
    bullets: [
      "Everything in Starter",
      "Employee labor & payroll",
      "GPS-verified timesheets",
      "Property Linkware integration",
      "Priority support"
    ]
  },
  {
    key: "pro",
    name: "Pro",
    bullets: [
      "Everything in Growth",
      "Advanced project roll-ups",
      "Custom workflows",
      "API access",
      "SLA support"
    ]
  }
] as const;
