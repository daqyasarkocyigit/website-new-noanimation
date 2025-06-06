import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';
import Scene from './3d/Scene';
import DataEngineeringModel from './3d/DataEngineeringModel';
import VisualizationModel from './3d/VisualizationModel';
import CloudModel from './3d/CloudModel';
import AIModel from './3d/AIModel';

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  icon: React.ReactNode;
  isReversed?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  title,
  description,
  benefits,
  icon,
  isReversed = false,
}) => {
  const get3DModel = (id: string) => {
    switch (id) {
      case 'data-engineering':
        return <DataEngineeringModel />;
      case 'data-visualization':
        return <VisualizationModel />;
      case 'cloud-modernization':
        return <CloudModel />;
      case 'ai-engineering':
        return <AIModel />;
      default:
        return <DataEngineeringModel />;
    }
  };

  return (
    <section id={id} className="py-20 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
          <AnimatedSection delay={0.1} className="order-2 md:order-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-brand-red-600">
                {icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </div>
            
            <p className="text-lg text-cool-gray-600 mb-6 leading-relaxed">{description}</p>
            
            <ul className="space-y-3">
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
                  <span className="text-cool-gray-600">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3} className={`order-1 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-red-600/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-400/10 rounded-full filter blur-3xl"></div>
              <Scene>
                {get3DModel(id)}
              </Scene>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;