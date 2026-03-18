import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'cs' | 'en';

export const translations = {
  cs: {
    // Navbar
    nav_jobs: 'Pracovní pozice',
    nav_companies: 'Společnosti',
    nav_salaries: 'Platy',
    nav_login: 'Přihlásit se',
    nav_hire: 'Inzerovat pozici',
    
    // Home
    hero_badge: 'Kariéra v evropském obranném a bezpečnostním sektoru',
    hero_h1: 'Pracovní portál<br/><em class="not-italic text-[#7ba4e8]">obranného průmyslu</em>',
    hero_sub: 'Najděte civilní kariéru u předních evropských obranných a leteckých společností. Prozkoumejte otevřené pozice, porovnejte platy a posuňte svou kariéru.',
    cat_engineering: 'Strojírenství',
    cat_it: 'IT & kybernetika',
    cat_trades: 'Řemesla',
    cat_logistics: 'Logistika',
    cat_admin: 'Administrativa',
    cat_finance: 'Finance',
    cat_management: 'Management',
    featured_label: 'Vybraní ',
    featured_link: 'zaměstnavatelé',
    featured_label2: ' inzerující na DefJobs',
    search_heading: 'Hledat pozice v obraně a letectví',
    search_kw_placeholder: 'Název pozice nebo klíčové slovo',
    search_location: 'Lokalita',
    search_function: 'Obor',
    search_type: 'Typ úvazku',
    search_btn: 'Hledat',
    open_positions: 'Otevřené pozice',
    sort_newest: 'Nejnovější',
    sort_salary: 'Nejvyšší plat',
    banner_text: 'Hledáte zaměstnance v obranném sektoru? Oslovte kvalifikované kandidáty na specializovaném kariérním portálu.',
    banner_btn: 'Začít inzerovat',
    home_loading: 'Načítání pozic...',
    home_view_jobs: 'Zobrazit pozice',

    // Locations
    loc_germany: 'Německo',
    loc_france: 'Francie',
    loc_uk: 'Velká Británie',
    loc_czech: 'Česká republika',
    loc_poland: 'Polsko',
    loc_sweden: 'Švédsko',
    loc_italy: 'Itálie',
    loc_remote: 'Vzdáleně',

    // Employment types
    type_fulltime: 'Plný úvazek',
    type_contract: 'Kontrakt',
    type_parttime: 'Částečný úvazek',
    type_temporary: 'Dočasný',
    
    // Job Card
    featured: 'Doporučeno',
    view: 'Zobrazit',
    
    // Footer
    footer_brand: 'Kariérní portál pro obranný a letecký průmysl v Evropě. Najděte svou další pozici v obraně, bezpečnosti a aerospace.',
    footer_candidates: 'PRO UCHAZEČE',
    footer_browse: 'Procházet pozice',
    footer_companies: 'Společnosti',
    footer_salary: 'Přehled platů',
    footer_cv: 'Nahrát životopis',
    footer_employers: 'PRO ZAMĚSTNAVATELE',
    footer_post: 'Zveřejnit inzerát',
    footer_pricing: 'Ceník',
    footer_promo: 'Sociální kampaně',
    footer_hr: 'Předvýběr kandidátů',
    footer_company: 'DefJobs',
    footer_about: 'O nás',
    footer_privacy: 'Ochrana soukromí',
    footer_terms: 'Podmínky použití',
    footer_contact: 'Kontakt',
    footer_copy: '© 2026 DefJobs. Všechna práva vyhrazena.',
    footer_tag: 'Defense Talent. Delivered.',

    // Post Job
    post_title: 'Zveřejnit pracovní pozici',
    post_sub: 'Oslovte tisíce kvalifikovaných odborníků v obranném a leteckém průmyslu.',
    post_params: 'Detaily pozice',
    post_job_title: 'Název pozice',
    post_emp_type: 'Typ úvazku',
    post_salary: 'Platové rozpětí',
    post_tags: 'Štítky (oddělené čárkou)',
    post_base: 'Informace o společnosti',
    post_company: 'Název společnosti',
    post_location: 'Lokalita',
    post_briefing: 'Popis pozice',
    post_desc_placeholder: 'Popište roli, odpovědnosti a požadavky...',
    post_priority: 'Doporučený inzerát (+€49)',
    post_recommended: 'DOPORUČENO',
    post_priority_desc: 'Doporučené pozice se zobrazují na prvních místech a získávají až 3× větší viditelnost. Zahrnuje propagaci na sociálních sítích.',
    post_btn: 'Zveřejnit pozici',
    post_transmitting: 'Odesílání...',
    post_title_placeholder: 'např. Svářeč v leteckém průmyslu',
    post_salary_placeholder: 'např. €40 000 – €55 000',
    post_tags_placeholder: 'např. Výroba, Strojírenství, IT',
    post_company_placeholder: 'např. Rheinmetall',
    post_location_placeholder: 'např. Praha, Česká republika',
    post_language: 'Jazyk inzerátu',
    post_promo_title: 'Chcete větší viditelnost?',
    post_promo_desc: 'Přednostní umístění, e-mailové kampaně, propagace na sociálních sítích a další jsou součástí našich plánů.',
    post_promo_link: 'Zobrazit ceník →',
    post_error: 'Zveřejnění pozice se nezdařilo. Zkuste to prosím znovu.',
    
    // Job Detail
    job_briefing: 'O této pozici',
    job_capabilities: 'Požadavky',
    job_initiate: 'Podat přihlášku',
    job_dossier: 'Odešlete svou přihlášku přímo zaměstnavateli.',
    job_name: 'Celé jméno',
    job_email: 'E-mailová adresa',
    job_link: 'Odkaz na CV nebo LinkedIn',
    job_message: 'Průvodní zpráva',
    job_submit: 'Odeslat přihlášku',
    job_success: 'Vaše přihláška byla úspěšně odeslána.',
    job_loading: 'Načítání...',
    job_not_found: 'Pozice nebyla nalezena',
    job_back: 'Zpět na pozice',
    job_lang_notice: 'Tento inzerát je v původním jazyce zaměstnavatele.',
    job_sent_title: 'Přihláška odeslána',
    job_cv_label: 'Životopis (PDF)',
    job_cv_placeholder: 'Klikněte pro nahrání životopisu (PDF)',
    job_consent: 'Souhlasím se zpracováním svých osobních údajů pro účely této přihlášky a beru na vědomí Zásady ochrany osobních údajů.',
    job_uploading: 'Nahrávání CV...',
    job_submitting: 'Odesílání...',
    job_apply_error: 'Odeslání přihlášky se nezdařilo. Zkuste to prosím znovu.',

    // Pricing
    pricing_title: 'Ceník inzerce',
    pricing_sub: 'Oslovte kvalifikované odborníky v obranném, leteckém a bezpečnostním průmyslu v Evropě.',
    pricing_get_started: 'Vybrat plán',
    pricing_per_listing: 'za inzerát',
    pricing_5_listings: '5 inzerátů',
    pricing_most_popular: 'Nejoblíbenější',
    pricing_best_value: 'Nejlepší hodnota',
    pricing_not_sure: 'Potřebujete poradit s výběrem?',
    pricing_help: 'Napište nám →',
    pricing_extra_mile: 'Náborové kampaně na míru',
    pricing_tailored_title: 'Potřebujete víc než inzerát?',
    pricing_tailored_1: 'Vytvoříme a spustíme cílenou náborovou kampaň na sociálních sítích, která osloví přesně ty kandidáty, které hledáte - podle role, lokality a seniority.',
    pricing_tailored_2: 'Nabízíme také předvýběr kandidátů, hromadnou inzerci a komplexní náborová řešení pro obranné a letecké společnosti.',
    pricing_lets_talk: 'Kontaktujte nás →',

    // Pricing plan details
    pricing_start_desc: 'Ideální pro jednorázový nábor nebo testování platformy.',
    pricing_featured_desc: 'Zvýšená viditelnost pro pozice, které potřebujete obsadit rychleji.',
    pricing_elite_desc: 'Maximální dosah s aktivní propagací vaší pozice.',
    pricing_bundle_desc: 'Pro společnosti s průběžným náborem. Největší úspora na inzerát.',
    pricing_f1: 'Inzerce po dobu 30 dní',
    pricing_f2: 'Standardní umístění ve výsledcích',
    pricing_f3: 'Přihlášky přímo do vaší schránky',
    pricing_f4: 'Logo společnosti v inzerátu',
    pricing_f5: 'Zařazení do databáze DefJobs',
    pricing_f6: 'Přednostní pozice ve výsledcích',
    pricing_f7: 'Označení „Doporučeno"',
    pricing_f8: 'Cílený e-mail relevantním kandidátům',
    pricing_f9: 'Propagace na sociálních sítích',
    pricing_f10: 'Přístup do databáze životopisů',
    pricing_f11: 'Inzerce po dobu 60 dní',
    pricing_f12: 'Prioritní podpora',
    pricing_f13: '5× doporučený inzerát',
    pricing_f14: 'Každý inzerát aktivní 60 dní',
    pricing_f15: 'Označení „Doporučeno" na všech',
    pricing_f16: 'E-mailové kampaně ke každému inzerátu',
    pricing_f17: 'Osobní správce účtu',
    pricing_f18: 'Úspora €500 oproti jednotlivým inzerátům',

    // Alert Banner & Modal
    alert_title: 'Nastavit e-mailové upozornění',
    alert_sub: 'Dostávejte denní, týdenní nebo měsíční e-maily s novými pozicemi odpovídajícími vašemu hledání.',
    alert_automate: 'Automatizujte hledání práce',
    alert_never_miss: 'Nepropásněte žádnou příležitost',
    alert_btn: 'Vytvořit upozornění',
    alert_email_placeholder: 'Vaše e-mailová adresa',
    alert_consent: 'Souhlasím se zasíláním e-mailových upozornění na nové pozice a beru na vědomí Zásady ochrany osobních údajů.',
    alert_success: '✅ Upozornění bylo úspěšně vytvořeno!',
  },
  en: {
    // Navbar
    nav_jobs: 'Browse Jobs',
    nav_companies: 'Companies',
    nav_salaries: 'Salaries',
    nav_login: 'Login / Signup',
    nav_hire: 'Post a Job',
    
    // Home
    hero_badge: 'Defense, Aerospace & Security Careers Across Europe',
    hero_h1: 'Europe\'s defense & aerospace<br/><em class="not-italic text-[#7ba4e8]">career platform</em>',
    hero_sub: 'Find civilian roles at leading European defense and aerospace companies. Browse open positions, compare salaries, and take the next step in your career.',
    cat_engineering: 'Engineering',
    cat_it: 'IT & Cyber',
    cat_trades: 'Skilled Trades',
    cat_logistics: 'Logistics',
    cat_admin: 'Admin',
    cat_finance: 'Finance',
    cat_management: 'Management',
    featured_label: 'Featured ',
    featured_link: 'companies',
    featured_label2: ' hiring on DefJobs',
    search_heading: 'Search defense & aerospace jobs',
    search_kw_placeholder: 'Job title or keyword',
    search_location: 'Location',
    search_function: 'Department',
    search_type: 'Employment Type',
    search_btn: 'Search',
    open_positions: 'Open positions',
    sort_newest: 'Newest First',
    sort_salary: 'Highest Salary',
    banner_text: 'Hiring for defense or aerospace? Reach qualified candidates on Europe\'s specialized career platform.',
    banner_btn: 'Post a Job',
    home_loading: 'Loading positions...',
    home_view_jobs: 'View jobs',

    // Locations
    loc_germany: 'Germany',
    loc_france: 'France',
    loc_uk: 'United Kingdom',
    loc_czech: 'Czech Republic',
    loc_poland: 'Poland',
    loc_sweden: 'Sweden',
    loc_italy: 'Italy',
    loc_remote: 'Remote',

    // Employment types
    type_fulltime: 'Full-time',
    type_contract: 'Contract',
    type_parttime: 'Part-time',
    type_temporary: 'Temporary',
    
    // Job Card
    featured: 'Featured',
    view: 'View',
    
    // Footer
    footer_brand: 'Europe\'s career platform for defense, aerospace and security. Find your next role with leading contractors and manufacturers across the continent.',
    footer_candidates: 'FOR CANDIDATES',
    footer_browse: 'Browse Jobs',
    footer_companies: 'Companies',
    footer_salary: 'Salary Guide',
    footer_cv: 'Upload CV',
    footer_employers: 'FOR EMPLOYERS',
    footer_post: 'Post a Job',
    footer_pricing: 'Pricing',
    footer_promo: 'Social Campaigns',
    footer_hr: 'Candidate Screening',
    footer_company: 'DefJobs',
    footer_about: 'About',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_contact: 'Contact',
    footer_copy: '© 2026 DefJobs. All rights reserved.',
    footer_tag: 'Defense Talent. Delivered.',

    // Post Job
    post_title: 'Post a Job',
    post_sub: 'Reach thousands of qualified professionals in the defense and aerospace sector.',
    post_params: 'Job Details',
    post_job_title: 'Job Title',
    post_emp_type: 'Employment Type',
    post_salary: 'Salary Range',
    post_tags: 'Tags (comma separated)',
    post_base: 'Company Information',
    post_company: 'Company Name',
    post_location: 'Location',
    post_briefing: 'Job Description',
    post_desc_placeholder: 'Describe the role, responsibilities, and requirements...',
    post_priority: 'Featured Listing (+€49)',
    post_recommended: 'RECOMMENDED',
    post_priority_desc: 'Featured listings appear at the top of search results and receive up to 3× more views. Includes social media promotion.',
    post_btn: 'Publish Listing',
    post_transmitting: 'Submitting...',
    post_title_placeholder: 'e.g. Aerospace Production Engineer',
    post_salary_placeholder: 'e.g. €50,000 – €70,000',
    post_tags_placeholder: 'e.g. Manufacturing, Engineering, IT',
    post_company_placeholder: 'e.g. Rheinmetall',
    post_location_placeholder: 'e.g. Munich, Germany',
    post_language: 'Listing Language',
    post_promo_title: 'Want more visibility?',
    post_promo_desc: 'Featured placement, email campaigns, social media promotion and more are available as part of our plans.',
    post_promo_link: 'View pricing →',
    post_error: 'Failed to publish listing. Please try again.',

    // Job Detail
    job_briefing: 'About This Role',
    job_capabilities: 'Requirements',
    job_initiate: 'Apply Now',
    job_dossier: 'Submit your application directly to the employer.',
    job_name: 'Full Name',
    job_email: 'Email Address',
    job_link: 'CV or LinkedIn URL',
    job_message: 'Cover Message',
    job_submit: 'Submit Application',
    job_success: 'Your application has been submitted successfully.',
    job_loading: 'Loading...',
    job_not_found: 'Job not found',
    job_back: 'Back to jobs',
    job_lang_notice: 'This listing is in the employer\'s original language.',
    job_sent_title: 'Application Submitted',
    job_cv_label: 'CV (PDF)',
    job_cv_placeholder: 'Click to upload your CV (PDF)',
    job_consent: 'I agree to the processing of my personal data for this application and acknowledge the Privacy Policy.',
    job_uploading: 'Uploading CV...',
    job_submitting: 'Submitting...',
    job_apply_error: 'Failed to submit application. Please try again.',

    // Pricing
    pricing_title: 'Pricing',
    pricing_sub: 'Reach qualified defense, aerospace and security professionals across Europe.',
    pricing_get_started: 'Choose Plan',
    pricing_per_listing: 'per listing',
    pricing_5_listings: '5 listings',
    pricing_most_popular: 'Most Popular',
    pricing_best_value: 'Best Value',
    pricing_not_sure: 'Need help choosing?',
    pricing_help: 'Get in touch →',
    pricing_extra_mile: 'Done-For-You Hiring Campaigns',
    pricing_tailored_title: 'Need More Than a Listing?',
    pricing_tailored_1: 'We build and run targeted social media hiring campaigns that reach the exact candidates you need - by role, location, and seniority. You focus on interviews, we handle the pipeline.',
    pricing_tailored_2: 'We also offer candidate pre-screening, bulk job postings, and end-to-end recruitment solutions for defense and aerospace companies.',
    pricing_lets_talk: 'Get in Touch →',

    // Pricing plan details
    pricing_start_desc: 'Ideal for a single hire or to try the platform.',
    pricing_featured_desc: 'Higher visibility for roles you need to fill faster.',
    pricing_elite_desc: 'Maximum reach with active promotion of your listing.',
    pricing_bundle_desc: 'For companies hiring regularly. Lowest cost per listing.',
    pricing_f1: '30 day listing',
    pricing_f2: 'Standard placement in results',
    pricing_f3: 'Applications delivered to your inbox',
    pricing_f4: 'Company logo on listing',
    pricing_f5: 'Listed in DefJobs candidate pool',
    pricing_f6: 'Priority placement in search results',
    pricing_f7: '"Featured" badge on listing',
    pricing_f8: 'Targeted email to matching candidates',
    pricing_f9: 'Social media promotion',
    pricing_f10: 'CV database access',
    pricing_f11: '60 day listing',
    pricing_f12: 'Priority support',
    pricing_f13: '5× featured listings',
    pricing_f14: '60 days each',
    pricing_f15: '"Featured" badge on all listings',
    pricing_f16: 'Email campaign per listing',
    pricing_f17: 'Dedicated account manager',
    pricing_f18: 'Save €500 vs individual listings',

    // Alert Banner & Modal
    alert_title: 'Set up a job alert for this search',
    alert_sub: 'Get a daily, weekly, or monthly email with new positions matching your search.',
    alert_automate: 'Automate your job search',
    alert_never_miss: 'Never miss an opportunity',
    alert_btn: 'Create Alert',
    alert_email_placeholder: 'Your email address',
    alert_consent: 'I agree to receive job alert emails and acknowledge the Privacy Policy.',
    alert_success: '✅ Alert created successfully!',
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