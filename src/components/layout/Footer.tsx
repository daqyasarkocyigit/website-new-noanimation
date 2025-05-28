import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-slate-blue-900 text-white overflow-hidden">
      {/* Arka plan efekti */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0"
        style={{
          background: 'radial-gradient(circle at 80% 20%, #4b78ff 0%, transparent 60%), radial-gradient(circle at 20% 80%, #ff3838 0%, transparent 60%)'
        }}
      />
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12">
          {/* Logo and About */}
          <div className="flex flex-col mb-8 lg:mb-0">
            <div className="flex items-center mb-5">
              <span className="flex items-center space-x-3 text-2xl font-extrabold tracking-tight transition-transform duration-200 hover:scale-105">
                <span className="text-brand-red-600 drop-shadow-sm">DAQ</span>
                <span className="w-1 h-6 bg-brand-red-600 rounded-full inline-block opacity-60"></span>
                <span className="text-gray-200 font-semibold tracking-wider">Consulting</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-xs">
              Empowering Data-Driven Decisions with AI & Cloud. We build modern, scalable data ecosystems tailored to your business.
            </p>
            <p className="text-gray-400 italic text-sm">
              AI & Cloud Transformation Partner
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col mb-8 lg:mb-0">
            <h3 className="text-base font-bold uppercase tracking-wider mb-5 text-brand-red-600">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/talent" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                  Hire Talent
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="flex flex-col mb-8 lg:mb-0">
            <h3 className="text-base font-bold uppercase tracking-wider mb-5 text-brand-red-600">Industries</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/industries/retail" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                  Retail & Consumer Goods
                </Link>
              </li>
              <li>
                <Link to="/industries/healthcare" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                  Healthcare & Life Sciences
                </Link>
              </li>
              <li>
                <Link to="/industries/finance" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link to="/industries/manufacturing" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/industries/technology" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/industries/energy" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                  Energy & Utilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="text-base font-bold uppercase tracking-wider mb-5 text-brand-red-600">Contact Us</h3>
            <div className="flex items-center space-x-3 mb-2">
              <Mail size={20} className="text-brand-red-600 flex-shrink-0" />
              <a href="mailto:info@daqconsulting.com" className="text-gray-400 hover:text-brand-red-600 transition-colors font-medium">
                info@daqconsulting.com
              </a>
            </div>
          </div>
        </div>

        {/* Alt bilgi ve animasyonlu çizgi */}
        <div className="mt-16 pt-10 border-t border-gray-800 text-center text-gray-500 text-sm relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-32 h-1 bg-gradient-to-r from-brand-red-600 via-white/40 to-slate-blue-500 rounded-full blur-sm animate-pulse-slow" />
          <p>
            &copy; {new Date().getFullYear()} <span className="font-bold text-brand-red-600">DAQ Consulting</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;