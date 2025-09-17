import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Database, BarChart3, Brain } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';

const CaseStudies: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-heading-1 mb-4">Success Stories</h2>
              <p className="text-body-large text-gray-600 max-w-3xl">
                Real implementations delivering measurable business impact through advanced data engineering, 
                AI solutions, and cloud modernization projects.
              </p>
            </div>
            <Link to="/services" className="btn-secondary whitespace-nowrap">
              View All Services
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Featured Case Study - Metadata Framework */}
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <Link to="/services#data-engineering" className="block group">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Database className="w-6 h-6 text-brand-red-600" />
                    <span className="px-3 py-1 bg-brand-red-50 text-brand-red-700 text-sm font-medium rounded border border-brand-red-200">
                      Featured Implementation
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-red-600 transform group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-red-600 transition-colors duration-300">
                  Metadata-Driven Ingestion Framework
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Built a production-ready data pipeline using Azure Data Factory, Databricks, and medallion architecture 
                  that processes 50+ data sources with 99.7% reliability through configuration-driven approach.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="text-lg sm:text-xl font-bold text-gray-900">85%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Performance Improvement</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="text-lg sm:text-xl font-bold text-gray-900">45%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Cost Reduction</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Azure Data Factory', 'Databricks', 'Unity Catalog', 'Delta Lake', 'Power BI'].map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Additional Success Metrics */}
          <div className="space-y-6">
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Business Intelligence</h4>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">3.2x</div>
                <div className="text-sm text-gray-600 mb-3">Average ROI across projects</div>
                <div className="text-xs text-gray-500">
                  Advanced analytics and reporting solutions delivering measurable business outcomes
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-gray-900">AI Engineering</h4>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">99.7%</div>
                <div className="text-sm text-gray-600 mb-3">Model accuracy achieved</div>
                <div className="text-xs text-gray-500">
                  Machine learning and AI implementations powering intelligent automation
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* CTA Section */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Ready to Transform Your Data Infrastructure?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our proven methodologies can deliver similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CaseStudies;