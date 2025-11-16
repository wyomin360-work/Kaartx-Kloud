import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function MarketplaceMistakes() {
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
            5 mistakes every marketplace owner makes — and how to avoid them
          </h1>

          <p className="text-sm text-muted-foreground mb-6" data-testid="text-article-meta">
            Operations · 6 min read
          </p>

          <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Most marketplaces don't fail because of bad ideas. They fail because of avoidable operational mistakes. Here are five common pitfalls we see across GCC marketplaces—and practical ways to avoid them.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Mistake 1 – Onboarding "any seller who says yes"
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            In the rush to launch, many founders onboard any seller who's willing to join. The problem? Low-quality sellers damage your brand faster than you can fix it.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Bad sellers lead to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Poor product listings (blurry images, vague descriptions, wrong pricing)</li>
            <li>Delayed shipments and unfulfilled orders</li>
            <li>Higher refund and complaint rates</li>
            <li>More support tickets that drain your team's time</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>How to avoid it:</strong>
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Set minimum standards before a seller goes live:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li><strong>KYC verification:</strong> Valid business registration, tax ID, contact details</li>
            <li><strong>Sample product review:</strong> Check at least 3–5 listings for quality before approval</li>
            <li><strong>Fulfilment capability:</strong> Confirm they can ship within your service areas</li>
            <li><strong>Clear agreements:</strong> Signed seller terms covering returns, quality, and payout rules</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            Use a seller onboarding flow (like the one in Kaartx Kloud) that enforces these checks automatically, so no low-quality seller slips through.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Mistake 2 – No clear payout rules
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Sellers need to know when they'll get paid. When payout timing is vague or inconsistent, trust erodes fast.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            We've seen marketplaces where:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Sellers wait 30+ days without updates</li>
            <li>Manual payout processing causes random delays</li>
            <li>No transparency into what's been paid vs what's pending</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            This creates constant WhatsApp messages, disputes, and eventually, seller churn.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>How to avoid it:</strong>
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Define a predictable payout cycle and stick to it:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li><strong>Standard cycle:</strong> Every 12–14 days is common in GCC markets</li>
            <li><strong>Transparent statements:</strong> Show sellers exactly what's being paid and what's on hold</li>
            <li><strong>Automation:</strong> Use a platform that automatically calculates and releases payouts</li>
            <li><strong>Written policy:</strong> Document holding periods for refunds, COD settlements, and high-risk categories</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            Kaartx Kloud lets you configure payout frequency, minimum thresholds, and seller-specific rules—so payouts happen like clockwork.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Mistake 3 – Treating support as an afterthought
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Marketplaces have three layers of support: buyer support, seller support, and logistics support. Most founders underestimate how much coordination this requires.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Common problems:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Buyers complain about delayed shipments, but sellers claim they shipped on time</li>
            <li>Sellers ask when they'll get paid, but no one has visibility</li>
            <li>WhatsApp becomes the dumping ground for every issue</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>How to avoid it:</strong>
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Set up structured support from day one:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li><strong>Centralised ticketing:</strong> Use a system where all support requests are tracked and assigned</li>
            <li><strong>Clear SLAs:</strong> Define response times (e.g. 24 hours for seller queries, 48 hours for refunds)</li>
            <li><strong>Self-service portals:</strong> Let sellers check order statuses, payouts, and analytics themselves</li>
            <li><strong>Automated notifications:</strong> Keep buyers and sellers updated at every step (order confirmed, shipped, delivered)</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            The better your systems handle routine queries, the more time you have for real growth work.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Mistake 4 – Ignoring data until it's too late
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Many founders run their marketplace by feel instead of numbers. They don't track:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Which sellers consistently deliver on time</li>
            <li>Why orders get cancelled or refunded</li>
            <li>Which categories have the highest repeat purchase rates</li>
            <li>Where abandoned carts spike</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            Without this data, you're guessing. And guessing leads to wasted ad spend, bad seller decisions, and slow growth.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>How to avoid it:</strong>
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Use dashboards to track performance in real time:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li><strong>Seller performance:</strong> On-time delivery rates, refund rates, average order value</li>
            <li><strong>Category insights:</strong> Which products sell best, which have highest returns</li>
            <li><strong>Customer behavior:</strong> Repeat purchase rate, cart abandonment, payment failures</li>
            <li><strong>Revenue breakdowns:</strong> Subscription income vs commission income, monthly growth trends</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            Kaartx Kloud gives you built-in analytics so you can make decisions based on what's actually happening—not what you think is happening.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Mistake 5 – Launching too big, too fast
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            The temptation is to launch with every category imaginable: fashion, electronics, beauty, groceries, home goods, and more. The result? Shallow inventory, confused positioning, and no real depth anywhere.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Customers don't come to marketplaces for breadth. They come for selection within the categories they care about.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>How to avoid it:</strong>
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Start focused, then expand based on demand:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li><strong>Pick 1–3 core categories</strong> where you can achieve real depth (e.g. "GCC fashion marketplace" not "everything marketplace")</li>
            <li><strong>Onboard enough sellers</strong> in those categories to give customers meaningful choice</li>
            <li><strong>Prove the model works</strong> with strong repeat purchase and seller retention</li>
            <li><strong>Then expand</strong> into adjacent categories based on what customers are asking for</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            Depth wins. Breadth comes later.
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
