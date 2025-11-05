## Overview

Kaartx Cloud is a premium SaaS platform designed for launching and managing multi-vendor marketplaces, specifically targeting GCC markets. It offers comprehensive seller lifecycle management, including onboarding, subscription billing, product listing, order fulfillment, and automated 12-day payout cycles. The platform aims to enable brands, startups, retailers, agencies, and enterprises to create their own branded marketplaces with minimal development effort. The design adheres to a minimalist aesthetic, featuring a clean white background and a very dark navy accent color (#1E2A5E) derived from the Kaartx logo.

## Recent Changes

**November 5, 2025 - HowItWorks Professional Redesign:**
- **Ultra-Professional Styling Enhancement:** Complete redesign of "Launch in 3 simple steps" section
  - Enhanced spacing throughout: increased padding (p-10 pt-20), larger gaps (gap-10 lg:gap-12), expanded margins
  - Refined backgrounds: subtle bg-card/20 with barely-visible borders (border-border/30) for clean corporate aesthetic
  - Larger numbered badges: increased to h-14 w-14 with enhanced shadow-lg for better prominence
  - Professional typography: font-bold heading, font-semibold titles (text-2xl), optimized tracking
  - Sophisticated hover effects: subtle border darkening (border-border/60), shadow-lg, and gentle background transition
  - Refined icon containers: h-16 w-16 with shadow-sm and improved backgrounds
  - Creative animated arrow connectors: gradient lines with triple chevron arrows and pulse animation between steps
  - E2e tested and verified - professional appearance with smooth interactions

**November 3, 2025 - Content & Layout Updates:**
- **Hero Subtitle:** Updated to emphasize GCC-ready platform and Kaartx Cloud branding
  - New text: "Complete GCC-ready platform with seller onboarding, product management, subscription billing, and automated payouts — powered by Kaartx Cloud."
  - Maintains professional tone while highlighting key platform features
- **StatsBar First Stat:** Changed from "12-day / Payout Cycles" to "Automated / Adjustable payout cycles"
  - Emphasizes flexibility of payout schedules with cleaner, more professional phrasing
  - "Automated" provides punchy badge text that matches other stats
  - Subtitle clarifies the adjustable nature of payout cycles
- **StatsBar Uniform Height Fix:** Enforced identical card heights across all 4 stats
  - Applied h-40 fixed height class to all stat cards
  - All cards now render at exactly 92px height (perfectly uniform)
  - Inner content uses h-full for proper vertical centering
  - E2e tested and verified - zero height variance across all 4 cards
- **FeatureGrid Content Refinement:** Updated all 4 feature descriptions for clarity and professionalism
  - Seller Management: "Onboard, verify, and manage sellers with built-in approvals, subscriptions, and performance tracking."
  - Product Listing Flow: "Streamlined product listing system with variants, SKUs, and bulk uploads — ready for any category."
  - Auto Payouts (renamed from "12-Day Payouts"): "Built-in payout engine with customizable cycles and full TAP integration."
  - Smart Workflows (renamed from "Full Automation"): "Automate orders, returns, and tracking with real-time updates and smart notifications."

**November 2, 2025 - Kloud Rebranding & Professional UI Enhancements:**
- **Logo Replacement:** Complete rebrand from Kaartx Cloud to Kloud
  - Replaced navbar logo with new Kloud logo (colorful K with orange/turquoise accents)
  - Updated all main brand references to "Kloud" (navbar, footer, copyright, alt texts)
  - Preserved functional email addresses and external URLs (support@kaartx.com, official@kaartx.com, social media links)
  - New logo asset: Asset 4@4x_1762100909160.png
- **Hero Section Simplification:** Removed dashboard image to create clean, focused hero
  - Dashboard screenshot section removed entirely
  - Hero now displays only: title, subtitle, and CTA buttons ("Start Building Your Marketplace", "Talk to Sales")
  - Cleaner, more focused presentation highlighting the value proposition
  - Maintains gradient background effects and smooth scroll animations
  - E2e tested and verified - layout looks professional without dashboard image
- **StatsBar Ultra-Premium Redesign:** Complete overhaul with high-end glassmorphism and visual drama
  - Premium glassmorphism cards: bg-card/60 backdrop-blur-md with layered gradient overlays
  - Dual-layer section backgrounds: linear gradient + radial focal gradient for depth
  - Enhanced card depth: border-2 border-primary/20, shadow-lg with hover:shadow-2xl
  - Stable hover interactions: shadow and border color transitions only (no vertical movement to prevent jitter)
  - Generous spacing: py-24 sm:py-32 md:py-40 with lg:gap-10 between cards
  - Premium typography: text-2xl sm:text-3xl lg:text-4xl gradient values, extrabold uppercase labels
  - Optimized letter spacing (tracking-[0.15em]) for readability and luxury feel
  - Multiple gradient layers on cards for rich depth (from-primary/5, from-background/10)
  - Rounded-3xl corners with optimized padding (p-6 sm:p-7 lg:p-8) to prevent text truncation
  - Whitespace-nowrap on stat values ensures complete display of all text
  - Added overflow-visible to prevent any text clipping
  - E2e tested and verified - all stats ("Automated", "GCC", "99.9%", "White-label") display completely without truncation, zero hover jitter (deltaY=0px confirmed)
**November 2, 2025 - Professional UI Enhancements:**
- **HowItWorks Section Ultra-Professional Redesign:** Complete overhaul for corporate-grade aesthetic
  - Removed Card component in favor of minimal div with ultra-subtle background (bg-card/30)
  - Repositioned numbered badges to top-left of each step (professional SaaS pattern)
  - Enlarged badges to 48px for better prominence and visibility
  - Implemented barely-visible borders (40% opacity) for clean separation
  - Minimal shadows (only on badges, subtle hover effect)
  - Very light icon backgrounds with refined styling
  - Professional spacing with expanded top padding for badge positioning
  - Simplified connecting lines (clean 1px borders)
  - Sophisticated hover interactions (subtle border darkening, gentle shadow)
  - Typography refinements with tight tracking and optimal spacing
  - Maintained all functionality, test IDs, and responsive behavior
- **Testimonials Performance:** Removed avatar images to eliminate loading delays
  - Switched to text-only testimonials for instant navigation
  - All customer verification and case study modals preserved
  - Zero performance issues with testimonial switching

**October 22, 2025 - Complete Layout Shift Elimination:**
- **Custom Modal Implementation:** Replaced Radix Dialog with custom modal to achieve zero layout shift
  - Solution: Custom modal using Radix Portal + FocusScope (no Dialog scroll-lock)
  - Result: **ZERO layout shift** - navbar and content completely stable (0px movement)
  - HTML scrollbar compensation: `html { overflow-y: scroll; }`
  - Focus trap: Radix FocusScope with `trapped` and `loop` props
  - All functionality preserved: escape key, backdrop blocking, form reset
  - Testing confirmed: 0px horizontal shift at all stages (before/during/after modal open)
- **Navigation Enhancement:** Added "Contact" link to navbar while maintaining "Book a Call"
  - Desktop navbar: Features | Pricing | Integrations | Book a Call | Contact → [Get Started]
  - Mobile menu: Features | Pricing | Integrations | Book a Call | Contact
  - "Book a Call" navigates to the booking section (#booking) for Cal.com scheduling
  - "Contact" navigates to the footer contact section (#contact) with email, phone, and response time
  - Removed redundant Contact link from footer Company section (contact info already visible below)
- **Footer Email Clarification:** Added professional "Business Inquiries:" label above official@kaartx.com
- **Email Differentiation:** official@kaartx.com (business/partnerships) vs support@kaartx.com (customer support)
- **Contact Info Integration:** Redesigned contact section in footer with cleaner styling, removed Card backgrounds
- **Integrations Accuracy:** Updated integrations section to accurately reflect current status:
  - TAP Payments & Asyad Shipping marked as "Featured" (currently integrated)
  - Shopify, Stripe, Firebase, and Custom APIs marked as "Coming Soon"
  - Reordered integrations to prioritize featured services
- All functionality and test IDs preserved for compatibility
- Comprehensive e2e testing passed for all updates

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:** React 18+ with TypeScript, Vite, Wouter for routing, TanStack Query for server state management, shadcn/ui (built on Radix UI) for components, and Tailwind CSS for styling.

**Design System:** Light theme with a pure white background, primary brand accent color #1E2A5E (very dark navy), Inter font family, generous Apple-style spacing, custom CSS variables for theme tokens, and hover elevation effects. The aesthetic incorporates Gen Z modernization with gradient text effects, backgrounds, playful shadows, bold typography, and rounded corners.

**Component Organization:** Pages in `client/src/pages/`, reusable UI components in `client/src/components/ui/`, feature-specific components in `client/src/components/`, with path aliases for easy imports.

**Routing Strategy:** Single-page application with minimal routing, primary Home route (`/`) including all landing page sections, a 404 page, and smooth scroll navigation to section anchors.

### Backend Architecture

**Server Framework:** Express.js with TypeScript, ESM module system, and Vite middleware integration for development.

**Data Layer:** Drizzle ORM for PostgreSQL, Neon Database serverless driver, schema defined in `shared/schema.ts` with Drizzle-Zod validation, and an in-memory storage implementation for development.

**Session Management:** `connect-pg-simple` for PostgreSQL-backed sessions.

**Build Process:** `tsx` for development, Vite builds client to `dist/public/`, and esbuild bundles the server to `dist/` for production.

### Data Storage Solutions

**Database:** PostgreSQL via Neon serverless, with Drizzle migrations managed in `/migrations` and push-based schema deployment.

**Schema Design:** Users table with UUID primary keys, unique username constraint, and password storage (to be hashed). Zod schemas are generated for runtime validation.

**Storage Interface:** An `IStorage` interface defines CRUD operations, with `MemStorage` providing an in-memory implementation for development.

### Authentication and Authorization

**Current State:** Basic user schema (username, password), storage methods (`getUser`, `getUserByUsername`, `createUser`), and session configuration are prepared.

**Future Path:** Implementation of password hashing (bcrypt), session-based authentication, JWT tokens for API access, and role-based access control.

### System Design Choices

- **Modal-Based Signup:** Tenant signup is integrated into a modal dialog for improved conversion rates, accessible from all primary CTAs.
- **Unified Navbar:** A consistent navbar provides cross-page navigation with intelligent handling for homepage sections and external pages.
- **Cal.com Integration:** Replaced contact forms with an embedded Cal.com booking widget for sales calls, styled to match the Kaartx brand.
- **Mobile Optimization:** Full mobile responsiveness implemented across the landing page, using mobile-first spacing and typography, and optimizing interactive elements for touch.
- **Scroll Animations:** Smooth scroll-triggered animations (fadeInUp, fadeIn, scaleIn) applied to major sections using the Intersection Observer API.

## External Dependencies

**Payment Processing:**
- **TAP Payments:** Primary gateway for GCC markets (OMR, AED, SAR), handling subscription billing and 12-day payout cycles.
- **Stripe:** Alternative for global payments.

**Shipping & Logistics:**
- **Asyad:** Oman-based shipping integration for label generation, tracking, and returns.

**E-commerce Integrations:**
- **Shopify:** For product catalog synchronization and import functionalities.

**Development Tools:**
- Replit-specific plugins (cartographer, dev-banner, runtime-error-modal) for development environments.

**Third-party Libraries:**
- **React Icons (react-icons/si):** For brand logos.
- **Lucide React:** For UI icons.
- **date-fns:** For date manipulation.
- **embla-carousel-react:** For carousels/sliders.
- **cmdk:** For command palette functionality.
- **class-variance-authority and clsx:** For dynamic className generation.

**Analytics & Monitoring:**
- Google Analytics (mentioned in integrations).
- Firebase (integration capabilities).