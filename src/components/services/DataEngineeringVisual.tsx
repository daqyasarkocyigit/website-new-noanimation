import React from 'react';
import { Database, ArrowRight, Activity } from 'lucide-react';

const DataEngineeringVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-white overflow-hidden relative">
      {/* Simple Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
        
        {/* Title */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Database className="w-8 h-8 text-brand-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Data Pipeline</h3>
          <p className="text-gray-600">Scalable data processing infrastructure</p>
        </div>

        {/* Simple Pipeline Flow */}
        <div className="flex items-center justify-center gap-6 mb-8">
          
          {/* Data Sources */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center min-w-[120px]">
            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Database className="w-5 h-5 text-gray-600" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Sources</h4>
            <p className="text-xs text-gray-500">APIs, DBs, Files</p>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center">
            <ArrowRight className="w-6 h-6 text-brand-red-500" />
            <div className="mt-2 px-2 py-1 bg-brand-red-100 text-brand-red-600 text-xs font-medium rounded">
              Process
            </div>
          </div>

          {/* Data Processing */}
          <div className="bg-brand-red-50 p-6 rounded-xl border border-brand-red-200 text-center min-w-[120px]">
            <div className="w-10 h-10 bg-brand-red-200 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Activity className="w-5 h-5 text-brand-red-700" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Pipeline</h4>
            <p className="text-xs text-gray-500">ETL & Transform</p>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center">
            <ArrowRight className="w-6 h-6 text-brand-red-500" />
            <div className="mt-2 px-2 py-1 bg-brand-red-100 text-brand-red-600 text-xs font-medium rounded">
              Store
            </div>
          </div>

          {/* Data Warehouse */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center min-w-[120px]">
            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Database className="w-5 h-5 text-gray-600" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">Warehouse</h4>
            <p className="text-xs text-gray-500">Analytics Ready</p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
          <div className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="text-lg font-bold text-gray-900">24/7</div>
            <div className="text-xs text-gray-500">Processing</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="text-lg font-bold text-gray-900">98.7%</div>
            <div className="text-xs text-gray-500">Reliability</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="text-lg font-bold text-gray-900">1.2ms</div>
            <div className="text-xs text-gray-500">Latency</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringVisual;