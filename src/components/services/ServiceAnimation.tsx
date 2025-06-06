import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

interface ServiceAnimationProps {
  animationData: any;
  title: string;
}

const ServiceAnimation: React.FC<ServiceAnimationProps> = ({ animationData, title }) => {
  return (
    <motion.div
      className="relative w-full aspect-square max-w-[400px] mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-full h-full"
        aria-label={`${title} animation`}
      />
    </motion.div>
  );
};

export default ServiceAnimation;