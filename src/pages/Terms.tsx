import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/utils/AnimatedSection';

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

            <p className="text-gray-600 mb-8">
              Please read these Terms of Use ("Terms") carefully before using the website operated by 
              DAQ Consulting LLC ("DAQ Consulting", "we", "us", or "our").
            </p>

            <p className="text-gray-600 mb-8">
              By accessing or using our website, you agree to be bound by these Terms. If you do not 
              agree with any part of these Terms, please do not use our website.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Website Use</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  This website is provided for informational purposes regarding our services in data 
                  engineering, AI, and consulting.
                </li>
                <li>
                  You may use our website only for lawful purposes and in accordance with these Terms.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  All content on this website—including text, graphics, logos, images, and software—is 
                  the property of DAQ Consulting LLC or its licensors and is protected by intellectual 
                  property laws.
                </li>
                <li>
                  You may not reproduce, distribute, modify, or use any content from this site without 
                  our prior written permission.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
              <p className="text-gray-600 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the website in any way that violates any applicable laws or regulations.</li>
                <li>
                  Attempt to gain unauthorized access to any part of the website, or to the accounts 
                  of other users.
                </li>
                <li>Introduce any viruses, malware, or harmful code.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Links</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Our website may contain links to third-party websites. We are not responsible for 
                  the content, privacy practices, or terms of use of those websites.
                </li>
                <li>Access to any third-party site is at your own risk.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  The website and its content are provided "as is" without warranties of any kind, 
                  either express or implied.
                </li>
                <li>
                  DAQ Consulting does not warrant that the website will be error-free or uninterrupted, 
                  or that any defects will be corrected.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600">
                To the fullest extent permitted by law, DAQ Consulting LLC and its affiliates shall 
                not be liable for any damages arising from your use of, or inability to use, this 
                website or any content on it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Changes to These Terms</h2>
              <p className="text-gray-600">
                We reserve the right to update or modify these Terms at any time. Changes will be 
                effective immediately upon posting on this page. Your continued use of the website 
                constitutes acceptance of those changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p className="text-gray-600">
                These Terms shall be governed by and construed in accordance with the laws of the 
                State of Florida, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us at{' '}
                <a href="mailto:info@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700">
                  info@daqconsulting.com
                </a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200 text-gray-600 text-sm">
              © 2025 DAQ Consulting LLC. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;