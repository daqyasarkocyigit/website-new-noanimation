import React, { useState, useEffect } from 'react';
import { Brain, Users, Target, Lightbulb, Award, TrendingUp } from 'lucide-react';

const AboutHeroVisual: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const values = [
    { name: 'Innovation', gradient: 'from-blue-500 to-blue-600' },
    { name: 'Excellence', gradient: 'from-brand-red-600 to-brand-red-700' },
    { name: 'Integrity', gradient: 'from-purple-500 to-purple-600' },
    { name: 'Growth', gradient: 'from-green-500 to-emerald-600' },
    { name: 'Partnership', gradient: 'from-orange-500 to-red-500' },
    { name: 'Results', gradient: 'from-cyan-500 to-blue-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextValue();
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextValue = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % values.length);
      setIsTransitioning(false);
    }, 300);
  };

  const navigateToValue = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Generate particles for background effect
  const generateParticles = () => {
    return Array.from({ length: 12 }, (_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-brand-red-500/30 rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      />
    ));
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
      
      {/* Background Pattern - Site Compatible */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {generateParticles()}
      </div>

      {/* Neural Network Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-brand-red-500 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-brand-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-brand-red-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full h-full flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12 z-10">
        
        {/* Brand Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-2xl flex items-center justify-center shadow-2xl mx-auto">
              <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            About <span className="text-brand-red-400">DAQ</span> Consulting
          </h2>
          <p className="text-sm text-gray-300">AI & Data Engineering Experts</p>
        </div>

        {/* Value Showcase */}
        <div className="relative h-24 sm:h-32 flex items-center justify-center mb-12 sm:mb-16">
          <div className="relative">
            {values.map((value, index) => (
              <div
                key={index}
                className={`
                  absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out
                  ${index === currentIndex 
                    ? 'opacity-100 transform translate-y-0 scale-100' 
                    : isTransitioning && index === (currentIndex - 1 + values.length) % values.length
                      ? 'opacity-0 transform -translate-y-8 scale-95'
                      : 'opacity-0 transform translate-y-8 scale-95'
                  }
                `}
                style={{
                  filter: index === currentIndex ? 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))' : 'none'
                }}
              >
                <h3 
                  className={`
                    text-2xl sm:text-3xl lg:text-4xl font-bold text-center whitespace-nowrap
                    bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent
                  `}
                  style={{
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {value.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs mb-8">
          <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-600/30">
            <div 
              className={`
                h-full bg-gradient-to-r ${values[currentIndex].gradient} rounded-full transition-all duration-700 ease-out
                shadow-lg
              `}
              style={{ 
                width: `${((currentIndex + 1) / values.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-3 items-center">
          {values.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToValue(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
                ${index === currentIndex 
                  ? 'bg-gradient-to-r from-brand-red-500 to-brand-red-600 scale-125 shadow-lg' 
                  : 'bg-gray-600/50 hover:bg-gray-500/70 border border-gray-500/30'
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Hologram Scan Effect */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(239, 68, 68, 0.05) 50%, transparent 100%)',
          animation: 'hologramScan 8s linear infinite'
        }}
      />

      <style jsx>{`
        @keyframes hologramScan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default AboutHeroVisual;