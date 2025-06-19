import React from 'react';
import { Cloud, Server, Shield, Database, Globe, ArrowUpRight, Zap } from 'lucide-react';

const CloudModernizationVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-gray-900 rounded-xl overflow-hidden relative">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
        
        {/* Migration Progress - Top */}
        <div className="absolute top-8 left-8 right-8 bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-red-500/20 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-brand-red-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-200">Cloud Migration Progress</h3>
                <p className="text-xs text-gray-500">Migrating infrastructure to cloud</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-200">
                <span className="migration-percentage">0</span>%
              </div>
              <div className="text-xs text-gray-500">Complete</div>
            </div>
          </div>
          
          <div className="w-full h-3 bg-gray-800/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full transition-all duration-300"
              style={{
                animation: 'progressFill 8s ease-out infinite'
              }}
            />
          </div>
          
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>0GB</span>
            <span className="text-brand-red-500 font-medium">
              <span className="data-transferred">0</span>TB / 3TB
            </span>
          </div>
        </div>

        {/* Central Cloud Infrastructure */}
        <div className="relative mt-20">
          {/* Floating Cloud Platform */}
          <div 
            className="relative"
            style={{ animation: 'cloudFloat 6s ease-in-out infinite' }}
          >
            {/* Cloud Container */}
            <div className="w-64 h-48 relative">
              {/* Cloud Shape */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/60 to-gray-800/60 rounded-full blur-xl" />
              <div className="absolute bottom-0 left-8 right-8 h-32 bg-gradient-to-b from-slate-800/80 to-gray-800/80 rounded-full blur-lg" />
              <div className="absolute bottom-0 left-4 right-4 h-24 bg-gradient-to-b from-slate-700 to-gray-800 rounded-full" />
              
              {/* Cloud Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Cloud className="w-24 h-24 text-white/20" strokeWidth={1} />
              </div>
            </div>
          </div>

          {/* Service Icons Orbiting */}
          <div className="absolute inset-0 w-80 h-80 -top-16 -left-8">
            {[
              { icon: Server, angle: 0, label: 'Compute', color: 'from-blue-500 to-blue-600' },
              { icon: Database, angle: 72, label: 'Storage', color: 'from-green-500 to-green-600' },
              { icon: Shield, angle: 144, label: 'Security', color: 'from-purple-500 to-purple-600' },
              { icon: Globe, angle: 216, label: 'Network', color: 'from-orange-500 to-orange-600' },
              { icon: Zap, angle: 288, label: 'Performance', color: 'from-yellow-500 to-yellow-600' }
            ].map((service, i) => {
              const IconComponent = service.icon;
              const radian = (service.angle * Math.PI) / 180;
              const x = 140 * Math.cos(radian);
              const y = 140 * Math.sin(radian);
              
              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 transition-all duration-300"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    animation: `orbitRotate 20s linear infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  <div className="group relative">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {service.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Data Flow Lines */}
          <svg className="absolute inset-0 w-80 h-80 -top-16 -left-8 pointer-events-none opacity-20">
            <circle
              cx="160"
              cy="160"
              r="140"
              fill="none"
              stroke="rgba(239, 68, 68, 0.2)"
              strokeWidth="1"
              strokeDasharray="5,10"
              style={{
                animation: 'dashRotate 30s linear infinite'
              }}
            />
          </svg>
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
          {[
            { label: 'Reduced Costs', value: '42%', icon: '💰' },
            { label: 'Faster Deploy', value: '3x', icon: '🚀' },
            { label: 'Uptime', value: '99.9%', icon: '✅' }
          ].map((stat, i) => (
            <div 
              key={i}
              className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700/30"
              style={{
                animation: `statFade 4s ease-in-out infinite ${i * 0.3}s`
              }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold text-gray-200">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progressFill {
          0% { 
            width: 0%;
          }
          100% { 
            width: 100%;
          }
        }

        @keyframes cloudFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes orbitRotate {
          0% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) rotate(0deg); }
          100% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) rotate(360deg); }
        }

        @keyframes dashRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes statFade {
          0%, 100% { 
            opacity: 0.7;
            transform: scale(0.95);
          }
          50% { 
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Counter Animation */
        @property --num {
          syntax: '<integer>';
          initial-value: 0;
          inherits: false;
        }

        .migration-percentage {
          animation: countUp 8s ease-out infinite;
          counter-reset: num var(--num);
        }

        .migration-percentage::after {
          content: counter(num);
        }

        @keyframes countUp {
          0% { --num: 0; }
          100% { --num: 100; }
        }

        .data-transferred {
          animation: dataCount 8s ease-out infinite;
        }

        @keyframes dataCount {
          0% { content: "0.0"; }
          25% { content: "0.8"; }
          50% { content: "1.5"; }
          75% { content: "2.3"; }
          100% { content: "3.0"; }
        }
      `}</style>
    </div>
  );
};

export default CloudModernizationVisual;
