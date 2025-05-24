import React from 'react';
import { Building2, Heart, Landmark, Factory, Cpu, Zap } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-red-100 mb-6">
          <div className="text-brand-red-600">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </AnimatedSection>
  );
};

const Industries: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title mx-auto">Industries We Serve</h2>
          <p className="text-lg text-gray-600">
            We have deep expertise across multiple industries, delivering tailored data solutions 
            that address sector-specific challenges and opportunities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <IndustryCard
            icon={<Building2 size={32} />}
            title="Retail & Consumer Goods"
            description="Optimize inventory, enhance customer experience, and drive sales through data-driven insights."
            delay={0.1}
          />
          
          <IndustryCard
            icon={<Heart size={32} />}
            title="Healthcare & Life Sciences"
            description="Improve patient outcomes and operational efficiency with advanced analytics solutions."
            delay={0.2}
          />
          
          <IndustryCard
            icon={<Landmark size={32} />}
            title="Financial Services"
            description="Enable data-driven decision making and risk management in banking and finance."
            delay={0.3}
          />
          
          <IndustryCard
            icon={<Factory size={32} />}
            title="Manufacturing"
            description="Streamline operations and enhance productivity through smart factory solutions."
            delay={0.4}
          />
          
          <IndustryCard
            icon={<Cpu size={32} />}
            title="Technology"
            description="Accelerate innovation and scale operations with cutting-edge data infrastructure."
            delay={0.5}
          />
          
          <IndustryCard
            icon={<Zap size={32} />}
            title="Energy & Utilities"
            description="Optimize resource allocation and improve grid efficiency with predictive analytics."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Industries;