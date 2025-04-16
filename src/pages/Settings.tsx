
import React from 'react';
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Heart, Lock, MapPin, Shield, User, AlertTriangle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Button from "@/components/Button";
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Settings: React.FC = () => {
  const [healthInfo, setHealthInfo] = React.useState({
    bloodType: 'O+',
    allergies: 'None',
    medications: 'None',
    emergencyContact: '+91 9876543210',
  });
  
  const [privacy, setPrivacy] = React.useState({
    shareLocation: true,
    shareHealthData: false,
    trackActivity: true,
  });
  
  const [notifications, setNotifications] = React.useState({
    emergencyAlerts: true,
    locationUpdates: true,
    healthReports: true,
  });
  
  const handleSave = () => {
    toast.success("Settings saved successfully");
  };
  
  const handleHealthInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHealthInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleToggle = (category: string, setting: string) => {
    if (category === 'privacy') {
      setPrivacy(prev => ({
        ...prev,
        [setting]: !prev[setting as keyof typeof prev]
      }));
    } else if (category === 'notifications') {
      setNotifications(prev => ({
        ...prev,
        [setting]: !prev[setting as keyof typeof prev]
      }));
    }
  };
  
  const handleResetPassword = () => {
    toast.info("Password reset instructions sent to your email");
  };
  
  const handleDeleteAccount = () => {
    toast.error("This action cannot be undone. Please contact support to delete your account.");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-gray-500 mt-1">
              Manage your account and application preferences
            </p>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-tracksafe-blue" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value="user@example.com" 
                    disabled 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    defaultValue="John Doe" 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    defaultValue="+91 9876543210" 
                    className="mt-1"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave}>
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-tracksafe-blue" />
                  Health Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="bloodType">Blood Type</Label>
                  <Input 
                    id="bloodType" 
                    name="bloodType"
                    value={healthInfo.bloodType} 
                    onChange={handleHealthInfoChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="allergies">Allergies</Label>
                  <Input 
                    id="allergies" 
                    name="allergies"
                    value={healthInfo.allergies} 
                    onChange={handleHealthInfoChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="medications">Medications</Label>
                  <Input 
                    id="medications" 
                    name="medications"
                    value={healthInfo.medications} 
                    onChange={handleHealthInfoChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="emergencyContact">Primary Emergency Contact</Label>
                  <Input 
                    id="emergencyContact" 
                    name="emergencyContact"
                    value={healthInfo.emergencyContact} 
                    onChange={handleHealthInfoChange}
                    className="mt-1"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave}>
                  Update Health Information
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-tracksafe-blue" />
                  Privacy Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Share Location</Label>
                    <p className="text-sm text-gray-500">Allow emergency contacts to see your location</p>
                  </div>
                  <Switch 
                    checked={privacy.shareLocation} 
                    onCheckedChange={() => handleToggle('privacy', 'shareLocation')} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Share Health Data</Label>
                    <p className="text-sm text-gray-500">Share health information with emergency services</p>
                  </div>
                  <Switch 
                    checked={privacy.shareHealthData} 
                    onCheckedChange={() => handleToggle('privacy', 'shareHealthData')} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Track Activity</Label>
                    <p className="text-sm text-gray-500">Monitor movement patterns for safety alerts</p>
                  </div>
                  <Switch 
                    checked={privacy.trackActivity} 
                    onCheckedChange={() => handleToggle('privacy', 'trackActivity')} 
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-tracksafe-blue" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Emergency Alerts</Label>
                  <Switch 
                    checked={notifications.emergencyAlerts} 
                    onCheckedChange={() => handleToggle('notifications', 'emergencyAlerts')} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label>Location Updates</Label>
                  <Switch 
                    checked={notifications.locationUpdates} 
                    onCheckedChange={() => handleToggle('notifications', 'locationUpdates')} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label>Health Reports</Label>
                  <Switch 
                    checked={notifications.healthReports} 
                    onCheckedChange={() => handleToggle('notifications', 'healthReports')} 
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave}>
                  Save Notification Preferences
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-tracksafe-blue" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  onClick={handleResetPassword}
                >
                  Reset Password
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Danger Zone
                </CardTitle>
                <CardDescription className="text-red-500">
                  These actions cannot be undone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline"
                  className="w-full border-red-300 text-red-600 hover:bg-red-50"
                  onClick={handleDeleteAccount}
                >
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
