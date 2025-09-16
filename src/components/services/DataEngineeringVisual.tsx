import React from 'react';
import { Database, ArrowRight, BarChart3 } from 'lucide-react';

const DataEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-white/80 backdrop-blur-sm overflow-hidden relative flex items-center justify-center p-2 sm:p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 51, 51, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 51, 51, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>
      
      {/* Mobile-First Ultra Compact Layout */}
      <div className="w-full max-w-lg relative z-10">
        
        {/* Compact 3-Step Process - Mobile Optimized */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          
          {/* Step 1: Data Sources */}
          <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-4 rounded-lg shadow-md border border-gray-200/50 text-center min-w-[80px] sm:min-w-[120px] hover:shadow-lg hover:bg-white transition-all duration-300">
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
              <Database className="w-3 h-3 sm:w-5 sm:h-5 text-gray-600" />
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1">Sources</h4>
            <p className="text-xs text-gray-600 hidden sm:block">Multiple Systems</p>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 text-brand-red-600 flex-shrink-0" />

          {/* Step 2: Processing */}
          <div className="bg-brand-red-50 backdrop-blur-sm p-2 sm:p-4 rounded-lg shadow-md border border-brand-red-200 text-center min-w-[80px] sm:min-w-[120px] hover:shadow-lg hover:bg-brand-red-100 transition-all duration-300">
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-brand-red-100 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
              <BarChart3 className="w-3 h-3 sm:w-5 sm:h-5 text-brand-red-600" />
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1">Processing</h4>
            <p className="text-xs text-gray-600 hidden sm:block">ETL & Transform</p>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 text-brand-red-600 flex-shrink-0" />

          {/* Step 3: Warehouse */}
          <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-4 rounded-lg shadow-md border border-gray-200/50 text-center min-w-[80px] sm:min-w-[120px] hover:shadow-lg hover:bg-white transition-all duration-300">
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
              <Database className="w-3 h-3 sm:w-5 sm:h-5 text-gray-600" />
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1">Warehouse</h4>
            <p className="text-xs text-gray-600 hidden sm:block">Analytics Ready</p>
          </div>
        </div>

        {/* Compact Key Metrics - Mobile Optimized */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-3 max-w-sm mx-auto">
          <div className="text-center p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-gray-200/50 hover:bg-white transition-all duration-300">
            <div className="text-sm sm:text-lg font-bold text-gray-900">24/7</div>
            <div className="text-xs text-gray-600">Processing</div>
          </div>
          <div className="text-center p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-gray-200/50 hover:bg-white transition-all duration-300">
            <div className="text-sm sm:text-lg font-bold text-gray-900">98.7%</div>
            <div className="text-xs text-gray-600">Reliability</div>
          </div>
          <div className="text-center p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-gray-200/50 hover:bg-white transition-all duration-300">
            <div className="text-sm sm:text-lg font-bold text-gray-900">1.2ms</div>
            <div className="text-xs text-gray-600">Latency</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringVisual;