import React, { useEffect, useState } from 'react';
import { Cloud, Server, Shield, Database, Globe, Network, Activity, Zap, ChevronRight, TrendingUp } from 'lucide-react';

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
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
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

      {/* Main Container - Mobile Optimized */}
      <div className="relative w-full h-full flex flex-col justify-between p-2 sm:p-3 lg:p-4">
        
        {/* Cloud Migration Progress Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20 shadow-xl">
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-red-500 rounded-full animate-pulse" />
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white">Cloud Migration Progress</h3>
                <p className="text-xs text-gray-300 hidden sm:block">Infrastructure migration</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg sm:text-xl font-bold text-white tabular-nums">
                {progress}%
              </div>
              <div className="text-xs text-gray-300 uppercase">Complete</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative w-full h-1.5 sm:h-2 bg-gray-700/50 rounded-full overflow-hidden mb-1.5 sm:mb-2">
            <div 
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
          </div>
          
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">0TB</span>
            <span className="font-medium text-brand-red-400">
              {dataTransferred.toFixed(1)}TB / 3TB
            </span>
          </div>
        </div>

        {/* Infrastructure Migration Flow - Mobile Responsive */}
        <div className="flex-1 flex items-center py-2 sm:py-4">
          <div className="w-full">
            {/* Mobile: Vertical Layout */}
            <div className="space-y-2 sm:space-y-3">
              {/* On-Premise */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-700/50">
                <h4 className="text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                  <Server className="w-3 h-3 mr-1" />
                  On-Premise
                </h4>
                <div className="grid grid-cols-3 gap-1">
                  <div className="bg-gray-900/50 rounded p-1 text-center border border-gray-700/30">
                    <Database className="w-3 h-3 text-gray-400 mx-auto mb-0.5" />
                    <div className="text-xs text-gray-300">Database</div>
                    <div className="text-xs text-gray-500">2.1TB</div>
                  </div>
                  <div className="bg-gray-900/50 rounded p-1 text-center border border-gray-700/30">
                    <Server className="w-3 h-3 text-gray-400 mx-auto mb-0.5" />
                    <div className="text-xs text-gray-300">Servers</div>
                    <div className="text-xs text-gray-500">12</div>
                  </div>
                  <div className="bg-gray-900/50 rounded p-1 text-center border border-gray-700/30">
                    <Network className="w-3 h-3 text-gray-400 mx-auto mb-0.5" />
                    <div className="text-xs text-gray-300">Storage</div>
                    <div className="text-xs text-gray-500">0.9TB</div>
                  </div>
                </div>
              </div>

              {/* Migration Arrow */}
              <div className="flex justify-center">
                <div className="bg-gray-900 rounded-full p-2 border-2 border-brand-red-500">
                  <ChevronRight className="w-4 h-4 text-brand-red-500 rotate-90" />
                </div>
              </div>

              {/* Cloud Platform */}
              <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-2 border border-brand-red-500/30 shadow-lg">
                <h4 className="text-xs font-semibold text-brand-red-400 mb-1.5 flex items-center">
                  <Cloud className="w-3 h-3 mr-1" />
                  Cloud Platform
                </h4>
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-white/5 rounded p-1 border border-white/10">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-brand-red-400" />
                      <div className="text-xs text-gray-300">Security</div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded p-1 border border-white/10">
                    <div className="flex items-center gap-1">
                      <Globe className="w-3 h-3 text-brand-red-400" />
                      <div className="text-xs text-gray-300">CDN</div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded p-1 border border-white/10">
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-brand-red-400" />
                      <div className="text-xs text-gray-300">Auto-Scale</div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded p-1 border border-white/10">
                    <div className="flex items-center gap-1">
                      <Activity className="w-3 h-3 text-brand-red-400" />
                      <div className="text-xs text-gray-300">Monitor</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics - Bottom section */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Cost Savings</div>
                <div className="text-sm font-bold text-white">42%</div>
                <div className="text-xs text-gray-500">$2.1M/year</div>
              </div>
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Performance</div>
                <div className="text-sm font-bold text-white">3.2x</div>
                <div className="text-xs text-gray-500">Faster</div>
              </div>
              <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-brand-red-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Uptime</div>
                <div className="text-sm font-bold text-white">99.99%</div>
                <div className="text-xs text-gray-500">SLA</div>
              </div>
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowRight {
          0% { 
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateX(48px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CloudModernizationVisual;