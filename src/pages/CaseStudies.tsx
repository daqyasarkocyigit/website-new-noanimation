import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/utils/AnimatedSection';
import AzureArchitectureDiagram from '../components/architecture/AzureArchitectureDiagram';

const CaseStudies: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;

      for (let i = 0; i < 50; i++) {
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

    // Hide loading and create particles
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
            opacity: 1;
            transform: translateY(90vh) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(10vh) scale(1);
          }
        }

        @keyframes bgRotate {
          from { transform: rotate(0deg) scale(1.5); }
          to { transform: rotate(360deg) scale(1.5); }
        }

        @keyframes gridMove {
          from { transform: translate(0, 0); }
          to { transform: translate(100px, 100px); }
        }

        @keyframes headerPulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
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
            radial-gradient(ellipse at 20% 30%, rgba(255, 51, 51, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 51, 51, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(255, 51, 51, 0.08) 0%, transparent 50%);
          animation: bgRotate 30s linear infinite;
        }

        .bg-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 51, 51, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 51, 51, 0.03) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: gridMove 20s linear infinite;
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
          background: radial-gradient(circle, rgba(255, 51, 51, 0.2) 0%, transparent 70%);
          filter: blur(100px);
          animation: headerPulse 4s ease-in-out infinite;
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
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .canvas-header {
          background: rgba(15, 23, 42, 0.9);
          padding: 1.5rem 2rem;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .canvas-title {
          font-size: 0.875rem;
          font-weight: 500;
          color: #CBD5E1;
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
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(51, 65, 85, 0.4));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .metric-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #FF3333, #e02d2d);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .metric-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #FF3333;
          box-shadow: 0 20px 40px rgba(255, 51, 51, 0.3);
        }

        .metric-card:hover::before {
          transform: scaleX(1);
        }

        .metric-label {
          font-size: 0.75rem;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .metric-value {
          font-size: 2.5rem;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #E2E8F0, #FF3333);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .metric-change {
          font-size: 0.875rem;
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
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(51, 65, 85, 0.4));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
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
          box-shadow: 0 20px 40px rgba(255, 51, 51, 0.2);
        }

        .feature-card:hover::before {
          opacity: 0.05;
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
          font-size: 1.25rem;
          font-weight: 600;
          color: #E2E8F0;
          margin-bottom: 1rem;
        }

        .feature-description {
          color: #CBD5E1;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .feature-code {
          background: #0F172A;
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 8px;
          padding: 1rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.875rem;
          color: #CBD5E1;
          overflow-x: auto;
        }

        .code-keyword {
          color: #FF3333;
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

      {/* Background */}
      <div className="bg-container">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
        <div ref={particlesRef} className="particles"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Header */}
        <div className="header-container">
          <div className="header-content">
            <div className="header-badge">Enterprise Architecture</div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extralight mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Metadata-Driven Data Platform
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 font-light"
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
            <AzureArchitectureDiagram />
          </div>
        </AnimatedSection>

        {/* Metrics Section */}
        <AnimatedSection delay={0.6}>
          <section className="metrics-section mb-16">
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
              <h2 className="text-3xl sm:text-4xl font-extralight mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Key Architecture Features
              </h2>
              <p className="text-lg text-gray-600">
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
    </>
  );
};

export default CaseStudies;