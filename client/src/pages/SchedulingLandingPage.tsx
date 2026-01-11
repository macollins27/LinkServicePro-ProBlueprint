import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronDown, Check } from "lucide-react";
import StartFreeButton from "@/components/StartFreeButton";

// Import all generated images
import heroVanTablet from "@assets/generated_images/HVAC_tech_reviewing_tablet_route_234a6eba.png";
import heroRooftop from "@assets/generated_images/Rooftop_HVAC_voltage_check_6792cc3e.png";
import heroElectrical from "@assets/generated_images/Electrician_at_service_panel_1dde2c71.png";
import heroCrawlspace from "@assets/generated_images/Plumber_crimping_PEX_fitting_dcc2bafa.png";
import whatLiveCalendar from "@assets/generated_images/Dragging_job_on_phone_calendar_48643659.png";
import painWhiteboard from "@assets/generated_images/Chaotic_whiteboard_scheduling_mess_c65f44cb.png";
import solveCapacity from "@assets/generated_images/Color-coded_crew_capacity_tablet_556986b4.png";
import stepCreate from "@assets/generated_images/Creating_job_with_photos_00ccf99b.png";
import stepDrag from "@assets/generated_images/Dragging_job_to_assign_crew_0a291221.png";
import stepNotify from "@assets/generated_images/Customer_receiving_appointment_text_ada1f7d7.png";
import testimonialPortrait from "@assets/generated_images/HVAC_owner_portrait_by_van_2e2fb05f.png";
import demoSchedule from "@assets/generated_images/Schedule_conflicts_and_routes_display_2a13fd23.png";
import thumbDispatch from "@assets/generated_images/Live_dispatch_map_on_tablet_3ce47df1.png";
import thumbRoute from "@assets/generated_images/Route_optimization_windshield_view_4e9d3a8b.png";
import thumbCapacity from "@assets/generated_images/Capacity_planning_heatmap_display_2d1b0f6f.png";

const heroImages = [
  { src: heroVanTablet, alt: "HVAC technician reviewing route on tablet inside service van", caption: "Morning dispatch: today's route on the tablet" },
  { src: heroRooftop, alt: "HVAC tech checking voltage at rooftop condenser", caption: "Verify before you roll" },
  { src: heroElectrical, alt: "Electrician tightening lug in service panel", caption: "Panel updates sync to the schedule" },
  { src: heroCrawlspace, alt: "Plumber crimping PEX in a crawlspace", caption: "Tight space, clear checklist" },
];

const faqs = [
  { q: "How long does setup take?", a: "Most teams import in under a day." },
  { q: "Can I reschedule from my phone?", a: "Yes. iOS and Android supported." },
  { q: "Will crews get alerts?", a: "Yes. Techs and customers receive SMS/email." },
  { q: "What if I double-book?", a: "You'll see a conflict flag before saving." },
  { q: "Does it handle recurring jobs?", a: "Yes. Daily, weekly, monthly patterns." },
  { q: "Does it work offline?", a: "The mobile app queues updates and syncs later." },
];

export default function SchedulingLandingPage() {
  const [currentHero, setCurrentHero] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadEmail && leadCompany) {
      // Analytics event
      if (window.gtag) {
        window.gtag('event', 'lead_capture', {
          feature: 'scheduling',
          source: 'demo-form'
        });
      }
      setLeadSubmitted(true);
    }
  };

  const handleCTAClick = (placement: string) => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', { placement });
    }
  };

  return (
    <>
      <Helmet>
        <title>Drag-and-drop Scheduling • Field Service Software</title>
        <meta name="description" content="Move jobs on a live calendar, auto-notify crews, and cut drive time. Built for HVAC, plumbing, electrical, and more." />
        <link rel="canonical" href="https://linkservicepro.com/features/drag-and-drop-scheduling" />
        <meta property="og:title" content="Drag-and-drop Scheduling • Field Service Software" />
        <meta property="og:description" content="Move jobs on a live calendar, auto-notify crews, and cut drive time. Built for HVAC, plumbing, electrical, and more." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Drag-and-drop Scheduling",
            "applicationCategory": "BusinessApplication",
            "description": "Schedule faster and keep crews in sync with drag-and-drop scheduling software for field service businesses.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </Helmet>

      <nav className="bg-white border-b border-slate-200 px-6 py-3 text-sm">
        <div className="max-w-7xl mx-auto">
          <Link to="/features" className="text-[#0B5FFF] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF]" data-testid="link-back-features">
            ← All Features
          </Link>
          <span className="text-slate-400 mx-2">/</span>
          <span className="text-slate-900">Drag-and-drop Scheduling</span>
        </div>
      </nav>

      <main className="bg-white">
        {/* 1. Hero band */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" data-testid="heading-hero">
                Drag-and-drop Scheduling
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Schedule faster and keep crews in sync.
              </p>

              {/* KPIs */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur p-4 elev-2" data-testid="kpi-drive-time">
                  <div className="text-3xl font-extrabold text-green-400">−18%</div>
                  <div className="text-sm text-slate-300">Drive time</div>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 elev-2" data-testid="kpi-jobs-per-tech">
                  <div className="text-3xl font-extrabold text-blue-400">+1.3</div>
                  <div className="text-sm text-slate-300">Jobs per tech per day</div>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 elev-2" data-testid="kpi-on-time">
                  <div className="text-3xl font-extrabold text-green-400">96%</div>
                  <div className="text-sm text-slate-300">On-time arrival</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <StartFreeButton
                  size="lg"
                  variant="solid"
                  className="px-6 py-3 font-extrabold"
                >
                  Start Free
                </StartFreeButton>
                <Link
                  to="/pricing"
                  onClick={() => handleCTAClick('hero')}
                  className="px-6 py-3 border-2 border-white text-white font-extrabold hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                  data-testid="button-hero-pricing"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Hero carousel */}
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] relative overflow-hidden">
                {heroImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      idx === currentHero ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentHero(idx)}
                    className={`w-2 h-2 ${idx === currentHero ? 'bg-white' : 'bg-white/40'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
                    aria-label={`View hero image ${idx + 1}`}
                    data-testid={`button-hero-carousel-${idx}`}
                  />
                ))}
              </div>
              <p className="text-center text-sm text-slate-300 mt-2">{heroImages[currentHero].caption}</p>
            </div>
          </div>
        </section>

        {/* 2. What it does */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What it does</h2>
              <p className="text-slate-700 mt-2">Real-time scheduling that keeps everyone in sync.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Drag jobs on a live calendar</strong>
                      <span className="text-slate-700"> → crews and customers auto-notified.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Assign crews and vehicles</strong>
                      <span className="text-slate-700"> → no double-booking.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">See day, week, and route capacity</strong>
                      <span className="text-slate-700"> → prevent overtime.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="aspect-video w-full">
                  <img
                    src={whatLiveCalendar}
                    alt="Dragging a job on a live schedule from a phone"
                    className="w-full h-full object-cover elev-2"
                    loading="lazy"
                    width="1600"
                    height="900"
                  />
                </div>
                <p className="text-sm text-slate-600 text-center mt-2">Move it once—everyone's updated.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why teams switch (Pain → Solve) */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why teams switch</h2>
              <p className="text-slate-700 mt-2">From chaos to clarity in one move.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pain */}
              <div>
                <div className="aspect-[4/3] w-full mb-4">
                  <img
                    src={painWhiteboard}
                    alt="Overloaded whiteboard causing scheduling confusion"
                    className="w-full h-full object-cover elev-2"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="bg-white ring-1 ring-slate-200 p-6 elev-2">
                  <h3 className="font-extrabold text-red-700 text-lg mb-3">Pain</h3>
                  <ul className="list-disc pl-5 text-slate-700 space-y-2">
                    <li>Spreadsheets break when multiple people edit.</li>
                    <li>Office can't see who's free across all crews.</li>
                    <li>Techs get double-booked or sent to wrong locations.</li>
                    <li>Overtime surprises on Fridays.</li>
                  </ul>
                </div>
              </div>

              {/* Solve */}
              <div>
                <div className="aspect-[4/3] w-full mb-4">
                  <img
                    src={solveCapacity}
                    alt="Color-coded crew capacity view on tablet"
                    className="w-full h-full object-cover elev-2"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="bg-white ring-1 ring-slate-200 p-6 elev-2">
                  <h3 className="font-extrabold text-green-700 text-lg mb-3">Solve</h3>
                  <ul className="list-disc pl-5 text-slate-700 space-y-2">
                    <li>Real-time calendar with conflict warnings.</li>
                    <li>Color-coded availability by crew and vehicle.</li>
                    <li>Drag once → everyone gets notified (SMS/email).</li>
                    <li>Capacity view with hour caps and overtime alerts.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How it works (3 steps) */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How it works</h2>
              <p className="text-slate-700 mt-2">Three steps to better scheduling.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white ring-1 ring-slate-200 p-6 elev-2">
                <div className="aspect-[4/3] w-full mb-4">
                  <img src={stepCreate} alt="Creating a job with photos and items" className="w-full h-full object-cover" loading="lazy" width="400" height="300" />
                </div>
                <div className="text-sm font-extrabold text-[#0B5FFF] mb-2">Step 1</div>
                <h3 className="font-extrabold text-slate-900 mb-2">Create job</h3>
                <p className="text-slate-700">Add photos, line items, and service window.</p>
              </div>

              <div className="bg-white ring-1 ring-slate-200 p-6 elev-2">
                <div className="aspect-[4/3] w-full mb-4">
                  <img src={stepDrag} alt="Dragging a job to assign crew and day" className="w-full h-full object-cover" loading="lazy" width="400" height="300" />
                </div>
                <div className="text-sm font-extrabold text-[#0B5FFF] mb-2">Step 2</div>
                <h3 className="font-extrabold text-slate-900 mb-2">Place on calendar</h3>
                <p className="text-slate-700">Drag to day; assign crew and truck.</p>
              </div>

              <div className="bg-white ring-1 ring-slate-200 p-6 elev-2">
                <div className="aspect-[4/3] w-full mb-4">
                  <img src={stepNotify} alt="Customer receiving automated appointment text" className="w-full h-full object-cover" loading="lazy" width="400" height="300" />
                </div>
                <div className="text-sm font-extrabold text-[#0B5FFF] mb-2">Step 3</div>
                <h3 className="font-extrabold text-slate-900 mb-2">Notify</h3>
                <p className="text-slate-700">Customers and techs get the updated time automatically.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. In the field (testimonial) */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">In the field</h2>
              <p className="text-slate-700 mt-2">Real results from real contractors.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white ring-1 ring-slate-200 p-6 sm:p-8 elev-2">
              <div className="md:col-span-1">
                <div className="aspect-[3/4] w-full max-w-xs mx-auto">
                  <img
                    src={testimonialPortrait}
                    alt="Mike R., HVAC owner by his service van"
                    className="w-full h-full object-cover elev-2"
                    loading="lazy"
                    width="300"
                    height="400"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <blockquote className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                  "We reshuffle routes in minutes and cut callbacks."
                </blockquote>
                <p className="text-slate-700 font-medium">— Mike R., Owner, HVAC</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Works with (integrations) */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Works with</h2>
              <p className="text-slate-700 mt-2">Integrates with the tools you already use.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["QuickBooks", "Xero", "LinkInspectPro", "PropertyLinkWare", "SMS/Email"].map((integration) => (
                <div
                  key={integration}
                  className="bg-white ring-1 ring-slate-200 px-4 py-2 font-semibold text-slate-900 elev-2"
                  data-testid={`chip-integration-${integration.toLowerCase().replace(/\//g, '-')}`}
                >
                  {integration}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Mini demo + lead capture */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">See it with your jobs</h2>
              <p className="text-slate-700 mt-2">Book a personalized demo in 60 seconds.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Demo */}
              <div>
                <div className="bg-white ring-1 ring-slate-200 p-6 elev-2">
                  <div className="aspect-video w-full mb-4">
                    <img
                      src={demoSchedule}
                      alt="Schedule with conflict flags and route view"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="1600"
                      height="900"
                    />
                  </div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">See it in 60 seconds</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Live calendar with conflict flags</li>
                    <li>• Drag to assign crew and vehicle</li>
                    <li>• Auto text to customer</li>
                  </ul>
                </div>
              </div>

              {/* Lead form */}
              <div>
                <div className="bg-slate-50 ring-1 ring-slate-200 p-6 elev-2">
                  {!leadSubmitted ? (
                    <form onSubmit={handleLeadSubmit}>
                      <div className="mb-4">
                        <label htmlFor="lead-email" className="block text-sm font-semibold text-slate-900 mb-2">
                          Email
                        </label>
                        <input
                          id="lead-email"
                          type="email"
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          required
                          className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:border-transparent"
                          data-testid="input-lead-email"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="lead-company" className="block text-sm font-semibold text-slate-900 mb-2">
                          Company
                        </label>
                        <input
                          id="lead-company"
                          type="text"
                          value={leadCompany}
                          onChange={(e) => setLeadCompany(e.target.value)}
                          required
                          className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:border-transparent"
                          data-testid="input-lead-company"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-[#0B5FFF] text-white font-extrabold hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF]"
                        data-testid="button-book-demo"
                      >
                        Book a demo
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <Check className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <p className="text-slate-900 font-semibold">Thanks — we'll reach out within one business day.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Related features */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Related features</h2>
              <p className="text-slate-700 mt-2">Complete your scheduling workflow.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                to="/features/dispatch-board-live-map"
                className="bg-white ring-1 ring-slate-200 p-6 elev-2 hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF]"
                data-testid="card-related-dispatch"
              >
                <div className="aspect-square w-full mb-4">
                  <img src={thumbDispatch} alt="Live dispatch map on tablet" className="w-full h-full object-cover" loading="lazy" width="400" height="400" />
                </div>
                <h3 className="font-extrabold text-slate-900 mb-2">Dispatch Board + Live Map</h3>
                <p className="text-slate-700">See every crew on screen.</p>
              </Link>

              <Link
                to="/features/route-optimization"
                className="bg-white ring-1 ring-slate-200 p-6 elev-2 hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF]"
                data-testid="card-related-routes"
              >
                <div className="aspect-square w-full mb-4">
                  <img src={thumbRoute} alt="Route optimization windshield view" className="w-full h-full object-cover" loading="lazy" width="400" height="400" />
                </div>
                <h3 className="font-extrabold text-slate-900 mb-2">Route Optimization</h3>
                <p className="text-slate-700">Shortest routes, more jobs per tech.</p>
              </Link>

              <Link
                to="/features/capacity-planning"
                className="bg-white ring-1 ring-slate-200 p-6 elev-2 hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF]"
                data-testid="card-related-capacity"
              >
                <div className="aspect-square w-full mb-4">
                  <img src={thumbCapacity} alt="Capacity planning heatmap display" className="w-full h-full object-cover" loading="lazy" width="400" height="400" />
                </div>
                <h3 className="font-extrabold text-slate-900 mb-2">Capacity Planning</h3>
                <p className="text-slate-700">Balance workload and prevent overtime.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* 9. FAQ (accordion) */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">FAQ</h2>
              <p className="text-slate-700 mt-2">Common questions answered.</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white ring-1 ring-slate-200 elev-2">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF]"
                    aria-expanded={expandedFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                    data-testid={`button-faq-${idx}`}
                  >
                    <span className="font-semibold text-slate-900">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 transition-transform ${
                        expandedFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === idx && (
                    <div id={`faq-answer-${idx}`} className="px-6 pb-4 text-slate-700">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Bottom CTA band */}
        <section className="bg-gradient-to-br from-[#0B5FFF] to-blue-600 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Ready to try it?</h2>
            <p className="text-xl text-blue-100 mb-8">Simple pricing. No contracts.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/pricing"
                onClick={() => handleCTAClick('bottom')}
                className="px-6 py-3 border-2 border-white text-white font-extrabold hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                data-testid="button-bottom-pricing"
              >
                View Pricing
              </Link>
              <a
                href="/signup"
                onClick={() => handleCTAClick('bottom')}
                className="px-6 py-3 bg-white text-[#0B5FFF] font-extrabold hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                data-testid="button-bottom-start-free"
              >
                Start Free
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Sticky bottom CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <span className="text-sm sm:text-base font-semibold text-slate-900">
          Ready to try it?
        </span>
        <div className="flex gap-2 flex-shrink-0">
          <Link
            to="/pricing"
            onClick={() => handleCTAClick('sticky')}
            className="px-3 sm:px-4 py-2 border border-slate-900 font-extrabold text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF]"
            data-testid="link-sticky-pricing"
          >
            View Pricing
          </Link>
          <a
            href="/signup"
            onClick={() => handleCTAClick('sticky')}
            className="px-3 sm:px-4 py-2 bg-slate-900 text-white font-extrabold text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF]"
            data-testid="link-sticky-start-free"
          >
            Start Free
          </a>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (window.gtag) {
              window.gtag('event', 'lp_view', { feature: 'scheduling' });
            }
          `,
        }}
      />
    </>
  );
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
