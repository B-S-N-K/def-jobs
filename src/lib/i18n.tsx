import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'cs' | 'en';

export const translations = {
  cs: {
    // Navbar
    nav_jobs: 'Obranné pozice',
    nav_companies: 'Společnosti',
    nav_salaries: 'Platy',
    nav_login: 'Přihlásit se',
    nav_hire: 'Inzerovat',
    
    // Home
    hero_badge: 'Nové pozice v evropské obraně a bezpečnosti',
    hero_h1: 'Největší pracovní portál<br/><em class="not-italic text-[#7ba4e8]">obranného průmyslu</em>',
    hero_sub: 'Hledejte civilní kariéru u předních evropských obranných dodavatelů, zjistěte přehled platů a posuňte svou kariéru v obranném sektoru.',
    cat_engineering: 'Strojírenství',
    cat_it: 'IT a kyberbezpečnost',
    cat_trades: 'Řemesla',
    cat_logistics: 'Logistika',
    cat_admin: 'Administrativa',
    cat_finance: 'Finance',
    cat_management: 'Management',
    featured_label: 'Vybraní ',
    featured_link: 'zaměstnavatelé',
    featured_label2: ' inzerující na Shield Talent',
    search_heading: 'Hledat obranné pozice',
    search_kw_placeholder: 'Název pozice nebo klíčové slovo',
    search_location: 'Lokalita',
    search_function: 'Obor',
    search_type: 'Typ úvazku',
    search_btn: 'Hledat',
    open_positions: 'Otevřené pozice',
    sort_newest: 'Nejnovější',
    sort_salary: 'Nejvyšší plat',
    banner_text: 'Hledáte zaměstnance? Oslovte kvalifikované obranné odborníky na předním civilním pracovním portálu v sektoru.',
    banner_btn: 'Inzerovat s námi',
    
    // Job Card
    featured: 'Doporučeno',
    view: 'Zobrazit',
    
    // Footer
    footer_brand: 'Přední civilní pracovní portál obranného průmyslu. Najděte svou další roli v obraně, bezpečnosti a národní infrastruktuře.',
    footer_candidates: 'PRO UCHAZEČE',
    footer_browse: 'Procházet pozice',
    footer_companies: 'Společnosti',
    footer_salary: 'Přehled platů',
    footer_cv: 'Nahrát životopis',
    footer_employers: 'PRO ZAMĚSTNAVATELE',
    footer_post: 'Zveřejnit inzerát',
    footer_pricing: 'Ceník',
    footer_promo: 'Sociální propagace',
    footer_hr: 'Filtrování HR',
    footer_company: 'SPOLEČNOST',
    footer_about: 'O nás',
    footer_privacy: 'Ochrana soukromí',
    footer_terms: 'Podmínky použití',
    footer_contact: 'Kontakt',
    footer_copy: '© 2025 Shield Talent. Všechna práva vyhrazena.',
    footer_tag: 'Vytvořeno pro obranné odborníky 🛡️',

    // Post Job
    post_title: 'ZAHÁJIT NÁBOR',
    post_sub: 'Zveřejněte své požadavky tisícům prověřených profesionálů.',
    post_params: 'PARAMETRY MISE',
    post_job_title: 'Název pozice',
    post_emp_type: 'Typ úvazku',
    post_salary: 'Platové rozpětí',
    post_tags: 'Štítky (oddělené čárkou)',
    post_base: 'ZÁKLADNA OPERACÍ',
    post_company: 'Název společnosti',
    post_location: 'Lokalita',
    post_briefing: 'INSTRUKTÁŽ',
    post_desc_placeholder: 'Popište roli, odpovědnosti a požadavky...',
    post_priority: 'PRIORITNÍ VÝPIS (+$49)',
    post_recommended: 'DOPORUČENO',
    post_priority_desc: 'Doporučené mise se zobrazují na začátku a získávají 3x větší viditelnost. Zahrnuje propagaci na sociálních sítích.',
    post_btn: 'ZAHÁJIT START',
    post_transmitting: 'PŘENOS...',
    
    // Job Detail
    job_briefing: 'INSTRUKTÁŽ K MISI',
    job_capabilities: 'POŽADOVANÉ SCHOPNOSTI',
    job_initiate: 'ZAHÁJIT PŘIHLÁŠKU',
    job_dossier: 'Odešlete své údaje přímo zaměstnavateli.',
    job_name: 'Celé jméno',
    job_email: 'E-mailová adresa',
    job_link: 'Odkaz na profil (CV/LinkedIn)',
    job_message: 'Průvodní zpráva',
    job_submit: 'ODESLAT SLOŽKU',
    job_success: 'Zaměstnavatel obdržel vaši složku.',

    // Pricing
    pricing_title: 'Jednoduchý a transparentní ceník',
    pricing_sub: 'Oslovte nejkvalifikovanější obranné odborníky v Evropě.',
    pricing_get_started: 'Začít inzerovat',
    pricing_per_listing: 'za inzerát',
    pricing_5_listings: '5 inzerátů',
    pricing_most_popular: 'Nejoblíbenější',
    pricing_best_value: 'Nejlepší hodnota',
    pricing_not_sure: 'Nevíte, který plán je pro vás ten pravý?',
    pricing_help: 'Pomůžeme vám vybrat →',
    pricing_extra_mile: 'Jdeme nad rámec',
    pricing_tailored_title: 'Potřebujete řešení na míru?',
    pricing_tailored_1: 'Každá obranná společnost má jedinečné potřeby. Ať už potřebujete screening kandidátů, hromadný nábor, kampaně na sociálních sítích nebo vlastní řešení - jsme tu, aby to fungovalo.',
    pricing_tailored_2: 'Nejsme jen platforma. Jsme váš partner pro nábor. Od první přihlášky až po finální nabídku - jsme s vámi na každém kroku.',
    pricing_lets_talk: 'Kontaktujte nás →',

    // Pricing plan details
    pricing_start_desc: 'Ideální pro společnosti s prvním náborem v obraně.',
    pricing_featured_desc: 'Vynikněte a oslovte více kvalifikovaných obranných odborníků.',
    pricing_elite_desc: 'Maximální viditelnost pro vaše nejdůležitější obranné pozice.',
    pricing_bundle_desc: 'Nejlepší hodnota pro společnosti s průběžnými potřebami náboru.',
    pricing_f1: '30 dní inzerce',
    pricing_f2: 'Standardní umístění',
    pricing_f3: 'Přihlášky do vaší schránky',
    pricing_f4: 'Logo společnosti v inzerátu',
    pricing_f5: 'Databáze kandidátů Shield Talent',
    pricing_f6: 'Vrchní pozice ve výsledcích',
    pricing_f7: 'Označení Doporučeno',
    pricing_f8: 'E-mailová kampaň kandidátům',
    pricing_f9: 'Propagace na sociálních sítích',
    pricing_f10: 'Přístup do CV databáze',
    pricing_f11: '60 dní inzerce',
    pricing_f12: 'Prioritní podpora',
    pricing_f13: '5 doporučených inzerátů',
    pricing_f14: '60 dní každý',
    pricing_f15: 'Doporučeno na všech inzerátech',
    pricing_f16: 'E-mailové kampaně kandidátům',
    pricing_f17: 'Dedikovaná podpora účtu',
    pricing_f18: 'Úspora €500 vs jednotlivé inzeráty',

    // Alert Banner
    alert_title: 'Nastavit upozornění na e-mail pro toto hledání',
    alert_sub: 'Dostávejte denní, týdenní nebo měsíční e-maily se všemi novými pozicemi odpovídajícími tomuto hledání.',
    alert_automate: 'Automatizujte hledání práce',
    alert_never_miss: 'Nepropásněte skvělou příležitost',
    alert_btn: 'Vytvořit upozornění',
  },
  en: {
    // Navbar
    nav_jobs: 'Defense Jobs',
    nav_companies: 'Companies',
    nav_salaries: 'Salaries',
    nav_login: 'Login / Signup',
    nav_hire: 'Hire With Us',
    
    // Home
    hero_badge: 'New Positions in European Defense & Security',
    hero_h1: 'The defense industry\'s<br/><em class="not-italic text-[#7ba4e8]">specialized jobs site</em>',
    hero_sub: 'Search civilian careers at top European defense contractors, unlock salary insights, and accelerate your career in the defense sector.',
    cat_engineering: 'Engineering',
    cat_it: 'IT & Cyber',
    cat_trades: 'Skilled Trades',
    cat_logistics: 'Logistics',
    cat_admin: 'Admin',
    cat_finance: 'Finance',
    cat_management: 'Management',
    featured_label: 'Featured ',
    featured_link: 'companies',
    featured_label2: ' hiring on Shield Talent',
    search_heading: 'Search defense jobs',
    search_kw_placeholder: 'Job Title or Keyword',
    search_location: 'Location',
    search_function: 'Business Function',
    search_type: 'Employment Type',
    search_btn: 'Search',
    open_positions: 'Open positions',
    sort_newest: 'Newest First',
    sort_salary: 'Highest Salary',
    banner_text: 'Hiring? Reach qualified defense professionals on the sector\'s leading civilian job site.',
    banner_btn: 'Hire With Us',
    
    // Job Card
    featured: 'Featured',
    view: 'View',
    
    // Footer
    footer_brand: 'The defense industry\'s leading civilian job board. Find your next role in defense, security, and national infrastructure.',
    footer_candidates: 'FOR CANDIDATES',
    footer_browse: 'Browse Jobs',
    footer_companies: 'Companies',
    footer_salary: 'Salary Guide',
    footer_cv: 'Upload CV',
    footer_employers: 'FOR EMPLOYERS',
    footer_post: 'Post a Job',
    footer_pricing: 'Pricing',
    footer_promo: 'Social Promotion',
    footer_hr: 'HR Filtering',
    footer_company: 'COMPANY',
    footer_about: 'About',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_contact: 'Contact',
    footer_copy: '© 2025 Shield Talent. All rights reserved.',
    footer_tag: 'Built for defense professionals 🛡️',

    // Post Job
    post_title: 'INITIATE RECRUITMENT',
    post_sub: 'Deploy your mission requirements to thousands of cleared professionals.',
    post_params: 'MISSION PARAMETERS',
    post_job_title: 'Job Title',
    post_emp_type: 'Employment Type',
    post_salary: 'Salary Range',
    post_tags: 'Tags (comma separated)',
    post_base: 'BASE OF OPERATIONS',
    post_company: 'Company Name',
    post_location: 'Location',
    post_briefing: 'BRIEFING',
    post_desc_placeholder: 'Describe the role, responsibilities, and requirements...',
    post_priority: 'PRIORITY LISTING (+$49)',
    post_recommended: 'RECOMMENDED',
    post_priority_desc: 'Featured missions appear at the top of the command feed and receive 3x more visibility. Includes social media promotion on our secure network.',
    post_btn: 'INITIATE LAUNCH',
    post_transmitting: 'TRANSMITTING...',

    // Job Detail
    job_briefing: 'MISSION BRIEFING',
    job_capabilities: 'REQUIRED CAPABILITIES',
    job_initiate: 'INITIATE APPLICATION',
    job_dossier: 'Submit your dossier directly to the employer.',
    job_name: 'Full Name',
    job_email: 'Email Frequency',
    job_link: 'Dossier Link (CV/LinkedIn)',
    job_message: 'Cover Message',
    job_submit: 'TRANSMIT DOSSIER',
    job_success: 'The employer has received your dossier.',

    // Pricing
    pricing_title: 'Simple, Transparent Pricing',
    pricing_sub: 'Reach the most qualified defense, aerospace and security professionals in Europe.',
    pricing_get_started: 'Get Started',
    pricing_per_listing: 'per listing',
    pricing_5_listings: '5 listings',
    pricing_most_popular: 'Most Popular',
    pricing_best_value: 'Best Value',
    pricing_not_sure: 'Not sure which plan is right for you?',
    pricing_help: 'We\'ll help you choose →',
    pricing_extra_mile: 'We Go The Extra Mile',
    pricing_tailored_title: 'Need Something Tailored?',
    pricing_tailored_1: 'Every defense company has unique hiring needs. Whether you need HR candidate screening, bulk hiring support, social media campaigns, or a fully custom recruitment solution - we\'re here to make it work.',
    pricing_tailored_2: 'We\'re not just a platform. We\'re your hiring partner. From the first application to the final offer, we\'re with you every step of the way.',
    pricing_lets_talk: 'Let\'s Talk →',

    // Pricing plan details
    pricing_start_desc: 'Perfect for companies making their first defense hire.',
    pricing_featured_desc: 'Stand out and reach more qualified defense professionals.',
    pricing_elite_desc: 'Maximum visibility for your most critical defense roles.',
    pricing_bundle_desc: 'Best value for companies with ongoing hiring needs.',
    pricing_f1: '30 day listing',
    pricing_f2: 'Standard placement',
    pricing_f3: 'Applications to your inbox',
    pricing_f4: 'Company logo on listing',
    pricing_f5: 'Shield Talent candidate pool',
    pricing_f6: 'Top of search results',
    pricing_f7: 'Featured badge on listing',
    pricing_f8: 'Email campaign to candidates',
    pricing_f9: 'Social media promotion',
    pricing_f10: 'CV database access',
    pricing_f11: '60 day listing',
    pricing_f12: 'Priority support',
    pricing_f13: '5 featured listings',
    pricing_f14: '60 days each',
    pricing_f15: 'Featured badge on all listings',
    pricing_f16: 'Email campaigns to candidates',
    pricing_f17: 'Dedicated account support',
    pricing_f18: 'Save €500 vs individual listings',

    // Alert Banner
    alert_title: 'Set up an email alert for this search',
    alert_sub: 'Get a daily, weekly or monthly email containing all the new jobs matching this search.',
    alert_automate: 'Automate your job search',
    alert_never_miss: 'Never miss a great opportunity',
    alert_btn: 'Create Alert',
  }
};

type TranslationKey = keyof typeof translations['en'];

type TranslationContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('cs');

  const t = (key: TranslationKey) => {
    return translations[lang][key] || translations['en'][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
