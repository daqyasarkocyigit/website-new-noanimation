import React from 'react';
import { Database, Server, GitBranch, Layers, Cpu, HardDrive, Activity, Zap } from 'lucide-react';

const DataEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative flex flex-col">
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

      {/* Main Container - Full height with proper spacing */}
      <div className="relative w-full h-full flex flex-col p-2 sm:p-3 md:p-4">
        
        {/* Data Pipeline Status Card - Compact */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 border border-white/20 shadow-xl mb-2 flex-shrink-0">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 bg-brand-red-500 rounded-full animate-pulse" />
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-semibold text-white truncate">Data Pipeline</h3>
                <p className="text-[10px] sm:text-xs text-gray-300 hidden sm:block">Real-time processing</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-base sm:text-xl font-bold text-white tabular-nums">24.3K</div>
              <div className="text-[10px] sm:text-xs text-gray-300">Records/sec</div>
            </div>
          </div>
          
          {/* Processing Bar */}
          <div className="relative w-full h-1 sm:h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 rounded-full w-full h-full"
              style={{ 
                background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 50%, #ef4444 100%)',
                animation: 'dataFlow 2s linear infinite'
              }}
            />
          </div>
        </div>

        {/* Mobile Layout - Optimized for small screens */}
        <div className="sm:hidden flex-1 flex flex-col gap-2 min-h-0 overflow-y-auto">
          {/* Data Sources - Compact Grid */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-700/50 flex-shrink-0">
            <h4 className="text-[11px] font-semibold text-gray-300 mb-1.5 flex items-center">
              <Database className="w-2.5 h-2.5 mr-1" />
              Data Sources
            </h4>
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-gray-900/50 rounded p-1 text-center border border-gray-700/30">
                <Server className="w-3 h-3 text-gray-400 mx-auto mb-0.5" />
                <div className="text-[10px] text-gray-300">APIs</div>
                <div className="text-[10px] text-gray-500 font-semibold">12</div>
              </div>
              <div className="bg-gray-900/50 rounded p-1 text-center border border-gray-700/30">
                <Database className="w-3 h-3 text-gray-400 mx-auto mb-0.5" />
                <div className="text-[10px] text-gray-300">DBs</div>
                <div className="text-[10px] text-gray-500 font-semibold">8</div>
              </div>
              <div className="bg-gray-900/50 rounded p-1 text-center border border-gray-700/30">
                <HardDrive className="w-3 h-3 text-gray-400 mx-auto mb-0.5" />
                <div className="text-[10px] text-gray-300">Files</div>
                <div className="text-[10px] text-gray-500 font-semibold">CSV</div>
              </div>
            </div>
          </div>

          {/* ETL Pipeline - Ultra Compact */}
          <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-2 border border-brand-red-500/30 flex-shrink-0">
            <h4 className="text-[11px] font-semibold text-brand-red-400 mb-1.5 text-center">ETL Pipeline</h4>
            <div className="flex justify-between items-center px-1">
              <div className="text-center flex-1">
                <GitBranch className="w-3 h-3 text-brand-red-400 mx-auto mb-0.5" />
                <div className="text-[10px] text-gray-300">Extract</div>
              </div>
              <div className="text-brand-red-500 text-xs px-1">→</div>
              <div className="text-center flex-1">
                <Cpu className="w-3 h-3 text-brand-red-400 mx-auto mb-0.5" />
                <div className="text-[10px] text-gray-300">Transform</div>
              </div>
              <div className="text-brand-red-500 text-xs px-1">→</div>
              <div className="text-center flex-1">
                <Layers className="w-3 h-3 text-brand-red-400 mx-auto mb-0.5" />
                <div className="text-[10px] text-gray-300">Load</div>
              </div>
            </div>
          </div>

          {/* Data Warehouse - Horizontal Bars */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-700/50 flex-shrink-0">
            <h4 className="text-[11px] font-semibold text-gray-300 mb-1.5 flex items-center">
              <Database className="w-2.5 h-2.5 mr-1" />
              Data Warehouse
            </h4>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-300">Structured</span>
                <span className="text-[10px] text-gray-500 font-semibold">85%</span>
              </div>
              <div className="w-full h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-brand-red-500 rounded-full" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-300">Semi-Structured</span>
                <span className="text-[10px] text-gray-500 font-semibold">12%</span>
              </div>
              <div className="w-full h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[12%] bg-gray-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Tablet/Desktop Layout */}
        <div className="hidden sm:flex flex-1 gap-2 md:gap-3 items-stretch min-h-0">
          {/* Data Sources */}
          <div className="flex-1 min-w-0">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-gray-700/50 h-full flex flex-col">
              <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center">
                <Database className="w-3 h-3 mr-1" />
                Data Sources
              </h4>
              
              <div className="space-y-1 md:space-y-1.5 flex-1">
                <div className="bg-gray-900/50 rounded p-1 md:p-1.5 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <Server className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" />
                    <span className="text-xs text-gray-300">APIs</span>
                  </div>
                  <span className="text-xs text-gray-500">12</span>
                </div>
                
                <div className="bg-gray-900/50 rounded p-1 md:p-1.5 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <Database className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" />
                    <span className="text-xs text-gray-300">Databases</span>
                  </div>
                  <span className="text-xs text-gray-500">8</span>
                </div>
                
                <div className="bg-gray-900/50 rounded p-1 md:p-1.5 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <HardDrive className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" />
                    <span className="text-xs text-gray-300">Files</span>
                  </div>
                  <span className="text-xs text-gray-500">CSV/JSON</span>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Pipeline */}
          <div className="flex-1 min-w-0">
            <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-brand-red-500/30 shadow-lg h-full flex flex-col">
              <h4 className="text-xs font-semibold text-brand-red-400 mb-2 text-center">
                Processing Pipeline
              </h4>
              
              <div className="flex items-center justify-between flex-1">
                <div className="text-center">
                  <div className="bg-white/5 rounded-lg p-1.5 md:p-2 border border-white/10 mb-1">
                    <GitBranch className="w-3 h-3 md:w-4 md:h-4 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-300">Extract</div>
                </div>
                
                <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-700 via-brand-red-500 to-gray-700 mx-1 md:mx-2" />
                
                <div className="text-center">
                  <div className="bg-white/5 rounded-lg p-1.5 md:p-2 border border-white/10 mb-1">
                    <Cpu className="w-3 h-3 md:w-4 md:h-4 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-300">Transform</div>
                </div>
                
                <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-700 via-brand-red-500 to-gray-700 mx-1 md:mx-2" />
                
                <div className="text-center">
                  <div className="bg-white/5 rounded-lg p-1.5 md:p-2 border border-white/10 mb-1">
                    <Layers className="w-3 h-3 md:w-4 md:h-4 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-300">Load</div>
                </div>
              </div>
              
              {/* Animated dots - only on larger screens */}
              <div className="relative mt-2 hidden md:block">
                <div className="flex justify-between px-4">
                  {[0, 1, 2].map((i) => (
                    <div 
                      key={i}
                      className="w-1 h-1 bg-brand-red-500 rounded-full"
                      style={{ animation: `pipelinePulse 3s ease-in-out infinite ${i}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Warehouse */}
          <div className="flex-1 min-w-0">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-gray-700/50 h-full flex flex-col">
              <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center">
                <Database className="w-3 h-3 mr-1" />
                Data Warehouse
              </h4>
              
              <div className="space-y-1 md:space-y-1.5 flex-1">
                <div className="bg-gray-900/50 rounded p-1 md:p-1.5 border border-gray-700/30">
                  <div className="flex items-center justify-between mb-0.5 md:mb-1">
                    <span className="text-xs text-gray-300">Structured</span>
                    <span className="text-xs text-gray-500">85%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full" />
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded p-1 md:p-1.5 border border-gray-700/30">
                  <div className="flex items-center justify-between mb-0.5 md:mb-1">
                    <span className="text-xs text-gray-300">Semi-Structured</span>
                    <span className="text-xs text-gray-500">12%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[12%] bg-gradient-to-r from-gray-500 to-gray-600 rounded-full" />
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded p-1 md:p-1.5 border border-gray-700/30">
                  <div className="flex items-center justify-between mb-0.5 md:mb-1">
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

        {/* Key Metrics - Super Compact on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-1.5 md:gap-2 mt-2 flex-shrink-0">
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2 border border-white/10">
            <div className="flex items-center justify-between gap-1">
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-gray-400">Latency</div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-white">1.2ms</div>
                <div className="text-[10px] sm:text-xs text-gray-500">avg</div>
              </div>
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-yellow-500 flex-shrink-0" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2 border border-white/10">
            <div className="flex items-center justify-between gap-1">
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-gray-400">Success</div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-white">98.7%</div>
                <div className="text-[10px] sm:text-xs text-gray-500">rate</div>
              </div>
              <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2 border border-white/10">
            <div className="flex items-center justify-between gap-1">
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-gray-400">Storage</div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-white">12.4TB</div>
                <div className="text-[10px] sm:text-xs text-gray-500">total</div>
              </div>
              <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-brand-red-500 flex-shrink-0" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2 border border-white/10">
            <div className="flex items-center justify-between gap-1">
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-gray-400">Pipelines</div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-white">47</div>
                <div className="text-[10px] sm:text-xs text-gray-500">active</div>
              </div>
              <GitBranch className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-blue-500 flex-shrink-0" />
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
