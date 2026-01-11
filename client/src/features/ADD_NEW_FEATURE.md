# How to Add a New Feature Page

This guide shows you how to add a new feature page to the LinkServicePro marketing site using the data-driven template system.

## Quick Start

Add a new feature by creating a `FeatureSpec` object in `client/src/features/content.ts`. The template system handles all the layout and rendering automatically.

## Step-by-Step Example

```typescript
// In client/src/features/content.ts, add to the featureSpecs object:

"my-new-feature": {
  // 1. BASIC INFO (required)
  slug: "my-new-feature",
  title: "My Feature Name",
  subtitle: "One-sentence value proposition",
  outcomes: [
    "First key outcome",
    "Second key outcome",
    "Third key outcome"
  ],

  // 2. CUSTOM DEMO (optional - only for interactive features)
  showInstantDemo: false,  // Set to true if you create a custom demo component
  // instantDemoConfig: { component: MyCustomDemo },

  // 3. PAIN/SOLVE SECTION (optional but recommended)
  painSolveHeading: "Custom heading for this feature",
  painSolveSubheading: "Custom subheading specific to this feature's value",
  pains: [
    "Problem customers face",
    "Another pain point",
    "Third frustration"
  ],
  solves: [
    "How your feature solves problem #1",
    "How your feature solves problem #2",
    "How your feature solves problem #3"
  ],

  // 4. HOW IT WORKS (optional but recommended)
  stepsHeading: "How it works",
  stepsSubheading: "Three steps to [feature-specific outcome]",
  steps: [
    { title: "Step 1", desc: "What happens first" },
    { title: "Step 2", desc: "What happens second" },
    { title: "Step 3", desc: "What happens third" }
  ],

  // 5. SOCIAL PROOF (optional)
  testimonial: {
    quote: "This feature saved us hours every week!",
    by: "Name, Role, Company Type"
  },

  // 6. FAQ (optional but recommended)
  faq: [
    { 
      q: "Common question about this feature?", 
      a: "Clear, helpful answer." 
    },
    { 
      q: "Another question?", 
      a: "Another answer." 
    }
  ],

  // 7. INTEGRATIONS (optional)
  integrations: [
    "QuickBooks",
    "Stripe",
    "Google Calendar"
  ],

  // 8. RELATED FEATURES (optional - cross-sell)
  related: [
    { 
      slug: "other-feature", 
      title: "Other Feature", 
      description: "Brief description" 
    }
  ],

  // 9. BOTTOM CTA (optional - customize the final conversion band)
  bottomCtaTitle: "Feature-specific call to action",
  bottomCtaSubtitle: "Start Free. Feature-specific benefit.",

  // 10. SEO (required)
  seo: {
    title: "Feature Name | LinkServicePro",
    description: "150-160 character meta description for search engines.",
    canonical: "https://linkservicepro.com/features/my-new-feature"
  },

  // 11. SCHEMA (optional - helps with SEO)
  schemaFeatureList: [
    "Feature capability 1",
    "Feature capability 2",
    "Feature capability 3"
  ]
}
```

## Field Reference

### Required Fields
- `slug` - URL-friendly identifier (must match object key)
- `title` - Feature name shown in hero
- `subtitle` - One-sentence value prop shown in hero
- `outcomes` - 3 key benefits shown in hero
- `seo.title` - Page title for SEO
- `seo.description` - Meta description for SEO

### Optional Section Customization
- `painSolveHeading` / `painSolveSubheading` - Custom copy for pain/solve section
  - Defaults: "Common problems, solved" / "Field service challenges paired with proven solutions"
- `stepsHeading` / `stepsSubheading` - Custom copy for how-it-works section
  - Defaults: "How it works" / "{N} steps to get started"
- `bottomCtaTitle` / `bottomCtaSubtitle` - Custom copy for final CTA
  - Defaults: "Take control of your field operations" / "Start Free. No credit card. Full product for 14 days."

### Optional Content Sections
All content sections are optional. Include only what makes sense for your feature:
- `pains` / `solves` - Show pain/solution comparison
- `steps` - Show 3-step workflow
- `testimonial` - Show customer quote
- `faq` - Show FAQ accordion
- `integrations` - Show integration logos
- `related` - Show 3 related features

### Custom Demo
For interactive demos (like drag-and-drop scheduling):
1. Create a custom component in `client/src/features/demos/`
2. Set `showInstantDemo: true`
3. Set `instantDemoConfig: { component: YourComponent }`

Otherwise, a standard lead form will be shown.

## Tips for Great Content

1. **Be specific**: Use feature-specific language in headings/subheadings
2. **Be concise**: Pains and solves should be one short sentence each
3. **Be clear**: Steps should be simple and jargon-free
4. **Be helpful**: FAQs should answer real customer questions
5. **Cross-sell**: Related features should be genuinely relevant

## Examples

See these implemented features in `content.ts`:
- `drag-and-drop-scheduling` - Custom demo + full content
- `dispatch-board` - Standard form + custom copy
- `invoicing` - Payment-focused messaging
- `customer-portal` - Self-service focused
- `two-way-messaging` - Communication focused

## Adding to Navigation

After adding your feature spec, you may want to add it to site navigation:
1. Update main navigation in `client/src/components/Navigation.tsx`
2. Add to feature dropdown menu if applicable
3. Add to sitemap for SEO

## Testing Your New Feature

1. Navigate to `/features/your-slug` to see the page
2. Verify all sections render correctly
3. Check mobile responsiveness
4. Test accessibility (keyboard nav, screen reader)
5. Validate SEO meta tags in browser dev tools
