import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Lightbulb, Target, TrendingUp, Shield, Zap } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';
import { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
                <h1 className="text-heading-1 mb-4">
                  About <span className="text-brand-red-600">DAQ</span> Consulting
                </h1>
                <div className="w-16 h-1 bg-brand-red-600 rounded-full mb-4 mx-auto"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-body-large text-cool-gray-600 mb-4">
                  DAQ Consulting is a premier data solutions provider dedicated to helping organizations harness the power of their data. With our expertise in data engineering, business intelligence, and cloud technologies, we enable companies to transform raw data into valuable insights that drive strategic decision-making.
                </p>
                <p className="text-body-large text-cool-gray-600">
                  Our mission is to empower organizations to unlock the full potential of their data through advanced analytics, cloud modernization, and AI. We work closely with our clients to understand their unique challenges and deliver tailored solutions that address their specific needs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-transparent border border-gray-300/30 text-gray-700 rounded-full mb-4 hover:bg-white/5 transition-all duration-300">OUR APPROACH</span>
              <h2 className="text-heading-1 mb-6">How We Drive Transformation</h2>
              <p className="text-body-large text-cool-gray-600">
                We combine deep technical expertise with business acumen to deliver solutions that create real impact.
                Our proven methodology ensures consistent results across all projects.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                  className="bg-transparent border border-gray-200/20 p-6 sm:p-8 rounded-xl hover:shadow-lg hover:bg-white/5 hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-red-100 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-heading-4 mb-4">{item.title}</h3>
                  <p className="text-body-base text-cool-gray-600">{item.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-transparent border border-gray-300/30 text-gray-700 rounded-full mb-4 hover:bg-white/5 transition-all duration-300">OUR FOUNDATION</span>
              <h2 className="text-heading-1 mb-6">Mission & Values</h2>
              <p className="text-body-large text-cool-gray-600">
                We're guided by a set of core principles that inform everything we do,
                from how we work with clients to how we build our solutions.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              <AnimatedSection delay={0.1} className="bg-transparent p-6 sm:p-8 rounded-xl hover:shadow-lg hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 border border-gray-200/20 hover:border-[#FF3333]/30">
                <div className="w-14 h-14 rounded-full bg-brand-red-100 flex items-center justify-center mb-6">
                  <Target size={24} className="text-brand-red-600" />
                </div>
                <h3 className="text-heading-4 mb-4">Our Vision</h3>
                <p className="text-body-base text-cool-gray-600">
                  To create a world where every business decision is informed by data and
                  enhanced by artificial intelligence, enabling organizations to achieve their
                  fullest potential.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="bg-transparent p-6 sm:p-8 rounded-xl hover:shadow-lg hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 border border-gray-200/20 hover:border-[#FF3333]/30">
                <div className="w-14 h-14 rounded-full bg-brand-red-100 flex items-center justify-center mb-6">
                  <Lightbulb size={24} className="text-brand-red-600" />
                </div>
                <h3 className="text-heading-4 mb-4">Our Mission</h3>
                <p className="text-body-base text-cool-gray-600">
                  To deliver transformative data and AI solutions that solve real business
                  problems, drive measurable results, and create lasting value for our clients
                  through innovation and excellence.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="bg-transparent p-6 sm:p-8 rounded-xl hover:shadow-lg hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 border border-gray-200/20 hover:border-[#FF3333]/30">
                <div className="w-14 h-14 rounded-full bg-brand-red-100 flex items-center justify-center mb-6">
                  <Award size={24} className="text-brand-red-600" />
                </div>
                <h3 className="text-heading-4 mb-4">Our Values</h3>
                <ul className="text-body-base text-cool-gray-600 space-y-2">
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
      </div>
    </>
  );
};

export default About;