import React from 'react';
import { Mail, User, Briefcase } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 via-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you unlock the power of your data. Reach out to us with your questions, projects, or talent needs.
          </p>
        </div>
      </AnimatedSection>

      {/* Contact Info & Form Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left">Contact Information</h2>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-red-100 text-brand-red-600 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">General Inquiries</h3>
                  <a href="mailto:info@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700 transition-colors">
                    info@daqconsulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-red-100 text-brand-red-600 rounded-full flex items-center justify-center">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Talent & Hiring</h3>
                  <p className="text-gray-600">Looking to hire top talent?</p>
                  <a href="mailto:talent@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700 transition-colors">
                    talent@daqconsulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-red-100 text-brand-red-600 rounded-full flex items-center justify-center">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Careers</h3>
                  <p className="text-gray-600">Interested in joining our team?</p>
                  <a href="mailto:careers@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700 transition-colors">
                    careers@daqconsulting.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section - Simplified for brevity, can be expanded if needed */}
      <AnimatedSection className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[ 
              {
                q: "How do you typically structure your engagements?",
                a: "We start with a discovery phase to understand your needs, followed by a tailored proposal. Projects range from short consultations to long-term partnerships."
              },
              {
                q: "What industries do you specialize in?",
                a: "We have experience across healthcare, finance, retail, and more. Our data and AI methodologies are adaptable to most industries."
              },
              {
                q: "How long does a typical project take?",
                a: "Timelines vary. Small projects might take 4-8 weeks, while larger implementations could span 6-12 months. We provide detailed timelines in our proposals."
              },
              {
                q: "Do you offer ongoing support after project completion?",
                a: "Yes, we offer various support options, including managed services, training, and on-call support, tailored to your needs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Contact;   