
import { toast } from 'sonner';

export interface LocationData {
  latitude: number;
  longitude: number;
  accuracy?: number;
  timestamp: number;
}

// Function to get current location
export const getCurrentLocation = (): Promise<LocationData> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by your browser');
      reject(new Error('Geolocation not supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp
        });
      },
      (error) => {
        let errorMessage = 'Unknown error occurred';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'User denied the request for Geolocation';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable';
            break;
          case error.TIMEOUT:
            errorMessage = 'The request to get user location timed out';
            break;
        }
        toast.error(errorMessage);
        reject(new Error(errorMessage));
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  });
};

// Function to calculate distance between two coordinates in kilometers
export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
};

const deg2rad = (deg: number): number => {
  return deg * (Math.PI / 180);
};

// Function to mock nearby hospitals and police stations based on current location
export const findNearbyServices = async (
  location: LocationData,
  type: 'hospital' | 'police'
): Promise<any[]> => {
  // In a real app, you would make an API call to a service like Google Places API
  // For now, we'll return mock data
  
  // Mock data for hospitals
  const mockHospitals = [
    {
      id: 'h1',
      name: 'City General Hospital',
      distance: 0.7,
      latitude: location.latitude + 0.002,
      longitude: location.longitude + 0.003,
      phone: '+1 555-123-4567',
      address: '123 Health Avenue'
    },
    {
      id: 'h2',
      name: 'Memorial Medical Center',
      distance: 1.2,
      latitude: location.latitude - 0.004,
      longitude: location.longitude - 0.001,
      phone: '+1 555-987-6543',
      address: '456 Care Street'
    },
    {
      id: 'h3',
      name: 'University Hospital',
      distance: 2.5,
      latitude: location.latitude + 0.007,
      longitude: location.longitude - 0.008,
      phone: '+1 555-246-8135',
      address: '789 Treatment Road'
    }
  ];

  // Mock data for police stations
  const mockPoliceStations = [
    {
      id: 'p1',
      name: 'Central Police Station',
      distance: 1.0,
      latitude: location.latitude - 0.003,
      longitude: location.longitude + 0.005,
      phone: '+1 555-911-0000',
      address: '100 Protection Ave'
    },
    {
      id: 'p2',
      name: 'Westside Police Department',
      distance: 2.1,
      latitude: location.latitude + 0.006,
      longitude: location.longitude - 0.004,
      phone: '+1 555-911-1111',
      address: '200 Safety Street'
    }
  ];

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return type === 'hospital' ? mockHospitals : mockPoliceStations;
};

// Record location to Supabase
export const recordLocationToSupabase = async (
  userId: string,
  location: LocationData
) => {
  const { supabase } = await import('@/lib/supabase');
  
  try {
    const { error } = await supabase
      .from('location_logs')
      .insert({
        user_id: userId,
        latitude: location.latitude,
        longitude: location.longitude,
        accuracy: location.accuracy,
        timestamp: new Date().toISOString()
      });
      
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error recording location:', error);
    return false;
  }
};
