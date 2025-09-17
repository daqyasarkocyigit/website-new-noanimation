import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChevronRight, CheckCircle, Briefcase, Database, Cloud, Brain, Zap, BarChart3 } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const Talent: React.FC = () => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
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
                Microsoft Fabric, and Databricks solutions.
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
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-red-600 hover:bg-brand-red-700 text-white rounded-lg transition-all duration-300 font-medium text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Request Talent</span>
                <ChevronRight size={18} className="ml-2" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-display-1 mb-6">The DAQ Talent Advantage</h2>
            <p className="text-body-large text-cool-gray-600">
              Our talent solutions provide you with the highest quality data professionals.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: <Users size={28} />,
                title: "Certified Azure & Databricks Experts",
                description: "All our professionals are Microsoft and Databricks certified with proven experience."
              },
              {
                icon: <Briefcase size={28} />,
                title: "Modern Data Architecture",
                description: "Specialists in Data Lakes, Lakehouses, and Real-time Intelligence solutions."
              },
              {
                icon: <CheckCircle size={28} />,
                title: "End-to-End Solutions",
                description: "From strategy to implementation, we deliver complete data transformation."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-brand-red-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-brand-red-600">{item.icon}</span>
                </div>
                <h3 className="text-heading-4 mb-4">{item.title}</h3>
                <p className="text-body-base text-cool-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-display-1 mb-6">Platforms & Technologies</h2>
            <p className="text-body-large text-cool-gray-600">
              Our experts specialize in the modern data stack and leading cloud platforms.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Microsoft Azure Stack */}
            <AnimatedSection delay={0.1} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Cloud className="text-blue-600" size={24} />
                </div>
                <h3 className="text-heading-3">Microsoft Azure</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Azure Data Factory', 'Azure Databricks', 'Microsoft Fabric', 'Power BI',
                  'Azure Synapse', 'Azure ML', 'Azure OpenAI', 'Delta Lake',
                  'Unity Catalog', 'Azure Data Lake', 'Azure DevOps', 'ARM Templates'
                ].map((tech, index) => (
                  <span key={index} className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Data Engineering Tools */}
            <AnimatedSection delay={0.2} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <Database className="text-red-600" size={24} />
                </div>
                <h3 className="text-heading-3">Data Engineering</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Python', 'SQL', 'Spark', 'Kafka',
                  'Docker', 'Kubernetes', 'Terraform', 'dbt',
                  'Snowflake', 'PostgreSQL', 'MongoDB', 'Elasticsearch'
                ].map((tech, index) => (
                  <span key={index} className="px-3 py-2 bg-red-50 text-red-700 text-sm rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* AI/ML Platforms */}
            <AnimatedSection delay={0.3} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="text-purple-600" size={24} />
                </div>
                <h3 className="text-heading-3">AI & Machine Learning</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow',
                  'Hugging Face', 'LangChain', 'OpenAI GPT', 'Azure OpenAI',
                  'Jupyter', 'CUDA', 'Ray', 'Weights & Biases'
                ].map((tech, index) => (
                  <span key={index} className="px-3 py-2 bg-purple-50 text-purple-700 text-sm rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Analytics & BI */}
            <AnimatedSection delay={0.4} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="text-green-600" size={24} />
                </div>
                <h3 className="text-heading-3">Analytics & BI</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Power BI', 'Tableau', 'Looker', 'Qlik',
                  'R', 'Jupyter', 'Apache Superset', 'Grafana',
                  'D3.js', 'React', 'Plotly', 'Bokeh'
                ].map((tech, index) => (
                  <span key={index} className="px-3 py-2 bg-green-50 text-green-700 text-sm rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Talent;