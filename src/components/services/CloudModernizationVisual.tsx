import React from 'react';
import { Cloud, Server, Shield, Database, Globe, Network, Activity, Zap, ChevronRight, TrendingUp, ArrowRight } from 'lucide-react';

const CloudModernizationVisual: React.FC = () => {
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
        
        {/* Header */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                <Cloud className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Cloud Migration Hub</h3>
                <p className="text-sm text-slate-600">Enterprise Infrastructure Modernization</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-900 tabular-nums">100%</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Migration Complete</div>
            </div>
          </div>
        </div>

        {/* Migration Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-xs text-green-600 font-medium">Saved</span>
            </div>
            <div className="text-xl font-bold text-slate-900">42%</div>
            <div className="text-xs text-slate-600 mb-1">Cost Reduction</div>
            <div className="text-xs text-green-600 font-medium">$2.1M annually</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Activity className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-xs text-blue-600 font-medium">Improved</span>
            </div>
            <div className="text-xl font-bold text-slate-900">3.2x</div>
            <div className="text-xs text-slate-600 mb-1">Performance</div>
            <div className="text-xs text-blue-600 font-medium">Faster processing</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-xs text-purple-600 font-medium">Enhanced</span>
            </div>
            <div className="text-xl font-bold text-slate-900">99.99%</div>
            <div className="text-xs text-slate-600 mb-1">Uptime SLA</div>
            <div className="text-xs text-purple-600 font-medium">Enterprise grade</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-xs text-orange-600 font-medium">Automatic</span>
            </div>
            <div className="text-xl font-bold text-slate-900">Auto</div>
            <div className="text-xs text-slate-600 mb-1">Scaling</div>
            <div className="text-xs text-orange-600 font-medium">Dynamic resources</div>
          </div>
        </div>

        {/* Migration Journey */}
        <div className="flex-1">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200/80 h-full">
            <h4 className="text-base font-semibold text-slate-900 mb-6 text-center">Migration Architecture</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center h-full">
              
              {/* On-Premises */}
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Server className="w-6 h-6 text-slate-600" />
                  </div>
                  <h5 className="text-sm font-semibold text-slate-900">On-Premises</h5>
                  <p className="text-xs text-slate-600">Legacy Infrastructure</p>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white rounded-md p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Database className="w-3 h-3 text-slate-500" />
                      <span className="text-xs font-medium text-slate-700">SQL Servers</span>
                    </div>
                    <div className="text-xs text-slate-500">12 physical servers</div>
                  </div>
                  
                  <div className="bg-white rounded-md p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Network className="w-3 h-3 text-slate-500" />
                      <span className="text-xs font-medium text-slate-700">Storage</span>
                    </div>
                    <div className="text-xs text-slate-500">2.1TB data</div>
                  </div>
                  
                  <div className="bg-white rounded-md p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Activity className="w-3 h-3 text-slate-500" />
                      <span className="text-xs font-medium text-slate-700">Applications</span>
                    </div>
                    <div className="text-xs text-slate-500">47 legacy apps</div>
                  </div>
                </div>
              </div>

              {/* Migration Arrow */}
              <div className="hidden lg:flex justify-center">
                <div className="flex flex-col items-center gap-2">
                  <ArrowRight className="w-8 h-8 text-sky-500" />
                  <span className="text-xs text-slate-600 font-medium">Migrate</span>
                </div>
              </div>

              {/* Cloud Platform - Takes 3 columns for emphasis */}
              <div className="lg:col-span-3 bg-gradient-to-br from-sky-900 to-slate-800 rounded-lg p-6 text-white">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg font-semibold">Azure Cloud Platform</h5>
                  <p className="text-sm text-white/80">Modern Infrastructure</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Infrastructure Services */}
                  <div>
                    <h6 className="text-sm font-semibold mb-3 text-sky-300">Infrastructure Services</h6>
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-md p-2 border border-white/20">
                        <div className="flex items-center gap-2">
                          <Database className="w-3 h-3 text-sky-300" />
                          <span className="text-xs font-medium">Azure SQL Database</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-md p-2 border border-white/20">
                        <div className="flex items-center gap-2">
                          <Server className="w-3 h-3 text-sky-300" />
                          <span className="text-xs font-medium">Virtual Machines</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-md p-2 border border-white/20">
                        <div className="flex items-center gap-2">
                          <Network className="w-3 h-3 text-sky-300" />
                          <span className="text-xs font-medium">Blob Storage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Platform Services */}
                  <div>
                    <h6 className="text-sm font-semibold mb-3 text-sky-300">Platform Services</h6>
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-md p-2 border border-white/20">
                        <div className="flex items-center gap-2">
                          <Shield className="w-3 h-3 text-green-400" />
                          <span className="text-xs font-medium">Azure Security</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-md p-2 border border-white/20">
                        <div className="flex items-center gap-2">
                          <Globe className="w-3 h-3 text-blue-400" />
                          <span className="text-xs font-medium">Content Delivery</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-md p-2 border border-white/20">
                        <div className="flex items-center gap-2">
                          <Activity className="w-3 h-3 text-purple-400" />
                          <span className="text-xs font-medium">Monitoring</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Migration Progress */}
                <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Migration Progress</span>
                    <span className="text-sm text-green-400 font-medium">Complete</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-white/70 mt-1">
                    <span>0TB</span>
                    <span>2.1TB Migrated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="mt-6 bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">47</div>
              <div className="text-xs text-slate-600">Applications Migrated</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">2.1TB</div>
              <div className="text-xs text-slate-600">Data Transferred</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">Zero</div>
              <div className="text-xs text-slate-600">Downtime</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">8 weeks</div>
              <div className="text-xs text-slate-600">Migration Time</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">24/7</div>
              <div className="text-xs text-slate-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudModernizationVisual;