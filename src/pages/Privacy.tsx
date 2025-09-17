import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <div className="relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Effective Date: 05/31/2025</p>
            
            <p className="text-gray-600 mb-8">
              DAQ Consulting LLC is committed to protecting your privacy and personal information.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We may collect personal information such as:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Technical information about your device and usage</li>
                <li>Employment information if you apply for positions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use your information to provide services, communicate with you, and improve our offerings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Contact Us</h2>
              <p className="text-gray-600">
                For privacy questions, contact us at{' '}
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

export default Privacy;