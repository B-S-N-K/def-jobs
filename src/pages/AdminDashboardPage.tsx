import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, LogOut, Plus, Trash2, Eye, Mail, Bell, MessageSquare, RotateCcw, AlertTriangle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  tags: string[];
  featured: number;
  posted_at: string;
  deleted_at: string | null;
}

export function AdminDashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'jobs' | 'trash' | 'applications' | 'alerts' | 'contacts'>('jobs');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [trashedJobs, setTrashedJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate('/admin');
    });
  }, []);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = () => {
    fetchJobs();
    fetchTrash();
    fetchApplications();
    fetchAlerts();
    fetchContacts();
  };

  const fetchJobs = async () => {
    const res = await fetch('/api/jobs');
    const data = await res.json();
    setJobs(data);
    setLoading(false);
  };

  const fetchTrash = async () => {
    const res = await fetch('/api/admin/trash');
    const data = await res.json();
    setTrashedJobs(data);
  };

  const fetchApplications = async () => {
    const res = await fetch('/api/admin/applications');
    const data = await res.json();
    setApplications(data);
  };

  const fetchAlerts = async () => {
    const res = await fetch('/api/admin/alerts');
    const data = await res.json();
    setAlerts(data);
  };

  const fetchContacts = async () => {
    const res = await fetch('/api/admin/contacts');
    const data = await res.json();
    setContacts(data);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const handleSoftDelete = async (id: number) => {
    await fetch(`/api/jobs/${id}`, { method: 'DELETE' });
    fetchAll();
  };

  const handleRestore = async (id: number) => {
    await fetch(`/api/jobs/${id}/restore`, { method: 'POST' });
    fetchAll();
  };

  const handlePermanentDelete = async (id: number) => {
    if (!confirm('Permanently delete this job? This cannot be undone.')) return;
    await fetch(`/api/jobs/${id}/permanent`, { method: 'DELETE' });
    fetchAll();
  };

  const handleToggleFeatured = async (job: Job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ featured: job.featured ? 0 : 1 }),
    });
    fetchJobs();
  };

  return (
    <div className="min-h-screen bg-shield-bg-light">
      {/* Header */}
      <div className="bg-shield-black border-b border-shield-gray-line px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-shield-navy-lt rounded-md flex items-center justify-center">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <span className="font-heading font-bold text-shield-off-white tracking-widest uppercase">DefJobs Admin</span>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-shield-silver hover:text-white text-sm transition-colors">
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Jobs', value: jobs.length, icon: Eye, tab: 'jobs' },
            { label: 'Trash', value: trashedJobs.length, icon: Trash2, tab: 'trash' },
            { label: 'Applications', value: applications.length, icon: Mail, tab: 'applications' },
            { label: 'Alerts', value: alerts.length, icon: Bell, tab: 'alerts' },
            { label: 'Messages', value: contacts.length, icon: MessageSquare, tab: 'contacts' },
          ].map(stat => (
            <button
              key={stat.label}
              onClick={() => setActiveTab(stat.tab as any)}
              className={`bg-white border-[1.5px] rounded-2xl p-5 text-left hover:border-shield-navy-lt transition-all ${activeTab === stat.tab ? 'border-shield-navy-lt' : 'border-shield-border-l'}`}
            >
              <stat.icon className={`h-5 w-5 mb-2 ${stat.tab === 'trash' ? 'text-red-400' : 'text-shield-navy-lt'}`} />
              <div className="font-heading font-bold text-2xl text-shield-text-l">{stat.value}</div>
              <div className="text-shield-text-lm text-sm">{stat.label}</div>
            </button>
          ))}
        </div>

        {/* Jobs Tab */}
        {activeTab === 'jobs' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase">Job Listings</h2>
              <button
                onClick={() => navigate('/post-job')}
                className="flex items-center gap-2 bg-shield-navy-lt hover:bg-shield-navy-mid text-white text-sm font-bold px-4 py-2 rounded-xl transition-all"
              >
                <Plus className="h-4 w-4" />
                Add Job
              </button>
            </div>
            <div className="space-y-3">
              {jobs.map(job => (
                <div key={job.id} className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-5 flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-shield-text-l truncate">{job.title}</h3>
                      {job.featured ? <span className="text-xs bg-shield-navy-lt/10 text-shield-navy-lt px-2 py-0.5 rounded-full font-semibold">Featured</span> : null}
                    </div>
                    <p className="text-shield-text-lm text-sm">{job.company} · {job.location} · {job.type}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleToggleFeatured(job)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${job.featured ? 'bg-shield-navy-lt/10 text-shield-navy-lt border-shield-navy-lt/30 hover:bg-red-50 hover:text-red-600 hover:border-red-200' : 'bg-white text-shield-text-lm border-shield-border-l hover:bg-shield-navy-lt/10 hover:text-shield-navy-lt'}`}
                    >
                      {job.featured ? 'Unfeature' : 'Feature'}
                    </button>
                    <button
                      onClick={() => navigate(`/jobs/${job.id}`)}
                      className="p-2 text-shield-text-lm hover:text-shield-navy-lt transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleSoftDelete(job.id)}
                      className="p-2 text-shield-text-lm hover:text-red-500 transition-colors"
                      title="Move to Trash"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trash Tab */}
        {activeTab === 'trash' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase">Trash</h2>
              <span className="text-xs text-shield-text-lm bg-red-50 border border-red-200 text-red-500 px-2 py-1 rounded-lg">Jobs moved here are hidden from the public site</span>
            </div>
            {trashedJobs.length === 0 ? (
              <div className="text-center py-12 text-shield-text-lm">Trash is empty.</div>
            ) : (
              <div className="space-y-3">
                {trashedJobs.map(job => (
                  <div key={job.id} className="bg-white border-[1.5px] border-red-200 rounded-2xl p-5 flex items-center justify-between gap-4 opacity-75">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-shield-text-l truncate">{job.title}</h3>
                      <p className="text-shield-text-lm text-sm">{job.company} · {job.location}</p>
                      <p className="text-red-400 text-xs mt-1">Deleted {new Date(job.deleted_at!).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleRestore(job.id)}
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-green-200 text-green-600 hover:bg-green-50 transition-colors"
                      >
                        <RotateCcw className="h-3 w-3" />
                        Restore
                      </button>
                      <button
                        onClick={() => handlePermanentDelete(job.id)}
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <AlertTriangle className="h-3 w-3" />
                        Delete Forever
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase mb-4">Applications</h2>
            <div className="space-y-3">
              {applications.length === 0 ? (
                <div className="text-center py-12 text-shield-text-lm">No applications yet.</div>
              ) : applications.map((app, i) => (
                <div key={i} className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-shield-text-l">{app.name}</h3>
                    <span className="text-xs text-shield-text-lm">{new Date(app.created_at).toLocaleDateString()}</span>
                  </div>
                  {app.jobs && (
                    <p className="text-xs font-semibold text-shield-navy-lt mb-2 bg-shield-navy-lt/10 px-2 py-1 rounded-lg inline-block">
                      {app.jobs.title} · {app.jobs.company}
                    </p>
                  )}
                  <p className="text-shield-text-lm text-sm mb-1">{app.email}</p>
                  {app.cv_url && (
                    <button
                      onClick={async () => {
                        const res = await fetch(`/api/admin/cv-url/${app.cv_url}`);
                        const { url } = await res.json();
                        window.open(url, '_blank');
                      }}
                      className="text-shield-navy-lt text-sm hover:underline"
                    >
                      Download CV →
                    </button>
                  )}
                  {app.message && <p className="text-shield-text-lm text-sm mt-2 border-t border-shield-border-l pt-2">{app.message}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase mb-4">Job Alerts</h2>
            <div className="bg-white border-[1.5px] border-shield-border-l rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-shield-bg-light border-b border-shield-border-l text-xs font-bold text-shield-text-lm uppercase tracking-wider">
                <span>Email</span>
                <span>Keyword</span>
                <span>Location</span>
                <span>Date</span>
              </div>
              {alerts.length === 0 ? (
                <div className="text-center py-12 text-shield-text-lm">No alerts yet.</div>
              ) : alerts.map((alert, i) => (
                <div key={i} className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-shield-border-l last:border-0 text-sm">
                  <span className="text-shield-text-l font-medium">{alert.email}</span>
                  <span className="text-shield-text-lm">{alert.keyword || '—'}</span>
                  <span className="text-shield-text-lm">{alert.location || '—'}</span>
                  <span className="text-shield-text-lm">{new Date(alert.created_at).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div>
            <h2 className="font-heading font-bold text-xl text-shield-text-l uppercase mb-4">Contact Messages</h2>
            <div className="space-y-3">
              {contacts.length === 0 ? (
                <div className="text-center py-12 text-shield-text-lm">No messages yet.</div>
              ) : contacts.map((contact, i) => (
                <div key={i} className="bg-white border-[1.5px] border-shield-border-l rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-shield-text-l">{contact.name}</h3>
                    <span className="text-xs text-shield-text-lm">{new Date(contact.created_at).toLocaleDateString()}</span>
                  </div>
                  <p className="text-shield-text-lm text-sm mb-2">{contact.email}</p>
                  <p className="text-shield-text-lm text-sm border-t border-shield-border-l pt-2">{contact.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}