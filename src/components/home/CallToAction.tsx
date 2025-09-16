import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../utils/AnimatedSection';

const CallToAction: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-white/70 backdrop-blur-sm">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Data Capabilities?
          </motion.h2>
          
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how our AI and data solutions can help your business 
            achieve its goals and stay ahead of the competition.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3.5 rounded-lg bg-brand-red-600 hover:bg-brand-red-700 text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 min-h-[48px] touch-manipulation"
            >
              Get in Touch
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/10 to-transparent"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CallToAction;