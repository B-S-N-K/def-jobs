import React from 'react';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-shield-bg-light">
      {/* Header */}
      <div className="bg-shield-black py-16 px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-shield-off-white uppercase tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-shield-silver text-base max-w-xl mx-auto">
          Last updated: March 2026
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-8 space-y-8">

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">1. Acceptance of Terms</h2>
            <p className="text-shield-text-lm leading-relaxed">
              By accessing or using DefJobs ("the platform"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">2. Use of the Platform</h2>
            <p className="text-shield-text-lm leading-relaxed mb-3">You agree to use DefJobs only for lawful purposes. You must not:</p>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Post false, misleading or fraudulent job listings</li>
              <li>Submit fake applications or impersonate others</li>
              <li>Attempt to scrape or copy data from the platform</li>
              <li>Use the platform to send unsolicited communications</li>
              <li>Interfere with the security or functionality of the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">3. Job Listings</h2>
            <p className="text-shield-text-lm leading-relaxed">
              Employers are responsible for the accuracy and legality of their job listings. DefJobs reserves the right to remove any listing that violates these terms or is deemed inappropriate. Job listings are published for the duration specified in the selected pricing plan.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">4. Payments</h2>
            <p className="text-shield-text-lm leading-relaxed">
              All payments for job listings are processed securely. Prices are listed in Euros (€) and exclude VAT where applicable. Refunds are considered on a case-by-case basis — please contact us within 48 hours of purchase if you have an issue.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">5. Intellectual Property</h2>
            <p className="text-shield-text-lm leading-relaxed">
              All content on DefJobs — including the logo, design, and written content — is the property of DefJobs. You may not reproduce or distribute any content without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">6. Limitation of Liability</h2>
            <p className="text-shield-text-lm leading-relaxed">
              DefJobs acts as a platform connecting employers and candidates. We are not responsible for the outcome of any hiring process, the accuracy of job descriptions, or any disputes between employers and candidates.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">7. Changes to Terms</h2>
            <p className="text-shield-text-lm leading-relaxed">
              We reserve the right to update these Terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">8. Contact</h2>
            <p className="text-shield-text-lm leading-relaxed">
              For any questions about these Terms, please contact us at{' '}
              <a href="mailto:hello@shieldtalent.com" className="text-shield-navy-lt hover:underline">
                hello@shieldtalent.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}