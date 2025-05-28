import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-slate-blue-900 text-white overflow-hidden">
      {/* Enhanced background effect with subtle animation */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          background: `
            radial-gradient(circle at 85% 15%, rgba(75, 120, 255, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 15% 85%, rgba(255, 56, 56, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)
          `
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-16">
          {/* Logo and About - Enhanced */}
          <div className="flex flex-col mb-8 md:mb-0">
            <Link to="/" className="group inline-block mb-6">
              <span className="flex items-center space-x-3 text-2xl font-extrabold tracking-tight transition-all duration-300 group-hover:scale-105">
                <span className="text-brand-red-600 drop-shadow-glow">DAQ</span>
                <span className="w-0.5 h-6 bg-gradient-to-b from-brand-red-500 to-brand-red-700 rounded-full inline-block opacity-80"></span>
                <span className="text-gray-100 font-semibold tracking-wider">Consulting</span>
              </span>
              <p className="text-sm text-gray-400 mt-1.5 transition-colors group-hover:text-brand-red-500">
                AI & Cloud Transformation Partner
              </p>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Empowering Data-Driven Decisions with AI & Cloud. Building modern, scalable data ecosystems tailored to your business needs.
            </p>
          </div>

          {/* Quick Links - Enhanced */}
          <div className="flex flex-col">
            <h3 className="text-base font-bold uppercase tracking-wider mb-6 text-white">
              <span className="border-b-2 border-brand-red-600 pb-1">Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Hire Talent', 'Contact'].map((item, index) => (
                <li key={index} className="group flex items-center">
                  <ChevronRight size={16} className="text-brand-red-600 opacity-0 -ml-4 group-hover:ml-0 group-hover:opacity-100 transition-all duration-300" />
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section - Enhanced */}
          <div className="flex flex-col">
            <h3 className="text-base font-bold uppercase tracking-wider mb-6 text-white">
              <span className="border-b-2 border-brand-red-600 pb-1">Get in Touch</span>
            </h3>
            <a href="mailto:info@daqconsulting.com" 
              className="inline-flex items-center space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
            >
              <Mail size={20} className="text-brand-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 group-hover:text-white transition-colors">info@daqconsulting.com</span>
            </a>
          </div>
        </div>

        {/* Enhanced footer bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="font-semibold text-white">DAQ Consulting</span>. 
              All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;