import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Info } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { PlanSelection } from "@/components/SignupModal";

interface PricingProps {
  onOpenSignup?: (plan: PlanSelection) => void;
}

export default function Pricing({ onOpenSignup }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<"yearly" | "monthly">(
    "yearly",
  );
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const toggleAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  const openWhatsApp = () => {
    const message = "Hi%20I%20want%20to%20know%20more%20about%20Kaartx%20Kloud";
    const phone = "96898209353";
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    const url = isMobile
      ? `https://wa.me/${phone}?text=${message}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;
    window.open(url, "_blank");
  };

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const plans = [
    {
      name: "Starter",
      yearlyPrice: 290,
      monthlyPrice: 35,
      description: "Best for solo founders & small boutiques",
      features: [
        "1 store or marketplace (subdomain)",
        "Up to 200 sellers",
        "Up to 1,000 orders / month",
        "Basic analytics dashboards",
        "Basic branding (logo + colors)",
        "Standard payout cycle",
        "Email & WhatsApp support",
        "Seller subscriptions logic",
      ],
      cta: "Request Setup",
      highlighted: false,
    },
    {
      name: "Growth",
      yearlyPrice: 990,
      monthlyPrice: 115,
      description: "For agencies & fast-growing brands",
      features: [
        "Up to 3 stores or marketplaces",
        "Up to 600 sellers",
        "Up to 10,000 orders / month",
        "Advanced analytics dashboards",
        "White-label (Domain + SSL)",
        "Configurable payout cycles",
        "Priority email & WhatsApp support",
        "Bulk product + automations",
      ],
      cta: "Get Growth",
      highlighted: true,
      mostPopular: true,
    },
    {
      name: "Pro (Enterprise)",
      yearlyPrice: 2990,
      monthlyPrice: 349,
      description: "For large brands & franchises",
      features: [
        "Unlimited stores & marketplaces",
        "Unlimited sellers",
        "Unlimited orders",
        "Advanced + enterprise analytics",
        "Full white-label included",
        "Custom payout workflows",
        "Dedicated account manager",
        "Custom integrations API",
      ],
      cta: "Talk to Sales",
      highlighted: false,
    },
  ];

  const addons = [
    {
      name: "Custom domain & SSL",
      price: 10,
      availability: "Starter, Growth — Included in Pro",
    },
    {
      name: "Extra marketplace instance",
      price: 20,
      availability: "Growth, Pro",
    },
    {
      name: "Extra admin user (per seat)",
      price: 5,
      availability: "All plans",
    },
    {
      name: "Extra sellers (per 100 sellers)",
      price: 5,
      availability: "Available on request",
    },
  ];

  const upcomingAddons = [
    { name: "AI Insights Suite", price: 15, availability: "All plans" },
  ];

  return (
    <section id="pricing" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mx-auto mb-16 max-w-3xl text-center ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Whether you're testing the waters or scaling an empire, we have a
            plan designed to fit your unique needs. No hidden fees.
          </p>
        </div>

        <div
          ref={toggleAnimation.ref}
          className={`animate-on-scroll mb-16 flex items-center justify-center ${toggleAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="inline-flex items-center rounded-full border border-border bg-muted/60 p-1.5 shadow-inner backdrop-blur-md">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${billingPeriod === "monthly" ? "bg-background text-foreground shadow-sm shadow-black/5 ring-1 ring-border" : "text-muted-foreground hover:text-foreground"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${billingPeriod === "yearly" ? "bg-background text-foreground shadow-sm shadow-black/5 ring-1 ring-border" : "text-muted-foreground hover:text-foreground"}`}
            >
              Annually{" "}
              <span
                className={
                  billingPeriod === "yearly"
                    ? "ml-1 text-primary"
                    : "ml-1 opacity-70"
                }
              >
                -20%
              </span>
            </button>
          </div>
        </div>

        <div
          ref={cardsAnimation.ref}
          className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {plans.map((plan, index) => {
            const stagger = ["", "stagger-1", "stagger-2"];
            const price =
              billingPeriod === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
            const monthlyEquivalent =
              billingPeriod === "yearly"
                ? (plan.yearlyPrice / 12).toFixed(0)
                : null;
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={index}
                className={`animate-on-scroll relative flex flex-col rounded-[2rem] bg-card p-6 transition-all duration-500 sm:p-7 ${stagger[index]} ${cardsAnimation.isVisible ? "visible" : ""} ${
                  isHighlighted
                    ? "z-10 border-2 border-primary shadow-2xl ring-4 ring-primary/5 lg:-translate-y-2"
                    : "border border-border/80 shadow-lg hover:shadow-xl"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                    <span className="rounded-full bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="mb-1.5 text-xl font-bold tracking-tight text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-[13px] leading-snug text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-nowrap items-end gap-1.5">
                    <span className="text-4xl font-extrabold leading-none tracking-tighter text-foreground">
                      <span className="mr-1 align-top text-xl font-bold">
                        OMR
                      </span>
                      {price}
                    </span>
                    <span className="whitespace-nowrap pb-0.5 text-sm font-medium text-muted-foreground">
                      / {billingPeriod === "yearly" ? "year" : "mo"}
                    </span>
                  </div>
                  {monthlyEquivalent && (
                    <p className="mt-2 text-xs font-semibold tracking-tight text-primary">
                      Works out to OMR {monthlyEquivalent} / month
                    </p>
                  )}
                </div>

                <Button
                  onClick={
                    plan.name === "Starter" || plan.name === "Growth"
                      ? () =>
                          onOpenSignup?.({
                            planId: `${plan.name.split(" ")[0].toLowerCase()}-${billingPeriod}`,
                            planName: plan.name.split(" ")[0] as
                              | "Starter"
                              | "Growth",
                            billingCycle: billingPeriod,
                            price: price,
                            currency: "OMR",
                          })
                      : scrollToBooking
                  }
                  className={`w-full rounded-xl py-5 text-sm font-bold transition-all ${
                    isHighlighted
                      ? "bg-primary text-primary-foreground shadow-md hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
                      : "border border-border/50 bg-secondary/40 text-foreground hover:-translate-y-0.5 hover:bg-secondary"
                  }`}
                  variant={isHighlighted ? "default" : "secondary"}
                >
                  {plan.cta}
                </Button>

                <div className="mt-6 flex-1 border-t border-border/50 pt-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
                    What's included
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${isHighlighted ? "text-primary" : "text-foreground/40"}`}
                          strokeWidth={3}
                        />
                        <span className="text-[13px] font-medium leading-snug text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-border/80 bg-card p-8 shadow-xl sm:p-10">
          <div className="mb-8 flex items-center gap-2">
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              Optional Add-ons
            </h3>
            <Info className="h-4 w-4 text-muted-foreground" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-2xl border border-border/40 bg-secondary/30 p-5 transition-colors hover:bg-secondary/60"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground">
                    {addon.name}
                  </span>
                  <span className="text-sm font-extrabold text-primary transition-transform group-hover:scale-105">
                    OMR {addon.price}{" "}
                    <span className="text-xs font-medium text-muted-foreground">
                      /mo
                    </span>
                  </span>
                </div>
                <span className="text-xs font-medium leading-relaxed text-muted-foreground">
                  {addon.availability}
                </span>
              </div>
            ))}
          </div>

          {upcomingAddons.length > 0 && (
            <div className="mt-8 border-t border-border/50 pt-6">
              {upcomingAddons.map((addon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl border border-dashed border-border/80 bg-background/50 p-5"
                >
                  <span className="text-sm font-semibold text-muted-foreground">
                    {addon.name}
                  </span>
                  <Badge
                    variant="outline"
                    className="text-xs font-bold uppercase tracking-widest text-muted-foreground shadow-sm"
                  >
                    Coming Soon
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-sm font-medium text-muted-foreground">
            Prices exclude VAT where applicable. Secure billing via TAP
            Payments.
          </p>
          <div className="inline-flex flex-col items-center justify-center gap-2 rounded-full border border-border/30 bg-secondary/20 px-6 py-4 sm:flex-row sm:gap-3">
            <span className="text-sm font-bold text-foreground">
              Looking for a custom enterprise deployment?
            </span>
            <button
              onClick={openWhatsApp}
              className="relative text-sm font-bold text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary/30 hover:text-primary/80 hover:after:bg-primary"
            >
              Talk to sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
