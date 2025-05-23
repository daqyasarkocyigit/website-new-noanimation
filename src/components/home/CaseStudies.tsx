import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';

interface CaseStudyCardProps {
  title: string;
  industry: string;
  image: string;
  result: string;
  link: string;
  delay: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  title, 
  industry, 
  image, 
  result, 
  link, 
  delay 
}) => {
  return (
    <AnimatedSection delay={delay} className="w-full">
      <Link to={link} className="block h-full">
        <div className="relative group overflow-hidden rounded-xl shadow-lg h-full">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-80"></div>
          </div>
          
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <span className="text-electric-blue-300 text-sm font-medium mb-2">{industry}</span>
            <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
            <p className="text-white text-lg font-bold mb-4">
              {result}
            </p>
            <motion.div
              className="flex items-center text-electric-blue-300 font-medium"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              View Project <ArrowRight size={16} className="ml-2" />
            </motion.div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

const CaseStudies: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="section-title">Featured Case Studies</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                See how we've helped organizations transform their data capabilities and achieve measurable results.
              </p>
            </div>
            <Link to="/case-studies" className="btn-secondary whitespace-nowrap">
              View All Case Studies
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard
            title="Healthcare Analytics Platform"
            industry="Healthcare"
            image="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600"
            result="Reduced operational costs by 32%"
            link="/case-studies/healthcare-analytics"
            delay={0.1}
          />
          <CaseStudyCard
            title="Financial Services Data Lake"
            industry="Finance"
            image="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1600"
            result="90% faster reporting cycles"
            link="/case-studies/financial-data-lake"
            delay={0.2}
          />
          <CaseStudyCard
            title="E-commerce AI Recommendation Engine"
            industry="Retail"
            image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600"
            result="28% increase in customer engagement"
            link="/case-studies/ecommerce-ai-recommendations"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;