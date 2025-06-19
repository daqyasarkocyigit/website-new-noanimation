import React from 'react';
import { Brain, Cpu, Zap, Activity, Bot, Sparkles } from 'lucide-react';

const AIEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
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
        
        {/* AI Status Header */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-red-500 rounded-full animate-pulse" />
                <h3 className="text-sm font-semibold text-white">AI Engine</h3>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-white">99.7%</div>
                <div className="text-xs text-gray-300">Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Central AI Brain */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-4 border border-brand-red-500/30">
            <div className="relative bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-red-500/20 to-brand-red-600/20 animate-pulse flex items-center justify-center">
                  <Brain className="w-8 h-8 text-brand-red-400" />
                </div>
              </div>
              
              {/* Orbiting Functions */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[
                  { icon: Cpu, angle: 0, color: 'text-blue-400' },
                  { icon: Zap, angle: 90, color: 'text-yellow-400' },
                  { icon: Activity, angle: 180, color: 'text-green-400' },
                  { icon: Sparkles, angle: 270, color: 'text-purple-400' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="absolute w-6 h-6"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateX(30px)`,
                        animation: `orbit 8s linear infinite ${i * 2}s`
                      }}
                    >
                      <Icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* AI Applications */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
            <h4 className="text-xs font-semibold text-gray-300 mb-3 flex items-center justify-center">
              <Bot className="w-3 h-3 mr-1" />
              AI Applications
            </h4>
            
            <div className="space-y-2">
              <div className="bg-gray-900/50 rounded p-2 border border-gray-700/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-3 h-3 text-blue-400" />
                    <span className="text-xs text-gray-300">NLP Engine</span>
                  </div>
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-2 border border-gray-700/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-purple-400" />
                    <span className="text-xs text-gray-300">Computer Vision</span>
                  </div>
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">247</div>
              <div className="text-xs text-gray-400">Models</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">8.4M</div>
              <div className="text-xs text-gray-400">Predictions</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded p-2 text-center">
              <div className="text-sm font-bold text-white">1.2K</div>
              <div className="text-xs text-gray-400">API Calls</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(30px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(30px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AIEngineeringVisual;