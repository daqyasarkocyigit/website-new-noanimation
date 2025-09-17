import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                <span className="text-red-600">DAQ</span> Consulting
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              AI & Data Engineering Experts helping businesses unlock the power of their data.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/talent" className="block text-gray-400 hover:text-white transition-colors">
                Hire Talent
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center text-gray-400">
              <Mail size={16} className="mr-2" />
              <a href="mailto:info@daqconsulting.com" className="hover:text-white transition-colors">
                info@daqconsulting.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} DAQ Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;