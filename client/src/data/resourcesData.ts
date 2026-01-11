export type ResourceKind = "blog" | "guide" | "update";

export type ResourceItem = {
  id: string;
  kind: ResourceKind;
  title: string;
  teaser: string;
  href: string;
  thumbnail: { src: string; alt: string; width: number; height: number };
  publishedAt: string;
  readTime: string;
};

export const RESOURCES_COPY = {
  eyebrow: "Resources",
  title: "Learn, ship, and stay current",
  support: "Field-tested tactics, product updates, and guides to keep your crews moving.",
  filters: {
    all: "All",
    blog: "Blog",
    guide: "Guides",
    update: "Product Updates"
  },
  viewAllLink: {
    text: "View all resources →",
    href: "/resources"
  },
  emailForm: {
    enabled: true,
    placeholder: "Enter your email",
    button: "Get updates",
    endpoint: "/api/lead",
    source: "home_resources",
    success: "Thanks—check your inbox.",
    error: "Please enter a valid email."
  }
};

export const RESOURCES_SAMPLE: ResourceItem[] = [
  {
    id: "r1",
    kind: "blog",
    title: "From work orders to projects: a cleaner way to track jobs",
    teaser: "Roll up tickets, quotes, and invoices under a single project timeline.",
    href: "/resources/projects-over-work-orders",
    thumbnail: { 
      src: "/img/resources/projects.webp", 
      alt: "Project timeline mock", 
      width: 1200, 
      height: 675 
    },
    publishedAt: "2025-10-15",
    readTime: "5 min"
  },
  {
    id: "r2",
    kind: "guide",
    title: "GPS-verified timesheets: a setup checklist",
    teaser: "Cut time fraud and tighten job costing with simple guardrails.",
    href: "/resources/gps-timesheets-setup",
    thumbnail: { 
      src: "/img/resources/gps.webp", 
      alt: "GPS timesheet mock", 
      width: 1200, 
      height: 675 
    },
    publishedAt: "2025-09-30",
    readTime: "6 min"
  },
  {
    id: "r3",
    kind: "update",
    title: "Property Linkware: inspections + assets on the job timeline",
    teaser: "Attach reports and asset files where crews already work.",
    href: "/resources/linkware-update",
    thumbnail: { 
      src: "/img/resources/linkware.webp", 
      alt: "Report attached to job", 
      width: 1200, 
      height: 675 
    },
    publishedAt: "2025-09-18",
    readTime: "3 min"
  },
  {
    id: "r4",
    kind: "blog",
    title: "Three ways to cut quote-to-cash time in half",
    teaser: "Speed wins. Here's how to close faster without cutting corners.",
    href: "/resources/faster-quote-to-cash",
    thumbnail: { 
      src: "/img/resources/speed.webp", 
      alt: "Fast approval workflow", 
      width: 1200, 
      height: 675 
    },
    publishedAt: "2025-09-05",
    readTime: "4 min"
  },
  {
    id: "r5",
    kind: "guide",
    title: "Setting up recurring maintenance contracts",
    teaser: "Turn one-time jobs into predictable monthly revenue.",
    href: "/resources/recurring-contracts-guide",
    thumbnail: { 
      src: "/img/resources/recurring.webp", 
      alt: "Maintenance plan setup", 
      width: 1200, 
      height: 675 
    },
    publishedAt: "2025-08-22",
    readTime: "7 min"
  },
  {
    id: "r6",
    kind: "update",
    title: "New: Batch invoicing for multi-property jobs",
    teaser: "Generate invoices for 50 units in seconds, not hours.",
    href: "/resources/batch-invoicing-update",
    thumbnail: { 
      src: "/img/resources/batch.webp", 
      alt: "Batch invoice screen", 
      width: 1200, 
      height: 675 
    },
    publishedAt: "2025-08-10",
    readTime: "2 min"
  }
];

export const CATEGORY_LABELS: Record<ResourceKind, string> = {
  blog: "Blog",
  guide: "Guide",
  update: "Product Update"
};
