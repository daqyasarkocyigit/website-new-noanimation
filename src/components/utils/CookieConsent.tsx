import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
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
          initial={{ y: 20, x: -20, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          exit={{ y: 20, x: -20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 z-50 max-w-sm bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-red-100 flex items-center justify-center">
                  <Cookie className="w-4 h-4 text-brand-red-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Cookie Settings</h3>
              </div>
              <button
                onClick={handleReject}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              We use cookies to enhance your experience. By continuing, you agree to our{' '}
              <Link to="/cookie-policy" className="text-brand-red-600 hover:text-brand-red-700 underline font-medium">
                Cookie Policy
              </Link>
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleReject}
                className="flex-1 px-3 py-1.5 text-xs border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-3 py-1.5 text-xs bg-brand-red-600 text-white font-medium rounded-lg hover:bg-brand-red-700 transition-colors duration-200"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;