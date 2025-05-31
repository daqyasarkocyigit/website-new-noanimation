import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="flex items-center space-x-1 text-xl font-bold">
                <span className="text-brand-red-600">DAQ</span>
                <span className="inline-block w-0.5 h-5 bg-brand-red-600 rounded-full opacity-60 mx-1.5"></span>
                <span className="text-gray-800 font-semibold">Consulting</span>
              </span>
              <p className="text-xs text-gray-500 mt-1">
                AI & Data Engineering Experts
              </p>
            </Link>
            <p className="text-cool-gray-600 text-sm leading-relaxed">
              Empowering businesses with AI & Cloud solutions to drive innovation and growth through data-driven insights.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Hire Talent', path: '/talent' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name} className="group">
                  <Link 
                    to={item.path}
                    className="text-cool-gray-600 hover:text-brand-red-600 flex items-center transition-colors text-sm"
                  >
                    <ChevronRight size={14} className="mr-1 text-brand-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@daqconsulting.com" 
                className="text-cool-gray-600 hover:text-brand-red-600 flex items-center transition-colors text-sm"
              >
                <Mail size={16} className="mr-2 text-brand-red-500" />
                <span>info@daqconsulting.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cool-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="font-medium text-gray-700">DAQ Consulting</span>. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-cool-gray-500 hover:text-brand-red-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="text-cool-gray-500 hover:text-brand-red-600 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;