import { Plan } from "./features";

export type FeaturePageDetail = {
  slug: string;
  
  // SEO + hero
  seoTitle: string;
  heroHeadline: string;
  heroSubhead: string;
  heroStats: { label: string; sub: string }[];
  
  // Industry angles (for HVAC / Plumbing / Electrical relevance)
  verticalAngles: {
    hvac: string;
    plumbing: string;
    electrical: string;
  };
  
  // "How it works" steps (3 steps)
  steps: {
    title: string;
    bullets: string[];
    imgAlt: string;
  }[];
  
  // Capabilities (2x2 card grid)
  capabilities: {
    id: string;
    title: string;
    bullets: string[];
  }[];
  
  // Plan availability info
  minPlanLabel: Plan;
  planNotes: string;
  
  // FAQ (5 items)
  faq: { q: string; a: string }[];
  
  // Testimonial / social proof (optional)
  quote?: {
    text: string;
    author: string;
    role?: string;
  };
};

export const FEATURES_DETAILS: Record<string, FeaturePageDetail> = {
  "scheduling": {
    slug: "scheduling",
    seoTitle: "Field Service Scheduling Software | Drag-and-Drop Dispatch & Calendar Sync",
    heroHeadline: "Drag-and-drop scheduling with live calendar sync",
    heroSubhead: "Stop the dispatch chaos. Schedule jobs in seconds, sync to Google and Apple Calendar, and keep your whole team on the same page.",
    heroStats: [
      { label: "35% fewer no-shows", sub: "Based on internal usage data" },
      { label: "2x faster scheduling", sub: "Based on internal usage data" },
      { label: "Real-time sync", sub: "Google & Apple Calendar" }
    ],
    verticalAngles: {
      hvac: "Seasonal surge without chaos. Book maintenance plans in advance and dispatch emergency calls in seconds.",
      plumbing: "Emergency leaks get dispatched now, not 'sometime today.' Your customers see the ETA before you hang up the phone.",
      electrical: "Panel upgrades, service calls, and inspections all visible at a glance. No more double-booking crews."
    },
    steps: [
      {
        title: "Add jobs to the calendar",
        bullets: [
          "Drag jobs directly onto your team's calendar",
          "See conflicts before they happen",
          "Set time estimates and auto-calculate crew capacity"
        ],
        imgAlt: "Drag-and-drop scheduling calendar showing available crew slots"
      },
      {
        title: "Sync with Google and Apple Calendar",
        bullets: [
          "Two-way sync keeps everyone updated",
          "Techs get calendar invites on their personal devices",
          "Changes sync instantly across all calendars"
        ],
        imgAlt: "Calendar sync between LinkServicePro and Google Calendar"
      },
      {
        title: "Dispatch and track all day",
        bullets: [
          "Techs see their schedule in real time",
          "Office watches job progress live",
          "Automated reminders go out 24 hours before"
        ],
        imgAlt: "Mobile view of tech's daily schedule with job details"
      }
    ],
    capabilities: [
      {
        id: "drag-drop",
        title: "Visual dispatch board",
        bullets: [
          "Drag jobs to crew lanes in seconds",
          "Color-coded by job type and status"
        ]
      },
      {
        id: "capacity",
        title: "Crew capacity planning",
        bullets: [
          "See who's overbooked at a glance",
          "Auto-warn when hitting overtime limits"
        ]
      },
      {
        id: "calendar-sync",
        title: "Google & Apple Calendar sync",
        bullets: [
          "Two-way sync keeps techs updated",
          "Works with personal calendars they already use"
        ]
      },
      {
        id: "reminders",
        title: "Automated reminders",
        bullets: [
          "SMS and email reminders sent automatically",
          "Cut no-shows by 35%"
        ]
      }
    ],
    minPlanLabel: "Free",
    planNotes: "Scheduling is free forever. Unlimited users on paid plans. No per-tech seat fees.",
    faq: [
      {
        q: "Will my team actually use this?",
        a: "Yes. They just open the app on their phone, see their schedule, and tap the next job. No paperwork, no chasing anyone down."
      },
      {
        q: "Does it sync with Google Calendar and Apple Calendar?",
        a: "Yes. Two-way sync in real time. Changes in LinkServicePro appear in their personal calendar and vice versa."
      },
      {
        q: "Can I see all my crews at once?",
        a: "Yes. The dispatch board shows all crews side by side so you can spot gaps and conflicts instantly."
      },
      {
        q: "What happens if I double-book someone?",
        a: "You'll get a warning before you save. The system checks for conflicts and shows you exactly where the overlap is."
      },
      {
        q: "How many users can I have?",
        a: "Free plan includes 3 users. Paid plans include unlimited users with no per-tech seat fees."
      }
    ],
    quote: {
      text: "We cut scheduling time from 2 hours to 15 minutes. And my techs stopped calling the office asking where they're supposed to be.",
      author: "Jake R.",
      role: "Operations Manager"
    }
  },
  
  "work-orders": {
    slug: "work-orders",
    seoTitle: "Field Service Work Order Software | Digital Checklists & Photo Documentation",
    heroHeadline: "Work orders with checklists and photos",
    heroSubhead: "Stop losing paper tickets. Create digital work orders, capture photos on-site, and keep a complete record of every job.",
    heroStats: [
      { label: "100% digital records", sub: "Based on internal usage data" },
      { label: "Faster job completion", sub: "Based on internal usage data" },
      { label: "Photo proof on every job", sub: "Before and after shots" }
    ],
    verticalAngles: {
      hvac: "Document filter changes, refrigerant levels, and system diagnostics with photos. Show customers exactly what you found.",
      plumbing: "Before and after photos prove the work was done right. Track parts used and time on-site for accurate billing.",
      electrical: "Panel photos, wire routing, and code compliance all documented in one place. Pass inspections faster."
    },
    steps: [
      {
        title: "Create work orders from templates",
        bullets: [
          "Use job-specific checklists for consistent quality",
          "Add custom fields for your workflow",
          "Assign to crews with one tap"
        ],
        imgAlt: "Work order template selection screen with HVAC, Plumbing, and Electrical options"
      },
      {
        title: "Techs complete jobs in the field",
        bullets: [
          "Follow step-by-step checklists on their phone",
          "Capture photos of work in progress",
          "Record parts used and time spent"
        ],
        imgAlt: "Mobile work order screen showing checklist and photo capture"
      },
      {
        title: "Office sees progress in real time",
        bullets: [
          "Watch jobs move from scheduled to complete",
          "Review photos and notes before invoicing",
          "Complete job history at your fingertips"
        ],
        imgAlt: "Dashboard showing work order status and completion rate"
      }
    ],
    capabilities: [
      {
        id: "checklists",
        title: "Custom checklists",
        bullets: [
          "Build checklists for every job type",
          "Standardize quality across all techs"
        ]
      },
      {
        id: "photos",
        title: "Photo documentation",
        bullets: [
          "Before and after shots required",
          "Store unlimited photos per job"
        ]
      },
      {
        id: "mobile",
        title: "Mobile-first design",
        bullets: [
          "Works offline in basements and crawl spaces",
          "Syncs when signal returns"
        ]
      },
      {
        id: "history",
        title: "Complete job history",
        bullets: [
          "Search past jobs in seconds",
          "See what was done on previous visits"
        ]
      }
    ],
    minPlanLabel: "Free",
    planNotes: "Work orders are free forever. Unlimited users on paid plans. No per-tech seat fees.",
    faq: [
      {
        q: "Will my team actually use this?",
        a: "Yes. They just tap through the checklist and take photos with their phone. No typing, no paperwork."
      },
      {
        q: "What if there's no cell signal?",
        a: "The app works offline. Everything syncs automatically when signal returns."
      },
      {
        q: "Can I customize the checklists?",
        a: "Yes. Build unlimited checklists with custom fields, dropdowns, checkboxes, and required photos."
      },
      {
        q: "How many photos can we store?",
        a: "Unlimited. Photos are compressed automatically to save space without losing quality."
      },
      {
        q: "Can customers see the work order?",
        a: "Yes. You can share a read-only link or PDF with photos and notes included."
      }
    ],
    quote: {
      text: "Photos saved us from a bogus claim. Customer said we didn't do the work—we pulled up the work order with before/after photos and timestamps.",
      author: "Maria L.",
      role: "Owner"
    }
  },
  
  "estimates": {
    slug: "estimates",
    seoTitle: "Field Service Estimating & E-Sign Software | Get Jobs Approved Faster",
    heroHeadline: "Estimates and e-signatures on the spot",
    heroSubhead: "Win more jobs. Send professional quotes from your phone, get approvals with a finger signature, and turn estimates into invoices instantly.",
    heroStats: [
      { label: "2x faster approvals", sub: "Based on internal usage data" },
      { label: "65% close rate", sub: "Based on internal usage data" },
      { label: "E-sign on any device", sub: "ESIGN Act compliant" }
    ],
    verticalAngles: {
      hvac: "Quote system replacements on-site and get approval before you leave. No more waiting days for a 'yes.'",
      plumbing: "Emergency repairs get quoted and approved in minutes. Stop losing jobs to faster competitors.",
      electrical: "Panel upgrades and rewires quoted professionally with line-item pricing. Customers know exactly what they're getting."
    },
    steps: [
      {
        title: "Build quotes from templates",
        bullets: [
          "Use pre-built pricing for common jobs",
          "Add photos and notes to justify the price",
          "Present on your phone or email instantly"
        ],
        imgAlt: "Estimate builder showing line items and total with photo attachment"
      },
      {
        title: "Customer signs digitally",
        bullets: [
          "Capture signature with a finger on any device",
          "ESIGN Act compliant and legally binding",
          "Email confirmation sent automatically"
        ],
        imgAlt: "E-signature capture screen on mobile device"
      },
      {
        title: "Convert to invoice immediately",
        bullets: [
          "Approved quote becomes invoice with one tap",
          "Schedule the job on the same screen",
          "Get paid before leaving the driveway"
        ],
        imgAlt: "Quote approval screen showing Convert to Invoice button"
      }
    ],
    capabilities: [
      {
        id: "templates",
        title: "Quote templates",
        bullets: [
          "Pre-load common jobs with pricing",
          "Build quotes in under 2 minutes"
        ]
      },
      {
        id: "esign",
        title: "Digital signatures",
        bullets: [
          "Legally binding e-signatures",
          "Works on phone, tablet, or laptop"
        ]
      },
      {
        id: "professional",
        title: "Professional presentation",
        bullets: [
          "Your logo, colors, and branding",
          "Line-item pricing with photos"
        ]
      },
      {
        id: "conversion",
        title: "Quote to invoice instantly",
        bullets: [
          "Approved quotes become invoices",
          "Collect payment on the spot"
        ]
      }
    ],
    minPlanLabel: "Free",
    planNotes: "Estimates and e-signatures are free forever. Unlimited users on paid plans. No per-tech seat fees.",
    faq: [
      {
        q: "Will my team actually use this?",
        a: "Yes. They just pick the job type, add a photo, and hand the phone to the customer to sign. Takes 2 minutes."
      },
      {
        q: "Are e-signatures legal?",
        a: "Yes. Fully compliant with the ESIGN Act. Every signature includes timestamp, IP address, and signed PDF."
      },
      {
        q: "Can I customize the quote template?",
        a: "Yes. Add your logo, change colors, and build unlimited templates for different job types."
      },
      {
        q: "What if the customer wants to think about it?",
        a: "Email them the quote. They can review and sign from any device. You'll get notified when they approve."
      },
      {
        q: "Can I track quote status?",
        a: "Yes. See which quotes are pending, approved, or declined. Follow up on quotes that are still open."
      }
    ],
    quote: {
      text: "We close 2 out of 3 quotes now. Before, we'd email and wait days. Now we get the signature before we pack up the truck.",
      author: "Derek P.",
      role: "Field Supervisor"
    }
  },
  
  "messaging-reminders": {
    slug: "messaging-reminders",
    seoTitle: "Automated Appointment Reminders | SMS & Email for Field Service",
    heroHeadline: "Automated reminders and two-way messaging",
    heroSubhead: "Cut no-shows by 40%. Automated SMS and email reminders keep customers informed, and two-way messaging means less time on the phone.",
    heroStats: [
      { label: "40% fewer no-shows", sub: "Based on internal usage data" },
      { label: "Less phone tag", sub: "Two-way messaging" },
      { label: "Automated delivery", sub: "24-48 hours before job" }
    ],
    verticalAngles: {
      hvac: "Send reminders for seasonal tune-ups and filter changes. Customers confirm appointments without tying up your phone lines.",
      plumbing: "Emergency calls get instant ETA updates via SMS. Routine service gets reminders so customers don't forget.",
      electrical: "Panel inspections and permit work scheduled weeks out? Automated reminders mean customers show up ready."
    },
    steps: [
      {
        title: "Set reminder rules once",
        bullets: [
          "Choose when reminders go out (24 hours, 48 hours, etc.)",
          "Customize message templates",
          "System sends automatically for every job"
        ],
        imgAlt: "Reminder settings screen showing timing and message templates"
      },
      {
        title: "Customers get reminders automatically",
        bullets: [
          "SMS and email sent at the right time",
          "Includes tech name, arrival window, and job details",
          "Customers can confirm or reschedule with one tap"
        ],
        imgAlt: "Customer phone showing SMS reminder with confirm button"
      },
      {
        title: "Two-way messaging reduces phone calls",
        bullets: [
          "Customers reply to reminders with questions",
          "Office sees all messages in one inbox",
          "Less time on hold, more time working"
        ],
        imgAlt: "Messaging inbox showing customer conversations"
      }
    ],
    capabilities: [
      {
        id: "auto-reminders",
        title: "Automated reminders",
        bullets: [
          "SMS and email sent automatically",
          "No manual work required"
        ]
      },
      {
        id: "two-way",
        title: "Two-way messaging",
        bullets: [
          "Customers reply directly to reminders",
          "All messages in one inbox"
        ]
      },
      {
        id: "confirmations",
        title: "One-tap confirmations",
        bullets: [
          "Customers confirm with one button",
          "See confirmation status at a glance"
        ]
      },
      {
        id: "eta-updates",
        title: "ETA updates",
        bullets: [
          "Send 'on my way' messages automatically",
          "Customers know when to expect you"
        ]
      }
    ],
    minPlanLabel: "Starter",
    planNotes: "Automated reminders start on Starter plan. Unlimited users on paid plans. No per-tech seat fees.",
    faq: [
      {
        q: "Will my team actually use this?",
        a: "They don't have to do anything. The system sends reminders automatically. They just see fewer no-shows."
      },
      {
        q: "Can customers reply to messages?",
        a: "Yes. Two-way SMS and email. All replies go to your inbox where office staff can respond."
      },
      {
        q: "What if a customer doesn't confirm?",
        a: "You'll see unconfirmed jobs flagged in your schedule. Call to follow up only when needed."
      },
      {
        q: "Can I customize the reminder message?",
        a: "Yes. Build templates for different job types and adjust timing for each."
      },
      {
        q: "How much do SMS messages cost?",
        a: "SMS credits included with Starter plan and above. Additional credits available if needed."
      }
    ],
    quote: {
      text: "No-shows dropped to almost nothing. And we're not playing phone tag all morning confirming appointments.",
      author: "Lisa K.",
      role: "Office Manager"
    }
  },
  
  "recurring": {
    slug: "recurring",
    seoTitle: "Recurring Service Management | Automated Maintenance Scheduling",
    heroHeadline: "Recurring maintenance and warranty visits",
    heroSubhead: "Automate repeat work. Set up maintenance contracts once, and jobs create automatically on your schedule.",
    heroStats: [
      { label: "Predictable revenue", sub: "Maintenance contracts" },
      { label: "Never miss a service", sub: "Auto-scheduled" },
      { label: "Happy customers", sub: "On-time maintenance" }
    ],
    verticalAngles: {
      hvac: "Seasonal tune-ups scheduled automatically. Spring and fall maintenance contracts generate revenue without chasing customers.",
      plumbing: "Water heater flushes, backflow tests, and drain maintenance scheduled months in advance. Customers stay compliant.",
      electrical: "Annual safety inspections and generator service contracts create recurring revenue streams."
    },
    steps: [
      {
        title: "Create maintenance templates",
        bullets: [
          "Define service details and pricing",
          "Set frequency (monthly, quarterly, annual)",
          "Add customer to contract"
        ],
        imgAlt: "Recurring service template setup screen"
      },
      {
        title: "Jobs create automatically",
        bullets: [
          "System generates work orders on schedule",
          "Customers get reminders before each visit",
          "No manual scheduling required"
        ],
        imgAlt: "Calendar showing auto-generated recurring jobs"
      },
      {
        title: "Track contract status",
        bullets: [
          "See active contracts and renewal dates",
          "Invoice automatically after each visit",
          "Renewal reminders keep contracts active"
        ],
        imgAlt: "Contract management dashboard showing active agreements"
      }
    ],
    capabilities: [
      {
        id: "auto-schedule",
        title: "Automatic scheduling",
        bullets: [
          "Jobs create on the right date",
          "No manual entry required"
        ]
      },
      {
        id: "contracts",
        title: "Contract templates",
        bullets: [
          "Build templates for common agreements",
          "Assign customers in seconds"
        ]
      },
      {
        id: "renewals",
        title: "Renewal tracking",
        bullets: [
          "See contracts expiring soon",
          "Automated renewal reminders"
        ]
      },
      {
        id: "billing",
        title: "Automated billing",
        bullets: [
          "Invoice after each visit",
          "Track contract revenue"
        ]
      }
    ],
    minPlanLabel: "Essential",
    planNotes: "Recurring jobs start on Essential plan. Unlimited users on paid plans. No per-tech seat fees.",
    faq: [
      {
        q: "Will my team actually use this?",
        a: "Yes. They just see jobs appear on their schedule like any other job. They don't manage the recurring part."
      },
      {
        q: "Can I pause a recurring contract?",
        a: "Yes. Pause, skip a visit, or adjust frequency anytime without losing the contract."
      },
      {
        q: "Do customers get reminders for each visit?",
        a: "Yes. Each occurrence gets automatic reminders just like one-time jobs."
      },
      {
        q: "Can I bill monthly even if service is quarterly?",
        a: "Yes. Set billing frequency separately from service frequency."
      },
      {
        q: "What happens when a contract expires?",
        a: "You'll get a renewal reminder 30 days before expiration. One-click renewal for another term."
      }
    ],
    quote: {
      text: "Maintenance contracts are 40% of our revenue now. The system handles scheduling, we just show up and do the work.",
      author: "Tom H.",
      role: "Owner"
    }
  },
  
  "routing-gps": {
    slug: "routing-gps",
    seoTitle: "Route Optimization & GPS Tracking | Cut Drive Time for Field Techs",
    heroHeadline: "Route optimization and live GPS tracking",
    heroSubhead: "Cut drive time by 2-4 hours per day. One-click route optimization and live GPS tracking means less windshield time and more jobs done.",
    heroStats: [
      { label: "Save 2-4 hours/day", sub: "Based on internal usage data" },
      { label: "Lower fuel costs", sub: "Optimized routing" },
      { label: "More jobs per crew", sub: "Less drive time" }
    ],
    verticalAngles: {
      hvac: "Hit 8 maintenance calls instead of 6. Route optimization packs more service visits into each day.",
      plumbing: "Emergency calls get routed to the closest available truck. No more crossing town unnecessarily.",
      electrical: "Service calls and inspections mapped efficiently. Techs spend time working, not driving."
    },
    steps: [
      {
        title: "Load jobs for the day",
        bullets: [
          "See all scheduled jobs on a map",
          "Add emergency calls as they come in",
          "System suggests best route order"
        ],
        imgAlt: "Map view showing scheduled jobs and suggested route"
      },
      {
        title: "One-click route optimization",
        bullets: [
          "AI suggests most efficient order",
          "Accounts for time windows and priorities",
          "Techs get turn-by-turn navigation"
        ],
        imgAlt: "Optimized route with numbered stops and estimated times"
      },
      {
        title: "Track crews in real time",
        bullets: [
          "See truck locations live on map",
          "Monitor job progress throughout the day",
          "Dispatch emergency calls to closest tech"
        ],
        imgAlt: "Live GPS tracking dashboard showing crew locations"
      }
    ],
    capabilities: [
      {
        id: "optimization",
        title: "One-click optimization",
        bullets: [
          "Best route order calculated instantly",
          "Saves 2-4 hours of drive time per day"
        ]
      },
      {
        id: "gps-tracking",
        title: "Live GPS tracking",
        bullets: [
          "See crews on map in real time",
          "ETA updates sent to customers"
        ]
      },
      {
        id: "navigation",
        title: "Turn-by-turn directions",
        bullets: [
          "Techs tap to open in Google Maps or Apple Maps",
          "No typing addresses manually"
        ]
      },
      {
        id: "reports",
        title: "Route efficiency reports",
        bullets: [
          "See drive time vs work time",
          "Identify optimization opportunities"
        ]
      }
    ],
    minPlanLabel: "Essential",
    planNotes: "Route optimization starts on Essential plan. Unlimited users on paid plans. No per-tech seat fees.",
    faq: [
      {
        q: "Will my team actually use this?",
        a: "Yes. They just follow the route on their phone. They don't have to plan anything or type addresses."
      },
      {
        q: "Does it account for traffic?",
        a: "Routes are based on distance and time windows. For live traffic, techs can tap to open in Google Maps."
      },
      {
        q: "Can I manually adjust routes?",
        a: "Yes. Override suggested routes anytime. Drag jobs to reorder or assign to different techs."
      },
      {
        q: "How accurate is GPS tracking?",
        a: "Updated every 30 seconds when techs have the app open. Works on any smartphone."
      },
      {
        q: "Can customers see the truck location?",
        a: "Not by default, but you can send ETA updates via SMS so they know when to expect you."
      }
    ],
    quote: {
      text: "We're fitting 3 more jobs per day now. Less driving, more working, same crew size.",
      author: "Carlos M.",
      role: "Dispatcher"
    }
  },
  
  "inventory-costing": {
    slug: "inventory-costing",
    seoTitle: "Parts Inventory & Job Costing Software | Track Profitability Per Job",
    heroHeadline: "Parts inventory and job costing",
    heroSubhead: "Know your real costs. Track parts used, labor hours, and job profitability so you stop losing money on jobs that look profitable on paper.",
    heroStats: [
      { label: "Know real job costs", sub: "Labor + parts + overhead" },
      { label: "Never run out", sub: "Low stock alerts" },
      { label: "Improve margins", sub: "Based on actual data" }
    ],
    verticalAngles: {
      hvac: "Track refrigerant, filters, and replacement parts. See which jobs are profitable and which are eating your margin.",
      plumbing: "Parts inventory synced with job costing means you know exactly how much that emergency repair really cost you.",
      electrical: "Wire, panels, and fixtures tracked per job. Stop guessing at profitability and start knowing."
    },
    steps: [
      {
        title: "Build your parts catalog",
        bullets: [
          "Add parts with costs and reorder points",
          "Set markup percentages for pricing",
          "Track stock levels in real time"
        ],
        imgAlt: "Parts catalog showing items with stock levels and costs"
      },
      {
        title: "Log parts used on each job",
        bullets: [
          "Techs select parts from catalog on-site",
          "Quantities deducted from inventory automatically",
          "Labor hours tracked for accurate costing"
        ],
        imgAlt: "Mobile work order showing parts used and time logged"
      },
      {
        title: "See profit per job",
        bullets: [
          "Job costing report shows parts + labor + overhead",
          "Compare estimated vs actual costs",
          "Identify which job types are most profitable"
        ],
        imgAlt: "Job costing report showing profit breakdown"
      }
    ],
    capabilities: [
      {
        id: "inventory",
        title: "Parts tracking",
        bullets: [
          "Real-time stock levels",
          "Low stock alerts and reorder points"
        ]
      },
      {
        id: "costing",
        title: "Job cost breakdown",
        bullets: [
          "Parts, labor, overhead per job",
          "Estimated vs actual comparison"
        ]
      },
      {
        id: "profitability",
        title: "Profitability reports",
        bullets: [
          "See which jobs make money",
          "Track gross margin trends"
        ]
      },
      {
        id: "pricing",
        title: "Automatic pricing",
        bullets: [
          "Set markup rules per part category",
          "Quote pricing calculated from costs"
        ]
      }
    ],
    minPlanLabel: "Premium",
    planNotes: "Inventory and job costing start on Premium plan. Unlimited users on paid plans. No per-tech seat fees.",
    faq: [
      {
        q: "Will my team actually use this?",
        a: "Yes. They just pick parts from the list on their phone. Stock updates automatically."
      },
      {
        q: "Can I set reorder alerts?",
        a: "Yes. Get notified when parts hit reorder point so you never run out."
      },
      {
        q: "Does it integrate with QuickBooks?",
        a: "Yes. Parts and job costs sync to QuickBooks for accurate accounting."
      },
      {
        q: "Can I track overhead costs?",
        a: "Yes. Set overhead rates (truck, insurance, etc.) that get added to job costing automatically."
      },
      {
        q: "What if a tech uses a part not in the catalog?",
        a: "They can add it on the fly with cost and quantity. It syncs back to the catalog."
      }
    ],
    quote: {
      text: "We thought we were making 40% margin. Job costing showed it was 22%. Fixed our pricing and now we're actually profitable.",
      author: "Ryan S.",
      role: "Owner"
    }
  },
  
  "analytics": {
    slug: "analytics",
    seoTitle: "Field Service Analytics & Reporting | Real-Time Dashboards",
    heroHeadline: "Advanced reporting and analytics",
    heroSubhead: "Stop guessing, start knowing. Real-time dashboards and custom reports show you exactly what's working and what's costing you money.",
    heroStats: [
      { label: "Data-driven decisions", sub: "Real-time metrics" },
      { label: "Spot trends early", sub: "Custom dashboards" },
      { label: "Optimize operations", sub: "Actionable insights" }
    ],
    verticalAngles: {
      hvac: "See which techs close the most tune-up upsells. Track seasonal revenue trends to staff appropriately.",
      plumbing: "Monitor average job duration by type. Find bottlenecks and optimize scheduling.",
      electrical: "Track which services are most profitable. Double down on winners, drop the losers."
    },
    steps: [
      {
        title: "Choose metrics to track",
        bullets: [
          "Revenue, jobs completed, customer satisfaction",
          "Tech efficiency, average job duration",
          "Parts usage, profitability by job type"
        ],
        imgAlt: "Metrics selection screen showing available KPIs"
      },
      {
        title: "Build custom dashboards",
        bullets: [
          "Drag metrics to dashboard layout",
          "Filter by date range, crew, or job type",
          "Share dashboards with team"
        ],
        imgAlt: "Custom dashboard builder with drag-and-drop interface"
      },
      {
        title: "Analyze and optimize",
        bullets: [
          "Spot trends before they become problems",
          "Export reports to Excel or PDF",
          "Set up automated weekly reports via email"
        ],
        imgAlt: "Analytics dashboard showing revenue trends and key metrics"
      }
    ],
    capabilities: [
      {
        id: "dashboards",
        title: "Real-time dashboards",
        bullets: [
          "See key metrics at a glance",
          "Updates live as jobs complete"
        ]
      },
      {
        id: "custom-reports",
        title: "Custom report builder",
        bullets: [
          "Build reports for any metric",
          "Filter and segment by any field"
        ]
      },
      {
        id: "trends",
        title: "Trend analysis",
        bullets: [
          "Compare week-over-week, month-over-month",
          "Forecast revenue based on historical data"
        ]
      },
      {
        id: "export",
        title: "Export and share",
        bullets: [
          "Export to PDF, Excel, or CSV",
          "Schedule automated email reports"
        ]
      }
    ],
    minPlanLabel: "Premium",
    planNotes: "Advanced analytics start on Premium plan. Unlimited users on paid plans. No per-tech seat fees.",
    faq: [
      {
        q: "Will my team actually use this?",
        a: "Office managers and owners use it for business decisions. Techs don't need to touch it."
      },
      {
        q: "Can I export reports?",
        a: "Yes. Export to PDF, Excel, or CSV. Share with accountants or investors."
      },
      {
        q: "What metrics can I track?",
        a: "Revenue, jobs, crew efficiency, customer satisfaction, parts usage, profitability, and more."
      },
      {
        q: "Can I compare techs or crews?",
        a: "Yes. Filter reports by tech, crew, job type, or any other field."
      },
      {
        q: "How far back does historical data go?",
        a: "All data since you started using LinkServicePro. No limits on historical reporting."
      }
    ],
    quote: {
      text: "Dashboard shows me the business at a glance. I know if we're on track before noon every day.",
      author: "Angela M.",
      role: "Owner"
    }
  },
  
  "custom-checklists": {
    slug: "custom-checklists",
    seoTitle: "Custom Forms & Checklists | Field Service Quality Control",
    heroHeadline: "Custom checklists and fields",
    heroSubhead: "Your process, your way. Build custom forms and checklists for any job type so every job gets done right, every time.",
    heroStats: [
      { label: "Standardize quality", sub: "Consistent workflows" },
      { label: "Capture custom data", sub: "Any field type" },
      { label: "Build your process", sub: "No coding required" }
    ],
    verticalAngles: {
      hvac: "Safety inspections, refrigerant logs, and maintenance checklists customized for your exact workflow.",
      plumbing: "Backflow test forms, water heater commissioning checklists, and permit documentation all digital.",
      electrical: "Panel inspection checklists, code compliance forms, and safety signoffs that match your process exactly."
    },
    steps: [
      {
        title: "Design custom forms",
        bullets: [
          "Add text, numbers, dropdowns, checkboxes, dates",
          "Include photo requirements and signature fields",
          "Mark fields as required to enforce completion"
        ],
        imgAlt: "Form builder showing custom field options"
      },
      {
        title: "Assign to job types",
        bullets: [
          "Attach forms to specific job types",
          "Techs see the right checklist for each job",
          "No guessing what needs to be done"
        ],
        imgAlt: "Job type configuration showing assigned checklists"
      },
      {
        title: "Crews complete in the field",
        bullets: [
          "Follow step-by-step on their phone",
          "Can't mark job complete until checklist done",
          "All data synced to office in real time"
        ],
        imgAlt: "Mobile checklist completion screen with progress indicator"
      }
    ],
    capabilities: [
      {
        id: "form-builder",
        title: "No-code form builder",
        bullets: [
          "Drag and drop to build forms",
          "No technical skills required"
        ]
      },
      {
        id: "field-types",
        title: "Any field type",
        bullets: [
          "Text, numbers, dropdowns, checkboxes, dates",
          "Photos, signatures, GPS coordinates"
        ]
      },
      {
        id: "required-fields",
        title: "Enforce completion",
        bullets: [
          "Mark fields as required",
          "Job can't close until checklist done"
        ]
      },
      {
        id: "data-capture",
        title: "Structured data",
        bullets: [
          "Every job captures the same data",
          "Export to Excel or analyze in reports"
        ]
      }
    ],
    minPlanLabel: "Premium",
    planNotes: "Custom checklists start on Premium plan. Unlimited users on paid plans. No per-tech seat fees.",
    faq: [
      {
        q: "Will my team actually use this?",
        a: "Yes. They just tap through the checklist on their phone. If you make a field required, they have to fill it out."
      },
      {
        q: "What field types are supported?",
        a: "Text, numbers, dropdowns, checkboxes, dates, photos, signatures, and GPS coordinates."
      },
      {
        q: "Can I require certain fields?",
        a: "Yes. Mark fields as required to ensure completion. Job can't be closed until required fields are filled."
      },
      {
        q: "Can I have different checklists for different job types?",
        a: "Yes. Build unlimited checklists and assign to specific job types."
      },
      {
        q: "Can I export the checklist data?",
        a: "Yes. Export to Excel or CSV. Use in reports or send to third parties."
      }
    ],
    quote: {
      text: "Every HVAC install now gets the same 47-point checklist. Quality is consistent and customers notice.",
      author: "Mike T.",
      role: "Operations Manager"
    }
  }
};
