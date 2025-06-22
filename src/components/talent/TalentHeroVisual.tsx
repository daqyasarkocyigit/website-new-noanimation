import React, { useState, useEffect } from 'react';
import { Users, Code, Database, Cloud, Brain, Layers, GitBranch, Terminal, Sparkles, Shield } from 'lucide-react';

const TalentHeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const talentNodes = [
    { icon: Code, label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { icon: Database, label: 'Data Eng.', color: 'from-green-500 to-emerald-500' }, // Shortened
    { icon: Brain, label: 'AI/ML', color: 'from-purple-500 to-pink-500' },
    { icon: Cloud, label: 'Cloud', color: 'from-yellow-500 to-orange-500' },
    { icon: Layers, label: 'Full Stack', color: 'from-indigo-500 to-purple-500' },
    { icon: Terminal, label: 'Backend', color: 'from-gray-500 to-gray-600' }
  ];

  // REDUCED RADIUS - Labels stay inside the visual
  const getNodePosition = (index: number) => {
    const angle = (index * 60) * Math.PI / 180;
    // MUCH SMALLER RADIUS to keep everything inside
    const radius = typeof window !== 'undefined' 
      ? (window.innerWidth < 640 ? 60 : window.innerWidth < 1024 ? 70 : 80)
      : 70;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  // COMPACT LABEL POSITIONING - All inside the container
  const getLabelPosition = (index: number, nodeX: number, nodeY: number) => {
    const positions = [
      // Frontend (top) - label above
      { top: '-2.5rem', left: '50%', transform: 'translateX(-50%)' },
      // Data Eng. (right) - label to the right but inside
      { top: '50%', left: '3rem', transform: 'translateY(-50%)' },
      // AI/ML (bottom-right) - label below
      { top: '2.5rem', left: '0rem', transform: 'translateX(-25%)' },
      // Cloud (bottom-left) - label below
      { top: '2.5rem', left: '0rem', transform: 'translateX(-75%)' },
      // Full Stack (left) - label to the left but inside
      { top: '50%', left: '-3rem', transform: 'translate(-100%, -50%)' },
      // Backend (top) - label above
      { top: '-2.5rem', left: '50%', transform: 'translateX(-50%)' }
    ];
    
    return positions[index];
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Minimal background pattern */}
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

      {/* Main container - INCREASED PADDING to contain labels */}
      <div className="relative w-full h-full flex items-center justify-center p-12 sm:p-16 lg:p-20 z-10">
        
        {/* Central talent hub - SMALLER container to fit labels inside */}
        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
          
          {/* Center DAQ logo/brand */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-2xl flex items-center justify-center shadow-2xl">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-2xl bg-brand-red-600/20 animate-ping" />
            </div>
          </div>

          {/* Orbiting talent nodes - COMPACT LAYOUT */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto z-20">
            {talentNodes.map((node, index) => {
              const Icon = node.icon;
              const { x, y } = getNodePosition(index);
              const labelPos = getLabelPosition(index, x, y);
              
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
                    {/* Node circle - SMALLER SIZE */}
                    <div className={`
                      w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center transition-all duration-300
                      ${activeNode === index 
                        ? 'bg-gradient-to-br from-brand-red-500 to-brand-red-600 shadow-lg shadow-brand-red-500/30' 
                        : 'bg-gray-800/80 border border-gray-600'
                      }
                    `}>
                      <Icon className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${
                        activeNode === index ? 'text-white' : 'text-gray-400'
                      }`} />
                    </div>
                    
                    {/* COMPACT LABELS - ALWAYS INSIDE THE VISUAL */}
                    {activeNode === index && (
                      <div 
                        className="absolute whitespace-nowrap pointer-events-none z-[2000]"
                        style={labelPos}
                      >
                        <div className="relative">
                          {/* Strong background for contrast */}
                          <div className="absolute inset-0 bg-black rounded shadow-xl blur-sm opacity-95"></div>
                          <div className="absolute inset-0 bg-gray-900 rounded shadow-lg border border-gray-700"></div>
                          
                          {/* SMALLER FONT - Fits better inside */}
                          <span className="relative block text-xs text-white font-bold px-2 py-1 rounded">
                            {node.label}
                          </span>
                          
                          {/* Simple arrow pointing to node */}
                          <div 
                            className="absolute w-0 h-0"
                            style={{
                              top: index === 0 || index === 5 ? '100%' : // Top nodes - arrow down
                                   index === 1 || index === 2 ? '-4px' : // Right nodes - arrow up
                                   index === 3 || index === 4 ? '-4px' : '-4px', // Left nodes - arrow up
                              left: '50%',
                              transform: 'translateX(-50%)',
                              borderTop: index === 0 || index === 5 ? 'none' : '4px solid rgb(31, 41, 55)',
                              borderBottom: index === 0 || index === 5 ? '4px solid rgb(31, 41, 55)' : 'none',
                              borderLeft: '4px solid transparent',
                              borderRight: '4px solid transparent'
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