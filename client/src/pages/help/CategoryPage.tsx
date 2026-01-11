import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ArrowRight, MapPin, ClipboardList, CreditCard, MessageSquare, Users, Settings } from 'lucide-react';
import { getCategoryBySlug, getArticlesByCategory } from '@/data/helpData';

const iconMap = {
  MapPin,
  ClipboardList,
  CreditCard,
  MessageSquare,
  Users,
  Settings
};

export default function CategoryPage() {
  const params = useParams<{ slug: string }>();
  const category = params.slug ? getCategoryBySlug(params.slug) : undefined;

  if (!category) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <Helmet>
          <title>Category Not Found | LinkServicePro Help Center</title>
        </Helmet>
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">Category not found</h1>
        <Link to="/help" className="text-[#0B5FFF] hover:underline">
          Back to Help Center
        </Link>
      </main>
    );
  }

  const articles = getArticlesByCategory(category.slug);
  const IconComponent = iconMap[category.icon];

  return (
    <main className="flex flex-col w-full bg-white text-slate-900">
      <Helmet>
        <title>{category.name} Help | LinkServicePro</title>
        <meta name="description" content={`${category.blurb} Get help with ${category.name.toLowerCase()} in LinkServicePro.`} />
        <meta property="og:title" content={`${category.name} Help | LinkServicePro`} />
        <meta property="og:description" content={category.blurb} />
      </Helmet>

      {/* Breadcrumb + Category Header */}
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

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#0B5FFF]/10 text-[#0B5FFF] ring-1 ring-[#0B5FFF]/20">
              <IconComponent className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                {category.name}
              </h1>
              <p className="text-[15px] leading-relaxed text-slate-600">
                {category.blurb}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="bg-white px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Articles in this category</h2>

          {articles.length === 0 ? (
            <div className="text-[15px] text-slate-600">
              No articles available in this category yet.
            </div>
          ) : (
            <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white overflow-hidden">
              {articles.map((article) => (
                <li
                  key={article.slug}
                  className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between"
                  data-testid={`article-row-${article.slug}`}
                >
                  <div>
                    <div className="text-[15px] font-semibold text-slate-900">
                      {article.title}
                    </div>
                    <div className="text-[13px] text-slate-600">
                      {article.summary}
                    </div>
                  </div>
                  <Link
                    to={`/help/article/${article.slug}`}
                    className="text-[13px] font-semibold text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 outline-none rounded inline-flex items-center gap-1 w-fit"
                    data-testid={`link-article-${article.slug}`}
                  >
                    Read <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* SEO Footer */}
      <section className="bg-slate-50 border-t border-slate-200 px-4 py-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-4 text-[13px] text-slate-600 leading-relaxed">
          <p>
            Need more help with {category.name.toLowerCase()}? Contact our support team at{" "}
            <a href="tel:6312063700" className="text-[#0B5FFF] underline hover:text-[#0B5FFF]/80">
              631-206-3700
            </a>
            {" "}or{" "}
            <a href="mailto:info@bimscorp.com" className="text-[#0B5FFF] underline hover:text-[#0B5FFF]/80">
              email us
            </a>
            .
          </p>
          <p>
            See more in our{" "}
            <Link to="/help" className="text-[#0B5FFF] underline hover:text-[#0B5FFF]/80">
              Help Center
            </Link>
            {" "}or explore our{" "}
            <Link to="/resources/guides" className="text-[#0B5FFF] underline hover:text-[#0B5FFF]/80">
              Free Guides
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
