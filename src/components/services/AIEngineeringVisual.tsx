import React from 'react';
import { Brain, Cpu, Network, Zap, Activity, GitBranch } from 'lucide-react';

const AIEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-xl overflow-hidden relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex items-center justify-center p-8">
        {/* Central Neural Network */}
        <div className="relative">
          {/* Core AI Brain */}
          <div className="relative z-20">
            <div className="w-32 h-32 bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl border border-gray-700/50">
              <Brain className="w-16 h-16 text-brand-red-500" strokeWidth={1.5} />
              
              {/* Subtle Glow */}
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.1) 0%, transparent 70%)',
                  animation: 'subtleGlow 4s ease-in-out infinite'
                }}
              />
            </div>
          </div>

          {/* Neural Connections */}
          <svg className="absolute inset-0 w-96 h-96 -top-32 -left-32" style={{ zIndex: 10 }}>
            {/* Connection Lines */}
            {[
              { x1: 192, y1: 192, x2: 80, y2: 80, delay: '0s' },
              { x1: 192, y1: 192, x2: 304, y2: 80, delay: '0.5s' },
              { x1: 192, y1: 192, x2: 304, y2: 304, delay: '1s' },
              { x1: 192, y1: 192, x2: 80, y2: 304, delay: '1.5s' },
              { x1: 192, y1: 192, x2: 192, y2: 60, delay: '2s' },
              { x1: 192, y1: 192, x2: 192, y2: 324, delay: '2.5s' }
            ].map((line, i) => (
              <g key={i}>
                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="rgba(239, 68, 68, 0.2)"
                  strokeWidth="1"
                />
                <circle
                  r="2"
                  fill="rgba(239, 68, 68, 0.8)"
                  style={{
                    animation: `neuralPulse 3s ease-in-out infinite ${line.delay}`
                  }}
                >
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    begin={line.delay}
                  >
                    <mpath href={`#path${i}`} />
                  </animateMotion>
                </circle>
                <path
                  id={`path${i}`}
                  d={`M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`}
                  fill="none"
                />
              </g>
            ))}
          </svg>

          {/* Outer Nodes */}
          {[
            { icon: Cpu, position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-24', label: 'Processing' },
            { icon: Network, position: 'right-0 top-1/2 translate-x-24 -translate-y-1/2', label: 'Networks' },
            { icon: Activity, position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-24', label: 'Analysis' },
            { icon: GitBranch, position: 'left-0 top-1/2 -translate-x-24 -translate-y-1/2', label: 'Models' }
          ].map((node, i) => {
            const IconComponent = node.icon;
            return (
              <div
                key={i}
                className={`absolute ${node.position} group`}
                style={{
                  animation: `nodeFloat ${4 + i}s ease-in-out infinite ${i * 0.5}s`
                }}
              >
                <div className="w-16 h-16 bg-slate-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50 shadow-lg group-hover:border-brand-red-500/50 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-brand-red-500 transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {node.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Data Flow Visualization */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: `dataRing ${10 + i * 2}s linear infinite`,
                animationDelay: `${i * 2}s`
              }}
            >
              <div className="w-full h-full rounded-full border border-brand-red-500/10" />
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          {[
            { label: 'Accuracy', value: '99.7%', height: '60%' },
            { label: 'Speed', value: '1.2ms', height: '80%' },
            { label: 'Models', value: '247', height: '45%' },
            { label: 'Efficiency', value: '94%', height: '70%' }
          ].map((metric, i) => (
            <div key={i} className="flex flex-col items-center gap-2 flex-1">
              <div className="relative w-full max-w-[60px]">
                <div className="w-full bg-gray-800/50 rounded-full h-24 relative overflow-hidden">
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-red-600/80 to-brand-red-500/60 rounded-full transition-all duration-1000"
                    style={{
                      height: metric.height,
                      animation: `metricFill 3s ease-in-out infinite ${i * 0.5}s`
                    }}
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">{metric.label}</div>
                <div className="text-sm font-semibold text-gray-300">{metric.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="absolute top-8 right-8 flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
          <div className="relative">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
          </div>
          <span className="text-xs text-gray-400">AI Engine Active</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtleGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes nodeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes neuralPulse {
          0%, 100% { opacity: 0; r: 2; }
          50% { opacity: 1; r: 4; }
        }

        @keyframes dataRing {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }

        @keyframes metricFill {
          0%, 100% { 
            height: calc(var(--height) * 0.8);
            opacity: 0.6;
          }
          50% { 
            height: var(--height);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AIEngineeringVisual;
