import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  return (
    <div className="relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Effective Date: 05/31/2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Website Use</h2>
              <p className="text-gray-600">
                This website is provided for informational purposes regarding our data engineering and AI services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
              <p className="text-gray-600">
                All content is the property of DAQ Consulting LLC and protected by intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Contact Us</h2>
              <p className="text-gray-600">
                For questions about these terms, contact us at{' '}
                <a href="mailto:info@daqconsulting.com" className="text-brand-red-600">
                  info@daqconsulting.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;