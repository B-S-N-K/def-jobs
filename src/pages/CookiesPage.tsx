import React from 'react';
import { Link } from 'react-router-dom';

export function CookiesPage() {
  return (
    <div className="min-h-screen bg-shield-bg-light">
      {/* Header */}
      <div className="bg-shield-black py-16 px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-shield-off-white uppercase tracking-tight mb-4">
          Cookie Policy
        </h1>
        <p className="text-shield-silver text-base max-w-xl mx-auto">
          Last updated: March 2026
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-8 space-y-8">

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">1. What Are Cookies</h2>
            <p className="text-shield-text-lm leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. They help the website remember preferences and understand how you interact with it.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">2. How We Use Cookies</h2>
            <p className="text-shield-text-lm leading-relaxed">
              DefHire (defjobs.eu) uses cookies in three categories: strictly necessary, analytics, and marketing.
              Non-essential cookies (analytics and marketing) are <strong>only activated after you give explicit consent</strong> via our cookie banner.
            </p>
          </section>

          {/* STRICTLY NECESSARY */}
          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">3. Cookie Categories</h2>

            <h3 className="font-heading font-bold text-base text-shield-navy-lt uppercase tracking-wide mb-2 mt-6">
              3.1 Strictly Necessary Cookies
            </h3>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-4">
              Essential for the platform to function. Do not require consent. Cannot be disabled.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-shield-border-l rounded-xl overflow-hidden">
                <thead className="bg-shield-bg-light">
                  <tr>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Cookie</th>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Purpose</th>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Duration</th>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-shield-border-l">
                  <tr>
                    <td className="p-3 font-mono text-xs">defjobs_cookie_consent</td>
                    <td className="p-3 text-shield-text-lm text-xs">Stores your cookie consent preferences</td>
                    <td className="p-3 text-shield-text-lm text-xs">12 months</td>
                    <td className="p-3 text-shield-text-lm text-xs">DefHire (1st party)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs">sb-*-auth-token</td>
                    <td className="p-3 text-shield-text-lm text-xs">Authentication session (employer login only)</td>
                    <td className="p-3 text-shield-text-lm text-xs">Session / 1 hour</td>
                    <td className="p-3 text-shield-text-lm text-xs">Supabase (1st party)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs">stripe.csrf</td>
                    <td className="p-3 text-shield-text-lm text-xs">Payment security during checkout</td>
                    <td className="p-3 text-shield-text-lm text-xs">Session</td>
                    <td className="p-3 text-shield-text-lm text-xs">Stripe (3rd party)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ANALYTICS */}
            <h3 className="font-heading font-bold text-base text-shield-navy-lt uppercase tracking-wide mb-2 mt-8">
              3.2 Analytics Cookies - Require Consent
            </h3>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-4">
              Only set <strong>after</strong> you consent to the &quot;Analytics&quot; category. If rejected, Google Analytics does not load.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-shield-border-l rounded-xl overflow-hidden">
                <thead className="bg-shield-bg-light">
                  <tr>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Cookie</th>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Purpose</th>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Duration</th>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-shield-border-l">
                  <tr>
                    <td className="p-3 font-mono text-xs">_ga</td>
                    <td className="p-3 text-shield-text-lm text-xs">Google Analytics 4 - distinguishes unique visitors</td>
                    <td className="p-3 text-shield-text-lm text-xs">2 years</td>
                    <td className="p-3 text-shield-text-lm text-xs">Google (1st party via gtag.js)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs">_ga_*</td>
                    <td className="p-3 text-shield-text-lm text-xs">Google Analytics 4 - tracks session state</td>
                    <td className="p-3 text-shield-text-lm text-xs">2 years</td>
                    <td className="p-3 text-shield-text-lm text-xs">Google (1st party via gtag.js)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-shield-text-lm text-xs mt-3 leading-relaxed">
              GA4 configuration: IP anonymization enabled by default. Google Consent Mode v2 implemented.
              Data retention set to 14 months. We do not use Google Signals, remarketing, or advertising features within GA4.
            </p>

            {/* MARKETING */}
            <h3 className="font-heading font-bold text-base text-shield-navy-lt uppercase tracking-wide mb-2 mt-8">
              3.3 Marketing Cookies - Require Consent
            </h3>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-4">
              Only set <strong>after</strong> you consent to the &quot;Marketing&quot; category. If rejected, the Meta Pixel does not fire.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-shield-border-l rounded-xl overflow-hidden">
                <thead className="bg-shield-bg-light">
                  <tr>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Cookie</th>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Purpose</th>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Duration</th>
                    <th className="text-left p-3 font-heading font-bold text-xs uppercase tracking-wider text-shield-text-lm">Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-shield-border-l">
                  <tr>
                    <td className="p-3 font-mono text-xs">_fbp</td>
                    <td className="p-3 text-shield-text-lm text-xs">Meta Pixel - browser identifier for ad targeting</td>
                    <td className="p-3 text-shield-text-lm text-xs">90 days</td>
                    <td className="p-3 text-shield-text-lm text-xs">Meta (1st party via fbevents.js)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs">_fbc</td>
                    <td className="p-3 text-shield-text-lm text-xs">Meta Pixel - Facebook ad click attribution</td>
                    <td className="p-3 text-shield-text-lm text-xs">90 days</td>
                    <td className="p-3 text-shield-text-lm text-xs">Meta (1st party via fbevents.js)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs">fr</td>
                    <td className="p-3 text-shield-text-lm text-xs">Meta - ad delivery and retargeting across sites</td>
                    <td className="p-3 text-shield-text-lm text-xs">90 days</td>
                    <td className="p-3 text-shield-text-lm text-xs">Meta (3rd party, facebook.com)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-shield-text-lm text-xs mt-3 leading-relaxed">
              Meta Pixel configuration: Automatic Advanced Matching (AAM) is disabled. Automatic Events is disabled.
              Only PageView and custom conversion events are tracked.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">4. Cookie Consent Banner</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-3">
              When you first visit defjobs.eu, you see a cookie consent banner with three options:
            </p>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li><strong>Accept All</strong> - enables all cookie categories (necessary + analytics + marketing)</li>
              <li><strong>Reject All</strong> - only strictly necessary cookies are set</li>
              <li><strong>Customize</strong> - choose individual categories independently</li>
            </ul>
            <p className="text-shield-text-lm leading-relaxed text-sm mt-3">
              Your consent is stored for 12 months, after which you will be asked again. You can change your preferences
              at any time using the &quot;Cookie Settings&quot; link in the website footer.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">5. Google Consent Mode v2</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm">
              DefHire implements Google Consent Mode v2, mandatory for websites using Google services with EEA visitors since March 2024.
              By default, all consent signals are set to &quot;denied.&quot; When you accept analytics cookies, the analytics_storage
              signal is updated to &quot;granted.&quot; When you accept marketing cookies, the ad_storage, ad_user_data, and ad_personalization
              signals are updated to &quot;granted.&quot;
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">6. Browser Cookie Controls</h2>
            <p className="text-shield-text-lm leading-relaxed text-sm mb-3">
              You can also control cookies through your browser settings:
            </p>
            <ul className="list-disc list-inside text-shield-text-lm space-y-2 text-sm leading-relaxed">
              <li>Chrome: Settings &gt; Privacy and Security &gt; Cookies</li>
              <li>Firefox: Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li>Safari: Preferences &gt; Privacy &gt; Cookies and website data</li>
              <li>Edge: Settings &gt; Cookies and site permissions</li>
            </ul>
            <p className="text-shield-text-lm leading-relaxed text-sm mt-3">
              Blocking strictly necessary cookies may prevent the platform from functioning correctly.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-3">7. Contact</h2>
            <p className="text-shield-text-lm leading-relaxed">
              For questions about our use of cookies, contact us at{' '}
              <a href="mailto:hello@defjobs.eu" className="text-shield-navy-lt hover:underline">
                hello@defjobs.eu
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}