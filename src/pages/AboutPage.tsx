import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Users, Globe } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-shield-bg-light">
      {/* Header */}
      <div className="bg-shield-black py-16 px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 bg-shield-navy-lt rounded-2xl flex items-center justify-center">
            <Shield className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-shield-off-white uppercase tracking-tight mb-4">
          About DefJobs
        </h1>
        <p className="text-shield-silver text-base max-w-xl mx-auto">
          Europe's specialized job platform for defense, aerospace and security professionals.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Mission */}
        <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-shield-navy-lt/10 rounded-xl flex items-center justify-center">
              <Target className="h-5 w-5 text-shield-navy-lt" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-shield-text-l uppercase tracking-wide">Our Mission</h2>
          </div>
          <p className="text-shield-text-lm leading-relaxed mb-4">
            DefJobs was built to solve a real problem: defense and security companies struggle to find qualified civilian talent, while skilled professionals have no dedicated platform to find opportunities in this sector.
          </p>
          <p className="text-shield-text-lm leading-relaxed">
            We bridge that gap - connecting Europe's leading defense contractors with the engineers, technicians, logistics specialists, IT professionals and managers who keep the industry running.
          </p>
        </div>

        {/* Why DefJobs */}
        <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 bg-shield-navy-lt/10 rounded-xl flex items-center justify-center">
              <Users className="h-5 w-5 text-shield-navy-lt" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-shield-text-l uppercase tracking-wide">Why DefJobs?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Sector Focused', desc: 'Unlike general job boards, every listing on DefJobs is in defense, aerospace or security. No noise, only relevant opportunities.' },
              { title: 'European Coverage', desc: 'We cover key defense markets across Europe - Germany, France, UK, Czech Republic, Poland and beyond.' },
              { title: 'Personal Service', desc: 'We\'re not just a platform. We go the extra mile for both employers and candidates to make every hire a success.' },
            ].map(item => (
              <div key={item.title} className="border-[1.5px] border-shield-border-l rounded-xl p-5">
                <h3 className="font-bold text-shield-text-l mb-2">{item.title}</h3>
                <p className="text-shield-text-lm text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage */}
        <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-shield-navy-lt/10 rounded-xl flex items-center justify-center">
              <Globe className="h-5 w-5 text-shield-navy-lt" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-shield-text-l uppercase tracking-wide">What We Cover</h2>
          </div>
          <p className="text-shield-text-lm leading-relaxed mb-4">
            DefJobs covers civilian roles across the full defense supply chain - from prime contractors to tier-2 suppliers. Our listings span engineering, IT & cybersecurity, logistics, manufacturing, management, finance and administration.
          </p>
          <p className="text-shield-text-lm leading-relaxed">
            We work with companies like Rheinmetall, Thales, Airbus and hundreds of smaller defense suppliers who need specialized talent but can't find it on general job boards.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-shield-black rounded-2xl p-8 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-shield-off-white uppercase tracking-tight mb-3">
            Ready to get started?
          </h2>
          <p className="text-shield-silver text-sm mb-6">
            Whether you're looking for your next defense career move or need to hire top talent - we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/jobs" className="bg-shield-navy-lt hover:bg-shield-navy-mid text-white font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-[1px]">
              Browse Jobs
            </Link>
            <Link to="/post-job" className="bg-white hover:bg-shield-bg-light text-shield-black font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-[1px]">
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}