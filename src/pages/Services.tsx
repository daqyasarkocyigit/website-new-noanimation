import React from 'react';
import ServiceDetail from '../components/services/ServiceDetail';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section with Gradient Background */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-0"></div>
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 z-0"
          style={{
            backgroundImage: 'url("/images/pattern-dots.svg")',
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our <span className="text-brand-red-600">Services</span>
              </h1>
              <div className="w-20 h-1.5 bg-brand-red-600 rounded-full mb-6 mx-auto"></div>
            </motion.div>
            
            <motion.p
              className="text-lg md:text-xl text-cool-gray-600"
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
        description="Build robust data pipelines and infrastructure to collect, process, and store your data efficiently."
        benefits={[
          "Scalable data pipeline development",
          "Data warehouse design and implementation",
          "ETL/ELT process optimization",
          "Real-time data processing solutions",
          "Data quality and governance frameworks"
        ]}
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
        isReversed
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
        isReversed
      />

      <ServiceDetail
        id="ai-engineering"
        title="AI Engineering"
        description="Implement advanced machine learning and AI solutions to automate processes and unlock predictive capabilities."
        benefits={[
          "Machine learning model development",
          "AI solution architecture",
          "Natural language processing",
          "Computer vision applications",
          "MLOps implementation"
        ]}
      />

      <CallToAction />
    </>
  );
};

export default Services;