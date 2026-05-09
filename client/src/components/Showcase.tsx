import payoutsDashboard from "@assets/generated_images/Payouts_dashboard_screenshot_d97a4a0e.png";
import analyticsDashboard from "@assets/generated_images/Analytics_dashboard_screenshot_1019de5b.png";
import listingsDashboard from "@assets/generated_images/Listings_dashboard_screenshot_ae5726a1.png";

export default function Showcase() {
  const screenshots = [
    {
      title: "Payouts Dashboard",
      description: "Track payments and manage seller payouts with ease",
      image: payoutsDashboard,
    },
    {
      title: "Analytics Overview",
      description: "Real-time insights into your marketplace performance",
      image: analyticsDashboard,
    },
    {
      title: "Product Listings",
      description: "Manage your entire catalog from one place",
      image: listingsDashboard,
    },
  ];

  return (
    <section className="bg-background py-12 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div className="mb-10 text-center sm:mb-16 md:mb-20">
          <h2
            className="mb-3 text-balance text-2xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:mb-4 sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.2]"
            data-testid="text-showcase-title"
          >
            Powerful dashboards
          </h2>
          <p
            className="mx-auto max-w-3xl text-base font-medium text-muted-foreground sm:text-lg md:text-xl"
            data-testid="text-showcase-subtitle"
          >
            Everything you need at your fingertips
          </p>
        </div>

        <div className="space-y-24">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="mx-auto max-w-6xl"
              data-testid={`showcase-${index}`}
            >
              <div className="mb-12 text-center">
                <h3 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                  {screenshot.title}
                </h3>
                <p className="text-lg font-medium text-muted-foreground">
                  {screenshot.description}
                </p>
              </div>
              <div className="shadow-playful overflow-hidden rounded-3xl border-2 border-border">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="h-auto w-full"
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
