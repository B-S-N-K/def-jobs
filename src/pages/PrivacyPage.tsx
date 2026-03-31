import React from 'react';
import { Link } from 'react-router-dom';

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

          {/* 1. DATA CONTROLLER */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">1. Data Controller</h2>
            <p className="text-shield-text-lm leading-relaxed mb-3">
              DefJobs (operated via defjobs.eu) is a job board platform connecting civilian professionals with European defense and aerospace employers.
            </p>
            <ul className="text-shield-text-lm space-y-1.5 text-sm leading-relaxed">
              <li><strong>Controller:</strong> [Martin Shon], IČO: [21047987]</li>
              <li><strong>Address:</strong> Available upon request via hello@defjobs.eu</li>
              <li><strong>Email:</strong> <a href="mailto:hello@defjobs.eu" className="text-shield-navy-lt hover:underline">hello@defjobs.eu</a></li>
            </ul>
            <p className="text-shield-text-lm leading-relaxed text-sm mt-3">
              Personal data is processed in accordance with Regulation (EU) 2016/679 (GDPR), Czech Act No. 110/2019 Coll. on personal data processing, and the ePrivacy Directive (2002/58/EC) as transposed into Czech law.
            </p>
          </section>

          {/* 2. CATEGORIES OF DATA SUBJECTS */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">2. Categories of Data Subjects</h2>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li><strong>Job Seekers (Candidates)</strong> - individuals who browse job listings, submit applications, upload CVs, or sign up for job alerts</li>
              <li><strong>Employers</strong> - representatives of companies who post job listings or purchase services</li>
              <li><strong>Website Visitors</strong> - any person who visits defjobs.eu</li>
            </ul>
          </section>

          {/* 3. WHAT DATA WE COLLECT */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">3. What Personal Data We Collect</h2>
            
            <h3 className="font-heading font-bold text-sm text-shield-navy-lt uppercase tracking-wide mb-2 mt-4">3.1 Data provided directly by you</h3>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li><strong>Job applications:</strong> Full name, email address, phone number (optional), CV/resume file (PDF or DOCX), cover letter text, preferred language</li>
              <li><strong>Job alerts:</strong> Email address, job category preferences, preferred language</li>
              <li><strong>Contact form:</strong> Name, email address, message content</li>
              <li><strong>Employer accounts:</strong> Company name, contact person name, email, phone, billing information (processed by Stripe)</li>
            </ul>

            <h3 className="font-heading font-bold text-sm text-shield-navy-lt uppercase tracking-wide mb-2 mt-4">3.2 Data collected automatically</h3>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li><strong>Technical data:</strong> IP address (anonymized by GA4), browser type and version, operating system, device type</li>
              <li><strong>Analytics data:</strong> Pages visited, time on pages, referral source, scroll depth, session duration - collected via Google Analytics 4 (only with your consent)</li>
              <li><strong>Advertising data:</strong> Cross-site visitor identification for ad targeting - collected via Meta Pixel (only with your consent)</li>
              <li><strong>Cookies:</strong> See our <Link to="/cookies" className="text-shield-navy-lt hover:underline">Cookie Policy</Link> for a complete list</li>
            </ul>

            <h3 className="font-heading font-bold text-sm text-shield-navy-lt uppercase tracking-wide mb-2 mt-4">3.3 Data we do NOT collect</h3>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Special categories of personal data (Article 9 GDPR) such as racial/ethnic origin, political opinions, religious beliefs, health data, sexual orientation, or biometric data</li>
              <li>Data related to criminal convictions (Article 10 GDPR)</li>
              <li>We do not use automated decision-making or profiling that produces legal effects (Article 22 GDPR)</li>
            </ul>
          </section>

          {/* 4. PURPOSES AND LEGAL BASES */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">4. Purposes and Legal Bases for Processing</h2>

            <div className="space-y-5">
              <div className="p-4 bg-shield-bg-light rounded-xl">
                <h3 className="font-heading font-bold text-sm text-shield-text-l uppercase tracking-wide mb-1">4.1 Job application processing</h3>
                <p className="text-shield-text-lm text-sm"><strong>Purpose:</strong> Make your application and CV accessible to the relevant employer via a secure employer portal.</p>
                <p className="text-shield-text-lm text-sm"><strong>Legal basis:</strong> Pre-contractual measures (Art. 6(1)(b)) and your consent (Art. 6(1)(a)).</p>
                <p className="text-shield-text-lm text-sm"><strong>Retention:</strong> 6 months after application date, then deleted.</p>
              </div>

              <div className="p-4 bg-shield-bg-light rounded-xl">
                <h3 className="font-heading font-bold text-sm text-shield-text-l uppercase tracking-wide mb-1">4.2 Job alert emails</h3>
                <p className="text-shield-text-lm text-sm"><strong>Purpose:</strong> Send notifications about new job listings matching your preferences.</p>
                <p className="text-shield-text-lm text-sm"><strong>Legal basis:</strong> Your consent (Art. 6(1)(a)).</p>
                <p className="text-shield-text-lm text-sm"><strong>Retention:</strong> Until consent is withdrawn or 12 months of inactivity.</p>
              </div>

              <div className="p-4 bg-shield-bg-light rounded-xl">
                <h3 className="font-heading font-bold text-sm text-shield-text-l uppercase tracking-wide mb-1">4.3 Employer job posting and payment</h3>
                <p className="text-shield-text-lm text-sm"><strong>Purpose:</strong> Process job listings, manage employer accounts, and process payments.</p>
                <p className="text-shield-text-lm text-sm"><strong>Legal basis:</strong> Performance of a contract (Art. 6(1)(b)).</p>
                <p className="text-shield-text-lm text-sm"><strong>Retention:</strong> Duration of business relationship + period required by Czech tax law (up to 10 years for financial records).</p>
              </div>

              <div className="p-4 bg-shield-bg-light rounded-xl">
                <h3 className="font-heading font-bold text-sm text-shield-text-l uppercase tracking-wide mb-1">4.4 Website analytics (Google Analytics 4)</h3>
                <p className="text-shield-text-lm text-sm"><strong>Purpose:</strong> Understand how visitors use the Platform, measure performance, improve user experience.</p>
                <p className="text-shield-text-lm text-sm"><strong>Legal basis:</strong> Your explicit consent (Art. 6(1)(a)). Analytics cookies only activate after consent.</p>
                <p className="text-shield-text-lm text-sm"><strong>Data shared with:</strong> Google Ireland Ltd. / Google LLC. Transfer via EU-US Data Privacy Framework.</p>
                <p className="text-shield-text-lm text-sm"><strong>Retention:</strong> GA4 data retention set to 14 months. Cookies expire after 2 years or upon consent withdrawal.</p>
              </div>

              <div className="p-4 bg-shield-bg-light rounded-xl">
                <h3 className="font-heading font-bold text-sm text-shield-text-l uppercase tracking-wide mb-1">4.5 Advertising and conversion tracking (Meta Pixel)</h3>
                <p className="text-shield-text-lm text-sm"><strong>Purpose:</strong> Measure ad campaign effectiveness on Facebook/Instagram, build custom audiences, track conversions.</p>
                <p className="text-shield-text-lm text-sm"><strong>Legal basis:</strong> Your explicit consent (Art. 6(1)(a)). The Meta Pixel only fires after you consent to marketing cookies.</p>
                <p className="text-shield-text-lm text-sm"><strong>Data shared with:</strong> Meta Platforms Ireland Ltd. / Meta Platforms Inc. Transfer via EU-US Data Privacy Framework + SCCs.</p>
                <p className="text-shield-text-lm text-sm"><strong>Retention:</strong> Meta Pixel cookies expire after 90 days.</p>
                <p className="text-shield-text-lm text-sm mt-1"><strong>Note:</strong> We do not use Automatic Advanced Matching (AAM) or Automatic Events. Only standard PageView and conversion events are tracked. No form field data is shared with Meta.</p>
              </div>

              <div className="p-4 bg-shield-bg-light rounded-xl">
                <h3 className="font-heading font-bold text-sm text-shield-text-l uppercase tracking-wide mb-1">4.6 Website functionality and security</h3>
                <p className="text-shield-text-lm text-sm"><strong>Purpose:</strong> Ensure the platform functions correctly, prevent fraud, maintain security.</p>
                <p className="text-shield-text-lm text-sm"><strong>Legal basis:</strong> Legitimate interest (Art. 6(1)(f)).</p>
                <p className="text-shield-text-lm text-sm"><strong>Retention:</strong> Server logs retained for 90 days.</p>
              </div>

              <div className="p-4 bg-shield-bg-light rounded-xl">
                <h3 className="font-heading font-bold text-sm text-shield-text-l uppercase tracking-wide mb-1">4.7 Contact form inquiries</h3>
                <p className="text-shield-text-lm text-sm"><strong>Purpose:</strong> Respond to your questions or requests.</p>
                <p className="text-shield-text-lm text-sm"><strong>Legal basis:</strong> Consent (Art. 6(1)(a)) and/or pre-contractual measures (Art. 6(1)(b)).</p>
                <p className="text-shield-text-lm text-sm"><strong>Retention:</strong> 12 months after resolution.</p>
              </div>
            </div>
          </section>

          {/* 5. DATA PROCESSORS */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">5. Data Processors and Recipients</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-4">
              We share personal data only with the following recipients, all bound by data processing agreements (DPAs) per Article 28 GDPR:
            </p>

            <h3 className="font-heading font-bold text-sm text-shield-navy-lt uppercase tracking-wide mb-2">5.1 Sub-processors</h3>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li><strong>Supabase Inc.</strong> (USA, EU region) - Database hosting, CV file storage. EU-based servers, SOC 2 Type II. Transfer: SCCs.</li>
              <li><strong>Railway Corp.</strong> (USA) - Application hosting. Transfer: SCCs.</li>
              <li><strong>Stripe Inc.</strong> (USA / Stripe Payments Europe Ltd., Ireland) - Payment processing. SOC 1 &amp; 2. Transfer: SCCs + Binding Corporate Rules.</li>
              <li><strong>Resend Inc.</strong> (USA) - Email delivery. Transfer: SCCs. Only email addresses and message content shared.</li>
              <li><strong>Google Ireland Ltd. / Google LLC</strong> (Ireland/USA) - Website analytics via GA4. Transfer: EU-US Data Privacy Framework.</li>
              <li><strong>Meta Platforms Ireland Ltd. / Meta Platforms Inc.</strong> (Ireland/USA) - Advertising tracking via Meta Pixel. Transfer: EU-US Data Privacy Framework + SCCs.</li>
              <li><strong>Namecheap Inc.</strong> (USA) - Domain and email hosting. Transfer: SCCs.</li>
            </ul>

            <h3 className="font-heading font-bold text-sm text-shield-navy-lt uppercase tracking-wide mb-2 mt-4">5.2 Employers (separate controllers)</h3>
            <p className="text-shield-text-lm text-sm leading-relaxed mb-2">
              When you submit a job application, your application data (name, email, message, and CV) is made accessible to the employer who posted the listing via a secure employer portal. The employer receives a unique, secret portal link that allows them to view applications and download CVs for their listing(s).
            </p>
            <p className="text-shield-text-lm text-sm leading-relaxed mb-2">
              CV files are not directly shared - employers access them via time-limited signed URLs that expire after 1 hour. Each access generates a new temporary link.
            </p>
            <p className="text-shield-text-lm text-sm leading-relaxed">
              Once an employer accesses your data through the portal, they become an independent data controller for the data they have viewed or downloaded. We recommend reviewing each employer&apos;s own privacy policy.
            </p>

            <h3 className="font-heading font-bold text-sm text-shield-navy-lt uppercase tracking-wide mb-2 mt-4">5.3 We do NOT share data with</h3>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Data brokers or resellers</li>
              <li>Any third party for their own marketing purposes</li>
            </ul>
          </section>

          {/* 6. INTERNATIONAL TRANSFERS */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">6. International Data Transfers</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-3">
              Some sub-processors are based in the USA. We rely on:
            </p>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>EU-US Data Privacy Framework (for Google and Meta)</li>
              <li>EU Standard Contractual Clauses (SCCs) approved by European Commission Decision 2021/914</li>
              <li>Supplementary technical measures where appropriate</li>
            </ul>
          </section>

          {/* 7. YOUR RIGHTS */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">7. Your Rights Under GDPR</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-3">
              Contact <a href="mailto:hello@defjobs.eu" className="text-shield-navy-lt hover:underline">hello@defjobs.eu</a> to exercise any right. We respond within 30 days.
            </p>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li><strong>Right of access</strong> (Art. 15) - Request a copy of all personal data we hold about you</li>
              <li><strong>Right to rectification</strong> (Art. 16) - Correct inaccurate or incomplete data</li>
              <li><strong>Right to erasure</strong> (Art. 17) - Request deletion of your data</li>
              <li><strong>Right to restriction</strong> (Art. 18) - Limit how we use your data</li>
              <li><strong>Right to data portability</strong> (Art. 20) - Receive your data in JSON or CSV format</li>
              <li><strong>Right to object</strong> (Art. 21) - Object to processing based on legitimate interest</li>
              <li><strong>Right to withdraw consent</strong> (Art. 7(3)) - Withdraw at any time. For analytics/marketing cookies, use the Cookie Settings link in the footer</li>
              <li><strong>Right to lodge a complaint</strong> - Czech DPA: ÚOOÚ, Pplk. Sochora 27, 170 00 Praha 7, <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-shield-navy-lt hover:underline">www.uoou.cz</a></li>
            </ul>
          </section>

          {/* 8. DATA SECURITY */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">8. Data Security</h2>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>All data transmitted via HTTPS/TLS encryption</li>
              <li>Row Level Security (RLS) on all Supabase database tables</li>
              <li>CV files in private Supabase Storage bucket (server-side signed URLs only)</li>
              <li>Stripe webhook signature verification</li>
              <li>Environment variables for all API keys (never client-side)</li>
              <li>Employer portal access via unique secret token URLs (not guessable, not indexed by search engines)</li>
              <li>CV downloads via time-limited signed URLs (expire after 1 hour)</li>
              <li>Access to admin panel limited to the platform operator only</li>
            </ul>
          </section>

          {/* 9. DATA RETENTION */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">9. Data Retention Summary</h2>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Job applications (incl. CVs): 6 months</li>
              <li>Job alert subscriptions: Until withdrawal or 12 months inactivity</li>
              <li>Employer account data: Business relationship + tax law period</li>
              <li>Contact inquiries: 12 months after resolution</li>
              <li>Server/access logs: 90 days</li>
              <li>Cookie consent records: 12 months (then re-consent requested)</li>
              <li>Payment records (Stripe): Per Czech accounting law (up to 10 years)</li>
              <li>Google Analytics data: 14 months</li>
              <li>Meta Pixel cookies: 90 days</li>
            </ul>
          </section>

          {/* 10. CHILDREN */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">10. Children&apos;s Data</h2>
            <p className="text-shield-text-lm leading-relaxed">
              DefJobs is not intended for individuals under 16. We do not knowingly collect data from children. If discovered, we will delete it promptly.
            </p>
          </section>

          {/* 11. CHANGES */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">11. Changes to This Policy</h2>
            <p className="text-shield-text-lm leading-relaxed">
              Material changes are communicated via prominent notice on the Platform or email to registered users. Continued use after changes constitutes acceptance.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}