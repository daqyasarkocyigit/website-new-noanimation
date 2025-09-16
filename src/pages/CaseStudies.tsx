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
      `}</style>

      <div className="bg-container">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>
      </div>

      <div className="relative z-10 min-h-screen bg-gray-50">
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-heading-1 mb-4 text-gray-900">
                  Metadata-Driven Data Platform
                </h1>
                <div className="w-16 h-1 bg-brand-red-600 rounded-full mb-4 mx-auto"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-body-large text-gray-600">
                  Next-generation analytics infrastructure built on Microsoft Fabric
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Architecture Diagram */}
        <AnimatedSection delay={0.4}>
          <div className="architecture-container mb-16">
            <div className="canvas-header">
              <div className="canvas-title">REAL-TIME DATA FLOW VISUALIZATION</div>
              <div className="status-indicator">
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
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#1f2937" />
                </marker>
              </defs>

              {/* Title */}
              <text x="600" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#1f2937">
                AZURE DATA PLATFORM - MEDALLION ARCHITECTURE
              </text>
              <line x1="350" y1="50" x2="850" y2="50" stroke="#6b7280" strokeWidth="1.5" />
              
              {/* Data Sources Section */}
              <g id="data-sources">
                <rect x="50" y="100" width="140" height="250" rx="5" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <text x="120" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#1f2937" letterSpacing="1px">DATA SOURCES</text>
                
                <path d="M 70 130 L 170 130 L 170 160 L 70 160 Z" fill="rgba(255,51,51,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="120" y="150" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1f2937">SQL Server</text>
                
                <path d="M 70 180 L 170 180 L 170 210 L 70 210 Z" fill="rgba(107,114,128,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="120" y="200" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1f2937">ERP (SAP)</text>
                
                <path d="M 70 230 L 170 230 L 170 260 L 70 260 Z" fill="rgba(75,85,99,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="120" y="250" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1f2937">REST APIs</text>
                
                <path d="M 70 280 L 170 280 L 170 310 L 70 310 Z" fill="rgba(255,51,51,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="120" y="300" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1f2937">Files (CSV)</text>
              </g>
              
              {/* Arrow from Sources to Ingestion */}
              <path d="M 190 225 L 240 225" fill="none" stroke="#1f2937" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Ingestion Layer */}
              <g id="ingestion">
                <rect x="250" y="100" width="140" height="250" rx="5" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <text x="320" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#1f2937" letterSpacing="1px">INGESTION</text>
                
                <rect x="270" y="130" width="100" height="60" rx="3" fill="rgba(255,51,51,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="320" y="155" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1f2937">Azure Data</text>
                <text x="320" y="170" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1f2937">Factory</text>
                
                <rect x="270" y="210" width="100" height="60" rx="3" fill="rgba(107,114,128,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="320" y="235" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1f2937">Control</text>
                <text x="320" y="250" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1f2937">Database</text>
                
                <text x="320" y="290" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">• Metadata-driven</text>
                <text x="320" y="305" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">• Self-hosted IR</text>
                <text x="320" y="320" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">• Incremental</text>
              </g>
              
              {/* Arrow from Ingestion to Process */}
              <path d="M 390 225 L 440 225" fill="none" stroke="#1f2937" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Process & Store (Medallion) */}
              <g id="medallion">
                <rect x="450" y="100" width="300" height="250" rx="5" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <text x="600" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#1f2937" letterSpacing="1px">PROCESS & STORE</text>
                
                {/* Azure Databricks label */}
                <rect x="520" y="110" width="160" height="25" rx="3" fill="rgba(255,51,51,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="600" y="127" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#1f2937">Azure Databricks</text>
                
                {/* Bronze Layer */}
                <rect x="470" y="150" width="80" height="60" rx="3" fill="rgba(205,127,50,0.3)" />
                <rect x="470" y="150" width="80" height="60" rx="3" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <text x="510" y="175" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#1f2937">BRONZE</text>
                <text x="510" y="190" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">Raw Data</text>
                <text x="510" y="203" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">Parquet</text>
                
                {/* Silver Layer */}
                <rect x="570" y="150" width="80" height="60" rx="3" fill="rgba(192,192,192,0.3)" />
                <rect x="570" y="150" width="80" height="60" rx="3" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <text x="610" y="175" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#1f2937">SILVER</text>
                <text x="610" y="190" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">Cleansed</text>
                <text x="610" y="203" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">Delta Lake</text>
                
                {/* Gold Layer */}
                <rect x="670" y="150" width="80" height="60" rx="3" fill="rgba(255,215,0,0.3)" />
                <rect x="670" y="150" width="80" height="60" rx="3" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <text x="710" y="175" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#1f2937">GOLD</text>
                <text x="710" y="190" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">Business</text>
                <text x="710" y="203" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">Aggregated</text>
                
                {/* Arrows between layers */}
                <path d="M 550 180 L 570 180" fill="none" stroke="#1f2937" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M 650 180 L 670 180" fill="none" stroke="#1f2937" strokeWidth="2" markerEnd="url(#arrowhead)" />
                
                {/* Delta Lake Storage */}
                <rect x="520" y="240" width="160" height="40" rx="3" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="5,3" />
                <text x="600" y="263" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#6b7280">Azure Data Lake Gen2</text>
                
                {/* Unity Catalog */}
                <rect x="520" y="290" width="160" height="40" rx="3" fill="rgba(75,85,99,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="600" y="305" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#1f2937">Unity Catalog</text>
                <text x="600" y="318" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">Governance</text>
              </g>
              
              {/* Arrow from Process to Serve */}
              <path d="M 750 225 L 800 225" fill="none" stroke="#1f2937" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Serving Layer */}
              <g id="serving">
                <rect x="810" y="100" width="140" height="250" rx="5" fill="none" stroke="#1f2937" strokeWidth="1.5" />
                <text x="880" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#1f2937" letterSpacing="1px">SERVING</text>
                
                <rect x="830" y="130" width="100" height="50" rx="3" fill="rgba(255,51,51,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="880" y="155" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1f2937">Power BI</text>
                <text x="880" y="168" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">Reports</text>
                
                <rect x="830" y="195" width="100" height="50" rx="3" fill="rgba(107,114,128,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="880" y="220" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1f2937">Synapse</text>
                <text x="880" y="233" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">Analytics</text>
                
                <rect x="830" y="260" width="100" height="50" rx="3" fill="rgba(75,85,99,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="880" y="285" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1f2937">APIs</text>
                <text x="880" y="298" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">Real-time</text>
              </g>
              
              {/* Governance & Security (Right side) */}
              <g id="governance">
                <rect x="1000" y="100" width="140" height="250" rx="5" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="5,3" />
                <text x="1070" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#1f2937" letterSpacing="1px">GOVERNANCE</text>
                
                <text x="1070" y="140" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">• Azure Key Vault</text>
                <text x="1070" y="160" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">• Azure AD / RBAC</text>
                <text x="1070" y="180" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">• Data Lineage</text>
                <text x="1070" y="200" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">• Monitoring</text>
                <text x="1070" y="220" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">• Data Quality</text>
                <text x="1070" y="240" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">• Cost Management</text>
                
                {/* Connecting lines to main flow */}
                <path d="M 1000 175 L 950 175" stroke="#6b7280" strokeWidth="1" strokeDasharray="2,2" />
                <path d="M 1000 175 L 750 175" stroke="#6b7280" strokeWidth="1" strokeDasharray="2,2" />
                <path d="M 1000 175 L 390 175" stroke="#6b7280" strokeWidth="1" strokeDasharray="2,2" />
              </g>
              
              {/* CI/CD Pipeline */}
              <g id="cicd">
                <rect x="200" y="420" width="800" height="120" rx="5" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="5,3" />
                <text x="600" y="410" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#1f2937" letterSpacing="1px">CI/CD PIPELINE - AZURE DEVOPS</text>
                
                {/* Pipeline stages */}
                <rect x="250" y="450" width="100" height="40" rx="3" fill="rgba(107,114,128,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="300" y="473" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#1f2937">Dev ADF</text>
                
                <path d="M 350 470 L 390 470" fill="none" stroke="#1f2937" strokeWidth="2" markerEnd="url(#arrowhead)" />
                
                <rect x="390" y="450" width="100" height="40" rx="3" fill="rgba(107,114,128,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="440" y="473" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#1f2937">Feature</text>
                
                <path d="M 490 470 L 530 470" fill="none" stroke="#1f2937" strokeWidth="2" markerEnd="url(#arrowhead)" />
                
                <rect x="530" y="450" width="100" height="40" rx="3" fill="rgba(107,114,128,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="580" y="473" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#1f2937">Test</text>
                
                <path d="M 630 470 L 670 470" fill="none" stroke="#1f2937" strokeWidth="2" markerEnd="url(#arrowhead)" />
                
                <rect x="670" y="450" width="100" height="40" rx="3" fill="rgba(107,114,128,0.1)" stroke="#1f2937" strokeWidth="1.5" />
                <text x="720" y="473" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#1f2937">UAT</text>
                
                <path d="M 770 470 L 810 470" fill="none" stroke="#1f2937" strokeWidth="2" markerEnd="url(#arrowhead)" />
                
                <rect x="810" y="450" width="100" height="40" rx="3" fill="#1f2937" />
                <text x="860" y="473" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="white">PROD</text>
                
                <text x="600" y="515" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">ARM Templates | Approval Gates | Automated Testing</text>
              </g>
              
              {/* Key Features */}
              <g id="features">
                <text x="100" y="600" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#1f2937" letterSpacing="1px">KEY CAPABILITIES:</text>
                
                <text x="120" y="625" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ Incremental & full load patterns</text>
                <text x="120" y="645" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ ACID transactions (Delta Lake)</text>
                <text x="120" y="665" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ Row-level security</text>
                <text x="120" y="685" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ Automated data quality checks</text>
                
                <text x="450" y="625" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ Parallel processing with Spark</text>
                <text x="450" y="645" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ Time travel & versioning</text>
                <text x="450" y="665" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ Schema evolution</text>
                <text x="450" y="685" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ Zero-downtime deployments</text>
                
                <text x="780" y="625" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ Real-time & batch processing</text>
                <text x="780" y="645" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ Multi-cloud support</text>
                <text x="780" y="665" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ Cost optimization</text>
                <text x="780" y="685" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">✓ Disaster recovery</text>
              </g>
              
              {/* Footer */}
              <text x="600" y="760" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7280">
                © 2025 DAQ - Enterprise Analytics Architecture v2.0
              </text>
              
              {/* Add some decorative elements using brand colors */}
              <circle cx="70" cy="225" r="3" fill="#FF3333" opacity="0.5" />
              <circle cx="270" cy="160" r="3" fill="#FF3333" opacity="0.3" />
              <circle cx="510" cy="180" r="3" fill="rgba(205,127,50,0.5)" />
              <circle cx="610" cy="180" r="3" fill="rgba(192,192,192,0.5)" />
              <circle cx="710" cy="180" r="3" fill="rgba(255,215,0,0.5)" />
              <circle cx="880" cy="155" r="3" fill="#FF3333" opacity="0.3" />
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