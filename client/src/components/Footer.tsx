import { Linkedin } from 'lucide-react';
import { SiX } from 'react-icons/si';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-3" data-testid="text-footer-logo">
              Kaartx Cloud
            </h3>
            <p className="text-muted-foreground mb-4 max-w-sm" data-testid="text-footer-description">
              Launch and scale your multi-vendor marketplace with complete seller management, subscriptions, and GCC-ready integrations.
            </p>
            <a
              href="mailto:official@kaartx.com"
              className="text-primary hover:underline"
              data-testid="link-footer-email"
            >
              official@kaartx.com
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-features"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-pricing"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('integrations')}
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
                <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                  About
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-blog">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-careers">
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © 2025 Kaartx Cloud. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-linkedin">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-twitter">
              <SiX className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
