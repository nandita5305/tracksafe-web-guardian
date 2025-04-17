
import React, { useState, useEffect } from 'react';
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Hospital, MapPin, Shield } from 'lucide-react';
import Button from "@/components/Button";
import { toast } from 'sonner';
import { getCurrentLocation, findNearbyServices, recordLocationToSupabase, LocationData } from '@/utils/locationUtils';
import { useAuth } from '@/context/AuthContext';

const LiveMap: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<LocationData | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [nearbyHospitals, setNearbyHospitals] = useState<any[]>([]);
  const [nearbyPolice, setNearbyPolice] = useState<any[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    // Get initial location on component mount
    handleRefreshLocation();
  }, []);

  const handleRefreshLocation = async () => {
    setIsLoadingLocation(true);
    toast.info("Refreshing your location...");
    
    try {
      const location = await getCurrentLocation();
      setCurrentLocation(location);
      
      // Record location in Supabase if user is logged in
      if (user) {
        await recordLocationToSupabase(user.id, location);
      }
      
      // Get nearby services
      const hospitals = await findNearbyServices(location, 'hospital');
      const police = await findNearbyServices(location, 'police');
      
      setNearbyHospitals(hospitals);
      setNearbyPolice(police);
      
      toast.success("Location updated successfully");
    } catch (error) {
      console.error("Error getting location:", error);
      toast.error("Failed to get your location");
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const handleEmergencySOS = () => {
    toast.error("Emergency SOS Triggered!", {
      description: "Notifying emergency contacts and services...",
      duration: 5000
    });
    
    // In a real application, this would trigger emergency calls and notifications
  };

  const handleGetDirections = (name: string) => {
    if (!currentLocation) {
      toast.error("Current location not available");
      return;
    }
    
    // In a real app, this would open Google Maps with directions
    const url = `https://www.google.com/maps/dir/?api=1&origin=${currentLocation.latitude},${currentLocation.longitude}&destination=${name}&travelmode=driving`;
    window.open(url, '_blank');
    toast.info(`Opening directions to ${name}`);
  };

  const handleCall = (phone: string, name: string) => {
    // In a real app on mobile, this would initiate a phone call
    const url = `tel:${phone}`;
    window.location.href = url;
    toast.info(`Calling ${name} at ${phone}`);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold">Live Map</h1>
            <p className="text-gray-500 mt-1">
              Your real-time location and nearby emergency services
            </p>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg">Your Location</CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleRefreshLocation}
                    disabled={isLoadingLocation}
                  >
                    {isLoadingLocation ? "Refreshing..." : "Refresh Location"}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 h-[500px] rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-purple-600 mx-auto flex items-center justify-center mb-4">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      <p className="font-medium">Your current location</p>
                      {currentLocation ? (
                        <p className="text-gray-500 mb-4">
                          {currentLocation.latitude.toFixed(4)}°, {currentLocation.longitude.toFixed(4)}°
                        </p>
                      ) : (
                        <p className="text-gray-500 mb-4">Location not available</p>
                      )}
                      <p className="text-sm text-gray-500 max-w-md mx-auto">
                        In a real app, this would be an interactive map showing your current location,
                        nearby hospitals, police stations, and other emergency services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-sm border-l-4 border-purple-600">
                <CardHeader>
                  <CardTitle className="text-lg">Nearest Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  {nearbyHospitals.slice(0, 1).map(hospital => (
                    <div key={hospital.id} className="p-3 bg-blue-50 rounded-lg flex items-start gap-3">
                      <Hospital className="text-purple-600 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">{hospital.name}</p>
                        <p className="text-sm">{hospital.distance} miles away</p>
                        <button 
                          className="text-sm text-purple-600 mt-1"
                          onClick={() => handleGetDirections(hospital.name)}
                        >
                          Get Directions
                        </button>
                      </div>
                    </div>
                  ))}

                  {nearbyPolice.slice(0, 1).map(police => (
                    <div key={police.id} className="p-3 bg-indigo-50 rounded-lg flex items-start gap-3">
                      <Shield className="text-indigo-600 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">{police.name}</p>
                        <p className="text-sm">{police.distance} miles away</p>
                        <button 
                          className="text-sm text-indigo-600 mt-1"
                          onClick={() => handleGetDirections(police.name)}
                        >
                          Get Directions
                        </button>
                      </div>
                    </div>
                  ))}

                  {nearbyHospitals.length === 0 && nearbyPolice.length === 0 && (
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500 text-center">
                        No nearby services found. Please refresh your location.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="shadow-sm border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Emergency SOS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={handleEmergencySOS}
                  >
                    Trigger Emergency SOS
                  </Button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    This will alert all your emergency contacts and nearby services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LiveMap;
