import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChevronRight, CheckCircle, Briefcase, Database, Cloud, Brain, Zap, BarChart3 } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const Talent: React.FC = () => {
  return (
    <>
      {/* Hero Section - Simplified without visual */}
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Hire Top <span className="text-brand-red-600">Data</span> Experts
              </h1>
              <div className="w-20 h-1.5 bg-brand-red-600 rounded-full mb-6 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6 font-medium">
                Find the right data professionals for your business needs. We specialize in Azure Data Platform, 
                Microsoft Fabric, and Databricks solutions to help you build modern data architectures.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
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
              We provide certified professionals specializing in Microsoft Azure Data Platform, Databricks, and modern data architectures 
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
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mr-4">
                  <Cloud className="w-6 h-6 text-white" />
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
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
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
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
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
                <h3 className="text-2xl font-bold text-gray-900">Databricks Platform</h3>
              </div>
              <p className="text-base text-cool-gray-600 mb-6 leading-relaxed">
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
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
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
                <h3 className="text-2xl font-bold text-gray-900">Power BI</h3>
              </div>
              <p className="text-base text-cool-gray-600 mb-6 leading-relaxed">
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

          {/* Data Architecture Guidance */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Architecture Guidance</h3>
              <p className="text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
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
                  <span className="text-sm font-medium text-gray-200">{concept}</span>
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