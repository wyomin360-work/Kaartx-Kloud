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
      content: "Our mission is to empower the next generation of marketplace founders with a platform that's fast, reliable, and built for scale. We're committed to simplifying the complexity of multi-vendor commerce by offering the technology, workflows, and operational foundation founders need to succeed. By combining speed, stability, and real marketplace intelligence, we help entrepreneurs focus on growth—not on building infrastructure from scratch. This helps founders operate with clarity and grow steadily.",
      accentColor: 'bg-primary',
    },
    {
      icon: BookOpen,
      title: 'Our Story',
      content: "Kaartx began as an internal project—built to power a next-generation marketplace in the GCC region. As we grew, we realized something important: every founder we met wanted to build a marketplace, but nobody had access to a complete, reliable, and scalable system. So we opened up our technology. What started as a single platform became a complete product—Kaartx Kloud—built with real-world marketplace experience, operational knowledge, seller lifecycle expertise, and deep understanding of the GCC market.",
      accentColor: 'bg-primary',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      content: "We believe the future of commerce is multi-vendor. From fashion collectives to regional retail groups, more businesses are shifting toward marketplace models. Kaartx Kloud aims to become the technology backbone that helps these businesses compete, scale, and succeed—starting from the GCC and expanding globally. We envision a marketplace ecosystem where technology removes friction, not creates it. By continuously evolving Kaartx Kloud, we aim to support founders as they expand into new regions and unlock new opportunities.",
      accentColor: 'bg-primary',
    },
  ];

  const roadmapItems = [
    'Deeper logistics and delivery integrations',
    'Enhanced payout automation and financial flows',
    'Advanced analytics for marketplace founders',
    'More seller tools and workflow automations',
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
            A full-stack commerce infrastructure designed to help businesses launch, scale, and manage multi-vendor marketplaces with speed and confidence.
          </p>
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
              Kaartx Kloud is evolving rapidly, with a strong focus on improving marketplace performance, seller efficiency, and operational automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {roadmapItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/60 bg-card/30"
                data-testid={`text-about-roadmap-item-${index}`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-[15px] text-foreground/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-4">
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base sm:text-lg" data-testid="text-about-closing">
              This is just the beginning. We're here to help founders build marketplaces that thrive across the GCC—with the stability, speed, and infrastructure they need to scale confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
