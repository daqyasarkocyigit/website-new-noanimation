import React from 'react';
import { BarChart3, PieChart, TrendingUp, Activity, LineChart, Eye, Monitor, Users, Clock, ArrowRight } from 'lucide-react';

const DataVisualizationVisual: React.FC = () => {
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
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Analytics Dashboard</h3>
                <p className="text-sm text-slate-600">Interactive Data Visualization Platform</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-900 tabular-nums">Live</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Real-time</div>
            </div>
          </div>
        </div>

        {/* Dashboard Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-semibold text-slate-900">Revenue Analytics</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-600">Live Data</span>
              </div>
            </div>
            
            {/* Interactive Chart */}
            <div className="relative h-48">
              <svg width="100%" height="100%" viewBox="0 0 400 180" className="overflow-visible">
                {/* Grid Lines */}
                <defs>
                  <pattern id="grid" width="40" height="36" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 36" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Chart Line */}
                <path
                  d="M 20,140 Q 80,120 120,100 T 200,80 T 280,60 T 360,40"
                  stroke="url(#chartGradient)"
                  strokeWidth="3"
                  fill="none"
                  className="drop-shadow-sm"
                />
                
                {/* Area Fill */}
                <path
                  d="M 20,140 Q 80,120 120,100 T 200,80 T 280,60 T 360,40 L 360,180 L 20,180 Z"
                  fill="url(#areaGradient)"
                  opacity="0.1"
                />
                
                {/* Data Points */}
                {[
                  { x: 20, y: 140 }, { x: 80, y: 120 }, { x: 120, y: 100 },
                  { x: 160, y: 80 }, { x: 200, y: 80 }, { x: 240, y: 70 },
                  { x: 280, y: 60 }, { x: 320, y: 50 }, { x: 360, y: 40 }
                ].map((point, i) => (
                  <circle
                    key={i}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="white"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    className="drop-shadow-sm"
                  />
                ))}
                
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Chart Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-500 px-4">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
            
            {/* Chart Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-100">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">+24.5%</div>
                <div className="text-xs text-slate-600">Growth Rate</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">$2.4M</div>
                <div className="text-xs text-slate-600">Total Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-600">847K</div>
                <div className="text-xs text-slate-600">Data Points</div>
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="space-y-4">
            {/* Active Users */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">89.2K</div>
              <div className="text-xs text-slate-600 mb-2">Active Users</div>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-green-600 font-medium">+8.3%</span>
                <span className="text-slate-500">vs last month</span>
              </div>
            </div>

            {/* Session Duration */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <Activity className="w-4 h-4 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">4.2m</div>
              <div className="text-xs text-slate-600 mb-2">Avg Session</div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '76%' }}></div>
              </div>
            </div>

            {/* Conversion Rate */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                  <PieChart className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-xs text-green-600 font-medium">Optimal</div>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">12.7%</div>
              <div className="text-xs text-slate-600 mb-2">Conversion Rate</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-50 rounded p-1 text-center">
                  <div className="text-xs font-medium text-slate-700">Goal</div>
                  <div className="text-xs text-slate-500">10%</div>
                </div>
                <div className="bg-green-50 rounded p-1 text-center">
                  <div className="text-xs font-medium text-green-700">Actual</div>
                  <div className="text-xs text-green-600">12.7%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80 text-center">
            <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Monitor className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-lg font-bold text-slate-900">24</div>
            <div className="text-xs text-slate-600">Dashboards</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80 text-center">
            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <BarChart3 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-lg font-bold text-slate-900">156</div>
            <div className="text-xs text-slate-600">Chart Types</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80 text-center">
            <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Eye className="w-4 h-4 text-orange-600" />
            </div>
            <div className="text-lg font-bold text-slate-900">0.3s</div>
            <div className="text-xs text-slate-600">Load Time</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80 text-center">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Activity className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-lg font-bold text-slate-900">60fps</div>
            <div className="text-xs text-slate-600">Smooth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualizationVisual;