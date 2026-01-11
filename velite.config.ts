import { defineConfig, defineCollection, s } from 'velite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/'),
});

// Blog Posts
const blog = defineCollection({
  name: 'BlogPost',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      category: s.string().default('General'),
      author: s.string().default('LinkServicePro Team'),
      readTime: s.string().optional(),
      coverImage: s.string().optional(),
      keywords: s.array(s.string()).default([]),
      industry: s.string().optional(),
      topicCluster: s.string().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

// Guides / Playbooks
const guide = defineCollection({
  name: 'Guide',
  pattern: 'guide/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      author: s.string().default('LinkServicePro Team'),
      readTime: s.string().optional(),
      coverImage: s.string().optional(),
      keywords: s.array(s.string()).default([]),
      industry: s.string().optional(),
      topicCluster: s.string().optional(),
      isPillar: s.boolean().default(false),
      body: s.mdx(),
    })
    .transform(computedFields),
});

// Case Studies
const caseStudy = defineCollection({
  name: 'CaseStudy',
  pattern: 'case-study/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      company: s.string(),
      industry: s.string(),
      location: s.string().optional(),
      heroImage: s.string().optional(),
      metrics: s
        .object({
          label: s.string(),
          value: s.string(),
        })
        .array()
        .optional(),
      keywords: s.array(s.string()).default([]),
      body: s.mdx(),
    })
    .transform(computedFields),
});

// Geo Pages (Local SEO)
const geo = defineCollection({
  name: 'GeoPage',
  pattern: 'geo/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      city: s.string(),
      state: s.string(),
      zipCodes: s.array(s.string()).optional(),
      localBusiness: s
        .object({
          name: s.string().default('LinkServicePro'),
          address: s.string().optional(),
          phone: s.string().optional(),
          serviceArea: s.array(s.string()).optional(),
        })
        .optional(),
      keywords: s.array(s.string()).default([]),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform(computedFields),
});

// Industry Pages
const industry = defineCollection({
  name: 'IndustryPage',
  pattern: 'industry/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      industry: s.string(),
      icon: s.string().optional(),
      heroImage: s.string().optional(),
      keywords: s.array(s.string()).default([]),
      published: s.boolean().default(true),
      features: s.array(s.string()).optional(),
      benefits: s.array(s.string()).optional(),
      testimonial: s
        .object({
          quote: s.string(),
          author: s.string(),
          company: s.string(),
          role: s.string().optional(),
        })
        .optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: 'content',
  output: {
    data: 'client/.velite',
    assets: 'client/public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { blog, guide, caseStudy, geo, industry },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: false,
        },
      ],
    ],
  },
});
