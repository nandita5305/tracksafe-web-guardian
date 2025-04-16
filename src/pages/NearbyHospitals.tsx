
import React from 'react';
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/Button";
import { Hospital, MapPin, Phone, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface HospitalInfo {
  id: string;
  name: string;
  address: string;
  distance: string;
  phone: string;
  specialty?: string;
  emergency: boolean;
}

const NearbyHospitals: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const hospitalData: HospitalInfo[] = [
    {
      id: '1',
      name: 'All India Institute of Medical Sciences',
      address: 'Ansari Nagar East, New Delhi',
      distance: '1.2 miles away',
      phone: '+91-11-26588500',
      specialty: 'Multi-specialty',
      emergency: true,
    },
    {
      id: '2',
      name: 'Safdarjung Hospital',
      address: 'Ansari Nagar, New Delhi',
      distance: '2.5 miles away',
      phone: '+91-11-26707444',
      specialty: 'Multi-specialty',
      emergency: true,
    },
    {
      id: '3',
      name: 'Max Super Speciality Hospital',
      address: 'Saket, New Delhi',
      distance: '3.7 miles away',
      phone: '+91-11-26515050',
      specialty: 'Cardiac Care',
      emergency: true,
    },
    {
      id: '4',
      name: 'Fortis Hospital',
      address: 'Vasant Kunj, New Delhi',
      distance: '4.1 miles away',
      phone: '+91-11-42776222',
      specialty: 'Multi-specialty',
      emergency: true,
    }
  ];
  
  const filteredHospitals = hospitalData.filter(hospital => 
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    hospital.specialty?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleCall = (hospital: HospitalInfo) => {
    toast.info(`Calling ${hospital.name} at ${hospital.phone}`);
  };
  
  const handleDirections = (hospital: HospitalInfo) => {
    toast.info(`Opening directions to ${hospital.name}`);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold">Nearby Hospitals</h1>
            <p className="text-gray-500 mt-1">
              Find and contact nearby medical facilities
            </p>
          </div>
        </header>

        <main className="p-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                className="pl-10"
                placeholder="Search by hospital name or specialty"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredHospitals.map(hospital => (
              <Card key={hospital.id} className="shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Hospital size={18} className="text-tracksafe-blue" />
                      {hospital.name}
                    </CardTitle>
                    {hospital.emergency && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        24/7 Emergency
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{hospital.specialty}</p>
                </CardHeader>
                <CardContent className="space-y-2 pb-4">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin size={16} className="text-gray-400 mt-0.5" />
                    <div>
                      <p>{hospital.address}</p>
                      <p className="text-tracksafe-blue">{hospital.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={16} className="text-gray-400" />
                    {hospital.phone}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2 pt-0">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleCall(hospital)}
                  >
                    Call
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleDirections(hospital)}
                  >
                    Directions
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredHospitals.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">No hospitals found matching your search.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default NearbyHospitals;
