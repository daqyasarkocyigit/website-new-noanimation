import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';
import ResponsiveServiceVisual from './ResponsiveServiceVisual';

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
  return (
    <section id={id} className="py-12 sm:py-16 lg:py-20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-first: Always stack vertically on mobile, side-by-side on desktop */}
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}>
          
          {/* Content Section */}
          <AnimatedSection 
            delay={0.1} 
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
              <div className="text-brand-red-600 flex-shrink-0">
                {icon}
              </div>
              <h2 className="text-heading-2">{title}</h2>
            </div>
            
            <p className="text-body-large text-cool-gray-600 mb-6">{description}</p>
            
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
                  <Check size={20} className="text-brand-red-600 mt-1 mr-3 flex-shrink-0 min-w-[20px]" />
                  <span className="text-body-base text-cool-gray-600">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>
          
          {/* Visual Section */}
          <AnimatedSection 
            delay={0.3} 
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
              {/* Background decorative elements - Responsive sizing */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-32 lg:h-32 bg-brand-red-600/10 rounded-full filter blur-2xl lg:blur-3xl"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-32 lg:h-32 bg-gray-400/10 rounded-full filter blur-2xl lg:blur-3xl"></div>
              
              {/* Main visual container - Mobile-optimized aspect ratio */}
              <div className="relative rounded-xl overflow-hidden hover:shadow-lg bg-gray-900 w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] border border-gray-200/20 hover:border-[#FF3333]/30 transition-all duration-500 hover:-translate-y-2">
                {useCustomVisual && visualType ? (
                  <div className="w-full h-full relative z-10">
                    <ResponsiveServiceVisual type={visualType} />
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
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;