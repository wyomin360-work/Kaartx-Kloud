import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  Clock,
  MessageSquare,
  CheckCircle2,
  Send,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email us",
      description: "support@kloud.kaartx.com",
      detail: "We aim to respond as quickly as possible",
    },
    {
      icon: Phone,
      title: "Call us",
      description: "+96898209353",
      detail: "Sunday through Thursday, 9 AM to 5 PM",
    },
    {
      icon: Clock,
      title: "Response time",
      description: "< 24 hours",
      detail: "Average response time",
    },
  ];

  const benefits = [
    "Free consultation with our experts",
    "Custom demo tailored to your needs",
    "Flexible pricing for your business",
    "Dedicated onboarding support",
  ];

  return (
    <section className="scroll-mt-20 bg-white py-12 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-16">
          <h2
            className="mb-3 text-3xl font-black text-foreground sm:mb-4 sm:text-4xl md:text-5xl"
            data-testid="text-contact-title"
          >
            Get in touch
          </h2>
          <p
            className="mx-auto max-w-2xl text-base font-medium text-muted-foreground sm:text-lg"
            data-testid="text-contact-subtitle"
          >
            Have questions? We'd love to hear from you. Our team is here to help
            you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-6 sm:space-y-10">
            <div>
              <h3
                className="mb-3 text-2xl font-extrabold text-foreground sm:mb-4 sm:text-3xl"
                data-testid="text-contact-info-title"
              >
                Let's talk about your marketplace
              </h3>
              <p
                className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base"
                data-testid="text-contact-info-description"
              >
                Whether you're just getting started or ready to scale, our team
                is ready to help you build the perfect e-commerce solution for
                the GCC market.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="hover-elevate border-border/40 bg-card/50 p-5 backdrop-blur-sm transition-all"
                    data-testid={`card-contact-info-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-xl bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4
                          className="mb-1.5 text-base font-bold text-foreground"
                          data-testid={`text-contact-method-title-${index}`}
                        >
                          {info.title}
                        </h4>
                        <p
                          className="mb-1 text-base font-semibold text-foreground"
                          data-testid={`text-contact-method-value-${index}`}
                        >
                          {info.description}
                        </p>
                        <p
                          className="text-sm font-medium text-muted-foreground"
                          data-testid={`text-contact-method-detail-${index}`}
                        >
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
              <h4
                className="mb-6 flex items-center gap-2.5 text-lg font-bold text-foreground"
                data-testid="text-benefits-title"
              >
                <div className="rounded-lg bg-primary/10 p-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                What to expect
              </h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3.5"
                    data-testid={`benefit-item-${index}`}
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="font-medium leading-relaxed text-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="border-border/40 bg-card/80 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2.5 block text-sm font-bold text-foreground"
                    >
                      Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Smith"
                      required
                      data-testid="input-contact-name"
                      className="h-12 border-border/60 font-medium transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2.5 block text-sm font-bold text-foreground"
                    >
                      Email <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@company.com"
                      required
                      data-testid="input-contact-email"
                      className="h-12 border-border/60 font-medium transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2.5 block text-sm font-bold text-foreground"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your company name"
                    data-testid="input-contact-company"
                    className="h-12 border-border/60 font-medium transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2.5 block text-sm font-bold text-foreground"
                  >
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your marketplace requirements..."
                    rows={6}
                    required
                    data-testid="input-contact-message"
                    className="resize-none border-border/60 font-medium transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full gap-2.5 text-base font-bold shadow-lg transition-all hover:shadow-xl"
                  data-testid="button-contact-submit"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
                <p
                  className="pt-2 text-center text-xs font-medium leading-relaxed text-muted-foreground"
                  data-testid="text-privacy-notice"
                >
                  By submitting this form, you agree to our privacy policy.
                  We'll never share your information.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
