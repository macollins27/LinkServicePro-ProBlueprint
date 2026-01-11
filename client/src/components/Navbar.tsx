import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown, Calendar, ClipboardCheck, Users, FileSignature, CreditCard, RefreshCw, BarChart, Wind, Droplet, Zap, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MegaMenu from "./MegaMenu";
import IndustriesMenu from "./IndustriesMenu";
import ResourcesMenu from "./ResourcesMenu";
import DemoModal from "./DemoModal";

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout>();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeaderBottom = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty('--header-bottom', `${navRef.current.getBoundingClientRect().bottom}px`);
      }
    };
    
    updateHeaderBottom();
    window.addEventListener('resize', updateHeaderBottom);
    
    return () => {
      window.removeEventListener('resize', updateHeaderBottom);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Blend behavior: transparent only at top, solid on any scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Check initial state after a brief delay to account for route transitions
    const checkInitial = setTimeout(handleScroll, 0);
    handleScroll(); // Also check immediately
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(checkInitial);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMenuEnter = (menu: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenMenu(menu);
  };

  const handleMenuLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent, menu: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenMenu(openMenu === menu ? null : menu);
    } else if (e.key === "Escape") {
      setOpenMenu(null);
    }
  };

  return (
    <>
      <nav 
        ref={navRef} 
        className={
          "fixed top-0 inset-x-0 z-50 transition-colors duration-300 " +
          (scrolled
            ? "bg-[#0A1326]/95 backdrop-blur border-b border-white/10 text-white"
            : "bg-transparent text-white")
        }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className={`text-xl font-bold focus-outline ${scrolled ? 'text-white' : 'text-white'}`}
                data-testid="link-home"
              >
                LinkServicePro
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Features Megamenu */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter("features")}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  className={`nav-item-pill font-medium focus-outline flex items-center gap-1 ${scrolled ? 'text-white' : 'text-white'}`}
                  onKeyDown={(e) => handleKeyDown(e, "features")}
                  aria-expanded={openMenu === "features"}
                  aria-controls="features-menu"
                  data-testid="button-features-menu"
                >
                  Features
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === "features" ? "rotate-180" : ""}`} />
                </button>
                {openMenu === "features" && <MegaMenu onClose={() => setOpenMenu(null)} />}
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter("industries")}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  className={`nav-item-pill font-medium focus-outline flex items-center gap-1 ${scrolled ? 'text-white' : 'text-white'}`}
                  onKeyDown={(e) => handleKeyDown(e, "industries")}
                  aria-expanded={openMenu === "industries"}
                  aria-controls="industries-menu"
                  data-testid="button-industries-menu"
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === "industries" ? "rotate-180" : ""}`} />
                </button>
                {openMenu === "industries" && <IndustriesMenu onClose={() => setOpenMenu(null)} />}
              </div>

              {/* Pricing */}
              <Link
                to="/pricing"
                className={`nav-item-pill font-medium focus-outline ${scrolled ? 'text-white' : 'text-white'}`}
                aria-current={location.pathname === "/pricing" ? "page" : undefined}
                data-testid="link-pricing"
              >
                Pricing
              </Link>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter("resources")}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  className={`nav-item-pill font-medium focus-outline flex items-center gap-1 ${scrolled ? 'text-white' : 'text-white'}`}
                  onKeyDown={(e) => handleKeyDown(e, "resources")}
                  aria-expanded={openMenu === "resources"}
                  aria-controls="resources-menu"
                  data-testid="button-resources-menu"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === "resources" ? "rotate-180" : ""}`} />
                </button>
                {openMenu === "resources" && <ResourcesMenu onClose={() => setOpenMenu(null)} />}
              </div>
            </div>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/signin"
                className={`link-underline focus-outline ${scrolled ? 'text-white' : 'text-white'}`}
                data-testid="link-signin"
              >
                Sign in
              </Link>
              <button
                data-testid="button-start-trial"
                data-cta="navbar-start-trial"
                className="btn-primary-glow"
                onClick={() => console.log("Start trial clicked")}
              >
                GET STARTED FREE
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden focus-outline ${scrolled ? 'text-white' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background" data-testid="mobile-menu">
            <div className="px-6 py-4 space-y-2">
              <Accordion type="single" collapsible className="w-full">
                {/* Features Accordion */}
                <AccordionItem value="features" className="border-b-0">
                  <AccordionTrigger className="text-foreground font-medium py-2 hover:no-underline" data-testid="accordion-mobile-features">
                    Features
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 pb-2">
                    <Link
                      to="/features/scheduling-dispatch"
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-scheduling"
                    >
                      <Calendar className="w-4 h-4 text-[#0B5FFF]" />
                      Scheduling & Dispatch
                    </Link>
                    <Link
                      to="/features/work-orders-mobile"
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-work-orders"
                    >
                      <ClipboardCheck className="w-4 h-4 text-[#0B5FFF]" />
                      Work Orders & Mobile
                    </Link>
                    <Link
                      to="/features/team-management"
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-team"
                    >
                      <Users className="w-4 h-4 text-[#0B5FFF]" />
                      Team Management
                    </Link>
                    <Link
                      to="/features/estimates-quotes"
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-estimates"
                    >
                      <FileSignature className="w-4 h-4 text-[#0B5FFF]" />
                      Estimates & Quotes
                    </Link>
                    <Link
                      to="/features/invoicing-payments"
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-invoicing"
                    >
                      <CreditCard className="w-4 h-4 text-[#0B5FFF]" />
                      Invoicing & Payments
                    </Link>
                    <Link
                      to="/features/maintenance-plans"
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-maintenance"
                    >
                      <RefreshCw className="w-4 h-4 text-[#0B5FFF]" />
                      Maintenance Plans
                    </Link>
                    <Link
                      to="/features/job-costing-reporting"
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-costing"
                    >
                      <BarChart className="w-4 h-4 text-[#0B5FFF]" />
                      Job Costing & Reporting
                    </Link>
                    <Link
                      to="/features"
                      className="flex items-center gap-1 py-2 text-sm text-[#0B5FFF] font-semibold hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-all-features"
                    >
                      View all features
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </AccordionContent>
                </AccordionItem>

                {/* Industries Accordion */}
                <AccordionItem value="industries" className="border-b-0">
                  <AccordionTrigger className="text-foreground font-medium py-2 hover:no-underline" data-testid="accordion-mobile-industries">
                    Industries
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 pb-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-2">
                      Popular Industries
                    </div>
                    <Link
                      to="/industries/hvac"
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-hvac"
                    >
                      <Wind className="w-4 h-4 text-[#0B5FFF]" />
                      HVAC
                    </Link>
                    <Link
                      to="/industries/plumbing"
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-plumbing"
                    >
                      <Droplet className="w-4 h-4 text-[#0B5FFF]" />
                      Plumbing
                    </Link>
                    <Link
                      to="/industries/electrical"
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-electrical"
                    >
                      <Zap className="w-4 h-4 text-[#0B5FFF]" />
                      Electrical
                    </Link>
                    <Link
                      to="/industries/cleaning"
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-cleaning"
                    >
                      <Sparkles className="w-4 h-4 text-[#0B5FFF]" />
                      Cleaning / Janitorial
                    </Link>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mt-3 mb-2">
                      More Industries
                    </div>
                    <div className="space-y-1 text-sm">
                      <Link
                        to="/industries/landscaping"
                        className="block py-1 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="link-mobile-landscaping"
                      >
                        Landscaping & Lawn Care
                      </Link>
                      <Link
                        to="/industries/roofing"
                        className="block py-1 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="link-mobile-roofing"
                      >
                        Roofing
                      </Link>
                      <Link
                        to="/industries/garage-door"
                        className="block py-1 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="link-mobile-garage"
                      >
                        Garage Door
                      </Link>
                      <Link
                        to="/industries/pest"
                        className="block py-1 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="link-mobile-pest"
                      >
                        Pest Control
                      </Link>
                      <Link
                        to="/industries/restoration"
                        className="block py-1 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="link-mobile-restoration"
                      >
                        Restoration & Remediation
                      </Link>
                      <Link
                        to="/industries/pressure-washing"
                        className="block py-1 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="link-mobile-pressure"
                      >
                        Pressure Washing
                      </Link>
                      <Link
                        to="/industries/handyman"
                        className="block py-1 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="link-mobile-handyman"
                      >
                        Property Maintenance / Handyman
                      </Link>
                      <Link
                        to="/industries/pool-spa"
                        className="block py-1 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="link-mobile-pool"
                      >
                        Pool & Spa Service
                      </Link>
                    </div>
                    <Link
                      to="/industries"
                      className="flex items-center gap-1 py-2 text-sm text-[#0B5FFF] font-semibold hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="link-mobile-all-industries"
                    >
                      See all industries
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                to="/pricing"
                className="block text-foreground font-medium py-2"
                data-testid="link-mobile-pricing"
              >
                Pricing
              </Link>
              <Link
                to="/resources"
                className="block text-foreground font-medium py-2"
                data-testid="link-mobile-resources"
              >
                Resources
              </Link>
              <Link
                to="/signin"
                className="block text-foreground font-medium py-2"
                data-testid="link-mobile-signin"
              >
                Sign in
              </Link>
              <Button 
                className="w-full font-extrabold uppercase tracking-wide text-xs" 
                data-testid="button-mobile-trial"
                onClick={() => console.log("Start trial clicked")}
              >
                GET STARTED FREE
              </Button>
              <Button 
                variant="outline" 
                className="w-full font-extrabold uppercase tracking-wide text-xs" 
                data-testid="button-mobile-demo"
                onClick={() => {
                  setDemoModalOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}

        <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
      </nav>
    </>
  );
}
