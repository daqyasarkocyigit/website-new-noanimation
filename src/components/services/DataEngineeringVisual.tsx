import React from 'react';
import { Database, Server, GitBranch, Layers, Cpu, HardDrive, Activity, Zap, ArrowRight } from 'lucide-react';

const DataEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
      {/* Main Container - Simplified for mobile */}
      <div className="w-full h-full flex flex-col p-3 md:p-4">
        
        {/* Status Header - Very compact */}
        <div className="bg-white/10 backdrop-blur rounded-lg p-2.5 mb-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-sm font-semibold text-white">Data Pipeline</h3>
              <div className="text-xs text-gray-400">Real-time processing</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-white">24.3K</div>
              <div className="text-xs text-gray-400">records/sec</div>
            </div>
          </div>
          {/* Simple progress bar */}
          <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full"
              style={{ 
                width: '75%',
                animation: 'dataFlow 2s ease-in-out infinite'
              }}
            />
          </div>
        </div>

        {/* Mobile: Simple vertical flow */}
        <div className="md:hidden flex-1 space-y-3">
          {/* Sources */}
          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
            <div className="flex items-center mb-2">
              <Database className="w-4 h-4 text-brand-red-500 mr-2" />
              <span className="text-sm font-medium text-white">Data Sources</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-gray-900/50 rounded p-2">
                <div className="text-lg font-bold text-white">12</div>
                <div className="text-xs text-gray-400">APIs</div>
              </div>
              <div className="bg-gray-900/50 rounded p-2">
                <div className="text-lg font-bold text-white">8</div>
                <div className="text-xs text-gray-400">DBs</div>
              </div>
              <div className="bg-gray-900/50 rounded p-2">
                <div className="text-lg font-bold text-white">5</div>
                <div className="text-xs text-gray-400">Files</div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-brand-red-900/30 rounded-full flex items-center justify-center border border-brand-red-500/50">
              <ArrowRight className="w-4 h-4 text-brand-red-500 rotate-90" />
            </div>
          </div>

          {/* Processing */}
          <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 rounded-lg p-3 border border-brand-red-500/30">
            <div className="flex items-center mb-3">
              <Cpu className="w-4 h-4 text-brand-red-500 mr-2" />
              <span className="text-sm font-medium text-white">ETL Processing</span>
            </div>
            <div className="flex justify-around text-center">
              <div className="flex-1">
                <div className="bg-white/10 rounded-lg p-2 mb-1">
                  <GitBranch className="w-5 h-5 text-brand-red-400 mx-auto" />
                </div>
                <div className="text-xs text-gray-300">Extract</div>
              </div>
              <div className="flex-1 mx-2">
                <div className="bg-white/10 rounded-lg p-2 mb-1">
                  <Cpu className="w-5 h-5 text-brand-red-400 mx-auto" />
                </div>
                <div className="text-xs text-gray-300">Transform</div>
              </div>
              <div className="flex-1">
                <div className="bg-white/10 rounded-lg p-2 mb-1">
                  <Layers className="w-5 h-5 text-brand-red-400 mx-auto" />
                </div>
                <div className="text-xs text-gray-300">Load</div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-brand-red-900/30 rounded-full flex items-center justify-center border border-brand-red-500/50">
              <ArrowRight className="w-4 h-4 text-brand-red-500 rotate-90" />
            </div>
          </div>

          {/* Output */}
          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
            <div className="flex items-center mb-3">
              <Database className="w-4 h-4 text-brand-red-500 mr-2" />
              <span className="text-sm font-medium text-white">Data Warehouse</span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Structured Data</span>
                  <span className="text-white">85%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[85%] bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Semi-structured</span>
                  <span className="text-white">15%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[15%] bg-gray-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden md:flex flex-1 items-center gap-4">
          {/* Data Sources */}
          <div className="flex-1">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 h-full">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                <Database className="w-4 h-4 mr-2" />
                Data Sources
              </h4>
              <div className="space-y-2">
                <div className="bg-gray-900/50 rounded p-2 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">APIs</span>
                  </div>
                  <span className="text-sm text-gray-500">12 active</span>
                </div>
                <div className="bg-gray-900/50 rounded p-2 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <span className="text-sm text-gray-500">8 connected</span>
                </div>
                <div className="bg-gray-900/50 rounded p-2 flex items-center justify-between border border-gray-700/30">
                  <div className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">File Storage</span>
                  </div>
                  <span className="text-sm text-gray-500">CSV/JSON</span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0">
            <ArrowRight className="w-6 h-6 text-brand-red-500" />
          </div>

          {/* Processing Pipeline */}
          <div className="flex-1">
            <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 rounded-lg p-4 border border-brand-red-500/30 h-full">
              <h4 className="text-sm font-semibold text-brand-red-400 mb-3 text-center">
                ETL Processing Pipeline
              </h4>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="bg-white/10 rounded-lg p-3 mb-2 border border-white/20">
                    <GitBranch className="w-6 h-6 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-300">Extract</div>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-brand-red-500/30 to-brand-red-400/30 mx-2" />
                <div className="text-center">
                  <div className="bg-white/10 rounded-lg p-3 mb-2 border border-white/20">
                    <Cpu className="w-6 h-6 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-300">Transform</div>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-brand-red-500/30 to-brand-red-400/30 mx-2" />
                <div className="text-center">
                  <div className="bg-white/10 rounded-lg p-3 mb-2 border border-white/20">
                    <Layers className="w-6 h-6 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-300">Load</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0">
            <ArrowRight className="w-6 h-6 text-brand-red-500" />
          </div>

          {/* Data Warehouse */}
          <div className="flex-1">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 h-full">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                <Database className="w-4 h-4 mr-2" />
                Data Warehouse
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Structured Data</span>
                    <span className="text-gray-500">85%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div className="h-full w-[85%] bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Semi-Structured</span>
                    <span className="text-gray-500">12%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div className="h-full w-[12%] bg-gray-500 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Unstructured</span>
                    <span className="text-gray-500">3%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div className="h-full w-[3%] bg-gray-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics - Simple grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
          <div className="bg-white/5 backdrop-blur rounded p-2.5 text-center border border-white/10">
            <Zap className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">1.2ms</div>
            <div className="text-xs text-gray-400">Latency</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur rounded p-2.5 text-center border border-white/10">
            <Activity className="w-5 h-5 text-green-500 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">98.7%</div>
            <div className="text-xs text-gray-400">Success</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur rounded p-2.5 text-center border border-white/10">
            <Database className="w-5 h-5 text-brand-red-500 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">12.4TB</div>
            <div className="text-xs text-gray-400">Storage</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur rounded p-2.5 text-center border border-white/10">
            <GitBranch className="w-5 h-5 text-blue-500 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">47</div>
            <div className="text-xs text-gray-400">Pipelines</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dataFlow {
          0%, 100% { 
            width: 75%;
          }
          50% { 
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default DataEngineeringVisual;