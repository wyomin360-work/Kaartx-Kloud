# Kaartx Cloud - Design Guidelines

## Design Approach
**Reference-Based Approach**: Inspired by seller.kaartx.com aesthetic - Apple-style premium minimalism meets Vercel's futuristic tech aesthetic. This is a luxury SaaS platform requiring bold, minimal, and premium visual language.

## Core Design Elements

### A. Color Palette
**Dark Theme Foundation:**
- Background: `#0A0A0A` (deep black)
- Card/Surface: `#111113` (charcoal)
- Primary Text: `#F5F5F7` (off-white)
- Muted Text: `#A3A3AD` (gray)
- Brand Accent: `#FF385C` (Kaartx pink) - THE SOUL of the design

**Color Usage:**
- Pink accent exclusively for CTAs, highlights, and hover states
- White/off-white for all text content
- Dark surfaces for cards with subtle elevation
- No gradients except subtle animated background in hero

### B. Typography
**Font Family:** Inter (primary) or Poppins
- Headings: Bold weight, generous line-height
- Body: Regular weight, comfortable reading size
- Code blocks: Monospace for API section
- All instances: "Kaartx" (exact spelling)

### C. Layout System
**Spacing Philosophy:** Generous, Apple-style breathing room
- Section padding: `py-20` to `py-32` desktop, `py-12` mobile
- Container: `max-w-7xl` for full-width sections
- Content: `max-w-6xl` for text-heavy areas
- Grid gaps: `gap-8` to `gap-12`

**Vertical Rhythm:**
- Consistent section spacing creates endless scroll flow
- Each section distinctly separated but flows naturally
- No forced viewport heights - natural content breathing

### D. Component Library

**Navigation:**
- Sticky header with dark backdrop blur
- Logo left, links right, pink CTA button
- Smooth scroll anchors

**Buttons:**
- Primary: Pink fill, white text, medium roundedness
- Outline: Pink border on dark, backdrop blur when over images
- Hover: Soft glow effect + subtle scale (1.02)
- No custom hover states on blurred buttons

**Cards:**
- Dark surface (`#111113`) with soft shadow
- Border radius: `1.25rem`
- Hover: Slight raise + glow effect
- Clean typography hierarchy

**Feature Grid:**
- 4-column desktop, 2-column tablet, 1-column mobile
- Icon + title + description pattern
- Lucide-react icons in pink accent

**Pricing Cards:**
- 3-tier layout (Starter/Growth/Enterprise)
- Middle card highlighted with pink accent
- Clear feature lists with checkmarks

**FAQ:**
- 10 collapsible accordion items
- Smooth expand/collapse animations
- Clean dividers between items

**Forms:**
- Contact form: client-side only
- Dark inputs with pink focus states
- Validation states clearly visible

### E. Animations
**Scroll Animations (Framer Motion):**
- Fade-up on scroll for all major sections
- Stagger children for grid layouts
- Smooth, subtle - never distracting

**Hover Effects:**
- Cards: Scale 1.02 + shadow lift
- Buttons: Glow effect + scale 1.05
- Links: Pink underline slide-in

**Special Animations:**
- Marquee: Continuous scroll for integration logos
- Hero: Subtle animated gradient or particles
- Smooth scroll navigation between sections

**Performance:**
- Use `initial={{ opacity: 0, y: 20 }}` and `whileInView={{ opacity: 1, y: 0 }}`
- Minimal, purposeful animations only

### F. Images
**Hero Section:**
- Dashboard mockup placeholder (right side or centered below CTAs)
- Subtle glow/shadow effect around mockup

**Feature Sections:**
- Alternating layout: Image left/right with text opposite
- Dashboard screenshots showing: Marketplace OS, Product Listings, Operations dashboard, Finance/Payouts

**Showcase Section:**
- 3 polished dashboard frames (payouts, analytics, listings)
- Fade-on-scroll reveal
- Soft shadows and border radius for premium feel

**Integration Logos:**
- Shopify, TAP, Firebase, Asyad, Vercel, Google Analytics
- Grayscale with pink on hover
- Animated marquee scroll

**Testimonials:**
- Avatar placeholder images
- Circular with subtle border

## Page Structure (17 Sections)

1. **Sticky Navbar** - Dark with blur, pink CTA
2. **Hero** - Bold headline, dual CTAs, animated background, mockup
3. **Stats Bar** - 4 metrics in row
4. **Feature Grid** - 4 columns, icons, hover effects
5. **How It Works** - 3-step timeline visual
6. **Deep Features** - 4 alternating image/text sections
7. **Use Cases** - Tabbed interface (4 tabs)
8. **Integrations** - Animated marquee
9. **Security** - Trust badges and bullets
10. **API Section** - Code preview with syntax highlighting
11. **Showcase** - 3 dashboard screenshots
12. **Testimonials** - Carousel with 3 cards
13. **Case Study** - KPI highlight card
14. **Pricing** - 3-tier cards, pink highlight
15. **FAQ** - 10 collapsible items
16. **Final CTA** - Bold conversion section
17. **Footer** - Minimal dark with links/socials

## Special Elements
- Floating WhatsApp button (mobile)
- Scroll-to-top button
- Smooth scroll behavior throughout
- All sections flow as single endless scroll

## Accessibility & Performance
- Semantic HTML, ARIA labels
- Keyboard navigation with visible focus states
- Alt text for all images
- Lazy load images below fold
- Target: Lighthouse 95+ Performance, 100 SEO/A11y

The essence: **Bold. Minimal. Premium. Futuristic.** Pink accent is the soul - use it decisively but not excessively. Every element must feel luxurious and tech-forward.