import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Database, BarChart3, Brain, Cloud, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentService, setCurrentService] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const services = [
    'Azure Solutions',
    'Databricks',
    'Microsoft Fabric', 
    'Power BI',
    'AI Engineering'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentText = services[currentService];
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      } else {
        setIsDeleting(false);
        setCurrentService((prev) => (prev + 1) % services.length);
      }
    } else {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 150);
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentService, displayText, isDeleting, isPaused, services]);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        
        {/* Animated Data Network */}
        <div className="absolute inset-0">
          {/* Network Grid */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="w-full h-full animate-network-pulse"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px'
              }}
            />
          </div>

          {/* Floating Data Nodes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-brand-red-500 rounded-full shadow-lg shadow-brand-red-500/50"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
            animate={{
              y: [15, -15, 15],
              x: [8, -8, 8],
              scale: [0.8, 1.1, 0.8],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          <motion.div
            className="absolute top-2/3 left-1/5 w-5 h-5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
            animate={{
              y: [-25, 25, -25],
              x: [-15, 15, -15],
              scale: [1.1, 0.9, 1.1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Data Stream Lines */}
          <motion.div
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red-500 to-transparent opacity-60"
            animate={{
              x: [-100, window.innerWidth + 100, -100]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"
            animate={{
              x: [window.innerWidth + 100, -100, window.innerWidth + 100]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
          />

          {/* Floating Icons */}
          <motion.div
            className="absolute top-1/6 right-1/4 text-brand-red-500 opacity-30"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Database size={24} />
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/6 text-blue-500 opacity-25"
            animate={{
              y: [12, -12, 12],
              rotate: [360, 180, 0],
              scale: [0.9, 1.2, 0.9]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <BarChart3 size={20} />
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 right-1/5 text-purple-500 opacity-30"
            animate={{
              y: [-15, 15, -15],
              rotate: [0, -180, -360],
              scale: [1.1, 0.8, 1.1]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
          >
            <Brain size={28} />
          </motion.div>

          <motion.div
            className="absolute top-3/4 left-2/3 text-green-500 opacity-25"
            animate={{
              y: [8, -8, 8],
              rotate: [180, 360, 540],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.2
            }}
          >
            <Cloud size={22} />
          </motion.div>

          {/* Animated Particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: Math.random() * 5
              }}
            />
          ))}

          {/* Glowing Orbs */}
          <motion.div
            className="absolute top-1/5 right-1/3 w-32 h-32 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(239,68,68,0.6) 0%, transparent 70%)',
              filter: 'blur(20px)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)',
              filter: 'blur(25px)'
            }}
            animate={{
              scale: [1.2, 0.8, 1.2],
              opacity: [0.15, 0.35, 0.15]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>

      {/* Content */}
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
              <motion.h1 
                className="text-heading-1 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="text-gray-200">We deliver </span>
                <br />
                <div className="relative inline-block">
                  <span className="text-[#FF3333]">
                    {displayText}
                    <motion.span 
                      className="inline-block w-0.5 h-8 bg-[#FF3333] ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </span>
                </div>
              </motion.h1>
            </div>

            <motion.p 
              className="text-body-large max-w-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your business with enterprise-grade data platforms, AI solutions, and cloud modernization services.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#FF3333] hover:bg-[#e02d2d] text-white rounded-lg transition-all duration-300 text-button-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Start Your Project
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#FF3333] text-[#FF3333] hover:bg-[#FF3333] hover:text-white rounded-lg transition-all duration-300 text-button-base transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm bg-white/5"
              >
                View Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF3333]">98.7%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">3.2x</div>
                <div className="text-sm text-gray-400">ROI Average</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Data Visualization */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Data Visualization Panel */}
            <div className="relative p-8 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 shadow-2xl">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white font-medium">Live Data Pipeline</span>
                </div>
                <motion.div
                  className="text-[#FF3333] font-mono text-sm"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  PROCESSING...
                </motion.div>
              </div>

              {/* Data Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div 
                  className="p-4 rounded-lg bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Records/sec</span>
                    <Database size={16} className="text-[#FF3333]" />
                  </div>
                  <motion.div 
                    className="text-2xl font-bold text-white mt-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    24.3K
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="p-4 rounded-lg bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Accuracy</span>
                    <Brain size={16} className="text-blue-500" />
                  </div>
                  <motion.div 
                    className="text-2xl font-bold text-white mt-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  >
                    99.7%
                  </motion.div>
                </motion.div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Data Processing</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#FF3333] to-red-600 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>AI Model Training</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Cloud Deployment</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "easeOut", delay: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#FF3333]/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/15 rounded-full blur-xl"
              animate={{
                scale: [1.2, 0.8, 1.2],
                opacity: [0.15, 0.3, 0.15]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes networkPulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        .animate-network-pulse {
          animation: networkPulse 4s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-network-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;