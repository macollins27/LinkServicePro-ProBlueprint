import { FeatureSpec } from "./spec";
import SchedulingInstantDemo from "@/sections/SchedulingInstantDemo";

export const FEATURES: Record<string, FeatureSpec> = {
  "drag-and-drop-scheduling": {
    slug: "drag-and-drop-scheduling",
    title: "Drag-and-Drop Scheduling",
    subtitle: "Schedule faster and keep crews in sync",
    outcomes: [
      "−18% drive time",
      "+1.3 jobs per tech per day",
      "96% on-time arrival"
    ],
    showInstantDemo: true,
    instantDemoConfig: {
      component: SchedulingInstantDemo
    },
    painSolveHeading: "Kill scheduling chaos",
    painSolveSubheading: "Common field problems paired with the exact fix. Drag, drop, done.",
    pains: [
      "Spreadsheets break when multiple people edit",
      "Office can't see who's free across all crews",
      "Techs get double-booked or sent to wrong locations",
      "Overtime surprises on Fridays"
    ],
    solves: [
      "Real-time calendar with conflict warnings",
      "Color-coded availability by crew and vehicle",
      "Drag once → everyone gets notified (SMS/email)",
      "Capacity view with hour caps and overtime alerts"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to better scheduling",
    steps: [
      { title: "Create job", desc: "Add photos, line items, and service window" },
      { title: "Place on calendar", desc: "Drag to day; assign crew and truck" },
      { title: "Notify", desc: "Customers and techs get the updated time automatically" }
    ],
    bottomCtaTitle: "Schedule days that run on time",
    bottomCtaSubtitle: "Start Free. No credit card. Full product for 14 days.",
    testimonial: {
      quote: "We reshuffle routes in minutes and cut callbacks.",
      by: "Mike R., Owner, HVAC"
    },
    faq: [
      { q: "How long does setup take?", a: "Most teams import in under a day." },
      { q: "Can I reschedule from my phone?", a: "Yes. iOS and Android supported." },
      { q: "Will crews get alerts?", a: "Yes. Techs and customers receive SMS/email." },
      { q: "What if I double-book?", a: "You'll see a conflict flag before saving." },
      { q: "Does it handle recurring jobs?", a: "Yes. Daily, weekly, monthly patterns." },
      { q: "Does it work offline?", a: "The mobile app queues updates and syncs later." }
    ],
    integrations: ["QuickBooks", "Xero", "iOS/Android", "SMS/Email", "Google Calendar", "Zapier"],
    related: [
      { slug: "dispatch-board-live-map", title: "Dispatch Board + Live Map", description: "See every crew on screen" },
      { slug: "route-optimization", title: "Route Optimization", description: "Cut drive time" },
      { slug: "two-way-messaging", title: "2-Way SMS", description: "Text customers" }
    ],
    seo: {
      title: "Drag-and-Drop Scheduling • Field Service Software",
      description: "Drag jobs, clear conflicts, and auto-text customers. See schedules settle in seconds.",
      canonical: "https://linkservicepro.com/features/drag-and-drop-scheduling"
    },
    schemaFeatureList: [
      "Drag-and-drop job scheduling",
      "Automatic conflict detection",
      "Real-time crew notifications",
      "Customer SMS/email updates"
    ]
  },

  "dispatch-board-live-map": {
    slug: "dispatch-board-live-map",
    title: "Dispatch Board + Live Map",
    subtitle: "See every crew on screen and act fast",
    outcomes: [
      "−12% idle time",
      "−22% callbacks",
      "100% crew visibility"
    ],
    painSolveHeading: "Stop dispatching blind",
    painSolveSubheading: "See every tech, every job, and every opportunity in real-time",
    pains: [
      "Blind to crew locations",
      "Radio tag confusion",
      "Late arrivals without warning",
      "Can't balance workload across crews"
    ],
    solves: [
      "Live pin trail with ETA",
      "Status badges on each pin",
      "Zone dispatch filter",
      "Drag job from overloaded tech to open one"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to better dispatch",
    steps: [
      { title: "Open board", desc: "See all crews on map" },
      { title: "Filter by zone", desc: "Focus on specific area" },
      { title: "Assign nearest crew", desc: "Route job to closest available tech" }
    ],
    bottomCtaTitle: "Never lose track of your crew again",
    bottomCtaSubtitle: "Start Free. See every tech live on day one.",
    testimonial: {
      quote: "We stopped calling around and started routing smart.",
      by: "Tanya L., Dispatch"
    },
    faq: [
      { q: "How accurate is GPS?", a: "Typically within 10-30 feet with good signal." },
      { q: "Does crew see their location shared?", a: "Yes, they opt-in when they start the app." },
      { q: "Does it drain battery?", a: "Uses efficient background location; minimal drain." }
    ],
    integrations: ["SMS/Email", "GPS provider", "Google Maps"],
    related: [
      { slug: "drag-and-drop-scheduling", title: "Scheduling", description: "Drag jobs" },
      { slug: "real-time-gps", title: "Real-Time GPS", description: "Track every tech" },
      { slug: "route-optimization", title: "Route Optimization", description: "Shortest routes" }
    ],
    seo: {
      title: "Dispatch Board + Live Map • Field Service Software",
      description: "See every crew on screen. Drag to reassign. Track progress in real-time.",
      canonical: "https://linkservicepro.com/features/dispatch-board-live-map"
    }
  },

  "route-optimization": {
    slug: "route-optimization",
    title: "Route Optimization",
    subtitle: "Shortest routes. More jobs per tech.",
    outcomes: [
      "−18% drive time",
      "+2 stops per day",
      "−10% fuel cost"
    ],
    painSolveHeading: "Stop wasting time on the road",
    painSolveSubheading: "Optimize routes and add more stops without overtime",
    pains: [
      "Zig-zag driving patterns waste time",
      "Late to tight service windows",
      "Manual re-routing after changes"
    ],
    solves: [
      "One-tap optimize with smart sequencing",
      "Time window respect and validation",
      "Instant resequence when jobs shift"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to optimized routes",
    steps: [
      { title: "Set day", desc: "Choose crew and date range" },
      { title: "Optimize", desc: "Run algorithm to minimize drive time" },
      { title: "Dispatch", desc: "Send optimized routes to crews" }
    ],
    bottomCtaTitle: "Add more stops without overtime",
    bottomCtaSubtitle: "Start Free. Optimize your first route today.",
    testimonial: {
      quote: "Added a stop per tech without overtime.",
      by: "Greg S., Ops"
    },
    faq: [
      { q: "Does it factor live traffic?", a: "Yes, uses real-time traffic data for ETAs." },
      { q: "Can I exclude toll roads?", a: "Yes, set preferences per crew or company-wide." },
      { q: "What about lunch breaks?", a: "Add break windows; routes respect them." }
    ],
    integrations: ["Maps provider", "SMS"],
    related: [
      { slug: "drag-and-drop-scheduling", title: "Scheduling", description: "Drag jobs" },
      { slug: "real-time-gps", title: "GPS", description: "Track techs" },
      { slug: "capacity-planning", title: "Capacity", description: "Balance workload" }
    ],
    seo: {
      title: "Route Optimization • Field Service Software",
      description: "Shortest routes. More jobs per tech. Optimize by time windows and avoid tolls.",
      canonical: "https://linkservicepro.com/features/route-optimization"
    }
  },

  "real-time-gps": {
    slug: "real-time-gps",
    title: "Real-time GPS",
    subtitle: "Verify location, protect time",
    outcomes: [
      "30s ping interval",
      "100% breadcrumb trail",
      "Instant geo-fence alerts"
    ],
    painSolveHeading: "Stop wondering where crews are",
    painSolveSubheading: "Live GPS tracking with breadcrumb trail and arrival verification",
    pains: [
      "'Where are they?' calls all day",
      "Disputes on arrival time",
      "Lost crews without communication"
    ],
    solves: [
      "Map trail showing full day's path",
      "Auto arrive/leave timestamps",
      "Last ping with timestamp for offline crews"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to location visibility",
    steps: [
      { title: "Enable GPS", desc: "Crew opts in when starting shift" },
      { title: "View drive", desc: "Watch breadcrumb trail in real-time" },
      { title: "Review day", desc: "Check arrival/departure logs" }
    ],
    bottomCtaTitle: "Know where every crew is, always",
    bottomCtaSubtitle: "Start Free. Track your first crew today.",
    testimonial: {
      quote: "Proof of arrival ended disputes.",
      by: "Alina K., Admin"
    },
    faq: [
      { q: "Does it drain battery?", a: "Efficient background mode; minimal impact." },
      { q: "How private is crew location?", a: "Only visible to authorized managers during shifts." },
      { q: "How accurate is it?", a: "Typically 10-30 feet with good signal." }
    ],
    integrations: ["GPS provider"],
    related: [
      { slug: "dispatch-board-live-map", title: "Dispatch Board", description: "See all crews" },
      { slug: "route-optimization", title: "Routes", description: "Optimize paths" },
      { slug: "capacity-planning", title: "Capacity", description: "Balance load" }
    ],
    seo: {
      title: "Real-time GPS Tracking • Field Service Software",
      description: "Verify location, track crews, and protect your time with live GPS breadcrumbs.",
      canonical: "https://linkservicepro.com/features/real-time-gps"
    }
  },

  "capacity-planning": {
    slug: "capacity-planning",
    title: "Capacity Planning",
    subtitle: "Balance workload and prevent overtime",
    outcomes: [
      "−22% overtime",
      "+12% utilization",
      "0 double-books"
    ],
    painSolveHeading: "Stop surprise overtime",
    painSolveSubheading: "Balance crew workload and prevent Friday explosions",
    pains: [
      "Surprise overtime on Fridays",
      "Idle gaps in some crews' schedules",
      "Overloading favorite techs"
    ],
    solves: [
      "Set hour caps per crew/truck",
      "Visual heatmap showing load balance",
      "Auto-balancing prompts when over capacity"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to balanced capacity",
    steps: [
      { title: "Set caps", desc: "Define max hours per crew/day" },
      { title: "Review heatmap", desc: "See color-coded capacity view" },
      { title: "Shift jobs", desc: "Rebalance to prevent overtime" }
    ],
    bottomCtaTitle: "Balance your crews, cut overtime",
    bottomCtaSubtitle: "Start Free. Set capacity caps today.",
    testimonial: {
      quote: "Fridays stopped exploding.",
      by: "Roni P., Scheduler"
    },
    faq: [
      { q: "Can I set different caps per crew?", a: "Yes. Each crew/truck can have unique limits." },
      { q: "What if I need to override?", a: "Manual override available with warning prompt." },
      { q: "Does it account for drive time?", a: "Yes. Total hours include travel estimates." }
    ],
    integrations: ["QuickBooks", "Xero"],
    related: [
      { slug: "drag-and-drop-scheduling", title: "Scheduling", description: "Drag jobs" },
      { slug: "route-optimization", title: "Routes", description: "Optimize" },
      { slug: "recurring-jobs", title: "Recurring", description: "Auto-repeat" }
    ],
    seo: {
      title: "Capacity Planning • Field Service Software",
      description: "Balance workload and prevent overtime with hour caps and heatmap views.",
      canonical: "https://linkservicepro.com/features/capacity-planning"
    }
  },

  "automated-reminders": {
    slug: "automated-reminders",
    title: "Automated Reminders",
    subtitle: "Fewer no-shows. Happier customers.",
    outcomes: [
      "−35% no-shows",
      "+9% reviews",
      "−20% support calls"
    ],
    painSolveHeading: "Cut no-shows by a third",
    painSolveSubheading: "Automated SMS and email reminders at the right times",
    pains: [
      "Customers forget appointments",
      "Wrong windows communicated",
      "Manual reminder texts all day"
    ],
    solves: [
      "Time-based reminder sequences (48hr, 24hr, 2hr)",
      "Synced service windows in all messages",
      "Rule-based triggers for weather/reschedules"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to fewer no-shows",
    steps: [
      { title: "Choose cadence", desc: "Set reminder timing (48hr, 24hr, etc.)" },
      { title: "Preview", desc: "Review message templates" },
      { title: "Go live", desc: "Reminders send automatically" }
    ],
    bottomCtaTitle: "Cut no-shows, delight customers",
    bottomCtaSubtitle: "Start Free. Set up reminders in minutes.",
    testimonial: {
      quote: "No-shows dropped by a third overnight.",
      by: "Carlos M., Scheduler"
    },
    faq: [
      { q: "Can I customize message text?", a: "Yes. Full template editor with merge fields." },
      { q: "Do customers opt out?", a: "Yes. One-click unsubscribe link included." },
      { q: "Can I send day-before only?", a: "Yes. Choose any cadence: 48hr, 24hr, 2hr, or custom." }
    ],
    integrations: ["SMS/Email", "Weather API"],
    related: [
      { slug: "drag-and-drop-scheduling", title: "Scheduling", description: "Drag jobs" },
      { slug: "two-way-messaging", title: "2-Way SMS", description: "Text back" },
      { slug: "review-requests", title: "Reviews", description: "Ask for feedback" }
    ],
    seo: {
      title: "Automated Reminders • Field Service Software",
      description: "Fewer no-shows with automated SMS and email appointment reminders.",
      canonical: "https://linkservicepro.com/features/automated-reminders"
    }
  },

  "recurring-jobs": {
    slug: "recurring-jobs",
    title: "Recurring Jobs",
    subtitle: "Set it once. It runs itself.",
    outcomes: [
      "−70% admin time",
      "100% pattern accuracy",
      "+15% lifetime value"
    ],
    painSolveHeading: "Stop manually recreating jobs",
    painSolveSubheading: "Set patterns once, auto-generate months of maintenance",
    pains: [
      "Missed recurring service appointments",
      "Scheduling conflicts with holidays",
      "Manual rebuild of next month's calendar"
    ],
    solves: [
      "Rule engine generates future jobs automatically",
      "Holiday skip or shift rules",
      "Bulk roll: create next 3 months in one click"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to auto-recurring jobs",
    steps: [
      { title: "Create rule", desc: "Set frequency (weekly, monthly, etc.)" },
      { title: "Apply season", desc: "Add holiday skip/shift rules" },
      { title: "Generate", desc: "Auto-create next quarter's jobs" }
    ],
    bottomCtaTitle: "Maintenance contracts on autopilot",
    bottomCtaSubtitle: "Start Free. Set your first recurring pattern.",
    testimonial: {
      quote: "Maintenance contracts run themselves now.",
      by: "Jasmine T., Service Coordinator"
    },
    faq: [
      { q: "Can I pause a recurrence?", a: "Yes. Suspend/resume any time without deleting the rule." },
      { q: "What if customer moves?", a: "Update address once; all future jobs inherit the change." },
      { q: "How far ahead does it generate?", a: "Configurable. Default is 90 days ahead." }
    ],
    integrations: ["QuickBooks", "Xero"],
    related: [
      { slug: "drag-and-drop-scheduling", title: "Scheduling", description: "Drag jobs" },
      { slug: "capacity-planning", title: "Capacity", description: "Balance load" },
      { slug: "automated-reminders", title: "Reminders", description: "Cut no-shows" }
    ],
    seo: {
      title: "Recurring Jobs • Field Service Software",
      description: "Set it once, it runs itself. Auto-generate maintenance jobs with patterns.",
      canonical: "https://linkservicepro.com/features/recurring-jobs"
    }
  },

  "crm-leads": {
    slug: "crm-leads",
    title: "CRM & Leads",
    subtitle: "Capture, qualify, follow up—automatically",
    outcomes: [
      "+24% win rate",
      "−30% response time",
      "+18% repeat rate"
    ],
    painSolveHeading: "Never lose a lead again",
    painSolveSubheading: "Central inbox with automatic scoring and follow-up sequences",
    pains: [
      "Lost sticky notes and missed calls",
      "Stale inbox with no follow-up",
      "No customer history at quote time"
    ],
    solves: [
      "Central inbox with lead capture",
      "Automatic scoring (hot/warm/cold)",
      "Email/SMS sequences for nurture"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps from lead to quote",
    steps: [
      { title: "Capture", desc: "Web form, call, or manual entry" },
      { title: "Qualify", desc: "Score and assign to sales" },
      { title: "Follow up", desc: "Auto-sequence keeps leads warm" }
    ],
    bottomCtaTitle: "Close more leads, faster",
    bottomCtaSubtitle: "Start Free. Capture your first lead today.",
    testimonial: {
      quote: "We don't lose leads in the shuffle anymore.",
      by: "Nina R., Sales Manager"
    },
    faq: [
      { q: "Can I import existing leads?", a: "Yes. CSV import with field mapping." },
      { q: "How does scoring work?", a: "Based on source, job value, and engagement." },
      { q: "Can I customize follow-up timing?", a: "Yes. Set delay and message per sequence step." }
    ],
    integrations: ["Website forms", "Email", "SMS"],
    related: [
      { slug: "quote-esign", title: "Quotes", description: "E-sign quotes" },
      { slug: "two-way-messaging", title: "SMS", description: "Text leads" },
      { slug: "review-requests", title: "Reviews", description: "Build reputation" }
    ],
    seo: {
      title: "CRM & Lead Management • Field Service Software",
      description: "Capture, qualify, and follow up with leads automatically.",
      canonical: "https://linkservicepro.com/features/crm-leads"
    }
  },

  "quote-esign": {
    slug: "quote-esign",
    title: "Quote Builder + E-Sign",
    subtitle: "Professional estimates, signed faster",
    outcomes: [
      "+22% win rate",
      "Same-day approvals",
      "<2 min build time"
    ],
    painSolveHeading: "Win more jobs with professional quotes",
    painSolveSubheading: "Branded PDFs with e-signature and optional deposit collection",
    pains: [
      "Handwritten estimates look unprofessional",
      "Back-and-forth email delays approval",
      "Lost paper quotes, no tracking"
    ],
    solves: [
      "Branded PDF quotes with line items and photos",
      "Quick templates (furnace install, panel upgrade, etc.)",
      "One-tap sign and optional deposit payment"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps from quote to signed",
    steps: [
      { title: "Build", desc: "Add line items, photos, terms" },
      { title: "Send", desc: "Email or text quote link to customer" },
      { title: "Sign & deposit", desc: "Customer signs and optionally pays deposit" }
    ],
    bottomCtaTitle: "Get quotes signed on the spot",
    bottomCtaSubtitle: "Start Free. Send your first quote in 2 minutes.",
    testimonial: {
      quote: "Customers sign on their phones before we leave.",
      by: "Omar K., Owner, Electrical"
    },
    faq: [
      { q: "Can I require a deposit?", a: "Yes. Set deposit % and collect via card or ACH." },
      { q: "Is e-signature legally binding?", a: "Yes. Compliant with ESIGN and UETA." },
      { q: "Can I clone a quote?", a: "Yes. Duplicate and edit for similar jobs." }
    ],
    integrations: ["E-signature", "Payments", "QuickBooks", "Xero"],
    related: [
      { slug: "crm-leads", title: "CRM", description: "Capture leads" },
      { slug: "work-orders", title: "Work Orders", description: "Execute jobs" },
      { slug: "deposits-partials", title: "Deposits", description: "Collect upfront" }
    ],
    seo: {
      title: "Quote Builder + E-Sign • Field Service Software",
      description: "Professional estimates with e-signature and deposit collection.",
      canonical: "https://linkservicepro.com/features/quote-esign"
    }
  },

  "work-orders": {
    slug: "work-orders",
    title: "Work Orders",
    subtitle: "Clear instructions. Zero confusion.",
    outcomes: [
      "−25% callbacks",
      "+11% first-time fix rate",
      "100% photo proof"
    ],
    painSolveHeading: "Eliminate callbacks with clear instructions",
    painSolveSubheading: "Task checklists, photo proof, and parts tracking",
    pains: [
      "Vague job instructions cause errors",
      "Techs skip critical steps",
      "No proof work was done"
    ],
    solves: [
      "Pre-built checklists for common jobs",
      "Required photo upload before close",
      "Parts notes sync to invoice and inventory"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to perfect execution",
    steps: [
      { title: "Create", desc: "Add checklist, notes, and parts needed" },
      { title: "Assign", desc: "Route to crew with instructions" },
      { title: "Complete", desc: "Check off tasks, upload photos, close" }
    ],
    bottomCtaTitle: "Do it right the first time",
    bottomCtaSubtitle: "Start Free. Create your first work order.",
    testimonial: {
      quote: "Callbacks dropped because techs follow the checklist.",
      by: "Troy B., Service Manager"
    },
    faq: [
      { q: "Can I create custom checklists?", a: "Yes. Build templates for each service type." },
      { q: "Are photos required?", a: "Configurable. Set required/optional per job type." },
      { q: "Can techs add notes in the field?", a: "Yes. Text, voice, or photo notes from mobile app." }
    ],
    integrations: ["Parts suppliers", "QuickBooks", "Xero"],
    related: [
      { slug: "quote-esign", title: "Quotes", description: "Build quotes" },
      { slug: "project-tracking", title: "Projects", description: "Multi-visit" },
      { slug: "invoicing-batch", title: "Invoicing", description: "Bill jobs" }
    ],
    seo: {
      title: "Work Orders • Field Service Software",
      description: "Clear instructions, photo proof, and parts tracking for perfect execution.",
      canonical: "https://linkservicepro.com/features/work-orders"
    }
  },

  "project-tracking": {
    slug: "project-tracking",
    title: "Project Tracking (multi-WO)",
    subtitle: "Multi-visit jobs under control",
    outcomes: [
      "100% docs in one place",
      "+9% margin on projects",
      "Fewer surprises"
    ],
    painSolveHeading: "Organize multi-visit jobs",
    painSolveSubheading: "One project folder with all linked docs and timeline view",
    pains: [
      "Lost project files across emails",
      "Version chaos on multi-visit jobs",
      "No visibility into overall progress"
    ],
    solves: [
      "One project folder with all linked docs",
      "Timeline showing WO sequence and status",
      "Change orders tracked and approved in-system"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to project control",
    steps: [
      { title: "Create project", desc: "Name, address, and scope" },
      { title: "Attach docs", desc: "Link WOs, estimates, invoices" },
      { title: "Track visits", desc: "Monitor progress on timeline" }
    ],
    bottomCtaTitle: "Multi-week jobs stay organized",
    bottomCtaSubtitle: "Start Free. Create your first project.",
    testimonial: {
      quote: "Multi-week jobs stay organized start to finish.",
      by: "Leah S., Project Manager"
    },
    faq: [
      { q: "Can I track multiple crews?", a: "Yes. Assign different WOs to different crews." },
      { q: "How do I handle change orders?", a: "Create new WO; link to parent project." },
      { q: "Can I see total project cost?", a: "Yes. Rollup of all linked WOs and invoices." }
    ],
    integrations: ["QuickBooks", "Xero", "Document storage"],
    related: [
      { slug: "work-orders", title: "Work Orders", description: "Execute jobs" },
      { slug: "invoicing-batch", title: "Invoicing", description: "Bill projects" },
      { slug: "job-costing", title: "Job Costing", description: "Track profit" }
    ],
    seo: {
      title: "Project Tracking • Field Service Software",
      description: "Multi-visit jobs under control with linked docs and timeline view.",
      canonical: "https://linkservicepro.com/features/project-tracking"
    }
  },

  "customer-portal": {
    slug: "customer-portal",
    title: "Customer Portal",
    subtitle: "Quotes, invoices, job history—self-serve",
    outcomes: [
      "−40% support calls",
      "+12% on-time payments",
      "+9% review volume"
    ],
    painSolveHeading: "End phone tag forever",
    painSolveSubheading: "Let customers help themselves 24/7",
    pains: [
      "Phone tag over invoice questions",
      "Payment delays due to lost invoices",
      "Customers can't find their service history"
    ],
    solves: [
      "Self-serve portal with all docs",
      "Card on file for one-click payment",
      "Job history with photos and notes"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to customer self-service",
    steps: [
      { title: "Invite", desc: "Send portal invite link via email/SMS" },
      { title: "View", desc: "Customer logs in to see quotes, invoices, history" },
      { title: "Pay", desc: "One-click payment from portal" }
    ],
    bottomCtaTitle: "Give customers the power to self-serve",
    bottomCtaSubtitle: "Start Free. Set up portal in 5 minutes.",
    testimonial: {
      quote: "Customers love seeing their service history online.",
      by: "Derek P., Operations"
    },
    faq: [
      { q: "Is it mobile-friendly?", a: "Yes. Fully responsive design." },
      { q: "Can customers request service?", a: "Yes. Service request form in portal." },
      { q: "How secure is payment?", a: "PCI-compliant; cards tokenized, never stored." }
    ],
    integrations: ["Payments", "Email", "SMS"],
    related: [
      { slug: "quote-esign", title: "Quotes", description: "E-sign" },
      { slug: "invoicing-batch", title: "Invoicing", description: "Bill jobs" },
      { slug: "review-requests", title: "Reviews", description: "Ask feedback" }
    ],
    seo: {
      title: "Customer Portal • Field Service Software",
      description: "Quotes, invoices, job history—customers self-serve 24/7.",
      canonical: "https://linkservicepro.com/features/customer-portal"
    }
  },

  "two-way-messaging": {
    slug: "two-way-messaging",
    title: "2-Way SMS/Email",
    subtitle: "Real conversations. No personal numbers.",
    outcomes: [
      "−50% phone time",
      "+17% response rate",
      "100% job-linked threads"
    ],
    painSolveHeading: "Stop losing customer messages",
    painSolveSubheading: "One business inbox for all customer texts and emails",
    pains: [
      "Lost customer texts on personal phones",
      "No record of what was promised",
      "Can't see conversation history when tech is off"
    ],
    solves: [
      "Team inbox visible to office and managers",
      "Every message tied to job record",
      "Template library for fast replies"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to business texting",
    steps: [
      { title: "Connect number", desc: "Use company number for SMS/email" },
      { title: "Reply", desc: "Team responds from shared inbox" },
      { title: "Close", desc: "Thread archived with job record" }
    ],
    bottomCtaTitle: "Text customers like a pro",
    bottomCtaSubtitle: "Start Free. Get your business number today.",
    testimonial: {
      quote: "We see every customer message in one place now.",
      by: "Kim H., Customer Service"
    },
    faq: [
      { q: "Can customers reply to reminders?", a: "Yes. Replies land in team inbox." },
      { q: "Can multiple people respond?", a: "Yes. Team sees who responded last." },
      { q: "Can I use my current number?", a: "Yes. Port existing number or get new one." }
    ],
    integrations: ["SMS provider", "Email"],
    related: [
      { slug: "automated-reminders", title: "Reminders", description: "Cut no-shows" },
      { slug: "crm-leads", title: "CRM", description: "Capture leads" },
      { slug: "customer-portal", title: "Portal", description: "Self-serve" }
    ],
    seo: {
      title: "2-Way SMS & Email Messaging • Field Service Software",
      description: "Real conversations with customers. No personal numbers. Team inbox.",
      canonical: "https://linkservicepro.com/features/two-way-messaging"
    }
  },

  "review-requests": {
    slug: "review-requests",
    title: "Review Requests",
    subtitle: "Build reputation on autopilot",
    outcomes: [
      "+1.2★ avg rating",
      "+3× review volume",
      "Automated timing"
    ],
    painSolveHeading: "Build 5-star reputation automatically",
    painSolveSubheading: "Auto-request reviews after job completion, track by tech",
    pains: [
      "Few reviews compared to competitors",
      "Only angry customers leave feedback",
      "No way to track which techs get good reviews"
    ],
    solves: [
      "Request at the right moment (just after job close)",
      "Send to Google, Yelp, Facebook—customer chooses",
      "Leaderboard shows which techs earn 5 stars"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to more reviews",
    steps: [
      { title: "Trigger", desc: "Auto-send after job marked complete" },
      { title: "Send", desc: "SMS or email with review site links" },
      { title: "Track", desc: "Dashboard shows reviews by tech and trend" }
    ],
    bottomCtaTitle: "Triple your review volume",
    bottomCtaSubtitle: "Start Free. Send your first review request.",
    testimonial: {
      quote: "We tripled our Google reviews in 3 months.",
      by: "Vanessa L., Marketing"
    },
    faq: [
      { q: "Can I delay the request?", a: "Yes. Set delay (immediate, 1 day, 3 days, etc.)." },
      { q: "What if customer had a bad experience?", a: "Filter sends private feedback form instead." },
      { q: "Can I customize the message?", a: "Yes. Full template editor with merge fields." }
    ],
    integrations: ["Google", "Yelp", "Facebook", "SMS", "Email"],
    related: [
      { slug: "customer-portal", title: "Portal", description: "Self-serve" },
      { slug: "automated-reminders", title: "Reminders", description: "Cut no-shows" },
      { slug: "crm-leads", title: "CRM", description: "Leads" }
    ],
    seo: {
      title: "Review Requests • Field Service Software",
      description: "Build reputation on autopilot with automated review requests.",
      canonical: "https://linkservicepro.com/features/review-requests"
    }
  },

  "invoicing-batch": {
    slug: "invoicing-batch",
    title: "Invoicing & Batch",
    subtitle: "Send invoices faster. Get paid sooner.",
    outcomes: [
      "−5 days DSO",
      "+100% batch throughput",
      "0 lost invoices"
    ],
    painSolveHeading: "Stop chasing payments",
    painSolveSubheading: "Invoice faster, get paid faster, improve cash flow",
    pains: [
      "Piles of paper invoices to mail",
      "Missed invoices = lost revenue",
      "Manual entry into accounting"
    ],
    solves: [
      "Auto-generate from completed work orders",
      "Batch select and send 50+ invoices at once",
      "Status tracking (sent, viewed, paid)"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps from job done to paid",
    steps: [
      { title: "Select jobs", desc: "Choose completed WOs to invoice" },
      { title: "Review", desc: "Check line items and totals" },
      { title: "Send", desc: "Email or text invoice links" }
    ],
    bottomCtaTitle: "Get paid in days, not weeks",
    bottomCtaSubtitle: "Start Free. First invoice in 60 seconds.",
    testimonial: {
      quote: "Billing Friday afternoons takes 20 minutes now.",
      by: "Rachel D., Bookkeeper"
    },
    faq: [
      { q: "Can I customize invoice templates?", a: "Yes. Logo, colors, terms, and footer text." },
      { q: "Can I auto-send on WO close?", a: "Yes. Enable auto-invoice rule per job type." },
      { q: "Does it track payment status?", a: "Yes. Dashboard shows sent, viewed, paid, overdue." }
    ],
    integrations: ["QuickBooks", "Xero", "Email", "SMS"],
    related: [
      { slug: "work-orders", title: "Work Orders", description: "Execute jobs" },
      { slug: "payments", title: "Payments", description: "Collect online" },
      { slug: "accounting-sync", title: "Accounting", description: "Sync books" }
    ],
    seo: {
      title: "Invoicing & Batch • Field Service Software",
      description: "Send invoices faster and get paid sooner with batch invoicing.",
      canonical: "https://linkservicepro.com/features/invoicing-batch"
    }
  },

  "payments": {
    slug: "payments",
    title: "Online & Field Payments",
    subtitle: "Card, ACH, tap-to-pay—office or field",
    outcomes: [
      "+37% same-day payment rate",
      "0% cards stored on device",
      "PCI compliance"
    ],
    painSolveHeading: "Get paid on the spot",
    painSolveSubheading: "Accept cards, ACH, and tap-to-pay in field or online",
    pains: [
      "Checks only; customers don't carry them",
      "Card numbers written on paper (security risk)",
      "Delayed payment until customer mails check"
    ],
    solves: [
      "Link payment or tap terminal in field",
      "Tokenized cards; compliant and secure",
      "Receipts auto-emailed to customer"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to payment",
    steps: [
      { title: "Collect", desc: "Enter card or tap terminal" },
      { title: "Authorize", desc: "Secure tokenized payment" },
      { title: "Receipt", desc: "Auto-email receipt to customer" }
    ],
    bottomCtaTitle: "Get paid before leaving the job",
    bottomCtaSubtitle: "Start Free. Accept your first payment today.",
    testimonial: {
      quote: "We get paid before leaving the job site now.",
      by: "Marcus T., Field Tech Lead"
    },
    faq: [
      { q: "What payment methods are supported?", a: "Card (Visa, MC, Amex, Discover), ACH, tap-to-pay." },
      { q: "How much are processing fees?", a: "Depends on provider; typically 2.5-3% + $0.30." },
      { q: "Is it safe to save cards?", a: "Yes. Tokenized storage; no raw card data retained." }
    ],
    integrations: ["Stripe", "Square", "Payment gateway"],
    related: [
      { slug: "invoicing-batch", title: "Invoicing", description: "Bill jobs" },
      { slug: "deposits-partials", title: "Deposits", description: "Collect upfront" },
      { slug: "customer-portal", title: "Portal", description: "Self-serve pay" }
    ],
    seo: {
      title: "Online & Field Payments • Field Service Software",
      description: "Accept card, ACH, and tap-to-pay in field or online. Get paid faster.",
      canonical: "https://linkservicepro.com/features/payments"
    }
  },

  "deposits-partials": {
    slug: "deposits-partials",
    title: "Deposits/Partials",
    subtitle: "Secure the job and cash flow",
    outcomes: [
      "30% typical deposit",
      "Faster project starts",
      "Less risk on large jobs"
    ],
    painSolveHeading: "Secure cash flow upfront",
    painSolveSubheading: "Collect deposits and milestone payments to reduce risk",
    pains: [
      "Jobs start without payment commitment",
      "Chasing final balances after completion",
      "Cash flow gaps on big projects"
    ],
    solves: [
      "Deposit required on e-sign of quote",
      "Milestone payment plan (50% start, 25% rough-in, 25% final)",
      "Balance due auto-calculated on completion invoice"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to secured payment",
    steps: [
      { title: "Set deposit", desc: "Choose % or fixed amount" },
      { title: "Collect", desc: "Customer pays deposit on quote approval" },
      { title: "Reconcile", desc: "Deposit credited to final invoice" }
    ],
    bottomCtaTitle: "No more unpaid starts",
    bottomCtaSubtitle: "Start Free. Collect your first deposit.",
    testimonial: {
      quote: "No more unpaid starts on big jobs.",
      by: "Yolanda F., Controller"
    },
    faq: [
      { q: "What's a typical deposit %?", a: "20-50% depending on job size and industry." },
      { q: "Can I require deposits only on large jobs?", a: "Yes. Set threshold (e.g., jobs >$2,000)." },
      { q: "How is deposit applied?", a: "Auto-deducted from final invoice total." }
    ],
    integrations: ["Payments", "QuickBooks", "Xero"],
    related: [
      { slug: "quote-esign", title: "Quotes", description: "E-sign" },
      { slug: "invoicing-batch", title: "Invoicing", description: "Bill" },
      { slug: "project-tracking", title: "Projects", description: "Multi-visit" }
    ],
    seo: {
      title: "Deposits & Partial Payments • Field Service Software",
      description: "Secure the job and cash flow with deposits and milestone payments.",
      canonical: "https://linkservicepro.com/features/deposits-partials"
    }
  },

  "job-costing": {
    slug: "job-costing",
    title: "Job Costing & Profit",
    subtitle: "Know your numbers on every job",
    outcomes: [
      "+6 pts margin improvement",
      "Live variance tracking",
      "Real cost visibility"
    ],
    painSolveHeading: "Stop guessing at profitability",
    painSolveSubheading: "Track labor, materials, and overhead per job in real-time",
    pains: [
      "Late spreadsheets; no real-time cost data",
      "Guesswork on profitability",
      "Can't identify which jobs lose money"
    ],
    solves: [
      "Live cost tracking as labor and materials log",
      "Alerts when actuals exceed quoted price",
      "Drill-down reports by job, crew, service line"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to profit visibility",
    steps: [
      { title: "Log", desc: "Track time and materials as work happens" },
      { title: "Compare", desc: "View actual vs. estimated costs" },
      { title: "Improve", desc: "Adjust pricing or processes for next job" }
    ],
    bottomCtaTitle: "See margin in real time",
    bottomCtaSubtitle: "Start Free. Track your first job cost.",
    testimonial: {
      quote: "We caught cost overruns before they ate our margin.",
      by: "Paul G., Controller"
    },
    faq: [
      { q: "Can I see cost variance in real-time?", a: "Yes. Dashboard updates as labor/materials log." },
      { q: "Can I compare jobs by service type?", a: "Yes. Filter by HVAC install, electrical panel, etc." },
      { q: "Does it include overhead?", a: "Yes. Allocate overhead % per job or service line." }
    ],
    integrations: ["QuickBooks", "Xero", "Payroll"],
    related: [
      { slug: "work-orders", title: "Work Orders", description: "Execute" },
      { slug: "project-tracking", title: "Projects", description: "Multi-visit" },
      { slug: "payroll-wage-scales", title: "Payroll", description: "Wage scales" }
    ],
    seo: {
      title: "Job Costing & Profit Tracking • Field Service Software",
      description: "Know your numbers on every job with real-time cost and profit tracking.",
      canonical: "https://linkservicepro.com/features/job-costing"
    }
  },

  "payroll-wage-scales": {
    slug: "payroll-wage-scales",
    title: "Payroll & Wage Scales",
    subtitle: "Accurate pay from the schedule",
    outcomes: [
      "100% wage scale accuracy",
      "0 pay disputes",
      "Automated overtime calc"
    ],
    painSolveHeading: "End pay disputes",
    painSolveSubheading: "Accurate wage scales and overtime calculation by state",
    pains: [
      "Manual pay calculation errors cause disputes",
      "Overtime surprises on payday",
      "No audit trail for hours worked"
    ],
    solves: [
      "Rule engine applies correct wage per role",
      "Auto-calc OT per state law (CA, NY, etc.)",
      "Export to ADP, Gusto, QuickBooks Payroll"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to accurate payroll",
    steps: [
      { title: "Define rules", desc: "Set wage scales and OT thresholds" },
      { title: "Review hours", desc: "Check logged time per crew" },
      { title: "Export", desc: "Send to payroll provider or pay manually" }
    ],
    bottomCtaTitle: "Accurate pay without spreadsheets",
    bottomCtaSubtitle: "Start Free. Set wage scales today.",
    testimonial: {
      quote: "No more pay disputes. Hours match the schedule.",
      by: "Sanjay P., HR Manager"
    },
    faq: [
      { q: "Can I set different rates per crew?", a: "Yes. Wage scales by role, experience, or crew." },
      { q: "Does it handle prevailing wage?", a: "Yes. Set prevailing wage rates per job or zip code." },
      { q: "Can I audit hours worked?", a: "Yes. Timesheet log with start/stop and location." }
    ],
    integrations: ["ADP", "Gusto", "QuickBooks Payroll"],
    related: [
      { slug: "job-costing", title: "Job Costing", description: "Track costs" },
      { slug: "capacity-planning", title: "Capacity", description: "Balance load" },
      { slug: "work-orders", title: "Work Orders", description: "Track time" }
    ],
    seo: {
      title: "Payroll & Wage Scales • Field Service Software",
      description: "Accurate pay from the schedule with wage scales and automated overtime.",
      canonical: "https://linkservicepro.com/features/payroll-wage-scales"
    }
  },

  "po-vendor": {
    slug: "po-vendor",
    title: "POs & Vendor Mgmt",
    subtitle: "Buy smart. Track vendors.",
    outcomes: [
      "−8% material cost",
      "100% PO coverage",
      "Tracked vendor insurance"
    ],
    painSolveHeading: "Control material costs",
    painSolveSubheading: "PO workflow with approval routing and vendor tracking",
    pains: [
      "Lost receipts and wrong pricing",
      "No record of what was ordered",
      "Expired vendor insurance goes unnoticed"
    ],
    solves: [
      "PO workflow with approval routing",
      "Receive against PO to track inventory",
      "Insurance cert storage with expiration alerts"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to vendor control",
    steps: [
      { title: "Create PO", desc: "Link to work order; add line items" },
      { title: "Receive", desc: "Scan/enter delivered items" },
      { title: "Reconcile", desc: "Match invoice to PO and close" }
    ],
    bottomCtaTitle: "Materials under control",
    bottomCtaSubtitle: "Start Free. Create your first PO.",
    testimonial: {
      quote: "We stopped overpaying and caught expired certs.",
      by: "Linda W., Purchasing"
    },
    faq: [
      { q: "Can I require approval for POs?", a: "Yes. Set approval threshold (e.g., >$500 needs manager OK)." },
      { q: "Can I track vendor performance?", a: "Yes. On-time delivery and quality score by vendor." },
      { q: "Does it sync with inventory?", a: "Yes. Received items update stock levels." }
    ],
    integrations: ["Parts suppliers", "QuickBooks", "Xero"],
    related: [
      { slug: "work-orders", title: "Work Orders", description: "Link POs" },
      { slug: "job-costing", title: "Job Costing", description: "Track costs" },
      { slug: "invoicing-batch", title: "Invoicing", description: "Bill" }
    ],
    seo: {
      title: "POs & Vendor Management • Field Service Software",
      description: "Buy smart and track vendors with PO workflow and approval routing.",
      canonical: "https://linkservicepro.com/features/po-vendor"
    }
  },

  "accounting-sync": {
    slug: "accounting-sync",
    title: "QuickBooks/Xero Sync",
    subtitle: "Books that stay in sync",
    outcomes: [
      "0 double entry",
      "Real-time sync",
      "Mapped chart of accounts"
    ],
    painSolveHeading: "End double data entry",
    painSolveSubheading: "Two-way sync between field software and accounting",
    pains: [
      "Duplicate data entry in field software and accounting",
      "Mismatches between systems",
      "Late month-end close waiting for data entry"
    ],
    solves: [
      "Mapped field sync to chart of accounts",
      "Auto-push invoices and payments as they happen",
      "Error queue catches sync issues for review"
    ],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to synced books",
    steps: [
      { title: "Connect", desc: "Authorize QuickBooks or Xero integration" },
      { title: "Map", desc: "Match customers, items, tax codes" },
      { title: "Sync", desc: "Real-time or scheduled sync runs automatically" }
    ],
    bottomCtaTitle: "Books match the work",
    bottomCtaSubtitle: "Start Free. Sync your first invoice.",
    testimonial: {
      quote: "Month-end close went from 3 days to 3 hours.",
      by: "Angela M., Accountant"
    },
    faq: [
      { q: "Is it two-way sync?", a: "Yes. Customers/items sync both directions; invoices push one way." },
      { q: "What if there's a sync error?", a: "Error queue shows issue; resolve manually and retry." },
      { q: "Can I pause sync?", a: "Yes. Disable/enable sync any time." }
    ],
    integrations: ["QuickBooks Online", "QuickBooks Desktop", "Xero"],
    related: [
      { slug: "invoicing-batch", title: "Invoicing", description: "Bill jobs" },
      { slug: "payments", title: "Payments", description: "Collect" },
      { slug: "job-costing", title: "Job Costing", description: "Track profit" }
    ],
    seo: {
      title: "QuickBooks & Xero Sync • Field Service Software",
      description: "Books that stay in sync with two-way accounting integration.",
      canonical: "https://linkservicepro.com/features/accounting-sync"
    }
  },
  "scheduling": {
    slug: "scheduling",
    title: "Scheduling",
    subtitle: "Drag-and-drop calendar sync with Google & Apple",
    outcomes: ["Save time", "Reduce conflicts", "Keep crews aligned"],
    painSolveHeading: "Scheduling made simple",
    painSolveSubheading: "Streamline your crew scheduling",
    pains: ["Manual scheduling takes too long", "Double bookings happen", "Hard to see crew availability"],
    solves: ["Visual drag-and-drop calendar", "Conflict detection", "Capacity planning"],
    stepsHeading: "How it works",
    stepsSubheading: "Three steps to better scheduling",
    steps: [
      { title: "Add jobs", desc: "Create jobs with time estimates" },
      { title: "Assign crews", desc: "Drag jobs to crew calendars" },
      { title: "Sync", desc: "Calendar syncs with Google/Apple" }
    ],
    bottomCtaTitle: "Start scheduling smarter",
    bottomCtaSubtitle: "Free forever. No credit card required.",
    faq: [
      { q: "Does it sync with my calendar?", a: "Yes. Two-way sync with Google Calendar and Apple Calendar." },
      { q: "Can I see all crews at once?", a: "Yes. View all crew calendars side by side." }
    ],
    related: [],
    seo: {
      title: "Scheduling Software • LinkServicePro",
      description: "Drag-and-drop scheduling with calendar sync.",
      canonical: "https://linkservicepro.com/features/scheduling"
    }
  },
  "estimates": {
    slug: "estimates",
    title: "Estimates & E-Signatures",
    subtitle: "Professional quotes with digital signatures",
    outcomes: ["Close faster", "Look professional", "Get approval instantly"],
    painSolveHeading: "Win more jobs",
    painSolveSubheading: "Professional estimates close deals",
    pains: ["Quotes get lost in email", "Can't sign on the spot", "Hard to track quote status"],
    solves: ["Template-based quotes", "E-signature capture", "Quote status tracking"],
    stepsHeading: "How it works",
    stepsSubheading: "Quote to job in minutes",
    steps: [
      { title: "Build", desc: "Use templates for fast quoting" },
      { title: "Send", desc: "Email or present on-site" },
      { title: "Sign", desc: "Customer signs digitally" }
    ],
    bottomCtaTitle: "Start winning more work",
    bottomCtaSubtitle: "Free forever. No credit card required.",
    faq: [
      { q: "Are e-signatures legal?", a: "Yes. Fully compliant with ESIGN Act." },
      { q: "Can I customize templates?", a: "Yes. Create unlimited quote templates." }
    ],
    related: [],
    seo: {
      title: "Estimates & E-Signatures • LinkServicePro",
      description: "Professional estimates with digital signatures.",
      canonical: "https://linkservicepro.com/features/estimates"
    }
  },
  "messaging-reminders": {
    slug: "messaging-reminders",
    title: "Automated Reminders & Messaging",
    subtitle: "Cut no-shows with SMS and email reminders",
    outcomes: ["40% fewer no-shows", "Less phone tag", "Better customer experience"],
    painSolveHeading: "Stop no-shows",
    painSolveSubheading: "Automated reminders keep customers informed",
    pains: ["Too many no-shows", "Customers forget appointments", "Too much time on phone"],
    solves: ["Automated SMS/email", "Confirmation links", "Two-way messaging"],
    stepsHeading: "How it works",
    stepsSubheading: "Set it and forget it",
    steps: [
      { title: "Set rules", desc: "Define when reminders go out" },
      { title: "Auto-send", desc: "System sends automatically" },
      { title: "Track", desc: "See confirmations and replies" }
    ],
    bottomCtaTitle: "Reduce no-shows today",
    bottomCtaSubtitle: "Start on Starter plan.",
    faq: [
      { q: "Can customers reply to messages?", a: "Yes. Two-way SMS and email." },
      { q: "When do reminders go out?", a: "You choose. Typically 24-48 hours before." }
    ],
    related: [],
    seo: {
      title: "Automated Reminders • LinkServicePro",
      description: "Cut no-shows with automated SMS and email reminders.",
      canonical: "https://linkservicepro.com/features/messaging-reminders"
    }
  },
  "recurring": {
    slug: "recurring",
    title: "Recurring Jobs",
    subtitle: "Automate repeat service agreements",
    outcomes: ["Predictable revenue", "Never miss a service", "Happy maintenance customers"],
    painSolveHeading: "Automate repeat work",
    painSolveSubheading: "Set once, repeat forever",
    pains: ["Forgetting scheduled maintenance", "Manual recurring scheduling", "Lost contract revenue"],
    solves: ["Auto-schedule repeats", "Contract templates", "Renewal reminders"],
    stepsHeading: "How it works",
    stepsSubheading: "Set and forget",
    steps: [
      { title: "Create template", desc: "Define service details" },
      { title: "Set schedule", desc: "Weekly, monthly, or custom" },
      { title: "Auto-book", desc: "Jobs create automatically" }
    ],
    bottomCtaTitle: "Automate your recurring work",
    bottomCtaSubtitle: "Available on Essential plan and above.",
    faq: [
      { q: "Can I pause a recurring job?", a: "Yes. Pause or skip occurrences anytime." },
      { q: "Do customers get reminders?", a: "Yes. Each occurrence gets automatic reminders." }
    ],
    related: [],
    seo: {
      title: "Recurring Jobs • LinkServicePro",
      description: "Automate warranty and maintenance visits.",
      canonical: "https://linkservicepro.com/features/recurring"
    }
  },
  "routing-gps": {
    slug: "routing-gps",
    title: "Route Optimization & GPS",
    subtitle: "Cut drive time with smart routing",
    outcomes: ["Save 2-4 hours/day", "Less fuel costs", "More jobs per crew"],
    painSolveHeading: "Stop wasting drive time",
    painSolveSubheading: "Optimize routes automatically",
    pains: ["Too much windshield time", "Inefficient routing", "Can't track crew locations"],
    solves: ["One-click optimization", "Live GPS tracking", "Route efficiency reports"],
    stepsHeading: "How it works",
    stepsSubheading: "Route smarter, not harder",
    steps: [
      { title: "Add stops", desc: "Load jobs for the day" },
      { title: "Optimize", desc: "AI suggests best route" },
      { title: "Track", desc: "Monitor crews in real-time" }
    ],
    bottomCtaTitle: "Reduce drive time today",
    bottomCtaSubtitle: "Available on Essential plan and above.",
    faq: [
      { q: "Does it account for traffic?", a: "Routes based on distance and time windows." },
      { q: "Can I manually adjust routes?", a: "Yes. Override suggested routes anytime." }
    ],
    related: [],
    seo: {
      title: "Route Optimization & GPS • LinkServicePro",
      description: "Cut windshield time with optimized routing.",
      canonical: "https://linkservicepro.com/features/routing-gps"
    }
  },
  "inventory-costing": {
    slug: "inventory-costing",
    title: "Parts Inventory & Job Costing",
    subtitle: "Track parts and profitability",
    outcomes: ["Know real job costs", "Never run out of parts", "Improve margins"],
    painSolveHeading: "Track costs and inventory",
    painSolveSubheading: "Know what each job really costs",
    pains: ["Unknown job profitability", "Running out of parts", "Hard to track costs"],
    solves: ["Part inventory tracking", "Job cost breakdowns", "Profitability reports"],
    stepsHeading: "How it works",
    stepsSubheading: "Track every dollar",
    steps: [
      { title: "Add parts", desc: "Build your parts catalog" },
      { title: "Track usage", desc: "Log parts used per job" },
      { title: "Analyze", desc: "See profit per job" }
    ],
    bottomCtaTitle: "Start tracking profitability",
    bottomCtaSubtitle: "Available on Premium plan and above.",
    faq: [
      { q: "Can I set reorder alerts?", a: "Yes. Get notified when parts run low." },
      { q: "Does it sync with accounting?", a: "Yes. Integrates with QuickBooks and Xero." }
    ],
    related: [],
    seo: {
      title: "Inventory & Job Costing • LinkServicePro",
      description: "Track parts and know your real job costs.",
      canonical: "https://linkservicepro.com/features/inventory-costing"
    }
  },
  "analytics": {
    slug: "analytics",
    title: "Advanced Reporting & Analytics",
    subtitle: "Dashboards and custom reports",
    outcomes: ["Data-driven decisions", "Spot trends early", "Optimize operations"],
    painSolveHeading: "Know your numbers",
    painSolveSubheading: "Reports that drive better decisions",
    pains: ["Flying blind on metrics", "No visibility into trends", "Hard to make data-driven decisions"],
    solves: ["Real-time dashboards", "Custom report builder", "Trend analysis"],
    stepsHeading: "How it works",
    stepsSubheading: "Insights in three clicks",
    steps: [
      { title: "Choose metrics", desc: "Pick what to track" },
      { title: "Build dashboard", desc: "Customize your view" },
      { title: "Analyze", desc: "Spot trends and opportunities" }
    ],
    bottomCtaTitle: "Start making data-driven decisions",
    bottomCtaSubtitle: "Available on Premium plan and above.",
    faq: [
      { q: "Can I export reports?", a: "Yes. Export to PDF, Excel, or CSV." },
      { q: "What metrics can I track?", a: "Revenue, jobs, crew efficiency, customer satisfaction, and more." }
    ],
    related: [],
    seo: {
      title: "Analytics & Reporting • LinkServicePro",
      description: "Advanced dashboards and custom reports.",
      canonical: "https://linkservicepro.com/features/analytics"
    }
  },
  "custom-checklists": {
    slug: "custom-checklists",
    title: "Custom Checklists & Fields",
    subtitle: "Capture exactly the data you need",
    outcomes: ["Standardize quality", "Capture custom data", "Build your process"],
    painSolveHeading: "Your process, your way",
    painSolveSubheading: "Custom fields for custom workflows",
    pains: ["Can't capture job-specific data", "Inconsistent work quality", "No standard procedures"],
    solves: ["Custom form builder", "Job-type checklists", "Photo attachments"],
    stepsHeading: "How it works",
    stepsSubheading: "Build once, use forever",
    steps: [
      { title: "Design form", desc: "Add custom fields and checklists" },
      { title: "Assign", desc: "Attach to job types" },
      { title: "Collect", desc: "Crews complete in the field" }
    ],
    bottomCtaTitle: "Standardize your process",
    bottomCtaSubtitle: "Available on Premium plan and above.",
    faq: [
      { q: "What field types are supported?", a: "Text, numbers, dropdowns, checkboxes, dates, photos, and signatures." },
      { q: "Can I require certain fields?", a: "Yes. Mark fields as required to ensure completion." }
    ],
    related: [],
    seo: {
      title: "Custom Checklists & Fields • LinkServicePro",
      description: "Build custom forms and checklists for any job type.",
      canonical: "https://linkservicepro.com/features/custom-checklists"
    }
  }
};
