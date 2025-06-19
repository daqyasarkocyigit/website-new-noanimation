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
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Container - Adjusted padding and layout */}
      <div className="relative w-full h-full flex flex-col p-6">
        
        {/* Cloud Migration Progress Card - More compact */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-xl mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 bg-brand-red-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Cloud Migration Progress</h3>
                <p className="text-xs text-gray-300">Migrating infrastructure to cloud</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-white tabular-nums">
                {progress}%
              </div>
              <div className="text-xs text-gray-300 uppercase">Complete</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative w-full h-3 bg-gray-700/50 rounded-full overflow-hidden mb-2">
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

        {/* Infrastructure Migration Flow - Adjusted for better visibility */}
        <div className="flex-1 flex items-center min-h-0">
          <div className="w-full grid grid-cols-7 gap-3 items-center">
            
            {/* On-Premise - Left */}
            <div className="col-span-3">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                  <Server className="w-4 h-4 mr-2" />
                  On-Premise Infrastructure
                </h4>
                
                <div className="space-y-2">
                  <div className="bg-gray-900/50 rounded p-2 flex items-center justify-between border border-gray-700/30">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-300">Legacy Database</span>
                    </div>
                    <span className="text-xs text-gray-500">2.1TB</span>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-2 flex items-center justify-between border border-gray-700/30">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-300">App Servers</span>
                    </div>
                    <span className="text-xs text-gray-500">12 Units</span>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-2 flex items-center justify-between border border-gray-700/30">
                    <div className="flex items-center gap-2">
                      <Network className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-300">Storage</span>
                    </div>
                    <span className="text-xs text-gray-500">0.9TB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Migration Arrow - Center */}
            <div className="col-span-1 flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-0.5 bg-gradient-to-r from-gray-700 via-brand-red-500 to-gray-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full p-2 border-2 border-brand-red-500">
                  <ChevronRight className="w-4 h-4 text-brand-red-500" />
                </div>
                {/* Animated dot */}
                <div 
                  className="absolute w-2 h-2 bg-brand-red-500 rounded-full -top-1 left-0"
                  style={{ animation: 'flowRight 2s linear infinite' }}
                />
              </div>
            </div>

            {/* Cloud Platform - Right */}
            <div className="col-span-3">
              <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-4 border border-brand-red-500/30 shadow-lg">
                <h4 className="text-sm font-semibold text-brand-red-400 mb-3 flex items-center">
                  <Cloud className="w-4 h-4 mr-2" />
                  Cloud Platform
                </h4>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/5 rounded p-2 border border-white/10">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-brand-red-400" />
                      <div>
                        <div className="text-xs text-gray-300">Security</div>
                        <div className="text-xs text-gray-500">Enterprise</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded p-2 border border-white/10">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-brand-red-400" />
                      <div>
                        <div className="text-xs text-gray-300">Global CDN</div>
                        <div className="text-xs text-gray-500">Active</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded p-2 border border-white/10">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-brand-red-400" />
                      <div>
                        <div className="text-xs text-gray-300">Auto-Scale</div>
                        <div className="text-xs text-gray-500">Enabled</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded p-2 border border-white/10">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-brand-red-400" />
                      <div>
                        <div className="text-xs text-gray-300">Monitor</div>
                        <div className="text-xs text-gray-500">24/7</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics - Bottom Bar - More compact */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-white/5 backdrop-blur-sm rounded p-3 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Cost Savings</div>
                <div className="text-lg font-bold text-white">42%</div>
                <div className="text-xs text-gray-500">$2.1M/year</div>
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-3 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Performance</div>
                <div className="text-lg font-bold text-white">3.2x</div>
                <div className="text-xs text-gray-500">Faster</div>
              </div>
              <Activity className="w-5 h-5 text-brand-red-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-3 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Uptime</div>
                <div className="text-lg font-bold text-white">99.99%</div>
                <div className="text-xs text-gray-500">SLA</div>
              </div>
              <Shield className="w-5 h-5 text-blue-500" />
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
            transform: translateX(64px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CloudModernizationVisual;