
import React from 'react';
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Hospital, MapPin, Shield } from 'lucide-react';
import Button from "@/components/Button";
import { toast } from 'sonner';

const LiveMap: React.FC = () => {
  const handleRefreshLocation = () => {
    toast.info("Refreshing your location...");
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
                  >
                    Refresh Location
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 h-[500px] rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-tracksafe-blue mx-auto flex items-center justify-center mb-4">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      <p className="font-medium">Your current location</p>
                      <p className="text-gray-500 mb-4">28.6139° N, 77.2090° E</p>
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
              <Card className="shadow-sm border-l-4 border-tracksafe-blue">
                <CardHeader>
                  <CardTitle className="text-lg">Nearest Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <div className="p-3 bg-blue-50 rounded-lg flex items-start gap-3">
                    <Hospital className="text-tracksafe-blue h-5 w-5 mt-0.5" />
                    <div>
                      <p className="font-medium">AIIMS Hospital</p>
                      <p className="text-sm">1.2 miles away</p>
                      <button 
                        className="text-sm text-tracksafe-blue mt-1"
                        onClick={() => toast.info("Opening directions to AIIMS Hospital")}
                      >
                        Get Directions
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-50 rounded-lg flex items-start gap-3">
                    <Shield className="text-indigo-600 h-5 w-5 mt-0.5" />
                    <div>
                      <p className="font-medium">Delhi Police Station</p>
                      <p className="text-sm">1.8 miles away</p>
                      <button 
                        className="text-sm text-indigo-600 mt-1"
                        onClick={() => toast.info("Opening directions to Delhi Police Station")}
                      >
                        Get Directions
                      </button>
                    </div>
                  </div>
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
                    onClick={() => {
                      toast.error("Emergency SOS Triggered!", {
                        description: "Notifying emergency contacts and services...",
                        duration: 5000
                      });
                    }}
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
