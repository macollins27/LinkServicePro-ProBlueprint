import { BlogPost } from '@/data/blog-posts';

export function getAllCategories(posts: BlogPost[]): string[] {
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories).sort();
}

export function getAllTags(posts: BlogPost[]): string[] {
  const tags = new Set(posts.flatMap((p) => p.tags));
  return Array.from(tags).sort();
}

export function filterPosts(
  posts: BlogPost[],
  filters: {
    query?: string;
    category?: string;
    tags?: string[];
  }
): BlogPost[] {
  let filtered = [...posts];

  // Filter by search query
  if (filters.query) {
    const q = filters.query.toLowerCase();
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }

  // Filter by category
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter((post) => post.category === filters.category);
  }

  // Filter by tags
  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter((post) =>
      filters.tags!.some((tag) => post.tags.includes(tag))
    );
  }

  // Sort by date (newest first)
  filtered.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return filtered;
}

export function paginate<T>(
  items: T[],
  page: number,
  pageSize: number
): {
  items: T[];
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
} {
  const totalPages = Math.ceil(items.length / pageSize);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return {
    items: items.slice(startIndex, endIndex),
    totalPages,
    currentPage,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1,
  };
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function estimateReadMinutesFromText(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function buildTocFromHtml(
  html: string
): Array<{ id: string; text: string; level: number }> {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const headings = doc.querySelectorAll('h2, h3');

  return Array.from(headings).map((heading, index) => {
    const level = parseInt(heading.tagName.substring(1));
    const text = heading.textContent || '';
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    return { id, text, level };
  });
}

export function getPrevNext(
  posts: BlogPost[],
  slug: string
): { prev?: BlogPost; next?: BlogPost } {
  // Sort posts by date (newest first)
  const sorted = [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const currentIndex = sorted.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    return {};
  }

  return {
    prev: sorted[currentIndex + 1], // Older post
    next: sorted[currentIndex - 1], // Newer post
  };
}

export function getRelatedPosts(
  posts: BlogPost[],
  currentSlug: string,
  limit: number = 3
): BlogPost[] {
  const currentPost = posts.find((p) => p.slug === currentSlug);
  if (!currentPost) return [];

  // Score posts by relevance
  const scored = posts
    .filter((p) => p.slug !== currentSlug)
    .map((post) => {
      let score = 0;

      // Same category = +3
      if (post.category === currentPost.category) score += 3;

      // Shared tags = +1 per tag
      const sharedTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      );
      score += sharedTags.length;

      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((item) => item.post);
}
