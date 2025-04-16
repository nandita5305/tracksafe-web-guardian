
import React from "react";
import { AlertCircle, Heart, Bell, BarChart3, Battery, Smartphone, MapPin } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="mb-4 text-tracksafe-teal">
        <div className="w-12 h-12 flex items-center justify-center bg-tracksafe-light rounded-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeatureHighlights: React.FC = () => {
  const features = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Accident Detection with GPS",
      description: "Instantly detects accidents and sends your precise location to emergency services.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Heart Rate Monitoring",
      description: "Continuously tracks your heart rate and alerts you of irregular patterns.",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Real-Time Emergency Alerts",
      description: "Sends notifications to your emergency contacts when help is needed.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Health Insights Dashboard",
      description: "Access detailed health metrics and track progress over time.",
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Long Battery Life",
      description: "7+ days of battery life with continuous monitoring and GPS tracking.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Integration",
      description: "Seamlessly connect to our intuitive mobile app for complete control.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            TrackSafe combines cutting-edge technology with intuitive design to keep you safe and connected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
