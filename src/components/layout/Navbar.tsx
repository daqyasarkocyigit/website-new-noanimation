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
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('.mobile-nav-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleServiceClick = (path: string) => {
    const [route, section] = path.split('#');
    navigate('/services');
    
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    setServicesOpen(false);
    setIsOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <div className="container mobile-nav-container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex flex-col items-start group focus-ring rounded-lg p-2 -m-2" 
            aria-label="DAQ Consulting Home"
            onClick={closeMenu}
          >
            <span className="flex items-center space-x-1 md:space-x-3">
              <span className="text-lg md:text-2xl font-extrabold tracking-tight transition-transform duration-200 group-hover:scale-105">
                <span className="text-brand-red-600 drop-shadow-sm">DAQ</span>
                <span className="inline-block w-0.5 h-4 md:h-6 bg-brand-red-600 rounded-full opacity-60 mx-1.5 md:mx-2"></span>
                <span className="text-gray-800 font-semibold tracking-wider">Consulting</span>
              </span>
            </span>
            <span className="text-[9px] md:text-xs text-gray-500 mt-0.5 tracking-wide group-hover:text-brand-red-600 transition-colors duration-200">
              AI & Data Engineering Experts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-brand-red-600 font-medium group relative overflow-hidden transition-colors duration-200 focus-ring rounded-lg px-3 py-2"
                onClick={() => setServicesOpen(!servicesOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setServicesOpen(!servicesOpen);
                  }
                }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                <span className="relative z-10">Services</span>
                <ChevronDown 
                  size={16} 
                  className={`ml-1 transition-transform duration-300 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`} 
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red-600 group-hover:w-full transition-all duration-300"></span>
              </button>

              <div 
                className={`absolute left-0 mt-2 w-72 rounded-xl shadow-2xl bg-white transition-all duration-300 ${
                  servicesOpen 
                    ? 'opacity-100 visible transform translate-y-0' 
                    : 'opacity-0 invisible transform translate-y-2'
                }`}
                role="menu"
                aria-label="Services submenu"
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
                      className="group/item flex flex-col w-full text-left px-5 py-3 hover:bg-gray-100 transition-all duration-200 focus-ring"
                      role="menuitem"
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

            {[
              { to: '/talent', label: 'Hire Talent' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <NavLink 
                key={index}
                to={item.to} 
                className={({ isActive }) => 
                  `nav-link focus-ring rounded-lg px-3 py-2 ${
                    isActive 
                      ? 'text-brand-red-600 font-semibold' 
                      : 'text-gray-700 hover:text-brand-red-600 font-medium'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-red-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden touch-target rounded-lg hover:bg-gray-100/50 transition-colors focus-ring"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
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
          id="mobile-menu"
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
            isOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden bg-white/95 backdrop-blur-md border-b border-gray-200`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-2 safe-bottom">
            {/* Services Section */}
            <div className="relative">
              <button
                className="flex justify-between items-center w-full py-3 text-base font-medium text-gray-800 focus-ring rounded-lg"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-controls="mobile-services"
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
                id="mobile-services"
                className={`transition-all duration-300 ${
                  servicesOpen 
                    ? 'max-h-[400px] opacity-100' 
                    : 'max-h-0 opacity-0'
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
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-red-600 transition-colors duration-200 focus-ring rounded-lg"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="block text-xs text-cool-gray-500 mt-0.5">{item.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Navigation Links */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              {[
                { to: '/talent', label: 'Hire Talent' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' }
              ].map((item, index) => (
                <NavLink
                  key={`mobile-nav-${index}`}
                  to={item.to}
                  className={({ isActive }) => 
                    `block w-full px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 focus-ring ${
                      isActive 
                        ? 'text-brand-red-600 font-semibold bg-brand-red-50' 
                        : 'text-gray-800 hover:text-brand-red-600 hover:bg-gray-50'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;