import React, { useState, useEffect } from 'react';
import { Brain, Zap, Shield, Sparkles, Network, TrendingUp, Users, Globe } from 'lucide-react';

const AboutHeroVisual = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [pulseAnimation, setPulseAnimation] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { icon: Brain, label: 'AI-Powered', color: 'from-purple-500 to-pink-500' },
    { icon: Network, label: 'Connected', color: 'from-blue-500 to-cyan-500' },
    { icon: Shield, label: 'Secure', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, label: 'Fast', color: 'from-yellow-500 to-orange-500' },
    { icon: Globe, label: 'Global', color: 'from-indigo-500 to-purple-500' },
    { icon: TrendingUp, label: 'Growth', color: 'from-brand-red-500 to-pink-500' }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative rounded-xl">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main container */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto">
          
          {/* Central hub */}
          <div className="relative">
            {/* Center logo/brand */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-2xl md:text-3xl">DAQ</span>
                </div>
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-3xl bg-brand-red-600/20 animate-ping" />
              </div>
            </div>

            {/* Orbiting nodes - Mobile */}
            <div className="md:hidden relative w-64 h-64 mx-auto">
              {nodes.slice(0, 4).map((node, index) => {
                const Icon = node.icon;
                const angle = (index * 90) * Math.PI / 180;
                const radius = 100;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                  >
                    <div className={`
                      w-12 h-12 rounded-2xl flex items-center justify-center
                      transition-all duration-500 cursor-pointer
                      ${activeNode === index 
                        ? 'bg-gradient-to-br from-brand-red-500 to-brand-red-600 shadow-lg scale-110' 
                        : 'bg-gray-800/50 border border-gray-700'
                      }
                    `}>
                      <Icon className={`w-5 h-5 ${activeNode === index ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                    {activeNode === index && (
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs text-white font-medium">{node.label}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Orbiting nodes - Desktop */}
            <div className="hidden md:block relative w-[500px] h-[500px] mx-auto">
              {nodes.map((node, index) => {
                const Icon = node.icon;
                const angle = (index * 60) * Math.PI / 180;
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animation: `orbit 20s linear infinite`,
                      animationDelay: `${index * 3.33}s`
                    }}
                  >
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center
                      transition-all duration-500 cursor-pointer backdrop-blur-sm
                      ${activeNode === index 
                        ? 'bg-gradient-to-br from-brand-red-500 to-brand-red-600 shadow-xl scale-110' 
                        : 'bg-gray-800/70 border border-gray-700/50'
                      }
                    `}>
                      <Icon className={`w-7 h-7 ${activeNode === index ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                    <div className={`
                      absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                      transition-opacity duration-300
                      ${activeNode === index ? 'opacity-100' : 'opacity-0'}
                    `}>
                      <span className="text-sm text-white font-medium bg-gray-900/80 px-2 py-1 rounded-lg">
                        {node.label}
                      </span>
                    </div>
                    
                    {/* Connection lines */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                         width="200" height="200"
                         style={{ transform: `translate(-50%, -50%) rotate(${-angle}rad)` }}>
                      <line
                        x1="32" y1="0"
                        x2={radius - 32} y2="0"
                        stroke={activeNode === index ? '#ef4444' : '#475569'}
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity={activeNode === index ? 0.8 : 0.3}
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info cards - Mobile simplified */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-brand-red-500 mb-3" />
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Specialized professionals in data & AI
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-brand-red-500 mb-3" />
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Cutting-edge solutions for your business
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-brand-red-500 mb-3" />
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">Trusted</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Reliable partner for data transformation
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(-10px); }
          75% { transform: translateY(20px) translateX(5px); }
        }
        
        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg) translateX(180px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default AboutHeroVisual;