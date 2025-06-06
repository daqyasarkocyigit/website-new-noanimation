import React from 'react';
import { Database, BarChart, LineChart, Cloud, Brain } from 'lucide-react';
import ServiceDetail from '../components/services/ServiceDetail';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our <span className="text-brand-red-600">Services</span>
              </motion.h1>
              <motion.div 
                className="w-20 h-1.5 bg-brand-red-600 rounded-full mb-6 mx-auto"
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>
            
            <motion.p
              className="text-lg md:text-xl text-cool-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Comprehensive data and AI solutions to help your business make better decisions,
              streamline operations, and unlock new opportunities.
            </motion.p>
          </div>
        </div>
      </section>

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
        icon={<Database size={32} />}
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
        icon={<Brain size={32} />}
      />

      <CallToAction />
    </>
  );
};

export default Services;