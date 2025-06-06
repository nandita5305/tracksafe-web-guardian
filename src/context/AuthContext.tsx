
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";
import { toast } from 'sonner';

interface UserProfile {
  email: string;
  name?: string;
  phone?: string;
  emergency_contact?: string;
  health_info?: any;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, userData: any) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  isSupabaseConfigured: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Don't attempt to check session if Supabase isn't configured
    if (!isSupabaseConfigured) {
      setIsLoading(false);
      return;
    }

    // Check if user is logged in from Supabase
    const checkLoggedIn = async () => {
      setIsLoading(true);
      
      try {
        // Get session
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
          setUser(session.user);
          // Get user profile
          await fetchProfile(session.user.id);
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          setUser(session.user);
          await fetchProfile(session.user.id);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setProfile(null);
        }
      }
    );

    checkLoggedIn();
    
    // Clean up subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId: string) => {
    if (!isSupabaseConfigured) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      
      if (data) {
        setProfile(data);
      } else {
        // Create a profile if it doesn't exist
        const newProfile = {
          id: userId,
          email: user?.email || '',
        };
        
        const { error: insertError } = await supabase
          .from('profiles')
          .insert(newProfile);
          
        if (insertError) throw insertError;
        
        setProfile(newProfile as UserProfile);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const login = async (email: string, password: string) => {
    if (!isSupabaseConfigured) {
      toast.error("Supabase is not configured. Please connect your project to Supabase.");
      throw new Error("Supabase is not configured");
    }
    
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      if (data.user) {
        setUser(data.user);
        await fetchProfile(data.user.id);
      }
    } catch (error: any) {
      throw new Error(error.message || 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, userData: any) => {
    if (!isSupabaseConfigured) {
      toast.error("Supabase is not configured. Please connect your project to Supabase.");
      throw new Error("Supabase is not configured");
    }
    
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      
      if (data.user) {
        // Create profile
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: data.user.id,
            email: data.user.email,
            name: userData.name,
            phone: userData.phone,
            emergency_contact: userData.emergencyContact
          });
          
        if (profileError) throw profileError;
        
        setUser(data.user);
        
        // Also set the profile data locally
        setProfile({
          email: data.user.email || '',
          name: userData.name,
          phone: userData.phone,
          emergency_contact: userData.emergencyContact
        });
      }
    } catch (error: any) {
      throw new Error(error.message || 'Failed to sign up');
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!isSupabaseConfigured) {
      toast.error("Supabase is not configured. Please connect your project to Supabase.");
      throw new Error("Supabase is not configured");
    }
    
    if (!user) throw new Error('No user logged in');
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update(data)
        .eq('id', user.id);
        
      if (error) throw error;
      
      // Update local profile data
      setProfile(prev => prev ? { ...prev, ...data } : null);
      toast.success('Profile updated successfully');
    } catch (error: any) {
      toast.error('Failed to update profile');
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    if (!isSupabaseConfigured) return;
    
    try {
      await supabase.auth.signOut();
      setUser(null);
      setProfile(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      profile, 
      login, 
      signup, 
      logout, 
      isLoading,
      updateProfile,
      isSupabaseConfigured
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
