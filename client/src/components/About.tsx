import { Target, BookOpen, Eye } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const roadmapAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  const sections = [
    {
      icon: Target,
      title: 'Our Mission',
      content: "Our mission is to empower founders building modern online stores and marketplaces with a platform that's fast, reliable, and built for scale. We simplify multi-vendor e-commerce by providing the technology, workflows, and operational foundation businesses need to succeed—from single-brand stores to full marketplaces. By combining speed, stability, and real marketplace intelligence, we help entrepreneurs focus on growth instead of infrastructure, enabling them to operate with clarity and scale with confidence.",
      accentColor: 'bg-primary',
    },
    {
      icon: BookOpen,
      title: 'Our Story',
      content: "Kaartx began as an internal platform built by the founder to run his own business as a multi-vendor marketplace in the GCC. While operating it, we saw a clear problem—founders wanted to launch reliable online stores or marketplaces but lacked a complete, scalable system they could trust. So we opened up what we built. That internal platform evolved into Kaartx Kloud, shaped by real operational experience and a deep understanding of how commerce works in the GCC.",
      accentColor: 'bg-primary',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      content: "We believe the future of e-commerce is flexible and scalable. Businesses should be able to start with a single online store and grow into a marketplace when the time is right. Kaartx Kloud exists to support founders and brands at every stage—helping them launch, operate, and scale with confidence. Starting from the GCC and expanding globally, we aim to build a commerce ecosystem where technology removes friction and adapts to each business's needs over time.",
      accentColor: 'bg-primary',
    },
  ];

  const roadmapItems = [
    'Deeper logistics and delivery integrations',
    'Enhanced payout automation and financial flows',
    'Advanced analytics for founders and operators',
    'Seller & operations tools with automation',
    'Improved subscription and billing capabilities',
    'Stronger GCC commerce integrations framework',
  ];

  return (
    <section id="about" className="py-12 sm:py-20 md:py-32 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 sm:mb-20 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4" data-testid="text-about-label">
            About Us
          </p>
          <h2 className="section-title text-foreground mb-6" data-testid="text-about-title">
            About Kaartx Kloud
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-about-intro">
            A full-stack commerce infrastructure designed to help businesses launch stores, scale operations, and evolve into multi-vendor marketplaces with speed and confidence.
          </p>
        </div>

        {/* Our Delivery Model Section */}
        <div className="max-w-[740px] mx-auto mb-20 mt-6 px-4 sm:px-5 md:px-6">
          <h3 className="text-xl font-bold text-foreground mb-5 text-center" data-testid="text-delivery-model-title">
            Our Delivery Model
          </h3>
          <div className="space-y-5 text-muted-foreground leading-[1.8] text-[15px] sm:text-base">
            <p data-testid="text-delivery-model-p1">
              Kaartx Kloud is a guided commerce infrastructure, configured around each founder's business model—whether you're launching a single-brand store or building a multi-vendor marketplace. Every setup is tailored to your seller structure, payout logic, logistics flow, and regional requirements.
            </p>
            <p data-testid="text-delivery-model-p2">
              The platform is deeply optimized for the GCC region, with core operational, payment, and logistics workflows already in place. At the same time, Kaartx Kloud is designed to adapt for other regions based on local regulations, currencies, and business needs.
            </p>
            <p data-testid="text-delivery-model-p3">
              Instead of instant, unconfigured self-serve activation, every deployment is carefully reviewed and set up by our team—whether it's a store or a marketplace—to ensure stability, regulatory compliance, and long-term scalability before&nbsp;launch.
            </p>
          </div>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden mb-20 animate-on-scroll ${cardsAnimation.isVisible ? 'visible' : ''}`}
        >
          {sections.map((section, index) => {
            const stagger = ['', 'stagger-1', 'stagger-2'];
            
            return (
              <div
                key={index}
                className={`bg-background p-8 sm:p-10 ${stagger[index]}`}
                data-testid={`about-card-${index}`}
              >
                <h3 className="text-xl font-bold text-foreground mb-5" data-testid={`text-about-${section.title.toLowerCase().replace(' ', '-')}-heading`}>
                  {section.title}
                </h3>
                <p className="text-muted-foreground leading-[1.8] text-[15px]" data-testid={`text-about-${section.title.toLowerCase().replace(' ', '-')}`}>
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>

        <div 
          ref={roadmapAnimation.ref}
          className={`max-w-4xl mx-auto animate-on-scroll ${roadmapAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
              What's Next
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-5" data-testid="text-about-roadmap-heading">
              The Road Ahead
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-about-roadmap-intro">
              Kaartx Kloud is evolving rapidly, with a strong focus on improving platform performance, seller efficiency, and operational automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {roadmapItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-6 rounded-md bg-card/30 border border-border/30 hover-elevate transition-colors"
                data-testid={`text-about-roadmap-item-${index}`}
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-[15px] text-foreground leading-relaxed font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-4">
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base sm:text-lg" data-testid="text-about-closing">
              This is just the beginning. We help founders build scalable commerce platforms that thrive globally—starting with deep expertise in the GCC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
