
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Phone, MapPin, Navigation, Settings, User, Hospital } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
        isActive
          ? 'bg-purple-600 text-white'
          : 'hover:bg-purple-50 text-gray-700'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  
  const menuItems = [
    {
      icon: <Home size={20} />,
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      icon: <Phone size={20} />,
      label: 'Emergency Contacts',
      path: '/emergency-contacts',
    },
    {
      icon: <Hospital size={20} />,
      label: 'Nearby Hospitals',
      path: '/nearby-hospitals',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location Logs',
      path: '/location-logs',
    },
    {
      icon: <Navigation size={20} />,
      label: 'Live Map',
      path: '/live-map',
    },
    {
      icon: <Settings size={20} />,
      label: 'Settings',
      path: '/settings',
    },
  ];

  const handleSignOut = () => {
    logout();
    navigate('/signin');
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            Track<span className="text-purple-600">Safe</span>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto py-4 px-2">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              isActive={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <button 
          className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
          onClick={handleSignOut}
        >
          <User size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
