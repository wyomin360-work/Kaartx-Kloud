import { useState, useEffect, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Rocket,
  ShoppingBag,
  Users,
  Building,
  Target,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const USE_CASES = {
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
    ],
    color: "text-rose-600",
  },
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
    ],
    color: "text-emerald-600",
  },
};

export default function UseCases() {
  const useCaseKeys = Object.keys(USE_CASES);
  const [activeTab, setActiveTab] = useState(useCaseKeys[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Determine if the center of the section is near the center of the screen
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;

      // Stop if section center is within 150px of viewport center
      const threshold = 150;
      const centered = Math.abs(sectionCenter - viewportCenter) < threshold;

      setIsCentered(centered);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Condition: ONLY rotate if NOT hovered AND NOT centered
    if (isHovered || isCentered) return;

    const intervalId = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = useCaseKeys.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % useCaseKeys.length;
        return useCaseKeys[nextIndex];
      });
    }, 1000); // 1 second per tab as requested

    return () => clearInterval(intervalId);
  }, [isHovered, isCentered, useCaseKeys]);

  const animation = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section ref={sectionRef} className="bg-background pt-12">
      <div className="mx-auto max-w-7xl border-x border-border/10 px-4 sm:px-6 lg:px-8">
        <div
          ref={animation.ref}
          className={`animate-on-scroll mb-16 flex flex-col items-start justify-between gap-8 pt-8 md:flex-row md:gap-16 ${animation.isVisible ? "visible" : ""}`}
        >
          <div className="w-full md:w-[55%]">
            <h2 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-5xl">
              Built for <br className="hidden md:block" />
              <span className="gradient-text">every business model</span>
            </h2>
          </div>

          <div className="flex w-full flex-col items-start pt-2 md:w-[40%]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 shadow-sm">
              <Target className="h-[14px] w-[14px] text-muted-foreground" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground sm:text-xs">
                Use Cases
              </span>
            </div>
            <p className="text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
              Whether you're a startup testing traction or an enterprise scaling
              operations, the infrastructure adapts to your specific
              requirements.
            </p>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="mx-auto max-w-6xl"
          >
            <div className="no-scrollbar mb-8 flex justify-start overflow-x-auto pb-4 sm:mb-12 md:justify-center">
              <TabsList className="inline-flex h-14 min-w-max flex-nowrap items-center gap-2 rounded-full border border-border bg-muted/50 p-1.5 shadow-sm backdrop-blur-md sm:gap-4 md:min-w-0 md:flex-wrap">
                {Object.entries(USE_CASES).map(([key, useCase]) => {
                  const Icon = useCase.icon;
                  return (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="flex items-center gap-2.5 rounded-full border border-transparent px-5 py-2.5 transition-all duration-300 data-[state=active]:border-border/80 data-[state=active]:bg-background data-[state=active]:shadow-md"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-semibold tracking-wide">
                        {useCase.title}
                      </span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            <div className="relative min-h-[450px]">
              {Object.entries(USE_CASES).map(([key, useCase]) => (
                <TabsContent
                  key={key}
                  value={key}
                  className="absolute inset-0 mt-0 transition-all duration-500 data-[state=active]:z-10 data-[state=inactive]:-z-10 data-[state=active]:translate-y-0 data-[state=inactive]:translate-y-4 data-[state=active]:opacity-100 data-[state=inactive]:opacity-0"
                >
                  <Card className="h-full overflow-hidden rounded-[2.5rem] border-[1.5px] border-border/80 bg-background shadow-xl">
                    <div className="flex h-full flex-col md:flex-row">
                      <div className="flex w-full flex-col justify-center border-b border-border/50 bg-muted/20 p-8 sm:p-12 md:w-[45%] md:border-b-0 md:border-r lg:p-16">
                        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background shadow-sm">
                          <useCase.icon
                            className={`h-8 w-8 ${useCase.color}`}
                            strokeWidth={1.5}
                          />
                        </div>
                        <h3 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                          For {useCase.title}
                        </h3>
                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                          {useCase.description}
                        </p>
                      </div>

                      <div className="flex w-full flex-col justify-center bg-background p-8 sm:p-12 md:w-[55%] lg:p-16">
                        <h4 className="mb-8 text-xl font-bold text-foreground">
                          Key Advantages
                        </h4>
                        <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                          {useCase.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
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
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
