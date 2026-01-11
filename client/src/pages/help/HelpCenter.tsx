import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  ClipboardList, 
  CreditCard, 
  MessageSquare, 
  Users, 
  Settings, 
  LifeBuoy, 
  Phone, 
  Mail, 
  ArrowRight 
} from 'lucide-react';
import { categories, articles, popularArticleSlugs, getArticleBySlug } from '@/data/helpData';
import { Button } from '@/components/ui/button';

const iconMap = {
  MapPin,
  ClipboardList,
  CreditCard,
  MessageSquare,
  Users,
  Settings
};

export default function HelpCenter() {
  const popularArticles = popularArticleSlugs
    .map(slug => getArticleBySlug(slug))
    .filter(Boolean);

  return (
    <main className="flex flex-col w-full bg-white text-slate-900">
      <Helmet>
        <title>Help Center | LinkServicePro</title>
        <meta name="description" content="Step-by-step answers for scheduling, dispatch, invoices, payments, recurring maintenance plans, and more. Built for HVAC, plumbing, electrical, and field service teams." />
        <meta property="og:title" content="Help Center | LinkServicePro" />
        <meta property="og:description" content="Step-by-step answers for scheduling, dispatch, invoices, payments, and more." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "LinkServicePro Help Center",
            "description": "Support documentation for LinkServicePro field service management platform",
            "url": "https://linkservicepro.com/help",
            "mainEntity": popularArticles.map(article => ({
              "@type": "Question",
              "name": article?.title,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": article?.summary
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Section 1: Hero with Search */}
      <section className="bg-white border-b border-slate-200 px-4 py-12">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="inline-block rounded-full bg-[#0B5FFF]/10 text-[#0B5FFF] text-[11px] font-semibold px-2 py-[2px] ring-1 ring-[#0B5FFF]/20 w-fit uppercase tracking-wide" data-testid="chip-help-center">
            Help Center
          </div>
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">How can we help?</h1>
          <p className="text-[15px] leading-relaxed text-slate-600 max-w-xl">
            Step-by-step answers for scheduling, dispatch, invoices, payments, and more.
          </p>

          <div className="w-full max-w-xl">
            <label htmlFor="help-search" className="sr-only">Search help center</label>
            <div className="relative">
              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Search className="h-4 w-4" aria-hidden="true" />
              </div>
              <input
                id="help-search"
                className="w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 py-2 text-[14px] text-slate-900 placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none"
                placeholder="Search scheduling, dispatch, invoices…"
                aria-label="Search help center"
                data-testid="input-help-search"
              />
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-[13px] text-slate-600">
              <Link 
                to="/help/article/cant-sign-in" 
                className="underline text-[#0B5FFF] hover:text-[#0B5FFF]/80 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded"
                data-testid="link-quick-cant-sign-in"
              >
                Can't log in?
              </Link>
              <Link 
                to="/help/article/payment-failed" 
                className="underline text-[#0B5FFF] hover:text-[#0B5FFF]/80 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded"
                data-testid="link-quick-payment-failed"
              >
                Payment not going through?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Top Categories Grid */}
      <section className="bg-white border-b border-slate-200 px-4 py-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">Browse by category</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon];
              return (
                <Link
                  key={category.slug}
                  to={`/help/category/${category.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:ring-2 hover:ring-[#0B5FFF] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#0B5FFF] outline-none"
                  data-testid={`card-category-${category.slug}`}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0B5FFF]/10 text-[#0B5FFF] ring-1 ring-[#0B5FFF]/20">
                    <IconComponent className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="text-[15px] font-semibold text-slate-900 mt-3">{category.name}</div>
                  <div className="text-[13px] text-slate-600 leading-snug mt-1">{category.blurb}</div>
                  <div className="text-[13px] text-[#0B5FFF] font-medium mt-3 inline-flex items-center gap-1 group-hover:underline">
                    View articles <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Popular Articles List */}
      <section className="bg-white border-b border-slate-200 px-4 py-12">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">Popular right now</h2>
          <p className="text-[14px] text-slate-600 max-w-xl leading-relaxed">
            Fast answers to the stuff that slows teams down.
          </p>

          <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white overflow-hidden">
            {popularArticles.map((article) => {
              if (!article) return null;
              return (
                <li 
                  key={article.slug} 
                  className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between"
                  data-testid={`article-row-${article.slug}`}
                >
                  <div>
                    <div className="text-[15px] font-semibold text-slate-900">{article.title}</div>
                    <div className="text-[13px] text-slate-600">{article.summary}</div>
                  </div>
                  <Link
                    to={`/help/article/${article.slug}`}
                    className="text-[13px] font-semibold text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded inline-flex items-center gap-1 w-fit"
                    data-testid={`link-article-${article.slug}`}
                  >
                    Read <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Section 4: Contact / Escalation Block */}
      <section className="bg-slate-50 border-b border-slate-200 px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0B5FFF]/10 text-[#0B5FFF] ring-1 ring-[#0B5FFF]/20">
                <LifeBuoy className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <div className="text-[15px] font-semibold text-slate-900">Still need help?</div>
                <div className="text-[11px] text-slate-500 leading-snug mt-1">
                  Typical first response under 1 business hour.
                </div>
                <div className="mt-3 flex flex-col gap-2 text-[14px] text-slate-800">
                  <a 
                    href="mailto:info@bimscorp.com" 
                    className="inline-flex items-center gap-2 text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded w-fit"
                    data-testid="link-email-support"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email support
                  </a>
                  <a 
                    href="tel:6312063700" 
                    className="inline-flex items-center gap-2 text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded w-fit"
                    data-testid="link-phone-support"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Support: 631-206-3700
                  </a>
                  <div className="text-[12px] text-slate-500 mt-1">
                    Mon–Fri 9a–5p ET
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Dark CTA Banner */}
      <section className="bg-[#0E2A47] px-4 py-12">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 text-white">
            <h2 className="text-xl font-semibold md:text-2xl">Run the day, don't chase it.</h2>
            <p className="text-[15px] leading-relaxed text-white/80 max-w-xl">
              Live dispatch board, route planning, quotes with e-sign, and same-day payment — all in one hub.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/signup">
              <Button 
                className="bg-[#0B5FFF] text-white border-[#0B5FFF] hover:bg-[#0B5FFF]/90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 w-full sm:w-auto"
                data-testid="button-cta-signup"
              >
                Get Started Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 w-full sm:w-auto"
                data-testid="button-cta-sales"
              >
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-4">
          <p className="text-[13px] text-white/60">
            Works with Google Calendar and Apple Calendar. Unlimited users on paid plans.
          </p>
        </div>
      </section>

      {/* Section 6: SEO / Policy Footer Snippet */}
      <section className="bg-slate-50 px-4 py-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-4 text-[13px] text-slate-600 leading-relaxed">
          <p>
            LinkServicePro Help Center covers scheduling, dispatch, quotes, invoices, payments, recurring maintenance plans, automated reminders, and technician messaging. These guides are written for HVAC, plumbing, electrical, cleaning, lawn care, and other field service teams.
          </p>
          <p>
            Need legal docs? See our{" "}
            <Link to="/legal/terms" className="text-[#0B5FFF] underline hover:text-[#0B5FFF]/80 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded">
              Terms of Service
            </Link>
            ,{" "}
            <Link to="/legal/privacy" className="text-[#0B5FFF] underline hover:text-[#0B5FFF]/80 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded">
              Privacy Policy
            </Link>
            ,{" "}
            <Link to="/legal/sla" className="text-[#0B5FFF] underline hover:text-[#0B5FFF]/80 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded">
              Service Level Agreement
            </Link>
            , and{" "}
            <Link to="/legal/refund" className="text-[#0B5FFF] underline hover:text-[#0B5FFF]/80 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded">
              Refund Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
