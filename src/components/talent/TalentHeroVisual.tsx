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
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main container - Centered content */}
      <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4 lg:p-6 z-10">
        
        {/* Central talent hub - Responsive sizing */}
        <div className="relative w-full max-w-lg lg:max-w-2xl">
          
          {/* Center DAQ logo/brand */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
              </div>
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-brand-red-600/20 animate-ping" />
            </div>
          </div>

          {/* Orbiting talent nodes - NO CONNECTION LINES, CLEAN DESIGN */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto z-20">
            {talentNodes.map((node, index) => {
              const Icon = node.icon;
              const angle = (index * 60) * Math.PI / 180;
              const radius = typeof window !== 'undefined' 
                ? (window.innerWidth < 640 ? 85 : window.innerWidth < 1024 ? 100 : 130)
                : 100;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 transition-all duration-700"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    zIndex: activeNode === index ? 1000 : 100
                  }}
                >
                  <div className={`
                    relative transition-all duration-500 cursor-pointer
                    ${activeNode === index ? 'scale-110' : 'scale-90'}
                  `}>
                    {/* Node circle */}
                    <div className={`
                      w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center
                      ${activeNode === index 
                        ? 'bg-gradient-to-br from-brand-red-500 to-brand-red-600 shadow-lg' 
                        : 'bg-gray-800 border border-gray-700'
                      }
                    `}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${
                        activeNode === index ? 'text-white' : 'text-gray-400'
                      }`} />
                    </div>
                    
                    {/* Label with maximum visibility */}
                    {activeNode === index && (
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                        style={{ 
                          zIndex: 2000,
                          top: y > 0 ? '-3.5rem' : '4rem' // Position above or below based on node position
                        }}
                      >
                        <div className="relative">
                          {/* Multiple background layers for maximum contrast */}
                          <div className="absolute inset-0 bg-black rounded-lg shadow-2xl"></div>
                          <div className="absolute inset-0 bg-gray-900 rounded-lg border-2 border-white/20"></div>
                          <div className="absolute inset-0 bg-black/80 rounded-lg backdrop-blur-sm"></div>
                          
                          {/* Text with maximum contrast */}
                          <span className="relative block text-sm sm:text-base text-white font-black px-4 py-3 rounded-lg tracking-wide">
                            {node.label}
                          </span>
                          
                          {/* Arrow pointing to node */}
                          <div 
                            className="absolute left-1/2 -translate-x-1/2 w-0 h-0"
                            style={{
                              top: y > 0 ? '100%' : '-8px',
                              borderLeft: '8px solid transparent',
                              borderRight: '8px solid transparent',
                              borderTop: y > 0 ? 'none' : '8px solid black',
                              borderBottom: y > 0 ? '8px solid black' : 'none'
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