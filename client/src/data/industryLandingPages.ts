export interface IndustryLandingPage {
  slug: string;
  name: string;
  subtitle: string;
  kpis: Array<{ value: string; label: string }>;
  whatItDoes: string[];
  jobs: string[];
  pains: string[];
  solves: string[];
  howItWorks: Array<{ step: string; title: string; description: string }>;
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
  featuresUsedMost: string[];
  integrations: string[];
  imagePrompt: string;
  imageAlt: string;
  imageCaption: string;
  faqs: Array<{ question: string; answer: string }>;
  seoTitle: string;
  seoDescription: string;
}

export const industryLandingPages: Record<string, IndustryLandingPage> = {
  cleaning: {
    slug: "cleaning",
    name: "Cleaning",
    subtitle: "Schedule crews, track jobs, and get paid the same day.",
    kpis: [
      { value: "6-10 hrs", label: "Time saved/week" },
      { value: "Same-day", label: "Payment processing" },
      { value: "95%+", label: "Schedule accuracy" }
    ],
    whatItDoes: [
      "Drag-and-drop schedule assigns crews to recurring and one-time jobs without spreadsheets",
      "Automated reminders keep clients informed and reduce last-minute cancellations",
      "Mobile invoicing with online payments means you get paid before leaving the site"
    ],
    jobs: ["Move-out clean", "Post-construction", "Deep clean", "Recurring service", "Office night shift", "Kitchen hood"],
    pains: [
      "Last-minute cancellations kill your schedule",
      "Key handoff chaos wastes crew time",
      "Who has which supplies? Constant back-and-forth",
      "Missed upsell opportunities on add-ons"
    ],
    solves: [
      "Automated reminders with custom time windows reduce no-shows",
      "Crew notes and supply checklists in every work order",
      "Supply tracking shows what's on each truck",
      "Upsell templates built into quotes and work orders"
    ],
    howItWorks: [
      { step: "1", title: "Quote & Schedule", description: "Send quote with e-sign. Client approves, converts to work order, lands on calendar automatically." },
      { step: "2", title: "Dispatch Crew", description: "Crew sees full job details, supply checklist, and client access notes on their device." },
      { step: "3", title: "Invoice & Collect", description: "Mark complete, invoice generates, client pays online or on-site. Done." }
    ],
    testimonial: {
      quote: "Scheduling dropped from 2 hours to 15 minutes. Clients love the automated reminders. We get paid same-day now.",
      name: "Maria Santos",
      role: "Owner, Sparkle Clean Services"
    },
    featuresUsedMost: [
      "drag-and-drop-scheduling",
      "automated-reminders",
      "work-orders",
      "quote-esign",
      "invoicing-batch",
      "payments"
    ],
    integrations: ["QuickBooks", "Xero", "SMS/Email", "Payment Processing"],
    imagePrompt: "Cleaning crew leader taping checklist to cart, gloves and supply caddy visible, facility hallway background, no screens visible, documentary jobsite photography, natural light, shallow depth of field, moderate contrast, OSHA-safe PPE, tight crop on hands and tools, 35mm composition, no third-party logos",
    imageAlt: "Cleaning crew lead taping job checklist to supply cart in hallway",
    imageCaption: "Ready and organized for the day",
    faqs: [
      { question: "How fast can we import our customers and jobs?", answer: "Upload your CSV or sync from QuickBooks/Xero. Most teams are up and running in under an hour." },
      { question: "Can crews see the day's work without calling in?", answer: "Yes. Every crew member gets mobile access to their schedule, job details, and client notes in real time." },
      { question: "What happens when a client cancels last-minute?", answer: "Automated notifications alert you instantly. Drag-and-drop scheduling lets you reassign crews in seconds." },
      { question: "Can we collect deposits or take payment on site?", answer: "Absolutely. Set deposit requirements on quotes and accept card payments online or in the field." },
      { question: "Does this work offline?", answer: "Crews can view job details offline. When they reconnect, updates sync automatically." },
      { question: "How does pricing work?", answer: "Straightforward per-user pricing with no hidden fees. Free forever for your first two users, then pay as you grow." }
    ],
    seoTitle: "Cleaning Software • Field Service Management",
    seoDescription: "Schedule crews, track jobs, and get paid the same day. Built for cleaning businesses."
  },

  "janitorial-cleaning": {
    slug: "janitorial-cleaning",
    name: "Janitorial Cleaning",
    subtitle: "Nightly routes that run like clockwork.",
    kpis: [
      { value: "Zero", label: "Missed buildings" },
      { value: "100%", label: "Route compliance" },
      { value: "4-6 hrs", label: "Admin time saved" }
    ],
    whatItDoes: [
      "Route tags organize buildings by night crew so nobody misses a stop",
      "Scope checklists on every work order eliminate 'what was I supposed to do?' calls",
      "Supply tracking shows exactly what's in each cart before the shift starts"
    ],
    jobs: ["Nightly office", "Restroom service", "Floor care", "Waste collection", "Supply restock", "Quality inspection"],
    pains: [
      "Crews miss buildings when routes aren't clear",
      "Unclear scope leads to callbacks and complaints",
      "Supply counts are a guess until someone runs out"
    ],
    solves: [
      "Route tags group jobs by crew and order—no missed stops",
      "Scope checklist built into work order shows exactly what to clean",
      "Supply tracking per cart prevents mid-shift stockouts"
    ],
    howItWorks: [
      { step: "1", title: "Set Up Routes", description: "Tag buildings by route and crew. System builds nightly schedule automatically based on your recurring contracts." },
      { step: "2", title: "Dispatch Crews", description: "Crews see their route list with building access codes, scope checklists, and supply needs." },
      { step: "3", title: "Track & Invoice", description: "Mark buildings complete as you go. Billing syncs to QuickBooks or Xero for fast invoicing." }
    ],
    testimonial: {
      quote: "Route tags ended the 'did we hit building 12?' question. Crews know exactly where to go and what to do. Zero missed stops since we switched.",
      name: "James Parker",
      role: "Operations Manager, NightShift Commercial"
    },
    featuresUsedMost: [
      "route-optimization",
      "work-orders",
      "recurring-jobs",
      "automated-reminders",
      "invoicing-batch",
      "customer-portal"
    ],
    integrations: ["QuickBooks", "Xero", "SMS/Email", "Facility Management"],
    imagePrompt: "Janitorial tech loading cleaning cart near elevator bank, wearing badge and gloves, route sheet on clipboard, no screens visible, documentary jobsite, natural lighting, tight crop on hands and cart, 35mm composition",
    imageAlt: "Janitorial technician loading supply cart with route clipboard",
    imageCaption: "Night shift ready to roll",
    faqs: [
      { question: "How do we handle multi-building routes?", answer: "Route tags let you group buildings by crew. The system shows them in order so crews hit every stop without calling dispatch." },
      { question: "Can crews report issues during their shift?", answer: "Yes. They can add notes and photos to any building's work order in real time." },
      { question: "What if we need to add a building mid-contract?", answer: "Add it to the route, assign the crew, and it appears on their schedule automatically." },
      { question: "Can clients see service history?", answer: "Absolutely. The customer portal shows completed visits, checklists, and any notes your crew added." },
      { question: "Does this handle supply reordering?", answer: "You can track what's in each cart. When inventory drops, you'll see it before anyone runs out." },
      { question: "How does pricing work?", answer: "Per-user pricing with no setup fees. First two users are free, then you pay for each crew member who needs access." }
    ],
    seoTitle: "Janitorial Cleaning Software • Field Service Management",
    seoDescription: "Nightly routes that run like clockwork. Built for janitorial cleaning companies."
  },

  "pressure-washing": {
    slug: "pressure-washing",
    name: "Pressure Washing",
    subtitle: "Fast quotes. Smart routes. Before/after proof.",
    kpis: [
      { value: "+28%", label: "Quote win rate" },
      { value: "2-3 hrs", label: "Route time saved" },
      { value: "Zero", label: "Photo disputes" }
    ],
    whatItDoes: [
      "E-sign quotes with photos convert faster than email estimates",
      "Route optimization groups jobs by area to cut drive time and water stops",
      "Before/after photos in work orders prove results and prevent disputes"
    ],
    jobs: ["Driveways", "Siding", "Decks & patios", "Fleet washing", "Graffiti removal", "Walkways"],
    pains: [
      "Water access isn't guaranteed—you show up and can't hook up",
      "Neighbors complain about overspray or noise",
      "Clients claim you missed spots without proof"
    ],
    solves: [
      "Pre-job notes capture water access, hose length, and power source",
      "Door hanger templates notify neighbors before you arrive",
      "Required before/after photos create undeniable proof of work"
    ],
    howItWorks: [
      { step: "1", title: "Quote with Photos", description: "Snap a photo during walkthrough. Add line items, send quote with e-sign. Client approves on their phone." },
      { step: "2", title: "Route & Dispatch", description: "Route optimization groups nearby jobs. Crew sees water access notes and neighbor alerts before arrival." },
      { step: "3", title: "Complete & Collect", description: "Take before/after photos, mark complete, invoice auto-generates. Client pays online or on-site." }
    ],
    testimonial: {
      quote: "Photo quotes closed 28% more deals. Routes cut our drive time by hours. Before/after shots ended all the 'you missed a spot' nonsense.",
      name: "Derek Mills",
      role: "Owner, ClearView Pressure Washing"
    },
    featuresUsedMost: [
      "quote-esign",
      "route-optimization",
      "work-orders",
      "payments",
      "customer-portal",
      "review-requests"
    ],
    integrations: ["QuickBooks", "Xero", "SMS/Email", "Payment Processing", "Photo Storage"],
    imagePrompt: "Pressure washing tech connecting hose to outdoor faucet bib, surface cleaner attachment on ground, truck-mounted reel visible, no screens, documentary jobsite, natural light, tight crop on hands and equipment, 35mm composition",
    imageAlt: "Pressure washing technician connecting water hose to outdoor bib",
    imageCaption: "Ready to roll",
    faqs: [
      { question: "Can we add photos to quotes?", answer: "Yes. Snap photos during the walkthrough, attach them to the quote, and send for e-signature." },
      { question: "What if weather delays a job?", answer: "Drag-and-drop reschedule moves the job instantly. Automated notifications alert the client." },
      { question: "Do crews need to carry tablets?", answer: "They can use their own phones. The app works on iOS and Android." },
      { question: "Can we charge deposits?", answer: "Absolutely. Set deposit requirements on quotes. Clients pay online before you schedule." },
      { question: "How do routes work with water access issues?", answer: "Pre-job notes capture water source, hose length, and any access restrictions. Crews see this before arrival." },
      { question: "What's the pricing?", answer: "Per-user pricing. First two users free, then you pay as you add crew members." }
    ],
    seoTitle: "Pressure Washing Software • Field Service Management",
    seoDescription: "Fast quotes. Smart routes. Before/after proof. Built for pressure washing companies."
  },

  "window-cleaning": {
    slug: "window-cleaning",
    name: "Window Cleaning",
    subtitle: "Ladder-safe scheduling with repeat plans.",
    kpis: [
      { value: "6-8 hrs", label: "Schedule time saved" },
      { value: "90%+", label: "Recurring retention" },
      { value: "Zero", label: "Streak complaints" }
    ],
    whatItDoes: [
      "Recurring job plans keep commercial clients on autopilot without spreadsheets",
      "Weather rules automatically reschedule when rain or wind hit",
      "Photo proof on every job ends 'you left streaks' disputes"
    ],
    jobs: ["Residential exterior", "Commercial storefront", "High-reach pole work", "Skylights", "Post-construction", "Recurring maintenance"],
    pains: [
      "Weather forces constant rescheduling and client calls",
      "Ladder time eats into job count per day",
      "Streak complaints without proof of clean work"
    ],
    solves: [
      "Weather rules auto-reschedule and notify clients when conditions aren't safe",
      "Crew pairing assigns the right team to ladder jobs",
      "Required photo proof shows before/during/after for every pane"
    ],
    howItWorks: [
      { step: "1", title: "Set Up Recurring Plans", description: "Create monthly or quarterly schedules for commercial accounts. System auto-generates jobs and sends reminders." },
      { step: "2", title: "Dispatch with Weather Rules", description: "Crews see ladder requirements and access notes. If weather hits, jobs auto-reschedule with client notification." },
      { step: "3", title: "Complete & Prove", description: "Take photos of completed panes, mark done, invoice sends. Client gets photo proof and pays online." }
    ],
    testimonial: {
      quote: "Recurring plans put our commercial accounts on autopilot. Weather rules saved us hours of rescheduling calls. Photo proof ended every single complaint.",
      name: "Lisa Chen",
      role: "Owner, ClearSky Window Cleaning"
    },
    featuresUsedMost: [
      "recurring-jobs",
      "automated-reminders",
      "drag-and-drop-scheduling",
      "work-orders",
      "customer-portal",
      "invoicing-batch"
    ],
    integrations: ["QuickBooks", "Xero", "Weather API", "SMS/Email", "Payment Processing"],
    imagePrompt: "Window cleaner attaching squeegee to extension pole, tool belt with holster visible, bucket on ground, no screens visible, documentary jobsite, natural light, tight crop on hands and equipment, 35mm composition",
    imageAlt: "Window cleaner preparing squeegee attachment on extension pole",
    imageCaption: "Gearing up for the day",
    faqs: [
      { question: "How do recurring plans work?", answer: "Set the frequency (weekly, monthly, quarterly). The system auto-generates jobs and sends client reminders. You just dispatch crews." },
      { question: "What happens when weather cancels a job?", answer: "Weather rules automatically reschedule and notify the client. You can customize the rules by wind speed, rain, or temperature." },
      { question: "Can we track ladder jobs separately?", answer: "Yes. Tag jobs that need ladders or high-reach poles. Assign crews with the right equipment and experience." },
      { question: "Do clients see our progress?", answer: "Absolutely. The customer portal shows upcoming visits, completed work, and photos." },
      { question: "Can we collect payment on-site?", answer: "Yes. Accept card payments in the field or send an invoice for online payment." },
      { question: "How does pricing work?", answer: "Per-user pricing. First two users are free, then you pay as your team grows." }
    ],
    seoTitle: "Window Cleaning Software • Field Service Management",
    seoDescription: "Ladder-safe scheduling with repeat plans. Built for window cleaning businesses."
  },

  "lawn-care": {
    slug: "lawn-care",
    name: "Lawn Care",
    subtitle: "Seasonal routes without the spreadsheet.",
    kpis: [
      { value: "40%", label: "Faster routing" },
      { value: "95%", label: "On-time completion" },
      { value: "8-10 hrs", label: "Admin saved/week" }
    ],
    whatItDoes: [
      "Seasonal recurring plans switch from mow to leaf to snow without rebuilding your schedule",
      "Route optimization groups properties by crew zone to minimize drive time",
      "Rain buffers automatically push jobs when weather delays hit"
    ],
    jobs: ["Mowing", "Trimming & edging", "Fertilization", "Aeration", "Overseeding", "Leaf removal", "Spring/fall cleanup"],
    pains: [
      "Seasonality means you're constantly rebuilding schedules",
      "Rain delays force hours of rescheduling calls",
      "Locked gates and access issues waste crew time"
    ],
    solves: [
      "Recurring plans with seasonal service swaps keep clients active year-round",
      "Rain buffers auto-reschedule affected jobs with client notifications",
      "Gate codes and access notes in work orders eliminate 'can't get in' calls"
    ],
    howItWorks: [
      { step: "1", title: "Set Seasonal Plans", description: "Create recurring schedules for mow season, then switch to leaf or aeration when seasons change. One client, multiple service plans." },
      { step: "2", title: "Route & Dispatch", description: "Route optimization groups properties by zone. Crews see gate codes, mower deck height, and special instructions." },
      { step: "3", title: "Track & Invoice", description: "Mark properties complete as you go. Batch invoicing sends all your weekly bills in one click." }
    ],
    testimonial: {
      quote: "Seasonal plans ended the spreadsheet nightmare. Routes cut our drive time by 40%. Rain buffers saved us hours of rescheduling every week.",
      name: "Tom Vasquez",
      role: "Owner, GreenEdge Lawn Care"
    },
    featuresUsedMost: [
      "recurring-jobs",
      "route-optimization",
      "drag-and-drop-scheduling",
      "work-orders",
      "invoicing-batch",
      "automated-reminders"
    ],
    integrations: ["QuickBooks", "Xero", "Weather API", "SMS/Email", "Payment Processing"],
    imagePrompt: "Lawn care crew foreman checking printed route tags at truck bed, trimmers and fuel cans visible, early dawn light, no screens visible, documentary jobsite photography, natural light, tight crop on hands and paperwork, 35mm composition",
    imageAlt: "Lawn care foreman reviewing route tags at truck in early morning",
    imageCaption: "First light, ready to roll",
    faqs: [
      { question: "Can we switch services seasonally for the same client?", answer: "Yes. Set up recurring plans for mow, leaf, and snow. The system transitions clients between services as seasons change." },
      { question: "What happens when rain delays our route?", answer: "Rain buffers automatically reschedule affected properties and notify clients. You can set the buffer duration." },
      { question: "Can crews see gate codes and special instructions?", answer: "Absolutely. Every work order shows access notes, gate codes, mower settings, and any special requests." },
      { question: "How do we handle batch invoicing for weekly clients?", answer: "Mark jobs complete throughout the week. Batch invoicing generates and sends all invoices at once." },
      { question: "Can we charge per service or monthly contracts?", answer: "Both. Set up per-visit pricing or monthly recurring invoices. The system handles either model." },
      { question: "What's the pricing?", answer: "Per-user pricing with no setup fees. First two users free, then pay as you add crew members." }
    ],
    seoTitle: "Lawn Care Software • Field Service Management",
    seoDescription: "Seasonal routes without the spreadsheet. Built for lawn care companies."
  },

  "tree-care": {
    slug: "tree-care",
    name: "Tree Care",
    subtitle: "Safer jobs, tighter estimates, clearer scope.",
    kpis: [
      { value: "+18%", label: "Estimate accuracy" },
      { value: "Zero", label: "Permit delays" },
      { value: "100%", label: "Safety checklist use" }
    ],
    whatItDoes: [
      "Required-docs checklist ensures permits and utility clearances are done before crews arrive",
      "Hazard notes flag power lines, structures, and access restrictions on every work order",
      "Debris line items in quotes prevent scope creep and change orders"
    ],
    jobs: ["Pruning & trimming", "Tree removal", "Stump grinding", "Cabling & bracing", "Storm damage", "Emergency response"],
    pains: [
      "Missing permits delay jobs and cost you days",
      "Power line proximity creates safety and liability risk",
      "Cleanup scope unclear—clients expect you to haul everything"
    ],
    solves: [
      "Required-docs checklist blocks scheduling until permits are attached",
      "Hazard notes section highlights power lines and proximity risks",
      "Debris removal as separate line item clarifies scope before you start"
    ],
    howItWorks: [
      { step: "1", title: "Estimate with Hazard Notes", description: "Walk the site, note power lines and access restrictions. Add debris removal as line item. Send quote with e-sign." },
      { step: "2", title: "Schedule with Permits", description: "Required-docs checklist prevents dispatch until permits and clearances are uploaded. Crew sees hazard notes before arrival." },
      { step: "3", title: "Complete & Invoice", description: "Mark work complete with photos. Debris removal tracked separately. Invoice sends automatically." }
    ],
    testimonial: {
      quote: "Hazard notes ended all the 'nobody told me about the power line' situations. Required-docs checklist stopped permit delays cold. Debris line items eliminated every scope argument.",
      name: "Carlos Mendez",
      role: "Operations Manager, Summit Tree Services"
    },
    featuresUsedMost: [
      "quote-esign",
      "work-orders",
      "drag-and-drop-scheduling",
      "project-tracking",
      "invoicing-batch",
      "customer-portal"
    ],
    integrations: ["QuickBooks", "Xero", "SMS/Email", "Document Storage", "Payment Processing"],
    imagePrompt: "Arborist tying chainsaw lanyard at base of large tree, wearing hard hat and eye protection, safety cones visible in background, no screens, documentary jobsite, natural light, tight crop on hands and safety gear, 35mm composition",
    imageAlt: "Arborist securing chainsaw lanyard with safety equipment at tree base",
    imageCaption: "Safety first, every time",
    faqs: [
      { question: "How do we track permits and utility clearances?", answer: "Required-docs checklist blocks scheduling until you upload permits. Attach PDFs or photos directly to the work order." },
      { question: "Can we flag hazardous jobs?", answer: "Yes. Hazard notes section highlights power lines, structures, and access risks. Crews see these before they roll." },
      { question: "How do we handle debris removal scope?", answer: "Add debris removal as a separate line item in quotes. Clients see the cost and scope before approving." },
      { question: "Can we track equipment needs per job?", answer: "Absolutely. Tag jobs with equipment requirements (bucket truck, chipper, stump grinder). Assign crews with the right gear." },
      { question: "Do clients get progress updates?", answer: "Yes. The customer portal shows job status, photos, and completion dates." },
      { question: "What's the pricing?", answer: "Per-user pricing. First two users are free, then you pay as your crew grows." }
    ],
    seoTitle: "Tree Care Software • Field Service Management",
    seoDescription: "Safer jobs, tighter estimates, clearer scope. Built for tree care companies."
  },

  landscaping: {
    slug: "landscaping",
    name: "Landscaping",
    subtitle: "Design to maintenance on one calendar.",
    kpis: [
      { value: "5-7 hrs", label: "Schedule time saved" },
      { value: "+25%", label: "Material accuracy" },
      { value: "Zero", label: "Crew confusion" }
    ],
    whatItDoes: [
      "Project tracking keeps install jobs and maintenance schedules in one system",
      "Crew assignments show exactly who's on design install vs. mow crews",
      "Purchase orders per job track materials without spreadsheet guesswork"
    ],
    jobs: ["Bed installation", "Irrigation systems", "Hardscape & patios", "Mulch & edging", "Weekly mowing", "Seasonal color"],
    pains: [
      "Design crews and maintenance crews get mixed up on the schedule",
      "Material orders are guesswork until you're short on a job",
      "Punch lists get lost between install and final walkthrough"
    ],
    solves: [
      "Crew tags separate install teams from maintenance routes",
      "POs per job track material orders with vendor and delivery notes",
      "Punch list checklists in work orders ensure nothing gets missed"
    ],
    howItWorks: [
      { step: "1", title: "Quote Install & Schedule Maintenance", description: "Send design install quote with e-sign. Once approved, add recurring maintenance plan. Both live on one calendar." },
      { step: "2", title: "Assign Crews & Track Materials", description: "Tag install jobs for design crews, maintenance for mow teams. Create POs for materials with delivery dates." },
      { step: "3", title: "Complete & Transition", description: "Use punch list to finalize install. Photos prove completion. Maintenance plan starts automatically." }
    ],
    testimonial: {
      quote: "We stopped mixing up install and mow crews. POs per job ended the 'did we order enough mulch?' panic. Punch lists made final walkthroughs painless.",
      name: "Rachel Kim",
      role: "Owner, Evergreen Landscapes"
    },
    featuresUsedMost: [
      "project-tracking",
      "recurring-jobs",
      "work-orders",
      "po-vendor",
      "drag-and-drop-scheduling",
      "quote-esign"
    ],
    integrations: ["QuickBooks", "Xero", "Supplier Portals", "SMS/Email", "Payment Processing"],
    imagePrompt: "Landscaping crew loading mulch with pitchforks from trailer, supervisor holding printed job tickets, early morning light, no screens visible, documentary jobsite, natural light, tight crop on hands and materials, 35mm composition",
    imageAlt: "Landscaping crew loading mulch from trailer with supervisor holding job tickets",
    imageCaption: "Materials ready, crew set",
    faqs: [
      { question: "Can we separate install jobs from maintenance routes?", answer: "Yes. Crew tags let you assign design teams to installs and mow crews to recurring maintenance." },
      { question: "How do we track materials per job?", answer: "Create purchase orders directly from work orders. Track vendor, delivery date, and costs all in one place." },
      { question: "What happens after install is complete?", answer: "Use the punch list to finalize. Once approved, recurring maintenance plans start automatically for that client." },
      { question: "Can we track project progress?", answer: "Absolutely. Project tracking shows install timeline, material deliveries, and completion status." },
      { question: "Do clients see our schedule?", answer: "Yes. The customer portal shows upcoming visits for both installs and recurring maintenance." },
      { question: "How does pricing work?", answer: "Per-user pricing. First two users free, then pay as you add crew members and office staff." }
    ],
    seoTitle: "Landscaping Software • Field Service Management",
    seoDescription: "Design to maintenance on one calendar. Built for landscaping companies."
  },

  "snow-removal": {
    slug: "snow-removal",
    name: "Snow Removal",
    subtitle: "Storm nights coordinated without chaos.",
    kpis: [
      { value: "Zero", label: "Route overlaps" },
      { value: "100%", label: "Lot coverage" },
      { value: "4-6 hrs", label: "Dispatch time saved" }
    ],
    whatItDoes: [
      "Route tags organize lots by plow truck and salt crew so no property gets missed or doubled",
      "Capacity planning shows which trucks are available before the storm hits",
      "Incident logs capture slip-and-fall reports with photos and timestamps for liability protection"
    ],
    jobs: ["Plow routes", "Sidewalk crews", "Salting & brining", "De-icing", "Snow hauling", "Emergency on-call"],
    pains: [
      "Last-minute call-ins leave routes uncovered",
      "Crews overlap on the same lot or miss properties entirely",
      "Slip-and-fall claims with no proof of service timing"
    ],
    solves: [
      "Route tags assign lots to specific trucks—no overlaps, no missed stops",
      "Capacity view shows truck and crew availability in real time",
      "Incident logs with timestamped photos prove when you plowed and salted"
    ],
    howItWorks: [
      { step: "1", title: "Assign Storm Routes", description: "Tag properties by plow route and salt crew. Capacity planning shows which trucks are available." },
      { step: "2", title: "Dispatch During Storm", description: "Crews see their route list with lot access, salt amounts, and priority order. Track completion in real time." },
      { step: "3", title: "Log & Invoice", description: "Mark lots complete with timestamps. Add incident photos if needed. Invoice per-push or seasonal contract." }
    ],
    testimonial: {
      quote: "Route tags ended the 'did we hit that lot?' chaos. Capacity planning showed us exactly who was available. Incident logs saved us on two liability claims.",
      name: "Mike Kowalski",
      role: "Owner, FirstLight Snow Removal"
    },
    featuresUsedMost: [
      "route-optimization",
      "capacity-planning",
      "work-orders",
      "drag-and-drop-scheduling",
      "invoicing-batch",
      "customer-portal"
    ],
    integrations: ["QuickBooks", "Xero", "Weather API", "SMS/Email", "Payment Processing"],
    imagePrompt: "Snow plow operator attaching plow blade mounting pin in parking lot, wearing reflective safety jacket, route clipboard visible on truck dashboard, predawn light, no screens visible, documentary jobsite, tight crop on hands and equipment, 35mm composition",
    imageAlt: "Snow plow operator securing plow blade pin before storm shift",
    imageCaption: "Ready before the storm hits",
    faqs: [
      { question: "How do we handle last-minute crew call-ins?", answer: "Capacity planning shows available trucks in real time. Drag-and-drop reassigns routes in seconds." },
      { question: "Can we track which lots were plowed and when?", answer: "Yes. Crews mark lots complete with GPS timestamp. You'll have proof of service timing for every property." },
      { question: "What about slip-and-fall liability?", answer: "Incident logs let crews add photos and notes with timestamps. You'll have documented proof if claims arise." },
      { question: "Can we bill per-push or seasonal contracts?", answer: "Both. Track per-push events or set up seasonal recurring invoices. The system handles either model." },
      { question: "Do clients get storm updates?", answer: "Absolutely. Automated notifications tell them when you're on the way and when the lot is complete." },
      { question: "How does pricing work?", answer: "Per-user pricing. First two users free, then pay as you add drivers and crew leads." }
    ],
    seoTitle: "Snow Removal Software • Field Service Management",
    seoDescription: "Storm nights coordinated without chaos. Built for snow removal companies."
  },

  "general-contracting": {
    slug: "general-contracting",
    name: "General Contracting",
    subtitle: "Projects, subs, and change orders without the guesswork.",
    kpis: [
      { value: "30%", label: "Faster project tracking" },
      { value: "Zero", label: "Lost change orders" },
      { value: "+15%", label: "Draw payment speed" }
    ],
    whatItDoes: [
      "Project folders keep all plans, permits, and change orders in one place instead of scattered emails",
      "Linked docs attach estimates, contracts, and photos directly to work orders",
      "Deposits and partial payments let you collect draws without waiting for project completion"
    ],
    jobs: ["Kitchen remodels", "Bathroom renovations", "Additions & extensions", "Framing & rough-in", "Punch list & final"],
    pains: [
      "Sub schedules shift constantly and throw off your timeline",
      "Change orders get lost between client approval and billing",
      "Draw payments lag because paperwork is scattered"
    ],
    solves: [
      "Project folder with all linked docs in one timeline",
      "Change order tracking with approval status and billing sync",
      "Deposit and partial payment milestones tied to project phases"
    ],
    howItWorks: [
      { step: "1", title: "Quote with Deposits", description: "Send project estimate with e-sign. Set deposit requirement. Client approves and pays initial draw online." },
      { step: "2", title: "Track Phases & Subs", description: "Break project into phases (demo, rough-in, finish). Assign subs to each phase. Track progress with photos and notes." },
      { step: "3", title: "Change Orders & Final Payment", description: "Add change orders with client approval. Invoice partial draws per phase. Collect final payment on completion." }
    ],
    testimonial: {
      quote: "Project folders ended the email chaos. Change order tracking meant we never lost a billable change again. Draw payments sped up by weeks.",
      name: "Steve Larson",
      role: "Owner, Larson Build & Remodel"
    },
    featuresUsedMost: [
      "project-tracking",
      "quote-esign",
      "deposits-partials",
      "work-orders",
      "invoicing-batch",
      "customer-portal"
    ],
    integrations: ["QuickBooks", "Xero", "Document Storage", "SMS/Email", "Payment Processing"],
    imagePrompt: "General contractor reviewing printed architectural plans on sawhorses, pencil and measuring tape visible, construction site background, no screens visible, documentary jobsite, natural light, tight crop on hands and plans, 35mm composition",
    imageAlt: "General contractor reviewing plans on sawhorses at job site",
    imageCaption: "Planning the next phase",
    faqs: [
      { question: "Can we track change orders separately?", answer: "Yes. Add change orders to the project with approval status. They sync to invoicing so nothing gets lost." },
      { question: "How do we handle draw payments?", answer: "Set deposit requirements and partial payment milestones. Clients pay online at each phase." },
      { question: "Can we organize all project docs in one place?", answer: "Absolutely. Project folders hold plans, permits, contracts, photos, and change orders with timeline view." },
      { question: "What about coordinating subs?", answer: "Assign subs to specific project phases. They see their schedule and can update progress." },
      { question: "Do clients see project status?", answer: "Yes. The customer portal shows timeline, photos, and payment milestones." },
      { question: "How does pricing work?", answer: "Per-user pricing. First two users free, then pay as you add PMs and crew leads." }
    ],
    seoTitle: "General Contracting Software • Field Service Management",
    seoDescription: "Projects, subs, and change orders without the guesswork. Built for general contractors."
  },

  plumbing: {
    slug: "plumbing",
    name: "Plumbing",
    subtitle: "Same-day calls without double-booking.",
    kpis: [
      { value: "45 min", label: "Avg dispatch speed" },
      { value: "Zero", label: "Double-books" },
      { value: "+20%", label: "Same-day revenue" }
    ],
    whatItDoes: [
      "Arrival windows show clients when you're coming without tying you to exact times",
      "Parts purchase orders track what's needed before the truck rolls",
      "Drag-and-drop reschedule moves emergency calls into open slots instantly"
    ],
    jobs: ["Leak repairs", "Water heater install", "Rough-in & trim", "Drain cleaning", "Repipes", "Emergency on-call"],
    pains: [
      "Client access windows are tight—show up late and they're gone",
      "Parts runs waste hours when you don't have the right valve",
      "Emergency calls force you to bump scheduled work and anger clients"
    ],
    solves: [
      "Arrival windows with automated notifications keep clients informed",
      "Parts notes on work orders show what's in the truck vs. what to grab",
      "Capacity view shows open slots for emergency shuffles without double-booking"
    ],
    howItWorks: [
      { step: "1", title: "Book with Arrival Windows", description: "Client calls with leak. Set 2-hour arrival window. System sends automated updates as tech heads over." },
      { step: "2", title: "Dispatch with Parts Notes", description: "Tech sees work order with suspected issue and common parts needed. Grabs materials before rolling." },
      { step: "3", title: "Complete & Collect", description: "Mark work complete, add any extra materials used, invoice auto-generates. Client pays on-site or online." }
    ],
    testimonial: {
      quote: "Arrival windows ended the 'I waited all day' complaints. Parts notes cut our return trips to zero. Emergency shuffles happen in seconds now instead of angry phone calls.",
      name: "Eddie Martinez",
      role: "Owner, FastFlow Plumbing"
    },
    featuresUsedMost: [
      "drag-and-drop-scheduling",
      "dispatch-board-live-map",
      "work-orders",
      "automated-reminders",
      "payments",
      "invoicing-batch"
    ],
    integrations: ["QuickBooks", "Xero", "Parts Suppliers", "SMS/Email", "Payment Processing"],
    imagePrompt: "Plumber tightening compression fitting under kitchen sink with adjustable wrench, bucket and rags visible, focused hands, no screens visible, documentary jobsite, natural light, tight crop on hands and tools, 35mm composition",
    imageAlt: "Plumber tightening compression fitting under sink",
    imageCaption: "Right the first time",
    faqs: [
      { question: "Can we give clients a time window instead of exact times?", answer: "Yes. Set 1-, 2-, or 4-hour arrival windows. Automated notifications tell them when you're on the way." },
      { question: "What happens when an emergency bumps scheduled work?", answer: "Capacity view shows open slots. Drag-and-drop moves the scheduled job, and the client gets an automated reschedule notice." },
      { question: "How do we track parts per job?", answer: "Add parts notes to work orders. Track what's in the truck and what needs ordering with purchase orders." },
      { question: "Can techs see the next job while they're still on-site?", answer: "Absolutely. Mobile view shows their schedule and next stop with directions." },
      { question: "Can we collect payment before leaving?", answer: "Yes. Accept card payments in the field or send an invoice for online payment." },
      { question: "What's the pricing?", answer: "Per-user pricing. First two users free, then pay as you add techs and dispatchers." }
    ],
    seoTitle: "Plumbing Software • Field Service Management",
    seoDescription: "Same-day calls without double-booking. Built for plumbing companies."
  },

  handyman: {
    slug: "handyman",
    name: "Handyman",
    subtitle: "Small jobs, big throughput.",
    kpis: [
      { value: "+35%", label: "Jobs per day" },
      { value: "10-15 min", label: "Per-job admin" },
      { value: "Same-day", label: "Payment speed" }
    ],
    whatItDoes: [
      "Checklist templates for common jobs (mount TV, fix door, patch drywall) eliminate 'what did the client want again?' calls",
      "Parts notes show fasteners, anchors, and materials needed before you leave",
      "Quick invoicing with online payment means you're paid before the next stop"
    ],
    jobs: ["Door repairs", "Fixture mounting", "Drywall patching", "TV & shelf mounting", "Caulking & sealing", "Small electrical"],
    pains: [
      "Visits get under-scoped and you show up without the right materials",
      "Constant 'what was I supposed to do?' calls slow you down",
      "Invoicing lag means you're chasing payment weeks later"
    ],
    solves: [
      "Checklist templates for each job type show exactly what the client needs",
      "Parts notes list fasteners, anchors, and common materials per job",
      "On-site invoicing with card payment means you're paid before you leave"
    ],
    howItWorks: [
      { step: "1", title: "Book with Templates", description: "Client calls for door repair. Apply 'door repair' checklist template. Send quote with e-sign." },
      { step: "2", title: "Dispatch with Parts List", description: "Work order shows checklist and parts needed. Grab materials before rolling. No return trips." },
      { step: "3", title: "Complete & Collect", description: "Check off tasks, snap a photo, mark complete. Invoice sends. Client pays on phone or online." }
    ],
    testimonial: {
      quote: "Checklist templates ended all the under-scoped visits. Parts notes meant we stopped making runs to the hardware store. Same-day payment changed everything.",
      name: "Jake Wilson",
      role: "Owner, FixItFast Handyman"
    },
    featuresUsedMost: [
      "work-orders",
      "quote-esign",
      "drag-and-drop-scheduling",
      "payments",
      "invoicing-batch",
      "automated-reminders"
    ],
    integrations: ["QuickBooks", "Xero", "Hardware Suppliers", "SMS/Email", "Payment Processing"],
    imagePrompt: "Handyman organizing fasteners and anchors in plastic bin organizer, printed task checklist visible, tool belt on workbench, no screens visible, documentary jobsite, natural light, tight crop on hands and hardware, 35mm composition",
    imageAlt: "Handyman organizing fasteners with task checklist nearby",
    imageCaption: "Everything in its place",
    faqs: [
      { question: "Can we create templates for common jobs?", answer: "Yes. Build checklists for door repairs, mounting, patching, etc. Apply the template when booking to auto-populate the work order." },
      { question: "How do we avoid under-scoping small jobs?", answer: "Checklist templates show exactly what's included. Clients see the scope before approving the quote." },
      { question: "Can we track materials per job?", answer: "Absolutely. Parts notes list fasteners, anchors, and materials. Track what's in your truck and what to restock." },
      { question: "What if we book 5+ jobs in one day?", answer: "Route optimization groups nearby jobs to minimize drive time. You'll see them in order on your schedule." },
      { question: "Can we collect payment on-site?", answer: "Yes. Accept card payments in the field. Invoice generates and client pays before you leave." },
      { question: "How does pricing work?", answer: "Per-user pricing. First two users free, then pay as you add techs." }
    ],
    seoTitle: "Handyman Software • Field Service Management",
    seoDescription: "Small jobs, big throughput. Built for handyman businesses."
  },

  hvac: {
    slug: "hvac",
    name: "HVAC",
    subtitle: "Tighter routes. Fewer callbacks.",
    kpis: [
      { value: "3-4 hrs", label: "Route time saved" },
      { value: "-40%", label: "Callback rate" },
      { value: "100%", label: "PM compliance" }
    ],
    whatItDoes: [
      "Recurring PM plans keep maintenance contracts on autopilot without spreadsheet tracking",
      "Checklists for tune-ups and no-cool calls ensure techs hit every diagnostic step",
      "Rooftop access notes prevent 'can't get to the unit' delays"
    ],
    jobs: ["Seasonal tune-ups", "No-cool/no-heat", "System installs", "Duct cleaning & sealing", "PM contracts", "Emergency on-call"],
    pains: [
      "Seasonal swings make scheduling chaotic in summer and winter",
      "Callbacks waste hours when techs miss diagnostic steps",
      "Rooftop access issues delay jobs and frustrate clients"
    ],
    solves: [
      "Recurring PM scheduling spreads maintenance across the year",
      "Required checklists ensure every diagnostic step is documented",
      "Access notes show ladder locations, roof hatches, and lockbox codes"
    ],
    howItWorks: [
      { step: "1", title: "Set Up PM Contracts", description: "Create seasonal tune-up plans (spring AC, fall heat). System auto-schedules and sends reminders." },
      { step: "2", title: "Dispatch with Checklists", description: "Tech sees work order with unit type, access notes, and required diagnostic checklist. No steps skipped." },
      { step: "3", title: "Complete & Document", description: "Check off every step, add pressure readings and photos. Invoice auto-generates. Client pays online." }
    ],
    testimonial: {
      quote: "PM automation ended the seasonal chaos. Checklists cut our callbacks by 40%. Access notes saved us hours of 'how do we get on the roof?' delays.",
      name: "Dan Foster",
      role: "Owner, CoolBreeze HVAC"
    },
    featuresUsedMost: [
      "recurring-jobs",
      "work-orders",
      "drag-and-drop-scheduling",
      "automated-reminders",
      "invoicing-batch",
      "customer-portal"
    ],
    integrations: ["QuickBooks", "Xero", "Parts Suppliers", "SMS/Email", "Payment Processing"],
    imagePrompt: "HVAC technician checking refrigerant pressures on outdoor condenser unit with analog gauge set, rooftop commercial setting, safety vest, no screens visible, documentary jobsite, natural light, tight crop on gauges and hands, 35mm composition",
    imageAlt: "HVAC tech checking pressures on condenser with gauge set",
    imageCaption: "Diagnostics done right",
    faqs: [
      { question: "Can we automate seasonal PM contracts?", answer: "Yes. Set up recurring plans for spring and fall tune-ups. The system auto-schedules and sends client reminders." },
      { question: "How do we reduce callbacks?", answer: "Required checklists ensure techs complete every diagnostic step. You'll have documented proof of what was checked." },
      { question: "What about rooftop access issues?", answer: "Access notes show ladder locations, roof hatches, and lockbox codes. Techs see this before they roll." },
      { question: "Can we track parts used per job?", answer: "Absolutely. Add parts to work orders as you use them. Track costs and sync to invoicing." },
      { question: "Do clients get service history?", answer: "Yes. The customer portal shows completed tune-ups, repairs, and maintenance schedules." },
      { question: "How does pricing work?", answer: "Per-user pricing. First two users free, then pay as you add techs and dispatchers." }
    ],
    seoTitle: "HVAC Software • Field Service Management",
    seoDescription: "Tighter routes. Fewer callbacks. Built for HVAC companies."
  },

  electrical: {
    slug: "electrical",
    name: "Electrical",
    subtitle: "Clean work orders. Safer panels.",
    kpis: [
      { value: "100%", label: "Panel labeling" },
      { value: "Zero", label: "Inspection delays" },
      { value: "+22%", label: "Parts accuracy" }
    ],
    whatItDoes: [
      "Work order checklists for panel upgrades ensure every breaker is labeled before final",
      "Purchase orders track wire, conduit, and device orders per job",
      "Inspection docs attach permits and signoffs directly to work orders for code compliance"
    ],
    jobs: ["Service calls", "Panel upgrades", "EV charger installs", "Lighting retrofits", "Rough-in & trim", "Emergency repairs"],
    pains: [
      "Panel labeling gets skipped and fails inspection",
      "Parts orders are guesswork until you're short on wire or devices",
      "Inspection paperwork is scattered across emails and truck cabs"
    ],
    solves: [
      "Required panel checklist with labeling step blocks completion until done",
      "POs per job track materials with vendor and delivery dates",
      "Inspection docs folder attaches permits and signoffs to work order"
    ],
    howItWorks: [
      { step: "1", title: "Quote & Schedule", description: "Walk the job, note panel access and permit requirements. Send quote with e-sign. Client approves online." },
      { step: "2", title: "Order Parts & Dispatch", description: "Create PO for wire, conduit, and devices. Tech sees work order with panel notes and required checklist." },
      { step: "3", title: "Complete & Inspect", description: "Check off panel labeling and safety steps. Attach inspection photos. Invoice sends after signoff." }
    ],
    testimonial: {
      quote: "Panel checklists ended every inspection delay. POs per job meant we always had the right wire. Inspection docs folder kept permits and signoffs together—no more truck cab archaeology.",
      name: "Victor Ruiz",
      role: "Owner, BrightLine Electrical"
    },
    featuresUsedMost: [
      "work-orders",
      "quote-esign",
      "po-vendor",
      "drag-and-drop-scheduling",
      "invoicing-batch",
      "customer-portal"
    ],
    integrations: ["QuickBooks", "Xero", "Electrical Suppliers", "SMS/Email", "Payment Processing"],
    imagePrompt: "Electrician tightening terminal lug in electrical panel with insulated screwdriver, circuit labels taped nearby, focused hands, no screens visible, documentary jobsite, natural light, tight crop on panel and tools, 35mm composition",
    imageAlt: "Electrician tightening lug in panel with labels ready",
    imageCaption: "Safe and labeled",
    faqs: [
      { question: "Can we enforce panel labeling before completion?", answer: "Yes. Required checklist blocks work order completion until labeling is checked off." },
      { question: "How do we track materials per job?", answer: "Create purchase orders for wire, conduit, and devices. Track vendor, cost, and delivery dates." },
      { question: "What about inspection paperwork?", answer: "Attach permits and signoff photos directly to work orders. Everything stays with the job." },
      { question: "Can we track permit status?", answer: "Absolutely. Inspection docs folder shows permit application, approval, and final signoff." },
      { question: "Do clients see our progress?", answer: "Yes. The customer portal shows job timeline, inspection status, and completion photos." },
      { question: "How does pricing work?", answer: "Per-user pricing. First two users free, then pay as you add electricians and PMs." }
    ],
    seoTitle: "Electrical Software • Field Service Management",
    seoDescription: "Clean work orders. Safer panels. Built for electrical contractors."
  },

  painting: {
    slug: "painting",
    name: "Painting",
    subtitle: "Prep right. Hit the window. Bill cleanly.",
    kpis: [
      { value: "Zero", label: "Weather delays" },
      { value: "+18%", label: "Color accuracy" },
      { value: "100%", label: "Punch list use" }
    ],
    whatItDoes: [
      "Weather rules auto-reschedule exterior jobs when rain or extreme temps hit",
      "Color fields in work orders capture exact paint codes and sheen to prevent mix-ups",
      "Punch list checklists ensure touch-ups and final walkthrough happen before you leave"
    ],
    jobs: ["Interior painting", "Exterior painting", "Cabinet refinishing", "Deck staining", "Touch-ups & repairs", "Commercial repaints"],
    pains: [
      "Weather shifts delay exterior jobs and force constant rescheduling",
      "Wrong sheen or color mix-ups waste materials and client trust",
      "Punch lists get lost and you're back for unpaid touch-up trips"
    ],
    solves: [
      "Weather rules auto-reschedule and notify clients when conditions aren't safe",
      "Color and sheen fields in work order prevent 'is this satin or eggshell?' confusion",
      "Required punch list checklist blocks completion until final walkthrough is done"
    ],
    howItWorks: [
      { step: "1", title: "Quote with Color Details", description: "Note exact paint code, sheen, and prep requirements. Send quote with e-sign. Client approves on phone." },
      { step: "2", title: "Schedule with Weather Rules", description: "Set weather thresholds (rain, temp). If conditions hit, job auto-reschedules with client notification." },
      { step: "3", title: "Complete with Punch List", description: "Final walkthrough checklist ensures touch-ups are done. Mark complete, invoice sends, client pays online." }
    ],
    testimonial: {
      quote: "Weather rules saved us hours of rescheduling calls. Color fields ended every sheen mix-up. Punch list checklists meant we never left a job with loose ends.",
      name: "Angela Torres",
      role: "Owner, Precision Paint Co."
    },
    featuresUsedMost: [
      "quote-esign",
      "work-orders",
      "drag-and-drop-scheduling",
      "automated-reminders",
      "customer-portal",
      "invoicing-batch"
    ],
    integrations: ["QuickBooks", "Xero", "Paint Suppliers", "Weather API", "SMS/Email"],
    imagePrompt: "Painter carefully taping trim edge with steady hand, drop cloths and ladder in background, interior room setting, no screens visible, documentary jobsite, natural light, tight crop on hands and tape, 35mm composition",
    imageAlt: "Painter taping trim with precision before painting",
    imageCaption: "Prep makes perfect",
    faqs: [
      { question: "Can we auto-reschedule when weather turns?", answer: "Yes. Set rain and temperature thresholds. When conditions hit, exterior jobs auto-reschedule and clients get notified." },
      { question: "How do we prevent color and sheen mix-ups?", answer: "Color fields in work orders capture exact paint code, brand, and sheen. Crew sees this before they spray." },
      { question: "What about final walkthroughs?", answer: "Required punch list checklist blocks completion until touch-ups and final inspection are done." },
      { question: "Can we track materials per job?", answer: "Absolutely. Add paint quantities and supplies to work orders. Track costs and sync to invoicing." },
      { question: "Do clients see our schedule?", answer: "Yes. The customer portal shows upcoming visits and any weather-related reschedules." },
      { question: "How does pricing work?", answer: "Per-user pricing. First two users free, then pay as you add painters and crew leads." }
    ],
    seoTitle: "Painting Software • Field Service Management",
    seoDescription: "Prep right. Hit the window. Bill cleanly. Built for painting contractors."
  },

  roofing: {
    slug: "roofing",
    name: "Roofing",
    subtitle: "Storm workload without the chaos.",
    kpis: [
      { value: "50%", label: "Faster storm response" },
      { value: "Zero", label: "Safety incidents" },
      { value: "100%", label: "Warranty tracking" }
    ],
    whatItDoes: [
      "Weather buffers automatically push jobs when storms delay tear-off or shingle install",
      "Safety checklist requires harness, anchor, and fall protection signoff before work starts",
      "Warranty tracking attaches manufacturer certs and install photos for future claims"
    ],
    jobs: ["Leak repairs", "Tear-off & re-roof", "New construction", "Flashing & trim", "Storm damage", "Inspections"],
    pains: [
      "Weather shifts delay tear-offs and leave roofs exposed overnight",
      "Safety shortcuts create liability and OSHA risk",
      "Debris removal scope isn't clear and clients expect you to haul everything"
    ],
    solves: [
      "Weather buffers auto-reschedule tear-offs when rain is forecast",
      "Required safety checklist blocks start until harness and anchors are checked",
      "Debris removal as separate line item clarifies hauling scope before you start"
    ],
    howItWorks: [
      { step: "1", title: "Inspect & Quote", description: "Snap roof photos, note pitch and access. Add debris removal as line item. Send quote with e-sign." },
      { step: "2", title: "Schedule with Weather", description: "Set weather buffers for tear-off days. If rain is forecast, job auto-reschedules with client notification." },
      { step: "3", title: "Complete with Warranty", description: "Safety checklist signed off. Install photos and manufacturer cert attached. Invoice sends after final inspection." }
    ],
    testimonial: {
      quote: "Weather buffers ended the 'roof left open overnight' panic. Safety checklists made compliance automatic. Warranty tracking saved us on two manufacturer claims.",
      name: "Rick Brennan",
      role: "Owner, Summit Roofing Systems"
    },
    featuresUsedMost: [
      "quote-esign",
      "work-orders",
      "drag-and-drop-scheduling",
      "project-tracking",
      "customer-portal",
      "invoicing-batch"
    ],
    integrations: ["QuickBooks", "Xero", "Weather API", "Manufacturer Portals", "SMS/Email"],
    imagePrompt: "Roofer placing shingle bundle on steep roof pitch, wearing safety harness with visible anchor point, early morning light, no screens visible, documentary jobsite, natural light, tight crop on hands and materials, 35mm composition",
    imageAlt: "Roofer placing shingle bundle with safety harness on steep pitch",
    imageCaption: "Safety first, every job",
    faqs: [
      { question: "Can we auto-reschedule when weather threatens a tear-off?", answer: "Yes. Set weather buffers for rain or wind. If forecast hits the threshold, tear-off reschedules automatically and client gets notified." },
      { question: "How do we enforce safety compliance?", answer: "Required safety checklist blocks work start until harness, anchor, and fall protection are signed off." },
      { question: "What about debris removal scope?", answer: "Add debris hauling as a separate line item in quotes. Clients see the cost and scope before approving." },
      { question: "Can we track warranty docs?", answer: "Absolutely. Attach manufacturer certs and install photos to work orders. Everything stays with the job for future claims." },
      { question: "Do clients see our progress?", answer: "Yes. The customer portal shows job timeline, safety compliance, and completion photos." },
      { question: "How does pricing work?", answer: "Per-user pricing. First two users free, then pay as you add crew leads and installers." }
    ],
    seoTitle: "Roofing Software • Field Service Management",
    seoDescription: "Storm workload without the chaos. Built for roofing contractors."
  }
};

export const industryLandingPageSlugs = Object.keys(industryLandingPages);
