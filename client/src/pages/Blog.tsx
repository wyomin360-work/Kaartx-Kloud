import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignupModal from '@/components/SignupModal';

export default function Blog() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      slug: 'launch-multi-vendor-marketplace-gcc',
      title: 'How to launch a multi-vendor marketplace in the GCC',
      summary: 'Building a multi-vendor marketplace in Oman, the UAE, or across the wider GCC doesn\'t require 18 months of development or a large engineering team. With the right infrastructure in place, you can launch faster, reduce risk, and focus on acquiring sellers and customers—not rebuilding technology from scratch.',
    },
    {
      slug: 'kaartx-kloud-vs-custom-development',
      title: 'How to launch your own branded eCommerce store with full control',
      summary: 'Launching a branded eCommerce store today is easier than ever—but building one with full operational and strategic control requires clarity from day one. In this guide, we\'ll walk through what "full control" really means and how to structure your store so it scales without limitations.',
    },
    {
      slug: 'marketplace-mistakes-to-avoid',
      title: '5 eCommerce mistakes founders make — and how to avoid them',
      summary: 'Building an eCommerce store or marketplace today is more accessible than ever. Yet many founders don\'t struggle because of technology—they struggle because of workflow decisions, structural gaps, and scaling mistakes made early on. In this guide, we\'ll break down five common mistakes and how to avoid them before they slow your growth.',
    },
    {
      slug: 'how-payout-cycles-work',
      title: 'How eCommerce payouts and settlements work',
      summary: 'Understand revenue flow, commissions, and automated payouts for brands and multi-vendor platforms.',
    },
    {
      slug: 'automated-seller-subscriptions',
      title: 'From single store to full-scale marketplace expansion',
      summary: 'Start as a brand. Expand into a marketplace later without rebuilding your system.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenSignup={() => setSignupModalOpen(true)} />
      {/* Hero Section */}
      <section className="blog-hero-section pt-32 pb-16 sm:pt-40 sm:pb-24 md:pt-48 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={titleAnimation.ref}
            className={`text-center mb-8 sm:mb-9 md:mb-10 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="section-title text-foreground mb-5 tracking-tight" data-testid="text-blog-title">
              Insights for modern commerce builders
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-normal" data-testid="text-blog-subtitle">
              Practical guides, strategies, and updates to help you launch, manage, and grow stores and marketplaces with Kaartx Kloud.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section pb-16 sm:pb-24 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={cardsAnimation.ref}
            className="blog-posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8"
          >
            {posts.map((post, index) => {
              const stagger = ['', 'stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'];

              return (
                <Card
                  key={index}
                  data-testid={`blog-post-${index}`}
                  className={`group hover-elevate transition-all duration-300 rounded-2xl border border-border bg-white overflow-visible h-full animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''}`}
                  style={{ boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.04)' }}
                >
                  <div className="relative p-8 flex flex-col justify-between h-full min-h-[320px]">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight leading-snug line-clamp-3 min-h-[5.25rem]">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                        {post.summary}
                      </p>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80" data-testid={`link-read-article-${index}`}>
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
      <SignupModal open={signupModalOpen} onOpenChange={setSignupModalOpen} />
    </div>
  );
}
