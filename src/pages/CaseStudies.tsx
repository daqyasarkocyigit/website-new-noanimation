import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Database, CheckCircle, ArrowRight } from 'lucide-react';
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

        .architecture-diagram {
          background: transparent;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(156, 163, 175, 0.2);
        }

        .architecture-diagram svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .sketch-line {
          fill: none;
          stroke: #374151;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .sketch-box {
          fill: none;
          stroke: #374151;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .sketch-fill {
          fill: rgba(255, 255, 255, 0.8);
          stroke: #374151;
          stroke-width: 1.5;
        }

        .diagram-text {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          fill: #374151;
        }

        .title-text {
          font-size: 16px;
          font-weight: 600;
          fill: #1f2937;
        }

        .section-title {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          fill: #6b7280;
        }

        .bronze-fill { fill: #CD7F32; opacity: 0.3; }
        .silver-fill { fill: #C0C0C0; opacity: 0.3; }
        .gold-fill { fill: #FFD700; opacity: 0.3; }

        .dashed-line {
          stroke-dasharray: 5,3;
          stroke: #6b7280;
          fill: none;
          stroke-width: 1;
        }

        .arrow-path {
          fill: none;
          stroke: #FF3333;
          stroke-width: 2;
          marker-end: url(#arrowhead);
        }

        .handwritten {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          fill: #6b7280;
        }
      `}</style>

      {/* Light Background */}
      <div className="bg-container">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
        <div ref={particlesRef} className="particles"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-heading-1 mb-4">
                  Case <span className="text-brand-red-600">Studies</span>
                </h1>
                <div className="w-16 h-1 bg-brand-red-600 rounded-full mb-4 mx-auto"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-body-large text-cool-gray-600 mb-4">
                  Real implementations delivering measurable business impact through advanced data engineering, 
                  AI solutions, and cloud modernization projects.
                </p>
                <p className="text-body-base text-cool-gray-600">
                  Explore our production-ready solutions and architectural patterns that drive transformational results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Case Study - Architecture */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="mb-16">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-transparent border border-gray-300/30 text-gray-700 rounded-full mb-4 hover:bg-white/5 transition-all duration-300">
                  FEATURED IMPLEMENTATION
                </span>
                <h2 className="text-heading-1 mb-6">Azure Data Platform - Medallion Architecture</h2>
                <p className="text-body-large text-cool-gray-600 max-w-3xl mx-auto">
                  Production-ready data pipeline using Azure Data Factory, Databricks, and medallion architecture 
                  that processes 50+ data sources with 99.7% reliability through configuration-driven approach.
                </p>
              </div>

              {/* Architecture Diagram */}
              <div className="architecture-diagram max-w-6xl mx-auto mb-12">
                <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#FF3333" />
                    </marker>
                  </defs>
                  
                  {/* Title */}
                  <text x="600" y="40" textAnchor="middle" className="title-text">AZURE DATA PLATFORM - MEDALLION ARCHITECTURE</text>
                  <line x1="350" y1="50" x2="850" y2="50" className="sketch-line" />
                  
                  {/* Data Sources Section */}
                  <g id="data-sources">
                    <rect x="50" y="100" width="140" height="250" rx="5" className="sketch-box" />
                    <text x="120" y="90" textAnchor="middle" className="section-title">DATA SOURCES</text>
                    
                    <path d="M 70 130 L 170 130 L 170 160 L 70 160 Z" className="sketch-fill" />
                    <text x="120" y="150" textAnchor="middle" className="diagram-text">SQL Server</text>
                    
                    <path d="M 70 180 L 170 180 L 170 210 L 70 210 Z" className="sketch-fill" />
                    <text x="120" y="200" textAnchor="middle" className="diagram-text">ERP (SAP)</text>
                    
                    <path d="M 70 230 L 170 230 L 170 260 L 70 260 Z" className="sketch-fill" />
                    <text x="120" y="250" textAnchor="middle" className="diagram-text">REST APIs</text>
                    
                    <path d="M 70 280 L 170 280 L 170 310 L 70 310 Z" className="sketch-fill" />
                    <text x="120" y="300" textAnchor="middle" className="diagram-text">Files (CSV)</text>
                  </g>
                  
                  {/* Arrow from Sources to Ingestion */}
                  <path d="M 190 225 L 240 225" className="arrow-path" />
                  
                  {/* Ingestion Layer */}
                  <g id="ingestion">
                    <rect x="250" y="100" width="140" height="250" rx="5" className="sketch-box" />
                    <text x="320" y="90" textAnchor="middle" className="section-title">INGESTION</text>
                    
                    <rect x="270" y="130" width="100" height="60" rx="3" className="sketch-fill" />
                    <text x="320" y="155" textAnchor="middle" className="diagram-text">Azure Data</text>
                    <text x="320" y="170" textAnchor="middle" className="diagram-text">Factory</text>
                    
                    <rect x="270" y="210" width="100" height="60" rx="3" className="sketch-fill" />
                    <text x="320" y="235" textAnchor="middle" className="diagram-text">Control</text>
                    <text x="320" y="250" textAnchor="middle" className="diagram-text">Database</text>
                    
                    <text x="320" y="290" textAnchor="middle" className="handwritten">• Metadata-driven</text>
                    <text x="320" y="305" textAnchor="middle" className="handwritten">• Self-hosted IR</text>
                    <text x="320" y="320" textAnchor="middle" className="handwritten">• Incremental</text>
                  </g>
                  
                  {/* Arrow from Ingestion to Process */}
                  <path d="M 390 225 L 440 225" className="arrow-path" />
                  
                  {/* Process & Store (Medallion) */}
                  <g id="medallion">
                    <rect x="450" y="100" width="300" height="250" rx="5" className="sketch-box" />
                    <text x="600" y="90" textAnchor="middle" className="section-title">PROCESS & STORE</text>
                    
                    {/* Azure Databricks label */}
                    <rect x="520" y="110" width="160" height="25" rx="3" className="sketch-fill" />
                    <text x="600" y="127" textAnchor="middle" className="diagram-text" style={{fontWeight: 600}}>Azure Databricks</text>
                    
                    {/* Bronze Layer */}
                    <rect x="470" y="150" width="80" height="60" rx="3" className="bronze-fill" />
                    <rect x="470" y="150" width="80" height="60" rx="3" className="sketch-box" />
                    <text x="510" y="175" textAnchor="middle" className="diagram-text" style={{fontWeight: 600}}>BRONZE</text>
                    <text x="510" y="190" textAnchor="middle" className="handwritten">Raw Data</text>
                    <text x="510" y="203" textAnchor="middle" className="handwritten">Parquet</text>
                    
                    {/* Silver Layer */}
                    <rect x="570" y="150" width="80" height="60" rx="3" className="silver-fill" />
                    <rect x="570" y="150" width="80" height="60" rx="3" className="sketch-box" />
                    <text x="610" y="175" textAnchor="middle" className="diagram-text" style={{fontWeight: 600}}>SILVER</text>
                    <text x="610" y="190" textAnchor="middle" className="handwritten">Cleansed</text>
                    <text x="610" y="203" textAnchor="middle" className="handwritten">Delta Lake</text>
                    
                    {/* Gold Layer */}
                    <rect x="670" y="150" width="80" height="60" rx="3" className="gold-fill" />
                    <rect x="670" y="150" width="80" height="60" rx="3" className="sketch-box" />
                    <text x="710" y="175" textAnchor="middle" className="diagram-text" style={{fontWeight: 600}}>GOLD</text>
                    <text x="710" y="190" textAnchor="middle" className="handwritten">Business</text>
                    <text x="710" y="203" textAnchor="middle" className="handwritten">Aggregated</text>
                    
                    {/* Arrows between layers */}
                    <path d="M 550 180 L 570 180" className="arrow-path" />
                    <path d="M 650 180 L 670 180" className="arrow-path" />
                    
                    {/* Delta Lake Storage */}
                    <rect x="520" y="240" width="160" height="40" rx="3" className="dashed-line" />
                    <text x="600" y="263" textAnchor="middle" className="diagram-text">Azure Data Lake Gen2</text>
                    
                    {/* Unity Catalog */}
                    <rect x="520" y="290" width="160" height="40" rx="3" className="sketch-fill" />
                    <text x="600" y="305" textAnchor="middle" className="diagram-text" style={{fontWeight: 600}}>Unity Catalog</text>
                    <text x="600" y="318" textAnchor="middle" className="handwritten">Governance</text>
                  </g>
                  
                  {/* Arrow from Process to Serve */}
                  <path d="M 750 225 L 800 225" className="arrow-path" />
                  
                  {/* Serving Layer */}
                  <g id="serving">
                    <rect x="810" y="100" width="140" height="250" rx="5" className="sketch-box" />
                    <text x="880" y="90" textAnchor="middle" className="section-title">SERVING</text>
                    
                    <rect x="830" y="130" width="100" height="50" rx="3" className="sketch-fill" />
                    <text x="880" y="155" textAnchor="middle" className="diagram-text">Power BI</text>
                    <text x="880" y="168" textAnchor="middle" className="handwritten">Reports</text>
                    
                    <rect x="830" y="195" width="100" height="50" rx="3" className="sketch-fill" />
                    <text x="880" y="220" textAnchor="middle" className="diagram-text">Synapse</text>
                    <text x="880" y="233" textAnchor="middle" className="handwritten">Analytics</text>
                    
                    <rect x="830" y="260" width="100" height="50" rx="3" className="sketch-fill" />
                    <text x="880" y="285" textAnchor="middle" className="diagram-text">APIs</text>
                    <text x="880" y="298" textAnchor="middle" className="handwritten">Real-time</text>
                  </g>
                  
                  {/* Governance & Security */}
                  <g id="governance">
                    <rect x="1000" y="100" width="140" height="250" rx="5" className="dashed-line" />
                    <text x="1070" y="90" textAnchor="middle" className="section-title">GOVERNANCE</text>
                    
                    <text x="1070" y="140" textAnchor="middle" className="handwritten">• Azure Key Vault</text>
                    <text x="1070" y="160" textAnchor="middle" className="handwritten">• Azure AD / RBAC</text>
                    <text x="1070" y="180" textAnchor="middle" className="handwritten">• Data Lineage</text>
                    <text x="1070" y="200" textAnchor="middle" className="handwritten">• Monitoring</text>
                    <text x="1070" y="220" textAnchor="middle" className="handwritten">• Data Quality</text>
                    <text x="1070" y="240" textAnchor="middle" className="handwritten">• Cost Management</text>
                    
                    {/* Connecting lines to main flow */}
                    <path d="M 1000 175 L 950 175" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
                    <path d="M 1000 175 L 750 175" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
                    <path d="M 1000 175 L 390 175" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
                  </g>
                  
                  {/* CI/CD Pipeline */}
                  <g id="cicd">
                    <rect x="200" y="420" width="800" height="120" rx="5" className="dashed-line" />
                    <text x="600" y="410" textAnchor="middle" className="section-title">CI/CD PIPELINE - AZURE DEVOPS</text>
                    
                    {/* Pipeline stages */}
                    <rect x="250" y="450" width="100" height="40" rx="3" className="sketch-fill" />
                    <text x="300" y="473" textAnchor="middle" className="diagram-text">Dev ADF</text>
                    
                    <path d="M 350 470 L 390 470" className="arrow-path" />
                    
                    <rect x="390" y="450" width="100" height="40" rx="3" className="sketch-fill" />
                    <text x="440" y="473" textAnchor="middle" className="diagram-text">Feature</text>
                    
                    <path d="M 490 470 L 530 470" className="arrow-path" />
                    
                    <rect x="530" y="450" width="100" height="40" rx="3" className="sketch-fill" />
                    <text x="580" y="473" textAnchor="middle" className="diagram-text">Test</text>
                    
                    <path d="M 630 470 L 670 470" className="arrow-path" />
                    
                    <rect x="670" y="450" width="100" height="40" rx="3" className="sketch-fill" />
                    <text x="720" y="473" textAnchor="middle" className="diagram-text">UAT</text>
                    
                    <path d="M 770 470 L 810 470" className="arrow-path" />
                    
                    <rect x="810" y="450" width="100" height="40" rx="3" fill="#374151" />
                    <text x="860" y="473" textAnchor="middle" fill="white" className="diagram-text">PROD</text>
                    
                    <text x="600" y="515" textAnchor="middle" className="handwritten">ARM Templates | Approval Gates | Automated Testing</text>
                  </g>
                  
                  {/* Key Features */}
                  <g id="features">
                    <text x="100" y="600" className="section-title">KEY CAPABILITIES:</text>
                    
                    <text x="120" y="625" className="handwritten">✓ Incremental & full load patterns</text>
                    <text x="120" y="645" className="handwritten">✓ ACID transactions (Delta Lake)</text>
                    <text x="120" y="665" className="handwritten">✓ Row-level security</text>
                    <text x="120" y="685" className="handwritten">✓ Automated data quality checks</text>
                    
                    <text x="450" y="625" className="handwritten">✓ Parallel processing with Spark</text>
                    <text x="450" y="645" className="handwritten">✓ Time travel & versioning</text>
                    <text x="450" y="665" className="handwritten">✓ Schema evolution</text>
                    <text x="450" y="685" className="handwritten">✓ Zero-downtime deployments</text>
                    
                    <text x="780" y="625" className="handwritten">✓ Real-time & batch processing</text>
                    <text x="780" y="645" className="handwritten">✓ Multi-cloud support</text>
                    <text x="780" y="665" className="handwritten">✓ Cost optimization</text>
                    <text x="780" y="685" className="handwritten">✓ Disaster recovery</text>
                  </g>
                  
                  {/* Footer */}
                  <text x="600" y="760" textAnchor="middle" className="handwritten" style={{fontSize: '9px'}}>© 2025 DAQ - Enterprise Analytics Architecture v2.0</text>
                </svg>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-transparent p-6 rounded-xl hover:shadow-lg hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 border border-gray-200/20 hover:border-[#FF3333]/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-brand-red-100 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-brand-red-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">85%</div>
                        <div className="text-sm text-gray-600">Performance Improvement</div>
                      </div>
                    </div>
                    <p className="text-body-base text-gray-600">
                      Dramatic improvement in data processing speed through optimized pipeline architecture.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="bg-transparent p-6 rounded-xl hover:shadow-lg hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 border border-gray-200/20 hover:border-[#FF3333]/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-brand-red-100 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-brand-red-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">99.7%</div>
                        <div className="text-sm text-gray-600">Reliability</div>
                      </div>
                    </div>
                    <p className="text-body-base text-gray-600">
                      Production-grade reliability with comprehensive error handling and monitoring.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="bg-transparent p-6 rounded-xl hover:shadow-lg hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 border border-gray-200/20 hover:border-[#FF3333]/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-brand-red-100 rounded-xl flex items-center justify-center">
                        <Database className="w-6 h-6 text-brand-red-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">50+</div>
                        <div className="text-sm text-gray-600">Data Sources</div>
                      </div>
                    </div>
                    <p className="text-body-base text-gray-600">
                      Seamlessly processes data from multiple heterogeneous sources with unified governance.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </section>


        <CallToAction />
      </div>
    </>
  );
};

export default CaseStudies;