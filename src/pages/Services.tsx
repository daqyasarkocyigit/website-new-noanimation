import React from 'react';
import { Database, BarChart, LineChart, Cloud, Brain } from 'lucide-react';
import ServiceDetail from '../components/services/ServiceDetail';
import CallToAction from '../components/home/CallToAction';
import AnimatedSection from '../components/utils/AnimatedSection';

const Services: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-12 animated-bg">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Comprehensive data and AI solutions to help your business make better decisions,
              streamline operations, and unlock new opportunities for growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ServiceDetail
        id="data-engineering"
        title="Data Engineering"
        description="We design and implement robust data infrastructure and pipelines to collect, process, store, and analyze your data efficiently."
        benefits={[
          "Custom ETL/ELT pipeline development",
          "Data lake and data warehouse architecture",
          "Real-time data processing solutions",
          "Data quality monitoring and validation",
          "Scalable data storage solutions"
        ]}
        image="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1600"
        icon={<Database size={32} strokeWidth={1.5} />}
      />

      <ServiceDetail
        id="data-visualization"
        title="Data Visualization"
        description="Transform raw data into intuitive, interactive visualizations that tell a compelling story and drive insights across your organization."
        benefits={[
          "Interactive dashboards and reports",
          "Custom visualization development",
          "Real-time data monitoring",
          "Executive KPI dashboards",
          "Embedded analytics solutions"
        ]}
        image="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600"
        icon={<BarChart size={32} strokeWidth={1.5} />}
        isReversed={true}
      />

      <ServiceDetail
        id="business-intelligence"
        title="Business Intelligence & Analytics"
        description="Leverage your data to gain actionable insights, identify trends, and make data-driven decisions that improve business outcomes."
        benefits={[
          "Advanced analytics implementation",
          "Predictive modeling and forecasting",
          "Customer segmentation and analysis",
          "Marketing and sales analytics",
          "Operations and supply chain optimization"
        ]}
        image="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1600"
        icon={<LineChart size={32} strokeWidth={1.5} />}
      />

      <ServiceDetail
        id="cloud-modernization"
        title="Cloud Modernization"
        description="Migrate and optimize your data infrastructure on modern cloud platforms for scalability, reliability, and cost efficiency."
        benefits={[
          "Cloud migration strategy and implementation",
          "Multi-cloud and hybrid cloud solutions",
          "Cloud cost optimization",
          "Serverless architecture design",
          "DevOps and CI/CD implementation"
        ]}
        image="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1600"
        icon={<Cloud size={32} strokeWidth={1.5} />}
        isReversed={true}
      />

      <ServiceDetail
        id="ai-engineering"
        title="AI Engineering"
        description="Implement advanced machine learning and AI solutions to automate processes, gain predictive insights, and create intelligent applications."
        benefits={[
          "Custom machine learning model development",
          "Natural language processing (NLP) solutions",
          "Computer vision and image recognition",
          "AI-powered recommendation systems",
          "MLOps and model deployment"
        ]}
        image="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1600"
        icon={<Brain size={32} strokeWidth={1.5} />}
      />

      <CallToAction />
    </>
  );
};

export default Services;