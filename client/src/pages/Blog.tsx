import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect } from 'react';

export default function Blog() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      slug: 'launch-multi-vendor-marketplace-gcc',
      title: 'How to launch a multi-vendor marketplace in the GCC',
      summary: 'Learn the fastest and most cost-efficient way to launch a full-scale marketplace in Oman, UAE, and the GCC—without spending months on custom development.',
    },
    {
      slug: 'kaartx-kloud-vs-custom-development',
      title: 'Kaartx Kloud vs custom development: what\'s faster and more affordable?',
      summary: 'Discover why SaaS marketplaces reduce time, cost, and risk by up to 80% compared to building everything from scratch.',
    },
    {
      slug: 'marketplace-mistakes-to-avoid',
      title: '5 mistakes every marketplace owner makes — and how to avoid them',
      summary: 'Most founders fail not because of technology, but workflow mistakes. Fix these five and you\'ll scale faster.',
    },
    {
      slug: 'how-payout-cycles-work',
      title: 'How payout cycles work in a multi-vendor marketplace',
      summary: 'Understand settlement cycles, seller payouts, escrow flow, and how Kaartx Kloud automates the entire process.',
    },
    {
      slug: 'automated-seller-subscriptions',
      title: 'Why your marketplace needs automated seller subscriptions',
      summary: 'Recurring seller billing is the backbone of predictable revenue. Here\'s how Kaartx Kloud handles it seamlessly.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={titleAnimation.ref}
            className={`text-center mb-8 sm:mb-9 md:mb-10 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="section-title text-foreground mb-5 tracking-tight" data-testid="text-blog-title">
              Insights for marketplace founders
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-normal" data-testid="text-blog-subtitle">
              Strategies, guides, and updates to help you launch, manage, and scale your multi-vendor marketplace using Kaartx Kloud.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16 sm:pb-24 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={cardsAnimation.ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8"
          >
            {posts.map((post, index) => {
              const gradients = ['gradient-bg-blue', 'gradient-bg-purple', 'gradient-bg-blue', 'gradient-bg-purple', 'gradient-bg-blue'];
              const stagger = ['', 'stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'];

              return (
                <Card
                  key={index}
                  data-testid={`blog-post-${index}`}
                  className={`group hover-elevate transition-all duration-300 rounded-2xl border-2 overflow-visible ${gradients[index]} animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''}`}
                >
                  <div className="relative p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.summary}
                    </p>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <a className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80" data-testid={`link-read-article-${index}`}>
                        Read article
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
