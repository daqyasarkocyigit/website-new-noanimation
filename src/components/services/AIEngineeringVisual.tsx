import React from 'react';
import { Brain, Cpu, Network, Zap, Activity, GitBranch, Sparkles, Bot } from 'lucide-react';

const AIEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
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
      <div className="relative w-full h-full flex flex-col p-3">
        
        {/* AI Model Performance Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/20 shadow-xl mb-2">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-1.5 h-1.5 bg-brand-red-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white">AI Engine Status</h3>
                <p className="text-xs text-gray-300">Neural network processing pipeline</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-white tabular-nums">
                99.7%
              </div>
              <div className="text-xs text-gray-300 uppercase">Accuracy</div>
            </div>
          </div>
          
          {/* Model Performance Indicators */}
          <div className="grid grid-cols-3 gap-1.5">
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-0.5">Training</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div 
                  className="h-full w-full bg-gradient-to-r from-brand-red-600 to-brand-red-400 rounded-full"
                  style={{ animation: 'trainingProgress 3s ease-in-out infinite' }}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-0.5">Inference</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[88%] bg-green-500 rounded-full" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-0.5">Optimization</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[94%] bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* AI Architecture Grid */}
        <div className="flex-1 grid grid-cols-3 gap-2 min-h-0">
          
          {/* Model Architecture */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2.5 border border-gray-700/50 overflow-hidden">
            <h4 className="text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
              <Network className="w-3 h-3 mr-1" />
              Model Architecture
            </h4>
            
            {/* Neural Network Visualization */}
            <div className="bg-gray-900/50 rounded p-1.5 mb-1.5 border border-gray-700/30">
              <div className="flex justify-between items-center h-12">
                {/* Input Layer */}
                <div className="flex flex-col gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  ))}
                </div>
                
                {/* Hidden Layers */}
                <div className="flex gap-2">
                  {[0, 1].map((layer) => (
                    <div key={layer} className="flex flex-col gap-0.5">
                      {[0, 1, 2, 3].map((i) => (
                        <div 
                          key={i} 
                          className="w-1.5 h-1.5 bg-brand-red-500 rounded-full"
                          style={{
                            animation: `neuronPulse 2s ease-in-out infinite ${(layer * 4 + i) * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                
                {/* Output Layer */}
                <div className="flex flex-col gap-0.5">
                  {[0, 1].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-gray-500 text-center">Deep Neural Network</div>
            </div>
            
            {/* Model Stats */}
            <div className="space-y-1">
              <div className="bg-gray-900/50 rounded p-1 flex items-center justify-between border border-gray-700/30">
                <span className="text-xs text-gray-300">Parameters</span>
                <span className="text-xs text-gray-500">175B</span>
              </div>
              <div className="bg-gray-900/50 rounded p-1 flex items-center justify-between border border-gray-700/30">
                <span className="text-xs text-gray-300">Layers</span>
                <span className="text-xs text-gray-500">96</span>
              </div>
            </div>
          </div>

          {/* AI Processing Core */}
          <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-2.5 border border-brand-red-500/30 shadow-lg overflow-hidden">
            <h4 className="text-xs font-semibold text-brand-red-400 mb-1.5 flex items-center">
              <Brain className="w-3 h-3 mr-1" />
              AI Processing Core
            </h4>
            
            {/* Central AI Hub */}
            <div className="relative bg-white/5 rounded-lg p-3 border border-white/10 mb-1.5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red-500/20 to-brand-red-600/20 animate-pulse" />
              </div>
              <Brain className="w-6 h-6 text-brand-red-400 mx-auto relative z-10" />
              
              {/* Orbiting Functions */}
              <div className="absolute inset-0">
                {[
                  { icon: Cpu, angle: 0 },
                  { icon: Zap, angle: 90 },
                  { icon: Activity, angle: 180 },
                  { icon: GitBranch, angle: 270 }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="absolute w-3 h-3"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateX(20px)`,
                        animation: `orbit 8s linear infinite ${i * 2}s`
                      }}
                    >
                      <Icon className="w-3 h-3 text-brand-red-400/70" />
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Processing Stats */}
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-white/5 rounded p-1 text-center border border-white/10">
                <div className="text-xs text-gray-400">Speed</div>
                <div className="text-sm font-bold text-white">1.2ms</div>
              </div>
              <div className="bg-white/5 rounded p-1 text-center border border-white/10">
                <div className="text-xs text-gray-400">Batch</div>
                <div className="text-sm font-bold text-white">512</div>
              </div>
            </div>
          </div>

          {/* AI Applications */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2.5 border border-gray-700/50 overflow-hidden">
            <h4 className="text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Applications
            </h4>
            
            {/* Application Cards */}
            <div className="space-y-1.5">
              <div className="bg-gray-900/50 rounded p-1.5 border border-gray-700/30">
                <div className="flex items-center gap-1.5">
                  <Bot className="w-3 h-3 text-blue-400" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-300 truncate">NLP Engine</div>
                    <div className="text-xs text-gray-500 truncate">Language Processing</div>
                  </div>
                  <div className="text-xs text-green-400">Active</div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-1.5 border border-gray-700/30">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-purple-400" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-300 truncate">Computer Vision</div>
                    <div className="text-xs text-gray-500 truncate">Image Analysis</div>
                  </div>
                  <div className="text-xs text-green-400">Active</div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-1.5 border border-gray-700/30">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-300 truncate">Recommendation</div>
                    <div className="text-xs text-gray-500 truncate">Predictive Engine</div>
                  </div>
                  <div className="text-xs text-green-400">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Performance Metrics */}
        <div className="grid grid-cols-4 gap-1.5 mt-2">
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Models</div>
                <div className="text-sm font-bold text-white">247</div>
                <div className="text-xs text-gray-500">deployed</div>
              </div>
              <Brain className="w-3 h-3 text-brand-red-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Predictions</div>
                <div className="text-sm font-bold text-white">8.4M</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <Sparkles className="w-3 h-3 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Efficiency</div>
                <div className="text-sm font-bold text-white">94%</div>
                <div className="text-xs text-gray-500">optimized</div>
              </div>
              <Zap className="w-3 h-3 text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-1.5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">API Calls</div>
                <div className="text-sm font-bold text-white">1.2K</div>
                <div className="text-xs text-gray-500">per sec</div>
              </div>
              <Activity className="w-3 h-3 text-green-500" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes neuronPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
        
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(20px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }
        
        @keyframes trainingProgress {
          0%, 100% {
            width: 75%;
          }
          50% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default AIEngineeringVisual;