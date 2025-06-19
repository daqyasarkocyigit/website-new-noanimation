import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';
import DataEngineeringVisual from './DataEngineeringVisual';
import DataVisualizationVisual from './DataVisualizationVisual';
import BusinessIntelligenceVisual from './BusinessIntelligenceVisual';
import AIEngineeringVisual from './AIEngineeringVisual';
import CloudModernizationVisual from './CloudModernizationVisual';

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image?: string;
  icon: React.ReactNode;
  isReversed?: boolean;
  useCustomVisual?: boolean;
  visualType?: 'data-engineering' | 'data-visualization' | 'business-intelligence' | 'ai-engineering' | 'cloud-modernization';
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  title,
  description,
  benefits,
  image,
  icon,
  isReversed = false,
  useCustomVisual = false,
  visualType,
}) => {
  const renderCustomVisual = () => {
    switch (visualType) {
      case 'data-engineering':
        return <DataEngineeringVisual />;
      case 'data-visualization':
        return <DataVisualizationVisual />;
      case 'business-intelligence':
        return <BusinessIntelligenceVisual />;
      case 'ai-engineering':
        return <AIEngineeringVisual />;
      case 'cloud-modernization':
        return <CloudModernizationVisual />;
      default:
        return <DataEngineeringVisual />;
    }
  };

  return (
    <section id={id} className="py-12 sm:py-16 lg:py-20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Always use the same layout - content left, visual right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Content Section - Always on the left */}
          <AnimatedSection 
            delay={0.1} 
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
              <div className="text-brand-red-600 flex-shrink-0">
                {icon}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{title}</h2>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl text-cool-gray-600 mb-8 leading-relaxed">{description}</p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Check size={20} className="text-brand-red-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg text-cool-gray-600">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>
          
          {/* Visual Section - Always on the right */}
          <AnimatedSection 
            delay={0.3} 
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
              {/* Background decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-brand-red-600/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gray-400/10 rounded-full filter blur-3xl"></div>
              
              {/* Main visual container with consistent sizing */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 w-full aspect-[4/3]">
                {useCustomVisual ? (
                  <div className="w-full h-full relative z-10">
                    {renderCustomVisual()}
                  </div>
                ) : (
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover z-10 relative"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;