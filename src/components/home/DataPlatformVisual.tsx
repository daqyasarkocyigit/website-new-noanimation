import React, { useState, useEffect } from 'react';
import { Database, Zap, Brain, Cloud, GitBranch, Activity, BarChart3, Network } from 'lucide-react';

const DataPlatformVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);
  const [processingStage, setProcessingStage] = useState(0);

  useEffect(() => {
    const nodeInterval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2000);

    const flowInterval = setInterval(() => {
      setDataFlow((prev) => (prev + 1) % 100);
    }, 50);

    const stageInterval = setInterval(() => {
      setProcessingStage((prev) => (prev + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(nodeInterval);
      clearInterval(flowInterval);
      clearInterval(stageInterval);
    };
  }, []);

  const nodes = [
    { id: 0, x: 15, y: 20, icon: Database, label: 'Data Sources', color: 'blue' },
    { id: 1, x: 45, y: 15, icon: GitBranch, label: 'ETL Pipeline', color: 'purple' },
    { id: 2, x: 75, y: 25, icon: Cloud, label: 'Data Lake', color: 'green' },
    { id: 3, x: 25, y: 60, icon: Brain, label: 'ML Models', color: 'orange' },
    { id: 4, x: 55, y: 70, icon: BarChart3, label: 'Analytics', color: 'red' },
    { id: 5, x: 85, y: 65, icon: Activity, label: 'Real-time', color: 'cyan' }
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 2, to: 5 },
    { from: 4, to: 5 }
  ];

  const getNodeColor = (color: string, isActive: boolean) => {
    const colors = {
      blue: isActive ? 'from-blue-500 to-blue-600' : 'from-blue-400/50 to-blue-500/50',
      purple: isActive ? 'from-purple-500 to-purple-600' : 'from-purple-400/50 to-purple-500/50',
      green: isActive ? 'from-green-500 to-green-600' : 'from-green-400/50 to-green-500/50',
      orange: isActive ? 'from-orange-500 to-orange-600' : 'from-orange-400/50 to-orange-500/50',
      red: isActive ? 'from-brand-red-500 to-brand-red-600' : 'from-brand-red-400/50 to-brand-red-500/50',
      cyan: isActive ? 'from-cyan-500 to-cyan-600' : 'from-cyan-400/50 to-cyan-500/50'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const renderConnection = (connection: { from: number; to: number }, index: number) => {
    const fromNode = nodes[connection.from];
    const toNode = nodes[connection.to];
    
    const isActive = activeNode === connection.from || activeNode === connection.to;
    
    return (
      <line
        key={index}
        x1={`${fromNode.x}%`}
        y1={`${fromNode.y}%`}
        x2={`${toNode.x}%`}
        y2={`${toNode.y}%`}
        stroke={isActive ? '#ef4444' : '#6b7280'}
        strokeWidth={isActive ? '3' : '2'}
        strokeOpacity={isActive ? '0.8' : '0.3'}
        className="transition-all duration-500"
        strokeDasharray={isActive ? '5,5' : 'none'}
        style={{
          animation: isActive ? 'dashFlow 2s linear infinite' : 'none'
        }}
      />
    );
  };

  const renderDataFlowParticle = (connection: { from: number; to: number }, index: number) => {
    const fromNode = nodes[connection.from];
    const toNode = nodes[connection.to];
    const progress = (dataFlow + index * 20) % 100;
    
    const x = fromNode.x + (toNode.x - fromNode.x) * (progress / 100);
    const y = fromNode.y + (toNode.y - fromNode.y) * (progress / 100);
    
    return (
      <circle
        key={`particle-${index}`}
        cx={`${x}%`}
        cy={`${y}%`}
        r="2"
        fill="#ef4444"
        opacity="0.8"
        className="animate-pulse"
      />
    );
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden relative">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(239,68,68,0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(59,130,246,0.1) 0%, transparent 50%),
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 30px 30px, 30px 30px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative w-full h-full p-6">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-2xl mb-4 shadow-2xl">
            <Network className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Modern Data Platform
          </h2>
          <p className="text-gray-300 text-sm">
            Unified Analytics & AI Infrastructure
          </p>
        </div>

        {/* Network Visualization */}
        <div className="relative h-80 mb-6">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {/* Connections */}
            {connections.map((connection, index) => renderConnection(connection, index))}
            
            {/* Data Flow Particles */}
            {connections.map((connection, index) => renderDataFlowParticle(connection, index))}
          </svg>

          {/* Nodes */}
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeNode === index;
            
            return (
              <div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  zIndex: isActive ? 20 : 10
                }}
              >
                <div className={`
                  relative w-16 h-16 rounded-2xl bg-gradient-to-br ${getNodeColor(node.color, isActive)}
                  flex items-center justify-center shadow-2xl transition-all duration-500
                  ${isActive ? 'scale-125 shadow-2xl' : 'scale-100'}
                `}>
                  <Icon className="w-6 h-6 text-white" />
                  
                  {/* Pulse effect for active node */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping" />
                  )}
                </div>
                
                {/* Label */}
                <div className={`
                  absolute top-full left-1/2 transform -translate-x-1/2 mt-2
                  text-xs font-medium text-center whitespace-nowrap transition-all duration-300
                  ${isActive ? 'text-white scale-110' : 'text-gray-400'}
                `}>
                  {node.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Processing Stages */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Ingest', icon: Database },
            { label: 'Process', icon: Zap },
            { label: 'Analyze', icon: Brain },
            { label: 'Visualize', icon: BarChart3 }
          ].map((stage, index) => {
            const Icon = stage.icon;
            const isActive = processingStage === index;
            
            return (
              <div
                key={index}
                className={`
                  bg-white/5 backdrop-blur-sm rounded-lg p-3 border transition-all duration-500
                  ${isActive 
                    ? 'border-brand-red-500/50 bg-brand-red-500/10 scale-105' 
                    : 'border-white/10 hover:border-white/20'
                  }
                `}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300
                    ${isActive 
                      ? 'bg-brand-red-600 text-white' 
                      : 'bg-white/10 text-gray-400'
                    }
                  `}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className={`
                  text-xs font-medium text-center transition-colors duration-300
                  ${isActive ? 'text-white' : 'text-gray-400'}
                `}>
                  {stage.label}
                </div>
                
                {/* Progress bar */}
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`
                      h-full transition-all duration-1000 ease-out
                      ${isActive 
                        ? 'w-full bg-gradient-to-r from-brand-red-500 to-brand-red-600' 
                        : 'w-0 bg-gray-500'
                      }
                    `}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">24/7</div>
            <div className="text-xs text-gray-400">Processing</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">99.9%</div>
            <div className="text-xs text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">∞</div>
            <div className="text-xs text-gray-400">Scale</div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-red-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes dashFlow {
          0% {
            stroke-dashoffset: 10;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default DataPlatformVisual;