    import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Lightbulb, Target, TrendingUp, Shield, Zap } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const About: React.FC = () => {
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
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  About <span className="text-brand-red-600">DAQ</span> Consulting
                </h1>
                <div className="w-20 h-1.5 bg-brand-red-600 rounded-full mb-6"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg text-cool-gray-600 leading-relaxed mb-6">
                  DAQ Consulting is a premier data solutions provider dedicated to helping organizations harness the power of their data. With our expertise in data engineering, business intelligence, and cloud technologies, we enable companies to transform raw data into valuable insights that drive strategic decision-making.
                </p>
                <p className="text-lg text-cool-gray-600 leading-relaxed">
                  Our mission is to empower organizations to unlock the full potential of their data through advanced analytics, cloud modernization, and AI. We work closely with our clients to understand their unique challenges and deliver tailored solutions that address their specific needs.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red-600/10 to-cool-gray-500/10 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="DAQ Consulting team working together" 
                  className="w-full h-auto object-cover z-0"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-red-600/80 rounded-lg z-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cool-gray-600/80 rounded-lg z-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full mb-4">OUR APPROACH</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Drive Transformation</h2>
            <p className="text-lg text-cool-gray-600">
              We combine deep technical expertise with business acumen to deliver solutions that create real impact.
              Our proven methodology ensures consistent results across all projects.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="text-brand-red-600" />,
                title: "Discovery & Strategy",
                description: "We start by understanding your business goals and challenges to create a tailored data strategy."
              },
              {
                icon: <Zap className="text-brand-red-600" />,
                title: "Solution Design",
                description: "Our experts architect scalable, future-proof solutions that align with your business objectives."
              },
              {
                icon: <TrendingUp className="text-brand-red-600" />,
                title: "Implementation",
                description: "We deliver with precision, ensuring seamless integration with your existing systems."
              },
              {
                icon: <Shield className="text-brand-red-600" />,
                title: "Continuous Support",
                description: "Our relationship continues with ongoing optimization and support to maximize your ROI."
              }
            ].map((item, index) => (
              <AnimatedSection 
                key={index} 
                delay={0.1 * index} 
                className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                  <span className="text-gray-700">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-cool-gray-600">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full mb-4">OUR FOUNDATION</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mission & Values</h2>
            <p className="text-lg text-cool-gray-600">
              We're guided by a set of core principles that inform everything we do,
              from how we work with clients to how we build our solutions.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={0.1} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Lightbulb size={24} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-cool-gray-600 leading-relaxed">
                To create a world where every business decision is informed by data and
                enhanced by artificial intelligence, enabling organizations to achieve their
                fullest potential.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Target size={24} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-cool-gray-600 leading-relaxed">
                To deliver transformative data and AI solutions that solve real business
                problems, drive measurable results, and create lasting value for our clients
                through innovation and excellence.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-cool-gray-50 flex items-center justify-center mb-6">
                <Award size={24} className="text-cool-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-cool-gray-600 space-y-3">
                {[
                  { icon: <CheckCircle size={16} />, text: "Excellence in everything we do" },
                  { icon: <CheckCircle size={16} />, text: "Innovation that drives real results" },
                  { icon: <CheckCircle size={16} />, text: "Integrity and transparency" },
                  { icon: <CheckCircle size={16} />, text: "Client success above all" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-700 mr-2 flex-shrink-0 mt-1">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>



      <CallToAction />
    </>
  );
};

export default About; 