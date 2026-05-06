import { useState } from "react";
import {
  ShoppingCart,
  FileText,
  Truck,
  Wallet,
  Tag,
  BarChart3,
  Check,
  ChevronDown,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import logoImage from "@assets/kloud_plain_blue_1770616738294.png";

export default function DeepFeatures() {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      icon: ShoppingCart,
      title: "Seller Subscriptions",
      description:
        "Flexible subscription plans with automated billing via TAP. Track active, expired, and suspended sellers with full payment history.",
      features: [
        "Monthly/yearly billing cycles",
        "Auto-renewal with saved cards",
        "Suspend/reactivate sellers",
        "Payment retry logic",
      ],
      checkGradient: "text-cyan-600",
    },
    {
      icon: FileText,
      title: "Product Management",
      description:
        "End-to-end listing workflow with variants, SKUs, and bulk uploads—designed to maintain consistency, accuracy, and operational efficiency at scale.",
      features: [
        "One / two-variant support",
        "Auto SKU generation",
        "Image quality standards",
        "Bulk editing tools",
      ],
      checkGradient: "text-purple-600",
    },
    {
      icon: Truck,
      title: "Order Management",
      description:
        "A complete system to manage every order from purchase to delivery, with clear controls that improve accuracy, visibility, and smooth operations.",
      features: [
        "Centralized dashboard for order tracking",
        "Integrated refund & return handling",
        "Partial/full refunds via payment gateway",
        "Order data linked with invoice & shipping",
      ],
      checkGradient: "text-cyan-600",
    },
    {
      icon: Wallet,
      title: "Payments & Payouts",
      description:
        "Automated payout cycle with full visibility for sellers, connected directly to TAP Payments for seamless and secure operations.",
      features: [
        "Configurable payout cycles",
        "Auto ledger updates",
        "View payout history & balances",
        "Manual payout control",
      ],
      checkGradient: "text-purple-600",
    },
    {
      icon: Tag,
      title: "Brand & Category Control",
      description:
        "Approval workflows that maintain marketplace quality, with structured controls for managing brands, categories, and seller access efficiently.",
      features: [
        "Support for all brand types",
        "Manual approval for new brands",
        "File upload for verification",
        "Category-based permissions",
      ],
      checkGradient: "text-cyan-600",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Real-time performance analytics for sellers and marketplaces, delivering accurate insights on sales, revenue, and operational metrics.",
      features: [
        "Sales, orders & revenue tracking",
        "Seller-wise performance reports",
        "Product insights & trends",
        "Refund & cancellation summaries",
      ],
      checkGradient: "text-purple-600",
    },
  ];

  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section id="features" className="relative scroll-mt-20 overflow-hidden bg-background pb-16 pt-10">
      {/* Subtle background gradient to make the section pop */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.1), transparent 50%), radial-gradient(ellipse 50% 50% at 100% 50%, rgba(56, 189, 248, 0.05), transparent 50%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(168, 85, 247, 0.05), transparent 50%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[74rem]">
        {/* Header */}
        <div
          ref={titleAnimation.ref}
          className={`mb-8 flex flex-col items-start justify-between gap-6 pt-4 transition-opacity duration-700 md:flex-row md:gap-16 ${titleAnimation.isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {/* Left Column */}
          <div className="w-full md:w-[55%]">
            <h2
              className="text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-5xl"
              data-testid="text-deep-features-title"
            >
              Powerful tools to manage
              <br className="hidden md:block" />
              <span className="gradient-text">your entire ecosystem</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex w-full flex-col items-start pt-1 md:w-[40%]">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-2.5 py-1 shadow-sm">
              <Wrench className="h-[12px] w-[12px] text-muted-foreground" />
              <span className="text-[10px] font-semibold uppercase tracking-wide text-foreground sm:text-[11px]">
                Core Platform
              </span>
            </div>
            <p
              className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base"
              data-testid="text-deep-features-subtitle"
            >
              From subscriptions to shipping automation — everything you need,
              built-in.
            </p>
          </div>
        </div>

        <div
          ref={cardsAnimation.ref}
          className={`grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-6 transition-all duration-1000 ${cardsAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          data-testid="deep-features-container"
        >
          {/* Row 1 */}
          <FeatureCard feature={features[0]} className="md:col-span-3" />
          <FeatureCard feature={features[1]} className="md:col-span-3" />

          {/* Row 2 */}
          <FeatureCard feature={features[2]} className="md:col-span-2" />

          <div className="group relative flex min-h-[240px] flex-col items-center justify-center overflow-hidden rounded-[2rem] p-8 shadow-xl shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30 md:col-span-2 lg:min-h-[280px]">
            {/* Superior Animated Gradient Background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 opacity-95"
              style={{
                backgroundSize: '200% 200%',
                animation: 'deep-feature-gradient 6s ease infinite'
              }}
            />

            {/* Vibrant Glowing Orbs */}
            <div className="absolute -left-1/4 -top-1/4 h-3/4 w-3/4 animate-pulse rounded-full bg-cyan-400/40 blur-[80px]" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-1/4 -right-1/4 h-3/4 w-3/4 animate-pulse rounded-full bg-fuchsia-400/40 blur-[80px]" style={{ animationDuration: '6s', animationDelay: '1s' }} />

            <style>{`
              @keyframes deep-feature-gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>

            <div className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <img
                src={logoImage}
                alt="Kloud Logo"
                className="h-10 w-auto object-contain drop-shadow-md brightness-0 invert"
              />
            </div>
          </div>

          <FeatureCard feature={features[3]} className="md:col-span-2" />

          {/* Row 3 */}
          <FeatureCard feature={features[4]} className="md:col-span-3" />
          <FeatureCard feature={features[5]} className="md:col-span-3" />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, className }: { feature: any; className?: string }) {
  const Icon = feature.icon;
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-[2rem] border border-blue-100/60 bg-white p-7 transition-all duration-300 hover:border-blue-400/60 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] sm:p-8",
        className
      )}
    >
      <div>
        <div className="mb-5 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50/80 text-blue-600 shadow-sm ring-1 ring-blue-100/50">
              <Icon className="h-6 w-6" strokeWidth={2} />
            </div>
            <h3 className="pr-2 text-xl font-bold tracking-tight text-slate-800 md:text-[1.45rem] md:leading-tight">
              {feature.title}
            </h3>
          </div>
          <ArrowUpRight className="h-6 w-6 shrink-0 text-blue-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
        <p className="text-[14px] font-medium leading-relaxed text-slate-500 sm:text-[15px]">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
