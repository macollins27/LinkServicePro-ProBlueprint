import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, ChevronUp, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import hvacImage from "@assets/generated_images/HVAC_rooftop_condenser_work_7262ab2f.png";
import plumbingImage from "@assets/generated_images/Plumber_fitting_work_scene_151327a4.png";
import landscapingImage from "@assets/generated_images/Landscaping_crew_mulch_loading_6b030b72.png";
import cleaningImage from "@assets/generated_images/Janitorial_checklist_preparation_scene_822b90ef.png";
import roofingImage from "@assets/generated_images/Roofer_shingle_installation_scene_29df3c54.png";
import electricalImage from "@assets/generated_images/Electrician_panel_work_scene_b3bdc513.png";

const heroImages = [
  { src: hvacImage, alt: "HVAC technician checking rooftop condenser with analog gauges", caption: "HVAC" },
  { src: plumbingImage, alt: "Plumber tightening compression fitting under sink", caption: "Plumbing" },
  { src: landscapingImage, alt: "Landscaping crew loading mulch with printed job tickets", caption: "Landscaping" },
  { src: cleaningImage, alt: "Janitorial crew leader with checklist on cleaning cart", caption: "Cleaning" },
  { src: roofingImage, alt: "Roofer placing shingle bundle with safety harness", caption: "Roofing" },
  { src: electricalImage, alt: "Electrician torquing panel lug with insulated tools", caption: "Electrical" }
];

interface IndustryCard {
  slug: string;
  name: string;
  hook: string;
  bullets: string[];
  cluster: "exterior" | "home" | "mechanical";
  microPhoto: string;
}

const industries: IndustryCard[] = [
  {
    slug: "cleaning",
    name: "Cleaning",
    hook: "Schedule crews and get paid same day.",
    bullets: ["Nightly routes", "Supply checklists", "Photo proof"],
    cluster: "home",
    microPhoto: cleaningImage
  },
  {
    slug: "janitorial-cleaning",
    name: "Janitorial Cleaning",
    hook: "Nightly routes that run like clockwork.",
    bullets: ["Multi-building", "Scope by area", "Restock logs"],
    cluster: "home",
    microPhoto: cleaningImage
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    hook: "Fast quotes, smart routes, clean results.",
    bullets: ["Windows kept", "Water access notes", "Before/after"],
    cluster: "exterior",
    microPhoto: landscapingImage
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    hook: "Ladder-safe scheduling with repeat plans.",
    bullets: ["Weather buffers", "Crew pairing", "Recurring visits"],
    cluster: "exterior",
    microPhoto: cleaningImage
  },
  {
    slug: "lawn-care",
    name: "Lawn Care",
    hook: "Seasonal routes without spreadsheets.",
    bullets: ["Weekly patterns", "Rain delays handled", "Gate notes"],
    cluster: "exterior",
    microPhoto: landscapingImage
  },
  {
    slug: "tree-care",
    name: "Tree Care",
    hook: "Safer jobs and tighter estimates.",
    bullets: ["Hazard notes", "Permit checklist", "Debris tracking"],
    cluster: "exterior",
    microPhoto: landscapingImage
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    hook: "Design to maintenance on one calendar.",
    bullets: ["Crew assignments", "Materials POs", "Punch lists"],
    cluster: "exterior",
    microPhoto: landscapingImage
  },
  {
    slug: "snow-removal",
    name: "Snow Removal",
    hook: "Storm nights coordinated without chaos.",
    bullets: ["Plow routes", "Capacity by truck", "Incident logs"],
    cluster: "exterior",
    microPhoto: roofingImage
  },
  {
    slug: "general-contracting",
    name: "General Contracting",
    hook: "Projects, subs, and change orders in sync.",
    bullets: ["Project folder", "Linked docs", "Deposits/partials"],
    cluster: "home",
    microPhoto: roofingImage
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    hook: "Same-day calls without double-booking.",
    bullets: ["Arrival windows", "Parts POs", "Emergency shuffle"],
    cluster: "mechanical",
    microPhoto: plumbingImage
  },
  {
    slug: "handyman",
    name: "Handyman",
    hook: "Small jobs, big throughput.",
    bullets: ["Checklists", "Parts notes", "Batch invoicing"],
    cluster: "home",
    microPhoto: electricalImage
  },
  {
    slug: "hvac",
    name: "HVAC",
    hook: "Tighter routes, fewer callbacks.",
    bullets: ["PM contracts", "Rooftop access notes", "Photo proof"],
    cluster: "mechanical",
    microPhoto: hvacImage
  },
  {
    slug: "electrical",
    name: "Electrical",
    hook: "Clean work orders, safer panels.",
    bullets: ["Panel labels", "Inspection docs", "Parts tracking"],
    cluster: "mechanical",
    microPhoto: electricalImage
  },
  {
    slug: "painting",
    name: "Painting",
    hook: "Prep right, hit the window, bill cleanly.",
    bullets: ["Weather rules", "Color fields", "Punch lists"],
    cluster: "home",
    microPhoto: roofingImage
  },
  {
    slug: "roofing",
    name: "Roofing",
    hook: "Storm workload without the chaos.",
    bullets: ["Weather buffers", "Safety checklists", "Warranty tracking"],
    cluster: "mechanical",
    microPhoto: roofingImage
  }
];

const features = [
  { slug: "drag-and-drop-scheduling", name: "Scheduling", copy: "Drag-drop jobs → everyone knows what's next" },
  { slug: "dispatch-board", name: "Dispatch + Live Map", copy: "Track crews in real time → less calls" },
  { slug: "route-optimization", name: "Route Optimization", copy: "Smart routes → cut drive time 18%" },
  { slug: "work-orders", name: "Work Orders", copy: "Checklists and photos → proof done" },
  { slug: "quote-and-e-sign", name: "Quote + E-Sign", copy: "Send estimates → get signatures on-site" },
  { slug: "invoicing-and-batch-billing", name: "Invoicing & Payments", copy: "Invoice and collect → get paid same day" }
];

const faqs = [
  {
    q: "Can I use this for multiple trades?",
    a: "Yes. Your account can run Plumbing, HVAC, and Landscaping crews—all from one calendar."
  },
  {
    q: "Does it work offline in the field?",
    a: "Job details, photos, and forms sync when you're back online. Core scheduling requires a connection."
  },
  {
    q: "How long does setup take?",
    a: "Most teams schedule their first job within 15 minutes. Import existing customers from a CSV."
  },
  {
    q: "Do you charge per tech or per office user?",
    a: "We don't charge for field techs. Pricing is per office seat. See the Pricing page for details."
  },
  {
    q: "Can I try it with my actual jobs before paying?",
    a: "Yes—it's free forever for one user. Add your team when you're ready to scale."
  }
];

export default function IndustriesIndex() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCluster, setActiveCluster] = useState<"all" | "exterior" | "home" | "mechanical">("all");
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [stickyCTADismissed, setStickyCTADismissed] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredIndustries = industries.filter((ind) => {
    const matchesSearch = ind.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCluster = activeCluster === "all" || ind.cluster === activeCluster;
    return matchesSearch && matchesCluster;
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setLeadEmail("");
    setLeadCompany("");
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Industry Solutions",
    "description": "Workflows for HVAC, Plumbing, Landscaping, Cleaning, Roofing, and more. Schedule, dispatch, and get paid in one place."
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": industries.map((ind, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://linkservicepro.com/industries/${ind.slug}`,
      "name": ind.name
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkServicePro",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Field service management for HVAC, Plumbing, Landscaping, Cleaning, Roofing, and more."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://linkservicepro.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": "https://linkservicepro.com/industries"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Industry Solutions • Field Service Management</title>
        <meta name="description" content="Workflows for HVAC, Plumbing, Landscaping, Cleaning, Roofing, and more. Schedule, dispatch, and get paid in one place." />
        <meta property="og:title" content="Industry Solutions • Field Service Management" />
        <meta property="og:description" content="Workflows for HVAC, Plumbing, Landscaping, Cleaning, Roofing, and more. Schedule, dispatch, and get paid in one place." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industry Solutions • Field Service Management" />
        <meta name="twitter:description" content="Workflows for HVAC, Plumbing, Landscaping, Cleaning, Roofing, and more. Schedule, dispatch, and get paid in one place." />
        <link rel="canonical" href="https://linkservicepro.com/industries" />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Section 1: Hero with Mosaic Vertical Carousel */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                  Industry Solutions
                </h1>
                <p className="text-xl sm:text-2xl text-slate-700 mb-8 leading-relaxed">
                  Purpose-built workflows for every trade—scheduling, dispatch, and payments in one place.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-slate-200">
                    <span className="text-2xl font-bold text-emerald-600">+24%</span>
                    <span className="text-sm text-slate-600">Win rate</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-slate-200">
                    <span className="text-2xl font-bold text-blue-600">−18%</span>
                    <span className="text-sm text-slate-600">Drive time</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-slate-200">
                    <span className="text-2xl font-bold text-amber-600">+37%</span>
                    <span className="text-sm text-slate-600">Same-day pay</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 shadow-lg bg-white p-4 border border-slate-200">
                  <button 
                    onClick={() => navigate("/signup")}
                    className="min-h-12 px-8 bg-[#0B5FFF] text-white font-bold text-lg hover-elevate active-elevate-2" 
                    data-testid="button-start-free"
                  >
                    Start Free
                  </button>
                  <button 
                    onClick={() => navigate("/pricing")}
                    className="min-h-12 px-8 bg-white border-2 border-slate-900 text-slate-900 font-bold text-lg hover-elevate active-elevate-2" 
                    data-testid="button-view-pricing"
                  >
                    View Pricing
                  </button>
                </div>
              </div>

              {/* Vertical Carousel */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl border-2 border-slate-900">
                  {heroImages.map((image, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        idx === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading={idx === 0 ? "eager" : "lazy"}
                        data-testid={`carousel-image-${idx}`}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                        <p className="text-white font-bold text-lg">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 bg-white/90 hover:bg-white border border-slate-900 flex items-center justify-center hover-elevate"
                    data-testid="button-carousel-prev"
                    aria-label="Previous image"
                  >
                    <ChevronUp className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 bg-white/90 hover:bg-white border border-slate-900 flex items-center justify-center hover-elevate"
                    data-testid="button-carousel-next"
                    aria-label="Next image"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-3 h-3 border border-slate-900 transition-colors ${
                        idx === currentSlide ? "bg-slate-900" : "bg-white hover:bg-slate-200"
                      }`}
                      data-testid={`carousel-dot-${idx}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Find your trade */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-900 mb-3">Find your trade</h2>
              <p className="text-lg text-slate-700">Search or filter by service type.</p>
            </div>

            <div className="mb-6">
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 min-h-12 border-2 border-slate-900 bg-white text-slate-900 text-lg placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2"
                  data-testid="input-search-industries"
                  aria-label="Search industries"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => setActiveCluster("all")}
                className={`min-h-11 px-6 border-2 font-bold transition-all ${
                  activeCluster === "all" 
                    ? "bg-slate-900 border-slate-900 text-white border-b-4" 
                    : "bg-white border-slate-900 text-slate-900 hover-elevate"
                }`}
                data-testid="filter-all"
                aria-pressed={activeCluster === "all"}
              >
                All
              </button>
              <button
                onClick={() => setActiveCluster("exterior")}
                className={`min-h-11 px-6 border-2 font-bold transition-all ${
                  activeCluster === "exterior" 
                    ? "bg-slate-900 border-slate-900 text-white border-b-4" 
                    : "bg-white border-slate-900 text-slate-900 hover-elevate"
                }`}
                data-testid="filter-exterior"
                aria-pressed={activeCluster === "exterior"}
              >
                Exterior & Grounds
              </button>
              <button
                onClick={() => setActiveCluster("home")}
                className={`min-h-11 px-6 border-2 font-bold transition-all ${
                  activeCluster === "home" 
                    ? "bg-slate-900 border-slate-900 text-white border-b-4" 
                    : "bg-white border-slate-900 text-slate-900 hover-elevate"
                }`}
                data-testid="filter-home"
                aria-pressed={activeCluster === "home"}
              >
                Home & Building Services
              </button>
              <button
                onClick={() => setActiveCluster("mechanical")}
                className={`min-h-11 px-6 border-2 font-bold transition-all ${
                  activeCluster === "mechanical" 
                    ? "bg-slate-900 border-slate-900 text-white border-b-4" 
                    : "bg-white border-slate-900 text-slate-900 hover-elevate"
                }`}
                data-testid="filter-mechanical"
                aria-pressed={activeCluster === "mechanical"}
              >
                Mechanical & Electrical
              </button>
            </div>

            <div className="mb-4" role="status" aria-live="polite">
              <p className="text-slate-600">
                Showing <strong>{filteredIndustries.length}</strong> {filteredIndustries.length === 1 ? "industry" : "industries"}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Industries grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  to={`/industries/${ind.slug}`}
                  className="group block bg-white border-2 border-slate-900 shadow-md hover:shadow-xl transition-all duration-150"
                  data-testid={`industry-card-${ind.slug}`}
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{ind.name}</h3>
                    <p className="text-slate-700 mb-4 font-medium">{ind.hook}</p>
                    <ul className="space-y-2 mb-6">
                      {ind.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start">
                          <span className="mr-2 font-bold">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="inline-block text-[#0B5FFF] font-bold text-sm relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0B5FFF] group-hover:after:w-full after:transition-all after:duration-300 after:origin-right group-hover:after:origin-left">
                      See {ind.name} page →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filteredIndustries.length === 0 && (
              <div className="text-center py-16 bg-white border-2 border-slate-900 shadow-md">
                <p className="text-xl text-slate-600">No industries match your search.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCluster("all"); }}
                  className="mt-4 min-h-10 px-6 bg-slate-900 text-white font-bold hover-elevate"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: What you get */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-3">What you get</h2>
              <p className="text-lg text-slate-700">Core features that power every trade.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Link
                  key={feature.slug}
                  to={`/features/${feature.slug}`}
                  className="group block bg-slate-50 border-2 border-slate-900 p-8 shadow-md hover:shadow-xl transition-all duration-150"
                  data-testid={`feature-card-${feature.slug}`}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.name}</h3>
                  <p className="text-slate-700">{feature.copy}</p>
                  <span className="inline-block mt-4 text-[#0B5FFF] font-bold text-sm relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0B5FFF] group-hover:after:w-full after:transition-all after:duration-300 after:origin-right group-hover:after:origin-left">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: How it works */}
        <section 
          className="relative px-4 sm:px-6 lg:px-8 py-20 text-white"
          style={{
            backgroundImage: `url(${heroImages[0].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-slate-900/95"></div>
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-3">How it works for any trade</h2>
              <p className="text-xl text-slate-300">Three steps from quote to payment.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 border-2 border-white/30 p-8 backdrop-blur-sm">
                <div className="text-6xl font-bold mb-4">1</div>
                <h3 className="text-2xl font-bold mb-3">Intake & Quote</h3>
                <p className="text-slate-200">Capture requests and build estimates.</p>
              </div>
              <div className="bg-white/10 border-2 border-white/30 p-8 backdrop-blur-sm">
                <div className="text-6xl font-bold mb-4">2</div>
                <h3 className="text-2xl font-bold mb-3">Schedule & Dispatch</h3>
                <p className="text-slate-200">Drag-drop jobs and assign crews.</p>
              </div>
              <div className="bg-white/10 border-2 border-white/30 p-8 backdrop-blur-sm">
                <div className="text-6xl font-bold mb-4">3</div>
                <h3 className="text-2xl font-bold mb-3">Do the work & Get paid</h3>
                <p className="text-slate-200">Photo proof, invoice, and tap-to-pay.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Results you can feel */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-3">Results you can feel in 30 days</h2>
              <p className="text-lg text-slate-700">Real outcomes from field service teams.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border-2 border-slate-900 p-8 shadow-md">
                <div className="text-5xl font-bold text-emerald-600 mb-2">+24%</div>
                <div className="text-sm text-slate-600 mb-4">Average win rate increase</div>
                <div className="h-16 flex items-end gap-1">
                  {[40, 55, 48, 62, 58, 70, 65, 75].map((h, i) => (
                    <div key={i} className="flex-1 bg-emerald-200 transition-all" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
              <div className="bg-white border-2 border-slate-900 p-8 shadow-md">
                <div className="text-5xl font-bold text-blue-600 mb-2">−18%</div>
                <div className="text-sm text-slate-600 mb-4">Reduction in drive time</div>
                <div className="h-16 flex items-end gap-1">
                  {[75, 70, 65, 58, 52, 48, 42, 38].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-200 transition-all" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
              <div className="bg-white border-2 border-slate-900 p-8 shadow-md">
                <div className="text-5xl font-bold text-amber-600 mb-2">+37%</div>
                <div className="text-sm text-slate-600 mb-4">Same-day payment rate</div>
                <div className="h-16 flex items-end gap-1">
                  {[45, 52, 58, 65, 72, 78, 82, 88].map((h, i) => (
                    <div key={i} className="flex-1 bg-amber-200 transition-all" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-slate-900 p-6 shadow-md">
                <div className="font-bold text-[#0B5FFF] mb-1">HVAC • 12 techs</div>
                <p className="text-slate-700">Cut callbacks 50% with better dispatch notes</p>
              </div>
              <div className="bg-white border-2 border-slate-900 p-6 shadow-md">
                <div className="font-bold text-[#0B5FFF] mb-1">Landscaping • 40 routes</div>
                <p className="text-slate-700">Scheduling down from 3 hours to 15 minutes</p>
              </div>
              <div className="bg-white border-2 border-slate-900 p-6 shadow-md">
                <div className="font-bold text-[#0B5FFF] mb-1">Cleaning • 8 crews</div>
                <p className="text-slate-700">Photo proof ended client disputes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Proof from the field */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-3">Proof from the field</h2>
              <p className="text-lg text-slate-700">What contractors are saying.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 border-2 border-slate-900 p-8 shadow-md">
                <p className="text-lg text-slate-900 mb-6 italic leading-relaxed">"We cut callbacks by half and our techs love the mobile app."</p>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-white font-bold text-xl">
                    CM
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Carlos Mendoza</div>
                    <div className="text-sm text-slate-600">Owner, Mendoza HVAC</div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 border-2 border-slate-900 p-8 shadow-md">
                <p className="text-lg text-slate-900 mb-6 italic leading-relaxed">"Scheduling 40 weekly routes used to take hours—now it's 15 minutes."</p>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-white font-bold text-xl">
                    SC
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Sarah Chen</div>
                    <div className="text-sm text-slate-600">Ops Manager, GreenEdge Landscaping</div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 border-2 border-slate-900 p-8 shadow-md">
                <p className="text-lg text-slate-900 mb-6 italic leading-relaxed">"Photo proof for every site means no more 'he said, she said' with clients."</p>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-white font-bold text-xl">
                    MJ
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Mark Johnson</div>
                    <div className="text-sm text-slate-600">Director, Pristine Commercial Cleaning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Mini demo + lead capture */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div 
                  className="w-full aspect-video bg-slate-200 border-2 border-slate-900 shadow-lg flex items-center justify-center mb-6"
                  style={{
                    backgroundImage: `url(${heroImages[0].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(8px)"
                  }}
                >
                  <div className="bg-white/95 px-6 py-3 border-2 border-slate-900 backdrop-blur-sm">
                    <span className="text-lg font-bold text-slate-900">▶ Demo video</span>
                  </div>
                </div>
                <ul className="space-y-3 text-base text-slate-700">
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">•</span>
                    <span>Watch how drag-drop scheduling works</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">•</span>
                    <span>See dispatch board with live GPS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">•</span>
                    <span>Tour the mobile app techs use</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">See it with your jobs</h2>
                <p className="text-lg text-slate-700 mb-8">Get a personalized walkthrough.</p>
                
                {showSuccess ? (
                  <div className="bg-emerald-50 border-2 border-emerald-600 p-6 shadow-md" role="status" aria-live="polite">
                    <p className="text-emerald-900 font-bold text-lg">Got it — we'll reach out within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="lead-email" className="block text-base font-bold text-slate-900 mb-2">
                        Email
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        required
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        className="w-full min-h-12 px-4 border-2 border-slate-900 bg-white text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2"
                        data-testid="input-lead-email"
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-company" className="block text-base font-bold text-slate-900 mb-2">
                        Company
                      </label>
                      <input
                        id="lead-company"
                        type="text"
                        required
                        value={leadCompany}
                        onChange={(e) => setLeadCompany(e.target.value)}
                        className="w-full min-h-12 px-4 border-2 border-slate-900 bg-white text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2"
                        data-testid="input-lead-company"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full min-h-12 px-6 bg-[#0B5FFF] text-white font-bold text-lg hover-elevate active-elevate-2 shadow-lg"
                      data-testid="button-get-demo"
                    >
                      Get Demo
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-3">FAQ</h2>
              <p className="text-lg text-slate-700">Common questions about the platform.</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="bg-slate-50 border-2 border-slate-900 px-8 shadow-md"
                >
                  <AccordionTrigger className="text-left font-bold text-lg text-slate-900 hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 text-base pb-6 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Section 10: Bottom CTA band */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#0B5FFF] text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">Ready to try it?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate("/pricing")}
                className="min-h-12 px-8 bg-white text-[#0B5FFF] font-bold text-lg hover-elevate active-elevate-2 shadow-xl" 
                data-testid="button-cta-pricing"
              >
                View Pricing
              </button>
              <button 
                onClick={() => navigate("/signup")}
                className="min-h-12 px-8 bg-transparent border-2 border-white text-white font-bold text-lg hover-elevate active-elevate-2" 
                data-testid="button-cta-start"
              >
                Start Free
              </button>
            </div>
          </div>
        </section>

        {/* Section 11: Sticky bottom CTA */}
        {showStickyCTA && !stickyCTADismissed && (
          <div 
            className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t-2 border-slate-700 px-4 py-4 z-50 shadow-2xl" 
            data-testid="sticky-cta"
            role="banner"
            aria-label="Call to action banner"
          >
            <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
              <span className="text-white font-bold text-base sm:text-lg">Ready to try it?</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => navigate("/pricing")}
                  className="min-h-11 px-6 bg-white text-slate-900 font-bold hover-elevate active-elevate-2" 
                  data-testid="button-sticky-pricing"
                >
                  View Pricing
                </button>
                <button 
                  onClick={() => navigate("/signup")}
                  className="min-h-11 px-6 bg-[#0B5FFF] border-2 border-[#0B5FFF] text-white font-bold hover-elevate active-elevate-2" 
                  data-testid="button-sticky-start"
                >
                  Start Free
                </button>
                <button 
                  onClick={() => setStickyCTADismissed(true)}
                  className="ml-2 min-h-11 w-11 bg-transparent border-2 border-white/30 text-white hover-elevate active-elevate-2 flex items-center justify-center text-xl"
                  data-testid="button-dismiss-sticky"
                  aria-label="Dismiss call to action banner"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
