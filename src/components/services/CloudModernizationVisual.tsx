import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function CloudModernizationVisual() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.1)_49%,rgba(59,130,246,0.1)_51%,transparent_52%)] bg-[length:20px_20px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Cloud Infrastructure</h3>
            <p className="text-blue-200 text-sm">Enterprise-grade modernization in progress</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
            <span className="text-green-300 text-sm font-medium">Live Migration</span>
          </div>
        </div>

        {/* Enterprise Metrics Dashboard */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Cost Reduction', value: '42%', trend: '↓ $2.1M/year', color: 'from-blue-500 to-blue-600' },
            { label: 'Deployment Speed', value: '3.2x', trend: '↑ 68% faster', color: 'from-cyan-500 to-blue-600' },
            { label: 'System Uptime', value: '99.99%', trend: 'SLA Exceeded', color: 'from-indigo-500 to-purple-600' },
            { label: 'Auto-Scaling', value: 'Active', trend: '24/7 Monitor', color: 'from-slate-500 to-slate-600' }
          ].map((metric, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-sm rounded-xl p-3 border border-slate-600/40 group hover:border-blue-500/50 transition-all duration-300 shadow-lg"
              style={{
                animation: `metricSlide 0.5s ease-out forwards`,
                animationDelay: `${1.2 + i * 0.1}s`,
                opacity: 0
              }}
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${metric.color} rounded-full mb-3 shadow-sm`} />
              <div className="text-xl font-bold text-white tracking-tight">{metric.value}</div>
              <div className="text-xs text-slate-300 font-medium">{metric.label}</div>
              <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                <ChevronRight className="w-3 h-3 text-blue-400" />
                {metric.trend}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes metricSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}