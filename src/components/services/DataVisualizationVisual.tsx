import React from 'react';
import { BarChart3, LineChart, PieChart, ArrowRight } from 'lucide-react';

const DataVisualizationVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-transparent overflow-hidden relative flex items-center justify-center p-2 sm:p-4">
      
      {/* Mobile-First Ultra Compact Layout */}
      <div className="w-full max-w-lg relative z-10">
        
        {/* Compact 3-Step Process - Mobile Optimized */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          
          {/* Step 1: Raw Data */}
          <div className="bg-transparent p-2 sm:p-4 rounded-lg border border-gray-200/20 text-center min-w-[80px] sm:min-w-[120px] hover:border-[#FF3333]/30 hover:bg-white/5 transition-all duration-300">
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
              <BarChart3 className="w-3 h-3 sm:w-5 sm:h-5 text-gray-600" />
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1">Raw Data</h4>
            <p className="text-xs text-gray-600 hidden sm:block">Complex Datasets</p>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 text-brand-red-600 flex-shrink-0" />

          {/* Step 2: Transform */}
          <div className="bg-transparent p-2 sm:p-4 rounded-lg border border-[#FF3333]/20 text-center min-w-[80px] sm:min-w-[120px] hover:border-[#FF3333]/50 hover:bg-[#FF3333]/5 transition-all duration-300">
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-[#FF3333]/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
              <PieChart className="w-3 h-3 sm:w-5 sm:h-5 text-brand-red-600" />
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1">Transform</h4>
            <p className="text-xs text-gray-600 hidden sm:block">Visual Processing</p>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 text-brand-red-600 flex-shrink-0" />

          {/* Step 3: Dashboards */}
          <div className="bg-transparent p-2 sm:p-4 rounded-lg border border-gray-200/20 text-center min-w-[80px] sm:min-w-[120px] hover:border-[#FF3333]/30 hover:bg-white/5 transition-all duration-300">
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
              <LineChart className="w-3 h-3 sm:w-5 sm:h-5 text-gray-600" />
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1">Dashboards</h4>
            <p className="text-xs text-gray-600 hidden sm:block">Visual Insights</p>
          </div>
        </div>

        {/* Compact Key Metrics - Mobile Optimized */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-3 max-w-sm mx-auto">
          <div className="text-center p-2 sm:p-3 bg-transparent rounded-lg border border-gray-200/20 hover:border-[#FF3333]/30 hover:bg-white/5 transition-all duration-300">
            <div className="text-sm sm:text-lg font-bold text-gray-900">0.8s</div>
            <div className="text-xs text-gray-600">Load Time</div>
          </div>
          <div className="text-center p-2 sm:p-3 bg-transparent rounded-lg border border-gray-200/20 hover:border-[#FF3333]/30 hover:bg-white/5 transition-all duration-300">
            <div className="text-sm sm:text-lg font-bold text-gray-900">60fps</div>
            <div className="text-xs text-gray-600">Smooth</div>
          </div>
          <div className="text-center p-2 sm:p-3 bg-transparent rounded-lg border border-gray-200/20 hover:border-[#FF3333]/30 hover:bg-white/5 transition-all duration-300">
            <div className="text-sm sm:text-lg font-bold text-gray-900">1.2M</div>
            <div className="text-xs text-gray-600">Data Points</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualizationVisual;