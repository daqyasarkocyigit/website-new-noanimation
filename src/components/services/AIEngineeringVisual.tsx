import React from 'react';
import { Brain, Cpu, Zap, Activity } from 'lucide-react';

const AIEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative flex items-center justify-center p-4">
      
      {/* Main Container */}
      <div className="w-full max-w-2xl">
        
        {/* Simple 3-Step Process */}
        <div className="flex items-center justify-center gap-4 mb-6">
          
          {/* Step 1: Data Input */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center min-w-[120px] hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Cpu className="w-5 h-5 text-gray-600" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Training</h4>
            <p className="text-xs text-gray-500">Model Building</p>
          </div>

          {/* Arrow */}
          <div className="text-brand-red-600 flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Step 2: AI Processing */}
          <div className="bg-brand-red-50 p-4 rounded-lg shadow-md border border-brand-red-100 text-center min-w-[120px] hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 bg-brand-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Brain className="w-5 h-5 text-brand-red-700" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">AI Engine</h4>
            <p className="text-xs text-gray-500">Neural Processing</p>
          </div>

          {/* Arrow */}
          <div className="text-brand-red-600 flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Step 3: Predictions */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center min-w-[120px] hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Zap className="w-5 h-5 text-gray-600" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Predictions</h4>
            <p className="text-xs text-gray-500">Smart Results</p>
          </div>
        </div>

        {/* Simple Key Metrics */}
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
          <div className="text-center p-3 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="text-lg font-bold text-gray-900">99.7%</div>
            <div className="text-xs text-gray-500">Accuracy</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="text-lg font-bold text-gray-900">1.2ms</div>
            <div className="text-xs text-gray-500">Speed</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="text-lg font-bold text-gray-900">247</div>
            <div className="text-xs text-gray-500">Models</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEngineeringVisual;