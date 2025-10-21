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
import Showcase from '@/components/Showcase';
import Testimonials from '@/components/Testimonials';
import CaseStudy from '@/components/CaseStudy';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import SignupModal from '@/components/SignupModal';

export default function Home() {
  const [location] = useLocation();
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar onOpenSignup={() => setSignupModalOpen(true)} />
      <Hero onOpenSignup={() => setSignupModalOpen(true)} />
      <StatsBar />
      <FeatureGrid />
      <HowItWorks />
      <DeepFeatures />
      <UseCases />
      <IntegrationsMarquee />
      <Security />
      {/* <APISection /> */}
      <Showcase />
      <Testimonials />
      <CaseStudy />
      <Pricing onOpenSignup={() => setSignupModalOpen(true)} />
      <FAQ />
      <FinalCTA onOpenSignup={() => setSignupModalOpen(true)} />
      <BookingSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <SignupModal open={signupModalOpen} onOpenChange={setSignupModalOpen} />
    </div>
  );
}
