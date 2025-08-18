import React from 'react';
import { motion } from 'framer-motion';

const NewsTicker: React.FC = () => {
  const newsItems = [
    "🚀 DAQ launches Azure Databricks Unity Catalog migration services",
    "💡 New Microsoft Fabric Real-time Intelligence implementations by DAQ", 
    "📊 Power BI Premium dashboard development services expanded",
    "🤖 DAQ integrates Azure OpenAI in enterprise data solutions",
    "⚡ Delta Lake 3.0 performance optimization consulting available",
    "☁️ Cloud modernization with Azure Synapse Analytics expertise",
    "🔧 Metadata-driven pipeline development using Azure Data Factory",
    "📈 Advanced DAX and Power Query optimization services",
    "🛡️ Data governance solutions with Azure Purview implementation",
    "🔮 MLOps and AutoML consulting services now available",
    "🏗️ Lakehouse architecture design and implementation",
    "🎯 Business Intelligence transformation consulting",
    "🔄 ETL/ELT pipeline modernization services",
    "📊 Interactive dashboard and visualization development",
    "🧠 AI Engineering and machine learning model deployment"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-brand-red-600 to-brand-red-700 text-white p-4">
        <h3 className="text-lg font-semibold">Latest DAQ Updates</h3>
        <p className="text-sm opacity-90">Our services and technology expertise</p>
      </div>
      
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <motion.div
          className="flex flex-col space-y-4 p-4"
          animate={{
            y: [0, -2000]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...newsItems, ...newsItems, ...newsItems].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50/80 p-4 rounded-lg border border-gray-100 shadow-sm min-h-[70px] flex items-center"
              whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-base text-gray-700 leading-relaxed font-medium">{item}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Gradient fade effects */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/90 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default NewsTicker;