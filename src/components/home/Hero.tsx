import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentService, setCurrentService] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
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
    },
    {
      title: 'Implemented Delta Lake optimization for petabyte-scale data',
      description: 'Achieved 10x performance improvement for global e-commerce platform',
      time: '52 minutes ago',
      type: 'Data Engineering'
    },
    {
      title: 'Deployed MLflow pipeline for automated model deployment',
      description: 'Streamlined ML operations for financial services company',
      time: '1 hour ago',
      type: 'MLOps'
    }
  ];

  // Rotate services every 3 seconds
  useEffect(() => {
    const currentText = services[currentService];
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      // Pause after completing a word
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting) {
      // Deleting characters
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      } else {
        // Move to next service
        setIsDeleting(false);
        setCurrentService((prev) => (prev + 1) % services.length);
      }
    } else {
      // Typing characters
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 150);
      } else {
        // Pause when word is complete
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentService, displayText, isDeleting, isPaused, services]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">

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
              <h1 className="text-heading-1">
                <span className="text-gray-900">We deliver </span>
                <br />
                <div className="relative inline-block">
                  <span className="text-[#FF3333]">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </h1>
            </div>

            <p className="text-body-large max-w-lg">
              Transform your business with enterprise-grade data platforms, AI solutions, and cloud modernization services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#FF3333] hover:bg-[#e02d2d] text-white rounded-lg transition-all duration-300 text-button-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Project
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#FF3333] text-[#FF3333] hover:bg-[#FF3333] hover:text-white rounded-lg transition-all duration-300 text-button-base transform hover:-translate-y-1"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Continuous News Feed */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Continuous Success Stories Feed */}
            <div 
              className="relative p-6 rounded-2xl border border-white/20 h-[500px] overflow-hidden mx-auto max-w-lg"
              style={{
                backdropFilter: 'blur(20px)',
                background: 'rgba(255,255,255,0.3)',
              }}
            >
              {/* Scrolling Feed Container */}
              <div 
                className="absolute inset-x-6 top-0 flex flex-col"
                style={{
                  animation: 'continuousScroll 40s linear infinite'
                }}
              >
                {/* First Set of Stories */}
                {successStories.map((story, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex items-start gap-3 p-4 mb-4 rounded-xl"
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      minHeight: '120px'
                    }}
                  >
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                          {story.type}
                        </span>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 mb-1">
                        {story.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {story.description}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Second Set of Stories (duplicate for seamless loop) */}
                {successStories.map((story, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex items-start gap-3 p-4 mb-4 rounded-xl"
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      minHeight: '120px'
                    }}
                  >
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                          {story.type}
                        </span>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 mb-1">
                        {story.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {story.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gradient Overlays for Smooth Fade */}
              <div 
                className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)'
                }}
              />
              <div 
                className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(0deg, rgba(255,255,255,0.3) 0%, transparent 100%)'
                }}
              />
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