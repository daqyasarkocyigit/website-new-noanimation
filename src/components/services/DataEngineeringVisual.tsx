import React from 'react';
import { Database, Server, GitBranch, Layers, Cpu, HardDrive, Activity, Zap } from 'lucide-react';

const DataEngineeringVisual: React.FC = () => {
  // Detect if viewport is very small
  const isVerySmallScreen = typeof window !== 'undefined' && window.innerWidth < 400;
  
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative flex flex-col">
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

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col p-2 xs:p-2.5 sm:p-3 lg:p-4">
        
        {/* Header Card - Ultra Compact */}
        <div className="bg-white/10 backdrop-blur-sm rounded-md sm:rounded-lg p-1.5 xs:p-2 sm:p-2.5 border border-white/20 shadow-lg mb-1.5 sm:mb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 xs:gap-1.5">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-brand-red-500 rounded-full animate-pulse" />
              <div className="min-w-0">
                <h3 className="text-[11px] xs:text-xs sm:text-sm font-semibold text-white">Data Pipeline</h3>
                <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-300 hidden xs:block">Real-time processing</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-white">24.3K</div>
              <div className="text-[9px] xs:text-[10px] sm:text-xs text-gray-300">Records/sec</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-1 xs:mt-1.5 relative w-full h-0.5 xs:h-1 sm:h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 w-full h-full rounded-full"
              style={{ 
                background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 50%, #ef4444 100%)',
                animation: 'dataFlow 2s linear infinite'
              }}
            />
          </div>
        </div>

        {/* Mobile Layout (< 640px) */}
        <div className="sm:hidden flex-1 flex flex-col gap-1.5 min-h-0">
          {/* Horizontal scroll container for mobile */}
          <div className="flex-1 flex gap-1.5 overflow-x-auto">
            {/* Data Sources */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-md p-1.5 border border-gray-700/50 min-w-[120px] flex-shrink-0">
              <h4 className="text-[10px] font-semibold text-gray-300 mb-1 flex items-center">
                <Database className="w-2.5 h-2.5 mr-0.5" />
                Sources
              </h4>
              <div className="space-y-1">
                <div className="bg-gray-900/50 rounded p-1 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-1">
                    <Server className="w-2 h-2 text-gray-400" />
                    <span className="text-[9px] text-gray-300">APIs</span>
                  </div>
                  <span className="text-[9px] text-gray-500 font-medium">12</span>
                </div>
                <div className="bg-gray-900/50 rounded p-1 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-1">
                    <Database className="w-2 h-2 text-gray-400" />
                    <span className="text-[9px] text-gray-300">DBs</span>
                  </div>
                  <span className="text-[9px] text-gray-500 font-medium">8</span>
                </div>
                <div className="bg-gray-900/50 rounded p-1 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-1">
                    <HardDrive className="w-2 h-2 text-gray-400" />
                    <span className="text-[9px] text-gray-300">Files</span>
                  </div>
                  <span className="text-[9px] text-gray-500 font-medium">CSV</span>
                </div>
              </div>
            </div>

            {/* ETL Pipeline */}
            <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-md p-1.5 border border-brand-red-500/30 min-w-[140px] flex-shrink-0">
              <h4 className="text-[10px] font-semibold text-brand-red-400 mb-1 text-center">ETL</h4>
              <div className="flex justify-between items-center">
                <div className="text-center flex-1">
                  <div className="bg-white/5 rounded p-1 border border-white/10 mb-0.5">
                    <GitBranch className="w-2.5 h-2.5 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-[9px] text-gray-300">Extract</div>
                </div>
                <div className="text-brand-red-500 text-[10px] px-0.5">→</div>
                <div className="text-center flex-1">
                  <div className="bg-white/5 rounded p-1 border border-white/10 mb-0.5">
                    <Cpu className="w-2.5 h-2.5 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-[9px] text-gray-300">Transform</div>
                </div>
                <div className="text-brand-red-500 text-[10px] px-0.5">→</div>
                <div className="text-center flex-1">
                  <div className="bg-white/5 rounded p-1 border border-white/10 mb-0.5">
                    <Layers className="w-2.5 h-2.5 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-[9px] text-gray-300">Load</div>
                </div>
              </div>
            </div>

            {/* Data Warehouse */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-md p-1.5 border border-gray-700/50 min-w-[120px] flex-shrink-0">
              <h4 className="text-[10px] font-semibold text-gray-300 mb-1 flex items-center">
                <Database className="w-2.5 h-2.5 mr-0.5" />
                Warehouse
              </h4>
              <div className="space-y-1">
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[9px] text-gray-300">Structured</span>
                    <span className="text-[9px] text-gray-500">85%</span>
                  </div>
                  <div className="w-full h-0.5 bg-gray-700/50 rounded-full">
                    <div className="h-full w-[85%] bg-brand-red-500 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[9px] text-gray-300">Semi</span>
                    <span className="text-[9px] text-gray-500">12%</span>
                  </div>
                  <div className="w-full h-0.5 bg-gray-700/50 rounded-full">
                    <div className="h-full w-[12%] bg-gray-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Row - 2x2 Grid on Mobile */}
          <div className="grid grid-cols-2 gap-1 mt-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded p-1 xs:p-1.5 border border-white/10">
              <div className="flex items-center justify-between gap-1">
                <div>
                  <div className="text-[9px] text-gray-400">Latency</div>
                  <div className="text-xs xs:text-sm font-bold text-white">1.2ms</div>
                </div>
                <Zap className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-yellow-500" />
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded p-1 xs:p-1.5 border border-white/10">
              <div className="flex items-center justify-between gap-1">
                <div>
                  <div className="text-[9px] text-gray-400">Success</div>
                  <div className="text-xs xs:text-sm font-bold text-white">98.7%</div>
                </div>
                <Activity className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-green-500" />
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded p-1 xs:p-1.5 border border-white/10">
              <div className="flex items-center justify-between gap-1">
                <div>
                  <div className="text-[9px] text-gray-400">Storage</div>
                  <div className="text-xs xs:text-sm font-bold text-white">12.4TB</div>
                </div>
                <Database className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-brand-red-500" />
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded p-1 xs:p-1.5 border border-white/10">
              <div className="flex items-center justify-between gap-1">
                <div>
                  <div className="text-[9px] text-gray-400">Pipelines</div>
                  <div className="text-xs xs:text-sm font-bold text-white">47</div>
                </div>
                <GitBranch className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (≥ 640px) */}
        <div className="hidden sm:flex flex-1 gap-2 lg:gap-3 items-stretch min-h-0">
          {/* Data Sources */}
          <div className="flex-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2.5 lg:p-3 border border-gray-700/50 h-full">
              <h4 className="text-xs lg:text-sm font-semibold text-gray-300 mb-2 flex items-center">
                <Database className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                Data Sources
              </h4>
              
              <div className="space-y-1.5">
                <div className="bg-gray-900/50 rounded p-1.5 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-1.5">
                    <Server className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-300">APIs</span>
                  </div>
                  <span className="text-xs text-gray-500">12</span>
                </div>
                
                <div className="bg-gray-900/50 rounded p-1.5 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-300">Databases</span>
                  </div>
                  <span className="text-xs text-gray-500">8</span>
                </div>
                
                <div className="bg-gray-900/50 rounded p-1.5 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-1.5">
                    <HardDrive className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-300">Files</span>
                  </div>
                  <span className="text-xs text-gray-500">CSV/JSON</span>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Pipeline */}
          <div className="flex-1">
            <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-2.5 lg:p-3 border border-brand-red-500/30 shadow-lg h-full">
              <h4 className="text-xs lg:text-sm font-semibold text-brand-red-400 mb-2 text-center">
                Processing Pipeline
              </h4>
              
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10 mb-1">
                    <GitBranch className="w-4 h-4 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-xs text-gray-300">Extract</div>
                </div>
                
                <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-700 via-brand-red-500 to-gray-700 mx-2" />
                
                <div className="text-center">
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10 mb-1">
                    <Cpu className="w-4 h-4 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-xs text-gray-300">Transform</div>
                </div>
                
                <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-700 via-brand-red-500 to-gray-700 mx-2" />
                
                <div className="text-center">
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10 mb-1">
                    <Layers className="w-4 h-4 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-xs text-gray-300">Load</div>
                </div>
              </div>
              
              {/* Animated dots */}
              <div className="relative mt-2">
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
          <div className="flex-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2.5 lg:p-3 border border-gray-700/50 h-full">
              <h4 className="text-xs lg:text-sm font-semibold text-gray-300 mb-2 flex items-center">
                <Database className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                Data Warehouse
              </h4>
              
              <div className="space-y-1.5">
                <div className="bg-gray-900/50 rounded p-1.5 border border-gray-700/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-300">Structured</span>
                    <span className="text-xs text-gray-500">85%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full" />
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded p-1.5 border border-gray-700/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-300">Semi-Structured</span>
                    <span className="text-xs text-gray-500">12%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[12%] bg-gradient-to-r from-gray-500 to-gray-600 rounded-full" />
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded p-1.5 border border-gray-700/30">
                  <div className="flex items-center justify-between mb-1">
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

        {/* Desktop Metrics - Bottom */}
        <div className="hidden sm:grid grid-cols-4 gap-1.5 lg:gap-2 mt-2">
          <div className="bg-white/5 backdrop-blur-sm rounded p-2 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Latency</div>
                <div className="text-base lg:text-lg font-bold text-white">1.2ms</div>
                <div className="text-xs text-gray-500">avg</div>
              </div>
              <Zap className="w-4 h-4 text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-2 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Success</div>
                <div className="text-base lg:text-lg font-bold text-white">98.7%</div>
                <div className="text-xs text-gray-500">rate</div>
              </div>
              <Activity className="w-4 h-4 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-2 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Storage</div>
                <div className="text-base lg:text-lg font-bold text-white">12.4TB</div>
                <div className="text-xs text-gray-500">total</div>
              </div>
              <Database className="w-4 h-4 text-brand-red-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-2 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Pipelines</div>
                <div className="text-base lg:text-lg font-bold text-white">47</div>
                <div className="text-xs text-gray-500">active</div>
              </div>
              <GitBranch className="w-4 h-4 text-blue-500" />
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
