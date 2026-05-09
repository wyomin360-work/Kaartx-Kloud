import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignupModal from "@/components/SignupModal";

export default function Blog() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      slug: "launch-multi-vendor-marketplace-gcc",
      title: "How to launch a multi-vendor marketplace in the GCC",
      summary:
        "Building a multi-vendor marketplace in Oman, the UAE, or across the wider GCC doesn't require 18 months of development or a large engineering team. With the right infrastructure in place, you can launch faster, reduce risk, and focus on acquiring sellers and customers—not rebuilding technology from scratch.",
    },
    {
      slug: "kaartx-kloud-vs-custom-development",
      title: "How to launch your own branded eCommerce store with full control",
      summary:
        'Launching a branded eCommerce store today is easier than ever—but building one with full operational and strategic control requires clarity from day one. In this guide, we\'ll walk through what "full control" really means and how to structure your store so it scales without limitations.',
    },
    {
      slug: "marketplace-mistakes-to-avoid",
      title: "5 eCommerce mistakes founders make — and how to avoid them",
      summary:
        "Starting an eCommerce store or marketplace today is more accessible than ever. Yet many founders don't struggle because of technology—they struggle because of workflow decisions, structural gaps, and scaling mistakes made early on. In this guide, we'll break down five common mistakes and how to avoid them before they slow your growth.",
    },
    {
      slug: "how-payout-cycles-work",
      title: "How eCommerce payouts and settlements work",
      summary:
        "Money in eCommerce doesn't move in a straight line. When a customer pays, that money doesn't instantly land in your bank account—or your sellers'. Between payment gateways, commissions, refunds, holding periods, and settlement cycles, there's a financial workflow happening behind the scenes.",
    },
    {
      slug: "automated-seller-subscriptions",
      title: "From single store to full-scale marketplace expansion",
      summary:
        "Most founders start with a single brand store. It's simpler, more controlled, and easier to launch. But as the business grows, many begin thinking bigger — more categories, more sellers, more inventory, and a larger ecosystem.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenSignup={() => setSignupModalOpen(true)} />
      {/* Hero Section */}
      <section className="blog-hero-section bg-background pb-16 pt-32 sm:pb-24 sm:pt-40 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={titleAnimation.ref}
            className={`animate-on-scroll mb-8 text-center sm:mb-9 md:mb-10 ${titleAnimation.isVisible ? "visible" : ""}`}
          >
            <h1
              className="section-title mb-5 tracking-tight text-foreground"
              data-testid="text-blog-title"
            >
              Insights for modern commerce builders
            </h1>
            <p
              className="mx-auto max-w-3xl text-lg font-normal text-muted-foreground sm:text-xl"
              data-testid="text-blog-subtitle"
            >
              Practical guides, strategies, and updates to help you launch,
              manage, and grow stores and marketplaces with Kaartx Kloud.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section bg-background pb-16 sm:pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={cardsAnimation.ref}
            className="blog-posts-grid grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {posts.map((post, index) => {
              const stagger = [
                "",
                "stagger-1",
                "stagger-2",
                "stagger-3",
                "stagger-4",
              ];

              return (
                <Card
                  key={index}
                  data-testid={`blog-post-${index}`}
                  className={`hover-elevate animate-on-scroll group h-full overflow-visible rounded-2xl border border-border bg-white transition-all duration-300 ${stagger[index]} ${cardsAnimation.isVisible ? "visible" : ""}`}
                  style={{ boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="relative flex h-full min-h-[320px] flex-col justify-between p-8">
                    <div>
                      <h3 className="mb-4 line-clamp-3 min-h-[5.25rem] text-xl font-bold leading-snug tracking-tight text-foreground">
                        {post.title}
                      </h3>

                      <p className="mb-6 line-clamp-3 min-h-[4.5rem] leading-relaxed text-muted-foreground">
                        {post.summary}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      data-testid={`link-read-article-${index}`}
                    >
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
      <SignupModal open={signupModalOpen} onOpenChange={setSignupModalOpen} />
    </div>
  );
}
