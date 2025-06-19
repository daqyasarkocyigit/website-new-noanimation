import React from 'react';
import { BarChart3, PieChart, TrendingUp, Activity, LineChart, Eye } from 'lucide-react';

const DataVisualizationVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden relative">
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

      {/* Main Container - Simplified for mobile */}
      <div className="relative w-full h-full flex flex-col justify-center items-center p-4">
        
        {/* Dashboard Header */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-red-500 rounded-full animate-pulse" />
                <h3 className="text-sm font-semibold text-white">Live Dashboard</h3>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-white">15.2K</div>
                <div className="text-xs text-gray-300">Users</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Visualization */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
            <h4 className="text-xs font-semibold text-gray-300 mb-3 flex items-center justify-center">
              <BarChart3 className="w-3 h-3 mr-1" />
              Interactive Charts
            </h4>
            
            {/* Simple Bar Chart */}
            <div className="bg-gray-900/50 rounded p-3 mb-3">
              <div className="flex items-end justify-center gap-1 h-16">
                {[40, 65, 35, 80, 55, 70, 45].map((height, i) => (
                  <div
                    key={i}
                    className="w-4 bg-gradient-to-t from-brand-red-600 to-brand-red-400 rounded-t-sm"
                    style={{
                      height: `${height}%`,
                      animation: `barGrow 1s ease-out ${i * 0.1}s backwards`
                    }}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">Weekly Analytics</div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-3 border border-brand-red-500/30">
            <h4 className="text-xs font-semibold text-brand-red-400 mb-3 text-center">
              Dashboard Widgets
            </h4>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 rounded p-2 border border-white/10 text-center">
                <PieChart className="w-6 h-6 text-brand-red-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Analytics</div>
              </div>
              <div className="bg-white/5 rounded p-2 border border-white/10 text-center">
                <LineChart className="w-6 h-6 text-brand-red-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Metrics</div>
              </div>
              <div className="bg-white/5 rounded p-2 border border-white/10 text-center">
                <TrendingUp className="w-6 h-6 text-brand-red-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">KPIs</div>
              </div>
              <div className="bg-white/5 rounded p-2 border border-white/10 text-center">
                <Eye className="w-6 h-6 text-brand-red-400 mx-auto mb-1" />
                <div className="text-xs text-gray-300">Monitor</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">0.8s</div>
              <div className="text-xs text-gray-400">Load Time</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">60fps</div>
              <div className="text-xs text-gray-400">Smooth</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">87</div>
              <div className="text-xs text-gray-400">Dashboards</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes barGrow {
          from {
            height: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default DataVisualizationVisual;