## Overview

Kaartx Cloud is a premium SaaS platform designed for launching and managing multi-vendor marketplaces, specifically targeting GCC markets. It offers comprehensive seller lifecycle management, including onboarding, subscription billing, product listing, order fulfillment, and automated 12-day payout cycles. The platform aims to enable brands, startups, retailers, agencies, and enterprises to create their own branded marketplaces with minimal development effort. The design adheres to a minimalist aesthetic, featuring a clean white background and a very dark navy accent color (#1E2A5E) derived from the Kaartx logo.

## Recent Changes

**October 22, 2025 - Contact Information Relocated to Footer:**
- Moved contact information cards from BookingSection to Footer for better UX organization
- Footer now displays three contact cards above social links: Email (support@kaartx.com), Phone (+96898209353), Response Time (< 24 hours)
- BookingSection simplified to focus solely on booking: header → Cal.com widget → booking detail cards
- Contact info in footer provides centralized access to support channels without cluttering the booking flow
- All cards maintain consistent styling with icons, titles, values, and descriptive details
- Comprehensive e2e testing passed: booking section contains 0 contact cards, footer contains 3 contact cards with correct information
- Improved user flow: booking section cleaner and focused, contact information easily accessible at page bottom

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