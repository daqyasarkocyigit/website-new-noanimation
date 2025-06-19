import React from 'react';
import { Mail, User, Briefcase } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import ContactForm from '../components/contact/ContactForm';
import ContactHeroVisual from '../components/contact/ContactHeroVisual';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section with Visual */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-0"></div>
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 z-0"
          style={{
            backgroundImage: 'url("/images/pattern-dots.svg")',
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 lg:pr-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  Get in <span className="text-brand-red-600">Touch</span>
                </h1>
                <div className="w-20 h-1.5 bg-brand-red-600 rounded-full mb-6"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-base sm:text-lg text-cool-gray-600 leading-relaxed mb-6">
                  We're here to help you unlock the power of your data. Reach out to us with your questions, projects, or talent needs.
                </p>
                <p className="text-base sm:text-lg text-cool-gray-600 leading-relaxed">
                  Our team of experts is ready to discuss how we can transform your data challenges into opportunities for growth and innovation.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="w-full lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-32 sm:h-32 bg-brand-red-600/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-32 sm:h-32 bg-gray-400/10 rounded-full filter blur-3xl"></div>
                
                <div className="relative z-10 w-full h-[400px] sm:h-[450px] lg:h-[500px]">
                  <ContactHeroVisual />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red-100 text-brand-red-600 rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">General Inquiries</h3>
                    <p className="text-gray-600 mb-2">For general questions and project discussions</p>
                    <a href="mailto:info@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700 transition-colors font-medium">
                      info@daqconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red-100 text-brand-red-600 rounded-xl flex items-center justify-center">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Talent & Hiring</h3>
                    <p className="text-gray-600 mb-2">Looking to hire top talent for your team?</p>
                    <a href="mailto:talent@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700 transition-colors font-medium">
                      talent@daqconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red-100 text-brand-red-600 rounded-xl flex items-center justify-center">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Careers</h3>
                    <p className="text-gray-600 mb-2">Interested in joining our team?</p>
                    <a href="mailto:careers@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700 transition-colors font-medium">
                      careers@daqconsulting.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="mt-8 p-6 bg-brand-red-50 rounded-xl border border-brand-red-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Times</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• General inquiries: Within 2 hours</li>
                  <li>• Talent requests: Within 24 hours</li>
                  <li>• Career applications: Within 48 hours</li>
                </ul>
              </div>
            </AnimatedSection>
            
            {/* Contact Form */}
            <AnimatedSection delay={0.3}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Find quick answers to common questions about our services and processes.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[ 
              {
                q: "How do you typically structure your engagements?",
                a: "We start with a discovery phase to understand your needs, followed by a tailored proposal. Projects range from short consultations to long-term partnerships."
              },
              {
                q: "What industries do you specialize in?",
                a: "We have experience across healthcare, finance, retail, manufacturing, and more. Our data and AI methodologies are adaptable to most industries."
              },
              {
                q: "How long does a typical project take?",
                a: "Timelines vary based on scope. Small projects might take 4-8 weeks, while larger implementations could span 6-12 months. We provide detailed timelines in our proposals."
              },
              {
                q: "Do you offer ongoing support after project completion?",
                a: "Yes, we offer various support options, including managed services, training, and on-call support, tailored to your specific needs and requirements."
              },
              {
                q: "Can you work with our existing technology stack?",
                a: "Absolutely. We're experienced with a wide range of technologies and can integrate with your existing systems or recommend optimal solutions."
              },
              {
                q: "What makes DAQ Consulting different from other providers?",
                a: "Our combination of deep technical expertise, business acumen, and focus on measurable outcomes sets us apart. We're partners, not just vendors."
              }
            ].map((faq, index) => (
              <AnimatedSection 
                key={index} 
                delay={0.1 * index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;