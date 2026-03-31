import React from 'react';
import { Link } from 'react-router-dom';

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
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">1. Introduction and Scope</h2>
            <p className="text-shield-text-lm leading-relaxed mb-3">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the DefHire platform (&quot;Platform&quot;), accessible at defjobs.eu, operated by [Martin Shon], IČO: [21047987] (&quot;we&quot;, &quot;us&quot;, &quot;DefHire&quot;).
            </p>
            <p className="text-shield-text-lm leading-relaxed">
              By accessing or using the Platform, you agree to these Terms, our{' '}
              <Link to="/privacy" className="text-shield-navy-lt hover:underline">Privacy Policy</Link>, and our{' '}
              <Link to="/cookies" className="text-shield-navy-lt hover:underline">Cookie Policy</Link>.
              If you do not agree, please do not use the Platform.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">2. Definitions</h2>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li><strong>&quot;Platform&quot;</strong> - the DefHire website at defjobs.eu and all associated services</li>
              <li><strong>&quot;User&quot;</strong> - any person who accesses the Platform, including Candidates and Employers</li>
              <li><strong>&quot;Candidate&quot;</strong> - an individual who browses listings, submits applications, or subscribes to alerts</li>
              <li><strong>&quot;Employer&quot;</strong> - a company or its representative that posts job listings or purchases services</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">3. Services Description</h2>
            
            <h3 className="font-heading font-bold text-sm text-shield-navy-lt uppercase tracking-wide mb-2 mt-4">3.1 For Candidates (free)</h3>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Browse and search job listings in European defense and aerospace</li>
              <li>Submit job applications with CV upload</li>
              <li>Subscribe to job alert emails</li>
            </ul>

            <h3 className="font-heading font-bold text-sm text-shield-navy-lt uppercase tracking-wide mb-2 mt-4">3.2 For Employers (paid)</h3>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Post job listings per selected pricing tier</li>
              <li>Receive candidate applications directly</li>
              <li>Optional: social media promotion of listings</li>
            </ul>
            <p className="text-shield-text-lm leading-relaxed text-sm mt-2">
              Pricing is on the <Link to="/pricing" className="text-shield-navy-lt hover:underline">Pricing page</Link>. All prices exclude VAT unless stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">4. User Obligations</h2>
            
            <h3 className="font-heading font-bold text-sm text-shield-navy-lt uppercase tracking-wide mb-2 mt-4">4.1 General obligations</h3>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Provide accurate and truthful information</li>
              <li>Do not impersonate others or misrepresent affiliation</li>
              <li>Do not use the Platform for unlawful purposes</li>
              <li>Do not scrape, copy, or access data by automated means</li>
              <li>Do not upload malicious files or interfere with platform security</li>
            </ul>

            <h3 className="font-heading font-bold text-sm text-shield-navy-lt uppercase tracking-wide mb-2 mt-4">4.2 Employer-specific obligations</h3>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Post only genuine, lawful job listings for real positions</li>
              <li>Do not post discriminatory listings (EU Directive 2000/78/EC, Czech Act No. 198/2009 Coll.)</li>
              <li>Process candidate data received via the Platform in GDPR compliance as an independent controller</li>
              <li>Do not use candidate data beyond recruitment for the specific applied position</li>
              <li>Do not share candidate CVs with third parties without explicit consent</li>
              <li>Keep your employer portal link confidential - do not share it publicly or with unauthorized persons</li>
              <li>Do not bulk-download or scrape candidate data from the employer portal</li>
              <li>Delete any downloaded CVs once the recruitment process for the relevant position is complete</li>
            </ul>

            <h3 className="font-heading font-bold text-sm text-shield-navy-lt uppercase tracking-wide mb-2 mt-4">4.3 Candidate-specific obligations</h3>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Submit only your own CV and personal information</li>
              <li>Do not submit fraudulent or misleading applications</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">5. Payments and Refunds</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-3">
              Payments are processed via Stripe Payments Europe Ltd. Payment is due at time of purchase, in EUR, subject to applicable VAT.
            </p>
            <p className="text-shield-text-lm leading-relaxed text-sm">
              <strong>Refund policy:</strong> Full refund within 14 days if listing not yet activated (EU Consumer Rights Directive 2011/83/EU). After activation, refunds are handled case-by-case. Contact{' '}
              <a href="mailto:hello@defjobs.eu" className="text-shield-navy-lt hover:underline">hello@defjobs.eu</a> for refund requests.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">6. Intellectual Property</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-3">
              Platform content, design, and software are our property. Employers retain ownership of listing content and grant us a non-exclusive license to display it. Candidates retain ownership of CVs and consent to forwarding to relevant employers.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">7. Limitation of Liability</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-3">
              DefHire is an intermediary. We do not guarantee employment outcomes, verify all posted information, or become party to employment contracts.
            </p>
            <p className="text-shield-text-lm leading-relaxed text-sm">
              Maximum liability: the amount paid to DefHire in the 12 months preceding the claim, or EUR 100, whichever is greater.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">8. Account Termination</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm">
              We may suspend or terminate access for Terms violations, fraudulent content, or data misuse. You may terminate by ceasing use or contacting{' '}
              <a href="mailto:hello@defjobs.eu" className="text-shield-navy-lt hover:underline">hello@defjobs.eu</a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">9. Governing Law</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-3">
              Czech Republic law applies. Disputes resolved by competent Czech courts.
            </p>
            <p className="text-shield-text-lm leading-relaxed text-sm">
              For consumer disputes, EU residents may use the Online Dispute Resolution (ODR) platform at{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-shield-navy-lt hover:underline">
                ec.europa.eu/consumers/odr
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">10. Transparency</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-3">
              In accordance with EU Digital Services Act principles:
            </p>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Paid/promoted/sponsored listings are clearly labeled</li>
              <li>Default listing order is chronological (newest first)</li>
              <li>We do not sell ad space to unrelated third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">11. Changes</h2>
            <p className="text-shield-text-lm leading-relaxed">
              Material changes are communicated via email to registered Employers and via prominent notice on the Platform. Updated Terms take effect 30 days after notification. Continued use constitutes acceptance.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}