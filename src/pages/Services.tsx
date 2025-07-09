import React from 'react';
import { Database, BarChart, LineChart, Cloud, Brain } from 'lucide-react';
import ServiceDetail from '../components/services/ServiceDetail';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';
import DataEngineeringSuccessStories from '../components/services/DataEngineeringSuccessStories';
import ServiceCaseStudies from '../components/services/ServiceCaseStudies';
import { 
  dataVisualizationCaseStudies, 
  businessIntelligenceCaseStudies, 
  cloudModernizationCaseStudies, 
  aiEngineeringCaseStudies 
} from '../data/caseStudies';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Our <span className="text-brand-red-600">Services</span>
              </h1>
              <div className="w-20 h-1.5 bg-brand-red-600 rounded-full mb-6 mx-auto"></div>
            </motion.div>
            
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-cool-gray-600"
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

      {/* Data Engineering Service */}
      <ServiceDetail
        id="data-engineering"
        title="Data Engineering"
        description="Build robust data pipelines and infrastructure to collect, process, and store your data efficiently. Our data engineering solutions provide the foundation for all your analytics and AI initiatives."
        benefits={[
          "Scalable data pipeline development and orchestration",
          "Data warehouse design and implementation",
          "ETL/ELT process optimization and automation",
          "Real-time data processing solutions",
          "Data quality and governance frameworks",
          "Cloud-native architecture design",
          "Metadata-driven pipeline development"
        ]}
        icon={<Database size={32} />}
        image="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Data Engineering Success Stories */}
      <DataEngineeringSuccessStories />

      {/* Data Visualization Service */}
      <ServiceDetail
        id="data-visualization"
        title="Data Visualization"
        description="Transform complex data into intuitive visualizations that tell a compelling story and drive insights. Our visualization solutions make data accessible and actionable for all stakeholders."
        benefits={[
          "Interactive dashboard development",
          "Custom visualization solutions",
          "Real-time data monitoring",
          "Business metrics tracking",
          "Automated reporting systems",
          "Mobile-responsive dashboards",
          "Self-service analytics platforms"
        ]}
        icon={<BarChart size={32} />}
        isReversed
        image="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Data Visualization Success Stories */}
      <ServiceCaseStudies 
        title="Data Visualization" 
        caseStudies={dataVisualizationCaseStudies} 
      />

      {/* Business Intelligence Service */}
      <ServiceDetail
        id="business-intelligence"
        title="Business Intelligence & Analytics"
        description="Leverage your data to gain actionable insights, identify trends, and make data-driven decisions. Our BI solutions provide comprehensive analytics capabilities for modern businesses."
        benefits={[
          "Advanced analytics implementation",
          "Predictive modeling and forecasting",
          "KPI development and tracking",
          "Business performance analysis",
          "Competitive intelligence solutions",
          "Self-service BI platforms",
          "Data-driven decision support systems"
        ]}
        icon={<LineChart size={32} />}
        image="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Business Intelligence Success Stories */}
      <ServiceCaseStudies 
        title="Business Intelligence" 
        caseStudies={businessIntelligenceCaseStudies} 
      />

      {/* Cloud Modernization Service */}
      <ServiceDetail
        id="cloud-modernization"
        title="Cloud Modernization"
        description="Migrate and optimize your data infrastructure on modern cloud platforms for scalability and cost efficiency. Our cloud solutions provide the flexibility and performance your business needs."
        benefits={[
          "Cloud migration strategy and execution",
          "Infrastructure optimization and cost management",
          "Multi-cloud and hybrid cloud solutions",
          "Cloud cost optimization strategies",
          "Security and compliance implementation",
          "Disaster recovery and backup solutions",
          "Performance monitoring and optimization"
        ]}
        icon={<Cloud size={32} />}
        isReversed
        image="https://images.pexels.com/photos/590018/pexels-photo-590018.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Cloud Modernization Success Stories */}
      <ServiceCaseStudies 
        title="Cloud Modernization" 
        caseStudies={cloudModernizationCaseStudies} 
      />

      {/* AI Engineering Service */}
      <ServiceDetail
        id="ai-engineering"
        title="AI Engineering"
        description="Implement advanced machine learning and AI solutions to automate processes and unlock predictive capabilities. Our AI engineering services help you harness the power of artificial intelligence."
        benefits={[
          "Machine learning model development and deployment",
          "AI solution architecture and implementation",
          "Natural language processing applications",
          "Computer vision and image recognition",
          "MLOps implementation and automation",
          "Predictive analytics and forecasting",
          "AI-powered automation solutions"
        ]}
        icon={<Brain size={32} />}
        image="https://images.pexels.com/photos/590024/pexels-photo-590024.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* AI Engineering Success Stories */}
      <ServiceCaseStudies 
        title="AI Engineering" 
        caseStudies={aiEngineeringCaseStudies} 
      />

      <CallToAction />
    </>
  );
};

export default Services;