# Kaartx Cloud - Marketplace Platform

## Overview

Kaartx Cloud is a premium SaaS platform for launching and managing multi-vendor marketplaces. The application is designed specifically for GCC markets with built-in integrations for TAP Payments and Asyad Shipping. It provides complete seller lifecycle management including onboarding, subscription billing, product listing workflows, order fulfillment, and automated 12-day payout cycles.

The platform targets brands, startups, retailers, agencies, and enterprises looking to launch their own branded marketplaces without heavy development investment. The design follows Apple-style premium minimalism with a clean white background and navy blue (#131742) accent colors.

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
- Navy blue (#131742) as primary brand accent
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