import React from 'react';
import { Database, ArrowRight, BarChart3 } from 'lucide-react';

const DataEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative flex items-center justify-center p-6">
      
      {/* Clean Corporate Design */}
      <div className="w-full max-w-4xl">
        
        {/* Simple Title */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Database className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Data Pipeline</h3>
          <p className="text-gray-600">Scalable data processing infrastructure</p>
        </div>

        {/* Simple 3-Step Flow */}
        <div className="flex items-center justify-center gap-6 mb-8">
          
          {/* Step 1: Data Sources */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center min-w-[140px] hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Database className="w-6 h-6 text-gray-600" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Data Sources</h4>
            <p className="text-xs text-gray-500">Multiple Systems</p>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-6 h-6 text-brand-red-600 flex-shrink-0" />

          {/* Step 2: Processing */}
          <div className="bg-brand-red-50 p-6 rounded-xl shadow-lg border border-brand-red-100 text-center min-w-[140px] hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-brand-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-6 h-6 text-brand-red-700" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Processing</h4>
            <p className="text-xs text-gray-500">ETL & Transform</p>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-6 h-6 text-brand-red-600 flex-shrink-0" />

          {/* Step 3: Data Warehouse */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center min-w-[140px] hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Database className="w-6 h-6 text-gray-600" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Data Warehouse</h4>
            <p className="text-xs text-gray-500">Analytics Ready</p>
          </div>
        </div>

        {/* Simple Key Metrics */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-gray-900">24/7</div>
            <div className="text-xs text-gray-500">Processing</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-gray-900">98.7%</div>
            <div className="text-xs text-gray-500">Reliability</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-gray-900">1.2ms</div>
            <div className="text-xs text-gray-500">Latency</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringVisual;