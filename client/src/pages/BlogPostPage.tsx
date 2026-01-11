import { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Timer, ArrowLeft, ChevronLeft, ChevronRight, Share2, Check } from 'lucide-react';
import { blogPosts, getPostBySlug } from '@/data/blog-posts';
import { formatDate, buildTocFromHtml, getPrevNext, getRelatedPosts } from '@/utils/blog';
import { injectHeadingIds } from '@/utils/injectHeadingIds';
import BlogCard from '@/components/blog/BlogCard';
import { blog as veliteBlog } from '../../.velite';
import { MDXContent } from '@/components/mdx/MDXContent';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  // Check Velite MDX posts first, then fallback to legacy
  const mdxPost = veliteBlog.find(p => p.slug === `blog/${slug}` && p.published);
  const post = mdxPost ? null : (slug ? getPostBySlug(slug) : undefined);
  
  const toc = post?.html ? buildTocFromHtml(post.html) : [];
  
  // Inject IDs into the HTML headings so they match the TOC
  const processedHtml = useMemo(() => {
    if (!post?.html) return '';
    return injectHeadingIds(post.html, toc);
  }, [post?.html, toc]);

  // Scroll to hash on mount and on hash change
  useEffect(() => {
    function scrollToHash() {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      
      // Small delay to ensure content is rendered
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const navbarHeight = 80; // Account for fixed navbar
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }

    // Run on mount
    scrollToHash();

    // Listen for future hash changes
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [slug]);

  // Render MDX post if found
  if (mdxPost) {
    const tagMeta = mdxPost.tags.map((tag: string) => (
      <meta key={tag} property="article:tag" content={tag} />
    ));

    return (
      <>
        <Helmet>
          <title>{mdxPost.title} | LinkServicePro Blog</title>
          <meta name="description" content={mdxPost.description || mdxPost.title} />
          <meta name="keywords" content={mdxPost.keywords.join(', ')} />
          <meta property="og:title" content={mdxPost.title} />
          <meta property="og:description" content={mdxPost.description || mdxPost.title} />
          <meta property="og:type" content="article" />
          <meta property="article:published_time" content={mdxPost.date} />
          <meta property="article:author" content={mdxPost.author} />
          {tagMeta}
        </Helmet>

        <article className="max-w-[800px] mx-auto px-6 py-8 md:py-16">
          <header className="mb-12">
            {mdxPost.category && (
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 mb-4">
                {mdxPost.category}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-post-title">
              {mdxPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4" aria-hidden="true" />
                <time>{mdxPost.readTime || '5 min read'}</time>
              </div>
              <span>By {mdxPost.author}</span>
            </div>
          </header>

          <div className="prose prose-slate max-w-none" data-testid="content-body">
            <MDXContent code={mdxPost.body} />
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link
              to="/resources/blog"
              className="inline-flex items-center gap-2 text-[#0B5FFF] font-semibold hover:underline"
              data-testid="link-back-to-blog"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Link>
          </div>
        </article>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Post Not Found | LinkServicePro</title>
        </Helmet>
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-4">
          <h1 className="text-2xl font-semibold text-slate-900">Post not found</h1>
          <Link
            to="/resources/blog"
            className="mt-4 text-[#0B5FFF] text-[14px] font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
            data-testid="link-back-to-blog"
          >
            Back to Blog
          </Link>
        </div>
      </>
    );
  }

  const { prev, next } = getPrevNext(blogPosts, post.slug);
  const relatedPosts = getRelatedPosts(blogPosts, post.slug, 3);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleTocClick = (id: string) => {
    // Update the URL hash
    const currentPath = window.location.pathname + window.location.search;
    navigate(currentPath + '#' + id, { replace: true });

    // Smooth scroll to the element with navbar offset
    // Use setTimeout to ensure navigation settles before calculating position
    setTimeout(() => {
      const targetEl = document.getElementById(id);
      if (targetEl) {
        const navbarHeight = 80; // Account for fixed navbar
        const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 10);
  };

  // JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | LinkServicePro Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={shareUrl} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="flex flex-col w-full">
        {/* Back button */}
        <section className="bg-white border-b border-slate-200 py-4 px-4">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/resources/blog"
              className="inline-flex items-center gap-2 text-[14px] text-slate-600 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
              data-testid="link-back"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </section>

        {/* Article header */}
        <section className="bg-slate-50 border-b border-slate-200 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-300 rounded-full px-2 py-[3px] inline-block mb-4 w-fit">
              {post.category}
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-[14px]">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-[14px]">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{post.author.name}</div>
                  {post.author.role && (
                    <div className="text-[12px] text-slate-500">{post.author.role}</div>
                  )}
                </div>
              </div>

              <span className="text-slate-400">•</span>
              <span className="text-slate-600">{formatDate(post.publishedAt)}</span>
              <span className="text-slate-400">•</span>
              <div className="flex items-center gap-1 text-slate-600">
                <Timer className="w-4 h-4" />
                <span>{post.readMinutes} min read</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] text-slate-600 bg-white border border-slate-300 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Cover image placeholder */}
        <section className="bg-white border-b border-slate-200 py-6 px-4">
          <div className="max-w-3xl mx-auto">
            <div
              aria-hidden="true"
              className="w-full h-[240px] md:h-[300px] rounded-md bg-slate-100 ring-1 ring-slate-300 flex items-center justify-center text-slate-400 text-[14px]"
              title="Article cover image"
            >
              ARTICLE COVER IMAGE
            </div>
          </div>
        </section>

        {/* Article content with TOC */}
        <section className="bg-white py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-8">
              {/* Table of Contents - Desktop */}
              {toc.length > 0 && (
                <aside className="hidden lg:block sticky top-20 self-start">
                  <div className="text-[12px] font-semibold text-slate-900 uppercase tracking-wide mb-3">
                    Contents
                  </div>
                  <nav className="space-y-2">
                    {toc.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleTocClick(item.id)}
                        className={`block text-left w-full text-[13px] text-slate-600 hover:text-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded ${
                          item.level === 3 ? 'pl-4' : ''
                        }`}
                        data-testid={`toc-link-${item.id}`}
                      >
                        {item.text}
                      </button>
                    ))}
                  </nav>
                </aside>
              )}

              {/* Main content */}
              <article className="max-w-3xl">
                {/* Mobile TOC - Collapsible */}
                {toc.length > 0 && (
                  <div className="lg:hidden mb-6 rounded-lg border border-slate-200 p-4">
                    <button
                      onClick={() => setTocOpen(!tocOpen)}
                      aria-expanded={tocOpen}
                      className="w-full flex items-center justify-between text-[14px] font-semibold text-slate-900 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                    >
                      <span>Table of Contents</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${tocOpen ? 'rotate-90' : ''}`}
                      />
                    </button>

                    {tocOpen && (
                      <nav className="mt-3 space-y-2 border-t border-slate-200 pt-3">
                        {toc.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              handleTocClick(item.id);
                              setTocOpen(false);
                            }}
                            className={`block text-left w-full text-[13px] text-slate-600 hover:text-[#0B5FFF] ${
                              item.level === 3 ? 'pl-4' : ''
                            }`}
                          >
                            {item.text}
                          </button>
                        ))}
                      </nav>
                    )}
                  </div>
                )}

                {/* Article HTML content */}
                {processedHtml ? (
                  <div
                    className="prose prose-slate max-w-none text-slate-800 leading-relaxed [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24 [&_h4]:scroll-mt-24"
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                    }}
                    dangerouslySetInnerHTML={{ __html: processedHtml }}
                  />
                ) : (
                  <div className="text-slate-600">
                    <p>{post.excerpt}</p>
                    <p className="mt-4 text-[13px] text-slate-500">
                      Full article content coming soon...
                    </p>
                  </div>
                )}

                {/* Share row */}
                <div className="mt-10 pt-6 border-t border-slate-200">
                  <div className="text-[13px] font-semibold text-slate-900 mb-3">Share this article</div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center gap-2 text-[14px] text-slate-700 bg-slate-100 border border-slate-300 rounded-md px-4 py-2 hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                      data-testid="button-copy-link"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4" />
                          <span>Copy link</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[14px] text-slate-700 bg-slate-100 border border-slate-300 rounded-md px-4 py-2 hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                      data-testid="link-share-twitter"
                    >
                      <span>Twitter</span>
                    </a>

                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[14px] text-slate-700 bg-slate-100 border border-slate-300 rounded-md px-4 py-2 hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                      data-testid="link-share-linkedin"
                    >
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[14px] text-slate-700 bg-slate-100 border border-slate-300 rounded-md px-4 py-2 hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
                      data-testid="link-share-facebook"
                    >
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>

                {/* Author box */}
                <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-xl flex-shrink-0">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{post.author.name}</div>
                      {post.author.role && (
                        <div className="text-[13px] text-slate-600 mt-1">{post.author.role}</div>
                      )}
                      <p className="text-[14px] text-slate-600 mt-2 leading-relaxed">
                        Contributing insights on field service management, operations efficiency, and business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Prev/Next navigation */}
        {(prev || next) && (
          <section className="bg-slate-50 border-y border-slate-200 py-8 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="grid gap-4 sm:grid-cols-2">
                {prev && (
                  <Link
                    to={`/resources/blog/${prev.slug}`}
                    className="flex flex-col gap-2 p-4 rounded-lg border border-slate-200 bg-white hover:shadow-md hover:ring-2 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none transition"
                    data-testid="link-prev-post"
                  >
                    <div className="flex items-center gap-2 text-[12px] text-slate-500">
                      <ChevronLeft className="w-3 h-3" />
                      <span>Previous</span>
                    </div>
                    <div className="text-[14px] font-semibold text-slate-900">{prev.title}</div>
                  </Link>
                )}

                {next && (
                  <Link
                    to={`/resources/blog/${next.slug}`}
                    className="flex flex-col gap-2 p-4 rounded-lg border border-slate-200 bg-white hover:shadow-md hover:ring-2 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none transition sm:text-right"
                    data-testid="link-next-post"
                  >
                    <div className="flex items-center gap-2 text-[12px] text-slate-500 sm:justify-end">
                      <span>Next</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                    <div className="text-[14px] font-semibold text-slate-900">{next.title}</div>
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-white py-10 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">Related articles</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
