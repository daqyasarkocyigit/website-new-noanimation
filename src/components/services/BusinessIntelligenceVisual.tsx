import React from 'react';
import { TrendingUp, BarChart3, Target, Zap, CheckCircle, AlertCircle, BrainCircuit, LineChart } from 'lucide-react';

const BusinessIntelligenceVisual: React.FC = () => {
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
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col p-4">
        
        {/* BI Analytics Dashboard Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-xl mb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-brand-red-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Business Intelligence Hub</h3>
                <p className="text-xs text-gray-300">Advanced analytics & insights engine</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white tabular-nums">
                87%
              </div>
              <div className="text-xs text-gray-300 uppercase">Accuracy</div>
            </div>
          </div>
          
          {/* KPI Performance Bar */}
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">Revenue</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[92%] bg-green-500 rounded-full" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">Efficiency</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[87%] bg-brand-red-500 rounded-full" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">Quality</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-blue-500 rounded-full" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">Growth</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* BI Components Grid */}
        <div className="flex-1 grid grid-cols-3 gap-3">
          
          {/* Predictive Analytics */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
            <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              Predictive Analytics
            </h4>
            
            {/* Trend Visualization */}
            <div className="bg-gray-900/50 rounded p-2 mb-2 border border-gray-700/30">
              <svg width="100%" height="60" viewBox="0 0 100 60">
                <path
                  d="M 0,40 Q 25,20 50,30 T 100,25"
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
              <div className="text-xs text-gray-500 text-center">Future Projections</div>
            </div>
            
            {/* Prediction Metrics */}
            <div className="space-y-1">
              <div className="bg-gray-900/50 rounded p-1.5 flex items-center justify-between border border-gray-700/30">
                <span className="text-xs text-gray-300">Next Quarter</span>
                <span className="text-xs text-green-400">+24%</span>
              </div>
              <div className="bg-gray-900/50 rounded p-1.5 flex items-center justify-between border border-gray-700/30">
                <span className="text-xs text-gray-300">Risk Score</span>
                <span className="text-xs text-yellow-400">Low</span>
              </div>
            </div>
          </div>

          {/* Real-time Insights */}
          <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-3 border border-brand-red-500/30 shadow-lg">
            <h4 className="text-xs font-semibold text-brand-red-400 mb-2 flex items-center">
              <BrainCircuit className="w-3 h-3 mr-1" />
              AI-Powered Insights
            </h4>
            
            {/* Insight Cards */}
            <div className="space-y-2">
              <div className="bg-white/5 rounded p-2 border border-white/10">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-400 mt-0.5" />
                  <div>
                    <div className="text-xs text-gray-300">Opportunity Detected</div>
                    <div className="text-xs text-gray-500">Market expansion potential</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded p-2 border border-white/10">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-yellow-400 mt-0.5" />
                  <div>
                    <div className="text-xs text-gray-300">Anomaly Alert</div>
                    <div className="text-xs text-gray-500">Unusual spending pattern</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded p-2 border border-white/10">
                <div className="flex items-start gap-2">
                  <Target className="w-3.5 h-3.5 text-brand-red-400 mt-0.5" />
                  <div>
                    <div className="text-xs text-gray-300">Goal Progress</div>
                    <div className="text-xs text-gray-500">87% to target achieved</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI Processing Indicator */}
            <div className="mt-2 flex items-center justify-center">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-brand-red-500 rounded-full"
                    style={{
                      animation: `aiPulse 1.5s ease-in-out infinite ${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Business Metrics */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
            <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center">
              <BarChart3 className="w-3 h-3 mr-1" />
              Key Metrics
            </h4>
            
            {/* Metric Cards */}
            <div className="space-y-2">
              <div className="bg-gray-900/50 rounded p-2 border border-gray-700/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-300">ROI</span>
                  <TrendingUp className="w-3 h-3 text-green-400" />
                </div>
                <div className="text-lg font-bold text-white">3.2x</div>
                <div className="text-xs text-gray-500">vs 2.1x last year</div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-2 border border-gray-700/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-300">Efficiency</span>
                  <Zap className="w-3 h-3 text-yellow-400" />
                </div>
                <div className="text-lg font-bold text-white">42%</div>
                <div className="text-xs text-gray-500">time saved</div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-2 border border-gray-700/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-300">Accuracy</span>
                  <Target className="w-3 h-3 text-brand-red-400" />
                </div>
                <div className="text-lg font-bold text-white">98.5%</div>
                <div className="text-xs text-gray-500">prediction rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Summary */}
        <div className="grid grid-cols-4 gap-2 mt-3">
          <div className="bg-white/5 backdrop-blur-sm rounded p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Reports</div>
                <div className="text-lg font-bold text-white">156</div>
                <div className="text-xs text-gray-500">automated</div>
              </div>
              <LineChart className="w-4 h-4 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Insights</div>
                <div className="text-lg font-bold text-white">2.4K</div>
                <div className="text-xs text-gray-500">generated</div>
              </div>
              <BrainCircuit className="w-4 h-4 text-brand-red-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Decisions</div>
                <div className="text-lg font-bold text-white">87%</div>
                <div className="text-xs text-gray-500">data-driven</div>
              </div>
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-2.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Models</div>
                <div className="text-lg font-bold text-white">34</div>
                <div className="text-xs text-gray-500">active</div>
              </div>
              <Target className="w-4 h-4 text-blue-500" />
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
        
        @keyframes aiPulse {
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

export default BusinessIntelligenceVisual;
