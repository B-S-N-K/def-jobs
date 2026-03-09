import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-shield-black border border-shield-gray-line rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-shield-off-white text-sm font-semibold mb-1">🍪 We use cookies</p>
          <p className="text-shield-silver text-xs leading-relaxed">
            We use essential cookies to make our site work. By clicking Accept, you also allow analytics cookies to help us improve. Read our{' '}
            <Link to="/privacy" className="text-shield-accent hover:underline">Privacy Policy</Link>.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="text-shield-silver hover:text-shield-off-white text-sm font-medium border border-shield-gray-line px-4 py-2 rounded-xl transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="bg-shield-navy-lt hover:bg-shield-navy-mid text-white text-sm font-bold px-5 py-2 rounded-xl transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}