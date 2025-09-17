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
      <Link to={link} className="block h-full group">
        <div className="bg-transparent p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-500 h-full flex flex-col border border-gray-200/20 hover:border-[#FF3333]/30 hover:-translate-y-2 group-hover:bg-white/5 touch-manipulation">
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-[#FF3333] transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 group-hover:text-[#FF3333] transition-colors duration-300 leading-tight">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{description}</p>
          <div className="text-[#FF3333] font-medium flex items-center mt-auto text-sm sm:text-base">
            Learn more
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              whileHover={{ x: 8 }}
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
    <section className="py-12 sm:py-16 lg:py-24 bg-transparent" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 mx-auto">Our Services</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive data and AI solutions to help your business make better decisions,
            streamline operations, and unlock new opportunities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
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