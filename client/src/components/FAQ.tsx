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
      answer: 'Most customers launch within 2-4 weeks. Our onboarding team helps you configure your marketplace, import sellers, and go live smoothly.',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! We offer a 14-day free trial on our Starter and Growth plans. No credit card required to start.',
    },
    {
      question: 'Can I migrate from another platform?',
      answer: 'Absolutely. We provide migration tools and dedicated support to help you transfer sellers, products, and data from your existing platform.',
    },
    {
      question: 'What payment gateways do you support?',
      answer: 'We integrate with TAP Payments, Stripe, PayPal, and can add custom payment gateways for Enterprise customers.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for Starter and Growth plans. Enterprise plans have custom pricing based on your requirements.',
    },
    {
      question: 'How does the 12-day payout cycle work?',
      answer: 'Sellers receive payouts 12 days after order completion, giving you time for quality checks while maintaining fast payment cycles.',
    },
    {
      question: 'Can I white-label the platform?',
      answer: 'Yes! All plans include basic branding. Enterprise customers get full white-label capabilities with custom domains.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'Starter plans get email support, Growth plans get priority support, and Enterprise customers get dedicated account managers.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We use bank-level encryption, SOC 2 compliance, and regular security audits to protect your data.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription anytime. No long-term contracts required for Starter and Growth plans.',
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-faq-title">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-faq-subtitle">
            Everything you need to know about Kaartx Cloud
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline" data-testid={`faq-question-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid={`faq-answer-${index}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
