import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-0"></div>
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-5 z-0"
        style={{
          backgroundImage: 'url("/images/pattern-dots.svg")',
          backgroundSize: '30px 30px'
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>Empowering </span>
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
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-cool-gray-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We build modern, scalable data ecosystems tailored to your business needs, 
            leveraging cutting-edge AI and cloud technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/talent" 
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-red-600 hover:bg-brand-red-700 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 touch-manipulation"
              role="button"
              aria-label="Hire Talent"
            >
              Hire Talent
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 touch-manipulation"
              role="button"
              aria-label="View Our Services"
            >
              Our Services <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-brand-red-600/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>
      <div className="absolute top-32 -left-10 w-72 h-72 bg-gray-400/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>
    </section>
  );
};

export default Hero;