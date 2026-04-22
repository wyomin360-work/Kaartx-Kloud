export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-foreground">
          Terms of Service
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: 12th December, 2025
        </p>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="mb-3 text-xl font-semibold">1. Introduction</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Kaartx Kloud ("Kaartx", "we", "our", or "us") provides a
              cloud-based multi-vendor marketplace platform that enables users
              to create and manage online marketplaces. By accessing or using
              Kaartx Kloud, you agree to these Terms of Service.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              If you do not agree, please do not use the platform.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">2. Eligibility</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You must be at least 18 years old and capable of entering into a
              legally binding agreement to use Kaartx Kloud.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              3. Account Registration
            </h2>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                You must provide accurate and complete information during
                signup.
              </li>
              <li>Each marketplace name and email must be unique.</li>
              <li>
                You are responsible for maintaining the confidentiality of your
                login credentials.
              </li>
              <li>You are responsible for all activity under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              4. Free Trial & Subscriptions
            </h2>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Kaartx Kloud may offer a free trial (e.g., 14 days).</li>
              <li>No credit card is required unless explicitly stated.</li>
              <li>
                After the trial, continued use may require a paid subscription.
              </li>
              <li>Pricing, limits, and features may vary by plan.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              5. Use of the Platform
            </h2>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              You agree not to:
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Use Kaartx Kloud for illegal or unauthorized purposes</li>
              <li>Host prohibited, fraudulent, or infringing content</li>
              <li>Attempt to breach platform security or infrastructure</li>
              <li>Abuse system limits or misuse integrations</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              6. Marketplace Responsibility
            </h2>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              You are solely responsible for:
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Products, sellers, and content listed on your marketplace</li>
              <li>Compliance with local laws, taxes, and regulations</li>
              <li>Seller onboarding, disputes, and customer obligations</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Kaartx Kloud acts as a technology provider only, not a seller or
              merchant.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              7. Integrations & Third-Party Services
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Kaartx Kloud may integrate with third-party services (e.g.,
              payment gateways, logistics providers). We are not responsible for
              third-party service outages, errors, or policies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              8. Intellectual Property
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              All Kaartx Kloud software, branding, and content are owned by
              Kaartx. You may not copy, modify, or redistribute any part of the
              platform without permission.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">9. Termination</h2>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              We may suspend or terminate your account:
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>For violation of these terms</li>
              <li>For non-payment (if applicable)</li>
              <li>For security or legal reasons</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              You may stop using the service at any time.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              10. Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Kaartx Kloud is provided "as is". We are not liable for indirect,
              incidental, or consequential damages, including loss of revenue,
              data, or business.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">11. Changes to Terms</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may update these Terms from time to time. Continued use of the
              platform constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">12. Contact</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              For any questions regarding these Terms, contact:{" "}
              <a
                href="mailto:support@kloud.kaartx.com"
                className="text-primary hover:underline"
              >
                support@kloud.kaartx.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
