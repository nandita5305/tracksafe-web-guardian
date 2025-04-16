
import React from "react";

const DeviceMockup: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience <span className="text-gradient">TrackSafe</span> in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our intuitive interface makes monitoring your health and safety effortless.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          
          {/* Watch mockup */}
          <div className="relative flex justify-center">
            <div className="bg-gray-900 rounded-3xl w-[280px] p-3 shadow-2xl">
              <div className="bg-black rounded-2xl overflow-hidden border-4 border-gray-800">
                {/* Watch screen */}
                <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 relative">
                  {/* Time display */}
                  <div className="absolute top-4 left-0 right-0 text-center text-white text-sm font-light">
                    10:24 AM
                  </div>
                  
                  {/* Heart rate monitor */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <div className="text-xs text-gray-400 mb-1">HEART RATE</div>
                    <div className="text-3xl font-bold text-white mb-2">72</div>
                    <div className="w-full h-12 relative">
                      {/* Heart rate graph */}
                      <svg className="w-full h-full" viewBox="0 0 100 40">
                        <path 
                          d="M0,20 Q10,20 15,10 T20,20 T25,25 T30,20 T35,15 T40,5 T45,20 T50,25 T55,20 T60,15 T65,20 T70,30 T75,20 T80,10 T85,20 T90,15 T95,20 T100,20" 
                          fill="none" 
                          stroke="#33C3F0"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <div className="animate-pulse w-1 h-full bg-tracksafe-blue absolute right-0 top-0 opacity-50"></div>
                    </div>
                  </div>
                  
                  {/* Status indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-tracksafe-blue rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phone mockup */}
          <div className="mt-16 relative max-w-xs mx-auto">
            <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl">
              <div className="bg-gray-800 rounded-2xl overflow-hidden">
                {/* Phone app mockup */}
                <div className="bg-white">
                  {/* App header */}
                  <div className="bg-gradient p-4 text-white">
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-medium">TrackSafe</div>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-600">Today's Overview</div>
                      <div className="text-xs text-tracksafe-blue">View All</div>
                    </div>
                    
                    {/* Stats cards */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-tracksafe-light/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-600">Heart Rate</div>
                        <div className="text-xl font-semibold">72 <span className="text-xs text-gray-500">BPM</span></div>
                      </div>
                      <div className="bg-tracksafe-light/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-600">Steps</div>
                        <div className="text-xl font-semibold">8,453</div>
                      </div>
                      <div className="bg-tracksafe-light/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-600">Oxygen</div>
                        <div className="text-xl font-semibold">98<span className="text-xs text-gray-500">%</span></div>
                      </div>
                      <div className="bg-tracksafe-light/30 p-3 rounded-lg">
                        <div className="text-xs text-gray-600">Battery</div>
                        <div className="text-xl font-semibold">85<span className="text-xs text-gray-500">%</span></div>
                      </div>
                    </div>
                    
                    {/* Emergency contact */}
                    <div className="border border-gray-200 rounded-lg p-3 mb-4">
                      <div className="text-sm font-medium mb-2">Emergency Contacts</div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                          <div>
                            <div className="text-sm">Sarah Johnson</div>
                            <div className="text-xs text-gray-500">Primary Contact</div>
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Emergency button */}
                    <button className="w-full bg-tracksafe-red text-white py-3 rounded-lg font-medium">
                      EMERGENCY SOS
                    </button>
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

export default DeviceMockup;
