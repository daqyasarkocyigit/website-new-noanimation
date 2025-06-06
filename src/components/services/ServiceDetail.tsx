import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  isReversed?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  title,
  description,
  benefits,
  icon,
  isReversed = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id={id} className="py-20 scroll-mt-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="order-2 md:order-1">
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              variants={itemVariants}
            >
              <motion.div 
                className="text-brand-red-600"
                variants={iconVariants}
              >
                {icon}
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-cool-gray-600 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>
            
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  variants={benefitVariants}
                  custom={index}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <Check size={20} className="text-brand-red-600 mt-1 mr-3 flex-shrink-0" />
                  </motion.div>
                  <span className="text-cool-gray-600">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          <motion.div 
            className={`order-1 ${isReversed ? 'md:order-1' : 'md:order-2'}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative p-8 bg-gradient-to-br from-brand-red-50 to-slate-50 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/50 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="relative z-10 flex items-center justify-center h-64"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="text-brand-red-600 transform scale-[300%]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, type: "spring" }}
                >
                  {icon}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetail;