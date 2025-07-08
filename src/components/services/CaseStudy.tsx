import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Clock, Users, TrendingUp, CheckCircle } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  industry: string;
  duration: string;
  teamSize?: string;
  delay?: number;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  challenge,
  solution,
  results,
  technologies,
  industry,
  duration,
  teamSize,
  delay = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-brand-red-100 text-brand-red-700 text-xs font-medium rounded-full">
                {industry}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                Case Study
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          </div>
        </div>
        
        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
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

        {/* Challenge Preview */}
        <p className="text-gray-700 leading-relaxed">{challenge}</p>
        
        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-2 text-brand-red-600 hover:text-brand-red-700 font-medium transition-colors"
        >
          <span>{isExpanded ? 'Show Less' : 'Read Full Case Study'}</span>
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
            <div className="p-6 space-y-6">
              {/* Solution */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-red-600 rounded-full"></div>
                  Solution
                </h4>
                <p className="text-gray-700 leading-relaxed">{solution}</p>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp size={18} className="text-green-600" />
                  Key Results
                </h4>
                <ul className="space-y-2">
                  {results.map((result, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
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