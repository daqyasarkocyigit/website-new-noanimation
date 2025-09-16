import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const CaseStudies: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
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

  // Animate metric values
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

  // Handle metric animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('metrics-section')) {
          const metrics = entry.target.querySelectorAll('.metric-value');
          metrics.forEach((metric: any) => {
            const target = parseFloat(metric.dataset.target);
            const suffix = metric.dataset.suffix || '';
            const decimal = metric.dataset.decimal === 'true';
            animateValue(metric, 0, target, 2500, decimal, suffix);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const metricsSection = document.querySelector('.metrics-section');
    if (metricsSection) {
      observer.observe(metricsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
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

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #FF3333;
          border-radius: 50%;
          opacity: 0;
          animation: particleFloat 15s infinite;
        }

        .header-container {
          text-align: center;
          padding: 4rem 0;
          position: relative;
        }

        .header-container::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 51, 51, 0.1) 0%, transparent 70%);
          filter: blur(100px);
          animation: headerPulse 6s ease-in-out infinite;
        }

        .header-content {
          position: relative;
          z-index: 1;
        }

        .header-badge {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: linear-gradient(135deg, #FF3333, #e02d2d);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
          color: white;
        }

        .header-badge::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: badgeShine 3s infinite;
        }

        .architecture-container {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            0 4px 8px rgba(0, 0, 0, 0.05);
        }

        .canvas-header {
          background: #f8fafc;
          padding: 1.5rem 2rem;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .canvas-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          letter-spacing: 0.05em;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 100px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          position: relative;
        }

        .status-dot::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: #10B981;
          border-radius: 50%;
          opacity: 0;
          animation: statusPulse 2s infinite;
        }

        .status-text {
          font-size: 0.75rem;
          color: #10B981;
          font-weight: 500;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .metric-card {
          background: white;
          background: transparent;
          border: 1px solid #e5e7eb;
          border: 1px solid rgba(156,163,175,0.2);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .metric-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #FF3333, #e02d2d);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .metric-card:hover {
          transform: translateY(-8px);
          border-color: #FF3333;
          background: rgba(255,255,255,0.05);
          box-shadow: 0 20px 40px rgba(255, 51, 51, 0.15);
        }

        .metric-card:hover::before {
          transform: scaleX(1);
        }

        .metric-label {
          font-size: 0.6875rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .metric-value {
          font-size: 1.875rem;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #1f2937, #FF3333);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .metric-change {
          font-size: 0.75rem;
          font-weight: 600;
        }

        .metric-change.positive {
          color: #10B981;
        }

        .metric-change.negative {
          color: #EF4444;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: white;
          background: transparent;
          border: 1px solid #e5e7eb;
          border: 1px solid rgba(156,163,175,0.2);
          border-radius: 16px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: radial-gradient(circle, #FF3333 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: #FF3333;
          background: rgba(255,255,255,0.05);
          box-shadow: 0 20px 40px rgba(255, 51, 51, 0.15);
        }

        .feature-card:hover::before {
          opacity: 0.03;
        }

        .feature-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #FF3333, #e02d2d);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          color: white;
        }

        .feature-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .feature-description {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .feature-code {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.875rem;
          color: #374151;
          overflow-x: auto;
        }

        .code-keyword {
          color: #FF3333;
          font-weight: 600;
        }

        .code-string {
          color: #10B981;
        }

        .code-number {
          color: #F59E0B;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .canvas-header {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .header-container {
            padding: 2rem 0;
          }
        }
      `}</style>

      {/* Light Background */}
      <div className="bg-container">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
        <div ref={particlesRef} className="particles"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        <div className="header-container">
          <div className="header-content">
              className="text-heading-1 mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              Metadata-Driven Data Platform
            <motion.p
              transition={{ duration: 0.8 }}
            >
              Metadata-Driven Data Platform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            <motion.h1
              className="text-heading-1 mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Metadata-Driven Data Platform
            </motion.h1>
            <motion.p
              className="text-body-large text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Next-Generation Analytics Infrastructure
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            <motion.h1
              className="text-heading-1 mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Metadata-Driven Data Platform
            </motion.h1>
            <motion.p
              className="text-body-large text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Next-Generation Analytics Infrastructure
            </motion.p>
          </div>
        </div>

        {/* Architecture Diagram */}
        <AnimatedSection delay={0.4}>
          <div className="architecture-container mb-16">
            <div className="canvas-header">
              <div className="canvas-title">REAL-TIME DATA FLOW VISUALIZATION</div>
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span className="status-text">SYSTEM OPERATIONAL</span>
              </div>
            </div>
            
            {/* SVG Architecture Diagram */}
            <svg className="block w-full h-auto p-6 sm:p-8 md:p-12" viewBox="0 0 1800 900" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Gradients - Updated for Brand Colors */}
                <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#FF3333', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#e02d2d', stopOpacity: 1}} />
                </linearGradient>
                
                <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#6B7280', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#9CA3AF', stopOpacity: 1}} />
                </linearGradient>
                
                <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#374151', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#4B5563', stopOpacity: 1}} />
                </linearGradient>

                <linearGradient id="bronzeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#92400E', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#D97706', stopOpacity: 1}} />
                </linearGradient>

                <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#6B7280', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#9CA3AF', stopOpacity: 1}} />
                </linearGradient>

                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#EAB308', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#FDE047', stopOpacity: 1}} />
                </linearGradient>

                {/* Filters */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
                </filter>

                {/* Arrow Markers */}
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#9CA3AF" opacity="0.8"/>
                </marker>

                {/* Animated Gradient for Flow */}
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#FF3333', stopOpacity: 0}}>
                    <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" style={{stopColor: '#6B7280', stopOpacity: 1}}>
                    <animate attributeName="stop-opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" style={{stopColor: '#FF3333', stopOpacity: 0}}>
                    <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>

              {/* Light Grid Background Pattern */}
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,51,51,0.08)" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Section Labels */}
              <g id="sectionLabels">
                <text x="140" y="70" fill="#374151" fontSize="12" fontWeight="600" letterSpacing="0.1em">DATA SOURCES</text>
                <text x="540" y="70" fill="#374151" fontSize="12" fontWeight="600" letterSpacing="0.1em" textAnchor="middle">INGESTION</text>
                <text x="980" y="70" fill="#374151" fontSize="12" fontWeight="600" letterSpacing="0.1em" textAnchor="middle">PROCESSING</text>
                <text x="1390" y="70" fill="#374151" fontSize="12" fontWeight="600" letterSpacing="0.1em" textAnchor="middle">SERVING</text>
              </g>

              {/* Data Sources */}
              <g id="dataSources">
                <g className="data-source" transform="translate(50, 100)">
                  <rect x="0" y="0" width="180" height="70" rx="12" fill="url(#primaryGradient)" filter="url(#shadow)" opacity="0.95"/>
                  <text x="90" y="30" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">SQL Databases</text>
                  <text x="90" y="48" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Transactional Systems</text>
                  <circle cx="165" cy="15" r="5" fill="#10B981">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>

                <g className="data-source" transform="translate(50, 190)">
                  <rect x="0" y="0" width="180" height="70" rx="12" fill="url(#secondaryGradient)" filter="url(#shadow)" opacity="0.95"/>
                  <text x="90" y="30" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">ERP Systems</text>
                  <text x="90" y="48" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">SAP / Oracle</text>
                  <circle cx="165" cy="15" r="5" fill="#10B981">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.4s"/>
                  </circle>
                </g>

                <g className="data-source" transform="translate(50, 280)">
                  <rect x="0" y="0" width="180" height="70" rx="12" fill="url(#accentGradient)" filter="url(#shadow)" opacity="0.95"/>
                  <text x="90" y="30" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">External APIs</text>
                  <text x="90" y="48" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">REST / GraphQL</text>
                  <circle cx="165" cy="15" r="5" fill="#10B981">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.8s"/>
                  </circle>
                </g>

                <g className="data-source" transform="translate(50, 370)">
                  <rect x="0" y="0" width="180" height="70" rx="12" fill="url(#primaryGradient)" filter="url(#shadow)" opacity="0.95"/>
                  <text x="90" y="30" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">File Storage</text>
                  <text x="90" y="48" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">CSV / Parquet / JSON</text>
                  <circle cx="165" cy="15" r="5" fill="#10B981">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1.2s"/>
                  </circle>
                </g>

                <g className="data-source" transform="translate(50, 460)">
                  <rect x="0" y="0" width="180" height="70" rx="12" fill="url(#secondaryGradient)" filter="url(#shadow)" opacity="0.95"/>
                  <text x="90" y="30" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">Streaming</text>
                  <text x="90" y="48" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Kafka / Event Hub</text>
                  <circle cx="165" cy="15" r="5" fill="#10B981">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1.6s"/>
                  </circle>
                </g>
              </g>

              {/* Flow Lines from Sources to Ingestion */}
              <g id="sourceFlows">
                <path d="M 230 135 Q 340 135 400 290" stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
                <circle r="4" fill="#FF3333">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#flow1"/>
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite"/>
                </circle>
                <path id="flow1" d="M 230 135 Q 340 135 400 290" fill="none"/>

                <path d="M 230 225 Q 340 225 400 295" stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
                <circle r="4" fill="#6B7280">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
                    <mpath href="#flow2"/>
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                </circle>
                <path id="flow2" d="M 230 225 Q 340 225 400 295" fill="none"/>

                <path d="M 230 315 Q 340 315 400 300" stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
                <circle r="4" fill="#374151">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                    <mpath href="#flow3"/>
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="1s"/>
                </circle>
                <path id="flow3" d="M 230 315 Q 340 315 400 300" fill="none"/>

                <path d="M 230 405 Q 340 405 400 305" stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
                <circle r="4" fill="#FF3333">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
                    <mpath href="#flow4"/>
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                </circle>
                <path id="flow4" d="M 230 405 Q 340 405 400 305" fill="none"/>

                <path d="M 230 495 Q 340 495 400 310" stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
                <circle r="4" fill="#6B7280">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="2s">
                    <mpath href="#flow5"/>
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="2s"/>
                </circle>
                <path id="flow5" d="M 230 495 Q 340 495 400 310" fill="none"/>
              </g>

              {/* Ingestion Layer */}
              <g id="ingestionLayer">
                <g transform="translate(400, 250)">
                  <rect x="0" y="0" width="280" height="120" rx="16" fill="url(#primaryGradient)" filter="url(#shadow)" opacity="0.95"/>
                  <text x="140" y="45" fill="white" fontSize="18" fontWeight="700" textAnchor="middle">Microsoft Fabric</text>
                  <text x="140" y="70" fill="rgba(255,255,255,0.9)" fontSize="13" textAnchor="middle">Data Factory Orchestration</text>
                  
                  <rect x="30" y="90" width="220" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
                  <rect x="30" y="90" width="60" height="6" rx="3" fill="#10B981">
                    <animate attributeName="width" values="0;220;0" dur="4s" repeatCount="indefinite"/>
                  </rect>
                </g>

                <g transform="translate(420, 400)">
                  <rect x="0" y="0" width="240" height="80" rx="12" fill="url(#accentGradient)" filter="url(#shadow)" opacity="0.95"/>
                  <text x="120" y="35" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">Unity Catalog</text>
                  <text x="120" y="55" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Metadata Management</text>
                </g>
              </g>

              {/* Flow to Processing */}
              <g id="ingestionToProcessing">
                <path d="M 680 310 L 780 310" stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.8" markerEnd="url(#arrowhead)"/>
                <circle r="4" fill="#FF3333">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#toProcessing"/>
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle r="4" fill="#FF3333">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="0.8s">
                    <mpath href="#toProcessing"/>
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="0.8s"/>
                </circle>
                <circle r="4" fill="#FF3333">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1.6s">
                    <mpath href="#toProcessing"/>
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="1.6s"/>
                </circle>
                <path id="toProcessing" d="M 680 310 L 780 310" fill="none"/>
              </g>

              {/* Processing Layer - Medallion Architecture */}
              <g id="processingLayer">
                <g transform="translate(780, 100)">
                  <rect x="0" y="0" width="400" height="550" rx="20" fill="none" stroke="rgba(107,114,128,0.3)" strokeWidth="2" strokeDasharray="10,5"/>
                  <text x="200" y="30" fill="#374151" fontSize="13" textAnchor="middle">Microsoft Fabric Lakehouse</text>

                  {/* Bronze Layer */}
                  <g className="medallion-layer" transform="translate(30, 60)">
                    <rect x="0" y="0" width="340" height="100" rx="16" fill="url(#bronzeGradient)" filter="url(#shadow)" opacity="0.95">
                      <animate attributeName="opacity" values="0.95;1;0.95" dur="3s" repeatCount="indefinite"/>
                    </rect>
                    <text x="170" y="40" fill="white" fontSize="18" fontWeight="700" textAnchor="middle">Bronze Layer</text>
                    <text x="170" y="60" fill="rgba(255,255,255,0.9)" fontSize="13" textAnchor="middle">Raw Data Ingestion</text>
                    <text x="170" y="80" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">Immutable | Partitioned | Full History</text>
                    
                    <g transform="translate(290, 10)">
                      <rect x="0" y="0" width="40" height="25" rx="5" fill="rgba(0,0,0,0.3)"/>
                      <text x="20" y="18" fill="white" fontSize="11" textAnchor="middle" fontWeight="600">10TB</text>
                    </g>
                  </g>

                  {/* Arrow Bronze to Silver */}
                  <g transform="translate(200, 160)">
                    <line x1="0" y1="0" x2="0" y2="60" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" opacity="0.6"/>
                    <circle r="3" fill="#D97706">
                      <animateMotion dur="2s" repeatCount="indefinite">
                        <mpath href="#bronzeToSilver"/>
                      </animateMotion>
                    </circle>
                    <circle r="3" fill="#D97706">
                      <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s">
                        <mpath href="#bronzeToSilver"/>
                      </animateMotion>
                    </circle>
                    <circle r="3" fill="#D97706">
                      <animateMotion dur="2s" repeatCount="indefinite" begin="1s">
                        <mpath href="#bronzeToSilver"/>
                      </animateMotion>
                    </circle>
                    <path id="bronzeToSilver" d="M 0 0 L 0 60" fill="none"/>
                  </g>

                  {/* Silver Layer */}
                  <g className="medallion-layer" transform="translate(30, 220)">
                    <rect x="0" y="0" width="340" height="100" rx="16" fill="url(#silverGradient)" filter="url(#shadow)" opacity="0.95">
                      <animate attributeName="opacity" values="0.95;1;0.95" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                    </rect>
                    <text x="170" y="40" fill="white" fontSize="18" fontWeight="700" textAnchor="middle">Silver Layer</text>
                    <text x="170" y="60" fill="rgba(255,255,255,0.9)" fontSize="13" textAnchor="middle">Cleansed & Validated</text>
                    <text x="170" y="80" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">Delta Lake | Deduplicated | Quality Checked</text>
                    
                    <g transform="translate(290, 10)">
                      <rect x="0" y="0" width="40" height="25" rx="5" fill="rgba(0,0,0,0.3)"/>
                      <text x="20" y="18" fill="white" fontSize="11" textAnchor="middle" fontWeight="600">6TB</text>
                    </g>
                  </g>

                  {/* Arrow Silver to Gold */}
                  <g transform="translate(200, 320)">
                    <line x1="0" y1="0" x2="0" y2="60" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" opacity="0.6"/>
                    <circle r="3" fill="#9CA3AF">
                      <animateMotion dur="2s" repeatCount="indefinite">
                        <mpath href="#silverToGold"/>
                      </animateMotion>
                    </circle>
                    <circle r="3" fill="#9CA3AF">
                      <animateMotion dur="2s" repeatCount="indefinite" begin="0.7s">
                        <mpath href="#silverToGold"/>
                      </animateMotion>
                    </circle>
                    <path id="silverToGold" d="M 0 0 L 0 60" fill="none"/>
                  </g>

                  {/* Gold Layer */}
                  <g className="medallion-layer" transform="translate(30, 380)">
                    <rect x="0" y="0" width="340" height="100" rx="16" fill="url(#goldGradient)" filter="url(#shadow)" opacity="0.95">
                      <animate attributeName="opacity" values="0.95;1;0.95" dur="3s" repeatCount="indefinite" begin="1s"/>
                    </rect>
                    <text x="170" y="40" fill="#1E293B" fontSize="18" fontWeight="700" textAnchor="middle">Gold Layer</text>
                    <text x="170" y="60" fill="rgba(30,41,59,0.9)" fontSize="13" textAnchor="middle">Business Ready</text>
                    <text x="170" y="80" fill="rgba(30,41,59,0.7)" fontSize="11" textAnchor="middle">Aggregated | KPIs | ML Features | Optimized</text>
                    
                    <g transform="translate(290, 10)">
                      <rect x="0" y="0" width="40" height="25" rx="5" fill="rgba(0,0,0,0.2)"/>
                      <text x="20" y="18" fill="#1E293B" fontSize="11" textAnchor="middle" fontWeight="600">2TB</text>
                    </g>
                  </g>

                  <text x="200" y="520" fill="#6B7280" fontSize="11" textAnchor="middle">Azure Data Lake Storage Gen2</text>
                </g>
              </g>

              {/* Flow to Serving */}
              <g id="servingFlows">
                <path d="M 1180 430 Q 1230 390 1280 285" stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
                <circle r="4" fill="#FDE047">
                  <animateMotion dur="2.5s" repeatCount="indefinite">
                    <mpath href="#toServe1"/>
                  </animateMotion>
                </circle>
                <path id="toServe1" d="M 1180 430 Q 1230 390 1280 285" fill="none"/>

                <path d="M 1180 430 Q 1230 410 1280 375" stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
                <circle r="4" fill="#FDE047">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s">
                    <mpath href="#toServe2"/>
                  </animateMotion>
                </circle>
                <path id="toServe2" d="M 1180 430 Q 1230 410 1280 375" fill="none"/>

                <path d="M 1180 430 Q 1230 430 1280 465" stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
                <circle r="4" fill="#FDE047">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="1s">
                    <mpath href="#toServe3"/>
                  </animateMotion>
                </circle>
                <path id="toServe3" d="M 1180 430 Q 1230 430 1280 465" fill="none"/>

                <path d="M 1180 430 Q 1230 470 1280 555" stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
                <circle r="4" fill="#FDE047">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.5s">
                    <mpath href="#toServe4"/>
                  </animateMotion>
                </circle>
                <path id="toServe4" d="M 1180 430 Q 1230 470 1280 555" fill="none"/>
              </g>

              {/* Serving Layer */}
              <g id="servingLayer">
                <g transform="translate(1280, 250)">
                  <rect x="0" y="0" width="220" height="70" rx="12" fill="url(#goldGradient)" filter="url(#shadow)" opacity="0.95"/>
                  <text x="110" y="30" fill="#1E293B" fontSize="14" fontWeight="600" textAnchor="middle">Reporting</text>
                  <text x="110" y="48" fill="rgba(30,41,59,0.8)" fontSize="11" textAnchor="middle">Power BI / Dashboards</text>
                </g>

                <g transform="translate(1280, 340)">
                  <rect x="0" y="0" width="220" height="70" rx="12" fill="url(#primaryGradient)" filter="url(#shadow)" opacity="0.95"/>
                  <text x="110" y="30" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">Applications</text>
                  <text x="110" y="48" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Business Applications</text>
                </g>

                <g transform="translate(1280, 430)">
                  <rect x="0" y="0" width="220" height="70" rx="12" fill="url(#secondaryGradient)" filter="url(#shadow)" opacity="0.95"/>
                  <text x="110" y="30" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">AI/ML</text>
                  <text x="110" y="48" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Models & Predictions</text>
                </g>

                <g transform="translate(1280, 520)">
                  <rect x="0" y="0" width="220" height="70" rx="12" fill="url(#accentGradient)" filter="url(#shadow)" opacity="0.95"/>
                  <text x="110" y="30" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">Data APIs</text>
                  <text x="110" y="48" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">External Integrations</text>
                </g>
              </g>

              {/* Governance Layer */}
              <g id="governanceLayer" transform="translate(50, 750)">
                <rect x="0" y="0" width="1450" height="120" rx="20" fill="none" stroke="rgba(107,114,128,0.2)" strokeWidth="2"/>
                <text x="725" y="30" fill="#374151" fontSize="12" fontWeight="600" letterSpacing="0.15em" textAnchor="middle">GOVERNANCE & SECURITY</text>
                
                <g transform="translate(150, 45)">
                  <rect x="0" y="0" width="180" height="50" rx="10" fill="rgba(255,51,51,0.1)" stroke="rgba(255,51,51,0.3)" strokeWidth="1"/>
                  <text x="90" y="30" fill="#6B7280" fontSize="12" textAnchor="middle">Key Vault</text>
                </g>

                <g transform="translate(380, 45)">
                  <rect x="0" y="0" width="180" height="50" rx="10" fill="rgba(107,114,128,0.1)" stroke="rgba(107,114,128,0.3)" strokeWidth="1"/>
                  <text x="90" y="30" fill="#6B7280" fontSize="12" textAnchor="middle">RBAC</text>
                </g>

                <g transform="translate(610, 45)">
                  <rect x="0" y="0" width="180" height="50" rx="10" fill="rgba(55,65,81,0.1)" stroke="rgba(55,65,81,0.3)" strokeWidth="1"/>
                  <text x="90" y="30" fill="#6B7280" fontSize="12" textAnchor="middle">Data Lineage</text>
                </g>

                <g transform="translate(840, 45)">
                  <rect x="0" y="0" width="180" height="50" rx="10" fill="rgba(255,51,51,0.1)" stroke="rgba(255,51,51,0.3)" strokeWidth="1"/>
                  <text x="90" y="30" fill="#6B7280" fontSize="12" textAnchor="middle">Monitoring</text>
                </g>

                <g transform="translate(1070, 45)">
                  <rect x="0" y="0" width="180" height="50" rx="10" fill="rgba(107,114,128,0.1)" stroke="rgba(107,114,128,0.3)" strokeWidth="1"/>
                  <text x="90" y="30" fill="#6B7280" fontSize="12" textAnchor="middle">Compliance</text>
                </g>
              </g>
            </svg>
          </div>
        </AnimatedSection>

        {/* Metrics Section */}
        <AnimatedSection delay={0.6}>
          <section className="metrics-section mb-16">
            <div className="text-center mb-12">
              <h2 className="text-heading-1 mb-4 text-gray-900">
                Performance Metrics
              </h2>
              <p className="text-body-large text-gray-600">
                Real-world results from our enterprise implementations
              </p>
            </div>

            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-label">Data Sources</div>
                <div className="metric-value" data-target="50">0</div>
                <div className="metric-change positive">+12%</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Daily Volume</div>
                <div className="metric-value" data-target="10" data-suffix="TB">0TB</div>
                <div className="metric-change positive">+25%</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Processing Time</div>
                <div className="metric-value" data-target="2" data-suffix="h">0h</div>
                <div className="metric-change negative">-8h</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">SLA Achievement</div>
                <div className="metric-value" data-target="99.9" data-suffix="%" data-decimal="true">0%</div>
                <div className="metric-change positive">+0.5%</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Cost Reduction</div>
                <div className="metric-value" data-target="85" data-suffix="%">0%</div>
                <div className="metric-change positive">+15%</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Performance Gain</div>
                <div className="metric-value" data-target="20" data-suffix="x">0x</div>
                <div className="metric-change positive">+5x</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Daily Pipelines</div>
                <div className="metric-value" data-target="500">0</div>
                <div className="metric-change positive">+120</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Data Quality</div>
                <div className="metric-value" data-target="98" data-suffix="%">0%</div>
                <div className="metric-change positive">+3%</div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection delay={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-heading-1 mb-4 text-gray-900">
                Key Architecture Features
              </h2>
              <p className="text-body-large text-gray-600">
                Enterprise-grade capabilities for modern data platforms
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-number">01</div>
                <h3 className="feature-title">Metadata-Driven Orchestration</h3>
                <p className="feature-description">
                  Dynamic pipeline generation based on configuration metadata, eliminating custom code for each data source integration.
                </p>
                <div className="feature-code">
                  <span className="code-keyword">SELECT</span> * <span className="code-keyword">FROM</span> unity.configurations<br />
                  <span className="code-keyword">WHERE</span> is_active = <span className="code-string">true</span><br />
                  <span className="code-keyword">ORDER BY</span> priority <span className="code-keyword">DESC</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">02</div>
                <h3 className="feature-title">Medallion Architecture</h3>
                <p className="feature-description">
                  Three-layer data refinement process ensuring data quality, consistency, and optimal query performance at scale.
                </p>
                <div className="feature-code">
                  Bronze: Raw Data | Immutable<br />
                  Silver: Cleansed | Validated<br />
                  Gold: Business Ready | Optimized
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">03</div>
                <h3 className="feature-title">Unity Catalog Governance</h3>
                <p className="feature-description">
                  Centralized metadata management with fine-grained access control and comprehensive data lineage tracking.
                </p>
                <div className="feature-code">
                  <span className="code-keyword">GRANT SELECT ON</span> gold.*<br />
                  <span className="code-keyword">TO</span> data_analysts<br />
                  <span className="code-keyword">WITH</span> row_filter
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">04</div>
                <h3 className="feature-title">Real-time Processing</h3>
                <p className="feature-description">
                  Streaming data ingestion with Event Hub and Kafka integration for near real-time analytics.
                </p>
                <div className="feature-code">
                  Latency: <span className="code-number">500ms</span><br />
                  Throughput: <span className="code-number">1M events/sec</span><br />
                  Auto-scaling: <span className="code-string">Enabled</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">05</div>
                <h3 className="feature-title">Automated Quality Checks</h3>
                <p className="feature-description">
                  Built-in data validation, deduplication, and business rule enforcement at each processing layer.
                </p>
                <div className="feature-code">
                  Null Checks: <span className="code-number">100%</span><br />
                  Deduplication: <span className="code-string">Automatic</span><br />
                  Schema Validation: <span className="code-string">Enforced</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">06</div>
                <h3 className="feature-title">Zero-Downtime Deployment</h3>
                <p className="feature-description">
                  Blue-green deployment strategy with automated rollback capabilities ensuring continuous availability.
                </p>
                <div className="feature-code">
                  Strategy: <span className="code-string">Blue/Green</span><br />
                  Rollback: <span className="code-number">30 seconds</span><br />
                  Availability: <span className="code-number">99.99%</span>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>

      <CallToAction />
    </>
  );
};

export default CaseStudies;