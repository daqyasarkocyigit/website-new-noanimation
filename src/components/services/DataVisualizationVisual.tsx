import React from 'react';
import { BarChart3, PieChart, TrendingUp, Activity } from 'lucide-react';

const DataVisualizationVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden relative p-10">
      {/* Background Orbs */}
      <div 
        className="absolute w-48 h-48 bg-brand-red-500/20 rounded-full filter blur-3xl -top-12 -right-12 opacity-40"
        style={{ animation: 'orbFloat 15s ease-in-out infinite' }}
      />
      <div 
        className="absolute w-36 h-36 bg-gray-400/20 rounded-full filter blur-3xl -bottom-8 -left-8 opacity-40"
        style={{ animation: 'orbFloat 15s ease-in-out infinite 5s' }}
      />

      {/* Floating Elements */}
      <div 
        className="absolute w-16 h-10 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm top-[10%] left-[10%]"
        style={{ animation: 'float1 8s ease-in-out infinite' }}
      />
      <div 
        className="absolute w-20 h-12 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm bottom-[15%] right-[8%]"
        style={{ animation: 'float2 10s ease-in-out infinite' }}
      />

      {/* Dashboard Grid */}
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-5 relative z-10">
        {/* Bar Chart Card */}
        <div 
          className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex items-center justify-center"
          style={{ animation: 'cardFloat 6s ease-in-out infinite 0s' }}
        >
          <div className="flex items-end gap-2 h-24">
            {[40, 70, 50, 90, 60].map((height, i) => (
              <div
                key={i}
                className="w-5 bg-gradient-to-t from-brand-red-600 to-brand-red-400 rounded-t-sm"
                style={{
                  height: `${height}%`,
                  animation: `barGrow 2s ease-in-out infinite ${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Pie Chart Card */}
        <div 
          className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex items-center justify-center"
          style={{ animation: 'cardFloat 6s ease-in-out infinite 1s' }}
        >
          <div 
            className="w-24 h-24 relative rounded-full overflow-hidden"
            style={{ animation: 'rotate 20s linear infinite' }}
          >
            <div className="absolute inset-0 bg-brand-red-600" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }} />
            <div className="absolute inset-0 bg-brand-red-500" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)', transform: 'rotate(90deg)' }} />
            <div className="absolute inset-0 bg-gray-400" style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)', transform: 'rotate(180deg)' }} />
            <div className="absolute inset-0 bg-gray-500" style={{ clipPath: 'polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)', transform: 'rotate(270deg)' }} />
          </div>
        </div>

        {/* Line Chart Card */}
        <div 
          className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex items-center justify-center"
          style={{ animation: 'cardFloat 6s ease-in-out infinite 2s' }}
        >
          <div className="w-32 h-20 relative">
            <svg width="128" height="80" viewBox="0 0 128 80" className="w-full h-full">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
              </defs>
              <path 
                d="M8,60 Q28,20 40,40 T72,30 T120,50" 
                stroke="url(#lineGradient)" 
                strokeWidth="3" 
                fill="none"
                strokeDasharray="200"
                style={{ animation: 'drawLine 3s ease-in-out infinite' }}
              />
            </svg>
          </div>
        </div>

        {/* Heatmap Card */}
        <div 
          className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex items-center justify-center"
          style={{ animation: 'cardFloat 6s ease-in-out infinite 3s' }}
        >
          <div className="grid grid-cols-5 grid-rows-4 gap-1">
            {[...Array(20)].map((_, i) => {
              const colors = [
                'bg-brand-red-600/30',
                'bg-brand-red-500/50', 
                'bg-gray-400/70',
                'bg-brand-red-400/60'
              ];
              const colorClass = colors[i % colors.length];
              return (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-sm ${colorClass}`}
                  style={{ 
                    animation: `heatPulse 2s ease-in-out infinite ${(i % 3) * 0.5}s` 
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes barGrow {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.2); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes drawLine {
          0% { stroke-dashoffset: 200; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -200; }
        }

        @keyframes heatPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(10deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -15px) rotate(-10deg); }
        }
      `}</style>
    </div>
  );
};

export default DataVisualizationVisual;