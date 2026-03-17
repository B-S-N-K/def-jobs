import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) return;
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError('Invalid email or password. Please try again.');
      setLoading(false);
      return;
    }

    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-shield-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="h-14 w-14 bg-shield-navy-lt rounded-2xl flex items-center justify-center">
              <Shield className="h-7 w-7 text-white" />
            </div>
          </div>
          <h1 className="font-heading font-bold text-2xl text-shield-off-white uppercase tracking-widest">
            DefJobs
          </h1>
          <p className="text-shield-silver text-sm mt-1">Admin Access</p>
        </div>

        {/* Login Card */}
        <div className="bg-shield-gray-dark border border-shield-gray-line rounded-2xl p-8">
          <h2 className="font-heading font-bold text-lg text-shield-off-white uppercase tracking-wide mb-6">
            Sign In
          </h2>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-shield-silver uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-shield-black border border-shield-gray-line rounded-xl px-4 py-3 text-sm text-shield-off-white outline-none focus:border-shield-navy-lt transition-colors"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@shieldtalent.com"
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-shield-silver uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full bg-shield-black border border-shield-gray-line rounded-xl px-4 py-3 text-sm text-shield-off-white outline-none focus:border-shield-navy-lt transition-colors pr-12"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-shield-silver hover:text-shield-off-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-shield-navy-lt hover:bg-shield-navy-mid text-white font-bold py-3 rounded-xl transition-all hover:-translate-y-[1px] mt-2"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}