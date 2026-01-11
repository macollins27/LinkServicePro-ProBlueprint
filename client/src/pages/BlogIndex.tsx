import { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Search, Timer, ChevronLeft, ChevronRight, Users, Calendar } from 'lucide-react';
import { blogPosts, getFeaturedPost } from '@/data/blog-posts';
import { getAllCategories, getAllTags, filterPosts, paginate, formatDate } from '@/utils/blog';
import BlogCard from '@/components/blog/BlogCard';
import { blog as veliteBlog } from '../../.velite';

export default function BlogIndex() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  // Merge Velite MDX posts with legacy posts
  const allPosts = useMemo(() => {
    const mdxPosts = veliteBlog
      .filter(p => p.published)
      .map(p => ({
        slug: p.slug.replace('blog/', ''),
        title: p.title,
        excerpt: p.description || '',
        publishedAt: p.date,
        updatedAt: p.date,
        category: p.category || 'General',
        tags: p.tags,
        author: {
          name: p.author,
          avatar: '',
          role: '',
        },
        readMinutes: parseInt(p.readTime?.replace(/\D/g, '') || '5'),
        featured: false,
        cover: p.coverImage || '',
        html: '', // MDX posts don't use HTML
      }));
    
    return [...mdxPosts, ...blogPosts].sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, []);

  const categories = getAllCategories(allPosts);
  const tags = getAllTags(allPosts);
  const featuredPost = getFeaturedPost();

  // Apply filters
  const filtered = filterPosts(allPosts, {
    query: searchQuery,
    category: selectedCategory,
    tags: selectedTag ? [selectedTag] : undefined,
  });

  // Paginate
  const pageSize = 9;
  const paginationResult = paginate(filtered, currentPage, pageSize);
  const { items: paginatedPosts, totalPages, currentPage: clampedPage, hasNext, hasPrev } = paginationResult;

  // Sync currentPage state when filters change and current page exceeds total pages
  useEffect(() => {
    if (clampedPage !== currentPage) {
      setCurrentPage(clampedPage);
    }
  }, [clampedPage, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTag(null);
    setCurrentPage(1);
  };

  return (
    <>
      <Helmet>
        <title>Blog & Updates | LinkServicePro</title>
        <meta
          name="description"
          content="Field service management tips, tactics, and industry insights for HVAC, plumbing, electrical, and service contractors. Dispatch, payments, recurring revenue, and scaling without chaos."
        />
      </Helmet>

      <div className="flex flex-col w-full">
        {/* Featured Post Hero */}
        {featuredPost && (
          <section className="bg-slate-50 border-b border-slate-200 py-10 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-[#0B5FFF]"></div>
                <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wide">
                  Featured Article
                </span>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col lg:flex-row gap-6">
                {/* Cover placeholder */}
                <div className="flex-1">
                  <div
                    aria-hidden="true"
                    className="w-full h-[180px] md:h-[220px] rounded-md bg-slate-100 ring-1 ring-slate-300 flex items-center justify-center text-slate-400 text-[12px]"
                    title="Featured article cover"
                  >
                    FEATURED ARTICLE IMAGE
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-300 rounded-full px-2 py-[3px] inline-block mb-3 w-fit">
                    {featuredPost.category}
                  </div>

                  <h2 className="text-xl font-semibold text-slate-900 leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="text-[14px] text-slate-600 leading-relaxed mt-2">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-3 text-[12px] text-slate-500">
                    <span>{featuredPost.author.name}</span>
                    <span className="text-slate-400">•</span>
                    <span>{formatDate(featuredPost.publishedAt)}</span>
                    <span className="text-slate-400">•</span>
                    <div className="flex items-center gap-1">
                      <Timer className="w-3 h-3" />
                      <span>{featuredPost.readMinutes} min</span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link
                      to={`/resources/blog/${featuredPost.slug}`}
                      className="bg-[#0B5FFF] text-white text-[14px] font-semibold rounded-md px-4 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none inline-block"
                      data-testid="button-read-featured"
                    >
                      Read article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Filter Bar */}
        <section className="bg-white border-b border-slate-200 py-6 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-4">
              {/* Search input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full rounded-md border border-slate-300 pl-10 pr-3 py-2 text-[14px] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus:outline-none"
                  data-testid="input-search"
                />
              </div>

              {/* Category dropdown and tags */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="sm:w-48">
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-[14px] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus:outline-none"
                    data-testid="select-category"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tag chips - scrollable on mobile */}
                <div className="flex-1 overflow-x-auto">
                  <div className="flex gap-2 pb-1">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setSelectedTag(selectedTag === tag ? null : tag);
                          setCurrentPage(1);
                        }}
                        className={`text-[12px] font-semibold rounded-full px-3 py-1 whitespace-nowrap transition ${
                          selectedTag === tag
                            ? 'bg-[#0B5FFF] text-white'
                            : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
                        } focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none`}
                        data-testid={`button-tag-${tag}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active filters indicator */}
              {(searchQuery || selectedCategory !== 'all' || selectedTag) && (
                <div className="flex items-center gap-2 text-[13px]">
                  <span className="text-slate-600">
                    {filtered.length} {filtered.length === 1 ? 'article' : 'articles'} found
                  </span>
                  <button
                    onClick={handleClearFilters}
                    className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                    data-testid="button-clear-filters"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="bg-white border-b border-slate-200 py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">All articles</h2>

            {paginatedPosts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 text-[14px]">
                  No articles found matching your filters.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 text-[#0B5FFF] text-[14px] font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={!hasPrev}
                  className="p-2 rounded-md border border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                  data-testid="button-prev-page"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`min-w-[32px] h-8 rounded-md text-[14px] font-semibold focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none ${
                      page === currentPage
                        ? 'bg-[#0B5FFF] text-white'
                        : 'border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                    data-testid={`button-page-${page}`}
                    aria-current={page === currentPage ? 'page' : undefined}
                    aria-label={`Page ${page}`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={!hasNext}
                  className="p-2 rounded-md border border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                  data-testid="button-next-page"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-slate-50 border-b border-slate-200 py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="max-w-xl mx-auto text-center">
                <h3 className="text-lg font-semibold text-slate-900">
                  Get new posts in your inbox
                </h3>
                <p className="text-[14px] text-slate-600 mt-2">
                  Straight talk for field service owners. No fluff. Unsubscribe anytime.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Newsletter signup (not implemented)');
                  }}
                  className="mt-4 flex flex-col sm:flex-row gap-2"
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-[14px] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus:outline-none"
                    data-testid="input-newsletter-email"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="bg-[#0B5FFF] text-white text-[14px] font-semibold rounded-md px-4 py-2 shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                    data-testid="button-subscribe"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Text Section */}
        <section className="bg-white py-10 px-4">
          <div className="max-w-5xl mx-auto text-[13px] leading-relaxed text-slate-600 space-y-4">
            <p>
              The LinkServicePro blog is written for real service contractors — HVAC, plumbing,
              electrical, cleaning, restoration, landscaping, and beyond. We talk about dispatch,
              time-waste, job profitability, repeat revenue, and getting paid without chasing.
            </p>
            <p>
              If you run crews, answer "where's my tech?" calls, quote work in the field, and
              invoice customers under pressure, you're in the right place. This is not theory. It's
              the stuff owners ask us every day.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
