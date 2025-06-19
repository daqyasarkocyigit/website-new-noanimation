import React from 'react';
import { Brain, Cpu, Zap, Target, Activity, Network } from 'lucide-react';

const AIEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Glitch Effect */}
      <div 
        className="absolute w-full h-0.5 bg-brand-red-500/80 opacity-0"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          animation: 'glitchScan 8s ease-in-out infinite'
        }}
      />

      {/* Neural Network Container */}
      <div className="relative w-full h-full flex items-center justify-center p-8">
        {/* AI Brain Core */}
        <div className="relative z-10">
          <div 
            className="w-72 h-72 relative"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'brainRotate 20s linear infinite'
            }}
          >
            {/* Core Sphere */}
            <div 
              className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-brand-red-500 to-brand-red-600 shadow-2xl"
              style={{
                boxShadow: `
                  0 0 80px rgba(239, 68, 68, 0.8),
                  inset -20px -20px 40px rgba(0,0,0,0.3),
                  inset 20px 20px 40px rgba(255,255,255,0.3)
                `,
                animation: 'corePulse 3s ease-in-out infinite'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-24 h-24 text-white" />
              </div>
            </div>

            {/* Neural Rings */}
            {[
              { rotation: 'rotateX(0deg) scale(1.5)', animation: 'ringRotate1 15s linear infinite' },
              { rotation: 'rotateX(60deg) scale(1.5)', animation: 'ringRotate2 20s linear infinite reverse' },
              { rotation: 'rotateX(120deg) scale(1.5)', animation: 'ringRotate3 25s linear infinite' }
            ].map((ring, i) => (
              <div
                key={i}
                className="absolute inset-0 w-full h-full border-2 border-brand-red-400/30 rounded-full"
                style={{
                  transform: ring.rotation,
                  transformStyle: 'preserve-3d',
                  animation: ring.animation
                }}
              >
                {/* Neural Nodes on each ring */}
                {[
                  { position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-2', icon: Cpu },
                  { position: 'right-0 top-1/2 translate-x-2 -translate-y-1/2', icon: Network },
                  { position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-2', icon: Activity },
                  { position: 'left-0 top-1/2 -translate-x-2 -translate-y-1/2', icon: Target }
                ].map((node, j) => {
                  const IconComponent = node.icon;
                  return (
                    <div
                      key={j}
                      className={`absolute w-4 h-4 bg-brand-red-500 rounded-full shadow-lg ${node.position}`}
                      style={{
                        boxShadow: '0 0 20px rgba(239, 68, 68, 0.8)'
                      }}
                    >
                      <IconComponent className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Energy Waves */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute w-96 h-96 border-2 border-brand-red-400/30 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `waveExpand 4s ease-out infinite ${i}s`
            }}
          />
        ))}

        {/* Data Particles */}
        {[
          { x1: '-100px', y1: '-100px', x2: '0px', y2: '0px', x3: '100px', y3: '100px', delay: '0s' },
          { x1: '100px', y1: '-100px', x2: '0px', y2: '0px', x3: '-100px', y3: '100px', delay: '0.5s' },
          { x1: '-150px', y1: '0px', x2: '0px', y2: '0px', x3: '150px', y3: '0px', delay: '1s' },
          { x1: '0px', y1: '-150px', x2: '0px', y2: '0px', x3: '0px', y3: '150px', delay: '1.5s' }
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-red-500 rounded-full top-1/2 left-1/2 opacity-0"
            style={{
              boxShadow: '0 0 6px rgba(239, 68, 68, 0.8)',
              animation: `particleFlow 4s ease-in-out infinite ${particle.delay}`,
              '--x1': particle.x1,
              '--y1': particle.y1,
              '--x2': particle.x2,
              '--y2': particle.y2,
              '--x3': particle.x3,
              '--y3': particle.y3
            } as React.CSSProperties}
          />
        ))}

        {/* AI Metrics */}
        {[
          { 
            position: 'top-[20%] left-[10%]', 
            label: 'ACCURACY', 
            value: '99.7%', 
            delay: '0s' 
          },
          { 
            position: 'top-[70%] right-[10%]', 
            label: 'PROCESSING', 
            value: '1.2M/s', 
            delay: '3s' 
          },
          { 
            position: 'bottom-[20%] left-[15%]', 
            label: 'MODELS', 
            value: '247', 
            delay: '6s' 
          }
        ].map((metric, i) => (
          <div
            key={i}
            className={`absolute ${metric.position} bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm opacity-0`}
            style={{ animation: `metricFloat 10s ease-in-out infinite ${metric.delay}` }}
          >
            <div className="text-brand-red-400 text-xs mb-1">{metric.label}</div>
            <div className="text-white text-2xl font-bold">{metric.value}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes brainRotate {
          0% { transform: rotateY(0deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(10deg); }
        }

        @keyframes corePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes ringRotate1 {
          0% { transform: rotateX(0deg) rotateZ(0deg) scale(1.5); }
          100% { transform: rotateX(0deg) rotateZ(360deg) scale(1.5); }
        }

        @keyframes ringRotate2 {
          0% { transform: rotateX(60deg) rotateY(0deg) scale(1.5); }
          100% { transform: rotateX(60deg) rotateY(360deg) scale(1.5); }
        }

        @keyframes ringRotate3 {
          0% { transform: rotateX(120deg) rotateZ(0deg) scale(1.5); }
          100% { transform: rotateX(120deg) rotateZ(360deg) scale(1.5); }
        }

        @keyframes waveExpand {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
            border-width: 3px;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
            border-width: 1px;
          }
        }

        @keyframes particleFlow {
          0% {
            opacity: 0;
            transform: translate(var(--x1), var(--y1)) scale(0);
          }
          10% {
            opacity: 1;
            transform: translate(var(--x2), var(--y2)) scale(1);
          }
          90% {
            opacity: 1;
            transform: translate(var(--x2), var(--y2)) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--x3), var(--y3)) scale(0);
          }
        }

        @keyframes metricFloat {
          0%, 100% {
            opacity: 0;
            transform: translateY(20px);
          }
          20%, 80% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes glitchScan {
          0%, 100% { 
            opacity: 0;
            top: 0%;
          }
          45%, 55% {
            opacity: 1;
          }
          50% {
            top: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default AIEngineeringVisual;