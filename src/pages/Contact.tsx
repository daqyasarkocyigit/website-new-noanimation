import React from 'react';
import { Mail, User, Briefcase } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';
import ContactForm from '../components/contact/ContactForm';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Contact: React.FC = () => {
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
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-heading-1 mb-4">
                Contact <span className="text-brand-red-600">Us</span>
              </h1>
              <div className="w-16 h-1 bg-brand-red-600 rounded-full mb-4 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-body-base text-cool-gray-600 mb-4">
                We're here to help you unlock the power of your data. Reach out to us with your questions, projects, or talent needs.
              </p>
              <p className="text-body-base text-cool-gray-600">
                Our team of experts is ready to discuss how we can transform your data challenges into opportunities for growth and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <AnimatedSection delay={0.1}>
              <h2 className="text-heading-2 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-transparent rounded-xl hover:shadow-lg hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 border border-gray-200/20 hover:border-[#FF3333]/30">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red-100 text-brand-red-600 rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-heading-4 mb-2">General Inquiries</h3>
                    <p className="text-body-base text-gray-600 mb-2">For general questions and project discussions</p>
                    <a href="mailto:info@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700 transition-colors font-medium">
                      info@daqconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-transparent rounded-xl hover:shadow-lg hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 border border-gray-200/20 hover:border-[#FF3333]/30">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red-100 text-brand-red-600 rounded-xl flex items-center justify-center">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-heading-4 mb-2">Talent & Hiring</h3>
                    <p className="text-body-base text-gray-600 mb-2">Looking to hire top talent for your team?</p>
                    <a href="mailto:talent@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700 transition-colors font-medium">
                      talent@daqconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-transparent rounded-xl hover:shadow-lg hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 border border-gray-200/20 hover:border-[#FF3333]/30">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red-100 text-brand-red-600 rounded-xl flex items-center justify-center">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-heading-4 mb-2">Careers</h3>
                    <p className="text-body-base text-gray-600 mb-2">Interested in joining our team?</p>
                    <a href="mailto:careers@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700 transition-colors font-medium">
                      careers@daqconsulting.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Contact Form */}
            <AnimatedSection delay={0.3}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-heading-1 mb-6">Frequently Asked Questions</h2>
            <p className="text-body-large text-gray-600">
              Find quick answers to common questions about our services and processes.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[ 
              {
                q: "How do you typically structure your engagements?",
                a: "We start with a discovery phase to understand your needs, followed by a tailored proposal. Projects range from short consultations to long-term partnerships."
              },
              {
                q: "What industries do you specialize in?",
                a: "We have experience across healthcare, finance, retail, manufacturing, and more. Our data and AI methodologies are adaptable to most industries."
              },
              {
                q: "How long does a typical project take?",
                a: "Timelines vary based on scope. Small projects might take 4-8 weeks, while larger implementations could span 6-12 months. We provide detailed timelines in our proposals."
              },
              {
                q: "Do you offer ongoing support after project completion?",
                a: "Yes, we offer various support options, including managed services, training, and on-call support, tailored to your specific needs and requirements."
              },
              {
                q: "Can you work with our existing technology stack?",
                a: "Absolutely. We're experienced with a wide range of technologies and can integrate with your existing systems or recommend optimal solutions."
              },
              {
                q: "What makes DAQ Consulting different from other providers?",
                a: "Our combination of deep technical expertise, business acumen, and focus on measurable outcomes sets us apart. We're partners, not just vendors."
              }
            ].map((faq, index) => (
              <AnimatedSection 
                key={index} 
                delay={0.1 * index}
                className="bg-transparent p-6 rounded-xl hover:shadow-lg hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 border border-gray-200/20 hover:border-[#FF3333]/30"
              >
                <h3 className="text-heading-4 mb-3">{faq.q}</h3>
                <p className="text-body-base text-gray-600">{faq.a}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;