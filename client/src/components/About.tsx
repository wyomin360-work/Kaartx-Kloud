import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const contentAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  const roadmapItems = [
    'deeper logistics and delivery integrations',
    'enhanced payout automation and financial flows',
    'advanced analytics for marketplace founders',
    'more seller tools and workflow automations',
    'improved subscription and billing capabilities',
    'stronger integrations across the GCC commerce ecosystem',
  ];

  return (
    <section id="about" className="py-12 sm:py-20 md:py-32 bg-background scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-10 sm:mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-primary mb-3 sm:mb-4" data-testid="text-about-title">
            About Kaartx Kloud
          </h2>
        </div>

        <div 
          ref={contentAnimation.ref}
          className={`space-y-10 sm:space-y-12 animate-on-scroll ${contentAnimation.isVisible ? 'visible' : ''}`}
        >
          <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed" data-testid="text-about-intro">
            Kaartx Kloud is a full-stack commerce infrastructure designed to help businesses launch, scale, and manage their own multi-vendor marketplaces with speed and confidence. We combine modern technology, intuitive design, and deep marketplace expertise to help founders build powerful commerce ecosystems—without the complexity of traditional development.
          </p>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4" data-testid="text-about-mission-heading">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed" data-testid="text-about-mission">
              Our mission is simple: empower the next generation of marketplace founders with a platform that's fast, reliable, and built for scale.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4" data-testid="text-about-story-heading">
              Our Story
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed" data-testid="text-about-story">
              Kaartx began as an internal project—built to power a next-generation marketplace in the GCC region. As we grew, we realized something important: every founder we met wanted to build a marketplace, but nobody had access to a complete, reliable, and scalable system.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed mt-4">
              So we opened up our technology. What started as a single platform became a complete product—Kaartx Kloud—built with real-world marketplace experience, operational knowledge, seller lifecycle expertise, and deep understanding of the GCC market. Today, Kaartx Kloud reflects everything we learned building Kaartx: a system that is practical, powerful, and ready for real operations.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4" data-testid="text-about-vision-heading">
              Our Vision
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed" data-testid="text-about-vision">
              We believe the future of commerce is multi-vendor. From fashion collectives to regional retail groups, more businesses are shifting toward marketplace models. Kaartx Kloud aims to become the technology backbone that helps these businesses compete, scale, and succeed—starting from the GCC and expanding globally.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4" data-testid="text-about-roadmap-heading">
              The Road Ahead
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed" data-testid="text-about-roadmap-intro">
              Kaartx Kloud is evolving rapidly, with a strong focus on improving marketplace performance, seller efficiency, and operational automation.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed mt-4">
              Our upcoming roadmap includes:
            </p>
            <ul className="mt-4 space-y-2">
              {roadmapItems.map((item, index) => (
                <li 
                  key={index} 
                  className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed flex items-start"
                  data-testid={`text-about-roadmap-item-${index}`}
                >
                  <span className="mr-3 text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed mt-6" data-testid="text-about-closing">
              This is just the beginning. We're here to help founders build marketplaces that thrive across the GCC—with the stability, speed, and infrastructure they need to scale confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
