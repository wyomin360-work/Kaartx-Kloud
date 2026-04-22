import { Target, BookOpen, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const roadmapAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  const sections = [
    {
      icon: Target,
      title: "Our Mission",
      content:
        "Our mission is to empower founders building modern online stores and marketplaces with a platform that's fast, reliable, and built for scale. We simplify multi-vendor e-commerce by providing the technology, workflows, and operational foundation businesses need to succeed—from single-brand stores to full marketplaces. By combining speed, stability, and real marketplace intelligence, we help entrepreneurs focus on growth instead of infrastructure, enabling them to operate with clarity and scale with confidence.",
      accentColor: "bg-primary",
    },
    {
      icon: BookOpen,
      title: "Our Story",
      content:
        "Kaartx began as an internal platform built by the founder to run his own business as a multi-vendor marketplace in the GCC. While operating it, we saw a clear problem—founders wanted to launch reliable online stores or marketplaces but lacked a complete, scalable system they could trust. So we opened up what we built. That internal platform evolved into Kaartx Kloud, shaped by real operational experience and a deep understanding of how commerce works in the GCC.",
      accentColor: "bg-primary",
    },
    {
      icon: Eye,
      title: "Our Vision",
      content:
        "We believe the future of e-commerce is flexible and scalable. Businesses should be able to start with a single online store and grow into a marketplace when the time is right. Kaartx Kloud exists to support founders and brands at every stage—helping them launch, operate, and scale with confidence. Starting from the GCC and expanding globally, we aim to build a commerce ecosystem where technology removes friction and adapts to each business's needs over time.",
      accentColor: "bg-primary",
    },
  ];

  const roadmapItems = [
    "Deeper logistics and delivery integrations",
    "Enhanced payout automation and financial flows",
    "Advanced analytics for founders and operators",
    "Seller & operations tools with automation",
    "Improved subscription and billing capabilities",
    "Stronger GCC commerce integrations framework",
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-background py-12 sm:py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mb-16 text-center sm:mb-20 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
            data-testid="text-about-label"
          >
            About Us
          </p>
          <h2
            className="section-title mb-6 text-foreground"
            data-testid="text-about-title"
          >
            About Kaartx Kloud
          </h2>
          <p
            className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            data-testid="text-about-intro"
          >
            A full-stack commerce infrastructure designed to help businesses
            launch stores, scale operations, and evolve into multi-vendor
            marketplaces with speed and confidence.
          </p>
        </div>

        {/* Our Delivery Model Section */}
        <div className="mx-auto mb-20 mt-6 max-w-[740px] px-4 sm:px-5 md:px-6">
          <h3
            className="mb-5 text-center text-xl font-bold text-foreground"
            data-testid="text-delivery-model-title"
          >
            Our Delivery Model
          </h3>
          <div className="space-y-5 text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
            <p data-testid="text-delivery-model-p1">
              Kaartx Kloud is a guided commerce infrastructure, configured
              around each founder's business model—whether you're launching a
              single-brand store or building a multi-vendor marketplace. Every
              setup is tailored to your seller structure, payout logic,
              logistics flow, and regional requirements.
            </p>
            <p data-testid="text-delivery-model-p2">
              The platform is deeply optimized for the GCC region, with core
              operational, payment, and logistics workflows already in place. At
              the same time, Kaartx Kloud is designed to adapt for other regions
              based on local regulations, currencies, and business needs.
            </p>
            <p data-testid="text-delivery-model-p3">
              Instead of instant, unconfigured self-serve activation, every
              deployment is carefully reviewed and set up by our team—whether
              it's a store or a marketplace—to ensure stability, regulatory
              compliance, and long-term scalability before&nbsp;launch.
            </p>
          </div>
        </div>

        <div
          ref={cardsAnimation.ref}
          className={`animate-on-scroll mb-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border/50 lg:grid-cols-3 ${cardsAnimation.isVisible ? "visible" : ""}`}
        >
          {sections.map((section, index) => {
            const stagger = ["", "stagger-1", "stagger-2"];

            return (
              <div
                key={index}
                className={`bg-background p-8 sm:p-10 ${stagger[index]}`}
                data-testid={`about-card-${index}`}
              >
                <h3
                  className="mb-5 text-xl font-bold text-foreground"
                  data-testid={`text-about-${section.title.toLowerCase().replace(" ", "-")}-heading`}
                >
                  {section.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.8] text-muted-foreground"
                  data-testid={`text-about-${section.title.toLowerCase().replace(" ", "-")}`}
                >
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>

        <div
          ref={roadmapAnimation.ref}
          className={`animate-on-scroll mx-auto max-w-4xl ${roadmapAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              What's Next
            </p>
            <h3
              className="mb-5 text-2xl font-bold text-foreground sm:text-3xl"
              data-testid="text-about-roadmap-heading"
            >
              The Road Ahead
            </h3>
            <p
              className="mx-auto max-w-2xl leading-relaxed text-muted-foreground"
              data-testid="text-about-roadmap-intro"
            >
              Kaartx Kloud is evolving rapidly, with a strong focus on improving
              platform performance, seller efficiency, and operational
              automation.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="hover-elevate flex items-center gap-4 rounded-md border border-border/30 bg-card/30 p-6 transition-colors"
                data-testid={`text-about-roadmap-item-${index}`}
              >
                <div className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-[15px] font-medium leading-relaxed text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <p
              className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              data-testid="text-about-closing"
            >
              This is just the beginning. We help founders build scalable
              commerce platforms that thrive globally—starting with deep
              expertise in the GCC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
