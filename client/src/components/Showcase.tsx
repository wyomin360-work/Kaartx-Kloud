import payoutsDashboard from '@assets/generated_images/Payouts_dashboard_screenshot_d97a4a0e.png';
import analyticsDashboard from '@assets/generated_images/Analytics_dashboard_screenshot_1019de5b.png';
import listingsDashboard from '@assets/generated_images/Listings_dashboard_screenshot_ae5726a1.png';

export default function Showcase() {
  const screenshots = [
    {
      title: 'Payouts Dashboard',
      description: 'Track payments and manage seller payouts with ease',
      image: payoutsDashboard,
    },
    {
      title: 'Analytics Overview',
      description: 'Real-time insights into your marketplace performance',
      image: analyticsDashboard,
    },
    {
      title: 'Product Listings',
      description: 'Manage your entire catalog from one place',
      image: listingsDashboard,
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-showcase-title">
            Powerful dashboards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-showcase-subtitle">
            Everything you need at your fingertips
          </p>
        </div>

        <div className="space-y-16">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="max-w-5xl mx-auto" data-testid={`showcase-${index}`}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-2">{screenshot.title}</h3>
                <p className="text-muted-foreground">{screenshot.description}</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-auto"
                  data-testid={`img-showcase-${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
