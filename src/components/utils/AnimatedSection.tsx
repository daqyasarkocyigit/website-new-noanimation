import React, { ReactNode, memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = memo(({ 
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

  // Skip animations if reduced motion is preferred
  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 15 }; // Reduced movement for better performance
      case 'down':
        return { opacity: 0, y: -15 };
      case 'left':
        return { opacity: 0, x: -15 };
      case 'right':
        return { opacity: 0, x: 15 };
      default:
        return { opacity: 0 };
    }
  };

  const getAnimateState = () => {
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
      duration: 0.4, // Reduced duration for snappier feel
      delay: delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  };

  return (
    <motion.div
      ref={ref}
      {...animation}
      animate={inView ? animation.animate : animation.initial}
      className={className}
    >
      {children}
    </motion.div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;