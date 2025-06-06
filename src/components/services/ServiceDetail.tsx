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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const glowAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <section id={id} className="py-20 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
          <AnimatedSection delay={0.1} className="order-2 md:order-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-4">
                <div className="text-brand-red-600">
                  {icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
              </motion.div>
              
              <motion.p variants={itemVariants} className="text-lg text-cool-gray-600 mb-6 leading-relaxed">
                {description}
              </motion.p>
              
              <motion.ul variants={containerVariants} className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <Check size={20} className="text-brand-red-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-cool-gray-600">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3} className={`order-1 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
            <motion.div 
              className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-brand-red-50 to-slate-blue-50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* Animated Background Elements */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-red-200/30 rounded-full blur-2xl"
                animate={glowAnimation}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-slate-blue-200/30 rounded-full blur-2xl"
                animate={glowAnimation}
              />
              
              {/* Floating Icon */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                animate={floatingAnimation}
              >
                <motion.div
                  className="text-brand-red-600 transform scale-[2]"
                  whileHover={{ scale: 2.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-10 left-10 w-16 h-16 border-4 border-brand-red-200/50 rounded-lg"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-20 h-20 border-4 border-slate-blue-200/50 rounded-full"
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;