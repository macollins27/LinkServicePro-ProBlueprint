import hvacImg1 from "@assets/generated_images/HVAC_tech_servicing_rooftop_unit_497a4124.png";
import hvacImg2 from "@assets/generated_images/HVAC_tech_with_gauges_37aaf02c.png";
import electricalImg1 from "@assets/generated_images/Electricians_at_breaker_panel_3019cec7.png";
import electricalImg2 from "@assets/generated_images/Electrician_testing_circuits_30fa3cb6.png";
import plumbingImg1 from "@assets/generated_images/Plumber_crimping_PEX_manifold_b87d5848.png";
import plumbingImg2 from "@assets/generated_images/Plumber_soldering_copper_pipe_c0d33ff7.png";
import landscapingImg1 from "@assets/generated_images/Landscaping_crew_on_campus_4b2c607c.png";
import landscapingImg2 from "@assets/generated_images/Professional_trimming_hedges_5e737ad0.png";
import cleaningImg1 from "@assets/generated_images/Cleaning_crew_with_supplies_5c664fac.png";
import cleaningImg2 from "@assets/generated_images/Cleaning_team_organizing_cart_c1d9cd9a.png";
import roofingImg1 from "@assets/generated_images/Roofing_crew_installing_shingles_cf028ef7.png";
import roofingImg2 from "@assets/generated_images/Roofer_inspecting_with_tablet_4c0d51ca.png";
import contractingImg1 from "@assets/generated_images/Foreman_reviewing_construction_plans_00e4a5dc.png";
import contractingImg2 from "@assets/generated_images/Contractor_coordinating_on_site_3316c40d.png";
import paintingImg1 from "@assets/generated_images/Painting_crew_preparing_interior_feabf724.png";
import paintingImg2 from "@assets/generated_images/Painter_rolling_commercial_wall_ea8eee2b.png";
import handymanImg1 from "@assets/generated_images/Handyman_doing_home_repair_af65955e.png";
import handymanImg2 from "@assets/generated_images/Handyman_using_power_drill_4b9c38c6.png";
import lawnCareImg1 from "@assets/generated_images/Lawn_care_mowing_residential_fc146297.png";
import lawnCareImg2 from "@assets/generated_images/Crew_edging_sidewalk_c9de964b.png";
import pressureWashingImg1 from "@assets/generated_images/Pressure_washing_commercial_surface_ec8d5935.png";
import pressureWashingImg2 from "@assets/generated_images/Professional_pressure_washing_driveway_126dbd42.png";
import snowRemovalImg1 from "@assets/generated_images/Snow_removal_clearing_lot_52d1cb8f.png";
import snowRemovalImg2 from "@assets/generated_images/Professional_spreading_salt_eb1cb5ab.png";
import treeCareImg1 from "@assets/generated_images/Arborist_crew_tree_trimming_a885d8ff.png";
import treeCareImg2 from "@assets/generated_images/Arborist_inspecting_tree_4afddcf8.png";
import windowCleaningImg1 from "@assets/generated_images/Window_cleaners_on_high-rise_2db4b260.png";
import windowCleaningImg2 from "@assets/generated_images/Window_cleaner_with_pole_59294f7e.png";
import janitorialImg1 from "@assets/generated_images/Janitorial_team_in_office_8f581539.png";
import janitorialImg2 from "@assets/generated_images/Janitorial_vacuuming_office_0f8dd2cc.png";

export type IndustryHome = {
  slug: string;
  name: string;
  blurb: string;
  bullets: string[];
  image: { src: string; alt: string };
  image2?: { src: string; alt: string };
  ctaText: string;
  ctaHref: string;
};

export const industriesHome: IndustryHome[] = [
  {
    slug: "hvac",
    name: "HVAC",
    blurb: "Keep crews scheduled, PMs organized, and invoices same-day. Built for seasonal demand and emergency dispatch with real-time technician availability.",
    bullets: [
      "Schedule PMs and emergency calls in seconds",
      "Track parts inventory and technician certifications",
      "Invoice same-day with integrated payment collection"
    ],
    image: { src: hvacImg1, alt: "HVAC technician servicing rooftop commercial unit" },
    image2: { src: hvacImg2, alt: "HVAC technician checking refrigerant gauges" },
    ctaText: "Explore HVAC Solutions",
    ctaHref: "/industries/hvac",
  },
  {
    slug: "electrical",
    name: "Electrical",
    blurb: "Dispatch smarter, price accurately, and finish with clean paperwork. Safety compliance and documentation built in for inspections and permits.",
    bullets: [
      "Route optimization saves hours of drive time weekly",
      "Digital estimates with e-sign close 40% faster",
      "Safety docs and inspection reports organized automatically"
    ],
    image: { src: electricalImg1, alt: "Electricians inspecting commercial breaker panel" },
    image2: { src: electricalImg2, alt: "Electrician testing circuits with multimeter" },
    ctaText: "See Electrical Features",
    ctaHref: "/industries/electrical",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    blurb: "Book jobs, send e-sign estimates, and collect payments in one place. Handle emergency calls and recurring maintenance without the scheduling chaos.",
    bullets: [
      "Emergency dispatch routes nearest available tech",
      "Payment links make collecting deposits effortless",
      "Recurring service plans auto-schedule and invoice"
    ],
    image: { src: plumbingImg1, alt: "Plumber crimping PEX manifold in mechanical room" },
    image2: { src: plumbingImg2, alt: "Plumber soldering copper pipes" },
    ctaText: "Discover Plumbing Tools",
    ctaHref: "/industries/plumbing",
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    blurb: "Schedule recurring visits, track crew assignments, and invoice weekly or monthly. Perfect for commercial property maintenance with route optimization that cuts fuel costs.",
    bullets: [
      "Recurring visits auto-schedule across all properties",
      "Crew tracking shows real-time job progress",
      "Batch invoicing for monthly commercial accounts"
    ],
    image: { src: landscapingImg1, alt: "Landscaping crew operating commercial equipment on corporate campus" },
    image2: { src: landscapingImg2, alt: "Professional trimming hedges on commercial property" },
    ctaText: "View Landscaping Solutions",
    ctaHref: "/industries/landscaping",
  },
  {
    slug: "cleaning",
    name: "Cleaning",
    blurb: "Schedule crews to recurring and one-time jobs without spreadsheets. Automated reminders reduce no-shows, mobile invoicing gets you paid before leaving the site.",
    bullets: [
      "Drag-and-drop scheduling for all crew assignments",
      "Automated client reminders reduce cancellations",
      "Same-day payment processing with mobile invoicing"
    ],
    image: { src: cleaningImg1, alt: "Cleaning crew with supplies in commercial facility" },
    image2: { src: cleaningImg2, alt: "Cleaning team organizing cart in office" },
    ctaText: "See Cleaning Features",
    ctaHref: "/industries/cleaning",
  },
  {
    slug: "roofing",
    name: "Roofing",
    blurb: "From inspection to warranty, track every detail. Built-in photo documentation, material ordering, and crew coordination for commercial and residential projects.",
    bullets: [
      "Photo documentation at every job stage",
      "Material ordering synced with project timelines",
      "Weather-aware scheduling keeps crews productive"
    ],
    image: { src: roofingImg1, alt: "Roofing crew installing shingles on commercial building" },
    image2: { src: roofingImg2, alt: "Roofer inspecting commercial flat roof with tablet" },
    ctaText: "Explore Roofing Tools",
    ctaHref: "/industries/roofing",
  },
  {
    slug: "general-contracting",
    name: "General Contracting",
    blurb: "Coordinate subs, track change orders, and keep clients updated in real-time. From bid to final invoice, all your project management in one place.",
    bullets: [
      "Subcontractor scheduling and progress tracking",
      "Change order approval workflows built in",
      "Client portals keep everyone aligned"
    ],
    image: { src: contractingImg1, alt: "Foreman reviewing plans on active construction site" },
    image2: { src: contractingImg2, alt: "General contractor coordinating on jobsite" },
    ctaText: "See Contracting Features",
    ctaHref: "/industries/general-contracting",
  },
  {
    slug: "painting",
    name: "Painting",
    blurb: "Quote faster with built-in square footage calculators, schedule crews efficiently, and track materials per job. Perfect for residential and commercial painting operations.",
    bullets: [
      "Quick quoting with area calculators and templates",
      "Material tracking prevents job delays",
      "Before/after photos auto-attach to work orders"
    ],
    image: { src: paintingImg1, alt: "Painting crew preparing commercial interior" },
    image2: { src: paintingImg2, alt: "Professional painter rolling commercial wall" },
    ctaText: "View Painting Solutions",
    ctaHref: "/industries/painting",
  },
  {
    slug: "handyman",
    name: "Handyman",
    blurb: "Manage diverse job types, track materials, and build a loyal client base with automated follow-ups. Handle everything from quick fixes to full remodels.",
    bullets: [
      "Multi-service pricing templates save quoting time",
      "Client history shows all past jobs at a glance",
      "Follow-up automation builds repeat business"
    ],
    image: { src: handymanImg1, alt: "Handyman with tools working on home repair" },
    image2: { src: handymanImg2, alt: "Handyman using power drill on repair" },
    ctaText: "Discover Handyman Tools",
    ctaHref: "/industries/handyman",
  },
  {
    slug: "lawn-care",
    name: "Lawn Care",
    blurb: "Route optimization, recurring service automation, and seasonal planning tools. Built for high-volume residential routes and commercial property contracts.",
    bullets: [
      "Route planning saves gallons of fuel weekly",
      "Seasonal service packages auto-renew clients",
      "Weather delays auto-reschedule entire routes"
    ],
    image: { src: lawnCareImg1, alt: "Lawn care professional mowing residential property" },
    image2: { src: lawnCareImg2, alt: "Crew member edging sidewalk with commercial trimmer" },
    ctaText: "See Lawn Care Features",
    ctaHref: "/industries/lawn-care",
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    blurb: "Book jobs fast, track equipment maintenance, and get paid on-site. Perfect for residential driveways, commercial buildings, and fleet maintenance contracts.",
    bullets: [
      "Equipment tracking prevents breakdowns mid-job",
      "Before/after photo capture for every project",
      "Seasonal contracts auto-invoice and renew"
    ],
    image: { src: pressureWashingImg1, alt: "Pressure washing professional cleaning commercial surface" },
    image2: { src: pressureWashingImg2, alt: "Professional pressure washing driveway" },
    ctaText: "Explore Pressure Washing",
    ctaHref: "/industries/pressure-washing",
  },
  {
    slug: "snow-removal",
    name: "Snow Removal",
    blurb: "Weather alerts trigger automatic crew dispatch, track salt and plow usage, and invoice commercial properties immediately after service completion.",
    bullets: [
      "Weather integration auto-dispatches crews",
      "Real-time tracking shows which lots are done",
      "Material usage tracking for accurate billing"
    ],
    image: { src: snowRemovalImg1, alt: "Snow removal crew clearing commercial parking lot" },
    image2: { src: snowRemovalImg2, alt: "Professional spreading salt on walkway" },
    ctaText: "See Snow Removal Tools",
    ctaHref: "/industries/snow-removal",
  },
  {
    slug: "tree-care",
    name: "Tree Care",
    blurb: "Schedule trimming, removals, and emergency storm calls. Built-in safety checklists, equipment tracking, and permit management for arborist operations.",
    bullets: [
      "Safety checklists enforce ANSI Z133 compliance",
      "Equipment inspection logs always up to date",
      "Permit tracking keeps municipal jobs on schedule"
    ],
    image: { src: treeCareImg1, alt: "Arborist crew tree trimming with safety equipment" },
    image2: { src: treeCareImg2, alt: "Arborist inspecting tree with climbing gear" },
    ctaText: "Discover Tree Care Solutions",
    ctaHref: "/industries/tree-care",
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    blurb: "Manage high-rise and commercial routes, track crew equipment, and handle recurring service contracts with automated scheduling and invoicing.",
    bullets: [
      "High-rise scheduling with crew certification tracking",
      "Automated service reminders for commercial accounts",
      "Equipment inspection logs ensure safety compliance"
    ],
    image: { src: windowCleaningImg1, alt: "Window cleaning professionals on commercial high-rise" },
    image2: { src: windowCleaningImg2, alt: "Window cleaner using extension pole on building" },
    ctaText: "View Window Cleaning Features",
    ctaHref: "/industries/window-cleaning",
  },
  {
    slug: "janitorial-cleaning",
    name: "Janitorial Services",
    blurb: "Coordinate night crews across multiple facilities, track supply inventory, and generate detailed cleaning reports for property managers and tenants.",
    bullets: [
      "Multi-site scheduling for overnight crews",
      "Supply tracking shows what's on each cart",
      "Client portals share cleaning reports automatically"
    ],
    image: { src: janitorialImg1, alt: "Janitorial team with equipment in office building" },
    image2: { src: janitorialImg2, alt: "Janitorial professional vacuuming commercial space" },
    ctaText: "See Janitorial Solutions",
    ctaHref: "/industries/janitorial-cleaning",
  },
];
