import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignupModal from "@/components/SignupModal";

export default function SellerSubscriptions() {
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "auto";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar onOpenSignup={() => setSignupModalOpen(true)} />
      <div
        className="mx-auto px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 md:pb-16 md:pt-28 lg:px-8"
        style={{ maxWidth: "700px" }}
      >
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          data-testid="link-back-to-blog"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </Link>

        <article>
          <h1
            className="section-title mb-5 tracking-tight text-foreground"
            data-testid="text-article-title"
          >
            From single store to full-scale marketplace expansion
          </h1>

          <p
            className="mb-6 text-sm text-muted-foreground"
            data-testid="text-article-meta"
          >
            Strategy · 8 min read
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              Most founders start with a single brand store. It's simpler, more
              controlled, and easier to launch. But as the business grows, many
              begin thinking bigger — more categories, more sellers, more
              inventory, and a larger ecosystem.
            </p>
            <p className="mb-6 leading-relaxed text-foreground">
              The real question isn't whether to expand. It's whether your
              infrastructure allows you to expand without rebuilding everything.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              The single-store phase: control and focus
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              A branded eCommerce store gives you:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Full control over products and pricing</li>
              <li>Clean operational structure</li>
              <li>Direct customer ownership</li>
              <li>Simplified payout and revenue flow</li>
              <li>Clear brand positioning</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              This phase is about validating demand, optimising operations, and
              building traction. But growth eventually creates friction.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              The expansion pressure most brands feel
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              As traffic increases and categories expand, founders start facing
              questions like:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Should we allow third-party sellers?</li>
              <li>
                Should we increase product variety without owning inventory?
              </li>
              <li>Can we scale without hiring a large operations team?</li>
              <li>Are we rebuilding systems every time we grow?</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              This is where many brands hit technical and operational limits.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              The wrong way to expand
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Many founders try to convert a brand store into a marketplace by:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Adding manual seller onboarding</li>
              <li>Managing payouts through spreadsheets</li>
              <li>Creating separate dashboards externally</li>
              <li>Using plugins that don't scale</li>
              <li>Rebuilding backend systems from scratch</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              This creates complexity instead of growth. Expansion should
              simplify your system — not break it.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              The right way: expansion-ready architecture
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              If your platform is structured correctly from day one, expansion
              becomes a configuration change — not a rebuild.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              Expansion-ready systems include:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Built-in seller onboarding workflows</li>
              <li>Commission logic already structured</li>
              <li>Automated payout and settlement systems</li>
              <li>Multi-role admin controls</li>
              <li>Scalable product and catalog architecture</li>
              <li>Flexible subscription models</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              This allows you to:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Start as a single brand</li>
              <li>Add selected vendors later</li>
              <li>Convert fully into a multi-vendor marketplace</li>
              <li>Launch new verticals under the same infrastructure</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              Without rebuilding the core.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Store vs Marketplace: it's a spectrum, not a switch
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              It's important to understand that expansion doesn't have to be
              binary.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              You can operate in hybrid modes:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Brand-only model</li>
              <li>Brand + selected partner sellers</li>
              <li>Closed marketplace</li>
              <li>Open multi-vendor marketplace</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              The infrastructure should support all of them — without technical
              chaos.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Why rebuilding during growth is expensive
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Rebuilding systems during expansion leads to:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Downtime</li>
              <li>Data migration risks</li>
              <li>Payment disruptions</li>
              <li>Seller confusion</li>
              <li>Increased development cost</li>
              <li>Delayed scaling</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              Growth should compound momentum — not reset it.
            </p>
          </div>

          <div className="mb-16 mt-12">
            <p className="mb-4 italic leading-relaxed text-foreground">
              Here's how Kaartx Kloud supports seamless expansion from brand
              store to marketplace:
            </p>
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Start focused. Scale without rebuilding.
            </h3>
            <p className="mb-6 leading-relaxed text-foreground">
              Kaartx Kloud is designed to support both single-brand eCommerce
              stores and full-scale multi-vendor marketplaces within the same
              architecture. Whether you're launching your first store or
              expanding into a platform ecosystem, the infrastructure is already
              built to grow with you.
            </p>
            <div className="mt-6">
              <Button
                size="lg"
                className="h-[52px] px-8 text-lg font-semibold"
                data-testid="button-get-started"
                onClick={() => setSignupModalOpen(true)}
              >
                Get Started with Kaartx Kloud
              </Button>
            </div>
          </div>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            data-testid="link-back-to-blog-bottom"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
        </article>
      </div>
      <Footer />
      <SignupModal open={signupModalOpen} onOpenChange={setSignupModalOpen} />
    </div>
  );
}
