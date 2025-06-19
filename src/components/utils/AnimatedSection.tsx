import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  const getInitialState = () => {
    if (prefersReducedMotion) return { opacity: 0 };
    
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 20 }; // Reduced from 30px for mobile
      case 'down':
        return { opacity: 0, y: -20 };
      case 'left':
        return { opacity: 0, x: -20 };
      case 'right':
        return { opacity: 0, x: 20 };
      default:
        return { opacity: 0 };
    }
  };

  const getAnimateState = () => {
    if (prefersReducedMotion) return { opacity: 1 };
    
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1 };
    }
  };

  const animation = {
    initial: getInitialState(),
    animate: getAnimateState(),
    transition: { 
      duration: prefersReducedMotion ? 0.1 : 0.6, // Reduced from 0.8s for mobile
      delay: prefersReducedMotion ? 0 : delay,
      ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother animation
    }
  };

  return (
    <motion.div
      ref={ref}
      {...animation}
      animate={inView ? animation.animate : animation.initial}
      className={`${className} will-change-transform`}
      onAnimationComplete={() => {
        // Remove will-change after animation completes for better performance
        const element = ref.current;
        if (element) {
          element.classList.add('animation-finished');
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;