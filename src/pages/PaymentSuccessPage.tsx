import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-shield-bg-light flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border-[1.5px] border-shield-border-l rounded-2xl p-10 text-center shadow-[0_8px_36px_rgba(0,0,0,0.1)]">
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 bg-green-50 rounded-full flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
        </div>
        <h1 className="font-heading text-3xl font-extrabold text-shield-text-l uppercase tracking-tight mb-3">
          Payment Successful!
        </h1>
        {plan && (
          <p className="text-shield-navy-lt font-semibold text-sm mb-4">
            {plan} Plan Activated
          </p>
        )}
        <p className="text-shield-text-lm text-sm leading-relaxed mb-8">
          Thank you for your purchase. You can now post your job listing. Our team will be in touch shortly to help you get the most out of your listing.
        </p>
        <Link
          to="/post-job"
          className="block w-full bg-shield-black hover:bg-shield-navy-lt text-white font-heading font-bold py-4 rounded-xl transition-all hover:-translate-y-[1px] uppercase tracking-widest text-sm mb-3"
        >
          Post Your Job Now
        </Link>
        <Link
          to="/"
          className="block w-full text-shield-text-lm text-sm hover:text-shield-text-l transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}