import React, { useState } from 'react';
import { Upload, MapPin, Briefcase, User, Mail, FileText } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export function SubmitCVPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobFunction: '',
    locationPreference: '',
    message: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !cvFile) return;
    setSubmitting(true);

    try {
      // Upload CV via server
      setUploading(true);
      const uploadData = new FormData();
      uploadData.append('cv', cvFile);

      const uploadRes = await fetch('/api/upload-cv', {
        method: 'POST',
        body: uploadData
      });

      if (!uploadRes.ok) throw new Error('CV upload failed');
      const { fileName } = await uploadRes.json();
      setUploading(false);

      // Submit to talent pool
      const response = await fetch('/api/talent-pool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, cvUrl: fileName })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting CV:', error);
      alert('Error submitting CV. Please try again.');
    } finally {
      setSubmitting(false);
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-shield-bg-light">
      <div className="bg-shield-black py-16 px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-shield-off-white uppercase tracking-tight mb-4">
          Submit Your CV
        </h1>
        <p className="text-shield-silver text-base max-w-xl mx-auto">
          Don't see the right role? Submit your CV to our talent pool and we'll match you with relevant defense and aerospace opportunities across Europe.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16">
        {submitted ? (
          <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-12 text-center shadow-[0_8px_36px_rgba(0,0,0,0.08)]">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="font-heading font-bold text-2xl text-shield-text-l uppercase tracking-wide mb-3">CV Submitted!</h2>
            <p className="text-shield-text-lm leading-relaxed">
              Thank you! We've added your CV to our talent pool. We'll be in touch when a suitable opportunity comes up.
            </p>
          </div>
        ) : (
          <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl shadow-[0_8px_36px_rgba(0,0,0,0.13)] overflow-hidden">
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-shield-text-lm opacity-60" />
                    <input
                      type="text"
                      required
                      className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl pl-10 pr-4 py-3 text-shield-text-l text-sm focus:border-shield-navy-lt outline-none transition-colors"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-shield-text-lm opacity-60" />
                    <input
                      type="email"
                      required
                      className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl pl-10 pr-4 py-3 text-shield-text-l text-sm focus:border-shield-navy-lt outline-none transition-colors"
                      placeholder="john@email.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">Job Function</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3.5 h-4 w-4 text-shield-text-lm opacity-60" />
                    <select
                      className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl pl-10 pr-4 py-3 text-shield-text-l text-sm focus:border-shield-navy-lt outline-none transition-colors appearance-none cursor-pointer"
                      value={formData.jobFunction}
                      onChange={e => setFormData({...formData, jobFunction: e.target.value})}
                    >
                      <option value="">Select your field...</option>
                      <option value="Engineering">Engineering</option>
                      <option value="IT & Cyber">IT & Cyber</option>
                      <option value="Manufacturing">Manufacturing & Trades</option>
                      <option value="Logistics">Logistics & Supply Chain</option>
                      <option value="Management">Management</option>
                      <option value="Finance">Finance</option>
                      <option value="Admin">Administration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">Preferred Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-shield-text-lm opacity-60" />
                    <select
                      className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl pl-10 pr-4 py-3 text-shield-text-l text-sm focus:border-shield-navy-lt outline-none transition-colors appearance-none cursor-pointer"
                      value={formData.locationPreference}
                      onChange={e => setFormData({...formData, locationPreference: e.target.value})}
                    >
                      <option value="">Any location</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Poland">Poland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Italy">Italy</option>
                      <option value="Remote">Remote</option>
                      <option value="Anywhere in Europe">Anywhere in Europe</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">Upload CV (PDF)</label>
                <label className="flex items-center justify-center gap-2 w-full bg-shield-bg-light border-[1.5px] border-dashed border-shield-border-l rounded-xl px-4 py-5 cursor-pointer hover:border-shield-navy-lt transition-colors">
                  <Upload className="h-4 w-4 text-shield-text-lm" />
                  <span className="text-sm text-shield-text-lm">
                    {cvFile ? cvFile.name : 'Click to upload your CV (PDF)'}
                  </span>
                  <input
                    type="file"
                    accept="application/pdf"
                    required
                    className="hidden"
                    onChange={e => setCvFile(e.target.files?.[0] || null)}
                  />
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-shield-text-lm mb-2 uppercase tracking-wider">Brief Introduction (optional)</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3.5 h-4 w-4 text-shield-text-lm opacity-60" />
                  <textarea
                    rows={4}
                    className="w-full bg-shield-bg-light border-[1.5px] border-shield-border-l rounded-xl pl-10 pr-4 py-3 text-shield-text-l text-sm focus:border-shield-navy-lt outline-none transition-colors"
                    placeholder="Tell us a bit about your experience and what you're looking for..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>
              </div>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-shield-border-l text-shield-navy-lt focus:ring-shield-navy-lt cursor-pointer"
                />
                <span className="text-xs text-shield-text-lm leading-relaxed">
                  I agree that my CV and personal data will be stored in the DefJobs talent pool and may be shared with relevant defense and aerospace employers. I accept the{' '}
                  <a href="/privacy" className="text-shield-navy-lt hover:underline">Privacy Policy</a>.
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting || !consent || !cvFile}
                className="w-full bg-shield-black hover:bg-shield-navy-lt text-white font-heading font-bold text-base py-4 rounded-xl transition-all hover:-translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest"
              >
                {uploading ? 'Uploading CV...' : submitting ? 'Submitting...' : 'Submit CV'}
              </button>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}