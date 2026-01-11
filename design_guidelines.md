# Design Guidelines for LinkServicePro Homepage

## Design Approach: Custom "Pro-Blueprint" System
**Rationale**: Field service management software targeting contractors requires a professional, rugged, tool-grade aesthetic that conveys reliability and precision. The custom Pro-Blueprint design system differentiates from typical SaaS competitors while maintaining high conversion potential.

---

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Ink: 15 23% 9% (dark slate, primary text/backgrounds)
- Blueprint: 217 94% 52% (#0B5FFF, primary brand action color)
- Safety Teal: 173 100% 38% (#00C2A8, success states)
- Accent Amber: 32 95% 50% (#F59E0B, attention/highlight)

**Neutral Grays:**
- Charcoal: 222 47% 11% (#111827)
- Medium: 215 20% 28% (#374151)
- Light: 214 20% 91% (#E5E7EB)

**Application:**
- Backgrounds use Ink with blueprint grid overlay (subtle white grid lines at 5% opacity)
- Primary CTAs use Blueprint with hover state shifting to darker Blueprint (217 94% 44%)
- Safety indicators and success states use Safety Teal
- Accent Amber reserved for time-sensitive elements and micro-badges

### B. Typography

**Font Stack**: Inter (primary) with system fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

**Hierarchy:**
- H1: 700 weight, 3.5rem (mobile: 2.5rem)
- H2: 700 weight, 2.5rem (mobile: 2rem)
- H3: 600 weight, 1.75rem
- Body: 400-500 weight, 1rem
- Buttons: 800 weight, 0.875rem uppercase tracking-wide
- Captions: 500 weight, 0.875rem

**Key Principle**: Contractor-friendly language—short sentences, benefit-first, zero jargon.

### C. Layout System

**Spacing Primitives**: Use Tailwind units 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 (mobile) to py-24 (desktop)
- Card padding: p-6 to p-8
- Gap between elements: gap-4 to gap-8

**Grid System:**
- Benefits: 4-column grid (mobile stacks)
- Industries: 3×5 grid responsive to 2-col tablet, 1-col mobile
- Feature sections: 50/50 split with copy left, visual right

**Containers**: max-w-7xl centered with px-6 (mobile) to px-12 (desktop)

### D. Component Library

**Unique Visual Treatment:**

1. **Card Notches**: All cards use clip-path for distinctive corner notch (8px diagonal cut top-right): `clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)`

2. **Rivet Details**: 
   - 1px borders in medium gray (#374151)
   - Micro box-shadows: `0 1px 3px rgba(0,0,0,0.12)`
   - No rounded corners (rounded-none throughout)

3. **Active Indicators**: "Staple" style—2px tall full-width colored top border on active tabs/sections

4. **Custom Underline Hover**: Right-to-left animated underline on nav links
   - Transform from scaleX(0) origin right to scaleX(1) origin left
   - 180ms ease-out transition
   - 2px height, currentColor
   - Active nav items show persistent underline

5. **Buttons**:
   - Primary: Blueprint background, white text, 800 weight, px-6 py-3
   - Secondary: Border-2 Blueprint, Blueprint text, transparent bg
   - On hero images: blurred background (backdrop-blur-sm), no additional hover interactions

**Navigation Components:**
- Sticky navbar with wordmark left, centered nav links, CTAs right
- Megamenu (Features): 3-column grid, 150ms mouseleave delay, focus trap when open
- Dropdown menus: Industries (2-col), Resources (single list)

**Hero Carousel:**
- Vertical auto-scrolling carousel (5-6 cards)
- Each card: field service photo + caption
- 4s per card, pause on hover/focus
- Progress dots vertically aligned, keyboard accessible

**Content Cards:**
- Benefit Pillars: Icon + headline + one-line proof + link
- Feature Spotlights: 50/50 split with bullets and decorative interface mock
- Flow Panels: Horizontal sequence with arrows and micro-badges

### E. Background Treatments

**Blueprint Grid Pattern** (hero and select sections):
```
Radial gradient dots (1px white at 4% opacity) on 24px grid
+ Repeating linear gradient vertical lines (1px white at 5% opacity, 24px spacing)
+ Linear gradient base (Blueprint to darker Blueprint)
```

**Subtle Noise Texture**: CSS-generated texture overlay at 2-3% opacity for premium feel

**Section Transitions**: Angled mask at hero bottom edge for visual distinction

---

## Accessibility Standards

- WCAG AA+ contrast ratios enforced throughout
- All interactive elements keyboard navigable with visible focus states (2px Blueprint outline offset 2px)
- ARIA attributes: aria-expanded, aria-controls, aria-current="page", aria-label on icon buttons
- Reduced motion media query: disables carousel autoplay and transitions
- Focus trap in megamenu when open, ESC key closes

---

## Images

**Hero Section**: Large background with blueprint grid overlay (CSS-generated, no image needed)

**Vertical Carousel Images**: 5-6 field service scenario photos
1. Plumbing van with technician - "Plumbing • Same-day quote approved"
2. HVAC crew on rooftop - "HVAC • Job completed, invoice sent"
3. Landscaping equipment - "Landscaping • Route optimized, 20min saved"
4. Electrical panel work - "Electrical • Customer portal updated"
5. Window cleaning crew - "Cleaning • Recurring job auto-scheduled"
6. General contractor site - "Contracting • Multi-visit project tracked"

**Feature Mocks**: Static interface mockups (decorative, ARIA-hidden):
- Dispatch section: Map with route, GPS pins, ETA badges
- Flow panels: Quote → Work Order → Invoice progression with visual connectors

**Trust Indicators**: Small placeholder logos for rating badges and integration partners (QuickBooks, Xero, PropertyLinkWare, etc.)

---

## Unique Design Distinctions

**Avoid Generic Patterns:**
- No centered hero with purple-blue gradient (using blueprint grid instead)
- Vertical carousel replaces standard horizontal carousels
- Notched cards with rivet details vs. rounded material cards
- Right-to-left underline animation vs. standard bottom border
- Tool-grade aesthetic vs. soft SaaS minimalism

**Distinctive Elements:**
- Blueprint grid background creating technical/precision feel
- Staple indicators for active states (industrial metaphor)
- Corner notches on all cards (blueprint drafting reference)
- Vertical auto-carousel (unique, attention-holding)
- Angled section transition at hero bottom

**Conversion-Optimized Layout:**
- Dual CTAs in hero (trial + demo) with trust chips below
- Benefit pillars immediately after hero (fast value communication)
- Feature flow visualization (quote→work order→invoice) showing process simplicity
- Industry-specific grid showing versatility
- FAQ addressing objections before footer

---

## Performance Considerations

- System font stack with Inter as enhancement
- CSS-only effects (no image-based textures or gradients where avoidable)
- Lazy loading on all non-critical images (loading="lazy")
- Target <80KB CSS bundle
- Deferred non-critical scripts
- Optimized CLS with explicit width/height on images