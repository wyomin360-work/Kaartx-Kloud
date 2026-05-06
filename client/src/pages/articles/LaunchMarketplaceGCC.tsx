import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignupModal from "@/components/SignupModal";

export default function LaunchMarketplaceGCC() {
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  useEffect(() => {
    // Reset scroll restoration to auto for article pages
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "auto";
    }
    // Force scroll to top immediately with no smooth behavior
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenSignup={() => setSignupModalOpen(true)} />
      <div
        className="ml-auto px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 md:pb-16 md:pt-28 lg:px-8 border border-black/10 rounded-xl bg-white shadow-lg"
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
            How to launch a multi-vendor marketplace in the GCC
          </h1>

          <p
            className="mb-6 text-sm text-muted-foreground"
            data-testid="text-article-meta"
          >
            Launching · 8 min read
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              Building a multi-vendor marketplace in Oman, the UAE, or across
              the wider GCC doesn't require 18 months of development or a large
              engineering team. With the right infrastructure in place, you can
              launch faster, reduce risk, and focus on acquiring sellers and
              customers—not rebuilding technology from scratch.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Step 1 – Get clear on your marketplace model
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Before you touch any tech, define your model clearly:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>
                <strong>Category focus:</strong> Fashion, beauty, electronics,
                grocery, or all-in-one?
              </li>
              <li>
                <strong>Geo focus:</strong> Oman only, GCC-wide, or specific
                cities?
              </li>
              <li>
                <strong>Fulfilment model:</strong> FBM (fulfilled by merchants),
                FBK (fulfilled by Kaartx/you), or a mix?
              </li>
              <li>
                <strong>Revenue model:</strong> Subscription only, commission
                only, or hybrid?
              </li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              Write this down. It will drive your pricing, seller onboarding,
              and logistics decisions later.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Step 2 – Choose a GCC-ready platform instead of custom dev
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Most founders lose a year building from scratch:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Hiring dev agencies</li>
              <li>Managing endless revisions</li>
              <li>Rebuilding features other marketplaces already solved</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              A SaaS marketplace platform like Kaartx Kloud gives you:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Ready-made seller onboarding & approvals</li>
              <li>
                Product listing workflows with variants, SKUs, and quality
                checks
              </li>
              <li>Built-in subscriptions and payout cycles</li>
              <li>GCC-friendly integrations (payments, shipping, tax rules)</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              Instead of reinventing the wheel, you configure what's already
              working.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Step 3 – Onboard a small group of "hero sellers" first
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Don't start with 500 sellers. Start with 5–15 high-quality sellers
              who represent your ideal categories.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">Look for:</p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>
                Strong existing catalogues (good images, descriptions, pricing)
              </li>
              <li>Reasonable fulfilment capability (they can ship on time)</li>
              <li>Willingness to follow your marketplace standards</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              Use Kaartx Kloud's seller management tools to:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Invite them to your seller portal.</li>
              <li>Verify their details (KYC, documents, brand licenses).</li>
              <li>Set clear subscription plans and payout rules.</li>
              <li>
                Give them simple training on how to list and manage orders.
              </li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Step 4 – Structure your payout cycles for GCC cashflow
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Cashflow is critical for both you and your sellers.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              A practical structure for GCC marketplaces is:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Default payout every 12–14 days</li>
              <li>Clear holding periods for COD or high-risk categories</li>
              <li>Transparent payout statements visible to each seller</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              With a platform like Kaartx Kloud, you can configure:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Payout frequency (e.g. every 12 days)</li>
              <li>Minimum payout amount</li>
              <li>
                Merchant-level rules (some sellers can be weekly, others
                monthly)
              </li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              The key is predictability: sellers should know exactly when money
              arrives.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Step 5 – Standardise product quality from day one
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Your marketplace brand is only as strong as the products listed on
              it.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              Put in place:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Title guidelines (character limits, no spammy keywords)</li>
              <li>Mandatory attributes (brand, size, color, fabric, etc.)</li>
              <li>
                Image rules (plain backgrounds, minimum resolution, no
                watermarks)
              </li>
              <li>
                Category-based templates (fashion vs electronics vs beauty)
              </li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              Use the product listing flow in Kaartx Kloud to enforce these
              rules, so low-quality listings never go live by accident.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Step 6 – Launch a "soft live" before big marketing
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Instead of a huge launch announcement, do a soft launch:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Open the marketplace to a small circle of real customers.</li>
              <li>
                Test the full journey: sign-up → browse → add to cart → pay →
                fulfillment → payout.
              </li>
              <li>
                Log every issue: missing notifications, confusing statuses, slow
                seller response.
              </li>
              <li>
                Fix all the operational gaps before you start heavy ad spend.
              </li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Step 7 – Scale with data, not guesswork
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Once orders start flowing, watch:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Top-selling categories and brands</li>
              <li>Sellers with best fulfilment performance</li>
              <li>Abandoned carts and failed payments</li>
              <li>Regions with highest order density</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              Use this data to:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Decide which new sellers to onboard</li>
              <li>Negotiate better shipping or payment rates</li>
              <li>Prioritise features (e.g. COD, express delivery, loyalty)</li>
            </ul>
          </div>

          <div className="mb-16 mt-12">
            <p className="mb-4 italic leading-relaxed text-foreground">
              Here's how Kaartx Kloud helps marketplace founders move faster:
            </p>
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Launch your GCC marketplace faster with Kaartx Kloud
            </h3>
            <p className="mb-6 leading-relaxed text-foreground">
              Kaartx Kloud gives you seller onboarding, subscription billing,
              payouts, and GCC-ready integrations out of the box—so you can
              focus on growth, not infrastructure.
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
