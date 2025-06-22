import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChevronRight, CheckCircle, Briefcase } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';
import TalentHeroVisual from '../components/talent/TalentHeroVisual';

const Talent: React.FC = () => {
  return (
    <>
      {/* Hero Section with Enhanced Layout */}
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
          <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-16">
            
            {/* Enhanced Text Container with Expanded Width */}
            <motion.div 
              className="w-full xl:w-[58%] 2xl:w-[60%] relative z-20"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.2
              }}
            >
              {/* Animated Background Overlay for Mobile */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/75 rounded-2xl -m-6 p-6 backdrop-blur-sm shadow-xl border border-white/50 xl:hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
              
              {/* Main Heading with Staggered Animation */}
              <motion.div
                className="relative z-30 mb-8"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <motion.h1 
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 leading-tight"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Hire Top{' '}
                  </motion.span>
                  <motion.span 
                    className="text-brand-red-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Data
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {' '}Experts
                  </motion.span>
                </motion.h1>
                
                <motion.div 
                  className="w-20 h-1.5 bg-brand-red-600 rounded-full shadow-sm"
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </motion.div>
              
              {/* Content Container with Enhanced Styling */}
              <motion.div
                className="relative z-30"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-white/60 xl:bg-transparent xl:backdrop-blur-none xl:shadow-none xl:border-none xl:p-0">
                  
                  {/* Description Text with Smooth Reveal */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-8"
                  >
                    <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6 font-medium">
                      Find the right data professionals for your business needs. We specialize in Azure Data Platform 
                      and Microsoft Fabric solutions to help you build modern data architectures.
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                      Our talent network includes certified Azure architects, data engineers, and analytics specialists 
                      who can guide your data transformation journey.
                    </p>
                  </motion.div>
                  
                  {/* Action Buttons with Staggered Animation */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.a 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-brand-red-600 hover:bg-brand-red-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg transform hover:-translate-y-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-2">Request Talent</span>
                      <ChevronRight size={18} />
                    </motion.a>
                    <motion.a 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-red-600 text-brand-red-600 hover:bg-brand-red-50 rounded-xl transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Visual Container with Improved Positioning */}
            <motion.div 
              className="w-full xl:w-[42%] 2xl:w-[40%] relative"
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="relative">
                {/* Subtle Decorative Elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-brand-red-600/5 rounded-full filter blur-3xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gray-400/5 rounded-full filter blur-3xl"
                  animate={{ 
                    scale: [1.1, 1, 1.1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                {/* Main Visual with Enhanced Container */}
                <motion.div 
                  className="relative z-10 w-full h-[400px] sm:h-[450px] lg:h-[500px] xl:h-[550px] rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <TalentHeroVisual />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Enhanced Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <motion.span 
              className="inline-block px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              WHY CHOOSE US
            </motion.span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">The DAQ Talent Advantage</h2>
            <p className="text-base sm:text-lg lg:text-xl text-cool-gray-600 leading-relaxed">
              Our talent solutions are designed to provide you with the highest quality data professionals
              while minimizing your recruitment and management overhead.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: <Users size={28} />,
                title: "Certified Azure Experts",
                description: "All our professionals are Microsoft certified with proven experience in Azure Data Platform services."
              },
              {
                icon: <Briefcase size={28} />,
                title: "Modern Data Architecture",
                description: "Specialists in Data Lakes, Lakehouses, Medallion Architecture, and Real-time Intelligence solutions."
              },
              {
                icon: <CheckCircle size={28} />,
                title: "End-to-End Solutions",
                description: "From strategy alignment to implementation, we deliver complete data transformation experiences."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6">
                  <span className="text-gray-700">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-base text-cool-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Specializations Section with Azure Focus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">Our Data Expertise</h2>
            <p className="text-base sm:text-lg lg:text-xl text-cool-gray-600 leading-relaxed">
              We provide certified professionals specializing in Microsoft Azure Data Platform and modern data architectures 
              to transform your business with data-driven insights.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Azure Data Platform */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">Az</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Azure Data Platform</h3>
              </div>
              <p className="text-base text-cool-gray-600 mb-6 leading-relaxed">
                Architecting & designing data solutions using Azure Data Platform services (Platform-as-a-Service)
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Synapse Analytics",
                  "Data Lake Gen2", 
                  "Purview",
                  "SQL Database",
                  "Databricks",
                  "Data Factory"
                ].map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium border border-blue-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Microsoft Fabric */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">Fb</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Microsoft Fabric</h3>
              </div>
              <p className="text-base text-cool-gray-600 mb-6 leading-relaxed">
                Architecting & designing data solutions using the Microsoft Fabric analytics platform (Software-as-a-Service)
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Lakehouse",
                  "Warehouse",
                  "Realtime Intelligence", 
                  "Digital Twin",
                  "AI Integration",
                  "Administration & Governance"
                ].map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="px-3 py-2 bg-purple-50 text-purple-700 text-sm rounded-lg font-medium border border-purple-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Data Architecture Guidance */}
          <motion.div
            className="bg-gradient-to-br from-brand-red-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-brand-red-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-red-500 to-brand-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Architecture Guidance</h3>
              <p className="text-base text-cool-gray-600 leading-relaxed max-w-3xl mx-auto">
                We help you navigate the world of data architectures, align business strategy with data strategy, 
                design end-to-end analytics solutions, & deliver a better experience with data.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Modern Data Warehouse",
                "Data Lakes", 
                "Lakehouses",
                "Medallion Architecture",
                "Real-time Intelligence",
                "Data Architecture",
                "Data Mesh",
                "Generative AI"
              ].map((concept, conceptIndex) => (
                <motion.div
                  key={conceptIndex}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: conceptIndex * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-medium text-gray-700">{concept}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Talent;