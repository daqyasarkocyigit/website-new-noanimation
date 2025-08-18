import React from 'react';
import { Database, Server, GitBranch, Layers, Cpu, HardDrive, Activity, Zap, CheckCircle, AlertTriangle, ArrowRight, BarChart3 } from 'lucide-react';

const DataEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-xl overflow-hidden relative border border-slate-200/50 shadow-xl">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(71,85,105,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(71,85,105,1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col p-6">
        
        {/* Header - Enterprise Dashboard */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <Database className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Enterprise Data Platform</h3>
                <p className="text-sm text-slate-600">Modern Data Engineering Infrastructure</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-900 tabular-nums">24/7</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Operational</div>
            </div>
          </div>
        </div>

        {/* Architecture Flow */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            
            {/* Data Sources */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-200/80">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-sm font-semibold text-slate-900">Data Sources</h4>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-md">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-slate-700 font-medium">SQL Databases</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-md">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-slate-700 font-medium">REST APIs</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-md">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-slate-700 font-medium">File Systems</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center">
              <ArrowRight className="w-6 h-6 text-slate-400" />
            </div>

            {/* ETL Processing */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-5 text-white shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-sm font-semibold">ETL Processing</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white/10 rounded-md p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium">Extract</span>
                    <span className="text-xs text-green-400">Active</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <div className="bg-blue-400 h-1 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-md p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium">Transform</span>
                    <span className="text-xs text-yellow-400">Processing</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <div className="bg-purple-400 h-1 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-md p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium">Load</span>
                    <span className="text-xs text-green-400">Complete</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <div className="bg-green-400 h-1 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center">
              <ArrowRight className="w-6 h-6 text-slate-400" />
            </div>

            {/* Data Warehouse */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-200/80">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <HardDrive className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-sm font-semibold text-slate-900">Data Warehouse</h4>
              </div>
              
              <div className="space-y-3">
                <div className="text-center p-3 bg-green-50 rounded-md">
                  <div className="text-lg font-bold text-green-700">12.4TB</div>
                  <div className="text-xs text-slate-600">Total Storage</div>
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded-md">
                    <span className="text-xs text-slate-600">Tables</span>
                    <span className="text-xs font-bold text-slate-900">1,247</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded-md">
                    <span className="text-xs text-slate-600">Views</span>
                    <span className="text-xs font-bold text-slate-900">389</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80 text-center">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-lg font-bold text-slate-900">99.9%</div>
            <div className="text-xs text-slate-600">Uptime</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80 text-center">
            <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Zap className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-lg font-bold text-slate-900">2.4M</div>
            <div className="text-xs text-slate-600">Records/Hour</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80 text-center">
            <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Activity className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-lg font-bold text-slate-900">47</div>
            <div className="text-xs text-slate-600">Pipelines</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80 text-center">
            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-lg font-bold text-slate-900">98.5%</div>
            <div className="text-xs text-slate-600">Quality Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringVisual;