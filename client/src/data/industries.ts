export type Industry = {
  name: string;
  slug: string;
  icon: string;
  benefit?: string;
};

export const INDUSTRIES: Industry[] = [
  { name: "Appliance Repair", slug: "appliance-repair", icon: "Wrench", benefit: "Schedule → Repair → Invoice" },
  { name: "Auto Detailing", slug: "auto-detailing", icon: "Car", benefit: "Book → Detail → Review" },
  { name: "Carpentry", slug: "carpentry", icon: "Hammer", benefit: "Estimate → Build → Complete" },
  { name: "Carpet Cleaning", slug: "carpet-cleaning", icon: "Sparkles", benefit: "Quote → Clean → Pay" },
  { name: "Chimney Sweep Services", slug: "chimney-sweep", icon: "Flame", benefit: "Inspect → Clean → Report" },
  { name: "Cleaning", slug: "cleaning", icon: "Sparkles", benefit: "Schedule → Clean → Invoice" },
  { name: "Concrete", slug: "concrete", icon: "Wrench", benefit: "Quote → Pour → Finish" },
  { name: "Construction", slug: "construction", icon: "Building2", benefit: "Plan → Build → Complete" },
  { name: "Demolition Contractor", slug: "demolition", icon: "Wrench", benefit: "Quote → Demo → Haul" },
  { name: "Dog Walking", slug: "dog-walking", icon: "Wrench", benefit: "Schedule → Walk → Report" },
  { name: "Drywall", slug: "drywall", icon: "Wrench", benefit: "Measure → Install → Finish" },
  { name: "Electrical Contracting", slug: "electrical", icon: "Zap", benefit: "Diagnose → Install → Test" },
  { name: "Elevator Services", slug: "elevator-services", icon: "ArrowUpDown", benefit: "Inspect → Service → Report" },
  { name: "Excavation", slug: "excavation", icon: "Wrench", benefit: "Quote → Dig → Grade" },
  { name: "Fence Services", slug: "fence-services", icon: "Wrench", benefit: "Measure → Install → Complete" },
  { name: "Flooring", slug: "flooring", icon: "Layers", benefit: "Quote → Install → Finish" },
  { name: "Garage Door Services", slug: "garage-door", icon: "DoorClosed", benefit: "Inspect → Repair → Test" },
  { name: "General Contracting", slug: "general-contracting", icon: "HardHat", benefit: "Plan → Build → Invoice" },
  { name: "Handyman", slug: "handyman", icon: "Hammer", benefit: "Schedule → Fix → Pay" },
  { name: "HVAC", slug: "hvac", icon: "Snowflake", benefit: "Diagnose → Repair → Invoice" },
  { name: "Installation Services", slug: "installation-services", icon: "Package", benefit: "Schedule → Install → Complete" },
  { name: "Irrigation Services", slug: "irrigation-services", icon: "Droplets", benefit: "Design → Install → Test" },
  { name: "Janitorial Services", slug: "janitorial-services", icon: "Sparkles", benefit: "Schedule → Clean → Report" },
  { name: "Junk Removal", slug: "junk-removal", icon: "Trash2", benefit: "Quote → Haul → Invoice" },
  { name: "Landscaping", slug: "landscaping", icon: "Trees", benefit: "Design → Plant → Maintain" },
  { name: "Lawn Care", slug: "lawn-care", icon: "Leaf", benefit: "Schedule → Mow → Invoice" },
  { name: "Locksmith Services", slug: "locksmith", icon: "KeyRound", benefit: "Call → Arrive → Unlock" },
  { name: "Mechanical Contracting", slug: "mechanical", icon: "Cog", benefit: "Design → Install → Test" },
  { name: "Painting", slug: "painting", icon: "Paintbrush", benefit: "Quote → Paint → Finish" },
  { name: "Paving", slug: "paving", icon: "Wrench", benefit: "Measure → Pave → Seal" },
  { name: "Pest Control", slug: "pest-control", icon: "Bug", benefit: "Inspect → Treat → Follow-up" },
  { name: "Plumbing", slug: "plumbing", icon: "Wrench", benefit: "Diagnose → Fix → Invoice" },
  { name: "Pool & Spa Services", slug: "pool-spa", icon: "Waves", benefit: "Service → Clean → Report" },
  { name: "Pooper Scooper", slug: "pooper-scooper", icon: "Wrench", benefit: "Schedule → Clean → Invoice" },
  { name: "Pressure Washing", slug: "pressure-washing", icon: "Droplets", benefit: "Quote → Wash → Complete" },
  { name: "Property Maintenance", slug: "property-maintenance", icon: "Home", benefit: "Inspect → Maintain → Report" },
  { name: "Remodeling", slug: "remodeling", icon: "Ruler", benefit: "Design → Remodel → Finish" },
  { name: "Restoration", slug: "restoration", icon: "Droplets", benefit: "Assess → Restore → Complete" },
  { name: "Roofing", slug: "roofing", icon: "Home", benefit: "Inspect → Repair → Warranty" },
  { name: "Snow Removal", slug: "snow-removal", icon: "Snowflake", benefit: "Alert → Plow → Report" },
  { name: "Tiling", slug: "tiling", icon: "Grid3x3", benefit: "Measure → Tile → Grout" },
  { name: "Tree Care", slug: "tree-care", icon: "TreePine", benefit: "Assess → Trim → Clean" },
  { name: "Well Water Services", slug: "well-water-services", icon: "Droplet", benefit: "Test → Service → Report" },
  { name: "Window Cleaning", slug: "window-cleaning", icon: "Sparkles", benefit: "Schedule → Clean → Invoice" },
];

// Backward compatibility: Export industryGroups for existing pages
export const industryGroups = [
  {
    id: "all-trades",
    title: "All Service Trades",
    industries: INDUSTRIES.map(ind => ({
      slug: ind.slug,
      name: ind.name,
      group: "all-trades",
      oneLiner: ind.benefit || "Professional service management",
      workflow: [],
      jobTypes: [],
      metrics: [],
      testimonial: { quote: "", author: "", company: "" },
      features: [],
      faqs: []
    }))
  }
];

// Export flattened list for industry detail pages
export const allIndustries = industryGroups.flatMap(group => group.industries);
