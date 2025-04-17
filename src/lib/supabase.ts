
import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and key from environment variables
// When connecting to Supabase through Lovable integration, these values are automatically provided
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a dummy client if credentials are missing - this prevents errors but won't actually work
// This will be replaced with actual client when Supabase is properly connected
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-project.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

// Export a flag to check if Supabase is properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// Log status to help with debugging
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL and/or anon key are missing. Make sure you have connected to Supabase through Lovable integration.');
} else {
  console.log('Supabase configuration detected');
}
