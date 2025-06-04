import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="bg-gradient-to-b from-white to-gray-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-200">
            <div className="container mx-auto px-4 py-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-red-100 flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-brand-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Cookie Settings</h3>
                      <p className="text-sm text-gray-500">Manage your cookie preferences</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex-grow">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                        By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                        <Link to="/cookie-policy" className="text-brand-red-600 hover:text-brand-red-700 underline font-medium">
                          Cookie Policy
                        </Link>{' '}
                        for more information.
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 md:flex-shrink-0 w-full md:w-auto">
                    <button
                      onClick={handleReject}
                      className="flex-1 md:flex-none px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAccept}
                      className="flex-1 md:flex-none px-6 py-2.5 bg-brand-red-600 text-white font-medium rounded-lg hover:bg-brand-red-700 transition-colors duration-200 shadow-sm hover:shadow"
                    >
                      Accept All
                    </button>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={handleReject}
                    className="absolute top-2 right-2 md:hidden p-2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;