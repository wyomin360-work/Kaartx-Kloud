export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-transparent px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-foreground">
          Privacy Policy
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: 12th December, 2025
        </p>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="mb-3 text-xl font-semibold">1. Overview</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Kaartx Kloud respects your privacy. This Privacy Policy explains
              how we collect, use, and protect your information when you use our
              platform.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              2. Information We Collect
            </h2>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              We may collect:
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Name, email address, and account details</li>
              <li>Marketplace name and configuration data</li>
              <li>Login activity and usage data</li>
              <li>Technical data (IP address, browser, device type)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              3. How We Use Information
            </h2>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              We use your information to:
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Create and manage your account</li>
              <li>Provide platform features and support</li>
              <li>Improve performance, security, and usability</li>
              <li>Communicate important service updates</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">4. Data Sharing</h2>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              We do not sell your personal data. We may share data only:
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                With trusted service providers (payments, hosting, analytics)
              </li>
              <li>If required by law or legal process</li>
              <li>To protect Kaartx Kloud's rights or security</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">5. Data Security</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We implement reasonable technical and organizational measures to
              protect your data. However, no system is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              6. Cookies & Analytics
            </h2>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              Kaartx Kloud may use cookies or similar technologies to:
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Maintain sessions</li>
              <li>Improve user experience</li>
              <li>Analyze platform usage</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              You can control cookies via your browser settings.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">7. Data Retention</h2>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              We retain your data only as long as necessary to:
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Provide services</li>
              <li>Meet legal and operational requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">8. Your Rights</h2>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              You may request to:
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Access or correct your data</li>
              <li>Delete your account (subject to legal obligations)</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              9. Changes to Privacy Policy
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may update this policy periodically. Updates will be posted on
              this page.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">10. Contact</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              For privacy-related questions or requests:{" "}
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
