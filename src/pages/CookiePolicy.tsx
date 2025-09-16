import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/utils/AnimatedSection';
import { useEffect, useRef } from 'react';

const CookiePolicy: React.FC = () => {
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
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Effective Date: 05/31/2025</p>

            <section className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl font-semibold mb-4 text-blue-800">Cookie Management with Cookiebot</h2>
              <p className="text-blue-700 mb-4">
                We use Cookiebot, a professional cookie consent management platform, to handle all cookie-related 
                preferences on our website. This ensures full compliance with GDPR, CCPA, and other privacy regulations.
              </p>
              <p className="text-blue-700">
                You can manage your cookie preferences at any time by clicking on the cookie settings in the 
                consent banner or by visiting our <strong>Cookie Declaration</strong> page which is automatically 
                generated and updated by Cookiebot.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What are Cookies?</h2>
              <p className="text-gray-600">
                Cookies are small text files stored on your device (computer, tablet, or smartphone) when you 
                visit a website. They help websites remember your preferences and improve your browsing experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">
                Through Cookiebot's automated scanning and classification system, we use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Necessary Cookies:</strong> Enable basic website functionality and security features. 
                  These cookies are essential for the website to function and cannot be switched off.
                </li>
                <li>
                  <strong>Statistics Cookies:</strong> Collect anonymous information about how 
                  visitors use our website, such as which pages are visited most often. This helps us improve 
                  our site's performance and user experience.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your preferences (such as language or region) 
                  to enhance your experience on future visits.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to track visitors across websites to display 
                  relevant and engaging advertisements. These cookies are only set with your explicit consent.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookie Categories</h2>
              <p className="text-gray-600 mb-4">
                Cookiebot automatically scans and categorizes all cookies on our website. The current categories include:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Necessary Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are essential for the website to function. They include cookies for basic 
                    functionality, security, and the cookie consent system itself.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Statistics Cookies</h3>
                  <p className="text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously. This includes analytics from services like Google Analytics.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Preference Cookies</h3>
                  <p className="text-gray-600">
                    These cookies remember your choices and preferences to provide a more personalized experience 
                    when you return to our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Marketing Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are used to track visitors across websites with the intention of displaying 
                    advertisements that are relevant and engaging. These require your explicit consent.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookiebot and Third-Party Services</h2>
              <p className="text-gray-600">
                Cookiebot automatically detects and categorizes cookies from third-party services we use, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Google Analytics for website statistics</li>
                <li>Marketing and advertising platforms</li>
                <li>Social media integration cookies</li>
                <li>Content delivery network (CDN) cookies</li>
              </ul>
              <p className="text-gray-600 mt-4">
                All third-party cookies are subject to the same consent requirements and are blocked until 
                you provide appropriate consent through our Cookiebot consent banner.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-gray-600 mb-4">You have several options for managing cookies:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Cookie Consent Banner:</strong> Manage your preferences through our Cookiebot consent banner</li>
                <li><strong>Cookie Declaration:</strong> View detailed information about all cookies used on our site</li>
                <li><strong>Browser Settings:</strong> Control cookies through your browser's privacy settings</li>
                <li><strong>Withdraw Consent:</strong> Change your mind at any time by accessing cookie settings</li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Important:</strong> Disabling necessary cookies will prevent the website from functioning 
                  properly. Other cookie types can be disabled without affecting core functionality, though some 
                  features may not work as expected.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookie Declaration</h2>
              <p className="text-gray-600 mb-4">
                For a complete, up-to-date list of all cookies used on our website, including their purpose, 
                expiration, and origin, please visit our automatically generated Cookie Declaration page.
              </p>
              <p className="text-gray-600">
                This declaration is maintained by Cookiebot and is updated automatically whenever new cookies 
                are detected on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Consent Management</h2>
              <p className="text-gray-600 mb-4">
                Your consent choices are stored securely by Cookiebot and synchronized across all your devices. 
                This ensures a consistent experience regardless of how you access our website.
              </p>
              <p className="text-gray-600">
                You can withdraw or modify your consent at any time by:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Clicking the cookie settings link that appears on our website</li>
                <li>Clearing your browser's cookies (which will trigger a new consent request)</li>
                <li>Using the "Do Not Track" feature in your browser</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in our practices, 
                legal requirements, or Cookiebot's features. The latest version will always be available on 
                our website with an updated effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or need assistance with cookie settings, 
                please contact us at{' '}
                <a href="mailto:info@daqconsulting.com" className="text-brand-red-600 hover:text-brand-red-700">
                  info@daqconsulting.com
                </a>
              </p>
              <p className="text-gray-600">
                For technical questions about Cookiebot or cookie management, you can also visit{' '}
                <a href="https://www.cookiebot.com/en/help/" target="_blank" rel="noopener noreferrer" 
                   className="text-brand-red-600 hover:text-brand-red-700">
                  Cookiebot's Help Center
                </a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200 text-gray-600 text-sm">
              © 2025 DAQ Consulting LLC. All rights reserved.
              <br />
              Cookie management powered by{' '}
              <a href="https://www.cookiebot.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-brand-red-600 hover:text-brand-red-700">
                Cookiebot
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;