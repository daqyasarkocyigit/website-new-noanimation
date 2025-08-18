import React from 'react';
import { TrendingUp, BarChart3, Target, Brain, CheckCircle, AlertCircle, Award, DollarSign, Users, Calendar, ArrowUp } from 'lucide-react';

const BusinessIntelligenceVisual: React.FC = () => {
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
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Business Intelligence Hub</h3>
                <p className="text-sm text-slate-600">AI-Powered Strategic Insights</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-900 tabular-nums">97.8%</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Accuracy</div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-green-600" />
              </div>
              <ArrowUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-xl font-bold text-slate-900">+$2.4M</div>
            <div className="text-xs text-slate-600 mb-1">Revenue Impact</div>
            <div className="text-xs text-green-600 font-medium">+18.7% growth</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-xs text-blue-600 font-medium">Optimized</span>
            </div>
            <div className="text-xl font-bold text-slate-900">24%</div>
            <div className="text-xs text-slate-600 mb-1">Cost Reduction</div>
            <div className="text-xs text-blue-600 font-medium">$847K saved</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-xs text-purple-600 font-medium">Active</span>
            </div>
            <div className="text-xl font-bold text-slate-900">3.2x</div>
            <div className="text-xs text-slate-600 mb-1">Decision Speed</div>
            <div className="text-xs text-purple-600 font-medium">Faster insights</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-xs text-orange-600 font-medium">ROI</span>
            </div>
            <div className="text-xl font-bold text-slate-900">340%</div>
            <div className="text-xs text-slate-600 mb-1">Return on Investment</div>
            <div className="text-xs text-orange-600 font-medium">12 months</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Predictive Analytics */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-200/80">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">AI Predictions</h4>
            </div>
            
            {/* Forecast Chart */}
            <div className="bg-slate-50 rounded-lg p-4 mb-4">
              <svg width="100%" height="100" viewBox="0 0 280 80" className="overflow-visible">
                {/* Historical Data */}
                <path
                  d="M 20,60 Q 60,45 100,35 Q 140,25 180,20"
                  stroke="#64748b"
                  strokeWidth="2"
                  fill="none"
                />
                
                {/* Prediction */}
                <path
                  d="M 180,20 Q 220,15 260,10"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  fill="none"
                />
                
                {/* Data Points */}
                <circle cx="20" cy="60" r="3" fill="#64748b" />
                <circle cx="100" cy="35" r="3" fill="#64748b" />
                <circle cx="180" cy="20" r="3" fill="#64748b" />
                <circle cx="260" cy="10" r="3" fill="#10b981" />
                
                {/* Labels */}
                <text x="20" y="75" fontSize="10" fill="#64748b" textAnchor="middle">Q1</text>
                <text x="100" y="75" fontSize="10" fill="#64748b" textAnchor="middle">Q2</text>
                <text x="180" y="75" fontSize="10" fill="#64748b" textAnchor="middle">Q3</text>
                <text x="260" y="75" fontSize="10" fill="#10b981" textAnchor="middle">Q4</text>
              </svg>
              <div className="text-center text-xs text-slate-600 mt-2">
                Revenue Forecast - Next Quarter
              </div>
            </div>
            
            {/* Model Performance */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-slate-700">Sales Prediction</span>
                <span className="text-sm font-bold text-green-700">94.7%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium text-slate-700">Market Analysis</span>
                <span className="text-sm font-bold text-blue-700">91.2%</span>
              </div>
            </div>
          </div>

          {/* Strategic Insights */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-5 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-base font-semibold">Key Insights</h4>
            </div>
            
            {/* Insights List */}
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold mb-1">Market Opportunity</div>
                    <div className="text-xs text-white/80 mb-2">23% growth potential identified in Q2 segment</div>
                    <div className="text-xs text-green-400 font-medium">Projected: +$1.2M revenue</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold mb-1">Risk Alert</div>
                    <div className="text-xs text-white/80 mb-2">87 high-value customers showing churn signals</div>
                    <div className="text-xs text-yellow-400 font-medium">Action required: Retention campaign</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold mb-1">Efficiency Gain</div>
                    <div className="text-xs text-white/80 mb-2">Supply chain optimization potential: 18%</div>
                    <div className="text-xs text-blue-400 font-medium">Savings: $340K annually</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-200/80">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-blue-600" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">Performance</h4>
            </div>
            
            {/* KPI Cards */}
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Revenue Growth</span>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-700 mb-1">+18.7%</div>
                <div className="w-full bg-green-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
                <div className="text-xs text-slate-600 mt-1">vs. previous quarter</div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Efficiency Score</span>
                  <Award className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-700 mb-1">94.2%</div>
                <div className="w-full bg-purple-100 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
                <div className="text-xs text-slate-600 mt-1">operational efficiency</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg text-center">
                  <div className="text-lg font-bold text-slate-900">1,247</div>
                  <div className="text-xs text-slate-600">Reports</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center">
                  <div className="text-lg font-bold text-slate-900">47</div>
                  <div className="text-xs text-slate-600">AI Models</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="mt-6 bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-700">Real-time Processing Active</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-slate-600">
              <span>Last Updated: 2 min ago</span>
              <span>Next Refresh: 15 min</span>
              <span>Data Sources: 12 active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligenceVisual;