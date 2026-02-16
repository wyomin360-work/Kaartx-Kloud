import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignupModal from '@/components/SignupModal';

export default function MarketplaceMistakes() {
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
            5 eCommerce mistakes founders make — and how to avoid them
          </h1>

          <p className="text-sm text-muted-foreground mb-6" data-testid="text-article-meta">
            Strategy · 6 min read
          </p>

          <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Starting an eCommerce store or marketplace today is more accessible than ever. Yet many founders don't struggle because of technology—they struggle because of workflow decisions, structural gaps, and scaling mistakes made early on. In this guide, we'll break down five common mistakes and how to avoid them before they slow your growth.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Mistake 1 — Building without a clear revenue model
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Many founders jump into development before answering basic business questions:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Are you charging commission, subscription, or both?</li>
            <li>Who handles fulfillment?</li>
            <li>What are your margins after payment and shipping fees?</li>
            <li>How will payouts be structured?</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            Without clarity here, everything else becomes reactive.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>How to avoid it:</strong>
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Define your revenue model first. Write down your pricing structure, payout cycles, and fulfillment flow before touching any tech. The platform should support your model—not define it for you.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Mistake 2 — Trying to build everything from scratch
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Custom development sounds powerful. In reality, it often means:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Endless revisions</li>
            <li>Feature rebuilding</li>
            <li>Delays of 6–12 months</li>
            <li>High burn before revenue</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            Most marketplaces and brand stores need similar infrastructure: product workflows, payments, order management, analytics, and payout systems.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>How to avoid it:</strong>
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Use a structured platform that already supports these workflows. Focus your time on growth, partnerships, and acquisition instead of engineering rebuilds.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Mistake 3 — Onboarding too many sellers too early
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Marketplace founders often believe volume equals success. So they rush to onboard 100+ sellers immediately.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            The result?
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Poor product quality</li>
            <li>Inconsistent descriptions</li>
            <li>Slow fulfillment</li>
            <li>Bad customer experience</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>How to avoid it:</strong>
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Start small. Onboard a controlled group of high-quality sellers first. Standardize listing rules and operational expectations before scaling vendor count.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Mistake 4 — Ignoring payout and cashflow structure
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Cashflow confusion kills trust—both for founders and sellers.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Common issues include:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Unclear payout timelines</li>
            <li>No holding period for COD orders</li>
            <li>Poor visibility into seller statements</li>
            <li>Manual reconciliation errors</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>How to avoid it:</strong>
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Set predictable payout cycles from day one. Make statements transparent. Automate settlement logic so sellers always know when funds will arrive.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Predictability builds trust.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Mistake 5 — Scaling based on assumptions, not data
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Once traffic starts coming in, founders often guess instead of measuring.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            They don't track:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Abandoned carts</li>
            <li>Top-selling categories</li>
            <li>Seller performance</li>
            <li>Regional order density</li>
            <li>Payment failure rates</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            Growth becomes random instead of strategic.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>How to avoid it:</strong>
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Build with analytics from the start. Use real order data to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Prioritize categories</li>
            <li>Negotiate better shipping rates</li>
            <li>Improve conversion</li>
            <li>Decide which sellers to onboard next</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            Scaling without data leads to wasted spend.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            The real reason most founders struggle
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            It's rarely about effort.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            It's about structure. When workflows are unclear, systems are manual, and infrastructure isn't built for scale, even strong brands hit operational ceilings.
          </p>
        </div>

        <div className="mt-12 mb-16">
          <p className="text-foreground leading-relaxed mb-4 italic">
            Here's how Kaartx Kloud helps founders avoid these mistakes:
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Build smarter. Scale with structure.
          </h3>
          <p className="text-foreground leading-relaxed mb-6">
            Kaartx Kloud provides structured product workflows, integrated payments, automated subscriptions, payout logic, and scalable backend infrastructure—so founders can focus on growth instead of fixing operational gaps.
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