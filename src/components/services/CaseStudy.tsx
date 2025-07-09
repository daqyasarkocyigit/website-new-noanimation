import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Clock, Users, TrendingUp, CheckCircle, Target, Lightbulb, Award } from 'lucide-react';

interface DetailedSection {
  title: string;
  content: string;
  subsections?: { title: string; content: string; }[];
}

interface CaseStudyProps {
  title: string;
  image?: string;
  architectureDiagram?: React.ComponentType;
  challenge: string;
  solution: string;
  detailedSections?: DetailedSection[];
  results: string[];
  technologies: string[];
  industry: string;
  duration: string;
  teamSize?: string;
  delay?: number;
  conclusion?: string;
  keySuccessFactors?: string[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  image,
  architectureDiagram: ArchitectureDiagram,
  challenge,
  solution,
  detailedSections,
  results,
  technologies,
  industry,
  duration,
  teamSize,
  delay = 0,
  conclusion,
  keySuccessFactors
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {/* 1. BAŞLIK - Title Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded border border-gray-200">
            {industry}
          </span>
          <span className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded">
            Case Study
          </span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-gray-400" />
            <span>{duration}</span>
          </div>
          {teamSize && (
            <div className="flex items-center gap-1">
              <Users size={16} className="text-gray-400" />
              <span>{teamSize}</span>
            </div>
          )}
        </div>
      </div>

      {/* 2. ARCHITECTURE DIAGRAM */}
      {(ArchitectureDiagram || image) && (
        <div className="relative bg-gray-50 border-b border-gray-100">
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Architecture Overview</h4>
          </div>
          
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden">
            {ArchitectureDiagram ? (
              <div className="w-full h-full flex items-center justify-center bg-white p-2 sm:p-4">
                <div className="w-full h-full">
                  <ArchitectureDiagram />
                </div>
              </div>
            ) : image ? (
              <>
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', image);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback if image fails to load */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100" style={{ zIndex: -1 }}>
                  <div className="text-center text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm">Architecture Diagram</p>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}

      {/* 3. DETAYLAR - Details Section */}
      <div className="p-6 border-b border-gray-100">
        {/* Challenge Preview */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Target size={18} className="text-gray-600" />
            Challenge
          </h4>
          <p className="text-gray-700 leading-relaxed">{challenge}</p>
        </div>
        
        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium transition-colors border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 w-full justify-center"
        >
          <span>{isExpanded ? 'Show Less Details' : 'Read Full Case Study'}</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 space-y-8">
              {/* Solution */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb size={18} className="text-gray-600" />
                  Solution
                </h4>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{solution}</p>
                </div>
              </div>

              {/* Detailed Sections */}
              {detailedSections && detailedSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h4>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                    
                    {section.subsections && (
                      <div className="space-y-4">
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="bg-gray-50 p-4 rounded border-l-4 border-gray-900">
                            <h5 className="font-semibold text-gray-900 mb-2">{subsection.title}</h5>
                            <p className="text-gray-700 text-sm leading-relaxed">{subsection.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Results */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-gray-600" />
                  Results & Impact
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded border border-gray-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle size={16} className="text-gray-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Success Factors */}
              {keySuccessFactors && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Award size={18} className="text-gray-600" />
                    Key Success Factors
                  </h4>
                  <div className="space-y-3">
                    {keySuccessFactors.map((factor, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 p-4 rounded border-l-4 border-gray-900"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <p className="text-gray-700 text-sm leading-relaxed">{factor}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Conclusion */}
              {conclusion && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Conclusion</h4>
                  <div className="bg-gray-900 text-white p-6 rounded border">
                    <p className="leading-relaxed">{conclusion}</p>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-800 text-sm rounded border border-gray-200 font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
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

export default CaseStudy;