import { Link } from 'react-router-dom';
import { Timer } from 'lucide-react';
import { BlogPost } from '@/data/blog-posts';
import { formatDate } from '@/utils/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/resources/blog/${post.slug}`}
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:ring-2 hover:ring-[#0B5FFF] focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none transition flex flex-col"
      data-testid={`link-post-${post.slug}`}
    >
      {/* Thumbnail placeholder */}
      <div
        aria-hidden="true"
        className="w-full h-[120px] rounded-md bg-slate-100 ring-1 ring-slate-300 flex items-center justify-center text-slate-400 text-[12px] mb-4"
      >
        ARTICLE IMAGE
      </div>

      {/* Category chip */}
      <div className="text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-300 rounded-full px-2 py-[3px] inline-block mb-2 w-fit">
        {post.category}
      </div>

      {/* Title */}
      <h3 className="text-[14px] font-semibold text-slate-900 leading-snug">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-[13px] text-slate-600 leading-snug mt-2 flex-1 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Meta row */}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-[12px] text-slate-500">
        <span>{post.author.name}</span>
        <span className="text-slate-400">•</span>
        <span>{formatDate(post.publishedAt)}</span>
        <span className="text-slate-400">•</span>
        <div className="flex items-center gap-1">
          <Timer className="w-3 h-3" />
          <span>{post.readMinutes} min</span>
        </div>
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-slate-600 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
