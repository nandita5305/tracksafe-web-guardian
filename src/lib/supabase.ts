
import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and key from environment variables
// When connecting to Supabase through Lovable integration, these values are automatically provided
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if values are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL and/or anon key are missing. Make sure you have connected to Supabase through Lovable integration.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
