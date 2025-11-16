import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function SellerSubscriptions() {
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
            Why your marketplace needs automated seller subscriptions
          </h1>

          <p className="text-sm text-muted-foreground mb-6" data-testid="text-article-meta">
            Revenue · 6 min read
          </p>

          <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            If your marketplace relies only on commission per order, you're leaving stable revenue on the table. Subscription plans for sellers—automatically billed and managed—can transform the way your marketplace grows.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            The problem with one-time onboarding fees
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Some marketplaces charge sellers a one-time fee to join: OMR 50, OMR 100, or even OMR 500 upfront.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            The idea makes sense at first. It filters out non-serious sellers and brings in some early cash. But it creates two problems:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li><strong>Friction at signup:</strong> Serious sellers hesitate to pay a large upfront fee before seeing value</li>
            <li><strong>No recurring income:</strong> Once they've paid, you don't make any more money from them unless they sell products (and you take commission)</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            This model doesn't scale. You're constantly hunting for new sellers to replace the revenue gap.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            How subscription plans stabilise your revenue
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Subscription-based seller billing flips the model. Instead of a big upfront fee, sellers pay a smaller monthly amount to stay active on your platform.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            This gives you:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li><strong>Monthly recurring revenue (MRR)</strong> that's predictable and independent of order volume</li>
            <li><strong>Easier forecasting:</strong> You know how much income you'll have next month based on active sellers</li>
            <li><strong>Lower signup friction:</strong> OMR 15/month feels more approachable than OMR 500 upfront</li>
            <li><strong>Stronger seller retention:</strong> Monthly billing encourages sellers to stay engaged and keep listing products</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            If you have 100 sellers paying OMR 20/month, that's OMR 2,000 in stable revenue before you even count commissions.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Typical subscription structures for GCC sellers
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Most marketplaces offer tiered subscription plans to match different seller needs. Here's a common structure:
          </p>

          <p className="text-foreground leading-relaxed mb-2 font-semibold">
            Starter Plan – OMR 10–15/month
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Up to 50 product listings</li>
            <li>Basic analytics dashboard</li>
            <li>Standard support (48-hour response)</li>
            <li>Default payout cycle (e.g. every 14 days)</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>Best for:</strong> New sellers testing the platform.
          </p>

          <p className="text-foreground leading-relaxed mb-2 mt-6 font-semibold">
            Growth Plan – OMR 25–35/month
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Up to 250 product listings</li>
            <li>Advanced analytics (conversion rates, top products, traffic sources)</li>
            <li>Priority support (24-hour response)</li>
            <li>Faster payout cycles (e.g. every 7 days)</li>
            <li>Access to promotional campaigns</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>Best for:</strong> Established sellers scaling their catalog.
          </p>

          <p className="text-foreground leading-relaxed mb-2 mt-6 font-semibold">
            Pro Plan – OMR 50–75/month
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Unlimited product listings</li>
            <li>Full analytics suite with custom reports</li>
            <li>Dedicated account manager</li>
            <li>Custom payout schedules</li>
            <li>Priority placement in search and homepage features</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            <strong>Best for:</strong> Top-performing sellers driving significant GMV.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Why automation is non-negotiable
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Manual subscription billing is a disaster waiting to happen.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            You'll end up:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Chasing sellers via WhatsApp for overdue payments</li>
            <li>Manually pausing accounts when subscriptions lapse</li>
            <li>Sending invoices one by one</li>
            <li>Losing revenue because you forgot to bill someone</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            Automated billing solves this completely:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li><strong>Auto-renewal:</strong> Charges sellers' saved payment methods every month without manual work</li>
            <li><strong>Payment reminders:</strong> Automatic emails/SMS before the billing date</li>
            <li><strong>Graceful suspension:</strong> If payment fails, the system pauses their listings until they update their card</li>
            <li><strong>Transparent invoices:</strong> Sellers get receipts and billing history automatically</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            You set the rules once. The platform handles renewals, reminders, and suspensions.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            How Kaartx Kloud handles seller subscriptions
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Kaartx Kloud is built with subscription billing at its core:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li><strong>Built-in monthly/yearly billing cycles:</strong> You define the plans, the system handles the rest</li>
            <li><strong>Auto-renewal with saved cards:</strong> Sellers enter their payment details once, and renewals happen automatically</li>
            <li><strong>Clear seller dashboards:</strong> Every seller can see their current plan, next billing date, and past invoices</li>
            <li><strong>Upgrade/downgrade flows:</strong> Sellers can switch plans mid-cycle with prorated adjustments</li>
            <li><strong>Failed payment handling:</strong> Automatic retries, reminders, and account suspension workflows</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            It's the same subscription infrastructure used by platforms like Shopify and Stripe—except it's built specifically for multi-vendor marketplaces.
          </p>
        </div>

        <div className="mt-20 mb-16 mx-auto" style={{ maxWidth: '960px' }}>
          <div className="py-12 px-16 bg-gradient-to-br from-[#F7F9FC] to-white rounded-3xl" style={{ boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.06)' }}>
            <h3 className="text-4xl font-bold text-foreground mb-4 text-center">
              Launch your GCC marketplace faster with Kaartx Kloud
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
