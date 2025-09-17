import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Lightbulb, Target, TrendingUp, Shield, Zap } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const About: React.FC = () => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-heading-1 mb-4">
                About <span className="text-brand-red-600">DAQ</span> Consulting
              </h1>
              <div className="w-16 h-1 bg-brand-red-600 rounded-full mb-4 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-body-large text-cool-gray-600 mb-4">
                DAQ Consulting is a premier data solutions provider dedicated to helping organizations harness the power of their data.
              </p>
              <p className="text-body-large text-cool-gray-600">
                Our mission is to empower organizations to unlock the full potential of their data through advanced analytics, cloud modernization, and AI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full mb-4">OUR APPROACH</span>
            <h2 className="text-heading-1 mb-6">How We Drive Transformation</h2>
            <p className="text-body-large text-cool-gray-600">
              We combine deep technical expertise with business acumen to deliver solutions that create real impact.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: <Target className="text-brand-red-600" />,
                title: "Discovery & Strategy",
                description: "We start by understanding your business goals and challenges to create a tailored data strategy."
              },
              {
                icon: <Zap className="text-brand-red-600" />,
                title: "Solution Design",
                description: "Our experts architect scalable, future-proof solutions that align with your business objectives."
              },
              {
                icon: <TrendingUp className="text-brand-red-600" />,
                title: "Implementation",
                description: "We deliver with precision, ensuring seamless integration with your existing systems."
              },
              {
                icon: <Shield className="text-brand-red-600" />,
                title: "Continuous Support",
                description: "Our relationship continues with ongoing optimization and support to maximize your ROI."
              }
            ].map((item, index) => (
              <AnimatedSection 
                key={index} 
                delay={0.1 * index} 
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-red-100 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-heading-4 mb-4">{item.title}</h3>
                <p className="text-body-base text-cool-gray-600">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default About;