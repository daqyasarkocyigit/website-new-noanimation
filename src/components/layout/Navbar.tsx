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
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-brand-red-600">DAQ Consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <div className="relative group">
              <button 
                className="flex items-center nav-link"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services <ChevronDown size={16} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 translate-y-2 shadow-lg border border-gray-100/20">
                <Link 
                  to="/services#data-engineering" 
                  className="block px-4 py-3 hover:bg-brand-red-50 hover:text-brand-red-600 transition-colors duration-200 border-l-2 border-transparent hover:border-brand-red-500"
                >
                  Data Engineering
                </Link>
                <Link 
                  to="/services#data-visualization" 
                  className="block px-4 py-3 hover:bg-brand-red-50 hover:text-brand-red-600 transition-colors duration-200 border-l-2 border-transparent hover:border-brand-red-500"
                >
                  Data Visualization
                </Link>
                <Link 
                  to="/services#business-intelligence" 
                  className="block px-4 py-3 hover:bg-brand-red-50 hover:text-brand-red-600 transition-colors duration-200 border-l-2 border-transparent hover:border-brand-red-500"
                >
                  Business Intelligence & Analytics
                </Link>
                <Link 
                  to="/services#cloud-modernization" 
                  className="block px-4 py-3 hover:bg-brand-red-50 hover:text-brand-red-600 transition-colors duration-200 border-l-2 border-transparent hover:border-brand-red-500"
                >
                  Cloud Modernization
                </Link>
                <Link 
                  to="/services#ai-engineering" 
                  className="block px-4 py-3 hover:bg-brand-red-50 hover:text-brand-red-600 transition-colors duration-200 border-l-2 border-transparent hover:border-brand-red-500"
                >
                  AI Engineering
                </Link>
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
          <Link 
            to="/contact" 
            className="hidden md:block btn-primary"
            role="button"
            aria-label="Get Started"
          >
            Get Started
          </Link>

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
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}
        >
          <div className="px-4 py-2">
            <NavLink
              to="/"
              className="block py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <button
              className="flex justify-between items-center w-full py-3 border-b border-gray-100"
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
              } overflow-hidden bg-gray-50/50`}
            >
              <Link
                to="/services#data-engineering"
                className="block py-3 px-4 text-cool-gray-700 hover:text-brand-red-600 hover:bg-brand-red-50 transition-colors border-l-2 border-transparent hover:border-brand-red-500"
                onClick={() => setIsOpen(false)}
              >
                Data Engineering
              </Link>
              <Link
                to="/services#data-visualization"
                className="block py-3 px-4 text-cool-gray-700 hover:text-brand-red-600 hover:bg-brand-red-50 transition-colors border-l-2 border-transparent hover:border-brand-red-500"
                onClick={() => setIsOpen(false)}
              >
                Data Visualization
              </Link>
              <Link
                to="/services#business-intelligence"
                className="block py-3 px-4 text-cool-gray-700 hover:text-brand-red-600 hover:bg-brand-red-50 transition-colors border-l-2 border-transparent hover:border-brand-red-500"
                onClick={() => setIsOpen(false)}
              >
                Business Intelligence & Analytics
              </Link>
              <Link
                to="/services#cloud-modernization"
                className="block py-3 px-4 text-cool-gray-700 hover:text-brand-red-600 hover:bg-brand-red-50 transition-colors border-l-2 border-transparent hover:border-brand-red-500"
                onClick={() => setIsOpen(false)}
              >
                Cloud Modernization
              </Link>
              <Link
                to="/services#ai-engineering"
                className="block py-3 px-4 text-cool-gray-700 hover:text-brand-red-600 hover:bg-brand-red-50 transition-colors border-l-2 border-transparent hover:border-brand-red-500"
                onClick={() => setIsOpen(false)}
              >
                AI Engineering
              </Link>
            </div>
            <NavLink
              to="/talent"
              className="block py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Hire Talent
            </NavLink>
            <NavLink
              to="/about"
              className="block py-3 border-b border-gray-100"
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