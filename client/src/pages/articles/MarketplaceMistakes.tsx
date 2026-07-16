import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignupModal from "@/components/SignupModal";

export default function MarketplaceMistakes() {
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
            5 eCommerce mistakes founders make — and how to avoid them
          </h1>

          <p
            className="mb-6 text-sm text-muted-foreground"
            data-testid="text-article-meta"
          >
            Strategy · 6 min read
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              Starting an eCommerce store or marketplace today is more
              accessible than ever. Yet many founders don't struggle because of
              technology—they struggle because of workflow decisions, structural
              gaps, and scaling mistakes made early on. In this guide, we'll
              break down five common mistakes and how to avoid them before they
              slow your growth.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Mistake 1 — Building without a clear revenue model
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Many founders jump into development before answering basic
              business questions:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Are you charging commission, subscription, or both?</li>
              <li>Who handles fulfillment?</li>
              <li>What are your margins after payment and shipping fees?</li>
              <li>How will payouts be structured?</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              Without clarity here, everything else becomes reactive.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              <strong>How to avoid it:</strong>
            </p>
            <p className="mb-6 leading-relaxed text-foreground">
              Define your revenue model first. Write down your pricing
              structure, payout cycles, and fulfillment flow before touching any
              tech. The platform should support your model—not define it for
              you.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Mistake 2 — Trying to build everything from scratch
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Custom development sounds powerful. In reality, it often means:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Endless revisions</li>
              <li>Feature rebuilding</li>
              <li>Delays of 6–12 months</li>
              <li>High burn before revenue</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              Most marketplaces and brand stores need similar infrastructure:
              product workflows, payments, order management, analytics, and
              payout systems.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              <strong>How to avoid it:</strong>
            </p>
            <p className="mb-6 leading-relaxed text-foreground">
              Use a structured platform that already supports these workflows.
              Focus your time on growth, partnerships, and acquisition instead
              of engineering rebuilds.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Mistake 3 — Onboarding too many sellers too early
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Marketplace founders often believe volume equals success. So they
              rush to onboard 100+ sellers immediately.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">The result?</p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Poor product quality</li>
              <li>Inconsistent descriptions</li>
              <li>Slow fulfillment</li>
              <li>Bad customer experience</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              <strong>How to avoid it:</strong>
            </p>
            <p className="mb-6 leading-relaxed text-foreground">
              Start small. Onboard a controlled group of high-quality sellers
              first. Standardize listing rules and operational expectations
              before scaling vendor count.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Mistake 4 — Ignoring payout and cashflow structure
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Cashflow confusion kills trust—both for founders and sellers.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              Common issues include:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Unclear payout timelines</li>
              <li>No holding period for COD orders</li>
              <li>Poor visibility into seller statements</li>
              <li>Manual reconciliation errors</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              <strong>How to avoid it:</strong>
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              Set predictable payout cycles from day one. Make statements
              transparent. Automate settlement logic so sellers always know when
              funds will arrive.
            </p>
            <p className="mb-6 leading-relaxed text-foreground">
              Predictability builds trust.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Mistake 5 — Scaling based on assumptions, not data
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Once traffic starts coming in, founders often guess instead of
              measuring.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              They don't track:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Abandoned carts</li>
              <li>Top-selling categories</li>
              <li>Seller performance</li>
              <li>Regional order density</li>
              <li>Payment failure rates</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              Growth becomes random instead of strategic.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              <strong>How to avoid it:</strong>
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              Build with analytics from the start. Use real order data to:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Prioritize categories</li>
              <li>Negotiate better shipping rates</li>
              <li>Improve conversion</li>
              <li>Decide which sellers to onboard next</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              Scaling without data leads to wasted spend.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              The real reason most founders struggle
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              It's rarely about effort.
            </p>
            <p className="mb-6 leading-relaxed text-foreground">
              It's about structure. When workflows are unclear, systems are
              manual, and infrastructure isn't built for scale, even strong
              brands hit operational ceilings.
            </p>
          </div>

          <div className="mb-16 mt-12">
            <p className="mb-4 italic leading-relaxed text-foreground">
              Here's how Kaartx Kloud helps founders avoid these mistakes:
            </p>
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Build smarter. Scale with structure.
            </h3>
            <p className="mb-6 leading-relaxed text-foreground">
              Kaartx Kloud provides structured product workflows, integrated
              payments, automated subscriptions, payout logic, and scalable
              backend infrastructure—so founders can focus on growth instead of
              fixing operational gaps.
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
