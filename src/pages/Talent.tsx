import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChevronRight, CheckCircle, Briefcase, Code, Database, Brain, Cloud, Layers, Terminal } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const Talent: React.FC = () => {
  return (
    <>
      {/* Hero Section with Dynamic Layout */}
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
          {/* Dynamic Grid Layout */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center min-h-[600px]">
            
            {/* Main Heading - Top Left */}
            <motion.div 
              className="col-span-12 lg:col-span-6 xl:col-span-5 row-start-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-white/60">
                <motion.h1 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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
                    Tech
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {' '}Talent
                  </motion.span>
                </motion.h1>
                
                <motion.div 
                  className="w-20 h-1.5 bg-brand-red-600 rounded-full shadow-sm"
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </div>
            </motion.div>

            {/* Frontend Icon & Text - Top Right */}
            <motion.div 
              className="col-span-6 lg:col-span-3 xl:col-span-3 row-start-1 lg:row-start-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Frontend</h3>
                <p className="text-xs text-gray-600">React, TypeScript</p>
              </div>
            </motion.div>

            {/* Data Engineering Icon & Text - Top Far Right */}
            <motion.div 
              className="col-span-6 lg:col-span-3 xl:col-span-4 row-start-2 lg:row-start-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Data Engineering</h3>
                    <p className="text-xs text-gray-600">Python, Spark, Kafka</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Description - Center Left */}
            <motion.div 
              className="col-span-12 lg:col-span-6 xl:col-span-5 row-start-3 lg:row-start-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-white/60">
                <p className="text-base lg:text-lg text-gray-800 leading-relaxed mb-6 font-medium">
                  Find the right professionals for your business needs. We offer flexible staffing 
                  solutions to help you build and scale your technical teams effectively.
                </p>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                  Our talent network includes highly skilled professionals in data engineering, 
                  cloud architecture, AI development, and business intelligence.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-red-600 hover:bg-brand-red-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-2">Request Talent</span>
                    <ChevronRight size={16} />
                  </motion.a>
                  <motion.a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-red-600 text-brand-red-600 hover:bg-brand-red-50 rounded-xl transition-all duration-300 font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* AI/ML Icon & Text - Center */}
            <motion.div 
              className="col-span-6 lg:col-span-3 xl:col-span-3 row-start-4 lg:row-start-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">AI/ML</h3>
                <p className="text-xs text-gray-600">TensorFlow, PyTorch</p>
              </div>
            </motion.div>

            {/* Cloud Icon & Text - Center Right */}
            <motion.div 
              className="col-span-6 lg:col-span-3 xl:col-span-4 row-start-4 lg:row-start-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Cloud Architecture</h3>
                    <p className="text-xs text-gray-600">AWS, Kubernetes, Docker</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Full Stack Icon & Text - Bottom Left */}
            <motion.div 
              className="col-span-6 lg:col-span-3 xl:col-span-3 row-start-5 lg:row-start-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Full Stack</h3>
                    <p className="text-xs text-gray-600">End-to-end development</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Backend Icon & Text - Bottom Center */}
            <motion.div 
              className="col-span-6 lg:col-span-3 xl:col-span-3 row-start-5 lg:row-start-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Terminal className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Backend</h3>
                <p className="text-xs text-gray-600">Node.js, Python, Go</p>
              </div>
            </motion.div>

            {/* Central Talent Hub - Bottom Right */}
            <motion.div 
              className="col-span-12 lg:col-span-6 xl:col-span-6 row-start-6 lg:row-start-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div className="bg-gradient-to-br from-brand-red-600 to-brand-red-700 rounded-2xl p-8 shadow-2xl text-white text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">2,847</h3>
                  <p className="text-white/90 mb-4">Available Experts</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-lg font-bold">98.5%</div>
                      <div className="text-white/80">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">1.2w</div>
                      <div className="text-white/80">Avg Deploy</div>
                    </div>
                  </div>
                </div>
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
              Our talent solutions are designed to provide you with the highest quality professionals
              while minimizing your recruitment and management overhead.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: <Users size={28} />,
                title: "Pre-Vetted Talent Pool",
                description: "All our professionals undergo rigorous technical assessments and background checks."
              },
              {
                icon: <Briefcase size={28} />,
                title: "Industry Expertise",
                description: "Specialists with experience in finance, healthcare, retail, and more."
              },
              {
                icon: <CheckCircle size={28} />,
                title: "Satisfaction Guarantee",
                description: "We stand behind our placements with a comprehensive satisfaction guarantee."
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

      {/* Talent Specializations Section with Enhanced Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">Our Talent Specializations</h2>
            <p className="text-base sm:text-lg lg:text-xl text-cool-gray-600 leading-relaxed">
              We provide top-tier professionals across all major technology domains to meet your specific business needs.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Engineering",
                description: "Build robust data pipelines and infrastructure",
                skills: ["Python", "Apache Spark", "Kafka", "AWS/GCP/Azure"]
              },
              {
                title: "AI/ML Engineering", 
                description: "Develop and deploy machine learning solutions",
                skills: ["TensorFlow", "PyTorch", "MLOps", "Deep Learning"]
              },
              {
                title: "Cloud Architecture",
                description: "Design scalable cloud infrastructure",
                skills: ["AWS", "Kubernetes", "Docker", "Terraform"]
              },
              {
                title: "Frontend Development",
                description: "Create engaging user interfaces",
                skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
              },
              {
                title: "Backend Development",
                description: "Build robust server-side applications",
                skills: ["Node.js", "Python", "Go", "PostgreSQL"]
              },
              {
                title: "Business Intelligence",
                description: "Transform data into actionable insights",
                skills: ["Tableau", "Power BI", "SQL", "Data Modeling"]
              }
            ].map((specialization, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{specialization.title}</h3>
                <p className="text-base text-cool-gray-600 mb-6 leading-relaxed">{specialization.description}</p>
                <div className="flex flex-wrap gap-2">
                  {specialization.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
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
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Talent;