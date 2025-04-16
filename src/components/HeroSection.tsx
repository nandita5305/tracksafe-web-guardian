
import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100 to-teal-100"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-tracksafe-teal opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-tracksafe-blue opacity-20 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Stay Safe, Stay <span className="text-gradient">Informed</span>
            <br />
            Meet TrackSafe
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl">
            Real-time accident detection, heart rate monitoring, and instant emergency alerts — all in one smart device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
            <Button variant="secondary" size="lg">
              Buy Now
            </Button>
          </div>
        </div>
        
        <div className="flex-1 relative animate-float">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=900&q=80" 
              alt="Person wearing TrackSafe" 
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <div className="text-sm font-medium">Status: Protected & Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
