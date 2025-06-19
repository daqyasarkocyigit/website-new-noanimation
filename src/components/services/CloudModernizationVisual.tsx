import React, { useEffect, useState } from 'react';
import { Cloud, Server, Shield, Database, Globe, Activity, TrendingUp, ChevronRight } from 'lucide-react';

const CloudModernizationVisual: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Main Container - Simplified for mobile */}
      <div className="relative w-full h-full flex flex-col justify-center items-center p-4">
        
        {/* Migration Progress Header */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-red-500 rounded-full animate-pulse" />
                <h3 className="text-sm font-semibold text-white">Cloud Migration</h3>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-white">{progress}%</div>
                <div className="text-xs text-gray-300">Complete</div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="relative w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Migration Flow */}
        <div className="w-full max-w-sm mx-auto mb-6">
          {/* On-Premise */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 mb-3 border border-gray-700/50">
            <h4 className="text-xs font-semibold text-gray-300 mb-2 text-center flex items-center justify-center">
              <Server className="w-3 h-3 mr-1" />
              On-Premise
            </h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-900/50 rounded p-2 text-center">
                <Database className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Database</div>
              </div>
              <div className="bg-gray-900/50 rounded p-2 text-center">
                <Server className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Servers</div>
              </div>
              <div className="bg-gray-900/50 rounded p-2 text-center">
                <Globe className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Storage</div>
              </div>
            </div>
          </div>

          {/* Migration Arrow */}
          <div className="flex justify-center mb-3">
            <div className="bg-gray-900 rounded-full p-2 border-2 border-brand-red-500">
              <ChevronRight className="w-4 h-4 text-brand-red-500" />
            </div>
          </div>

          {/* Cloud Platform */}
          <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-3 border border-brand-red-500/30">
            <h4 className="text-xs font-semibold text-brand-red-400 mb-2 text-center flex items-center justify-center">
              <Cloud className="w-3 h-3 mr-1" />
              Cloud Platform
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 rounded p-2 border border-white/10 text-center">
                <Shield className="w-4 h-4 text-brand-red-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Security</div>
              </div>
              <div className="bg-white/5 rounded p-2 border border-white/10 text-center">
                <Globe className="w-4 h-4 text-brand-red-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">CDN</div>
              </div>
              <div className="bg-white/5 rounded p-2 border border-white/10 text-center">
                <Activity className="w-4 h-4 text-brand-red-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Auto-Scale</div>
              </div>
              <div className="bg-white/5 rounded p-2 border border-white/10 text-center">
                <TrendingUp className="w-4 h-4 text-brand-red-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Monitor</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">42%</div>
              <div className="text-xs text-gray-400">Cost Savings</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">3.2x</div>
              <div className="text-xs text-gray-400">Performance</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">99.99%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudModernizationVisual;