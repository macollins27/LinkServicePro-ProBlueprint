import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { blog, type BlogPost } from '../../.velite';
import { MDXComponents } from '@/components/mdx/MDXComponents';
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

type MDXContent = React.ComponentType<{ components?: typeof MDXComponents }>;

export default function BlogPostMDX() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = blog.find((p: BlogPost) => p.slug === `blog/${slug}`);
    if (foundPost && foundPost.published) {
      setPost(foundPost);
    } else {
      setPost(null);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="container max-w-4xl py-16">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Button onClick={() => navigate('/resources/blog')} data-testid="button-back-to-blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </div>
    );
  }

  const Content = post.body as unknown as MDXContent;
  
  // Pre-render tag metadata outside JSX
  const tagMeta = post.tags.map((tag: string) => (
    <meta key={tag} property="article:tag" content={tag} />
  ));

  return (
    <>
      <Helmet>
        <title>{post.title} | LinkServicePro Blog</title>
        <meta name="description" content={post.description || post.title} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description || post.title} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        {tagMeta}
      </Helmet>

      <article className="container max-w-4xl py-8">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/resources/blog')}
          className="mb-6"
          data-testid="button-back"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        {/* Header */}
        <header className="mb-12">
          {/* Category badge */}
          {post.category && (
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900" data-testid="text-post-title">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span>By {post.author}</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <Tag className="h-4 w-4 text-slate-500" aria-hidden="true" />
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" data-testid={`badge-tag-${tag.toLowerCase()}`}>
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Share button */}
          <Button
            variant="outline"
            size="sm"
            className="mt-6"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.title,
                  text: post.description,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }
            }}
            data-testid="button-share"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </header>

        {/* Cover image */}
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-auto rounded-lg mb-12"
            loading="eager"
            fetchPriority="high"
          />
        )}

        {/* MDX Content */}
        <div className="prose prose-slate max-w-none" data-testid="content-body">
          <Content components={MDXComponents} />
        </div>

        {/* Author box */}
        <div className="mt-16 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-sm font-semibold text-slate-900 mb-2">Written by {post.author}</p>
          <p className="text-sm text-slate-600">
            LinkServicePro is on a mission to make field service management accessible to every contractor—for free,
            forever.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-blue-50 rounded-lg border-2 border-blue-200 text-center">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Ready to transform your field service business?</h3>
          <p className="text-slate-700 mb-6">
            Join thousands of contractors using LinkServicePro to schedule, dispatch, invoice, and get paid—all in one
            platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/signup')} data-testid="button-cta-signup">
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/features')}
              data-testid="button-cta-features"
            >
              Explore Features
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
