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
      description: 'sales@kaartx.com',
      detail: 'Our team responds within 2 hours'
    },
    {
      icon: Phone,
      title: 'Call us',
      description: '+968 1234 5678',
      detail: 'Mon-Fri from 9am to 6pm'
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
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Get in touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Have questions? We'd love to hear from you. Our team is here to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-contact-info-title">
                Let's talk about your marketplace
              </h3>
              <p className="text-muted-foreground mb-8" data-testid="text-contact-info-description">
                Whether you're just getting started or ready to scale, our team is ready to help you build the perfect e-commerce solution for the GCC market.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-4 hover-elevate transition-all" data-testid={`card-contact-info-${index}`}>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1" data-testid={`text-contact-method-title-${index}`}>
                          {info.title}
                        </h4>
                        <p className="text-foreground mb-1" data-testid={`text-contact-method-value-${index}`}>
                          {info.description}
                        </p>
                        <p className="text-sm text-muted-foreground" data-testid={`text-contact-method-detail-${index}`}>
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Benefits */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2" data-testid="text-benefits-title">
                <MessageSquare className="h-5 w-5 text-primary" />
                What to expect
              </h4>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`benefit-item-${index}`}>
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      required
                      data-testid="input-contact-name"
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      required
                      data-testid="input-contact-email"
                      className="h-11"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                    data-testid="input-contact-company"
                    className="h-11"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your marketplace requirements..."
                    rows={6}
                    required
                    data-testid="input-contact-message"
                    className="resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gap-2" 
                  data-testid="button-contact-submit"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
                <p className="text-xs text-center text-muted-foreground" data-testid="text-privacy-notice">
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
