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
      quote: "Kaartx Cloud transformed how we run our marketplace. The automation features alone saved us 20 hours per week.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "MarketHub",
      avatar: avatar1,
    },
    {
      quote: "The API integration was seamless. We had our custom workflow up and running in just days, not weeks.",
      author: "Michael Chen",
      role: "CTO",
      company: "BrandFlow",
      avatar: avatar2,
    },
    {
      quote: "Finally, a marketplace platform that actually understands what sellers need. Game changer for our business.",
      author: "David Rodriguez",
      role: "Founder",
      company: "SellerOS",
      avatar: avatar3,
    },
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            Trusted by marketplace leaders
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
