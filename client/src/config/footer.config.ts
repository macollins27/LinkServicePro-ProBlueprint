export const COMPANY = {
  name: "LinkServicePro",
  blurb:
    "Projects, crews, and cash—kept in one flow. Quotes out faster, invoices in sooner.",
  supportEmail: "support@linkservicepro.com",
  addressLines: ["123 Service Ave", "Suite 200", "Your City, ST 00000"],
  phone: "(000) 000-0000",
  statusHref: "/status"
};

export const SOCIAL = [
  { key: "x",        label: "X (Twitter)",  href: "https://twitter.com/YOUR_HANDLE" },
  { key: "linkedin", label: "LinkedIn",     href: "https://www.linkedin.com/company/YOUR_COMPANY" },
  { key: "youtube",  label: "YouTube",      href: "https://www.youtube.com/@YOUR_CHANNEL" },
  { key: "github",   label: "GitHub",       href: "https://github.com/YOUR_ORG" },
  { key: "facebook", label: "Facebook",     href: "https://facebook.com/YOUR_PAGE" },
  { key: "instagram",label: "Instagram",    href: "https://instagram.com/YOUR_HANDLE" }
];

export const APP_BADGES = {
  appStore: {
    href: "https://apps.apple.com/app/YOUR-APP-ID",
    label: "Download on the App Store"
  },
  googlePlay: {
    href: "https://play.google.com/store/apps/details?id=YOUR.APP.ID",
    label: "Get it on Google Play"
  }
};

export const SUBSCRIBE = {
  placeholder: "Enter your email",
  button: "Get product updates",
  endpoint: "/api/subscribe",
  source: "footer",
  success: "Thanks—check your inbox.",
  error: "Please enter a valid email."
};

export const NAV_GROUPS: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}[] = [
  {
    title: "Products",
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Industries", href: "/industries" },
      { label: "Pricing", href: "/pricing" },
      { label: "Sign up", href: "/signup" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Key Features",
    links: [
      { label: "Scheduling & Dispatch", href: "/features/scheduling-dispatch" },
      { label: "Work Orders & Mobile", href: "/features/work-orders-mobile" },
      { label: "Estimates & Quotes", href: "/features/estimates-quotes" },
      { label: "Invoicing & Payments", href: "/features/invoicing-payments" },
      { label: "Maintenance Plans", href: "/features/maintenance-plans" },
      { label: "Job Costing & Reporting", href: "/features/job-costing-reporting" },
      { label: "Team Management", href: "/features/team-management" }
    ]
  },
  {
    title: "Industries",
    links: [
      { label: "HVAC", href: "/industries/hvac" },
      { label: "Plumbing", href: "/industries/plumbing" },
      { label: "Landscaping", href: "/industries/landscaping" },
      { label: "Janitorial & Cleaning", href: "/industries/janitorial-cleaning" },
      { label: "General Contracting", href: "/industries/general-contracting" },
      { label: "See all industries →", href: "/industries" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Resources Hub", href: "/resources" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Free Guides", href: "/resources/guides" },
      { label: "Webinars", href: "/resources/webinars" },
      { label: "Customer Stories", href: "/resources/customer-stories" },
      { label: "API", href: "/resources/api" }
    ]
  },
  {
    title: "Help Center",
    links: [
      { label: "Help Home", href: "/help" },
      { label: "Scheduling & Dispatch", href: "/help/category/scheduling-dispatch" },
      { label: "Quotes & Invoices", href: "/help/category/quotes-invoices" },
      { label: "Payments & Billing", href: "/help/category/payments-billing" },
      { label: "Customer Messaging", href: "/help/category/customer-messaging" },
      { label: "Teams & Roles", href: "/help/category/teams-roles" },
      { label: "Account Settings", href: "/help/category/account-settings" }
    ]
  },
  {
    title: "Compare",
    links: [
      { label: "Overview", href: "/compare" },
      { label: "Legacy Tools", href: "/compare/legacy-tools" }
    ]
  },
  {
    title: "Integrations",
    links: [
      { label: "Property Linkware", href: "/integrations/property-linkware" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Press", href: "/press" },
      { label: "Contact Sales", href: "/contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "SLA", href: "/legal/sla" },
      { label: "Refund Policy", href: "/legal/refund" }
    ]
  }
];
