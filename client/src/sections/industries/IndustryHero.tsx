import { Link } from "react-router-dom";
import { SiGooglecalendar, SiApple } from "react-icons/si";
import { Users, DollarSign } from "lucide-react";

interface IndustryHeroProps {
  name: string;
  subhead: string;
  slug: string;
}

export default function IndustryHero({ name, subhead, slug }: IndustryHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#0E2A47] to-[#1A3A5F] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,95,255,0.1),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {name} software to schedule, dispatch, and get paid.
            </h1>
            
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-200 leading-relaxed">
              {subhead}
            </p>
            
            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/signup"
                data-testid="button-start-free"
                data-analytics={`industry_start_free_click:${slug}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0B5FFF] hover:bg-[#0A54E6] text-white font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E2A47]"
              >
                Start Free
              </Link>
              <Link
                to="/contact"
                data-testid="button-talk-sales"
                data-analytics={`industry_talk_sales_click:${slug}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold border border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E2A47]"
              >
                Talk to sales
              </Link>
            </div>
            
            {/* Trust Pills */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <SiGooglecalendar className="w-4 h-4 text-white" />
                <span className="text-sm text-white font-medium">Google Calendar</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <SiApple className="w-4 h-4 text-white" />
                <span className="text-sm text-white font-medium">Apple Calendar</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Users className="w-4 h-4 text-white" />
                <span className="text-sm text-white font-medium">Unlimited users</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <DollarSign className="w-4 h-4 text-white" />
                <span className="text-sm text-white font-medium">Job-based pricing</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Placeholder Image */}
          <div className="lg:pl-8">
            <div
              role="img"
              aria-label={`${name} app preview placeholder`}
              className="aspect-[5/3] rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-2xl flex items-center justify-center"
            >
              <span className="text-slate-400 text-sm">App Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
