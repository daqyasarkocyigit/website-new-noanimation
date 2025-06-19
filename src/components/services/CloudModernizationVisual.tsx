import React, { useEffect, useState } from 'react';
import { Cloud, Server, Shield, Database, Globe, TrendingUp, Activity, Lock } from 'lucide-react';

const CloudModernizationVisual: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [dataTransferred, setDataTransferred] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
      
      setDataTransferred((prev) => {
        if (prev >= 3) return 3;
        return prev + 0.03;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 rounded-xl overflow-hidden relative">
      {/* Subtle Tech Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
              style={{
                top: `${i * 5}%`,
                left: '-100%',
                right: '-100%',
                animation: `scan ${20 + i}s linear infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col p-8">
        
        {/* Migration Progress Card */}
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-red-500 rounded-full animate-pulse" />
                Cloud Migration Progress
              </h3>
              <p className="text-sm text-slate-400 mt-1">Migrating infrastructure to cloud</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white tabular-nums">
                {progress.toString().padStart(3, '0')}%
              </div>
              <div className="text-xs text-slate-500">Complete</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative w-full h-4 bg-slate-800/50 rounded-full overflow-hidden shadow-inner">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-red-600 via-brand-red-500 to-orange-500 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
              <div 
                className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-white/30"
                style={{ animation: 'shimmer 2s linear infinite' }}
              />
            </div>
          </div>
          
          <div className="flex justify-between mt-3 text-sm">
            <span className="text-slate-500">0TB</span>
            <span className="text-brand-red-400 font-medium tabular-nums">
              {dataTransferred.toFixed(1)}TB / 3TB
            </span>
          </div>
        </div>

        {/* Cloud Infrastructure Visualization */}
        <div className="flex-1 flex items-center justify-center relative mt-8">
          {/* Central Cloud Platform */}
          <div className="relative">
            {/* Modern Cloud Shape */}
            <div className="relative w-72 h-56">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Cloud Layers */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-40 bg-gradient-to-t from-slate-800/90 to-slate-700/50 rounded-full shadow-2xl border border-slate-700/50" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-56 h-32 bg-gradient-to-t from-slate-700/90 to-slate-600/50 rounded-full shadow-xl" />
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-28 bg-gradient-to-t from-slate-600/90 to-slate-500/30 rounded-full flex items-center justify-center">
                <Cloud className="w-16 h-16 text-white/30" strokeWidth={1} />
              </div>
            </div>

            {/* Floating Service Nodes */}
            <div className="absolute inset-0 w-96 h-96 -top-20 -left-12">
              {[
                { icon: Server, label: 'Compute', color: 'from-blue-600 to-blue-700', x: 0, y: -120 },
                { icon: Database, label: 'Storage', color: 'from-emerald-600 to-emerald-700', x: 120, y: -40 },
                { icon: Shield, label: 'Security', color: 'from-purple-600 to-purple-700', x: 80, y: 80 },
                { icon: Globe, label: 'Network', color: 'from-amber-600 to-amber-700', x: -80, y: 80 },
                { icon: Activity, label: 'Monitor', color: 'from-rose-600 to-rose-700', x: -120, y: -40 }
              ].map((service, i) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 group"
                    style={{
                      transform: `translate(calc(-50% + ${service.x}px), calc(-50% + ${service.y}px))`,
                      animation: `float ${5 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  >
                    <div className="relative">
                      {/* Connection Line */}
                      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none">
                        <line
                          x1="24"
                          y1="24"
                          x2={96 - service.x / 2.5}
                          y2={96 - service.y / 2.5}
                          stroke="rgba(148, 163, 184, 0.1)"
                          strokeWidth="1"
                        />
                      </svg>
                      
                      {/* Node */}
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl shadow-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl border border-white/10`}>
                        <IconComponent className="w-8 h-8 text-white/90" strokeWidth={1.5} />
                        
                        {/* Active Pulse */}
                        <div className="absolute -inset-1 bg-white/20 rounded-2xl animate-ping" />
                      </div>
                      
                      {/* Label */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400 whitespace-nowrap">
                        {service.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { 
              icon: TrendingUp, 
              label: 'Reduced Costs', 
              value: '42%',
              color: 'from-green-600 to-emerald-600'
            },
            { 
              icon: Activity, 
              label: 'Faster Deploy', 
              value: '3x',
              color: 'from-blue-600 to-indigo-600'
            },
            { 
              icon: Lock, 
              label: 'Uptime', 
              value: '99.9%',
              color: 'from-purple-600 to-pink-600'
            }
          ].map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-800/50 transform transition-all duration-300 hover:scale-105"
                style={{
                  animation: `slideUp 0.5s ease-out forwards`,
                  animationDelay: `${1 + i * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes float {
          0%, 100% { 
            transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) translateY(0px);
          }
          50% { 
            transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) translateY(-10px);
          }
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default CloudModernizationVisual;
