import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Briefcase } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface Company {
  id: number;
  name: string;
  website: string;
  description: string;
  country: string;
}

export function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/api/companies')
      .then(res => res.json())
      .then(data => {
        setCompanies(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch companies', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-shield-bg-light">
      {/* Header */}
      <div className="bg-shield-black py-16 px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-shield-off-white uppercase tracking-tight mb-4">
          Defense Companies
        </h1>
        <p className="text-shield-silver text-base max-w-xl mx-auto">
          Browse the leading defense, aerospace and security companies hiring on Shield Talent.
        </p>
      </div>

      {/* Companies Grid */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-20 text-shield-text-lm">Loading companies...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map(company => (
              <div key={company.id} className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-6 hover:border-shield-navy-lt hover:shadow-[0_8px_36px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-shield-bg-light border border-shield-border-l flex items-center justify-center font-heading font-bold text-lg text-shield-text-l">
                    {company.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-shield-text-l text-lg">{company.name}</h3>
                    <div className="flex items-center gap-1 text-shield-text-lm text-xs">
                      <MapPin className="h-3 w-3" />
                      {company.country}
                    </div>
                  </div>
                </div>
                <p className="text-shield-text-lm text-sm leading-relaxed mb-4">
                  {company.description}
                </p>
                <a 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-shield-navy-lt text-sm font-medium hover:underline"
                >
                  Visit website →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}