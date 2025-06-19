import React from 'react';
import { TrendingUp, BarChart3, Target, BrainCircuit, CheckCircle } from 'lucide-react';

const BusinessIntelligenceVisual: React.FC = () => {
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
        
        {/* BI Header */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-red-500 rounded-full animate-pulse" />
                <h3 className="text-sm font-semibold text-white">BI Analytics</h3>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-white">87%</div>
                <div className="text-xs text-gray-300">Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Predictive Analytics */}
        <div className="w-full max-w-sm mx-auto mb-4">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
            <h4 className="text-xs font-semibold text-gray-300 mb-3 flex items-center justify-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              Predictive Analytics
            </h4>
            
            {/* Simple Trend Line */}
            <div className="bg-gray-900/50 rounded p-3 mb-2">
              <svg width="100%" height="40" viewBox="0 0 100 40">
                <path
                  d="M 0,30 Q 25,15 50,20 T 100,10"
                  stroke="url(#trendGradient)"
                  strokeWidth="2"
                  fill="none"
                  style={{ animation: 'drawPath 2s ease-out' }}
                />
                <defs>
                  <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6b7280" />
                    <stop offset="50%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-xs text-gray-500 text-center mt-1">Future Projections</div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="w-full max-w-sm mx-auto mb-4">
          <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-3 border border-brand-red-500/30">
            <h4 className="text-xs font-semibold text-brand-red-400 mb-3 text-center">
              AI Insights
            </h4>
            
            <div className="space-y-2">
              <div className="bg-white/5 rounded p-2 border border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <div className="text-xs text-gray-300">Opportunity Detected</div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded p-2 border border-white/10">
                <div className="flex items-center gap-2">
                  <Target className="w-3 h-3 text-brand-red-400" />
                  <div className="text-xs text-gray-300">Goal Progress: 87%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
            <h4 className="text-xs font-semibold text-gray-300 mb-3 flex items-center justify-center">
              <BarChart3 className="w-3 h-3 mr-1" />
              Key Metrics
            </h4>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-900/50 rounded p-2 text-center">
                <div className="text-lg font-bold text-white">3.2x</div>
                <div className="text-xs text-gray-500">ROI</div>
              </div>
              <div className="bg-gray-900/50 rounded p-2 text-center">
                <div className="text-lg font-bold text-white">42%</div>
                <div className="text-xs text-gray-500">Efficiency</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">156</div>
              <div className="text-xs text-gray-400">Reports</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">2.4K</div>
              <div className="text-xs text-gray-400">Insights</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">34</div>
              <div className="text-xs text-gray-400">Models</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawPath {
          from {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BusinessIntelligenceVisual;