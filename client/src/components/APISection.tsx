import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

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
    <section id="api" className="py-20 sm:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-api-title">
            Built for developers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-api-subtitle">
            Comprehensive REST API to build custom integrations and automate your workflows
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-mono">GET /api/sellers/:id/stats</span>
              <Button variant="outline" size="sm" data-testid="button-view-docs">
                <ExternalLink className="h-4 w-4 mr-2" />
                View API Docs
              </Button>
            </div>
            <pre className="bg-background p-6 rounded-lg overflow-x-auto">
              <code className="text-sm text-foreground font-mono" data-testid="code-api-example">
                {codeExample}
              </code>
            </pre>
          </Card>
        </div>
      </div>
    </section>
  );
}
