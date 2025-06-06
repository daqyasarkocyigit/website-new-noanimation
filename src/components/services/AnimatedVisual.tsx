import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedVisualProps {
  type: 'data-engineering' | 'data-visualization' | 'business-intelligence' | 'cloud-modernization' | 'ai-engineering';
}

const AnimatedVisual: React.FC<AnimatedVisualProps> = ({ type }) => {
  const variants = {
    dataEngineering: {
      container: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
      },
      item: {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
      },
      flow: {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
      }
    },
    dataVisualization: {
      initial: { height: 0 },
      animate: { height: "100%", transition: { duration: 1, ease: "easeOut" } }
    },
    businessIntelligence: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: { duration: 0.8 } }
    },
    cloudModernization: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    },
    aiEngineering: {
      initial: { scale: 0.9, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: { duration: 0.8 } }
    }
  };

  const renderVisual = () => {
    switch (type) {
      case 'data-engineering':
        return (
          <motion.div
            className="w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden relative"
            variants={variants.dataEngineering.container}
            initial="initial"
            animate="animate"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center"
                    variants={variants.dataEngineering.item}
                  >
                    <div className="w-6 h-6 bg-blue-500/20 rounded-md" />
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-0.5 bg-gradient-to-r from-blue-400/20 to-indigo-400/20"
                  style={{
                    top: `${25 + i * 20}%`,
                    left: '10%',
                    right: '10%',
                    transformOrigin: 'left'
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 + i * 0.2 }}
                />
              ))}
            </motion.div>
          </motion.div>
        );

      case 'data-visualization':
        return (
          <motion.div
            className="w-full h-64 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="absolute inset-0 flex items-end justify-around p-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-12 bg-emerald-500/20 rounded-t-lg"
                  style={{ height: `${(i + 1) * 20}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${(i + 1) * 20}%` }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                />
              ))}
            </div>
            <motion.div
              className="absolute inset-x-0 bottom-0 h-px bg-emerald-500/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        );

      case 'business-intelligence':
        return (
          <motion.div
            className="w-full h-64 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-40 h-40">
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 border-4 border-amber-500/20 rounded-full"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: i * 0.3 }}
                  />
                ))}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="w-16 h-16 bg-amber-500/20 rounded-xl" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        );

      case 'cloud-modernization':
        return (
          <motion.div
            className="w-full h-64 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-20 bg-purple-500/10 rounded-2xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.3 }}
                  style={{ transform: `translateY(${i * -30}px)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-1 bg-purple-500/20 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'ai-engineering':
        return (
          <motion.div
            className="w-full h-64 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-40 h-40">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-rose-500/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    style={{
                      left: `${50 + Math.cos(i * Math.PI / 3) * 60}%`,
                      top: `${50 + Math.sin(i * Math.PI / 3) * 60}%`,
                    }}
                  />
                ))}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="w-12 h-12 bg-rose-500/20 rounded-xl" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return renderVisual();
};

export default AnimatedVisual;