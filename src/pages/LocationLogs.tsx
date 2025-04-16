
import React from 'react';
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';

interface LocationLog {
  id: string;
  timestamp: Date;
  latitude: number;
  longitude: number;
  address: string;
  activity?: string;
}

const LocationLogs: React.FC = () => {
  // Sample location data - in a real app this would come from a backend
  const logs: LocationLog[] = [
    {
      id: '1',
      timestamp: new Date(2025, 3, 16, 9, 30),
      latitude: 28.6139,
      longitude: 77.2090,
      address: 'Connaught Place, New Delhi',
      activity: 'Walking'
    },
    {
      id: '2',
      timestamp: new Date(2025, 3, 16, 10, 15),
      latitude: 28.6129,
      longitude: 77.2295,
      address: 'India Gate, New Delhi',
      activity: 'Stationary'
    },
    {
      id: '3',
      timestamp: new Date(2025, 3, 16, 11, 45),
      latitude: 28.5535,
      longitude: 77.2588,
      address: 'AIIMS, New Delhi',
      activity: 'Walking'
    },
    {
      id: '4',
      timestamp: new Date(2025, 3, 16, 13, 30),
      latitude: 28.5535,
      longitude: 77.2588,
      address: 'Safdarjung Hospital, New Delhi',
      activity: 'Stationary'
    },
    {
      id: '5',
      timestamp: new Date(2025, 3, 16, 14, 20),
      latitude: 28.5921,
      longitude: 77.2290,
      address: 'Green Park, New Delhi',
      activity: 'Vehicle'
    },
    {
      id: '6',
      timestamp: new Date(2025, 3, 16, 16, 0),
      latitude: 28.6304,
      longitude: 77.2177,
      address: 'Karol Bagh, New Delhi',
      activity: 'Walking'
    }
  ];

  const getActivityBadgeColor = (activity?: string) => {
    switch (activity) {
      case 'Walking':
        return 'bg-blue-100 text-blue-800';
      case 'Stationary':
        return 'bg-green-100 text-green-800';
      case 'Vehicle':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold">Location Logs</h1>
            <p className="text-gray-500 mt-1">
              Your movement history and activity tracking
            </p>
          </div>
        </header>

        <main className="p-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Today's Location History</CardTitle>
              <p className="text-sm text-gray-500">
                {format(new Date(), 'EEEE, MMMM d, yyyy')}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-1/2 before:bg-gray-200 before:h-full">
                {logs.map((log, index) => (
                  <div key={log.id} className="relative flex gap-5 items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-tracksafe-blue shadow shrink-0 z-10">
                      <Clock className="h-5 w-5 text-tracksafe-blue" />
                    </div>
                    
                    <Card className="flex-grow shadow-sm">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-medium">{log.address}</h3>
                          <time className="text-xs text-gray-500">
                            {format(log.timestamp, 'h:mm a')}
                          </time>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <MapPin className="h-4 w-4" />
                          {log.latitude.toFixed(4)}, {log.longitude.toFixed(4)}
                        </div>
                        
                        {log.activity && (
                          <span className={`text-xs px-2 py-1 rounded-full ${getActivityBadgeColor(log.activity)}`}>
                            {log.activity}
                          </span>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default LocationLogs;
