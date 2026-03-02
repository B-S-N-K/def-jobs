import { createClient, type SupabaseClient } from '@supabase/supabase-js';

type EnvKey = 'VITE_SUPABASE_URL' | 'VITE_SUPABASE_ANON_KEY' | 'SUPABASE_SERVICE_KEY';

function getEnv(key: EnvKey): string | undefined {
  if (typeof window === 'undefined') {
    return process.env[key];
  }
  // On the client, read from import.meta.env
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clientEnv = (import.meta as any).env as Record<string, string | undefined>;
  return clientEnv[key];
}

let supabaseClient: SupabaseClient | null = null;
let supabaseAdminClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!supabaseClient) {
    const url = getEnv('VITE_SUPABASE_URL');
    const anonKey = getEnv('VITE_SUPABASE_ANON_KEY');

    if (!url || !anonKey) {
      throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables.');
    }

    supabaseClient = createClient(url, anonKey);
  }

  return supabaseClient;
}

export function getSupabaseAdminClient(): SupabaseClient {
  if (!supabaseAdminClient) {
    const url = getEnv('VITE_SUPABASE_URL');
    const serviceKey = getEnv('SUPABASE_SERVICE_KEY');

    if (!url || !serviceKey) {
      throw new Error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_KEY environment variables.');
    }

    supabaseAdminClient = createClient(url, serviceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }

  return supabaseAdminClient;
}

