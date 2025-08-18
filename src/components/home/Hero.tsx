import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentUpdate, setCurrentUpdate] = useState(0);
  
  const services = [
    'Azure Solutions',
    'Databricks',
    'Microsoft Fabric',
    'Power BI'
  ];

  const successStories = [
    {
      title: 'Created metadata-driven ingestion pipeline with medallion architecture',
      description: 'Unlocked full potential of data analytics for Fortune 500 retail chain',
      time: '2 minutes ago',
      type: 'Data Engineering'
    },
    {
      title: 'Implemented Unity Catalog migration for enterprise lakehouse',
      description: 'Enhanced data governance and security across multi-cloud environment',
      time: '8 minutes ago',
      type: 'Data Architecture'
    },
    {
      title: 'Deployed real-time analytics with Microsoft Fabric',
      description: 'Enabled streaming analytics and live dashboard creation for healthcare',
      time: '15 minutes ago',
      type: 'Real-time Intelligence'
    },
    {
      title: 'Built AI-powered recommendation engine',
      description: 'Increased customer engagement by 34% using machine learning models',
      time: '23 minutes ago',
      type: 'AI Engineering'
    },
    {
      title: 'Modernized cloud infrastructure with Azure Synapse',
      description: 'Reduced operational costs by 45% while improving performance',
      time: '31 minutes ago',
      type: 'Cloud Modernization'
    },
    {
      title: 'Delivered comprehensive Power BI analytics suite',
      description: 'Transformed business intelligence capabilities for manufacturing leader',
      time: '45 minutes ago',
      type: 'Business Intelligence'
    }
  ];

  // Rotate services every 3 seconds
  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(serviceInterval);
  }, []);

  // Add new updates every 5 seconds
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(updateInterval);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255, 51, 51, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">We deliver </span>
                <br />
                <div className="relative inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentService}
                      className="text-[#FF3333]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {services[currentService]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Transform your business with enterprise-grade data platforms, AI solutions, and cloud modernization services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FF3333] hover:bg-[#e02d2d] text-white rounded-lg transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Project
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#FF3333] text-[#FF3333] hover:bg-[#FF3333] hover:text-white rounded-lg transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Embedded Live Feed */}
          <motion.div 
            className="relative lg:justify-self-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Live Feed - Embedded in Background */}
            <div 
              className="relative p-8 rounded-2xl border border-white/20"
              style={{
                backdropFilter: 'blur(20px)',
                background: 'rgba(255,255,255,0.3)',
              }}
            >

              <div className="space-y-4 max-h-[400px] overflow-hidden">
                <AnimatePresence>
                  {successStories.slice(0, 4).map((story, index) => (
                    <motion.div
                      key={`story-${currentUpdate}-${index}`}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                      }}
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle size={20} className="text-[#FF3333] mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-[#FF3333] bg-[#FF3333]/10 px-2 py-1 rounded-full">
                            {story.type}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock size={12} />
                            {story.time}
                          </div>
                        </div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">
                          {story.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {story.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FF3333]/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;