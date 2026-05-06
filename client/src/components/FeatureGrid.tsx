import {
  Users,
  ListChecks,
  CreditCard,
  Settings,
  Package,
  Truck,
  BarChart3,
  MessageSquare,
  Shield,
  Globe2,
  Wallet,
  Percent,
  Tags,
  Layers,
  Zap,
  Store,
  Users2,
  PackageSearch,
  Receipt,
  CalendarDays,
  PieChart,
  LayoutDashboard,
  Smartphone,
  TrendingUp,
  BellRing,
  Lock,
  Mail,
  Share2,
  Search,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FEATURE_GRADIENTS = [
  "gradient-bg-purple",
  "gradient-bg-blue",
  "gradient-bg-purple",
  "gradient-bg-blue",
] as const;

function BentoMiniCell({
  icon: Icon,
  label,
  className,
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "group flex min-h-[4.5rem] flex-col items-center justify-center gap-1.5 bg-white/90 px-2 py-3 text-center transition-all duration-200",
        "border border-transparent hover:z-[1] hover:border-slate-500/45 hover:bg-slate-50 hover:shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      <Icon
        className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-slate-700"
        strokeWidth={1.75}
      />
      <span className="max-w-[5.5rem] text-[10px] font-medium leading-tight text-slate-500 transition-colors group-hover:text-slate-800 sm:max-w-none sm:text-[11px]">
        {label}
      </span>
    </button>
  );
}

function BentoFeatureBlock({
  icon: Icon,
  title,
  description,
  gradientClass,
  index,
  visible,
  stagger,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientClass: string;
  index: number;
  visible: boolean;
  stagger: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[9rem] flex-col justify-between rounded-xl border border-white/30 p-4 shadow-sm transition-all duration-300 sm:min-h-[10.5rem] sm:p-5",
        gradientClass,
        "animate-on-scroll",
        stagger,
        visible ? "visible" : "",
      )}
      data-testid={`card-feature-${index}`}
    >
      <div className="shadow-playful flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 sm:h-14 sm:w-14">
        <Icon className="h-5 w-5 text-primary sm:h-7 sm:w-7" />
      </div>
      <div className="mt-3">
        <h3 className="mb-1.5 text-base font-bold leading-snug text-foreground sm:text-xl">
          {title}
        </h3>
        <p className="text-xs font-medium leading-relaxed text-muted-foreground sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeatureGrid() {
  const features = [
    {
      icon: Users,
      title: "Store & Seller Control",
      description:
        "Manage your store or onboard sellers with built-in approvals, subscriptions, and performance tracking.",
    },
    {
      icon: ListChecks,
      title: "Product Listing Flow",
      description:
        "Streamlined product listing system with variants, SKUs, and bulk uploads — ready for any category.",
    },
    {
      icon: CreditCard,
      title: "Auto Payouts",
      description:
        "Built-in payout engine with customizable cycles and full TAP integration.",
    },
    {
      icon: Settings,
      title: "Smart Workflows",
      description:
        "Automate orders, returns, and tracking with real-time updates and smart notifications.",
    },
  ];

  const miniSurround: { icon: LucideIcon; label: string }[] = [
    { icon: Store, label: "Catalog" },
    { icon: Tags, label: "Variants" },
    { icon: Truck, label: "Shipping" },
    { icon: BarChart3, label: "Analytics" },
    { icon: MessageSquare, label: "Messages" },
    { icon: Globe2, label: "Regions" },
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Smartphone, label: "Mobile" },
    { icon: Shield, label: "Compliance" },
    { icon: Wallet, label: "Wallet" },
    { icon: Percent, label: "Promotions" },
    { icon: Layers, label: "Bundles" },
    { icon: Zap, label: "Automation" },
    { icon: Users2, label: "Teams" },
    { icon: PackageSearch, label: "Fulfillment" },
    { icon: Receipt, label: "Invoices" },
    { icon: CalendarDays, label: "Scheduling" },
    { icon: PieChart, label: "Insights" },
    { icon: TrendingUp, label: "Growth" },
    { icon: BellRing, label: "Alerts" },
    { icon: Lock, label: "Security" },
    { icon: Mail, label: "Emails" },
    { icon: Share2, label: "Social" },
    { icon: Search, label: "SEO" },
  ];

  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const visible = cardsAnimation.isVisible;
  const stagger = ["", "stagger-1", "stagger-2", "stagger-3"];

  return (
    <section id="feature-grid" className="relative overflow-hidden sm:pb-8">
      <div className="pointer-events-none absolute inset-0 opacity-60 mask-radial-fade">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl border-x border-border/10 px-4 sm:px-5 md:px-6">
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mb-12 flex flex-col items-start justify-between gap-8 pt-8 sm:mb-16 md:flex-row md:gap-16 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="w-full md:w-[55%]">
            <h2
              className="text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-5xl"
              data-testid="text-features-title"
            >
              Everything to run your
              <br className="hidden md:block" />
              <span className="gradient-text"> commerce business</span>
            </h2>
          </div>

          <div className="flex w-full flex-col items-start pt-2 md:w-[40%]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 shadow-sm">
              <Package className="h-[14px] w-[14px] text-muted-foreground" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground sm:text-xs">
                Key features
              </span>
            </div>
            <p
              className="text-base font-medium leading-relaxed text-muted-foreground sm:text-sm md:text-base"
              data-testid="text-features-subtitle"
            >
              From product management to payouts, all the tools you need in one
              powerful platform to scale your entire marketplace flawlessly.
            </p>
          </div>
        </div>

        <div ref={cardsAnimation.ref}>
          {/* Mobile: featured cards + dense clickable mini grid */}
          <div
            className={`mx-auto max-w-lg space-y-5 md:hidden ${visible ? "visible" : ""}`}
          >
          <div className="feature-carousel scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "hover-elevate w-[82vw] max-w-sm flex-shrink-0 snap-center rounded-2xl border-2 p-4 transition-all duration-300",
                    FEATURE_GRADIENTS[index],
                    "animate-on-scroll",
                    stagger[index],
                  )}
                  data-testid={`card-feature-${index}`}
                >
                  <div className="shadow-playful mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="rounded-2xl bg-slate-200/50 p-px shadow-inner">
            <div className="grid grid-cols-4 gap-px rounded-2xl bg-slate-200/60">
              {miniSurround.map((cell, i) => (
                <BentoMiniCell key={i} icon={cell.icon} label={cell.label} />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: ClickUp-style bento — thin dividers, hover ring on minis, 2×2 center */}
        <div
          className={cn(
            "animate-on-scroll mx-auto hidden max-w-5xl md:block",
            visible ? "visible" : "",
          )}
          aria-label="Feature map"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-200/45 p-px shadow-sm">
            <div className="flex flex-col gap-px">
              <div className="grid grid-cols-8 gap-px bg-slate-200/60">
                {miniSurround.slice(0, 8).map((cell, i) => (
                  <BentoMiniCell key={`r1-${i}`} icon={cell.icon} label={cell.label} />
                ))}
              </div>
              <div className="grid grid-cols-8 gap-px bg-slate-200/60">
                {miniSurround.slice(8, 10).map((cell, i) => (
                  <BentoMiniCell key={`r2-l-${i}`} icon={cell.icon} label={cell.label} />
                ))}
                <div className="col-span-2 bg-white/30 p-px">
                  <BentoFeatureBlock
                    {...features[0]}
                    icon={features[0].icon}
                    gradientClass={FEATURE_GRADIENTS[0]}
                    index={0}
                    visible={visible}
                    stagger={stagger[0]}
                  />
                </div>
                <div className="col-span-2 bg-white/30 p-px">
                  <BentoFeatureBlock
                    {...features[1]}
                    icon={features[1].icon}
                    gradientClass={FEATURE_GRADIENTS[1]}
                    index={1}
                    visible={visible}
                    stagger={stagger[1]}
                  />
                </div>
                {miniSurround.slice(10, 12).map((cell, i) => (
                  <BentoMiniCell key={`r2-r-${i}`} icon={cell.icon} label={cell.label} />
                ))}
              </div>
              <div className="grid grid-cols-8 gap-px bg-slate-200/60">
                {miniSurround.slice(12, 14).map((cell, i) => (
                  <BentoMiniCell key={`r3-l-${i}`} icon={cell.icon} label={cell.label} />
                ))}
                <div className="col-span-2 bg-white/30 p-px">
                  <BentoFeatureBlock
                    {...features[2]}
                    icon={features[2].icon}
                    gradientClass={FEATURE_GRADIENTS[2]}
                    index={2}
                    visible={visible}
                    stagger={stagger[2]}
                  />
                </div>
                <div className="col-span-2 bg-white/30 p-px">
                  <BentoFeatureBlock
                    {...features[3]}
                    icon={features[3].icon}
                    gradientClass={FEATURE_GRADIENTS[3]}
                    index={3}
                    visible={visible}
                    stagger={stagger[3]}
                  />
                </div>
                {miniSurround.slice(14, 16).map((cell, i) => (
                  <BentoMiniCell key={`r3-r-${i}`} icon={cell.icon} label={cell.label} />
                ))}
              </div>
              <div className="grid grid-cols-8 gap-px bg-slate-200/60">
                {miniSurround.slice(16, 24).map((cell, i) => (
                  <BentoMiniCell key={`r4-${i}`} icon={cell.icon} label={cell.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
