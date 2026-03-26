import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { HomePage } from '@/pages/HomePage';
import { PostJobPage } from '@/pages/PostJobPage';
import { CompaniesPage } from '@/pages/CompaniesPage';
import { SalariesPage } from '@/pages/SalariesPage';
import { PricingPage } from '@/pages/PricingPage';
import { AboutPage } from '@/pages/AboutPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { CookiesPage } from '@/pages/CookiesPage';
import { ContactPage } from '@/pages/ContactPage';
import { AdminLoginPage } from '@/pages/AdminLoginPage';
import { AdminDashboardPage } from '@/pages/AdminDashboardPage';
import { PaymentSuccessPage } from '@/pages/PaymentSuccessPage';
import { CookieBanner } from '@/components/CookieBanner';
import { JobDetailPage } from '@/pages/JobDetailPage';
import { Logo } from '@/components/Logo';
import { TranslationProvider, useTranslation } from '@/lib/i18n';

function AppContent() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-shield-bg-light text-shield-text-l font-sans selection:bg-shield-navy-lt selection:text-white flex flex-col">
      <Navbar />
      <CookieBanner />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<HomePage scrollToJobs={true} />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="/post-job" element={<PostJobPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/salaries" element={<SalariesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        </Routes>
      </main>
      
      <footer className="bg-shield-black border-t border-shield-gray-line pt-12 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
                <Logo variant="dark" type="icon" height={32} />
                <span className="font-heading font-bold text-lg text-shield-off-white tracking-[0.12em] uppercase">
                  DefJobs
                </span>
              </div>
              <p className="text-shield-silver text-sm leading-relaxed max-w-[220px]">
                {t('footer_brand')}
              </p>
            </div>
               
            <div>
              <h4 className="font-semibold text-shield-silver-lt text-xs tracking-widest uppercase mb-4">{t('footer_candidates')}</h4>
              <ul className="space-y-2.5">
                <li><Link to="/jobs" onClick={() => window.scrollTo(0, 0)} className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_browse')}</Link></li>
                <li><Link to="/companies" onClick={() => window.scrollTo(0, 0)} className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_companies')}</Link></li>
                <li><Link to="/salaries" onClick={() => window.scrollTo(0, 0)} className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_salary')}</Link></li>
                <li><a href="#" className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_cv')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-shield-silver-lt text-xs tracking-widest uppercase mb-4">{t('footer_employers')}</h4>
              <ul className="space-y-2.5">
                <li><Link to="/pricing" onClick={() => window.scrollTo(0, 0)} className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_post')}</Link></li>
                <li><Link to="/pricing" onClick={() => window.scrollTo(0, 0)} className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_pricing')}</Link></li>
                <li><a href="#" className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_promo')}</a></li>
                <li><a href="#" className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_hr')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-shield-silver-lt text-xs tracking-widest uppercase mb-4">{t('footer_company')}</h4>
              <ul className="space-y-2.5">
                <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_about')}</Link></li>
                <li><Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_privacy')}</Link></li>
                <li><Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_terms')}</Link></li>
                <li><Link to="/cookies" onClick={() => window.scrollTo(0, 0)} className="text-shield-silver hover:text-shield-accent text-sm transition-colors">Cookie Policy</Link></li>
                <li>
                  <button
                    onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
                    className="text-shield-silver hover:text-shield-accent text-sm transition-colors"
                  >
                    Cookie Settings
                  </button>
                </li>
                <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-shield-silver hover:text-shield-accent text-sm transition-colors">{t('footer_contact')}</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-shield-gray-line flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-shield-silver">
            <span>{t('footer_copy')}</span>
            <span>{t('footer_tag')}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <TranslationProvider>
      <Router>
        <AppContent />
      </Router>
    </TranslationProvider>
  );
}