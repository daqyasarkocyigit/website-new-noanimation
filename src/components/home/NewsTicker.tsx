import React from 'react';
import { motion } from 'framer-motion';

const NewsTicker: React.FC = () => {
  const newsItems = [
    "🚀 New Azure Databricks Unity Catalog features launched",
    "💡 Microsoft Fabric Real-time Intelligence now GA", 
    "📊 Power BI Premium Per User updates available",
    "🤖 Azure OpenAI GPT-4 integration for enterprises",
    "⚡ Delta Lake 3.0 performance improvements released",
    "☁️ Azure Synapse Analytics new capabilities",
    "🔧 Data Factory metadata-driven pipelines enhanced",
    "📈 Power Query performance optimizations deployed",
    "🛡️ Azure Purview governance features expanded",
    "🔮 Machine Learning AutoML updates available"
  ];

  return (
    <div className="fixed right-4 top-1/3 w-80 h-96 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 overflow-hidden z-30">
      <div className="bg-gradient-to-r from-brand-red-600 to-brand-red-700 text-white p-3">
        <h3 className="text-sm font-semibold">Latest Updates</h3>
        <p className="text-xs opacity-90">Live technology news</p>
      </div>
      
      <div className="relative h-full overflow-hidden">
        <motion.div
          className="flex flex-col space-y-3 p-3"
          animate={{
            y: [0, -1000]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...newsItems, ...newsItems].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-3 rounded-lg border border-gray-100 shadow-sm min-h-[60px] flex items-center"
              whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Gradient fade effects */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/90 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default NewsTicker;