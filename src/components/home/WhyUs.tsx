import React from 'react';
import { Code, Zap, LineChart, Brain, Cloud } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedSection delay={delay} className="w-full">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg h-full">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-electric-blue-100 to-electric-blue-200 flex items-center justify-center mb-4">
          <div className="text-electric-blue-600">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </AnimatedSection>
  );
};

const WhyUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-title mx-auto">Why DAQ Consulting?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our approach combines technical expertise with business acumen to deliver solutions that 
            drive real-world results. We're committed to excellence in every project.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain size={32} strokeWidth={1.5} />}
            title="AI-Driven"
            description="We leverage cutting-edge AI technologies to automate processes, uncover insights, and create intelligent solutions that adapt and improve over time."
            delay={0.1}
          />
          <FeatureCard
            icon={<Cloud size={32} strokeWidth={1.5} />}
            title="Cloud-Native"
            description="Our solutions are built from the ground up for modern cloud environments, ensuring scalability, reliability, and cost-efficiency."
            delay={0.2}
          />
          <FeatureCard
            icon={<LineChart size={32} strokeWidth={1.5} />}
            title="Business-First"
            description="We focus on delivering measurable business outcomes, not just technical solutions. Your success metrics are our priority."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;