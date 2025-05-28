import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group" aria-label="DAQ Consulting Home">
            <span className="flex items-center space-x-3 text-2xl font-extrabold tracking-tight transition-transform duration-200 group-hover:scale-105">
              <span className="text-brand-red-600 drop-shadow-sm">DAQ</span>
              <span className="w-1 h-6 bg-brand-red-600 rounded-full inline-block opacity-60"></span>
              <span className="text-gray-800 font-semibold tracking-wider">Consulting</span>
            </span>
            <span className="text-xs text-gray-500 mt-1 tracking-wide group-hover:text-brand-red-600 transition-colors duration-200">
              AI & Data Engineering Experts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center nav-link"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services <ChevronDown size={16} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div 
                className="absolute left-0 mt-2 w-64 rounded-xl overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 translate-y-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,56,56,0.03) 0%, rgba(75,120,255,0.03) 50%, rgba(255,56,56,0.03) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="bg-white/40 backdrop-blur-sm">
                  {[
                    { path: '/services#data-engineering', label: 'Data Engineering' },
                    { path: '/services#data-visualization', label: 'Data Visualization' },
                    { path: '/services#business-intelligence', label: 'Business Intelligence & Analytics' },
                    { path: '/services#cloud-modernization', label: 'Cloud Modernization' },
                    { path: '/services#ai-engineering', label: 'AI Engineering' }
                  ].map((item, index) => (
                    <Link 
                      key={index}
                      to={item.path} 
                      className="block px-4 py-3 text-cool-gray-800 hover:bg-brand-red-50/50 hover:text-brand-red-600 transition-colors duration-200 border-l-2 border-transparent hover:border-brand-red-500"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <NavLink to="/talent" className="nav-link">
              Hire Talent
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </nav>

          {/* CTA Button */}
          {/* 
          <Link 
            to="/contact" 
            className="hidden md:block btn-primary"
            role="button"
            aria-label="Get Started"
          >
            Get Started
          </Link>
          */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} className="text-cool-gray-800" />
            ) : (
              <Menu size={24} className="text-cool-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}
          style={{
            background: 'linear-gradient(135deg, rgba(255,56,56,0.03) 0%, rgba(75,120,255,0.03) 50%, rgba(255,56,56,0.03) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="px-4 py-2 bg-white/40 backdrop-blur-sm">
            <button
              className="flex justify-between items-center w-full py-3 border-b border-gray-200/50"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ${
                servicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              {[
                { path: '/services#data-engineering', label: 'Data Engineering' },
                { path: '/services#data-visualization', label: 'Data Visualization' },
                { path: '/services#business-intelligence', label: 'Business Intelligence & Analytics' },
                { path: '/services#cloud-modernization', label: 'Cloud Modernization' },
                { path: '/services#ai-engineering', label: 'AI Engineering' }
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block py-3 px-4 text-cool-gray-700 hover:text-brand-red-600 hover:bg-brand-red-50/50 transition-colors border-l-2 border-transparent hover:border-brand-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <NavLink
              to="/talent"
              className="block py-3 border-b border-gray-200/50"
              onClick={() => setIsOpen(false)}
            >
              Hire Talent
            </NavLink>
            <NavLink
              to="/about"
              className="block py-3 border-b border-gray-200/50"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-3"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <Link
              to="/contact"
              className="block my-4 btn-primary text-center"
              onClick={() => setIsOpen(false)}
              role="button"
              aria-label="Get Started"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;