import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || '';

// Prevent crash if environment variables are missing
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase env variables are missing. Some features will not work.');
}

export const supabase = createClient(supabaseUrl || 'https://placeholder-url.supabase.co', supabaseAnonKey || 'placeholder-key');
