import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, ExternalLink } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  source: string;
  timeAgo: string;
  category: 'ai' | 'data' | 'cloud' | 'analytics' | 'ml';
  isNew?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Microsoft Fabric Real-time Intelligence GA',
    description: 'New streaming analytics capabilities for real-time data processing',
    source: 'Microsoft',
    timeAgo: '2 hours ago',
    category: 'analytics',
    isNew: true
  },
  {
    id: '2', 
    title: 'Azure OpenAI GPT-4 Turbo Updates',
    description: 'Enhanced multimodal capabilities with improved performance',
    source: 'Azure OpenAI',
    timeAgo: '1 day ago',
    category: 'ai'
  },
  {
    id: '3',
    title: 'Databricks Unity Catalog Enhancements',
    description: 'New data governance features and security improvements',
    source: 'Databricks',
    timeAgo: '3 days ago',
    category: 'data'
  },
  {
    id: '4',
    title: 'Power BI Copilot General Availability',
    description: 'AI-powered insights and natural language queries for all users',
    source: 'Microsoft',
    timeAgo: '5 days ago',
    category: 'analytics'
  },
  {
    id: '5',
    title: 'Azure Synapse Link for Fabric',
    description: 'Seamless integration between operational and analytical workloads',
    source: 'Azure',
    timeAgo: '1 week ago',
    category: 'cloud'
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'ai':
      return 'text-purple-600 bg-purple-50 border-purple-200';
    case 'data':
      return 'text-blue-600 bg-blue-50 border-blue-200';
    case 'cloud':
      return 'text-sky-600 bg-sky-50 border-sky-200';
    case 'analytics':
      return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    case 'ml':
      return 'text-orange-600 bg-orange-50 border-orange-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};

const NewsUpdates: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Hero Content */}
          <AnimatedSection delay={0.1}>
            <div className="lg:sticky lg:top-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Stay updated with
                <br />
                <span className="text-brand-red-600">Data & AI</span>
              </h2>
              
              <p className="text-lg text-cool-gray-600 mb-8 leading-relaxed">
                Weekly and monthly updates from major Data & AI platforms, 
                summarized from official sources with expert commentary from our team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="btn-primary inline-flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View All Updates
                </motion.button>
                
                <motion.button
                  className="btn-secondary inline-flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </motion.button>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - News Feed */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getCategoryColor(item.category)}`}>
                        {item.source}
                      </span>
                      {item.isNew && (
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-brand-red-600 text-white animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock size={14} className="mr-1" />
                      <span>{item.timeAgo}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-red-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      Data & AI Platform Updates
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-brand-red-600 transition-colors" />
                  </div>
                </motion.div>
              ))}
              
              {/* Show More Button */}
              <motion.div
                className="text-center pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <button className="text-brand-red-600 hover:text-brand-red-700 font-medium inline-flex items-center transition-colors">
                  <span>Show More Updates</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;