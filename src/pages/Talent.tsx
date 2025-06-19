import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChevronRight, CheckCircle, Briefcase } from 'lucide-react';
import TalentOptions from '../components/talent/TalentOptions';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const Talent: React.FC = () => {
  return (
    <>
      {/* Hero Section with Gradient Background */}
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
                  Hire Top <span className="text-brand-red-600">Tech</span> Talent
                </h1>
                <div className="w-20 h-1.5 bg-brand-red-600 rounded-full mb-6"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-base sm:text-lg text-cool-gray-600 leading-relaxed mb-6">
                  Find the right professionals for your business needs. We offer flexible staffing 
                  solutions to help you build and scale your technical teams effectively.
                </p>
                <p className="text-base sm:text-lg text-cool-gray-600 leading-relaxed">
                  Our talent network includes highly skilled professionals in data engineering, 
                  cloud architecture, AI development, and business intelligence.
                </p>
                
                <div className="mt-8">
                  <a 
                    href="#hire-talent" 
                    className="inline-flex items-center px-6 py-3 bg-brand-red-600 hover:bg-brand-red-700 text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <span className="mr-2">Explore Options</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="w-full lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red-600/10 to-cool-gray-500/10 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Tech professionals collaborating" 
                  className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover z-0"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-24 sm:h-24 bg-brand-red-600/80 rounded-lg z-20"></div>
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-24 sm:h-24 bg-cool-gray-600/80 rounded-lg z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full mb-4">WHY CHOOSE US</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">The DAQ Talent Advantage</h2>
            <p className="text-base sm:text-lg text-cool-gray-600">
              Our talent solutions are designed to provide you with the highest quality professionals
              while minimizing your recruitment and management overhead.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Users size={24} />,
                title: "Pre-Vetted Talent Pool",
                description: "All our professionals undergo rigorous technical assessments and background checks."
              },
              {
                icon: <Briefcase size={24} />,
                title: "Industry Expertise",
                description: "Specialists with experience in finance, healthcare, retail, and more."
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Satisfaction Guarantee",
                description: "We stand behind our placements with a comprehensive satisfaction guarantee."
              }
            ].map((item, index) => (
              <AnimatedSection 
                key={index} 
                delay={0.1 * index} 
                className="bg-white border border-gray-100 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                  <span className="text-gray-700">{item.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-cool-gray-600">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Options Section */}
      <section id="hire-talent" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Talent Network</h2>
            <p className="text-base sm:text-lg text-cool-gray-600">
              Explore our comprehensive talent dashboard showcasing available professionals across various specializations.
            </p>
          </AnimatedSection>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full h-64 xs:h-80 sm:h-96 md:h-[500px] lg:h-[600px] relative z-10">
                <TalentOptions />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Talent;