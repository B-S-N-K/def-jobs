import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export function PricingPage() {
  const { t } = useTranslation();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Start',
      price: '€99',
      originalPrice: '€189',
      period: t('pricing_per_listing'),
      description: t('pricing_start_desc'),
      color: 'border-shield-border-l',
      buttonColor: 'bg-shield-black hover:bg-shield-navy-lt',
      priceId: 'price_1TEXU53xsBdv5VKAGMeyYWUu',
      features: [
        t('pricing_f1'),
        t('pricing_f2'),
        t('pricing_f3'),
        t('pricing_f4'),
        t('pricing_f5'),
      ],
    },
    {
      name: 'Featured',
      price: '€169',
      originalPrice: '€299',
      period: t('pricing_per_listing'),
      description: t('pricing_featured_desc'),
      color: 'border-shield-navy-lt',
      buttonColor: 'bg-shield-navy-lt hover:bg-shield-navy-mid',
      badge: t('pricing_most_popular'),
      priceId: 'price_1TEXU53xsBdv5VKAhM7VZHl4',
      features: [
        t('pricing_f1'),
        t('pricing_f6'),
        t('pricing_f7'),
        t('pricing_f8'),
        t('pricing_f3'),
        t('pricing_f4'),
        t('pricing_f5'),
      ],
    },
    {
      name: 'Elite',
      price: '€279',
      originalPrice: '€499',
      period: t('pricing_per_listing'),
      description: t('pricing_elite_desc'),
      color: 'border-shield-border-l',
      buttonColor: 'bg-shield-black hover:bg-shield-navy-lt',
      priceId: 'price_1TEXU53xsBdv5VKA8BM7PV7H',
      features: [
        t('pricing_f11'),
        t('pricing_f6'),
        t('pricing_f7'),
        t('pricing_f8'),
        t('pricing_f9'),
        t('pricing_f10'),
        t('pricing_f3'),
        t('pricing_f12'),
      ],
    },
    {
      name: 'Bundle',
      price: '€599',
      originalPrice: '€999',
      period: t('pricing_5_listings'),
      description: t('pricing_bundle_desc'),
      color: 'border-shield-border-l',
      buttonColor: 'bg-shield-black hover:bg-shield-navy-lt',
      badge: t('pricing_best_value'),
      priceId: 'price_1TEXU83xsBdv5VKA95MmBPnU',
      features: [
        t('pricing_f13'),
        t('pricing_f14'),
        t('pricing_f6'),
        t('pricing_f15'),
        t('pricing_f16'),
        t('pricing_f9'),
        t('pricing_f10'),
        t('pricing_f17'),
        t('pricing_f18'),
      ],
    },
  ];

  const handleCheckout = async (priceId: string, planName: string) => {
    setLoadingPlan(planName);
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, planName }),
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout. Please try again.');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="min-h-screen bg-shield-bg-light">
      <div className="bg-shield-black py-16 px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-shield-off-white uppercase tracking-tight mb-4">
          {t('pricing_title')}
        </h1>
        <p className="text-shield-silver text-base max-w-xl mx-auto mb-4">
          {t('pricing_sub')}
        </p>
        <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
          🚀 Launch Offer - Limited Time
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-white border-[1.5px] ${plan.color} rounded-2xl p-6 flex flex-col relative hover:shadow-[0_8px_36px_rgba(0,0,0,0.1)] transition-all`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-shield-navy-lt text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              <div className="mb-4">
                <h3 className="font-heading font-bold text-xl text-shield-text-l mb-1">{plan.name}</h3>
                <p className="text-shield-text-lm text-xs leading-relaxed">{plan.description}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-shield-text-lm text-sm line-through opacity-60">{plan.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">Launch price</span>
                </div>
                <span className="font-heading font-extrabold text-4xl text-shield-text-l">{plan.price}</span>
                <span className="text-shield-text-lm text-sm ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-2.5 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-shield-text-l">
                    <Check className="h-4 w-4 text-shield-navy-lt mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleCheckout(plan.priceId, plan.name)}
                disabled={loadingPlan === plan.name}
                className={`${plan.buttonColor} text-white text-sm font-bold py-3 rounded-xl text-center transition-all hover:-translate-y-[1px] block w-full disabled:opacity-50`}
              >
                {loadingPlan === plan.name ? 'Loading...' : t('pricing_get_started')}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-shield-text-lm text-sm mb-16">
          {t('pricing_not_sure')}{' '}
          <Link to="/post-job" className="text-shield-navy-lt font-semibold hover:underline">
            {t('pricing_help')}
          </Link>
        </p>

        <div className="bg-shield-black rounded-2xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center gap-2 bg-shield-navy-lt/20 border border-shield-navy-lt/40 text-shield-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-shield-accent animate-pulse"></span>
            {t('pricing_extra_mile')}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-shield-off-white uppercase tracking-tight mb-4">
            {t('pricing_tailored_title')}
          </h2>
          <p className="text-shield-silver text-base max-w-2xl mx-auto mb-4 leading-relaxed">
            {t('pricing_tailored_1')}
          </p>
          <p className="text-shield-silver text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('pricing_tailored_2')}
          </p>
          <a
            href="mailto:hello@defjobs.eu"
            className="inline-flex items-center gap-2 bg-shield-navy-lt hover:bg-shield-navy-mid text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-[1px] text-base"
          >
            {t('pricing_lets_talk')}
          </a>
        </div>
      </div>
    </div>
  );
}