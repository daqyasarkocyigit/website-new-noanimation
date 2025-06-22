import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import DataPlatformVisual from '../components/home/DataPlatformVisual';

const Home: React.FC = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className="text-center lg:text-left">
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
              className="text-base sm:text-lg md:text-xl text-cool-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
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

          {/* Visual Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-brand-red-600/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gray-400/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>
              
              {/* Main visual container */}
              <div className="relative z-10 w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <DataPlatformVisual />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -bottom-10 -right-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-brand-red-600/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>
      <div className="absolute top-32 -left-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-gray-400/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>
    </section>
  );
};

export default Home;