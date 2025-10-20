import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'How quickly can I launch my marketplace?',
      answer: 'Most customers launch within 2-4 weeks. We help you configure branding, categories, seller plans, and integrations to get you live fast.',
    },
    {
      question: 'What is the 12-day payout system?',
      answer: 'Sellers receive automatic payouts 12 days after order completion. This gives you time for quality checks while maintaining fast payment cycles for sellers.',
    },
    {
      question: 'Do you support GCC payment gateways?',
      answer: 'Yes! TAP Payments integration is built-in with support for OMR, AED, SAR, and other GCC currencies. We also support Stripe for global payments.',
    },
    {
      question: 'Can I white-label the platform?',
      answer: 'Absolutely. All plans include basic branding customization. Growth and Enterprise plans get full white-label capabilities with custom domains.',
    },
    {
      question: 'How does seller subscription management work?',
      answer: 'You create subscription plans (monthly/yearly) and sellers pay via TAP. Auto-renewal handles recurring payments, and you can suspend/reactivate sellers as needed.',
    },
    {
      question: 'Is Asyad shipping integrated?',
      answer: 'Yes, Asyad integration is ready out of the box for Oman-based marketplaces. Shipping labels, tracking, and returns are all automated.',
    },
    {
      question: 'Can sellers upload products in bulk?',
      answer: 'Yes, sellers can download an Excel template and bulk upload products. All listings go through your admin approval workflow.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'Starter plans get email support, Growth plans get priority support, and Enterprise customers get dedicated account managers with SLA guarantees.',
    },
    {
      question: 'Can I manage multiple marketplaces?',
      answer: 'Yes, Enterprise plans support multi-marketplace management from a single dashboard — perfect for agencies managing client marketplaces.',
    },
    {
      question: 'Do you provide API access?',
      answer: 'Yes, comprehensive REST API access is included in all plans. Build custom integrations and automate workflows as needed.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 gradient-text" data-testid="text-faq-title">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground font-medium" data-testid="text-faq-subtitle">
            Everything you need to know about Kaartx Cloud
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-border/40 rounded-2xl px-6 bg-card/30 hover-elevate transition-all"
            >
              <AccordionTrigger 
                className="hover:no-underline font-bold text-base py-5" 
                data-testid={`faq-question-${index}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent 
                className="text-muted-foreground font-medium leading-relaxed pb-5" 
                data-testid={`faq-answer-${index}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
