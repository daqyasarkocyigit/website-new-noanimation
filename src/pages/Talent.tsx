import React from 'react';
import { motion } from 'framer-motion';
import TalentOptions from '../components/talent/TalentOptions';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const Talent: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 animated-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hire Top Tech Talent
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find the right professionals for your business needs. We offer flexible staffing 
              solutions to help you build and scale your technical teams effectively.
            </motion.p>
          </div>
        </div>
      </section>

      <TalentOptions />
      <CallToAction />
    </>
  );
};

export default Talent;