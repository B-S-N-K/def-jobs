import React, { useState } from 'react';
import { Mail, MessageSquare, Building2 } from 'lucide-react';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !message) return;
    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to send message', err);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-shield-bg-light">
      {/* Header */}
      <div className="bg-shield-black py-16 px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-shield-off-white uppercase tracking-tight mb-4">
          Contact Us
        </h1>
        <p className="text-shield-silver text-base max-w-xl mx-auto">
          Have a question or need a tailored solution? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 bg-shield-navy-lt/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5 text-shield-navy-lt" />
                </div>
                <h3 className="font-bold text-shield-text-l">Email Us</h3>
              </div>
              <p className="text-shield-text-lm text-sm mb-2">For general enquiries:</p>
              <a href="mailto:hello@shieldtalent.com" className="text-shield-navy-lt font-semibold hover:underline">
                hello@shieldtalent.com
              </a>
            </div>

            <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 bg-shield-navy-lt/10 rounded-xl flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-shield-navy-lt" />
                </div>
                <h3 className="font-bold text-shield-text-l">For Employers</h3>
              </div>
              <p className="text-shield-text-lm text-sm leading-relaxed">
                Looking to post a job, discuss pricing or explore a custom recruitment solution? We're here to help you find the right defense talent.
              </p>
            </div>

            <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 bg-shield-navy-lt/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-shield-navy-lt" />
                </div>
                <h3 className="font-bold text-shield-text-l">For Candidates</h3>
              </div>
              <p className="text-shield-text-lm text-sm leading-relaxed">
                Need help with your application or have a question about a listing? Reach out and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-heading font-bold text-xl text-shield-text-l mb-2">Message Sent!</h3>
                <p className="text-shield-text-lm text-sm">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-6">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-shield-text-lm uppercase tracking-wider mb-1.5">Your Name</label>
                    <input
                      type="text"
                      className="w-full border-[1.5px] border-shield-border-l rounded-xl px-4 py-3 text-sm outline-none focus:border-shield-navy-lt transition-colors"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-shield-text-lm uppercase tracking-wider mb-1.5">Email Address</label>
                    <input
                      type="email"
                      className="w-full border-[1.5px] border-shield-border-l rounded-xl px-4 py-3 text-sm outline-none focus:border-shield-navy-lt transition-colors"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-shield-text-lm uppercase tracking-wider mb-1.5">Message</label>
                    <textarea
                      className="w-full border-[1.5px] border-shield-border-l rounded-xl px-4 py-3 text-sm outline-none focus:border-shield-navy-lt transition-colors resize-none"
                      rows={5}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full bg-shield-black hover:bg-shield-navy-lt text-white font-bold py-3 rounded-xl transition-all hover:-translate-y-[1px]"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}