import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle, Clock, Users, TrendingUp, Shield, Zap, Database, Target } from 'lucide-react';

interface SuccessStory {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string;
  additionalDetails?: {
    implementation: string;
    keyFeatures: string[];
    timeline: string;
    teamSize: string;
  };
}

const successStories: SuccessStory[] = [
  {
    id: 'retail-transformation',
    title: 'Transforming Enterprise Analytics: From Hours to Seconds',
    subtitle: 'Leading Grocery Retail Chain Powers Real-Time Decision Making',
    industry: 'Retail',
    challenge: 'Our client, one of the nation\'s largest grocery retailers with 500+ stores, faced a critical business intelligence crisis. Their executive dashboards took up to 5 minutes to load during Monday morning leadership meetings, directly impacting strategic decision-making. With over 500 concurrent users accessing reports simultaneously, the existing Dedicated SQL Pool infrastructure couldn\'t scale, resulting in frequent timeouts and frustrated business leaders.',
    solution: 'We implemented our proven Azure Data Pipeline Architecture with Unity Catalog, transforming their entire analytics ecosystem through metadata-driven approach, medallion architecture, modern governance with Unity Catalog, and intelligent optimization with automated table type selection.',
    results: [
      'Dashboard load time: 5 seconds (previously 5 minutes)',
      'Concurrent users: 500+ (previously 50)',
      'Annual savings: $2.1M (70% cost reduction)',
      'New source onboarding: 2 hours (previously 2 weeks)'
    ],
    technologies: 'Azure Data Factory • Databricks • Unity Catalog • Delta Lake • Synapse Serverless • Power BI',
    additionalDetails: {
      implementation: 'Leveraging Azure Data Factory with control database, we implemented a configuration-based framework that automatically generates data pipelines based on metadata definitions. We structured the data lake into Bronze (raw), Silver (cleaned), and Gold (business-ready) layers with full Unity Catalog governance.',
      keyFeatures: [
        'Metadata-driven pipeline orchestration',
        'Delta Lake ACID transactions',
        'Unity Catalog centralized governance',
        'Self-healing pipelines with automated retry',
        'Zero-downtime deployments'
      ],
      timeline: '12 weeks',
      teamSize: '5 specialists'
    }
  },
  {
    id: 'financial-modernization',
    title: 'Accelerating Digital Transformation in Financial Services',
    subtitle: 'Global Investment Bank Modernizes Risk Analytics Platform',
    industry: 'Financial Services',
    challenge: 'A top-tier investment bank struggled with outdated risk analytics infrastructure. Their legacy ETL processes took 8+ hours to complete, meaning risk reports were always a day behind. Regulatory requirements demanded near real-time risk visibility, and the existing system couldn\'t meet compliance standards.',
    solution: 'Leveraging our Metadata-Driven Medallion Architecture, we revolutionized their data pipeline with parallel processing, Unity Catalog governance, zero-downtime deployment, and self-healing pipelines with intelligent retry mechanisms.',
    results: [
      '15-minute data freshness (from 24 hours)',
      '100% regulatory compliance achieved',
      'Zero manual interventions required',
      '$5M+ in operational savings annually'
    ],
    technologies: 'Azure Data Factory • Databricks • Unity Catalog • Delta Lake • Azure SQL • Power BI',
    additionalDetails: {
      implementation: 'Complete migration from legacy systems to modern cloud-native architecture with comprehensive data governance, automated compliance reporting, and real-time risk analytics capabilities.',
      keyFeatures: [
        'Real-time risk analytics',
        'Automated compliance reporting',
        'Advanced data governance',
        'Self-healing pipeline architecture',
        'Zero-downtime deployments'
      ],
      timeline: '16 weeks',
      teamSize: '6 specialists'
    }
  },
  {
    id: 'healthcare-unification',
    title: 'Enabling Data-Driven Healthcare Innovation',
    subtitle: 'Regional Healthcare Network Unifies Patient Analytics',
    industry: 'Healthcare',
    challenge: 'A healthcare network with 15 hospitals needed to consolidate patient data from multiple EMR systems while maintaining HIPAA compliance. Siloed data prevented holistic patient views, impacting care quality and operational efficiency.',
    solution: 'We designed a secure, scalable analytics platform with secure data ingestion, HIPAA-compliant storage, row-level security through Unity Catalog policies, and real-time dashboards with Power BI.',
    results: [
      'Unified patient view across all facilities',
      '50% reduction in report generation time',
      '100% HIPAA compliant architecture',
      'Improved patient outcomes through data insights'
    ],
    technologies: 'Azure Data Factory • Databricks • Unity Catalog • Azure SQL • Power BI • Azure Key Vault',
    additionalDetails: {
      implementation: 'Complete EMR data integration with advanced security measures, patient data unification, and real-time analytics while maintaining strict HIPAA compliance throughout the entire data pipeline.',
      keyFeatures: [
        'HIPAA-compliant data processing',
        'Multi-EMR system integration',
        'Row-level security implementation',
        'Real-time patient analytics',
        'Advanced encryption and access controls'
      ],
      timeline: '14 weeks',
      teamSize: '4 specialists'
    }
  }
];

const SuccessStoryCard: React.FC<{ story: SuccessStory; delay: number }> = ({ story, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded border border-gray-200">
            {story.industry}
          </span>
          <span className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded">
            Case Study
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h3>
        <h4 className="text-lg text-gray-700 mb-6">{story.subtitle}</h4>
        
        <div className="mb-6">
          <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Target size={16} className="text-gray-600" />
            Challenge
          </h5>
          <p className="text-gray-700 leading-relaxed">{story.challenge}</p>
        </div>
        
        <div className="mb-6">
          <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <CheckCircle size={16} className="text-gray-600" />
            Results
          </h5>
          <ul className="space-y-2">
            {story.results.map((result, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium transition-colors border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 w-full justify-center"
        >
          <span>{isExpanded ? 'Show Less' : 'Read Full Story'}</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-200"
          >
            <div className="p-6 space-y-6">
              <div>
                <h5 className="font-semibold text-gray-900 mb-3">Our Solution</h5>
                <p className="text-gray-700 leading-relaxed mb-4">{story.solution}</p>
                
                {story.additionalDetails && (
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <p className="text-gray-700 text-sm leading-relaxed">{story.additionalDetails.implementation}</p>
                  </div>
                )}
              </div>
              
              {story.additionalDetails && (
                <>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Features</h5>
                    <ul className="space-y-2">
                      {story.additionalDetails.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <h6 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Clock size={16} className="text-gray-600" />
                        Timeline
                      </h6>
                      <p className="text-gray-700 text-sm">{story.additionalDetails.timeline}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <h6 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Users size={16} className="text-gray-600" />
                        Team Size
                      </h6>
                      <p className="text-gray-700 text-sm">{story.additionalDetails.teamSize}</p>
                    </div>
                  </div>
                </>
              )}
              
              <div>
                <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {story.technologies.split(' • ').map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DataEngineeringSuccessStories: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-gray-600 uppercase tracking-wide border border-gray-300 px-3 py-1 rounded mb-4 inline-block">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Data Engineering Success Stories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore real-world implementations and measurable business outcomes achieved through our data engineering solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {successStories.map((story, index) => (
            <SuccessStoryCard key={story.id} story={story} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataEngineeringSuccessStories;