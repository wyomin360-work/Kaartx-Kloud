import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignupModal from '@/components/SignupModal';

export default function SellerSubscriptions() {
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
            From single store to full-scale marketplace expansion
          </h1>

          <p className="text-sm text-muted-foreground mb-6" data-testid="text-article-meta">
            Strategy · 8 min read
          </p>

          <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Most founders start with a single brand store. It's simpler, more controlled, and easier to launch. But as the business grows, many begin thinking bigger — more categories, more sellers, more inventory, and a larger ecosystem.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            The real question isn't whether to expand. It's whether your infrastructure allows you to expand without rebuilding everything.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            The single-store phase: control and focus
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            A branded eCommerce store gives you:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Full control over products and pricing</li>
            <li>Clean operational structure</li>
            <li>Direct customer ownership</li>
            <li>Simplified payout and revenue flow</li>
            <li>Clear brand positioning</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            This phase is about validating demand, optimising operations, and building traction. But growth eventually creates friction.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            The expansion pressure most brands feel
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            As traffic increases and categories expand, founders start facing questions like:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Should we allow third-party sellers?</li>
            <li>Should we increase product variety without owning inventory?</li>
            <li>Can we scale without hiring a large operations team?</li>
            <li>Are we rebuilding systems every time we grow?</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            This is where many brands hit technical and operational limits.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            The wrong way to expand
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Many founders try to convert a brand store into a marketplace by:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Adding manual seller onboarding</li>
            <li>Managing payouts through spreadsheets</li>
            <li>Creating separate dashboards externally</li>
            <li>Using plugins that don't scale</li>
            <li>Rebuilding backend systems from scratch</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            This creates complexity instead of growth. Expansion should simplify your system — not break it.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            The right way: expansion-ready architecture
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            If your platform is structured correctly from day one, expansion becomes a configuration change — not a rebuild.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Expansion-ready systems include:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Built-in seller onboarding workflows</li>
            <li>Commission logic already structured</li>
            <li>Automated payout and settlement systems</li>
            <li>Multi-role admin controls</li>
            <li>Scalable product and catalog architecture</li>
            <li>Flexible subscription models</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-4">
            This allows you to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Start as a single brand</li>
            <li>Add selected vendors later</li>
            <li>Convert fully into a multi-vendor marketplace</li>
            <li>Launch new verticals under the same infrastructure</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            Without rebuilding the core.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Store vs Marketplace: it's a spectrum, not a switch
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            It's important to understand that expansion doesn't have to be binary.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            You can operate in hybrid modes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Brand-only model</li>
            <li>Brand + selected partner sellers</li>
            <li>Closed marketplace</li>
            <li>Open multi-vendor marketplace</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            The infrastructure should support all of them — without technical chaos.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Why rebuilding during growth is expensive
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Rebuilding systems during expansion leads to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-foreground [&>li]:mt-0 [&>li]:mb-0 [&>li+li]:mt-2">
            <li>Downtime</li>
            <li>Data migration risks</li>
            <li>Payment disruptions</li>
            <li>Seller confusion</li>
            <li>Increased development cost</li>
            <li>Delayed scaling</li>
          </ul>
          <p className="text-foreground leading-relaxed mb-6">
            Growth should compound momentum — not reset it.
          </p>
        </div>

        <div className="mt-12 mb-16">
          <p className="text-foreground leading-relaxed mb-4 italic">
            Here's how Kaartx Kloud supports seamless expansion from brand store to marketplace:
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Start focused. Scale without rebuilding.
          </h3>
          <p className="text-foreground leading-relaxed mb-6">
            Kaartx Kloud is designed to support both single-brand eCommerce stores and full-scale multi-vendor marketplaces within the same architecture. Whether you're launching your first store or expanding into a platform ecosystem, the infrastructure is already built to grow with you.
          </p>
          <div className="mt-6">
            <Button size="lg" className="font-semibold text-lg h-[52px] px-8" data-testid="button-get-started" onClick={() => setSignupModalOpen(true)}>
              Get Started with Kaartx Kloud
            </Button>
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