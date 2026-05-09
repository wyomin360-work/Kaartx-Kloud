import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Rocket,
  ShoppingBag,
  Users,
  Building,
  Target,
  Layers,
} from "lucide-react";

const USE_CASES = {
  enterprises: {
    title: "Enterprise",
    icon: Building,
    description: "Enterprise-grade commerce infrastructure with full customization.",
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
    bgGradient: "from-emerald-50/80 to-teal-100/50",
  },
  brands: {
    title: "Brands",
    icon: Building2,
    description: "Run your brand's store or marketplace with full control from day one.",
    benefits: [
      "Full white-label control",
      "Maintain brand standards with approval workflows",
      "Earn commissions from partner sellers",
      "Own your customer relationships",
      "Custom domain & branding",
      "Advanced inventory management",
    ],
    color: "text-indigo-600",
    bgGradient: "from-indigo-50/80 to-blue-100/50",
  },
  startups: {
    title: "Startups",
    icon: Rocket,
    description: "Turn your concept into a live business without massive upfront development costs.",
    benefits: [
      "Launch in days, not months",
      "Subscription-based pricing",
      "Grow without re-platforming",
      "GCC payment integrations ready",
      "Built-in analytics dashboard",
      "Scalable infrastructure",
    ],
    color: "text-cyan-600",
    bgGradient: "from-cyan-50/80 to-blue-100/50",
  },
  retail: {
    title: "Retailers",
    icon: ShoppingBag,
    description: "Expand your retail business with a flexible, headless commerce platform.",
    benefits: [
      "Expand product range without inventory",
      "Automated payments & settlements",
      "Tap & Asyad integrations included",
      "Mobile-ready storefronts",
      "Multi-channel selling",
      "Real-time order tracking",
    ],
    color: "text-purple-600",
    bgGradient: "from-purple-50/80 to-fuchsia-100/50",
  },
  agencies: {
    title: "Agencies",
    icon: Users,
    description: "Build and manage commerce platforms for multiple clients with ease.",
    benefits: [
      "Multi-tenant architecture",
      "White-label for each client",
      "Revenue sharing & commission-ready architecture",
      "Centralized client management",
      "Client performance reports",
      "Dedicated support team",
    ],
    color: "text-rose-600",
    bgGradient: "from-rose-50/80 to-pink-100/50",
  },
  marketplaces: {
    title: "Marketplaces",
    icon: Layers,
    description: "Create multi-vendor marketplaces with seller onboarding and commission controls.",
    benefits: [
      "Built-in seller onboarding",
      "Custom commission rules",
      "Marketplace storefront management",
      "Seller performance analytics",
      "Product syndication across vendors",
      "Scalable multi-seller workflows",
    ],
    color: "text-fuchsia-600",
    bgGradient: "from-fuchsia-50/80 to-purple-100/50",
  },
};

const useCasesList = Object.entries(USE_CASES).map(([id, data]) => ({ id, ...data }));

export default function UseCases() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-background via-blue-50/40 to-purple-50/40 pb-15 pt-20">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[10%] top-0 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-400/20 blur-[100px]" style={{ animationDuration: '8s' }} />
        <div className="absolute -right-[10%] top-[20%] h-[600px] w-[600px] animate-pulse rounded-full bg-purple-400/20 blur-[100px]" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="mb-24 flex max-w-2xl flex-col items-center text-center mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 shadow-sm"
          >
            <Target className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
              Use Cases
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-balance text-2xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.2]"
          >
            Built for <span className="gradient-text">every business</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl"
          >
            Whether you're a startup testing traction or an enterprise scaling
            operations, the infrastructure adapts to your specific requirements.
          </motion.p>
        </div>

        {/* Stacked Cards Area */}
        <div className="relative flex flex-col gap-12 pb-[10vh]">
          {useCasesList.map((useCase, index) => {
            // Calculate sticky top offset for the stacking effect
            const topOffset = `calc(6rem + ${index * 2}rem)`;

            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                className="sticky w-full"
                style={{ top: topOffset }}
              >
                <div className="relative flex flex-col items-stretch rounded-[2.5rem] border-[1.5px] border-border/80 bg-background shadow-xl overflow-hidden min-h-[450px]">
                  
                  {/* Top Info */}
                  <div className="flex w-full flex-col items-start p-8 sm:p-12 lg:px-16 lg:py-12 border-b border-border/50 justify-center bg-muted/20">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-background border border-border shadow-sm">
                      <useCase.icon className={`h-8 w-8 ${useCase.color}`} strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {useCase.title}
                    </h3>
                    <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Bottom Benefits */}
                  <div className="w-full p-8 sm:p-12 lg:px-16 lg:py-12 flex flex-col justify-center">
                    <h4 className="mb-6 text-xl font-bold text-foreground">
                      Key Advantages
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-base font-medium text-muted-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
