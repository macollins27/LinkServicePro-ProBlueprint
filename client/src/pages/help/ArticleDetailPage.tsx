import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ThumbsUp, ThumbsDown, Phone } from 'lucide-react';
import { getArticleBySlug, getCategoryBySlug } from '@/data/helpData';
import { Button } from '@/components/ui/button';

export default function ArticleDetailPage() {
  const params = useParams<{ slug: string }>();
  const article = params.slug ? getArticleBySlug(params.slug) : undefined;

  if (!article) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <Helmet>
          <title>Article Not Found | LinkServicePro Help Center</title>
        </Helmet>
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">Article not found</h1>
        <Link to="/help" className="text-[#0B5FFF] hover:underline">
          Back to Help Center
        </Link>
      </main>
    );
  }

  const category = getCategoryBySlug(article.categorySlug);

  return (
    <main className="flex flex-col w-full bg-white text-slate-900">
      <Helmet>
        <title>{article.title} | LinkServicePro Help Center</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": article.title,
            "description": article.summary,
            "dateModified": article.lastUpdated,
            "articleSection": category?.name || "Help",
            "url": `https://linkservicepro.com/help/article/${article.slug}`
          })}
        </script>
      </Helmet>

      {/* Breadcrumb + Article Header */}
      <section className="bg-white border-b border-slate-200 px-4 py-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <Link
            to="/help"
            className="inline-flex items-center gap-2 text-[13px] text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded w-fit"
            data-testid="link-back-to-help"
          >
            <ChevronLeft className="h-3 w-3" aria-hidden="true" />
            Back to Help Center
          </Link>

          <div className="flex flex-col gap-2">
            {category && (
              <div className="text-[12px] text-slate-500 uppercase tracking-wide font-medium">
                {category.name}
              </div>
            )}
            <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl leading-tight">
              {article.title}
            </h1>
            <div className="text-[13px] text-slate-500">
              Last updated: {new Date(article.lastUpdated).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-slate-700 prose-ul:text-[15px] prose-ul:text-slate-700 prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: article.body }}
            data-testid="article-body"
          />
        </div>
      </section>

      {/* Feedback Section */}
      <section className="bg-slate-50 border-t border-slate-200 px-4 py-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-3 items-center text-center">
            <div className="text-[15px] font-semibold text-slate-900">Was this helpful?</div>
            <div className="flex gap-3">
              <button
                className="flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none"
                aria-label="This was helpful"
                data-testid="button-helpful-yes"
              >
                <ThumbsUp className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                className="flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none"
                aria-label="This was not helpful"
                data-testid="button-helpful-no"
              >
                <ThumbsDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center text-center border-t border-slate-200 pt-6">
            <div className="text-[15px] font-semibold text-slate-900">Need more help?</div>
            <a
              href="tel:6312063700"
              className="inline-flex items-center gap-2 text-[14px] text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded"
              data-testid="link-call-support"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Support: 631-206-3700
            </a>
            <div className="text-[12px] text-slate-500">
              Mon–Fri 9a–5p ET
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA Banner (same as Help Center) */}
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
    </main>
  );
}
