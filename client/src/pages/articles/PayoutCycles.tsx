import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignupModal from "@/components/SignupModal";

export default function PayoutCycles() {
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
            How eCommerce payouts and settlements work
          </h1>

          <p
            className="mb-6 text-sm text-muted-foreground"
            data-testid="text-article-meta"
          >
            Operations · 7 min read
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              Money in eCommerce doesn't move in a straight line. When a
              customer pays, that money doesn't instantly land in your bank
              account—or your sellers'. Between payment gateways, commissions,
              refunds, holding periods, and settlement cycles, there's a
              financial workflow happening behind the scenes.
            </p>
            <p className="mb-6 leading-relaxed text-foreground">
              Understanding how payouts and settlements work is critical whether
              you're running a brand store or a multi-vendor marketplace.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              The payment flow: what happens after checkout?
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              When a customer completes payment, it typically follows this path:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Customer pays via card / wallet / bank transfer</li>
              <li>Payment gateway authorises and captures the transaction</li>
              <li>Funds enter the merchant account (or payment balance)</li>
              <li>Fees and deductions are calculated</li>
              <li>The remaining amount becomes eligible for settlement</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              At this point, the money is "collected"—but not yet "paid out" to
              sellers (or even to you, depending on the gateway timing).
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Gross vs net revenue (the part founders confuse)
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Gross revenue is the order value the customer paid.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              Net revenue is what remains after deductions such as:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Payment gateway fees</li>
              <li>Platform commissions (marketplace)</li>
              <li>Shipping charges (if collected by platform)</li>
              <li>Refunds and cancellations</li>
              <li>Chargebacks / disputes</li>
              <li>Taxes (if applicable)</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              For marketplaces, net revenue has to be calculated per seller, per
              order, not just per day.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              What a settlement cycle actually means
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              A settlement cycle is your payout schedule—how often money moves
              out.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              Common cycles:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>7-day rolling cycle</li>
              <li>12–14 day payout cycle</li>
              <li>Monthly settlements</li>
              <li>Hybrid (some sellers weekly, some monthly)</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              Holding periods exist because:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Customers may request refunds</li>
              <li>COD orders may fail</li>
              <li>Chargebacks can occur days later</li>
              <li>Fulfilment needs confirmation</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              A strong platform makes these rules predictable and automated.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Single-brand store vs marketplace payouts
            </h2>
            <p className="mb-2 font-semibold leading-relaxed text-foreground">
              Brand store payouts (simple)
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Customer pays</li>
              <li>Gateway deducts fees</li>
              <li>
                Remaining amount settles to the brand on the gateway's schedule
              </li>
            </ul>
            <p className="mb-2 mt-6 font-semibold leading-relaxed text-foreground">
              Marketplace payouts (structured)
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Platform collects full order amount</li>
              <li>Commission + platform fees are deducted</li>
              <li>Net balance is allocated to each seller</li>
              <li>Seller payout is released based on the settlement cycle</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              This requires seller wallets/ledgers, payout statements, and
              transparent order-level breakdowns.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Refunds, disputes, and payout adjustments
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Your system must handle:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Full refunds</li>
              <li>Partial refunds</li>
              <li>Cancellations after payment</li>
              <li>Chargebacks/disputes</li>
              <li>Manual adjustments (e.g., penalty, correction)</li>
            </ul>
            <p className="mb-4 leading-relaxed text-foreground">
              A proper settlement system separates balances into:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Pending balance (not eligible yet)</li>
              <li>Available balance (ready for payout)</li>
              <li>On-hold balance (risk/verification)</li>
              <li>Paid out (completed settlement)</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              This visibility reduces seller complaints and support tickets.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground">
              Why payout automation is non-negotiable at scale
            </h2>
            <p className="mb-4 leading-relaxed text-foreground">
              Manual payout operations might work for 5 sellers. It breaks at
              50. It becomes impossible at 500.
            </p>
            <p className="mb-4 leading-relaxed text-foreground">
              Automation enables:
            </p>
            <ul className="mb-4 list-disc pl-6 text-foreground [&>li+li]:mt-2 [&>li]:mb-0 [&>li]:mt-0">
              <li>Accurate payouts without spreadsheet work</li>
              <li>Less reconciliation errors</li>
              <li>Faster finance operations</li>
              <li>Higher seller trust</li>
              <li>Scalable growth without chaos</li>
            </ul>
            <p className="mb-6 leading-relaxed text-foreground">
              If payout logic isn't structured early, every increase in sellers
              increases financial risk.
            </p>
          </div>

          <div className="mb-16 mt-12">
            <p className="mb-4 italic leading-relaxed text-foreground">
              Here's how Kaartx Kloud helps brands and marketplace founders
              manage payouts with clarity:
            </p>
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Predictable payouts. Transparent settlements.
            </h3>
            <p className="mb-6 leading-relaxed text-foreground">
              Kaartx Kloud supports structured settlement cycles, seller payout
              logic, automated deductions, and clear payout statements—so you
              can scale without messy financial operations.
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
