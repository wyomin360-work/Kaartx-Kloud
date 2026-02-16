import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignupModal from '@/components/SignupModal';

export default function PayoutCycles() {
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'auto';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenSignup={() => setSignupModalOpen(true)} />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-28 md:pb-16" style={{ maxWidth: '700px' }}>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-to-blog">
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </Link>

        <article>
          <h1 className="section-title text-foreground mb-5 tracking-tight" data-testid="text-article-title">
            How eCommerce payouts and settlements work
          </h1>

          <p className="text-sm text-muted-foreground mb-6" data-testid="text-article-meta">
            Operations · 7 min read
          </p>

          <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Money in eCommerce doesn't move in a straight line. When a customer pays, that money doesn't instantly land in your bank account—or your sellers'. Between payment gateways, commissions, refunds, holding periods, and settlement cycles, there's a financial workflow happening behind the scenes.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Understanding how payouts and settlements work is critical whether you're running a brand store or a multi-vendor marketplace.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            The payment flow: what happens after checkout?
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            When a customer completes payment, it typically follows this path:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Customer pays via card / wallet / bank transfer</li>
            <li>Payment gateway authorises and captures the transaction</li>
            <li>Funds enter the merchant account (or payment balance)</li>
            <li>Fees and deductions are calculated</li>
            <li>The remaining amount becomes eligible for settlement</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            At this point, the money is "collected"—but not yet "paid out" to sellers (or even to you, depending on the gateway timing).
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Gross vs net revenue (the part founders confuse)
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Gross revenue is the order value the customer paid.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Net revenue is what remains after deductions such as:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Payment gateway fees</li>
            <li>Platform commissions (marketplace)</li>
            <li>Shipping charges (if collected by platform)</li>
            <li>Refunds and cancellations</li>
            <li>Chargebacks / disputes</li>
            <li>Taxes (if applicable)</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            For marketplaces, net revenue has to be calculated per seller, per order, not just per day.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            What a settlement cycle actually means
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            A settlement cycle is your payout schedule—how often money moves out.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Common cycles:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>7-day rolling cycle</li>
            <li>12–14 day payout cycle</li>
            <li>Monthly settlements</li>
            <li>Hybrid (some sellers weekly, some monthly)</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            Holding periods exist because:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Customers may request refunds</li>
            <li>COD orders may fail</li>
            <li>Chargebacks can occur days later</li>
            <li>Fulfilment needs confirmation</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            A strong platform makes these rules predictable and automated.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Single-brand store vs marketplace payouts
          </h2>
          <p className="text-foreground leading-relaxed mb-2 font-semibold">
            Brand store payouts (simple)
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Customer pays</li>
            <li>Gateway deducts fees</li>
            <li>Remaining amount settles to the brand on the gateway's schedule</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-2 mt-6 font-semibold">
            Marketplace payouts (structured)
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Platform collects full order amount</li>
            <li>Commission + platform fees are deducted</li>
            <li>Net balance is allocated to each seller</li>
            <li>Seller payout is released based on the settlement cycle</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            This requires seller wallets/ledgers, payout statements, and transparent order-level breakdowns.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Refunds, disputes, and payout adjustments
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Your system must handle:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Full refunds</li>
            <li>Partial refunds</li>
            <li>Cancellations after payment</li>
            <li>Chargebacks/disputes</li>
            <li>Manual adjustments (e.g., penalty, correction)</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            A proper settlement system separates balances into:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Pending balance (not eligible yet)</li>
            <li>Available balance (ready for payout)</li>
            <li>On-hold balance (risk/verification)</li>
            <li>Paid out (completed settlement)</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            This visibility reduces seller complaints and support tickets.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Why payout automation is non-negotiable at scale
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Manual payout operations might work for 5 sellers. It breaks at 50. It becomes impossible at 500.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Automation enables:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Accurate payouts without spreadsheet work</li>
            <li>Less reconciliation errors</li>
            <li>Faster finance operations</li>
            <li>Higher seller trust</li>
            <li>Scalable growth without chaos</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            If payout logic isn't structured early, every increase in sellers increases financial risk.
          </p>
        </div>

        <div className="mt-12 mb-16">
          <p className="text-foreground leading-relaxed mb-4 italic">
            Here's how Kaartx Kloud helps brands and marketplace founders manage payouts with clarity:
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Predictable payouts. Transparent settlements.
          </h3>
          <p className="text-foreground leading-relaxed mb-6">
            Kaartx Kloud supports structured settlement cycles, seller payout logic, automated deductions, and clear payout statements—so you can scale without messy financial operations.
          </p>
          <div className="mt-6">
            <a href="/#booking">
              <Button size="lg" className="font-semibold text-lg h-[52px] px-8" data-testid="button-get-started">
                Get Started with Kaartx Kloud
              </Button>
            </a>
          </div>
        </div>

        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-8" data-testid="link-back-to-blog-bottom">
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