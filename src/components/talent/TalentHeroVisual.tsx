import React, { useState, useEffect } from 'react';
import { Users, Code, Database, Cloud, Brain, Layers, GitBranch, Terminal, Sparkles, Shield } from 'lucide-react';

const TalentHeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const talentNodes = [
    { icon: Code, label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { icon: Database, label: 'Data Engineering', color: 'from-green-500 to-emerald-500' },
    { icon: Brain, label: 'AI/ML', color: 'from-purple-500 to-pink-500' },
    { icon: Cloud, label: 'Cloud', color: 'from-yellow-500 to-orange-500' },
    { icon: Layers, label: 'Full Stack', color: 'from-indigo-500 to-purple-500' },
    { icon: Terminal, label: 'Backend', color: 'from-gray-500 to-gray-600' }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Simplified background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main container - Optimized for text visibility */}
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-8 z-10">
        
        {/* Central talent hub - Responsive sizing */}
        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
          
          {/* Center DAQ logo/brand */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-white" />
              </div>
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-brand-red-600/20 animate-ping" />
            </div>
          </div>

          {/* Orbiting talent nodes - CLEAN DESIGN WITH MAXIMUM TEXT VISIBILITY */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 mx-auto z-20">
            {talentNodes.map((node, index) => {
              const Icon = node.icon;
              const angle = (index * 60) * Math.PI / 180;
              const radius = typeof window !== 'undefined' 
                ? (window.innerWidth < 640 ? 75 : window.innerWidth < 1024 ? 90 : window.innerWidth < 1280 ? 110 : 130)
                : 90;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 transition-all duration-700"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    zIndex: activeNode === index ? 2000 : 100
                  }}
                >
                  <div className={`
                    relative transition-all duration-500 cursor-pointer
                    ${activeNode === index ? 'scale-110' : 'scale-90'}
                  `}>
                    {/* Node circle */}
                    <div className={`
                      w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-xl flex items-center justify-center transition-all duration-300
                      ${activeNode === index 
                        ? 'bg-gradient-to-br from-brand-red-500 to-brand-red-600 shadow-lg shadow-brand-red-500/30' 
                        : 'bg-gray-800/80 border border-gray-600'
                      }
                    `}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 ${
                        activeNode === index ? 'text-white' : 'text-gray-400'
                      }`} />
                    </div>
                    
                    {/* Enhanced label with MAXIMUM visibility and contrast */}
                    {activeNode === index && (
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                        style={{ 
                          zIndex: 3000,
                          top: y > 0 ? '-4rem' : '3.5rem' // Position above or below based on node position
                        }}
                      >
                        <div className="relative">
                          {/* Multiple background layers for maximum contrast */}
                          <div className="absolute inset-0 bg-black rounded-lg shadow-2xl blur-md opacity-80"></div>
                          <div className="absolute inset-0 bg-gray-900 rounded-lg shadow-xl blur-sm"></div>
                          <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg border-2 border-gray-600"></div>
                          
                          {/* Text with maximum contrast and multiple shadows */}
                          <span 
                            className="relative block text-xs sm:text-sm lg:text-base text-white font-bold px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg"
                            style={{
                              textShadow: `
                                0 0 8px rgba(0,0,0,1),
                                0 0 16px rgba(0,0,0,0.8),
                                2px 2px 4px rgba(0,0,0,0.9),
                                -1px -1px 2px rgba(0,0,0,0.7)
                              `,
                              filter: 'drop-shadow(0 0 4px rgba(0,0,0,1))'
                            }}
                          >
                            {node.label}
                          </span>
                          
                          {/* Enhanced arrow pointing to node */}
                          <div 
                            className="absolute left-1/2 -translate-x-1/2 w-0 h-0"
                            style={{
                              top: y > 0 ? '100%' : '-10px',
                              borderLeft: '10px solid transparent',
                              borderRight: '10px solid transparent',
                              borderTop: y > 0 ? 'none' : '10px solid rgb(31, 41, 55)',
                              borderBottom: y > 0 ? '10px solid rgb(31, 41, 55)' : 'none',
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                            }}
                          />
                          
                          {/* Additional glow effect for the arrow */}
                          <div 
                            className="absolute left-1/2 -translate-x-1/2 w-0 h-0"
                            style={{
                              top: y > 0 ? '100%' : '-8px',
                              borderLeft: '8px solid transparent',
                              borderRight: '8px solid transparent',
                              borderTop: y > 0 ? 'none' : '8px solid rgb(55, 65, 81)',
                              borderBottom: y > 0 ? '8px solid rgb(55, 65, 81)' : 'none'
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional visual indicators for better UX */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {talentNodes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeNode === index 
                    ? 'bg-brand-red-500 scale-125' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-8px) translateX(4px); 
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default TalentHeroVisual;