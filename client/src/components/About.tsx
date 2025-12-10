import { Target, BookOpen, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const introAnimation = useScrollAnimation<HTMLDivElement>(0.15);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const roadmapAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  const sections = [
    {
      icon: Target,
      title: 'Our Mission',
      content: "Our mission is to empower the next generation of marketplace founders with a platform that's fast, reliable, and built for scale. We're committed to simplifying the complexity of multi-vendor commerce by offering the technology, workflows, and operational foundation founders need to succeed. By combining speed, stability, and real marketplace intelligence, we help entrepreneurs focus on growth—not on building infrastructure from scratch.",
      gradient: 'from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-600',
    },
    {
      icon: BookOpen,
      title: 'Our Story',
      content: "Kaartx began as an internal project—built to power a next-generation marketplace in the GCC region. As we grew, we realized something important: every founder we met wanted to build a marketplace, but nobody had access to a complete, reliable, and scalable system. So we opened up our technology. What started as a single platform became a complete product—Kaartx Kloud—built with real-world marketplace experience, operational knowledge, seller lifecycle expertise, and deep understanding of the GCC market.",
      gradient: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-600',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      content: "We believe the future of commerce is multi-vendor. From fashion collectives to regional retail groups, more businesses are shifting toward marketplace models. Kaartx Kloud aims to become the technology backbone that helps these businesses compete, scale, and succeed—starting from the GCC and expanding globally.",
      gradient: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-600',
    },
  ];

  const roadmapItems = [
    'Deeper logistics and delivery integrations',
    'Enhanced payout automation and financial flows',
    'Advanced analytics for marketplace founders',
    'More seller tools and workflow automations',
    'Improved subscription and billing capabilities',
    'Stronger integrations across the GCC commerce ecosystem',
  ];

  return (
    <section id="about" className="py-12 sm:py-20 md:py-32 bg-card/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-12 sm:mb-14 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-foreground mb-4 sm:mb-5" data-testid="text-about-title">
            About Kaartx Kloud
          </h2>
        </div>

        <div 
          ref={introAnimation.ref}
          className={`max-w-4xl mx-auto mb-12 sm:mb-14 animate-on-scroll ${introAnimation.isVisible ? 'visible' : ''}`}
        >
          <Card className="p-8 sm:p-10 bg-background border-border/60 !rounded-2xl">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center" data-testid="text-about-intro">
              Kaartx Kloud is a full-stack commerce infrastructure designed to help businesses launch, scale, and manage their own multi-vendor marketplaces with speed and confidence. We combine modern technology, intuitive design, and deep marketplace expertise to help founders build powerful commerce ecosystems—without the complexity of traditional development.
            </p>
          </Card>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-14 animate-on-scroll ${cardsAnimation.isVisible ? 'visible' : ''}`}
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            const stagger = ['', 'stagger-1', 'stagger-2'];
            
            return (
              <Card
                key={index}
                className={`p-8 bg-background border-border/60 !rounded-2xl hover-elevate transition-all duration-300 ${stagger[index]}`}
                data-testid={`about-card-${index}`}
              >
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-6 border border-border/40`}>
                  <Icon className={`h-7 w-7 ${section.iconColor}`} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`text-about-${section.title.toLowerCase().replace(' ', '-')}-heading`}>
                  {section.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-about-${section.title.toLowerCase().replace(' ', '-')}`}>
                  {section.content}
                </p>
              </Card>
            );
          })}
        </div>

        <div 
          ref={roadmapAnimation.ref}
          className={`max-w-4xl mx-auto pt-6 animate-on-scroll ${roadmapAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-about-roadmap-heading">
              The Road Ahead
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-about-roadmap-intro">
              Kaartx Kloud is evolving rapidly, with a strong focus on improving marketplace performance, seller efficiency, and operational automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {roadmapItems.map((item, index) => (
              <div 
                key={index}
                className="group p-5 rounded-2xl bg-background border border-border/50 hover-elevate transition-all duration-300"
                data-testid={`text-about-roadmap-item-${index}`}
              >
                <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base sm:text-lg" data-testid="text-about-closing">
              This is just the beginning. We're here to help founders build marketplaces that thrive across the GCC—with the stability, speed, and infrastructure they need to scale confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
