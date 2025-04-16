
import React from "react";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, image }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      <Quote className="w-8 h-8 text-tracksafe-blue/30 mb-4" />
      <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient flex items-center justify-center text-white font-bold">
              {name[0]}
            </div>
          )}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-500">{title}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "TrackSafe saved my dad when he fainted while alone at home. The alert reached us instantly, and we were able to get him help in time.",
      name: "Jennifer M.",
      title: "Daughter of TrackSafe user"
    },
    {
      quote: "As someone who hikes solo frequently in remote areas, TrackSafe gives me peace of mind. The battery lasts my entire weekend trips.",
      name: "Michael T.",
      title: "Avid Hiker"
    },
    {
      quote: "After my heart surgery, my doctor recommended TrackSafe. It's been monitoring my vitals and giving my family confidence in my recovery.",
      name: "Robert L.",
      title: "Heart Patient"
    },
    {
      quote: "I bought TrackSafe for my grandmother who lives alone. The fall detection feature already alerted us twice when she needed help.",
      name: "Sarah K.",
      title: "Granddaughter"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Stories from <span className="text-gradient">Real Users</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear how TrackSafe has helped people stay safe and given their loved ones peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient md:w-1/3 p-8 text-white">
              <div className="text-2xl font-bold mb-2">Customer Satisfaction</div>
              <div className="text-5xl font-bold mb-4">96%</div>
              <p className="text-white/80">
                Users report feeling more secure and having greater peace of mind after using TrackSafe for just one month.
              </p>
            </div>
            <div className="p-8 md:w-2/3">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Ease of Use</span>
                    <span className="text-sm font-medium">9.5/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient rounded-full h-2" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Battery Life</span>
                    <span className="text-sm font-medium">9.2/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient rounded-full h-2" style={{ width: "92%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Detection Accuracy</span>
                    <span className="text-sm font-medium">9.8/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient rounded-full h-2" style={{ width: "98%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Response Time</span>
                    <span className="text-sm font-medium">9.7/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient rounded-full h-2" style={{ width: "97%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
