import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Building2, MapPin, DollarSign, FileText, Rocket } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export function PostJobPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    tags: '',
    featured: false,
    language: 'en'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
          language: formData.language
        })
      });

      if (response.ok) {
        navigate('/');
      } else {
        alert(t('post_error'));
      }
    } catch (error) {
      console.error('Error posting job:', error);
      alert(t('post_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-shield-bg-light py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-shield-navy-lt/10 rounded-full mb-4 border border-shield-navy-lt/20">
            <Rocket className="h-8 w-8 text-shield-navy-lt" />
          </div>
          <h1 className="font-heading text-4xl font-extrabold text-shield-text-l mb-4 tracking-tight uppercase">{t('post_title')}</h1>
          <p className="text-shield-text-lm text-lg">{t('post_sub')}</p>
        </div>

        <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl shadow-[0_8px_36px_rgba(0,0,0,0.13)] overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            
            {/* Job Details Section */}
            <div>
              <h3 className="text-lg font-bold text-shield-text-l mb-6 flex items-center gap-2 font-heading border-b border-shield-border-l pb-2 uppercase">
                <Briefcase className="h-5 w-5 text-shield-navy-lt" />
                {t('post_params')}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">{t('post_job_title')}</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl px-4 py-3 text-shield-text-l focus:border-shield-navy-lt outline-none transition-colors text-sm"
                    placeholder={t('post_title_placeholder')}
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">{t('post_emp_type')}</label>
                    <select
                      className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl px-4 py-3 text-shield-text-l focus:border-shield-navy-lt outline-none transition-colors text-sm appearance-none cursor-pointer"
                      value={formData.type}
                      onChange={e => setFormData({...formData, type: e.target.value})}
                    >
                      <option>Full-time</option>
                      <option>Contract</option>
                      <option>Part-time</option>
                      <option>Temporary</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">{t('post_salary')}</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3.5 h-4 w-4 text-shield-text-lm opacity-60" />
                      <input
                        type="text"
                        className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl pl-10 pr-4 py-3 text-shield-text-l focus:border-shield-navy-lt outline-none transition-colors text-sm"
                        placeholder={t('post_salary_placeholder')}
                        value={formData.salary}
                        onChange={e => setFormData({...formData, salary: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">{t('post_tags')}</label>
                  <input
                    type="text"
                    className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl px-4 py-3 text-shield-text-l focus:border-shield-navy-lt outline-none transition-colors text-sm"
                    placeholder={t('post_tags_placeholder')}
                    value={formData.tags}
                    onChange={e => setFormData({...formData, tags: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">{t('post_language')}</label>
                  <select
                    className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl px-4 py-3 text-shield-text-l focus:border-shield-navy-lt outline-none transition-colors text-sm appearance-none cursor-pointer"
                    value={formData.language}
                    onChange={e => setFormData({...formData, language: e.target.value})}
                  >
                    <option value="en">English</option>
                    <option value="cs">Čeština</option>
                    <option value="de">Deutsch</option>
                    <option value="fr">Français</option>
                    <option value="it">Italiano</option>
                    <option value="sv">Svenska</option>
                  </select>
                  </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-bold text-shield-text-l mb-6 flex items-center gap-2 font-heading border-b border-shield-border-l pb-2 uppercase">
                <Building2 className="h-5 w-5 text-shield-navy-lt" />
                {t('post_base')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">{t('post_company')}</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl px-4 py-3 text-shield-text-l focus:border-shield-navy-lt outline-none transition-colors text-sm"
                    placeholder={t('post_company_placeholder')}
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">{t('post_location')}</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-shield-text-lm opacity-60" />
                    <input
                      type="text"
                      required
                      className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl pl-10 pr-4 py-3 text-shield-text-l focus:border-shield-navy-lt outline-none transition-colors text-sm"
                      placeholder={t('post_location_placeholder')}
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-bold text-shield-text-l mb-6 flex items-center gap-2 font-heading border-b border-shield-border-l pb-2 uppercase">
                <FileText className="h-5 w-5 text-shield-navy-lt" />
                {t('post_briefing')}
              </h3>
              <textarea
                rows={6}
                required
                className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl px-4 py-3 text-shield-text-l focus:border-shield-navy-lt outline-none transition-colors text-sm"
                placeholder={t('post_desc_placeholder')}
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              />
            </div>

            {/* Promotion Section */}
            <div className="bg-shield-bg-light border-[1.5px] border-shield-navy-lt/30 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-shield-navy-lt/10 rounded-bl-full"></div>
              <div className="relative z-10">
                <p className="text-shield-text-l font-bold font-heading uppercase text-sm mb-1">{t('post_promo_title')}</p>
                <p className="text-sm text-shield-text-lm mb-3">{t('post_promo_desc')}</p>
                <a href="/pricing" className="inline-flex items-center gap-1.5 text-shield-navy-lt text-sm font-semibold hover:underline">
                  {t('post_promo_link')}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-shield-black hover:bg-shield-navy-lt text-white font-heading font-bold text-lg py-4 rounded-xl transition-all hover:-translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest"
              >
                {loading ? t('post_transmitting') : t('post_btn')}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}