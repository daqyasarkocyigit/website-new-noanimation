import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  // Create ref at the top level of the component
  const sectionRef = React.useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef, // Use the ref here
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const iconContainerVariants = {
    hidden: { 
      scale: 0,
      rotate: -180,
      opacity: 0 
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      },
    },
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.1,
      },
    }),
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    rotate: [-1, 1, -1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 0 0 rgba(255, 20, 20, 0)",
      "0 0 20px 10px rgba(255, 20, 20, 0.2)",
      "0 0 0 0 rgba(255, 20, 20, 0)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section id={id} className="py-20 scroll-mt-24 overflow-hidden" ref={sectionRef}>
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        style={{ opacity: springOpacity, scale: springScale }}
      >
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
              variants={titleVariants}
            >
              <motion.div 
                className="text-brand-red-600 relative"
                variants={iconContainerVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div
                  className="absolute -inset-4 bg-brand-red-100 rounded-full z-0"
                  animate={glowAnimation}
                />
                <motion.div className="relative z-10">
                  {icon}
                </motion.div>
              </motion.div>
              <motion.h2 
                className="text-3xl font-bold text-gray-900"
                variants={titleVariants}
              >
                {title}
              </motion.h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-cool-gray-600 mb-6 leading-relaxed"
              variants={titleVariants}
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
                  custom={index}
                  variants={benefitVariants}
                >
                  <motion.div
                    className="text-brand-red-600 mt-1 mr-3 flex-shrink-0"
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Check size={20} />
                  </motion.div>
                  <motion.span 
                    className="text-cool-gray-600"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {benefit}
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          <motion.div 
            className={`order-1 ${isReversed ? 'md:order-1' : 'md:order-2'}`}
            animate={floatingAnimation}
          >
            <motion.div 
              className="relative p-8 bg-gradient-to-br from-brand-red-50 to-slate-50 rounded-2xl shadow-lg"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, -1, 0],
                transition: { 
                  duration: 0.3,
                  rotate: {
                    repeat: Infinity,
                    duration: 2
                  }
                }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white/50 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative z-10 flex items-center justify-center h-64"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }}
              >
                <motion.div
                  className="text-brand-red-600 transform scale-[300%]"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [2.8, 3, 2.8]
                  }}
                  transition={{ 
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {icon}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceDetail;