import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function APISection() {
  const codeExample = `{
  "seller": {
    "id": "sel_abc123",
    "name": "Premium Electronics",
    "subscription": {
      "plan": "growth",
      "status": "active",
      "next_billing": "2025-11-18"
    },
    "stats": {
      "total_products": 245,
      "total_orders": 1520,
      "pending_payout": 12450.00
    }
  },
  "payout": {
    "cycle": "12-day",
    "next_payout": "2025-10-30",
    "amount": 12450.00,
    "currency": "OMR"
  }
}`;

  return (
    <section id="api" className="bg-card/30 py-12 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div className="mb-10 text-center sm:mb-16">
          <h2
            className="mb-3 text-balance text-2xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:mb-4 sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.2]"
            data-testid="text-api-title"
          >
            Built for developers
          </h2>
          <p
            className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg"
            data-testid="text-api-subtitle"
          >
            Comprehensive REST API to build custom integrations and automate
            your workflows
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-sm text-muted-foreground">
                GET /api/sellers/:id/stats
              </span>
              <Button
                variant="outline"
                size="sm"
                data-testid="button-view-docs"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View API Docs
              </Button>
            </div>
            <pre className="overflow-x-auto rounded-lg bg-background p-6">
              <code
                className="font-mono text-sm text-foreground"
                data-testid="code-api-example"
              >
                {codeExample}
              </code>
            </pre>
          </Card>
        </div>
      </div>
    </section>
  );
}
