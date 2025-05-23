import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-red-600">DAQ Consulting</h3>
            <p className="text-gray-400">
              Empowering Data-Driven Decisions with AI & Cloud. We build modern, scalable data ecosystems tailored to your business.
            </p>
            <p className="text-gray-500 italic">
              AI & Cloud Transformation Partner
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-gray-400 hover:text-electric-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-electric-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-electric-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/talent" className="text-gray-400 hover:text-electric-blue-400 transition-colors">
                  Hire Talent
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-electric-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Industries</h3>
            <ul className="space-y-2.5">
              <li className="text-gray-400">Retail & Consumer Goods</li>
              <li className="text-gray-400">Healthcare & Life Sciences</li>
              <li className="text-gray-400">Financial Services</li>
              <li className="text-gray-400">Manufacturing</li>
              <li className="text-gray-400">Technology</li>
              <li className="text-gray-400">Energy & Utilities</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-electric-blue-400 flex-shrink-0" />
              <a href="mailto:info@daqconsulting.com" className="text-gray-400 hover:text-electric-blue-400 transition-colors">
                info@daqconsulting.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DAQ Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;