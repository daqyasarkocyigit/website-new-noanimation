import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const CaseStudies: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
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
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're currently preparing detailed case studies showcasing our successful 
              projects and client transformations. Check back soon for inspiring stories 
              and measurable results.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
              <ul className="text-left space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-red-600 mr-3">•</span>
                  Real-world data transformation projects
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red-600 mr-3">•</span>
                  Measurable business impact and ROI
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red-600 mr-3">•</span>
                  Technical implementation details
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red-600 mr-3">•</span>
                  Client testimonials and feedback
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default CaseStudies;