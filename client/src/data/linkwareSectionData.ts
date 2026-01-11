export const LINKWARE_COPY = {
  eyebrow: "Integrations",
  title: "Property Linkware Integration",
  support: "Inspections and property records connect to every job—so photos, reports, and asset history live in one place.",
  stacks: [
    {
      key: "inspect",
      heading: "Link Inspect Pro (Inspections)",
      bullets: [
        "Capture checklists, photos, and markups",
        "Auto-generate summary reports",
        "Send results to the job in LinkServicePro"
      ]
    },
    {
      key: "organizer",
      heading: "Property Organizer (Assets & Properties)",
      bullets: [
        "Asset files, photos, and notes by site",
        "Service & inspection history on one timeline",
        "Owners/tenants can request and track service"
      ]
    }
  ],
  form: {
    placeholder: "Enter your email",
    button: "Get Started Free →",
    endpoint: "/api/lead",
    source: "home_linkware"
  },
  learnMoreHref: "/integrations/property-linkware",
  legal: "By continuing you agree to our Terms and acknowledge our Privacy Policy.",
  image: {
    src: "/img/linkware-preview.webp",
    alt: "Job timeline with attached inspection report and property asset files.",
    width: 1200,
    height: 675
  }
};
