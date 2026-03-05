import React from 'react';
import { useTranslation } from '@/lib/i18n';

const salaryData = [
  { role: 'Systems Engineer', level: 'Senior', country: 'Germany', min: 75000, max: 95000, currency: '€' },
  { role: 'Cybersecurity Analyst', level: 'Mid', country: 'France', min: 60000, max: 80000, currency: '€' },
  { role: 'Aerospace Engineer', level: 'Senior', country: 'Germany', min: 80000, max: 105000, currency: '€' },
  { role: 'Logistics Coordinator', level: 'Junior', country: 'Czech Republic', min: 35000, max: 50000, currency: '€' },
  { role: 'Software Developer', level: 'Mid', country: 'Czech Republic', min: 55000, max: 75000, currency: '€' },
  { role: 'Project Manager', level: 'Senior', country: 'United Kingdom', min: 70000, max: 95000, currency: '£' },
  { role: 'Quality Inspector', level: 'Mid', country: 'Germany', min: 50000, max: 70000, currency: '€' },
  { role: 'Intelligence Analyst', level: 'Senior', country: 'United Kingdom', min: 65000, max: 90000, currency: '£' },
  { role: 'Electronics Technician', level: 'Mid', country: 'France', min: 45000, max: 62000, currency: '€' },
  { role: 'Supply Chain Manager', level: 'Senior', country: 'Germany', min: 72000, max: 92000, currency: '€' },
];

const levelColors: Record<string, string> = {
  Junior: 'bg-green-100 text-green-700',
  Mid: 'bg-blue-100 text-blue-700',
  Senior: 'bg-purple-100 text-purple-700',
};

export function SalariesPage() {
  return (
    <div className="min-h-screen bg-shield-bg-light">
      {/* Header */}
      <div className="bg-shield-black py-16 px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-shield-off-white uppercase tracking-tight mb-4">
          Defense Salary Guide
        </h1>
        <p className="text-shield-silver text-base max-w-xl mx-auto">
          Explore salary ranges for defense, aerospace and security roles across Europe.
        </p>
      </div>

      {/* Salary Table */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl overflow-hidden shadow-[0_8px_36px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-shield-bg-light border-b border-shield-border-l text-xs font-bold text-shield-text-lm uppercase tracking-wider">
            <span>Role</span>
            <span>Level</span>
            <span>Country</span>
            <span>Salary Range</span>
          </div>
          {salaryData.map((row, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-shield-border-l last:border-0 hover:bg-shield-bg-light transition-colors">
              <span className="font-medium text-shield-text-l text-sm">{row.role}</span>
              <span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${levelColors[row.level]}`}>
                  {row.level}
                </span>
              </span>
              <span className="text-shield-text-lm text-sm">{row.country}</span>
              <span className="font-semibold text-shield-navy-lt text-sm">
                {row.currency}{row.min.toLocaleString()} – {row.currency}{row.max.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-shield-text-lm text-xs mt-6">
          Salary data is indicative and based on market research. Actual salaries may vary.
        </p>
      </div>
    </div>
  );
}