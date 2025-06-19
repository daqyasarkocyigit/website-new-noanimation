import React from 'react';
import { Activity, BarChart3, Database, Zap } from 'lucide-react';

interface MobileOptimizedVisualProps {
  type: 'data-engineering' | 'data-visualization' | 'business-intelligence' | 'ai-engineering' | 'cloud-modernization';
}

const MobileOptimizedVisual: React.FC<MobileOptimizedVisualProps> = ({ type }) => {
  const getVisualConfig = () => {
    switch (type) {
      case 'data-engineering':
        return {
          title: 'Data Pipeline',
          subtitle: 'Real-time processing',
          primaryMetric: '24.3K',
          primaryLabel: 'records/sec',
          icon: Database,
          color: 'brand-red',
          bgGradient: 'from-gray-900 via-gray-800 to-gray-900',
          metrics: [
            { label: 'Latency', value: '1.2ms', icon: Zap, color: 'yellow' },
            { label: 'Success', value: '98.7%', icon: Activity, color: 'green' },
            { label: 'Storage', value: '12.4TB', icon: Database, color: 'blue' },
          ]
        };
      case 'data-visualization':
        return {
          title: 'Dashboard Analytics',
          subtitle: 'Live visualization',
          primaryMetric: '15.2K',
          primaryLabel: 'active users',
          icon: BarChart3,
          color: 'purple',
          bgGradient: 'from-purple-900 via-gray-800 to-gray-900',
          metrics: [
            { label: 'Load Time', value: '0.8s', icon: Zap, color: 'green' },
            { label: 'FPS', value: '60fps', icon: Activity, color: 'brand-red' },
            { label: 'Charts', value: '87', icon: BarChart3, color: 'purple' },
          ]
        };
      case 'business-intelligence':
        return {
          title: 'BI Analytics Hub',
          subtitle: 'Advanced insights',
          primaryMetric: '87%',
          primaryLabel: 'accuracy',
          icon: Activity,
          color: 'blue',
          bgGradient: 'from-blue-900 via-gray-800 to-gray-900',
          metrics: [
            { label: 'ROI', value: '3.2x', icon: Activity, color: 'green' },
            { label: 'Efficiency', value: '42%', icon: Zap, color: 'yellow' },
            { label: 'Models', value: '34', icon: Database, color: 'blue' },
          ]
        };
      case 'ai-engineering':
        return {
          title: 'AI Engine Status',
          subtitle: 'Neural processing',
          primaryMetric: '99.7%',
          primaryLabel: 'accuracy',
          icon: Activity,
          color: 'green',
          bgGradient: 'from-green-900 via-gray-800 to-gray-900',
          metrics: [
            { label: 'Models', value: '247', icon: Database, color: 'brand-red' },
            { label: 'Speed', value: '1.2ms', icon: Zap, color: 'yellow' },
            { label: 'API Calls', value: '1.2K/s', icon: Activity, color: 'green' },
          ]
        };
      case 'cloud-modernization':
        return {
          title: 'Cloud Migration',
          subtitle: 'Infrastructure upgrade',
          primaryMetric: '100%',
          primaryLabel: 'complete',
          icon: Database,
          color: 'blue',
          bgGradient: 'from-blue-900 via-gray-800 to-gray-900',
          metrics: [
            { label: 'Cost Savings', value: '42%', icon: Activity, color: 'green' },
            { label: 'Performance', value: '3.2x', icon: Zap, color: 'yellow' },
            { label: 'Uptime', value: '99.99%', icon: Database, color: 'blue' },
          ]
        };
      default:
        return {
          title: 'System Status',
          subtitle: 'Monitoring',
          primaryMetric: '100%',
          primaryLabel: 'operational',
          icon: Activity,
          color: 'brand-red',
          bgGradient: 'from-gray-900 via-gray-800 to-gray-900',
          metrics: []
        };
    }
  };

  const config = getVisualConfig();
  const IconComponent = config.icon;

  return (
    <div className={`w-full h-full bg-gradient-to-br ${config.bgGradient} rounded-xl overflow-hidden relative`}>
      {/* Background Pattern - Simplified for mobile */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Main Container - Mobile-first layout */}
      <div className="relative w-full h-full flex flex-col p-3 sm:p-4">
        
        {/* Header Card - Primary focal point */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 shadow-xl mb-3 flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className={`w-2 h-2 bg-${config.color}-500 rounded-full animate-pulse`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{config.title}</h3>
                <p className="text-xs text-gray-300">{config.subtitle}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">
                {config.primaryMetric}
              </div>
              <div className="text-xs text-gray-300 uppercase">{config.primaryLabel}</div>
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r from-${config.color}-500 to-${config.color}-600 rounded-full transition-all duration-1000`}
              style={{ width: '85%' }}
            />
          </div>
        </div>

        {/* Central Visual Element - Simplified for mobile */}
        <div className="flex-1 flex items-center justify-center mb-3">
          <div className="relative">
            {/* Main icon with glow effect */}
            <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-${config.color}-500 to-${config.color}-600 rounded-full flex items-center justify-center shadow-2xl`}>
              <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            
            {/* Animated rings */}
            <div className={`absolute inset-0 rounded-full border-2 border-${config.color}-500/30 animate-ping`} />
            <div className={`absolute -inset-2 rounded-full border border-${config.color}-500/20 animate-pulse`} />
          </div>
        </div>

        {/* Bottom Metrics - Touch-friendly grid */}
        <div className="grid grid-cols-3 gap-2 flex-shrink-0">
          {config.metrics.map((metric, index) => {
            const MetricIcon = metric.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/10 min-h-[60px] sm:min-h-[70px] flex flex-col justify-center"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="text-xs text-gray-400">{metric.label}</div>
                  <MetricIcon className={`w-3 h-3 text-${metric.color}-500`} />
                </div>
                <div className="text-sm sm:text-base font-bold text-white">{metric.value}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reduced motion fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .animate-ping {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileOptimizedVisual;