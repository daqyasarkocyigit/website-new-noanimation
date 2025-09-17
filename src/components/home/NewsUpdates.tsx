import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, ExternalLink } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';

const NewsUpdates: React.FC = () => {
  const newsItems = [
    {
      title: "Azure Databricks Unity Catalog Release",
      description: "Enhanced data governance and security features for enterprise lakehouse architecture",
      company: "Microsoft",
      time: "2 days ago",
      category: "Platform Update"
    },
    {
      title: "Microsoft Fabric Real-time Intelligence GA",
      description: "New capabilities for streaming analytics and real-time dashboard creation",
      company: "Microsoft", 
      time: "5 days ago",
      category: "Service Launch"
    },
    {
      title: "Power BI Premium Per User Updates",
      description: "Advanced AI features and improved performance for business intelligence solutions",
      company: "Microsoft",
      time: "1 week ago", 
      category: "Feature Update"
    },
    {
      title: "Azure OpenAI Service Integration",
      description: "New AI engineering capabilities with GPT-4 and ChatGPT integration for enterprise solutions",
      company: "Microsoft",
      time: "1 week ago",
      category: "AI Update"
    },
    {
      title: "Delta Lake 3.0 Performance Boost",
      description: "Significant improvements in data processing speed and storage optimization",
      company: "Databricks",
      time: "2 weeks ago",
      category: "Technology"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Content */}
          <AnimatedSection delay={0.1}>
            <div className="lg:sticky lg:top-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Stay updated with{' '}
                <span className="text-brand-red-600">DAQ</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-cool-gray-600 leading-relaxed mb-8">
                Weekly and monthly updates from major Data & AI platforms, 
                summarized from official sources with expert commentary on how 
                they impact your data strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium transition-all duration-200 hover:bg-gray-800"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View All Updates
                </motion.button>
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-gray-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe to Newsletter
                </motion.button>
              </div>
            </div>
          </AnimatedSection>

          {/* Right News Feed */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200 group cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-brand-red-50 text-brand-red-600 rounded">
                        {item.company}
                      </span>
                      <span className="text-xs text-gray-500">{item.category}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={12} />
                      {item.time}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-red-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-cool-gray-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {index === 0 && (
                        <>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Azure Databricks</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Data Engineering</span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Microsoft Fabric</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Real-time Analytics</span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Power BI</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Business Intelligence</span>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Azure OpenAI</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">AI Engineering</span>
                        </>
                      )}
                      {index === 4 && (
                        <>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Delta Lake</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Data Storage</span>
                        </>
                      )}
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight size={16} className="text-brand-red-500" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Tech Stack */}
        <AnimatedSection delay={0.5} className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies We Specialize In</h3>
            <p className="text-sm text-cool-gray-600">Our expertise spans across the modern data and AI technology stack</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Azure Data Factory', 'Azure Databricks', 'Microsoft Fabric', 'Power BI', 'Delta Lake',
              'Azure Synapse', 'Azure Machine Learning', 'Azure OpenAI', 'Python', 'SQL Server',
              'Snowflake', 'dbt', 'Terraform', 'Azure DevOps', 'Unity Catalog', 'MLflow'
            ].map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsUpdates;