import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import DeepFeatures from '@/components/DeepFeatures';
import UseCases from '@/components/UseCases';
import IntegrationsMarquee from '@/components/IntegrationsMarquee';
import Security from '@/components/Security';
// import APISection from '@/components/APISection';
// import Showcase from '@/components/Showcase';
import Testimonials from '@/components/Testimonials';
import CaseStudy from '@/components/CaseStudy';
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

export default function Home() {
  const [location] = useLocation();
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanSelection>(defaultStarterPlan);

  const handleOpenSignup = (plan: PlanSelection) => {
    setSelectedPlan(plan);
    setSignupModalOpen(true);
  };

  useEffect(() => {
    // Disable browser's automatic scroll restoration to prevent jumps on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Detect if this is a page reload vs. fresh navigation
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';

    if (isReload) {
      // On refresh: scroll to top and clear hash
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
      }
    } else {
      // Fresh navigation: scroll to section if there's a hash
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
        className={`min-h-screen transition-[filter] duration-200 ${
          signupModalOpen ? 'blur-sm pointer-events-none' : ''
        }`}
      >
        <Navbar onOpenSignup={() => handleOpenSignup(defaultStarterPlan)} />
        <Hero onOpenSignup={() => handleOpenSignup(defaultStarterPlan)} />
        <StatsBar />
        <FeatureGrid />
        <HowItWorks />
        <DeepFeatures />
        <UseCases />
        <IntegrationsMarquee />
        <Security />
        {/* <APISection /> */}
        {/* <Showcase /> */}
        <Testimonials />
        <CaseStudy />
        <Pricing onOpenSignup={handleOpenSignup} />
        <FAQ />
        <BookingSection />
        <About />
        <FinalCTA onOpenSignup={() => handleOpenSignup(defaultStarterPlan)} />
        <Footer />
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
