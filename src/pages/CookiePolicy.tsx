import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/utils/AnimatedSection';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Effective Date: 05/31/2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What are Cookies?</h2>
              <p className="text-gray-600">
                Cookies are small text files stored on your device (computer, tablet, or smartphone) when you 
                visit a website. They help websites remember your preferences and improve your browsing experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Enable basic website functionality, such as page navigation 
                  and access to secure areas. The website cannot function properly without these cookies.
                </li>
                <li>
                  <strong>Performance and Analytics Cookies:</strong> Collect anonymous information about how 
                  visitors use our website, such as which pages are visited most often. This helps us improve 
                  our site's performance and user experience.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your preferences (such as language or region) 
                  to enhance your experience on future visits.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Strictly Necessary Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are essential for the website to function and cannot be switched off. They are 
                    usually only set in response to actions made by you which amount to a request for services, 
                    such as setting your privacy preferences or filling in forms.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Performance Cookies</h3>
                  <p className="text-gray-600">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the 
                    performance of our site. They help us to know which pages are the most and least popular and 
                    see how visitors move around the site.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Functional Cookies</h3>
                  <p className="text-gray-600">
                    These cookies enable the website to provide enhanced functionality and personalization. They 
                    may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600">
                We may use trusted third-party services (such as Google Analytics) that set their own cookies 
                to help us analyze website traffic and usage patterns. These third parties have their own 
                privacy policies which govern their use of such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-gray-600 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>View cookies stored on your device</li>
                <li>Allow, block, or delete cookies</li>
                <li>Set preferences for certain websites</li>
                <li>Use private/incognito browsing mode</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Please note that disabling certain cookies may limit your ability to use some features of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for 
                other operational, legal, or regulatory reasons. The latest version will always be posted on 
                our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our use of cookies, please contact us at{' '}
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

export default CookiePolicy;