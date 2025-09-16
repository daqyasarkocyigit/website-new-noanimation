import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/utils/AnimatedSection';
import { useEffect, useRef } from 'react';

const Privacy: React.FC = () => {
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
      <div className="relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Effective Date: 05/31/2025</p>
            
            <p className="text-gray-600 mb-8">
              PLEASE READ THIS PRIVACY POLICY CAREFULLY BEFORE USING OUR WEBSITE.
            </p>

            <p className="text-gray-600 mb-8">
              DAQ Consulting LLC ("DAQ Consulting", "Company", "we", "our", or "us") is committed to protecting 
              the confidentiality and privacy of personal information entrusted to us. This Privacy Policy explains 
              how we collect, use, store, and protect your personal information when you interact with our website 
              or our services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We may collect and process the following types of information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Such as your name, company, email address, phone number, 
                  and any details you voluntarily provide through our contact forms or communications.
                </li>
                <li>
                  <strong>Technical and Usage Information:</strong> Including IP address, browser type, device 
                  information, access times, and pages viewed, collected automatically via cookies and analytics tools.
                </li>
                <li>
                  <strong>Employment Information:</strong> If you apply for a job or submit your resume, we may 
                  collect employment and educational history.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use your information only as permitted by law and for legitimate business purposes, including to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Respond to your inquiries or service requests.</li>
                <li>Deliver data engineering, AI, and consulting services.</li>
                <li>Send updates, newsletters, or marketing materials (if you opt-in).</li>
                <li>Improve our website, services, and user experience.</li>
                <li>Comply with legal obligations or protect the security of our services.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Legal Grounds for Processing</h2>
              <p className="text-gray-600 mb-4">
                We process your personal information based on one or more of the following legal grounds:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Your explicit consent.</li>
                <li>Performance of a contract.</li>
                <li>Compliance with legal obligations.</li>
                <li>Legitimate business interests that do not override your rights.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                DAQ Consulting does <strong>not</strong> sell or rent your personal information.
                We may share your data with trusted service providers (such as cloud hosting, analytics, 
                or communication platforms) <strong>solely</strong> for business operations and only under 
                confidentiality agreements.
              </p>
              <p className="text-gray-600">
                We may also disclose your information if required by law, regulation, or to protect our legal rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. International Transfers</h2>
              <p className="text-gray-600">
                Your personal information may be transferred to and maintained on servers located outside of your 
                state, province, country, or other governmental jurisdiction, where data protection laws may differ. 
                We take reasonable steps to ensure your data is handled securely and in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Cookies & Tracking</h2>
              <p className="text-gray-600">
                Our website uses cookies and similar technologies to improve your experience and analyze website 
                traffic. You can adjust your browser settings to manage or disable cookies; however, this may 
                impact site functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
              <p className="text-gray-600">
                We implement reasonable security measures (such as SSL encryption, secure servers, access controls) 
                to protect your data from unauthorized access, disclosure, alteration, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not intended for children under 13. We do not knowingly collect personal 
                information from children. If you believe a child has provided us with personal information, 
                please contact us for removal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
              <p className="text-gray-600 mb-4">Depending on your jurisdiction, you may have rights to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access, correct, or delete your personal information.</li>
                <li>Withdraw consent or object to processing.</li>
                <li>Request data portability.</li>
                <li>Restrict processing of your information.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:info@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700">
                  info@daqconsulting.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Links to Other Websites</h2>
              <p className="text-gray-600">
                Our website may contain links to third-party sites. We are not responsible for their privacy 
                practices. Please review their privacy policies before providing any information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Policy Updates</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. The latest version will always be available 
                on our website. Your continued use of our website constitutes your acceptance of any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions or concerns about our Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600">
                <strong>DAQ Consulting LLC</strong><br />
                Email:{' '}
                <a href="mailto:info@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700">
                  info@daqconsulting.com
                </a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200 text-gray-600 text-sm">
              © 2025 DAQ Consulting LLC. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
  )
}
  )
}