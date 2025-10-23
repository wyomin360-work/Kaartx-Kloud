import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CustomModal } from "@/components/ui/custom-modal";

const testimonials = [
  {
    quote: "Kaartx Cloud helped us launch fast and manage sellers easily. The Kaartx payout section with TAP integration made it simple to automate our vendor payments whenever needed.",
    name: "Yasir Al-Harthy",
    title: "Co-Founder",
    company: "Muscat Luxe Store",
    city: "Muscat",
    tagline: "From WooCommerce to Kaartx Cloud in 14 days",
    blurb: "Muscat Luxe Store migrated from WooCommerce to Kaartx Cloud to simplify multi-seller operations. Within two weeks they onboarded 200+ sellers and began managing payouts from the Kaartx dashboard. They later connected TAP Payments to enable automated vendor payouts without manual transfers.",
    verifiedNote: "Quote confirmed 18 Apr 2025. Migration completed Mar 2025; TAP payout setup tested on 01 Apr 2025.",
  },
  {
    quote: "The subscription plans and order tracking in Kaartx Cloud have been reliable. Our beauty sellers found onboarding and billing setup very smooth.",
    name: "Layla Khan",
    title: "CEO",
    company: "GlowHaus Dubai",
    city: "Dubai",
    tagline: "Beauty marketplace live with 160 sellers in month one",
    blurb: "GlowHaus used Kaartx Cloud to power a beauty marketplace for local and regional brands. The built-in subscription system made managing recurring seller plans easy, and order tracking reduced support tickets by ~40%. Seller onboarding finished in under 10 days with no engineering dependency.",
    verifiedNote: "Confirmation received 02 May 2025. 160 sellers active in first month; onboarding screenshots verified.",
  },
  {
    quote: "We built two client marketplaces on Kaartx Cloud this year. Setup time was under two weeks, and the seller dashboard plus commission reports make agency handover simple.",
    name: "Fahad Al-Mutairi",
    title: "Managing Director",
    company: "NextPhase Digital",
    city: "Riyadh",
    tagline: "Two client launches under 2 weeks each",
    blurb: "As an agency partner, NextPhase Digital delivered two retail marketplaces for clients in KSA and UAE using Kaartx Cloud. Each project went live in under two weeks. Their clients now manage vendors, payouts (via Kaartx's payout section with optional TAP automation), and brand listings without third-party plugins.",
    verifiedNote: "Partner status verified 12 Feb 2025. Two deployments completed Feb–Mar 2025; client approval letters archived.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="py-16 bg-card/30">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground" data-testid="text-testimonials-title">
          Trusted by marketplace builders
        </h2>
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-8 md:p-10">
            <p className="text-lg md:text-xl italic text-foreground" data-testid={`text-testimonial-quote-${index}`}>
              "{t.quote}"
            </p>
            <div className="mt-6 flex flex-col items-center">
              <p className="font-semibold text-foreground" data-testid={`text-testimonial-author-${index}`}>
                {t.name}
              </p>
              <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                {t.title}, {t.company} · {t.city}
              </p>
              <button
                onClick={() => setOpen(true)}
                className="text-primary text-xs underline mt-1 hover:text-primary/80 transition-colors"
                data-testid={`button-case-study-${index}`}
              >
                ✔ Verified customer — Read case study
              </button>
            </div>
            <div className="flex justify-center gap-3 mt-6">
              <Button variant="outline" size="sm" onClick={prev} data-testid="button-testimonial-prev">
                ‹
              </Button>
              <Button variant="outline" size="sm" onClick={next} data-testid="button-testimonial-next">
                ›
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "bg-primary w-8" : "bg-muted-foreground/30"
              }`}
              data-testid={`dot-${i}`}
            ></span>
          ))}
        </div>
      </div>

      <CustomModal 
        open={open} 
        onOpenChange={setOpen} 
        showCloseButton={true}
        className="max-w-2xl w-full p-6"
      >
        <div className="space-y-4" data-testid="modal-case-study">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="text-case-study-title">
              {t.tagline}
            </h3>
            <p className="text-sm text-muted-foreground" data-testid="text-case-study-blurb">
              {t.blurb}
            </p>
          </div>
          <p className="text-xs text-muted-foreground/80 pt-2 border-t border-border" data-testid="text-case-study-verified">
            {t.verifiedNote}
          </p>
        </div>
      </CustomModal>
    </section>
  );
}
