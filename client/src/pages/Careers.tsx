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
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-20 md:pt-36 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.ref}
            className={`text-center animate-on-scroll ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="max-w-3xl mx-auto mb-8">
              <h1 className="section-title text-foreground mb-6 tracking-tight" data-testid="text-careers-hero-title">
                Build the future of marketplaces<br />with Kaartx Kloud
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed" data-testid="text-careers-hero-subtitle">
                We're creating the GCC's most powerful multi-vendor marketplace platform — and we're looking for smart, driven people who want to build fast, own major outcomes, and grow with us.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
              <Button
                onClick={scrollToRoles}
                size="lg"
                className="shadow-playful group text-base sm:text-lg px-6 sm:px-8 py-6 rounded-2xl font-bold hover:scale-[1.02] transition-transform w-full max-w-80"
                data-testid="button-view-roles"
              >
                View Open Roles
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-6 rounded-2xl font-semibold border-2 hover:scale-[1.02] transition-transform w-full max-w-80"
                data-testid="button-email-cv"
              >
                <a href="mailto:careers@kaartx.com">Email Your CV</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Founder's Note */}
      <section className="py-12 sm:py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={founderAnimation.ref}
            className={`animate-on-scroll ${founderAnimation.isVisible ? 'visible' : ''}`}
          >
            <Card className="max-w-4xl mx-auto p-8 sm:p-12 md:p-16 rounded-2xl border shadow-lg" style={{
              background: 'linear-gradient(135deg, #F7F9FC 0%, #FFFFFF 100%)',
            }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center" data-testid="text-founder-note-title">
                A message from our Founder
              </h2>
              <div className="space-y-5 text-foreground leading-relaxed text-base sm:text-lg" data-testid="text-founder-note-content">
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
      <section className="py-12 sm:py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-foreground mb-10 sm:mb-12 tracking-tight" data-testid="text-why-work-title">
            Why work at Kaartx Kloud
          </h2>
          <div
            ref={whyAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch animate-on-scroll ${whyAnimation.isVisible ? 'visible' : ''}`}
          >
            {whyCards.map((card, index) => (
              <Card
                key={index}
                className="group hover-elevate transition-all duration-300 rounded-2xl border shadow-sm flex flex-col h-full gradient-bg-blue"
                data-testid={`card-why-work-${index}`}
              >
                <div className="relative p-6 sm:p-8 flex flex-col flex-1 min-h-[160px]">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Kaartx Culture Code */}
      <section className="py-12 sm:py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={cultureAnimation.ref}
            className={`animate-on-scroll ${cultureAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="section-title text-foreground mb-4 tracking-tight" data-testid="text-culture-code-title">
              Kaartx Culture Code
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground text-center mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="text-culture-code-subtitle">
              The principles that guide how we work, make decisions, and grow together.
            </p>
            <div className="space-y-5 max-w-3xl mx-auto">
              {culturePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4" data-testid={`item-culture-${index}`}>
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg text-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - How We Work */}
      <section className="py-12 sm:py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={howWeWorkAnimation.ref}
            className={`animate-on-scroll ${howWeWorkAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="section-title text-foreground mb-10 sm:mb-12 tracking-tight" data-testid="text-how-we-work-title">
              How We Work
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="flex items-start">
                <p className="text-base sm:text-lg text-foreground leading-relaxed" data-testid="text-how-we-work-description">
                  Kaartx Kloud is still early. That means high impact, high visibility, and plenty of messy, interesting problems. We care more about bias-to-action and ownership than big CV names.
                </p>
              </div>
              <div>
                <div className="space-y-5">
                  {howWeWorkPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-4" data-testid={`item-how-we-work-${index}`}>
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-base sm:text-lg text-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - Open Roles */}
      <section id="open-roles" className="scroll-mt-20 py-12 sm:py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-foreground mb-4 tracking-tight" data-testid="text-open-roles-title">
            Open Roles
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="text-open-roles-subtitle">
            These are our current priority hires. If you don't see your exact fit, you can still send an application.
          </p>
          <div className="relative">
            <div
              ref={rolesAnimation.ref}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch animate-on-scroll blur-[6px] pointer-events-none select-none ${rolesAnimation.isVisible ? 'visible' : ''}`}
            >
              {roles.map((role, index) => {
                const gradients = ['gradient-bg-blue', 'gradient-bg-purple', 'gradient-bg-blue', 'gradient-bg-purple', 'gradient-bg-blue'];
                return (
                  <Card
                    key={index}
                    className={`group transition-all duration-300 rounded-2xl border shadow-sm flex flex-col h-full ${gradients[index]}`}
                    data-testid={`card-role-${index}`}
                  >
                    <div className="relative p-6 sm:p-8 flex flex-col flex-1 min-h-[300px]">
                      <div className="flex-1 space-y-3 mb-6">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight leading-snug">
                          {role.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {role.subtitle}
                        </p>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                      <Button
                        size="lg"
                        className="shadow-playful group w-full max-w-80 mx-auto mt-auto text-base sm:text-lg px-6 sm:px-8 py-6 rounded-2xl font-bold"
                        data-testid={`button-apply-${index}`}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center shadow-lg border max-w-md mx-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight" data-testid="text-roles-locked-title">
                  Roles will unlock soon
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - Don't See Your Role */}
      <section className="py-12 sm:py-20 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-foreground mb-4 sm:mb-5 tracking-tight" data-testid="text-no-role-title">
            Don't see a role that fits?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-7 sm:mb-8 leading-relaxed" data-testid="text-no-role-description">
            We're always open to meeting smart people who want to build the future of GCC ecommerce.
          </p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-6 rounded-2xl font-semibold border-2 hover:scale-[1.02] transition-transform w-full max-w-80"
              data-testid="button-open-application"
            >
              <a href="mailto:careers@kaartx.com?subject=Open%20Application">
                Send an Open Application
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8 - Final CTA */}
      <section className="py-12 sm:py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={finalCTAAnimation.ref}
            className={`animate-on-scroll ${finalCTAAnimation.isVisible ? 'visible' : ''}`}
          >
            <Card className="max-w-4xl mx-auto p-8 sm:p-12 md:p-16 rounded-2xl border shadow-lg text-center" style={{
              background: 'linear-gradient(135deg, #F7F9FC 0%, #FFFFFF 100%)',
            }}>
              <h2 className="section-title text-foreground mb-5 sm:mb-6 tracking-tight" data-testid="text-final-cta-title">
                Ready to build something meaningful?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-7 sm:mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="text-final-cta-description">
                Join a team that's shaping the GCC's marketplace ecosystem from the ground up.
              </p>
              <Button
                asChild
                size="lg"
                className="shadow-playful group text-base sm:text-lg px-6 sm:px-8 py-6 rounded-2xl font-bold hover:scale-[1.02] transition-transform w-full max-w-80 mx-auto"
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
