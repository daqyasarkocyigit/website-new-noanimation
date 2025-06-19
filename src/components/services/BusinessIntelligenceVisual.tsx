import React from 'react';
import { TrendingUp, BarChart3, Target, Zap, CheckCircle, AlertCircle } from 'lucide-react';

const BusinessIntelligenceVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridShift 20s linear infinite'
          }}
        />
      </div>

      {/* Analytics Container */}
      <div className="relative w-full h-full flex items-center justify-center p-8">
        {/* Central Intelligence Hub */}
        <div className="relative z-10">
          <div 
            className="w-40 h-40 bg-gradient-to-br from-brand-red-500 to-brand-red-600 rounded-full flex flex-col items-center justify-center shadow-2xl"
            style={{
              boxShadow: '0 0 80px rgba(239, 68, 68, 0.4)',
              animation: 'hubPulse 3s ease-in-out infinite'
            }}
          >
            <div className="text-white text-center">
              <div 
                className="text-4xl font-bold leading-none"
                style={{ animation: 'valueChange 4s steps(1) infinite' }}
              >
                87%
              </div>
              <div className="text-xs opacity-90 mt-1">EFFICIENCY</div>
            </div>
          </div>
        </div>

        {/* Orbiting Metrics - First Orbit */}
        <div 
          className="absolute w-full h-full max-w-96 max-h-96"
          style={{ animation: 'orbitRotate 30s linear infinite' }}
        >
          {/* Growth Metric */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white/5 border-2 border-white/20 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm hover:bg-white/10 hover:border-brand-red-500 transition-all duration-300">
            <TrendingUp className="w-6 h-6 text-brand-red-400 mb-1" />
            <div className="text-white text-sm font-semibold">+24%</div>
            <div className="text-white/60 text-xs">Growth</div>
          </div>

          {/* Accuracy Metric */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white/5 border-2 border-white/20 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm hover:bg-white/10 hover:border-brand-red-500 transition-all duration-300">
            <CheckCircle className="w-6 h-6 text-brand-red-400 mb-1" />
            <div className="text-white text-sm font-semibold">98.5%</div>
            <div className="text-white/60 text-xs">Accuracy</div>
          </div>
        </div>

        {/* Orbiting Metrics - Second Orbit */}
        <div 
          className="absolute w-full h-full max-w-[500px] max-h-[500px]"
          style={{ animation: 'orbitRotate 40s linear infinite reverse' }}
        >
          {/* Data Points Metric */}
          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-white/5 border-2 border-white/20 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm hover:bg-white/10 hover:border-brand-red-500 transition-all duration-300">
            <BarChart3 className="w-6 h-6 text-brand-red-400 mb-1" />
            <div className="text-white text-sm font-semibold">156K</div>
            <div className="text-white/60 text-xs">Data Points</div>
          </div>

          {/* Response Time Metric */}
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-white/5 border-2 border-white/20 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm hover:bg-white/10 hover:border-brand-red-500 transition-all duration-300">
            <Zap className="w-6 h-6 text-brand-red-400 mb-1" />
            <div className="text-white text-sm font-semibold">0.3s</div>
            <div className="text-white/60 text-xs">Response</div>
          </div>
        </div>

        {/* Data Flow Lines */}
        {[45, 135, 225, 315].map((rotation, i) => (
          <div
            key={i}
            className="absolute w-48 h-0.5 bg-gradient-to-r from-transparent via-brand-red-500 to-transparent transform-gpu"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: 'left center',
              transform: `translate(-96px, -1px) rotate(${rotation}deg)`,
              animation: `flowPulse 2s ease-in-out infinite ${i * 0.5}s`
            }}
          />
        ))}

        {/* Floating Data Points */}
        {[
          { top: '20%', left: '15%', delay: '0s' },
          { top: '70%', left: '20%', delay: '2s' },
          { top: '30%', right: '15%', delay: '4s' },
          { bottom: '25%', right: '20%', delay: '6s' }
        ].map((point, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-brand-red-500 rounded-full"
            style={{
              ...point,
              animation: `dataFloat 10s linear infinite ${point.delay}`
            }}
          />
        ))}

        {/* Insight Cards */}
        <div 
          className="absolute top-[10%] right-[10%] bg-white/3 border border-white/10 rounded-lg p-3 backdrop-blur-sm opacity-0"
          style={{ animation: 'insightAppear 8s ease-in-out infinite 0s' }}
        >
          <div className="text-brand-red-400 text-xs mb-1">ROI Increase</div>
          <div className="text-white text-xl font-semibold">3.2x</div>
        </div>

        <div 
          className="absolute bottom-[15%] left-[10%] bg-white/3 border border-white/10 rounded-lg p-3 backdrop-blur-sm opacity-0"
          style={{ animation: 'insightAppear 8s ease-in-out infinite 4s' }}
        >
          <div className="text-brand-red-400 text-xs mb-1">Cost Reduction</div>
          <div className="text-white text-xl font-semibold">-42%</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes hubPulse {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 0 80px rgba(239, 68, 68, 0.4); 
          }
          50% { 
            transform: scale(1.05); 
            box-shadow: 0 0 100px rgba(239, 68, 68, 0.6); 
          }
        }

        @keyframes valueChange {
          0% { content: "87%"; }
          25% { content: "92%"; }
          50% { content: "78%"; }
          75% { content: "95%"; }
        }

        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes flowPulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes dataFloat {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(50px, -50px); opacity: 0; }
        }

        @keyframes gridShift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes insightAppear {
          0%, 100% { opacity: 0; transform: translateY(10px); }
          20%, 80% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default BusinessIntelligenceVisual;