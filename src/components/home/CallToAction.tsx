import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../utils/AnimatedSection';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden snap-section min-h-[100vh] flex items-center">
      <div className="absolute inset-0 bg-cta-pattern bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue-600/90 to-midnight-purple-700/90"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Data Capabilities?
          </motion.h2>
          
          <motion.p
            className="text-base md:text-xl text-black mb-8 px-4 md:px-0"
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
            className="px-4 md:px-0"
          >
            <Link 
              to="/contact" 
              className="inline-block w-full sm:w-auto px-8 py-4 rounded-md bg-white text-electric-blue-600 font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 min-h-[44px]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/10 to-transparent"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl transform-gpu"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl transform-gpu"></div>
    </section>
  );
};

export default CallToAction;