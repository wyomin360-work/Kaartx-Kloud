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
import SignupModal from '@/components/SignupModal';

export default function Home() {
  const [location] = useLocation();
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  useEffect(() => {
    // Disable browser's automatic scroll restoration to prevent jumps on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Scroll to section if there's a hash in the URL, otherwise scroll to top
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the # character
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Always start at the top on page load/refresh
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

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
      {/* <Showcase /> */}
      <Testimonials />
      <CaseStudy />
      <Pricing onOpenSignup={() => setSignupModalOpen(true)} />
      <FAQ />
      <BookingSection />
      <About />
      <FinalCTA onOpenSignup={() => setSignupModalOpen(true)} />
      <Footer />
      <WhatsAppButton />
      <SignupModal open={signupModalOpen} onOpenChange={setSignupModalOpen} />
    </div>
  );
}
