import React, { ReactNode, memo, useMemo } from 'react';
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

  // Memoize animation variants
  const variants = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 }
      };
    }

    const getInitialState = () => {
      switch (direction) {
        case 'up':
          return { opacity: 0, y: 20 };
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

    return {
      initial: getInitialState(),
      animate: getAnimateState()
    };
  }, [direction, prefersReducedMotion]);

  // Skip animations if reduced motion is preferred
  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      animate={inView ? variants.animate : variants.initial}
      transition={{ 
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;