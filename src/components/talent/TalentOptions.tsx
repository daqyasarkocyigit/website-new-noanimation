import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, UserPlus, Target } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';

interface TalentOptionProps {
  title: string;
  subtitle: string;
  benefits: string[];
  icon: React.ReactNode;
  delay: number;
}

const TalentOption: React.FC<TalentOptionProps> = ({
  title,
  subtitle,
  benefits,
  icon,
  delay
}) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col">
        <div className="w-14 h-14 rounded-full bg-brand-red-100 flex items-center justify-center mb-4">
          <div className="text-brand-red-600">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{subtitle}</p>
        
        <ul className="space-y-2 flex-grow">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-brand-red-500 mr-2">•</span>
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};

const TalentOptions: React.FC = () => {
  return (
    <section className="py-16" id="hire-talent">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title mx-auto">Find Your Ideal Staffing Solution</h2>
          <p className="text-lg text-gray-600">
            Choose the talent solution that best fits your business needs. Whether you need temporary support, 
            permanent hires, or project-based expertise, we've got you covered.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TalentOption
            title="Flexible Contract Staffing"
            subtitle="Access skilled professionals for temporary needs (2 weeks to 12+ months)"
            benefits={[
              "Immediate start capability (1-2 weeks)",
              "No benefits/payroll overhead",
              "Pre-vetted consultant network",
              "Ideal for leave coverage & spikes"
            ]}
            icon={<Clock size={24} />}
            delay={0.1}
          />
          
          <TalentOption
            title="Permanent Placement Services"
            subtitle="Build your core team with carefully matched full-time professionals"
            benefits={[
              "Extensive candidate vetting",
              "Industry-specific expertise",
              "90-day placement guarantee",
              "Ideal for core team growth"
            ]}
            icon={<UserPlus size={24} />}
            delay={0.2}
          />
          
          <TalentOption
            title="Managed Project Delivery"
            subtitle="Complete project execution with dedicated oversight"
            benefits={[
              "End-to-end project management",
              "Deliverable-based pricing",
              "Technical expertise guarantee",
              "Ideal for specific initiatives"
            ]}
            icon={<Target size={24} />}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default TalentOptions;