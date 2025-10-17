import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function APISection() {
  const codeExample = `{
  "marketplace": {
    "id": "mktp_123abc",
    "name": "Your Marketplace",
    "sellers": 1250,
    "products": 45000,
    "orders": {
      "total": 12500,
      "pending": 45,
      "processing": 120
    }
  },
  "payout": {
    "cycle": "12-day",
    "next_payout": "2025-10-29",
    "amount": 125000.00,
    "currency": "USD"
  }
}`;

  return (
    <section id="api" className="py-20 sm:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-api-title">
            API-first by design
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-api-subtitle">
            Build custom integrations and automate workflows with our comprehensive REST API
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-mono">GET /api/marketplace/stats</span>
              <Button variant="outline" size="sm" data-testid="button-view-docs">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Docs
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
