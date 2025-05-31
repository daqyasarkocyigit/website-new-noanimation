import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
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
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50"
        >
          <div className="container mx-auto px-4 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-grow pr-8">
                <p className="text-gray-600">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept", you consent to our use of cookies. Read our{' '}
                  <Link to="/cookie-policy" className="text-brand-red-600 hover:text-brand-red-700 underline">
                    Cookie Policy
                  </Link>{' '}
                  for more information.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleReject}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Reject
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-brand-red-600 text-white rounded-lg hover:bg-brand-red-700 transition-colors"
                >
                  Accept
                </button>
              </div>
              <button
                onClick={handleReject}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 md:hidden"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;