# LinkServicePro - Field Service Management Platform

A comprehensive marketing website for LinkServicePro, featuring a complete multi-page structure with features, industries, pricing, resources, and more. Built with React, TypeScript, Tailwind CSS, and the custom "Pro-Blueprint" design system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
client/src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── Layout.tsx      # Main layout with Navbar and Footer
│   ├── Breadcrumbs.tsx # Breadcrumb navigation
│   ├── PageHeader.tsx  # Page header component
│   ├── Section.tsx     # Content section wrapper
│   ├── CTABar.tsx      # Call-to-action buttons
│   ├── SEO.tsx         # SEO metadata component
│   ├── SkipToContent.tsx # Accessibility skip link
│   ├── Pill.tsx        # Pill/badge component
│   └── ...             # Homepage components
├── pages/              # Route components
│   ├── home.tsx        # Homepage
│   ├── Features.tsx    # Features index
│   ├── FeatureDetail.tsx # Individual feature pages
│   ├── Industries.tsx  # Industries index
│   ├── IndustryDetail.tsx # Individual industry pages
│   ├── Pricing.tsx     # Pricing page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page with form
│   ├── Resources.tsx   # Resources hub
│   ├── Blog.tsx        # Blog index
│   ├── BlogPost.tsx    # Individual blog posts
│   ├── Guides.tsx      # Downloadable guides
│   ├── Webinars.tsx    # Webinars page
│   ├── HelpCenter.tsx  # Help center categories
│   ├── HelpArticle.tsx # Individual help articles
│   ├── ApiDocs.tsx     # API documentation
│   ├── LegalPrivacy.tsx # Privacy policy
│   └── LegalTerms.tsx  # Terms of service
├── data/               # Content data
│   ├── features.ts     # 21 features across 3 categories
│   ├── industries.ts   # 15 industries across 3 groups
│   ├── posts.ts        # 3 blog posts
│   └── help.ts         # 5 help categories with articles
├── App.tsx             # Main app with routing
└── styles/
    ├── blueprint.css   # Pro-Blueprint design system
    └── index.css       # Global styles
```

## 🗺️ Route Structure

### Main Routes

- `/` - Homepage with hero, features, industries grid, integrations, pricing teaser, FAQ
- `/features` - Features index page with 21 features across 3 categories
- `/features/:slug` - Individual feature detail pages
- `/industries` - Industries index with 15 trades across 3 groups
- `/industries/:slug` - Individual industry detail pages
- `/pricing` - Pricing page with monthly/annual toggle, comparison matrix, and add-ons
- `/about` - About page with mission, team, timeline, careers
- `/contact` - Contact page with form (name, email, phone, company, industry, team size, message)

### Resources Routes

- `/resources` - Resources hub with links to Blog, Guides, Webinars, Help Center, API Docs
- `/resources/blog` - Blog index with 3 posts
- `/resources/blog/:slug` - Individual blog posts with markdown rendering
- `/resources/guides` - Downloadable guides (2 guides)
- `/resources/webinars` - Webinars page with upcoming and past webinars
- `/resources/help` - Help center with 5 categories
- `/resources/help/:categoryId` - Help category view
- `/resources/help/:categoryId/:articleSlug` - Individual help articles
- `/resources/api` - API documentation with authentication, rate limits, endpoints

### Legal Routes

- `/legal/privacy` - Privacy policy with anchor navigation
- `/legal/terms` - Terms of service with anchor navigation

## ✏️ Editing Content

### Adding a New Feature

1. Open `client/src/data/features.ts`
2. Add your feature to the appropriate category in `featureCategories`:

```typescript
{
  slug: "your-feature-slug",
  title: "Your Feature Name",
  oneLiner: "Brief one-line description",
  icon: YourLucideIcon,
  category: "plan-dispatch", // or "win-deliver" or "get-paid-operate"
  benefit: "The main benefit to users",
  description: "Detailed description paragraph",
  bullets: [
    "Key feature point 1",
    "Key feature point 2",
    "Key feature point 3"
  ],
  useCases: [
    "Use case scenario 1",
    "Use case scenario 2"
  ],
  faqs: [
    {
      question: "Common question?",
      answer: "Helpful answer."
    }
  ]
}
```

3. The feature will automatically appear on the Features index page at `/features` and have its own detail page at `/features/your-feature-slug`

### Adding a New Industry

1. Open `client/src/data/industries.ts`
2. Add your industry to the appropriate group in `industryGroups`:

```typescript
{
  slug: "your-industry-slug",
  name: "Industry Name",
  group: "cleaning-surfaces", // or "grounds-seasonal" or "building-trades"
  oneLiner: "Brief description",
  workflow: [
    "Step 1 of typical workflow",
    "Step 2 of typical workflow",
    "Step 3 of typical workflow"
  ],
  jobTypes: [
    "Job type 1",
    "Job type 2",
    // ... up to 6 job types
  ],
  metrics: [
    { label: "Metric name", value: "Improvement value" }
  ],
  testimonial: {
    quote: "Customer testimonial quote",
    author: "Author Name",
    company: "Company Name"
  },
  features: [
    "Feature 1 name",
    "Feature 2 name"
  ],
  faqs: [
    {
      question: "Industry-specific question?",
      answer: "Tailored answer."
    }
  ]
}
```

3. The industry will automatically appear on the Industries index page at `/industries` and have its own detail page at `/industries/your-industry-slug`

### Adding a New Blog Post

1. Open `client/src/data/posts.ts`
2. Add your post to the `posts` array:

```typescript
{
  slug: "your-post-slug",
  title: "Your Blog Post Title",
  date: "2025-01-15",
  tags: ["tag1", "tag2"],
  excerpt: "A brief excerpt summarizing the post content...",
  content: `
# Your Blog Post Title

Full markdown content goes here...

## Subheading

Content with **bold**, *italic*, and [links](https://example.com).

\`\`\`javascript
// Code blocks work too
const example = "Hello World";
\`\`\`
  `
}
```

3. The post will appear on the Blog index at `/resources/blog` and have its own page at `/resources/blog/your-post-slug`

### Adding a New Help Article

1. Open `client/src/data/help.ts`
2. Find or create the appropriate category
3. Add your article to the category's `articles` array:

```typescript
{
  slug: "your-article-slug",
  title: "Article Title",
  content: `
# Article Title

Step-by-step instructions...

## Steps

1. First step
2. Second step
  `
}
```

4. The article will appear in its category and be accessible at `/resources/help/category-id/your-article-slug`

## 🎨 Design System - Pro-Blueprint Aesthetic

The site features a distinctive industrial, tool-grade aesthetic:

### Core Principles

- **No rounded corners**: All elements use sharp, rectangular edges (`rounded-none`)
- **Notched cards**: Distinctive corner cuts using CSS clip-path
- **Blueprint grid backgrounds**: Subtle grid patterns on hero sections
- **Right-to-left underline animations**: Links animate from right to left
- **Rivet-style borders**: Subtle industrial design touches with micro-shadows

### Color System

Defined in `client/src/styles/index.css`:
- **Primary**: HSL-based primary color for CTAs and accents
- **Foreground/Background**: Semantic color tokens
- **Muted**: Subtle background variations
- **Border**: Consistent border colors
- **Chart colors**: For data visualization

### Typography

- **Headlines**: Bold, contractor-plain language
- **Body text**: Clear, short sentences avoiding jargon
- **CTAs**: Uppercase, bold, action-oriented

## 🔧 Technology Stack

- **React 18** with TypeScript for type-safe component development
- **React Router** for client-side routing
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **Shadcn/UI** for accessible component primitives (Radix UI based)
- **React Hook Form** with Zod for form management and validation
- **React Markdown** with remark-gfm and rehype-highlight for content rendering
- **React Helmet Async** for SEO metadata management
- **Lucide React** for consistent iconography

## 📦 Key Components

### Layout Components

- **Layout.tsx**: Main wrapper with Navbar, skip-to-content link, and Footer
- **Breadcrumbs.tsx**: Automatic breadcrumb navigation with chevron separators
- **PageHeader.tsx**: Consistent page headers with optional subtitle and children
- **Section.tsx**: Content section wrapper with optional muted background
- **CTABar.tsx**: Reusable call-to-action button group with primary/secondary actions
- **Pill.tsx**: Badge/pill component with variant support

### SEO Component

The SEO component provides comprehensive meta tags and structured data:

```typescript
import SEO, { organizationSchema, websiteSchema } from "@/components/SEO";

<SEO
  title="Page Title"
  description="Page description for search engines"
  canonical="/page-path"
  jsonLd={[organizationSchema, websiteSchema]}
/>
```

Available JSON-LD schemas:
- `organizationSchema` - Company information
- `websiteSchema` - Website search action
- `softwareSchema` - Product information with pricing and ratings

### Accessibility Features

- **Skip to content link**: Keyboard-accessible skip navigation
- **ARIA labels**: All interactive elements properly labeled
- **Focus states**: Visible focus indicators on all interactive elements
- **Semantic HTML**: Proper use of nav, main, footer, article, section tags
- **Reduced motion support**: Respects `prefers-reduced-motion` media query
- **Breadcrumb navigation**: Proper ARIA labeling for screen readers

## 🚀 Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

Built files will be in the `dist/` directory.

## 🧪 Testing

All interactive elements include `data-testid` attributes for automated testing:

### Testing Conventions

- Buttons: `button-{action}` (e.g., `button-submit`, `button-cta-primary`)
- Links: `link-{target}` (e.g., `link-pricing`, `link-mobile-features`)
- Form inputs: `input-{field}` (e.g., `input-email`, `input-company`)
- Cards: `card-{type}-{identifier}` (e.g., `card-feature-drag-drop-scheduling`)
- Text elements: `text-{content}` (e.g., `text-username`, `page-title`)

## 📝 Content Guidelines

### Writing Style

Follow contractor-focused language principles:

1. **Contractor-plain**: Write for busy contractors, not corporate managers
2. **Benefit-first**: Lead with what the user gains, then explain the feature
3. **Short sentences**: One idea per sentence, active voice preferred
4. **No jargon**: Avoid buzzwords and overly technical terms
5. **Industry-specific**: Use trade-specific terms where relevant and understood

### SEO Best Practices

- **Unique titles**: Every page has a unique, descriptive title
- **Meta descriptions**: 150-160 characters summarizing page content
- **Canonical URLs**: Prevent duplicate content issues
- **JSON-LD structured data**: Organization, WebSite, Product, Article, FAQPage schemas
- **Open Graph tags**: Better social media sharing
- **Twitter Card tags**: Optimized Twitter previews

## 🔄 Adding New Pages

To add a new page to the site:

1. **Create the page component** in `client/src/pages/YourPage.tsx`
2. **Import the page** in `client/src/App.tsx`
3. **Add the route** in the `<Routes>` section:
   ```typescript
   <Route path="/your-page" element={<YourPage />} />
   ```
4. **Update navigation** in `client/src/components/Navbar.tsx` (if needed)
5. **Add SEO metadata** using the SEO component
6. **Include Breadcrumbs** for proper navigation hierarchy
7. **Add data-testid attributes** on all interactive elements

## 🌐 Multi-Page Site Structure

The site is organized into logical sections:

### Features (21 features across 3 categories)
- **Plan & Dispatch**: Scheduling, route optimization, GPS tracking
- **Win & Deliver**: CRM, quotes, work orders, customer portal
- **Get Paid & Operate**: Invoicing, payments, job costing, accounting sync

### Industries (15 industries across 3 groups)
- **Cleaning & Surfaces**: Cleaning, janitorial, pressure washing, window cleaning
- **Grounds & Seasonal**: Lawn care, tree services, landscaping, snow removal
- **Building & Trades**: General contracting, plumbing, handyman, HVAC, electrical, painting, roofing

### Resources
- **Blog**: Industry tips and best practices
- **Guides**: Downloadable field service playbooks
- **Webinars**: Live training sessions
- **Help Center**: Searchable knowledge base
- **API Docs**: Developer documentation

## 🎯 Future Enhancements

Potential additions to consider:

- **Customer testimonials section**: Dedicated page with case studies
- **Integration marketplace**: Detailed integration pages beyond QuickBooks/Xero
- **Video library**: Embedded tutorial and product tour videos
- **Interactive demos**: Live product demonstrations
- **Live chat widget**: Customer support integration
- **A/B testing framework**: Conversion rate optimization
- **Analytics dashboard**: Google Analytics or Plausible integration
- **Search functionality**: Site-wide search
- **Multi-language support**: Spanish and other languages

## 📞 Support

For questions or issues:

- **Email**: support@linkservicepro.com
- **Phone**: (555) 123-4567
- **Hours**: Monday-Friday, 8am-6pm EST

## 📄 License

Proprietary - LinkServicePro © 2025

---

**Built for contractors by contractors** 🛠️
