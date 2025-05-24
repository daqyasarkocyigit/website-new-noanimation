import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, BarChart, LineChart, Cloud, Brain } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay }) => {
  return (
    <AnimatedSection delay={delay}>
      <Link to={link} className="block h-full">
        <div className="bg-white p-8 rounded-xl shadow-lg card-hover h-full flex flex-col">
          <div className="flex items-center justify-center w-16 h-16 mb-6 text-electric-blue-500">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{description}</p>
          <div className="text-electric-blue-500 font-medium flex items-center mt-auto">
            Learn more
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive data and AI solutions to help your business make better decisions,
            streamline operations, and unlock new opportunities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ServiceCard
            icon={<Database size={40} strokeWidth={1.5} />}
            title="Data Engineering"
            description="Build robust data pipelines and infrastructure to collect, process, and store your data efficiently."
            link="/services#data-engineering"
            delay={0.1}
          />
          <ServiceCard
            icon={<BarChart size={40} strokeWidth={1.5} />}
            title="Data Visualization"
            description="Transform complex data into intuitive visualizations that tell a compelling story and drive insights."
            link="/services#data-visualization"
            delay={0.2}
          />
          <ServiceCard
            icon={<LineChart size={40} strokeWidth={1.5} />}
            title="Business Intelligence & Analytics"
            description="Leverage your data to gain actionable insights, identify trends, and make data-driven decisions."
            link="/services#business-intelligence"
            delay={0.3}
          />
          <ServiceCard
            icon={<Cloud size={40} strokeWidth={1.5} />}
            title="Cloud Modernization"
            description="Migrate and optimize your data infrastructure on modern cloud platforms for scalability and cost efficiency."
            link="/services#cloud-modernization"
            delay={0.4}
          />
          <ServiceCard
            icon={<Brain size={40} strokeWidth={1.5} />}
            title="AI Engineering"
            description="Implement advanced machine learning and AI solutions to automate processes and unlock predictive capabilities."
            link="/services#ai-engineering"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;