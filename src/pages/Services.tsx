import React from 'react';
import { Database, BarChart, LineChart, Cloud, Brain } from 'lucide-react';
import ServiceDetail from '../components/services/ServiceDetail';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Services: React.FC = () => {
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
      `}</style>

      {/* Light Background */}
      <div className="bg-container">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
        <div ref={particlesRef} className="particles"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10">
      {/* Hero Section with Gradient Background */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-heading-1 mb-4">
                Our <span className="text-brand-red-600">Services</span>
              </h1>
              <div className="w-16 h-1 bg-brand-red-600 rounded-full mb-4 mx-auto"></div>
            </motion.div>
            
            <motion.p
              className="text-body-large text-cool-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive data and AI solutions to help your business make better decisions,
              streamline operations, and unlock new opportunities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <ServiceDetail
        id="data-engineering"
        title="Data Engineering"
        description="Build robust data pipelines and infrastructure to collect, process, and store your data efficiently. See our production implementations below."
        benefits={[
          "Scalable data pipeline development",
          "Data warehouse design and implementation",
          "ETL/ELT process optimization",
          "Real-time data processing solutions",
          "Data quality and governance frameworks",
          "Metadata-driven ingestion frameworks"
        ]}
        icon={<Database size={32} />}
        useCustomVisual={true}
        visualType="data-engineering"
      />


      <ServiceDetail
        id="data-visualization"
        title="Data Visualization"
        description="Transform complex data into intuitive visualizations that tell a compelling story and drive insights."
        benefits={[
          "Interactive dashboard development",
          "Custom visualization solutions",
          "Real-time data monitoring",
          "Business metrics tracking",
          "Automated reporting systems"
        ]}
        icon={<BarChart size={32} />}
        isReversed
        useCustomVisual={true}
        visualType="data-visualization"
      />


      <ServiceDetail
        id="business-intelligence"
        title="Business Intelligence & Analytics"
        description="Leverage your data to gain actionable insights, identify trends, and make data-driven decisions."
        benefits={[
          "Advanced analytics implementation",
          "Predictive modeling",
          "KPI development and tracking",
          "Business performance analysis",
          "Competitive intelligence solutions"
        ]}
        icon={<LineChart size={32} />}
        useCustomVisual={true}
        visualType="business-intelligence"
      />

      <ServiceDetail
        id="cloud-modernization"
        title="Cloud Modernization"
        description="Migrate and optimize your data infrastructure on modern cloud platforms for scalability and cost efficiency."
        benefits={[
          "Cloud migration strategy",
          "Infrastructure optimization",
          "Multi-cloud solutions",
          "Cloud cost optimization",
          "Security and compliance"
        ]}
        icon={<Cloud size={32} />}
        isReversed
        useCustomVisual={true}
        visualType="cloud-modernization"
      />

      <ServiceDetail
        id="ai-engineering"
        title="AI Engineering"
        description="Implement advanced machine learning and AI solutions to automate processes and unlock predictive capabilities."
        benefits={[
          "Machine learning model development",
          "AI solution architecture",
          "AI Agents & RAG solutions",
          "Generative AI & LLM integration",
          "MLOps implementation"
        ]}
        icon={<Brain size={32} />}
        useCustomVisual={true}
        visualType="ai-engineering"
      />

      <CallToAction />
    </div>
  );
};

export default Services;