
import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell, AlertTriangle, MapPin, Clock, ArrowRight, Phone, Hospital } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/Button";
import { toast } from 'sonner';

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  color 
}: { 
  title: string; 
  value: string | number; 
  description: string; 
  icon: React.ReactNode; 
  color: string;
}) => {
  return (
    <Card className="border-t-4 shadow-md" style={{ borderTopColor: color }}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </CardContent>
    </Card>
  );
};

const EmergencyCard = ({
  name,
  distance,
  phone,
}: {
  name: string;
  distance: string;
  phone: string;
}) => {
  const handleCall = () => {
    // In a real app, this would use the tel: protocol to make a call
    toast.info(`Calling ${name} at ${phone}`);
  };

  const handleDirections = () => {
    // In a real app, this would open Google Maps
    toast.info(`Opening directions to ${name}`);
  };

  return (
    <Card className="border shadow-sm">
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{distance} away</p>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Phone className="h-4 w-4" />
          {phone}
        </div>
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            size="sm"
            className="w-[48%]"
            onClick={handleCall}
          >
            Call
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="w-[48%]"
            onClick={handleDirections}
          >
            Directions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // In a real app, we'd fetch this data from an API
  const hospitals = [
    {
      id: 1,
      name: "All India Institute of Medical Sciences",
      distance: "1.2 miles",
      phone: "+91-11-26588500",
    },
    {
      id: 2,
      name: "Safdarjung Hospital",
      distance: "2.5 miles",
      phone: "+91-11-26707444",
    },
  ];

  const handleEmergency = () => {
    toast.error("Emergency Alert Triggered!", {
      description: "Notifying your emergency contacts and nearby services.",
      duration: 5000,
    });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold">TrackSafe Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-full hover:bg-gray-100">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
                onClick={handleEmergency}
              >
                <AlertTriangle size={16} />
                SOS
              </button>
            </div>
          </div>
          <div className="px-6 pb-3">
            <p className="text-gray-500">
              Monitor real-time safety incidents and nearby hospitals in Delhi region.
            </p>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Active Incidents"
              value={5}
              description="2 high severity incidents in your area"
              icon={<AlertTriangle className="h-5 w-5 text-red-500" />}
              color="#F43F5E"
            />
            <StatCard
              title="Safe Travel"
              value="14.2 mi"
              description="Distance traveled safely this week"
              icon={<MapPin className="h-5 w-5 text-green-500" />}
              color="#10B981"
            />
            <StatCard
              title="Alerts Received"
              value={3}
              description="Road hazard alerts in the last 24h"
              icon={<Bell className="h-5 w-5 text-amber-500" />}
              color="#F59E0B"
            />
            <StatCard
              title="Last Update"
              value="2m ago"
              description="System auto-updates every 2 minutes"
              icon={<Clock className="h-5 w-5 text-purple-500" />}
              color="#8B5CF6"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-4 border-b flex items-center justify-between">
                <h2 className="font-semibold flex items-center gap-2">
                  <MapPin size={18} className="text-tracksafe-blue" />
                  Location in Delhi
                </h2>
                <Button variant="outline" size="sm" onClick={() => navigate('/live-map')}>
                  Open Map
                  <ArrowRight size={14} />
                </Button>
              </div>
              <div className="h-[300px] bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-tracksafe-blue mx-auto flex items-center justify-center">
                    <MapPin size={32} className="text-white" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Map would display here with your location at <br />
                    28.6139, 77.2090
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="font-semibold flex items-center gap-2">
                  <Hospital size={18} className="text-tracksafe-blue" />
                  Nearby Hospitals in Delhi
                </h2>
              </div>
              <div className="p-4 max-h-[300px] overflow-auto space-y-4">
                {hospitals.map((hospital) => (
                  <EmergencyCard
                    key={hospital.id}
                    name={hospital.name}
                    distance={hospital.distance}
                    phone={hospital.phone}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
