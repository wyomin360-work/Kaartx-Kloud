import { Linkedin, Mail, Phone, Clock } from 'lucide-react';
import { SiX } from 'react-icons/si';
import { Link, useLocation } from 'wouter';

export default function Footer() {
  const [location] = useLocation();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email us',
      description: 'support@kloud.kaartx.com',
      detail: 'We aim to respond as quickly as possible'
    },
    {
      icon: Phone,
      title: 'Call us',
      description: '+96898209353',
      detail: 'Sunday through Thursday, 8 AM to 7 PM'
    },
    {
      icon: Clock,
      title: 'Response time',
      description: '< 24 hours',
      detail: 'Average response time'
    }
  ];
  
  const navigateToSection = (id: string) => {
    if (location !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', `#${id}`);
      }
    }
  };

  const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location === '/blog') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCareersClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location === '/careers') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-3" data-testid="text-footer-logo">
              Kloud
            </h3>
            <p className="text-muted-foreground mb-4 max-w-sm" data-testid="text-footer-description">
              Launch and scale your multi-vendor marketplace with complete seller management, subscriptions, and GCC-ready integrations.
            </p>
            <div>
              <p className="text-sm text-muted-foreground mb-1 font-medium" data-testid="text-footer-business-label">Business Inquiries:</p>
              <a
                href="mailto:official@kloud.kaartx.com"
                className="text-primary hover:underline"
                data-testid="link-footer-email"
              >
                official@kloud.kaartx.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateToSection('features')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-features"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('pricing')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-pricing"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('integrations')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-integrations"
                >
                  Integrations
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => scrollToSection('api')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-api"
                >
                  API Docs
                </button>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateToSection('about')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-about"
                >
                  About
                </button>
              </li>
              <li>
                <Link href="/blog" onClick={handleBlogClick} className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" onClick={handleCareersClick} className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-careers">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 pt-8 border-t border-border">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-2"
                data-testid={`card-contact-info-${index}`}
              >
                <Icon className="h-5 w-5 text-muted-foreground mb-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm" data-testid={`text-contact-method-title-${index}`}>
                    {info.title}
                  </h4>
                  <p className="text-foreground font-semibold mb-1" data-testid={`text-contact-method-value-${index}`}>
                    {info.description}
                  </p>
                  <p className="text-xs text-muted-foreground" data-testid={`text-contact-method-detail-${index}`}>
                    {info.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © 2025 Kloud. All rights reserved. Powered by Kaartx.
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/company/kaartx-official" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-linkedin">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://x.com/Kaartx_Official" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-twitter">
              <SiX className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
