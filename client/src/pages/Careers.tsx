import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignupModal from '@/components/SignupModal';

export default function Careers() {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const heroAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const founderAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const whyAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const cultureAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const howWeWorkAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const rolesAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const finalCTAAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  useEffect(() => {
    // Reset scroll restoration to auto for careers page
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'auto';
    }
    // Force scroll to top immediately with no smooth behavior
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const scrollToRoles = () => {
    const rolesSection = document.getElementById('open-roles');
    if (rolesSection) {
      rolesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const whyCards = [
    {
      title: 'Work that actually matters',
      body: 'Everything you build impacts sellers and brands across the GCC.',
    },
    {
      title: 'Extreme ownership',
      body: 'No micromanagement. You lead, you solve, you grow.',
    },
    {
      title: 'Fast execution culture',
      body: 'We move with startup speed — with high clarity and zero chaos.',
    },
    {
      title: 'Global product from Oman',
      body: 'We build for GCC, scale internationally.',
    },
    {
      title: 'Learn 5x faster',
      body: 'Work across product, tech, design, and growth.',
    },
  ];

  const culturePoints = [
    'Be obsessed with sellers & customers',
    'Keep things simple',
    'Move fast without breaking trust',
    'Communicate clearly & respectfully',
    'Own the outcome, not just the task',
    'Build for scale',
    'Stay humble, stay hungry',
  ];

  const howWeWorkPoints = [
    'Small, product-obsessed team — everyone ships.',
    'Remote-friendly (Oman, GCC, India).',
    'Async-first communication.',
    'Clear decisions, no politics.',
    'Simple, reliable solutions over over-engineering.',
  ];

  const roles = [
    {
      title: 'Frontend Developer (React / Next.js)',
      subtitle: 'Muscat / Remote · Full-time',
      description: 'Build fast, smooth UIs for marketplace admins, sellers, and customers.',
      subject: 'Frontend%20Developer%20Application',
    },
    {
      title: 'Backend Developer (Node.js / MongoDB / APIs)',
      subtitle: 'Remote (GCC / India) · Full-time',
      description: 'Work on reliability, integrations, and scalable marketplace logic.',
      subject: 'Backend%20Developer%20Application',
    },
    {
      title: 'UI/UX Designer',
      subtitle: 'Remote · Full-time',
      description: 'Design clean, conversion-focused dashboards and landing pages.',
      subject: 'UIUX%20Designer%20Application',
    },
    {
      title: 'Customer Success Specialist',
      subtitle: 'Muscat / Remote · Full-time',
      description: 'Guide brands and sellers through onboarding and support.',
      subject: 'Customer%20Success%20Application',
    },
    {
      title: 'Business Development Executive',
      subtitle: 'Muscat · Full-time',
      description: 'Bring sellers, brands, and partnerships to Kaartx Kloud.',
      subject: 'Business%20Development%20Application',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenSignup={() => setSignupModalOpen(true)} />

      {/* SECTION 1 - Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 md:pt-48 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.ref}
            className={`text-center mb-10 animate-on-scroll ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="section-title text-foreground mb-5 tracking-tight" data-testid="text-careers-hero-title">
              Build the future of marketplaces with Kaartx Kloud
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-normal mb-8" data-testid="text-careers-hero-subtitle">
              We're creating the GCC's most powerful multi-vendor marketplace platform — and we're looking for smart, driven people who want to build fast, own major outcomes, and grow with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={scrollToRoles}
                size="lg"
                className="min-w-[200px]"
                data-testid="button-view-roles"
              >
                View Open Roles
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="min-w-[200px]"
                data-testid="button-email-cv"
              >
                <a href="mailto:careers@kaartx.com">Email Your CV</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Founder's Note */}
      <section className="py-16 sm:py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={founderAnimation.ref}
            className={`animate-on-scroll ${founderAnimation.isVisible ? 'visible' : ''}`}
          >
            <Card className="max-w-4xl mx-auto p-12 sm:p-16 rounded-3xl border-2" style={{
              background: 'linear-gradient(135deg, #F7F9FC 0%, #FFFFFF 100%)',
              boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.06)',
            }}>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="text-founder-note-title">
                A message from our Founder
              </h2>
              <div className="space-y-6 text-foreground leading-relaxed text-lg" data-testid="text-founder-note-content">
                <p>Kaartx didn't start as a company — it started as a mission.</p>
                <p>A mission to build the GCC's most advanced marketplace ecosystem, and to give entrepreneurs the tools I never had when I started.</p>
                <p>If you join us, you're not becoming 'an employee'.</p>
                <p>You're becoming a builder of the backbone that powers businesses across the region.</p>
                <p>This journey is not easy. It's fast, intense, and full of ownership.</p>
                <p>But if you're someone who wants to do meaningful work and grow 10x in your career — Kaartx Kloud is the right place.</p>
                <p className="font-semibold italic pt-4">— Mohammed Finaz, Founder & CEO</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Why Work at Kaartx Kloud */}
      <section className="py-16 sm:py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-foreground mb-12 text-center" data-testid="text-why-work-title">
            Why work at Kaartx Kloud
          </h2>
          <div
            ref={whyAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8 animate-on-scroll ${whyAnimation.isVisible ? 'visible' : ''}`}
          >
            {whyCards.map((card, index) => (
              <Card
                key={index}
                className="group hover-elevate transition-all duration-300 rounded-2xl border-2 overflow-visible h-full gradient-bg-blue"
                data-testid={`card-why-work-${index}`}
              >
                <div className="relative p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Kaartx Culture Code */}
      <section className="py-16 sm:py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={cultureAnimation.ref}
            className={`animate-on-scroll ${cultureAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="section-title text-foreground mb-12 text-center" data-testid="text-culture-code-title">
              Kaartx Culture Code
            </h2>
            <div className="space-y-4">
              {culturePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4" data-testid={`item-culture-${index}`}>
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - How We Work */}
      <section className="py-16 sm:py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={howWeWorkAnimation.ref}
            className={`animate-on-scroll ${howWeWorkAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="section-title text-foreground mb-12 text-center" data-testid="text-how-we-work-title">
              How We Work
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-foreground leading-relaxed" data-testid="text-how-we-work-description">
                  Kaartx Kloud is still early. That means high impact, high visibility, and plenty of messy, interesting problems. We care more about bias-to-action and ownership than big CV names.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  {howWeWorkPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-4" data-testid={`item-how-we-work-${index}`}>
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-lg text-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - Open Roles */}
      <section id="open-roles" className="scroll-mt-20 py-16 sm:py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-foreground mb-4 text-center" data-testid="text-open-roles-title">
            Open Roles
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto" data-testid="text-open-roles-subtitle">
            These are our current priority hires. If you don't see your exact fit, you can still send an application.
          </p>
          <div
            ref={rolesAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8 animate-on-scroll ${rolesAnimation.isVisible ? 'visible' : ''}`}
          >
            {roles.map((role, index) => {
              const gradients = ['gradient-bg-blue', 'gradient-bg-purple', 'gradient-bg-blue', 'gradient-bg-purple', 'gradient-bg-blue'];
              return (
                <Card
                  key={index}
                  className={`group hover-elevate transition-all duration-300 rounded-2xl border-2 overflow-visible h-full ${gradients[index]}`}
                  data-testid={`card-role-${index}`}
                >
                  <div className="relative p-8 flex flex-col justify-between h-full min-h-[280px]">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight leading-snug">
                        {role.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {role.subtitle}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                    <Button
                      asChild
                      className="w-full"
                      data-testid={`button-apply-${index}`}
                    >
                      <a href={`mailto:careers@kaartx.com?subject=${role.subject}`}>
                        Apply Now
                      </a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Don't See Your Role */}
      <section className="py-16 sm:py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-no-role-title">
            Don't see a role that fits?
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-no-role-description">
            We're always open to meeting smart people who want to build the future of GCC ecommerce.
          </p>
          <Button
            size="lg"
            variant="outline"
            asChild
            data-testid="button-open-application"
          >
            <a href="mailto:careers@kaartx.com?subject=Open%20Application">
              Send an Open Application
            </a>
          </Button>
        </div>
      </section>

      {/* SECTION 8 - Final CTA */}
      <section className="py-16 sm:py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={finalCTAAnimation.ref}
            className={`animate-on-scroll ${finalCTAAnimation.isVisible ? 'visible' : ''}`}
          >
            <Card className="max-w-4xl mx-auto py-12 px-16 rounded-3xl border-2 text-center" style={{
              background: 'linear-gradient(135deg, #F7F9FC 0%, #FFFFFF 100%)',
              boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.06)',
            }}>
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-final-cta-title">
                Ready to build something meaningful?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-final-cta-description">
                Join a team that's shaping the GCC's marketplace ecosystem from the ground up.
              </p>
              <Button
                size="lg"
                asChild
                data-testid="button-join-kaartx"
              >
                <a href="mailto:careers@kaartx.com">Join Kaartx Kloud</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <SignupModal open={signupModalOpen} onOpenChange={setSignupModalOpen} />
    </div>
  );
}
