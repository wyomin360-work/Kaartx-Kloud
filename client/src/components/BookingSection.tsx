import { useEffect, useRef, useState } from "react";

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Guard against duplicate script injection
    if ((window as any).Cal?.loaded) {
      // Cal is already loaded, just reinitialize the widget
      (window as any).Cal("inline", {
        elementOrSelector: "#cal-booking-widget",
        calLink: "kaartx/30min",
        layout: "month_view",
        config: {
          theme: "auto",
        },
      });

      (window as any).Cal("ui", {
        styles: { branding: { brandColor: "#1E2A5E" } },
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
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || ([] as any[]);
            typeof namespace === "string"
              ? (cal.ns[namespace] = api) && p(api, ar)
              : p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal
    (window as any).Cal("init", { origin: "https://cal.com" });

    // Set up the inline embed
    (window as any).Cal("inline", {
      elementOrSelector: "#cal-booking-widget",
      calLink: "kaartx/30min",
      layout: "month_view",
      config: {
        theme: "auto",
      },
    });

    // Configure UI with brand colors
    (window as any).Cal("ui", {
      styles: { branding: { brandColor: "#1E2A5E" } },
      hideEventTypeDetails: false,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="scroll-mt-20 bg-background pb-12 pt-8 sm:pb-20 sm:pt-12 md:pb-32 md:pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-16">
          <h2
            className="section-title mb-3 text-foreground sm:mb-4"
            data-testid="text-booking-title"
          >
            Book a Sales Call
          </h2>
          <p
            className="mx-auto max-w-2xl text-base font-normal text-muted-foreground sm:text-lg"
            data-testid="text-booking-subtitle"
          >
            Schedule a personalized demo with our team. See how Kaartx Kloud
            adapts to your business—whether you're launching a store, a
            marketplace, or both.
          </p>
        </div>

        {/* Cal.com Booking Widget */}
        <div className="mx-auto max-w-4xl">
          <div
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl"
            data-testid="container-booking-widget"
          >
            <div
              id="cal-booking-widget"
              style={{ width: "100%", height: "100%", minHeight: "630px" }}
            ></div>
          </div>

          {/* Info Cards Below */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div
              className="rounded-xl bg-muted/30 p-5 text-center"
              data-testid="card-booking-detail-0"
            >
              <p className="mb-1 text-sm text-muted-foreground">Duration</p>
              <p className="text-lg font-bold text-foreground">15-30 Minutes</p>
            </div>
            <div
              className="rounded-xl bg-muted/30 p-5 text-center"
              data-testid="card-booking-detail-1"
            >
              <p className="mb-1 text-sm text-muted-foreground">Meeting Type</p>
              <p className="text-lg font-bold text-foreground">Video Call</p>
            </div>
            <div
              className="rounded-xl bg-muted/30 p-5 text-center"
              data-testid="card-booking-detail-2"
            >
              <p className="mb-1 text-sm text-muted-foreground">
                Response Time
              </p>
              <p className="text-lg font-bold text-foreground">Instant</p>
            </div>
          </div>

          {/* Privacy Notice */}
          <p className="mt-6 text-center text-xs font-medium text-muted-foreground">
            Your information is secure and will only be used to schedule your
            demo. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
