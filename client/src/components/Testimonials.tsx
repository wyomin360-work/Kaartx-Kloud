import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import avatar1 from '@assets/generated_images/Testimonial_avatar_1_dfc0a3d0.png';
import avatar2 from '@assets/generated_images/Testimonial_avatar_2_361cae35.png';
import avatar3 from '@assets/generated_images/Testimonial_avatar_3_ff8230ce.png';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "We launched our marketplace in 3 weeks with 250+ sellers onboarded. The automated subscription billing and 12-day payout cycles saved us 4 months of development. We're now processing OMR 500K monthly GMV.",
      author: "Ahmed Al-Said",
      role: "Founder & CEO",
      company: "Oman Fashion Hub · Muscat",
      avatar: avatar1,
    },
    {
      quote: "The TAP Payments and Asyad shipping integrations were game-changers for our UAE operations. We processed 15,000+ orders in our first quarter with zero payment failures. The GCC compliance features saved us weeks of legal work.",
      author: "Fatima Al-Balushi",
      role: "CEO & Co-founder",
      company: "Gulf Retail Connect · Dubai",
      avatar: avatar2,
    },
    {
      quote: "As an agency, we've deployed 5 white-label marketplaces on Kaartx Cloud for retail clients across Saudi Arabia and UAE. Each launch took under 2 weeks. Our clients love the seller dashboard and automated commission tracking.",
      author: "Omar Hassan",
      role: "CTO & Technical Lead",
      company: "Digital Commerce Partners · Riyadh",
      avatar: avatar3,
    },
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-card/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-testimonials-title">
            Trusted by marketplace builders
          </h2>
        </div>

        <div className="relative">
          <Card className="p-8 sm:p-12">
            <div className="mb-8">
              <p className="text-xl sm:text-2xl text-foreground mb-6" data-testid={`text-testimonial-quote-${activeIndex}`}>
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].author} />
                  <AvatarFallback>{testimonials[activeIndex].author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground" data-testid={`text-testimonial-author-${activeIndex}`}>
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${activeIndex}`}>
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button variant="outline" size="icon" onClick={prev} data-testid="button-testimonial-prev">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === activeIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                    }`}
                    data-testid={`dot-${index}`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={next} data-testid="button-testimonial-next">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
