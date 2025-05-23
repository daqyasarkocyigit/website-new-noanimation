import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';

const Contact: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 animated-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to transform your data capabilities? Get in touch with our team to 
              discuss how we can help you achieve your business goals.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 text-center">
                <h2 className="text-2xl font-semibold mb-6">Our Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-electric-blue-100 flex items-center justify-center mb-4">
                      <Mail size={20} className="text-electric-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email Us</h3>
                      <a href="mailto:info@daqconsulting.com" className="text-electric-blue-500 hover:underline">
                        info@daqconsulting.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Talent Inquiries</h3>
                    <p className="mb-2">Contact us at <a href="mailto:talent@daqconsulting.com" className="text-electric-blue-500 hover:underline">talent@daqconsulting.com</a></p>
                  </div>

                  <div className="pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Find Work</h3>
                    <p className="text-gray-600 mb-4">We don't have any openings currently available. Please check back later.</p>
                    <p>Send your resume to <a href="mailto:careers@daqconsulting.com" className="text-electric-blue-500 hover:underline">careers@daqconsulting.com</a></p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title mx-auto">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Have questions about working with us? Here are answers to some common questions.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-2">How do you typically structure your engagements?</h3>
              <p className="text-gray-600">
                We typically start with a discovery phase to understand your needs and challenges, 
                followed by a tailored proposal outlining our approach, timeline, and costs. 
                Our projects can range from short-term consultations to long-term partnerships.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-2">What industries do you specialize in?</h3>
              <p className="text-gray-600">
                We have extensive experience across healthcare, finance, retail, manufacturing, 
                and technology sectors. However, our data and AI methodologies can be applied 
                to almost any industry with valuable data assets.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on scope and complexity. Small projects might take 
                4-8 weeks, while enterprise-scale implementations could span 6-12 months. We'll 
                provide detailed timelines during our proposal phase.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Do you offer ongoing support after project completion?</h3>
              <p className="text-gray-600">
                Yes, we offer various support options including managed services, regular check-ins, 
                training sessions, and on-call support. We'll work with you to determine the right 
                level of ongoing engagement for your needs.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;