import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'How quickly can I launch my store or marketplace?',
      answer: 'Most customers launch within 2–4 weeks. Whether you\'re launching a single-brand store or a full marketplace, we help you configure branding, categories, seller setup if applicable, and integrations to go live fast.',
    },
    {
      question: 'What is the 12-day payout system?',
      answer: 'Kaartx Kloud uses a default 12-day payout cycle, meaning sellers become eligible for payout 12 days after an order is successfully delivered. This window allows time for returns, disputes, and quality checks before funds are released. The 12-day period is default for all tenants, but Growth and Pro (Enterprise) users can customize their payout cycle duration from their admin settings.',
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
      question: 'How does seller subscription work?',
      answer: 'If you run a marketplace, you can create seller subscription plans (monthly or yearly) and collect payments via TAP. Auto-renewals are handled automatically, and you can suspend or reactivate sellers as needed. If you\'re running a single store, seller subscriptions are simply not used.',
    },
    {
      question: 'Is Asyad shipping integrated?',
      answer: 'Yes. Asyad shipping is ready out of the box for Oman-based businesses. It supports both store orders and marketplace orders, with automated shipping labels, tracking, and returns.',
    },
    {
      question: 'Can sellers upload products in bulk?',
      answer: 'Yes. In marketplaces, sellers can download an Excel template and bulk upload products. All listings pass through your admin approval workflow.\n\nStore owners can also use bulk uploads to manage large product catalogs internally.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'Starter plans include email and WhatsApp support. Growth plans get priority email and WhatsApp support with faster response times. Enterprise customers receive a dedicated account manager with SLA-backed support.',
    },
    {
      question: 'Can I manage multiple marketplaces?',
      answer: 'Yes. Enterprise plans support managing multiple marketplaces or stores from a single dashboard. This is especially useful for agencies, franchises, and businesses operating multiple brands.',
    },
    {
      question: 'Do you provide API access?',
      answer: 'Not yet. API access is under development and will be available in future releases. The goal is to offer REST APIs for integrations, automation, and custom workflows across both stores and marketplaces.',
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-20 md:py-32 bg-background scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="section-title text-primary mb-3 sm:mb-4" data-testid="text-faq-title">
            Frequently asked questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-normal" data-testid="text-faq-subtitle">
            Everything you need to know about Kaartx Kloud
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
                className="hover:no-underline font-bold text-base py-5 text-left" 
                data-testid={`faq-question-${index}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent 
                className="text-muted-foreground font-medium leading-relaxed pb-5" 
                data-testid={`faq-answer-${index}`}
              >
                {faq.answer.split('\n\n').map((paragraph, i) => (
                  <p key={i} className={i > 0 ? 'mt-3' : ''}>{paragraph}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
