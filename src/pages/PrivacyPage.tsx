import React from 'react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-shield-bg-light">
      {/* Header */}
      <div className="bg-shield-black py-16 px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-shield-off-white uppercase tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-shield-silver text-base max-w-xl mx-auto">
          Last updated: March 2026
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-8 space-y-8">
          
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">1. Introduction</h2>
            <p className="text-shield-text-lm leading-relaxed">
              DefJobs ("we", "us", "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use and protect information you provide when using our platform at shieldtalent.com.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">2. Data We Collect</h2>
            <p className="text-shield-text-lm leading-relaxed mb-3">We collect the following types of data:</p>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Name and email address when you submit a job application</li>
              <li>Email address when you create a job alert</li>
              <li>CV or LinkedIn profile link when submitted with an application</li>
              <li>Company name, contact details and job information when posting a job</li>
              <li>Basic usage data (pages visited, browser type) via analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>To forward job applications to the relevant employer</li>
              <li>To send job alert emails based on your preferences</li>
              <li>To process job postings from employers</li>
              <li>To improve and maintain our platform</li>
              <li>To communicate with you about your account or inquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">4. Data Storage</h2>
            <p className="text-shield-text-lm leading-relaxed">
              Your data is stored securely using Supabase, a GDPR-compliant database provider with servers located in the European Union. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">5. Your Rights</h2>
            <p className="text-shield-text-lm leading-relaxed mb-3">Under GDPR, you have the right to:</p>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with your national data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">6. Cookies</h2>
            <p className="text-shield-text-lm leading-relaxed">
              We use minimal cookies necessary for the platform to function. We do not use advertising cookies or third-party tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">7. Contact</h2>
            <p className="text-shield-text-lm leading-relaxed">
              For any privacy-related questions or data requests, please contact us at{' '}
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