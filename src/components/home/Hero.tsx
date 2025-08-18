import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden safe-top">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-0"></div>
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-5 z-0"
        style={{
          backgroundImage: 'url("/images/pattern-dots.svg")',
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      <div className="container relative z-10 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-8">
            <div className="max-w-4xl text-center lg:text-left">
          <motion.h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>Empowering </span>
            <span className="block sm:inline">
              <TypeAnimation
                sequence={[
                  'Data-Driven Decisions',
                  2000,
                  'AI Solutions',
                  2000,
                  'Cloud Transformations',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-brand-red-600"
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p
              className="text-base sm:text-lg md:text-xl text-cool-gray-600 leading-relaxed mb-8 max-w-3xl lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We build modern, scalable data ecosystems tailored to your business needs, 
            leveraging cutting-edge AI and cloud technologies.
          </motion.p>

          <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/talent" 
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center"
              role="button"
              aria-label="Hire Talent"
            >
              Hire Talent
            </Link>
            <Link 
              to="/services" 
                className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center"
              role="button"
              aria-label="View Our Services"
            >
              Our Services 
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
            </div>
          </div>

          {/* News Ticker - Right Side */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-gradient-to-r from-brand-red-600 to-brand-red-700 text-white p-4">
                <h3 className="text-lg font-semibold">Latest Updates</h3>
                <p className="text-sm opacity-90">Our services & expertise</p>
              </div>
              
              <div className="relative h-80 overflow-hidden">
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -bottom-10 -right-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-brand-red-600/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>
      <div className="absolute top-32 -left-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-gray-400/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>
    </section>
  );
};

export default Hero;