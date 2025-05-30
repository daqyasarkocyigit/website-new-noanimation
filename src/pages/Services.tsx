import React from 'react';
import { Database, BarChart, LineChart, Cloud, Brain } from 'lucide-react';
import ServiceDetail from '../components/services/ServiceDetail';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 animated-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Comprehensive data and AI solutions to help your business make better decisions,
              streamline operations, and unlock new opportunities.
            </p>
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
        image="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
        image="https://images.pexels.com/photos/7567596/pexels-photo-7567596.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
        image="https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
        image="https://images.pexels.com/photos/7567619/pexels-photo-7567619.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
        image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600"
        icon={<Brain size={32} />}
      />

      <CallToAction />
    </>
  );
};

export default Services;