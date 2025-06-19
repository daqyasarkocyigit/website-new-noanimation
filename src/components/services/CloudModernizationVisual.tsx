import React from 'react';
import { Cloud, Server, Shield, Database, Zap } from 'lucide-react';

const CloudModernizationVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden relative">
      {/* Network Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridMove 30s linear infinite'
          }}
        />
      </div>

      {/* Cloud Container */}
      <div className="relative w-full h-full flex items-center justify-center p-8">
        {/* Central Cloud Platform */}
        <div className="relative z-10">
          <div 
            className="w-72 h-72 relative"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'platformFloat 6s ease-in-out infinite'
            }}
          >
            {/* Cloud Layers */}
            <div 
              className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-brand-red-500/10 to-brand-red-600/5 border-2 border-white/10 backdrop-blur-sm flex items-center justify-center"
              style={{
                transform: 'translateZ(0px)',
                animation: 'layer1Pulse 4s ease-in-out infinite'
              }}
            />
            
            <div 
              className="absolute inset-0 w-4/5 h-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/5 border-2 border-white/10 backdrop-blur-sm"
              style={{
                transform: 'translate(-50%, -50%) translateZ(50px)',
                animation: 'layer2Pulse 4s ease-in-out infinite 0.5s'
              }}
            />
            
            <div 
              className="absolute inset-0 w-3/5 h-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/5 border-2 border-white/10 backdrop-blur-sm flex items-center justify-center"
              style={{
                transform: 'translate(-50%, -50%) translateZ(100px)',
                animation: 'layer3Pulse 4s ease-in-out infinite 1s'
              }}
            >
              <Cloud className="w-16 h-16 text-brand-red-500" />
            </div>

            {/* Orbiting Services */}
            {[
              { icon: Server, delay: '0s' },
              { icon: Shield, delay: '5s' },
              { icon: Database, delay: '10s' },
              { icon: Zap, delay: '15s' }
            ].map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={i}
                  className="absolute w-12 h-12 bg-white/10 border-2 border-brand-red-400/50 rounded-xl flex items-center justify-center backdrop-blur-sm"
                  style={{
                    animation: `serviceOrbit 20s linear infinite ${service.delay}`
                  }}
                >
                  <IconComponent className="w-6 h-6 text-brand-red-400" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Data Flow Particles */}
        {[
          { top: '20%', left: '10%', delay: '0s' },
          { top: '50%', left: '5%', delay: '0.5s' },
          { top: '80%', left: '10%', delay: '1s' },
          { top: '30%', right: '10%', delay: '1.5s' },
          { top: '70%', right: '5%', delay: '2s' }
        ].map((flow, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-red-500 rounded-full"
            style={{
              ...flow,
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)',
              animation: `dataFlow 3s linear infinite ${flow.delay}`
            }}
          />
        ))}

        {/* Server Nodes */}
        {[
          { position: 'top-[10%] right-[15%]', delay: '0s' },
          { position: 'bottom-[15%] left-[15%]', delay: '2s' },
          { position: 'top-[60%] right-[20%]', delay: '4s' }
        ].map((node, i) => (
          <div
            key={i}
            className={`absolute ${node.position} w-20 h-24 bg-white/3 border border-white/10 rounded-lg p-2 opacity-0`}
            style={{ animation: `nodeAppear 8s ease-in-out infinite ${node.delay}` }}
          >
            <div className="flex flex-col gap-1">
              {[0, 1, 2].map((light) => (
                <div
                  key={light}
                  className="w-1.5 h-1.5 bg-brand-red-500 rounded-full"
                  style={{
                    animation: `lightBlink 1s ease-in-out infinite ${light * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Connection Lines */}
        {[
          { width: '200px', top: '30%', left: '50%', rotation: '25deg', delay: '0s' },
          { width: '250px', bottom: '35%', left: '45%', rotation: '-35deg', delay: '1s' },
          { width: '180px', top: '50%', right: '40%', rotation: '60deg', delay: '2s' }
        ].map((line, i) => (
          <div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-brand-red-400/50 to-transparent opacity-0"
            style={{
              width: line.width,
              ...line,
              transformOrigin: 'left center',
              transform: `rotate(${line.rotation})`,
              animation: `connectionPulse 4s ease-in-out infinite ${line.delay}`
            }}
          />
        ))}

        {/* Cloud Status */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-sm flex items-center gap-2">
          <div 
            className="w-2 h-2 bg-green-400 rounded-full"
            style={{ animation: 'statusPulse 2s ease-in-out infinite' }}
          />
          <span className="text-white/80 text-sm">All Systems Operational</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes platformFloat {
          0%, 100% { transform: translateY(0) rotateX(5deg) rotateY(5deg); }
          50% { transform: translateY(-20px) rotateX(5deg) rotateY(5deg); }
        }

        @keyframes layer1Pulse {
          0%, 100% { opacity: 0.8; transform: translateZ(0px) scale(1); }
          50% { opacity: 1; transform: translateZ(0px) scale(1.05); }
        }

        @keyframes layer2Pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) translateZ(50px) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) translateZ(50px) scale(1.05); }
        }

        @keyframes layer3Pulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) translateZ(100px) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) translateZ(100px) scale(1.05); }
        }

        @keyframes serviceOrbit {
          0% {
            transform: rotate(0deg) translateX(180px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(180px) rotate(-360deg);
          }
        }

        @keyframes dataFlow {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(200px, -50px);
            opacity: 0;
          }
        }

        @keyframes nodeAppear {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          20%, 80% { opacity: 1; transform: scale(1); }
        }

        @keyframes lightBlink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes connectionPulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes statusPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.7; }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @media (max-width: 968px) {
          @keyframes serviceOrbit {
            0% {
              transform: rotate(0deg) translateX(120px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(120px) rotate(-360deg);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default CloudModernizationVisual;