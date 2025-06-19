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
    { icon: Database, label: 'Data Eng', color: 'from-green-500 to-emerald-500' },
    { icon: Brain, label: 'AI/ML', color: 'from-purple-500 to-pink-500' },
    { icon: Cloud, label: 'Cloud', color: 'from-yellow-500 to-orange-500' },
    { icon: Layers, label: 'Full Stack', color: 'from-indigo-500 to-purple-500' },
    { icon: Terminal, label: 'Backend', color: 'from-brand-red-500 to-pink-500' }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Grid Pattern - Site colors */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Main container - Optimized for full visibility */}
      <div className="relative w-full h-full flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6">
        
        {/* Central talent hub - Responsive sizing */}
        <div className="relative flex-1 flex items-center justify-center w-full max-w-lg lg:max-w-2xl">
          
          {/* Center DAQ logo/brand - Site colors */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              {/* Pulse effect - Brand red */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-brand-red-600/20 animate-ping" />
            </div>
          </div>

          {/* Orbiting talent nodes - Mobile optimized */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80">
            {talentNodes.map((node, index) => {
              const Icon = node.icon;
              const angle = (index * 60) * Math.PI / 180;
              const radius = window.innerWidth < 640 ? 70 : window.innerWidth < 1024 ? 85 : 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 transition-all duration-700"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <div className={`
                    relative transition-all duration-500 cursor-pointer
                    ${activeNode === index ? 'scale-110 z-10' : 'scale-90'}
                  `}>
                    <div className={`
                      w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center
                      ${activeNode === index 
                        ? 'bg-gradient-to-br from-brand-red-500 to-brand-red-600 shadow-lg' 
                        : 'bg-gray-800 border border-gray-700'
                      }
                    `}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${
                        activeNode === index ? 'text-white' : 'text-gray-400'
                      }`} />
                    </div>
                    
                    {/* Label - Only show on active */}
                    {activeNode === index && (
                      <div className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs sm:text-sm text-white font-medium bg-gray-900/80 px-2 py-1 rounded-lg">
                          {node.label}
                        </span>
                      </div>
                    )}
                    
                    {/* Connection line */}
                    <svg 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      width="200" height="200"
                    >
                      <line
                        x1={window.innerWidth < 640 ? "20" : window.innerWidth < 1024 ? "24" : "28"}
                        y1="0"
                        x2={-x + (window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 24 : 28)}
                        y2={-y}
                        stroke={activeNode === index ? '#ef4444' : '#334155'}
                        strokeWidth="1"
                        strokeDasharray={activeNode === index ? '0' : '4 4'}
                        opacity={activeNode === index ? 0.8 : 0.3}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom info cards - Compact for mobile */}
        <div className="w-full max-w-4xl mt-6 sm:mt-8 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 flex-shrink-0">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50 text-center">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red-500 mx-auto mb-2" />
            <h3 className="text-sm sm:text-base font-semibold text-white mb-1">2,847 Experts</h3>
            <p className="text-xs text-gray-400">Pre-vetted professionals</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50 text-center">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red-500 mx-auto mb-2" />
            <h3 className="text-sm sm:text-base font-semibold text-white mb-1">98.5% Success</h3>
            <p className="text-xs text-gray-400">Proven track record</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50 text-center sm:col-span-1 col-span-1">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red-500 mx-auto mb-2" />
            <h3 className="text-sm sm:text-base font-semibold text-white mb-1">1.2 Week Deploy</h3>
            <p className="text-xs text-gray-400">Fast deployment</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-15px) translateX(8px); 
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default TalentHeroVisual;