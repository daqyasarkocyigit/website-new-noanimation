import React, { useEffect, useRef } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles - EXACT SAME as Case Studies
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: #FF3333;
          border-radius: 50%;
          opacity: 0;
          left: ${Math.random() * 100}%;
          animation: particleFloat ${15 + Math.random() * 10}s infinite;
          animation-delay: ${Math.random() * 15}s;
        `;
        container.appendChild(particle);
      }
    };

    // Create particles
    setTimeout(() => {
      createParticles();
    }, 500);

    return () => {
      // Cleanup particles
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  // Animate metric values - Same function as Case Studies
  const animateValue = (element: HTMLElement, start: number, end: number, duration: number, decimal = false, suffix = '') => {
    const startTime = performance.now();
    
    const updateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (end - start) * easeOutQuart;
      
      if (decimal) {
        element.textContent = current.toFixed(1) + suffix;
      } else {
        element.textContent = Math.round(current) + suffix;
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };
    
    requestAnimationFrame(updateValue);
  };

  return (
    <>
      {/* EXACT SAME PROFESSIONAL BACKGROUND ANIMATION SYSTEM AS CASE STUDIES */}
      <style jsx>{`
        @keyframes particleFloat {
          0%, 100% {
            opacity: 0;
            transform: translateY(100vh) scale(0);
          }
          10% {
            opacity: 0.6;
            transform: translateY(90vh) scale(1);
          }
          90% {
            opacity: 0.6;
            transform: translateY(10vh) scale(1);
          }
        }

        @keyframes bgRotate {
          from { transform: rotate(0deg) scale(1.5); }
          to { transform: rotate(360deg) scale(1.5); }
        }

        @keyframes gridMove {
          from { transform: translate(0, 0); }
          to { transform: translate(50px, 50px); }
        }

        @keyframes headerPulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes badgeShine {
          to { left: 100%; }
        }

        @keyframes statusPulse {
          0% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
          }
        }

        .bg-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .bg-gradient {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(255, 51, 51, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(107, 114, 128, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(255, 51, 51, 0.04) 0%, transparent 50%);
          animation: bgRotate 45s linear infinite;
        }

        .bg-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 51, 51, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 51, 51, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 30s linear infinite;
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #FF3333;
          border-radius: 50%;
          opacity: 0;
          animation: particleFloat 15s infinite;
        }
      `}</style>

      {/* EXACT SAME BACKGROUND ANIMATION SYSTEM AS CASE STUDIES */}
      <div className="bg-container">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
        <div ref={particlesRef} className="particles"></div>
      </div>

      {/* Page Content with Professional Overlays */}
      <div className="relative z-10">
        <Hero />
        <Services />
        <CallToAction />
      </div>
    </>
  );
};

export default Home;