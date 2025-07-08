import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import CaseStudy from './CaseStudy';
import { CaseStudyData } from '../../data/caseStudies';

interface ServiceCaseStudiesProps {
  title: string;
  caseStudies: CaseStudyData[];
}

const ServiceCaseStudies: React.FC<ServiceCaseStudiesProps> = ({ title, caseStudies }) => {
  if (!caseStudies || caseStudies.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-6 h-6 text-brand-red-600" />
            <span className="text-sm font-medium text-brand-red-600 uppercase tracking-wide">
              Success Stories
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title} Case Studies
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            See how we've helped organizations transform their {title.toLowerCase()} capabilities 
            and achieve measurable business results.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudy
              key={caseStudy.id}
              title={caseStudy.title}
              image={caseStudy.image}
              challenge={caseStudy.challenge}
              solution={caseStudy.solution}
              detailedSections={caseStudy.detailedSections}
              results={caseStudy.results}
              technologies={caseStudy.technologies}
              industry={caseStudy.industry}
              duration={caseStudy.duration}
              teamSize={caseStudy.teamSize}
              conclusion={caseStudy.conclusion}
              keySuccessFactors={caseStudy.keySuccessFactors}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCaseStudies;