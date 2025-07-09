import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, TrendingUp, CheckCircle, Target, Shield, Zap, BarChart3, Database, Award } from 'lucide-react';

const DataEngineeringSuccessStories: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-brand-red-600" />
            <span className="text-sm font-medium text-brand-red-600 uppercase tracking-wide border border-brand-red-300 px-3 py-1 rounded">
              Success Stories
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Data Engineering Success Stories
          </h2>
        </motion.div>

        {/* Success Story 1 - Main Story */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transforming Enterprise Analytics: From Hours to Seconds
            </h2>
            
            <h3 className="text-xl lg:text-2xl text-gray-700 mb-8">
              Leading Grocery Retail Chain Powers Real-Time Decision Making
            </h3>
            
            {/* Success Story Header Tags */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-full border border-blue-200">
                RETAIL
              </span>
              <span className="px-4 py-2 bg-green-50 text-green-700 text-sm font-bold rounded-full border border-green-200">
                10X PERFORMANCE
              </span>
              <span className="px-4 py-2 bg-orange-50 text-orange-700 text-sm font-bold rounded-full border border-orange-200">
                70% COST REDUCTION
              </span>
            </div>

            {/* Challenge */}
            <div className="mb-10">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our client, one of the nation's largest grocery retailers with 500+ stores, faced a critical business 
                intelligence crisis. Their executive dashboards took up to 5 minutes to load during Monday morning 
                leadership meetings, directly impacting strategic decision-making. With over 500 concurrent users 
                accessing reports simultaneously, the existing Dedicated SQL Pool infrastructure couldn't scale, 
                resulting in frequent timeouts and frustrated business leaders.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-10">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Our Solution</h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We implemented our proven <strong>Azure Data Pipeline Architecture with Unity Catalog</strong>, 
                transforming their entire analytics ecosystem:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span><strong>Metadata-Driven Approach:</strong> Eliminated 80% of development effort through configuration-based pipelines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span><strong>Medallion Architecture:</strong> Structured data flow from Bronze (raw) to Silver (cleaned) to Gold (business-ready)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span><strong>Modern Governance:</strong> Unity Catalog implementation for enterprise-grade security and compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span><strong>Intelligent Optimization:</strong> Automated table type selection between managed and external tables</span>
                </li>
              </ul>
            </div>

            {/* Results Grid */}
            <div className="mb-10">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">The Results</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center">
                  <div className="text-4xl font-bold text-blue-700 mb-2">5 sec</div>
                  <div className="text-blue-700 font-medium mb-1">Dashboard Load Time</div>
                  <div className="text-sm text-blue-600">(Previously: 5 minutes)</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 text-center">
                  <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
                  <div className="text-green-700 font-medium mb-1">Concurrent Users</div>
                  <div className="text-sm text-green-600">(Previously: 50)</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 text-center">
                  <div className="text-4xl font-bold text-orange-700 mb-2">$2.1M</div>
                  <div className="text-orange-700 font-medium mb-1">Annual Savings</div>
                  <div className="text-sm text-orange-600">(70% reduction)</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 text-center">
                  <div className="text-4xl font-bold text-purple-700 mb-2">2 hrs</div>
                  <div className="text-purple-700 font-medium mb-1">New Source Onboarding</div>
                  <div className="text-sm text-purple-600">(Previously: 2 weeks)</div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <p className="text-lg text-gray-700">
                <strong>Key Technologies:</strong> Azure Data Factory • Databricks • Unity Catalog • Delta Lake • Synapse Serverless • Power BI
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Financial Services Story */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Accelerating Digital Transformation in Financial Services
            </h3>
            <h4 className="text-lg text-gray-700 mb-6">
              Global Investment Bank Modernizes Risk Analytics Platform
            </h4>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-bold rounded border border-blue-200">
                FINANCIAL SERVICES
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-bold rounded border border-green-200">
                REAL-TIME ANALYTICS
              </span>
              <span className="px-3 py-1 bg-orange-50 text-orange-700 text-sm font-bold rounded border border-orange-200">
                99.9% UPTIME
              </span>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-2">The Challenge</h5>
              <p className="text-gray-700 text-sm leading-relaxed">
                A top-tier investment bank struggled with outdated risk analytics infrastructure. Their legacy ETL 
                processes took 8+ hours to complete, meaning risk reports were always a day behind. Regulatory 
                requirements demanded near real-time risk visibility.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-2">Our Solution</h5>
              <p className="text-gray-700 text-sm leading-relaxed">
                Leveraging our <strong>Metadata-Driven Medallion Architecture</strong>, we revolutionized their data pipeline 
                with parallel processing, Unity Catalog governance, zero-downtime deployment, and self-healing pipelines.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-3">The Results</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                  <strong>15-minute</strong> data freshness (from 24 hours)
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-blue-600 mr-2" />
                  <strong>100%</strong> regulatory compliance achieved
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-yellow-600 mr-2" />
                  <strong>Zero</strong> manual interventions required
                </li>
                <li className="flex items-center">
                  <Database className="w-4 h-4 text-purple-600 mr-2" />
                  <strong>$5M+</strong> in operational savings annually
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Healthcare Story */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enabling Data-Driven Healthcare Innovation
            </h3>
            <h4 className="text-lg text-gray-700 mb-6">
              Regional Healthcare Network Unifies Patient Analytics
            </h4>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-bold rounded border border-blue-200">
                HEALTHCARE
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-bold rounded border border-green-200">
                HIPAA COMPLIANT
              </span>
              <span className="px-3 py-1 bg-orange-50 text-orange-700 text-sm font-bold rounded border border-orange-200">
                50% FASTER INSIGHTS
              </span>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-2">The Challenge</h5>
              <p className="text-gray-700 text-sm leading-relaxed">
                A healthcare network with 15 hospitals needed to consolidate patient data from multiple EMR systems 
                while maintaining HIPAA compliance. Siloed data prevented holistic patient views, impacting care 
                quality and operational efficiency.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-2">Our Solution</h5>
              <p className="text-gray-700 text-sm leading-relaxed">
                We designed a secure, scalable analytics platform with secure data ingestion, HIPAA-compliant storage, 
                row-level security through Unity Catalog policies, and real-time dashboards with Power BI.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-3">The Results</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <Users className="w-4 h-4 text-blue-600 mr-2" />
                  <strong>Unified patient view</strong> across all facilities
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-green-600 mr-2" />
                  <strong>50% reduction</strong> in report generation time
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-red-600 mr-2" />
                  <strong>100% HIPAA compliant</strong> architecture
                </li>
                <li className="flex items-center">
                  <Target className="w-4 h-4 text-purple-600 mr-2" />
                  <strong>Improved patient outcomes</strong> through data insights
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
            Why Leading Enterprises Choose Our Architecture
          </h2>
          <h3 className="text-xl text-gray-700 mb-12 text-center">
            Proven Methodology, Exceptional Results
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-brand-red-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Metadata-Driven Design</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Configure once, deploy everywhere. Our framework eliminates repetitive development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-brand-red-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Medallion Architecture</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Industry-proven pattern for reliable, scalable data processing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-red-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Security</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unity Catalog governance with comprehensive compliance capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-brand-red-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Rapid Deployment</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Production-ready in weeks, not months. Proven 10-week implementation.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Expertise Delivers</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-red-600 mb-2">50+ TB</div>
                <div className="text-gray-700 text-sm">of data processed daily across implementations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-red-600 mb-2">99.9%</div>
                <div className="text-gray-700 text-sm">pipeline reliability with self-healing capabilities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-red-600 mb-2">80%</div>
                <div className="text-gray-700 text-sm">reduction in development time for new data sources</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-red-600 mb-2">100%</div>
                <div className="text-gray-700 text-sm">success rate in production deployments</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-2xl p-8 lg:p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Data Architecture?</h2>
          <h3 className="text-xl mb-6">Let's Build Your Success Story</h3>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
            Our team of certified Azure architects and data engineers is ready to help you modernize your analytics 
            infrastructure. Whether you're facing performance challenges, compliance requirements, or scalability 
            issues, our proven architecture delivers results.
          </p>
          
          <motion.a
            href="/contact"
            className="inline-block bg-white text-brand-red-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Transformation Journey
          </motion.a>
          
          <p className="text-sm mt-4 opacity-75">Schedule a free architecture assessment with our experts</p>
        </motion.div>

        {/* Footer Technologies */}
        <div className="text-center mt-16">
          <div className="text-sm text-gray-600 mb-4">
            <strong>Technologies We Master:</strong> Azure Data Factory • Azure Databricks • Unity Catalog • Delta Lake • Synapse Analytics • Power BI • Azure DevOps
          </div>
          <div className="text-sm text-gray-600 mb-4">
            <strong>Industries We Serve:</strong> Retail • Financial Services • Healthcare • Manufacturing • Energy • Technology
          </div>
          <div className="text-sm text-gray-600">
            <strong>Certifications:</strong> Microsoft Gold Partner • Azure Expert MSP • Databricks Partner
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataEngineeringSuccessStories;