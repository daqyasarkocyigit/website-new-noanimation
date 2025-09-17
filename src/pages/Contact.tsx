import React from 'react';
import { Mail, User, Briefcase } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import ContactForm from '../components/contact/ContactForm';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-heading-1 mb-4">
                Contact <span className="text-brand-red-600">Us</span>
              </h1>
              <div className="w-16 h-1 bg-brand-red-600 rounded-full mb-4 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-body-base text-cool-gray-600 mb-4">
                We're here to help you unlock the power of your data. Reach out to us with your questions, projects, or talent needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <AnimatedSection delay={0.1}>
              <h2 className="text-heading-2 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red-100 text-brand-red-600 rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-heading-4 mb-2">General Inquiries</h3>
                    <p className="text-body-base text-gray-600 mb-2">For general questions and project discussions</p>
                    <a href="mailto:info@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700 transition-colors font-medium">
                      info@daqconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red-100 text-brand-red-600 rounded-xl flex items-center justify-center">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-heading-4 mb-2">Talent & Hiring</h3>
                    <p className="text-body-base text-gray-600 mb-2">Looking to hire top talent for your team?</p>
                    <a href="mailto:talent@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700 transition-colors font-medium">
                      talent@daqconsulting.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Contact Form */}
            <AnimatedSection delay={0.3}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;