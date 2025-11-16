import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function PayoutCycles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16" style={{ maxWidth: '700px' }}>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-to-blog">
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </Link>

        <article>
          <h1 className="section-title text-foreground mb-5 tracking-tight" data-testid="text-article-title">
            How payout cycles work in a multi-vendor marketplace
          </h1>

          <p className="text-sm text-muted-foreground mb-6" data-testid="text-article-meta">
            Finance & Payouts · 7 min read
          </p>

          <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Payout cycles might sound like a boring back-office detail, but they decide how much your sellers trust you—and how stable your cashflow feels. Let's unpack how marketplace payout cycles work and how Kaartx Kloud helps you manage them.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            What is a payout cycle?
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            A payout cycle is the period between when a customer pays for an order and when the seller receives their funds.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            In a traditional retail model, the seller gets paid immediately when they make a sale. But in a marketplace, you (the platform) collect payment from the customer, hold it for a set period, then release it to the seller after deducting your commission and fees.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            This holding period is the payout cycle. It protects both you and the seller from fraud, chargebacks, and refund complications.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Why marketplaces don't pay sellers instantly
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Instant payouts sound great in theory. But they create serious risks:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li><strong>Refund windows:</strong> If a customer returns a product after the seller has been paid, you're stuck covering the refund yourself</li>
            <li><strong>Chargebacks:</strong> Payment gateways can reverse transactions days or weeks later if fraud is detected</li>
            <li><strong>COD settlements:</strong> Cash-on-delivery orders need time to be collected, verified, and reconciled</li>
            <li><strong>Fraud checks:</strong> Suspicious orders or new sellers need review before funds are released</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            Holding funds for a short period gives you time to confirm everything is legitimate before paying sellers.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Common payout models in GCC marketplaces
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            There are three common payout frequencies we see across GCC marketplaces:
          </p>

          <p className="text-foreground leading-relaxed mb-2 font-semibold">
            1. Weekly payouts
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Sellers get paid every 7 days. This is fast and builds seller trust, but it creates more admin work and tighter cashflow windows for the platform.
          </p>
          <p className="text-foreground leading-relaxed mb-2">
            <strong>Best for:</strong> Established sellers with proven track records.
          </p>

          <p className="text-foreground leading-relaxed mb-2 mt-6 font-semibold">
            2. Bi-weekly payouts (12–14 days)
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            This is the most common model in the GCC. It balances seller satisfaction with practical cashflow management.
          </p>
          <p className="text-foreground leading-relaxed mb-2">
            <strong>Best for:</strong> Most marketplaces as a default policy.
          </p>

          <p className="text-foreground leading-relaxed mb-2 mt-6 font-semibold">
            3. Monthly payouts
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Sellers get paid once per month. This gives you maximum cushion for refunds and chargebacks, but can frustrate sellers who need faster access to their earnings.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            <strong>Best for:</strong> High-risk categories or new/unproven sellers.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Key elements of a solid payout policy
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            A good payout policy isn't just about timing. It's about clarity and fairness. Here's what to define:
          </p>

          <p className="text-foreground leading-relaxed mb-2 font-semibold">
            1. Minimum payout threshold
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Set a minimum amount before payouts are released (e.g. OMR 10 or OMR 20). This reduces transaction fees and prevents tiny, inefficient payouts.
          </p>

          <p className="text-foreground leading-relaxed mb-2 font-semibold">
            2. Handling refunds and returns
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Clearly state how refunds are deducted. Common practice: if a customer returns a product, the refund amount is deducted from the seller's next payout.
          </p>

          <p className="text-foreground leading-relaxed mb-2 font-semibold">
            3. Delays for high-risk categories
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Some product categories (electronics, luxury goods, high-ticket items) have higher fraud or return rates. Consider longer holding periods for these.
          </p>

          <p className="text-foreground leading-relaxed mb-2 font-semibold">
            4. Transparent payout statements
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Sellers should be able to see exactly what's been paid, what's pending, and what's on hold. No surprises. No guesswork.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            How Kaartx Kloud simplifies payout cycles
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Managing payouts manually is messy. You're juggling spreadsheets, bank transfers, refund calculations, and seller queries.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Kaartx Kloud automates the entire flow:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li><strong>Configurable payout frequency:</strong> Set weekly, bi-weekly, or monthly cycles—or even custom frequencies per seller plan</li>
            <li><strong>Clear transaction history:</strong> Sellers see every order, commission deduction, refund, and payout in one dashboard</li>
            <li><strong>Automatic balance calculations:</strong> The system tracks what's pending, what's on hold, and what's ready to release</li>
            <li><strong>Exportable reports:</strong> Finance teams can pull payout reports for reconciliation and accounting</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            You define the rules once. The platform handles the rest.
          </p>
        </div>

        <div className="mt-20 mb-16 mx-auto" style={{ maxWidth: '960px' }}>
          <div className="py-12 px-16 bg-gradient-to-br from-[#F7F9FC] to-white rounded-3xl" style={{ boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.06)' }}>
            <h3 className="text-4xl font-bold text-foreground mb-4 text-center">
              Launch your GCC marketplace<br />faster with Kaartx Kloud
            </h3>
            <p className="text-lg text-foreground leading-relaxed mb-6 mx-auto" style={{ maxWidth: '640px', textAlign: 'center' }}>
              Kaartx Kloud gives you seller onboarding, subscription billing, payouts, and GCC-ready integrations out of the box—so you can focus on growth, not infrastructure.
            </p>
            <div className="flex justify-center mt-8">
              <a href="/#booking">
                <Button size="lg" className="font-semibold text-lg h-[52px] px-8" data-testid="button-get-started">
                  Get Started with Kaartx Kloud
                </Button>
              </a>
            </div>
          </div>
        </div>
        </article>
      </div>
    </div>
  );
}
