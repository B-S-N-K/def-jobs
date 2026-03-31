import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Shield, Briefcase, MapPin, Download, Clock, Users, Eye } from 'lucide-react';

interface Application {
  id: number;
  name: string;
  email: string;
  message: string;
  cv_url: string;
  created_at: string;
}

interface Job {
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted_at: string;
}

interface PortalData {
  job: Job;
  employer: { name: string; email: string };
  applications: Application[];
  expires_at: string;
}

export function EmployerPortalPage() {
  const { token } = useParams();
  const [data, setData] = useState<PortalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`/api/employer/${token}`)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          setError(json.error);
        } else {
          setData(json);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load portal');
        setLoading(false);
      });
  }, [token]);

  const handleDownloadCV = async (fileName: string, applicantName: string) => {
    const res = await fetch(`/api/employer/${token}/cv/${fileName}`);
    const { url } = await res.json();
    window.open(url, '_blank');
  };

  if (loading) return (
    <div className="min-h-screen bg-shield-bg-light flex items-center justify-center">
      <div className="text-shield-text-lm">Loading your portal...</div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-shield-bg-light flex items-center justify-center px-4">
      <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-8 max-w-md w-full text-center">
        <div className="text-4xl mb-4">🔒</div>
        <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase mb-2">Access Denied</h2>
        <p className="text-shield-text-lm text-sm">{error}</p>
        <p className="text-shield-text-lm text-xs mt-4">If you believe this is an error, contact us at <a href="mailto:hello@defjobs.eu" className="text-shield-navy-lt hover:underline">hello@defjobs.eu</a></p>
      </div>
    </div>
  );

  if (!data) return null;

  return (
    <div className="min-h-screen bg-shield-bg-light">
      {/* Header */}
      <div className="bg-shield-black border-b border-shield-gray-line px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-shield-navy-lt rounded-md flex items-center justify-center">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <span className="font-heading font-bold text-shield-off-white tracking-widest uppercase">DefJobs</span>
          <span className="text-shield-silver text-sm">- Employer Portal</span>
        </div>
        <div className="text-shield-silver text-xs">
          Access expires: {new Date(data.expires_at).toLocaleDateString()}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="font-heading font-bold text-2xl text-shield-text-l uppercase tracking-wide mb-1">
            Welcome{data.employer.name ? `, ${data.employer.name}` : ''}
          </h1>
          <p className="text-shield-text-lm text-sm">Here are the results for your job listing on DefJobs.</p>
        </div>

        {/* Job Card */}
        <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-6 mb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-heading font-bold text-xl text-shield-text-l mb-1">{data.job.title}</h2>
              <p className="text-shield-text-lm text-sm mb-3">{data.job.company}</p>
              <div className="flex flex-wrap gap-3 text-xs text-shield-text-lm">
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{data.job.location}</span>
                <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{data.job.type}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />Posted {new Date(data.job.posted_at).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="font-heading font-bold text-3xl text-shield-navy-lt">{data.applications.length}</div>
              <div className="text-shield-text-lm text-xs flex items-center gap-1 justify-end">
                <Users className="h-3 w-3" />
                Applications
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase tracking-wide mb-4">
          Applications ({data.applications.length})
        </h2>

        {data.applications.length === 0 ? (
          <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-12 text-center">
            <div className="text-4xl mb-4">📭</div>
            <h3 className="font-bold text-shield-text-l mb-2">No applications yet</h3>
            <p className="text-shield-text-lm text-sm">Check back soon - your listing is live and being promoted.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {data.applications.map((app, i) => (
              <div key={app.id} className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-bold text-shield-text-l text-lg">{app.name}</h3>
                    <a href={`mailto:${app.email}`} className="text-shield-navy-lt text-sm hover:underline">{app.email}</a>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-shield-text-lm">{new Date(app.created_at).toLocaleDateString()}</span>
                    {app.cv_url && (
                      <button
                        onClick={() => handleDownloadCV(app.cv_url, app.name)}
                        className="flex items-center gap-1.5 bg-shield-navy-lt hover:bg-shield-navy-mid text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
                      >
                        <Download className="h-3 w-3" />
                        Download CV
                      </button>
                    )}
                  </div>
                </div>
                {app.message && (
                  <div className="bg-shield-bg-light rounded-xl p-4 border border-shield-border-l">
                    <p className="text-shield-text-lm text-sm leading-relaxed">{app.message}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Footer note */}
        <div className="mt-8 text-center text-xs text-shield-text-lm">
          <p>Questions? Contact us at <a href="mailto:hello@defjobs.eu" className="text-shield-navy-lt hover:underline">hello@defjobs.eu</a></p>
          <p className="mt-1">This portal link expires on {new Date(data.expires_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}