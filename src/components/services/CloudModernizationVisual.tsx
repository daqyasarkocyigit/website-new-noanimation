import React, { useEffect, useState } from 'react';
import { Cloud, Server, Shield, Database, Globe, Network, Activity, Zap, ChevronRight, TrendingUp, Lock, Cpu } from 'lucide-react';

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

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col p-6">
        
        {/* Cloud Migration Progress Card - Enhanced */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-2xl mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-brand-red-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-brand-red-500 rounded-full animate-ping" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Cloud Migration Progress</h3>
                <p className="text-sm text-gray-300">Migrating infrastructure to cloud</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-white tabular-nums">
                {progress}%
              </div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Complete</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative w-full h-5 bg-gray-700/50 rounded-full overflow-hidden shadow-inner">
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
          
          <div className="flex justify-between mt-3">
            <span className="text-sm text-gray-400">0TB</span>
            <span className="text-sm font-medium text-brand-red-400">
              {dataTransferred.toFixed(1)}TB / 3TB
            </span>
          </div>
        </div>

        {/* Professional Cloud Architecture */}
        <div className="flex-1 grid grid-cols-5 gap-4 items-center">
          
          {/* On-Premise Infrastructure */}
          <div className="col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                <Server className="w-4 h-4 mr-2" />
                On-Premise Infrastructure
              </h4>
              
              <div className="space-y-2">
                <div className="bg-gray-900/50 rounded-lg p-2.5 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-300">Legacy Database</span>
                  </div>
                  <span className="text-xs text-gray-500">2.1TB</span>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-2.5 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-300">Application Servers</span>
                  </div>
                  <span className="text-xs text-gray-500">12 Units</span>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-2.5 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-2">
                    <Network className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-300">Network Storage</span>
                  </div>
                  <span className="text-xs text-gray-500">0.9TB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Migration Flow */}
          <div className="col-span-1 flex items-center justify-center">
            <div className="relative">
              <div className="w-px h-24 bg-gradient-to-b from-gray-700 via-brand-red-500 to-gray-700" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full p-2 border-2 border-brand-red-500">
                <ChevronRight className="w-5 h-5 text-brand-red-500" />
              </div>
              {/* Animated dots */}
              <div 
                className="absolute w-2 h-2 bg-brand-red-500 rounded-full top-0 -left-1"
                style={{ animation: 'flowDown 2s linear infinite' }}
              />
              <div 
                className="absolute w-2 h-2 bg-brand-red-500 rounded-full top-0 -left-1"
                style={{ animation: 'flowDown 2s linear infinite 0.7s' }}
              />
              <div 
                className="absolute w-2 h-2 bg-brand-red-500 rounded-full top-0 -left-1"
                style={{ animation: 'flowDown 2s linear infinite 1.4s' }}
              />
            </div>
          </div>

          {/* Cloud Infrastructure */}
          <div className="col-span-2">
            <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-xl p-4 border border-brand-red-500/30 shadow-xl">
              <h4 className="text-sm font-semibold text-brand-red-400 mb-3 flex items-center">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud Platform
              </h4>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 rounded-lg p-2.5 border border-white/10">
                  <Shield className="w-4 h-4 text-brand-red-400 mb-1" />
                  <div className="text-xs text-gray-300">Security</div>
                  <div className="text-xs text-gray-500">Enterprise</div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-2.5 border border-white/10">
                  <Globe className="w-4 h-4 text-brand-red-400 mb-1" />
                  <div className="text-xs text-gray-300">Global CDN</div>
                  <div className="text-xs text-gray-500">Active</div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-2.5 border border-white/10">
                  <Zap className="w-4 h-4 text-brand-red-400 mb-1" />
                  <div className="text-xs text-gray-300">Auto-Scale</div>
                  <div className="text-xs text-gray-500">Enabled</div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-2.5 border border-white/10">
                  <Activity className="w-4 h-4 text-brand-red-400 mb-1" />
                  <div className="text-xs text-gray-300">Monitor</div>
                  <div className="text-xs text-gray-500">24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-400">Cost Savings</span>
              <TrendingUp className="w-3 h-3 text-green-500" />
            </div>
            <div className="text-xl font-bold text-white">42%</div>
            <div className="text-xs text-gray-500">$2.1M/year</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-400">Performance</span>
              <Cpu className="w-3 h-3 text-brand-red-500" />
            </div>
            <div className="text-xl font-bold text-white">3.2x</div>
            <div className="text-xs text-gray-500">Faster</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-400">Uptime</span>
              <Lock className="w-3 h-3 text-blue-500" />
            </div>
            <div className="text-xl font-bold text-white">99.99%</div>
            <div className="text-xs text-gray-500">SLA</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowDown {
          0% { 
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateY(96px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CloudModernizationVisual;
