import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Lightbulb as LightBulb, Users } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const About: React.FC = () => {
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
              About DAQ Consulting
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              DAQ Consulting is a leading data solutions provider dedicated to helping organizations harness the power of their data. With our expertise in data engineering, business intelligence, and cloud technologies, we enable companies to transform raw data into valuable insights that drive strategic decision-making.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our mission is to empower organizations to unlock the full potential of their data through advanced analytics, cloud modernization, and AI. We work closely with our clients to understand their unique challenges and deliver tailored solutions that address their specific needs.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mx-auto">Our Mission & Values</h2>
            <p className="text-lg text-gray-600">
              We're guided by a set of core principles that inform everything we do, 
              from how we work with clients to how we build our solutions.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 rounded-full bg-electric-blue-100 flex items-center justify-center mb-6">
                <LightBulb size={24} className="text-electric-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To create a world where every business decision is informed by data and 
                enhanced by artificial intelligence, enabling organizations to achieve their 
                fullest potential.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 rounded-full bg-midnight-purple-100 flex items-center justify-center mb-6">
                <CheckCircle size={24} className="text-midnight-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver transformative data and AI solutions that solve real business 
                problems, drive measurable results, and create lasting value for our clients.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 rounded-full bg-neon-orange-100 flex items-center justify-center mb-6">
                <Users size={24} className="text-neon-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Excellence in everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Innovation that drives real results</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Client success above all</span>
                </li>
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