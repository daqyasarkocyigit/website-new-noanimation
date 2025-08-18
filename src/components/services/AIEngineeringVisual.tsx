import React from 'react';
import { Brain, Cpu, Network, Zap, Activity, GitBranch, Sparkles, Bot, Target, Code } from 'lucide-react';

const AIEngineeringVisual: React.FC = () => {
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
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">AI Engineering Platform</h3>
                <p className="text-sm text-slate-600">Machine Learning Operations & Deployment</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-900 tabular-nums">99.7%</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Model Accuracy</div>
            </div>
          </div>
        </div>

        {/* AI Pipeline Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-xs text-green-600 font-medium">Active</span>
            </div>
            <div className="text-xl font-bold text-slate-900">247</div>
            <div className="text-xs text-slate-600 mb-2">Models Deployed</div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '89%' }}></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-xs text-green-600 font-medium">Real-time</span>
            </div>
            <div className="text-xl font-bold text-slate-900">1.2K/s</div>
            <div className="text-xs text-slate-600 mb-2">API Requests</div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '76%' }}></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                <Activity className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-xs text-orange-600 font-medium">Processing</span>
            </div>
            <div className="text-xl font-bold text-slate-900">8.4M</div>
            <div className="text-xs text-slate-600 mb-2">Predictions/Day</div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-xs text-blue-600 font-medium">Optimal</span>
            </div>
            <div className="text-xl font-bold text-slate-900">94%</div>
            <div className="text-xs text-slate-600 mb-2">Efficiency</div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>
        </div>

        {/* Main AI Dashboard */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Neural Network Architecture */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-200/80">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <Network className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">Neural Architecture</h4>
            </div>
            
            {/* Network Visualization */}
            <div className="bg-slate-50 rounded-lg p-4 mb-4">
              <svg width="100%" height="120" viewBox="0 0 280 120" className="overflow-visible">
                {/* Input Layer */}
                <g>
                  {[20, 40, 60, 80].map((y, i) => (
                    <circle key={i} cx="40" cy={y + 10} r="6" fill="#64748b" />
                  ))}
                  <text x="40" y="105" fontSize="10" fill="#64748b" textAnchor="middle">Input</text>
                </g>
                
                {/* Hidden Layers */}
                <g>
                  {[15, 30, 45, 60, 75, 90].map((y, i) => (
                    <circle key={i} cx="120" cy={y + 5} r="5" fill="#8b5cf6" />
                  ))}
                  <text x="120" y="105" fontSize="10" fill="#8b5cf6" textAnchor="middle">Hidden</text>
                </g>
                
                <g>
                  {[15, 30, 45, 60, 75, 90].map((y, i) => (
                    <circle key={i} cx="180" cy={y + 5} r="5" fill="#8b5cf6" />
                  ))}
                  <text x="180" y="105" fontSize="10" fill="#8b5cf6" textAnchor="middle">Hidden</text>
                </g>
                
                {/* Output Layer */}
                <g>
                  {[25, 50, 75].map((y, i) => (
                    <circle key={i} cx="240" cy={y + 5} r="6" fill="#10b981" />
                  ))}
                  <text x="240" y="105" fontSize="10" fill="#10b981" textAnchor="middle">Output</text>
                </g>
                
                {/* Connection Lines */}
                <g stroke="#e2e8f0" strokeWidth="1" opacity="0.3">
                  {/* Input to first hidden */}
                  <line x1="46" y1="30" x2="114" y2="20" />
                  <line x1="46" y1="30" x2="114" y2="35" />
                  <line x1="46" y1="30" x2="114" y2="50" />
                  <line x1="46" y1="50" x2="114" y2="35" />
                  <line x1="46" y1="50" x2="114" y2="50" />
                  <line x1="46" y1="50" x2="114" y2="65" />
                  
                  {/* Hidden to hidden */}
                  <line x1="125" y1="35" x2="174" y2="30" />
                  <line x1="125" y1="35" x2="174" y2="45" />
                  <line x1="125" y1="50" x2="174" y2="45" />
                  <line x1="125" y1="50" x2="174" y2="60" />
                  
                  {/* Hidden to output */}
                  <line x1="185" y1="35" x2="234" y2="30" />
                  <line x1="185" y1="50" x2="234" y2="55" />
                  <line x1="185" y1="65" x2="234" y2="80" />
                </g>
              </svg>
            </div>
            
            {/* Model Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <div className="text-lg font-bold text-purple-700">175B</div>
                <div className="text-xs text-slate-600">Parameters</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <div className="text-lg font-bold text-blue-700">96</div>
                <div className="text-xs text-slate-600">Layers</div>
              </div>
            </div>
          </div>

          {/* AI Applications */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-5 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-base font-semibold">AI Applications</h4>
            </div>
            
            {/* Application Cards */}
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-3 mb-2">
                  <Bot className="w-5 h-5 text-blue-400" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Natural Language Processing</div>
                    <div className="text-xs text-white/70">Advanced text analysis & generation</div>
                  </div>
                  <div className="text-xs text-green-400 font-medium">Active</div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1">
                  <div className="bg-blue-400 h-1 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="w-5 h-5 text-purple-400" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Computer Vision</div>
                    <div className="text-xs text-white/70">Image & video analysis</div>
                  </div>
                  <div className="text-xs text-green-400 font-medium">Active</div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1">
                  <div className="bg-purple-400 h-1 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-green-400" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Recommendation Engine</div>
                    <div className="text-xs text-white/70">Personalized recommendations</div>
                  </div>
                  <div className="text-xs text-green-400 font-medium">Active</div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1">
                  <div className="bg-green-400 h-1 rounded-full" style={{ width: '91%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Training Status */}
            <div className="mt-4 p-3 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">Model Training</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-yellow-400">In Progress</span>
                </div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-1">
                <div className="bg-yellow-400 h-1 rounded-full" style={{ width: '73%' }}></div>
              </div>
              <div className="text-xs text-white/60 mt-1">Training new recommendation model...</div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-200/80">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <Cpu className="w-4 h-4 text-green-600" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">Performance</h4>
            </div>
            
            {/* Real-time Metrics */}
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Inference Speed</span>
                  <Zap className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-700 mb-1">1.2ms</div>
                <div className="text-xs text-slate-600">Average response time</div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Batch Processing</span>
                  <GitBranch className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-700 mb-1">512</div>
                <div className="text-xs text-slate-600">Concurrent requests</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg text-center">
                  <div className="text-lg font-bold text-slate-900">99.2%</div>
                  <div className="text-xs text-slate-600">Uptime</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center">
                  <div className="text-lg font-bold text-slate-900">< 50ms</div>
                  <div className="text-xs text-slate-600">Latency</div>
                </div>
              </div>
              
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="text-center mb-2">
                  <div className="text-lg font-bold text-purple-700">GPU Utilization</div>
                  <div className="text-sm text-slate-600">NVIDIA A100</div>
                </div>
                <div className="w-full bg-purple-100 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '84%' }}></div>
                </div>
                <div className="text-xs text-slate-600 text-center mt-1">84% utilized</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="mt-6 bg-white rounded-lg p-4 shadow-sm border border-slate-200/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-700">AI Pipeline Operational</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-slate-600">
              <span>GPU Clusters: 8 active</span>
              <span>Model Version: v2.4.1</span>
              <span>Training Queue: 3 models</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEngineeringVisual;