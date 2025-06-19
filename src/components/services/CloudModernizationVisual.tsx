import React, { useEffect, useState } from 'react';
import { Cloud, Server, Shield, Database, Globe, Network, Activity, Zap, ChevronRight } from 'lucide-react';

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
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-xl overflow-hidden relative">
      {/* Advanced Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
                linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        {/* Animated Tech Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
              <stop offset="50%" stopColor="rgba(239, 68, 68, 0.3)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={`${20 + i * 20}%`}
              x2="100%"
              y2={`${20 + i * 20}%`}
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              opacity="0.5"
              style={{
                animation: `linePulse ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col p-6">
        
        {/* Cloud Migration Progress Card */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/30 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-brand-red-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-brand-red-500 rounded-full animate-ping" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Cloud Migration Progress</h3>
                <p className="text-sm text-slate-400">Migrating infrastructure to cloud</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-white tabular-nums tracking-tight">
                {progress}%
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Complete</div>
            </div>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div className="relative w-full h-5 bg-slate-800/80 rounded-full overflow-hidden shadow-inner border border-slate-700/50">
            <div 
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #f97316 100%)'
              }}
            >
              {/* Glossy Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
              
              {/* Animated Glow */}
              <div className="absolute inset-0 opacity-50">
                <div 
                  className="h-full w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  style={{ animation: 'shimmer 2s linear infinite' }}
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-3">
            <span className="text-sm text-slate-500">0TB</span>
            <span className="text-sm font-medium text-brand-red-400 tabular-nums">
              {dataTransferred.toFixed(1)}TB / 3TB
            </span>
          </div>
        </div>

        {/* Enterprise Cloud Architecture */}
        <div className="flex-1 flex items-center justify-center relative mt-4 mb-4">
          {/* Central Cloud Infrastructure */}
          <div className="relative">
            {/* Main Cloud Container */}
            <div className="relative w-64 h-48">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl animate-pulse" />
              
              {/* Cloud Structure */}
              <div className="relative w-full h-full">
                {/* Base Layer */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-36 bg-gradient-to-t from-slate-800/90 via-slate-700/70 to-slate-600/30 rounded-3xl shadow-2xl border border-slate-600/20" />
                
                {/* Middle Layer */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-28 bg-gradient-to-t from-slate-700/80 via-slate-600/60 to-slate-500/20 rounded-3xl shadow-xl" />
                
                {/* Top Layer with Services */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-gradient-to-t from-slate-600/70 to-slate-500/10 rounded-3xl flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-1">
                    {[Server, Database, Network].map((Icon, i) => (
                      <div key={i} className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600/30 backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-slate-300" strokeWidth={1.5} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Orbiting Services */}
              <div className="absolute inset-0 w-[320px] h-[320px] -top-10 -left-7">
                {[
                  { icon: Shield, label: 'Security', color: 'from-purple-500 to-purple-600', angle: 0 },
                  { icon: Globe, label: 'CDN', color: 'from-blue-500 to-blue-600', angle: 72 },
                  { icon: Activity, label: 'Analytics', color: 'from-emerald-500 to-emerald-600', angle: 144 },
                  { icon: Zap, label: 'Performance', color: 'from-amber-500 to-amber-600', angle: 216 },
                  { icon: Server, label: 'Compute', color: 'from-rose-500 to-rose-600', angle: 288 }
                ].map((service, i) => {
                  const IconComponent = service.icon;
                  const radian = (service.angle * Math.PI) / 180;
                  const radius = 120;
                  const x = radius * Math.cos(radian);
                  const y = radius * Math.sin(radian);
                  
                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        animation: `orbit 30s linear infinite`,
                        animationDelay: `${i * -6}s`
                      }}
                    >
                      <div className="group relative">
                        {/* Service Node */}
                        <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl shadow-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 border border-white/20`}>
                          <IconComponent className="w-6 h-6 text-white" strokeWidth={1.5} />
                        </div>
                        
                        {/* Service Label */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {service.label}
                        </div>
                        
                        {/* Connection Dot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Data Flow Visualization */}
              <svg className="absolute inset-0 w-[320px] h-[320px] -top-10 -left-7 pointer-events-none">
                <circle
                  cx="160"
                  cy="160"
                  r="120"
                  fill="none"
                  stroke="url(#orbitGradient)"
                  strokeWidth="1"
                  strokeDasharray="5,10"
                  opacity="0.2"
                  style={{ animation: 'dashRotate 60s linear infinite' }}
                />
                <defs>
                  <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(239, 68, 68, 0.2)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
                    <stop offset="100%" stopColor="rgba(239, 68, 68, 0.2)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Enterprise Metrics Dashboard */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Cost Reduction', value: '42%', trend: '↓ $2.1M/year', color: 'from-emerald-600 to-green-600' },
            { label: 'Deployment Speed', value: '3.2x', trend: '↑ 68% faster', color: 'from-blue-600 to-indigo-600' },
            { label: 'System Uptime', value: '99.99%', trend: 'SLA Exceeded', color: 'from-purple-600 to-pink-600' },
            { label: 'Auto-Scaling', value: 'Active', trend: '24/7 Monitor', color: 'from-amber-600 to-orange-600' }
          ].map((metric, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm rounded-lg p-3 border border-slate-700/30 group hover:border-slate-600/50 transition-all duration-300"
              style={{
                animation: `metricSlide 0.5s ease-out forwards`,
                animationDelay: `${1.2 + i * 0.1}s`,
                opacity: 0
              }}
            >
              <div className={`h-1 w-full bg-gradient-to-r ${metric.color} rounded-full mb-2 opacity-80`} />
              <div className="text-xl font-bold text-white">{metric.value}</div>
              <div className="text-xs text-slate-400">{metric.label}</div>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                {metric.trend}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        @keyframes orbit {
          0% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) rotate(0deg); }
          100% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) rotate(360deg); }
        }

        @keyframes dashRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes metricSlide {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        @keyframes linePulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default CloudModernizationVisual;
