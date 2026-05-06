import { useRef } from "react";
import {
  Building2,
  Rocket,
  ShoppingBag,
  Users,
  Building,
  Target,
  Layers,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import Security from "./Security";

const USE_CASES = {
  enterprises: {
    title: "Enterprise",
    icon: Building,
    description:
      "Enterprise-grade commerce infrastructure with full customization.",
    benefits: [
      "Dedicated infrastructure (on request)",
      "Custom integrations & workflows",
      "Priority support & SLA",
      "Advanced analytics & reporting",
      "Custom API & webhooks",
      "Compliance & security certifications",
      "Dedicated account manager",
      "Custom development services",
    ],
    color: "text-emerald-600",
  },
  brands: {
    title: "Brands",
    icon: Building2,
    description:
      "Run your brand's store or marketplace with full control from day one.",
    benefits: [
      "Full white-label control",
      "Maintain brand standards with approval workflows",
      "Earn commissions from partner sellers",
      "Own your customer relationships",
      "Custom domain & branding",
      "Advanced inventory management",
    ],
    color: "text-indigo-600",
  },
  startups: {
    title: "Startups",
    icon: Rocket,
    description:
      "Turn your concept into a live business without massive upfront development costs.",
    benefits: [
      "Launch in days, not months",
      "Subscription-based pricing",
      "Grow without re-platforming",
      "GCC payment integrations ready",
      "Built-in analytics dashboard",
      "Scalable infrastructure",
    ],
    color: "text-cyan-600",
  },
  retail: {
    title: "Retailers",
    icon: ShoppingBag,
    description:
      "Expand your retail business with a flexible, headless commerce platform.",
    benefits: [
      "Expand product range without inventory",
      "Automated payments & settlements",
      "Tap & Asyad integrations included",
      "Mobile-ready storefronts",
      "Multi-channel selling",
      "Real-time order tracking",
    ],
    color: "text-purple-600",
  },
  agencies: {
    title: "Agencies",
    icon: Users,
    description:
      "Build and manage commerce platforms for multiple clients with ease.",
    benefits: [
      "Multi-tenant architecture",
      "White-label for each client",
      "Revenue sharing & commission-ready architecture",
      "Centralized client management",
      "Client performance reports",
      "Dedicated support team",
    ],
    color: "text-rose-600",
  },
  marketplaces: {
    title: "Marketplaces",
    icon: Layers,
    description:
      "Create multi-vendor marketplaces with seller onboarding and commission controls.",
    benefits: [
      "Built-in seller onboarding",
      "Custom commission rules",
      "Marketplace storefront management",
      "Seller performance analytics",
      "Product syndication across vendors",
      "Scalable multi-seller workflows",
    ],
    color: "text-fuchsia-600",
  },
};

export default function UseCases() {
  const sectionRef = useRef<HTMLElement>(null);
  const animation = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-background via-blue-50/40 to-purple-50/40 pb-16 pt-12">
      {/* Super Noticeable Background Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-[10%] top-0 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-400/20 blur-[100px]" style={{ animationDuration: '8s' }} />
        <div className="absolute -right-[10%] top-[20%] h-[600px] w-[600px] animate-pulse rounded-full bg-purple-400/20 blur-[100px]" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute bottom-[-10%] left-[30%] h-[700px] w-[700px] animate-pulse rounded-full bg-cyan-400/20 blur-[100px]" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 w-full">
        
        {/* Centered Header */}
        <div
          ref={animation.ref}
          className={`animate-on-scroll mx-auto mb-10 flex max-w-2xl flex-col items-center text-center transition-opacity duration-1000 ${animation.isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/50 px-2.5 py-1 shadow-sm">
            <Target className="h-3 w-3 text-muted-foreground" />
            <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground sm:text-[12px]">
              Use Cases
            </span>
          </div>
          <h2 className="mb-4 font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Built for <span className="gradient-text">every business</span>
          </h2>
          <p className="text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
            Whether you're a startup testing traction or an enterprise scaling
            operations, the infrastructure adapts to your specific requirements.
          </p>
        </div>

        {/* Dynamic Bento Grid - Use Cases */}
        <div className="grid grid-cols-1 items-start gap-5 px-14 sm:gap-5 sm:px-20 md:grid-cols-2 lg:grid-cols-2 lg:px-28 mb-6">
          {Object.entries(USE_CASES).map(([key, useCase]) => {
            const Icon = useCase.icon;
            const spanClass = "col-span-1";
            const listCols = "sm:grid-cols-1 md:grid-cols-2";

            return (
              <div 
                key={key} 
                className={`group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/60 hover:shadow-xl sm:p-8 md:p-7 lg:p-8 ${spanClass}`}
              >
                <div className="mb-4 flex items-center gap-3.5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-border/50 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                    <Icon className={`h-7 w-7 ${useCase.color}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                    {useCase.title}
                  </h3>
                </div>
                
                <p className="mb-6 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                  {useCase.description}
                </p>

                <div className="mt-auto rounded-xl bg-slate-50/50 p-5 ring-1 ring-border/50">
                  <h4 className="mb-3 text-[13px] font-bold uppercase tracking-wider text-slate-400">
                    Key Advantages
                  </h4>
                  <ul className={`grid grid-cols-1 gap-x-4 gap-y-2.5 ${listCols}`}>
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-blue-100/80">
                          <div className="h-1 w-1 rounded-full bg-blue-600" />
                        </div>
                        <span className="text-base font-medium leading-snug text-slate-600 sm:text-lg">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
