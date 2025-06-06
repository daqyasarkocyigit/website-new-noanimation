import React from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Check } from 'lucide-react';

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
  const sectionRef = React.useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const springY = useSpring(y, springConfig);
  const springRotate = useSpring(rotate, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springOpacity = useSpring(opacity, springConfig);

  const createParallax = (value: MotionValue<number>, range: number) => {
    return useTransform(value, [0, 1], [-range, range]);
  };

  const parallaxY = createParallax(scrollYProgress, 50);

  const titleVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 1,
      },
    },
  };

  const iconVariants = {
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
        mass: 0.8,
        duration: 1.5,
      },
    },
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: -50, rotate: -2 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
      },
    },
  };

  return (
    <section id={id} className="py-20 scroll-mt-24 relative overflow-hidden" ref={sectionRef}>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-brand-red-50/30 to-slate-50/30"
        style={{ 
          y: springY,
          opacity: springOpacity,
        }}
      />
      
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative"
        style={{ 
          scale: springScale,
          opacity: springOpacity,
        }}
      >
        <motion.div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="order-2 md:order-1"
            style={{ y: parallaxY }}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              variants={titleVariants}
            >
              <motion.div 
                className="text-brand-red-600 relative"
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.8, type: "spring" }
                }}
              >
                <motion.div
                  className="absolute -inset-4 bg-brand-red-100 rounded-full z-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div 
                  className="relative z-10"
                  style={{ rotate: springRotate }}
                >
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
            
            <motion.ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  custom={index}
                  variants={benefitVariants}
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <motion.div
                    className="text-brand-red-600 mt-1 mr-3 flex-shrink-0"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <Check size={20} />
                  </motion.div>
                  <span className="text-cool-gray-600">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className={`order-1 ${isReversed ? 'md:order-1' : 'md:order-2'}`}
            style={{ y: parallaxY }}
          >
            <motion.div 
              className="relative p-8 bg-gradient-to-br from-brand-red-50 to-slate-50 rounded-2xl shadow-lg"
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white/50 rounded-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.02, 1],
                }}
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
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="text-brand-red-600 transform scale-[300%]"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [2.8, 3, 2.8],
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