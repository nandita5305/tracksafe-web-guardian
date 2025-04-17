
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import HealthQuestions from "./pages/HealthQuestions";
import EmergencyContacts from "./pages/EmergencyContacts";
import NearbyHospitals from "./pages/NearbyHospitals";
import LocationLogs from "./pages/LocationLogs";
import LiveMap from "./pages/LiveMap";
import Settings from "./pages/Settings";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Create a new QueryClient instance outside of the component
const queryClient = new QueryClient();

const App = () => {
  // Ask for location permission when the app loads
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(
            () => {}, // Success callback - do nothing
            () => {}, // Error callback - do nothing
            { enableHighAccuracy: true }
          );
        }
      });
    }
  }, []);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/health-questions" element={<HealthQuestions />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  } 
                />
                <Route 
                  path="/emergency-contacts" 
                  element={
                    <PrivateRoute>
                      <EmergencyContacts />
                    </PrivateRoute>
                  } 
                />
                <Route 
                  path="/nearby-hospitals" 
                  element={
                    <PrivateRoute>
                      <NearbyHospitals />
                    </PrivateRoute>
                  } 
                />
                <Route 
                  path="/location-logs" 
                  element={
                    <PrivateRoute>
                      <LocationLogs />
                    </PrivateRoute>
                  } 
                />
                <Route 
                  path="/live-map" 
                  element={
                    <PrivateRoute>
                      <LiveMap />
                    </PrivateRoute>
                  } 
                />
                <Route 
                  path="/settings" 
                  element={
                    <PrivateRoute>
                      <Settings />
                    </PrivateRoute>
                  } 
                />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
