import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient;

export default (): SupabaseClient => {
  const options = {
    schema: 'public',
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  };
  if (!supabase) {
    supabase = createClient(String(process.env.projectURL), String(process.env.publicAnonKey), options);
  }
  return supabase;
};