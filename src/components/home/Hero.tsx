import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            We build modern, scalable data ecosystems tailored to your business needs, 
            leveraging cutting-edge AI and cloud technologies.
          </p>
        </motion.div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red-500/5 via-slate-blue-500/5 to-brand-red-400/5 pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-electric-blue-400/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-32 -left-10 w-72 h-72 bg-midnight-purple-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;