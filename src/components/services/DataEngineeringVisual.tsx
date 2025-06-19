import React from 'react';
import { Database, Server, GitBranch, Layers, Cpu, HardDrive, Activity, Zap } from 'lucide-react';

const DataEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
      {/* Background Pattern - Simplified for mobile */}
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
        
        {/* Central Pipeline Visualization */}
        <div className="w-full max-w-sm mx-auto">
          
          {/* Data Sources */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4 border border-white/20">
            <h4 className="text-xs font-semibold text-white mb-2 text-center flex items-center justify-center">
              <Database className="w-3 h-3 mr-1" />
              Data Sources
            </h4>
            <div className="flex justify-center space-x-2">
              <div className="w-8 h-8 bg-gray-700/50 rounded flex items-center justify-center">
                <Server className="w-4 h-4 text-gray-400" />
              </div>
              <div className="w-8 h-8 bg-gray-700/50 rounded flex items-center justify-center">
                <Database className="w-4 h-4 text-gray-400" />
              </div>
              <div className="w-8 h-8 bg-gray-700/50 rounded flex items-center justify-center">
                <HardDrive className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-brand-red-500"></div>
          </div>

          {/* Processing Pipeline */}
          <div className="bg-gradient-to-br from-brand-red-900/30 to-brand-red-800/20 backdrop-blur-sm rounded-lg p-3 mb-4 border border-brand-red-500/30">
            <h4 className="text-xs font-semibold text-brand-red-400 mb-2 text-center">
              ETL Pipeline
            </h4>
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center mb-1">
                  <GitBranch className="w-4 h-4 text-brand-red-400" />
                </div>
                <div className="text-xs text-gray-300">Extract</div>
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-brand-red-500 to-brand-red-400 mx-2" />
              <div className="text-center">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center mb-1">
                  <Cpu className="w-4 h-4 text-brand-red-400" />
                </div>
                <div className="text-xs text-gray-300">Transform</div>
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-brand-red-500 to-brand-red-400 mx-2" />
              <div className="text-center">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center mb-1">
                  <Layers className="w-4 h-4 text-brand-red-400" />
                </div>
                <div className="text-xs text-gray-300">Load</div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-8 bg-gradient-to-b from-brand-red-500 to-gray-600"></div>
          </div>

          {/* Data Warehouse */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <h4 className="text-xs font-semibold text-white mb-2 text-center flex items-center justify-center">
              <Database className="w-3 h-3 mr-1" />
              Data Warehouse
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-300">Structured</span>
                <span className="text-gray-500">85%</span>
              </div>
              <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">24.3K</div>
              <div className="text-xs text-gray-400">Records/sec</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">98.7%</div>
              <div className="text-xs text-gray-400">Success</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">47</div>
              <div className="text-xs text-gray-400">Pipelines</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringVisual;