import React, { useEffect, useRef } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create 50 floating particles with random properties
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;

      // Clear existing particles
      container.innerHTML = '';

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random properties
        const size = Math.random() * 4 + 2; // 2-6px
        const duration = Math.random() * 10 + 15; // 15-25s
        const delay = Math.random() * 20; // 0-20s delay
        const opacity = Math.random() * 0.6 + 0.2; // 0.2-0.8
        const startX = Math.random() * 100; // 0-100%
        
        particle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: linear-gradient(135deg, #FF4444, #FF6B6B);
          border-radius: 50%;
          left: ${startX}%;
          animation: floatUp ${duration}s infinite linear;
          animation-delay: -${delay}s;
          opacity: ${opacity};
          box-shadow: 0 0 ${size * 2}px rgba(255, 68, 68, 0.5);
        `;
        
        container.appendChild(particle);
      }
    };

    createParticles();

    // Recreate particles on window resize to maintain responsiveness
    const handleResize = () => {
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      {/* Modern Animated Background System */}
      <style jsx>{`
        /* Background Container - Fixed Full Screen */
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          background: linear-gradient(135deg, #FFF5F5 0%, #FFE5E5 50%, #FFF0F0 100%);
        }

        /* Rotating Radial Gradient Blobs */
        .gradient-blobs {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(255, 68, 68, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 51, 102, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 20%, rgba(255, 133, 133, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 80%, rgba(255, 179, 179, 0.04) 0%, transparent 50%);
          animation: rotateBlobs 30s ease-in-out infinite;
        }

        @keyframes rotateBlobs {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(1); }
          75% { transform: rotate(270deg) scale(1.1); }
        }

        /* Transparent Grid Overlay */
        .grid-overlay {
          position: absolute;
          width: 120%;
          height: 120%;
          top: -10%;
          left: -10%;
          background-image: 
            linear-gradient(rgba(255, 68, 68, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 68, 68, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: moveGrid 20s linear infinite;
        }

        @keyframes moveGrid {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(40px, 40px) rotate(360deg); }
        }

        /* Floating Particles */
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) translateX(10px) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(10vh) translateX(-10px) scale(1);
          }
          100% {
            transform: translateY(-10vh) translateX(0) scale(0);
            opacity: 0;
          }
        }

        /* Header Background Glow */
        .header-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 40vh;
          background: radial-gradient(ellipse at center top, rgba(255, 68, 68, 0.08) 0%, transparent 70%);
          animation: pulseGlow 4s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1);
            filter: blur(0px);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.05);
            filter: blur(20px);
          }
        }

        /* Loading Spinner (can be shown conditionally) */
        .loading-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          opacity: 0; /* Hidden by default */
        }

        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid transparent;
        }

        .spinner-ring:nth-child(1) {
          border-top: 3px solid #FF4444;
          animation: spin1 2s linear infinite;
        }

        .spinner-ring:nth-child(2) {
          border-right: 3px solid #FF6B6B;
          animation: spin2 1.5s linear infinite reverse;
          width: 80%;
          height: 80%;
          top: 10%;
          left: 10%;
        }

        .spinner-ring:nth-child(3) {
          border-bottom: 3px solid #FF3366;
          animation: spin3 1s linear infinite;
          width: 60%;
          height: 60%;
          top: 20%;
          left: 20%;
        }

        @keyframes spin1 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes spin2 { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
        @keyframes spin3 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        /* Content Area */
        .content-area {
          position: relative;
          z-index: 1;
          min-height: 100vh;
        }

        /* Glassmorphism Containers */
        .glass-container {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 68, 68, 0.1);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(255, 68, 68, 0.1);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .gradient-blobs {
            animation-duration: 40s; /* Slower on mobile for battery */
          }
          
          .grid-overlay {
            background-size: 40px 40px; /* Smaller grid on mobile */
            animation-duration: 25s;
          }
          
          .header-glow {
            height: 30vh; /* Smaller glow area on mobile */
          }
          
          .floating-particle {
            animation-duration: 20s !important; /* Consistent timing on mobile */
          }
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .gradient-blobs,
          .grid-overlay,
          .floating-particle,
          .header-glow,
          .spinner-ring {
            animation: none !important;
          }
          
          .animated-background {
            background: #FFF0F0; /* Static background for accessibility */
          }
        }

        /* Performance Optimizations */
        .animated-background * {
          will-change: transform;
          transform: translateZ(0); /* Hardware acceleration */
        }
      `}</style>

      {/* Animated Background */}
      <div className="animated-background">
        {/* Rotating Gradient Blobs */}
        <div className="gradient-blobs"></div>
        
        {/* Moving Grid Overlay */}
        <div className="grid-overlay"></div>
        
        {/* Header Glow Effect */}
        <div className="header-glow"></div>
        
        {/* Floating Particles Container */}
        <div ref={particlesRef} className="particles-container"></div>
        
        {/* Loading Spinner (hidden by default) */}
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
      </div>

      {/* Page Content */}
      <div className="content-area">
        <Hero />
        <Services />
        <CallToAction />
      </div>
    </>
  );
};

export default Home;