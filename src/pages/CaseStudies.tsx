import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyCard from '../components/caseStudies/CaseStudyCard';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const CaseStudies: React.FC = () => {
}
  return (
    <>
      <section className="pt-32 pb-16 animated-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Case Studies
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore how we've helped organizations across industries transform their 
              data capabilities and achieve measurable business results.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              id="power-platform-automation"
              title="Power Platform Ticket Automation"
              industry="Infrastructure & Energy Solutions"
              image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="End-to-end ticket automation using Microsoft Forms, Power Automate, and ConnectWise API integration for a leading HVAC and infrastructure company."
              results={[
                "95% faster ticket creation through automation",
                "100% audit trail compliance achieved",
                "75% reduction in average response time"
              ]}
              delay={0.1}
            />
            
            <CaseStudyCard
              id="healthcare-analytics"
              title="Healthcare Analytics Platform"
              industry="Healthcare"
              image="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="We built a comprehensive analytics platform for a leading healthcare provider to improve patient outcomes and operational efficiency."
              results={[
                "Reduced operational costs by 32%",
                "Improved patient satisfaction scores by 18%",
                "Decreased average wait times by 24 minutes"
              ]}
              delay={0.1}
            />
            
            <CaseStudyCard
              id="financial-data-lake"
              title="Financial Services Data Lake"
              industry="Finance"
              image="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="We designed and implemented a cloud-based data lake solution for a financial services firm to centralize data and accelerate insights."
              results={[
                "90% faster reporting cycles",
                "Consolidated 12+ data sources",
                "Enabled real-time risk analysis"
              ]}
              delay={0.2}
            />
            
            <CaseStudyCard
              id="ecommerce-ai-recommendations"
              title="E-commerce AI Recommendation Engine"
              industry="Retail"
              image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="We developed a personalized product recommendation system powered by machine learning for a major e-commerce retailer."
              results={[
                "28% increase in customer engagement",
                "15% higher average order value",
                "42% improvement in conversion rates"
              ]}
              delay={0.3}
            />
            
            <CaseStudyCard
              id="manufacturing-iot"
              title="Manufacturing IoT Analytics"
              industry="Manufacturing"
              image="https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="We implemented an IoT analytics solution for a manufacturing company to monitor equipment performance and predict maintenance needs."
              results={[
                "Reduced downtime by 47%",
                "Decreased maintenance costs by 31%",
                "Extended equipment lifespan by 3+ years"
              ]}
              delay={0.4}
            />
            
            <CaseStudyCard
              id="logistics-optimization"
              title="Logistics Route Optimization"
              industry="Transportation"
              image="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="We developed an AI-powered route optimization system for a logistics company to improve delivery efficiency and reduce costs."
              results={[
                "22% reduction in fuel consumption",
                "18% increase in on-time deliveries",
                "Annual savings of $1.2M in operational costs"
              ]}
              delay={0.5}
            />
            
            <CaseStudyCard
              id="insurance-fraud-detection"
              title="Insurance Fraud Detection"
              industry="Insurance"
              image="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="We implemented an advanced fraud detection system using machine learning for a major insurance provider."
              results={[
                "Identified $4.2M in fraudulent claims",
                "Reduced false positives by 64%",
                "Accelerated claims processing by 37%"
              ]}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default CaseStudies;