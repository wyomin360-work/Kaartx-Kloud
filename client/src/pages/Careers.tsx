import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignupModal from "@/components/SignupModal";

export default function Careers() {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [showAllRoles, setShowAllRoles] = useState(false);
  const heroAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const founderAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const whyAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const cultureAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const howWeWorkAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const rolesAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  useEffect(() => {
    // Reset scroll restoration to auto for careers page
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "auto";
    }
    // Force scroll to top immediately with no smooth behavior
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const scrollToRoles = () => {
    const rolesSection = document.getElementById("open-roles");
    if (rolesSection) {
      rolesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const whyCards = [
    {
      title: "Work that actually matters",
      body: "Everything you build impacts sellers and brands across the GCC.",
    },
    {
      title: "Extreme ownership",
      body: "No micromanagement. You lead, you solve, you grow.",
    },
    {
      title: "Fast execution culture",
      body: "We move with startup speed — with high clarity and zero chaos.",
    },
    {
      title: "Global product from Oman",
      body: "Built for GCC markets, scaling confidently across global regions worldwide.",
    },
    {
      title: "Learn 5x faster",
      body: "Work across product, tech, design, and growth teams globally.",
    },
    {
      title: "Founder-driven mindset",
      body: "Work closely with founders with fast, clear decision-making.",
    },
  ];

  const culturePoints = [
    "Be obsessed with sellers & customers",
    "Keep things simple",
    "Move fast without breaking trust",
    "Communicate clearly & respectfully",
    "Own the outcome, not just the task",
    "Build for scale",
    "Stay humble, stay hungry",
  ];

  const howWeWorkPoints = [
    "Small, product-obsessed team — everyone ships.",
    "Remote-friendly (Oman, GCC, India).",
    "Async-first communication.",
    "Clear decisions, no politics.",
    "Simple, reliable solutions over over-engineering.",
  ];

  const roles = [
    {
      title: "Frontend Developer (React / Next.js)",
      subtitle: "Muscat / Remote · Full-time",
      description:
        "Build fast, smooth UIs for marketplace admins, sellers, and customers.",
      subject: "Frontend%20Developer%20Application",
    },
    {
      title: "Backend Developer (Node.js / MongoDB / APIs)",
      subtitle: "Remote (GCC / India) · Full-time",
      description:
        "Work on reliability, integrations, and scalable marketplace logic.",
      subject: "Backend%20Developer%20Application",
    },
    {
      title: "UI/UX Designer",
      subtitle: "Remote · Full-time",
      description:
        "Design clean, conversion-focused dashboards and landing pages.",
      subject: "UIUX%20Designer%20Application",
    },
    {
      title: "Customer Success Specialist",
      subtitle: "Muscat / Remote · Full-time",
      description: "Guide brands and sellers through onboarding and support.",
      subject: "Customer%20Success%20Application",
    },
    {
      title: "Business Development Executive",
      subtitle: "Muscat · Full-time",
      description: "Bring sellers, brands, and partnerships to Kaartx Kloud.",
      subject: "Business%20Development%20Application",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenSignup={() => setSignupModalOpen(true)} />

      {/* SECTION 1 - Hero */}
      <section className="careers-hero-section bg-background pb-12 pt-28 sm:pb-20 sm:pt-32 md:pb-32 md:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.ref}
            className={`animate-on-scroll text-center ${heroAnimation.isVisible ? "visible" : ""}`}
          >
            <div className="mx-auto mb-8 max-w-3xl">
              <h1
                className="section-title mb-6 tracking-tight text-foreground"
                data-testid="text-careers-hero-title"
              >
                Build the future of marketplaces
                <br />
                with Kaartx Kloud
              </h1>
              <p
                className="text-lg leading-relaxed text-muted-foreground sm:text-xl"
                data-testid="text-careers-hero-subtitle"
              >
                We're creating the GCC's most powerful multi-vendor marketplace
                platform — and we're looking for smart, driven people who want
                to build fast, own major outcomes, and grow with us.
              </p>
            </div>
            <div className="careers-hero-buttons flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button
                onClick={scrollToRoles}
                size="lg"
                className="shadow-playful group w-full rounded-2xl px-6 py-6 text-base font-bold transition-transform hover:scale-[1.02] sm:max-w-80 sm:px-8 sm:text-lg"
                data-testid="button-view-roles"
              >
                View Open Roles
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full rounded-2xl border-2 px-6 py-6 text-base font-semibold backdrop-blur-sm transition-transform hover:scale-[1.02] sm:max-w-80 sm:px-8 sm:text-lg"
                data-testid="button-email-cv"
              >
                <a href="mailto:official@kloud.kaartx.com?subject=CV%20-%20Kaartx%20Kloud&body=Hi%20Kaartx%20Kloud%20team%2C%0A%0AMy%20name%20is%20%5BYour%20Name%5D%20and%20I%27d%20like%20to%20share%20my%20CV%20for%20your%20future%20hiring%20rounds.%0A%0A%E2%80%A2%20Role%20%2F%20area%20of%20interest%3A%0A%E2%80%A2%20Current%20location%3A%0A%E2%80%A2%20LinkedIn%20profile%3A%0A%0AI%27ve%20attached%20my%20CV%20for%20your%20reference.%0A%0AThanks%2C%0A%5BYour%20Name%5D">
                  Email Your CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Founder's Note */}
      <section className="bg-background py-12 sm:py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={founderAnimation.ref}
            className={`animate-on-scroll ${founderAnimation.isVisible ? "visible" : ""}`}
          >
            <Card
              className="founder-card-mobile mx-auto max-w-4xl rounded-2xl border p-8 shadow-lg sm:p-12 md:p-16"
              style={{
                background: "linear-gradient(135deg, #F7F9FC 0%, #FFFFFF 100%)",
              }}
            >
              <h2
                className="mb-6 text-center text-2xl font-bold text-foreground sm:mb-8 sm:text-3xl"
                data-testid="text-founder-note-title"
              >
                A message from our Founder
              </h2>
              <div
                className="space-y-5 text-base leading-relaxed text-foreground sm:text-lg"
                data-testid="text-founder-note-content"
              >
                <p>
                  Kaartx didn't start as a company — it started as a mission.
                </p>
                <p>
                  A mission to build the GCC's most advanced marketplace
                  ecosystem, and to give entrepreneurs the tools I never had
                  when I started.
                </p>
                <p>If you join us, you're not becoming 'an employee'.</p>
                <p>
                  You're becoming a builder of the backbone that powers
                  businesses across the region.
                </p>
                <p>
                  This journey is not easy. It's fast, intense, and full of
                  ownership.
                </p>
                <p>
                  But if you're someone who wants to do meaningful work and grow
                  10x in your career — Kaartx Kloud is the right place.
                </p>
                <p className="pt-4 font-semibold italic">
                  — Mohammed Finaz, Founder & CEO
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Why Work at Kaartx Kloud */}
      <section className="why-work-section bg-background py-12 sm:py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="section-title mb-10 tracking-tight text-foreground sm:mb-12"
            data-testid="text-why-work-title"
          >
            Why work at Kaartx Kloud
          </h2>
          <div
            ref={whyAnimation.ref}
            className={`why-work-grid animate-on-scroll grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 ${whyAnimation.isVisible ? "visible" : ""}`}
          >
            {whyCards.map((card, index) => (
              <Card
                key={index}
                className="hover-elevate gradient-bg-blue group flex h-full flex-col rounded-2xl border shadow-sm transition-all duration-300"
                data-testid={`card-why-work-${index}`}
              >
                <div className="relative flex min-h-[160px] flex-1 flex-col p-6 sm:p-8">
                  <h3 className="mb-3 text-lg font-bold leading-snug tracking-tight text-foreground sm:text-xl">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {card.body}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Kaartx Culture Code */}
      <section className="culture-code-section bg-background py-12 sm:py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            ref={cultureAnimation.ref}
            className={`animate-on-scroll ${cultureAnimation.isVisible ? "visible" : ""}`}
          >
            <h2
              className="section-title mb-4 tracking-tight text-foreground"
              data-testid="text-culture-code-title"
            >
              Kaartx Culture Code
            </h2>
            <p
              className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:mb-12 sm:text-lg"
              data-testid="text-culture-code-subtitle"
            >
              The principles that guide how we work, make decisions, and grow
              together.
            </p>
            <div className="culture-code-list mx-auto max-w-3xl space-y-5">
              {culturePoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  data-testid={`item-culture-${index}`}
                >
                  <Check className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <p className="text-base leading-relaxed text-foreground sm:text-lg">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - How We Work */}
      <section className="how-we-work-section bg-background py-12 sm:py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            ref={howWeWorkAnimation.ref}
            className={`animate-on-scroll ${howWeWorkAnimation.isVisible ? "visible" : ""}`}
          >
            <h2
              className="section-title mb-10 tracking-tight text-foreground sm:mb-12"
              data-testid="text-how-we-work-title"
            >
              How We Work
            </h2>
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-start">
                <p
                  className="max-w-md text-base leading-loose text-foreground sm:text-lg"
                  data-testid="text-how-we-work-description"
                >
                  Kaartx Kloud is still early. That means high impact, high
                  visibility, and plenty of messy, interesting problems. We care
                  more about bias-to-action and ownership than big CV names. We
                  value curiosity, speed, and accountability in daily work.
                  Ownership matters more than titles or years of experience. You
                  will see the impact of your work clearly and quickly. Progress
                  beats perfection every time.
                </p>
              </div>
              <div>
                <div className="how-we-work-list space-y-5">
                  {howWeWorkPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                      data-testid={`item-how-we-work-${index}`}
                    >
                      <Check className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-foreground sm:text-lg">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - Open Roles */}
      <section
        id="open-roles"
        className="open-roles-section scroll-mt-20 bg-background py-12 sm:py-20 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="section-title mb-4 tracking-tight text-foreground"
            data-testid="text-open-roles-title"
          >
            Open Roles
          </h2>
          <p
            className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:mb-12 sm:text-lg"
            data-testid="text-open-roles-subtitle"
          >
            These are our current priority hires. If you don't see your exact
            fit, you can still send an application.
          </p>
          <div className="relative">
            <div
              ref={rolesAnimation.ref}
              className={`open-roles-grid animate-on-scroll pointer-events-none grid select-none grid-cols-1 items-stretch gap-5 blur-[6px] sm:gap-6 md:grid-cols-2 lg:grid-cols-3 ${rolesAnimation.isVisible ? "visible" : ""}`}
            >
              {roles.map((role, index) => {
                const gradients = [
                  "gradient-bg-blue",
                  "gradient-bg-purple",
                  "gradient-bg-blue",
                  "gradient-bg-purple",
                  "gradient-bg-blue",
                ];
                return (
                  <Card
                    key={index}
                    className={`role-card group flex h-full flex-col rounded-2xl border shadow-sm transition-all duration-300 ${gradients[index]} ${!showAllRoles && index >= 2 ? "mobile-hidden" : ""}`}
                    data-testid={`card-role-${index}`}
                  >
                    <div className="relative flex min-h-[300px] flex-1 flex-col p-6 sm:p-8">
                      <div className="mb-6 flex-1 space-y-3">
                        <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground sm:text-xl">
                          {role.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {role.subtitle}
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {role.description}
                        </p>
                      </div>
                      <Button
                        size="lg"
                        className="role-apply-btn shadow-playful group mx-auto mt-auto w-full max-w-80 rounded-2xl px-6 py-6 text-base font-bold sm:px-8 sm:text-lg"
                        data-testid={`button-apply-${index}`}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
            {/* Mobile: View all roles toggle button */}
            {roles.length > 2 && (
              <div className="view-all-roles-btn mt-4 md:hidden">
                <Button
                  variant="outline"
                  onClick={() => setShowAllRoles(!showAllRoles)}
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium"
                  data-testid="button-view-all-roles"
                >
                  {showAllRoles ? "Hide open roles" : "View all open roles"}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${showAllRoles ? "rotate-180" : ""}`}
                  />
                </Button>
              </div>
            )}
            {/* Roles locked overlay - compact on mobile */}
            <div className="roles-locked-overlay absolute inset-0 flex items-center justify-center">
              <Card className="roles-locked-card rounded-xl border bg-card/95 px-6 py-4 shadow-sm backdrop-blur-sm md:border-0 md:bg-transparent md:shadow-none">
                <h3
                  className="text-center text-lg font-bold tracking-tight text-foreground sm:text-xl md:text-2xl"
                  data-testid="text-roles-locked-title"
                >
                  Roles will unlock soon
                </h3>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - Don't See Your Role */}
      <section className="no-role-section bg-background py-12 sm:py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className="section-title mb-4 tracking-tight text-foreground sm:mb-5"
            data-testid="text-no-role-title"
          >
            Don't see a role that fits?
          </h2>
          <p
            className="mb-7 text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg"
            data-testid="text-no-role-description"
          >
            We're always open to meeting smart people who want to build the
            future of GCC ecommerce.
          </p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full max-w-80 rounded-2xl border-2 px-6 py-6 text-base font-semibold backdrop-blur-sm transition-transform hover:scale-[1.02] sm:px-8 sm:text-lg"
              data-testid="button-open-application"
            >
              <a href="mailto:official@kloud.kaartx.com?subject=Open%20Application%20-%20Kaartx%20Kloud%20Careers&body=Hi%20Kaartx%20Kloud%20team%2C%0A%0AI%27d%20like%20to%20submit%20an%20open%20application%20to%20join%20Kaartx%20Kloud.%0A%0A%E2%80%A2%20Roles%20I%27m%20interested%20in%3A%0A%E2%80%A2%20Experience%20summary%3A%0A%E2%80%A2%20Current%20location%3A%0A%E2%80%A2%20LinkedIn%20profile%3A%0A%0AI%27ve%20attached%20my%20CV%20for%20your%20review.%0A%0AThanks%2C%0A%5BYour%20Name%5D">
                Send an Open Application
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <SignupModal open={signupModalOpen} onOpenChange={setSignupModalOpen} />
    </div>
  );
}
