import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Building2, Rocket, ShoppingBag, Users, Building, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const USE_CASES = {
  brands: {
    title: 'Brands',
    icon: Building2,
    description: "Run your brand's store or marketplace with full control from day one.",
    benefits: [
      'Full white-label control',
      'Maintain brand standards with approval workflows',
      'Earn commissions from partner sellers',
      'Own your customer relationships',
    ],
    color: 'text-indigo-600',
  },
  startups: {
    title: 'Startups',
    icon: Rocket,
    description: 'Turn your concept into a live business without massive upfront development costs.',
    benefits: [
      'Launch in days, not months',
      'Subscription-based pricing',
      'Grow without re-platforming',
      'GCC payment integrations ready',
    ],
    color: 'text-cyan-600',
  },
  retail: {
    title: 'Retailers',
    icon: ShoppingBag,
    description: 'Expand your retail business with a flexible, headless commerce platform.',
    benefits: [
      'Expand product range without inventory',
      'Automated payments & settlements',
      'Tap & Asyad integrations included',
      'Mobile-ready storefronts',
    ],
    color: 'text-purple-600',
  },
  agencies: {
    title: 'Agencies',
    icon: Users,
    description: 'Build and manage commerce platforms for multiple clients with ease.',
    benefits: [
      'Multi-tenant architecture',
      'White-label for each client',
      'Revenue sharing & commission-ready architecture',
      'Centralized client management',
    ],
    color: 'text-rose-600',
  },
  enterprises: {
    title: 'Enterprise',
    icon: Building,
    description: 'Enterprise-grade commerce infrastructure with full customization.',
    benefits: [
      'Dedicated infrastructure (on request)',
      'Custom integrations & workflows',
      'Priority support & SLA',
      'Advanced analytics & reporting',
    ],
    color: 'text-emerald-600',
  },
};

export default function UseCases() {
  const useCaseKeys = Object.keys(USE_CASES);
  const [activeTab, setActiveTab] = useState(useCaseKeys[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Determine if the center of the section is near the center of the screen
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      
      // Stop if section center is within 150px of viewport center
      const threshold = 150; 
      const centered = Math.abs(sectionCenter - viewportCenter) < threshold;
      
      setIsCentered(centered);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Condition: ONLY rotate if NOT hovered AND NOT centered
    if (isHovered || isCentered) return;

    const intervalId = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = useCaseKeys.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % useCaseKeys.length;
        return useCaseKeys[nextIndex];
      });
    }, 1000); // 1 second per tab as requested

    return () => clearInterval(intervalId);
  }, [isHovered, isCentered, useCaseKeys]);

  const animation = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section ref={sectionRef} className="bg-background pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-border/10">
        
        <div 
          ref={animation.ref}
          className={`flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 mb-16 pt-8 animate-on-scroll ${animation.isVisible ? 'visible' : ''}`}
        >
          <div className="w-full md:w-[55%]">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Built for <br className="hidden md:block" />
              <span className="gradient-text">every business model</span>
            </h2>
          </div>
          
          <div className="w-full md:w-[40%] flex flex-col items-start pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-background/50 shadow-sm mb-5">
              <Target className="w-[14px] h-[14px] text-muted-foreground" />
              <span className="text-[11px] sm:text-xs font-semibold text-foreground tracking-wide uppercase">Use Cases</span>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
              Whether you're a startup testing traction or an enterprise scaling operations, the infrastructure adapts to your specific requirements.
            </p>
          </div>
        </div>

        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
              <TabsList className="inline-flex flex-nowrap md:flex-wrap items-center gap-2 sm:gap-4 h-14 p-1.5 bg-muted/50 backdrop-blur-md rounded-full border border-border shadow-sm min-w-max md:min-w-0">
                {Object.entries(USE_CASES).map(([key, useCase]) => {
                  const Icon = useCase.icon;
                  return (
                    <TabsTrigger 
                      key={key}
                      value={key} 
                      className="flex items-center gap-2.5 py-2.5 px-5 rounded-full border border-transparent data-[state=active]:bg-background data-[state=active]:shadow-md data-[state=active]:border-border/80 transition-all duration-300"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-semibold tracking-wide">{useCase.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            <div className="relative min-h-[450px]">
              {Object.entries(USE_CASES).map(([key, useCase]) => (
                <TabsContent 
                  key={key} 
                  value={key} 
                  className="mt-0 absolute inset-0 transition-all duration-500 data-[state=active]:opacity-100 data-[state=active]:translate-y-0 data-[state=active]:z-10 data-[state=inactive]:opacity-0 data-[state=inactive]:translate-y-4 data-[state=inactive]:-z-10"
                >
                  <Card className="rounded-[2.5rem] border-[1.5px] border-border/80 shadow-xl overflow-hidden bg-background h-full">
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="w-full md:w-[45%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-muted/20 border-b md:border-b-0 md:border-r border-border/50">
                        <div className="h-16 w-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-8 shadow-sm">
                          <useCase.icon className={`h-8 w-8 ${useCase.color}`} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                          For {useCase.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                          {useCase.description}
                        </p>
                      </div>

                      <div className="w-full md:w-[55%] p-8 sm:p-12 lg:p-16 bg-background flex flex-col justify-center">
                        <h4 className="text-xl font-bold text-foreground mb-8">Key Advantages</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                          {useCase.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                               <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                                  <div className="h-2 w-2 rounded-full bg-primary" />
                               </div>
                               <span className="text-base text-muted-foreground font-medium">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
