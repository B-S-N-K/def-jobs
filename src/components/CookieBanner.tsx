import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

// ============================================================
// CONSENT STATE TYPE
// ============================================================
interface ConsentState {
  necessary: boolean;   // Always true, not toggleable
  analytics: boolean;   // Controls GA4
  marketing: boolean;   // Controls Meta Pixel
  timestamp: string;    // ISO date of when consent was given
  version: string;      // Policy version for audit trail
}

const CONSENT_KEY = 'defjobs_cookie_consent';
const POLICY_VERSION = '1.0-2026-03';
const CONSENT_EXPIRY_DAYS = 365; // Re-ask after 12 months

// ============================================================
// HELPER: Read stored consent
// ============================================================
function getStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;

    // Check expiry (12 months)
    const consentDate = new Date(parsed.timestamp);
    const now = new Date();
    const daysDiff = (now.getTime() - consentDate.getTime()) / (1000 * 60 * 60 * 24);
    if (daysDiff > CONSENT_EXPIRY_DAYS) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

// ============================================================
// HELPER: Save consent + notify scripts
// ============================================================
function saveConsent(analytics: boolean, marketing: boolean) {
  const consent: ConsentState = {
    necessary: true,
    analytics,
    marketing,
    timestamp: new Date().toISOString(),
    version: POLICY_VERSION,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));

  // Bridge to index.html scripts (Google Consent Mode v2 + Meta Pixel)
  if (typeof (window as any).updateConsentState === 'function') {
    (window as any).updateConsentState(analytics, marketing);
  }
}


// ============================================================
// COOKIE BANNER COMPONENT
// ============================================================
export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsOn, setAnalyticsOn] = useState(false);
  const [marketingOn, setMarketingOn] = useState(false);

  // Show banner if no valid consent stored
  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for "open cookie settings" events (from footer link)
  useEffect(() => {
    const handler = () => {
      const stored = getStoredConsent();
      if (stored) {
        setAnalyticsOn(stored.analytics);
        setMarketingOn(stored.marketing);
      }
      setShowPreferences(true);
      setVisible(true);
    };
    window.addEventListener('open-cookie-settings', handler);
    return () => window.removeEventListener('open-cookie-settings', handler);
  }, []);

  // ---- ACTIONS ----

  const handleAcceptAll = useCallback(() => {
    saveConsent(true, true);
    setVisible(false);
    setShowPreferences(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    saveConsent(false, false);
    setVisible(false);
    setShowPreferences(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    saveConsent(analyticsOn, marketingOn);
    setVisible(false);
    setShowPreferences(false);
  }, [analyticsOn, marketingOn]);

  if (!visible) return null;

  // ---- PREFERENCES PANEL ----
  if (showPreferences) {
    return (
      <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => { setShowPreferences(false); setVisible(!!getStoredConsent() ? false : true); }}
        />

        {/* Panel */}
        <div className="relative z-10 w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="p-5 border-b border-shield-border-l">
            <h2 className="font-heading font-bold text-lg text-shield-text-l uppercase tracking-wide">
              Cookie Settings
            </h2>
            <p className="text-shield-text-lm text-xs mt-1 leading-relaxed">
              Choose which cookies you allow. You can change these settings at any time via the "Cookie Settings" link in the footer.
              Read our <Link to="/privacy" className="text-shield-navy-lt hover:underline">Privacy Policy</Link> and{' '}
              <Link to="/cookies" className="text-shield-navy-lt hover:underline">Cookie Policy</Link>.
            </p>
          </div>

          {/* Categories */}
          <div className="p-5 space-y-4">

            {/* Necessary - always on */}
            <div className="flex items-start justify-between gap-4 p-3 bg-shield-bg-light rounded-xl">
              <div className="flex-1">
                <p className="font-heading font-bold text-sm text-shield-text-l uppercase tracking-wide">
                  Necessary
                </p>
                <p className="text-xs text-shield-text-lm mt-1 leading-relaxed">
                  Essential for the website to function. Includes consent storage, authentication, and payment security. Cannot be disabled.
                </p>
              </div>
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-5 bg-shield-navy-lt rounded-full relative opacity-60 cursor-not-allowed">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow" />
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between gap-4 p-3 bg-shield-bg-light rounded-xl">
              <div className="flex-1">
                <p className="font-heading font-bold text-sm text-shield-text-l uppercase tracking-wide">
                  Analytics
                </p>
                <p className="text-xs text-shield-text-lm mt-1 leading-relaxed">
                  Google Analytics 4 - helps us understand how visitors use the site so we can improve it. Sets <code className="text-xs bg-shield-border-l/30 px-1 rounded">_ga</code> cookies.
                </p>
              </div>
              <div className="flex-shrink-0 mt-1">
                <button
                  onClick={() => setAnalyticsOn(!analyticsOn)}
                  className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${
                    analyticsOn ? 'bg-shield-navy-lt' : 'bg-shield-border-l'
                  }`}
                  aria-label="Toggle analytics cookies"
                >
                  <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                    analyticsOn ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>

            {/* Marketing */}
            <div className="flex items-start justify-between gap-4 p-3 bg-shield-bg-light rounded-xl">
              <div className="flex-1">
                <p className="font-heading font-bold text-sm text-shield-text-l uppercase tracking-wide">
                  Marketing
                </p>
                <p className="text-xs text-shield-text-lm mt-1 leading-relaxed">
                  Meta Pixel - measures ad campaign effectiveness and enables retargeting on Facebook/Instagram. Sets <code className="text-xs bg-shield-border-l/30 px-1 rounded">_fbp</code> cookies. Data is shared with Meta.
                </p>
              </div>
              <div className="flex-shrink-0 mt-1">
                <button
                  onClick={() => setMarketingOn(!marketingOn)}
                  className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${
                    marketingOn ? 'bg-shield-navy-lt' : 'bg-shield-border-l'
                  }`}
                  aria-label="Toggle marketing cookies"
                >
                  <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                    marketingOn ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="p-5 border-t border-shield-border-l flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleRejectAll}
              className="flex-1 text-shield-text-l font-heading font-bold text-sm border-[1.5px] border-shield-border-l px-4 py-2.5 rounded-xl transition-colors hover:border-shield-text-lm uppercase tracking-wider"
            >
              Reject All
            </button>
            <button
              onClick={handleSavePreferences}
              className="flex-1 text-shield-text-l font-heading font-bold text-sm border-[1.5px] border-shield-border-l px-4 py-2.5 rounded-xl transition-colors hover:border-shield-text-lm uppercase tracking-wider"
            >
              Save My Choice
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-shield-black text-white font-heading font-bold text-sm px-4 py-2.5 rounded-xl transition-colors hover:bg-shield-navy-lt uppercase tracking-wider"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- MAIN BANNER (initial state) ----
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-shield-black border border-shield-gray-line rounded-2xl p-5 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-shield-off-white text-sm font-heading font-bold uppercase tracking-wide mb-1">
              We use cookies
            </p>
            <p className="text-shield-silver text-xs leading-relaxed">
              We use essential cookies to make our site work. We'd also like to use analytics and marketing cookies to improve our site and measure ad performance - but only with your permission. Read our{' '}
              <Link to="/privacy" className="text-shield-accent hover:underline">Privacy Policy</Link>{' '}and{' '}
              <Link to="/cookies" className="text-shield-accent hover:underline">Cookie Policy</Link>.
            </p>
          </div>
        </div>

        {/* Buttons - EQUAL visual prominence as required by GDPR enforcement */}
        <div className="flex flex-col sm:flex-row items-stretch gap-2 mt-4">
          <button
            onClick={handleRejectAll}
            className="flex-1 text-white font-heading font-bold text-sm border-[1.5px] border-shield-gray-line px-5 py-2.5 rounded-xl transition-colors hover:border-shield-silver uppercase tracking-wider"
          >
            Reject All
          </button>
          <button
            onClick={() => setShowPreferences(true)}
            className="flex-1 text-white font-heading font-bold text-sm border-[1.5px] border-shield-gray-line px-5 py-2.5 rounded-xl transition-colors hover:border-shield-silver uppercase tracking-wider"
          >
            Customize
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-white text-shield-black font-heading font-bold text-sm px-5 py-2.5 rounded-xl transition-colors hover:bg-shield-silver uppercase tracking-wider"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}