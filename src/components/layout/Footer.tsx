import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100" role="contentinfo">
      <div className="container section-padding">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4 focus-ring rounded-lg">
              <span className="flex flex-col items-start">
                <span className="flex items-center text-xl">
                  <span className="font-black" style={{ fontFamily: 'Montserrat, sans-serif', color: '#E53935', fontWeight: '900' }}>DAQ</span>
                  <span className="font-light ml-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#9E9E9E', fontWeight: '300' }}>Consulting</span>
                </span>
                <span className="text-xs mt-1 font-normal" style={{ fontFamily: 'Montserrat, sans-serif', color: '#777777', fontWeight: '400' }}>
                  AI & Data Engineering Experts
                </span>
              </span>
            </Link>
            <p className="text-cool-gray-600 text-sm leading-relaxed max-w-sm">
              Empowering businesses with AI & Cloud solutions to drive innovation and growth through data-driven insights.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2" role="list">
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
                    className="text-cool-gray-600 hover:text-brand-red-600 flex items-center transition-colors text-sm focus-ring rounded px-2 py-1 -mx-2"
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
                className="text-cool-gray-600 hover:text-brand-red-600 flex items-center transition-colors text-sm focus-ring rounded px-2 py-1 -mx-2"
                aria-label="Send email to info@daqconsulting.com"
              >
                <Mail size={16} className="mr-2 text-brand-red-500 flex-shrink-0" />
                <span>info@daqconsulting.com</span>
              </a>
              
              <div className="pt-2">
                <p className="text-xs text-gray-500 mb-2">Business Hours:</p>
                <p className="text-sm text-cool-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cool-gray-500 text-sm text-center sm:text-left">
            © {currentYear} <span className="font-medium text-gray-700">DAQ Consulting</span>. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link 
              to="/privacy" 
              className="text-cool-gray-500 hover:text-brand-red-600 text-sm transition-colors focus-ring rounded px-2 py-1"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-cool-gray-500 hover:text-brand-red-600 text-sm transition-colors focus-ring rounded px-2 py-1"
            >
              Terms of Use
            </Link>
            <Link 
              to="/cookie-policy" 
              className="text-cool-gray-500 hover:text-brand-red-600 text-sm transition-colors focus-ring rounded px-2 py-1"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
                <span className="inline-block w-0.5 h-5 bg-brand-red-600 rounded-full opacity-60 mx-1.5"></span>
                <span className="text-gray-800 font-semibold">Consulting</span>
              </span>
              <p className="text-xs text-gray-500 mt-1">
                AI & Data Engineering Experts
              </p>
            </Link>
            <p className="text-cool-gray-600 text-sm leading-relaxed max-w-sm">
              Empowering businesses with AI & Cloud solutions to drive innovation and growth through data-driven insights.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2" role="list">
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
                    className="text-cool-gray-600 hover:text-brand-red-600 flex items-center transition-colors text-sm focus-ring rounded px-2 py-1 -mx-2"
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
                className="text-cool-gray-600 hover:text-brand-red-600 flex items-center transition-colors text-sm focus-ring rounded px-2 py-1 -mx-2"
                aria-label="Send email to info@daqconsulting.com"
              >
                <Mail size={16} className="mr-2 text-brand-red-500 flex-shrink-0" />
                <span>info@daqconsulting.com</span>
              </a>
              
              <div className="pt-2">
                <p className="text-xs text-gray-500 mb-2">Business Hours:</p>
                <p className="text-sm text-cool-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cool-gray-500 text-sm text-center sm:text-left">
            © {currentYear} <span className="font-medium text-gray-700">DAQ Consulting</span>. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link 
              to="/privacy" 
              className="text-cool-gray-500 hover:text-brand-red-600 text-sm transition-colors focus-ring rounded px-2 py-1"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-cool-gray-500 hover:text-brand-red-600 text-sm transition-colors focus-ring rounded px-2 py-1"
            >
              Terms of Use
            </Link>
            <Link 
              to="/cookie-policy" 
              className="text-cool-gray-500 hover:text-brand-red-600 text-sm transition-colors focus-ring rounded px-2 py-1"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;