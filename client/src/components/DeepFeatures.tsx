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
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    <section id="features" className="scroll-mt-20 bg-background pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Modern Two-Column Header */}
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mb-16 flex flex-col items-start justify-between gap-8 pt-8 md:flex-row md:gap-16 ${titleAnimation.isVisible ? "visible" : ""}`}
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
          <div className="flex w-full flex-col items-start pt-2 md:w-[40%]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 shadow-sm">
              <Wrench className="h-[14px] w-[14px] text-muted-foreground" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground sm:text-xs">
                Core Platform
              </span>
            </div>
            <p
              className="text-base font-medium leading-relaxed text-muted-foreground sm:text-lg"
              data-testid="text-deep-features-subtitle"
            >
              From subscriptions to shipping automation — everything you need,
              built-in.
            </p>
          </div>
        </div>

        <div
          ref={cardsAnimation.ref}
          className="relative flex flex-col"
          data-expanded={isExpanded}
          data-testid="deep-features-container"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isFirstCard = index === 0;

            return (
              <Card
                key={index}
                data-testid={`deep-feature-${index}`}
                // IMPORTANT: Use 'bg-white' or 'bg-background' (Solid color)
                // Added a shadow that increases as cards stack to give depth
                className="group sticky mx-auto w-full max-w-5xl overflow-hidden rounded-[2.5rem] border-[1.5px] border-border bg-background shadow-[0_-5px_25px_-5px_rgba(0,0,0,0.07)] transition-all duration-500"
                style={{
                  // 100px is the initial gap from top, 24px is the visible "tab" of the previous card
                  top: `calc(100px + ${index * 24}px)`,
                  // Increasing margin bottom ensures the container has enough height to scroll through all cards
                  marginBottom: index === features.length - 1 ? "0" : "100px",
                }}
              >
                <div className="flex min-h-[450px] flex-col md:flex-row">
                  {/* Left Side */}
                  <div className="flex w-full flex-col justify-center bg-background p-8 sm:p-12 md:w-[55%] lg:p-16">
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5 shadow-sm">
                      <Icon
                        className="h-8 w-8 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {feature.title}
                    </h3>

                    <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {/* Right Side */}
                  <div className="flex w-full flex-col justify-center border-t border-border/50 bg-slate-700 p-8 sm:p-12 md:w-[45%] md:border-l md:border-t-0 lg:p-16">
                    <ul className="space-y-6">
                      {feature.features.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center text-base font-medium text-slate-300 sm:text-lg"
                        >
                          <div className="mr-4 flex-shrink-0 rounded-full border border-slate-700/50 bg-slate-900 p-1.5 shadow-sm">
                            <Check
                              className={`h-4 w-4 ${feature.checkGradient}`}
                              strokeWidth={3}
                            />
                          </div>
                          <span className="leading-snug text-slate-100">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
