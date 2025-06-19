import React from 'react';
import { Cloud, Server, Shield, Database, Zap, ArrowUpRight, Globe, Lock } from 'lucide-react';

const CloudModernizationVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-xl overflow-hidden relative">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex items-center justify-center p-8">
        {/* Cloud Infrastructure Visualization */}
        <div className="relative">
          {/* Central Cloud Platform */}
          <div className="relative z-20">
            <div className="w-48 h-32 bg-gradient-to-b from-slate-800/90 to-gray-800/90 rounded-2xl shadow-2xl border border-gray-700/30 backdrop-blur-sm">
              {/* Cloud Icon Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Cloud className="w-20 h-20 text-brand-red-500/80" strokeWidth={1} />
              </div>
              
              {/* Cloud Layers Effect */}
              <div className="absolute -bottom-2 left-4 right-4 h-8 bg-gray-800/50 rounded-xl blur-sm" />
              <div className="absolute -bottom-4 left-8 right-8 h-6 bg-gray-800/30 rounded-xl blur-md" />
            </div>
          </div>

          {/* Service Nodes */}
          <div className="absolute inset-0 w-96 h-96 -top-32 -left-24">
            {[
              { 
                icon: Server, 
                position: { top: '20%', left: '50%' }, 
                label: 'Compute',
                delay: '0s',
                color: 'from-blue-500/20 to-blue-600/20'
              },
              { 
                icon: Database, 
                position: { top: '50%', right: '15%' }, 
                label: 'Storage',
                delay: '0.5s',
                color: 'from-green-500/20 to-green-600/20'
              },
              { 
                icon: Shield, 
                position: { bottom: '20%', left: '50%' }, 
                label: 'Security',
                delay: '1s',
                color: 'from-purple-500/20 to-purple-600/20'
              },
              { 
                icon: Globe, 
                position: { top: '50%', left: '15%' }, 
                label: 'Network',
                delay: '1.5s',
                color: 'from-orange-500/20 to-orange-600/20'
              }
            ].map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={i}
                  className="absolute group"
                  style={{
                    ...service.position,
                    animation: `serviceFloat ${6 + i}s ease-in-out infinite ${service.delay}`
                  }}
                >
                  {/* Connection Line to Center */}
                  <svg 
                    className="absolute w-48 h-48 -top-24 -left-24 pointer-events-none opacity-20"
                    style={{ zIndex: 1 }}
                  >
                    <line
                      x1="96"
                      y1="96"
                      x2="192"
                      y2="192"
                      stroke="rgba(239, 68, 68, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      style={{
                        animation: `dashMove 10s linear infinite ${service.delay}`
                      }}
                    />
                  </svg>

                  {/* Service Node */}
                  <div 
                    className={`relative z-10 w-20 h-20 bg-gradient-to-br ${service.color} backdrop-blur-sm rounded-xl flex flex-col items-center justify-center border border-gray-700/30 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-gray-300 mb-1" strokeWidth={1.5} />
                    <span className="text-xs text-gray-400">{service.label}</span>
                    
                    {/* Active Indicator */}
                    <div className="absolute -top-1 -right-1 w-3 h-3">
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping" />
                      <div className="relative w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Data Flow Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-brand-red-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  animation: `particleOrbit ${15 + i * 2}s linear infinite`,
                  animationDelay: `${i * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Migration Progress Indicator */}
        <div className="absolute top-8 left-8 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30">
          <div className="flex items-center gap-3 mb-2">
            <ArrowUpRight className="w-4 h-4 text-brand-red-500" />
            <span className="text-sm font-medium text-gray-300">Migration Status</span>
          </div>
          <div className="w-48 h-2 bg-gray-700/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full"
              style={{
                width: '75%',
                animation: 'progressMove 3s ease-in-out infinite'
              }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">75% Complete</span>
            <span className="text-xs text-gray-500">2.3TB/3TB</span>
          </div>
        </div>

        {/* Security Badge */}
        <div className="absolute top-8 right-8 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700/30 flex items-center gap-2">
          <Lock className="w-4 h-4 text-green-500" />
          <span className="text-xs text-gray-400">End-to-End Encrypted</span>
        </div>

        {/* Performance Metrics */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Uptime', value: '99.99%', trend: '+0.02%' },
              { label: 'Latency', value: '12ms', trend: '-3ms' },
              { label: 'Cost', value: '-42%', trend: 'Optimized' },
              { label: 'Scale', value: 'Auto', trend: 'Active' }
            ].map((metric, i) => (
              <div 
                key={i} 
                className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-3 border border-gray-700/30"
                style={{
                  animation: `metricFade 4s ease-in-out infinite ${i * 0.5}s`
                }}
              >
                <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                <div className="text-lg font-semibold text-gray-200">{metric.value}</div>
                <div className="text-xs text-green-500 mt-1">{metric.trend}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[1, 2, 3].map((ring) => (
            <div
              key={ring}
              className="absolute rounded-full border border-gray-700/10"
              style={{
                width: `${ring * 150}px`,
                height: `${ring * 150}px`,
                animation: `ringPulse ${4 + ring}s ease-in-out infinite`,
                animationDelay: `${ring * 0.3}s`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes serviceFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-15px) scale(1.02);
          }
        }

        @keyframes dashMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -10; }
        }

        @keyframes particleOrbit {
          0% {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
            opacity: 0;
          }
        }

        @keyframes progressMove {
          0%, 100% { width: 75%; }
          50% { width: 78%; }
        }

        @keyframes metricFade {
          0%, 100% { 
            opacity: 0.7;
            transform: translateY(0);
          }
          50% { 
            opacity: 1;
            transform: translateY(-2px);
          }
        }

        @keyframes ringPulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default CloudModernizationVisual;
