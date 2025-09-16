import React from 'react';
import { Brain, Cpu, Zap, ArrowRight } from 'lucide-react';

const AIEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-transparent backdrop-blur-sm overflow-hidden relative flex items-center justify-center p-2 sm:p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 51, 51, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 51, 51, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>
      
      {/* Mobile-First Ultra Compact Layout */}
      <div className="w-full max-w-lg relative z-10">
        
        {/* Compact 3-Step Process - Mobile Optimized */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          
          {/* Step 1: Training */}
          <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-lg shadow-md border border-white/20 text-center min-w-[80px] sm:min-w-[120px] hover:shadow-lg hover:bg-white/15 transition-all duration-300">
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
              <Cpu className="w-3 h-3 sm:w-5 sm:h-5 text-gray-200" />
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-100 mb-0.5 sm:mb-1">Training</h4>
            <p className="text-xs text-gray-300 hidden sm:block">Model Building</p>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 text-brand-red-600 flex-shrink-0" />

          {/* Step 2: AI Engine */}
          <div className="bg-brand-red-600/20 backdrop-blur-sm p-2 sm:p-4 rounded-lg shadow-md border border-brand-red-500/30 text-center min-w-[80px] sm:min-w-[120px] hover:shadow-lg hover:bg-brand-red-600/30 transition-all duration-300">
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-brand-red-500/30 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
              <Brain className="w-3 h-3 sm:w-5 sm:h-5 text-brand-red-300" />
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-100 mb-0.5 sm:mb-1">AI Engine</h4>
            <p className="text-xs text-gray-300 hidden sm:block">Neural Processing</p>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 text-brand-red-600 flex-shrink-0" />

          {/* Step 3: Predictions */}
          <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-lg shadow-md border border-white/20 text-center min-w-[80px] sm:min-w-[120px] hover:shadow-lg hover:bg-white/15 transition-all duration-300">
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
              <Zap className="w-3 h-3 sm:w-5 sm:h-5 text-gray-200" />
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-100 mb-0.5 sm:mb-1">Predictions</h4>
            <p className="text-xs text-gray-300 hidden sm:block">Smart Results</p>
          </div>
        </div>

        {/* Compact Key Metrics - Mobile Optimized */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-3 max-w-sm mx-auto">
          <div className="text-center p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-sm sm:text-lg font-bold text-gray-100">99.7%</div>
            <div className="text-xs text-gray-300">Accuracy</div>
          </div>
          <div className="text-center p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-sm sm:text-lg font-bold text-gray-100">1.2ms</div>
            <div className="text-xs text-gray-300">Speed</div>
          </div>
          <div className="text-center p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-sm sm:text-lg font-bold text-gray-100">247</div>
            <div className="text-xs text-gray-300">Models</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEngineeringVisual;