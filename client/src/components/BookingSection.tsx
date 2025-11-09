import { useEffect } from 'react';

export default function BookingSection() {
  useEffect(() => {
    // Guard against duplicate script injection
    if ((window as any).Cal?.loaded) {
      // Cal is already loaded, just reinitialize the widget
      (window as any).Cal('inline', {
        elementOrSelector: '#cal-booking-widget',
        calLink: 'kaartx/30min',
        layout: 'month_view',
        config: {
          theme: 'auto',
        },
      });
      
      (window as any).Cal('ui', {
        styles: { branding: { brandColor: '#1E2A5E' } },
        hideEventTypeDetails: false,
      });
      return;
    }

    // Load Cal.com embed script
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar: any = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || ([] as any[]);
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || ([] as any[]);
            typeof namespace === 'string'
              ? (cal.ns[namespace] = api) && p(api, ar)
              : p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    // Initialize Cal
    (window as any).Cal('init', { origin: 'https://cal.com' });

    // Set up the inline embed
    (window as any).Cal('inline', {
      elementOrSelector: '#cal-booking-widget',
      calLink: 'kaartx/30min',
      layout: 'month_view',
      config: {
        theme: 'auto',
      },
    });

    // Configure UI with brand colors
    (window as any).Cal('ui', {
      styles: { branding: { brandColor: '#1E2A5E' } },
      hideEventTypeDetails: false,
    });
  }, []);

  return (
    <section id="booking" className="pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-20 md:pb-32 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 sm:mb-4"
            data-testid="text-booking-title"
          >
            Book a Sales Call
          </h2>
          <p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium"
            data-testid="text-booking-subtitle"
          >
            Schedule a personalized demo with our team. We'll show you how Kaartx Kloud can transform your marketplace vision into reality.
          </p>
        </div>

        {/* Cal.com Booking Widget */}
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden border border-border bg-card shadow-xl"
            data-testid="container-booking-widget"
          >
            <div
              id="cal-booking-widget"
              style={{ width: '100%', height: '100%', minHeight: '630px' }}
            ></div>
          </div>

          {/* Info Cards Below */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-5 bg-muted/30 rounded-xl" data-testid="card-booking-detail-0">
              <p className="text-sm text-muted-foreground mb-1">Duration</p>
              <p className="text-lg font-bold text-foreground">15-30 Minutes</p>
            </div>
            <div className="text-center p-5 bg-muted/30 rounded-xl" data-testid="card-booking-detail-1">
              <p className="text-sm text-muted-foreground mb-1">Meeting Type</p>
              <p className="text-lg font-bold text-foreground">Video Call</p>
            </div>
            <div className="text-center p-5 bg-muted/30 rounded-xl" data-testid="card-booking-detail-2">
              <p className="text-sm text-muted-foreground mb-1">Response Time</p>
              <p className="text-lg font-bold text-foreground">Instant</p>
            </div>
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-center text-muted-foreground mt-6 font-medium">
            Your information is secure and will only be used to schedule your demo. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
