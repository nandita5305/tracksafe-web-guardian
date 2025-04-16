
import React from "react";
import { Check, Watch, HeartPulse, BellRing, PhoneCall } from "lucide-react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 bg-gradient w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Watch className="w-5 h-5 text-tracksafe-blue" />,
      title: "Wear the device",
      description: "Simply wear TrackSafe on your wrist like a regular smartwatch with 24/7 comfort."
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-tracksafe-blue" />,
      title: "Monitor your heart rate in real-time",
      description: "TrackSafe continuously monitors vital signs and activity levels without interruption."
    },
    {
      icon: <BellRing className="w-5 h-5 text-tracksafe-blue" />,
      title: "Automatic alert on abnormal vitals",
      description: "The system detects irregularities or impacts and triggers an alert sequence."
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-tracksafe-blue" />,
      title: "Emergency services and contacts notified",
      description: "Your location and vital status are sent to emergency contacts and services if needed."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-gradient">TrackSafe</span> Works
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our intelligent system works around the clock to keep you protected and your loved ones informed.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <StepCard 
                  key={index}
                  number={index + 1}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden max-w-md mx-auto">
              <div className="h-12 bg-gradient flex items-center justify-between px-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white text-xs">TrackSafe Monitor</div>
              </div>
              <div className="p-6">
                <div className="mb-6 text-center">
                  <div className="text-lg font-medium">Emergency Alert System</div>
                  <div className="text-sm text-gray-600">Status: Active and Monitoring</div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100 flex items-center gap-2">
                    <Check className="text-green-500 w-5 h-5" />
                    <div className="text-sm">Heart rate normal: 72 BPM</div>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100 flex items-center gap-2">
                    <Check className="text-green-500 w-5 h-5" />
                    <div className="text-sm">GPS active and tracking</div>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100 flex items-center gap-2">
                    <Check className="text-green-500 w-5 h-5" />
                    <div className="text-sm">Fall detection enabled</div>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100 flex items-center gap-2">
                    <Check className="text-green-500 w-5 h-5" />
                    <div className="text-sm">Battery level: 85%</div>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-tracksafe-red text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                  EMERGENCY SOS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
