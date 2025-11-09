## Overview

Kaartx Kloud is a premium SaaS platform for launching and managing multi-vendor marketplaces, specifically tailored for GCC markets. It provides comprehensive seller lifecycle management, including onboarding, subscription billing, product listing, order fulfillment, and automated payout cycles. The platform empowers businesses to create branded marketplaces with minimal development, adhering to a minimalist design with a clean white background, a dark navy accent (#1E2A5E), and Gen Z modernization elements like gradients, playful shadows, bold typography, and rounded corners. The brand name has been updated from "Kaartx Cloud" to "Kaartx Kloud" for consistency.

## Recent Changes

**November 9, 2025 - Cal.com Scroll Jumping Fix:**
- **FIXED:** Page no longer jumps to booking section when scrolling to footer (user confirmed)
- Cal.com now ONLY loads when hash is exactly #booking (no Intersection Observer)
- Removed all scroll-based Cal.com loading - prevents interference with navigation
- Users can scroll through entire page without triggering Cal.com
- Cal.com loads only when clicking "Book a Call" link or navigating to /#booking
- Added hashchange listener to BookingSection for proper Cal.com initialization
- Footer has `id="contact"` and `scroll-mt-20` for proper scroll targeting
- User-tested and verified - no jumping when scrolling to footer

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