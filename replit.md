## Overview

Kaartx Kloud is a premium SaaS platform for launching and managing multi-vendor marketplaces, specifically tailored for GCC markets. It provides comprehensive seller lifecycle management, including onboarding, subscription billing, product listing, order fulfillment, and automated payout cycles. The platform empowers businesses to create branded marketplaces with minimal development, adhering to a minimalist design with a clean white background, a dark navy accent (#1E2A5E), and Gen Z modernization elements like gradients, playful shadows, bold typography, and rounded corners. The brand name has been updated from "Kaartx Cloud" to "Kaartx Kloud" for consistency.

## Recent Changes

**December 26, 2025 - Manual Activation Mode (Backend Refactor):**
- **Changed from tenant creation to marketplace_requests collection**
- **New business flow:**
  - Form submissions now create `marketplace_requests` with status: "pending"
  - NO actual marketplaces, tenants, subdomains, or accounts are created
  - Marketplace creation is handled manually by internal team
- **Schema changes:**
  - Replaced `tenants` table with `marketplace_requests` table
  - Fields: id, marketplaceName, email, password (hashed), plan, status, createdAt
- **Validation:**
  - If marketplaceName already exists in marketplace_requests → return error
  - If email already exists → return error
- **Email notifications:**
  - Admin notification sent to support@kloud.kaartx.com
  - Simple user acknowledgment: "Your request has been received. Our team will activate your marketplace shortly."
- **Files Modified:**
  - `shared/schema.ts` - New marketplace_requests table schema
  - `server/storage.ts` - Marketplace request CRUD methods
  - `server/routes.ts` - New `/api/marketplace-requests` endpoint
  - `server/email.ts` - Simplified email templates
  - `client/src/components/SignupModal.tsx` - Updated to use new API
  - `client/src/pages/CreateMarketplace.tsx` - Updated to use new API

**December 24, 2025 - Email Notifications for Marketplace Requests:**
- **Implemented automated email system** using Nodemailer with Zoho SMTP
- **SMTP Configuration:**
  - Host: smtppro.zoho.in (port 465, SSL)
  - From address: noreply@kloud.kaartx.com
  - Password stored in Secrets (SMTP_PASSWORD)
- **Files Added:** `server/email.ts` - Email service with HTML templates

**December 17, 2025 - Request Setup Flow Implementation:**
- **Changed from self-serve to guided setup flow** - No more instant trial or payment
- **Pricing CTAs Updated:**
  - Starter: "Request Starter Marketplace"
  - Growth: "Request Growth Marketplace"
  - Pro: "Talk to Sales" (unchanged)
- **SignupModal Updated:**
  - Subtitle: Plan-specific review messaging (no trial/payment mentions)
  - Section title: "Key highlights" for both plans
  - Button: "Submit Request" for both plans
  - Success modal: "Request received" with review messaging
- **Backend Changes:**
  - All new tenants get `status = 'PENDING_REVIEW'`
  - Only ACTIVE tenants block name/email conflicts
  - Payment modal and resume-payment flows removed
- **Files Modified:**
  - `client/src/components/Pricing.tsx` - Updated CTAs and subtitle
  - `client/src/components/SignupModal.tsx` - New request flow
  - `server/storage.ts` - PENDING_REVIEW status for all signups
  - `server/routes.ts` - Updated uniqueness validation

**November 12, 2025 - Navbar Navigation Restructure:**
- **Updated Navigation Order:** Features · Integrations · Pricing · FAQs · Contact · Login · Get Started
- **Section ID Mapping:**
  - Features → `id="features"` (DeepFeatures: "Powerful tools to manage your entire ecosystem")
  - Integrations → `id="integrations"` (IntegrationsMarquee: "GCC-ready integrations")
  - Pricing → `id="pricing"` (Pricing: "Plans & pricing for GCC")
  - FAQs → `id="faq"` (FAQ: "Frequently asked questions")
  - Contact → `id="booking"` (BookingSection: "Book a Sales Call")
  - Login → `/login` (external link to login page)
- **Architecture Changes:**
  - Created single source-of-truth `navItems` config array for consistent desktop/mobile menus
  - Renamed FeatureGrid's ID from `features` to `feature-grid` (avoided duplicate IDs)
  - Added `scroll-mt-20` to FAQ and DeepFeatures sections for proper scroll targeting
  - Implemented `handleNavClick` helper to differentiate scroll targets vs. direct links
- **Result:** Clean, maintainable navbar with correct navigation targets matching user expectations

**November 9, 2025 - Cal.com Always-Available with Deterministic Scroll Guard:**
- **FIXED:** Cal.com now loads immediately on page mount (always available) without causing page jumps
- **Implementation:** Surgical scroll-blocker that intercepts Cal.com widget's initialization scrollIntoView
- **Key Feature:** Deterministic restoration after first blocked scroll attempt (not timing-based)
- **Fallback:** 5-second safety timeout ensures scroll functions are always restored
- **Behavior:** Only blocks scrollIntoView calls originating from #cal-booking-widget element
- **Result:** Footer navigation (#contact) works perfectly, Cal.com loads instantly, other scroll behavior unaffected
- **Architecture Notes:** Temporary monkey-patch of Element.prototype.scrollIntoView and window.scrollTo during Cal.com init, with proper cleanup on unmount
- **Testing:** Verified on slow connections, multiple navigation scenarios, architect-reviewed and approved
- Footer has `id="contact"` and `scroll-mt-20` for proper scroll targeting

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:** React 18+ with TypeScript, Vite, Wouter for routing, TanStack Query, shadcn/ui (built on Radix UI), and Tailwind CSS for styling.

**Design System:** Light theme, pure white background, primary brand accent color #1E2A5E, Inter font family, Apple-style spacing, custom CSS variables, and hover elevation effects. Incorporates Gen Z aesthetics with gradient effects, playful shadows, bold typography, and rounded corners.

**Component Organization:** Pages in `client/src/pages/`, reusable UI components in `client/src/components/ui/`, feature-specific components in `client/src/components/`, with path aliases.

**Routing Strategy:** Single-page application with primary Home route (`/`), 404 page, and smooth scroll navigation to section anchors.

### Backend Architecture

**Server Framework:** Express.js with TypeScript, ESM, and Vite middleware integration.

**Data Layer:** Drizzle ORM for PostgreSQL, Neon Database serverless driver, schema in `shared/schema.ts` with Drizzle-Zod validation, and in-memory storage for development.

**Session Management:** `connect-pg-simple` for PostgreSQL-backed sessions.

**Build Process:** `tsx` for development, Vite for client build, esbuild for server build.

### Data Storage Solutions

**Database:** PostgreSQL via Neon serverless, Drizzle migrations in `/migrations`, push-based schema deployment.

**Schema Design:** Users table with UUID primary keys, unique username, and password storage. Zod schemas for runtime validation.

### Authentication and Authorization

**Current State:** Basic user schema, storage methods, and session configuration.

**Future Path:** Password hashing (bcrypt), session-based authentication, JWT tokens, and role-based access control.

### System Design Choices

- **UI/UX Decisions:** Ultra-professional, premium designs with glassmorphism, layered gradients, minimalist aesthetics, and playful styling. Emphasizes consistent spacing, prominent card backgrounds, professional typography, and sophisticated hover effects.
- **Modal-Based Signup:** Tenant signup via modal for improved conversion.
- **Domain Structure:** Primary domain is `kloud.kaartx.com`. Marketplace subdomains follow the pattern `{slug}.kloud.kaartx.com` (e.g., `seviora.kloud.kaartx.com`). Email addresses use `@kloud.kaartx.com` (e.g., support@kloud.kaartx.com, official@kloud.kaartx.com).
- **Unified Navbar:** Consistent, fixed navbar with intelligent handling for homepage sections and smooth scroll navigation (`scroll-mt-20`).
- **Cal.com Integration:** Embedded, branded Cal.com booking widget for sales calls.
- **Mobile Optimization:** Full mobile responsiveness with mobile-first spacing and typography.
- **Scroll Animations:** Smooth scroll-triggered animations (fadeInUp, fadeIn, scaleIn) using Intersection Observer API.
- **Pricing Structure:** GCC-focused plans (Starter, Growth, Pro) with OMR pricing, monthly/yearly toggle, and add-on services. Default 12-day payout cycle, customizable for Growth and Pro users. API access is currently under development.

## External Dependencies

**Payment Processing:**
- **TAP Payments:** Primary gateway for GCC markets (OMR, AED, SAR) for subscription billing and payouts.
- **Stripe:** Planned for global payments.

**Shipping & Logistics:**
- **Asyad Express:** Oman-based shipping integration.

**E-commerce Integrations:**
- **Shopify:** Planned for product catalog synchronization.

**Development Tools:**
- Replit-specific plugins (cartographer, dev-banner, runtime-error-modal).

**Third-party Libraries:**
- **React Icons (react-icons/si):** Brand logos.
- **Lucide React:** UI icons.
- **date-fns:** Date manipulation.
- **embla-carousel-react:** Carousels/sliders.
- **cmdk:** Command palette functionality.
- **class-variance-authority and clsx:** Dynamic className generation.

**Analytics & Monitoring:**
- Google Analytics.
- Firebase (integration capabilities).