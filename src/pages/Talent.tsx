import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChevronRight, CheckCircle, Briefcase, Database, Cloud, Brain, Zap, BarChart3 } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';
import { useEffect, useRef } from 'react';

const Talent: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: #FF3333;
          border-radius: 50%;
          opacity: 0;
          left: ${Math.random() * 100}%;
          animation: particleFloat ${15 + Math.random() * 10}s infinite;
          animation-delay: ${Math.random() * 15}s;
        `;
        container.appendChild(particle);
      }
    };

    // Create particles
    setTimeout(() => {
      createParticles();
    }, 500);

    return () => {
      // Cleanup particles
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes particleFloat {
          0%, 100% {
            opacity: 0;
            transform: translateY(100vh) scale(0);
          }
          10% {
            opacity: 0.6;
            transform: translateY(90vh) scale(1);
          }
          90% {
            opacity: 0.6;
            transform: translateY(10vh) scale(1);
          }
        }

        @keyframes bgRotate {
          from { transform: rotate(0deg) scale(1.5); }
          to { transform: rotate(360deg) scale(1.5); }
        }

        @keyframes gridMove {
          from { transform: translate(0, 0); }
          to { transform: translate(50px, 50px); }
        }

        .bg-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .bg-gradient {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(255, 51, 51, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(107, 114, 128, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(255, 51, 51, 0.04) 0%, transparent 50%);
          animation: bgRotate 45s linear infinite;
        }

        .bg-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 51, 51, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 51, 51, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 30s linear infinite;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #FF3333;
          border-radius: 50%;
          opacity: 0;
          animation: particleFloat 15s infinite;
        }
      `}</style>

      {/* Light Background */}
      <div className="bg-container">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
        <div ref={particlesRef} className="particles"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10">
      {/* Hero Section - Simplified without visual */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-display-1 mb-4">
                Hire Top <span className="text-brand-red-600">Data</span> Experts
              </h1>
              <div className="w-16 h-1 bg-brand-red-600 rounded-full mb-4 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-body-large text-gray-800 mb-4 font-medium">
                Find the right data professionals for your business needs. We specialize in Azure Data Platform, 
                Microsoft Fabric, and Databricks solutions to help you build modern data architectures.
              </p>
              <p className="text-body-large text-gray-700">
                Our talent network includes certified Azure architects, data engineers, Databricks specialists, 
                and analytics professionals who can guide your data transformation journey.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <motion.span 
              className="inline-block px-4 py-2 text-sm font-medium bg-transparent border border-gray-300/30 text-gray-700 rounded-full mb-6 hover:bg-white/5 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              WHY CHOOSE US
            </motion.span>
            <h2 className="text-display-1 mb-6">The DAQ Talent Advantage</h2>
            <p className="text-body-large text-cool-gray-600">
              Our talent solutions are designed to provide you with the highest quality data professionals
              while minimizing your recruitment and management overhead.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: <Users size={28} />,
                title: "Certified Azure & Databricks Experts",
                description: "All our professionals are Microsoft and Databricks certified with proven experience in modern data platforms."
              },
              {
                icon: <Briefcase size={28} />,
                title: "Modern Data Architecture",
                description: "Specialists in Data Lakes, Lakehouses, Medallion Architecture, Unity Catalog, and Real-time Intelligence solutions."
              },
              {
                icon: <CheckCircle size={28} />,
                title: "End-to-End Solutions",
                description: "From strategy alignment to implementation, we deliver complete data transformation experiences."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-transparent border border-gray-200/20 p-8 rounded-2xl hover:shadow-lg hover:bg-white/5 hover:border-[#FF3333]/30 transition-all duration-500 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6">
                  <span className="text-gray-700">{item.icon}</span>
                </div>
                <h3 className="text-heading-4 mb-4">{item.title}</h3>
                <p className="text-body-base text-cool-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Specializations Section with Azure Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-display-1 mb-6">Our Data Expertise</h2>
            <p className="text-body-large text-cool-gray-600">
              We provide certified professionals specializing in Microsoft Azure Data Platform, Databricks, and modern data architectures 
              to transform your business with data-driven insights.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Azure Data Platform */}
            <motion.div
              className="bg-transparent p-8 rounded-2xl hover:shadow-lg hover:bg-white/5 hover:border-[#FF3333]/30 transition-all duration-500 border border-gray-200/20 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mr-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-heading-2">Azure Data Platform</h3>
              </div>
              <p className="text-body-base text-cool-gray-600 mb-6">
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
                    className="px-3 py-2 bg-gray-100 text-gray-800 text-sm rounded-lg font-medium border border-gray-200"
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
              className="bg-transparent p-8 rounded-2xl hover:shadow-lg hover:bg-white/5 hover:border-[#FF3333]/30 transition-all duration-500 border border-gray-200/20 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-xl flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-heading-2">Microsoft Fabric</h3>
              </div>
              <p className="text-body-base text-cool-gray-600 mb-6">
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
                    className="px-3 py-2 bg-gray-100 text-gray-800 text-sm rounded-lg font-medium border border-gray-200"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Databricks Expertise - Enhanced with more details */}
            <motion.div
              className="bg-transparent p-8 rounded-2xl hover:shadow-lg hover:bg-white/5 hover:border-[#FF3333]/30 transition-all duration-500 border border-gray-200/20 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-heading-2">Databricks Platform</h3>
              </div>
              <p className="text-body-base text-cool-gray-600 mb-6">
                Advanced Databricks implementation, Unity Catalog migration, and lakehouse architecture for unified analytics and AI
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Unity Catalog Migration",
                  "Delta Lake",
                  "MLflow",
                  "Databricks SQL",
                  "Auto Loader",
                  "Structured Streaming",
                  "Databricks Connect",
                  "Cluster Management"
                ].map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="px-3 py-2 bg-orange-50 text-orange-800 text-sm rounded-lg font-medium border border-orange-200"
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

            {/* Power BI */}
            <motion.div
              className="bg-transparent p-8 rounded-2xl hover:shadow-lg hover:bg-white/5 hover:border-[#FF3333]/30 transition-all duration-500 border border-gray-200/20 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-heading-2">Power BI</h3>
              </div>
              <p className="text-body-base text-cool-gray-600 mb-6">
                Business intelligence and data visualization solutions using Microsoft Power BI platform
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Dashboard Development",
                  "Data Modeling",
                  "DAX Optimization",
                  "Power Query",
                  "Report Automation",
                  "Premium Features",
                  "Embedded Analytics",
                  "Performance Tuning"
                ].map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                   className="px-3 py-2 bg-transparent border border-gray-300/30 text-gray-700 text-sm rounded-lg font-medium hover:bg-white/5 transition-colors duration-300"
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

          {/* Microsoft Power Platform */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Microsoft Power Platform */}
            <motion.div
              className="bg-transparent p-6 rounded-xl hover:shadow-lg hover:bg-white/5 hover:border-[#FF3333]/30 transition-all duration-500 border border-gray-200/20 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-heading-4">Microsoft Power Platform</h3>
              </div>
              <p className="text-body-small text-cool-gray-600 mb-4">
                Low-code/no-code solutions to accelerate digital transformation and business process automation
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Power Apps",
                  "Power Automate", 
                  "Power Virtual Agents",
                  "Power Pages",
                  "Dataverse",
                  "AI Builder",
                  "Solution Architecture",
                  "Canvas & Model Apps"
                ].map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-md font-medium border border-purple-100"
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

            {/* Additional Service - AI & Machine Learning */}
            <motion.div
              className="bg-transparent p-6 rounded-xl hover:shadow-lg hover:bg-white/5 hover:border-[#FF3333]/30 transition-all duration-500 border border-gray-200/20 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-heading-4">AI & Machine Learning</h3>
              </div>
              <p className="text-body-small text-cool-gray-600 mb-4">
                Advanced AI and machine learning solutions for predictive analytics and automation
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Agent AI",
                  "Conversational AI", 
                  "RAG Systems",
                  "AI Orchestration",
                  "Vector Search",
                  "Knowledge Mining",
                  "MLOps & AutoML",
                  "Computer Vision"
                ].map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs rounded-md font-medium border border-blue-100"
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
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-heading-2 text-white mb-4">Data Architecture Guidance</h3>
              <p className="text-body-large text-gray-300 max-w-3xl mx-auto">
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
                  className="bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-700 text-center hover:bg-gray-700 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: conceptIndex * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-body-small font-medium text-gray-200">{concept}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CallToAction />
      </div>
    </>
  );
};

export default Talent;