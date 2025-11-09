import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Clock, MessageSquare, CheckCircle2, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: 'Message sent!',
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email us',
      description: 'support@kaartx.com',
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

  const benefits = [
    'Free consultation with our experts',
    'Custom demo tailored to your needs',
    'Flexible pricing for your business',
    'Dedicated onboarding support'
  ];

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 sm:mb-4" data-testid="text-contact-title">
            Get in touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium" data-testid="text-contact-subtitle">
            Have questions? We'd love to hear from you. Our team is here to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-6 sm:space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 sm:mb-4" data-testid="text-contact-info-title">
                Let's talk about your marketplace
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium" data-testid="text-contact-info-description">
                Whether you're just getting started or ready to scale, our team is ready to help you build the perfect e-commerce solution for the GCC market.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-5 hover-elevate transition-all border-border/40 bg-card/50 backdrop-blur-sm" 
                    data-testid={`card-contact-info-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground mb-1.5 text-base" data-testid={`text-contact-method-title-${index}`}>
                          {info.title}
                        </h4>
                        <p className="text-foreground font-semibold mb-1 text-base" data-testid={`text-contact-method-value-${index}`}>
                          {info.description}
                        </p>
                        <p className="text-sm text-muted-foreground font-medium" data-testid={`text-contact-method-detail-${index}`}>
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Benefits */}
            <div className="pt-4">
              <h4 className="font-bold text-foreground mb-6 flex items-center gap-2.5 text-lg" data-testid="text-benefits-title">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                What to expect
              </h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3.5" data-testid={`benefit-item-${index}`}>
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="p-6 sm:p-8 lg:p-10 border-border/40 shadow-xl bg-card/80 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2.5">
                      Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      required
                      data-testid="input-contact-name"
                      className="h-12 border-border/60 focus:border-primary/50 font-medium placeholder:text-muted-foreground/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2.5">
                      Email <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      required
                      data-testid="input-contact-email"
                      className="h-12 border-border/60 focus:border-primary/50 font-medium placeholder:text-muted-foreground/60 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-foreground mb-2.5">
                    Company
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                    data-testid="input-contact-company"
                    className="h-12 border-border/60 focus:border-primary/50 font-medium placeholder:text-muted-foreground/60 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2.5">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your marketplace requirements..."
                    rows={6}
                    required
                    data-testid="input-contact-message"
                    className="resize-none border-border/60 focus:border-primary/50 font-medium placeholder:text-muted-foreground/60 transition-colors"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gap-2.5 h-12 text-base font-bold shadow-lg hover:shadow-xl transition-all" 
                  data-testid="button-contact-submit"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
                <p className="text-xs text-center text-muted-foreground font-medium leading-relaxed pt-2" data-testid="text-privacy-notice">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
