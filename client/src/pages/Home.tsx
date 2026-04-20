import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'wouter';
import { motion, useScroll, useTransform } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import DeepFeatures from '@/components/DeepFeatures';
import UseCases from '@/components/UseCases';
import IntegrationsMarquee from '@/components/IntegrationsMarquee';
import Security from '@/components/Security';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import About from '@/components/About';
import FinalCTA from '@/components/FinalCTA';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SignupModal, { type PlanSelection } from '@/components/SignupModal';

const defaultStarterPlan: PlanSelection = {
  planId: 'starter-monthly',
  planName: 'Starter',
  billingCycle: 'monthly',
  price: 35,
  currency: 'OMR',
};

type StackedSectionProps = {
  children: React.ReactNode;
  index?: number;
  disableSticky?: boolean;
};

const StackedSection = ({
  children,
  index = 0,
  disableSticky = false,
}: StackedSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Add gap to account for 64px navbar + some extra offset
    offset: ['start 100px', 'end 100px'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(6px)']);

  return (
    <motion.div
      ref={containerRef}
      className={`w-full flex justify-center ${disableSticky ? '' : 'sticky'} mb-8 sm:mb-16`}
      style={{
        ...(disableSticky
          ? {}
          : {
              top: '100px',
              zIndex: index, 
              scale,
              opacity,
              filter: blur,
              transformOrigin: 'top center',
            }),
      }}
    >
      <div
        className={`
          w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:max-w-6xl 
          bg-background overflow-hidden
          ${
            disableSticky
              ? ''
              : 'border border-border/50 shadow-[0_-12px_45px_rgb(0,0,0,0.15)] rounded-[2rem] sm:rounded-[3rem]'
          }
        `}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [location] = useLocation();
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanSelection | undefined>(undefined);

  const handleOpenSignup = (plan?: PlanSelection) => {
    setSelectedPlan(plan);
    setSignupModalOpen(true);
  };

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';

    if (isReload) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
      }
    } else {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <div
        className={`min-h-screen transition-[filter] duration-200 z-0 ${
          signupModalOpen ? 'blur-sm pointer-events-none' : ''
        }`}
      >
        {/* ✅ NAVBAR FIXED ABOVE EVERYTHING */}
        <div className="relative z-[9999]">
          <Navbar onOpenSignup={() => handleOpenSignup()} />
        </div>

        <Hero onOpenSignup={() => handleOpenSignup()} />

        <StatsBar />

        {/* --- STACKED SECTIONS GROUP --- */}
        {/* Wrapped in a div so their sticky behavior ends when this div scrolls out */}
        <div className="relative z-10">
          <StackedSection index={1}>
            <FeatureGrid />
          </StackedSection>

          <StackedSection index={2}>
            <HowItWorks />
          </StackedSection>
        </div>

        {/* --- NORMAL SCROLLING SECTIONS 1 --- */}
        <div className="relative z-20 bg-background">
          <DeepFeatures />
        </div>

        {/* --- STACKED SECTIONS GROUP 2 --- */}
        <div className="relative z-10">
          <StackedSection index={1}>
            <UseCases />
          </StackedSection>

          <StackedSection index={2}>
            <IntegrationsMarquee />
          </StackedSection>

          <StackedSection index={3}>
            <Security />
          </StackedSection>

          <StackedSection index={4}>
            <Testimonials />
          </StackedSection>
        </div>

        {/* --- NORMAL SCROLLING SECTIONS 2 --- */}
        <div className="relative z-30 bg-background">
          <Pricing onOpenSignup={handleOpenSignup} />
          <FAQ />
          <BookingSection />
          <About />
          <FinalCTA onOpenSignup={() => handleOpenSignup()} />
          <Footer />
        </div>

        <WhatsAppButton />
      </div>

      <SignupModal
        open={signupModalOpen}
        onOpenChange={setSignupModalOpen}
        selectedPlan={selectedPlan}
      />
    </>
  );
}