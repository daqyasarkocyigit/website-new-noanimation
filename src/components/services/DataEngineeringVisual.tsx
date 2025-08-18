import React from 'react';
import { Database, Server, GitBranch, Layers, Cpu, HardDrive, Activity, Zap } from 'lucide-react';

const DataEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Main Container - Mobile Optimized */}
      <div className="relative w-full h-full flex flex-col p-2 sm:p-3 lg:p-4">
        
        {/* Data Pipeline Status Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 border border-white/20 shadow-xl mb-2">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="relative">
                <div className="w-1.5 h-1.5 bg-brand-red-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white">Data Pipeline Status</h3>
                <p className="text-xs text-gray-300 hidden sm:block">Processing real-time data streams</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg sm:text-xl font-bold text-white tabular-nums">
                24.3K
              </div>
              <div className="text-xs text-gray-300 uppercase">Records/sec</div>
            </div>
          </div>
          
          {/* Processing Bar */}
          <div className="relative w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 rounded-full w-full"
              style={{ 
                background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 50%, #ef4444 100%)',
                animation: 'dataFlow 2s linear infinite'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
          </div>
          
          <div className="flex justify-between mt-1 text-xs">
            <span className="text-gray-400">Input</span>
            <span className="font-medium text-brand-red-400">Processing</span>
            <span className="text-gray-400">Output</span>
          </div>
        </div>

        {/* Data Architecture Flow - Mobile Responsive */}
        <div className="flex-1 flex flex-col lg:grid lg:grid-cols-7 gap-1.5 lg:items-center min-h-0">
          
          {/* Mobile: Stacked Layout */}
          <div className="lg:hidden space-y-2">
            {/* Data Sources */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-700/50">
              <h4 className="text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                <Database className="w-3 h-3 mr-1" />
                Data Sources
              </h4>
              <div className="grid grid-cols-3 gap-1">
                <div className="bg-gray-900/50 rounded p-1 text-center border border-gray-700/30">
                  <Server className="w-3 h-3 text-gray-400 mx-auto mb-0.5" />
                  <span className="text-xs text-gray-300">APIs</span>
                  <span className="text-xs text-gray-500 block">12</span>
                </div>
                <div className="bg-gray-900/50 rounded p-1 text-center border border-gray-700/30">
                  <Database className="w-3 h-3 text-gray-400 mx-auto mb-0.5" />
                  <span className="text-xs text-gray-300">DBs</span>
                  <span className="text-xs text-gray-500 block">8</span>
                </div>
                <div className="bg-gray-900/50 rounded p-1 text-center border border-gray-700/30">
                  <HardDrive className="w-3 h-3 text-gray-400 mx-auto mb-0.5" />
                  <span className="text-xs text-gray-300">Files</span>
                  <span className="text-xs text-gray-500 block">CSV</span>
                </div>
              </div>
            </div>

            {/* Processing Pipeline */}
            <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-2 border border-brand-red-500/30 shadow-lg">
              <h4 className="text-xs font-semibold text-brand-red-400 mb-1.5 text-center">
                Processing Pipeline
              </h4>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="bg-white/5 rounded-lg p-1 border border-white/10 mb-1">
                    <GitBranch className="w-3 h-3 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-xs text-gray-300">Extract</div>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-700 via-brand-red-500 to-gray-700 mx-1" />
                <div className="text-center">
                  <div className="bg-white/5 rounded-lg p-1 border border-white/10 mb-1">
                    <Cpu className="w-3 h-3 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-xs text-gray-300">Transform</div>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-700 via-brand-red-500 to-gray-700 mx-1" />
                <div className="text-center">
                  <div className="bg-white/5 rounded-lg p-1 border border-white/10 mb-1">
                    <Layers className="w-3 h-3 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-xs text-gray-300">Load</div>
                </div>
              </div>
            </div>

            {/* Data Warehouse */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-700/50">
              <h4 className="text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                <Database className="w-3 h-3 mr-1" />
                Data Warehouse
              </h4>
              <div className="space-y-1">
                <div className="bg-gray-900/50 rounded p-1 border border-gray-700/30">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs text-gray-300">Structured</span>
                    <span className="text-xs text-gray-500">85%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full" />
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded p-1 border border-gray-700/30">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs text-gray-300">Semi-Structured</span>
                    <span className="text-xs text-gray-500">12%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[12%] bg-gradient-to-r from-gray-500 to-gray-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Original Layout */}
          <div className="hidden lg:contents">
            {/* Data Sources - Left */}
            <div className="col-span-2">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2.5 border border-gray-700/50 h-full">
                <h4 className="text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                  <Database className="w-3 h-3 mr-1" />
                  Data Sources
                </h4>
                
                <div className="space-y-1">
                  <div className="bg-gray-900/50 rounded p-1 flex items-center justify-between border border-gray-700/30">
                    <div className="flex items-center gap-1">
                      <Server className="w-2.5 h-2.5 text-gray-400" />
                      <span className="text-xs text-gray-300">APIs</span>
                    </div>
                    <span className="text-xs text-gray-500">12</span>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-1 flex items-center justify-between border border-gray-700/30">
                    <div className="flex items-center gap-1">
                      <Database className="w-2.5 h-2.5 text-gray-400" />
                      <span className="text-xs text-gray-300">Databases</span>
                    </div>
                    <span className="text-xs text-gray-500">8</span>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-1 flex items-center justify-between border border-gray-700/30">
                    <div className="flex items-center gap-1">
                      <HardDrive className="w-2.5 h-2.5 text-gray-400" />
                      <span className="text-xs text-gray-300">Files</span>
                    </div>
                    <span className="text-xs text-gray-500">CSV/JSON</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Pipeline - Center */}
            <div className="col-span-3">
              <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-2.5 border border-brand-red-500/30 shadow-lg">
                <h4 className="text-xs font-semibold text-brand-red-400 mb-1.5 text-center">
                  Processing Pipeline
                </h4>
                
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-1.5 border border-white/10 mb-1">
                      <GitBranch className="w-3 h-3 text-brand-red-400 mx-auto" />
                    </div>
                    <div className="text-xs text-gray-300">Extract</div>
                  </div>
                  
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-700 via-brand-red-500 to-gray-700 mx-1.5" />
                  
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-1.5 border border-white/10 mb-1">
                      <Cpu className="w-3 h-3 text-brand-red-400 mx-auto" />
                    </div>
                    <div className="text-xs text-gray-300">Transform</div>
                  </div>
                  
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-700 via-brand-red-500 to-gray-700 mx-1.5" />
                  
                  <div className="text-center">
                    <div className="bg-white/5 rounded-lg p-1.5 border border-white/10 mb-1">
                      <Layers className="w-3 h-3 text-brand-red-400 mx-auto" />
                    </div>
                    <div className="text-xs text-gray-300">Load</div>
                  </div>
                </div>
                
                {/* Animated dots */}
                <div className="relative mt-1.5">
                  <div className="flex justify-between">
                    <div 
                      className="w-1 h-1 bg-brand-red-500 rounded-full"
                      style={{ animation: 'pipelinePulse 3s ease-in-out infinite 0s' }}
                    />
                    <div 
                      className="w-1 h-1 bg-brand-red-500 rounded-full"
                      style={{ animation: 'pipelinePulse 3s ease-in-out infinite 1s' }}
                    />
                    <div 
                      className="w-1 h-1 bg-brand-red-500 rounded-full"
                      style={{ animation: 'pipelinePulse 3s ease-in-out infinite 2s' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Data Warehouse - Right */}
            <div className="col-span-2">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2.5 border border-gray-700/50 h-full">
                <h4 className="text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                  <Database className="w-3 h-3 mr-1" />
                  Data Warehouse
                </h4>
                
                <div className="space-y-1">
                  <div className="bg-gray-900/50 rounded p-1 border border-gray-700/30">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs text-gray-300">Structured</span>
                      <span className="text-xs text-gray-500">85%</span>
                    </div>
                    <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-1 border border-gray-700/30">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs text-gray-300">Semi-Structured</span>
                      <span className="text-xs text-gray-500">12%</span>
                    </div>
                    <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[12%] bg-gradient-to-r from-gray-500 to-gray-600 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-1 border border-gray-700/30">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs text-gray-300">Unstructured</span>
                      <span className="text-xs text-gray-500">3%</span>
                    </div>
                    <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[3%] bg-gradient-to-r from-gray-600 to-gray-700 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics - Bottom Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2">
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Latency</div>
                <div className="text-sm sm:text-lg font-bold text-white">1.2ms</div>
                <div className="text-xs text-gray-500">avg</div>
              </div>
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Success</div>
                <div className="text-sm sm:text-lg font-bold text-white">98.7%</div>
                <div className="text-xs text-gray-500">rate</div>
              </div>
              <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Storage</div>
                <div className="text-sm sm:text-lg font-bold text-white">12.4TB</div>
                <div className="text-xs text-gray-500">total</div>
              </div>
              <Database className="w-3 h-3 sm:w-4 sm:h-4 text-brand-red-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Pipelines</div>
                <div className="text-sm sm:text-lg font-bold text-white">47</div>
                <div className="text-xs text-gray-500">active</div>
              </div>
              <GitBranch className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dataFlow {
          0% { 
            transform: translateX(-100%);
          }
          100% { 
            transform: translateX(0);
          }
        }
        
        @keyframes pipelinePulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default DataEngineeringVisual;
