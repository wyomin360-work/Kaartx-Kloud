import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import DeepFeatures from '@/components/DeepFeatures';
import UseCases from '@/components/UseCases';
import IntegrationsMarquee from '@/components/IntegrationsMarquee';
import Security from '@/components/Security';
import APISection from '@/components/APISection';
import Showcase from '@/components/Showcase';
import Testimonials from '@/components/Testimonials';
import CaseStudy from '@/components/CaseStudy';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <FeatureGrid />
      <HowItWorks />
      <DeepFeatures />
      <UseCases />
      <IntegrationsMarquee />
      <Security />
      <APISection />
      <Showcase />
      <Testimonials />
      <CaseStudy />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
