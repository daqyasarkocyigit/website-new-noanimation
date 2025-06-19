import React, { useEffect, useState } from 'react';
import { Database, Cpu, TrendingUp, Zap, Server, Cloud, Lock, BarChart3 } from 'lucide-react';

const DataEngineeringVisual: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center p-4">
      {/* Main Container with max width for larger screens */}
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-red-600/20 rounded-2xl mb-3">
            <Database className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
          </div>
          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
            Data Pipeline Architecture
          </h3>
          <p className="text-sm md:text-base text-slate-400">
            Real-time processing at scale
          </p>
        </div>

        {/* Pipeline Flow - Works on all screens */}
        <div className="relative mb-6 md:mb-8">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {/* Ingestion */}
            <div className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border transition-all duration-500 ${
              activeFlow === 0 ? 'border-red-500/50 shadow-lg shadow-red-500/20' : 'border-slate-700'
            }`}>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-2 md:mb-3">
                  <Server className="w-5 h-5 md:w-6 md:h-6 text-slate-300" />
                </div>
                <h4 className="text-xs md:text-sm font-semibold text-white mb-1">Ingestion</h4>
                <p className="text-[10px] md:text-xs text-slate-500">Multiple Sources</p>
                <div className="mt-2 md:mt-3 text-base md:text-2xl font-bold text-red-500">
                  24K<span className="text-xs md:text-sm text-slate-500 font-normal">/sec</span>
                </div>
              </div>
            </div>

            {/* Processing */}
            <div className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border transition-all duration-500 ${
              activeFlow === 1 ? 'border-red-500/50 shadow-lg shadow-red-500/20' : 'border-slate-700'
            }`}>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-2 md:mb-3">
                  <Cpu className="w-5 h-5 md:w-6 md:h-6 text-slate-300" />
                </div>
                <h4 className="text-xs md:text-sm font-semibold text-white mb-1">Processing</h4>
                <p className="text-[10px] md:text-xs text-slate-500">Transform & Clean</p>
                <div className="mt-2 md:mt-3 text-base md:text-2xl font-bold text-red-500">
                  99.8<span className="text-xs md:text-sm text-slate-500 font-normal">%</span>
                </div>
              </div>
            </div>

            {/* Storage */}
            <div className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border transition-all duration-500 ${
              activeFlow === 2 ? 'border-red-500/50 shadow-lg shadow-red-500/20' : 'border-slate-700'
            }`}>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-2 md:mb-3">
                  <Cloud className="w-5 h-5 md:w-6 md:h-6 text-slate-300" />
                </div>
                <h4 className="text-xs md:text-sm font-semibold text-white mb-1">Storage</h4>
                <p className="text-[10px] md:text-xs text-slate-500">Data Warehouse</p>
                <div className="mt-2 md:mt-3 text-base md:text-2xl font-bold text-red-500">
                  12.4<span className="text-xs md:text-sm text-slate-500 font-normal">TB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Indicators - Hidden on very small screens */}
          <div className="hidden sm:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 justify-between px-[25%]">
            <div className={`h-0.5 w-20 md:w-24 transition-all duration-500 ${
              activeFlow >= 1 ? 'bg-red-500' : 'bg-slate-700'
            }`} />
            <div className={`h-0.5 w-20 md:w-24 transition-all duration-500 ${
              activeFlow >= 2 ? 'bg-red-500' : 'bg-slate-700'
            }`} />
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
              <span className="text-xs text-slate-500">Speed</span>
            </div>
            <div className="text-lg md:text-xl font-bold text-white">1.2ms</div>
            <div className="text-[10px] md:text-xs text-slate-500">avg latency</div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
              <span className="text-xs text-slate-500">Uptime</span>
            </div>
            <div className="text-lg md:text-xl font-bold text-white">99.9%</div>
            <div className="text-[10px] md:text-xs text-slate-500">reliability</div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
              <Lock className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
              <span className="text-xs text-slate-500">Security</span>
            </div>
            <div className="text-lg md:text-xl font-bold text-white">AES-256</div>
            <div className="text-[10px] md:text-xs text-slate-500">encryption</div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
              <span className="text-xs text-slate-500">Scale</span>
            </div>
            <div className="text-lg md:text-xl font-bold text-white">Auto</div>
            <div className="text-[10px] md:text-xs text-slate-500">scaling</div>
          </div>
        </div>

        {/* Live Status Bar */}
        <div className="mt-6 md:mt-8 bg-slate-800/30 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm text-slate-400">System Status: Operational</span>
            </div>
            <span className="text-xs md:text-sm text-slate-500">
              Last updated: {new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringVisual;
