import React from 'react';
import { BarChart3, PieChart, TrendingUp, Activity, LineChart, Eye, Palette, Grid3x3 } from 'lucide-react';

const DataVisualizationVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
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

      {/* Main Container - Mobile Optimized */}
      <div className="relative w-full h-full flex flex-col p-2 sm:p-3 lg:p-4">
        
        {/* Dashboard Performance Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20 shadow-xl mb-2 sm:mb-3">
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="relative">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-red-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white">Dashboard Analytics</h3>
                <p className="text-xs text-gray-300 hidden sm:block">Real-time visualization performance</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg sm:text-2xl font-bold text-white tabular-nums">
                15.2K
              </div>
              <div className="text-xs text-gray-300 uppercase">Active Users</div>
            </div>
          </div>
          
          {/* Live Update Indicator */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex-1 flex items-center gap-1.5 sm:gap-2">
              <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-red-400" />
              <div className="flex-1 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full"
                  style={{ 
                    width: '72%',
                    animation: 'liveUpdate 3s ease-in-out infinite'
                  }}
                />
              </div>
              <span className="text-xs text-gray-400">72% CPU</span>
            </div>
          </div>
        </div>

        {/* Visualization Types Grid - Mobile Responsive */}
        <div className="flex-1 flex flex-col space-y-2 sm:space-y-3">
          
          {/* Interactive Charts Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-gray-700/50 flex-1">
            <h4 className="text-xs font-semibold text-gray-300 mb-1.5 sm:mb-2 flex items-center">
              <BarChart3 className="w-3 h-3 mr-1" />
              Interactive Charts
            </h4>
            
            {/* Bar Chart Preview */}
            <div className="bg-gray-900/50 rounded p-1.5 sm:p-2 mb-1.5 sm:mb-2 border border-gray-700/30">
              <div className="flex items-end gap-0.5 sm:gap-1 h-8 sm:h-12 md:h-16">
                {[40, 65, 35, 80, 55, 70, 45].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-brand-red-600 to-brand-red-400 rounded-t-sm transition-all duration-300"
                    style={{
                      height: `${height}%`,
                      animation: `barGrow 1s ease-out ${i * 0.1}s backwards`
                    }}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-1 text-center">Weekly Trends</div>
            </div>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
              <div className="bg-gray-900/50 rounded p-1 sm:p-1.5 text-center border border-gray-700/30">
                <div className="text-xs text-gray-400">Charts</div>
                <div className="text-sm font-bold text-white">24</div>
              </div>
              <div className="bg-gray-900/50 rounded p-1 sm:p-1.5 text-center border border-gray-700/30">
                <div className="text-xs text-gray-400">Updates/s</div>
                <div className="text-sm font-bold text-white">120</div>
              </div>
            </div>
          </div>

          {/* Real-time Dashboards */}
          <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-brand-red-500/30 shadow-lg flex-1">
            <h4 className="text-xs font-semibold text-brand-red-400 mb-1.5 sm:mb-2 flex items-center">
              <Grid3x3 className="w-3 h-3 mr-1" />
              Live Dashboards
            </h4>
            
            {/* Dashboard Grid */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <div className="bg-white/5 rounded p-1.5 sm:p-2 border border-white/10">
                <PieChart className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red-400 mx-auto mb-0.5 sm:mb-1" />
                <div className="text-xs text-gray-300 text-center">Analytics</div>
              </div>
              <div className="bg-white/5 rounded p-1.5 sm:p-2 border border-white/10">
                <LineChart className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red-400 mx-auto mb-0.5 sm:mb-1" />
                <div className="text-xs text-gray-300 text-center">Metrics</div>
              </div>
              <div className="bg-white/5 rounded p-1.5 sm:p-2 border border-white/10">
                <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red-400 mx-auto mb-0.5 sm:mb-1" />
                <div className="text-xs text-gray-300 text-center">KPIs</div>
              </div>
              <div className="bg-white/5 rounded p-1.5 sm:p-2 border border-white/10">
                <Eye className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red-400 mx-auto mb-0.5 sm:mb-1" />
                <div className="text-xs text-gray-300 text-center">Monitor</div>
              </div>
            </div>
            
            {/* Live Indicator */}
            <div className="bg-white/5 rounded p-1 sm:p-1.5 border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-300">Live Refresh</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Visualizations */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-gray-700/50 flex-1">
            <h4 className="text-xs font-semibold text-gray-300 mb-1.5 sm:mb-2 flex items-center">
              <Palette className="w-3 h-3 mr-1" />
              Custom Visuals
            </h4>
            
            {/* Heatmap Preview */}
            <div className="bg-gray-900/50 rounded p-1.5 sm:p-2 mb-1.5 sm:mb-2 border border-gray-700/30">
              <div className="grid grid-cols-7 gap-0.5">
                {[...Array(21)].map((_, i) => {
                  const intensity = Math.random();
                  return (
                    <div
                      key={i}
                      className="aspect-square rounded-sm"
                      style={{
                        backgroundColor: `rgba(239, 68, 68, ${intensity})`,
                        animation: `heatPulse 3s ease-in-out infinite ${i * 0.05}s`
                      }}
                    />
                  );
                })}
              </div>
              <div className="text-xs text-gray-500 mt-1 text-center">Activity Heatmap</div>
            </div>
            
            {/* Customization Options */}
            <div className="space-y-1">
              <div className="bg-gray-900/50 rounded p-1 sm:p-1.5 flex items-center justify-between border border-gray-700/30">
                <span className="text-xs text-gray-300">Color Themes</span>
                <span className="text-xs text-gray-500">12</span>
              </div>
              <div className="bg-gray-900/50 rounded p-1 sm:p-1.5 flex items-center justify-between border border-gray-700/30">
                <span className="text-xs text-gray-300">Chart Types</span>
                <span className="text-xs text-gray-500">18</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Performance Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 mt-2 sm:mt-3">
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Load Time</div>
                <div className="text-sm sm:text-lg font-bold text-white">0.8s</div>
                <div className="text-xs text-gray-500">avg</div>
              </div>
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">FPS</div>
                <div className="text-sm sm:text-lg font-bold text-white">60fps</div>
                <div className="text-xs text-gray-500">smooth</div>
              </div>
              <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-brand-red-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Data Points</div>
                <div className="text-sm sm:text-lg font-bold text-white">1.2M</div>
                <div className="text-xs text-gray-500">rendered</div>
              </div>
              <Grid3x3 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 sm:p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Dashboards</div>
                <div className="text-sm sm:text-lg font-bold text-white">87</div>
                <div className="text-xs text-gray-500">active</div>
              </div>
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
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
        
        @keyframes heatPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes liveUpdate {
          0%, 100% {
            width: 72%;
          }
          50% {
            width: 85%;
          }
        }
      `}</style>
    </div>
  );
};

export default DataVisualizationVisual;