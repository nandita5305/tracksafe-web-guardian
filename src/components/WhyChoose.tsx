
import React from "react";
import { Bike, UserRound, Plane, Mountain, Heart } from "lucide-react";

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow transition-all duration-300 flex flex-col h-full">
      <div className="rounded-full bg-tracksafe-light p-3 w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
  );
};

const WhyChoose: React.FC = () => {
  const useCases = [
    {
      icon: <Bike className="w-5 h-5 text-tracksafe-blue" />,
      title: "For Bikers",
      description: "Get help immediately in case of an accident. TrackSafe detects falls and impacts, sending your location to emergency services."
    },
    {
      icon: <UserRound className="w-5 h-5 text-tracksafe-blue" />,
      title: "For the Elderly",
      description: "Provide peace of mind to family members. Automatic fall detection and health monitoring ensure help is always available."
    },
    {
      icon: <Plane className="w-5 h-5 text-tracksafe-blue" />,
      title: "For Solo Travelers",
      description: "Travel confidently knowing that emergency contacts are just a button-press away if you encounter trouble."
    },
    {
      icon: <Mountain className="w-5 h-5 text-tracksafe-blue" />,
      title: "For Hikers",
      description: "Stay connected even in remote areas. TrackSafe works in low-signal environments to ensure your safety."
    },
    {
      icon: <Heart className="w-5 h-5 text-tracksafe-blue" />,
      title: "For Heart Conditions",
      description: "Continuous heart rate monitoring alerts you and your doctor if irregularities are detected."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">TrackSafe?</span>
            </h2>
            <p className="text-xl mb-6 text-gray-700">
              Give your loved ones peace of mind — TrackSafe is always watching over you.
            </p>
            <p className="text-gray-600 mb-8">
              Our advanced health and safety monitoring device provides continuous protection and peace of mind for you and your loved ones. TrackSafe combines cutting-edge technology with ease of use to ensure you're always connected when it matters most.
            </p>
            
            <div className="bg-gradient p-6 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
              
              <h3 className="text-xl font-semibold mb-2 relative z-10">Emergency Response Time</h3>
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <div className="text-3xl font-bold">3x</div>
                  <div className="text-sm text-white/80">Faster than the average</div>
                </div>
                <div className="h-16 w-[1px] bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-white/80">Accuracy rate</div>
                </div>
                <div className="h-16 w-[1px] bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Constant monitoring</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
