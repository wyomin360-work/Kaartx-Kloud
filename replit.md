# Kaartx Cloud - Marketplace Platform

## Overview

Kaartx Cloud is a premium SaaS platform for launching and managing multi-vendor marketplaces. The application is designed specifically for GCC markets with built-in integrations for TAP Payments and Asyad Shipping. It provides complete seller lifecycle management including onboarding, subscription billing, product listing workflows, order fulfillment, and automated 12-day payout cycles.

The platform targets brands, startups, retailers, agencies, and enterprises looking to launch their own branded marketplaces without heavy development investment. The design follows Apple-style premium minimalism with a clean white background and very dark navy (#1E2A5E) accent colors extracted from the Kaartx logo.

## Recent Changes

**October 21, 2025 - Unified Navbar with Cross-Page Navigation:**
- Replaced custom navbar on /create-marketplace with full Navbar component from homepage
- Implemented intelligent cross-page navigation: clicking navbar links from signup page navigates to homepage sections
- Navigation logic: when NOT on homepage, uses window.location.href for full page navigation; when ON homepage, uses smooth scroll + history.pushState
- Home component listens for location changes and automatically scrolls to hash anchors on mount
- URL hash updates correctly for deep-linking support (e.g., /#features, /#pricing)
- All navigation links (Features, Pricing, Integrations, Book a Call, Logo) work from both homepage and signup page
- Browser back/forward/refresh maintain correct section position
- Comprehensive e2e testing passed: verified cross-page navigation, hash updates, section visibility, mobile/desktop navigation

**October 21, 2025 - Social Media Links Added:**
- Added LinkedIn link to footer: https://linkedin.com/company/kaartx-official
- Added Twitter link to footer: https://x.com/Kaartx_Official
- Both links open in new tabs for better user experience

**October 21, 2025 - Cal.com Booking Integration (LIVE):**
- Replaced contact form with professional Cal.com booking widget for scheduling sales calls
- Created BookingSection component with embedded Cal.com inline widget using real account: kaartx/30min
- Updated all "Talk to Sales" buttons (Navbar, Hero, Pricing) to scroll to booking section
- Configured Cal.com widget with auto theme (adapts to light/dark mode) and Kaartx brand color (#1E2A5E)
- Added duplicate script injection guard to prevent Cal widget reinitialization on remounts
- Added scroll-margin-top to booking section to account for fixed navbar
- Booking section includes: Calendar icon header, "Book a Sales Call" title, widget container, and three info cards (Duration: 30 Minutes, Meeting Type: Video Call, Response Time: Instant)
- Changed navbar link from "Contact" to "Book a Call" for clarity
- Widget now connected to live Cal.com account (username: kaartx) showing real "30 Min Meeting" event type
- Comprehensive e2e testing passed: widget loads correctly, displays interactive booking slots, all navigation works perfectly

**October 21, 2025 - Removed Rocket Icon from Signup:**
- Removed rocket icon from /create-marketplace signup page per user request
- Cleaner, more minimalist professional design with just heading and subtitle

**October 21, 2025 - Professional Marketplace Signup Experience:**
- Created enterprise-grade tenant signup flow at /create-marketplace with polished, professional UI
- Professional design elements: prominent rocket icon in gray circle, clean typography, refined spacing
- Form includes: Marketplace Name, Email Address, Password with professional placeholders and validation
- "What's Included" benefits section with circle checkmarks highlighting 4 key features (14-day trial, custom subdomain, unlimited products, payment integrations)
- Large "Create My Marketplace" CTA button with loading states
- Implemented secure password hashing with Node.js crypto.scrypt and random per-user salt
- Created PublicTenant type to ensure passwords never leak in API responses
- Auto-generates URL-safe subdomain from marketplace name with uniqueness enforcement
- Beautiful success page with green checkmark icon, 2x2 grid layout showing account details, and detailed "Next Steps" section
- Success page includes actionable guidance: check email, access dashboard, onboard sellers
- All CTA buttons (navbar "Get Started", hero "Start Building") navigate to professional signup flow
- Comprehensive e2e testing passed: professional design verified, all functionality working perfectly

**October 20, 2025 - Comprehensive Mobile Optimization:**
- Implemented full mobile responsiveness across entire landing page while preserving desktop experience completely unchanged
- Applied mobile-first spacing pattern to all sections: py-12 sm:py-20 md:py-32 (reduced padding on mobile, original on desktop)
- Optimized typography for mobile: headings scale from text-3xl on mobile to text-5xl+ on desktop
- Reduced horizontal padding on mobile: px-4 sm:px-5 md:px-6 for better screen utilization
- Optimized Hero section: responsive button layouts (full-width on mobile, auto on desktop), readable font sizes
- Fixed UseCases tabs: changed from cramped 5-column grid to wrap layout on mobile for better usability
- Updated Pricing cards: removed problematic scale-105 on mobile (applied only on md+ breakpoints)
- Optimized all sections: FeatureGrid, HowItWorks, IntegrationsMarquee, FinalCTA, FAQ, Security, DeepFeatures, Testimonials, CaseStudy, Showcase, APISection, ContactForm
- All buttons and interactive elements optimized for touch targets (minimum 44px height recommended)
- Contact form inputs stack vertically on mobile with improved spacing
- Comprehensive e2e testing completed on iPhone 12 viewport (390x844) - all checks passed
- Desktop layout completely unchanged - mobile optimizations use Tailwind responsive breakpoints exclusively

**October 18, 2025 - Logo Blue Color Update:**
- Updated primary blue color to match Kaartx logo exactly: #1E2A5E (very dark navy)
- Changed from previous #131742 to much darker #1E2A5E (HSL: 229 52% 24%)
- Updated all CSS color variables in both light and dark modes
- Updated gradient effects: gradient-text, gradient-border, gradient-bg-blue
- All buttons, icons, and accent colors now use logo-matched blue
- Visually verified and architect-approved - matches the deep navy from the Kaartx logo

**October 18, 2025 - Scroll Animations Added:**
- Created useScrollAnimation hook with Intersection Observer API for detecting elements in viewport
- Implemented smooth scroll-triggered animations: fadeInUp (slide-up + fade), fadeIn, scaleIn
- Applied animations to all major sections: Hero, StatsBar, FeatureGrid, Pricing, IntegrationsMarquee, FinalCTA
- Added staggered animation delays for card grids (0.1s, 0.2s, 0.3s intervals)
- Performance optimized: observer disconnects after visibility is set, preventing memory leaks
- TypeScript-safe: generic hook allows precise typing for all HTML element types

**October 18, 2025 - Gen Z Modernization:**
- Replaced "Kaartx" text with logo image in navbar (Logo_A_1760799119283.png), positioned flush left
- Implemented Gen Z aesthetic throughout: gradient text effects (navy → purple → cyan), gradient backgrounds, playful shadows
- Enhanced typography: extrabold/black headlines (800-900 weight), medium body text (500 weight), larger font sizes (48-80px headlines)
- Updated all components with gradient backgrounds (purple/blue alternating on feature cards), rounded-3xl corners (24px)
- Added gradient border treatment to Growth pricing tier with playful colored shadows
- Updated design_guidelines.md to reflect Gen Z modern aesthetic approach with bold, vibrant, contemporary styling

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18+ with TypeScript
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design system

**Design System:**
- Light theme with pure white background (#FFFFFF)
- Very dark navy (#1E2A5E) as primary brand accent (extracted from Kaartx logo)
- Inter font family for all typography
- Generous Apple-style spacing (py-20 to py-32 sections)
- Custom CSS variables for theme tokens defined in index.css
- Hover elevation effects and smooth transitions throughout

**Component Organization:**
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/` (shadcn/ui)
- Feature-specific components in `client/src/components/`
- Path aliases configured: `@/` maps to `client/src/`, `@shared/` to `shared/`, `@assets/` to `attached_assets/`

**Routing Strategy:**
- Single-page application with minimal routing
- Primary route is Home (`/`) with all landing page sections
- 404 page for unmatched routes
- Smooth scroll navigation to section anchors (features, pricing, integrations, etc.)

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM module system (type: "module" in package.json)
- Vite middleware integration for development with HMR
- Minimal API surface - currently only health check endpoint

**Data Layer:**
- Drizzle ORM configured for PostgreSQL
- Neon Database serverless driver (@neondatabase/serverless)
- Schema defined in `shared/schema.ts` with Drizzle-Zod integration for validation
- In-memory storage implementation (`MemStorage`) for development/testing
- User table with username/password authentication (foundation for future expansion)

**Session Management:**
- connect-pg-simple configured for PostgreSQL-backed sessions
- Credentials included in fetch requests for cookie-based auth

**Build Process:**
- Development: tsx with watch mode
- Production: Vite builds client to `dist/public/`, esbuild bundles server to `dist/`
- Single-command deployment with `npm start`

### Data Storage Solutions

**Database:**
- PostgreSQL via Neon serverless
- Connection URL required in `DATABASE_URL` environment variable
- Drizzle migrations stored in `/migrations` directory
- Push-based schema deployment (`npm run db:push`)

**Schema Design:**
- Users table with UUID primary keys (auto-generated via `gen_random_uuid()`)
- Username unique constraint
- Password stored as text (ready for bcrypt hashing implementation)
- Zod schemas generated from Drizzle tables for runtime validation

**Storage Interface:**
- `IStorage` interface defines CRUD contract
- `MemStorage` provides in-memory implementation for development
- Design allows easy swap to database-backed storage without changing API routes

### Authentication and Authorization

**Current State:**
- Basic user schema defined (username, password)
- Storage methods implemented (getUser, getUserByUsername, createUser)
- Session configuration prepared with connect-pg-simple

**Future Implementation Path:**
- Password hashing with bcrypt
- Session-based authentication
- JWT tokens for API access
- Role-based access control for admin/seller/customer roles

### External Dependencies

**Payment Processing:**
- TAP Payments - Primary payment gateway for GCC markets (OMR, AED, SAR)
- Stripe - Alternative for global payments
- Subscription billing and auto-renewal logic
- 12-day payout cycles with commission deduction

**Shipping & Logistics:**
- Asyad - Oman-based shipping integration for label generation, tracking, returns
- Shipping label automation
- Order tracking and status updates

**E-commerce Integrations:**
- Shopify - Product catalog sync and import capabilities
- Marketplace OS features for multi-vendor management

**Development Tools:**
- Replit-specific plugins for development (cartographer, dev-banner, runtime-error-modal)
- Only loaded in development environment when REPL_ID is present

**Third-party Libraries:**
- React Icons (react-icons/si) for brand logos
- Lucide React for UI icons
- date-fns for date manipulation
- embla-carousel-react for carousels/sliders
- cmdk for command palette functionality
- class-variance-authority and clsx for dynamic className generation

**Analytics & Monitoring:**
- Google Analytics mentioned in integrations
- Firebase integration capabilities

### Key Features to Implement

Based on the design guidelines and component structure, the platform requires:

1. **Seller Management System** - Onboarding flows, approval workflows, subscription plans
2. **Product Listing Engine** - SKU generation, variant support (None/One/Two), bulk uploads, admin approvals
3. **Order Fulfillment Pipeline** - Status tracking, shipping integration, return handling
4. **Payout Automation** - 12-day cycles, commission calculations, invoice generation
5. **Analytics Dashboard** - Real-time metrics, seller performance, marketplace KPIs
6. **White-label Capabilities** - Custom branding, domain configuration, theme customization
7. **Multi-tenant Architecture** - Support for agencies managing multiple client marketplaces