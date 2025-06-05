import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleServiceClick = (path: string) => {
    const [route, section] = path.split('#');
    navigate('/services');
    
    // Wait for navigation to complete
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    setServicesOpen(false);
    setIsOpen(false);
  };

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
            <span className="flex items-center space-x-1 md:space-x-3">
              <span className="text-lg md:text-2xl font-extrabold tracking-tight transition-transform duration-200 group-hover:scale-105">
                <span className="text-brand-red-600 drop-shadow-sm">DAQ</span>
                <span className="inline-block w-0.5 h-4 md:h-6 bg-brand-red-600 rounded-full opacity-60 mx-1.5 md:mx-2"></span>
                <span className="text-gray-800 font-semibold tracking-wider inline">Consulting</span>
              </span>
            </span>
            <span className="text-[9px] md:text-xs text-gray-500 mt-0.5 tracking-wide group-hover:text-brand-red-600 transition-colors duration-200">
              AI & Data Engineering Experts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-brand-red-600 font-medium group relative overflow-hidden transition-colors duration-200"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span className="relative z-10">Services</span>
                <ChevronDown size={16} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red-600 group-hover:w-full transition-all duration-300"></span>
              </button>

              <div 
                className="absolute left-0 mt-2 w-72 rounded-xl shadow-2xl bg-white transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 translate-y-2"
              >
                <div className="py-2">
                  {[
                    { 
                      path: '/services#data-engineering', 
                      label: 'Data Engineering',
                      description: 'Build robust data pipelines and infrastructure'
                    },
                    { 
                      path: '/services#data-visualization', 
                      label: 'Data Visualization',
                      description: 'Transform complex data into clear insights'
                    },
                    { 
                      path: '/services#business-intelligence', 
                      label: 'Business Intelligence & Analytics',
                      description: 'Drive decisions with powerful analytics'
                    },
                    { 
                      path: '/services#cloud-modernization', 
                      label: 'Cloud Modernization',
                      description: 'Scale your infrastructure for the future'
                    },
                    { 
                      path: '/services#ai-engineering', 
                      label: 'AI Engineering',
                      description: 'Implement cutting-edge AI solutions'
                    }
                  ].map((item, index) => (
                    <button 
                      key={index}
                      onClick={() => handleServiceClick(item.path)}
                      className="group/item flex flex-col w-full text-left px-5 py-3 hover:bg-gray-100 transition-all duration-200"
                    >
                      <span className="font-medium text-gray-800 group-hover/item:text-brand-red-600 transition-colors duration-200">
                        {item.label}
                      </span>
                      <span className="text-sm text-cool-gray-500 group-hover/item:text-cool-gray-600 transition-colors duration-200 mt-0.5">
                        {item.description}
                      </span>
                      <span className="block w-0 group-hover/item:w-full h-px bg-brand-red-400 transition-all duration-300 mt-2"></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <NavLink to="/talent" className={({ isActive }: { isActive: boolean }) => isActive ? "text-brand-red-600 font-semibold relative group transition-colors duration-200" : "text-gray-700 hover:text-brand-red-600 font-medium relative group transition-colors duration-200"}>
              {() => "Hire Talent"}
            </NavLink>
            <NavLink to="/about" className={({ isActive }: { isActive: boolean }) => isActive ? "text-brand-red-600 font-semibold relative group transition-colors duration-200" : "text-gray-700 hover:text-brand-red-600 font-medium relative group transition-colors duration-200"}>
              {() => "About"}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }: { isActive: boolean }) => isActive ? "text-brand-red-600 font-semibold relative group transition-colors duration-200" : "text-gray-700 hover:text-brand-red-600 font-medium relative group transition-colors duration-200"}>
              {({ isActive }: { isActive: boolean }) => {
                const underlineClassName = isActive 
                  ? "absolute bottom-0 left-0 w-full h-0.5 bg-brand-red-600 transition-all duration-300" 
                  : "absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red-600 group-hover:w-full transition-all duration-300";
                return (
                  <>
                    Contact
                    <span className={underlineClassName}></span>
                  </>
                );
              }}
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 rounded-lg hover:bg-gray-100/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={20} className="text-cool-gray-800" />
            ) : (
              <Menu size={20} className="text-cool-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          } overflow-hidden bg-white/95 backdrop-blur-md`}
        >
          <div className="px-4 py-2">
            <div className="relative">
              <button
                className="flex justify-between items-center w-full py-3 text-base font-medium text-gray-800"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ${
                  servicesOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                {[
                  { 
                    path: '/services#data-engineering', 
                    label: 'Data Engineering',
                    description: 'Build robust data pipelines and infrastructure'
                  },
                  { 
                    path: '/services#data-visualization', 
                    label: 'Data Visualization',
                    description: 'Transform complex data into clear insights'
                  },
                  { 
                    path: '/services#business-intelligence', 
                    label: 'Business Intelligence & Analytics',
                    description: 'Drive decisions with powerful analytics'
                  },
                  { 
                    path: '/services#cloud-modernization', 
                    label: 'Cloud Modernization',
                    description: 'Scale your infrastructure for the future'
                  },
                  { 
                    path: '/services#ai-engineering', 
                    label: 'AI Engineering',
                    description: 'Implement cutting-edge AI solutions'
                  }
                ].map((item, index) => (
                  <button
                    key={`mobile-service-${index}`}
                    onClick={() => handleServiceClick(item.path)}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-red-600 transition-colors duration-200"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="block text-xs text-cool-gray-500 mt-0.5">{item.description}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-2 mt-2">
            {[
              { to: '/talent', label: 'Hire Talent' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <NavLink
                key={`mobile-nav-${index}`}
                to={item.to}
                className={({ isActive }: { isActive: boolean }) => isActive ? "block w-full px-4 py-3 text-base font-semibold text-brand-red-600 transition-colors duration-200 bg-brand-red-50 rounded-md" : "block w-full px-4 py-3 text-base font-medium text-gray-800 hover:text-brand-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;