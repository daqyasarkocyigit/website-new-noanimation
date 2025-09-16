import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/utils/AnimatedSection';
import { useEffect, useRef } from 'react';

const Terms: React.FC = () => {
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
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Effective Date: 05/31/2025</p>

            <p className="text-gray-600 mb-8">
              Please read these Terms of Use ("Terms") carefully before using the website operated by 
              DAQ Consulting LLC ("DAQ Consulting", "we", "us", or "our").
            </p>

            <p className="text-gray-600 mb-8">
              By accessing or using our website, you agree to be bound by these Terms. If you do not 
              agree with any part of these Terms, please do not use our website.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Website Use</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  This website is provided for informational purposes regarding our services in data 
                  engineering, AI, and consulting.
                </li>
                <li>
                  You may use our website only for lawful purposes and in accordance with these Terms.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  All content on this website—including text, graphics, logos, images, and software—is 
                  the property of DAQ Consulting LLC or its licensors and is protected by intellectual 
                  property laws.
                </li>
                <li>
                  You may not reproduce, distribute, modify, or use any content from this site without 
                  our prior written permission.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
              <p className="text-gray-600 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the website in any way that violates any applicable laws or regulations.</li>
                <li>
                  Attempt to gain unauthorized access to any part of the website, or to the accounts 
                  of other users.
                </li>
                <li>Introduce any viruses, malware, or harmful code.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Links</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Our website may contain links to third-party websites. We are not responsible for 
                  the content, privacy practices, or terms of use of those websites.
                </li>
                <li>Access to any third-party site is at your own risk.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  The website and its content are provided "as is" without warranties of any kind, 
                  either express or implied.
                </li>
                <li>
                  DAQ Consulting does not warrant that the website will be error-free or uninterrupted, 
                  or that any defects will be corrected.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600">
                To the fullest extent permitted by law, DAQ Consulting LLC and its affiliates shall 
                not be liable for any damages arising from your use of, or inability to use, this 
                website or any content on it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Changes to These Terms</h2>
              <p className="text-gray-600">
                We reserve the right to update or modify these Terms at any time. Changes will be 
                effective immediately upon posting on this page. Your continued use of the website 
                constitutes acceptance of those changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p className="text-gray-600">
                These Terms shall be governed by and construed in accordance with the laws of the 
                State of Florida, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us at{' '}
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

export default Terms;
  )
}