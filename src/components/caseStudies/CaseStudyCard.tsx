import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  id: string;
  title: string;
  industry: string;
  image: string;
  description: string;
  results: string[];
  delay: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  id, 
  title, 
  industry, 
  image, 
  description, 
  results, 
  delay 
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-electric-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
          {industry}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <h4 className="font-medium text-lg mb-2">Key Results:</h4>
        <ul className="space-y-1 mb-6">
          {results.map((result, index) => (
            <li key={index} className="flex items-start">
              <span className="text-electric-blue-500 mr-2">•</span>
              <span>{result}</span>
            </li>
          ))}
        </ul>
        
        <Link to={`/case-studies/${id}`} className="text-electric-blue-500 font-medium flex items-center hover:text-electric-blue-700 transition-colors">
          View Full Case Study
          <motion.span
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={16} />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;