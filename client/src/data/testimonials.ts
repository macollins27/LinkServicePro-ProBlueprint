export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  industry: string;
};

export const testimonials: Testimonial[] = [
  // HVAC
  {
    quote: "Scheduling is finally predictable. We cut callbacks by 20%.",
    name: "Alex Rivera",
    role: "Ops Manager, Northshore HVAC",
    industry: "hvac",
  },
  {
    quote: "PM plans basically run themselves now. Customers love the proactive service.",
    name: "Jordan Kim",
    role: "Service Director, Coastal Climate Control",
    industry: "hvac",
  },
  {
    quote: "Emergency dispatch used to be chaos. Now it's just a few taps.",
    name: "Sam Torres",
    role: "Owner, Metro Heating & Air",
    industry: "hvac",
  },
  
  // Electrical
  {
    quote: "Route planning shaved an hour off our mornings.",
    name: "Morgan Lee",
    role: "Dispatch Lead, Volt Electric",
    industry: "electrical",
  },
  {
    quote: "Estimates with e-sign close 40% faster than our old paper process.",
    name: "Casey Martinez",
    role: "Project Manager, Bright Wiring Co.",
    industry: "electrical",
  },
  {
    quote: "Documentation for inspections is finally organized. Passed every audit.",
    name: "Riley Chen",
    role: "Owner, SafetyFirst Electric",
    industry: "electrical",
  },
  
  // Plumbing
  {
    quote: "Invoices go out same day—cash flow is night and day.",
    name: "Jamie Chen",
    role: "Owner, Peak Plumbing",
    industry: "plumbing",
  },
  {
    quote: "We handle twice as many emergency calls without adding dispatch staff.",
    name: "Taylor Brooks",
    role: "Operations, Rapids Plumbing",
    industry: "plumbing",
  },
  {
    quote: "Customer payment links make collecting deposits actually easy.",
    name: "Avery Johnson",
    role: "Office Manager, ProFlow Plumbing",
    industry: "plumbing",
  },
  
  // Landscaping
  {
    quote: "Recurring visits are automated. We just show up and work.",
    name: "Drew Patterson",
    role: "Crew Lead, GreenScape Solutions",
    industry: "landscaping",
  },
  {
    quote: "Monthly invoicing for commercial properties takes minutes, not hours.",
    name: "Peyton Rodriguez",
    role: "Owner, Premier Landscape Services",
    industry: "landscaping",
  },
  {
    quote: "Route optimization saved us 15% on fuel costs this quarter.",
    name: "Cameron White",
    role: "Operations Manager, Urban Green",
    industry: "landscaping",
  },
];
