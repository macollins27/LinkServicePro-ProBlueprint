// Feature Landing Page Data - Single authentic image per feature
// Reuses one image for: hero, blurred backdrop, and 1:1 related thumbnail

export interface FeatureLandingPage {
  slug: string;
  name: string;
  subtitle: string;
  cluster: string;
  kpis: Array<{
    value: string;
    label: string;
  }>;
  bullets: string[];
  pain: string[];
  solve: string[];
  steps: Array<{
    title: string;
    description: string;
  }>;
  testimonial: {
    quote: string;
    attribution: string;
  };
  integrations: string[];
  related: string[]; // slugs of related features
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  hero: {
    image: string; // Single image used for hero, backdrop, and thumbnail
    alt: string;
    caption: string;
  };
}

export const featureLandingPages: FeatureLandingPage[] = [
  // PLAN & DISPATCH CLUSTER
  {
    slug: "drag-and-drop-scheduling",
    name: "Drag-and-drop Scheduling",
    subtitle: "Schedule faster and keep crews in sync.",
    cluster: "plan-dispatch",
    kpis: [
      { value: "−18%", label: "Drive time" },
      { value: "+1.3", label: "Jobs per tech per day" },
      { value: "96%", label: "On-time arrival" }
    ],
    bullets: [
      "Drag jobs on live calendar → crews and customers auto-notified",
      "Assign crews and vehicles → no double-booking",
      "See day, week, and route capacity → prevent overtime"
    ],
    pain: [
      "Spreadsheets break when multiple people edit",
      "Office can't see who's free across all crews",
      "Techs get double-booked or sent to wrong locations",
      "Overtime surprises on Fridays"
    ],
    solve: [
      "Real-time calendar with conflict warnings",
      "Color-coded availability by crew and vehicle",
      "Drag once → everyone gets notified (SMS/email)",
      "Capacity view with hour caps and overtime alerts"
    ],
    steps: [
      { title: "Create job", description: "Add photos, line items, and service window" },
      { title: "Place on calendar", description: "Drag to day; assign crew and truck" },
      { title: "Notify", description: "Customers and techs get the updated time automatically" }
    ],
    testimonial: {
      quote: "We reshuffle routes in minutes and cut callbacks.",
      attribution: "Mike R., Owner, HVAC"
    },
    integrations: ["QuickBooks", "Xero", "LinkInspectPro", "PropertyLinkWare", "SMS/Email"],
    related: ["dispatch-board-live-map", "route-optimization", "capacity-planning"],
    faqs: [
      { question: "How long does setup take?", answer: "Most teams import in under a day." },
      { question: "Can I reschedule from my phone?", answer: "Yes. iOS and Android supported." },
      { question: "Will crews get alerts?", answer: "Yes. Techs and customers receive SMS/email." },
      { question: "What if I double-book?", answer: "You'll see a conflict flag before saving." },
      { question: "Does it handle recurring jobs?", answer: "Yes. Daily, weekly, monthly patterns." },
      { question: "Does it work offline?", answer: "The mobile app queues updates and syncs later." }
    ],
    hero: {
      image: "HVAC_tech_with_printed_route_8dca1740.png",
      alt: "HVAC tech reviewing printed route sheet in service van.",
      caption: "Morning dispatch before first stop."
    }
  },
  {
    slug: "dispatch-board-live-map",
    name: "Dispatch Board + Live Map",
    subtitle: "See every crew on screen and act fast.",
    cluster: "plan-dispatch",
    kpis: [
      { value: "−12%", label: "Idle time" },
      { value: "−22%", label: "Callbacks" },
      { value: "100%", label: "Crew visibility" }
    ],
    bullets: [
      "Live GPS pins by crew",
      "One-click status changes",
      "Geo-filter by zone"
    ],
    pain: [
      "Blind to crew locations",
      "Radio tag confusion",
      "Late arrivals without warning"
    ],
    solve: [
      "Live pin trail with ETA",
      "Status badges on each pin",
      "Zone dispatch filter"
    ],
    steps: [
      { title: "Open board", description: "See all crews on map" },
      { title: "Filter by zone", description: "Focus on specific area" },
      { title: "Assign nearest crew", description: "Route job to closest available tech" }
    ],
    testimonial: {
      quote: "We stopped calling around and started routing smart.",
      attribution: "Tanya L., Dispatch"
    },
    integrations: ["SMS/Email", "GPS provider", "PropertyLinkWare"],
    related: ["drag-and-drop-scheduling", "real-time-gps", "route-optimization"],
    faqs: [
      { question: "How accurate is GPS?", answer: "Typically within 10-30 feet with good signal." },
      { question: "Does crew see their location shared?", answer: "Yes, they opt-in when they start the app." },
      { question: "Does it drain battery?", answer: "Uses efficient background location; minimal drain." },
      { question: "What if GPS is stale?", answer: "Last-known location shown with timestamp." },
      { question: "Can I set custom zones?", answer: "Yes, draw zones on the map or upload ZIP codes." },
      { question: "Works on desktop and mobile?", answer: "Yes, responsive across all devices." }
    ],
    hero: {
      image: "Magnetic_job_cards_on_wall_6e02f159.png",
      alt: "Dispatcher arranging crew magnets by zone on wall map.",
      caption: "Crews at a glance by zone."
    }
  },
  {
    slug: "route-optimization",
    name: "Route Optimization",
    subtitle: "Shortest routes. More jobs per tech.",
    cluster: "plan-dispatch",
    kpis: [
      { value: "−18%", label: "Drive time" },
      { value: "+2", label: "Stops per day" },
      { value: "−10%", label: "Fuel cost" }
    ],
    bullets: [
      "Optimize by time windows",
      "Avoid tolls and restricted areas",
      "Auto re-sequence after reschedule"
    ],
    pain: [
      "Zig-zag driving patterns waste time",
      "Late to tight service windows",
      "Manual re-routing after changes"
    ],
    solve: [
      "One-tap optimize with smart sequencing",
      "Time window respect and validation",
      "Instant resequence when jobs shift"
    ],
    steps: [
      { title: "Set day", description: "Choose crew and date range" },
      { title: "Optimize", description: "Run algorithm to minimize drive time" },
      { title: "Dispatch", description: "Send optimized routes to crews" }
    ],
    testimonial: {
      quote: "Added a stop per tech without overtime.",
      attribution: "Greg S., Ops"
    },
    integrations: ["Maps provider", "SMS"],
    related: ["drag-and-drop-scheduling", "real-time-gps", "capacity-planning"],
    faqs: [
      { question: "Does it factor live traffic?", answer: "Yes, uses real-time traffic data for ETAs." },
      { question: "Can I exclude toll roads?", answer: "Yes, set preferences per crew or company-wide." },
      { question: "What about lunch breaks?", answer: "Add break windows; routes respect them." },
      { question: "Works for multiple vehicles?", answer: "Yes, optimizes each vehicle independently." },
      { question: "Rural coverage?", answer: "Works anywhere with road data." },
      { question: "Can I export routes?", answer: "Yes, PDF, CSV, or send to GPS apps." }
    ],
    hero: {
      image: "Route_planning_on_laminated_map_5408f604.png",
      alt: "Resequencing day's route on laminated map.",
      caption: "Shortest path laid out."
    }
  },
  {
    slug: "real-time-gps",
    name: "Real-time GPS",
    subtitle: "Verify location, protect time.",
    cluster: "plan-dispatch",
    kpis: [
      { value: "30s", label: "Ping interval" },
      { value: "100%", label: "Breadcrumb trail" },
      { value: "Instant", label: "Geo-fence alerts" }
    ],
    bullets: [
      "Live breadcrumb timeline",
      "Arrival detection",
      "Last-known fallback"
    ],
    pain: [
      "'Where are they?' calls all day",
      "Disputes on arrival time",
      "Lost crews without communication"
    ],
    solve: [
      "Map trail showing full day's path",
      "Auto arrive/leave timestamps",
      "Last ping with timestamp for offline crews"
    ],
    steps: [
      { title: "Enable GPS", description: "Crew opts in when starting shift" },
      { title: "View drive", description: "Watch breadcrumb trail in real-time" },
      { title: "Review day", description: "Check arrival/departure logs" }
    ],
    testimonial: {
      quote: "Proof of arrival ended disputes.",
      attribution: "Alina K., Admin"
    },
    integrations: ["GPS provider"],
    related: ["dispatch-board-live-map", "route-optimization", "capacity-planning"],
    faqs: [
      { question: "Does it drain battery?", answer: "Efficient background mode; minimal impact." },
      { question: "How private is crew location?", answer: "Only visible to authorized managers during shifts." },
      { question: "What about off-grid sites?", answer: "Last-known location cached until signal returns." },
      { question: "How accurate is it?", answer: "Typically 10-30 feet with good signal." },
      { question: "How long is history stored?", answer: "90 days by default; configurable retention." },
      { question: "Who can see locations?", answer: "Role-based access; crew sees only their own trail." }
    ],
    hero: {
      image: "Geofence_gate_with_key_tag_d39254df.png",
      alt: "Time-stamped key tag at geofenced yard gate.",
      caption: "Verified arrivals and departures."
    }
  },
  {
    slug: "capacity-planning",
    name: "Capacity Planning",
    subtitle: "Balance workload and prevent overtime.",
    cluster: "plan-dispatch",
    kpis: [
      { value: "−22%", label: "Overtime" },
      { value: "+12%", label: "Utilization" },
      { value: "0", label: "Double-books" }
    ],
    bullets: [
      "Hour caps by crew and truck",
      "Heatmap view of workload",
      "Overtime warnings before save"
    ],
    pain: [
      "Surprise overtime on Fridays",
      "Idle gaps in some crews' schedules",
      "Overloading favorite techs"
    ],
    solve: [
      "Set hour caps per crew/truck",
      "Visual heatmap showing load balance",
      "Auto-balancing prompts when over capacity"
    ],
    steps: [
      { title: "Set caps", description: "Define max hours per crew/day" },
      { title: "Review heatmap", description: "See color-coded capacity view" },
      { title: "Shift jobs", description: "Rebalance to prevent overtime" }
    ],
    testimonial: {
      quote: "Fridays stopped exploding.",
      attribution: "Roni P., Scheduler"
    },
    integrations: ["QuickBooks", "Xero"],
    related: ["drag-and-drop-scheduling", "route-optimization", "recurring-jobs"],
    faqs: [
      { question: "Can I set different caps per crew?", answer: "Yes. Each crew/truck can have unique limits." },
      { question: "What if I need to override?", answer: "Manual override available with warning prompt." },
      { question: "Does it account for drive time?", answer: "Yes. Total hours include travel estimates." },
      { question: "Can I see weekly capacity?", answer: "Yes. Day, week, and month views available." },
      { question: "Does it warn before I overbook?", answer: "Yes. Red flag appears before you save." },
      { question: "Can I export capacity reports?", answer: "Yes. PDF or CSV for review." }
    ],
    hero: {
      image: "Magnetic_hour_bars_on_calendar_33848971.png",
      alt: "Shifting workload with magnetic hour bars.",
      caption: "Balance crews before overtime."
    }
  },
  {
    slug: "automated-reminders",
    name: "Automated Reminders",
    subtitle: "Fewer no-shows. Happier customers.",
    cluster: "plan-dispatch",
    kpis: [
      { value: "−35%", label: "No-shows" },
      { value: "+9%", label: "Reviews" },
      { value: "−20%", label: "Support calls" }
    ],
    bullets: [
      "SMS and email cadence templates",
      "Smart service window sync",
      "Bad-weather auto shift notifications"
    ],
    pain: [
      "Customers forget appointments",
      "Wrong windows communicated",
      "Manual reminder texts all day"
    ],
    solve: [
      "Time-based reminder sequences (48hr, 24hr, 2hr)",
      "Synced service windows in all messages",
      "Rule-based triggers for weather/reschedules"
    ],
    steps: [
      { title: "Choose cadence", description: "Set reminder timing (48hr, 24hr, etc.)" },
      { title: "Preview", description: "Review message templates" },
      { title: "Go live", description: "Reminders send automatically" }
    ],
    testimonial: {
      quote: "No-shows dropped by a third overnight.",
      attribution: "Carlos M., Scheduler"
    },
    integrations: ["SMS/Email", "Weather API"],
    related: ["drag-and-drop-scheduling", "two-way-messaging", "review-requests"],
    faqs: [
      { question: "Can I customize message text?", answer: "Yes. Full template editor with merge fields." },
      { question: "Do customers opt out?", answer: "Yes. One-click unsubscribe link included." },
      { question: "What about wrong numbers?", answer: "Bounces tracked; invalid numbers flagged." },
      { question: "Can I send day-before only?", answer: "Yes. Choose any cadence: 48hr, 24hr, 2hr, or custom." },
      { question: "Does it work for recurring jobs?", answer: "Yes. Reminders auto-schedule with each recurrence." },
      { question: "Can I pause reminders?", answer: "Yes. Toggle on/off per job or globally." }
    ],
    hero: {
      image: "Appointment_cards_being_prepared_baeecc6a.png",
      alt: "Appointment reminder card prepared for customer.",
      caption: "Fewer no-shows, clearer windows."
    }
  },
  {
    slug: "recurring-jobs",
    name: "Recurring Jobs",
    subtitle: "Set it once. It runs itself.",
    cluster: "plan-dispatch",
    kpis: [
      { value: "−70%", label: "Admin time" },
      { value: "100%", label: "Pattern accuracy" },
      { value: "+15%", label: "Lifetime value" }
    ],
    bullets: [
      "Daily, weekly, monthly, quarterly rules",
      "Seasonality and holiday skip/shift",
      "Bulk roll forward and edits"
    ],
    pain: [
      "Missed recurring service appointments",
      "Scheduling conflicts with holidays",
      "Manual rebuild of next month's calendar"
    ],
    solve: [
      "Rule engine generates future jobs automatically",
      "Holiday skip or shift rules",
      "Bulk roll: create next 3 months in one click"
    ],
    steps: [
      { title: "Create rule", description: "Set frequency (weekly, monthly, etc.)" },
      { title: "Apply season", description: "Add holiday skip/shift rules" },
      { title: "Generate", description: "Auto-create next quarter's jobs" }
    ],
    testimonial: {
      quote: "Maintenance contracts run themselves now.",
      attribution: "Jasmine T., Service Coordinator"
    },
    integrations: ["QuickBooks", "Xero"],
    related: ["drag-and-drop-scheduling", "capacity-planning", "automated-reminders"],
    faqs: [
      { question: "Can I pause a recurrence?", answer: "Yes. Suspend/resume any time without deleting the rule." },
      { question: "What if customer moves?", answer: "Update address once; all future jobs inherit the change." },
      { question: "Can I skip one instance?", answer: "Yes. Skip or reschedule individual occurrences." },
      { question: "How far ahead does it generate?", answer: "Configurable. Default is 90 days ahead." },
      { question: "Can I bulk-edit pricing?", answer: "Yes. Update the template; future jobs get new price." },
      { question: "Does it handle seasonal HVAC?", answer: "Yes. Rules can activate/deactivate by season." }
    ],
    hero: {
      image: "Recurring_service_tags_organized_c232f820.png",
      alt: "Picking recurring service tag for schedule.",
      caption: "Set once, repeat on cadence."
    }
  },

  // WIN & DELIVER CLUSTER
  {
    slug: "crm-leads",
    name: "CRM & Leads",
    subtitle: "Capture, qualify, follow up—automatically.",
    cluster: "win-deliver",
    kpis: [
      { value: "+24%", label: "Win rate" },
      { value: "−30%", label: "Response time" },
      { value: "+18%", label: "Repeat rate" }
    ],
    bullets: [
      "Web form submissions flow to pipeline",
      "Lead scoring by source and value",
      "Auto follow-up sequences"
    ],
    pain: [
      "Lost sticky notes and missed calls",
      "Stale inbox with no follow-up",
      "No customer history at quote time"
    ],
    solve: [
      "Central inbox with lead capture",
      "Automatic scoring (hot/warm/cold)",
      "Email/SMS sequences for nurture"
    ],
    steps: [
      { title: "Capture", description: "Web form, call, or manual entry" },
      { title: "Qualify", description: "Score and assign to sales" },
      { title: "Follow up", description: "Auto-sequence keeps leads warm" }
    ],
    testimonial: {
      quote: "We don't lose leads in the shuffle anymore.",
      attribution: "Nina R., Sales Manager"
    },
    integrations: ["Website forms", "Email", "SMS"],
    related: ["quote-esign", "two-way-messaging", "review-requests"],
    faqs: [
      { question: "Can I import existing leads?", answer: "Yes. CSV import with field mapping." },
      { question: "How does scoring work?", answer: "Based on source, job value, and engagement." },
      { question: "Can I customize follow-up timing?", answer: "Yes. Set delay and message per sequence step." },
      { question: "What if I get duplicate entries?", answer: "Auto-merge detects duplicates by phone/email." },
      { question: "Can I track conversion rate?", answer: "Yes. Pipeline reports show lead → quote → close rates." },
      { question: "Does it integrate with my website?", answer: "Yes. Embed form or use API webhook." }
    ],
    hero: {
      image: "Lead_cards_in_pipeline_rack_682fc93b.png",
      alt: "Lead cards moving through physical pipeline.",
      caption: "Every inquiry tracked."
    }
  },
  {
    slug: "quote-esign",
    name: "Quote Builder + E-Sign",
    subtitle: "Professional estimates, signed faster.",
    cluster: "win-deliver",
    kpis: [
      { value: "+22%", label: "Win rate" },
      { value: "Same-day", label: "Approvals" },
      { value: "<2 min", label: "Build time" }
    ],
    bullets: [
      "Line items, photos, and notes in one doc",
      "Quote templates for common jobs",
      "E-signature and deposit collection"
    ],
    pain: [
      "Handwritten estimates look unprofessional",
      "Back-and-forth email delays approval",
      "Lost paper quotes, no tracking"
    ],
    solve: [
      "Branded PDF quotes with line items and photos",
      "Quick templates (furnace install, panel upgrade, etc.)",
      "One-tap sign and optional deposit payment"
    ],
    steps: [
      { title: "Build", description: "Add line items, photos, terms" },
      { title: "Send", description: "Email or text quote link to customer" },
      { title: "Sign & deposit", description: "Customer signs and optionally pays deposit" }
    ],
    testimonial: {
      quote: "Customers sign on their phones before we leave.",
      attribution: "Omar K., Owner, Electrical"
    },
    integrations: ["E-signature", "Payments", "QuickBooks", "Xero"],
    related: ["crm-leads", "work-orders", "deposits-partials"],
    faqs: [
      { question: "Can I require a deposit?", answer: "Yes. Set deposit % and collect via card or ACH." },
      { question: "What if customer edits the quote?", answer: "Quote is locked after send; edits create new version." },
      { question: "Can I clone a quote?", answer: "Yes. Duplicate and edit for similar jobs." },
      { question: "Is e-signature legally binding?", answer: "Yes. Compliant with ESIGN and UETA." },
      { question: "Can I add custom terms?", answer: "Yes. Company-wide or per-quote custom text." },
      { question: "What formats can I export?", answer: "PDF download or email link." }
    ],
    hero: {
      image: "Customer_signing_estimate_book_5d6c94c0.png",
      alt: "Customer initialing printed estimate with deposit.",
      caption: "Approvals without delay."
    }
  },
  {
    slug: "work-orders",
    name: "Work Orders",
    subtitle: "Clear instructions. Zero confusion.",
    cluster: "win-deliver",
    kpis: [
      { value: "−25%", label: "Callbacks" },
      { value: "+11%", label: "First-time fix rate" },
      { value: "100%", label: "Photo proof" }
    ],
    bullets: [
      "Task checklists for consistent execution",
      "Before/after photo capture",
      "Parts and materials tracking"
    ],
    pain: [
      "Vague job instructions cause errors",
      "Techs skip critical steps",
      "No proof work was done"
    ],
    solve: [
      "Pre-built checklists for common jobs",
      "Required photo upload before close",
      "Parts notes sync to invoice and inventory"
    ],
    steps: [
      { title: "Create", description: "Add checklist, notes, and parts needed" },
      { title: "Assign", description: "Route to crew with instructions" },
      { title: "Complete", description: "Check off tasks, upload photos, close" }
    ],
    testimonial: {
      quote: "Callbacks dropped because techs follow the checklist.",
      attribution: "Troy B., Service Manager"
    },
    integrations: ["Parts suppliers", "QuickBooks", "Xero"],
    related: ["quote-esign", "project-tracking", "invoicing-batch"],
    faqs: [
      { question: "Can I create custom checklists?", answer: "Yes. Build templates for each service type." },
      { question: "Are photos required?", answer: "Configurable. Set required/optional per job type." },
      { question: "Can techs add notes in the field?", answer: "Yes. Text, voice, or photo notes from mobile app." },
      { question: "Does it track time on site?", answer: "Yes. Start/stop timer or manual entry." },
      { question: "Can I attach files?", answer: "Yes. PDFs, photos, or scanned docs." },
      { question: "What if work order changes mid-job?", answer: "Tech can request change order; office approves." }
    ],
    hero: {
      image: "Checklist_clipboard_on_tool_cart_517948eb.png",
      alt: "Work order checklist completed on site.",
      caption: "Do it right the first time."
    }
  },
  {
    slug: "project-tracking",
    name: "Project Tracking (multi-WO)",
    subtitle: "Multi-visit jobs under control.",
    cluster: "win-deliver",
    kpis: [
      { value: "100%", label: "Docs in one place" },
      { value: "+9%", label: "Margin on projects" },
      { value: "Fewer", label: "Surprises" }
    ],
    bullets: [
      "Parent project with linked work orders, estimates, and invoices",
      "Multi-WO timeline view",
      "Change order tracking"
    ],
    pain: [
      "Lost project files across emails",
      "Version chaos on multi-visit jobs",
      "No visibility into overall progress"
    ],
    solve: [
      "One project folder with all linked docs",
      "Timeline showing WO sequence and status",
      "Change orders tracked and approved in-system"
    ],
    steps: [
      { title: "Create project", description: "Name, address, and scope" },
      { title: "Attach docs", description: "Link WOs, estimates, invoices" },
      { title: "Track visits", description: "Monitor progress on timeline" }
    ],
    testimonial: {
      quote: "Multi-week jobs stay organized start to finish.",
      attribution: "Leah S., Project Manager"
    },
    integrations: ["QuickBooks", "Xero", "Document storage"],
    related: ["work-orders", "invoicing-batch", "job-costing"],
    faqs: [
      { question: "Can I track multiple crews?", answer: "Yes. Assign different WOs to different crews." },
      { question: "How do I handle change orders?", answer: "Create new WO; link to parent project." },
      { question: "Can I see total project cost?", answer: "Yes. Rollup of all linked WOs and invoices." },
      { question: "What if schedule shifts?", answer: "Drag WOs on timeline; crews auto-notified." },
      { question: "Can I attach photos to project?", answer: "Yes. Upload or pull from linked WOs." },
      { question: "Does it track milestones?", answer: "Yes. Set milestones and payment schedules." }
    ],
    hero: {
      image: "Project_accordion_folder_organized_e013c4d3.png",
      alt: "Project folder organizing multi-visit job.",
      caption: "Everything in one place."
    }
  },
  {
    slug: "customer-portal",
    name: "Customer Portal",
    subtitle: "Quotes, invoices, job history—self-serve.",
    cluster: "win-deliver",
    kpis: [
      { value: "−40%", label: "Support calls" },
      { value: "+12%", label: "On-time payments" },
      { value: "+9%", label: "Review volume" }
    ],
    bullets: [
      "Secure login for each customer",
      "Pay invoices online with saved card",
      "View job history and share photos"
    ],
    pain: [
      "Phone tag over invoice questions",
      "Payment delays due to lost invoices",
      "Customers can't find their service history"
    ],
    solve: [
      "Self-serve portal with all docs",
      "Card on file for one-click payment",
      "Job history with photos and notes"
    ],
    steps: [
      { title: "Invite", description: "Send portal invite link via email/SMS" },
      { title: "View", description: "Customer logs in to see quotes, invoices, history" },
      { title: "Pay", description: "One-click payment from portal" }
    ],
    testimonial: {
      quote: "Customers love seeing their service history online.",
      attribution: "Derek P., Operations"
    },
    integrations: ["Payments", "Email", "SMS"],
    related: ["quote-esign", "invoicing-batch", "review-requests"],
    faqs: [
      { question: "Is it mobile-friendly?", answer: "Yes. Fully responsive design." },
      { question: "Can customers request service?", answer: "Yes. Service request form in portal." },
      { question: "How secure is payment?", answer: "PCI-compliant; cards tokenized, never stored." },
      { question: "Can I customize portal branding?", answer: "Yes. Logo, colors, and domain." },
      { question: "What if customer forgets password?", answer: "Self-serve reset link via email/SMS." },
      { question: "Can they download invoices?", answer: "Yes. PDF download available." }
    ],
    hero: {
      image: "Homeowner_marking_paid_invoice_a1682527.png",
      alt: "Homeowner reviewing printed invoice and photos.",
      caption: "Clear, simple, self-serve."
    }
  },
  {
    slug: "two-way-messaging",
    name: "2-Way SMS/Email",
    subtitle: "Real conversations. No personal numbers.",
    cluster: "win-deliver",
    kpis: [
      { value: "−50%", label: "Phone time" },
      { value: "+17%", label: "Response rate" },
      { value: "100%", label: "Job-linked threads" }
    ],
    bullets: [
      "Shared team inbox for SMS and email",
      "Messages auto-link to job records",
      "Quick reply templates for common questions"
    ],
    pain: [
      "Lost customer texts on personal phones",
      "No record of what was promised",
      "Can't see conversation history when tech is off"
    ],
    solve: [
      "Team inbox visible to office and managers",
      "Every message tied to job record",
      "Template library for fast replies"
    ],
    steps: [
      { title: "Connect number", description: "Use company number for SMS/email" },
      { title: "Reply", description: "Team responds from shared inbox" },
      { title: "Close", description: "Thread archived with job record" }
    ],
    testimonial: {
      quote: "We see every customer message in one place now.",
      attribution: "Kim H., Customer Service"
    },
    integrations: ["SMS provider", "Email"],
    related: ["automated-reminders", "crm-leads", "customer-portal"],
    faqs: [
      { question: "Can customers reply to reminders?", answer: "Yes. Replies land in team inbox." },
      { question: "Can multiple people respond?", answer: "Yes. Team sees who responded last." },
      { question: "What about spam?", answer: "Auto-filter for known spam; manual block option." },
      { question: "Can I use my current number?", answer: "Yes. Port existing number or get new one." },
      { question: "Does it work with email too?", answer: "Yes. Unified inbox for SMS and email." },
      { question: "Can I set up auto-replies?", answer: "Yes. After-hours or canned responses configurable." }
    ],
    hero: {
      image: "Message_slip_filed_to_folder_6180a790.png",
      alt: "Team message slip filed to job folder.",
      caption: "Conversations tied to work."
    }
  },
  {
    slug: "review-requests",
    name: "Review Requests",
    subtitle: "Build reputation on autopilot.",
    cluster: "win-deliver",
    kpis: [
      { value: "+1.2★", label: "Avg rating" },
      { value: "+3×", label: "Review volume" },
      { value: "Automated", label: "Timing" }
    ],
    bullets: [
      "Post-job auto-triggers for review requests",
      "Multi-site targeting (Google, Yelp, Facebook)",
      "Track reviews by technician for coaching"
    ],
    pain: [
      "Few reviews compared to competitors",
      "Only angry customers leave feedback",
      "No way to track which techs get good reviews"
    ],
    solve: [
      "Request at the right moment (just after job close)",
      "Send to Google, Yelp, Facebook—customer chooses",
      "Leaderboard shows which techs earn 5 stars"
    ],
    steps: [
      { title: "Trigger", description: "Auto-send after job marked complete" },
      { title: "Send", description: "SMS or email with review site links" },
      { title: "Track", description: "Dashboard shows reviews by tech and trend" }
    ],
    testimonial: {
      quote: "We tripled our Google reviews in 3 months.",
      attribution: "Vanessa L., Marketing"
    },
    integrations: ["Google", "Yelp", "Facebook", "SMS", "Email"],
    related: ["customer-portal", "automated-reminders", "crm-leads"],
    faqs: [
      { question: "Can I delay the request?", answer: "Yes. Set delay (immediate, 1 day, 3 days, etc.)." },
      { question: "What if customer had a bad experience?", answer: "Filter sends private feedback form instead." },
      { question: "Can I customize the message?", answer: "Yes. Full template editor with merge fields." },
      { question: "Does it work for all review sites?", answer: "Yes. Google, Yelp, Facebook, or custom URL." },
      { question: "Can I turn it off per customer?", answer: "Yes. Opt-out flag on customer record." },
      { question: "What if review is negative?", answer: "Alert sent to manager for immediate follow-up." }
    ],
    hero: {
      image: "Review_card_on_fridge_magnet_6f81a657.png",
      alt: "Review request card left after job.",
      caption: "Ask at the right time."
    }
  },

  // GET PAID & OPERATE CLUSTER
  {
    slug: "invoicing-batch",
    name: "Invoicing & Batch",
    subtitle: "Send invoices faster. Get paid sooner.",
    cluster: "get-paid-operate",
    kpis: [
      { value: "−5 days", label: "DSO (Days Sales Outstanding)" },
      { value: "+100%", label: "Batch throughput" },
      { value: "0", label: "Lost invoices" }
    ],
    bullets: [
      "One-tap invoice creation from work order",
      "Batch send to multiple customers",
      "PDF and payment link delivery"
    ],
    pain: [
      "Piles of paper invoices to mail",
      "Missed invoices = lost revenue",
      "Manual entry into accounting"
    ],
    solve: [
      "Auto-generate from completed work orders",
      "Batch select and send 50+ invoices at once",
      "Status tracking (sent, viewed, paid)"
    ],
    steps: [
      { title: "Select jobs", description: "Choose completed WOs to invoice" },
      { title: "Review", description: "Check line items and totals" },
      { title: "Send", description: "Email or text invoice links" }
    ],
    testimonial: {
      quote: "Billing Friday afternoons takes 20 minutes now.",
      attribution: "Rachel D., Bookkeeper"
    },
    integrations: ["QuickBooks", "Xero", "Email", "SMS"],
    related: ["work-orders", "payments", "accounting-sync"],
    faqs: [
      { question: "Can I customize invoice templates?", answer: "Yes. Logo, colors, terms, and footer text." },
      { question: "What if customer disputes a charge?", answer: "Edit invoice; customer gets updated version." },
      { question: "Can I auto-send on WO close?", answer: "Yes. Enable auto-invoice rule per job type." },
      { question: "Does it track payment status?", answer: "Yes. Dashboard shows sent, viewed, paid, overdue." },
      { question: "Can I apply discounts?", answer: "Yes. Line-item or invoice-level discounts." },
      { question: "What about recurring invoices?", answer: "Yes. Auto-generate monthly for maintenance contracts." }
    ],
    hero: {
      image: "Stamped_invoice_batch_ready_a6a56b6a.png",
      alt: "Batch of invoices ready to send.",
      caption: "Billing in minutes."
    }
  },
  {
    slug: "payments",
    name: "Online & Field Payments",
    subtitle: "Card, ACH, tap-to-pay—office or field.",
    cluster: "get-paid-operate",
    kpis: [
      { value: "+37%", label: "Same-day payment rate" },
      { value: "0%", label: "Cards stored on device" },
      { value: "PCI", label: "Compliance" }
    ],
    bullets: [
      "Save card on file for future charges",
      "Tap-to-pay terminal for field techs",
      "PCI-safe tokenization (no card data stored)"
    ],
    pain: [
      "Checks only; customers don't carry them",
      "Card numbers written on paper (security risk)",
      "Delayed payment until customer mails check"
    ],
    solve: [
      "Link payment or tap terminal in field",
      "Tokenized cards; compliant and secure",
      "Receipts auto-emailed to customer"
    ],
    steps: [
      { title: "Collect", description: "Enter card or tap terminal" },
      { title: "Authorize", description: "Secure tokenized payment" },
      { title: "Receipt", description: "Auto-email receipt to customer" }
    ],
    testimonial: {
      quote: "We get paid before leaving the job site now.",
      attribution: "Marcus T., Field Tech Lead"
    },
    integrations: ["Stripe", "Square", "Payment gateway"],
    related: ["invoicing-batch", "deposits-partials", "customer-portal"],
    faqs: [
      { question: "What payment methods are supported?", answer: "Card (Visa, MC, Amex, Discover), ACH, tap-to-pay." },
      { question: "How much are processing fees?", answer: "Depends on provider; typically 2.5-3% + $0.30." },
      { question: "Can I pass fees to customer?", answer: "Yes. Optional surcharge or convenience fee." },
      { question: "Is it safe to save cards?", answer: "Yes. Tokenized storage; no raw card data retained." },
      { question: "What if payment fails?", answer: "Retry logic and customer notification." },
      { question: "Can I issue refunds?", answer: "Yes. Full or partial refunds from dashboard." }
    ],
    hero: {
      image: "Customer_signing_field_receipt_ce0adab7.png",
      alt: "Customer signing field payment receipt.",
      caption: "Paid before leaving site."
    }
  },
  {
    slug: "deposits-partials",
    name: "Deposits/Partials",
    subtitle: "Secure the job and cash flow.",
    cluster: "get-paid-operate",
    kpis: [
      { value: "30%", label: "Typical deposit" },
      { value: "Faster", label: "Project starts" },
      { value: "Less", label: "Risk on large jobs" }
    ],
    bullets: [
      "Collect deposit on quote approval",
      "Split payments by milestone",
      "Auto-reconcile deposit against final invoice"
    ],
    pain: [
      "Jobs start without payment commitment",
      "Chasing final balances after completion",
      "Cash flow gaps on big projects"
    ],
    solve: [
      "Deposit required on e-sign of quote",
      "Milestone payment plan (50% start, 25% rough-in, 25% final)",
      "Balance due auto-calculated on completion invoice"
    ],
    steps: [
      { title: "Set deposit", description: "Choose % or fixed amount" },
      { title: "Collect", description: "Customer pays deposit on quote approval" },
      { title: "Reconcile", description: "Deposit credited to final invoice" }
    ],
    testimonial: {
      quote: "No more unpaid starts on big jobs.",
      attribution: "Yolanda F., Controller"
    },
    integrations: ["Payments", "QuickBooks", "Xero"],
    related: ["quote-esign", "invoicing-batch", "project-tracking"],
    faqs: [
      { question: "What's a typical deposit %?", answer: "20-50% depending on job size and industry." },
      { question: "Can I require deposits only on large jobs?", answer: "Yes. Set threshold (e.g., jobs >$2,000)." },
      { question: "What if job scope changes?", answer: "Adjust milestones; customer approves change order." },
      { question: "How is deposit applied?", answer: "Auto-deducted from final invoice total." },
      { question: "Can customer pay more than deposit?", answer: "Yes. Partial payments tracked and applied." },
      { question: "What if deposit isn't paid?", answer: "Quote marked pending; job doesn't schedule until paid." }
    ],
    hero: {
      image: "Deposit_receipt_with_milestones_d6b3429e.png",
      alt: "Deposit attached to quoted work packet.",
      caption: "Cash flow secured."
    }
  },
  {
    slug: "job-costing",
    name: "Job Costing & Profit",
    subtitle: "Know your numbers on every job.",
    cluster: "get-paid-operate",
    kpis: [
      { value: "+6 pts", label: "Margin improvement" },
      { value: "Live", label: "Variance tracking" },
      { value: "Real", label: "Cost visibility" }
    ],
    bullets: [
      "Track labor, materials, and overhead per job",
      "Variance alerts when costs exceed estimate",
      "Profit snapshots by crew, service type, customer"
    ],
    pain: [
      "Late spreadsheets; no real-time cost data",
      "Guesswork on profitability",
      "Can't identify which jobs lose money"
    ],
    solve: [
      "Live cost tracking as labor and materials log",
      "Alerts when actuals exceed quoted price",
      "Drill-down reports by job, crew, service line"
    ],
    steps: [
      { title: "Log", description: "Track time and materials as work happens" },
      { title: "Compare", description: "View actual vs. estimated costs" },
      { title: "Improve", description: "Adjust pricing or processes for next job" }
    ],
    testimonial: {
      quote: "We caught cost overruns before they ate our margin.",
      attribution: "Paul G., Controller"
    },
    integrations: ["QuickBooks", "Xero", "Payroll"],
    related: ["work-orders", "project-tracking", "payroll-wage-scales"],
    faqs: [
      { question: "Can I see cost variance in real-time?", answer: "Yes. Dashboard updates as labor/materials log." },
      { question: "What if I forgot to log materials?", answer: "Edit job cost; updates margin calculation." },
      { question: "Can I compare jobs by service type?", answer: "Yes. Filter by HVAC install, electrical panel, etc." },
      { question: "Does it include overhead?", answer: "Yes. Allocate overhead % per job or service line." },
      { question: "Can I export cost reports?", answer: "Yes. PDF, CSV, or sync to accounting software." },
      { question: "What about multi-visit projects?", answer: "Rollup costs across all linked work orders." }
    ],
    hero: {
      image: "Cost_ledger_with_highlighted_variance_4eb00de2.png",
      alt: "Job cost ledger highlighted for variance.",
      caption: "See margin in real time."
    }
  },
  {
    slug: "payroll-wage-scales",
    name: "Payroll & Wage Scales",
    subtitle: "Accurate pay from the schedule.",
    cluster: "get-paid-operate",
    kpis: [
      { value: "100%", label: "Wage scale accuracy" },
      { value: "0", label: "Pay disputes" },
      { value: "Automated", label: "Overtime calc" }
    ],
    bullets: [
      "Wage scales by role (apprentice, journeyman, master)",
      "Overtime and double-time rules by state",
      "Export timesheets to payroll provider"
    ],
    pain: [
      "Manual pay calculation errors cause disputes",
      "Overtime surprises on payday",
      "No audit trail for hours worked"
    ],
    solve: [
      "Rule engine applies correct wage per role",
      "Auto-calc OT per state law (CA, NY, etc.)",
      "Export to ADP, Gusto, QuickBooks Payroll"
    ],
    steps: [
      { title: "Define rules", description: "Set wage scales and OT thresholds" },
      { title: "Review hours", description: "Check logged time per crew" },
      { title: "Export", description: "Send to payroll provider or pay manually" }
    ],
    testimonial: {
      quote: "No more pay disputes. Hours match the schedule.",
      attribution: "Sanjay P., HR Manager"
    },
    integrations: ["ADP", "Gusto", "QuickBooks Payroll"],
    related: ["job-costing", "capacity-planning", "work-orders"],
    faqs: [
      { question: "Can I set different rates per crew?", answer: "Yes. Wage scales by role, experience, or crew." },
      { question: "Does it handle prevailing wage?", answer: "Yes. Set prevailing wage rates per job or zip code." },
      { question: "What about PTO and sick time?", answer: "Track accrual and usage; export to payroll." },
      { question: "Can I audit hours worked?", answer: "Yes. Timesheet log with start/stop and location." },
      { question: "Does it calculate taxes?", answer: "No. Export to payroll provider for tax calc." },
      { question: "What if hours are disputed?", answer: "Audit trail shows GPS, photos, and supervisor approval." }
    ],
    hero: {
      image: "Timecards_and_wage_scale_posted_9308f8fd.png",
      alt: "Timecards and wage scale rules posted.",
      caption: "Accurate pay without spreadsheets."
    }
  },
  {
    slug: "po-vendor",
    name: "POs & Vendor Mgmt",
    subtitle: "Buy smart. Track vendors.",
    cluster: "get-paid-operate",
    kpis: [
      { value: "−8%", label: "Material cost" },
      { value: "100%", label: "PO coverage" },
      { value: "Tracked", label: "Vendor insurance" }
    ],
    bullets: [
      "Create POs directly from work orders",
      "Receive items against PO for inventory tracking",
      "Vendor insurance expiration alerts"
    ],
    pain: [
      "Lost receipts and wrong pricing",
      "No record of what was ordered",
      "Expired vendor insurance goes unnoticed"
    ],
    solve: [
      "PO workflow with approval routing",
      "Receive against PO to track inventory",
      "Insurance cert storage with expiration alerts"
    ],
    steps: [
      { title: "Create PO", description: "Link to work order; add line items" },
      { title: "Receive", description: "Scan/enter delivered items" },
      { title: "Reconcile", description: "Match invoice to PO and close" }
    ],
    testimonial: {
      quote: "We stopped overpaying and caught expired certs.",
      attribution: "Linda W., Purchasing"
    },
    integrations: ["Parts suppliers", "QuickBooks", "Xero"],
    related: ["work-orders", "job-costing", "invoicing-batch"],
    faqs: [
      { question: "Can I require approval for POs?", answer: "Yes. Set approval threshold (e.g., >$500 needs manager OK)." },
      { question: "What if vendor price changes?", answer: "Flag variance; approve or reject before receiving." },
      { question: "Can I track vendor performance?", answer: "Yes. On-time delivery and quality score by vendor." },
      { question: "Does it sync with inventory?", answer: "Yes. Received items update stock levels." },
      { question: "What about drop-ship vendors?", answer: "Yes. Track PO sent direct to job site." },
      { question: "Can I store W-9 and insurance?", answer: "Yes. Vendor profile with document upload and alerts." }
    ],
    hero: {
      image: "PO_received_and_documented_7a38ee94.png",
      alt: "PO received and documented at bench.",
      caption: "Materials under control."
    }
  },
  {
    slug: "accounting-sync",
    name: "QuickBooks/Xero Sync",
    subtitle: "Books that stay in sync.",
    cluster: "get-paid-operate",
    kpis: [
      { value: "0", label: "Double entry" },
      { value: "Real-time", label: "Sync frequency" },
      { value: "Mapped", label: "Chart of accounts" }
    ],
    bullets: [
      "Customers, items, and tax codes sync both ways",
      "Payments and invoices auto-create in accounting",
      "Error queue for manual review and correction"
    ],
    pain: [
      "Duplicate data entry in field software and accounting",
      "Mismatches between systems",
      "Late month-end close waiting for data entry"
    ],
    solve: [
      "Mapped field sync to chart of accounts",
      "Auto-push invoices and payments as they happen",
      "Error queue catches sync issues for review"
    ],
    steps: [
      { title: "Connect", description: "Authorize QuickBooks or Xero integration" },
      { title: "Map", description: "Match customers, items, tax codes" },
      { title: "Sync", description: "Real-time or scheduled sync runs automatically" }
    ],
    testimonial: {
      quote: "Month-end close went from 3 days to 3 hours.",
      attribution: "Angela M., Accountant"
    },
    integrations: ["QuickBooks Online", "QuickBooks Desktop", "Xero"],
    related: ["invoicing-batch", "payments", "job-costing"],
    faqs: [
      { question: "Is it two-way sync?", answer: "Yes. Customers/items sync both directions; invoices push one way." },
      { question: "What if there's a sync error?", answer: "Error queue shows issue; resolve manually and retry." },
      { question: "Can I pause sync?", answer: "Yes. Disable/enable sync any time." },
      { question: "Does it sync historical data?", answer: "Configurable. Choose date range for initial import." },
      { question: "What about sales tax?", answer: "Tax codes map to your accounting setup." },
      { question: "Can I sync multiple companies?", answer: "Yes. Each company maps to separate accounting file." }
    ],
    hero: {
      image: "Sync_audit_binders_organized_f7fdeda1.png",
      alt: "Accounting sync audit materials organized.",
      caption: "Books match the work."
    }
  }
];

// Helper to get landing page data by slug
export function getLandingPageData(slug: string): FeatureLandingPage | undefined {
  return featureLandingPages.find(page => page.slug === slug);
}
