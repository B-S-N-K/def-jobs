import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ChevronDown, ChevronUp, Zap, Target, Users, BarChart3 } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export function PricingPage() {
  const { t } = useTranslation();
  const [showComparison, setShowComparison] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const PLANS = [
    {
      id: 'post',
      name: 'Post',
      tagline: t('plan_post_tagline'),
      price: t('new_pricing_free_during_launch'),
      originalPrice: '€149',
      launchLabel: t('new_pricing_free_during_launch'),
      period: t('new_pricing_per_listing'),
      color: 'border-shield-border-l',
      buttonColor: 'bg-shield-black hover:bg-shield-navy-lt',
      buttonText: t('new_pricing_post_btn'),
      buttonAction: 'contact',
      features: [
        t('pf_30day'),
        t('pf_standard_placement'),
        t('pf_logo'),
        t('pf_social_1w_basic'),
        t('pf_clearance'),
        t('pf_compliance'),
        t('pf_inbox'),
        t('pf_stats'),
      ],
    },
    {
      id: 'promote',
      name: 'Promote',
      tagline: t('plan_promote_tagline'),
      price: '€299',
      originalPrice: '€499',
      launchLabel: t('new_pricing_launch_price'),
      period: t('new_pricing_per_listing'),
      color: 'border-shield-navy-lt/50',
      buttonColor: 'bg-shield-navy-lt hover:bg-shield-navy-mid',
      buttonText: t('new_pricing_get_started'),
      buttonAction: 'stripe',
      priceId: 'price_1TEt6d38H9O33X70bRJhmozn',
      features: [
        t('pf_everything_post'),
        t('pf_priority_placement'),
        t('pf_featured_badge'),
        t('pf_social_1w_enhanced'),
        t('pf_ab_testing'),
        t('pf_email_push'),
        t('pf_refresh_day15'),
        t('pf_mid_snapshot'),
      ],
    },
    {
      id: 'campaign',
      name: 'Campaign',
      tagline: t('plan_campaign_tagline'),
      price: '€549',
      originalPrice: '€899',
      launchLabel: t('new_pricing_launch_price'),
      period: t('new_pricing_per_listing'),
      color: 'border-shield-navy-lt',
      buttonColor: 'bg-shield-navy-lt hover:bg-shield-navy-mid',
      buttonText: t('new_pricing_get_started'),
      buttonAction: 'stripe',
      priceId: 'price_1TEt6x38H9O33X70NQyzMMjm',
      badge: t('new_pricing_most_popular'),
      features: [
        t('pf_everything_promote'),
        t('pf_social_2w_custom'),
        t('pf_custom_audiences'),
        t('pf_top_placement'),
        t('pf_homepage_featured'),
        t('pf_cv_access'),
        t('pf_confidential'),
        t('pf_pdf_report'),
        t('pf_weekly_digest'),
        t('pf_direct_channel'),
      ],
    },
    {
      id: 'partnership',
      name: 'Partnership',
      tagline: t('plan_partnership_tagline'),
      price: 'Custom',
      originalPrice: null,
      launchLabel: null,
      period: t('new_pricing_custom_period'),
      color: 'border-shield-border-l',
      buttonColor: 'bg-shield-black hover:bg-shield-navy-lt',
      buttonText: t('new_pricing_talk'),
      buttonAction: 'contact',
      features: [
        t('pf_everything_campaign'),
        t('pf_unlimited_cv'),
        t('pf_account_manager'),
        t('pf_optimized_campaigns'),
        t('pf_historical_data'),
        t('pf_priority_support'),
      ],
    },
  ];

  const ADDONS = [
    { name: t('addon_1_name'), desc: t('addon_1_desc'), price: t('addon_1_price'), icon: Target },
    { name: t('addon_2_name'), desc: t('addon_2_desc'), price: t('addon_2_price'), icon: Zap },
    { name: t('addon_3_name'), desc: t('addon_3_desc'), price: t('addon_3_price'), icon: Users },
    { name: t('addon_4_name'), desc: t('addon_4_desc'), price: t('addon_4_price'), icon: BarChart3 },
  ];

  const DEFENSE_FEATURES = [
    { title: t('df_1_title'), desc: t('df_1_desc') },
    { title: t('df_2_title'), desc: t('df_2_desc') },
    { title: t('df_3_title'), desc: t('df_3_desc') },
    { title: t('df_4_title'), desc: t('df_4_desc') },
    { title: t('df_5_title'), desc: t('df_5_desc') },
    { title: t('df_6_title'), desc: t('df_6_desc') },
  ];

  const COMPARISON = [
    {
      category: t('comp_cat_listing'),
      rows: [
        { feature: t('comp_f_30day'), post: true, promote: true, campaign: true, partnership: true },
        { feature: t('comp_f_placement'), post: t('comp_standard'), promote: t('comp_priority'), campaign: t('comp_top'), partnership: t('comp_top') },
        { feature: t('comp_f_featured_badge'), post: false, promote: true, campaign: true, partnership: true },
        { feature: t('comp_f_refresh'), post: false, promote: t('comp_day15'), campaign: t('comp_every7'), partnership: t('comp_every7') },
        { feature: t('comp_f_homepage'), post: false, promote: false, campaign: true, partnership: true },
      ],
    },
    {
      category: t('comp_cat_social'),
      rows: [
        { feature: t('comp_f_social_boost'), post: t('comp_1w_basic'), promote: t('comp_1w_enhanced'), campaign: t('comp_2w_custom'), partnership: t('comp_2w_optimized') },
        { feature: t('comp_f_ab'), post: false, promote: true, campaign: true, partnership: true },
        { feature: t('comp_f_custom_audiences'), post: false, promote: false, campaign: true, partnership: true },
      ],
    },
    {
      category: t('comp_cat_outreach'),
      rows: [
        { feature: t('comp_f_email_push'), post: false, promote: true, campaign: true, partnership: true },
        { feature: t('comp_f_followup'), post: false, promote: false, campaign: true, partnership: true },
        { feature: t('comp_f_digest'), post: false, promote: false, campaign: true, partnership: true },
      ],
    },
    {
      category: t('comp_cat_sourcing'),
      rows: [
        { feature: t('comp_f_cv_db'), post: false, promote: false, campaign: t('comp_20_unlocks'), partnership: t('comp_unlimited') },
        { feature: t('comp_f_confidential'), post: false, promote: false, campaign: true, partnership: true },
      ],
    },
    {
      category: t('comp_cat_reporting'),
      rows: [
        { feature: t('comp_f_basic_stats'), post: true, promote: true, campaign: true, partnership: true },
        { feature: t('comp_f_mid_snapshot'), post: false, promote: true, campaign: true, partnership: true },
        { feature: t('comp_f_pdf_report'), post: false, promote: false, campaign: true, partnership: true },
        { feature: t('comp_f_direct_channel'), post: false, promote: false, campaign: true, partnership: true },
        { feature: t('comp_f_account_manager'), post: false, promote: false, campaign: false, partnership: true },
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

  function CellValue({ value }: { value: boolean | string }) {
    if (value === true) return <Check className="h-4 w-4 text-shield-navy-lt mx-auto" />;
    if (value === false) return <X className="h-4 w-4 text-shield-border-l mx-auto" />;
    return <span className="text-xs text-shield-text-lm">{value}</span>;
  }

  return (
    <div className="min-h-screen bg-shield-bg-light">
      {/* Header */}
      <div className="bg-shield-black py-16 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-shield-navy-lt/20 border border-shield-navy-lt/40 text-shield-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-shield-accent animate-pulse"></span>
          {t('new_pricing_badge')}
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-shield-off-white uppercase tracking-tight mb-4">
          {t('new_pricing_h1')}
        </h1>
        <p className="text-shield-silver text-base max-w-xl mx-auto mb-4">
          {t('new_pricing_sub')}
        </p>
        <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
          {t('new_pricing_launch')}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white border-[1.5px] ${plan.color} rounded-2xl p-6 flex flex-col relative hover:shadow-[0_8px_36px_rgba(0,0,0,0.1)] transition-all ${plan.badge ? 'ring-2 ring-shield-navy-lt ring-offset-2' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-shield-navy-lt text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              <div className="mb-4">
                <h3 className="font-heading font-bold text-xl text-shield-text-l">{plan.name}</h3>
                <p className="text-shield-text-lm text-xs mt-1">{plan.tagline}</p>
              </div>
              <div className="mb-6">
                {plan.originalPrice && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-shield-text-lm text-sm line-through opacity-60">{plan.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">{plan.launchLabel}</span>
                  </div>
                )}
                <span className="font-heading font-extrabold text-4xl text-shield-text-l">{plan.price}</span>
                <span className="text-shield-text-lm text-xs ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-2.5 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-shield-text-l">
                    <Check className="h-4 w-4 text-shield-navy-lt mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.buttonAction === 'contact' ? (
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className={`${plan.buttonColor} text-white text-sm font-bold py-3 rounded-xl text-center transition-all hover:-translate-y-[1px] block`}
                >
                  {plan.buttonText}
                </Link>
              ) : (
                <button
                  onClick={() => handleCheckout(plan.priceId!, plan.name)}
                  disabled={loadingPlan === plan.name}
                  className={`${plan.buttonColor} text-white text-sm font-bold py-3 rounded-xl text-center transition-all hover:-translate-y-[1px] block w-full disabled:opacity-50`}
                >
                  {loadingPlan === plan.name ? t('new_pricing_loading') : plan.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Compare Features Toggle */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 text-shield-navy-lt font-semibold text-sm hover:underline"
          >
            {showComparison ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            {showComparison ? t('new_pricing_compare_hide') : t('new_pricing_compare_show')}
          </button>
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl overflow-hidden mb-16 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-shield-bg-light border-b border-shield-border-l">
                  <th className="text-left px-6 py-4 text-xs font-bold text-shield-text-lm uppercase tracking-wider w-1/3">Feature</th>
                  {PLANS.map(p => (
                    <th key={p.id} className="px-4 py-4 text-center text-xs font-bold text-shield-text-l uppercase tracking-wider">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((section) => (
                  <React.Fragment key={section.category}>
                    <tr className="bg-shield-bg-light/50">
                      <td colSpan={5} className="px-6 py-2 text-xs font-bold text-shield-navy-lt uppercase tracking-wider">{section.category}</td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr key={row.feature} className="border-b border-shield-border-l last:border-0 hover:bg-shield-bg-light/30">
                        <td className="px-6 py-3 text-sm text-shield-text-l">{row.feature}</td>
                        <td className="px-4 py-3 text-center"><CellValue value={row.post} /></td>
                        <td className="px-4 py-3 text-center"><CellValue value={row.promote} /></td>
                        <td className="px-4 py-3 text-center"><CellValue value={row.campaign} /></td>
                        <td className="px-4 py-3 text-center"><CellValue value={row.partnership} /></td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* USP Section */}
        <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-8 mb-12">
          <h2 className="font-heading font-bold text-2xl text-shield-text-l uppercase tracking-wide text-center mb-2">
            {t('new_pricing_usp_title')}
          </h2>
          <p className="text-shield-text-lm text-sm text-center max-w-2xl mx-auto mb-8">
            {t('new_pricing_usp_sub')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: t('new_pricing_usp_1_stat'), label: t('new_pricing_usp_1_label') },
              { stat: t('new_pricing_usp_2_stat'), label: t('new_pricing_usp_2_label') },
              { stat: t('new_pricing_usp_3_stat'), label: t('new_pricing_usp_3_label') },
            ].map(item => (
              <div key={item.stat} className="text-center border-[1.5px] border-shield-border-l rounded-xl p-6">
                <div className="font-heading font-extrabold text-4xl text-shield-navy-lt mb-2">{item.stat}</div>
                <div className="text-shield-text-lm text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Add-on Services */}
        <div className="mb-12">
          <h2 className="font-heading font-bold text-2xl text-shield-text-l uppercase tracking-wide text-center mb-2">
            {t('new_pricing_addons_title')}
          </h2>
          <p className="text-shield-text-lm text-sm text-center mb-8">{t('new_pricing_addons_sub')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADDONS.map((addon) => (
              <div key={addon.name} className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-6 hover:shadow-[0_8px_36px_rgba(0,0,0,0.08)] transition-all">
                <div className="h-10 w-10 bg-shield-navy-lt/10 rounded-xl flex items-center justify-center mb-4">
                  <addon.icon className="h-5 w-5 text-shield-navy-lt" />
                </div>
                <h3 className="font-bold text-shield-text-l text-sm mb-2">{addon.name}</h3>
                <p className="text-shield-text-lm text-xs leading-relaxed mb-3">{addon.desc}</p>
                <span className="text-shield-navy-lt font-bold text-sm">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Defense-specific features */}
        <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-8 mb-12">
          <h2 className="font-heading font-bold text-2xl text-shield-text-l uppercase tracking-wide text-center mb-8">
            {t('new_pricing_defense_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEFENSE_FEATURES.map(item => (
              <div key={item.title} className="flex items-start gap-3 p-4 border-[1.5px] border-shield-border-l rounded-xl">
                <Check className="h-4 w-4 text-shield-navy-lt mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-shield-text-l text-sm mb-1">{item.title}</h3>
                  <p className="text-shield-text-lm text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

{/* Final CTA */}
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