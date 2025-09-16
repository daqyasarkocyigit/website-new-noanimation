import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setServicesOpen(false);
        // Clear timeouts on resize
        if (hoverTimeout) clearTimeout(hoverTimeout);
        if (leaveTimeout) clearTimeout(leaveTimeout);
      }
    };

    // Click outside detection for services dropdown
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const servicesButton = document.querySelector('[aria-label="Services menu"]');
      const servicesDropdown = document.querySelector('[role="menu"][aria-label="Services submenu"]');
      
      if (servicesOpen && servicesButton && servicesDropdown) {
        if (!servicesButton.contains(target) && !servicesDropdown.contains(target)) {
          setServicesOpen(false);
          // Clear any pending timeouts
          if (hoverTimeout) clearTimeout(hoverTimeout);
          if (leaveTimeout) clearTimeout(leaveTimeout);
        }
      }
    };

    // Escape key detection
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && servicesOpen) {
        setServicesOpen(false);
        // Clear any pending timeouts
        if (hoverTimeout) clearTimeout(hoverTimeout);
        if (leaveTimeout) clearTimeout(leaveTimeout);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      // Cleanup timeouts
      if (hoverTimeout) clearTimeout(hoverTimeout);
      if (leaveTimeout) clearTimeout(leaveTimeout);
    };
  }, [servicesOpen, hoverTimeout, leaveTimeout]);

  // Enhanced mobile menu management
  useEffect(() => {
    if (isOpen) {
      // Prevent background scroll when menu is open
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Restore scroll position when menu closes
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
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
    // Clear any pending timeouts
    if (hoverTimeout) clearTimeout(hoverTimeout);
    if (leaveTimeout) clearTimeout(leaveTimeout);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setServicesOpen(false); // Close services when toggling main menu
    // Clear any pending timeouts
    if (hoverTimeout) clearTimeout(hoverTimeout);
    if (leaveTimeout) clearTimeout(leaveTimeout);
  };

  const handleServicesMouseEnter = () => {
    // Clear any pending leave timeout
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    
    // Set a delay before opening (300ms)
    if (!servicesOpen) {
      const timeout = setTimeout(() => {
        setServicesOpen(true);
      }, 300);
      setHoverTimeout(timeout);
    }
  };

  const handleServicesMouseLeave = () => {
    // Clear any pending enter timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    
    // Set a delay before closing (500ms)
    const timeout = setTimeout(() => {
      setServicesOpen(false);
    }, 500);
    setLeaveTimeout(timeout);
  };

  const toggleServices = () => {
    // For click events, toggle immediately
    setServicesOpen(!servicesOpen);
    // Clear any pending timeouts
    if (hoverTimeout) clearTimeout(hoverTimeout);
    if (leaveTimeout) clearTimeout(leaveTimeout);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group focus-ring rounded-lg p-2 -m-2 transition-all duration-200 hover:bg-white/5" 
            aria-label="DAQ Consulting - Navigate to homepage"
            onClick={closeMenu}
          >
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-gray-900 transition-all duration-300 group-hover:text-brand-red-600">
                <span className="text-brand-red-600">DAQ</span> <span className="font-light text-gray-600">Consulting</span>
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">
                AI & Data Engineering Experts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            <div 
              className="relative group"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
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
                className={`absolute left-0 mt-3 w-80 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 ${
                  servicesOpen 
                    ? 'opacity-100 visible transform translate-y-0' 
                    : 'opacity-0 invisible transform translate-y-2'
                } sm:w-80 w-screen sm:max-w-none max-w-[calc(100vw-2rem)] sm:left-0 -left-4 sm:rounded-2xl rounded-xl sm:mt-3 mt-2`}
                role="menu"
                aria-label="Services submenu"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(229, 231, 235, 0.8)'
                }}
              >
                {/* Services List */}
                <div className="py-2 sm:py-2 py-1">
                  {[
                    { 
                      path: '/services#data-engineering', 
                      label: 'Data Engineering',
                      description: 'Robust data pipelines'
                    },
                    { 
                      path: '/services#data-visualization', 
                      label: 'Data Visualization',
                      description: 'Visual data insights'
                    },
                    { 
                      path: '/services#business-intelligence', 
                      label: 'Business Intelligence & Analytics',
                      description: 'Data-driven decisions'
                    },
                    { 
                      path: '/services#cloud-modernization', 
                      label: 'Cloud Modernization',
                      description: 'Modern infrastructure'
                    },
                    { 
                      path: '/services#ai-engineering', 
                      label: 'AI Engineering',
                      description: 'AI-powered solutions'
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="px-2 sm:px-2 px-1"
                    >
                      <button 
                        onClick={() => handleServiceClick(item.path)}
                        className="group/item flex items-start w-full text-left px-4 py-3 sm:py-3 py-4 rounded-lg transition-all duration-200 hover:bg-brand-red-50 focus-ring touch-manipulation"
                        role="menuitem"
                      >
                        <div className="flex-1">
                         <div className="font-medium text-gray-900 group-hover/item:text-brand-red-600 transition-colors duration-200 mb-1 sm:text-base text-base">
                            {item.label}
                          </div>
                         <div className="text-sm sm:text-sm text-xs text-gray-600 group-hover/item:text-gray-700 transition-colors duration-200 leading-tight">
                            {item.description}
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {[
              { to: '/talent', label: 'Hire Talent' },
              { to: '/about', label: 'About' },
             { to: '/case-studies', label: 'Case Studies' },
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

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-lg hover:bg-gray-100/50 transition-colors focus-ring tap-highlight-none touch-manipulation"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 top-3' : 'top-1'
                }`}
              />
              <span 
                className={`absolute block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out top-3 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`absolute block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 top-3' : 'top-5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 top-0 transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible pointer-events-none'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div 
            className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white/10 backdrop-blur-md shadow-2xl border-l border-white/20 transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Header - Simplified without duplicate close button */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <span className="text-lg font-semibold text-white">Menu</span>
              {/* The close functionality is handled by the main hamburger button */}
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-full overflow-y-auto pb-20">
              <div className="px-4 py-2">
                {/* Services Section */}
                <div className="relative">
                  <button
                    className="flex justify-between items-center w-full py-4 text-base font-medium text-gray-800 focus-ring rounded-lg tap-highlight-none touch-manipulation"
                    onClick={toggleServices}
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div
                    id="mobile-services"
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      servicesOpen 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 border-l-2 border-gray-100">
                      {[
                        { 
                          path: '/services#data-engineering', 
                          label: 'Data Engineering',
                          description: 'Build robust data pipelines'
                        },
                        { 
                          path: '/services#data-visualization', 
                          label: 'Data Visualization',
                          description: 'Transform data into insights'
                        },
                        { 
                          path: '/services#business-intelligence', 
                          label: 'Business Intelligence',
                          description: 'Drive data-driven decisions'
                        },
                        { 
                          path: '/services#cloud-modernization', 
                          label: 'Cloud Modernization',
                          description: 'Scale your infrastructure'
                        },
                        { 
                          path: '/services#ai-engineering', 
                          label: 'AI Engineering',
                          description: 'Implement AI solutions'
                        }
                      ].map((item, index) => (
                        <button
                          key={`mobile-service-${index}`}
                          onClick={() => handleServiceClick(item.path)}
                          className="block w-full text-left py-3 px-3 text-gray-200 hover:bg-white/10 hover:text-brand-red-600 transition-colors duration-200 focus-ring rounded-lg tap-highlight-none touch-manipulation"
                        >
                          <div className="font-medium text-white">{item.label}</div>
                          <div className="text-sm text-gray-300 mt-0.5">{item.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Navigation Links */}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  {[
                    { to: '/talent', label: 'Hire Talent' },
                    { to: '/about', label: 'About' },
                   { to: '/case-studies', label: 'Case Studies' },
                    { to: '/contact', label: 'Contact' }
                  ].map((item, index) => (
                    <NavLink
                      key={`mobile-nav-${index}`}
                      to={item.to}
                      className={({ isActive }) => 
                        `block w-full px-3 py-4 text-base font-medium rounded-lg transition-colors duration-200 focus-ring tap-highlight-none touch-manipulation min-h-[48px] flex items-center ${
                          isActive 
                            ? 'text-brand-red-600 font-semibold bg-brand-red-50/10' 
                            : 'text-white hover:text-brand-red-600 hover:bg-white/10'
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;