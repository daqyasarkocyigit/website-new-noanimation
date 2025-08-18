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

  const projectUpdates = [
    {
      title: 'Azure Synapse deployment completed',
      client: 'Fortune 500 Retail',
      time: '2 minutes ago',
      status: 'completed'
    },
    {
      title: 'Databricks Unity Catalog implemented',
      client: 'Healthcare Provider',
      time: '8 minutes ago',
      status: 'completed'
    },
    {
      title: 'Microsoft Fabric dashboard launched',
      client: 'Financial Services',
      time: '15 minutes ago',
      status: 'completed'
    },
    {
      title: 'Power BI KPIs delivered',
      client: 'Manufacturing Corp',
      time: '23 minutes ago',
      status: 'completed'
    },
    {
      title: 'MLflow pipeline deployed',
      client: 'Tech Startup',
      time: '31 minutes ago',
      status: 'completed'
    },
    {
      title: 'Delta Lake migration finished',
      client: 'E-commerce Platform',
      time: '45 minutes ago',
      status: 'completed'
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
      setCurrentUpdate((prev) => (prev + 1) % projectUpdates.length);
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
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-[#FF3333] rounded-full animate-pulse"></div>
              </div>

              <div className="space-y-4 max-h-96 overflow-hidden">
                <AnimatePresence>
                  {projectUpdates.slice(0, 4).map((update, index) => (
                    <motion.div
                      key={`${currentUpdate}-${index}`}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle size={20} className="text-[#FF3333] mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800 mb-1">
                          {update.title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-1">
                          {update.client}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock size={12} />
                          {update.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Feed Stats */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-800">24</div>
                    <div className="text-xs text-gray-600">Active Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">5.2K</div>
                    <div className="text-xs text-gray-600">Hours Delivered</div>
                  </div>
                </div>
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