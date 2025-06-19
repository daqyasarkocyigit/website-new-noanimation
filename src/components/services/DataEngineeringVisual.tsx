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
              <div className="text-xs text-gray-400">Real-time</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-white">24.3K</div>
              <div className="text-xs text-gray-400">rec/sec</div>
            </div>
          </div>
          {/* Simple progress bar */}
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-brand-red-500 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Mobile: Simple vertical flow */}
        <div className="md:hidden flex-1 space-y-3">
          {/* Sources */}
          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
            <div className="flex items-center mb-2">
              <Database className="w-4 h-4 text-brand-red-500 mr-2" />
              <span className="text-sm font-medium text-white">Data Sources</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-lg font-bold text-white">12</div>
                <div className="text-xs text-gray-400">APIs</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">8</div>
                <div className="text-xs text-gray-400">DBs</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">5</div>
                <div className="text-xs text-gray-400">Files</div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-5 h-5 text-brand-red-500 rotate-90" />
          </div>

          {/* Processing */}
          <div className="bg-brand-red-900/20 rounded-lg p-3 border border-brand-red-500/30">
            <div className="flex items-center mb-2">
              <Cpu className="w-4 h-4 text-brand-red-500 mr-2" />
              <span className="text-sm font-medium text-white">Processing</span>
            </div>
            <div className="flex justify-around text-center">
              <div>
                <GitBranch className="w-5 h-5 text-brand-red-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Extract</div>
              </div>
              <div>
                <Cpu className="w-5 h-5 text-brand-red-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Transform</div>
              </div>
              <div>
                <Layers className="w-5 h-5 text-brand-red-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Load</div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-5 h-5 text-brand-red-500 rotate-90" />
          </div>

          {/* Output */}
          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
            <div className="flex items-center mb-2">
              <Database className="w-4 h-4 text-brand-red-500 mr-2" />
              <span className="text-sm font-medium text-white">Data Warehouse</span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Structured</span>
                  <span className="text-white">85%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded">
                  <div className="h-full w-[85%] bg-brand-red-500 rounded" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Semi-structured</span>
                  <span className="text-white">15%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded">
                  <div className="h-full w-[15%] bg-gray-500 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden md:flex flex-1 items-center gap-4">
          {/* Data Sources */}
          <div className="flex-1">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 h-full">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                <Database className="w-4 h-4 mr-2" />
                Data Sources
              </h4>
              <div className="space-y-2">
                <div className="bg-gray-900/50 rounded p-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">APIs</span>
                  </div>
                  <span className="text-sm text-gray-500">12 active</span>
                </div>
                <div className="bg-gray-900/50 rounded p-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <span className="text-sm text-gray-500">8 connected</span>
                </div>
                <div className="bg-gray-900/50 rounded p-2 flex items-center justify-between">
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
          <ArrowRight className="w-6 h-6 text-brand-red-500 flex-shrink-0" />

          {/* Processing Pipeline */}
          <div className="flex-1">
            <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 rounded-lg p-4 border border-brand-red-500/30 h-full">
              <h4 className="text-sm font-semibold text-brand-red-400 mb-3 text-center">
                Processing Pipeline
              </h4>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="bg-white/10 rounded-lg p-3 mb-2">
                    <GitBranch className="w-6 h-6 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-300">Extract</div>
                </div>
                <div className="flex-1 h-0.5 bg-brand-red-500/30 mx-2" />
                <div className="text-center">
                  <div className="bg-white/10 rounded-lg p-3 mb-2">
                    <Cpu className="w-6 h-6 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-300">Transform</div>
                </div>
                <div className="flex-1 h-0.5 bg-brand-red-500/30 mx-2" />
                <div className="text-center">
                  <div className="bg-white/10 rounded-lg p-3 mb-2">
                    <Layers className="w-6 h-6 text-brand-red-400 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-300">Load</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-6 h-6 text-brand-red-500 flex-shrink-0" />

          {/* Data Warehouse */}
          <div className="flex-1">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 h-full">
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
          <div className="bg-white/5 rounded p-2.5 text-center">
            <Zap className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">1.2ms</div>
            <div className="text-xs text-gray-400">Latency</div>
          </div>
          
          <div className="bg-white/5 rounded p-2.5 text-center">
            <Activity className="w-5 h-5 text-green-500 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">98.7%</div>
            <div className="text-xs text-gray-400">Success</div>
          </div>
          
          <div className="bg-white/5 rounded p-2.5 text-center">
            <Database className="w-5 h-5 text-brand-red-500 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">12.4TB</div>
            <div className="text-xs text-gray-400">Storage</div>
          </div>
          
          <div className="bg-white/5 rounded p-2.5 text-center">
            <GitBranch className="w-5 h-5 text-blue-500 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">47</div>
            <div className="text-xs text-gray-400">Pipelines</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringVisual;
