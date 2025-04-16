
import React from "react";
import Button from "./Button";
import { Check } from "lucide-react";

interface PlanCardProps {
  name: string;
  price: string;
  frequency: string;
  features: string[];
  isPrimary?: boolean;
  cta: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ name, price, frequency, features, isPrimary, cta }) => {
  return (
    <div 
      className={`rounded-xl overflow-hidden border transition-all duration-300 ${
        isPrimary 
          ? "border-tracksafe-blue transform hover:scale-105 shadow-lg" 
          : "border-gray-200 hover:border-tracksafe-blue/50 hover:shadow-md"
      }`}
    >
      <div className={`p-6 ${isPrimary ? "bg-gradient text-white" : "bg-white"}`}>
        <div className="text-lg font-semibold mb-1">{name}</div>
        <div className="flex items-end">
          <div className="text-3xl font-bold">{price}</div>
          <div className={`ml-1 ${isPrimary ? "text-white/80" : "text-gray-500"}`}>{frequency}</div>
        </div>
      </div>
      
      <div className="p-6 bg-white">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-tracksafe-teal mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant={isPrimary ? "primary" : "outline"} 
          className="w-full"
        >
          {cta}
        </Button>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "$149",
      frequency: "one-time",
      features: [
        "TrackSafe device with 1-year warranty",
        "Real-time accident detection",
        "Heart rate monitoring",
        "Emergency alerts",
        "Basic mobile app access",
        "1 emergency contact"
      ],
      cta: "Buy Now"
    },
    {
      name: "Premium",
      price: "$189",
      frequency: "+ $7.99/mo",
      features: [
        "TrackSafe device with 2-year warranty",
        "Premium monitoring services",
        "Extended battery life mode",
        "Health insights & history",
        "Unlimited emergency contacts",
        "24/7 monitoring service"
      ],
      isPrimary: true,
      cta: "Best Value"
    },
    {
      name: "Family",
      price: "$499",
      frequency: "+ $19.99/mo",
      features: [
        "3 TrackSafe devices with 2-year warranty",
        "Premium monitoring for all devices",
        "Family dashboard view",
        "Location sharing between devices",
        "Caregiver special access",
        "Priority customer support"
      ],
      cta: "Buy Family Pack"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Control of Your <span className="text-gradient">Safety</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for you and experience peace of mind for yourself and your loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
        
        <div className="mt-16 rounded-xl bg-tracksafe-light/30 p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Join Our Waitlist</h3>
              <p className="text-gray-700">
                Be the first to know when new TrackSafe features are released. Get exclusive early-bird offers and updates.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tracksafe-blue/50 focus:border-transparent min-w-[240px]" 
                />
                <Button>Join Waitlist</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
