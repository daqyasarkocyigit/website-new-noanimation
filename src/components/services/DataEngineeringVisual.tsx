import React from 'react';
import { Database, BarChart3, Folder, Calendar, CheckCircle } from 'lucide-react';

const DataEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 10s linear infinite'
          }}
        />
      </div>

      {/* Data Visual Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Central Node */}
        <div className="relative z-10">
          <div 
            className="w-32 h-32 bg-gradient-to-br from-brand-red-500 to-brand-red-600 rounded-full flex items-center justify-center shadow-2xl"
            style={{
              boxShadow: '0 0 60px rgba(239, 68, 68, 0.5)',
              animation: 'pulse 3s ease-in-out infinite'
            }}
          >
            <Database className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Orbiting Elements */}
        <div 
          className="absolute w-80 h-80 border border-white/10 rounded-full"
          style={{ animation: 'rotate 20s linear infinite' }}
        >
          {/* Data Nodes */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/10 border-2 border-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 border-2 border-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Folder className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/10 border-2 border-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 border-2 border-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Calendar className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Second Orbit */}
        <div 
          className="absolute w-96 h-96 border border-white/5 rounded-full"
          style={{ animation: 'rotate 30s linear infinite reverse' }}
        />

        {/* Third Orbit */}
        <div 
          className="absolute w-[500px] h-[500px] border border-white/5 rounded-full"
          style={{ animation: 'rotate 40s linear infinite' }}
        />

        {/* Data Streams */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-24 bg-gradient-to-b from-transparent via-brand-red-500 to-transparent opacity-0"
            style={{
              top: `${20 + i * 15}%`,
              left: `${20 + i * 20}%`,
              animation: `stream 3s ease-in-out infinite ${i * 0.5}s`
            }}
          />
        ))}

        {/* Floating Particles */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-red-500 rounded-full opacity-60"
            style={{
              top: `${10 + i * 20}%`,
              left: `${10 + i * 25}%`,
              animation: `float 10s ease-in-out infinite ${i * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes stream {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(20px); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(30px, -30px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default DataEngineeringVisual;