import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden animated-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
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
              className="gradient-text"
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8"
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
              className="btn-primary touch-manipulation"
              role="button"
              aria-label="Hire Talent"
            >
              Hire Talent
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary touch-manipulation flex items-center justify-center"
              role="button"
              aria-label="View Our Services"
            >
              Our Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-electric-blue-400/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-32 -left-10 w-72 h-72 bg-midnight-purple-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;