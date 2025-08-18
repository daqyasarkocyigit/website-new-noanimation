import React from 'react';
import { Server, Cloud, Shield, TrendingUp } from 'lucide-react';

const CloudModernizationVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative flex items-center justify-center p-4">
      
      {/* Main Container */}
      <div className="w-full max-w-2xl">
        
        {/* Simple 3-Step Process */}
        <div className="flex items-center justify-center gap-4 mb-6">
          
          {/* Step 1: On-Premises */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center min-w-[120px] hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Server className="w-5 h-5 text-gray-600" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">On-Premises</h4>
            <p className="text-xs text-gray-500">Legacy Systems</p>
          </div>

          {/* Arrow */}
          <div className="text-brand-red-600 flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Step 2: Migration */}
          <div className="bg-brand-red-50 p-4 rounded-lg shadow-md border border-brand-red-100 text-center min-w-[120px] hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 bg-brand-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield className="w-5 h-5 text-brand-red-700" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Migration</h4>
            <p className="text-xs text-gray-500">Secure Transfer</p>
          </div>

          {/* Arrow */}
          <div className="text-brand-red-600 flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Step 3: Cloud Platform */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center min-w-[120px] hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Cloud className="w-5 h-5 text-gray-600" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Cloud</h4>
            <p className="text-xs text-gray-500">Modern Platform</p>
          </div>
        </div>

        {/* Simple Key Metrics */}
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
          <div className="text-center p-3 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="text-lg font-bold text-gray-900">42%</div>
            <div className="text-xs text-gray-500">Cost Savings</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="text-lg font-bold text-gray-900">3.2x</div>
            <div className="text-xs text-gray-500">Performance</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="text-lg font-bold text-gray-900">99.99%</div>
            <div className="text-xs text-gray-500">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudModernizationVisual;